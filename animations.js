// ===== Speech2Logic AI UI Enhancements =====

// Animate microphone button
const micBtn = document.querySelector("button[onclick='startSpeech()']");

if(micBtn){

micBtn.addEventListener("click", ()=>{

micBtn.classList.add("mic-active");

setTimeout(()=>{
micBtn.classList.remove("mic-active");
},4000);

});

}


// Typing animation for results
function typeEffect(elementId, text){

let element = document.getElementById(elementId);

if(!element) return;

element.innerHTML = "";

let i = 0;

let timer = setInterval(()=>{

element.innerHTML += text.charAt(i);

i++;

if(i >= text.length){
clearInterval(timer);
}

},20);

}


// Observe result changes and animate them
const observer = new MutationObserver(()=>{

let intent = document.getElementById("intent");
let decision = document.getElementById("decision");
let logic = document.getElementById("logic");
let explanation = document.getElementById("explanation");

if(intent && intent.innerText){
typeEffect("intent", intent.innerText);
}

if(decision && decision.innerText){
typeEffect("decision", decision.innerText);
}

if(logic && logic.innerText){
typeEffect("logic", logic.innerText);
}

if(explanation && explanation.innerText){
typeEffect("explanation", explanation.innerText);
}

});

observer.observe(document.body,{childList:true,subtree:true});


// Floating particles background
function createParticles(){

for(let i=0;i<20;i++){

let particle = document.createElement("div");

particle.classList.add("particle");

document.body.appendChild(particle);

particle.style.left = Math.random()*100+"%";
particle.style.animationDuration = (Math.random()*10+10)+"s";

}

}

createParticles();