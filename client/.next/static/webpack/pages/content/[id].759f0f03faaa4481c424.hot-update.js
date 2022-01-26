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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _writecomment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writecomment */ "./components/pages/Content/Commentsection/writecomment.js");
/* harmony import */ var _belowcomment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./belowcomment */ "./components/pages/Content/Commentsection/belowcomment.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\Commentpart.js";



var rendered = 0;

function Commentpart(_ref) {
  var Editcommenthandler = _ref.Editcommenthandler,
      Producecomment = _ref.Producecomment,
      list = _ref.list,
      spinner = _ref.spinner,
      handleanswer = _ref.handleanswer;

  var mutated = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(list);

  var numobj = {};

  for (var i = 0; i < list.length; i++) {
    numobj[i] = 0;
  }

  var Lengthcalcualter = function Lengthcalcualter(comment, MainparentID, index, answerTo) {
    var Topcomment = "";

    if (comment.ContentId !== null) {
      Topcomment = comment;
    }

    comment.Mainparent = MainparentID;
    comment.AnswerTo = answerTo;

    if (comment.takeit.length > 0) {
      numobj[index] += comment.takeit.length;
      comment.takeit.forEach(function (element) {
        Lengthcalcualter(element, MainparentID, index, comment.User.firstname);
      });
    } else return;

    if (Topcomment !== "") {
      Topcomment["allchilds"] = numobj[index];
    }
  };

  for (var _i = 0; _i < mutated.length; _i++) {
    Lengthcalcualter(mutated[_i], mutated[_i].id, _i, "");
  }

  console.log(numobj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: "20px",
      clear: "right"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_writecomment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      spinner: spinner,
      Producecomment: Producecomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_belowcomment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Editcommenthandler: Editcommenthandler,
      Answerhandler: handleanswer,
      mylist: mutated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL0NvbW1lbnRwYXJ0LmpzIl0sIm5hbWVzIjpbInJlbmRlcmVkIiwiQ29tbWVudHBhcnQiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJQcm9kdWNlY29tbWVudCIsImxpc3QiLCJzcGlubmVyIiwiaGFuZGxlYW5zd2VyIiwibXV0YXRlZCIsIm51bW9iaiIsImkiLCJsZW5ndGgiLCJMZW5ndGhjYWxjdWFsdGVyIiwiY29tbWVudCIsIk1haW5wYXJlbnRJRCIsImluZGV4IiwiYW5zd2VyVG8iLCJUb3Bjb21tZW50IiwiQ29udGVudElkIiwiTWFpbnBhcmVudCIsIkFuc3dlclRvIiwidGFrZWl0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJVc2VyIiwiZmlyc3RuYW1lIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsImNsZWFyIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxTQUFTQyxXQUFULE9BQW1GO0FBQUEsTUFBN0RDLGtCQUE2RCxRQUE3REEsa0JBQTZEO0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBZEMsWUFBYyxRQUFkQSxZQUFjOztBQUcvRSxNQUFNQyxPQUFPLEdBQUcsa0pBQUlILElBQVAsQ0FBYjs7QUFHQSxNQUFNSSxNQUFNLEdBQUcsRUFBZjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLElBQUksQ0FBQ00sTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFFbENELFVBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVksQ0FBWjtBQUVIOztBQUVELE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsT0FBRCxFQUFTQyxZQUFULEVBQXNCQyxLQUF0QixFQUE0QkMsUUFBNUIsRUFBdUM7QUFFeEQsUUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUVBLFFBQUdKLE9BQU8sQ0FBQ0ssU0FBUixLQUFzQixJQUF6QixFQUE4QjtBQUMxQkQsZ0JBQVUsR0FBR0osT0FBYjtBQUNIOztBQUNEQSxXQUFPLENBQUNNLFVBQVIsR0FBcUJMLFlBQXJCO0FBQ0FELFdBQU8sQ0FBQ08sUUFBUixHQUFtQkosUUFBbkI7O0FBR0EsUUFBR0gsT0FBTyxDQUFDUSxNQUFSLENBQWVWLE1BQWYsR0FBd0IsQ0FBM0IsRUFBNkI7QUFDekJGLFlBQU0sQ0FBQ00sS0FBRCxDQUFOLElBQWlCRixPQUFPLENBQUNRLE1BQVIsQ0FBZVYsTUFBaEM7QUFDQUUsYUFBTyxDQUFDUSxNQUFSLENBQWVDLE9BQWYsQ0FBdUIsVUFBQUMsT0FBTyxFQUFJO0FBQzlCWCx3QkFBZ0IsQ0FBQ1csT0FBRCxFQUFTVCxZQUFULEVBQXNCQyxLQUF0QixFQUE0QkYsT0FBTyxDQUFDVyxJQUFSLENBQWFDLFNBQXpDLENBQWhCO0FBQ0gsT0FGRDtBQUdILEtBTEQsTUFNSzs7QUFFTCxRQUFHUixVQUFVLEtBQUssRUFBbEIsRUFBcUI7QUFDakJBLGdCQUFVLENBQUMsV0FBRCxDQUFWLEdBQTBCUixNQUFNLENBQUNNLEtBQUQsQ0FBaEM7QUFDSDtBQUNSLEdBdEJEOztBQXdCQSxPQUFLLElBQUlMLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdGLE9BQU8sQ0FBQ0csTUFBNUIsRUFBb0NELEVBQUMsRUFBckMsRUFBeUM7QUFFckNFLG9CQUFnQixDQUFDSixPQUFPLENBQUNFLEVBQUQsQ0FBUixFQUFZRixPQUFPLENBQUNFLEVBQUQsQ0FBUCxDQUFXZ0IsRUFBdkIsRUFBMEJoQixFQUExQixFQUE0QixFQUE1QixDQUFoQjtBQUNIOztBQUVEaUIsU0FBTyxDQUFDQyxHQUFSLENBQVluQixNQUFaO0FBRUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ29CLGFBQU8sRUFBQyxNQUFUO0FBQWdCQyxXQUFLLEVBQUM7QUFBdEIsS0FBWjtBQUFBLDRCQUNJLHFFQUFDLHFEQUFEO0FBQWMsYUFBTyxFQUFFeEIsT0FBdkI7QUFBZ0Msb0JBQWMsRUFBRUY7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMscURBQUQ7QUFBYyx3QkFBa0IsRUFBRUQsa0JBQWxDO0FBQXNELG1CQUFhLEVBQUVJLFlBQXJFO0FBQW1GLFlBQU0sRUFBRUM7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0tBbkRRTixXO0FBcURNLGtGQUFBNkIsNENBQUssQ0FBQ0MsSUFBTixDQUFXOUIsV0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS43NTlmMGYwM2ZhYWE0NDgxYzQyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV3JpdGVjb21tZW50IGZyb20gXCIuL3dyaXRlY29tbWVudFwiO1xyXG5pbXBvcnQgQmVsb3djb21tZW50IGZyb20gXCIuL2JlbG93Y29tbWVudFwiO1xyXG5cclxudmFyIHJlbmRlcmVkID0gMFxyXG5cclxuZnVuY3Rpb24gQ29tbWVudHBhcnQoe0VkaXRjb21tZW50aGFuZGxlcixQcm9kdWNlY29tbWVudCxsaXN0LHNwaW5uZXIsaGFuZGxlYW5zd2VyfSl7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBtdXRhdGVkID0gWy4uLmxpc3RdXHJcbiAgXHJcbiAgICBcclxuICAgIGNvbnN0IG51bW9iaiA9IHt9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbnVtb2JqW2ldID0gMFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IExlbmd0aGNhbGN1YWx0ZXIgPSAoY29tbWVudCxNYWlucGFyZW50SUQsaW5kZXgsYW5zd2VyVG8pPT57XHJcblxyXG4gICAgICAgICAgICB2YXIgVG9wY29tbWVudCA9IFwiXCJcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbW1lbnQuQ29udGVudElkICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIFRvcGNvbW1lbnQgPSBjb21tZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tbWVudC5NYWlucGFyZW50ID0gTWFpbnBhcmVudElEXHJcbiAgICAgICAgICAgIGNvbW1lbnQuQW5zd2VyVG8gPSBhbnN3ZXJUb1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbW1lbnQudGFrZWl0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgbnVtb2JqW2luZGV4XSArPSBjb21tZW50LnRha2VpdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQudGFrZWl0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGVuZ3RoY2FsY3VhbHRlcihlbGVtZW50LE1haW5wYXJlbnRJRCxpbmRleCxjb21tZW50LlVzZXIuZmlyc3RuYW1lKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIGlmKFRvcGNvbW1lbnQgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgVG9wY29tbWVudFtcImFsbGNoaWxkc1wiXSA9IG51bW9ialtpbmRleF1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIExlbmd0aGNhbGN1YWx0ZXIobXV0YXRlZFtpXSxtdXRhdGVkW2ldLmlkLGksXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhudW1vYmopXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzpcIjIwcHhcIixjbGVhcjpcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgPFdyaXRlY29tbWVudCBzcGlubmVyPXtzcGlubmVyfSBQcm9kdWNlY29tbWVudD17UHJvZHVjZWNvbW1lbnR9PjwvV3JpdGVjb21tZW50PlxyXG4gICAgICAgICAgICA8QmVsb3djb21tZW50IEVkaXRjb21tZW50aGFuZGxlcj17RWRpdGNvbW1lbnRoYW5kbGVyfSBBbnN3ZXJoYW5kbGVyPXtoYW5kbGVhbnN3ZXJ9IG15bGlzdD17bXV0YXRlZH0+PC9CZWxvd2NvbW1lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29tbWVudHBhcnQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=