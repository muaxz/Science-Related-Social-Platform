webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UI/Icon.js":
/*!*******************************!*\
  !*** ./components/UI/Icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\Icon.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Iconspan = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Icon__Iconspan",
  componentId: "sc-1bqjy35-0"
})(_c = function _c(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      backcolor = _ref.backcolor,
      position = _ref.position,
      top = _ref.top,
      left = _ref.left,
      right = _ref.right,
      bottom = _ref.bottom,
      lineheight = _ref.lineheight;
  return "\nposition:".concat(position, ";\ntop:").concat(top, ";\nleft:").concat(left, ";\nright:").concat(right, ";\nbottom:").concat(bottom, ";\nborder-radius:50%;\ndisplay:block;\nline-height:").concat(lineheight, ";\nwidth:").concat(width, ";\nheight:").concat(height, ";\ncursor:pointer;\ntext-align:center;\ncolor:").concat(color, ";\nbackground-color:").concat(backcolor, ";\n&:hover{\n background-color:lightgrey;\n color:black;\n}\n");
});
_c2 = Iconspan;
function Icon(_ref2) {
  var className = _ref2.className,
      Iconconfig = _ref2.Iconconfig,
      activefunc = _ref2.activefunc;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Iconspan, _objectSpread(_objectSpread({
    onClick: activefunc
  }, Iconconfig), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: className
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 8
  }, this);
}
_c3 = Icon;

var _c, _c2, _c3;

$RefreshReg$(_c, "Iconspan$styled.span");
$RefreshReg$(_c2, "Iconspan");
$RefreshReg$(_c3, "Icon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9JY29uLmpzIl0sIm5hbWVzIjpbIkljb25zcGFuIiwic3R5bGVkIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJiYWNrY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImxpbmVoZWlnaHQiLCJJY29uIiwiY2xhc3NOYW1lIiwiSWNvbmNvbmZpZyIsImFjdGl2ZWZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBQ0MseURBQU0sQ0FBQ0MsSUFBUjtBQUFBO0FBQUE7QUFBQSxRQUFhO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBUUMsTUFBUixRQUFRQSxNQUFSO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBcUJDLFNBQXJCLFFBQXFCQSxTQUFyQjtBQUFBLE1BQStCQyxRQUEvQixRQUErQkEsUUFBL0I7QUFBQSxNQUF3Q0MsR0FBeEMsUUFBd0NBLEdBQXhDO0FBQUEsTUFBNENDLElBQTVDLFFBQTRDQSxJQUE1QztBQUFBLE1BQWlEQyxLQUFqRCxRQUFpREEsS0FBakQ7QUFBQSxNQUF1REMsTUFBdkQsUUFBdURBLE1BQXZEO0FBQUEsTUFBOERDLFVBQTlELFFBQThEQSxVQUE5RDtBQUFBLDhCQUNoQkwsUUFEZ0Isb0JBRXJCQyxHQUZxQixxQkFHcEJDLElBSG9CLHNCQUluQkMsS0FKbUIsdUJBS2xCQyxNQUxrQixnRUFRYkMsVUFSYSxzQkFTbkJULEtBVG1CLHVCQVVsQkMsTUFWa0IsMkRBYW5CQyxLQWJtQixpQ0FjUkMsU0FkUTtBQUFBLENBQWIsQ0FBZDtNQUFNTixRO0FBb0JTLFNBQVNhLElBQVQsUUFBaUQ7QUFBQSxNQUFsQ0MsU0FBa0MsU0FBbENBLFNBQWtDO0FBQUEsTUFBeEJDLFVBQXdCLFNBQXhCQSxVQUF3QjtBQUFBLE1BQWJDLFVBQWEsU0FBYkEsVUFBYTtBQUM1RCxzQkFDRyxxRUFBQyxRQUFEO0FBQVUsV0FBTyxFQUFFQTtBQUFuQixLQUFtQ0QsVUFBbkM7QUFBQSwyQkFDSTtBQUFHLGVBQVMsRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBS0g7TUFOdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjk3NGMyYWVhNzdjYzM2ZTcwNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEljb25zcGFuPXN0eWxlZC5zcGFuKCh7d2lkdGgsaGVpZ2h0LGNvbG9yLGJhY2tjb2xvcixwb3NpdGlvbix0b3AsbGVmdCxyaWdodCxib3R0b20sbGluZWhlaWdodH0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuZGlzcGxheTpibG9jaztcclxubGluZS1oZWlnaHQ6JHtsaW5laGVpZ2h0fTtcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbiBjb2xvcjpibGFjaztcclxufVxyXG5gKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHtjbGFzc05hbWUsSWNvbmNvbmZpZyxhY3RpdmVmdW5jfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PjwvaT5cclxuICAgICAgIDwvSWNvbnNwYW4+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==