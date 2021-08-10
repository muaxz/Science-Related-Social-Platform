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
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Usercard.js",
    _s = $RefreshSig$();






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
  _s();

  var firstname = _ref.firstname,
      surname = _ref.surname,
      imageurl = _ref.imageurl,
      optionforbutton = _ref.optionforbutton,
      children = _ref.children,
      usernumber = _ref.usernumber,
      userid = _ref.userid,
      followerlist = _ref.followerlist,
      Relationfunc = _ref.Relationfunc;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      checkfollow = _useState[0],
      setcheckfollow = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]),
      userdata = _useContext.userdata;

  var Option = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    followerlist.forEach(function (element) {
      if (userdata.UserId == element.id) {
        setcheckfollow(true);
      }
    });
  }, []);
  if (optionforbutton) Option = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return Relationfunc(checkfollow, userdata.UserId, userid);
    },
    color: "black",
    backcolor: "#CFD9BA",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      style: {
        marginRight: "8px"
      },
      className: "fas fa-user-plus"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 120
    }, this), checkfollow ? "Takipten Çık" : "Takip Et"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
        lineNumber: 56,
        columnNumber: 21
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: {
          pathname: "/profile/".concat(userid),
          query: {
            name: "Post"
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
          profile: "/car.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "black"
          },
          children: firstname + " " + surname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Following, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 16
      }, this), Option]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(Usercard, "CQFRbiuGRDLSzoX2oecdgFw5b9g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVXNlcmNhcmQuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJJbm5lciIsIk5hbWUiLCJGb2xsb3dpbmciLCJVc2VyY2FyZCIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJpbWFnZXVybCIsIm9wdGlvbmZvcmJ1dHRvbiIsImNoaWxkcmVuIiwidXNlcm51bWJlciIsInVzZXJpZCIsImZvbGxvd2VybGlzdCIsIlJlbGF0aW9uZnVuYyIsInVzZVN0YXRlIiwiY2hlY2tmb2xsb3ciLCJzZXRjaGVja2ZvbGxvdyIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwiT3B0aW9uIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJVc2VySWQiLCJpZCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJ3aWR0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0NBQWQ7S0FBTUYsUTtBQUlOLElBQU1HLEtBQUssR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx3Q0FBWDtNQUFNQyxLO0FBS04sSUFBTUMsSUFBSSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlCQUFWO01BQU1FLEk7QUFJTixJQUFNQyxTQUFTLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkNBQWY7TUFBTUcsUztBQUlTLFNBQVNDLFFBQVQsT0FBcUg7QUFBQTs7QUFBQSxNQUFsR0MsU0FBa0csUUFBbEdBLFNBQWtHO0FBQUEsTUFBeEZDLE9BQXdGLFFBQXhGQSxPQUF3RjtBQUFBLE1BQWhGQyxRQUFnRixRQUFoRkEsUUFBZ0Y7QUFBQSxNQUF2RUMsZUFBdUUsUUFBdkVBLGVBQXVFO0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTlDQyxVQUE4QyxRQUE5Q0EsVUFBOEM7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBNUJDLFlBQTRCLFFBQTVCQSxZQUE0QjtBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTs7QUFBQSxrQkFFM0ZDLHNEQUFRLENBQUMsS0FBRCxDQUZtRjtBQUFBLE1BRXpIQyxXQUZ5SDtBQUFBLE1BRTdHQyxjQUY2Rzs7QUFBQSxvQkFHN0dDLHdEQUFVLENBQUNDLHNFQUFELENBSG1HO0FBQUEsTUFHekhDLFFBSHlILGVBR3pIQSxRQUh5SDs7QUFLaEksTUFBSUMsTUFBTSxHQUFDLElBQVg7QUFHQUMseURBQVMsQ0FBQyxZQUFJO0FBRVZULGdCQUFZLENBQUNVLE9BQWIsQ0FBcUIsVUFBQUMsT0FBTyxFQUFJO0FBRTVCLFVBQUdKLFFBQVEsQ0FBQ0ssTUFBVCxJQUFtQkQsT0FBTyxDQUFDRSxFQUE5QixFQUFpQztBQUU3QlQsc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFFSDtBQUVKLEtBUkQ7QUFVSCxHQVpRLEVBWVAsRUFaTyxDQUFUO0FBY0EsTUFBR1IsZUFBSCxFQUNBWSxNQUFNLGdCQUFHLHFFQUFDLCtEQUFEO0FBQVMsV0FBTyxFQUFFO0FBQUEsYUFBSVAsWUFBWSxDQUFDRSxXQUFELEVBQWFJLFFBQVEsQ0FBQ0ssTUFBdEIsRUFBNkJiLE1BQTdCLENBQWhCO0FBQUEsS0FBbEI7QUFBd0UsU0FBSyxFQUFDLE9BQTlFO0FBQXNGLGFBQVMsRUFBQyxTQUFoRztBQUFBLDRCQUEwRztBQUFHLFdBQUssRUFBRTtBQUFDZSxtQkFBVyxFQUFDO0FBQWIsT0FBVjtBQUErQixlQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUExRyxFQUEyS1gsV0FBVyxHQUFHLGNBQUgsR0FBb0IsVUFBMU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFFQSxzQkFDSSxxRUFBQyxRQUFEO0FBQUEsMkJBQ0kscUVBQUMsS0FBRDtBQUFBLGlCQUVRLENBQUNQLGVBQUQsZ0JBRUE7QUFBSyxhQUFLLEVBQUU7QUFBQ21CLGVBQUssRUFBQyxTQUFQO0FBQWlCQyxlQUFLLEVBQUM7QUFBdkIsU0FBWjtBQUFBLG1CQUE2Q2xCLFVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLEdBR0MsSUFMVCxlQU9HLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQ1JtQixrQkFBUSxxQkFBYWxCLE1BQWIsQ0FEQTtBQUVSbUIsZUFBSyxFQUFDO0FBQUNDLGdCQUFJLEVBQUM7QUFBTjtBQUZFLFNBQVo7QUFBQSwrQkFLRSxxRUFBQyxxRUFBRDtBQUFjLGlCQUFPLEVBQUUsVUFBdkI7QUFBbUMsZUFBSyxFQUFDLE1BQXpDO0FBQWdELGdCQUFNLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSCxlQWNHLHFFQUFDLElBQUQ7QUFBQSwrQkFBTTtBQUFNLGVBQUssRUFBRTtBQUFDSixpQkFBSyxFQUFDO0FBQVAsV0FBYjtBQUFBLG9CQUErQnRCLFNBQVMsR0FBQyxHQUFWLEdBQWNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEgsZUFlRyxxRUFBQyxTQUFEO0FBQUEsa0JBQVlHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZILEVBZ0JJVyxNQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBL0N1QmhCLFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg1NTFjOTYzZmRhODkxMjkzOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlLEJ1dHRvbn0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3I9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5gXHJcbmNvbnN0IElubmVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYW1lPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEZvbGxvd2luZz1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tbGVmdDphdXRvO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyY2FyZCh7Zmlyc3RuYW1lLHN1cm5hbWUsaW1hZ2V1cmwsb3B0aW9uZm9yYnV0dG9uLGNoaWxkcmVuLHVzZXJudW1iZXIsdXNlcmlkLGZvbGxvd2VybGlzdCxSZWxhdGlvbmZ1bmN9KSB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZm9sbG93LHNldGNoZWNrZm9sbG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcbiAgICB2YXIgT3B0aW9uPW51bGw7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBmb2xsb3dlcmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBlbGVtZW50LmlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRjaGVja2ZvbGxvdyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBpZihvcHRpb25mb3JidXR0b24pXHJcbiAgICBPcHRpb24gPSA8QnV0dG9uICBvbkNsaWNrPXsoKT0+UmVsYXRpb25mdW5jKGNoZWNrZm9sbG93LHVzZXJkYXRhLlVzZXJJZCx1c2VyaWQpfSBjb2xvcj1cImJsYWNrXCIgYmFja2NvbG9yPVwiI0NGRDlCQVwiPjxpIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4cHhcIn19IGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXBsdXNcIj48L2k+e2NoZWNrZm9sbG93ID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcj5cclxuICAgICAgICAgICAgPElubmVyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFvcHRpb25mb3JidXR0b24gP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6XCIjZTUzODNiXCIsd2lkdGg6XCIyNXB4XCJ9fT57dXNlcm51bWJlcn0uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9IHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICA8TmFtZT48c3BhbiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PntmaXJzdG5hbWUrXCIgXCIrc3VybmFtZX08L3NwYW4+PC9OYW1lPlxyXG4gICAgICAgICAgICAgICA8Rm9sbG93aW5nPntjaGlsZHJlbn08L0ZvbGxvd2luZz5cclxuICAgICAgICAgICAgICAge09wdGlvbn1cclxuICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=