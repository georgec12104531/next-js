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

  var bpi = _ref.bpi;
  // const [list, setList] = useState("");
  var list = "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState[0],
      setCurrency = _useState[1];

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
      className: "badge badge-primary",
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
  } else if (currency === "GBP") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.GBP.description, ":", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, bpi.GBP.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, bpi.GBP.rate));
  } else if (currency === "EUR") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.EUR.description, ":", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, bpi.EUR.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, bpi.EUR.rate));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, list), __jsx("select", {
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    },
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("option", {
    value: "USD",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "USD"), __jsx("option", {
    value: "GBP",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "GBP"), __jsx("option", {
    value: "EUR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "EUR")));
};

_s(Prices, "mZOo+M/8Cx3D1iWsGz7XC1WyjwA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwibGlzdCIsInVzZVN0YXRlIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImNvbnNvbGUiLCJsb2ciLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYTtBQUFBOztBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUMxQjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUYwQixrQkFHTUMsc0RBQVEsQ0FBQyxLQUFELENBSGQ7QUFBQSxNQUduQkMsUUFIbUI7QUFBQSxNQUdUQyxXQUhTOztBQUkxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQk4sR0FBckI7O0FBRUEsTUFBSUcsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3RCRixRQUFJLEdBQ0Y7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDb0JELEdBQUcsQ0FBQ08sR0FBSixDQUFRQyxXQUQ1QixPQUMwQyxHQUQxQyxFQUVFO0FBQU0sZUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDUixHQUFHLENBQUNPLEdBQUosQ0FBUUUsSUFBL0MsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1QsR0FBRyxDQUFDTyxHQUFKLENBQVFHLElBQWpCLENBSEYsQ0FERjtBQU9ELEdBUkQsTUFRTyxJQUFJUCxRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDN0JGLFFBQUksR0FDRjtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNvQkQsR0FBRyxDQUFDVyxHQUFKLENBQVFILFdBRDVCLE9BQzBDLEdBRDFDLEVBRUU7QUFBTSxlQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNSLEdBQUcsQ0FBQ1csR0FBSixDQUFRRixJQUEvQyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTVCxHQUFHLENBQUNXLEdBQUosQ0FBUUQsSUFBakIsQ0FIRixDQURGO0FBT0QsR0FSTSxNQVFBLElBQUlQLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUM3QkYsUUFBSSxHQUNGO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CRCxHQUFHLENBQUNZLEdBQUosQ0FBUUosV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1Q1IsR0FBRyxDQUFDWSxHQUFKLENBQVFILElBQS9DLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ1ksR0FBSixDQUFRRixJQUFqQixDQUhGLENBREY7QUFPRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJULElBQTVCLENBREYsRUFFRTtBQUNFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU9ULFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQURaO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGLEVBS0U7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FORixDQUZGLENBREY7QUFhRCxDQTdDRDs7R0FBTWhCLE07O0tBQUFBLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkNWMwMzExYjZkOWQzMDRmYzgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJpY2VzID0gKHsgYnBpIH0pID0+IHtcclxuICAvLyBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgbGlzdCA9IFwiXCI7XHJcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zb2xlLmxvZyhcImJwaTogXCIsIGJwaSk7XHJcblxyXG4gIGlmIChjdXJyZW5jeSA9PT0gXCJVU0RcIikge1xyXG4gICAgbGlzdCA9IChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2JwaS5VU0QuZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57YnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkdCUFwiKSB7XHJcbiAgICBsaXN0ID0gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7YnBpLkdCUC5kZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57YnBpLkdCUC5jb2RlfTwvc3Bhbj5cclxuICAgICAgICA8c3Ryb25nPnticGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVuY3kgPT09IFwiRVVSXCIpIHtcclxuICAgIGxpc3QgPSAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuRVVSLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGkuRVVSLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgIDxzdHJvbmc+e2JwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj57bGlzdH08L3VsPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=