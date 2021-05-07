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


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Leaderboard.js",
    _s = $RefreshSig$();





var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Exteriordiv",
  componentId: "cu1ye3-0"
})(["position:fixed;top:80px;right:30px;overflow:hidden;width:300px;height:610px;border-radius:10px;background-color:white;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 2px 2px rgba(0,0,0,0.15),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.15);z-index:10000;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Innerdiv",
  componentId: "cu1ye3-1"
})(["padding:10px;height:100%;overflow:auto;"]);
_c2 = Innerdiv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Imagediv",
  componentId: "cu1ye3-2"
})(["height:150px;display:flex;flex-direction:column;justify-content:space-between;border-top-left-radius:10px;border-top-right-radius:10px;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c3 = Imagediv;
var Secondoptiondiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Secondoptiondiv",
  componentId: "cu1ye3-3"
})(["width:50%;text-align:center;color:#d90429;padding:8px;border-bottom:", ";transition:0.1s;&:hover{background-color:#d90429;color:white;cursor:pointer;}"], function (_ref) {
  var border = _ref.border;
  return border ? "2px solid #d90429" : "";
});
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/

_c4 = Secondoptiondiv;
function Leaderboard(_ref2) {
  _s();

  var _this = this;

  var list = _ref2.list;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    1: false,
    2: false
  }),
      options = _useState[0],
      setoptions = _useState[1];

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
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: "#1.Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondoptiondiv, {
          border: options["1"],
          children: "Bu Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondoptiondiv, {
          border: options["2"],
          children: "Ge\xE7en Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [{
        name: "Sadık",
        image: "car.jpg"
      }, {
        name: "Sadık",
        image: "car.jpg"
      }, {
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
          lineNumber: 81,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 8
  }, this);
}

_s(Leaderboard, "n+LINrSHyUQT9KVzL0TXV665H6I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIlNlY29uZG9wdGlvbmRpdiIsImJvcmRlciIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldG9wdGlvbnMiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJuYW1lIiwiaW1hZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1RQUFqQjtLQUFNRixXO0FBZ0JOLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrQ0FBZDtNQUFNQyxRO0FBS04sSUFBTUMsUUFBUSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZQQUFkO01BQU1FLFE7QUFhTixJQUFNQyxlQUFlLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0pBS0w7QUFBQSxNQUFFSSxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFZQSxNQUFNLEdBQUcsbUJBQUgsR0FBeUIsRUFBM0M7QUFBQSxDQUxLLENBQXJCO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQWxCTUQsZTtBQW1CUyxTQUFTRSxXQUFULFFBQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBTkMsSUFBTSxTQUFOQSxJQUFNOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDO0FBQ2hDLE9BQUUsS0FEOEI7QUFFaEMsT0FBRTtBQUY4QixHQUFELENBREk7QUFBQSxNQUNoQ0MsT0FEZ0M7QUFBQSxNQUN4QkMsVUFEd0I7O0FBS3ZDLHNCQUNHLHFFQUFDLFdBQUQ7QUFBQSw0QkFDSSxxRUFBQyxRQUFEO0FBQUEsOEJBQ0M7QUFBSyxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBQyxRQUFYO0FBQW9CQyxlQUFLLEVBQUMsU0FBMUI7QUFBb0NDLGlCQUFPLEVBQUMsTUFBNUM7QUFBbURDLGlCQUFPLEVBQUMsTUFBM0Q7QUFBa0VDLHdCQUFjLEVBQUM7QUFBakYsU0FBWjtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sbUJBQVMsRUFBQyxxQkFBaEI7QUFBc0Msb0JBQVUsRUFBRTtBQUFDSCxpQkFBSyxFQUFDO0FBQVA7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUksZUFBSyxFQUFFO0FBQUNBLGlCQUFLLEVBQUM7QUFBUCxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0M7QUFBSyxhQUFLLEVBQUU7QUFBQ0UsaUJBQU8sRUFBQztBQUFULFNBQVo7QUFBQSxnQ0FDSSxxRUFBQyxlQUFEO0FBQWtCLGdCQUFNLEVBQUVMLE9BQU8sQ0FBQyxHQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsZUFBRDtBQUFrQixnQkFBTSxFQUFFQSxPQUFPLENBQUMsR0FBRCxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdLO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYTCxlQVlJLHFFQUFDLFFBQUQ7QUFBQSxnQkFFUSxDQUFDO0FBQUNPLFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFELEVBQWdDO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFoQyxFQUErRDtBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBL0QsRUFBOEY7QUFBQ0QsWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDO0FBQXBCLE9BQTlGLEVBQStIO0FBQUNELFlBQUksRUFBQyxNQUFOO0FBQWFDLGFBQUssRUFBQztBQUFuQixPQUEvSCxFQUFnSztBQUFDRCxZQUFJLEVBQUMsUUFBTjtBQUFlQyxhQUFLLEVBQUM7QUFBckIsT0FBaEssRUFBZ007QUFBQ0QsWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDO0FBQXBCLE9BQWhNLEVBQWtPO0FBQUNELFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQztBQUFwQixPQUFsTyxFQUFpUTtBQUFDRCxZQUFJLEVBQUMsT0FBTjtBQUFjQyxhQUFLLEVBQUM7QUFBcEIsT0FBalEsRUFBZ1M7QUFBQ0QsWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDO0FBQXBCLE9BQWhTLEVBQWdVQyxHQUFoVSxDQUFvVSxVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSw0QkFDbFUscUVBQUMsd0RBQUQ7QUFBVSxvQkFBVSxFQUFFQSxLQUFLLEdBQUMsQ0FBNUI7QUFBK0Isa0JBQVEsRUFBRUQsSUFBSSxDQUFDRixLQUE5QztBQUFxRCx5QkFBZSxFQUFFLEtBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrVTtBQUFBLE9BQXBVO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBdUJIOztHQTVCdUJYLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhlNzlmZWIyNjU4Y2FiZjI0MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVXNlcmNhcmQgZnJvbSAnLi4vLi4vc2hhcmVkL1VzZXJjYXJkJztcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL1VJL0ljb25cIjtcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjgwcHg7XHJcbnJpZ2h0OjMwcHg7XHJcbm92ZXJmbG93OmhpZGRlbjtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDo2MTBweDtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCA0cHggNHB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDhweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuei1pbmRleDoxMDAwMDtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MTAwJTtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTUwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kb3B0aW9uZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjUwJTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmNvbG9yOiNkOTA0Mjk7XHJcbnBhZGRpbmc6OHB4O1xyXG5ib3JkZXItYm90dG9tOiR7KHtib3JkZXJ9KT0+Ym9yZGVyID8gXCIycHggc29saWQgI2Q5MDQyOVwiIDogXCJcIn07XHJcbnRyYW5zaXRpb246MC4xcztcclxuJjogaG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkOTA0Mjk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuLypcclxuIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNkOTA0MjlcIixwYWRkaW5nOlwiOHB4XCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgIDxoMz5MaWRlcmxpayBUYWJsb3N1PC9oMz5cclxuICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyb3BoeSBmYS1sZ1wiIEljb25jb25maWc9e3tjb2xvcjpcIiNFNkQ2MjZcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiovICAgICAgICAgICBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyYm9hcmQoe2xpc3R9KXtcclxuICAgIGNvbnN0IFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICAxOmZhbHNlLFxyXG4gICAgICAgIDI6ZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsY29sb3I6XCIjZDkwNDI5XCIscGFkZGluZzpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdHJvcGh5IGZhLWxnXCIgSWNvbmNvbmZpZz17e2NvbG9yOlwiI0U2RDYyNlwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+IzEuSGFmdGE8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRvcHRpb25kaXYgIGJvcmRlcj17b3B0aW9uc1tcIjFcIl19PkJ1IEhhZnRhPC9TZWNvbmRvcHRpb25kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kb3B0aW9uZGl2ICBib3JkZXI9e29wdGlvbnNbXCIyXCJdfT5HZcOnZW4gSGFmdGE8L1NlY29uZG9wdGlvbmRpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgW3tuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiQWFkxLFrXCIsaW1hZ2U6XCJibGFjay5qcGdcIn0se25hbWU6XCJNdXNhXCIsaW1hZ2U6XCJ5YXByYWsuanBnXCJ9LHtuYW1lOlwiU2VsbWFuXCIsaW1hZ2U6XCJsZWQuanBnXCJ9LHtuYW1lOlwiQWhtZXRcIixpbWFnZTpcInlhcHJhay5qcGdcIn0se25hbWU6XCJEdWhhblwiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifV0ubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcmNhcmQgdXNlcm51bWJlcj17aW5kZXgrMX0gaW1hZ2V1cmw9e2l0ZW0uaW1hZ2V9IG9wdGlvbmZvcmJ1dHRvbj17ZmFsc2V9PjU0MzwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9