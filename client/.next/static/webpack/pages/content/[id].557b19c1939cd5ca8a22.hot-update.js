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
})(["position:fixed;top:0;left:0;height:100vh;z-index:101;background-color:#646170;"]);
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
})(["list-style-type:none;margin-top:20px;"]); //const Icon=styled.i`
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
    desc: "Gönderiyi Kaydet"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Gönderiyi Beğen"
  }, {
    icon: "fas fa-retweet",
    desc: "Gönderiyi Profil Sayfamda Göster"
  }]),
      current = _useRef.current;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
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
            lineNumber: 65,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          columnNumber: 18
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          style: {
            width: "100%",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          },
          children: current.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: item.icon,
                Iconconfig: {
                  width: "35px",
                  height: "35px",
                  lineheight: "35px",
                  backcolor: "#549B94"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 34
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 30
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, _this);
};

_s(Lefttoolbar, "Qx65ytcryeGv6EUbmR6KsKx9hL8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwiY29sb3IiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFwIiwiaXRlbSIsImJhY2tjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0ZBQWpCO0tBQU1GLFc7QUFTTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0ZBQWQ7TUFBTUMsUTtBQVFOLElBQU1DLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2SEFBZDtNQUFNRSxRO0FBVU4sSUFBTUMsYUFBYSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDREQUFuQjtNQUFNRyxhO0FBS04sSUFBTUMsRUFBRSxHQUFDTCx5REFBTSxDQUFDTSxFQUFSO0FBQUE7QUFBQTtBQUFBLDZDQUFSLEMsQ0FLQTtBQUNBO0FBQ0E7O01BUE1ELEU7QUFRTixJQUFNRSxTQUFTLEdBQUNQLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkRBQWY7O0FBT0EsSUFBTU8sV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUFBOztBQUFBLGdCQUNGQyxvREFBTSxDQUFDLENBQUM7QUFBQ0MsUUFBSSxFQUFDLGlCQUFOO0FBQXdCQyxRQUFJLEVBQUM7QUFBN0IsR0FBRCxFQUFrRDtBQUFDRCxRQUFJLEVBQUMsa0JBQU47QUFBeUJDLFFBQUksRUFBQztBQUE5QixHQUFsRCxFQUFtRztBQUFDRCxRQUFJLEVBQUMsZ0JBQU47QUFBdUJDLFFBQUksRUFBQztBQUE1QixHQUFuRyxDQUFELENBREo7QUFBQSxNQUNYQyxPQURXLFdBQ1hBLE9BRFc7O0FBRWxCLHNCQUNJLHFFQUFDLFdBQUQ7QUFBQSwyQkFDSSxxRUFBQyxRQUFEO0FBQUEsOEJBSUcscUVBQUMsUUFBRDtBQUFBLGdDQUNDO0FBQUssZUFBSyxFQUFFO0FBQUNDLHlCQUFhLEVBQUM7QUFBZixXQUFaO0FBQUEsaUNBQ0cscUVBQUMscUVBQUQ7QUFBYyxtQkFBTyxFQUFFLFVBQXZCO0FBQW9DLGlCQUFLLEVBQUMsTUFBMUM7QUFBaUQsa0JBQU0sRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlFLHFFQUFDLGdEQUFEO0FBQU0sbUJBQVMsRUFBQywyQkFBaEI7QUFBNEMsb0JBQVUsRUFBRTtBQUFDQyxpQkFBSyxFQUFDLE1BQVA7QUFBY0Msa0JBQU0sRUFBQyxNQUFyQjtBQUE0QkMsc0JBQVUsRUFBQyxNQUF2QztBQUE4Q0MsaUJBQUssRUFBQztBQUFwRDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpILGVBVUcscUVBQUMsYUFBRDtBQUFBLCtCQUNLO0FBQUksZUFBSyxFQUFFO0FBQUNILGlCQUFLLEVBQUMsTUFBUDtBQUFjSSxtQkFBTyxFQUFDLEtBQXRCO0FBQTRCQyxtQkFBTyxFQUFDLE1BQXBDO0FBQTJDQyx5QkFBYSxFQUFDLFFBQXpEO0FBQWtFQyxzQkFBVSxFQUFDO0FBQTdFLFdBQVg7QUFBQSxvQkFDS1QsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLGdDQUNSLHFFQUFDLEVBQUQ7QUFBQSxxQ0FBSSxxRUFBQyxnREFBRDtBQUFNLHlCQUFTLEVBQUVBLElBQUksQ0FBQ2IsSUFBdEI7QUFBNEIsMEJBQVUsRUFBRTtBQUFDSSx1QkFBSyxFQUFDLE1BQVA7QUFBY0Msd0JBQU0sRUFBQyxNQUFyQjtBQUE0QkMsNEJBQVUsRUFBQyxNQUF2QztBQUE4Q1EsMkJBQVMsRUFBQztBQUF4RDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQXpCRDs7R0FBTWhCLFc7O01BQUFBLFc7QUE0QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS41NTdiMTljMTkzOWNkNWNhOGEyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjEwMHZoO1xyXG56LWluZGV4OjEwMTtcclxuYmFja2dyb3VuZC1jb2xvcjojNjQ2MTcwO1xyXG4vL2JveC1zaGFkb3c6MnB4IDVweCA1cHggZ3JleTtcclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuXHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uRGl2PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3lvcjp5ZWxsb3c7XHJcbm1hcmdpbi10b3A6MzBweDtcclxud2lkdGg6OTYlO1xyXG5gXHJcbmNvbnN0IExpPXN0eWxlZC5saWBcclxubGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5cclxuLy9jb25zdCBJY29uPXN0eWxlZC5pYFxyXG4vL2NvbG9yOiNDNzAwMzk7XHJcbi8vYFxyXG5jb25zdCBDbG9zZW9wZW49c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYFxyXG5cclxuY29uc3QgTGVmdHRvb2xiYXI9KCk9PntcclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIkfDtm5kZXJpeWkgS2F5ZGV0XCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJHw7ZuZGVyaXlpIEJlxJ9lblwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIkfDtm5kZXJpeWkgUHJvZmlsIFNheWZhbWRhIEfDtnN0ZXJcIn1dKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JEaXY+XHJcbiAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiAgPENsb3Nlb3Blbj5cclxuICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjM1cHhcIixjb2xvcjpcImJsYWNrXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT48SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGJhY2tjb2xvcjpcIiM1NDlCOTRcIn19PjwvSWNvbj48L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9