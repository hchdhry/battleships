const Ship = require('./btls');

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
