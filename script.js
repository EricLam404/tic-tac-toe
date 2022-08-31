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
        changeTurn();
        e.target.removeEventListener("click", placeMove);
    }
    function changeTurn(){
        if(turn === "X"){
            turn = "O";
        }else{
            turn = "X";
        }
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

