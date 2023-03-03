let svg = document.querySelector("#svg");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circles = [circle1, circle2]

let canvas = document.querySelector("#canvas1");
let context = canvas.getContext("2d");

let vw = canvas.width = 900;
let vh = canvas.height = 300;

let cx1 = 145;
let cx2 = 450;
let cy = cx1;

let radius = 60;
let length = Math.PI * 2 * radius;
let dash = { offset: length };

let amnt = 0;
let percentage = 79;
// count up white numbers in front of the pie 
// and animate at the same time
let pi = Math.PI;

//math
function setAmnt(percentage){
// this function needs to take the user inputted percentage
// then find the equivalant of the percentage to a base of 2
amnt = percentage * 2 /100
return amnt
}
setAmnt(percentage);

context.strokeStyle = "#3A8DDD";
// context.fillStyle = "#004D71";
context.lineWidth = radius * 2;
context.fillStyle = "#004D71";

const tween = TweenMax.to(dash, 5, {
    offset:0,
    onUpdate: drawPath,
    ease: Linear.easeNone
});

function drawPath() {
  const progress = Math.round(tween.progress() * 100);
  context.clearRect(0,0,canvas.width,canvas.height);
  progress <= percentage ?  obj.innerHTML = progress : ""
  context.beginPath();
  context.arc(cx1, cy, radius * 2, 0, pi * 2);
  context.fill();
  context.setLineDash([length - dash.offset, dash.offset]);
  context.beginPath();
  context.arc(cx1, cy, radius, 0, pi * amnt);
  context.stroke();
}

// for reference https://css-tricks.com/animating-number-counters/

const obj = document.getElementById("numbers");
const percentageSign = document.getElementById("percentage-sign");
obj.style.fontFamily = "Montserrat";
obj.style.fontSize = "85px";
obj.style.position = "fixed";
obj.style.left = "70px";
obj.style.top = "95px";
obj.style.color = "white";
// obj.style.width = "300px"
percentageSign.style.fontFamily = "Montserrat";
percentageSign.style.fontSize = "85px";
percentageSign.style.position = "fixed";
percentageSign.style.left = "183px";
percentageSign.style.top = "95px";
percentageSign.style.color = "white";