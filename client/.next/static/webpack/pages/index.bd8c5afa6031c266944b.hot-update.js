webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Usercard.js":
/*!***************************************!*\
  !*** ./components/shared/Usercard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usercard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Usercard.js";




var Exterior = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Usercard__Exterior",
  componentId: "sc-8n1zyz-0"
})(["width:100%;margin-bottom:10px;"]);
_c = Exterior;
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Usercard__Inner",
  componentId: "sc-8n1zyz-1"
})(["display:flex;align-items:center;"]);
_c2 = Inner;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Usercard__Name",
  componentId: "sc-8n1zyz-2"
})(["margin-left:10px;"]);
_c3 = Name;
var Following = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Usercard__Following",
  componentId: "sc-8n1zyz-3"
})(["margin-left:auto;margin-right:10px;"]);
_c4 = Following;
function Usercard(_ref) {
  var firstname = _ref.firstname,
      surname = _ref.surname,
      imageurl = _ref.imageurl,
      optionforbutton = _ref.optionforbutton,
      children = _ref.children,
      usernumber = _ref.usernumber,
      userid = _ref.userid;
  var Option = null;
  if (optionforbutton) Option = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "black",
    backcolor: "#CFD9BA",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      style: {
        marginRight: "8px"
      },
      className: "fas fa-user-plus"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 57
    }, this), "Takip Et"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 14
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
      children: [!optionforbutton ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          color: "#e5383b",
          width: "25px"
        },
        children: [usernumber, "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: "/profile/".concat(userid),
          query: {
            name: "Post"
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
          profile: "/car.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "black"
          },
          children: firstname + " " + surname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Following, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 16
      }, this), Option]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}
_c5 = Usercard;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Inner");
$RefreshReg$(_c3, "Name");
$RefreshReg$(_c4, "Following");
$RefreshReg$(_c5, "Usercard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVXNlcmNhcmQuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJJbm5lciIsIk5hbWUiLCJGb2xsb3dpbmciLCJVc2VyY2FyZCIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJpbWFnZXVybCIsIm9wdGlvbmZvcmJ1dHRvbiIsImNoaWxkcmVuIiwidXNlcm51bWJlciIsInVzZXJpZCIsIk9wdGlvbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJ3aWR0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0NBQWQ7S0FBTUYsUTtBQUlOLElBQU1HLEtBQUssR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx3Q0FBWDtNQUFNQyxLO0FBS04sSUFBTUMsSUFBSSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlCQUFWO01BQU1FLEk7QUFJTixJQUFNQyxTQUFTLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkNBQWY7TUFBTUcsUztBQUlTLFNBQVNDLFFBQVQsT0FBMkY7QUFBQSxNQUF4RUMsU0FBd0UsUUFBeEVBLFNBQXdFO0FBQUEsTUFBOURDLE9BQThELFFBQTlEQSxPQUE4RDtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE3Q0MsZUFBNkMsUUFBN0NBLGVBQTZDO0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxVQUFvQixRQUFwQkEsVUFBb0I7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7QUFFdEcsTUFBSUMsTUFBTSxHQUFDLElBQVg7QUFDQSxNQUFHSixlQUFILEVBQ0FJLE1BQU0sZ0JBQUcscUVBQUMsK0RBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUF1QixhQUFTLEVBQUMsU0FBakM7QUFBQSw0QkFBMkM7QUFBRyxXQUFLLEVBQUU7QUFBQ0MsbUJBQVcsRUFBQztBQUFiLE9BQVY7QUFBK0IsZUFBUyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFFQSxzQkFDSSxxRUFBQyxRQUFEO0FBQUEsMkJBQ0kscUVBQUMsS0FBRDtBQUFBLGlCQUVRLENBQUNMLGVBQUQsZ0JBRUE7QUFBSyxhQUFLLEVBQUU7QUFBQ00sZUFBSyxFQUFDLFNBQVA7QUFBaUJDLGVBQUssRUFBQztBQUF2QixTQUFaO0FBQUEsbUJBQTZDTCxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxHQUdDLElBTFQsZUFPRyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUNSTSxrQkFBUSxxQkFBYUwsTUFBYixDQURBO0FBRVJNLGVBQUssRUFBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU47QUFGRSxTQUFaO0FBQUEsK0JBS0UscUVBQUMscUVBQUQ7QUFBYyxpQkFBTyxFQUFFLFVBQXZCO0FBQW1DLGVBQUssRUFBQyxNQUF6QztBQUFnRCxnQkFBTSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEgsZUFjRyxxRUFBQyxJQUFEO0FBQUEsK0JBQU07QUFBTSxlQUFLLEVBQUU7QUFBQ0osaUJBQUssRUFBQztBQUFQLFdBQWI7QUFBQSxvQkFBK0JULFNBQVMsR0FBQyxHQUFWLEdBQWNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEgsZUFlRyxxRUFBQyxTQUFEO0FBQUEsa0JBQVlHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZILEVBZ0JJRyxNQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7TUE1QnVCUixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkOGM1YWZhNjAzMWMyNjY5NDRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlLEJ1dHRvbn0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBFeHRlcmlvcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmBcclxuY29uc3QgSW5uZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hbWU9c3R5bGVkLmRpdmBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgRm9sbG93aW5nPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1sZWZ0OmF1dG87XHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJjYXJkKHtmaXJzdG5hbWUsc3VybmFtZSxpbWFnZXVybCxvcHRpb25mb3JidXR0b24sY2hpbGRyZW4sdXNlcm51bWJlcix1c2VyaWR9KSB7XHJcblxyXG4gICAgdmFyIE9wdGlvbj1udWxsO1xyXG4gICAgaWYob3B0aW9uZm9yYnV0dG9uKVxyXG4gICAgT3B0aW9uID0gPEJ1dHRvbiAgY29sb3I9XCJibGFja1wiIGJhY2tjb2xvcj1cIiNDRkQ5QkFcIj48aSBzdHlsZT17e21hcmdpblJpZ2h0OlwiOHB4XCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1wbHVzXCI+PC9pPlRha2lwIEV0PC9CdXR0b24+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yPlxyXG4gICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIW9wdGlvbmZvcmJ1dHRvbiA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjpcIiNlNTM4M2JcIix3aWR0aDpcIjI1cHhcIn19Pnt1c2VybnVtYmVyfS48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG5cclxuICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e1wiL2Nhci5qcGdcIn0gd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgIDxOYW1lPjxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+e2ZpcnN0bmFtZStcIiBcIitzdXJuYW1lfTwvc3Bhbj48L05hbWU+XHJcbiAgICAgICAgICAgICAgIDxGb2xsb3dpbmc+e2NoaWxkcmVufTwvRm9sbG93aW5nPlxyXG4gICAgICAgICAgICAgICB7T3B0aW9ufVxyXG4gICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==