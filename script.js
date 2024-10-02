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

/*
function getHumanChoice(buttonId){
    return buttonId;
}
    */

function playRound(human,computer){
    
    if(humanScore===5 || computerScore===5){
        
        const result = document.querySelector('#output');
        
        result.textContent=`Final result: Human ${humanScore} and Computer ${computerScore}`;
        alert( `Human ${humanScore} and Computer ${computerScore}`);
        humanScore=0;
        computerScore=0;

    }

    if(computer=='rock' && human=='scissor'){
         computerScore+=1;
        
    }
    else if(computer=='scissor' && human=='paper'){
         computerScore+=1;
        
    }
    else if(computer=='paper' && human=='rock'){
         computerScore+=1;
    }
    else if(human=='rock' && computer=='scissor'){
         humanScore+=1;
        
    }
    else if(human=='scissor' && computer=='paper'){
         humanScore+=1;
        
    }
    else if(human=='paper' && computer=='rock'){
         humanScore+=1;
        
    }
}

/*
function checkGameOver(humanScore, computerScore){
    if(humanScore===5 || computerScore===5){
        return 'Game Over';
    }
}
*/

//console.log(playRound());

const buttons = document.querySelectorAll('button');
const output = document.querySelector('p');


buttons.forEach((button) => {button.addEventListener('click', () => {playRound(getComputerChoice(), button.id)}); })
