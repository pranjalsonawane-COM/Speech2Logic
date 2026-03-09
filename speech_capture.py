import speech_recognition as sr # pyright: ignore[reportMissingImports]

def capture_speech():

    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("🎙 Speak your logic...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        return text

    except:
        return "Speech not recognized"