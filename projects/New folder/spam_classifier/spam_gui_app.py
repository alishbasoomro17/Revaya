import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import joblib
from sklearn.metrics import roc_curve, auc, confusion_matrix, ConfusionMatrixDisplay
from utils import clean_text
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Page config
st.set_page_config(page_title="Spam Classifier GUI", layout="wide")
st.title(" Email Spam Detection (Naive Bayes & SVM)")

uploaded_file = st.file_uploader("Upload your dataset (.csv format)", type=["csv"])

if uploaded_file:
    df = pd.read_csv(uploaded_file, encoding='latin-1')[['v1', 'v2']]
    df.columns = ['label', 'message']
    df['cleaned'] = df['message'].apply(clean_text)
    df['label_num'] = df['label'].map({'ham': 0, 'spam': 1})

    st.subheader("📊 Dataset Preview")
    st.write(df.head())

    # Vectorization
    vect = TfidfVectorizer()
    X = vect.fit_transform(df['cleaned'])
    y = df['label_num']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    # Train models
    nb = MultinomialNB()
    nb.fit(X_train, y_train)
    svm = SVC(kernel='linear', probability=True)
    svm.fit(X_train, y_train)

    # Predict
    y_pred_nb = nb.predict(X_test)
    y_pred_svm = svm.predict(X_test)

    # Evaluation
    st.subheader("📈 Model Evaluation")
    col1, col2 = st.columns(2)

    with col1:
        st.markdown("### Naïve Bayes Confusion Matrix")
        cm_nb = confusion_matrix(y_test, y_pred_nb)
        disp_nb = ConfusionMatrixDisplay(cm_nb, display_labels=['Ham', 'Spam'])
        fig, ax = plt.subplots()
        disp_nb.plot(ax=ax, cmap='Blues')
        st.pyplot(fig)

    with col2:
        st.markdown("### SVM Confusion Matrix")
        cm_svm = confusion_matrix(y_test, y_pred_svm)
        disp_svm = ConfusionMatrixDisplay(cm_svm, display_labels=['Ham', 'Spam'])
        fig2, ax2 = plt.subplots()
        disp_svm.plot(ax=ax2, cmap='Oranges')
        st.pyplot(fig2)

    # ROC Curve
    st.subheader("📉 ROC Curves")
    nb_probs = nb.predict_proba(X_test)[:, 1]
    svm_probs = svm.predict_proba(X_test)[:, 1]

    fpr_nb, tpr_nb, _ = roc_curve(y_test, nb_probs)
    fpr_svm, tpr_svm, _ = roc_curve(y_test, svm_probs)

    roc_auc_nb = auc(fpr_nb, tpr_nb)
    roc_auc_svm = auc(fpr_svm, tpr_svm)

    fig3, ax3 = plt.subplots()
    ax3.plot(fpr_nb, tpr_nb, label=f'Naïve Bayes (AUC = {roc_auc_nb:.2f})')
    ax3.plot(fpr_svm, tpr_svm, label=f'SVM (AUC = {roc_auc_svm:.2f})')
    ax3.plot([0, 1], [0, 1], linestyle='--', color='gray')
    ax3.set_xlabel('False Positive Rate')
    ax3.set_ylabel('True Positive Rate')
    ax3.set_title('ROC Curve')
    ax3.legend()
    st.pyplot(fig3)

    # Save models
    joblib.dump(nb, 'naive_bayes_model.pkl')
    joblib.dump(svm, 'svm_model.pkl')
    joblib.dump(vect, 'tfidf_vectorizer.pkl')

    # Custom email check
    st.subheader("🔍 Test a Custom Email Message")
    custom_input = st.text_area("Paste or type an email to check if it's spam or ham")

    if st.button("Classify"):
        cleaned = clean_text(custom_input)
        vectorized = vect.transform([cleaned])
        pred_nb = nb.predict(vectorized)[0]
        pred_svm = svm.predict(vectorized)[0]
        label_map = {0: 'Ham', 1: 'Spam'}
        st.write("Naïve Bayes Prediction:", f"**{label_map[pred_nb]}**")
        st.write("SVM Prediction:", f"**{label_map[pred_svm]}**")
