/* In our UI, the player should be able to play the game
by clicking on buttons rather than typing their answer
in a prompt.

For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection. Add an event
listener to the buttons that call your playRound function with
the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.
logs into DOM methods.

Display the running score, and announce a winner of the game 
once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original
code to make it work for this. That’s OK! Reworking old code is
an important part of a programmer’s life.
*/

const btns = document.querySelectorAll(".choiceBtn");
btns.forEach((choiceBtn) => {

    choiceBtn.addEventListener("click",() => {

        let playerSelection = choiceBtn.textContent;
        let computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection);
        const gameResults = document.querySelector(".results");
        gameResults.textContent = game;
        
        if(playerWin === 5){
            gameResults.textContent=  "You won!!";
        }
        else if (computerWin === 5){
            gameResults.textContent=  "Computer won!!";
        }
    });

});

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

let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {

    
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
            computerWin = computerWin + 1;
            return "You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
            playerWin = playerWin + 1;
            return "You win!";
    } else if (playerSelection === "rock" && computerSelection === "rock" ||
        (playerSelection === "scissors" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "paper")) {
            return "It's a tie!";
    }
}