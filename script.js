let myArray= [
    "rock",
    "paper",
    "scissors",
];

function computerPlay() {
   let item = myArray[Math.floor(Math.random()*myArray.length)]
   return item
}

function letsPlay(playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, or scissors?")
    computerSelection = computerPlay();

    switch (playerSelection+computerSelection) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            result = "you lose"; 
            break;
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            result = "you win";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result = "it's a tie";
            break;
        default: 
            result = "try again";       
    }
    return result; 
};

function game() {
    for (let i = 0; i < 5; i++) {
        letsPlay()    
        console.log(result)
    }
}
