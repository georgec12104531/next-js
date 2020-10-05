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
    _jsxFileName = "C:\\Users\\georg\\OneDrive\\Desktop\\Projects\\next-js\\components\\Prices.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(_ref) {
  var bpi = _ref.bpi;
  // const [list, setList] = useState("");
  var list = "";
  var currency = "USD";
  console.log("bpi: ", bpi);

  if (currency === "USD") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.USD.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, bpi.USD.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, bpi.USD.rate));
  } else if (currency === "GPB") {
    setList(__jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.GPB.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, bpi.GPB.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, bpi.GPB.rate)));
  } else if (currency === "EUR") {
    __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, "Bitcoin rate for ", bpi.EUR.description, ":", " ", __jsx("span", {
      "class": "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, bpi.EUR.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, bpi.EUR.rate));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, list));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwibGlzdCIsImN1cnJlbmN5IiwiY29uc29sZSIsImxvZyIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJzZXRMaXN0IiwiR1BCIiwiRVVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQzFCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFNQyxRQUFRLEdBQUcsS0FBakI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkosR0FBckI7O0FBRUEsTUFBSUUsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3RCRCxRQUFJLEdBQ0Y7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDb0JELEdBQUcsQ0FBQ0ssR0FBSixDQUFRQyxXQUQ1QixPQUMwQyxHQUQxQyxFQUVFO0FBQU0sZUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DTixHQUFHLENBQUNLLEdBQUosQ0FBUUUsSUFBM0MsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1AsR0FBRyxDQUFDSyxHQUFKLENBQVFHLElBQWpCLENBSEYsQ0FERjtBQU9ELEdBUkQsTUFTSyxJQUFJTixRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDM0JPLFdBQU8sQ0FDTDtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQlQsR0FBRyxDQUFDVSxHQUFKLENBQVFKLFdBRDVCLE9BQzBDLEdBRDFDLEVBRUU7QUFBTSxlQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNOLEdBQUcsQ0FBQ1UsR0FBSixDQUFRSCxJQUEzQyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTUCxHQUFHLENBQUNVLEdBQUosQ0FBUUYsSUFBakIsQ0FIRixDQURLLENBQVA7QUFPRCxHQVJJLE1BUUUsSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzdCO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CRixHQUFHLENBQUNXLEdBQUosQ0FBUUwsV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQU0scUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ04sR0FBRyxDQUFDVyxHQUFKLENBQVFKLElBQTNDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNQLEdBQUcsQ0FBQ1csR0FBSixDQUFRSCxJQUFqQixDQUhGO0FBS0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCUCxJQUE1QixDQURGLENBREY7QUFLRCxDQXBDRDs7S0FBTUYsTTtBQXNDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc3NTMwYTNjZjRlM2Q5NWJlMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcmljZXMgPSAoeyBicGkgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGxldCBsaXN0ID0gXCJcIjtcclxuICBjb25zdCBjdXJyZW5jeSA9IFwiVVNEXCI7XHJcbiAgY29uc29sZS5sb2coXCJicGk6IFwiLCBicGkpO1xyXG5cclxuICBpZiAoY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcclxuICAgIGxpc3QgPSAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuVVNELmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57YnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoY3VycmVuY3kgPT09IFwiR1BCXCIpIHtcclxuICAgIHNldExpc3QoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuR1BCLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5HUEIuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57YnBpLkdQQi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkVVUlwiKSB7XHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2JwaS5FVVIuZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5FVVIuY29kZX08L3NwYW4+XHJcbiAgICAgIDxzdHJvbmc+e2JwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgIDwvbGk+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e2xpc3R9PC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=