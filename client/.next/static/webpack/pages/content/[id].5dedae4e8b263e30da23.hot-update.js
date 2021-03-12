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
      lineheight = _ref.lineheight;
  return "\nposition:".concat(position, ";\ntop:").concat(top, ";\nleft:").concat(left, ";\nright:").concat(right, ";\nbottom:").concat(bottom, ";\nborder-radius:10%;\ndisplay:block;\nline-height:").concat(lineheight, ";\nwidth:").concat(width, ";\nheight:").concat(height, ";\ncursor:pointer;\ntext-align:center;\ncolor:").concat(color, ";\nbackground-color:").concat(backcolor, ";\n&:hover{\n background-color:lightgrey;\n color:black;\n}\n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9JY29uLmpzIl0sIm5hbWVzIjpbIkljb25zcGFuIiwic3R5bGVkIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJiYWNrY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImxpbmVoZWlnaHQiLCJJY29uIiwiY2xhc3NOYW1lIiwiSWNvbmNvbmZpZyIsImFjdGl2ZWZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBQ0MseURBQU0sQ0FBQ0MsSUFBUjtBQUFBO0FBQUE7QUFBQSxRQUFhO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBUUMsTUFBUixRQUFRQSxNQUFSO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBcUJDLFNBQXJCLFFBQXFCQSxTQUFyQjtBQUFBLE1BQStCQyxRQUEvQixRQUErQkEsUUFBL0I7QUFBQSxNQUF3Q0MsR0FBeEMsUUFBd0NBLEdBQXhDO0FBQUEsTUFBNENDLElBQTVDLFFBQTRDQSxJQUE1QztBQUFBLE1BQWlEQyxLQUFqRCxRQUFpREEsS0FBakQ7QUFBQSxNQUF1REMsTUFBdkQsUUFBdURBLE1BQXZEO0FBQUEsTUFBOERDLFVBQTlELFFBQThEQSxVQUE5RDtBQUFBLDhCQUNoQkwsUUFEZ0Isb0JBRXJCQyxHQUZxQixxQkFHcEJDLElBSG9CLHNCQUluQkMsS0FKbUIsdUJBS2xCQyxNQUxrQixnRUFRYkMsVUFSYSxzQkFTbkJULEtBVG1CLHVCQVVsQkMsTUFWa0IsMkRBYW5CQyxLQWJtQixpQ0FjUkMsU0FkUTtBQUFBLENBQWIsQ0FBZDtNQUFNTixRO0FBb0JTLFNBQVNhLElBQVQsUUFBaUQ7QUFBQSxNQUFsQ0MsU0FBa0MsU0FBbENBLFNBQWtDO0FBQUEsTUFBeEJDLFVBQXdCLFNBQXhCQSxVQUF3QjtBQUFBLE1BQWJDLFVBQWEsU0FBYkEsVUFBYTtBQUM1RCxzQkFDRyxxRUFBQyxRQUFEO0FBQVUsV0FBTyxFQUFFQTtBQUFuQixLQUFtQ0QsVUFBbkM7QUFBQSwyQkFDSTtBQUFHLGVBQVMsRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBS0g7TUFOdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjVkZWRhZTRlOGIyNjNlMzBkYTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBJY29uc3Bhbj1zdHlsZWQuc3Bhbigoe3dpZHRoLGhlaWdodCxjb2xvcixiYWNrY29sb3IscG9zaXRpb24sdG9wLGxlZnQscmlnaHQsYm90dG9tLGxpbmVoZWlnaHR9KT0+YFxyXG5wb3NpdGlvbjoke3Bvc2l0aW9ufTtcclxudG9wOiR7dG9wfTtcclxubGVmdDoke2xlZnR9O1xyXG5yaWdodDoke3JpZ2h0fTtcclxuYm90dG9tOiR7Ym90dG9tfTtcclxuYm9yZGVyLXJhZGl1czoxMCU7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbmxpbmUtaGVpZ2h0OiR7bGluZWhlaWdodH07XHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxuJjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xyXG4gY29sb3I6YmxhY2s7XHJcbn1cclxuYClcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbih7Y2xhc3NOYW1lLEljb25jb25maWcsYWN0aXZlZnVuY30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SWNvbnNwYW4gb25DbGljaz17YWN0aXZlZnVuY30gey4uLkljb25jb25maWd9PlxyXG4gICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L2k+XHJcbiAgICAgICA8L0ljb25zcGFuPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=