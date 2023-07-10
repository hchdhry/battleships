const Ship = require('./btls');
const GameBoard = require('./gameboard');
const player = require('./player');

const playerBoard = document.querySelector('.player-board');
const opponentBoard = document.querySelector('.opponent-board');

function makegrid(gridElement) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridElement.appendChild(cell);
    }
  }
}

makegrid(playerBoard);
makegrid(opponentBoard);


function gameloop() {
  const p1 = new player("yee");
  const bot = new player("alien");

  const board1 = new GameBoard(10, 10);
  board1.createGameBoard();

  const board2 = new GameBoard(10, 10);
  board2.createGameBoard();

  const carrier1 = new Ship(5);
  const battleship1 = new Ship(4);
  const cruiser1 = new Ship(3);
  const submarine1 = new Ship(3);
  const destroyer1 = new Ship(2);

  const carrier2 = new Ship(5);
  const battleship2 = new Ship(4);
  const cruiser2 = new Ship(3);
  const submarine2 = new Ship(3);
  const destroyer2 = new Ship(2);

  board2.placeship(carrier2, 1, 1);
  board2.placeship(battleship2, 2, 1);
  board2.placeship(cruiser2, 3, 1);
  board2.placeship(submarine2, 4, 1);
  board2.placeship(destroyer2, 5, 1);

  board1.placeship(carrier1, 0, 0);
  board1.placeship(battleship1, 1, 2);
  board1.placeship(cruiser1, 2, 4);
  board1.placeship(submarine1, 3, 6);
  board1.placeship(destroyer1, 4, 4);



  console.log(board2)
  console.log(board1)

  let gameOver = false;
  let currentPlayer = p1;

  while (!gameOver) {
    
    currentPlayer.taketurn(board1,1,2);

   
    if (board1.allShipsSunk()) {
      console.log(`${currentPlayer.name} wins!`);
      gameOver = true;
      break;
    }

    
    currentPlayer = currentPlayer === p1 ? bot : p1;
  }
}


