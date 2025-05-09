const chooseContainer = document.getElementById("choose-container");
const turnPick = document.querySelector(".turnt-pick");
const res = document.getElementById("res");
const restartButton = document.getElementById("restart");
let score = [0, 0];
let p1, p2;
let turn = 1;

function showScore() {
    document.getElementById("score1").innerHTML = score[0];
    document.getElementById("score2").innerHTML = score[1];
}

function ifEqual(p1, p2) {
    return p1 == p2;
}

function ifPlayerWin(rule, player, opponent) {
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

    if (ifEqual(playerOneChoice, playerTwoChoice)) {
        return 0;
    } else if (ifPlayerWin(rule, playerOneChoice, playerTwoChoice)) {
        addScore(0);
        showScore();
        return 1;
    } else if (ifPlayerWin(rule, playerTwoChoice, playerOneChoice)) {
        addScore(1);
        showScore();
        return 2;
    } else {
        restart();
        return -1;
    }
}

function showWinner(win) {
    switch (win) {
        case 0:
            res.textContent = "Draw!";
            break;
        case 1:
            res.textContent = "Player 1 Win!";
            break;
        case 2:
            res.textContent = "Player 2 Win!";
            break;
        default:
            res.textContent = "";
            break;
    }
}

function lastPlayerTurn(choice){
    p2 = choice;
    showWinner(checkWinner(p1, p2));
    chooseContainer.style.display = 'none';
    restartButton.style.display = 'block';
}

function firstPlayerTurn(choice) {
    p1 = choice;
    turn = 2;
    turnPick.textContent = "Player 2 Choose";
}

function playRound(choice) {
    if (turn == 1) {
        firstPlayerTurn(choice);
    } else if (turn == 2) {
        lastPlayerTurn(choice);
    }
}

function resetChoice() {
    p1 = null;
    p2 = null;
    turn = 1;
}

function resetComponent() {
    turnPick.textContent = "Player 1 Choose";
    restartButton.style.display = 'none';
    res.textContent = "";
}

function restart() {
    resetChoice();
    resetComponent();
}

restartButton.addEventListener('click', () => {
    restart();
})

chooseContainer.addEventListener('click', (event) => {
    playRound(event.target.id);
})