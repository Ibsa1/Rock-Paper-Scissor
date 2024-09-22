
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
        //return computerScore+=1;
        return 'computer Wins';
    }
    else if(computer=='scissor' && human=='paper'){
        //return computerScore+=1;
        return 'computer Wins';
    }
    else if(computer=='paper' && human=='rock'){
        //return computerScore+=1;
        return 'computer Wins';
    }
    else if(human=='rock' && computer=='scissor'){
        //return humanScore+=1;
        return 'human Wins';
    }
    else if(human=='scissor' && computer=='paper'){
        //return humanScore+=1;
        return 'human Wins';
    }
    else if(human=='paper' && computer=='rock'){
        //return humanScore+=1;
        return 'human Wins';
    }
    else return 'tie';
}



console.log(playRound(getComputerChoice(), getHumanChoice()));
//console.log(`computer choice ${getComputerChoice()}`);
//console.log(getComputerChoice())
//console.log(getHumanChoice());