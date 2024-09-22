let humanScore=0;
let computerScore=0;

function getComputerChoice(){
     let computerChoice = Math.random();
     if(computerChoice<=0.33333333333){
        return 'rock';
     }
     else if(computerChoice <=0.666666666){
        return 'paper';
     }
     else{
        return 'scissor';
     }
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


function playRound(computer, human){

    if(computer=='rock' && human=='scissor'){
        return computerScore+=1;
        
    }
    else if(computer=='scissor' && human=='paper'){
        return computerScore+=1;
        
    }
    else if(computer=='paper' && human=='rock'){
        return computerScore+=1;
    }
    else if(human=='rock' && computer=='scissor'){
        return humanScore+=1;
        
    }
    else if(human=='scissor' && computer=='paper'){
        return humanScore+=1;
        
    }
    else if(human=='paper' && computer=='rock'){
        return humanScore+=1;
        
    }
    else return 'tie';
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
    if(humanScore===computerScore){
        return `a tie. computer ${computerScore} human ${humanScore}`;
    }
    else if(humanScore>computerScore){
        return `human won, human score ${humanScore} computer score ${computerScore} ties ${humanScore}`;
    }
    else {
        return `computer won, computer score ${computerScore} human score ${humanScore} ties ${humanScore}`;
    }
}

console.log(playGame());
//console.log(`computer choice ${getComputerChoice()}`);
//console.log(getComputerChoice())
//console.log(getHumanChoice());