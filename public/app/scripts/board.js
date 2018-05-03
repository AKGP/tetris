// let objects = require('./objects');
let canvas = document.getElementById("gamebox");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.25;
canvas.height = window.innerHeight * 0.75;



let drawBackground = function() {
    ctx.fillStyle = '#2cd8e8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let drawTile = function(mat,position) {
    let x = position.x;
    drawBackground();
    ctx.beginPath();
    let width = 20,
        height = 20;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[i][j] == 1) {
                ctx.rect(position.x, position.y, height, width);
            }
            position.x += width;
        }
        position.x = x;
        position.y += height;
    }
    App.currPosition = position;
    ctx.fillStyle = '#0f0716';
    ctx.fill();
}

let rotateLeft = function(currObj) {
    let result = [];
    for (let i = 2; i >= 0; i--) {
        let temp = [];
        for (let j = 0; j < 3; j++) {
            temp.push(App.objects[currObj][j][i]);
        }
        result.push(temp);
    }
    console.log(result);
    App.objects[currObj] = result;
    drawTile(result,App.currPosition);
}
let rotateRight = function(currObj) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        let temp = [];
        for (let j = 2; j >= 0; j--) {
            temp.push(App.objects[currObj][j][i]);
        }
        result.push(temp);
    }
    App.objects[currObj] = result;
    drawTile(result,App.currPosition);
}
let goDown = function(currObj,position){
    // App.currPosition = position;
    // position.y +=1;
    App.currPosition = position;
    drawTile(currObj,App.currPosition);
}

let moveLeft = function(currObj){
    App.currPosition.x-=30;
    drawTile(currObj,App.currPosition);


}

let moveRight = function(){
    App.currPosition.x+=30;
    drawTile(currObj,App.currPosition);
}





drawTile(App.objects.t,App.currPosition);

setInterval(()=>{
    goDown(App.objects.t,App.currPosition)}
    ,2000);
let detectCollision = function(){
    
}
