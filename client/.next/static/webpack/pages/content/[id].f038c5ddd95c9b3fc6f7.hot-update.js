webpackHotUpdate_N_E("pages/content/[id]",{

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
      lineheight = _ref.lineheight,
      hovercolor = _ref.hovercolor,
      hoverback = _ref.hoverback,
      rotate = _ref.rotate;
  return "\nposition:".concat(position, ";\ntop:").concat(top, ";\nleft:").concat(left, ";\nright:").concat(right, ";\nbottom:").concat(bottom, ";\nborder-radius:50%;\ntransition:0.5s;\ndisplay:block;\nline-height:").concat(lineheight, ";\nwidth:").concat(width, ";\nheight:").concat(height, ";\ncursor:pointer;\ntext-align:center;\ncolor:").concat(color, ";\nbackground-color:").concat(backcolor, ";\ntransform:rotate(").concat(rotate, "deg);\n&:hover{\n background-color:").concat(hoverback, ";\n color:").concat(hovercolor, ";\n}\n");
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
      lineNumber: 29,
      columnNumber: 12
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9JY29uLmpzIl0sIm5hbWVzIjpbIkljb25zcGFuIiwic3R5bGVkIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJiYWNrY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImxpbmVoZWlnaHQiLCJob3ZlcmNvbG9yIiwiaG92ZXJiYWNrIiwicm90YXRlIiwiSWNvbiIsImNsYXNzTmFtZSIsIkljb25jb25maWciLCJhY3RpdmVmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUNDLHlEQUFNLENBQUNDLElBQVI7QUFBQTtBQUFBO0FBQUEsUUFBYTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVFDLE1BQVIsUUFBUUEsTUFBUjtBQUFBLE1BQWVDLEtBQWYsUUFBZUEsS0FBZjtBQUFBLE1BQXFCQyxTQUFyQixRQUFxQkEsU0FBckI7QUFBQSxNQUErQkMsUUFBL0IsUUFBK0JBLFFBQS9CO0FBQUEsTUFBd0NDLEdBQXhDLFFBQXdDQSxHQUF4QztBQUFBLE1BQTRDQyxJQUE1QyxRQUE0Q0EsSUFBNUM7QUFBQSxNQUFpREMsS0FBakQsUUFBaURBLEtBQWpEO0FBQUEsTUFBdURDLE1BQXZELFFBQXVEQSxNQUF2RDtBQUFBLE1BQThEQyxVQUE5RCxRQUE4REEsVUFBOUQ7QUFBQSxNQUF5RUMsVUFBekUsUUFBeUVBLFVBQXpFO0FBQUEsTUFBb0ZDLFNBQXBGLFFBQW9GQSxTQUFwRjtBQUFBLE1BQThGQyxNQUE5RixRQUE4RkEsTUFBOUY7QUFBQSw4QkFDaEJSLFFBRGdCLG9CQUVyQkMsR0FGcUIscUJBR3BCQyxJQUhvQixzQkFJbkJDLEtBSm1CLHVCQUtsQkMsTUFMa0Isa0ZBU2JDLFVBVGEsc0JBVW5CVCxLQVZtQix1QkFXbEJDLE1BWGtCLDJEQWNuQkMsS0FkbUIsaUNBZVJDLFNBZlEsaUNBZ0JSUyxNQWhCUSxnREFrQlBELFNBbEJPLHVCQW1CbEJELFVBbkJrQjtBQUFBLENBQWIsQ0FBZDtNQUFNYixRO0FBc0JTLFNBQVNnQixJQUFULFFBQWlEO0FBQUEsTUFBbENDLFNBQWtDLFNBQWxDQSxTQUFrQztBQUFBLE1BQXhCQyxVQUF3QixTQUF4QkEsVUFBd0I7QUFBQSxNQUFiQyxVQUFhLFNBQWJBLFVBQWE7QUFDNUQsc0JBQ0cscUVBQUMsUUFBRDtBQUFVLFdBQU8sRUFBRUE7QUFBbkIsS0FBbUNELFVBQW5DO0FBQUEsMkJBQ0k7QUFBRyxlQUFTLEVBQUVEO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQUtIO01BTnVCRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS5mMDM4YzVkZGQ5NWM5YjNmYzZmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSWNvbnNwYW49c3R5bGVkLnNwYW4oKHt3aWR0aCxoZWlnaHQsY29sb3IsYmFja2NvbG9yLHBvc2l0aW9uLHRvcCxsZWZ0LHJpZ2h0LGJvdHRvbSxsaW5laGVpZ2h0LGhvdmVyY29sb3IsaG92ZXJiYWNrLHJvdGF0ZX0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5saW5lLWhlaWdodDoke2xpbmVoZWlnaHR9O1xyXG53aWR0aDoke3dpZHRofTtcclxuaGVpZ2h0OiR7aGVpZ2h0fTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zZm9ybTpyb3RhdGUoJHtyb3RhdGV9ZGVnKTtcclxuJjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gY29sb3I6JHtob3ZlcmNvbG9yfTtcclxufVxyXG5gKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHtjbGFzc05hbWUsSWNvbmNvbmZpZyxhY3RpdmVmdW5jfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PjwvaT5cclxuICAgICAgIDwvSWNvbnNwYW4+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==