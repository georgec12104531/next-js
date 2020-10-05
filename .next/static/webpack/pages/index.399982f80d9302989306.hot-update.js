webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\georg\\OneDrive\\Desktop\\Projects\\next-js\\components\\Prices.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(_ref) {
  _s();

  var _ref$bpi = _ref.bpi,
      USD = _ref$bpi.USD,
      GPB = _ref$bpi.GPB,
      EUR = _ref$bpi.EUR;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState2[0],
      setCurrency = _useState2[1];

  if (current === "USD") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, rate)));
  } else if (current === "GPB") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, rate)));
  } else if (current === "EUR") {}

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Bitcoin rate for ", description, ":", " ", __jsx("span", {
    "class": "badge badge-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, code), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, rate))));
};

_s(Prices, "H9JHEgDHWdI6OqIhgcuUzwHcc6M=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwiVVNEIiwiR1BCIiwiRVVSIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJjdXJyZW50IiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWdDO0FBQUE7O0FBQUEsc0JBQTdCQyxHQUE2QjtBQUFBLE1BQXRCQyxHQUFzQixZQUF0QkEsR0FBc0I7QUFBQSxNQUFqQkMsR0FBaUIsWUFBakJBLEdBQWlCO0FBQUEsTUFBWkMsR0FBWSxZQUFaQSxHQUFZOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxFQUFELENBRGE7QUFBQSxNQUN0Q0MsSUFEc0M7QUFBQSxNQUNoQ0MsT0FEZ0M7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUMsS0FBRCxDQUZLO0FBQUEsTUFFdENHLFFBRnNDO0FBQUEsTUFFNUJDLFdBRjRCOztBQUk3QyxNQUFJQyxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDckJILFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkksV0FEcEIsT0FDa0MsR0FEbEMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0MsSUFBbkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU0MsSUFBVCxDQUhGLENBREssQ0FBUDtBQU9ELEdBUkQsTUFRTyxJQUFJSCxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDNUJILFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkksV0FEcEIsT0FDa0MsR0FEbEMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0MsSUFBbkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU0MsSUFBVCxDQUhGLENBREssQ0FBUDtBQU9ELEdBUk0sTUFRQSxJQUFJSCxPQUFPLEtBQUssS0FBaEIsRUFBdUIsQ0FDN0I7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDb0JDLFdBRHBCLE9BQ2tDLEdBRGxDLEVBRUU7QUFBTSxhQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNDLElBQW5DLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNDLElBQVQsQ0FIRixDQURGLENBREYsQ0FERjtBQVdELENBbENEOztHQUFNYixNOztLQUFBQSxNO0FBb0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTk5ODJmODBkOTMwMjk4OTMwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByaWNlcyA9ICh7IGJwaTogeyBVU0QsIEdQQiwgRVVSIH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcblxyXG4gIGlmIChjdXJyZW50ID09PSBcIlVTRFwiKSB7XHJcbiAgICBzZXRMaXN0KFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7ZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57Y29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57cmF0ZX08L3N0cm9uZz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcIkdQQlwiKSB7XHJcbiAgICBzZXRMaXN0KFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7ZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57Y29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57cmF0ZX08L3N0cm9uZz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcIkVVUlwiKSB7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHtkZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2NvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHN0cm9uZz57cmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==