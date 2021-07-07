webpackHotUpdate_N_E("pages/profile/[username]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJNYWlubGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5QkFBWjtLQUFNRixNO0FBSVMsU0FBU0csVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFDM0M7QUFEMkMsa0JBRWxCQyxzREFBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRXBDQyxNQUZvQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFHM0MsTUFBTUMsU0FBUyxHQUFDQyw2REFBUyxFQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkgsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBRlEsRUFFTixDQUFDQyxTQUFTLENBQUNHLEtBQVgsQ0FGTSxDQUFUO0FBS0Esc0JBQ0kscUVBQUMsTUFBRDtBQUFBLDRCQUNJLHFFQUFDLHlFQUFEO0FBQU8sYUFBTyxFQUFFO0FBQUEsZUFBSUosU0FBUyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BQWhCO0FBQXNDLFdBQUssRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsc0VBQUQ7QUFBYSxjQUFRLEVBQUVBLE1BQXZCO0FBQStCLGdCQUFVLEVBQUVDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLSCxRQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBbkJ1QkQsVTtVQUdKTSxxRDs7O01BSElOLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjliOTBmNWFiZWY4NzIyNTQ0M2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMZWZ0dG9vbGJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IEJpZ2Rpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXRvcDo4MHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWlubGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuICAgIC8vaXN0ZWtsZXIgYnVyYWRhXHJcbiAgICBjb25zdCBbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdXNlcm91dGVyPXVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0YWN0aXZlKGZhbHNlKTsgIFxyXG4gICAgfSwgW3VzZXJvdXRlci5xdWVyeV0pXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCaWdkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWt0aWY9e2FjdGl2ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CaWdkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==