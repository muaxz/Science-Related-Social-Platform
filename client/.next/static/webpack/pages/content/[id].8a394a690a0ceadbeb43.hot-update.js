webpackHotUpdate_N_E("pages/content/[id]",{

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
  var data = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n *{\n    \n     margin:0px;\n     font-family: 'Poppins', sans-serif;\n }\n\n body {\n    \n    background-color:#F0F0F0;\n    height:100%;\n   \n }\n"]);

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
  return "\nwidth:".concat(width, ";\npadding:10px;\noutline:none;\nborder:none;\nborder-radius:8px;\ncolor:").concat(color, ";\nbackground-color:").concat(backcolor, ";\ntransition:0.3s;\n&:hover {\n    background-color:").concat(hoverback, ";\n    cursor:pointer;\n}\n");
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
  return "\nwidth:".concat(width, ";\nheight:").concat(height, ";\nbackground-color:white;\nborder-radius:50%;\nbackground-image:url(").concat(profile, ");\nbackground-size: cover;\nbackground-repeat: no-repeat;\nbackground-position: center; \n");
});
_c4 = Porfileimage;
var Black = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "button__Black",
  componentId: "sc-1dlve5z-2"
})(["position:fixed;top:0;left:0;width:100%;transition:background 0.4s;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], function (_ref3) {
  var aktif = _ref3.aktif;
  return aktif ? "40" : "-300";
}, function (_ref4) {
  var aktif = _ref4.aktif;
  return aktif ? "0.7" : "0";
});
var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-1dlve5z-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJjb2xvciIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJkaXYiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJha3RpZiIsInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE1BQU0sR0FBQ0MseURBQU0sQ0FBQ0MsTUFBUjtBQUFBO0FBQUE7QUFBQSxRQUFlO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBUUMsU0FBUixRQUFRQSxTQUFSO0FBQUEsTUFBa0JDLEtBQWxCLFFBQWtCQSxLQUFsQjtBQUFBLE1BQXdCQyxTQUF4QixRQUF3QkEsU0FBeEI7QUFBQSwyQkFFMUJELEtBRjBCLHNGQU8xQkYsS0FQMEIsaUNBUWZDLFNBUmUsa0VBV1hFLFNBWFc7QUFBQSxDQUFmLENBQVo7TUFBTU4sTTtBQWlCTixJQUFNTyxNQUFNLEdBQUNDLDJFQUFELG1CQUFaO0FBZUEsSUFBTUMsWUFBWSxHQUFDUix5REFBTSxDQUFDUyxHQUFSO0FBQUE7QUFBQTtBQUFBLFNBQVk7QUFBQSxNQUFFTCxLQUFGLFNBQUVBLEtBQUY7QUFBQSxNQUFRTSxNQUFSLFNBQVFBLE1BQVI7QUFBQSxNQUFlQyxPQUFmLFNBQWVBLE9BQWY7QUFBQSwyQkFDN0JQLEtBRDZCLHVCQUU1Qk0sTUFGNEIsa0ZBS2RDLE9BTGM7QUFBQSxDQUFaLENBQWxCO01BQU1ILFk7QUFhTixJQUFNSSxLQUFLLEdBQUNaLHlEQUFNLENBQUNTLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0lBT1I7QUFBQSxNQUFFSSxLQUFGLFNBQUVBLEtBQUY7QUFBQSxTQUFXQSxLQUFLLEdBQUcsSUFBSCxHQUFVLE1BQTFCO0FBQUEsQ0FQUSxFQVFTO0FBQUEsTUFBRUEsS0FBRixTQUFFQSxLQUFGO0FBQUEsU0FBV0EsS0FBSyxHQUFHLEtBQUgsR0FBVyxHQUEzQjtBQUFBLENBUlQsQ0FBWDtBQVlBLElBQU1DLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdoQix5REFBTSxDQUFDUyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUNMSyxTQURLLENBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjhhMzk0YTY5MGEwY2VhZGJlYjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZSxrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgXHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgXHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG50cmFuc2l0aW9uOmJhY2tncm91bmQgMC40cztcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI0MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=