def resolve_conflict(arguments):

    sentiment = arguments["sentiment"]

    if sentiment > 0:
        return "positive"

    elif sentiment < 0:
        return "negative"

    else:
        return "neutral"