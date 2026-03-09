def generate_code(decision):

    if decision == "positive":

        code = """
def action():
    print("Positive action executed")
"""

    elif decision == "negative":

        code = """
def action():
    print("Negative action executed")
"""

    else:

        code = """
def action():
    print("Neutral action executed")
"""

    return code