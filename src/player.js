const Ship = require('./btls');
const GameBoard = require('./gameboard');

class player{
    constructor(name){
        this.name=name
    }

    taketurn(gameboard,x,y){
gameboard.receiveAttack(x,y)
    }

    robot(gameboard){
        const rx = Math.floor(Math.random() * 10);
        const ry = Math.floor(Math.random() * 10);
        this.taketurn(gameboard,rx,ry)


    }
}


module.exports = player;