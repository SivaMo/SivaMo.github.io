// var p = document.getElementById("changeMe")
var p = document.querySelector("#changeMe")
p.innerHTML = "text";
p.style.background = "blue" ;
p.style.color = "white";
p.style.textAlign = "center";
function changeParagraphBackground()
{
    p.style.background = 'green';
}

p.onclick = changeParagraphBackground; 

var currentMargin = 0

function nextFrame()
{
    currentMargin++;
    p.style.margin = currentMargin + "px";    
}


var animation;

function play()
{
    animation = setInterval(nextFrame,20);
}

document.querySelector("#play").onclick = play;
play();

function reset()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}

document.querySelector("#stop").onclick = reset;