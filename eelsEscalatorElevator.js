"use strict"

// runGame()

//roll dice function
function rollDie(n){
    return (Math.floor(Math.random() * n) + 1);
}
function turnResults(playerScore, playerMove, whichPlayer){
    let moveCalculation = playerScore + playerMove;
    if(moveCalculation == 20 || moveCalculation == 58){
        playerScore = (playerScore + playerMove) - 10;
        console.log("EELS! " + whichPlayer +", you landed on an eel! Ouch...you'll have to go back 10 spaces");
    } 
    else if(moveCalculation == 62){
        playerScore = (playerScore + playerMove) +10;
        console.log("ESCALATORS! Congrats goofy goober!" + whichPlayer + ", you landed on an escalator. Time to go up 10 extra spaces!");
    }
    else if(moveCalculation == 9 || moveCalculation == 17 || moveCalculation == 37 || moveCalculation == 52 || moveCalculation == 65){
        if(playerMove == 1 || playerMove == 3 || playerMove == 5 || playerMove == 7 || playerMove == 9 || playerMove == 11 || playerMove == 13){
            playerScore = 0;
            console.log("ELEVATORS! " + whichPlayer + ", you landed on an elevator...and you're going all the way down. Sorry!")
        } else if(playerMove == 2 || playerMove == 4 || playerMove == 6 || playerMove == 8 || playerMove == 10 || playerMove == 12 || playerMove == 14){
            playerScore += playerMove + 10;
            console.log("ELEVATORS! " + whichPlayer + ", you landed on an elevator...going UP an extra 10 spaces!");
        } else{
            player1Score += playerMove;
        }
        console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + playerScore);
    }
    else{
        playerScore += playerMove;
    }
    console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + playerScore);
    return playerScore;
}

function player1Turn(player1Score){
    let i = player1Score
    let playerMove = rollDie();
    
    if(i == 9 || i == 17 || i == 37 || i == 52 || i == 65){
        playerMove = rollDie(20);
        player1Score = turnResults(player1Score, playerMove, "Player 1")
    }

    else if(i <= 19){
        playerMove = rollDie(6);
        player1Score = turnResults(player1Score, playerMove, "Player 1")
    }

    else if(i >= 20 && i<= 39){
        playerMove = rollDie(8);
        player1Score = turnResults(player1Score, playerMove, "Player 1")
    }  

    else if(i >= 40 && i <= 59){
        playerMove = rollDie(10);
        player1Score = turnResults(player1Score, playerMove, "Player 1")
    }        

    else if(i >= 60 && i <= 79){
        playerMove = rollDie(12);
        player1Score = turnResults(player1Score, playerMove, "Player 1")
    }    

    else if(i >= 80 && i <= 99){
        playerMove = rollDie(14);
        if(player1Score + playerMove > 100){
            player1Score = 100 - (player1Score + playerMove - 100)   
        } else{
            player1Score += playerMove;
        }
        
        console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        
      
    }
    return player1Score;
}
function player2Turn(player2Score){
    let i = player2Score;
    let playerMove = rollDie();

    if(i == 9 || i == 17 || i == 37 || i == 52 || i == 65){
        playerMove = rollDie(20);
        player2Score = turnResults(player1Score, playerMove, "Player 2")
    
    }
    else if(i <= 19){
        playerMove = rollDie(6);
        player2Score = turnResults(player2Score, playerMove, "Player 2");
    }   
    
    else if(i >=20 && i<= 39){
        playerMove = rollDie(8);
        player2Score = turnResults(player2Score, playerMove, "Player 2");
    }  

    else if(i >= 40 && i <= 59){
        playerMove = rollDie(10);
        player2Score = turnResults(player2Score, playerMove, "Player 2");
    }   

    else if(i >= 60 && i <= 79){
        playerMove = rollDie(12);
        player2Score = turnResults(player2Score, playerMove, "Player 2");
    }   

    else if(i >= 80 && i <= 99){
        playerMove = rollDie(14);
        if(player2Score + playerMove > 100){
            player2Score = 100 - (player2Score + playerMove - 100)   
        } else{
            player2Score += playerMove;
        }
        console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
    
    }

    return player2Score;
}
function runGame(){
    let player1Score = 0;
    let player2Score = 0;

// player 1 turn
    while(player1Score < 100 && player2Score < 100){
        player1Score = player1Turn(player1Score);
        player2Score = player2Turn(player2Score);   
    }
    //cleanup/ end game -ONCE
    if(player1Score == 100){
        console.log("You did it, you really won, Player 1!");
    }
    if(player2Score == 100){
        console.log("You did it, you really won, Player 2!");
    }
    

}

// function call is equal to the return