# spam_classifier.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.metrics import classification_report, accuracy_score, f1_score, confusion_matrix, ConfusionMatrixDisplay
from sklearn.metrics import roc_auc_score, roc_curve
import matplotlib.pyplot as plt
import joblib

from utils import clean_text

# 1. Load data
df = pd.read_csv('spam.csv', encoding='latin-1')[['v1','v2']]
df.columns = ['label','message']

# 2. Preprocess
df['cleaned'] = df['message'].apply(clean_text)

# 3. Vectorize
vect = TfidfVectorizer()
X = vect.fit_transform(df['cleaned'])
y = df['label'].map({'ham':0, 'spam':1})

# 4. Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 5. Train Naïve Bayes
nb = MultinomialNB(alpha=0.5)
nb.fit(X_train, y_train)
y_pred_nb = nb.predict(X_test)

# 6. Train SVM
svm = SVC(kernel='linear', C=1.0, probability=True)
svm.fit(X_train, y_train)
y_pred_svm = svm.predict(X_test)

# 7. Save models
joblib.dump(nb, 'naive_bayes_model.pkl')
joblib.dump(svm, 'svm_model.pkl')
joblib.dump(vect, 'tfidf_vectorizer.pkl')

# 8. Evaluate
print("=== Naïve Bayes ===")
print("Accuracy:", accuracy_score(y_test, y_pred_nb))
print("F1 Score:", f1_score(y_test, y_pred_nb))
print(classification_report(y_test, y_pred_nb))

print("=== SVM ===")
print("Accuracy:", accuracy_score(y_test, y_pred_svm))
print("F1 Score:", f1_score(y_test, y_pred_svm))
print(classification_report(y_test, y_pred_svm))

# 9. Plot confusion matrices
cm_nb = confusion_matrix(y_test, y_pred_nb)
ConfusionMatrixDisplay(cm_nb, display_labels=['Ham', 'Spam']).plot(cmap='Blues')
plt.title("Naïve Bayes Confusion Matrix")
plt.show()

cm_svm = confusion_matrix(y_test, y_pred_svm)
ConfusionMatrixDisplay(cm_svm, display_labels=['Ham', 'Spam']).plot(cmap='Oranges')
plt.title("SVM Confusion Matrix")
plt.show()

# 10. ROC AUC Curve (optional)
y_score_svm = svm.predict_proba(X_test)[:,1]
fpr, tpr, _ = roc_curve(y_test, y_score_svm)
plt.plot(fpr, tpr, label="SVM (AUC = {:.2f})".format(roc_auc_score(y_test, y_score_svm)))
plt.plot([0,1], [0,1], 'k--')
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ROC Curve - SVM")
plt.legend()
plt.show()
