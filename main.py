from speech_capture import capture_speech
from argument_analyzer import analyze_argument
from decision_engine import resolve_conflict
from validation_layer import validate_decision
from code_generator import generate_code
from explain_engine import explain_code

def main():
    print("🎤 Speech2Logic AI Systcd backendem Started")

    speech_text = capture_speech()
    print("Captured Speech:", speech_text)

    arguments = analyze_argument(speech_text)

    decision = resolve_conflict(arguments)

    validated = validate_decision(decision)

    code = generate_code(validated)

    explanation = explain_code(code)

    print("\nGenerated Code:\n", code)
    print("\nExplanation:\n", explanation)


if __name__ == "__main__":
    main()