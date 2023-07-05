const Ship = require('./btls');
const GameBoard = require('./gameboard');
const player = require('./player')

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
    expect(wee.board[6][6]).toBe("l");
  });

  test("receives correct coordinates", () => {
    wee.receiveAttack(5, 8);
    expect(wee.board[5][8]).toBe("l");
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
  test("keep track of missed shots",()=>{
    wee.receiveAttack(5,8)
    expect(wee.missedshots[0]).toEqual([5,8])
  })
  test("keep track of missed shots",()=>{
    wee.receiveAttack(5,8)
    wee.receiveAttack(3,4)
    wee.receiveAttack(2,9)
    expect(wee.missedshots[0]).toEqual([5,8])
    expect(wee.missedshots[1]).toEqual([3,4])
    expect(wee.missedshots[2]).toEqual([2,9])
  })
});

describe("test player functionality", () => {
  beforeEach(() => {
    playerone = new player("hassan");
    playertwo = new player("AI")
    board1 = new GameBoard(10, 10);
    board2 = new GameBoard(10, 10);
    board1.createGameBoard()
    board2.createGameBoard()
  });

  test("correct player takes turn", () => {
    playerone.taketurn(board1, 5, 6);
    expect(board1.board[5][6]).toEqual("l");
    expect(board2.board[5][6]).toBe(" ")
  });
  test("correct player takes turn", () => {
    playertwo.taketurn(board2, 9, 9);
    expect(board2.board[9][9]).toEqual("l");
    expect(board1.board[9][9]).toBe(" ")
  });
  test("ai makes legal moves",()=>{
    board1.receiveAttack(9,8)

  })
});
