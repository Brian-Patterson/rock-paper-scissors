let myArray= [
    "rock",
    "paper",
    "scissors",
];

function computerPlay() {
   let item = myArray[Math.floor(Math.random()*myArray.length)]
   return item
}

const rBtn = document.querySelector("#rBtn");
rBtn.addEventListener("click", () => {
    letsPlay("rock");
});
const pBtn = document.querySelector("#pBtn");
pBtn.addEventListener("click", () => {
    letsPlay("paper");
});
const sBtn = document.querySelector("#sBtn");
sBtn.addEventListener("click", () => {
    letsPlay("scissors"); 
});

const score = document.querySelector('#score');

const pScore = document.createElement('div');
pScore.classList.add('pScore');
pScore.textContent = "Player Score: 0";
score.appendChild(pScore);

const cScore = document.createElement('div');
cScore.classList.add('cScore');
cScore.textContent = "Computer Score: 0";
score.appendChild(cScore);

const tieGame = document.createElement('div');
tieGame.classList.add('tieGame');
tieGame.textContent = "Tie Game: 0";
score.appendChild(tieGame); 

let pWins = 1;
let cWins = 1;
let tGame = 1; 

function letsPlay(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    switch (playerSelection+computerSelection) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            log = "you lose"; 
            break;
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            log = "you win";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            log = "it's a tie";
            break;
        default: 
            log = "try again";       
    }
    tally();
    declaration(); 
};

function tally () {
    if (log == "you win"){
        pScore.textContent = `Player Wins: ${pWins++}`;
    } else if (log == "you lose"){
        cScore.textContent = `Computer Sore: ${cWins++}`;
    } else if (log == "it's a tie"){
        tieGame.textContent = `Tie Game: ${tGame++}`;
    }
}

function declaration () {
    if (pWins > 4){
        pScore.textContent = "PLAYER WINS!!!";
    } else if (cWins > 4){
        cScore.textContent = "COMPUTER WINS!!!";
    }
}
