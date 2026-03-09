import pyttsx3 # pyright: ignore[reportMissingImports]

engine = pyttsx3.init()

def speak(text):

    engine.say(text)

    engine.runAndWait()