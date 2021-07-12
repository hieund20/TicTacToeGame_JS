var array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

var flag = 1;
var checkDrawFlag = true;
var checkNextTurnFlag = true;
var xScore = 0;
var oScore = 0;

//Set button when loading page
function setStartButton(){
    document.getElementById("btn1").value = array[0][0];
    document.getElementById("btn2").value = array[0][1];
    document.getElementById("btn3").value = array[0][2];
    document.getElementById("btn4").value = array[1][0];
    document.getElementById("btn5").value = array[1][1];
    document.getElementById("btn6").value = array[1][2];
    document.getElementById("btn7").value = array[2][0];
    document.getElementById("btn8").value = array[2][1];
    document.getElementById("btn9").value = array[2][2];
 
    document.getElementById("btn1").innerHTML = array[0][0];
    document.getElementById("btn2").innerHTML = array[0][1];
    document.getElementById("btn3").innerHTML = array[0][2];
    document.getElementById("btn4").innerHTML = array[1][0];
    document.getElementById("btn5").innerHTML = array[1][1];
    document.getElementById("btn6").innerHTML = array[1][2];
    document.getElementById("btn7").innerHTML = array[2][0];
    document.getElementById("btn8").innerHTML = array[2][1];
    document.getElementById("btn9").innerHTML = array[2][2];
}
//Check who is next turn
function checkNextTurn(){
    if(checkNextTurnFlag == true){
        if(flag == 1){
            document.getElementById("showStatusPlayer2").style.backgroundColor = "lightgreen";
            document.getElementById("showStatusPlayer1").style.backgroundColor = "white";
        }
        else if(flag == 0){
            document.getElementById("showStatusPlayer1").style.backgroundColor = "lightgreen";
            document.getElementById("showStatusPlayer2").style.backgroundColor = "white";
        }
    }
    else if(checkNextTurnFlag == false){
        document.getElementById("turn1").innerHTML = "Finish";
        document.getElementById("turn2").innerHTML = "Finish";

        document.getElementById("showStatusPlayer1").style.backgroundColor = "gray";
        document.getElementById("showStatusPlayer2").style.backgroundColor = "gray";
    }   
        
    checkNextTurnFlag = true;
}
//Disable all button block when Win or Draw
function disableButtonBlock(){
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").disabled = true;
}
//Enable all button block when click Play agaim button or Play continue button
function enableButtonBlock(){
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
}
//Check win
function checkWin(){
    //Test case 1
    if(array[0][0] != "" && array[1][0] != "" && 
    array[0][0] == array[1][0] && array[0][0] == array[2][0]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn4").style.backgroundColor = "lightgreen";
        document.getElementById("btn7").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 2
    if(array[1][1] != "" && array[2][1] != "" && 
    array[0][1] == array[1][1] && array[0][1] == array[2][1]){
        document.getElementById("btn2").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn8").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 3
    if(array[1][2] != "" && array[2][2] != "" && 
    array[0][2] == array[1][2] && array[0][2] == array[2][2]){
        document.getElementById("btn3").style.backgroundColor = "lightgreen";
        document.getElementById("btn6").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 4
    if(array[0][1] != "" && array[0][2] != "" && 
    array[0][0] == array[0][1] && array[0][0] == array[0][2]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn2").style.backgroundColor = "lightgreen";
        document.getElementById("btn3").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 5
    if(array[1][1] != "" && array[1][2] != "" && 
    array[1][0] == array[1][1] && array[1][0] == array[1][2]){
        document.getElementById("btn4").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn6").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 6
    if(array[2][1] != "" && array[2][2] != "" && 
    array[2][0] == array[2][1] && array[2][0] == array[2][2]){
        document.getElementById("btn7").style.backgroundColor = "lightgreen";
        document.getElementById("btn8").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 7
    if(array[1][1] != "" && array[2][2] != "" && 
    array[0][0] == array[1][1] && array[0][0] == array[2][2]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 8
    if(array[1][1] != "" && array[2][0] != "" && 
    array[0][2] == array[1][1] && array[0][2] == array[2][0]){
        document.getElementById("btn3").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn7").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("player1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("player2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    else if(array[0][0] != "" && array[0][1] != "" && array[0][2] != "" && 
            array[1][0] != "" && array[1][1] != "" && array[1][2] != "" &&
            array[2][0] != "" && array[2][1] != "" && array[2][2] != "" && checkDrawFlag == true){
                document.getElementById("turn1").innerHTML = "Draw";
                document.getElementById("turn2").innerHTML = "Draw";
                checkNextTurnFlag = true;
                disableButtonBlock();
            }
    checkNextTurn();
    checkDrawFlag = true;

}
//Show score
function showScore(){
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore;
}
//Play again button
function playAgainButton(){
    enableButtonBlock();

    array[0][0] = "";
    array[0][1] = "";
    array[0][2] = "";
    array[1][0] = "";
    array[1][1] = "";
    array[1][2] = "";
    array[2][0] = "";
    array[2][1] = "";
    array[2][2] = "";

    document.getElementById("btn1").value = array[0][0];
    document.getElementById("btn2").value = array[0][1];
    document.getElementById("btn3").value = array[0][2];
    document.getElementById("btn4").value = array[1][0];
    document.getElementById("btn5").value = array[1][1];
    document.getElementById("btn6").value = array[1][2];
    document.getElementById("btn7").value = array[2][0];
    document.getElementById("btn8").value = array[2][1];
    document.getElementById("btn9").value = array[2][2];
 
    document.getElementById("btn1").innerHTML = array[0][0];
    document.getElementById("btn2").innerHTML = array[0][1];
    document.getElementById("btn3").innerHTML = array[0][2];
    document.getElementById("btn4").innerHTML = array[1][0];
    document.getElementById("btn5").innerHTML = array[1][1];
    document.getElementById("btn6").innerHTML = array[1][2];
    document.getElementById("btn7").innerHTML = array[2][0];
    document.getElementById("btn8").innerHTML = array[2][1];
    document.getElementById("btn9").innerHTML = array[2][2];

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
    document.getElementById("btn5").style.backgroundColor = "white";
    document.getElementById("btn6").style.backgroundColor = "white";
    document.getElementById("btn7").style.backgroundColor = "white";
    document.getElementById("btn8").style.backgroundColor = "white";
    document.getElementById("btn9").style.backgroundColor = "white";

    document.getElementById("turn1").innerHTML = "Player 1: X";
    document.getElementById("turn2").innerHTML = "Player 1: O";

    document.getElementById("showStatusPlayer1").style.backgroundColor = "white";
    document.getElementById("showStatusPlayer2").style.backgroundColor = "white";

    document.getElementById("player1Score").style.backgroundColor = "white";
    document.getElementById("player2Score").style.backgroundColor = "white";
    xScore = 0;
    oScore = 0;
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore
}
//Play continue button
function playContinueButton(){
    enableButtonBlock();

    array[0][0] = "";
    array[0][1] = "";
    array[0][2] = "";
    array[1][0] = "";
    array[1][1] = "";
    array[1][2] = "";
    array[2][0] = "";
    array[2][1] = "";
    array[2][2] = "";

    document.getElementById("btn1").value = array[0][0];
    document.getElementById("btn2").value = array[0][1];
    document.getElementById("btn3").value = array[0][2];
    document.getElementById("btn4").value = array[1][0];
    document.getElementById("btn5").value = array[1][1];
    document.getElementById("btn6").value = array[1][2];
    document.getElementById("btn7").value = array[2][0];
    document.getElementById("btn8").value = array[2][1];
    document.getElementById("btn9").value = array[2][2];
 
    document.getElementById("btn1").innerHTML = array[0][0];
    document.getElementById("btn2").innerHTML = array[0][1];
    document.getElementById("btn3").innerHTML = array[0][2];
    document.getElementById("btn4").innerHTML = array[1][0];
    document.getElementById("btn5").innerHTML = array[1][1];
    document.getElementById("btn6").innerHTML = array[1][2];
    document.getElementById("btn7").innerHTML = array[2][0];
    document.getElementById("btn8").innerHTML = array[2][1];
    document.getElementById("btn9").innerHTML = array[2][2];

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
    document.getElementById("btn5").style.backgroundColor = "white";
    document.getElementById("btn6").style.backgroundColor = "white";
    document.getElementById("btn7").style.backgroundColor = "white";
    document.getElementById("btn8").style.backgroundColor = "white";
    document.getElementById("btn9").style.backgroundColor = "white";

    document.getElementById("turn1").innerHTML = "Player 1: X";
    document.getElementById("turn2").innerHTML = "Player 1: O";

    document.getElementById("showStatusPlayer1").style.backgroundColor = "white";
    document.getElementById("showStatusPlayer2").style.backgroundColor = "white";

    document.getElementById("player1Score").style.backgroundColor = "white";
    document.getElementById("player2Score").style.backgroundColor = "white";
    
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore
}
//Set value of button 
function setValueBtn1(){
    if(flag == 1){
        array[0][0] = "x";
        document.getElementById("btn1").innerHTML = array[0][0];
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[0][0] = "o";
        document.getElementById("btn1").innerHTML = array[0][0];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn2(){
    if(flag == 1){
        array[0][1] = "x";
        document.getElementById("btn2").innerHTML = array[0][1];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[0][1] = "o";
        document.getElementById("btn2").innerHTML = array[0][1];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn3(){
    if(flag == 1){
        array[0][2] = "x";
        document.getElementById("btn3").innerHTML = array[0][2];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[0][2] = "o";
        document.getElementById("btn3").innerHTML = array[0][2];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn4(){
    if(flag == 1){
        array[1][0] = "x";
        document.getElementById("btn4").innerHTML = array[1][0];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[1][0] = "o";
        document.getElementById("btn4").innerHTML = array[1][0];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn5(){
    if(flag == 1){
        array[1][1] = "x";
        document.getElementById("btn5").innerHTML = array[1][1];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[1][1] = "o";
        document.getElementById("btn5").innerHTML = array[1][1];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn6(){
    if(flag == 1){
        array[1][2] = "x";
        document.getElementById("btn6").innerHTML = array[1][2];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[1][2] = "o";
        document.getElementById("btn6").innerHTML = array[1][2];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn7(){
    if(flag == 1){
        array[2][0] = "x";
        document.getElementById("btn7").innerHTML = array[2][0];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[2][0] = "o";
        document.getElementById("btn7").innerHTML = array[2][0];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn8(){
    if(flag == 1){
        array[2][1] = "x";
        document.getElementById("btn8").innerHTML = array[2][1];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[2][1] = "o";
        document.getElementById("btn8").innerHTML = array[2][1];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}

function setValueBtn9(){
    if(flag == 1){
        array[2][2] = "x";
        document.getElementById("btn9").innerHTML = array[2][2];
        checkWin();
        flag = 0;
        showScore();
        // checkNextTurn();
        return;
    }
    else if(flag == 0){
        array[2][2] = "o";
        document.getElementById("btn9").innerHTML = array[2][2];
        checkWin();
        flag = 1;
        showScore();
        // checkNextTurn();
    }
}
/*------------------*/