const Ship = require('./btls');
const GameBoard = require('./gameboard');
const createGameBoard = require('./gameboard');

describe("test ship", () => {
  let yee;

  beforeEach(() => {
    yee = new Ship(3);
  });

  test('hit function increases damage', () => {
    yee.hit(2);
    expect(yee.damage).toBe(2);
  });

  test('hit function increases damage', () => {
    yee.hit(24);
    expect(yee.damage).toBe(24);
  });

  test('sink function works', () => {
    yee.hit(3);
    expect(yee.sunk).toBe(true);
  });

  test('sink function does not sink ship if damage too low', () => {
    yee.hit(2);
    expect(yee.sunk).toBe(false);
  });
});

describe('Game Board', () => {
  let wee;

  beforeEach(() => {
    wee = new GameBoard(10, 10);
    wee.createGameBoard();
  });

  test("gameboard has right amount of rows", () => {
    expect(wee.board.length).toBe(10);
  });
  test("gameboard has right amount of colums",()=>{
    for(i=0;i<wee.board.length;i++){
    expect(wee.board[i].length).toBe(10)
    }
  })

  test("recieves correct coordinates",()=>{


  })
});
