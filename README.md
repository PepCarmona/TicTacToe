# X-Line

X-Line is a web based game software which main objective is to allign three or more cells of the same player.

This software is intended to provide a general and scalable solution to a Tic Tac Toe style of game.
The whole project is developed using 'html' as information storage technology, 'css' for applying style and visual enhnacement code, and 'javascript' in order to provide user interaction support. 

At this point the project runs without any dependencies and almost on every web browser.

Features and changes are listed below:

Changelog v0.0.3 [14/10/2020] {

    - win conditions and game over -

    ·   added 'check()' function that groups different wining conditions evaluation subfunctions
    ·   added 'checkRow()' function to check win condition in a clicked row
    ·   added 'checkColumn()' function to check win conditions in a clicked column
    ·   added 'setDiagonals()' function to find cells that form the main and secondary diagonals of the grid 
        (stored in  'mainDiagonal' and 'secondaryDiagonal' variables)
    ·   added 'checkMainDiagonal()' function to check win contitions if a cell is in the main diagonal
    ·   added 'checkSecondaryDiagonal()' function to check win conditions if a cell is in the secondary diagonal
    ·   added 'gameStatus' class div to show game state
    ·   cells created in 'showGameBoard()' are now grouped in an iterable 'cells' array in order to filter and check
    ·   removed console.log instruction in 'activeBoard()' (line 15) used previously to check software flow information
}

Changelog v0.0.2 [14/10/2020] {

    - player and click mechanics -  

    ·   added 'playerStatus' class div to show player information
    ·   added 'move' variable to store the number of moves made in total
    ·   added 'activePlayer' variable to store the current player
    ·   added 'clickCell()' event listener to every cell on creation
    ·   added player dataset to "cell" class divs
    ·   added clicked dataset functionality - show message when clicking on an already clikced cell
    ·   show "X" or "O" depending on the player that clicked
    ·   show current player and number of moves in 'playerStatus' div
}

Changelog v0.0.1 [14/10/2020] {

    - grid visual representation - 

    ·   game board dynamic representation
    ·   selectable game board dimensions
    ·   game board positioning
    ·   basic color and border designs
}