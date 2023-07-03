const Ship = require('./btls');

class GameBoard {
  constructor() {
    this.gameboard = [];
    this.numrows = 10;
    this.numcolumns = 10;
  }

  createGameBoard() {
    for (let i = 0; i <= this.numrows; i++) {
      const rows = [];
      for (let j = 0; j <= this.numcolumns; j++) {
        rows.push("");
      }
      this.gameboard.push(rows);
    }
  }
}

module.exports= GameBoard;
