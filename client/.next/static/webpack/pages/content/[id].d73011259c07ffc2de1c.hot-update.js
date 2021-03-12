webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/pages/Main/Lefttoolbar.js":
/*!**********************************************!*\
  !*** ./components/pages/Main/Lefttoolbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Lefttoolbar.js",
    _this = undefined,
    _s = $RefreshSig$();





var ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-25lf6-0"
})(["position:fixed;top:0;left:0;height:100vh;z-index:150;background-color:#997272;width:", " transition:0.2s;"], function (_ref) {
  var active = _ref.active;
  return active ? "200px" : "";
});
_c = ExteriorDiv;
var InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-25lf6-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;"]);
_c2 = InnerDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-25lf6-2"
})(["width:100%;display:flex;border-bottom:1px solid grey;justify-content:center;flex-direction:column;align-items:center;"]);
_c3 = ImageDiv;
var NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-25lf6-3"
})(["background-coloyor:yellow;margin-top:30px;width:96%;"]);
_c4 = NavigationDiv;
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-25lf6-4"
})(["list-style-type:none;margin-top:20px;display:flex;"]); //const Icon=styled.i`
//color:#C70039;
//`

_c5 = Li;
var Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-25lf6-5"
})(["width:100%;height:30px;padding:10px;text-align:right;"]);

var Lefttoolbar = function Lefttoolbar() {
  _s();

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Kaydedilenler"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Beğenilenler"
  }, {
    icon: "fas fa-retweet",
    desc: "Retweet"
  }]),
      current = _useRef.current;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setopen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
    active: open,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            paddingBottom: "15px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
            profile: "/car.jpg",
            width: "50px",
            height: "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activefunc: function activefunc() {
            return setopen(!open);
          },
          className: "fas fa-angle-double-right",
          Iconconfig: {
            width: "35px",
            height: "35px",
            lineheight: "35px",
            color: "black"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 18
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          style: {
            width: "100%",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          },
          children: current.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: item.icon,
                Iconconfig: {
                  width: "35px",
                  height: "35px",
                  lineheight: "35px",
                  backcolor: "#549B94",
                  color: "#F1F1F1"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 34
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 30
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(Lefttoolbar, "bErWpd0EZsRJaPDLwcfFuaznSgQ=");

_c6 = Lefttoolbar;
/* harmony default export */ __webpack_exports__["default"] = (Lefttoolbar);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ExteriorDiv");
$RefreshReg$(_c2, "InnerDiv");
$RefreshReg$(_c3, "ImageDiv");
$RefreshReg$(_c4, "NavigationDiv");
$RefreshReg$(_c5, "Li");
$RefreshReg$(_c6, "Lefttoolbar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiYWN0aXZlIiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRvcGVuIiwicGFkZGluZ0JvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZWhlaWdodCIsImNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsIml0ZW0iLCJiYWNrY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGtIQVFUO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxFQUEvQjtBQUFBLENBUlMsQ0FBakI7S0FBTUgsVztBQVdOLElBQU1JLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzRkFBZDtNQUFNRSxRO0FBUU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZIQUFkO01BQU1HLFE7QUFVTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNERBQW5CO01BQU1JLGE7QUFLTixJQUFNQyxFQUFFLEdBQUNOLHlEQUFNLENBQUNPLEVBQVI7QUFBQTtBQUFBO0FBQUEsMERBQVIsQyxDQU1BO0FBQ0E7QUFDQTs7TUFSTUQsRTtBQVNOLElBQU1FLFNBQVMsR0FBQ1IseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2REFBZjs7QUFPQSxJQUFNUSxXQUFXLEdBQUMsU0FBWkEsV0FBWSxHQUFJO0FBQUE7O0FBQUEsZ0JBQ0ZDLG9EQUFNLENBQUMsQ0FBQztBQUFDQyxRQUFJLEVBQUMsaUJBQU47QUFBd0JDLFFBQUksRUFBQztBQUE3QixHQUFELEVBQStDO0FBQUNELFFBQUksRUFBQyxrQkFBTjtBQUF5QkMsUUFBSSxFQUFDO0FBQTlCLEdBQS9DLEVBQTZGO0FBQUNELFFBQUksRUFBQyxnQkFBTjtBQUF1QkMsUUFBSSxFQUFDO0FBQTVCLEdBQTdGLENBQUQsQ0FESjtBQUFBLE1BQ1hDLE9BRFcsV0FDWEEsT0FEVzs7QUFBQSxrQkFFR0Msc0RBQVEsQ0FBQyxLQUFELENBRlg7QUFBQSxNQUVYQyxJQUZXO0FBQUEsTUFFTkMsT0FGTTs7QUFHbEIsc0JBQ0kscUVBQUMsV0FBRDtBQUFhLFVBQU0sRUFBRUQsSUFBckI7QUFBQSwyQkFDSSxxRUFBQyxRQUFEO0FBQUEsOEJBSUcscUVBQUMsUUFBRDtBQUFBLGdDQUNDO0FBQUssZUFBSyxFQUFFO0FBQUNFLHlCQUFhLEVBQUM7QUFBZixXQUFaO0FBQUEsaUNBQ0cscUVBQUMscUVBQUQ7QUFBYyxtQkFBTyxFQUFFLFVBQXZCO0FBQW9DLGlCQUFLLEVBQUMsTUFBMUM7QUFBaUQsa0JBQU0sRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQVUsRUFBRTtBQUFBLG1CQUFJRCxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFYO0FBQUEsV0FBbEI7QUFBc0MsbUJBQVMsRUFBQywyQkFBaEQ7QUFBNEUsb0JBQVUsRUFBRTtBQUFDRyxpQkFBSyxFQUFDLE1BQVA7QUFBY0Msa0JBQU0sRUFBQyxNQUFyQjtBQUE0QkMsc0JBQVUsRUFBQyxNQUF2QztBQUE4Q0MsaUJBQUssRUFBQztBQUFwRDtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpILGVBVUcscUVBQUMsYUFBRDtBQUFBLCtCQUNLO0FBQUksZUFBSyxFQUFFO0FBQUNILGlCQUFLLEVBQUMsTUFBUDtBQUFjSSxtQkFBTyxFQUFDLEtBQXRCO0FBQTRCQyxtQkFBTyxFQUFDLE1BQXBDO0FBQTJDQyx5QkFBYSxFQUFDLFFBQXpEO0FBQWtFQyxzQkFBVSxFQUFDO0FBQTdFLFdBQVg7QUFBQSxvQkFDS1osT0FBTyxDQUFDYSxHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLGdDQUNSLHFFQUFDLEVBQUQ7QUFBQSxzQ0FDSSxxRUFBQyxnREFBRDtBQUFNLHlCQUFTLEVBQUVBLElBQUksQ0FBQ2hCLElBQXRCO0FBQTRCLDBCQUFVLEVBQUU7QUFBQ08sdUJBQUssRUFBQyxNQUFQO0FBQWNDLHdCQUFNLEVBQUMsTUFBckI7QUFBNEJDLDRCQUFVLEVBQUMsTUFBdkM7QUFBOENRLDJCQUFTLEVBQUMsU0FBeEQ7QUFBa0VQLHVCQUFLLEVBQUM7QUFBeEU7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsMEJBQU9NLElBQUksQ0FBQ2Y7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJCSCxDQTlCRDs7R0FBTUgsVzs7TUFBQUEsVztBQWlDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmQ3MzAxMTI1OWMwN2ZmYzJkZTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9VSS9JY29uXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbnotaW5kZXg6MTUwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM5OTcyNzI7XHJcbi8vYm94LXNoYWRvdzoycHggNXB4IDVweCBncmV5O1xyXG53aWR0aDokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMjAwcHhcIiA6IFwiXCJ9XHJcbnRyYW5zaXRpb246MC4ycztcclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuXHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uRGl2PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3lvcjp5ZWxsb3c7XHJcbm1hcmdpbi10b3A6MzBweDtcclxud2lkdGg6OTYlO1xyXG5gXHJcbmNvbnN0IExpPXN0eWxlZC5saWBcclxubGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbm1hcmdpbi10b3A6MjBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5gXHJcblxyXG4vL2NvbnN0IEljb249c3R5bGVkLmlgXHJcbi8vY29sb3I6I0M3MDAzOTtcclxuLy9gXHJcbmNvbnN0IENsb3Nlb3Blbj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzoxMHB4O1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBMZWZ0dG9vbGJhcj0oKT0+e1xyXG4gICAgY29uc3Qge2N1cnJlbnR9PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiS2F5ZGVkaWxlbmxlclwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiQmXEn2VuaWxlbmxlclwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIlJldHdlZXRcIn1dKVxyXG4gICAgY29uc3QgW29wZW4sc2V0b3Blbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JEaXYgYWN0aXZlPXtvcGVufT5cclxuICAgICAgICAgICAgPElubmVyRGl2PlxyXG4gICAgICAgICAgICAgICAgey8qICA8Q2xvc2VvcGVuPlxyXG4gICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgPC9DbG9zZW9wZW4+Ki99XHJcbiAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e1wiL2Nhci5qcGdcIn0gIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+c2V0b3Blbighb3Blbil9IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzNXB4XCIsY29sb3I6XCJibGFja1wifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpcImZsZXgtc3RhcnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGJhY2tjb2xvcjpcIiM1NDlCOTRcIixjb2xvcjpcIiNGMUYxRjFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZGVzY308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9