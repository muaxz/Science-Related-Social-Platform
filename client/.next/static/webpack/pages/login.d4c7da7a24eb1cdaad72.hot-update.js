webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n *{\n     margin:0px;\n     padding:0px;\n     font-family: 'Oswald', sans-serif;\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "login__ImageDiv",
  componentId: "sc-1x3o0wi-0"
})(["background-image:url(\"https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg\");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;"]);
_c = ImageDiv;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1x3o0wi-1"
})(["color:white;width:95%;padding:10px;padding-left:20px;border:none;outline:none;transition:0.5s;background:transparent;::placeholder{color:white}&:focus{background-color:rgba(0,0,0,0.5);}"]);
_c2 = Input;
var WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["border:1px solid white;display:flex;padding-right:20px;padding-left:20px;padding-top:20px;flex-direction:column;align-items:center;text-align:center;width:400px;height:550px;background-color:rgba(0,0,0,0.6);transition:0.5s;transform:rotate(0deg);&:hover{}"]);
_c3 = WindowDiv;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["position:relative;width:100%;border-bottom:1px solid white;padding:5px;margin-bottom:20px;"]);
_c4 = InputHolder;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1x3o0wi-4"
})(["margin-top:10px;margin-left:10px;width:150px;padding:10px;outline:none;border:none;border-radius:8px;color:white;background:transparent;transition:0.3s;border:1px solid white;&:hover{background-color:rgba(0,0,0,0.3);cursor:pointer;}"]);
_c5 = Button;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].i.withConfig({
  displayName: "login__Icon",
  componentId: "sc-1x3o0wi-5"
})(["margin-left:10px;"]);
_c6 = Icon;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].i.withConfig({
  displayName: "login__Iconsecure",
  componentId: "sc-1x3o0wi-6"
})(["position:absolute;border:1px solid white;background-color:black;padding:7px;left:-20px;color:white;top:50%;transform:translate(50%,-50%);"]);
_c7 = Iconsecure;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "login__Logo",
  componentId: "sc-1x3o0wi-7"
})(["width:100px;height:100px;border-radius:50%;background-image:url(\"https://evrimagaci.org/public/images/logo-v3.svg?v=1\");background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c8 = Logo;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
_c9 = Global;

var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      currenturl = _useState[0],
      setcurrent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Login: {
      Eposta: {
        placeholder: "E-posta",
        func: "Login",
        value: "",
        icon: "far fa-envelope"
      },
      Şifre: {
        placeholder: "Şifre",
        func: "Login",
        value: "",
        icon: "fas fa-unlock-alt"
      }
    },
    Register: {
      İsim: {
        placeholder: "İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user"
      },
      Soyisim: {
        placeholder: "Soy İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user"
      },
      Eposta: {
        placeholder: "E-posta",
        func: "Register",
        value: "",
        icon: "far fa-envelope"
      },
      Şifre: {
        placeholder: "Şifre",
        func: "Register",
        value: "",
        icon: "fas fa-unlock-alt"
      }
    }
  }),
      inputs = _useState2[0],
      setinputs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      account = _useState3[0],
      setaccount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Login"),
      register = _useState4[0],
      setregister = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log("rendered");
    var random = Math.floor(Math.random() * 15);
    /*axioss.get("https://api.pexels.com/v1/search?query=magic",{
     headers:{
        "Authorization":"563492ad6f917000010000014adb809e89634602a896d8e62a850401",
     }
    })
    .then((res)=>{
         console.log(res.data.photos);  
         setcurrent(res.data.photos[3].src.original);
     })
     */
  }, []);

  var changehandler = function changehandler(e, type, value) {
    var inputsget = _objectSpread({}, inputs);

    inputsget[type][value].value = e.target.value;
    setinputs(inputsget);
    console.log(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
    urlget: currenturl,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Font+Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 3
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          color: "white",
          display: register == "Register" ? "none" : "block",
          flex: 4
        },
        children: "Hakikatin temsilcisinin en az oldu\u011Fu zaman, onu dile getirmenin tehlikeli oldu\u011Fu zaman de\u011Fil, can s\u0131k\u0131c\u0131 oldu\u011Fu zamand\u0131r."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "80%",
          flex: 6
        },
        children: [Object.keys(inputs[register]).map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
              className: inputs[register][item]["icon"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              value: inputs[register][item]["value"],
              onChange: function onChange(e) {
                return changehandler(e, register, item);
              },
              placeholder: inputs[register][item]["placeholder"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 26
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 39
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: function onClick() {
            return setregister("Register");
          },
          children: "Hesap Olu\u015Ftur"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 8
  }, _this);
};

_s(Login, "yAmhpgg6cZSSlK+GETPyX9k5jGc=");

_c10 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "ImageDiv");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "WindowDiv");
$RefreshReg$(_c4, "InputHolder");
$RefreshReg$(_c5, "Button");
$RefreshReg$(_c6, "Icon");
$RefreshReg$(_c7, "Iconsecure");
$RefreshReg$(_c8, "Logo");
$RefreshReg$(_c9, "Global");
$RefreshReg$(_c10, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJCdXR0b24iLCJidXR0b24iLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJMb2dpbiIsInVzZVN0YXRlIiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJFcG9zdGEiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsImljb24iLCLFnmlmcmUiLCJSZWdpc3RlciIsIsSwc2ltIiwiU295aXNpbSIsImlucHV0cyIsInNldGlucHV0cyIsImFjY291bnQiLCJzZXRhY2NvdW50IiwicmVnaXN0ZXIiLCJzZXRyZWdpc3RlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsInR5cGUiLCJpbnB1dHNnZXQiLCJ0YXJnZXQiLCJmbGV4IiwiY29sb3IiLCJkaXNwbGF5Iiwid2lkdGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3UkFBZDtLQUFNRixRO0FBYU4sSUFBTUcsS0FBSyxHQUFDRix5REFBTSxDQUFDRyxLQUFSO0FBQUE7QUFBQTtBQUFBLGlNQUFYO01BQU1ELEs7QUFrQk4sSUFBTUUsU0FBUyxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHVRQUFmO01BQU1HLFM7QUFrQk4sSUFBTUMsV0FBVyxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7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WSx1QkFBUyxFQUFFeEIsTUFBTSxDQUFDSSxRQUFELENBQU4sQ0FBaUJvQixJQUFqQixFQUF1QixNQUF2QjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGVBRUcscUVBQUMsS0FBRDtBQUFPLG1CQUFLLEVBQUV4QixNQUFNLENBQUNJLFFBQUQsQ0FBTixDQUFpQm9CLElBQWpCLEVBQXVCLE9BQXZCLENBQWQ7QUFBK0Msc0JBQVEsRUFBRSxrQkFBQ1gsQ0FBRDtBQUFBLHVCQUFLRCxhQUFhLENBQUNDLENBQUQsRUFBR1QsUUFBSCxFQUFZb0IsSUFBWixDQUFsQjtBQUFBLGVBQXpEO0FBQStGLHlCQUFXLEVBQUV4QixNQUFNLENBQUNJLFFBQUQsQ0FBTixDQUFpQm9CLElBQWpCLEVBQXVCLGFBQXZCO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkg7QUFBQSxhQUFrQkEsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUM7QUFBQSxTQUF0QyxDQUZULGVBU0sscUVBQUMsTUFBRDtBQUFBLHFEQUFrQixxRUFBQyxJQUFEO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEwsZUFVSyxxRUFBQyxNQUFEO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFJbkIsV0FBVyxDQUFDLFVBQUQsQ0FBZjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBNEJILENBekdEOztHQUFNbEIsSzs7T0FBQUEsSztBQTJHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDRjN2RhN2EyNGViMWNkYWFkNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBheGlvc3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjU2ODUyL3BleGVscy1waG90by00MjU2ODUyLmpwZWdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjk1JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuJjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIFxyXG59XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvd0Rpdj1zdHlsZWQuZGl2YFxyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NDAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiY6aG92ZXIge1xyXG4gICAgXHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcblxyXG5gXHJcbmNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG5cclxubWFyZ2luLXRvcDoxMHB4O1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG53aWR0aDoxNTBweDtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6d2hpdGU7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnRyYW5zaXRpb246MC4zcztcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxucGFkZGluZzo3cHg7XHJcbmxlZnQ6LTIwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgTG9nbz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuaGVpZ2h0OjEwMHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby12My5zdmc/dj0xXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5gXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG5cclxuICAgIGNvbnN0W2N1cnJlbnR1cmwsc2V0Y3VycmVudF09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdFtpbnB1dHMsc2V0aW5wdXRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBFcG9zdGE6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgxZ5pZnJlOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3Rlcjp7XHJcbiAgICAgICAgICAgIMSwc2ltOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU295aXNpbTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIlNveSDEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEVwb3N0YTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICDFnmlmcmU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfX0pO1xyXG5cclxuICAgIGNvbnN0W2FjY291bnQsc2V0YWNjb3VudF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbcmVnaXN0ZXIsc2V0cmVnaXN0ZXJdPXVzZVN0YXRlKFwiTG9naW5cIik7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpO1xyXG5cclxuICAgICAgIGNvbnN0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSk7XHJcblxyXG4gICAgICAgLypheGlvc3MuZ2V0KFwiaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9bWFnaWNcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zWzNdLnNyYy5vcmlnaW5hbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGUsdHlwZSx2YWx1ZSk9PntcclxuICAgICAgICAgY29uc3QgaW5wdXRzZ2V0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgICBpbnB1dHNnZXRbdHlwZV1bdmFsdWVdLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SW1hZ2VEaXYgdXJsZ2V0PXtjdXJyZW50dXJsfT5cclxuICAgICAgICAgICA8R2xvYmFsLz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZvbnQrTmFtZVwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgIDxXaW5kb3dEaXY+ICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6M319PlxyXG4gICAgICAgICAgICAgICAgICA8TG9nbz48L0xvZ28+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8cCAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsZGlzcGxheTpyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixmbGV4OjR9fT5IYWtpa2F0aW4gdGVtc2lsY2lzaW5pbiBlbiBheiBvbGR1xJ91IHphbWFuLCBvbnUgZGlsZSBnZXRpcm1lbmluIHRlaGxpa2VsaSBvbGR1xJ91IHphbWFuIGRlxJ9pbCwgY2FuIHPEsWvEsWPEsSBvbGR1xJ91IHphbWFuZMSxci48L3A+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI4MCVcIixmbGV4OjZ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJpY29uXCJdfT48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJ2YWx1ZVwiXX0gb25DaGFuZ2U9eyhlKT0+Y2hhbmdlaGFuZGxlcihlLHJlZ2lzdGVyLGl0ZW0pfSAgcGxhY2Vob2xkZXI9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJwbGFjZWhvbGRlclwiXX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5HaXJpxZ8gWWFwIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9JY29uPjwvQnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRyZWdpc3RlcihcIlJlZ2lzdGVyXCIpfT5IZXNhcCBPbHXFn3R1cjwvQnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICA8L1dpbmRvd0Rpdj5cclxuICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=