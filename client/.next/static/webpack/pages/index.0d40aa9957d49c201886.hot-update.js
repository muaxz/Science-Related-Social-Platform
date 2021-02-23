webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contentcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js",
    _s = $RefreshSig$();



var Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["cursor:pointer;position:relative;display:flex;margin-bottom:15px;width:650px;height:150px;background-color:lightgrey;"]);
_c = Outsidediv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-1"
})(["padding:5px;"]);
_c2 = Imagediv;
var Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-2"
})(["flex:1;"]);
_c3 = Imageholder;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-3"
})(["flex:2;display:flex;flex-direction:column;background-color:lightgrey;justify-content:space-between;"]);
_c4 = Contentholder;
var Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})(["padding:10px;"]);
_c5 = Contentdiv;
var Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-5"
})(["padding:5px;display:flex;"]);
_c6 = Toolbar;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-6"
})(["width:100%;height:140px;object-fit:cover;"]);
_c7 = Img;
var İconholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-7"
})(["margin-left:10px;display:flex;align-items:center;"]);
var Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-8"
})(["position:absolute;top:0px;width:100%;height:50px;transition:all 0.3s;background:linear-gradient(rgba(0,0,0,0.9),rgb(100,100,100,0.0));opacity:", ""], function (_ref) {
  var active = _ref.active;
  return active ? "1" : "0";
});
_c8 = Profilediv;
var Porfileimage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Contentcard__Porfileimage",
  componentId: "r68yrd-9"
})(["width:40px;height:40px;background-color:white;border-radius:50%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;"], function (_ref2) {
  var profile = _ref2.profile;
  return profile;
});
_c9 = Porfileimage;
function Contentcard(_ref3) {
  _s();

  var profileimage = _ref3.profileimage,
      titleimage = _ref3.titleimage,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      username = _ref3.username,
      usersurname = _ref3.usersurname,
      date = _ref3.date,
      comment = _ref3.comment,
      retweet = _ref3.retweet,
      like = _ref3.like;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState[0],
      setactive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    onMouseLeave: function onMouseLeave() {
      return setactive(false);
    },
    onMouseOver: function onMouseOver() {
      return setactive(true);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "10px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Porfileimage, {
          profile: profileimage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "white"
            },
            children: username + " " + usersurname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 52
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto",
            marginRight: "10px",
            color: "white"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 85
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
          src: titleimage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            marginBottom: "10px",
            paddingTop: "7px",
            color: "#A70909"
          },
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-retweet fa-sm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 47
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginLeft: "5px"
            },
            children: retweet !== undefined ? retweet.length : "loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 87
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            style: {
              color: "black"
            },
            className: "fas fa-heart fa-sm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 47
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginLeft: "5px",
              color: ""
            },
            children: like.length ? like.length : "loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 110
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            style: {
              color: "black"
            },
            className: "fas fa-comment-alt fa-sm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 47
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginLeft: "5px",
              color: ""
            },
            children: comment.length ? comment.length : "loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 116
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
          style: {
            flex: 4,
            display: "flex",
            justifyContent: "flex-end",
            color: "grey"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-bookmark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 101
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 18
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "SbOcorhWHsOtTIjGNP6af3l9+vc=");

_c10 = Contentcard;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Outsidediv");
$RefreshReg$(_c2, "Imagediv");
$RefreshReg$(_c3, "Imageholder");
$RefreshReg$(_c4, "Contentholder");
$RefreshReg$(_c5, "Contentdiv");
$RefreshReg$(_c6, "Toolbar");
$RefreshReg$(_c7, "Img");
$RefreshReg$(_c8, "Profilediv");
$RefreshReg$(_c9, "Porfileimage");
$RefreshReg$(_c10, "Contentcard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJhY3RpdmUiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiQ29udGVudGNhcmQiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwidXNlU3RhdGUiLCJzZXRhY3RpdmUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsImZsZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkhBQWhCO0tBQU1GLFU7QUFVTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7TUFBTUMsUTtBQUdOLElBQU1DLFdBQVcsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxlQUFqQjtNQUFNRSxXO0FBR04sSUFBTUMsYUFBYSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJHQUFuQjtNQUFNRyxhO0FBT04sSUFBTUMsVUFBVSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFB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YjtBQUFBLHNCQUEyQ1AsSUFBSSxDQUFDYSxNQUFMLEdBQWNiLElBQUksQ0FBQ2EsTUFBbkIsR0FBNEI7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsVUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDRixnQkFBSSxFQUFDO0FBQU4sV0FBbkI7QUFBQSxrQ0FBNkI7QUFBSSxpQkFBSyxFQUFFO0FBQUNKLG1CQUFLLEVBQUM7QUFBUCxhQUFYO0FBQTRCLHFCQUFTLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBN0IsZUFBa0c7QUFBTSxpQkFBSyxFQUFFO0FBQUNELHdCQUFVLEVBQUMsS0FBWjtBQUFrQkMsbUJBQUssRUFBQztBQUF4QixhQUFiO0FBQUEsc0JBQTJDVCxPQUFPLENBQUNlLE1BQVIsR0FBaUJmLE9BQU8sQ0FBQ2UsTUFBekIsR0FBa0M7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUUscUVBQUMsVUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDRixnQkFBSSxFQUFDLENBQU47QUFBUVIsbUJBQU8sRUFBQyxNQUFoQjtBQUF1QlcsMEJBQWMsRUFBQyxVQUF0QztBQUFpRFAsaUJBQUssRUFBQztBQUF2RCxXQUFuQjtBQUFBLGlDQUFtRjtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUE2Qkg7O0dBL0J1QmpCLFc7O09BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQ0MGFhOTk1N2Q0OWMyMDE4ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxuY3Vyc29yOnBvaW50ZXI7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxud2lkdGg6NjUwcHg7XHJcbmhlaWdodDoxNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5cclxuYFxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6NXB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE0MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDowcHg7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo1MHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjkpLHJnYigxMDAsMTAwLDEwMCwwLjApKTtcclxub3BhY2l0eTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMVwiIDogXCIwXCJ9XHJcbmBcclxuXHJcbmNvbnN0IFBvcmZpbGVpbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDo0MHB4O1xyXG5oZWlnaHQ6NDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtwcm9maWxlfSk9PiBwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRjYXJkKHtwcm9maWxlaW1hZ2UsdGl0bGVpbWFnZSx0aXRsZSxzdWJ0aXRsZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxkYXRlLGNvbW1lbnQscmV0d2VldCxsaWtlfSl7XHJcbiAgICBjb25zdFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE91dHNpZGVkaXYgb25Nb3VzZUxlYXZlPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gb25Nb3VzZU92ZXI9eygpPT5zZXRhY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgIDxQcm9maWxlZGl2IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e3Byb2ZpbGVpbWFnZX0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIixtYXJnaW5SaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCJ9fT48c3Bhbj57ZGF0ZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICA8Q29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgPENvbnRlbnRkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixwYWRkaW5nVG9wOlwiN3B4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e3N1YnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L2k+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCJ9fT57cmV0d2VldCAhPT11bmRlZmluZWQgPyByZXR3ZWV0Lmxlbmd0aCA6IFwibG9hZGluZy4uLlwifTwvc3Bhbj48L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PjxpICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvaT48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2xpa2UubGVuZ3RoID8gbGlrZS5sZW5ndGggOiBcImxvYWRpbmcuLi5cIn08L3NwYW4+PC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT48aSAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L2k+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aCA/IGNvbW1lbnQubGVuZ3RoIDogXCJsb2FkaW5nLi4uXCJ9PC9zcGFuPjwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9pPjwvxLBjb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9