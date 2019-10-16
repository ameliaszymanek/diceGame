

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
            
            if(i == 9 || i == 17 || i == 37 || i == 52 || i == 65){
                playerMove = rollDie(20);
                if(playerMove == 1 || playerMove == 3 || playerMove == 5 || playerMove == 7 || playerMove == 9 || playerMove == 11 || playerMove == 13){
                    player1Score = 0;
                    console.log("ELEVATORS! Player 1, you landed on an elevator...and you're going down. Sorry!")
                } else if(playerMove == 2 || playerMove == 4 || playerMove == 6 || playerMove == 8 || playerMove == 10 || playerMove == 12 || playerMove == 14){
                    player1Score += playerMove + 10;
                    console.log("ELEVATORS! Player 1, you landed on an elevator...going UP an extra 10 spaces! You rolled a " +playerMove + " Your current spot is " + player1Score);
                } else{
                    player1Score += playerMove;
                }
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }

            else if(i <= 19){
                playerMove = rollDie(6);
                if(player1Score + playerMove == 20){
                    player1Score = (player1Score + playerMove) - 10;
                    console.log("EELS! Player 1, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player1Score += playerMove;
                }
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }

            else if(i >= 20 && i<= 39){
                playerMove = rollDie(8);
                if(player1Score + playerMove == 20){
                    player1Score = (player1Score + playerMove) - 10;
                    console.log("EELS! Player 1, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player1Score += playerMove;
                }
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }  

            else if(i >= 40 && i <= 59){
                playerMove = rollDie(10);
                if(player1Score + playerMove == 58){
                    player1Score = (player1Score + playerMove) -10;
                    console.log("EELS! Player 1, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player1Score += playerMove;
                }
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }        

            else if(i >= 60 && i <= 79){
                playerMove = rollDie(12);
                if(player1Score + playerMove == 62){
                    player1Score = (player1Score + playerMove) +10;
                    console.log("ESCALATORS! Congrats goofy goober! Player 1, you landed on an escalator. Time to go up 10 extra spaces!");
                } else{
                    player1Score += playerMove;
                }
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                p1Turn = false;
            }    

            else if(i >= 80 && i <= 99){
                playerMove = rollDie(14);
                if(player1Score + playerMove > 100){
                    player1Score = 100 - (player1Score + playerMove - 100)   
                } else{
                    player1Score += playerMove;
                }
             
                console.log("Player 1, you rolled a " + playerMove + " Your current spot is " + player1Score);
                
                p1Turn = false;
            }
        }

    // player 2 turn
        else{

            let i = player2Score;
            let playerMove = rollDie();

            if(i == 9 || i == 17 || i == 37 || i == 52 || i == 65){
                playerMove = rollDie(20);
                if(playerMove == 1 || playerMove == 3 || playerMove == 5 || playerMove == 7 || playerMove == 9 || playerMove == 11 || playerMove == 13){
                    player2Score = 0;
                    console.log("ELEVATORS! Player 2, you landed on an elevator...and you're going down. Sorry!")
                } else if(playerMove == 2 || playerMove == 4 || playerMove == 6 || playerMove == 8 || playerMove == 10 || playerMove == 12 || playerMove == 14){
                    player2Score += playerMove + 10;
                    console.log("ELEVATORS! Player 2, you landed on an elevator...going UP an extra 10 spaces! You rolled a " +playerMove + " Your current spot is " + player2Score);
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove + " Your current spot is " + player2Score);
                p1Turn = true;
            }


            else if(i <= 19){
                playerMove = rollDie(6);
                if(player2Score + playerMove == 20){
                    player2Score = (player2Score + playerMove) - 10;
                    console.log("EELS! Player 2, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   
            
            else if(i >=20 && i<= 39){
                playerMove = rollDie(8);
                if(player2Score + playerMove == 20){
                    player2Score = (player2Score + playerMove) - 10;
                    console.log("EELS! Player 2, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }  

            else if(i >= 40 && i <= 59){
                playerMove = rollDie(10);
                if(player2Score + playerMove == 58){
                    player2Score = (player2Score + playerMove) -10;
                    console.log("EELS! Player 2, you landed on an eel! Ouch...you'll have to go back 10 spaces");
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   

            else if(i >= 60 && i <= 79){
                playerMove = rollDie(12);
                if(player2Score + playerMove == 62){
                    player2Score = (player2Score + playerMove) +10;
                    console.log("ESCALATORS! Congrats goofy goober! Player 2, you landed on an escalator. Time to go up 10 extra spaces!");
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }   

            else if(i >= 80 && i <= 99){
                playerMove = rollDie(14);
                if(player2Score + playerMove > 100){
                    player2Score = 100 - (player2Score + playerMove - 100)   
                } else{
                    player2Score += playerMove;
                }
                console.log("Player 2, you rolled a " + playerMove+ " Your current spot is " + player2Score);
                p1Turn = true;
            }
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