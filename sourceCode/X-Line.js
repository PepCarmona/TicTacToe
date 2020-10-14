/* variables and functions are declared in order to ease acces along the document */
let container = document.querySelector(".container");
let playerStatus = document.querySelector(".playerStatus");
let gameStatus = document.querySelector(".gameStatus");
var moves = 0;
var dimension = 0;
var boardLength = 0;
var activePlayer = 1;
let cells = [];
var mainDiagonal = [];
var secondaryDiagonal = [];
function setDiagonals(squaredArray){
    let row1 = 0;
    let row2 = 0;
    for (let i=0; i<boardLength; i++){
        if (squaredArray[i].dataset.row == row1 && squaredArray[i].dataset.col == row1){
            mainDiagonal.push(squaredArray[i]);
            row1 += 1;
        }
        if (squaredArray[i].dataset.row == row2 && squaredArray[i].dataset.col == (dimension-row2-1)){
            secondaryDiagonal.push(squaredArray[i]);
            row2 += 1;
        }
    }
}

/* _____GAME BOARD SETTINGS______ */
/* activeBoard() function will get the properties of the selected game board */
function activeBoard(sel){
    let text = sel.options[sel.selectedIndex].text;
    dimension = parseInt(text.substring(0,1));
    boardLength = dimension * dimension;
    container.innerHTML = "";
    showGameBoard();
}

/* direct call to activeBoard to initialize variables in case of selecting default option (3x3) */
activeBoard(document.getElementById("dimensions"));

/* showGameBoard() function changes the grid disposition and number of cells depending on the selected
   game board dimensions */
   function showGameBoard(){
    // initialize local variables each time a new game board is built
    let row = 0;
    let col = 0;
    cells = [];
    diagonalPrincipal = [];
    diagonalSecundaria = [];
    // this loop creates and appends as many div cell elements as defined by the boardLength variable 
    for (var i=0; i<boardLength; i++){
        var node = document.createElement("div");
        node.className = "cell";
        node.dataset.row = row;
        node.dataset.col = col;
        node.dataset.index = i;
        node.dataset.clicked = false;
        node.addEventListener("click", function() {clickCell(this);});
        node.innerHTML = i;
        container.appendChild(node);
        cells.push(node);
        col += 1;
        if (col == (dimension)){
            col = 0;
            row += 1;
        }
    }
    // this script sets the grid style depending on the selected game board
    container.style.width = (dimension * 121)+"px";
    container.style.gridTemplateColumns = "repeat("+dimension+", auto)";
    // and calls the setDiagonals() function in order to store the cells that are part of the main and secondary diagonal
    setDiagonals(cells);
}

/* ______CLICK EVENTS______ */
/* clickCell(element) function groups the actions that take place whenever the user clicks a cell */

function clickCell(element){
    if (activePlayer == 0){
        alert("Game is Over")
    } else if (element.dataset.clicked == "false"){
        clickPlayer(element);
        check(element);
    } else clickedAnimation();
}

/* clickPlayer(element) function checks which player clicked the cell and marks the cell depending on it */

function clickPlayer(element){
    if (activePlayer == 1){
        element.innerHTML = "O";
        element.dataset.player = 1;
        activePlayer = 2;
        playerStatus.innerHTML = "ACTIVE : 2";
    } else if (activePlayer == 2){
        element.innerHTML = "X";
        element.dataset.player = 2;
        activePlayer = 1;
        playerStatus.innerHTML = "ACTIVE : 1";
    }
    element.dataset.clicked = true;
    moves += 1;
    playerStatus.innerHTML += " | MOVES : "+moves;
}

/* ______WIN CONDITIONS______ */
/* check(element) functions verifies if the win conditions are met or if the game result is draw */

function check(element){
    let rowResult = checkRow(element);
    let columnResult = checkColumn(element);
    let mainDiagonalResult = checkMainDiagonal(element);
    let secondaryDiagonalResult = checkSecondaryDiagonal(element);
    if (rowResult || columnResult || mainDiagonalResult || secondaryDiagonalResult){
        gameStatus.innerHTML = "The winner is: player "+element.dataset.player+".";
        activePlayer = 0; // prevents an infinite game loop
    } else if (moves == boardLength){
        gameStatus.innerHTML = "Draw."
    }
}

/* checkRow(element) function filters the cells with the same element.dataset.row value and then verifies
   if every one of them were clicked by the same player */
   function checkRow(element){
    let rowCells = cells.filter(cell => cell.dataset.row == element.dataset.row);
    return rowCells.every(cell => cell.dataset.player == rowCells[0].dataset.player);
}

/* checkColumn(element) function filters the cells with the same element.dataset.col value and then verifies
   if every one of them were clicked by the same player */
   function checkColumn(element){
    let columnCells = cells.filter(cell => cell.dataset.col == element.dataset.col);
    return columnCells.every(cell => cell.dataset.player == columnCells[0].dataset.player);
}
/* checkDiagonal(element) functions filter the cells in the diagonals of the current board
   and then verifies if every one of them were clicked by the same player */

   function checkMainDiagonal(element){
    if (mainDiagonal.includes(element)){
        return mainDiagonal.every(cell => cell.dataset.player == mainDiagonal[0].dataset.player);
    }
    
}
function checkSecondaryDiagonal(element){
    if (secondaryDiagonal.includes(element)){
        return secondaryDiagonal.every(cell => cell.dataset.player == secondaryDiagonal[0].dataset.player);
    }
    
}

/* ______ALREADY CLICKED______ */
/* clickedAnimation(element) function shows a message to notify the user that this cell is not available 
   for clicking on it again */
function clickedAnimation(){
    alert("This cell has been already clicked.");
}