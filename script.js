let myArray= [
    "rock",
    "paper",
    "scissors",
];

let x="rock";
let y="paper";
let z="scissors";

function computerPlay() {
   let item = myArray[Math.floor(Math.random()*myArray.length)]
   return item 
}