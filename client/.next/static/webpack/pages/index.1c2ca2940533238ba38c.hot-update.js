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
})(["width:50%;text-align:center;color:", ";padding:8px;border-bottom:2px solid ", ";transition:0.1s;&:hover{background-color:#d90429;color:white;cursor:pointer;}"], function (_ref) {
  var border = _ref.border;
  return border == false ? "#d90429" : "white";
}, function (_ref2) {
  var border = _ref2.border;
  return border ? "#d90429" : "transparent";
});
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/

_c4 = Secondoptiondiv;
function Leaderboard(_ref3) {
  _s();

  var _this = this;

  var list = _ref3.list;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIlNlY29uZG9wdGlvbmRpdiIsImJvcmRlciIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInNldG9wdGlvbnMiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwcmV2IiwibmFtZSIsImltYWdlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtUUFBakI7S0FBTUYsVztBQWdCTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0NBQWQ7TUFBTUMsUTtBQUtOLElBQU1DLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2UEFBZDtNQUFNRSxRO0FBYU4sSUFBTUMsZUFBZSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHNLQUdaO0FBQUEsTUFBRUksTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBYUEsTUFBTSxJQUFJLEtBQVYsR0FBa0IsU0FBbEIsR0FBOEIsT0FBM0M7QUFBQSxDQUhZLEVBS0s7QUFBQSxNQUFFQSxNQUFGLFNBQUVBLE1BQUY7QUFBQSxTQUFhQSxNQUFNLEdBQUcsU0FBSCxHQUFlLGFBQWxDO0FBQUEsQ0FMTCxDQUFyQjtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFsQk1ELGU7QUFtQlMsU0FBU0UsV0FBVCxRQUE0QjtBQUFBOztBQUFBOztB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RUFBRUEsS0FBSyxHQUFDLENBQTVCO0FBQStCLGtCQUFRLEVBQUVELElBQUksQ0FBQ0YsS0FBOUM7QUFBcUQseUJBQWUsRUFBRSxLQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa1U7QUFBQSxPQUFwVTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXVCSDs7R0E1QnVCWixXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFjMmNhMjk0MDUzMzIzOGJhMzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFVzZXJjYXJkIGZyb20gJy4uLy4uL3NoYXJlZC9Vc2VyY2FyZCc7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9VSS9JY29uXCI7XHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDo4MHB4O1xyXG5yaWdodDozMHB4O1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6NjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDJweCAycHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgNHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCA4cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbnotaW5kZXg6MTAwMDA7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjEwMCU7XHJcbm92ZXJmbG93OmF1dG87XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjE1MHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2JsYWNrLmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZG9wdGlvbmRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDo1MCU7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5jb2xvcjogJHsoe2JvcmRlcn0pPT4gYm9yZGVyID09IGZhbHNlID8gXCIjZDkwNDI5XCIgOiBcIndoaXRlXCJ9O1xyXG5wYWRkaW5nOjhweDtcclxuYm9yZGVyLWJvdHRvbToycHggc29saWQgJHsoe2JvcmRlcn0pPT4gYm9yZGVyID8gXCIjZDkwNDI5XCIgOiBcInRyYW5zcGFyZW50XCJ9O1xyXG50cmFuc2l0aW9uOjAuMXM7XHJcbiY6IGhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDkwNDI5O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbi8qXHJcbiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsY29sb3I6XCIjZDkwNDI5XCIscGFkZGluZzpcIjhweFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICA8aDM+TGlkZXJsaWsgVGFibG9zdTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cm9waHkgZmEtbGdcIiBJY29uY29uZmlnPXt7Y29sb3I6XCIjRTZENjI2XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4qLyAgICAgICAgICAgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKHtsaXN0fSl7XHJcbiAgICBjb25zdCBbb3B0aW9ucyxzZXRvcHRpb25zXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgMTpmYWxzZSxcclxuICAgICAgICAyOmZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGNvbG9yOlwiI2Q5MDQyOVwiLHBhZGRpbmc6XCIxMHB4XCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyb3BoeSBmYS1sZ1wiIEljb25jb25maWc9e3tjb2xvcjpcIiNFNkQ2MjZcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PiMxLkhhZnRhPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kb3B0aW9uZGl2IG9uQ2xpY2s9eygpPT5zZXRvcHRpb25zKHByZXY9PntyZXR1cm57Li4ucHJldiwxOnRydWUsMjpmYWxzZX19KX0gYm9yZGVyPXtvcHRpb25zW1wiMVwiXX0+QnUgSGFmdGE8L1NlY29uZG9wdGlvbmRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRvcHRpb25kaXYgb25DbGljaz17KCk9PnNldG9wdGlvbnMocHJldj0+e3JldHVybnsuLi5wcmV2LDI6dHJ1ZSwxOmZhbHNlfX0pfSBib3JkZXI9e29wdGlvbnNbXCIyXCJdfT5HZcOnZW4gSGFmdGE8L1NlY29uZG9wdGlvbmRpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgW3tuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiQWFkxLFrXCIsaW1hZ2U6XCJibGFjay5qcGdcIn0se25hbWU6XCJNdXNhXCIsaW1hZ2U6XCJ5YXByYWsuanBnXCJ9LHtuYW1lOlwiU2VsbWFuXCIsaW1hZ2U6XCJsZWQuanBnXCJ9LHtuYW1lOlwiQWhtZXRcIixpbWFnZTpcInlhcHJhay5qcGdcIn0se25hbWU6XCJEdWhhblwiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifV0ubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcmNhcmQgdXNlcm51bWJlcj17aW5kZXgrMX0gaW1hZ2V1cmw9e2l0ZW0uaW1hZ2V9IG9wdGlvbmZvcmJ1dHRvbj17ZmFsc2V9PjU0MzwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9