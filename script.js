const Board = () => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let boxes = document.querySelectorAll(".box");
    let turn = "X";

    const displayBoard = () => {
        boxes.forEach(box => {
            let boxNum = box.classList[1] - 1;

            box.textContent = board[boxNum];
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
        e.target.removeEventListener("click", placeMove);
        if(checkWinner()){
            displayWinner(checkWinner());
        }
    }

    function changeTurn(){
        if(turn === "X"){
            turn = "O";
        }else{
            turn = "X";
        }
    }

    function checkWinner(){
        for(let i = 0; i < 3; i++){
            if(board[i] == board[i+3] && board[i] == board[i+6]){
                return board[i];
            }
        }
        for(let i = 0; i <= 6; i += 3){
            if(board[i] == board[i+1] && board[i] == board[i+2]){
                return board[i];
            }
        }
        if(board[0] == board[4] && board[0] == board[8]){
            return board[0];
        }
        if(board[2] == board[4] && board[2] == board[6]){
            return board[2];
        }
    }

    function displayWinner(winner){
        removeOnClick();
        let container = document.querySelector(".winner");

        container.textContent = "The winner is " + winner;
    }

    function removeOnClick(){
        boxes.forEach(box => {
            box.removeEventListener('click', placeMove);
        });
    }

    return {board, displayBoard, addOnClick};
}; 

const disableselect = (e) => {  
    return false;  
}  
document.onselectstart = disableselect;
document.onmousedown = disableselect;

const board = Board();

board.addOnClick();
board.displayBoard();

