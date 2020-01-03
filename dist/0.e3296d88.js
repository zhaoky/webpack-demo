(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/*! exports provided: sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var Src_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Src/d */ "./src/d.js");

Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./b.js */ "./src/b.js")).then(function (m) {
  return m.add(200, 100);
});
function sub(a, b) {
  return a - b + Object(Src_d__WEBPACK_IMPORTED_MODULE_0__["mul"])(100, 50);
}

/***/ }),

/***/ "./src/d.js":
/*!******************!*\
  !*** ./src/d.js ***!
  \******************/
/*! exports provided: mul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
function mul(a, b) {
  var d = 10000;
  return a * b + d;
}

/***/ })

}]);