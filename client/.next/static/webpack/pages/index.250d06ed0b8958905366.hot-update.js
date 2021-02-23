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
            children: retweet ? retweet.length : "loading..."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJhY3RpdmUiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiQ29udGVudGNhcmQiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwidXNlU3RhdGUiLCJzZXRhY3RpdmUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsImZsZXgiLCJsZW5ndGgiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkhBQWhCO0tBQU1GLFU7QUFVTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7TUFBTUMsUTtBQUdOLElBQU1DLFdBQVcsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxlQUFqQjtNQUFNRSxXO0FBR04sSUFBTUMsYUFBYSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJHQUFuQjtNQUFNRyxhO0FBT04sSUFBTUMsVUFBVSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFCQUFo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LE1BQUwsR0FBY1osSUFBSSxDQUFDWSxNQUFuQixHQUE0QjtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxVQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNELGdCQUFJLEVBQUM7QUFBTixXQUFuQjtBQUFBLGtDQUE2QjtBQUFJLGlCQUFLLEVBQUU7QUFBQ0osbUJBQUssRUFBQztBQUFQLGFBQVg7QUFBNEIscUJBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE3QixlQUFrRztBQUFNLGlCQUFLLEVBQUU7QUFBQ0Qsd0JBQVUsRUFBQyxLQUFaO0FBQWtCQyxtQkFBSyxFQUFDO0FBQXhCLGFBQWI7QUFBQSxzQkFBMkNULE9BQU8sQ0FBQ2MsTUFBUixHQUFpQmQsT0FBTyxDQUFDYyxNQUF6QixHQUFrQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSxxRUFBQyxVQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNELGdCQUFJLEVBQUMsQ0FBTjtBQUFRUixtQkFBTyxFQUFDLE1BQWhCO0FBQXVCVSwwQkFBYyxFQUFDLFVBQXRDO0FBQWlETixpQkFBSyxFQUFDO0FBQXZELFdBQW5CO0FBQUEsaUNBQW1GO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQTZCSDs7R0EvQnVCakIsVzs7T0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTBkMDZlZDBiODk1ODkwNTM2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcblxyXG5jdXJzb3I6cG9pbnRlcjtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6ZmxleDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG53aWR0aDo2NTBweDtcclxuaGVpZ2h0OjE1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjVweDtcclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcblxyXG5gXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxucGFkZGluZzo1cHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTQwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjBweDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjUwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOSkscmdiKDEwMCwxMDAsMTAwLDAuMCkpO1xyXG5vcGFjaXR5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCIxXCIgOiBcIjBcIn1cclxuYFxyXG5cclxuY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjQwcHg7XHJcbmhlaWdodDo0MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe3Byb2ZpbGV9KT0+IHByb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudGNhcmQoe3Byb2ZpbGVpbWFnZSx0aXRsZWltYWdlLHRpdGxlLHN1YnRpdGxlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2V9KXtcclxuICAgIGNvbnN0W2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiBvbk1vdXNlTGVhdmU9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBvbk1vdXNlT3Zlcj17KCk9PnNldGFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgPFByb2ZpbGVkaXYgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19Pnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIn19PjxzcGFuPntkYXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8Q29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLHBhZGRpbmdUb3A6XCI3cHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD57c3VidGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvaT48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIn19PntyZXR3ZWV0ID8gcmV0d2VldC5sZW5ndGggOiBcImxvYWRpbmcuLi5cIn08L3NwYW4+PC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT48aSAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L2k+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19PntsaWtlLmxlbmd0aCA/IGxpa2UubGVuZ3RoIDogXCJsb2FkaW5nLi4uXCJ9PC9zcGFuPjwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+PGkgIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9pPjxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGggPyBjb21tZW50Lmxlbmd0aCA6IFwibG9hZGluZy4uLlwifTwvc3Bhbj48L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvaT48L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==