let objects = require('./objects');
let canvas = document.getElementById("gamebox");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.25;
canvas.height = window.innerHeight * 0.75;



let drawBackground = function() {
    ctx.fillStyle = '#2cd8e8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let drawTile = function(mat) {
    ctx.beginPath();
    let x = 0,
        y = 0;
    let width = 20,
        height = 20;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[i][j] == 1) {
                // ctx.fillStyle = '#2cd8e8';
                ctx.rect(x, y, height, width);
                // ctx.stroke()
            }
            x += width;
        }
        x = 0;
        y += height;
    }
    ctx.fillStyle = '#0f0716';
    ctx.fill();
}
let mat = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0]
]
drawBackground();
drawTile(mat);

