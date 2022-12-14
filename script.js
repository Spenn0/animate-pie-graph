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
let percentage = 90;


//math
function setAmnt(percentage){
// this function needs to take the user inputted percentage
// then find the equivalant of the percentage to a base of 2
// 2 == 100%
amnt = percentage * 2 /100
return amnt
}
setAmnt(percentage);

TweenLite.set(circle1, {attr: {cx: cx1, cy: cy, r: radius}});
TweenLite.set(circle2, {attr: {cx: cx1, cy: cy, r: radius}});

context.strokeStyle = "#3A8DDD";
context.fillStyle = "#004D71";
context.lineWidth = radius * 2;

TweenMax.to(dash, 5, {
    offset:0,
    onUpdate: drawPath,
    // repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Linear.easeNone
});


drawPath();



function drawPath() {
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