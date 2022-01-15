webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/pages/Content/Commentsection/Commentpart.js":
/*!****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/Commentpart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _writecomment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writecomment */ "./components/pages/Content/Commentsection/writecomment.js");
/* harmony import */ var _belowcomment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./belowcomment */ "./components/pages/Content/Commentsection/belowcomment.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\Commentpart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var rendered = 0;

function Commentpart(_ref) {
  var Editcommenthandler = _ref.Editcommenthandler,
      Producecomment = _ref.Producecomment,
      list = _ref.list,
      spinner = _ref.spinner,
      handleanswer = _ref.handleanswer;
  console.log(list);

  var mutated = _objectSpread({}, list);

  var numobj = {};

  for (var i = 0; i < list.length; i++) {
    numobj[i] = 0;
  }

  var Lengthcalcualter = function Lengthcalcualter(comment, index) {
    if (comment.takeit.length > 0) {
      numobj[index] += comment.takeit.length;
      comment.takeit.forEach(function (element) {
        Lengthcalcualter(element, index);
      });
    } else return;
  };

  for (var _i = 0; _i < list.length; _i++) {
    Lengthcalcualter(list[_i], _i);
  }

  console.log(numobj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: "20px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_writecomment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      spinner: spinner,
      Producecomment: Producecomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_belowcomment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Editcommenthandler: Editcommenthandler,
      Answerhandler: handleanswer,
      mylist: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_c = Commentpart;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Commentpart));

var _c, _c2;

$RefreshReg$(_c, "Commentpart");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL0NvbW1lbnRwYXJ0LmpzIl0sIm5hbWVzIjpbInJlbmRlcmVkIiwiQ29tbWVudHBhcnQiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJQcm9kdWNlY29tbWVudCIsImxpc3QiLCJzcGlubmVyIiwiaGFuZGxlYW5zd2VyIiwiY29uc29sZSIsImxvZyIsIm11dGF0ZWQiLCJudW1vYmoiLCJpIiwibGVuZ3RoIiwiTGVuZ3RoY2FsY3VhbHRlciIsImNvbW1lbnQiLCJpbmRleCIsInRha2VpdCIsImZvckVhY2giLCJlbGVtZW50IiwicGFkZGluZyIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxTQUFTQyxXQUFULE9BQW1GO0FBQUEsTUFBN0RDLGtCQUE2RCxRQUE3REEsa0JBQTZEO0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBZEMsWUFBYyxRQUFkQSxZQUFjO0FBRS9FQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjs7QUFDQSxNQUFNSyxPQUFPLHFCQUFPTCxJQUFQLENBQWI7O0FBRUEsTUFBTU0sTUFBTSxHQUFHLEVBQWY7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBRWxDRCxVQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZLENBQVo7QUFFSDs7QUFFRCxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQsRUFBU0MsS0FBVCxFQUFpQjtBQUVsQyxRQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZUosTUFBZixHQUF3QixDQUEzQixFQUE2QjtBQUN6QkYsWUFBTSxDQUFDSyxLQUFELENBQU4sSUFBaUJELE9BQU8sQ0FBQ0UsTUFBUixDQUFlSixNQUFoQztBQUNBRSxhQUFPLENBQUNFLE1BQVIsQ0FBZUMsT0FBZixDQUF1QixVQUFBQyxPQUFPLEVBQUk7QUFDOUJMLHdCQUFnQixDQUFDSyxPQUFELEVBQVNILEtBQVQsQ0FBaEI7QUFDSCxPQUZEO0FBSUgsS0FORCxNQU9LO0FBQ1osR0FWRDs7QUFZQSxPQUFLLElBQUlKLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdQLElBQUksQ0FBQ1EsTUFBekIsRUFBaUNELEVBQUMsRUFBbEMsRUFBc0M7QUFFbENFLG9CQUFnQixDQUFDVCxJQUFJLENBQUNPLEVBQUQsQ0FBTCxFQUFTQSxFQUFULENBQWhCO0FBQ0g7O0FBRURKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaO0FBRUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ1MsYUFBTyxFQUFDO0FBQVQsS0FBWjtBQUFBLDRCQUNJLHFFQUFDLHFEQUFEO0FBQWMsYUFBTyxFQUFFZCxPQUF2QjtBQUFnQyxvQkFBYyxFQUFFRjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxxREFBRDtBQUFjLHdCQUFrQixFQUFFRCxrQkFBbEM7QUFBc0QsbUJBQWEsRUFBRUksWUFBckU7QUFBbUYsWUFBTSxFQUFFRjtBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7S0F0Q1FILFc7QUF3Q00sa0ZBQUFtQiw0Q0FBSyxDQUFDQyxJQUFOLENBQVdwQixXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjg1MmUyNjhhZjRlNmFlNGU3ZTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXcml0ZWNvbW1lbnQgZnJvbSBcIi4vd3JpdGVjb21tZW50XCI7XHJcbmltcG9ydCBCZWxvd2NvbW1lbnQgZnJvbSBcIi4vYmVsb3djb21tZW50XCI7XHJcblxyXG52YXIgcmVuZGVyZWQgPSAwXHJcblxyXG5mdW5jdGlvbiBDb21tZW50cGFydCh7RWRpdGNvbW1lbnRoYW5kbGVyLFByb2R1Y2Vjb21tZW50LGxpc3Qsc3Bpbm5lcixoYW5kbGVhbnN3ZXJ9KXtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cobGlzdClcclxuICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4ubGlzdH1cclxuICAgIFxyXG4gICAgY29uc3QgbnVtb2JqID0ge31cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBudW1vYmpbaV0gPSAwXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgTGVuZ3RoY2FsY3VhbHRlciA9IChjb21tZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNvbW1lbnQudGFrZWl0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgbnVtb2JqW2luZGV4XSArPSBjb21tZW50LnRha2VpdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudGFrZWl0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGVuZ3RoY2FsY3VhbHRlcihlbGVtZW50LGluZGV4KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBMZW5ndGhjYWxjdWFsdGVyKGxpc3RbaV0saSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhudW1vYmopXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICA8V3JpdGVjb21tZW50IHNwaW5uZXI9e3NwaW5uZXJ9IFByb2R1Y2Vjb21tZW50PXtQcm9kdWNlY29tbWVudH0+PC9Xcml0ZWNvbW1lbnQ+XHJcbiAgICAgICAgICAgIDxCZWxvd2NvbW1lbnQgRWRpdGNvbW1lbnRoYW5kbGVyPXtFZGl0Y29tbWVudGhhbmRsZXJ9IEFuc3dlcmhhbmRsZXI9e2hhbmRsZWFuc3dlcn0gbXlsaXN0PXtsaXN0fT48L0JlbG93Y29tbWVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDb21tZW50cGFydClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==