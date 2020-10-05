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


var Prices = function Prices(bpi) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      list = _useState[0],
      setList = _useState[1];

  var currency = "";
  console.log("bpi: ", bpi);

  if (currency === "USD") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.USD.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, bpi.USD.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, bpi.USD.rate)));
  } else if (currency === "GPB") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.GPB.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, bpi.GPB.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, bpi.GPB.rate)));
  } else if (currency === "EUR") {
    __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, "Bitcoin rate for ", bpi.EUR.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, bpi.EUR.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, bpi.EUR.rate));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, list));
};

_s(Prices, "l7cXQcdaonj8mnmd/q1X9TZtEgs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImN1cnJlbmN5IiwiY29uc29sZSIsImxvZyIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHUEIiLCJFVVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFFdEIsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLEdBQXJCOztBQUVBLE1BQUlJLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QkQsV0FBTyxDQUNMO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CSCxHQUFHLENBQUNPLEdBQUosQ0FBUUMsV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ1IsR0FBRyxDQUFDTyxHQUFKLENBQVFFLElBQTNDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ08sR0FBSixDQUFRRyxJQUFqQixDQUhGLENBREssQ0FBUDtBQU9ELEdBUkQsTUFRTyxJQUFJTixRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDN0JELFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkgsR0FBRyxDQUFDVyxHQUFKLENBQVFILFdBRDVCLE9BQzBDLEdBRDFDLEVBRUU7QUFBTSxlQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNSLEdBQUcsQ0FBQ1csR0FBSixDQUFRRixJQUEzQyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTVCxHQUFHLENBQUNXLEdBQUosQ0FBUUQsSUFBakIsQ0FIRixDQURLLENBQVA7QUFPRCxHQVJNLE1BUUEsSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzdCO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CSixHQUFHLENBQUNZLEdBQUosQ0FBUUosV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ1IsR0FBRyxDQUFDWSxHQUFKLENBQVFILElBQTNDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ1ksR0FBSixDQUFRRixJQUFqQixDQUhGO0FBS0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCUixJQUE1QixDQURGLENBREY7QUFLRCxDQWxDRDs7R0FBTUgsTTs7S0FBQUEsTTtBQW9DU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRhMDYxNjJiZDU3ZTBkNzAzN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcmljZXMgPSAoYnBpKSA9PiB7XHJcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY3VycmVuY3kgPSBcIlwiXHJcbiAgY29uc29sZS5sb2coXCJicGk6IFwiLCBicGkpO1xyXG5cclxuICBpZiAoY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcclxuICAgIHNldExpc3QoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuVVNELmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57YnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkdQQlwiKSB7XHJcbiAgICBzZXRMaXN0KFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7YnBpLkdQQi5kZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGkuR1BCLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgIDxzdHJvbmc+e2JwaS5HUEIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW5jeSA9PT0gXCJFVVJcIikge1xyXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuRVVSLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGkuRVVSLmNvZGV9PC9zcGFuPlxyXG4gICAgICA8c3Ryb25nPnticGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICA8L2xpPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntsaXN0fTwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9