webpackHotUpdate_N_E("pages/index",{

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
})(["position:fixed;top:0;left:0;height:100vh;z-index:150;background-color:#997272;transition:all 1s;width:", ""], function (_ref) {
  var active = _ref.active;
  return active ? "200px" : "0px";
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
                style: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiYWN0aXZlIiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRvcGVuIiwicGFkZGluZ0JvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZWhlaWdodCIsImNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsIml0ZW0iLCJiYWNrY29sb3IiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtSEFRVDtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsS0FBL0I7QUFBQSxDQVJTLENBQWpCO0tBQU1ILFc7QUFVTixJQUFNSSxRQUFRLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0ZBQWQ7TUFBTUUsUTtBQVFOLElBQU1DLFFBQVEsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2SEFBZDtNQUFNRyxRO0FBVU4sSUFBTUMsYUFBYSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDREQUFuQjtNQUFNSSxhO0FBS04sSUFBTUMsRUFBRSxHQUFDTix5REFBTSxDQUFDTyxFQUFSO0FBQUE7QUFBQTtBQUFBLDZFQUFSLEMsQ0FPQTtBQUNBO0FBQ0E7O01BVE1ELEU7QUFVTixJQUFNRSxTQUFTLEdBQUNSLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkRBQWY7O0FBT0EsSUFBTVEsV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUFBOztBQUFBLGdCQUNGQyxvREFBTSxDQUFDLENBQUM7QUFBQ0MsUUFBSSxFQUFDLGlCQUFOO0FBQXdCQyxRQUFJLEVBQUM7QUFBN0IsR0FBRCxFQUErQztBQUFDRCxRQUFJLEVBQUMsa0JBQU47QUFBeUJDLFFBQUksRUFBQztBQUE5QixHQUEvQyxFQUE2RjtBQUFDRCxRQUFJLEVBQUMsZ0JBQU47QUFBdUJDLFFBQUksRUFBQztBQUE1QixHQUE3RixDQUFELENBREo7QUFBQSxNQUNYQyxPQURXLFdBQ1hBLE9BRFc7O0FBQUEsa0JBRUdDLHNEQUFRLENBQUMsS0FBRCxDQUZYO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRU5DLE9BRk07O0FBR2xCLHNCQUNJLHFFQUFDLFdBQUQ7QUFBYSxVQUFNLEVBQUVELElBQXJCO0FBQUEsMkJBQ0kscUVBQUMsUUFBRDtBQUFBLDhCQUlHLHFFQUFDLFFBQUQ7QUFBQSxnQ0FDQztBQUFLLGVBQUssRUFBRTtBQUFDRSx5QkFBYSxFQUFDO0FBQWYsV0FBWjtBQUFBLGlDQUNHLHFFQUFDLHFFQUFEO0FBQWMsbUJBQU8sRUFBRSxVQUF2QjtBQUFvQyxpQkFBSyxFQUFDLE1BQTFDO0FBQWlELGtCQUFNLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFVLEVBQUU7QUFBQSxtQkFBSUQsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBWDtBQUFBLFdBQWxCO0FBQXNDLG1CQUFTLEVBQUMsMkJBQWhEO0FBQTRFLG9CQUFVLEVBQUU7QUFBQ0csaUJBQUssRUFBQyxNQUFQO0FBQWNDLGtCQUFNLEVBQUMsTUFBckI7QUFBNEJDLHNCQUFVLEVBQUMsTUFBdkM7QUFBOENDLGlCQUFLLEVBQUM7QUFBcEQ7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSCxlQVVHLHFFQUFDLGFBQUQ7QUFBQSwrQkFDSztBQUFJLGVBQUssRUFBRTtBQUFDSCxpQkFBSyxFQUFDLE1BQVA7QUFBY0ksbUJBQU8sRUFBQyxLQUF0QjtBQUE0QkMsbUJBQU8sRUFBQyxNQUFwQztBQUEyQ0MseUJBQWEsRUFBQyxRQUF6RDtBQUFrRUMsc0JBQVUsRUFBQztBQUE3RSxXQUFYO0FBQUEsb0JBQ0taLE9BQU8sQ0FBQ2EsR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSxnQ0FDUixxRUFBQyxFQUFEO0FBQUEsc0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSx5QkFBUyxFQUFFQSxJQUFJLENBQUNoQixJQUF0QjtBQUE0QiwwQkFBVSxFQUFFO0FBQUNPLHVCQUFLLEVBQUMsTUFBUDtBQUFjQyx3QkFBTSxFQUFDLE1BQXJCO0FBQTRCQyw0QkFBVSxFQUFDLE1BQXZDO0FBQThDUSwyQkFBUyxFQUFDLFNBQXhEO0FBQWtFUCx1QkFBSyxFQUFDO0FBQXhFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFNLHFCQUFLLEVBQUU7QUFBQ1EsNEJBQVUsRUFBQztBQUFaLGlCQUFiO0FBQUEsMEJBQW1DRixJQUFJLENBQUNmO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkJILENBOUJEOztHQUFNSCxXOztNQUFBQSxXO0FBaUNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOTAyNTBiNmNjNTFhNjQ2MzJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjEwMHZoO1xyXG56LWluZGV4OjE1MDtcclxuYmFja2dyb3VuZC1jb2xvcjojOTk3MjcyO1xyXG50cmFuc2l0aW9uOmFsbCAxcztcclxud2lkdGg6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcIjIwMHB4XCIgOiBcIjBweFwifVxyXG5gXHJcbmNvbnN0IElubmVyRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzo1cHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuZGlzcGxheTpmbGV4O1xyXG5cclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25EaXY9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xveW9yOnllbGxvdztcclxubWFyZ2luLXRvcDozMHB4O1xyXG53aWR0aDo5NiU7XHJcbmBcclxuY29uc3QgTGk9c3R5bGVkLmxpYFxyXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuLy9jb25zdCBJY29uPXN0eWxlZC5pYFxyXG4vL2NvbG9yOiNDNzAwMzk7XHJcbi8vYFxyXG5jb25zdCBDbG9zZW9wZW49c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYFxyXG5cclxuY29uc3QgTGVmdHRvb2xiYXI9KCk9PntcclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIktheWRlZGlsZW5sZXJcIn0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkJlxJ9lbmlsZW5sZXJcIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJSZXR3ZWV0XCJ9XSlcclxuICAgIGNvbnN0IFtvcGVuLHNldG9wZW5dPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yRGl2IGFjdGl2ZT17b3Blbn0+XHJcbiAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiAgPENsb3Nlb3Blbj5cclxuICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PnNldG9wZW4oIW9wZW4pfSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGNvbG9yOlwiYmxhY2tcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6XCJmbGV4LXN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjM1cHhcIixiYWNrY29sb3I6XCIjNTQ5Qjk0XCIsY29sb3I6XCIjRjFGMUYxXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L0lubmVyRGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0dG9vbGJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==