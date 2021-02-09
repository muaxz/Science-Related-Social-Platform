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
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Api/Api */ "./Api/Api.js");




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







var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__ImageDiv",
  componentId: "sc-1x3o0wi-0"
})(["background-image:url(\"https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg\");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;"]);
_c = ImageDiv;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1x3o0wi-1"
})(["color:white;width:88%;padding:10px;padding-left:35px;border:none;outline:none;transition:0.5s;background:transparent;::placeholder{color:white}&:focus{background-color:rgba(0,0,0,0.5);}"]);
_c2 = Input;
var WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["border:1px solid white;display:flex;padding-right:20px;padding-left:20px;padding-top:20px;flex-direction:column;align-items:center;text-align:center;width:400px;height:550px;background-color:rgba(0,0,0,0.6);transition:0.5s;transform:rotate(0deg);&:hover{}"]);
_c3 = WindowDiv;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["position:relative;width:100%;border-bottom:1px solid white;padding:5px;margin-bottom:20px;"]);
_c4 = InputHolder;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1x3o0wi-4"
})(["margin-top:10px;margin-left:10px;width:150px;padding:10px;outline:none;border:none;border-radius:8px;color:white;background:transparent;transition:0.3s;border:1px solid white;&:hover{background-color:rgba(0,0,0,0.3);cursor:pointer;}"]);
_c5 = Button;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].i.withConfig({
  displayName: "login__Icon",
  componentId: "sc-1x3o0wi-5"
})(["margin-left:10px;"]);
_c6 = Icon;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].i.withConfig({
  displayName: "login__Iconsecure",
  componentId: "sc-1x3o0wi-6"
})(["position:absolute;border:1px solid grey;background-color:black;padding:7px;left:-15px;color:white;top:50%;transform:translate(50%,-50%);"]);
_c7 = Iconsecure;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__Logo",
  componentId: "sc-1x3o0wi-7"
})(["width:100px;height:100px;border-radius:50%;background-image:url(\"https://evrimagaci.org/public/images/logo-v3.svg?v=1\");background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c8 = Logo;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
_c9 = Global;

var Login = function Login() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_4__["createusercontext"]),
      setlogged = _useContext.setlogged,
      setuserdata = _useContext.setuserdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      currenturl = _useState[0],
      setcurrent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      wrongemail = _useState2[0],
      setwrongemail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      wrongapass = _useState3[0],
      setwrongpass = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      errormsg = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Login"),
      register = _useState5[0],
      setregister = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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
      inputs = _useState6[0],
      setinputs = _useState6[1];

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

  var Submithandler = function Submithandler() {
    var currentinput = _objectSpread({}, inputs);

    var ourdata = {};

    for (var key in currentinput[register]) {
      ourdata[key] = currentinput[register][key].value;
    }

    switch (register) {
      case "Login":
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_8__["loginreq"])({
          setlogged: setlogged,
          userdata: ourdata,
          router: router,
          setwrongemail: setwrongemail,
          setwrongpass: setwrongpass,
          seterrmsg: seterror
        });
        break;

      case "Register":
        Register({});
    }
  };

  var changehandler = function changehandler(e, type, value) {
    var inputsget = _objectSpread({}, inputs);

    inputsget[type][value].value = e.target.value;
    setinputs(inputsget);
    console.log(e.target.value);
  };

  if (errormsg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Something Went Wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 16
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
    urlget: currenturl,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Font+Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 3
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
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
        lineNumber: 241,
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
              lineNumber: 247,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              value: inputs[register][item]["value"],
              onChange: function onChange(e) {
                return changehandler(e, register, item);
              },
              placeholder: inputs[register][item]["placeholder"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 26
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: register == "Login" ? function () {
            return Submithandler;
          } : function () {
            return setregister("Login");
          },
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 118
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: register == "Login" ? function () {
            return setregister("Register");
          } : Submithandler,
          children: register == "Login" ? "Hesap Oluştur" : "Kayıt ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 8
  }, _this);
};

_s(Login, "a0zlBP5DqKAU0Z9Tih849d3HNJ0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJCdXR0b24iLCJidXR0b24iLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInNldGxvZ2dlZCIsInNldHVzZXJkYXRhIiwidXNlU3RhdGUiLCJjdXJyZW50dXJsIiwic2V0Y3VycmVudCIsIndyb25nZW1haWwiLCJzZXR3cm9uZ2VtYWlsIiwid3JvbmdhcGFzcyIsInNldHdyb25ncGFzcyIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJyZWdpc3RlciIsInNldHJlZ2lzdGVyIiwiRXBvc3RhIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwidmFsdWUiLCJpY29uIiwixZ5pZnJlIiwiUmVnaXN0ZXIiLCLEsHNpbSIsIlNveWlzaW0iLCJpbnB1dHMiLCJzZXRpbnB1dHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiU3VibWl0aGFuZGxlciIsImN1cnJlbnRpbnB1dCIsIm91cmRhdGEiLCJrZXkiLCJsb2dpbnJlcSIsInVzZXJkYXRhIiwic2V0ZXJybXNnIiwiY2hhbmdlaGFuZGxlciIsImUiLCJ0eXBlIiwiaW5wdXRzZ2V0IiwidGFyZ2V0IiwiZmxleCIsImNvbG9yIiwiZGlzcGxheSIsIndpZHRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxRQUFRLEdBQUdD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QXNCO0FBQUEsbUJBQUlDLFdBQVcsQ0FBQyxVQUFELENBQWY7QUFBQSxXQUF0QixHQUFvRGtCLGFBQXJFO0FBQUEsb0JBQXFGbkIsUUFBUSxJQUFJLE9BQVosR0FBc0IsZUFBdEIsR0FBd0M7QUFBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESDtBQTRCSCxDQXpJRDs7R0FBTWhCLEs7VUFDV0UscUQ7OztPQURYRixLO0FBMklTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5iMjBmY2Q0YTMzYzI1MTM5ZDY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge2xvZ2lucmVxLHJlc2lndGVycmVxfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjU2ODUyL3BleGVscy1waG90by00MjU2ODUyLmpwZWdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjg4JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MzVweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuJjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIFxyXG59XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvd0Rpdj1zdHlsZWQuZGl2YFxyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NDAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiY6aG92ZXIge1xyXG4gICAgXHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcblxyXG5gXHJcbmNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG5cclxubWFyZ2luLXRvcDoxMHB4O1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG53aWR0aDoxNTBweDtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6d2hpdGU7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnRyYW5zaXRpb246MC4zcztcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvLXYzLnN2Zz92PTFcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBwYWRkaW5nOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7c2V0bG9nZ2VkLHNldHVzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0W2N1cnJlbnR1cmwsc2V0Y3VycmVudF09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdFt3cm9uZ2VtYWlsLHNldHdyb25nZW1haWxdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3dyb25nYXBhc3Msc2V0d3JvbmdwYXNzXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbcmVnaXN0ZXIsc2V0cmVnaXN0ZXJdPXVzZVN0YXRlKFwiTG9naW5cIik7XHJcbiAgICBjb25zdFtpbnB1dHMsc2V0aW5wdXRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBFcG9zdGE6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgxZ5pZnJlOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3Rlcjp7XHJcbiAgICAgICAgICAgIMSwc2ltOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU295aXNpbTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIlNveSDEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEVwb3N0YTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICDFnmlmcmU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfX0pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJlZFwiKTtcclxuXHJcbiAgICAgICBjb25zdCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpO1xyXG5cclxuICAgICAgIC8qYXhpb3NzLmdldChcImh0dHBzOi8vYXBpLnBleGVscy5jb20vdjEvc2VhcmNoP3F1ZXJ5PW1hZ2ljXCIse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOlwiNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxNGFkYjgwOWU4OTYzNDYwMmE4OTZkOGU2MmE4NTA0MDFcIixcclxuICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucGhvdG9zKTsgIFxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KHJlcy5kYXRhLnBob3Rvc1szXS5zcmMub3JpZ2luYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBTdWJtaXRoYW5kbGVyPSgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRpbnB1dD17Li4uaW5wdXRzfTtcclxuICAgICAgICBjb25zdCBvdXJkYXRhPXt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN1cnJlbnRpbnB1dFtyZWdpc3Rlcl0pIHtcclxuICAgICAgICAgICAgb3VyZGF0YVtrZXldPWN1cnJlbnRpbnB1dFtyZWdpc3Rlcl1ba2V5XS52YWx1ZTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgc3dpdGNoKHJlZ2lzdGVyKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxvZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBsb2dpbnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHJvdXRlcjpyb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHdyb25nZW1haWw6c2V0d3JvbmdlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0d3JvbmdwYXNzOnNldHdyb25ncGFzcyxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJlZ2lzdGVyXCI6ICBcclxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyKHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGUsdHlwZSx2YWx1ZSk9PntcclxuICAgICAgICAgY29uc3QgaW5wdXRzZ2V0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgICBpbnB1dHNnZXRbdHlwZV1bdmFsdWVdLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGVycm9ybXNnKXtcclxuICAgICAgICByZXR1cm4gPGgyPlNvbWV0aGluZyBXZW50IFdyb25nLi4uPC9oMj5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJbWFnZURpdiB1cmxnZXQ9e2N1cnJlbnR1cmx9PlxyXG4gICAgICAgICAgIDxHbG9iYWwvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Rm9udCtOYW1lXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDozfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvPjwvTG9nbz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxwICBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixkaXNwbGF5OnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiLGZsZXg6NH19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLGZsZXg6Nn19PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dHNbcmVnaXN0ZXJdKS5tYXAoaXRlbT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRIb2xkZXIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcImljb25cIl19PjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInZhbHVlXCJdfSBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9ICBwbGFjZWhvbGRlcj17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInBsYWNlaG9sZGVyXCJdfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/ICgpPT4gU3VibWl0aGFuZGxlciA6ICgpPT5zZXRyZWdpc3RlcihcIkxvZ2luXCIpfSA+R2lyacWfIFlhcCA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvSWNvbj48L0J1dHRvbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyAoKT0+c2V0cmVnaXN0ZXIoXCJSZWdpc3RlclwiKSA6IFN1Ym1pdGhhbmRsZXJ9PntyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyBcIkhlc2FwIE9sdcWfdHVyXCIgOiBcIkthecSxdCBvbFwifTwvQnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICA8L1dpbmRvd0Rpdj5cclxuICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=