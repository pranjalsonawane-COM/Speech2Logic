// SPEECH RECOGNITION

function startSpeech(){

const micBtn = document.getElementById("micBtn")

if(!('webkitSpeechRecognition' in window)){
alert("Speech recognition not supported in this browser")
return
}

const recognition = new webkitSpeechRecognition()

recognition.lang = "en-US"
recognition.start()

micBtn.classList.add("mic-listening")

recognition.onresult = function(event){

const speechText = event.results[0][0].transcript

document.getElementById("speechInput").value = speechText

}

recognition.onend = function(){
micBtn.classList.remove("mic-listening")
}

}


// GENERATE LOGIC

function generateLogic(){

let text = document.getElementById("speechInput").value.toLowerCase()

let intent = ""
let decision = ""
let code = ""
let explanation = ""

if(text.includes("prime")){

intent = "Mathematical Algorithm"

decision = "AI detected request for Prime Number Program"

code = `num = int(input("Enter number: "))

for i in range(2, num):
    if num % i == 0:
        print("Not Prime")
        break
else:
    print("Prime Number")`

explanation = "This program checks if a number is divisible by any value between 2 and n-1. If divisible, it is not prime."

}

else if(text.includes("factorial")){

intent = "Mathematical Algorithm"

decision = "AI detected request for Factorial Program"

code = `n = int(input("Enter number: "))
fact = 1

for i in range(1, n+1):
    fact = fact * i

print("Factorial =", fact)`

explanation = "Factorial multiplies all numbers from 1 to n."

}

else{

intent = "Unknown Request"

decision = "AI could not detect a programming task"

code = "// No logic generated"

explanation = "Try typing something like 'prime number program' or 'factorial program'."

}

document.getElementById("intent").innerText = intent
document.getElementById("decision").innerText = decision
document.getElementById("logic").innerText = code
document.getElementById("explanation").innerText = explanation

}


// SPEAK EXPLANATION

function speakExplanation(){

let text = document.getElementById("explanation").innerText

if(text.trim() === ""){
alert("No explanation to speak. Generate logic first.")
return
}

let speech = new SpeechSynthesisUtterance(text)

speech.lang = "en-US"
speech.rate = 1
speech.pitch = 1
speech.volume = 1

window.speechSynthesis.speak(speech)

}





// ===== Voice Guide for Blind Developers =====

function speakGuide(message){

let speech = new SpeechSynthesisUtterance(message)

speech.lang = "en-US"

window.speechSynthesis.speak(speech)

}


// Speak instructions when page loads

window.onload = function(){

speakGuide("Welcome to Speech to Logic AI IDE. Press the start speaking button and say a programming problem like prime number program.")

}