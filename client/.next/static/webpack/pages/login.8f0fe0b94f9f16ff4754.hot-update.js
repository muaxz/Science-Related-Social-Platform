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
})(["color:white;width:95%;padding:10px;border:none;outline:none;transition:0.5s;background:transparent;::placeholder{color:white}&:focus{background-color:rgba(0,0,0,0.5);}"]);
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
      lineNumber: 195,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Font+Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 3
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
        lineNumber: 204,
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
              lineNumber: 210,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              value: inputs[register][item]["value"],
              onChange: function onChange(e) {
                return changehandler(e, register, item);
              },
              placeholder: inputs[register][item]["placeholder"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 26
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 39
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: function onClick() {
            return setregister("Register");
          },
          children: "Hesap Olu\u015Ftur"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJCdXR0b24iLCJidXR0b24iLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJMb2dpbiIsInVzZVN0YXRlIiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJFcG9zdGEiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsImljb24iLCLFnmlmcmUiLCJSZWdpc3RlciIsIsSwc2ltIiwiU295aXNpbSIsImlucHV0cyIsInNldGlucHV0cyIsImFjY291bnQiLCJzZXRhY2NvdW50IiwicmVnaXN0ZXIiLCJzZXRyZWdpc3RlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsInR5cGUiLCJpbnB1dHNnZXQiLCJ0YXJnZXQiLCJmbGV4IiwiY29sb3IiLCJkaXNwbGF5Iiwid2lkdGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3UkFBZDtLQUFNRixRO0FBYU4sSUFBTUcsS0FBSyxHQUFDRix5REFBTSxDQUFDRyxLQUFSO0FBQUE7QUFBQTtBQUFBLCtLQUFYO01BQU1ELEs7QUFpQk4sSUFBTUUsU0FBUyxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHVRQUFmO01BQU1HLFM7QUFrQk4sSUFBTUMsV0FBVyxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7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WSx1QkFBUyxFQUFFeEIsTUFBTSxDQUFDSSxRQUFELENBQU4sQ0FBaUJvQixJQUFqQixFQUF1QixNQUF2QjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGVBRUcscUVBQUMsS0FBRDtBQUFPLG1CQUFLLEVBQUV4QixNQUFNLENBQUNJLFFBQUQsQ0FBTixDQUFpQm9CLElBQWpCLEVBQXVCLE9BQXZCLENBQWQ7QUFBK0Msc0JBQVEsRUFBRSxrQkFBQ1gsQ0FBRDtBQUFBLHVCQUFLRCxhQUFhLENBQUNDLENBQUQsRUFBR1QsUUFBSCxFQUFZb0IsSUFBWixDQUFsQjtBQUFBLGVBQXpEO0FBQStGLHlCQUFXLEVBQUV4QixNQUFNLENBQUNJLFFBQUQsQ0FBTixDQUFpQm9CLElBQWpCLEVBQXVCLGFBQXZCO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkg7QUFBQSxhQUFrQkEsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUM7QUFBQSxTQUF0QyxDQUZULGVBU0sscUVBQUMsTUFBRDtBQUFBLHFEQUFrQixxRUFBQyxJQUFEO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEwsZUFVSyxxRUFBQyxNQUFEO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFJbkIsV0FBVyxDQUFDLFVBQUQsQ0FBZjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBNEJILENBekdEOztHQUFNbEIsSzs7T0FBQUEsSztBQTJHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOGYwZmUwYjk0ZjlmMTZmZjQ3NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBheGlvc3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjU2ODUyL3BleGVscy1waG90by00MjU2ODUyLmpwZWdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjk1JTtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG4mOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgXHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbmJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy1yaWdodDoyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy10b3A6MjBweDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDo0MDBweDtcclxuaGVpZ2h0OjU1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbnRyYW5zaXRpb246MC41cztcclxudHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcclxuJjpob3ZlciB7XHJcbiAgICBcclxufVxyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuXHJcbmBcclxuY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbj1zdHlsZWQuaWBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMjBweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvLXYzLnN2Zz92PTFcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBwYWRkaW5nOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcblxyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W2lucHV0cyxzZXRpbnB1dHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBMb2dpbjp7XHJcbiAgICAgICAgICAgIEVwb3N0YTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICDFnmlmcmU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyOntcclxuICAgICAgICAgICAgxLBzaW06e1xyXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBTb3lpc2ltOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiU295IMSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgRXBvc3RhOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRS1wb3N0YVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhciBmYS1lbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIMWeaWZyZTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcblxyXG4gICAgY29uc3RbYWNjb3VudCxzZXRhY2NvdW50XT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtyZWdpc3RlcixzZXRyZWdpc3Rlcl09dXNlU3RhdGUoXCJMb2dpblwiKTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIik7XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1tYWdpY1wiLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIjU2MzQ5MmFkNmY5MTcwMDAwMTAwMDAwMTRhZGI4MDllODk2MzQ2MDJhODk2ZDhlNjJhODUwNDAxXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnBob3Rvcyk7ICBcclxuICAgICAgICAgICAgc2V0Y3VycmVudChyZXMuZGF0YS5waG90b3NbM10uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiBcclxuICAgIH0sW10pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hhbmdlaGFuZGxlcj0oZSx0eXBlLHZhbHVlKT0+e1xyXG4gICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgIGlucHV0c2dldFt0eXBlXVt2YWx1ZV0udmFsdWU9ZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJbWFnZURpdiB1cmxnZXQ9e2N1cnJlbnR1cmx9PlxyXG4gICAgICAgICAgIDxHbG9iYWwvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Rm9udCtOYW1lXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDozfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvPjwvTG9nbz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxwICBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixkaXNwbGF5OnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiLGZsZXg6NH19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLGZsZXg6Nn19PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dHNbcmVnaXN0ZXJdKS5tYXAoaXRlbT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRIb2xkZXIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcImljb25cIl19PjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInZhbHVlXCJdfSBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9ICBwbGFjZWhvbGRlcj17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInBsYWNlaG9sZGVyXCJdfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkdpcmnFnyBZYXAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L0ljb24+PC9CdXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnNldHJlZ2lzdGVyKFwiUmVnaXN0ZXJcIil9Pkhlc2FwIE9sdcWfdHVyPC9CdXR0b24+ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgIDwvV2luZG93RGl2PlxyXG4gICAgICAgPC9JbWFnZURpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==