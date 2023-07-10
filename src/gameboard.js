const Ship = require('./btls');

class GameBoard {
  constructor(numrows, numcolumns) {
    this.board = [];
    this.numrows = numrows;
    this.numcolumns = numcolumns;
  }
  missedshots=[]

  createGameBoard() {
    for (let i = 1; i <= this.numrows; i++) {
      const rows = [];
      for (let j = 1; j <= this.numcolumns; j++) {
        rows.push(" ");
      }
      this.board.push(rows);
    }
  }


  placeship(ship, x, y) {
    const shipLength = ship.length;
  
    if (y + shipLength > this.numcolumns || x >= this.numrows) {
      throw new Error('Ship placement exceeds game board boundaries.');
    }
  
    for (let i = 0; i < shipLength; i++) {
      this.board[x][y + i] = 's';
    }
  }
  
  
  

  
  
  

  receiveAttack(x, y) {
    if(this.board[x][y]===" "){
    this.board[x].splice(y, 1, "l");
this.missedshots.push([x,y])
    }
    else if (this.board[x][y]==="s") {
      this.board[x].splice(y, 1, "w");
  }

}
allShipsSunk() {
  for (let row of this.board) {
    if (row.includes("s")) {
      return false;
    }
  }
  return true;
}
}

module.exports = GameBoard;
