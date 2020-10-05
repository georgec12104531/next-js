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
  } else if (currency === "b") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.b.description, ":", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, bpi.b.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, bpi.b.rate));
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
    value: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "b"), __jsx("option", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwibGlzdCIsInVzZVN0YXRlIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImNvbnNvbGUiLCJsb2ciLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiYiIsIkVVUiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWE7QUFBQTs7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDMUI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFGMEIsa0JBR01DLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHbkJDLFFBSG1CO0FBQUEsTUFHVEMsV0FIUzs7QUFJMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLEdBQXJCOztBQUVBLE1BQUlHLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QkYsUUFBSSxHQUNGO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CRCxHQUFHLENBQUNPLEdBQUosQ0FBUUMsV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1Q1IsR0FBRyxDQUFDTyxHQUFKLENBQVFFLElBQS9DLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ08sR0FBSixDQUFRRyxJQUFqQixDQUhGLENBREY7QUFPRCxHQVJELE1BUU8sSUFBSVAsUUFBUSxLQUFLLEdBQWpCLEVBQXNCO0FBQzNCRixRQUFJLEdBQ0Y7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDb0JELEdBQUcsQ0FBQ1csQ0FBSixDQUFNSCxXQUQxQixPQUN3QyxHQUR4QyxFQUVFO0FBQU0sZUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDUixHQUFHLENBQUNXLENBQUosQ0FBTUYsSUFBN0MsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1QsR0FBRyxDQUFDVyxDQUFKLENBQU1ELElBQWYsQ0FIRixDQURGO0FBT0QsR0FSTSxNQVFBLElBQUlQLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUM3QkYsUUFBSSxHQUNGO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ29CRCxHQUFHLENBQUNZLEdBQUosQ0FBUUosV0FENUIsT0FDMEMsR0FEMUMsRUFFRTtBQUFNLGVBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1Q1IsR0FBRyxDQUFDWSxHQUFKLENBQVFILElBQS9DLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNULEdBQUcsQ0FBQ1ksR0FBSixDQUFRRixJQUFqQixDQUhGLENBREY7QUFPRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJULElBQTVCLENBREYsRUFFRTtBQUNFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU9ULFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQURaO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGLEVBS0U7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FORixDQUZGLENBREY7QUFhRCxDQTdDRDs7R0FBTWhCLE07O0tBQUFBLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhZjE4NzhhZDM4YjU2OTQzOGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJpY2VzID0gKHsgYnBpIH0pID0+IHtcclxuICAvLyBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgbGlzdCA9IFwiXCI7XHJcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zb2xlLmxvZyhcImJwaTogXCIsIGJwaSk7XHJcblxyXG4gIGlmIChjdXJyZW5jeSA9PT0gXCJVU0RcIikge1xyXG4gICAgbGlzdCA9IChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2JwaS5VU0QuZGVzY3JpcHRpb259OntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57YnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcImJcIikge1xyXG4gICAgbGlzdCA9IChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2JwaS5iLmRlc2NyaXB0aW9ufTp7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGkuYi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICA8c3Ryb25nPnticGkuYi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkVVUlwiKSB7XHJcbiAgICBsaXN0ID0gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7YnBpLkVVUi5kZXNjcmlwdGlvbn06e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57YnBpLkVVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICA8c3Ryb25nPnticGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e2xpc3R9PC91bD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJcIj5iPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=