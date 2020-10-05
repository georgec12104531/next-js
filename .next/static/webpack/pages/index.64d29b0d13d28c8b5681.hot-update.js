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
    }, "Bitcoin rate for ", USD.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, USD.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, USD.rate)));
  } else if (current === "GPB") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", GPB.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, GPB.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, GPB.rate)));
  } else if (current === "EUR") {
    __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, "Bitcoin rate for ", GPB.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, GPB.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, GPB.rate));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Bitcoin rate for ", description, ":", " ", __jsx("span", {
    "class": "badge badge-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, code), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwiVVNEIiwiR1BCIiwiRVVSIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJjdXJyZW50IiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWdDO0FBQUE7O0FBQUEsc0JBQTdCQyxHQUE2QjtBQUFBLE1BQXRCQyxHQUFzQixZQUF0QkEsR0FBc0I7QUFBQSxNQUFqQkMsR0FBaUIsWUFBakJBLEdBQWlCO0FBQUEsTUFBWkMsR0FBWSxZQUFaQSxHQUFZOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxFQUFELENBRGE7QUFBQSxNQUN0Q0MsSUFEc0M7QUFBQSxNQUNoQ0MsT0FEZ0M7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUMsS0FBRCxDQUZLO0FBQUEsTUFFdENHLFFBRnNDO0FBQUEsTUFFNUJDLFdBRjRCOztBQUk3QyxNQUFJQyxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDckJILFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkwsR0FBRyxDQUFDUyxXQUR4QixPQUNzQyxHQUR0QyxFQUVFO0FBQU0sZUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DVCxHQUFHLENBQUNVLElBQXZDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNWLEdBQUcsQ0FBQ1csSUFBYixDQUhGLENBREssQ0FBUDtBQU9ELEdBUkQsTUFRTyxJQUFJSCxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDNUJILFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkosR0FBRyxDQUFDUSxXQUR4QixPQUNzQyxHQUR0QyxFQUVFO0FBQU0sZUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DUixHQUFHLENBQUNTLElBQXZDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ1UsSUFBYixDQUhGLENBREssQ0FBUDtBQU9ELEdBUk0sTUFRQSxJQUFJSCxPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDNUI7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDa0JQLEdBQUcsQ0FBQ1EsV0FEdEIsT0FDb0MsR0FEcEMsRUFFQTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ1IsR0FBRyxDQUFDUyxJQUF2QyxDQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTVCxHQUFHLENBQUNVLElBQWIsQ0FIQTtBQUtEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ29CRixXQURwQixPQUNrQyxHQURsQyxFQUVFO0FBQU0sYUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DQyxJQUFuQyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTQyxJQUFULENBSEYsQ0FERixDQURGLENBREY7QUFXRCxDQXZDRDs7R0FBTWIsTTs7S0FBQUEsTTtBQXlDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjRkMjliMGQxM2QyOGM4YjU2ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcmljZXMgPSAoeyBicGk6IHsgVVNELCBHUEIsIEVVUiB9IH0pID0+IHtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG5cclxuICBpZiAoY3VycmVudCA9PT0gXCJVU0RcIikge1xyXG4gICAgc2V0TGlzdChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige1VTRC5kZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPntVU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57VVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJHUEJcIikge1xyXG4gICAgc2V0TGlzdChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige0dQQi5kZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPntHUEIuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57R1BCLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJFVVJcIikge1xyXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgQml0Y29pbiByYXRlIGZvciB7R1BCLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57R1BCLmNvZGV9PC9zcGFuPlxyXG4gICAgPHN0cm9uZz57R1BCLnJhdGV9PC9zdHJvbmc+XHJcbiAgPC9saT5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2Rlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57Y29kZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Ryb25nPntyYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9