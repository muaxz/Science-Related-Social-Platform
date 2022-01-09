webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./components/styledcomponents/button.js":
/*!***********************************************!*\
  !*** ./components/styledcomponents/button.js ***!
  \***********************************************/
/*! exports provided: Button, Global, Porfileimage, Black, rotate360, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Porfileimage", function() { return Porfileimage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate360", function() { return rotate360; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n *{\n     box-sizing:border-box;\n     margin:0px;\n     font-family: 'Poppins', sans-serif;\n }\n\n body {\n  height:100%;\n }\n\n html{\n   scroll-behavior:smooth;\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "button__Button",
  componentId: "sc-1dlve5z-0"
})(_c = function _c(_ref) {
  var color = _ref.color,
      backcolor = _ref.backcolor,
      width = _ref.width,
      hoverback = _ref.hoverback;
  return "\nwidth:".concat(width, ";\npadding:10px;\noutline:none;\nborder:none;\nborder-radius:5px;\ncolor:").concat(color, ";\nbackground-color:").concat(backcolor, ";\ntransition:0.3s;\n&:hover {\n    background-color:").concat(hoverback, ";\n    cursor:pointer;\n}\n");
});
_c2 = Button;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var Porfileimage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "button__Porfileimage",
  componentId: "sc-1dlve5z-1"
})(_c3 = function _c3(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      profile = _ref2.profile;
  return "\nwidth:".concat(width, ";\nheight:").concat(height, ";\nborder-radius:50%;\ncursor:pointer;\nbackground-image:url(").concat(profile, ");\nbackground-size: cover;\nbackground-repeat: no-repeat;\nbackground-position: center; \n");
});
_c4 = Porfileimage;
var Black = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "button__Black",
  componentId: "sc-1dlve5z-2"
})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], function (_ref3) {
  var aktif = _ref3.aktif;
  return aktif ? "150" : "-300";
}, function (_ref4) {
  var aktif = _ref4.aktif;
  return aktif ? "0.7" : "0";
});
var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-1dlve5z-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid #6c757d;background:transparent;width:16px;height:16px;border-radius:50%;"], rotate360);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Button$styled.button");
$RefreshReg$(_c2, "Button");
$RefreshReg$(_c3, "Porfileimage$styled.div");
$RefreshReg$(_c4, "Porfileimage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJjb2xvciIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJkaXYiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJha3RpZiIsInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE1BQU0sR0FBQ0MseURBQU0sQ0FBQ0MsTUFBUjtBQUFBO0FBQUE7QUFBQSxRQUFlO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBUUMsU0FBUixRQUFRQSxTQUFSO0FBQUEsTUFBa0JDLEtBQWxCLFFBQWtCQSxLQUFsQjtBQUFBLE1BQXdCQyxTQUF4QixRQUF3QkEsU0FBeEI7QUFBQSwyQkFFMUJELEtBRjBCLHNGQU8xQkYsS0FQMEIsaUNBUWZDLFNBUmUsa0VBV1hFLFNBWFc7QUFBQSxDQUFmLENBQVo7TUFBTU4sTTtBQWlCTixJQUFNTyxNQUFNLEdBQUNDLDJFQUFELG1CQUFaO0FBZ0JBLElBQU1DLFlBQVksR0FBQ1IseURBQU0sQ0FBQ1MsR0FBUjtBQUFBO0FBQUE7QUFBQSxTQUFZO0FBQUEsTUFBRUwsS0FBRixTQUFFQSxLQUFGO0FBQUEsTUFBUU0sTUFBUixTQUFRQSxNQUFSO0FBQUEsTUFBZUMsT0FBZixTQUFlQSxPQUFmO0FBQUEsMkJBQzdCUCxLQUQ2Qix1QkFFNUJNLE1BRjRCLDBFQUtkQyxPQUxjO0FBQUEsQ0FBWixDQUFsQjtNQUFNSCxZO0FBYU4sSUFBTUksS0FBSyxHQUFDWix5REFBTSxDQUFDUyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFHQU1SO0FBQUEsTUFBRUksS0FBRixTQUFFQSxLQUFGO0FBQUEsU0FBV0EsS0FBSyxHQUFHLEtBQUgsR0FBVyxNQUEzQjtBQUFBLENBTlEsRUFPUztBQUFBLE1BQUVBLEtBQUYsU0FBRUEsS0FBRjtBQUFBLFNBQVdBLEtBQUssR0FBRyxLQUFILEdBQVcsR0FBM0I7QUFBQSxDQVBULENBQVg7QUFXQSxJQUFNQyxTQUFTLEdBQUdDLG1FQUFILGdFQUFmO0FBU0EsSUFBTUMsT0FBTyxHQUFHaEIseURBQU0sQ0FBQ1MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtUUFDTEssU0FESyxDQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS4yZDhiMWYxYjZlZjc2MWZkYWMyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGUsa2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5cclxuIGh0bWx7XHJcbiAgIHNjcm9sbC1iZWhhdmlvcjpzbW9vdGg7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCIxNTBcIiA6IFwiLTMwMFwifTtcclxuYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsICR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMC43XCIgOiBcIjBcIn0pO1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=