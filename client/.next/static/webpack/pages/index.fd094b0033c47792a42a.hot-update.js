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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Leaderboard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Leaderboard__Exteriordiv",
  componentId: "cu1ye3-0"
})(["position:fixed;top:80px;right:30px;overflow:hidden;width:300px;height:610px;border-radius:10px;background-color:white;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 2px 2px rgba(0,0,0,0.15),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.15);z-index:10000;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Leaderboard__Innerdiv",
  componentId: "cu1ye3-1"
})(["padding:10px;height:100%;overflow:auto;"]);
_c2 = Innerdiv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Leaderboard__Imagediv",
  componentId: "cu1ye3-2"
})(["height:150px;display:flex;flex-direction:column;justify-content:space-between;border-top-left-radius:10px;border-top-right-radius:10px;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c3 = Imagediv;
var Secondoptiondiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Leaderboard__Secondoptiondiv",
  componentId: "cu1ye3-3"
})(["width:50%;text-align:center;color:#d90429;padding:8px;border-bottom:2px solid ", ";transition:0.1s;&:hover{background-color:#d90429;color:white;cursor:pointer;}"], function (_ref) {
  var border = _ref.border;
  return border ? "#d90429" : "transparent";
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    1: false,
    2: false
  }),
      options = _useState[0],
      setoptions = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Exteriordiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Imagediv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          color: "#d90429",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "fas fa-trophy fa-lg",
          Iconconfig: {
            color: "#E6D626"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Secondoptiondiv, {
          onClick: function onClick() {
            return setoptions(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                1: true,
                2: false
              });
            });
          },
          border: options["1"],
          children: "Bu Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Secondoptiondiv, {
          onClick: function onClick() {
            return setoptions(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                2: true,
                1: false
              });
            });
          },
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Innerdiv, {
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIlNlY29uZG9wdGlvbmRpdiIsImJvcmRlciIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldG9wdGlvbnMiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwcmV2IiwibmFtZSIsImltYWdlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtUUFBakI7S0FBTUYsVztBQWdCTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0NBQWQ7TUFBTUMsUTtBQUtOLElBQU1DLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2UEFBZDtNQUFNRSxRO0FBYU4sSUFBTUMsZUFBZSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlLQUtLO0FBQUEsTUFBRUksTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBYUEsTUFBTSxHQUFHLFNBQUgsR0FBZSxhQUFsQztBQUFBLENBTEwsQ0FBckI7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BbEJNRCxlO0FBbUJTLFNBQVNFLFdBQVQsUUFBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFOQyxJQUFNLFNBQU5BLElBQU07O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUM7QUFDaEMsT0FBRSxLQUQ4QjtBQUVoQyxPQUFFO0FBRjhCLEdBQUQsQ0FE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QUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtVO0FBQUEsT0FBcFU7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUF1Qkg7O0dBNUJ1QlosVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDA5NGIwMDMzYzQ3NzkyYTQyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tICcuLi8uLi9zaGFyZWQvVXNlcmNhcmQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6ODBweDtcclxucmlnaHQ6MzBweDtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjYxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCAycHggMnB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDRweCA0cHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgOHB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG56LWluZGV4OjEwMDAwO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDoxMDAlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5gXHJcbmNvbnN0IEltYWdlZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxNTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRvcHRpb25kaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6NTAlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6I2Q5MDQyOTtcclxucGFkZGluZzo4cHg7XHJcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkICR7KHtib3JkZXJ9KT0+IGJvcmRlciA/IFwiI2Q5MDQyOVwiIDogXCJ0cmFuc3BhcmVudFwifTtcclxudHJhbnNpdGlvbjowLjFzO1xyXG4mOiBob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5MDQyOTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vKlxyXG4gPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGNvbG9yOlwiI2Q5MDQyOVwiLHBhZGRpbmc6XCI4cHhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgPGgzPkxpZGVybGlrIFRhYmxvc3U8L2gzPlxyXG4gICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdHJvcGh5IGZhLWxnXCIgSWNvbmNvbmZpZz17e2NvbG9yOlwiI0U2RDYyNlwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKi8gICAgICAgICAgIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJib2FyZCh7bGlzdH0pe1xyXG4gICAgY29uc3QgW29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIDE6ZmFsc2UsXHJcbiAgICAgICAgMjpmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNkOTA0MjlcIixwYWRkaW5nOlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cm9waHkgZmEtbGdcIiBJY29uY29uZmlnPXt7Y29sb3I6XCIjRTZENjI2XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT4jMS5IYWZ0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFNlY29uZG9wdGlvbmRpdiBvbkNsaWNrPXsoKT0+c2V0b3B0aW9ucyhwcmV2PT57cmV0dXJuey4uLnByZXYsMTp0cnVlLDI6ZmFsc2V9fSl9IGJvcmRlcj17b3B0aW9uc1tcIjFcIl19PkJ1IEhhZnRhPC9TZWNvbmRvcHRpb25kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kb3B0aW9uZGl2IG9uQ2xpY2s9eygpPT5zZXRvcHRpb25zKHByZXY9PntyZXR1cm57Li4ucHJldiwyOnRydWUsMTpmYWxzZX19KX0gYm9yZGVyPXtvcHRpb25zW1wiMlwiXX0+R2XDp2VuIEhhZnRhPC9TZWNvbmRvcHRpb25kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIFt7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIkFhZMSxa1wiLGltYWdlOlwiYmxhY2suanBnXCJ9LHtuYW1lOlwiTXVzYVwiLGltYWdlOlwieWFwcmFrLmpwZ1wifSx7bmFtZTpcIlNlbG1hblwiLGltYWdlOlwibGVkLmpwZ1wifSx7bmFtZTpcIkFobWV0XCIsaW1hZ2U6XCJ5YXByYWsuanBnXCJ9LHtuYW1lOlwiRHVoYW5cIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn1dLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIHVzZXJudW1iZXI9e2luZGV4KzF9IGltYWdldXJsPXtpdGVtLmltYWdlfSBvcHRpb25mb3JidXR0b249e2ZhbHNlfT41NDM8L1VzZXJjYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==