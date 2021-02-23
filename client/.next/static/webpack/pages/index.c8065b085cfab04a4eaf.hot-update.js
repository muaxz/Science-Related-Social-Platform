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
    children: (console.log(contentdata), contentdata.map(function (item) {
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
        lineNumber: 32,
        columnNumber: 18
      }, _this);
    }))
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsImFjdGl2ZWxpa2UiLCJzZXRhY3RpdmVsaWtlIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsInNldGVycm1zZyIsImFjdGl2ZSIsImNhcmR1c2Vyc3RhdGUiLCJ3aWR0aCIsIm1hcmdpbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsSUFBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3BCQyxXQURvQjtBQUFBLE1BQ1JDLGNBRFE7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFcEJHLEtBRm9CO0FBQUEsTUFFZEMsUUFGYzs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxLQUFELENBSFA7QUFBQSxNQUdwQkssUUFIb0I7QUFBQSxNQUdYQyxRQUhXOztBQUFBLG1CQUlNTixzREFBUSxFQUpkO0FBQUEsTUFJcEJPLFVBSm9CO0FBQUEsTUFJVEMsYUFKUzs7QUFNMUJDLHlEQUFTLENBQUMsWUFBSTtBQUNWQyw0REFBTyxDQUFDO0FBQ0pULGlCQUFXLEVBQUNBLFdBRFI7QUFFSkMsb0JBQWMsRUFBQ0EsY0FGWDtBQUdKQyxXQUFLLEVBQUNBLEtBSEY7QUFJSlEsZUFBUyxFQUFDTDtBQUpOLEtBQUQsQ0FBUDtBQU1ILEdBUFEsRUFPUCxDQUFDSCxLQUFELENBUE8sQ0FBVDs7QUFTQSxNQUFNUyxNQUFNLEdBQUMsU0FBUEEsTUFBTyxDQUFDQyxhQUFELEVBQWlCLENBRTdCLENBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDLEtBQVA7QUFBYUMsWUFBTSxFQUFDO0FBQXBCLEtBQVo7QUFBQSxlQUVPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFdBQVosR0FDQUEsV0FBVyxDQUFDaUIsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsMEJBQ2QscUVBQUMsc0VBQUQ7QUFDQSxvQkFBWSxFQUFFLFNBRGQ7QUFFQSxhQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FGWjtBQUdBLGtCQUFVLEVBQUUsU0FIWjtBQUlBLGdCQUFRLEVBQUUsT0FKVjtBQUtBLG1CQUFXLEVBQUUsUUFMYixDQUtzQjtBQUx0QjtBQU1BLGdCQUFRLEVBQUVELElBQUksQ0FBQ0UsUUFOZjtBQU9BLGlCQUFTLEVBQUVGLElBQUksQ0FBQ0c7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBaEIsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0F0Q3VCdkIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jODA2NWIwODVjZmFiMDRhNGVhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FjdGl2ZWxpa2Usc2V0YWN0aXZlbGlrZV09dXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjb250ZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICBjb25zdCBhY3RpdmU9KGNhcmR1c2Vyc3RhdGUpPT57XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjYwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRkYXRhKSxcclxuICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiY2FyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wibGVkLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcImR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw7Z6dMO8cmtcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9