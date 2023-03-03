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
let percentage = 70;
// count up white numbers in front of the pie 
// and animate at the same time

//math
function setAmnt(percentage){
// this function needs to take the user inputted percentage
// then find the equivalant of the percentage to a base of 2
amnt = percentage * 2 /100
return amnt
}
setAmnt(percentage);

// TweenLite.set(circle1, {attr: {cx: cx1, cy: cy, r: radius}});
// TweenLite.set(circle2, {attr: {cx: cx1, cy: cy, r: radius}});

context.strokeStyle = "#3A8DDD";
// context.fillStyle = "#004D71";
context.lineWidth = radius * 2;

TweenMax.to(dash, 5, {
    offset:0,
    onUpdate: drawPath,
    // repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Linear.easeNone
});

// drawPath();

function drawPath() {
  context.clearRect(0,0,canvas.width,canvas.height);
  // context.setLineDash([length - dash.offset, dash.offset]);
  context.beginPath();
  context.arc(cx1, cy, radius * 2, 0, Math.PI * 2);
  context.fillStyle = "#004D71";
  context.fill();
  context.setLineDash([length - dash.offset, dash.offset]);
  context.beginPath();
  context.arc(cx1, cy, radius, 0, Math.PI * amnt);
  context.stroke();
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("numbers");
obj.style.fontFamily = "Montserrat";
obj.style.fontSize = "100px";
obj.style.position = "fixed";
obj.style.left = "90px";
obj.style.top = "90px";
obj.style.color = "white";



animateValue(obj, 0, percentage, 3000);