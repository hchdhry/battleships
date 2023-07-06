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

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n\nclass GameBoard {\n  constructor(numrows, numcolumns) {\n    this.board = [];\n    this.numrows = numrows;\n    this.numcolumns = numcolumns;\n  }\n  missedshots=[]\n\n  createGameBoard() {\n    for (let i = 1; i <= this.numrows; i++) {\n      const rows = [];\n      for (let j = 1; j <= this.numcolumns; j++) {\n        rows.push(\" \");\n      }\n      this.board.push(rows);\n    }\n  }\n\n  placeship(ship, x, y) {\n    for (let i = 0; i < ship.length; i++) {\n      this.board[x].splice(y+i, 1, \"s\");\n    }\n  }\n\n  receiveAttack(x, y) {\n    if(this.board[x][y]===\" \"){\n    this.board[x].splice(y, 1, \"l\");\nthis.missedshots.push([x,y])\n    }\n    else if (this.board[x][y]===\"s\") {\n      this.board[x].splice(y, 1, \"w\");\n  }\n \n  }\n}\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\n/* harmony import */ var _btls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_btls__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst bot = new (_player__WEBPACK_IMPORTED_MODULE_2___default())(\"bot\")\n\nconst wee = new (_gameboard__WEBPACK_IMPORTED_MODULE_1___default())(10, 10);\nwee.createGameBoard()\nbot.robot(wee)\n\nconsole.log(wee.board);\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./btls */ \"./src/btls.js\");\nconst GameBoard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass player{\n    constructor(name){\n        this.name=name\n    }\n\n    taketurn(gameboard,x,y){\ngameboard.receiveAttack(x,y)\n    }\n    \n    robot(gameboard) {\n        let rx, ry;\n        do {\n          rx = Math.floor(Math.random() * 10);\n          ry = Math.floor(Math.random() * 10);\n          console.log('Generated coordinates:', rx, ry);\n        } while (gameboard.missedshots.some(([x, y]) => x === rx && y === ry));\n      \n        console.log('Taking turn with coordinates:', rx, ry);\n        this.taketurn(gameboard, rx, ry);\n      }}\n      \n\n\nmodule.exports = player;\n\n//# sourceURL=webpack://battleships/./src/player.js?");

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