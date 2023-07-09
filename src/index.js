import Ship from "./btls";
import GameBoard from "./gameboard";
import player from "./player";

function gameloop(){
const p1= new player("yee")
const bot = new player ("alien")
const board1 = new GameBoard(10,10)    
board1.createGameBoard()
const board2 = new GameBoard(10,10) 
board2.createGameBoard()

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
board2.placeship(battleship2, 9, 1);
board2.placeship(cruiser2, 3, 1);
board2.placeship(submarine2, 4, 1);
board2.placeship(destroyer2, 5, 1);


console.log(board2)

}
gameloop()