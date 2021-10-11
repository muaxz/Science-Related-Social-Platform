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
})([""]);
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
          lineNumber: 66,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
          lineNumber: 69,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          color: "secondary",
          onClick: Submitcomment,
          variant: "contained",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AddComment"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 94
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 24
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL3dyaXRlY29tbWVudC5qcyJdLCJuYW1lcyI6WyJXcml0ZWNvbW1lbnQiLCJzdHlsZWQiLCJkaXYiLCJJbm5lcmRpdiIsIk9wdGlvbnMiLCJmbGV4Iiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsIkNvbW1lbnRzZWN0aW9uIiwiUHJvZHVjZWNvbW1lbnQiLCJzcGlubmVyIiwidXNlU3RhdGUiLCJjb21tZW50dmFsdWUiLCJzZXRjb21tZW50dmFsdWUiLCJDaGFuZ2V2YWx1ZSIsImUiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlN1Ym1pdGNvbW1lbnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUNBQWxCO0tBQU1GLFk7QUFJTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBZDtNQUFNQyxRO0FBRU4sSUFBTUMsT0FBTyxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHVDQUNMO0FBQUEsTUFBRUcsSUFBRixRQUFFQSxJQUFGO0FBQUEsU0FBVUEsSUFBVjtBQUFBLENBREssQ0FBYjtNQUFNRCxPO0FBSU4sSUFBTUUsU0FBUyxHQUFHQyxtRUFBSCxnRUFBZjtBQVNBLElBQU1DLE9BQU8sR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpUUFDRUksU0FERixDQUFiO01BQU1FLE87QUFhUyxTQUFTQyxjQUFULFFBQWlEO0FBQUE7O0FBQUEsTUFBeEJDLGNBQXdCLFNBQXhCQSxjQUF3QjtBQUFBLE1BQVRDLE9BQVMsU0FBVEEsT0FBUzs7QUFBQSxrQkFFdkJDLHNEQUFRLENBQUMsRUFBRCxDQUZlO0FBQUEsTUFFckRDLFlBRnFEO0FBQUEsTUFFeENDLGVBRndDOztBQUk1RCxNQUFNQyxXQUFXLEdBQUMsU0FBWkEsV0FBWSxDQUFDQyxDQUFELEVBQUs7QUFFbkIsUUFBR0gsWUFBWSxDQUFDSSxNQUFiLElBQXVCLEdBQTFCLEVBQ0EsT0FBTyxLQUFQO0FBRUFILG1CQUFlLENBQUNFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDSCxHQU5EOztBQVFBLE1BQU1DLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFFdEIsUUFBR1AsWUFBWSxDQUFDSSxNQUFiLEdBQXNCLENBQXpCLEVBQTJCO0FBRXpCUCxvQkFBYyxDQUFDRyxZQUFELENBQWQ7QUFFRDs7QUFFREMsbUJBQWUsQ0FBQyxFQUFELENBQWY7QUFDRCxHQVREOztBQVdBLHNCQUNJLHFFQUFDLFlBQUQ7QUFBQSw0QkFDSSxxRUFBQyxRQUFEO0FBQUEsOEJBQ0cscUVBQUMsT0FBRDtBQUFBLCtCQUNHLHFFQUFDLHFFQUFEO0FBQWMsZUFBSyxFQUFDLE1BQXBCO0FBQTJCLGdCQUFNLEVBQUMsTUFBbEM7QUFBeUMsaUJBQU8sRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBSUkscUVBQUMsT0FBRDtBQUFTLFlBQUksRUFBRSxLQUFmO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFDQSxlQUFLLEVBQUVELFlBRFA7QUFFQSxrQkFBUSxFQUFFRSxXQUZWO0FBR0EsZUFBSyxFQUFDLFdBSE47QUFJQSxlQUFLLEVBQUU7QUFBQ00saUJBQUssRUFBQztBQUFQLFdBSlA7QUFLQSxlQUFLLEVBQUMsa0JBTE47QUFNQSxpQkFBTyxFQUFDO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQWVJLHFFQUFDLE9BQUQ7QUFBQSwrQkFDTyxxRUFBQyx3REFBRDtBQUFRLGVBQUssRUFBQyxXQUFkO0FBQTBCLGlCQUFPLEVBQUVELGFBQW5DO0FBQWtELGlCQUFPLEVBQUMsV0FBMUQ7QUFBQSxpQ0FBc0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBcUJNVCxPQUFPLGdCQUNMO0FBQUssV0FBSyxFQUFFO0FBQUNXLGVBQU8sRUFBQyxNQUFUO0FBQWdCQyxzQkFBYyxFQUFDO0FBQS9CLE9BQVo7QUFBQSw2QkFDRSxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssR0FHSSxJQXhCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7O0dBcER1QmQsYzs7TUFBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uYThhMGRiMmY3M2Q5ZTdiNmUzNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge0FkZENvbW1lbnR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5cclxuY29uc3QgV3JpdGVjb21tZW50PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctYm90dG9tOjMwcHg7XHJcbmBcclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuYFxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbndpZHRoOiR7KHtmbGV4fSk9PmZsZXh9O1xyXG5wYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbmBcclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzZWN0aW9uKHtQcm9kdWNlY29tbWVudCxzcGlubmVyfSl7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnR2YWx1ZSxzZXRjb21tZW50dmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IENoYW5nZXZhbHVlPShlKT0+e1xyXG5cclxuICAgICAgICBpZihjb21tZW50dmFsdWUubGVuZ3RoID49IDE0MClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnR2YWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJtaXRjb21tZW50PSgpPT57XHJcblxyXG4gICAgICBpZihjb21tZW50dmFsdWUubGVuZ3RoID4gMCl7XHJcblxyXG4gICAgICAgIFByb2R1Y2Vjb21tZW50KGNvbW1lbnR2YWx1ZSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRjb21tZW50dmFsdWUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JpdGVjb21tZW50PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgIDxPcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBwcm9maWxlPVwiL2Nhci5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb25zIGZsZXg9e1wiNzAlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtDaGFuZ2V2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCaXIgWW9ydW0gWWF6Li4uXCIgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPiBcclxuICAgICAgICAgICAgICAgIDwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtTdWJtaXRjb21tZW50fSB2YXJpYW50PVwiY29udGFpbmVkXCI+PEFkZENvbW1lbnQ+PC9BZGRDb21tZW50PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb25zPiAgXHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcGlubmVyID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1dyaXRlY29tbWVudD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9