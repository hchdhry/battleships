import Ship from "./btls";
import GameBoard from "./gameboard";
import player from "./player";

function gameloop(){
const p1= new player("yee")
const bot = new player ("alien")
const board1 = new GameBoard(10,10)    
const board2 = new GameBoard(10,10) 

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



}
