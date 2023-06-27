const Ship = require('./btls');

let yee;

beforeEach(() => {
  yee = new Ship(3, 3, false); // Assign a new instance to the outer yee variable
});

test('hit function decrease health', () => {
  yee.hit(1);
  expect(yee.health).toBe(2);
});
