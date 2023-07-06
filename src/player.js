const Ship = require('./btls');
const GameBoard = require('./gameboard');

class player{
    constructor(name){
        this.name=name
    }

    taketurn(gameboard,x,y){
gameboard.receiveAttack(x,y)
    }
    
    robot(gameboard) {
        let rx, ry;
        do {
          rx = Math.floor(Math.random() * 10);
          ry = Math.floor(Math.random() * 10);
        } while (gameboard.missedshots.some(([x, y]) => x === rx && y === ry));
      
        this.taketurn(gameboard, rx, ry);
      }}
      


module.exports = player;