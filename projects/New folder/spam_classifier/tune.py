# tune.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from utils import clean_text

# Load & preprocess
df = pd.read_csv('spam.csv', encoding='latin-1')[['v1','v2']]
df.columns = ['label','message']
df['cleaned'] = df['message'].apply(clean_text)

# Split
X_train, X_test, y_train, y_test = train_test_split(
    df['cleaned'], df['label'].map({'ham':0,'spam':1}),
    test_size=0.2, random_state=42, stratify=df['label']
)

# Vectorize
vect = TfidfVectorizer()
X_tr = vect.fit_transform(X_train)
X_te = vect.transform(X_test)

# Grid search NB
gs_nb = GridSearchCV(MultinomialNB(), {'alpha':[0.1,0.5,1.0]}, cv=5, scoring='f1')
gs_nb.fit(X_tr, y_train)
print("Best NB Params:", gs_nb.best_params_)
print("Best NB F1 Score:", gs_nb.best_score_)

# Grid search SVM
gs_svm = GridSearchCV(SVC(kernel='linear'), {'C':[0.1,1,10]}, cv=5, scoring='f1')
gs_svm.fit(X_tr, y_train)
print("Best SVM Params:", gs_svm.best_params_)
print("Best SVM F1 Score:", gs_svm.best_score_)
