/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: \"Eurostile Lt Pro Unicode\", sans-serif; \r\n    background-color: #1b1b1b;\r\n}\r\n\r\n\r\n.section{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center; \r\n    align-items: center;\r\n    gap: 30px;\r\n}\r\n\r\n.headerContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center; \r\n    align-items: center;\r\n}\r\n\r\n.gameboardContainer{\r\n    display: flex;\r\n    gap: 100px;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n#playergameboard  {\r\n    display: grid;\r\n    height: 381px;\r\n    width: 381px;\r\n    grid-template-columns: repeat(11, 30px);\r\n    grid-template-rows: repeat(11, 30px);\r\n    gap: 5px;     \r\n}\r\n\r\n\r\n#computergameboard  {\r\n    display: grid;\r\n    height: 381px;\r\n    width: 381px;\r\n    grid-template-columns: repeat(11, 30px);\r\n    grid-template-rows: repeat(11, 30px);\r\n    gap: 5px;     \r\n}\r\n\r\n\r\n\r\n.gridLabelItem{\r\n    height: 30px;\r\n    width: 30px;\r\n    border: 1px solid #3498db;\r\n    font-size: 15px;\r\n    color: #ffffff;;\r\n    place-content: center;\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.cell{\r\n    height: 30px;\r\n    width: 30px;\r\n    border: 1px solid #3498db;\r\n    border-radius: 5px;\r\n    place-content: center;\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.gridItem{\r\n    height: 30px;\r\n    width: 30px;\r\n    font-size: 30px;\r\n    place-content: center;\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center;\r\n    border: 1px solid #3498db;\r\n    border-radius: 5px;\r\n    color: #ffffff;\r\n}\r\n\r\np{\r\n    color: #b0dbf7;;\r\n}\r\n\r\nh1{\r\n    color: #b0dbf7;\r\n    font-size: 50px;\r\n}\r\n\r\n#display{\r\n    color: #b0dbf7;\r\n}\r\n\r\n#start-game{\r\n    height: 30px;   \r\n    background: none;\r\n    color: #b0dbf7;\r\n    border: 1px solid #3498db;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/game/domController.js":
/*!***********************************!*\
  !*** ./src/game/domController.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ \"./src/game/players.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/game/gameboard.js\");\n\n\n\n// Create a single grid cell in the DOM\nfunction gridItem(UIgameboardId, coordinate) {\n  const container = document.getElementById(UIgameboardId);\n  const gridItem = document.createElement(\"div\");\n  gridItem.classList.add(\"gridItem\");\n  gridItem.setAttribute(\"data-coordinate\", coordinate);\n  container.appendChild(gridItem);\n  return gridItem;\n}\n\n// Create a label for the grid (letters/numbers)\nfunction gridLabelItem(UIgameboardId, id, value) {\n  const container = document.getElementById(UIgameboardId);\n  const gridItem = document.createElement(\"div\");\n  gridItem.classList.add(\"gridLabelItem\");\n  gridItem.textContent = value;\n  container.appendChild(gridItem);\n  return gridLabelItem;\n}\nfunction DOMController() {\n  let P1, P2;\n  let activePlayer;\n\n  // Generate the full grid for a player/computer\n  function createBoard(gameboard, gameboardID) {\n    const gameboardArray = gameboard.createBoard();\n    const letterLabels = [\"\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n    const numberLabels = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\"];\n    let j = 0;\n\n    // Top letter labels\n    for (let l = 0; l < letterLabels.length; l++) {\n      gridLabelItem(gameboardID, \"gridLabel\", letterLabels[l]);\n    }\n\n    // Number labels + grid cells\n    for (let i = 0; i < gameboardArray.length; i++) {\n      if (i % 10 === 0) {\n        gridLabelItem(gameboardID, \"gridLabel\", numberLabels[j]);\n        gridItem(gameboardID, gameboardArray[i]);\n        j++;\n      } else {\n        gridItem(gameboardID, gameboardArray[i]);\n      }\n    }\n    return gameboard;\n  }\n\n  // Create player object\n  function P1Player() {\n    const P1Player = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.player)();\n    let gameboardID = \"playergameboard\";\n    const gameboard = P1Player.board;\n    return {\n      gameboardID: gameboardID,\n      gameboard: gameboard\n    };\n  }\n\n  // Create computer object and generate all possible attack coordinates\n  function P2Computer() {\n    const P2Computer = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.computer)();\n    let gameboardID = \"computergameboard\";\n    const gameboard = P2Computer.board;\n    const availableCoordinates = [];\n    const letters = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n    for (let l of letters) {\n      for (let n = 1; n <= 10; n++) {\n        availableCoordinates.push(l + n);\n      }\n    }\n    return {\n      gameboardID,\n      gameboard,\n      availableCoordinates\n    };\n  }\n\n  // Random coordinate generator for ship placement\n  function getRndCoordinate() {\n    const min = 65;\n    const max = 74;\n    const RndCharcode = Math.floor(Math.random() * (max - min + 1)) + min;\n    const Rndletter = String.fromCharCode(RndCharcode);\n    const RdnNumber = Math.floor(Math.random() * 10) + 1;\n    return Rndletter + RdnNumber;\n  }\n\n  // Random direction for ships\n  function RndDirection() {\n    return Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n  }\n\n  // Place ships on a board with random coordinates\n  function setShips(playerBoard, playerGameboardID) {\n    const shipData = playerBoard.shipData;\n    shipData.forEach(ship => {\n      let placed = false;\n      while (!placed) {\n        try {\n          let randomCoordinate = getRndCoordinate();\n          let direction = RndDirection();\n          playerBoard.placeShip(ship.name, randomCoordinate, direction);\n          placed = true;\n        } catch (error) {\n          console.log(\"Retrying:\", error.message);\n        }\n      }\n    });\n\n    // Optionally show ship positions for the player\n    const shipCoordinates = playerBoard.occupiedSquares;\n    if (playerGameboardID === \"playergameboard\") {\n      const Cells = document.querySelectorAll(`#${playerGameboardID} .gridItem[data-coordinate]`);\n      Cells.forEach(cell => {\n        const cellCoordinate = cell.getAttribute(\"data-coordinate\");\n        const match = shipCoordinates.find(([coords]) => coords === cellCoordinate);\n        if (match) {\n          const [, ShipObj] = match;\n          if (ShipObj.name === \"carrier\") cell.style.backgroundColor = \"#FFF59D\";else if (ShipObj.name === \"battleship\") cell.style.backgroundColor = \"#fcc372ff\";else if (ShipObj.name === \"destroyer\") cell.style.backgroundColor = \"#FF8A80\";else if (ShipObj.name === \"submarine\") cell.style.backgroundColor = \"#A5D6A7\";else if (ShipObj.name === \"patrolboat\") cell.style.backgroundColor = \"#90CAF9\";\n        }\n      });\n    }\n  }\n\n  // Switch active player and handle computer turn\n  const switchPlayerTurn = () => {\n    const display = document.getElementById(\"display\");\n    activePlayer = activePlayer === P1 ? P2 : P1;\n    if (activePlayer === P2) {\n      display.textContent = \"Computer's turn\";\n      setTimeout(computerTurn, 500); // slight delay for computer\n    } else {\n      display.textContent = \"Your turn\";\n    }\n    console.log(\"Next move: \", activePlayer.gameboardID);\n  };\n\n  // Handle a single round (player or computer)\n  function playRound(coordinate, playerBoard, playerGameboardID) {\n    const display = document.getElementById(\"display\");\n    const shipCoordinates = playerBoard.occupiedSquares;\n    const gridCell = document.querySelector(`#${playerGameboardID} .gridItem[data-coordinate=\"${coordinate}\"]`);\n    if (shipCoordinates.find(([coords]) => coords === coordinate)) {\n      console.log(\"ship hit\");\n      playerBoard.receiveAttack(coordinate);\n      gridCell.textContent = \"X\";\n      gridCell.style.pointerEvents = \"none\";\n      if (playerBoard.gameOver() === true) {\n        let loserName = playerGameboardID === \"playergameboard\" ? \"Player\" : \"Computer\";\n        display.style.color = \"red\";\n        display.style.fontSize = \"20px\";\n        display.textContent = `${loserName} lost!`;\n\n        // Disable all cells after game over\n        const allCells = document.querySelectorAll(\"#playergameboard .gridItem, #computergameboard .gridItem\");\n        allCells.forEach(cell => cell.style.pointerEvents = \"none\");\n        return;\n      }\n      switchPlayerTurn();\n    } else {\n      console.log(\"missed\");\n      playerBoard.receiveAttack(coordinate);\n      gridCell.textContent = \"•\";\n      gridCell.style.pointerEvents = \"none\";\n      switchPlayerTurn();\n      console.log(\"missed attack array: \", playerBoard, playerBoard.missedAttacks);\n    }\n  }\n\n  // Computer chooses a random available coordinate\n  function computerTurn() {\n    let availableCoordinates = P2.availableCoordinates;\n    const RdnNumber = Math.floor(Math.random() * availableCoordinates.length);\n    let targetcordinate = availableCoordinates[RdnNumber];\n    availableCoordinates.splice(RdnNumber, 1); // remove coordinate from list\n    playRound(targetcordinate, P1.gameboard, P1.gameboardID);\n  }\n\n  // Initialize game state and setup grids\n  function init() {\n    P1 = P1Player();\n    P2 = P2Computer();\n    createBoard(P1.gameboard, P1.gameboardID);\n    createBoard(P2.gameboard, P2.gameboardID);\n    const startBtn = document.getElementById(\"start-game\");\n    startBtn.addEventListener(\"click\", () => {\n      setShips(P1.gameboard, P1.gameboardID);\n      setShips(P2.gameboard, P2.gameboardID);\n      const display = document.getElementById(\"display\");\n      display.textContent = \"Your turn\";\n      activePlayer = P1; // starting player\n\n      // Add click events for enemy grid\n      const Cells = document.querySelectorAll(`#${P2.gameboardID} .gridItem[data-coordinate]`);\n      Cells.forEach(cell => {\n        cell.addEventListener(\"click\", () => {\n          let coordinate = cell.getAttribute(\"data-coordinate\");\n          playRound(coordinate, P2.gameboard, P2.gameboardID);\n        });\n      });\n    });\n    return {\n      P1,\n      P2\n    };\n  }\n\n  // Expose public methods\n  return {\n    init,\n    setShips,\n    playRound\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);\n\n//# sourceURL=webpack://top-battleship/./src/game/domController.js?\n}");

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/game/ship.js\");\n\n\n// Factory function to create a gameboard\nfunction gameboard() {\n  // Array holding all ship instances on this board\n  let ships = [];\n  // Array holding all occupied coordinates and reference to the ship object and hit status\n  let occupiedSquares = [];\n\n  // Generate a 10x10 board with coordinates A1 - J10\n  function createBoard() {\n    let board = [];\n    for (let i = 1; i <= 10; i++) {\n      // Rows 1-10\n      for (let j = 0; j <= 9; j++) {\n        // Columns A-J\n        let letter = String.fromCharCode(65 + j); // 'A' → 65, etc.\n        board.push(letter + i); // e.g., \"A1\", \"B3\"\n      }\n    }\n    ;\n    return board;\n  }\n\n  // Generate an array of coordinates for a ship based on size and direction\n  function generateCoordinates(size, coordinate, direction) {\n    let temporaryArray = [];\n    for (let i = 0; i < size; i++) {\n      if (direction === \"horizontal\") {\n        // Move right along the same row\n        let coordLetter = coordinate.slice(0, 1).charCodeAt(0);\n        let nextLetter = String.fromCharCode(coordLetter + i);\n        temporaryArray.push(nextLetter + coordinate.slice(1));\n      } else {\n        // Move down along the same column\n        let nextCoordinate = Number(coordinate.slice(1)) + i;\n        temporaryArray.push(coordinate.slice(0, 1) + nextCoordinate);\n      }\n    }\n    return temporaryArray;\n  }\n\n  // Validate that the generated coordinates are within the board and not overlapping\n  function validateCoordinates(array) {\n    for (let i = 0; i < array.length; i++) {\n      let letter = array[i].slice(0, 1).charCodeAt(0); // Column as ASCII code\n      let number = array[i].slice(1); // Row number\n\n      if (letter > 74 || number > 10) {\n        // Column > 'J' or row > 10\n        throw Error(array[i] + \" Out of bounds\");\n      } else if (occupiedSquares.some(([coords]) => coords === array[i])) {\n        // Check for overlap with existing ships\n        throw Error(array[i] + \" is occupied\");\n      }\n    }\n  }\n\n  // Save ship coordinates to the board\n  // Third element 'false' tracks whether coordinate has been hit\n  function commitCoordinates(tempCoords, ship) {\n    for (let i = 0; i < tempCoords.length; i++) {\n      occupiedSquares.push([tempCoords[i], ship, false]);\n    }\n  }\n\n  // Predefined ship types and sizes\n  const shipData = [{\n    name: \"carrier\",\n    size: 5\n  }, {\n    name: \"battleship\",\n    size: 4\n  }, {\n    name: \"destroyer\",\n    size: 3\n  }, {\n    name: \"submarine\",\n    size: 3\n  }, {\n    name: \"patrolboat\",\n    size: 2\n  }];\n\n  // Place a ship on the board\n  function placeShip(shipName, coordinate, direction) {\n    // Find the ship data by name\n    const shipObj = shipData.find(ship => ship.name == shipName);\n    const shipSize = shipObj.size;\n\n    // Create a new ship instance\n    let newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipSize, shipName);\n\n    // Generate coordinates and validate\n    let tempcoords = generateCoordinates(shipSize, coordinate, direction);\n    validateCoordinates(tempcoords);\n\n    // Save the coordinates to the board\n    commitCoordinates(tempcoords, newShip);\n    ships.push(newShip); // Keep track of ship for game-over check\n  }\n\n  // Array keeping track of missed shots\n  let missedAttacks = [];\n\n  // Handle an attack at a coordinate\n  function receiveAttack(coordinate) {\n    // Skip if this coordinate was already missed\n    if (missedAttacks.includes(coordinate)) {\n      return;\n    }\n\n    // Check if coordinate hits a ship\n    for (let i = 0; i < occupiedSquares.length; i++) {\n      if (coordinate === occupiedSquares[i][0]) {\n        // Prevent hitting the same coordinate twice\n        if (occupiedSquares[i][2]) return;\n\n        // Register hit on the ship and mark coordinate as hit\n        occupiedSquares[i][1].hit();\n        occupiedSquares[i][2] = true;\n        return;\n      }\n    }\n\n    // If no ship, mark as missed\n    missedAttacks.push(coordinate);\n  }\n\n  // Check if all ships have been sunk\n  function gameOver() {\n    return ships.every(ship => ship.isSunk());\n  }\n\n  // Expose public methods and data\n  return {\n    createBoard,\n    placeShip,\n    receiveAttack,\n    gameOver,\n    shipData,\n    occupiedSquares,\n    missedAttacks\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://top-battleship/./src/game/gameboard.js?\n}");

/***/ }),

/***/ "./src/game/players.js":
/*!*****************************!*\
  !*** ./src/game/players.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/game/gameboard.js\");\n\nfunction player() {\n  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  return {\n    board: board\n  };\n}\n;\nfunction computer() {\n  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  return {\n    board: board\n  };\n}\n\n\n//# sourceURL=webpack://top-battleship/./src/game/players.js?\n}");

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ship(shiplength, shipName) {\n  const name = shipName;\n  let hits = 0;\n  function hit() {\n    hits++;\n    return hits;\n  }\n  function isSunk() {\n    if (hits === shiplength) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  return {\n    hit,\n    isSunk,\n    name\n  };\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://top-battleship/./src/game/ship.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game_domController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/domController.js */ \"./src/game/domController.js\");\n//index,js\n\n\nconst app = (0,_game_domController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\napp.init();\n\n//# sourceURL=webpack://top-battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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