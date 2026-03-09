function runCode(){

alert("Running Code...");

}

function downloadCode(){

let code=document.getElementById("editor").value;

let blob=new Blob([code],{type:"text/plain"});

let link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="generated_code.py";

link.click();

}