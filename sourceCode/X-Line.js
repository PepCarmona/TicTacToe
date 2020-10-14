/* variables are declared in order to access to different sections of the html more easily */
let container = document.querySelector(".container");
let playerStatus = document.querySelector(".playerStatus");
var moves = 0;
var dimension = 0;
var boardLength = 0;
var activePlayer = 1;

/* _____GAME BOARD SETTINGS______ */
/* activeBoard() function will get the properties of the selected game board */
function activeBoard(sel){
    let text = sel.options[sel.selectedIndex].text;
    dimension = parseInt(text.substring(0,1));
    boardLength = dimension * dimension;
    console.log("dimension: "+dimension+". BoardLength: "+boardLength);
    container.innerHTML = "";
    showGameBoard();
}

/* direct call to activeBoard to initialize variables in case of selecting default option (3x3) */
activeBoard(document.getElementById("dimensions"));

/* showGameBoard() function changes the grid disposition and number of cells depending on the selected
   game board dimensions */
   function showGameBoard(){
    // initialize local variables and each time a new game board is built
    let row = 0;
    let col = 0;
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
        col += 1;
        if (col == (dimension)){
            col = 0;
            row += 1;
        }
    }
    // this script sets the grid style depending on the selected game board
    container.style.width = (dimension * 121)+"px";
    container.style.gridTemplateColumns = "repeat("+dimension+", auto)";
}

/* ______CLICK EVENTS______ */
/* clickCell(element) function groups the actions that take place whenever the user clicks a cell */

function clickCell(element){
    if (element.dataset.clicked == "false"){
        clickPlayer(element);
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

/* clickedAnimation(element) function shows a message to notify the user that this cell is not available 
   for clicking on it again */
function clickedAnimation(){
    alert("This cell has been already clicked.");
}