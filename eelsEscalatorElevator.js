

//roll dice function
function rollDie(n){
    return (Math.floor(Math.random() * n) + 1);
}

function runGame(){
    let player1Score = 0;
    let player2Score = 0;
    let p1Turn = true;

// player 1 turn
    while(player1Score < 100 && player2Score < 100){


        if(p1Turn === true){

            let i = player1Score
            let playerMove = rollDie();
            
            if(i <= 19){
                playerMove = rollDie(6);
                player1Score += playerMove;
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }

            else if(i >= 20 && i<= 39){
                playerMove = rollDie(8);
                player1Score += playerMove;
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }  

            else if(i >= 40 && i <= 59){
                playerMove = rollDie(10);
                player1Score += playerMove;
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }        

            else if(i >= 60 && i <= 79){
                playerMove = rollDie(12);
                player1Score += playerMove;
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }    

            else if(i >= 80 && i <= 99){
                playerMove = rollDie(14);
                if(player1Score + playerMove > 100){
                    player1Score = 100 - (player1Score + playerMove - 100)   
                }
                else{
                    player1Score += playerMove;
                }
             
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                
                p1Turn = false;
            }

            // // not sure if this is written out correctly
            // else if(i == 9 || i == 34 || i == 41 || i == 67 || i == 75|| i == 82 || i == 97){
            //     playerMove = rollDie(20);
            //     player1Score += playerMove;
            //     console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
            //     p1Turn = false;
            // }
        }

    // player 2 turn
        else{

            let i = player2Score;
            let playerMove = rollDie();

            if(i <= 19){
                playerMove = rollDie(6);
                player2Score += playerMove;
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   
            
            else if(i >=20 && i<= 39){
                playerMove = rollDie(8);
                player2Score += playerMove;
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }  

            else if(i >= 40 && i <= 59){
                playerMove = rollDie(10);
                player2Score += playerMove;
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   

            else if(i >= 60 && i <= 79){
                playerMove = rollDie(12);
                player2Score += playerMove;
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   

            else if(i >= 80 && i <= 99){
                playerMove = rollDie(14);
                if(player2Score + playerMove > 100){
                    player2Score = 100 - (player2Score + playerMove - 100)   
                }
                else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }

            // //not sure if this is written out correctly 
            // else if(i == 9 || i == 34 || i == 41 || i == 67 || i == 75|| i == 82 || i == 97){
            //     playerMove = rollDie(20);
            //     player1Score += playerMove;
            //     console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
            //     p1Turn = true;
            // }
        }
    }
    //cleanup/ end game -ONCE
    if(player1Score == 100){
        console.log("You did it, you really won, Player 1!");
    }
    if(player2Score == 100){
        console.log("You did it, you really won, Player 2!");
    }
    

}

//*clean up/ end game*