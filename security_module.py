def check_security(text):

    blocked_words = ["hack", "attack", "exploit"]

    for word in blocked_words:
        if word in text.lower():
            return False

    return True