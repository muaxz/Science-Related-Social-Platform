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
})(["position:relative;height:100%;margin:auto;display:flex;align-items:center;max-width:1100px;width:100%;justify-content:space-between;"]);
_c3 = InnerNavbar;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-9zri3r-3"
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:4px;border-radius:50%;transition:0.5s;&:active{background-color:#00b4d8;}"], function (_ref) {
  var clicked = _ref.clicked;
  return clicked ? "#00b4d8" : "";
});
_c4 = Iconholder;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-9zri3r-4"
})(["display:", ";position:relative;@media (max-width:850px){display:", ";}"], function (_ref2) {
  var flex = _ref2.flex;
  return flex;
}, function (_ref3) {
  var flex2 = _ref3.flex2;
  return flex2;
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
        flex: "block",
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
            lineNumber: 193,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Evrim A\u011Fac\u0131"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 54
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex2: "none",
        flex: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          placeholder: "Ara"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
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
              lineNumber: 212,
              columnNumber: 92
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 20
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex2: "flex",
        ref: ref,
        flex: "flex",
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
                lineNumber: 227,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 37
          }, _this);
        }), Iconumber !== 0 && visible == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inneroption, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigationtools__WEBPACK_IMPORTED_MODULE_5__["default"], {
              optnumber: Iconumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJJbm5lcm9wdGlvbiIsIk5hdmlnYXRpb24iLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJ1c2VTdGF0ZSIsInRvb2xudW1iZXIiLCJzZXR0b29sbnVtYmVyIiwiSWNvbnVtYmVyIiwic2V0xLFjb25udW1iZXIiLCJjbGFzc05hbWUiLCJvbm9mZiIsImxpbmVoZWlnaHQiLCJJY29ub2JqZWN0Iiwic2V0SWNvbm9iamVjdCIsIkljb25zZWxlY3QiLCJpY29ubnVtYmVyIiwibXlvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXAiLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG1FQUFILGdFQUFmO0FBU0EsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUNFSixTQURGLENBQWI7S0FBTUUsTztBQWNOLElBQU1HLFNBQVMsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrSUFBZjtNQUFNQyxTO0FBV04sSUFBTUMsV0FBVyxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDRJQUFqQjtNQUFNRSxXO0FBWU4sSUFBTUMsVUFBVSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1LQUlHO0FBQUEsTUFBRUksT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FBYUEsT0FBTyxHQUFHLFNBQUgsR0FBZSxFQUFuQztBQUFBLENBSkgsQ0FBaEI7TUFBTUQsVTtBQWFOLElBQU1FLFdBQVcsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrRUFDUDtBQUFBLE1BQUVNLElBQUYsU0FBRUEsSUFBRjtBQUFBLFNBQVVBLElBQVY7QUFBQSxDQURPLEVBSUg7QUFBQSxNQUFFQyxLQUFGLFNBQUVBLEtBQUY7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FKRyxDQUFqQjtNQUFNRixXO0FBUU4sSUFBTUcsS0FBSyxHQUFDVCx5REFBTSxDQUFDVSxLQUFSO0FBQUE7QUFBQTtBQUFBLDRKQUFYO01BQU1ELEs7QUFhTixJQUFNRSxVQUFVLEdBQUNYLHlEQUFNLENBQUNZLENBQVI7QUFBQTtBQUFBO0FBQUEsc01BQWhCO01BQU1ELFU7QUFZTixJQUFNRSxZQUFZLEdBQUNiLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMk5BQWxCO01BQU1ZLFk7QUFXTixJQUFNQyxXQUFXLEdBQUNkLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTWEsVztBQUtTLFNBQVNDLFVBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFHVEMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FIRDtBQUFBLE1BR3pCQyxNQUh5QixlQUd6QkEsTUFIeUI7QUFBQSxNQUdsQkMsT0FIa0IsZUFHbEJBLE9BSGtCOztBQUFBLHlCQUlDQyxtRUFBZSxFQUpoQjtBQUFBLE1BSXpCQyxHQUp5QixvQkFJekJBLEdBSnlCO0FBQUEsTUFJckJDLE9BSnFCLG9CQUlyQkEsT0FKcUI7QUFBQSxNQUliQyxVQUphLG9CQUliQSxVQUphOztBQUFBLGtCQUtDQyxzREFBUSxDQUFDLENBQUQsQ0FMVDtBQUFBLE1BS3pCQyxVQUx5QjtBQUFBLE1BS2RDLGFBTGM7O0FBQUEsbUJBTUFGLHNEQUFRLENBQUMsQ0FBRCxDQU5SO0FBQUEsTUFNekJHLFNBTnlCO0FBQUEsTUFNZkMsYUFOZTs7QUFBQSxtQkFPQ0osc0RBQVEsQ0FBQztBQUN0QyxPQUFFO0FBQ0FLLGVBQVMsRUFBQyxhQURWO0FBRUFDLFdBQUssRUFBQyxLQUZOO0FBR0FDLGdCQUFVLEVBQUM7QUFIWCxLQURvQztBQU10QyxPQUFFO0FBQ0FGLGVBQVMsRUFBQyxhQURWO0FBRUFDLFdBQUssRUFBQyxLQUZOO0FBR0FDLGdCQUFVLEVBQUM7QUFIWCxLQU5vQztBQVd0QyxPQUFFO0FBQ0FGLGVBQVMsRUFBQyxrQkFEVjtBQUVBQyxXQUFLLEVBQUMsS0FGTjtBQUdBQyxnQkFBVSxFQUFDO0FBSFg7QUFYb0MsR0FBRCxDQVBUO0FBQUEsTUFPekJDLFVBUHlCO0FBQUEsTUFPZEMsYUFQYzs7QUF5QmhDLE1BQU1DLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLFVBQUQsRUFBYztBQUUzQixRQUFNQyxRQUFRLHFCQUFLSixVQUFMLENBQWQ7O0FBRUFLLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaLEVBQXNCRyxPQUF0QixDQUE4QixVQUFBQyxHQUFHLEVBQUc7QUFDaEMsVUFBR0wsVUFBVSxLQUFLSyxHQUFsQixFQUFzQjtBQUNsQkosZ0JBQVEsQ0FBQ0ksR0FBRCxDQUFSLENBQWNWLEtBQWQsR0FBb0IsS0FBcEI7QUFDSDtBQUVKLEtBTEQ7O0FBT0EsUUFBR00sUUFBUSxDQUFDRCxVQUFELENBQVIsQ0FBcUJMLEtBQXhCLEVBQThCO0FBRTFCTSxjQUFRLENBQUNELFVBQUQsQ0FBUixDQUFxQkwsS0FBckIsR0FBMkIsS0FBM0I7QUFDQUYsbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFFSCxLQUxELE1BTUk7QUFFQVEsY0FBUSxDQUFDRCxVQUFELENBQVIsQ0FBcUJMLEtBQXJCLEdBQTJCLElBQTNCO0FBQ0FGLG1CQUFhLENBQUNPLFVBQUQsQ0FBYjtBQUVIOztBQUVERixpQkFBYSxDQUFDRyxRQUFELENBQWI7QUFDQWIsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUVILEdBM0JEOztBQTZCQSxNQUFHLENBQUNELE9BQUosRUFBWTtBQUVSLFFBQU1jLFFBQVEscUJBQUtKLFVBQUwsQ0FBZDs7QUFDQUssVUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JHLE9BQXRCLENBQThCLFVBQUFDLEdBQUcsRUFBRztBQUNoQ0osY0FBUSxDQUFDSSxHQUFELENBQVIsQ0FBY1YsS0FBZCxHQUFvQixLQUFwQjtBQUNILEtBRkQ7QUFJQUcsaUJBQWEsQ0FBQ0csUUFBRCxDQUFiO0FBQ0FiLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUssaUJBQWEsQ0FBQyxDQUFELENBQWI7QUFFSDs7QUFFRCxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0kscUVBQUMsV0FBRDtBQUFBLDhCQUNJLHFFQUFDLFdBQUQ7QUFBYSxZQUFJLEVBQUUsT0FBbkI7QUFBQSwrQkFDRTtBQUFLLGVBQUssRUFBRTtBQUFDYSxtQkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHNCQUFVLEVBQUM7QUFBM0IsV0FBWjtBQUFBLGtDQUNFLHFFQUFDLHFFQUFEO0FBQWMsbUJBQU8sRUFBQyxzREFBdEI7QUFBNkUsaUJBQUssRUFBQyxNQUFuRjtBQUEwRixrQkFBTSxFQUFDO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFHRTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0Msd0JBQVUsRUFBQztBQUFaLGFBQVo7QUFBQSxtQ0FBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSSxxRUFBQyxXQUFEO0FBQWMsYUFBSyxFQUFFLE1BQXJCO0FBQTZCLFlBQUksRUFBRSxLQUFuQztBQUFBLGdDQUNJLHFFQUFDLEtBQUQ7QUFBTyxxQkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxVQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLEVBWU8sQ0FBQ3hCLE9BQUQsZ0JBRUMscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsR0FNQSxDQUFDRCxNQUFELGdCQUVBLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSyxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQUEsaUNBQ0MscUVBQUMsd0RBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGlCQUFLLEVBQUU7QUFBQzBCLHlCQUFXLEVBQUM7QUFBYixhQUFuQztBQUF5RCxtQkFBTyxlQUFFLHFFQUFDLGlFQUFEO0FBQWUsbUJBQUssRUFBRTtBQUFDQyx3QkFBUSxFQUFDO0FBQVY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURMLGVBTUkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxnQkFhSyxxRUFBQyxXQUFEO0FBQWMsYUFBSyxFQUFFLE1BQXJCO0FBQTZCLFdBQUcsRUFBRXhCLEdBQWxDO0FBQXVDLFlBQUksRUFBRSxNQUE3QztBQUFBLG1CQUVJZ0IsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFVBQVosRUFBd0JjLEdBQXhCLENBQTRCLFVBQUNDLElBQUQsRUFBUTtBQUNoQyw4QkFDSSxxRUFBQyxVQUFEO0FBQVksbUJBQU8sRUFBRWYsVUFBVSxDQUFDZSxJQUFELENBQVYsQ0FBaUJqQixLQUF0QztBQUE2QyxtQkFBTyxFQUFFO0FBQUEscUJBQUlJLFVBQVUsQ0FBQ2EsSUFBRCxDQUFkO0FBQUEsYUFBdEQ7QUFBQSxtQ0FDSTtBQUFNLG1CQUFLLEVBQUU7QUFBQ04sdUJBQU8sRUFBQyxPQUFUO0FBQWlCTywrQkFBZSxFQUFDLFNBQWpDO0FBQTJDQyw0QkFBWSxFQUFDLEtBQXhEO0FBQThEQyxxQkFBSyxFQUFDLE1BQXBFO0FBQTJFQyxzQkFBTSxFQUFDLE1BQWxGO0FBQXlGQyx5QkFBUyxFQUFDLFFBQW5HO0FBQTRHQywwQkFBVSxFQUFDckIsVUFBVSxDQUFDZSxJQUFELENBQVYsQ0FBaUJoQjtBQUF4SSxlQUFiO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFFQyxVQUFVLENBQUNlLElBQUQsQ0FBVixDQUFpQmxCO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVVILFNBWEQsQ0FGSixFQWlCSUYsU0FBUyxLQUFLLENBQWQsSUFBbUJMLE9BQU8sSUFBSSxJQUE5QixnQkFDQSxxRUFBQyxZQUFEO0FBQUEsaUNBQ1EscUVBQUMsV0FBRDtBQUFBLG1DQUNBLHFFQUFDLHdEQUFEO0FBQVUsdUJBQVMsRUFBRUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEdBS2tCLElBdEJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUVIOztHQXBJdUJaLFU7VUFJYUssMkQ7OztPQUpiTCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5MDg3MzgyNzhmMGIxYzJiOWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IE5hdnRvb2xzIGZyb20gXCIuL05hdmlnYXRpb250b29sc1wiO1xyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIFBlcnNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyZXh0PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NjBweDtcclxucGFkZGluZzo1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbnotaW5kZXg6MTAwO1xyXG5gXHJcbmNvbnN0IElubmVyTmF2YmFyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXgtd2lkdGg6MTEwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7Y2xpY2tlZH0pPT5jbGlja2VkID8gXCIjMDBiNGQ4XCIgOiBcIlwifTtcclxucGFkZGluZzo0cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbiY6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjRkODtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmbGV4fSk9PmZsZXh9O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuQG1lZGlhIChtYXgtd2lkdGg6ODUwcHgpe1xyXG4gICAgZGlzcGxheTokeyh7ZmxleDJ9KT0+ZmxleDJ9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nOjZweDtcclxucmlnaHQ6MTVweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7XHJcbmJvcmRlci1sZWZ0OjFweCBzb2xpZCB3aGl0ZTtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbmhlaWdodDoxMDAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuXHJcbmBcclxuY29uc3QgSW5uZXJvcHRpb249c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXJ9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbdG9vbG51bWJlcixzZXR0b29sbnVtYmVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW0ljb25vYmplY3Qsc2V0SWNvbm9iamVjdF09dXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzVweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLWJlbGxcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzVweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4J1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXZpc2libGUpe1xyXG5cclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcbiAgICAgICAgT2JqZWN0LmtleXMobXlvYmplY3QpLmZvckVhY2goa2V5ID0+eyBcclxuICAgICAgICAgICAgbXlvYmplY3Rba2V5XS5vbm9mZj1mYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7XHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTsgXHJcbiAgICAgICAgc2V0xLFjb25udW1iZXIoMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dCA+XHJcbiAgICAgICAgICAgIDxJbm5lck5hdmJhcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtcImJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby92My5zdmc/dj0xXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwifX0+PHNwYW4+RXZyaW0gQcSfYWPEsTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJub25lXCJ9IGZsZXg9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJBcmFcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgeyAgIXNwaW5uZXIgPyBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICFsb2dnZWQgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwifX0gZW5kSWNvbj17PEFjY291bnRDaXJjbGUgc3R5bGU9e3tmb250U2l6ZTpcIjI1cHhcIn19PjwvQWNjb3VudENpcmNsZT59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5LYXnEsXQgT2w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJmbGV4XCJ9IHJlZj17cmVmfSBmbGV4PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEljb25vYmplY3QpLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBjbGlja2VkPXtJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmfSBvbkNsaWNrPXsoKT0+SWNvbnNlbGVjdChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiNGMEYwRjBcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpJY29ub2JqZWN0W2l0ZW1dLmxpbmVoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e0ljb25vYmplY3RbaXRlbV0uY2xhc3NOYW1lfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjxzcGFuIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHdpZHRoOlwiMjBweFwiLGRpc3BsYXk6XCJibG9ja1wiLGhlaWdodDpcIjIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMjBweFwiLGJhY2tncm91bmRDb2xvcjpcInJlZFwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIn19PjM8L3NwYW4+IDogXCJcIiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb251bWJlciAhPT0gMCAmJiB2aXNpYmxlID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2dG9vbHMgb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSW5uZXJOYXZiYXI+XHJcbiAgICAgICAgPC9OYXZiYXJleHQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==