let userInput = prompt("Input: Rock, Paper or Sciccor")
let userChoice = userInput.toLowerCase();
let randomNum = 0;
let userGame = 0;

function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function userNum (userGame){
    if(userChoice === "rock")
    {
        userGame = 0;
        console.log("rock",userGame)

    }
    else if (userChoice === "paper")
    {
        userGame = 1;
        console.log("paper",userGame)
    }
    else if (userChoice === "sciccor")
    {
        userGame = 2;
        console.log("sciccor",userGame)
    }
    else 
    {
        userInput = prompt("Your Input is Invalid, choose again");
    }
}
function cpuChoice(){

    if(randomNum === 0)
    {
        alert("CPU chooses Rock")
    }
    if(randomNum === 1)
    {
        alert("CPU chooses Paper")
    }
    if(randomNum === 2)
    {
        alert("CPU chooses Sciccor")
    }
}
function game (){
    if(userGame === randomNum)
    {
        alert("DRAW!");
    }
    else if (userGame === 0 && randomNum === 1)
    {
        alert("CPU wins Paper > Rock");
    }
    else if (userGame === 0 && randomNum === 2)
    { 
        alert("Player wins! Rock > Sciccor");

    }
    else if (userGame === 1 && randomNum === 0)
    {
        alert("Player wins! Paper > Rock");
    }
    else if (userGame === 1 && randomNum === 2)
    {
        alert ("CPU wins! Sciccor > Paper");
    }
    else if (usergame === 2 && randomNum === 0)
    {
        alert("CPU wins! Rock > Sciccor");
    }
    else if (userGame === 2 && randomNum === 1){
        alert("Player wins! Sciccor > Paper ");
    }

}

randomNum = getRandomInt(3);
userNum();
cpuChoice();
game();


