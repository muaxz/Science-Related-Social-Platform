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
  console.log(list);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Black"], {
      onClick: setlist,
      aktif: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 34,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
            lineNumber: 39,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXIuanMiXSwibmFtZXMiOlsiUnRsaWtld2luZG93Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJ3aW5kb3ciLCJTaG93Zm9sbG93ZXIiLCJsaXN0Iiwic2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsImN1cnNvciIsIm1hcCIsIml0ZW0iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwSkFBbEI7S0FBTUYsWTtBQVlOLElBQU1HLFdBQVcsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx3RkFBakI7TUFBTUMsVztBQVFTLFNBQVNDLFlBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDUSxxRUFBQyw4REFBRDtBQUFPLGFBQU8sRUFBRUMsT0FBaEI7QUFBeUIsV0FBSyxFQUFFO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUixlQUVRLHFFQUFDLFlBQUQ7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFDRyxnQkFBTSxFQUFDLE1BQVI7QUFBZUMsZUFBSyxFQUFDLEtBQXJCO0FBQTJCQyxnQkFBTSxFQUFDLE1BQWxDO0FBQXlDQyxpQkFBTyxFQUFDLE1BQWpEO0FBQXdEQyxvQkFBVSxFQUFDLFFBQW5FO0FBQTRFQyx3QkFBYyxFQUFDO0FBQTNGLFNBQVo7QUFBQSwrQkFFSTtBQUFHLGlCQUFPLEVBQUVSLE9BQVo7QUFBc0IsZUFBSyxFQUFFO0FBQUNTLGlCQUFLLEVBQUMsT0FBUDtBQUFlQyxrQkFBTSxFQUFDO0FBQXRCLFdBQTdCO0FBQStELG1CQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JLHFFQUFDLFdBQUQ7QUFBQSxrQkFDS1gsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLDhCQUNWLHFFQUFDLHdEQUFEO0FBQ0EsMkJBQWUsRUFBRSxJQURqQjtBQUVBLHFCQUFTLEVBQUVBLElBQUksQ0FBQ0MsU0FGaEI7QUFHQSxtQkFBTyxFQUFFRCxJQUFJLENBQUNFLFFBSGQ7QUFJQSxrQkFBTSxFQUFFRixJQUFJLENBQUNHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7TUF4QnVCakIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xN2EyNzBiM2UwNDljM2U5MDVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFVzZXJjYXJkIGZyb20gXCIuLi8uLi9zaGFyZWQvVXNlcmNhcmRcIjtcclxuXHJcbmNvbnN0IFJ0bGlrZXdpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6NTAwcHg7XHJcbmhlaWdodDozNTBweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2M4MzM0OTtcclxuei1pbmRleDoxMDA7XHJcbnRvcDo1MCU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyd2luZG93PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5vdmVyZmxvdzphdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Zm9sbG93ZXIoe2xpc3Qsc2V0bGlzdH0pIHtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e3NldGxpc3R9IGFrdGlmPXt0cnVlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICAgICAgPFJ0bGlrZXdpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiNDBweFwiLHdpZHRoOlwiOTUlXCIsbWFyZ2luOlwiYXV0b1wiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3NldGxpc3R9ICBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3QubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyY2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmZvcmJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZT17aXRlbS5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJuYW1lPXtpdGVtLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICA8L1J0bGlrZXdpbmRvdz4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==