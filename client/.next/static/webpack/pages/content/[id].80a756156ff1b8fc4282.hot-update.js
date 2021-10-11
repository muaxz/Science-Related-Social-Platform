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
})(["display:flex;align-items:center;justify-content:center;&:after{position:absolute;top:50px;left:50px;width:100px;height:20px;background-color:red;border:2px solid black;z-index:10000;}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL3dyaXRlY29tbWVudC5qcyJdLCJuYW1lcyI6WyJXcml0ZWNvbW1lbnQiLCJzdHlsZWQiLCJkaXYiLCJJbm5lcmRpdiIsIk9wdGlvbnMiLCJmbGV4Iiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsIkNvbW1lbnRzZWN0aW9uIiwiUHJvZHVjZWNvbW1lbnQiLCJzcGlubmVyIiwidXNlU3RhdGUiLCJjb21tZW50dmFsdWUiLCJzZXRjb21tZW50dmFsdWUiLCJDaGFuZ2V2YWx1ZSIsImUiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlN1Ym1pdGNvbW1lbnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUNBQWxCO0tBQU1GLFk7QUFJTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0xBQWQ7TUFBTUMsUTtBQWVOLElBQU1DLE9BQU8sR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx1Q0FDTDtBQUFBLE1BQUVHLElBQUYsUUFBRUEsSUFBRjtBQUFBLFNBQVVBLElBQVY7QUFBQSxDQURLLENBQWI7TUFBTUQsTztBQUlOLElBQU1FLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0VJLFNBREYsQ0FBYjtNQUFNRSxPO0FBYVMsU0FBU0MsY0FBVCxRQUFpRDtBQUFBOztBQUFBLE1BQXhCQyxjQUF3QixTQUF4QkEsY0FBd0I7QUFBQSxNQUFUQyxPQUFTLFNBQVRBLE9BQVM7O0FBQUEsa0JBRXZCQyxzREFBUSxDQUFDLEVBQUQsQ0FGZTtBQUFBLE1BRXJEQyxZQUZxRDtBQUFBLE1BRXhDQyxlQUZ3Qzs7QUFJNUQsTUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksQ0FBQ0MsQ0FBRCxFQUFLO0FBRW5CLFFBQUdILFlBQVksQ0FBQ0ksTUFBYixJQUF1QixHQUExQixFQUNBLE9BQU8sS0FBUDtBQUVBSCxtQkFBZSxDQUFDRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0gsR0FORDs7QUFRQSxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFJO0FBRXRCLFFBQUdQLFlBQVksQ0FBQ0ksTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUV6QlAsb0JBQWMsQ0FBQ0csWUFBRCxDQUFkO0FBRUQ7O0FBRURDLG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0QsR0FURDs7QUFXQSxzQkFDSSxxRUFBQyxZQUFEO0FBQUEsNEJBQ0kscUVBQUMsUUFBRDtBQUFBLDhCQUNHLHFFQUFDLE9BQUQ7QUFBQSwrQkFDRyxxRUFBQyxxRUFBRDtBQUFjLGVBQUssRUFBQyxNQUFwQjtBQUEyQixnQkFBTSxFQUFDLE1BQWxDO0FBQXlDLGlCQUFPLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUlJLHFFQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUUsS0FBZjtBQUFBLCtCQUNJLHFFQUFDLDJEQUFEO0FBQ0EsZUFBSyxFQUFFRCxZQURQO0FBRUEsa0JBQVEsRUFBRUUsV0FGVjtBQUdBLGVBQUssRUFBQyxXQUhOO0FBSUEsZUFBSyxFQUFFO0FBQUNNLGlCQUFLLEVBQUM7QUFBUCxXQUpQO0FBS0EsZUFBSyxFQUFDLGtCQUxOO0FBTUEsaUJBQU8sRUFBQztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFlSSxxRUFBQyxPQUFEO0FBQUEsK0JBQ08scUVBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUMsV0FBZDtBQUEwQixpQkFBTyxFQUFFRCxhQUFuQztBQUFrRCxpQkFBTyxFQUFDLFdBQTFEO0FBQUEsaUNBQXNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQXFCTVQsT0FBTyxnQkFDTDtBQUFLLFdBQUssRUFBRTtBQUFDVyxlQUFPLEVBQUMsTUFBVDtBQUFnQkMsc0JBQWMsRUFBQztBQUEvQixPQUFaO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEdBR0ksSUF4QmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztHQXBEdUJkLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjgwYTc1NjE1NmZmMWI4ZmM0MjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtBZGRDb21tZW50fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IFdyaXRlY29tbWVudD1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbTozMHB4O1xyXG5gXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4mOiBhZnRlcntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6NTBweDtcclxuICBsZWZ0OjUwcHg7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICB6LWluZGV4OjEwMDAwO1xyXG59XHJcbmBcclxuY29uc3QgT3B0aW9ucz1zdHlsZWQuZGl2YFxyXG53aWR0aDokeyh7ZmxleH0pPT5mbGV4fTtcclxucGFkZGluZy1yaWdodDoxMHB4O1xyXG5gXHJcbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50c2VjdGlvbih7UHJvZHVjZWNvbW1lbnQsc3Bpbm5lcn0pe1xyXG5cclxuICAgIGNvbnN0IFtjb21tZW50dmFsdWUsc2V0Y29tbWVudHZhbHVlXT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2V2YWx1ZT0oZSk9PntcclxuXHJcbiAgICAgICAgaWYoY29tbWVudHZhbHVlLmxlbmd0aCA+PSAxNDApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBzZXRjb21tZW50dmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0Y29tbWVudD0oKT0+e1xyXG5cclxuICAgICAgaWYoY29tbWVudHZhbHVlLmxlbmd0aCA+IDApe1xyXG5cclxuICAgICAgICBQcm9kdWNlY29tbWVudChjb21tZW50dmFsdWUpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Y29tbWVudHZhbHVlKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyaXRlY29tbWVudD5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICA8T3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIgcHJvZmlsZT1cIi9jYXIuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9ucyBmbGV4PXtcIjcwJVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Q2hhbmdldmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmlyIFlvcnVtIFlhei4uLlwiICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD4gXHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17U3VibWl0Y29tbWVudH0gdmFyaWFudD1cImNvbnRhaW5lZFwiPjxBZGRDb21tZW50PjwvQWRkQ29tbWVudD48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9ucz4gIFxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3Bpbm5lciA/IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Xcml0ZWNvbW1lbnQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==