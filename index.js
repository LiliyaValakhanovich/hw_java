let computerMove=0;
let userMove='';
let yourName='';

function username(){
  yourName=prompt('Please, enter your name');
    if (yourName.length===0){
      yourName='user';
    } return yourName; 
}

function getcomputerMove(minNum, maxNum){
  const random=Math.random();
  computerMove=Math.floor(random*(maxNum-minNum+1)+minNum);
    if (computerMove===1){
      alert('Computer move is: rock');
    } if (computerMove===2){
      alert('Computer move is: skissors');
    } if (computerMove===3){
      alert('Computer move is: paper');
    }
  return computerMove;
}

function getUserMove(){
  userMove=prompt('Rock, Scissors, Paper... Please make your move');
  return userMove;  
}

function game(){
  username();
  let userRes=0;
  let compRes=0;
  
  while (userRes<4) {
    while (compRes<4) {
     
     getUserMove();
      if (userMove===null){
       return alert('You aborted this game. To start new game just refresh the page.');
            
      } if (userMove === 'rock' || userMove === 'scissors' || userMove === 'paper'){
        getcomputerMove(1, 3);            
        
        if (computerMove===1 && userMove==='scissors'
        || computerMove===2 && userMove==='paper'
        || computerMove===3 && userMove==='rock'){
          compRes=compRes+1;
          alert(`Computer won this round: Current count is ${yourName}: ${userRes}: Computer ${compRes}`);
          if (compRes===3){
            alert(`Sorry. You lost this game. Count - You: ${userRes} : Computer ${compRes}`);
            result=confirm('Do you want to start new game?');
              if (result===true){
              game();
            } return;
          }
          
        } if (userMove==='rock' && computerMove===2
        || userMove==='scissors' && computerMove===3
        || userMove==='paper' && computerMove===1){
          userRes=userRes+1;
          alert(`You won this round: Current count is ${yourName}: ${userRes}: Computer ${compRes}`); 
          
          if (userRes===3){
            alert(`Congratulations. You won this game. Count - You: ${userRes} : Computer ${compRes}`);
            result=confirm('Do you want to start new game?');
              if (result===true){
              game();
            } return;
          }

        } if (computerMove===userMove){
          return getUserMove();
        }                 
      }
    }
  }  
}
game();
