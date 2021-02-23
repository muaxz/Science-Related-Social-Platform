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
      like = _ref3.like,
      showwindow = _ref3.showwindow;

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
          onClick: function onClick() {
            return showwindow(retweet);
          },
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-retweet fa-sm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 81
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginLeft: "5px"
            },
            children: retweet.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 121
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
          onClick: function onClick() {
            return showwindow(like);
          },
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
            columnNumber: 78
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginLeft: "5px",
              color: ""
            },
            children: like.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 141
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
            children: comment.length
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJhY3RpdmUiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiQ29udGVudGNhcmQiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsInVzZVN0YXRlIiwic2V0YWN0aXZlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJmbGV4IiwibGVuZ3RoIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZIQUFoQjtLQUFNRixVO0FBVU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9CQUFkO01BQU1DLFE7QUFHTixJQUFNQyxXQUFXLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZUFBakI7TUFBTUUsVztBQUdOLElBQU1DLGFBQWEsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwyR0FBbkI7TUFBTUcsYTtBQU9OLElBQU1DLFVBQVUsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FB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ZXMvaW5kZXguNzY0ZTUzMTdhNDkyNmIzNzYzYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxuY3Vyc29yOnBvaW50ZXI7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxud2lkdGg6NjUwcHg7XHJcbmhlaWdodDoxNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5cclxuYFxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6NXB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE0MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDowcHg7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo1MHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjkpLHJnYigxMDAsMTAwLDEwMCwwLjApKTtcclxub3BhY2l0eTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMVwiIDogXCIwXCJ9XHJcbmBcclxuXHJcbmNvbnN0IFBvcmZpbGVpbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDo0MHB4O1xyXG5oZWlnaHQ6NDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtwcm9maWxlfSk9PiBwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRjYXJkKHtwcm9maWxlaW1hZ2UsdGl0bGVpbWFnZSx0aXRsZSxzdWJ0aXRsZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxkYXRlLGNvbW1lbnQscmV0d2VldCxsaWtlLHNob3d3aW5kb3d9KXtcclxuICAgIGNvbnN0W2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiBvbk1vdXNlTGVhdmU9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBvbk1vdXNlT3Zlcj17KCk9PnNldGFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgPFByb2ZpbGVkaXYgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19Pnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIn19PjxzcGFuPntkYXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8Q29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLHBhZGRpbmdUb3A6XCI3cHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD57c3VidGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgb25DbGljaz17KCk9PnNob3d3aW5kb3cocmV0d2VldCl9IHN0eWxlPXt7ZmxleDoxfX0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L2k+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCJ9fT57cmV0d2VldC5sZW5ndGh9PC9zcGFuPjwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGxpa2UpfSBzdHlsZT17e2ZsZXg6MX19PjxpICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvaT48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2xpa2UubGVuZ3RofTwvc3Bhbj48L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PjxpICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhcyBmYS1jb21tZW50LWFsdCBmYS1zbVwiPjwvaT48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj48L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvaT48L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==