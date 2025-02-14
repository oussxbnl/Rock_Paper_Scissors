

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0){
        // console.log("rock");
        return "rock";
    } else if (computerChoice === 1){
        // console.log("paper");
        return "paper";
    } else if (computerChoice === 2) {
        // console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    const humanChoice = prompt("enter rock, paper or scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") 
        {
            return humanChoice;
        }
        else {
        console.log("enter one of the choices pls (rock,paper,scissors)")
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    console.log(`computer chose: ${computerSelection}`);
    console.log(`you chose: ${humanSelection}`);
    if (humanSelection === computerSelection ){
        console.log("draw");
    } else if ((humanSelection === "paper" && computerSelection === "rock")
     || (humanSelection === "rock" && computerSelection === "scissors")
        || (humanSelection === "scissors" && computerSelection === "paper"))
     {
        humanScore++;
        console.log("Human won");
    }
    else {
        computerScore++;
        console.log("computer won");
    }
    console.log(`computerScore: ${computerScore}`);
    console.log(`humanscore: ${humanScore}`);
}
   

function playGame(){
    
    for (let i = 0; i< 3; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);

    };
    if(computerScore > humanScore){
        alert("you lost");
    } else {
        alert("you won");
    }
}

document.getElementById("startGame").addEventListener("click", function() {
    alert("Game is starting!");
    console.clear();
    playGame(); // Call your game function
});
document.getElementById("clearConsole").addEventListener("click",function(){
    console.clear();
});