def validate_decision(decision):

    allowed = ["positive", "negative", "neutral"]

    if decision in allowed:
        return decision

    return "neutral"