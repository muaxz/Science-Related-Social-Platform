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





var Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Rtlikewindow",
  componentId: "sc-14bmh8h-0"
})(["position:absolute;width:300px;height:400px;background-color:grey;borrder:2px solid black;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c = Rtlikewindow;
var Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Innerwindow",
  componentId: "sc-14bmh8h-1"
})(["padding:10px;"]);
_c2 = Innerwindow;
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    firstname: "sa"
  }]),
      list = _useState5[0],
      setlist = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: order,
      seterrmsg: seterror
    });
  }, [order]);

  var showindow = function showindow(stateoflist) {
    setlist(stateoflist);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
        children: list.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: item.firstname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 27
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: "60%",
        margin: "auto"
      },
      children: (console.log(contentdata), contentdata.length > 0 ? contentdata.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          like: item.Like,
          retweet: item.Retweet,
          comment: item.allcomments,
          //key numarası
          profileimage: "car.jpg",
          title: item.title,
          titleimage: "led.jpg",
          username: "duhan",
          usersurname: "öztürk" //bir obje props
          ,
          subtitle: item.subtitle,
          date: item.createdAt
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 18
        }, _this);
      }) : "Loading...")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(Home, "4YVKdW1+RWLFFIFPzJmOIxcbyvM=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Rtlikewindow");
$RefreshReg$(_c2, "Innerwindow");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIlJ0bGlrZXdpbmRvdyIsInN0eWxlZCIsImRpdiIsIklubmVyd2luZG93IiwiSG9tZSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiYWN0aXZlbGlrZSIsInNldGFjdGl2ZWxpa2UiLCJmaXJzdG5hbWUiLCJsaXN0Iiwic2V0bGlzdCIsInVzZUVmZmVjdCIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGVycm1zZyIsInNob3dpbmRvdyIsInN0YXRlb2ZsaXN0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIndpZHRoIiwibWFyZ2luIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiTGlrZSIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZKQUFsQjtLQUFNRixZO0FBV04sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFCQUFqQjtNQUFNQyxXO0FBSVMsU0FBU0MsSUFBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3BCQyxXQURvQjtBQUFBLE1BQ1JDLGNBRFE7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFcEJHLEtBRm9CO0FBQUEsTUFFZEMsUUFGYzs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxLQUFELENBSFA7QUFBQSxNQUdwQkssUUFIb0I7QUFBQSxNQUdYQyxRQUhXOztBQUFBLG1CQUlNTixzREFBUSxFQUpkO0FBQUEsTUFJcEJPLFVBSm9CO0FBQUEsTUFJVEMsYUFKUzs7QUFBQSxtQkFLTlIsc0RBQVEsQ0FBQyxDQUFDO0FBQUNTLGFBQVMsRUFBQztBQUFYLEdBQUQsQ0FBRCxDQUxGO0FBQUEsTUFLcEJDLElBTG9CO0FBQUEsTUFLZkMsT0FMZTs7QUFPMUJDLHlEQUFTLENBQUMsWUFBSTtBQUNWQyw0REFBTyxDQUFDO0FBQ0pDLGlCQUFXLEVBQUNiLFdBRFI7QUFFSkMsb0JBQWMsRUFBQ0EsY0FGWDtBQUdKQyxXQUFLLEVBQUNBLEtBSEY7QUFJSlksZUFBUyxFQUFDVDtBQUpOLEtBQUQsQ0FBUDtBQU1ILEdBUFEsRUFPUCxDQUFDSCxLQUFELENBUE8sQ0FBVDs7QUFTQSxNQUFNYSxTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFDQyxXQUFELEVBQWU7QUFDNUJOLFdBQU8sQ0FBQ00sV0FBRCxDQUFQO0FBQ0YsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLGVBQ01QLElBQUksQ0FBQ1EsTUFBTCxHQUFjLENBQWQsZ0JBQ0EscUVBQUMsWUFBRDtBQUFBLDZCQUNJLHFFQUFDLFdBQUQ7QUFBQSxrQkFDS1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLDhCQUNWO0FBQUEsc0JBQU1BLElBQUksQ0FBQ1g7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsR0FRQyxFQVRQLGVBV0U7QUFBSyxXQUFLLEVBQUU7QUFBQ1ksYUFBSyxFQUFDLEtBQVA7QUFBYUMsY0FBTSxFQUFDO0FBQXBCLE9BQVo7QUFBQSxpQkFFS0MsT0FBTyxDQUFDQyxHQUFSLENBQVl2QixXQUFaLEdBQ0FBLFdBQVcsQ0FBQ2lCLE1BQVosR0FBcUIsQ0FBckIsR0FDQWpCLFdBQVcsQ0FBQ2tCLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFNSyxLQUFOO0FBQUEsNEJBQ2QscUVBQUMsc0VBQUQ7QUFDQSxjQUFJLEVBQUVMLElBQUksQ0FBQ00sSUFEWDtBQUVBLGlCQUFPLEVBQUVOLElBQUksQ0FBQ08sT0FGZDtBQUdBLGlCQUFPLEVBQUVQLElBQUksQ0FBQ1EsV0FIZDtBQUlXO0FBQ1gsc0JBQVksRUFBRSxTQUxkO0FBTUEsZUFBSyxFQUFFUixJQUFJLENBQUNTLEtBTlo7QUFPQSxvQkFBVSxFQUFFLFNBUFo7QUFRQSxrQkFBUSxFQUFFLE9BUlY7QUFTQSxxQkFBVyxFQUFFLFFBVGIsQ0FTc0I7QUFUdEI7QUFVQSxrQkFBUSxFQUFFVCxJQUFJLENBQUNVLFFBVmY7QUFXQSxjQUFJLEVBQUVWLElBQUksQ0FBQ1c7QUFYWCxXQUlLTixLQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFoQixDQURBLEdBZ0JFLFlBbkJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0NIOztHQXhEdUIxQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEwMjM4Njg1ZGE0ZTNkMjJlMWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuXHJcblxyXG5jb25zdCBSdGxpa2V3aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6NDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuYm9ycmRlcjoycHggc29saWQgYmxhY2s7XHJcbnotaW5kZXg6MTAwO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IElubmVyd2luZG93PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWN0aXZlbGlrZSxzZXRhY3RpdmVsaWtlXT11c2VTdGF0ZSgpXHJcbiAgICBjb25zdFtsaXN0LHNldGxpc3RdPXVzZVN0YXRlKFt7Zmlyc3RuYW1lOlwic2FcIn1dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtvcmRlcl0pXHJcblxyXG4gICAgY29uc3Qgc2hvd2luZG93PShzdGF0ZW9mbGlzdCk9PntcclxuICAgICAgIHNldGxpc3Qoc3RhdGVvZmxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBsaXN0Lmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgIDxSdGxpa2V3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxJbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5maXJzdG5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9Jbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgIDwvUnRsaWtld2luZG93PiBcclxuICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI2MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50ZGF0YSksXHJcbiAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX1cclxuICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJjYXIuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJsZWQuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiZHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDtnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9