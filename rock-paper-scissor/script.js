const chooseContainer = document.getElementById("choose-container");
const turnPick = document.querySelector(".turnt-pick");
const res = document.getElementById("res");
const restartButton = document.getElementById("restart");
const pickTurn = ['Player 1 Choose', 'Player 2 Choose'];
const gameResult = ['Draw!', 'Player 1 Win!', 'Player 2 Win!'];
let endGame = false;
let score = [0, 0];
let p1, p2;
let turn = 1;

// Component Manipulation
function hideRestartButton() {
    restartButton.style.display = 'none';
}

function showRestartButton() {
    restartButton.style.display = 'block';
}

function resultTextContent(result) {
    res.textContent = result;
}

function resetChoice() {
    p1 = null;
    p2 = null;
    turn = 1;
}

function resetComponent() {
    turnPickElementText(pickTurn[0]);
    hideRestartButton();
    resultTextContent('');
}

function endGameChange(val) {
    endGame = val;
}

function restart() {
    resetChoice();
    resetComponent();
    endGameChange(false);
}

function turnPickElementText(text) {
    turnPick.textContent = text;
}

function showScore() {
    document.getElementById("score1").innerHTML = score[0];
    document.getElementById("score2").innerHTML = score[1];
}

function showWinner(win) {
    switch (win) {
        case -1:
            restart();
            break;
        case 0:
            resultTextContent(gameResult[0]);
            break;
        case 1:
            resultTextContent(gameResult[1]);
            break;
        case 2:
            resultTextContent(gameResult[2]);
            break;
        default:
            resultTextContent('');
            break;
    }
}

// Game System
function nextTurn() {
    if(turn == 1) {
        turn = 2;
    }
}

function isEqual(p1, p2) {
    return p1 == p2;
}

function isPlayerWin(rule, player, opponent) {
    return rule[player] == opponent;
}

function addScore(scoreNumber) {
    score[scoreNumber] += 1;
}

function checkWinner(playerOneChoice, playerTwoChoice) {

    const rule = {
        rock: "scissor",
        paper: "rock",
        scissor: "paper"
    };

    if (isEqual(playerOneChoice, playerTwoChoice)) {
        return 0;
    } else if (isPlayerWin(rule, playerOneChoice, playerTwoChoice)) {
        addScore(0);
        showScore();
        return 1;
    } else if (isPlayerWin(rule, playerTwoChoice, playerOneChoice)) {
        addScore(1);
        showScore();
        return 2;
    } else {
        restart();
        return -1;
    }
}

function lastPlayerTurn(choice) {
    p2 = choice;
    endGameChange(true);
    showWinner(checkWinner(p1, p2));
    showRestartButton();    
}

function firstPlayerTurn(choice) {
    p1 = choice;
    nextTurn();
    turnPickElementText(pickTurn[1]);
}

function playRound(choice) {
    if (turn == 1) {
        firstPlayerTurn(choice);
    } else if (turn == 2) {
        lastPlayerTurn(choice);
    }
}

restartButton.addEventListener('click', () => {
    restart();
})

chooseContainer.addEventListener('click', (event) => {
    if (endGame || event.target.tagName != 'BUTTON') return;
    playRound(event.target.id);
})