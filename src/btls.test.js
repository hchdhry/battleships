const Ship = require('./btls');
const createGameBoard = require('./gameboard');


describe("test ship",()=>{
  let yee;
beforeEach(() => {
  yee = new Ship(3);
})


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
})

describe('Game Board', () => {
  test('Game board should be a 10x10 array', () => {
    const gameBoard = createGameBoard();
    expect(gameBoard.length).toBe(10);
    gameBoard.forEach(row => {
      expect(row.length).toBe(10);
    });
  });

  test('Initial values should be empty strings', () => {
    const gameBoard = createGameBoard();
    gameBoard.forEach(row => {
      row.forEach(cell => {
        expect(cell).toBe("");
      });
    });
  });
});
