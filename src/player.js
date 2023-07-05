const Ship = require('./btls');
const GameBoard = require('./gameboard');

class player{
    constructor(name){
        this.name=name
    }

    taketurn(gameboard,x,y){
gameboard.receiveAttack(x,y)
    }
}


module.exports = player;