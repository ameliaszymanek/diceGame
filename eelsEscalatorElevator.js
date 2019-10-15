

//*set up*

function runGame(){
//set up  -ONCE
    let player1Score = 0;
    let player2Score = 0;

//gameplay loop- with while loop -OVER, etc.
    let continueGame = true
    
    while(continueGame === true){
        if (player1Score > 100 && player2Score > 100){
            rollDie(n)++;
    }
    else()
        
    

    }
//cleanup/ end game -ONCE



}



//roll dice function
function rollDie(n){
    return (Math.floor(Math.random() * n) + 1);
}

function rollDice(){

    let p1Turn = true;
// player 1 turn
    if(p1Turn === true){

        let i = player1Score
        let playerMove = rollDie();
        
        if(i <= 19){
            playerMove = rollDie(6);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }

        else if(i >= 20 && i<= 39){
            playerMove = rollDie(8);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }  

        else if(i >= 40 && i <= 59){
            playerMove = rollDie(10);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }        

        else if(i >= 60 && i <= 79){
            playerMove = rollDie(12);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }    

        else if(i >= 80 && i <= 99){
            playerMove = rollDie(14);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }

        // not sure if this is written out correctly
        else if(i = 9, 34, 41, 67, 75, 82, 97){
            playerMove = rollDie(20);
            player1Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
        }
        // have to write something if i = 100 saying they won
    }

// player 2 turn
    else{

        let i = player2Score;
        let playerMove = rollDie();

        if(i <= 19){
            playerMove = rollDie(6);
            player2Score += playerMove;
            console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
        }   
        
        else if(i >=20 && i<= 39){
            playerMove = rollDie(8);
            player2Score += playerMove;
            console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
        }  

        else if(i >= 40 && i <= 59){
            playerMove = rollDie(10);
            player2Score += playerMove;
            console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score)
        }   

        else if(i >= 60 && i <= 79){
            playerMove = rollDie(12);
            player2Score += playerMove;
            console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
        }   

        else if(i >= 80 && i <= 99){
            playerMove = rollDie(14);
            player2Score += playerMove;
            console.log("Player 1, you rolled a " + playerMove+ " Your current spot is " + player2Score);
        }

        //not sure if this is written out correctly 
        else if(i = 9, 34, 41, 67, 75, 82, 97){
            playerMove = rollDie(20);
            player1Score += playerMove;
            console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
        }
         // have to write something if i = 100 saying they won
    }
}

//*clean up/ end game*