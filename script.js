const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
let score = 0;
let activeHole = null;
let gameInterval = null;

// 随机地鼠出现
function randomHole() {
    if (activeHole) {
        activeHole.classList.remove('active');
    }
    const randomIndex = Math.floor(Math.random() * holes.length);
    activeHole = holes[randomIndex];
    activeHole.classList.add('active');
}

// 更新分数
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

// 处理地鼠被击打
function handleClick(event) {
    if (event.target.classList.contains('active')) {
        updateScore();
        event.target.classList.remove('active');
    }
}

// 启动游戏
function startGame() {
    gameInterval = setInterval(randomHole, 1000);
}

// 停止游戏
function stopGame() {
    clearInterval(gameInterval);
    gameInterval = null;
}

// 事件监听
holes.forEach(hole => hole.addEventListener('click', handleClick));

// 启动游戏
startGame();
