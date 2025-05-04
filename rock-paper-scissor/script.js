const picks = document.querySelectorAll(".pick");
const turnPick = document.querySelector(".turnt-pick");
const res = document.getElementById("res"); 
const restartButton = document.getElementById("restart"); 
let p1, p2;
let turn = 1;

function ll(...param) {
    let s = "";
    param.forEach(p => {
        s += p;
    });

    console.log(s);
}

function checkWinner(p1, p2) {

    const rule = {
        rock: "scissor",
        paper: "rock",
        scissor: "paper"
    };

    if (p1 == p2) {
        return 0;
    } else if (rule[p1] == p2) {
        return 1;
    } else if (rule[p2] == p1) {
        return 2;
    } else {
        return 0;
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

function playRound(id) {
    if (turn == 1) {
        p1 = id;
        turn = 2;
        turnPick.textContent = "Player 2 Choose";
    } else if (turn == 2) {
        p2 = id;
        showWinner(checkWinner(p1, p2));
        restartButton.style.display = 'block';
    }
}
function restart() { 
    p1 = null;
    p2 = null;
    turn = 1;
    turnPick.textContent = "Player 1 Choose";
    res.textContent = "";
    restartButton.style.display = 'none';
}

restartButton.addEventListener('click', () => {
    restart();
})

picks.forEach((pick) => {
    pick.addEventListener('click', () => {
        playRound(pick.id);
    });
});


// Testing Phase 
