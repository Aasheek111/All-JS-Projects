const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game constants
const PADDLE_WIDTH = 12, PADDLE_HEIGHT = 90;
const BALL_SIZE = 14;
const PLAYER_X = 10;
const AI_X = canvas.width - PADDLE_WIDTH - 10;

// Game state
let playerY = (canvas.height - PADDLE_HEIGHT) / 2;
let aiY = (canvas.height - PADDLE_HEIGHT) / 2;
let ball = {
    x: canvas.width / 2 - BALL_SIZE / 2,
    y: canvas.height / 2 - BALL_SIZE / 2,
    vx: 5 * (Math.random() > 0.5 ? 1 : -1),
    vy: 3 * (Math.random() > 0.5 ? 1 : -1)
};
let playerScore = 0, aiScore = 0;

// Draw functions
function drawRect(x, y, w, h, color = "#fff") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, size, color = "#fff") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + size/2, y + size/2, size/2, 0, Math.PI * 2);
    ctx.fill();
}

function drawNet() {
    for(let i = 0; i < canvas.height; i += 25) {
        drawRect(canvas.width / 2 - 2, i, 4, 15, "#ffffff33");
    }
}

function drawText(text, x, y) {
    ctx.font = "32px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(text, x, y);
}

// Main game loop
function gameLoop() {
    // Update
    update();

    // Draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNet();
    drawRect(PLAYER_X, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);
    drawRect(AI_X, aiY, PADDLE_WIDTH, PADDLE_HEIGHT);
    drawBall(ball.x, ball.y, BALL_SIZE);
    drawText(playerScore, canvas.width/4, 40);
    drawText(aiScore, canvas.width - canvas.width/4, 40);

    requestAnimationFrame(gameLoop);
}

// Update game logic
function update() {
    // Move ball
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Ball collision with top/bottom walls
    if (ball.y < 0 || ball.y + BALL_SIZE > canvas.height) {
        ball.vy = -ball.vy;
    }

    // Ball collision with player paddle
    if (
        ball.x < PLAYER_X + PADDLE_WIDTH &&
        ball.y + BALL_SIZE > playerY &&
        ball.y < playerY + PADDLE_HEIGHT &&
        ball.x > PLAYER_X
    ) {
        ball.vx = -ball.vx;
        // Add some "spin" based on where the ball hits the paddle
        let collidePoint = (ball.y + BALL_SIZE/2) - (playerY + PADDLE_HEIGHT/2);
        collidePoint /= PADDLE_HEIGHT/2;
        ball.vy = 5 * collidePoint;
        ball.x = PLAYER_X + PADDLE_WIDTH;
    }

    // Ball collision with AI paddle
    if (
        ball.x + BALL_SIZE > AI_X &&
        ball.y + BALL_SIZE > aiY &&
        ball.y < aiY + PADDLE_HEIGHT &&
        ball.x < AI_X + PADDLE_WIDTH
    ) {
        ball.vx = -ball.vx;
        let collidePoint = (ball.y + BALL_SIZE/2) - (aiY + PADDLE_HEIGHT/2);
        collidePoint /= PADDLE_HEIGHT/2;
        ball.vy = 5 * collidePoint;
        ball.x = AI_X - BALL_SIZE;
    }

    // Score for AI
    if (ball.x < 0) {
        aiScore++;
        resetBall();
    }
    // Score for Player
    if (ball.x + BALL_SIZE > canvas.width) {
        playerScore++;
        resetBall();
    }

    // AI movement (simple)
    let aiCenter = aiY + PADDLE_HEIGHT / 2;
    if (aiCenter < ball.y + BALL_SIZE/2 - 10) {
        aiY += 4;
    } else if (aiCenter > ball.y + BALL_SIZE/2 + 10) {
        aiY -= 4;
    }
    aiY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, aiY));
}

// Mouse controls for player paddle
canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    playerY = mouseY - PADDLE_HEIGHT / 2;
    // Keep paddle inside canvas
    playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, playerY));
});

// Reset ball to center
function resetBall() {
    ball.x = canvas.width / 2 - BALL_SIZE / 2;
    ball.y = canvas.height / 2 - BALL_SIZE / 2;
    // Random direction
    ball.vx = 5 * (Math.random() > 0.5 ? 1 : -1);
    ball.vy = 3 * (Math.random() > 0.5 ? 1 : -1);
}

// Start game
gameLoop();