

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
    return `draw`
  }else if(playerSelection==='rock'&&computerSelection==='scissors'){
    playerScore++;
    return `rock beats scissors you win!`
  }
  else if(playerSelection==='rock'&&computerSelection==='paper'){
    computerScore++;
    return `paper beats rock you lose!`

  }else if(playerSelection==='paper'&&computerSelection==='rock'){
  playerScore++;
    return `paper beats rock you win!`

  }else if(playerSelection==='paper'&&computerSelection==='scissors'){
    computerScore++;
    return `scissors beats paper you lose!`

  }
   else if(playerSelection==='scissors'&&computerSelection==='rock'){
    computerScore++;
    return `rock beats scissors you lose!`

  }else if(playerSelection==='scissors'&&computerSelection==='paper'){
    playerScore++;
    return `scissors beats paper you win!`
  
  

}


}


const rockBtn=document.querySelector('#rock')
const paperBtn=document.querySelector('#paper')
const scissorsBtn=document.querySelector('#scissors')

let computerScore=0;
let playerScore=0;
let scoreWindow = document.querySelector('.scores');
 scoreWindow.innerHTML =playerScore + ' - ' + computerScore;


rockBtn.addEventListener('click',function(){
  playerSelection='rock'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;





})
paperBtn.addEventListener('click',function(){
  playerSelection='paper'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;





})
scissorsBtn.addEventListener('click',function(){
  playerSelection='scissors'
  computerSelection=getComputerChoice()
  playRound()
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerText=playerScore + ' - ' + computerScore;

})



// buttons is a node list. It looks and acts much like an array.
/*



const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {

  
  button.addEventListener('click', () => {
     
     playRound(playerSelection=button.id,computerSelection=getComputerChoice())
     console.log(playRound(playerSelection,computerSelection))

     
  });

});



  
rockBtn.addEventListener('click',function(){
  playRound(playerSelection=rockBtn.id,computerSelection=getComputerChoice())
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerHTML = playerScore + ' - ' + computerScore;


})
paperBtn.addEventListener('click',function(){
  playRound(playerSelection=paperBtn.id,computerSelection=getComputerChoice())
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerHTML = playerScore + ' - ' + computerScore;


})
scissorsBtn.addEventListener('click',function(){
  playRound(playerSelection=scissorsBtn.id,computerSelection=getComputerChoice())
console.log(playRound(playerSelection,computerSelection))
scoreWindow.innerHTML = playerScore + ' - ' + computerScore;


})


*/

/*


function renderScore(playerScore,computerScore) {
  scoreWindow.innerText = `${playerScore} - ${computerScore}`;
}
renderScore(playerScore,computerScore)

BİRDEN FAZLA BUTONU AYNI ANDA AKTİF HALE GETİRME
buttons.forEach((button) => {

  
  button.addEventListener('click', () => {
     
     playRound(playerSelection=button.id,computerSelection=getComputerChoice())
     console.log(playRound(playerSelection,computerSelection))

  });
});
*/

/*
BUTTONLARI AKTİF HALE GETİRME

const a=document.querySelector('#rock')
a.addEventListener('click',function(e){
  playRound(playerSelection=a.id,computerSelection=getComputerChoice())
  console.log(  playRound(playerSelection,computerSelection)  )
})

 
/*
   <div id="container">
        <button id="1">Click Me</button>
        <button id="2">Click Me</button>
        <button id="3">Click Me</button>
    </div>



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
    return `draw`
  }else if(playerSelection==='rock'&&computerSelection==='scissors'){
     playerScore++;
    return `rock beats scissors you win!`
  }
  else if(playerSelection==='rock'&&computerSelection==='paper'){
    computerScore++;
    return `paper beats rock you lose!`

  }else if(playerSelection==='paper'&&computerSelection==='rock'){
    playerScore++;
    return `paper beats rock you win!`

  }else if(playerSelection==='paper'&&computerSelection==='scissors'){
    computerScore++;
    return `scissors beats paper you lose!`

  }
   else if(playerSelection==='scissors'&&computerSelection==='rock'){
    computerScore++
    return `rock beats scissors you lose!`

  }else if(playerSelection==='scissors'&&computerSelection==='paper'){
    playerScore++;
    return `scissors beats paper you win!`
  
  
}
}









let playerScore=0;
let computerScore=0;





const game=function(){

  for(let i =0;i<5;i++){
      let answer=prompt('rock,paper,scissors?').toLowerCase()
      const playerSelection=answer;
      const computerSelection = getComputerChoice()
      console.log(playRound(playerSelection,computerSelection))
      console.log(playerScore,computerScore)

}

if(playerScore>computerScore){
  return 'Game is over! You Win!'
}else if(computerScore>playerScore){
  return 'Game is over! You Lose!'
}else{
  return `Game is over! I't draw!`
}

  }





console.log(game() )






*/

/*

tuşlara cevap ata rock paper scissors*/