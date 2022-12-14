const Board = () => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let boxes = document.querySelectorAll(".box");
    let turn = "X";
    let count = 0;

    const displayBoard = () => {
        boxes.forEach(box => {
            let boxNum = box.classList[1] - 1;

            box.textContent = board[boxNum];
        });
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        turn = "X";
        count = 0;
        displayBoard();
        addOnClick();
        let display = document.querySelector(".turn");
        let winner = document.querySelector(".winner");
        let container = document.querySelector(".container");
        display.textContent = turn + "'s turn";
        winner.textContent = "";
        boxes.forEach(box => {
            box.classList.remove('won');
        });
    }

    const addOnClick = () => {
        boxes.forEach(box => {
            box.addEventListener("click", placeMove);
        });
    }

    function placeMove(e){
        e.target.textContent = turn;
        let boxNum = e.target.classList[1] - 1;
        board[boxNum] = turn;
        changeTurn();
        e.target.removeEventListener("click", placeMove)
        console.log(checkWinner());
        console.log("C")
        if(checkWinner()){
            displayWinner(checkWinner());
        }
    }

    function changeTurn(){
        let display = document.querySelector(".turn");
        if(turn === "X"){
            turn = "O";
        }else{
            turn = "X";
        }
        display.textContent = turn + "'s turn";
        count++;
    }

    function checkWinner(){
        console.table(board);
        if(count == 9){
            return "tie";
        }
        for(let i = 0; i < 3; i++){
            if(board[i] == board[i+3] && board[i] == board[i+6] && board[i] != ""){
                console.log(board[i] + " " + i);
                return board[i];
            }
        }
        for(let i = 0; i <= 6; i += 3){
            if(board[i] == board[i+1] && board[i] == board[i+2] && board[i] != ""){
                return board[i];
            }
        }
        if(board[0] == board[4] && board[0] == board[8] && board[i] != ""){
            return board[0];
        }
        if(board[2] == board[4] && board[2] == board[6] && board[i] != ""){
            return board[2];
        }
        return undefined;
    }

    function displayWinner(winner){
        removeOnClick();
        let container = document.querySelector(".winner");
        if(winner === "tie"){
            container.textContent = "It's a tie";
        }
        else{
            container.textContent = "The winner is " + winner;
        }

        boxes.forEach(box => {
            box.classList.add('won');
        });
    }

    function removeOnClick(){
        boxes.forEach(box => {
            box.removeEventListener('click', placeMove);
        });
    }

    return {board, displayBoard, addOnClick, resetBoard};
}; 

const disableselect = (e) => {  
    return false;  
}  
document.onselectstart = disableselect;
document.onmousedown = disableselect;

const board = Board();

board.addOnClick();
board.displayBoard();

let reset = document.querySelector(".reset");

reset.addEventListener('click', board.resetBoard);


