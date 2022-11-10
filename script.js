

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










  




/*
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