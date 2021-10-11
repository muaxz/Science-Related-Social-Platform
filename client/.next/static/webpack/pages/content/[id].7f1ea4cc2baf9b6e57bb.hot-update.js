webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/pages/Content/Commentsection/writecomment.js":
/*!*****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/writecomment.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Commentsection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\writecomment.js",
    _s = $RefreshSig$();






var Writecomment = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "writecomment__Writecomment",
  componentId: "tkv0t0-0"
})(["width:100%;padding-bottom:30px;"]);
_c = Writecomment;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "writecomment__Innerdiv",
  componentId: "tkv0t0-1"
})(["display:flex;align-items:center;justify-content:center;&::after{position:\"absolute\";top:\"50px\";left:\"50px\";width:\"100px\";height:\"20px\";background-color:\"red\";border:2px solid black;z-index:10000;}"]);
_c2 = Innerdiv;
var Options = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "writecomment__Options",
  componentId: "tkv0t0-2"
})(["width:", ";padding-right:10px;"], function (_ref) {
  var flex = _ref.flex;
  return flex;
});
_c3 = Options;
var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "writecomment__Spinner",
  componentId: "tkv0t0-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);
_c4 = Spinner;
function Commentsection(_ref2) {
  _s();

  var Producecomment = _ref2.Producecomment,
      spinner = _ref2.spinner;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      commentvalue = _useState[0],
      setcommentvalue = _useState[1];

  var Changevalue = function Changevalue(e) {
    if (commentvalue.length >= 140) return false;
    setcommentvalue(e.target.value);
  };

  var Submitcomment = function Submitcomment() {
    if (commentvalue.length > 0) {
      Producecomment(commentvalue);
    }

    setcommentvalue("");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Writecomment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Porfileimage"], {
          width: "50px",
          height: "50px",
          profile: "/car.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        flex: "70%",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
          value: commentvalue,
          onChange: Changevalue,
          color: "secondary",
          style: {
            width: "100%"
          },
          label: "Bir Yorum Yaz...",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          color: "secondary",
          onClick: Submitcomment,
          variant: "contained",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AddComment"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 94
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 24
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

_s(Commentsection, "t+O8KOur9qQ7WMswacZkVRqPVgM=");

_c5 = Commentsection;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Writecomment");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Options");
$RefreshReg$(_c4, "Spinner");
$RefreshReg$(_c5, "Commentsection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL3dyaXRlY29tbWVudC5qcyJdLCJuYW1lcyI6WyJXcml0ZWNvbW1lbnQiLCJzdHlsZWQiLCJkaXYiLCJJbm5lcmRpdiIsIk9wdGlvbnMiLCJmbGV4Iiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsIkNvbW1lbnRzZWN0aW9uIiwiUHJvZHVjZWNvbW1lbnQiLCJzcGlubmVyIiwidXNlU3RhdGUiLCJjb21tZW50dmFsdWUiLCJzZXRjb21tZW50dmFsdWUiLCJDaGFuZ2V2YWx1ZSIsImUiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlN1Ym1pdGNvbW1lbnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUNBQWxCO0tBQU1GLFk7QUFJTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsd05BQWQ7TUFBTUMsUTtBQWVOLElBQU1DLE9BQU8sR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx1Q0FDTDtBQUFBLE1BQUVHLElBQUYsUUFBRUEsSUFBRjtBQUFBLFNBQVVBLElBQVY7QUFBQSxDQURLLENBQWI7TUFBTUQsTztBQUlOLElBQU1FLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0VJLFNBREYsQ0FBYjtNQUFNRSxPO0FBYVMsU0FBU0MsY0FBVCxRQUFpRDtBQUFBOztBQUFBLE1BQXhCQyxjQUF3QixTQUF4QkEsY0FBd0I7QUFBQSxNQUFUQyxPQUFTLFNBQVRBLE9BQVM7O0FBQUEsa0JBRXZCQyxzREFBUSxDQUFDLEVBQUQsQ0FGZTtBQUFBLE1BRXJEQyxZQUZxRDtBQUFBLE1BRXhDQyxlQUZ3Qzs7QUFJNUQsTUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksQ0FBQ0MsQ0FBRCxFQUFLO0FBRW5CLFFBQUdILFlBQVksQ0FBQ0ksTUFBYixJQUF1QixHQUExQixFQUNBLE9BQU8sS0FBUDtBQUVBSCxtQkFBZSxDQUFDRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0gsR0FORDs7QUFRQSxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFJO0FBRXRCLFFBQUdQLFlBQVksQ0FBQ0ksTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUV6QlAsb0JBQWMsQ0FBQ0csWUFBRCxDQUFkO0FBRUQ7O0FBRURDLG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0QsR0FURDs7QUFXQSxzQkFDSSxxRUFBQyxZQUFEO0FBQUEsNEJBQ0kscUVBQUMsUUFBRDtBQUFBLDhCQUNHLHFFQUFDLE9BQUQ7QUFBQSwrQkFDRyxxRUFBQyxxRUFBRDtBQUFjLGVBQUssRUFBQyxNQUFwQjtBQUEyQixnQkFBTSxFQUFDLE1BQWxDO0FBQXlDLGlCQUFPLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUlJLHFFQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUUsS0FBZjtBQUFBLCtCQUNJLHFFQUFDLDJEQUFEO0FBQ0EsZUFBSyxFQUFFRCxZQURQO0FBRUEsa0JBQVEsRUFBRUUsV0FGVjtBQUdBLGVBQUssRUFBQyxXQUhOO0FBSUEsZUFBSyxFQUFFO0FBQUNNLGlCQUFLLEVBQUM7QUFBUCxXQUpQO0FBS0EsZUFBSyxFQUFDLGtCQUxOO0FBTUEsaUJBQU8sRUFBQztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFlSSxxRUFBQyxPQUFEO0FBQUEsK0JBQ08scUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsV0FBZDtBQUEwQixpQkFBTyxFQUFFRCxhQUFuQztBQUFrRCxpQkFBTyxFQUFDLFdBQTFEO0FBQUEsaUNBQXNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQXFCTVQsT0FBTyxnQkFDTDtBQUFLLFdBQUssRUFBRTtBQUFDVyxlQUFPLEVBQUMsTUFBVDtBQUFnQkMsc0JBQWMsRUFBQztBQUEvQixPQUFaO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEdBR0ksSUF4QmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztHQXBEdUJkLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjdmMWVhNGNjMmJhZjliNmU1N2JiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtBZGRDb21tZW50fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IFdyaXRlY29tbWVudD1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbTozMHB4O1xyXG5gXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4mOjphZnRlciB7XHJcbiAgcG9zaXRpb246XCJhYnNvbHV0ZVwiO1xyXG4gIHRvcDpcIjUwcHhcIjtcclxuICBsZWZ0OlwiNTBweFwiO1xyXG4gIHdpZHRoOlwiMTAwcHhcIjtcclxuICBoZWlnaHQ6XCIyMHB4XCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpcInJlZFwiO1xyXG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgei1pbmRleDoxMDAwMDtcclxufVxyXG5gXHJcbmNvbnN0IE9wdGlvbnM9c3R5bGVkLmRpdmBcclxud2lkdGg6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBhZGRpbmctcmlnaHQ6MTBweDtcclxuYFxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHNlY3Rpb24oe1Byb2R1Y2Vjb21tZW50LHNwaW5uZXJ9KXtcclxuXHJcbiAgICBjb25zdCBbY29tbWVudHZhbHVlLHNldGNvbW1lbnR2YWx1ZV09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgQ2hhbmdldmFsdWU9KGUpPT57XHJcblxyXG4gICAgICAgIGlmKGNvbW1lbnR2YWx1ZS5sZW5ndGggPj0gMTQwKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudHZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdGNvbW1lbnQ9KCk9PntcclxuXHJcbiAgICAgIGlmKGNvbW1lbnR2YWx1ZS5sZW5ndGggPiAwKXtcclxuXHJcbiAgICAgICAgUHJvZHVjZWNvbW1lbnQoY29tbWVudHZhbHVlKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldGNvbW1lbnR2YWx1ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcml0ZWNvbW1lbnQ+XHJcbiAgICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAgPE9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbnMgZmxleD17XCI3MCVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0NoYW5nZXZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJpciBZb3J1bSBZYXouLi5cIiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+IFxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e1N1Ym1pdGNvbW1lbnR9IHZhcmlhbnQ9XCJjb250YWluZWRcIj48QWRkQ29tbWVudD48L0FkZENvbW1lbnQ+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbnM+ICBcclxuICAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNwaW5uZXIgPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvV3JpdGVjb21tZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=