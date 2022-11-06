/*
Your game is going to play against the computer,
so begin with a function called getComputerChoice 
that will randomly return either ‘Rock’, ‘Paper’ or 
‘Scissors’. We’ll use this function in the game 
to make the computer’s play. 
Tip: use the console to make sure this is returning 
the expected output before moving to the next step!
*/

function getComputerChoice(){

    let choice = Math.floor(Math.random()*3); 
    if(choice === 0)
        return "Rock";
    else if (choice === 1)
        return "Paper";
    else (choice === 2)
        return "Scissors";
       
}
let result = getComputerChoice();












/*
Write a function that plays a single round of Rock 
Paper Scissors. The function should take two parameters
 - the playerSelection and computerSelection - and then
return a string that declares the winner of the round 
like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter 
case-insensitive (so users can input rock, ROCK, RocK 
or any other variation).
Important note: you want to return the results of this
function call, not console.log() them. You’re going to
use what you return later on, so let’s test this 
function by using console.log to see the results:
*/

/*
Write a NEW function called game(). Call the playRound
function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at 
the end.
Remember loops? This is a great opportunity to use 
one to play those five rounds:
At this point you should be using console.log() to 
display the results of each round and the winner at 
the end.
Use prompt() to get input from the user. 
*/