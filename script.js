let humanScore=0;
let computerScore=0;
let gameOver = false;

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

function playRound(human,computer){

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


    if (!gameOver){
     const eachRoundResult = document.querySelector('#eachGame');
     const answer = document.createElement("p");
     answer.classList.add("answer");
     answer.textContent = `${human}   ............      ${computer}`;
     eachRoundResult.appendChild(answer);
    }

     if(humanScore===5 || computerScore===5){
        
          const result = document.querySelector('#output');
          result.textContent=`🪨✂️📜 Final result: Human ${humanScore} and Computer ${computerScore}`;
          
          humanScore=0;
          computerScore=0;
          gameOver=true;
          //return 'Game Over';

          const replay = document.querySelector("#container");
          const insertReplayButton = document.createElement('button');
          insertReplayButton.classList.add('replay');

          insertReplayButton.textContent = "Play again?";
          insertReplayButton.style.width = '100px';
          insertReplayButton.style.height = '40px';

          replay.appendChild(insertReplayButton);

          insertReplayButton.addEventListener('click', () => location.reload());
     }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {button.addEventListener('click', () => {playRound(getComputerChoice(), button.id)}); })
