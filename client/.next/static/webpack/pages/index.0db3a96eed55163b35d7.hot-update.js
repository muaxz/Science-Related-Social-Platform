webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pages/Main/Showfoller.js":
/*!*********************************************!*\
  !*** ./components/pages/Main/Showfoller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showfollower; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Showfoller.js";




var Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Showfoller__Rtlikewindow",
  componentId: "sc-7i7cf-0"
})(["position:absolute;width:500px;height:350px;border-radius:5px;background-color:#c83349;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c = Rtlikewindow;
var Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Showfoller__Innerwindow",
  componentId: "sc-7i7cf-1"
})(["padding:10px;background-color:white;height:100%;border-radius:5px;overflow:auto;"]);
_c2 = Innerwindow;
function Showfollower(_ref) {
  var _this = this;

  var list = _ref.list,
      setlist = _ref.setlist;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Black"], {
      onClick: setlist,
      aktif: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: "40px",
          width: "95%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          onClick: setlist,
          style: {
            color: "white",
            cursor: "pointer"
          },
          className: "fas fa-times-circle fa-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
        children: list.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            optionforbutton: true,
            firstname: item.firstname,
            surname: item.lastname,
            userid: item.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}
_c3 = Showfollower;

var _c, _c2, _c3;

$RefreshReg$(_c, "Rtlikewindow");
$RefreshReg$(_c2, "Innerwindow");
$RefreshReg$(_c3, "Showfollower");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXIuanMiXSwibmFtZXMiOlsiUnRsaWtld2luZG93Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJ3aW5kb3ciLCJTaG93Zm9sbG93ZXIiLCJsaXN0Iiwic2V0bGlzdCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiY3Vyc29yIiwibWFwIiwiaXRlbSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDBKQUFsQjtLQUFNRixZO0FBWU4sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHdGQUFqQjtNQUFNQyxXO0FBUVMsU0FBU0MsWUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUNqRCxzQkFDSTtBQUFBLDRCQUNRLHFFQUFDLDhEQUFEO0FBQU8sYUFBTyxFQUFFQSxPQUFoQjtBQUF5QixXQUFLLEVBQUU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSLGVBRVEscUVBQUMsWUFBRDtBQUFBLDhCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUMsTUFBUjtBQUFlQyxlQUFLLEVBQUMsS0FBckI7QUFBMkJDLGdCQUFNLEVBQUMsTUFBbEM7QUFBeUNDLGlCQUFPLEVBQUMsTUFBakQ7QUFBd0RDLG9CQUFVLEVBQUMsUUFBbkU7QUFBNEVDLHdCQUFjLEVBQUM7QUFBM0YsU0FBWjtBQUFBLCtCQUVJO0FBQUcsaUJBQU8sRUFBRU4sT0FBWjtBQUFzQixlQUFLLEVBQUU7QUFBQ08saUJBQUssRUFBQyxPQUFQO0FBQWVDLGtCQUFNLEVBQUM7QUFBdEIsV0FBN0I7QUFBK0QsbUJBQVMsRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUkscUVBQUMsV0FBRDtBQUFBLGtCQUNLVCxJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsOEJBQ1YscUVBQUMsd0RBQUQ7QUFDQSwyQkFBZSxFQUFFLElBRGpCO0FBRUEscUJBQVMsRUFBRUEsSUFBSSxDQUFDQyxTQUZoQjtBQUdBLG1CQUFPLEVBQUVELElBQUksQ0FBQ0UsUUFIZDtBQUlBLGtCQUFNLEVBQUVGLElBQUksQ0FBQ0c7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDtNQXZCdUJmLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRiM2E5NmVlZDU1MTYzYjM1ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tIFwiLi4vLi4vc2hhcmVkL1VzZXJjYXJkXCI7XHJcblxyXG5jb25zdCBSdGxpa2V3aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjUwMHB4O1xyXG5oZWlnaHQ6MzUwcHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNjODMzNDk7XHJcbnotaW5kZXg6MTAwO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmhlaWdodDoxMDAlO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2ZvbGxvd2VyKHtsaXN0LHNldGxpc3R9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2sgb25DbGljaz17c2V0bGlzdH0gYWt0aWY9e3RydWV9PjwvQmxhY2s+XHJcbiAgICAgICAgICAgICAgICA8UnRsaWtld2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIsd2lkdGg6XCI5NSVcIixtYXJnaW46XCJhdXRvXCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17c2V0bGlzdH0gIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19IGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uZm9yYnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lPXtpdGVtLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cm5hbWU9e2l0ZW0ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Vc2VyY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgIDwvUnRsaWtld2luZG93PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9