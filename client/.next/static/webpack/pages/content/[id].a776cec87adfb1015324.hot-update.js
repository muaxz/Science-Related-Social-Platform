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
})(["position:fixed;top:0;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#997272;transition:all 0.2s;width:", ""], function (_ref) {
  var active = _ref.active;
  return active ? "200px" : "70px";
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
})(["display:flex;border-bottom:1px solid white;justify-content:space-around;flex-direction:column;"]);
_c3 = ImageDiv;
var NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-25lf6-3"
})(["background-coloyor:yellow;margin-top:30px;width:96%;"]);
_c4 = NavigationDiv;
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-25lf6-4"
})(["list-style-type:none;margin-top:20px;display:flex;align-items:center;"]); //const Icon=styled.i`
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          lineNumber: 67,
          columnNumber: 16
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            paddingBottom: "15px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
            profile: "/car.jpg",
            width: open ? "80px" : "50px",
            height: open ? "80px" : "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 20
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: open ? "block" : "none"
              },
              children: "Emre \xD6zer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 20
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          style: {
            width: "100%",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: open ? "flex-start" : "center"
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
                style: {
                  display: open ? "block" : "none",
                  fontSize: "14px",
                  marginLeft: "10px"
                },
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
      lineNumber: 62,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiYWN0aXZlIiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRvcGVuIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwiY29sb3IiLCJwYWRkaW5nQm90dG9tIiwiZGlzcGxheSIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsIml0ZW0iLCJiYWNrY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFJQVNUO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBVFMsQ0FBakI7S0FBTUgsVztBQVdOLElBQU1JLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzRkFBZDtNQUFNRSxRO0FBUU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHNHQUFkO01BQU1HLFE7QUFRTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNERBQW5CO01BQU1JLGE7QUFLTixJQUFNQyxFQUFFLEdBQUNOLHlEQUFNLENBQUNPLEVBQVI7QUFBQTtBQUFBO0FBQUEsNkVBQVIsQyxDQU9BO0FBQ0E7QUFD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QUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0EvQkQ7O0dBQU1ILFc7O01BQUFBLFc7QUFrQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS5hNzc2Y2VjODdhZGZiMTAxNTMyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbm92ZXJmbG93OmhpZGRlbjtcclxubGVmdDowO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbnotaW5kZXg6MTUwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM5OTcyNzI7XHJcbnRyYW5zaXRpb246YWxsIDAuMnM7XHJcbndpZHRoOiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCIyMDBweFwiIDogXCI3MHB4XCJ9XHJcbmBcclxuY29uc3QgSW5uZXJEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nOjVweDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblxyXG5gXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uRGl2PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3lvcjp5ZWxsb3c7XHJcbm1hcmdpbi10b3A6MzBweDtcclxud2lkdGg6OTYlO1xyXG5gXHJcbmNvbnN0IExpPXN0eWxlZC5saWBcclxubGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbm1hcmdpbi10b3A6MjBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbi8vY29uc3QgSWNvbj1zdHlsZWQuaWBcclxuLy9jb2xvcjojQzcwMDM5O1xyXG4vL2BcclxuY29uc3QgQ2xvc2VvcGVuPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IExlZnR0b29sYmFyPSgpPT57XHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJLYXlkZWRpbGVubGVyXCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJCZcSfZW5pbGVubGVyXCJ9LHtpY29uOlwiZmFzIGZhLXJldHdlZXRcIixkZXNjOlwiUmV0d2VldFwifV0pXHJcbiAgICBjb25zdCBbb3BlbixzZXRvcGVuXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvckRpdiBhY3RpdmU9e29wZW59PlxyXG4gICAgICAgICAgICA8SW5uZXJEaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogIDxDbG9zZW9wZW4+XHJcbiAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9XCJmYXIgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8L0Nsb3Nlb3Blbj4qL31cclxuICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+c2V0b3Blbighb3Blbil9IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzNXB4XCIsY29sb3I6XCJibGFja1wifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17XCIvY2FyLmpwZ1wifSAgd2lkdGg9e29wZW4gPyBcIjgwcHhcIiA6IFwiNTBweFwifSBoZWlnaHQ9e29wZW4gPyBcIjgwcHhcIiA6IFwiNTBweFwifS8+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIHN0eWxlPXt7ZGlzcGxheTpvcGVuID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5FbXJlIMOWemVyPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm9wZW4gPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjM1cHhcIixiYWNrY29sb3I6XCIjNTQ5Qjk0XCIsY29sb3I6XCIjRjFGMUYxXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpvcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsZm9udFNpemU6XCIxNHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgPC9Jbm5lckRpdj5cclxuICAgICAgICA8L0V4dGVyaW9yRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdHRvb2xiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=