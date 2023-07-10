/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/btls.js":
/*!*********************!*\
  !*** ./src/btls.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n    constructor(length) {\n      this.damage = 0;\n      this.length = length;\n      this.sunk = false;\n    }\n  \n    hit(x) {\n      this.damage += x;\n      this.issunk();\n    }\n  \n    issunk() {\n      if (this.damage >= this.length) {\n        this.sunk = true;\n      }\n    }\n  }\n  \n  module.exports = Ship;\n  \n\n//# sourceURL=webpack://battleships/./src/btls.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n\nclass GameBoard {\n  constructor(numrows, numcolumns) {\n    this.board = [];\n    this.numrows = numrows;\n    this.numcolumns = numcolumns;\n  }\n  missedshots=[]\n\n  createGameBoard() {\n    for (let i = 1; i <= this.numrows; i++) {\n      const rows = [];\n      for (let j = 1; j <= this.numcolumns; j++) {\n        rows.push(\" \");\n      }\n      this.board.push(rows);\n    }\n  }\n\n  createdom(gridElement){\n\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const cell = document.createElement('div');\n        cell.classList.add('cell');\n        gridElement.appendChild(cell);\n      }\n    }\n  }\n\n\n  placeship(ship, x, y) {\n    const shipLength = ship.length;\n  \n    if (y + shipLength > this.numcolumns || x >= this.numrows) {\n      throw new Error('Ship placement exceeds game board boundaries.');\n    }\n  \n    for (let i = 0; i < shipLength; i++) {\n      this.board[x][y + i] = 's';\n    }\n  }\n  \n  \n  \n\n  \n  \n  \n\n  receiveAttack(x, y) {\n    if(this.board[x][y]===\" \"){\n    this.board[x].splice(y, 1, \"l\");\nthis.missedshots.push([x,y])\n    }\n    else if (this.board[x][y]===\"s\") {\n      this.board[x].splice(y, 1, \"w\");\n  }\n\n}\nallShipsSunk() {\n  for (let row of this.board) {\n    if (row.includes(\"s\")) {\n      return false;\n    }\n  }\n  return true;\n}\n}\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\nconst GameBoard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst playerBoard = document.querySelector('.player-board');\nconst opponentBoard = document.querySelector('.opponent-board');\n\nconst board1 = new GameBoard(10, 10);\n  board1.createGameBoard();\n\n  const board2 = new GameBoard(10, 10);\n  board2.createGameBoard();\n\nboard1.createdom(playerBoard)\nboard2.createdom(opponentBoard)\n\n\n\n\n\n\nfunction gameloop() {\n  const p1 = new player(\"yee\");\n  const bot = new player(\"alien\");\n\n  \n\n  const carrier1 = new Ship(5);\n  const battleship1 = new Ship(4);\n  const cruiser1 = new Ship(3);\n  const submarine1 = new Ship(3);\n  const destroyer1 = new Ship(2);\n\n  const carrier2 = new Ship(5);\n  const battleship2 = new Ship(4);\n  const cruiser2 = new Ship(3);\n  const submarine2 = new Ship(3);\n  const destroyer2 = new Ship(2);\n\n  board2.placeship(carrier2, 1, 1);\n  board2.placeship(battleship2, 2, 1);\n  board2.placeship(cruiser2, 3, 1);\n  board2.placeship(submarine2, 4, 1);\n  board2.placeship(destroyer2, 5, 1);\n\n  board1.placeship(carrier1, 0, 0);\n  board1.placeship(battleship1, 1, 2);\n  board1.placeship(cruiser1, 2, 4);\n  board1.placeship(submarine1, 3, 6);\n  board1.placeship(destroyer1, 4, 4);\n\n\n\n  console.log(board2)\n  console.log(board1)\n\n  let gameOver = false;\n  let currentPlayer = p1;\n\n  while (!gameOver) {\n    \n    currentPlayer.taketurn(board1,1,2);\n\n   \n    if (board1.allShipsSunk()) {\n      console.log(`${currentPlayer.name} wins!`);\n      gameOver = true;\n      break;\n    }\n\n    \n    currentPlayer = currentPlayer === p1 ? bot : p1;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n\nclass player {\n  constructor(name) {\n    this.name = name;\n  }\n\n  taketurn(gameboard, x, y) {\n    gameboard.receiveAttack(x, y);\n  }\n\n  robot(gameboard) {\n    let rx, ry;\n    do {\n      rx = Math.floor(Math.random() * 10);\n      ry = Math.floor(Math.random() * 10);\n    } while (gameboard.missedshots.some(([x, y]) => x === rx && y === ry));\n\n    this.taketurn(gameboard, rx, ry);\n  }\n}\n\nmodule.exports = player;\n\n\n//# sourceURL=webpack://battleships/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;