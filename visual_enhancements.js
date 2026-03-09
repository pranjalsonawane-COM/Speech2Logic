// ===== Animated Background Gradient =====

let bg = document.createElement("div")

bg.style.position = "fixed"
bg.style.top = "0"
bg.style.left = "0"
bg.style.width = "100%"
bg.style.height = "100%"
bg.style.zIndex = "-2"
bg.style.background = "linear-gradient(120deg,#020617,#0f172a,#1e293b)"
bg.style.animation = "bgMove 10s ease infinite"

document.body.appendChild(bg)



// ===== Floating AI Icons =====

let robot = document.createElement("div")
robot.innerHTML = "🤖"

robot.style.position = "fixed"
robot.style.right = "30px"
robot.style.bottom = "30px"
robot.style.fontSize = "40px"
robot.style.animation = "floatIcon 4s ease-in-out infinite"

document.body.appendChild(robot)



let brain = document.createElement("div")
brain.innerHTML = "🧠"

brain.style.position = "fixed"
brain.style.left = "30px"
brain.style.bottom = "30px"
brain.style.fontSize = "40px"
brain.style.animation = "rotateBrain 12s linear infinite"

document.body.appendChild(brain)



// ===== Animation Styles =====

let aiStyle = document.createElement("style")

aiStyle.innerHTML = `

@keyframes bgMove{
0%{filter:hue-rotate(0deg)}
100%{filter:hue-rotate(360deg)}
}

@keyframes floatIcon{
0%{transform:translateY(0)}
50%{transform:translateY(-15px)}
100%{transform:translateY(0)}
}

@keyframes rotateBrain{
from{transform:rotate(0deg)}
to{transform:rotate(360deg)}
}

`

document.head.appendChild(aiStyle)