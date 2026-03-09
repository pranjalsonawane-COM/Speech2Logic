function startAudio(){

document.getElementById("audioStatus").innerText="Audio navigation started";

}

function explainCode(){

alert("Explaining code using AI voice");

}
function startAudio(){

document.getElementById("audioStatus").innerText = "Audio navigation started";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
alert("Speech Recognition not supported. Use Google Chrome.");
return;
}

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";

recognition.onresult = function(event){

let command = event.results[event.results.length - 1][0].transcript.toLowerCase();

document.getElementById("audioStatus").innerText = "You said: " + command;

if(command.includes("open code editor")){
window.location.href = "code_editor.html";
}

if(command.includes("open speech ai")){
window.location.href = "index.html";
}

if(command.includes("open meeting ai")){
window.location.href = "meeting_ai.html";
}

};

recognition.start();

}

function explainCode(){

let text = "This page allows visually impaired developers to navigate the IDE using voice commands.";

let speech = new SpeechSynthesisUtterance(text);

speechSynthesis.speak(speech);

}