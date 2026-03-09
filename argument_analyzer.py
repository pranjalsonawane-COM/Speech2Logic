from textblob import TextBlob # pyright: ignore[reportMissingImports]

def analyze_argument(text):

    blob = TextBlob(text)

    sentiment = blob.sentiment.polarity

    return {
        "text": text,
        "sentiment": sentiment
    }