

const getComputerChoice=function(){
    let dice = Math.trunc(Math.random() * 3) ;
   
    if(dice===1){
     return 'rock'
    }else if(dice===2){
        return 'paper'
    
    }else{
        return 'scissors'
    }
  

}




 const playRound=function(playerSelection, computerSelection){
  if(playerSelection===computerSelection){
    return result.innerText=`draw`
  }else if(playerSelection==='rock'&&computerSelection==='scissors'){
    playerScore++;
    return result.innerText= `rock beats scissors you win!`
  }
  else if(playerSelection==='rock'&&computerSelection==='paper'){
    computerScore++;
    return result.innerText=`paper beats rock you lose!`

  }else if(playerSelection==='paper'&&computerSelection==='rock'){
  playerScore++;
    return result.innerText= `paper beats rock you win!`

  }else if(playerSelection==='paper'&&computerSelection==='scissors'){
    computerScore++;
    return result.innerText=`scissors beats paper you lose!`

  }
   else if(playerSelection==='scissors'&&computerSelection==='rock'){
    computerScore++;
    return result.innerText=`rock beats scissors you lose!`

  }else if(playerSelection==='scissors'&&computerSelection==='paper'){
    playerScore++;
    return result.innerText=`scissors beats paper you win!`
  
  

}


}



let scoreWindow = document.querySelector('.scores');
const result=document.querySelector('.result')
const buttons=document.querySelectorAll('button')
const playAgain=document.querySelector('.again')
let computerScore=0;
let playerScore=0;
scoreWindow.innerText =playerScore + ' - ' + computerScore;







buttons.forEach((button) => {
  button.addEventListener('click', () => {
     
    playerSelection=button.id;
    computerSelection=getComputerChoice()
     playRound(playerSelection,computerSelection)
     scoreWindow.innerText=playerScore + ' - ' + computerScore;
     checkWinner(playerScore,computerScore)
  
  

  });
 
});


const checkWinner=function(playerScore,computerScore){
  if(playerScore===5) { 
    result.innerText=`You won ${playerScore} to ${computerScore} great job beating computer!`  
    document.getElementById('rock').disabled=true
    document.getElementById('paper').disabled=true
    document.getElementById('scissors').disabled=true



}
  if(computerScore===5){ 

     result.innerText=`You lost ${computerScore} to ${playerScore}`
     document.getElementById('rock').disabled=true
     document.getElementById('paper').disabled=true
     document.getElementById('scissors').disabled=true
    
}

}



playAgain.addEventListener('click',function(){
  playerScore=0;
  computerScore=0;
  result.innerText=''
  scoreWindow.innerText =playerScore + ' - ' + computerScore;
  document.getElementById('rock').disabled=false
  document.getElementById('paper').disabled=false
  document.getElementById('scissors').disabled=false
})


/*






const rockBtn=document.querySelector('#rock')
const paperBtn=document.querySelector('#paper')
const scissorsBtn=document.querySelector('#scissors')

rockBtn.addEventListener('click',function(){
  playerSelection='rock'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;
checkWinner(playerScore,computerScore)






})
paperBtn.addEventListener('click',function(){
  playerSelection='paper'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;
checkWinner(playerScore,computerScore)



})


scissorsBtn.addEventListener('click',function(){
  playerSelection='scissors'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;
checkWinner(playerScore,computerScore)
})


  





BİRDEN FAZLA BUTONU AYNI ANDA AKTİF HALE GETİRME
buttons.forEach((button) => {

  
  button.addEventListener('click', () => {
     
     playRound(playerSelection=button.id,computerSelection=getComputerChoice())
     console.log(playRound(playerSelection,computerSelection))

  });
});

*/


