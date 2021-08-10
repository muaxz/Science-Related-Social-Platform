webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pages/Main/Showfoller.js":
/*!*********************************************!*\
  !*** ./components/pages/Main/Showfoller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showfollower; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Showfoller.js";





var Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Showfoller__Rtlikewindow",
  componentId: "sc-7i7cf-0"
})(["position:absolute;width:500px;height:350px;border-radius:5px;background-color:#c83349;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c = Rtlikewindow;
var Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Showfoller__Innerwindow",
  componentId: "sc-7i7cf-1"
})(["padding:10px;background-color:white;height:100%;border-radius:5px;overflow:auto;"]);
_c2 = Innerwindow;
function Showfollower(_ref) {
  var _this = this;

  var list = _ref.list,
      setlist = _ref.setlist;

  var Followingrelation = function Followingrelation(checkfollow, UserId, followedid) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createuserrelation"])({
      UserId: UserId,
      FollowedId: followedid,
      checkiffollow: checkfollow
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Black"], {
      onClick: setlist,
      aktif: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: "40px",
          width: "95%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          onClick: setlist,
          style: {
            color: "white",
            cursor: "pointer"
          },
          className: "fas fa-times-circle fa-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
        children: list.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            optionforbutton: true,
            firstname: item.firstname,
            surname: item.lastname,
            userid: item.id,
            followerlist: item.Followed,
            Relationfunc: Followingrelation
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}
_c3 = Showfollower;

var _c, _c2, _c3;

$RefreshReg$(_c, "Rtlikewindow");
$RefreshReg$(_c2, "Innerwindow");
$RefreshReg$(_c3, "Showfollower");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXIuanMiXSwibmFtZXMiOlsiUnRsaWtld2luZG93Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJ3aW5kb3ciLCJTaG93Zm9sbG93ZXIiLCJsaXN0Iiwic2V0bGlzdCIsIkZvbGxvd2luZ3JlbGF0aW9uIiwiY2hlY2tmb2xsb3ciLCJVc2VySWQiLCJmb2xsb3dlZGlkIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsImN1cnNvciIsIm1hcCIsIml0ZW0iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImlkIiwiRm9sbG93ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDBKQUFsQjtLQUFNRixZO0FBWU4sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHdGQUFqQjtNQUFNQyxXO0FBUVMsU0FBU0MsWUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTs7QUFFakQsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxXQUFELEVBQWFDLE1BQWIsRUFBb0JDLFVBQXBCLEVBQWtDO0FBRXhEQyx1RUFBa0IsQ0FBQztBQUNmRixZQUFNLEVBQUNBLE1BRFE7QUFFZkcsZ0JBQVUsRUFBQ0YsVUFGSTtBQUdmRyxtQkFBYSxFQUFDTDtBQUhDLEtBQUQsQ0FBbEI7QUFNSCxHQVJEOztBQVVBLHNCQUNJO0FBQUEsNEJBQ1EscUVBQUMsOERBQUQ7QUFBTyxhQUFPLEVBQUVGLE9BQWhCO0FBQXlCLFdBQUssRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFIsZUFFUSxxRUFBQyxZQUFEO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ1EsZ0JBQU0sRUFBQyxNQUFSO0FBQWVDLGVBQUssRUFBQyxLQUFyQjtBQUEyQkMsZ0JBQU0sRUFBQyxNQUFsQztBQUF5Q0MsaUJBQU8sRUFBQyxNQUFqRDtBQUF3REMsb0JBQVUsRUFBQyxRQUFuRTtBQUE0RUMsd0JBQWMsRUFBQztBQUEzRixTQUFaO0FBQUEsK0JBQ0k7QUFBRyxpQkFBTyxFQUFFYixPQUFaO0FBQXNCLGVBQUssRUFBRTtBQUFDYyxpQkFBSyxFQUFDLE9BQVA7QUFBZUMsa0JBQU0sRUFBQztBQUF0QixXQUE3QjtBQUErRCxtQkFBUyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyxXQUFEO0FBQUEsa0JBQ0toQixJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLDhCQUNWLHFFQUFDLHdEQUFEO0FBQ0EsMkJBQWUsRUFBRSxJQURqQjtBQUVBLHFCQUFTLEVBQUVBLElBQUksQ0FBQ0MsU0FGaEI7QUFHQSxtQkFBTyxFQUFFRCxJQUFJLENBQUNFLFFBSGQ7QUFJQSxrQkFBTSxFQUFFRixJQUFJLENBQUNHLEVBSmI7QUFLQSx3QkFBWSxFQUFFSCxJQUFJLENBQUNJLFFBTG5CO0FBTUEsd0JBQVksRUFBRXBCO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7TUFsQ3VCSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM4ZTY3NTFhY2E0Yzg1YjVhMWNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVXNlcmNhcmQgZnJvbSBcIi4uLy4uL3NoYXJlZC9Vc2VyY2FyZFwiO1xyXG5pbXBvcnQge0NyZWF0ZXVzZXJyZWxhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0FwaS9BcGlcIlxyXG5cclxuY29uc3QgUnRsaWtld2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDo1MDBweDtcclxuaGVpZ2h0OjM1MHB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjojYzgzMzQ5O1xyXG56LWluZGV4OjEwMDtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJ3aW5kb3c9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5oZWlnaHQ6MTAwJTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbm92ZXJmbG93OmF1dG87XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dmb2xsb3dlcih7bGlzdCxzZXRsaXN0fSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZWxhdGlvbiA9IChjaGVja2ZvbGxvdyxVc2VySWQsZm9sbG93ZWRpZCkgPT57XHJcblxyXG4gICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgICAgICAgIEZvbGxvd2VkSWQ6Zm9sbG93ZWRpZCxcclxuICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2ZvbGxvd1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtzZXRsaXN0fSBha3RpZj17dHJ1ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgICAgIDxSdGxpa2V3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjQwcHhcIix3aWR0aDpcIjk1JVwiLG1hcmdpbjpcImF1dG9cIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17c2V0bGlzdH0gIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19IGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uZm9yYnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lPXtpdGVtLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cm5hbWU9e2l0ZW0ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlcmxpc3Q9e2l0ZW0uRm9sbG93ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbmZ1bmM9e0ZvbGxvd2luZ3JlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICA8L1J0bGlrZXdpbmRvdz4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==