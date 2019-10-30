/*
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var canvas = document.getElementById("glCanvas");
var ctx = canvas.getContext("2d");

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onmousedown = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Nivix.png') {
      myImage.setAttribute ('src','images/rock2.jpg');
    } else {
      myImage.setAttribute ('src','images/Nivix.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

let rightPressed = false;
let leftPressed = false;
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw(timestamp) {
    let dt = (timestamp - t)/1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(rightPressed) {
        paddleX += 120*dt;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 120*dt;
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    drawPaddle();
    drawScore(dt);
    t = timestamp;
    requestAnimationFrame(draw);
}
let t = 0.0;
function drawScore(timestamp) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + timestamp, 8, 20);
}*/
//setInterval(draw, 16.667);
  //  requestAnimationFrame(draw);

    function main() {
        const canvas = document.getElementById("glCanvas");
        // Initialize the GL context
        const gl = canvas.getContext("webgl2");
        alert("Toast.");
        // Only continue if WebGL is available and working
        if (gl === null) {
          alert("Unable to initialize WebGL. Your browser or machine may not support it.");
          return;
        }
      
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      
      window.onload = main;