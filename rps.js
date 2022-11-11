/*
Your game is going to play against the computer,
so begin with a function called getComputerChoice 
that will randomly return either ‘Rock’, ‘Paper’ or 
‘Scissors’. We’ll use this function in the game 
to make the computer’s play. 
*/

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else (choice === 2)
    return "scissors";

}

/*
Write a function that plays a single round of Rock 
Paper Scissors. The function should take two parameters
 - the playerSelection and computerSelection - and then
return a string that declares the winner of the round 
like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter 
case-insensitive (so users can input rock, ROCK, RocK 
or any other variation).
*/

let playerWin = 1;
let playerLose = 0;
let playerTie = 0;
let computerWin = 1;
let computerLose = 0;
let computerTie = 0;

function playRound(playerSelection, computerSelection) {


    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        return "You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return "You win!";
    } else if (playerSelection === "rock" && computerSelection === "rock" ||
        (playerSelection === "scissors" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "paper")) {
        return "It's a tie!";
    }

}

/*
Write a NEW function called game(). Call the playRound
function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at 
the end.
Remember loops? This is a great opportunity to use 
one to play those five rounds.
Use prompt() to get input from the user. 
*/

function game() {

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        let playRoundResult = playRound(playerSelection, computerSelection);
        console.log(playRoundResult);

        if (playRoundResult === "You win!") {
            playerWin++;
        } else if (playRoundResult === "You lose!") {
            computerWin++;
        } else if (playRoundResult === "It's a tie!") {
            playerTie++;
            computerTie++;
        }
    }

    if (playerWin > computerWin) {
        return "You are the winner!";
    } else if (playerWin < computerWin) {
        return "Computer is the winner!";
    } else if (playerWin === computerWin) {
        return "It's a tie!!";
    }

}

let finalScore = game();
alert(finalScore);