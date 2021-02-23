webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();





function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      errormsg = _useState3[0],
      seterror = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      activelike = _useState4[0],
      setactivelike = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      contentdata: contentdata,
      setcontentdata: setcontentdata,
      order: order,
      seterrmsg: seterror
    });
  }, [order]);

  var active = function active(carduserstate) {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      width: "60%",
      margin: "auto"
    },
    children: [contentdata.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        profileimage: "car.jpg",
        title: item.title,
        titleimage: "led.jpg",
        username: "duhan",
        usersurname: "öztürk" //bir obje props
        ,
        subtitle: item.subtitle,
        createdAt: item.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 18
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: "led.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: "yaprak.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: "yaprak.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: "car.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: "black.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Home, "xFyW8Ox9PvnnzAg99WTXVpdDuLo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsImFjdGl2ZWxpa2UiLCJzZXRhY3RpdmVsaWtlIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsInNldGVycm1zZyIsImFjdGl2ZSIsImNhcmR1c2Vyc3RhdGUiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDcEJDLFdBRG9CO0FBQUEsTUFDUkMsY0FEUTs7QUFBQSxtQkFFSkYsc0RBQVEsQ0FBQyxFQUFELENBRko7QUFBQSxNQUVwQkcsS0FGb0I7QUFBQSxNQUVkQyxRQUZjOztBQUFBLG1CQUdESixzREFBUSxDQUFDLEtBQUQsQ0FIUDtBQUFBLE1BR3BCSyxRQUhvQjtBQUFBLE1BR1hDLFFBSFc7O0FBQUEsbUJBSU1OLHNEQUFRLEVBSmQ7QUFBQSxNQUlwQk8sVUFKb0I7QUFBQSxNQUlUQyxhQUpTOztBQU0xQkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLDREQUFPLENBQUM7QUFDSlQsaUJBQVcsRUFBQ0EsV0FEUjtBQUVKQyxvQkFBYyxFQUFDQSxjQUZYO0FBR0pDLFdBQUssRUFBQ0EsS0FIRjtBQUlKUSxlQUFTLEVBQUNMO0FBSk4sS0FBRCxDQUFQO0FBTUgsR0FQUSxFQU9QLENBQUNILEtBQUQsQ0FQTyxDQUFUOztBQVNBLE1BQU1TLE1BQU0sR0FBQyxTQUFQQSxNQUFPLENBQUNDLGFBQUQsRUFBaUIsQ0FFN0IsQ0FGRDs7QUFJQSxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUMsS0FBUDtBQUFhQyxZQUFNLEVBQUM7QUFBcEIsS0FBWjtBQUFBLGVBRU9kLFdBQVcsQ0FBQ2UsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsMEJBQ2QscUVBQUMsc0VBQUQ7QUFDQSxvQkFBWSxFQUFFLFNBRGQ7QUFFQSxhQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FGWjtBQUdBLGtCQUFVLEVBQUUsU0FIWjtBQUlBLGdCQUFRLEVBQUUsT0FKVjtBQUtBLG1CQUFXLEVBQUUsUUFMYixDQUtzQjtBQUx0QjtBQU1BLGdCQUFRLEVBQUVELElBQUksQ0FBQ0UsUUFOZjtBQU9BLGlCQUFTLEVBQUVGLElBQUksQ0FBQ0c7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBaEIsQ0FGUCxlQWVFLHFFQUFDLHNFQUFEO0FBQWEsU0FBRyxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWdCRSxxRUFBQyxzRUFBRDtBQUFhLFNBQUcsRUFBRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBaUJFLHFFQUFDLHNFQUFEO0FBQWEsU0FBRyxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUFrQkUscUVBQUMsc0VBQUQ7QUFBYSxTQUFHLEVBQUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQW1CRSxxRUFBQyxzRUFBRDtBQUFhLFNBQUcsRUFBRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQTFDdUJyQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1NmQ0N2EyYzMxYTA5MDVlMzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWN0aXZlbGlrZSxzZXRhY3RpdmVsaWtlXT11c2VTdGF0ZSgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICB9KVxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZT0oY2FyZHVzZXJzdGF0ZSk9PntcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiNjAlXCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiY2FyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wibGVkLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcImR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw7Z6dMO8cmtcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgPjwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8Q29udGVudGNhcmQgdXJsPXtcImxlZC5qcGdcIn0+PC9Db250ZW50Y2FyZD5cclxuICAgICAgICAgIDxDb250ZW50Y2FyZCB1cmw9e1wieWFwcmFrLmpwZ1wifT48L0NvbnRlbnRjYXJkPlxyXG4gICAgICAgICAgPENvbnRlbnRjYXJkIHVybD17XCJ5YXByYWsuanBnXCJ9PjwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICA8Q29udGVudGNhcmQgdXJsPXtcImNhci5qcGdcIn0+PC9Db250ZW50Y2FyZD5cclxuICAgICAgICAgIDxDb250ZW50Y2FyZCB1cmw9e1wiYmxhY2suanBnXCJ9PjwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==