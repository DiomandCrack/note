/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pageA.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./moduleA.js":
/*!********************!*\
  !*** ./moduleA.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hello; });\nfunction hello () {\r\n    console.log(`I'm moduleA`);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVBLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlQS5qcz9iZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbGxvICgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBJJ20gbW9kdWxlQWApO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./moduleA.js\n");

/***/ }),

/***/ "./pageA.js":
/*!******************!*\
  !*** ./pageA.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subpageA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subpageA */ \"./subpageA.js\");\n/* harmony import */ var _subpageB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subpageB */ \"./subpageB.js\");\n\r\n\r\n\r\nconsole.log(Object(_subpageA__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),Object(_subpageB__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlQS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VBLmpzP2FmMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1YkEgZnJvbSAnLi9zdWJwYWdlQSdcclxuaW1wb3J0IHN1YkIgZnJvbSAnLi9zdWJwYWdlQidcclxuXHJcbmNvbnNvbGUubG9nKHN1YkEoKSxzdWJCKCkpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pageA.js\n");

/***/ }),

/***/ "./subpageA.js":
/*!*********************!*\
  !*** ./subpageA.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return subA; });\n/* harmony import */ var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleA */ \"./moduleA.js\");\n\r\n\r\nfunction subA (){\r\n    console.log('subA use',Object(_moduleA__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdWJwYWdlQS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N1YnBhZ2VBLmpzPzFmZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbGxvIGZyb20gJy4vbW9kdWxlQSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YkEgKCl7XHJcbiAgICBjb25zb2xlLmxvZygnc3ViQSB1c2UnLGhlbGxvKCkpXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./subpageA.js\n");

/***/ }),

/***/ "./subpageB.js":
/*!*********************!*\
  !*** ./subpageB.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return subB; });\n/* harmony import */ var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleA */ \"./moduleA.js\");\n\r\n\r\nfunction subB (){\r\n    console.log('subB',Object(_moduleA__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdWJwYWdlQi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N1YnBhZ2VCLmpzPzI3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbGxvIGZyb20gJy4vbW9kdWxlQSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YkIgKCl7XHJcbiAgICBjb25zb2xlLmxvZygnc3ViQicsaGVsbG8oKSk7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./subpageB.js\n");

/***/ })

/******/ });