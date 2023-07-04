const Ship = require('./btls');
const GameBoard = require('./gameboard');

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
  let yee;

  beforeEach(() => {
    wee = new GameBoard(10, 10);
    yee = new Ship(3);
    wee.createGameBoard();
  });

  test("gameboard has right amount of rows", () => {
    expect(wee.board.length).toBe(10);
  });

  test("gameboard has right amount of columns", () => {
    for (let i = 0; i < wee.board.length; i++) {
      expect(wee.board[i].length).toBe(10);
    }
  });

  test("receives correct coordinates", () => {
    wee.receiveAttack(6, 6);
    expect(wee.board[6][6]).toBe("x");
  });

  test("receives correct coordinates", () => {
    wee.receiveAttack(5, 8);
    expect(wee.board[5][8]).toBe("x");
  });

  test("places ship at correct location", () => {
    wee.placeship(yee, 5, 7);
    expect(wee.board[5][7]).toBe("s");
  });
  test("places ship at correct quantitiy", () => {
    wee.placeship(yee, 5, 7);
      expect(wee.board[5][7]).toBe("s");
      expect(wee.board[5][8]).toBe("s");
      expect(wee.board[5][9]).toBe("s");
  });
});
