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

/* sempre que há uma ronda aparece um paragrafo com o resultado 
*/

const rockStr = "Rock";
const paperStr = "Paper";
const scissorsStr = "Scissors";

let newGame = false;
const btns = document.querySelectorAll(".choiceBtn");
btns.forEach((choiceBtn) => {

    choiceBtn.addEventListener("click",() => {
        const gameResults = document.querySelector(".results");

        if(newGame){
            console.log(gameResults.childElementCount)
            //e.firstElementChild can be used.
            let child = gameResults.lastElementChild; 
            while (child) {
                gameResults.removeChild(child);
                child = gameResults.lastElementChild;
            }
            newGame = false;
        }

        let playerSelection = choiceBtn.textContent;
        let computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection);
        
        //gameResults.textContent = game;
        const para = document.createElement("p");
        const paraScore = document.createElement("p");

        paraScore.textContent = "Score: Player " + playerWin + " - " + computerWin + " Computer.";
        
        para.textContent = "Player: " + playerSelection;
        para.textContent += " Computer: " + computerSelection + " ";
        para.textContent += game;

        if(playerWin === 5){
            para.textContent = "You won the game!"
            playerWin = 0;
            computerWin = 0;
            newGame = true;
        }
        else if (computerWin === 5){
            para.textContent = "You lost the game! :("
            playerWin = 0;
            computerWin = 0;
            newGame = true;
        }
        gameResults.appendChild(paraScore);
        gameResults.appendChild(para);
    });

});


function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return rockStr;
    else if (choice === 1)
        return paperStr;
    else (choice === 2)
    return scissorsStr;

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

    
    if ((playerSelection === rockStr && computerSelection === paperStr) ||
        (playerSelection === scissorsStr && computerSelection === rockStr) ||
        (playerSelection === paperStr && computerSelection === scissorsStr)) {
            computerWin = computerWin + 1;
            return "You lose the round!";
    } else if (playerSelection === rockStr && computerSelection === scissorsStr ||
        (playerSelection === scissorsStr && computerSelection === paperStr) ||
        (playerSelection === paperStr && computerSelection === rockStr)) {
            playerWin = playerWin + 1;
            return "You won the round!";
    } else if (playerSelection === rockStr && computerSelection === rockStr ||
        (playerSelection === scissorsStr && computerSelection === scissorsStr) ||
        (playerSelection === paperStr && computerSelection === paperStr)) {
            return "It's a tie!";
    }
}