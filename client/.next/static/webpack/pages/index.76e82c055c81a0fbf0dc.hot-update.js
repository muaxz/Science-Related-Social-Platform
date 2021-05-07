webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pages/Main/Leaderboard.js":
/*!**********************************************!*\
  !*** ./components/pages/Main/Leaderboard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leaderboard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Leaderboard.js";




var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Exteriordiv",
  componentId: "cu1ye3-0"
})(["position:fixed;top:80px;right:30px;overflow:hidden;width:300px;height:600px;border-radius:10px;background-color:white;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 2px 2px rgba(0,0,0,0.15),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.15);z-index:10000;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Innerdiv",
  componentId: "cu1ye3-1"
})(["padding:10px;height:450px;overflow:auto;"]);
_c2 = Innerdiv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Imagediv",
  componentId: "cu1ye3-2"
})(["height:150px;display:flex;flex-direction:column;justify-content:space-between;border-top-left-radius:10px;border-top-right-radius:10px;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c3 = Imagediv;
var Secondoptiondiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Secondoptiondiv",
  componentId: "cu1ye3-3"
})(["width:50%;text-align:center;color:#d90429;padding:8px;border-right:", " &:hover{background-color:red;}"], function (_ref) {
  var border = _ref.border;
  return border ? "1px solid white" : "none";
});
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/

_c4 = Secondoptiondiv;
function Leaderboard(_ref2) {
  var _this = this;

  var list = _ref2.list;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          color: "#d90429",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "fas fa-trophy fa-lg",
          Iconconfig: {
            color: "#E6D626"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: "#1.Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondoptiondiv, {
          border: true,
          children: "Bu Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondoptiondiv, {
          children: "Ge\xE7en Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [{
        name: "Sadık",
        image: "car.jpg"
      }, {
        name: "Aadık",
        image: "black.jpg"
      }, {
        name: "Musa",
        image: "yaprak.jpg"
      }, {
        name: "Selman",
        image: "led.jpg"
      }, {
        name: "Ahmet",
        image: "yaprak.jpg"
      }, {
        name: "Duhan",
        image: "car.jpg"
      }, {
        name: "Sadık",
        image: "car.jpg"
      }, {
        name: "Sadık",
        image: "car.jpg"
      }].map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          usernumber: index + 1,
          imageurl: item.image,
          optionforbutton: false,
          children: "543"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 8
  }, this);
}
_c5 = Leaderboard;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Imagediv");
$RefreshReg$(_c4, "Secondoptiondiv");
$RefreshReg$(_c5, "Leaderboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIlNlY29uZG9wdGlvbmRpdiIsImJvcmRlciIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm5hbWUiLCJpbWFnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsbVFBQWpCO0tBQU1GLFc7QUFnQk4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFkO01BQU1DLFE7QUFLTixJQUFNQyxRQUFRLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNlBBQWQ7TUFBTUUsUTtBQWFOLElBQU1DLGVBQWUsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrR0FLTjtBQUFBLE1BQUVJLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxpQkFBSCxHQUF1QixNQUF6QztBQUFBLENBTE0sQ0FBckI7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BZk1ELGU7QUFnQlMsU0FBU0UsV0FBVCxRQUE2QjtBQUFBOztBQUFBLE1BQVBDLElBQU8sU0FBUEEsSUFBTztBQUN4QyxzQkFDRyxxRUFBQyxXQUFEO0FBQUEsNEJBQ0kscUVBQUMsUUFBRDtBQUFBLDhCQUNDO0FBQUssYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUMsUUFBWDtBQUFvQkMsZUFBSyxFQUFDLFNBQTFCO0FBQW9DQyxpQkFBTyxFQUFDLE1BQTVDO0FBQW1EQyxpQkFBTyxFQUFDLE1BQTNEO0FBQWtFQyx3QkFBYyxFQUFDO0FBQWpGLFNBQVo7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQXNDLG9CQUFVLEVBQUU7QUFBQ0gsaUJBQUssRUFBQztBQUFQO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFJLGVBQUssRUFBRTtBQUFDQSxpQkFBSyxFQUFDO0FBQVAsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDO0FBQUssYUFBSyxFQUFFO0FBQUNFLGlCQUFPLEVBQUM7QUFBVCxTQUFaO0FBQUEsZ0NBQ0kscUVBQUMsZUFBRDtBQUFpQixnQkFBTSxFQUFFLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdLO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYTCxlQVlJLHFFQUFDLFFBQUQ7QUFBQSxnQkFFUSxDQUFDO0FBQUNFLFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFELEVBQWdDO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFoQyxFQUFpRTtBQUFDRCxZQUFJLEVBQUMsTUFBTjtBQUFhQyxhQUFLLEVBQUM7QUFBbkIsT0FBakUsRUFBa0c7QUFBQ0QsWUFBSSxFQUFDLFFBQU47QUFBZUMsYUFBSyxFQUFDO0FBQXJCLE9BQWxHLEVBQWtJO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFsSSxFQUFvSztBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBcEssRUFBbU07QUFBQ0QsWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDO0FBQXBCLE9BQW5NLEVBQWtPO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFsTyxFQUFrUUMsR0FBbFEsQ0FBc1EsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ3BRLHFFQUFDLHdEQUFEO0FBQVUsb0JBQVUsRUFBRUEsS0FBSyxHQUFDLENBQTVCO0FBQStCLGtCQUFRLEVBQUVELElBQUksQ0FBQ0YsS0FBOUM7QUFBcUQseUJBQWUsRUFBRSxLQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb1E7QUFBQSxPQUF0UTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXVCSDtNQXhCdUJSLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzZlODJjMDU1YzgxYTBmYmYwZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFVzZXJjYXJkIGZyb20gJy4uLy4uL3NoYXJlZC9Vc2VyY2FyZCc7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9VSS9JY29uXCI7XHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDo4MHB4O1xyXG5yaWdodDozMHB4O1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6NjAwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDJweCAycHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgNHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCA4cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbnotaW5kZXg6MTAwMDA7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjQ1MHB4O1xyXG5vdmVyZmxvdzphdXRvO1xyXG5gXHJcbmNvbnN0IEltYWdlZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxNTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRvcHRpb25kaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6NTAlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6I2Q5MDQyOTtcclxucGFkZGluZzo4cHg7XHJcbmJvcmRlci1yaWdodDokeyh7Ym9yZGVyfSk9PmJvcmRlciA/IFwiMXB4IHNvbGlkIHdoaXRlXCIgOiBcIm5vbmVcIn1cclxuJjogaG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG5gXHJcbi8qXHJcbiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsY29sb3I6XCIjZDkwNDI5XCIscGFkZGluZzpcIjhweFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICA8aDM+TGlkZXJsaWsgVGFibG9zdTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cm9waHkgZmEtbGdcIiBJY29uY29uZmlnPXt7Y29sb3I6XCIjRTZENjI2XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4qLyAgICAgICAgICAgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKHtsaXN0fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNkOTA0MjlcIixwYWRkaW5nOlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cm9waHkgZmEtbGdcIiBJY29uY29uZmlnPXt7Y29sb3I6XCIjRTZENjI2XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT4jMS5IYWZ0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFNlY29uZG9wdGlvbmRpdiBib3JkZXI9e3RydWV9PkJ1IEhhZnRhPC9TZWNvbmRvcHRpb25kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kb3B0aW9uZGl2Pkdlw6dlbiBIYWZ0YTwvU2Vjb25kb3B0aW9uZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBbe25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJBYWTEsWtcIixpbWFnZTpcImJsYWNrLmpwZ1wifSx7bmFtZTpcIk11c2FcIixpbWFnZTpcInlhcHJhay5qcGdcIn0se25hbWU6XCJTZWxtYW5cIixpbWFnZTpcImxlZC5qcGdcIn0se25hbWU6XCJBaG1ldFwiLGltYWdlOlwieWFwcmFrLmpwZ1wifSx7bmFtZTpcIkR1aGFuXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9XS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxVc2VyY2FyZCB1c2VybnVtYmVyPXtpbmRleCsxfSBpbWFnZXVybD17aXRlbS5pbWFnZX0gb3B0aW9uZm9yYnV0dG9uPXtmYWxzZX0+NTQzPC9Vc2VyY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=