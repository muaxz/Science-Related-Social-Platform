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
})(["position:fixed;top:0;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#3B4058;transition:all 0.2s;width:", ""], function (_ref) {
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
})(["display:flex;border-bottom:1px solid white;flex-direction:column;align-items:center;"]);
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
            color: "black",
            rotate: open ? true : false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
            lineNumber: 68,
            columnNumber: 20
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginTop: "10px",
              color: "white"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: open ? "block" : "none"
              },
              children: "Emre \xD6zer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 66
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 20
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
                  backcolor: "#CFCFCF",
                  color: "#000000"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
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
                lineNumber: 77,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 30
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiYWN0aXZlIiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRvcGVuIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwiY29sb3IiLCJyb3RhdGUiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsIml0ZW0iLCJiYWNrY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFJQVNUO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBVFMsQ0FBakI7S0FBTUgsVztBQVdOLElBQU1JLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzRkFBZDtNQUFNRSxRO0FBUU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDRGQUFkO01BQU1HLFE7QUFPTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNERBQW5CO01BQU1JLGE7QUFLTixJQUFNQyxFQUFFLEdBQUNOLHlEQUFNLENBQUNPLEVBQVI7QUFBQTtBQUFBO0FBQUEs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LHlCQUFPLEVBQUNULElBQUksR0FBRyxPQUFILEdBQWEsTUFBMUI7QUFBaUNnQiwwQkFBUSxFQUFDLE1BQTFDO0FBQWlEQyw0QkFBVSxFQUFDO0FBQTVELGlCQUFiO0FBQUEsMEJBQW1GSCxJQUFJLENBQUNqQjtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRCSCxDQS9CRDs7R0FBTUgsVzs7TUFBQUEsVztBQWtDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQ3YjRhZWYzY2I1N2NjZTQ4OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL1VJL0ljb25cIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjEwMHZoO1xyXG56LWluZGV4OjE1MDtcclxuYmFja2dyb3VuZC1jb2xvcjojM0I0MDU4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjJzO1xyXG53aWR0aDokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMjAwcHhcIiA6IFwiNzBweFwifVxyXG5gXHJcbmNvbnN0IElubmVyRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzo1cHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25EaXY9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xveW9yOnllbGxvdztcclxubWFyZ2luLXRvcDozMHB4O1xyXG53aWR0aDo5NiU7XHJcbmBcclxuY29uc3QgTGk9c3R5bGVkLmxpYFxyXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuLy9jb25zdCBJY29uPXN0eWxlZC5pYFxyXG4vL2NvbG9yOiNDNzAwMzk7XHJcbi8vYFxyXG5jb25zdCBDbG9zZW9wZW49c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYFxyXG5cclxuY29uc3QgTGVmdHRvb2xiYXI9KCk9PntcclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIktheWRlZGlsZW5sZXJcIn0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkJlxJ9lbmlsZW5sZXJcIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJSZXR3ZWV0XCJ9XSlcclxuICAgIGNvbnN0IFtvcGVuLHNldG9wZW5dPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yRGl2IGFjdGl2ZT17b3Blbn0+XHJcbiAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiAgPENsb3Nlb3Blbj5cclxuICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT5zZXRvcGVuKCFvcGVuKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjM1cHhcIixjb2xvcjpcImJsYWNrXCIscm90YXRlOm9wZW4gPyB0cnVlIDogZmFsc2V9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD17b3BlbiA/IFwiODBweFwiIDogXCI1MHB4XCJ9IGhlaWdodD17b3BlbiA/IFwiODBweFwiIDogXCI1MHB4XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwifX0+PHNwYW4gc3R5bGU9e3tkaXNwbGF5Om9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PkVtcmUgw5Z6ZXI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6b3BlbiA/IFwiZmxleC1zdGFydFwiIDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGJhY2tjb2xvcjpcIiNDRkNGQ0ZcIixjb2xvcjpcIiMwMDAwMDBcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Om9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE0cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICA8L0lubmVyRGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0dG9vbGJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==