const Ship = require('./btls');

class GameBoard {
  constructor(numrows, numcolumns) {
    this.board = [];
    this.numrows = numrows;
    this.numcolumns = numcolumns;
  }


  createGameBoard() {
    for (let i = 1; i <= this.numrows; i++) {
      const rows = [];
      for (let j = 1; j <= this.numcolumns; j++) {
        rows.push(" ");
      }
      this.board.push(rows);
    }
  }
}

module.exports= GameBoard;
