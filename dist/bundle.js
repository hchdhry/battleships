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

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n\nclass GameBoard {\n  constructor(numrows, numcolumns) {\n    this.board = [];\n    this.numrows = numrows;\n    this.numcolumns = numcolumns;\n  }\n  missedshots=[]\n\n  createGameBoard() {\n    for (let i = 1; i <= this.numrows; i++) {\n      const rows = [];\n      for (let j = 1; j <= this.numcolumns; j++) {\n        rows.push(\" \");\n      }\n      this.board.push(rows);\n    }\n  }\n\n  placeship(ship, x, y) {\n    const shipLength = ship.length;\n  \n    if (y + shipLength > this.numcolumns || x >= this.numrows) {\n      throw new Error('Ship placement exceeds game board boundaries.');\n    }\n  \n    for (let i = 0; i < shipLength; i++) {\n      this.board[x][y + i] = 's';\n    }\n  }\n  \n  \n  \n\n  \n  \n  \n\n  receiveAttack(x, y) {\n    if(this.board[x][y]===\" \"){\n    this.board[x].splice(y, 1, \"l\");\nthis.missedshots.push([x,y])\n    }\n    else if (this.board[x][y]===\"s\") {\n      this.board[x].splice(y, 1, \"w\");\n  }\n\n}\n}\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n/* harmony import */ var _btls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_btls__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction gameloop(){\nconst p1= new (_player__WEBPACK_IMPORTED_MODULE_2___default())(\"yee\")\nconst bot = new (_player__WEBPACK_IMPORTED_MODULE_2___default()) (\"alien\")\nconst board1 = new (_gameboard__WEBPACK_IMPORTED_MODULE_1___default())(10,10)    \nboard1.createGameBoard()\nconst board2 = new (_gameboard__WEBPACK_IMPORTED_MODULE_1___default())(10,10) \nboard2.createGameBoard()\n\nconst carrier1 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(5);\nconst battleship1 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(4);\nconst cruiser1 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(3);\nconst submarine1 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(3);\nconst destroyer1 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(2);\n\nconst carrier2 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(5);\nconst battleship2 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(4);\nconst cruiser2 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(3);\nconst submarine2 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(3);\nconst destroyer2 = new (_btls__WEBPACK_IMPORTED_MODULE_0___default())(2);\n\nboard2.placeship(carrier2, 1, 1);\nboard2.placeship(battleship2, 9, 9);\nboard2.placeship(cruiser2, 3, 1);\nboard2.placeship(submarine2, 4, 1);\nboard2.placeship(destroyer2, 5, 1);\n\n\nconsole.log(board2)\n\n}\ngameloop()\n\n//# sourceURL=webpack://battleships/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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