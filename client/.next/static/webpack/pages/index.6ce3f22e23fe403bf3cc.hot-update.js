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
})(["width:50%;background-color:yellow;text-align:center;color:#d90429;padding:8px;border-right:", " &:hover{background-color:red;}"], function (_ref) {
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
          lineNumber: 63,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: "#1.Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
          lineNumber: 67,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondoptiondiv, {
          children: "Ge\xE7en Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
          lineNumber: 75,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIlNlY29uZG9wdGlvbmRpdiIsImJvcmRlciIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm5hbWUiLCJpbWFnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsbVFBQWpCO0tBQU1GLFc7QUFnQk4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFkO01BQU1DLFE7QUFLTixJQUFNQyxRQUFRLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNlBBQWQ7TUFBTUUsUTtBQWFOLElBQU1DLGVBQWUsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx1SUFNTjtBQUFBLE1BQUVJLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxpQkFBSCxHQUF1QixNQUF6QztBQUFBLENBTk0sQ0FBckI7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BaEJNRCxlO0FBaUJTLFNBQVNFLFdBQVQsUUFBNkI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFNBQVBBLElBQU87QUFDeEMsc0JBQ0cscUVBQUMsV0FBRDtBQUFBLDRCQUNJLHFFQUFDLFFBQUQ7QUFBQSw4QkFDQztBQUFLLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFDLFFBQVg7QUFBb0JDLGVBQUssRUFBQyxTQUExQjtBQUFvQ0MsaUJBQU8sRUFBQyxNQUE1QztBQUFtREMsaUJBQU8sRUFBQyxNQUEzRDtBQUFrRUMsd0JBQWMsRUFBQztBQUFqRixTQUFaO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFzQyxvQkFBVSxFQUFFO0FBQUNILGlCQUFLLEVBQUM7QUFBUDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSSxlQUFLLEVBQUU7QUFBQ0EsaUJBQUssRUFBQztBQUFQLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQztBQUFLLGFBQUssRUFBRTtBQUFDRSxpQkFBTyxFQUFDO0FBQVQsU0FBWjtBQUFBLGdDQUNJLHFFQUFDLGVBQUQ7QUFBaUIsZ0JBQU0sRUFBRSxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEwsZUFZSSxxRUFBQyxRQUFEO0FBQUEsZ0JBRVEsQ0FBQztBQUFDRSxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBRCxFQUFnQztBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBaEMsRUFBaUU7QUFBQ0QsWUFBSSxFQUFDLE1BQU47QUFBYUMsYUFBSyxFQUFDO0FBQW5CLE9BQWpFLEVBQWtHO0FBQUNELFlBQUksRUFBQyxRQUFOO0FBQWVDLGFBQUssRUFBQztBQUFyQixPQUFsRyxFQUFrSTtBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBbEksRUFBb0s7QUFBQ0QsWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDO0FBQXBCLE9BQXBLLEVBQW1NO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFuTSxFQUFrTztBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBbE8sRUFBa1FDLEdBQWxRLENBQXNRLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLDRCQUNwUSxxRUFBQyx3REFBRDtBQUFVLG9CQUFVLEVBQUVBLEtBQUssR0FBQyxDQUE1QjtBQUErQixrQkFBUSxFQUFFRCxJQUFJLENBQUNGLEtBQTlDO0FBQXFELHlCQUFlLEVBQUUsS0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9RO0FBQUEsT0FBdFE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUF1Qkg7TUF4QnVCUixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjZTNmMjJlMjNmZTQwM2JmM2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tICcuLi8uLi9zaGFyZWQvVXNlcmNhcmQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6ODBweDtcclxucmlnaHQ6MzBweDtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjYwMHB4O1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCAycHggMnB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDRweCA0cHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgOHB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG56LWluZGV4OjEwMDAwO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDo0NTBweDtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTUwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kb3B0aW9uZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjUwJTtcclxuYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3c7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5jb2xvcjojZDkwNDI5O1xyXG5wYWRkaW5nOjhweDtcclxuYm9yZGVyLXJpZ2h0OiR7KHtib3JkZXJ9KT0+Ym9yZGVyID8gXCIxcHggc29saWQgd2hpdGVcIiA6IFwibm9uZVwifVxyXG4mOiBob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG59XHJcbmBcclxuLypcclxuIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNkOTA0MjlcIixwYWRkaW5nOlwiOHB4XCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgIDxoMz5MaWRlcmxpayBUYWJsb3N1PC9oMz5cclxuICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyb3BoeSBmYS1sZ1wiIEljb25jb25maWc9e3tjb2xvcjpcIiNFNkQ2MjZcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiovICAgICAgICAgICBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyYm9hcmQoe2xpc3R9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGNvbG9yOlwiI2Q5MDQyOVwiLHBhZGRpbmc6XCIxMHB4XCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyb3BoeSBmYS1sZ1wiIEljb25jb25maWc9e3tjb2xvcjpcIiNFNkQ2MjZcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PiMxLkhhZnRhPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kb3B0aW9uZGl2IGJvcmRlcj17dHJ1ZX0+QnUgSGFmdGE8L1NlY29uZG9wdGlvbmRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRvcHRpb25kaXY+R2XDp2VuIEhhZnRhPC9TZWNvbmRvcHRpb25kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIFt7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIkFhZMSxa1wiLGltYWdlOlwiYmxhY2suanBnXCJ9LHtuYW1lOlwiTXVzYVwiLGltYWdlOlwieWFwcmFrLmpwZ1wifSx7bmFtZTpcIlNlbG1hblwiLGltYWdlOlwibGVkLmpwZ1wifSx7bmFtZTpcIkFobWV0XCIsaW1hZ2U6XCJ5YXByYWsuanBnXCJ9LHtuYW1lOlwiRHVoYW5cIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn1dLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIHVzZXJudW1iZXI9e2luZGV4KzF9IGltYWdldXJsPXtpdGVtLmltYWdlfSBvcHRpb25mb3JidXR0b249e2ZhbHNlfT41NDM8L1VzZXJjYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==