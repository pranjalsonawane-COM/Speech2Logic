// ===============================
// Speech2Logic AI UI Effects Engine
// No modification to original code
// ===============================


// Animated Background Grid

const grid = document.createElement("div")
grid.style.position = "fixed"
grid.style.top = "0"
grid.style.left = "0"
grid.style.width = "100%"
grid.style.height = "100%"
grid.style.backgroundImage =
"linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)"
grid.style.backgroundSize = "40px 40px"
grid.style.zIndex = "-2"

document.body.appendChild(grid)


// Floating Particles

function createParticles(){

for(let i=0;i<25;i++){

let p = document.createElement("div")

p.style.position = "fixed"
p.style.width = "4px"
p.style.height = "4px"
p.style.background = "#6366f1"
p.style.borderRadius = "50%"
p.style.opacity = "0.4"
p.style.left = Math.random()*100 + "%"
p.style.bottom = "-10px"
p.style.animation = "floatParticles "+(8+Math.random()*10)+"s linear infinite"

document.body.appendChild(p)

}

}

createParticles()


// Add Particle Animation

const style = document.createElement("style")
style.innerHTML = `

@keyframes floatParticles{

from{
transform:translateY(0)
}

to{
transform:translateY(-120vh)
}

}

button{
transition:0.3s
}

button:hover{
transform:scale(1.05);
box-shadow:0 0 15px #6366f1
}

.box{
transition:0.3s
}

.box:hover{
transform:translateY(-6px);
box-shadow:0 10px 25px rgba(0,0,0,0.5)
}

`

document.head.appendChild(style)


// Voice Wave Animation (when mic button clicked)

let micButton = document.querySelector("button")

if(micButton){

micButton.addEventListener("click",function(){

let wave = document.createElement("div")

wave.style.position="fixed"
wave.style.left="50%"
wave.style.bottom="120px"
wave.style.width="200px"
wave.style.height="50px"
wave.style.transform="translateX(-50%)"
wave.style.display="flex"
wave.style.gap="5px"

for(let i=0;i<10;i++){

let bar=document.createElement("div")

bar.style.width="5px"
bar.style.background="#6366f1"
bar.style.height="10px"
bar.style.animation="wave 0.6s infinite alternate"
bar.style.animationDelay=(i*0.1)+"s"

wave.appendChild(bar)

}

document.body.appendChild(wave)

setTimeout(()=>{
wave.remove()
},4000)

})

}


// Wave animation

const waveStyle = document.createElement("style")

waveStyle.innerHTML=`

@keyframes wave{

from{
height:10px
}

to{
height:40px
}

}

`

document.head.appendChild(waveStyle)


// AI Thinking Loader

function showThinking(){

let loader=document.createElement("div")

loader.innerHTML="AI Thinking..."

loader.style.position="fixed"
loader.style.bottom="40px"
loader.style.right="40px"
loader.style.background="#111827"
loader.style.padding="10px 20px"
loader.style.borderRadius="8px"
loader.style.boxShadow="0 0 10px #000"

document.body.appendChild(loader)

setTimeout(()=>{
loader.remove()
},2000)

}


// Trigger loader when Generate button clicked

let buttons=document.querySelectorAll("button")

buttons.forEach(btn=>{

if(btn.innerText.includes("Generate")){

btn.addEventListener("click",showThinking)

}

})