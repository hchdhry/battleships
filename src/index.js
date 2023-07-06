import Ship from "./btls";
import GameBoard from "./gameboard";
import player from "./player";

const bot = new player("bot")

const wee = new GameBoard(10, 10);
wee.createGameBoard()
bot.robot(wee)

console.log(wee.board);
