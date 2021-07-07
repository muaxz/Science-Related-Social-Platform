webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/Layout/mainlayout.js":
/*!*****************************************!*\
  !*** ./containers/Layout/mainlayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mainlayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Lefttoolbar */ "./components/shared/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Navigation/Navigation */ "./components/shared/Navigation/Navigation.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js",
    _s = $RefreshSig$();








var Bigdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mainlayout__Bigdiv",
  componentId: "sc-1umognl-0"
})(["padding-top:80px;"]);
_c = Bigdiv;
function Mainlayout(_ref) {
  _s();

  var children = _ref.children;

  //istekler burada
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState[0],
      setactive = _useState[1];

  var userouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setactive(false);
  }, [userouter.query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bigdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Black"], {
      onClick: function onClick() {
        return setactive(false);
      },
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(Mainlayout, "UgIs6P4OQ0YPNK2P0o2yFC08zdc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c2 = Mainlayout;

var _c, _c2;

$RefreshReg$(_c, "Bigdiv");
$RefreshReg$(_c2, "Mainlayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJNYWlubGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5QkFBWjtLQUFNRixNO0FBSVMsU0FBU0csVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFDM0M7QUFEMkMsa0JBRWxCQyxzREFBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRXBDQyxNQUZvQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFHM0MsTUFBTUMsU0FBUyxHQUFDQyw2REFBUyxFQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkgsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBRlEsRUFFTixDQUFDQyxTQUFTLENBQUNHLEtBQVgsQ0FGTSxDQUFUO0FBS0Esc0JBQ0kscUVBQUMsTUFBRDtBQUFBLDRCQUNJLHFFQUFDLHlFQUFEO0FBQU8sYUFBTyxFQUFFO0FBQUEsZUFBSUosU0FBUyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BQWhCO0FBQXNDLFdBQUssRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsc0VBQUQ7QUFBYSxjQUFRLEVBQUVBLE1BQXZCO0FBQStCLGdCQUFVLEVBQUVDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLSCxRQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBbkJ1QkQsVTtVQUdKTSxxRDs7O01BSElOLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI5MGY1YWJlZjg3MjI1NDQzZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgQmlnZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjgwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gICAgLy9pc3Rla2xlciBidXJhZGFcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRhY3RpdmUoZmFsc2UpOyAgXHJcbiAgICB9LCBbdXNlcm91dGVyLnF1ZXJ5XSlcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbj48L05hdmlnYXRpb24+XHJcbiAgICAgICAgICAgIDxMZWZ0dG9vbGJhciBteWFjdGl2ZT17YWN0aXZlfSBtYWtlYWN0aXZlPXtzZXRhY3RpdmV9PjwvTGVmdHRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9