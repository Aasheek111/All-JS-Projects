let board = document.querySelector(".board");
let randomX = 5;
let randomY = 3;
let snakeX = 5;
let snakeY = 7;
let snakeBody = [[snakeX, snakeY]]; // Initialize the snake's body
let score = 0;
let btn= document.querySelector("#restart")

function randomFood() {
  randomX = Math.floor(Math.random() * 14 + 1);
  randomY = Math.floor(Math.random() * 14 + 1);
  console.log("New food position: X=" + randomX + ", Y=" + randomY); // Debugging info
}

let velX = 0;
let velY = 0;

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  moveSnake(e);
});

function moveSnake(event) {
  if (event.key === "ArrowUp" && velY === 0) {
    velY = -1;
    velX = 0;
  } else if (event.key === "ArrowDown" && velY === 0) {
    velY = 1;
    velX = 0;
  } else if (event.key === "ArrowRight" && velX === 0) {
    velX = 1;
    velY = 0;
  } else if (event.key === "ArrowLeft" && velX === 0) {
    velX = -1;
    velY = 0;
  }
}

// Main game logic, called every 1 second
function main() {
  
  snakeX += velX;
  snakeY += velY;

  // Move the snake body
  snakeBody.unshift([snakeX, snakeY]); // Add new head position to the front

  // Check if the snake has eaten the food
  if (snakeX === randomX && snakeY === randomY) {
    eat(); // Snake grows and food repositions
  } else {
    snakeBody.pop(); // Remove the last part of the snake if no food eaten
  }

  // Update the board
  let html = "";
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="snake" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }

  html += `<div class="food" style="grid-area:${randomY}/${randomX}"></div>`;
  board.innerHTML = html;

  // Handle game over: snake hits the walls or itself
  if (snakeX < 1 || snakeX > 14 || snakeY < 1 || snakeY > 14 || checkCollision()) {
    clearInterval(time); // Stop the game
  btn.style.diplay="block";

  }
}

// Check if the snake collides with itself
function checkCollision() {
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[i][0] === snakeX && snakeBody[i][1] === snakeY) {
      return true;
    }
  }
  return false;
}

// Update score and grow snake when it eats food
function eat() {
  score++; // Increment score
  document.querySelector(".score").textContent = "Score: " + score; // Update score display
  randomFood(); // Reposition food
}

// Call `main()` every 1 second
let time = setInterval(main, 200);
