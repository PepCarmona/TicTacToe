/* variables are declared in order to access to different sections of the html more easily */
let container = document.querySelector(".container");
var dimension = 0;
var boardLength = 0;

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