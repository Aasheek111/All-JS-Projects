// logics
// eat , collide , add snake body , update score board using grid;

let board = document.querySelector(".board");
let snake = document.querySelector(".snake");
let food = document.querySelector(".food");
let snakeX = 5;
let snakeY = 6;
let snakeBody = [];
let foodX = 3;
let foodY = 3;
let count = 0;
let velX = 0;
let velY=0;
let score= document.querySelector(".score");

function randomFood() {``
  foodX = Math.floor(Math.random() * 14 + 1);
  foodY = Math.floor(Math.random() * 14 + 1);
  return foodX, foodY;
}

function moveSnake(event) {
  if (event.key == "ArrowUp" && velY!=1) {
    velY = -1;
    velX = 0;
  } else if (event.key === "ArrowDown" &&velY!=-1) {
    velY = 1;
    velX = 0;
  } else if (event.key === "ArrowRight" && velX!=-1) {
    velX = 1;
    velY = 0;
  } else if (event.key === "ArrowLeft" &&velX!=1) {
    velX = -1;
    velY = 0;
  }
}

document.addEventListener("keydown", (e) => {
  moveSnake(e);
});

main();

function main() {

  snakeX += velX;
  snakeY += velY;



  if (snakeX == foodX && snakeY == foodY) {
    console.log("touchhhh");
    count+=1;
    randomFood();
    score.innerHTML=`Score :${count}`;

  }
  else{
    snakeBody.pop();
  }

  snakeBody.unshift([snakeX, snakeY]);
  
  let html = "";

  for (i = 0; i < snakeBody.length; i++) {
    html += `<div class="snake" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    
    
  }

  html += `<div class="food" style="grid-area:${foodY}/${foodX}"></div>`;

  board.innerHTML = html;

  if(snakeX>14||snakeX<0||snakeY>14||snakeY<0){

    endgame();
  }
}

function endgame(){
  clearInterval(time);
  alert("game over");
}

let time = setInterval(main, 500);
