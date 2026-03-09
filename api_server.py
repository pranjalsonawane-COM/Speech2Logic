from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import argument_analyzer
import decision_engine
import explain_engine
import code_generator

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SpeechInput(BaseModel):
    text: str


@app.get("/")
def home():
    return {"message": "Speech2Logic Backend Running"}


@app.post("/process")
def process_speech(data: SpeechInput):

    text = data.text

    # Call your modules safely
    analysis = argument_analyzer.main(text) if hasattr(argument_analyzer, "main") else "analysis done"

    decision = decision_engine.main(analysis) if hasattr(decision_engine, "main") else "decision made"

    explanation = explain_engine.main(decision) if hasattr(explain_engine, "main") else "explanation generated"

    code = code_generator.main(decision) if hasattr(code_generator, "main") else "sample code generated"

    return {
        "input": text,
        "analysis": analysis,
        "decision": decision,
        "explanation": explanation,
        "generated_code": code
    }