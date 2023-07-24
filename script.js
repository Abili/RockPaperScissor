function getComputerChoice(){
    const randoms = ["rock", "paper", "scissors"];
    const result = Math.floor(Math.random() * randoms.length);
    return randoms[result];
}


function playRound(playerSelection, computerSelection) {
    
  
    if (playerSelection === computerSelection ){
      return "It's a draw.";
    }
    else if( 
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock")||
      (playerSelection === "scissors" && computerSelection === "paper")){
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
      }
        
     }

function game(){
      let playerScore = 0;
      let  computerScore = 0;
      let result;

      for(let i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Input your selection");
        result = playRound(playerSelection, computerSelection);
        

        if(result.startsWith("You win")){
          playerScore++
        }
        else if(result.startsWith("You lose")){
          computerScore++
        }
      }

      if(playerScore>computerScore){
        console.log("you win")
      }else if(computerScore>playerScore){
        console.log("you lose")
      }
      else{
        console.log("its a draw")
      }
  return document.getElementById('screen').innerHTML = result;
}
game()
  