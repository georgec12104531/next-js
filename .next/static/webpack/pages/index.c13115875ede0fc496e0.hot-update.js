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

  var cod = _ref.cod;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(bpi.code),
      currency = _useState2[0],
      setCurrency = _useState2[1];

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
    }, "Bitcoin rate for ", USD.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, USD.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, USD.rate)));
  } else if (currency === "GPB") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", GPB.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, GPB.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, GPB.rate)));
  } else if (currency === "EUR") {
    __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, "Bitcoin rate for ", EUR.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, EUR.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, EUR.rate));
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

_s(Prices, "WNa1T0hxR3UJtEpzNrLsjlYVdGo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY29kIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImJwaSIsImNvZGUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiY29uc29sZSIsImxvZyIsIlVTRCIsImRlc2NyaXB0aW9uIiwicmF0ZSIsIkdQQiIsIkVVUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWE7QUFBQTs7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDbkJDLElBRG1CO0FBQUEsTUFDYkMsT0FEYTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQ0csR0FBRyxDQUFDQyxJQUFMLENBRmQ7QUFBQSxNQUVuQkMsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUcxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsR0FBckI7O0FBRUEsTUFBSUUsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3RCSCxXQUFPLENBQ0w7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDb0JPLEdBQUcsQ0FBQ0MsV0FEeEIsT0FDc0MsR0FEdEMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0QsR0FBRyxDQUFDTCxJQUF2QyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTSyxHQUFHLENBQUNFLElBQWIsQ0FIRixDQURLLENBQVA7QUFPRCxHQVJELE1BUU8sSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzdCSCxXQUFPLENBQ0w7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDb0JVLEdBQUcsQ0FBQ0YsV0FEeEIsT0FDc0MsR0FEdEMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0UsR0FBRyxDQUFDUixJQUF2QyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTUSxHQUFHLENBQUNELElBQWIsQ0FIRixDQURLLENBQVA7QUFPRCxHQVJNLE1BUUEsSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzdCO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CUSxHQUFHLENBQUNILFdBRHhCLE9BQ3NDLEdBRHRDLEVBRUU7QUFBTSxlQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNHLEdBQUcsQ0FBQ1QsSUFBdkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1MsR0FBRyxDQUFDRixJQUFiLENBSEY7QUFLRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJWLElBQTVCLENBREYsQ0FERjtBQUtELENBbENEOztHQUFNSCxNOztLQUFBQSxNO0FBb0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTMxMTU4NzVlZGUwZmM0OTZlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByaWNlcyA9ICh7IGNvZCB9KSA9PiB7XHJcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShicGkuY29kZSk7XHJcbiAgY29uc29sZS5sb2coXCJicGk6IFwiLCBicGkpO1xyXG5cclxuICBpZiAoY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcclxuICAgIHNldExpc3QoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHtVU0QuZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57VVNELmNvZGV9PC9zcGFuPlxyXG4gICAgICAgIDxzdHJvbmc+e1VTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkdQQlwiKSB7XHJcbiAgICBzZXRMaXN0KFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7R1BCLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e0dQQi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICA8c3Ryb25nPntHUEIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW5jeSA9PT0gXCJFVVJcIikge1xyXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICBCaXRjb2luIHJhdGUgZm9yIHtFVVIuZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e0VVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgPHN0cm9uZz57RVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICA8L2xpPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntsaXN0fTwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9