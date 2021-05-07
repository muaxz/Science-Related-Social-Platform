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
})(["position:fixed;top:80px;right:30px;width:300px;height:600px;border-radius:10px;background-color:white;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 2px 2px rgba(0,0,0,0.15),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.15);z-index:10000;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Innerdiv",
  componentId: "cu1ye3-1"
})(["padding:10px;height:450px;overflow:auto;"]);
_c2 = Innerdiv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Leaderboard__Imagediv",
  componentId: "cu1ye3-2"
})(["height:150px;border-top-left-radius:10px;border-top-right-radius:10px;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/

_c3 = Imagediv;
function Leaderboard(_ref) {
  var _this = this;

  var list = _ref.list;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          color: "#d90429",
          padding: "8px",
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
          lineNumber: 47,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: "#1.Hafta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          usernumber: index + 1,
          imageurl: "/car.jpg",
          optionforbutton: false,
          children: "543"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 8
  }, this);
}
_c4 = Leaderboard;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Imagediv");
$RefreshReg$(_c4, "Leaderboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZWRpdiIsIkxlYWRlcmJvYXJkIiwibGlzdCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsbVBBQWpCO0tBQU1GLFc7QUFlTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0RBQWQ7TUFBTUMsUTtBQUtOLElBQU1DLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw0TEFBZDtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFkTUUsUTtBQWVTLFNBQVNDLFdBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDeEMsc0JBQ0cscUVBQUMsV0FBRDtBQUFBLDRCQUNJLHFFQUFDLFFBQUQ7QUFBQSw2QkFDQztBQUFLLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFDLFFBQVg7QUFBb0JDLGVBQUssRUFBQyxTQUExQjtBQUFvQ0MsaUJBQU8sRUFBQyxLQUE1QztBQUFrREMsaUJBQU8sRUFBQyxNQUExRDtBQUFpRUMsd0JBQWMsRUFBQztBQUFoRixTQUFaO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFzQyxvQkFBVSxFQUFFO0FBQUNILGlCQUFLLEVBQUM7QUFBUDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSSxlQUFLLEVBQUU7QUFBQ0EsaUJBQUssRUFBQztBQUFQLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0s7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBMLGVBUUkscUVBQUMsUUFBRDtBQUFBLGdCQUVRLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBc0JJLEdBQXRCLENBQTBCLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLDRCQUN4QixxRUFBQyx3REFBRDtBQUFVLG9CQUFVLEVBQUVBLEtBQUssR0FBQyxDQUE1QjtBQUErQixrQkFBUSxFQUFFLFVBQXpDO0FBQXFELHlCQUFlLEVBQUUsS0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBMUI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFtQkg7TUFwQnVCVCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0Y2Q1YWJjMWY0MTg3YjFjNDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tICcuLi8uLi9zaGFyZWQvVXNlcmNhcmQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6ODBweDtcclxucmlnaHQ6MzBweDtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDo2MDBweDtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSwgXHJcbjAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTUpLCBcclxuMCA0cHggNHB4IHJnYmEoMCwwLDAsMC4xNSksIFxyXG4wIDhweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuei1pbmRleDoxMDAwMDtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6NDUwcHg7XHJcbm92ZXJmbG93OmF1dG87XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjE1MHB4O1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcbi8qXHJcbiA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsY29sb3I6XCIjZDkwNDI5XCIscGFkZGluZzpcIjhweFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICA8aDM+TGlkZXJsaWsgVGFibG9zdTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cm9waHkgZmEtbGdcIiBJY29uY29uZmlnPXt7Y29sb3I6XCIjRTZENjI2XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4qLyAgICAgICAgICAgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKHtsaXN0fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNkOTA0MjlcIixwYWRkaW5nOlwiOHB4XCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyb3BoeSBmYS1sZ1wiIEljb25jb25maWc9e3tjb2xvcjpcIiNFNkQ2MjZcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PiMxLkhhZnRhPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0ubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcmNhcmQgdXNlcm51bWJlcj17aW5kZXgrMX0gaW1hZ2V1cmw9e1wiL2Nhci5qcGdcIn0gb3B0aW9uZm9yYnV0dG9uPXtmYWxzZX0+NTQzPC9Vc2VyY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=