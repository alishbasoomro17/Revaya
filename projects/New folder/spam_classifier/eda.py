# eda.py
import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from utils import clean_text

# Load data
df = pd.read_csv('spam.csv', encoding='latin-1')[['v1','v2']]
df.columns = ['label','message']

# Message length boxplot
df['length'] = df['message'].apply(len)
df.boxplot(column='length', by='label')
plt.title('Message Length by Label')
plt.suptitle('')
plt.savefig('length_boxplot.png')
plt.close()

# Word clouds
for lbl in ['ham','spam']:
    text = " ".join(df[df.label==lbl]['message'])
    wc = WordCloud(width=600, height=400, background_color='white').generate(text)
    plt.figure(figsize=(8,5))
    plt.imshow(wc, interpolation='bilinear')
    plt.axis('off')
    plt.title(f'{lbl.title()} WordCloud')
    plt.savefig(f'{lbl}_wordcloud.png')
    plt.close()
