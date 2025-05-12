import joblib
from utils import clean_text

# Load trained models and vectorizer
nb_model = joblib.load('naive_bayes_model.pkl')
svm_model = joblib.load('svm_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')

# Label map
label_map = {0: 'Ham', 1: 'Spam'}

# Input from user
print("\n📧 Email Spam Classifier (Naïve Bayes & SVM)\n")
email_input = input("Enter the email message to classify:\n> ")

# Preprocess
cleaned = clean_text(email_input)
vectorized = vectorizer.transform([cleaned])

# Predictions
nb_pred = nb_model.predict(vectorized)[0]
svm_pred = svm_model.predict(vectorized)[0]

# Output
print("\n--- Classification Result ---")
print("Naïve Bayes Prediction:", label_map[nb_pred])
print("SVM Prediction        :", label_map[svm_pred])
