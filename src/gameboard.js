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

  placeship(ship, x, y) {
    for (let i = 0; i < ship.length; i++) {
      this.board[x].splice(y+i, 1, "s");
    }
  }

  receiveAttack(x, y) {
    this.board[x].splice(y, 1, "x");
  }
}

module.exports = GameBoard;
