webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Navigation/Navigation.js":
/*!****************************************************!*\
  !*** ./components/shared/Navigation/Navigation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Navigationtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigationtools */ "./components/shared/Navigation/Navigationtools.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation\\Navigation.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Spinner",
  componentId: "sc-9zri3r-0"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);
_c = Spinner;
var Navbarext = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Navbarext",
  componentId: "sc-9zri3r-1"
})(["position:fixed;top:0;left:0;width:100%;height:60px;padding:5px;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:100;"]);
_c2 = Navbarext;
var InnerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__InnerNavbar",
  componentId: "sc-9zri3r-2"
})(["position:relative;height:100%;margin:auto;display:flex;align-items:center;max-width:1100px;width:100%;justify-content:space-around;"]);
_c3 = InnerNavbar;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-9zri3r-3"
})(["position:relative;margin-right:10px;cursor:pointer;color:", ";"], function (_ref) {
  var clicked = _ref.clicked;
  return clicked ? "lightgrey" : "black";
});
_c4 = Iconholder;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-9zri3r-4"
})(["display:", ";position:relative;@media (max-width:850px){display:", ";}"], function (_ref2) {
  var flex = _ref2.flex;
  return flex ? "flex" : "block";
}, function (_ref3) {
  var diseppear = _ref3.diseppear;
  return diseppear ? "none" : "block";
});
_c5 = InputHolder;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "Navigation__Input",
  componentId: "sc-9zri3r-5"
})(["padding:6px;padding-left:10px;border:none;width:100%;outline:none;border-radius:3px;background-color:#E0E0E0;color:black;::placeholder{color:black;}"]);
_c6 = Input;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-9zri3r-6"
})(["position:absolute;padding:6px;right:15px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-left:1px solid white;color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
_c7 = Iconsecure;
var Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Optionwindow",
  componentId: "sc-9zri3r-7"
})(["position:absolute;top:60px;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;"]);
_c8 = Optionwindow;
var Inneroption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Inneroption",
  componentId: "sc-9zri3r-8"
})([""]);
_c9 = Inneroption;
function Navigation() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      logged = _useContext.logged,
      spinner = _useContext.spinner;

  var _useClickoutside = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      ref = _useClickoutside.ref,
      visible = _useClickoutside.visible,
      setvisible = _useClickoutside.setvisible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      toolnumber = _useState[0],
      settoolnumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      Iconumber = _useState2[0],
      setıconnumber = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    1: {
      className: "fas fa-plus",
      onoff: false,
      lineheight: '35px'
    },
    2: {
      className: "fas fa-bell",
      onoff: false,
      lineheight: '35px'
    },
    3: {
      className: "fas fa-sort-down",
      onoff: false,
      lineheight: '30px'
    }
  }),
      Iconobject = _useState3[0],
      setIconobject = _useState3[1];

  var Iconselect = function Iconselect(iconnumber) {
    var myobject = _objectSpread({}, Iconobject);

    Object.keys(myobject).forEach(function (key) {
      if (iconnumber !== key) {
        myobject[key].onoff = false;
      }
    });

    if (myobject[iconnumber].onoff) {
      myobject[iconnumber].onoff = false;
      setıconnumber(0);
    } else {
      myobject[iconnumber].onoff = true;
      setıconnumber(iconnumber);
    }

    setIconobject(myobject);
    setvisible(true);
  };

  if (!visible) {
    var myobject = _objectSpread({}, Iconobject);

    Object.keys(myobject).forEach(function (key) {
      myobject[key].onoff = false;
    });
    setIconobject(myobject);
    setvisible(true);
    setıconnumber(0);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navbarext, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerNavbar, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex: false,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            profile: "https://evrimagaci.org/public/images/logo/v3.svg?v=1",
            width: "40px",
            height: "40px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Evrim A\u011Fac\u0131"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 54
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        diseppear: true,
        flex: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          placeholder: "Ara"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 21
      }, this) : !logged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            variant: "contained",
            style: {
              marginRight: "10px"
            },
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["AccountCircle"], {
              style: {
                fontSize: "25px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 92
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 20
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        diseppear: false,
        ref: ref,
        flex: true,
        children: [Object.keys(Iconobject).map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
            clicked: Iconobject[item].onoff,
            onClick: function onClick() {
              return Iconselect(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: "block",
                backgroundColor: "#F0F0F0",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                textAlign: "center",
                lineHeight: Iconobject[item].lineheight
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: Iconobject[item].className
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 37
          }, _this);
        }), Iconumber !== 0 && visible == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inneroption, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigationtools__WEBPACK_IMPORTED_MODULE_5__["default"], {
              optnumber: Iconumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 9
  }, this);
}

_s(Navigation, "ouDb9FUTf3ZfHjEXavDuYyl0erM=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c10 = Navigation;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Spinner");
$RefreshReg$(_c2, "Navbarext");
$RefreshReg$(_c3, "InnerNavbar");
$RefreshReg$(_c4, "Iconholder");
$RefreshReg$(_c5, "InputHolder");
$RefreshReg$(_c6, "Input");
$RefreshReg$(_c7, "Iconsecure");
$RefreshReg$(_c8, "Optionwindow");
$RefreshReg$(_c9, "Inneroption");
$RefreshReg$(_c10, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZGlzZXBwZWFyIiwiSW5wdXQiLCJpbnB1dCIsIkljb25zZWN1cmUiLCJpIiwiT3B0aW9ud2luZG93IiwiSW5uZXJvcHRpb24iLCJOYXZpZ2F0aW9uIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwibG9nZ2VkIiwic3Bpbm5lciIsInVzZUNsaWNrb3V0c2lkZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwidXNlU3RhdGUiLCJ0b29sbnVtYmVyIiwic2V0dG9vbG51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiSWNvbm9iamVjdCIsInNldEljb25vYmplY3QiLCJJY29uc2VsZWN0IiwiaWNvbm51bWJlciIsIm15b2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwibWFwIiwiaXRlbSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQyxtRUFBSCxnRUFBZjtBQVNBLElBQU1DLE9BQU8sR0FBR0Ms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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlFSDs7R0FwSXVCWixVO1VBSWFLLDJEOzs7T0FKYkwsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNzdmZGYyMzMzOGFkZGZjYzhlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tICcuLi8uLi8uLi9ob29rcy9DbGlrY291dGlzZGUnO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlLCBQZXJzb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjEwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwibGlnaHRncmV5XCIgOiBcImJsYWNrXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmbGV4fSk9PmZsZXggPyBcImZsZXhcIiA6IFwiYmxvY2tcIn07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtkaXNlcHBlYXJ9KT0+ZGlzZXBwZWFyID8gXCJub25lXCIgOiBcImJsb2NrXCJ9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nOjZweDtcclxucmlnaHQ6MTVweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7XHJcbmJvcmRlci1sZWZ0OjFweCBzb2xpZCB3aGl0ZTtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbmhlaWdodDoxMDAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuXHJcbmBcclxuY29uc3QgSW5uZXJvcHRpb249c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXJ9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbdG9vbG51bWJlcixzZXR0b29sbnVtYmVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW0ljb25vYmplY3Qsc2V0SWNvbm9iamVjdF09dXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzVweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLWJlbGxcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzVweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4J1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXZpc2libGUpe1xyXG5cclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcbiAgICAgICAgT2JqZWN0LmtleXMobXlvYmplY3QpLmZvckVhY2goa2V5ID0+eyBcclxuICAgICAgICAgICAgbXlvYmplY3Rba2V5XS5vbm9mZj1mYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7XHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTsgXHJcbiAgICAgICAgc2V0xLFjb25udW1iZXIoMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dCA+XHJcbiAgICAgICAgICAgIDxJbm5lck5hdmJhcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvL3YzLnN2Zz92PTFcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT48c3Bhbj5FdnJpbSBBxJ9hY8SxPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGRpc2VwcGVhcj17dHJ1ZX0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkFyYVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB7ICAhc3Bpbm5lciA/IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIWxvZ2dlZCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fSBlbmRJY29uPXs8QWNjb3VudENpcmNsZSBzdHlsZT17e2ZvbnRTaXplOlwiMjVweFwifX0+PC9BY2NvdW50Q2lyY2xlPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkthecSxdCBPbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgZGlzZXBwZWFyPXtmYWxzZX0gcmVmPXtyZWZ9IGZsZXg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhJY29ub2JqZWN0KS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgY2xpY2tlZD17SWNvbm9iamVjdFtpdGVtXS5vbm9mZn0gb25DbGljaz17KCk9Pkljb25zZWxlY3QoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIixiYWNrZ3JvdW5kQ29sb3I6XCIjRjBGMEYwXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6SWNvbm9iamVjdFtpdGVtXS5saW5laGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtJY29ub2JqZWN0W2l0ZW1dLmNsYXNzTmFtZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix3aWR0aDpcIjIwcHhcIixkaXNwbGF5OlwiYmxvY2tcIixoZWlnaHQ6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjIwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fT4zPC9zcGFuPiA6IFwiXCIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29udW1iZXIgIT09IDAgJiYgdmlzaWJsZSA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdnRvb2xzIG9wdG51bWJlcj17SWNvbnVtYmVyfT48L05hdnRvb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0lubmVyTmF2YmFyPlxyXG4gICAgICAgIDwvTmF2YmFyZXh0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=