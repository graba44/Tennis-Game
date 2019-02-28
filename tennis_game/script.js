var canvas, canvasContext, ballX, ballY;
ballX = 50;
ballY = 50;

window.onload = function() {

    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    var fps = 30;
    setInterval(function() {
        moveEverything();
        drawEverything()
    }, 1000/fps);
}

function moveEverything() {
    ballX += 5;
}

function drawEverything() {
    canvasContext.fillStyle = "#3d3d3d";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 210, 10, 100);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ballX, 100, 10, 10);
}