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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n *{\n     margin:0px;\n     padding:0px;\n }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__ImageDiv",
  componentId: "sc-1x3o0wi-0"
})(["background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;"], function (_ref) {
  var urlget = _ref.urlget;
  return urlget;
});
_c = ImageDiv;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1x3o0wi-1"
})(["color:white;width:70%;padding:10px;border:none;margin-bottom:20px;outline:none;border-bottom:1px solid white;transition:0.5s;background:transparent;&:focus{background-color:rgba(0,0,0,0.5);}"]);
_c2 = Input;
var WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["border:1px solid white;display:flex;align-items:center;text-align:center;width:400px;height:300px;background-color:rgba(0,0,0,0.3);"]);
_c3 = WindowDiv;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["width:100%;"]);
_c4 = InputHolder;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1x3o0wi-4"
})(["width:150px;padding:10px;outline:none;border:none;"]);
_c5 = Button;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
_c6 = Global;

var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("led.jpg"),
      currenturl = _useState[0],
      setcurrent = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var random = Math.floor(Math.random() * 15);
    /*axioss.get("https://api.pexels.com/v1/search?query=people",{
     headers:{
        "Authorization":"563492ad6f917000010000014adb809e89634602a896d8e62a850401",
     }
    })
    .then((res)=>{
         console.log(res.data.photos);  
         setcurrent(res.data.photos[random].src.original);
     })
     */
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
    urlget: currenturl,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            placeholder: "E-Posta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            placeholder: "\u015Eifre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          children: "Giri\u015F Yap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 8
  }, _this);
};

_s(Login, "xpxvLpsawdVY6KQScGMwNoOxsFE=");

_c7 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "ImageDiv");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "WindowDiv");
$RefreshReg$(_c4, "InputHolder");
$RefreshReg$(_c5, "Button");
$RefreshReg$(_c6, "Global");
$RefreshReg$(_c7, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJ1cmxnZXQiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJCdXR0b24iLCJidXR0b24iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkxvZ2luIiwidXNlU3RhdGUiLCJjdXJyZW50dXJsIiwic2V0Y3VycmVudCIsInVzZUVmZmVjdCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVOQUNTO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBYUEsTUFBYjtBQUFBLENBRFQsQ0FBZDtLQUFNSCxRO0FBYU4sSUFBTUksS0FBSyxHQUFDSCx5REFBTSxDQUFDSSxLQUFSO0FBQUE7QUFBQTtBQUFBLHNNQUFYO01BQU1ELEs7QUFlTixJQUFNRSxTQUFTLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMklBQWY7TUFBTUksUztBQVNOLElBQU1DLFdBQVcsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtQkFBakI7TUFBTUssVztBQUdOLElBQU1DLE1BQU0sR0FBQ1AseURBQU0sQ0FBQ1EsTUFBUjtBQUFBO0FBQUE7QUFBQSwwREFBWjtNQUFNRCxNO0FBTU4sSUFBTUUsTUFBTSxHQUFDQywyRUFBRCxtQkFBWjtNQUFNRCxNOztBQU9OLElBQU1FLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUMsU0FBRCxDQUZ6QjtBQUFBLE1BRU5DLFVBRk07QUFBQSxNQUVLQyxVQUZMOztBQUlaQyx5REFBUyxDQUFDLFlBQUk7QUFFWCxRQUFNQyxNQUFNLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNELE1BQUwsS0FBZ0IsRUFBM0IsQ0FBYjtBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssR0FkUSxFQWNQLEVBZE8sQ0FBVDtBQWdCQSxzQkFDRyxxRUFBQyxRQUFEO0FBQVUsVUFBTSxFQUFFSCxVQUFsQjtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsU0FBRDtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0MscUVBQUMsV0FBRDtBQUFBLGlDQUNJLHFFQUFDLEtBQUQ7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMscUVBQUMsV0FBRDtBQUFBLGlDQUNJLHFFQUFDLEtBQUQ7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpELGVBT0MscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREg7QUFnQkgsQ0FwQ0Q7O0dBQU1GLEs7O01BQUFBLEs7QUFzQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjcxOTQ0MzYwNzM5M2FmODc5OTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7dXJsZ2V0fSk9PiB1cmxnZXR9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5jb2xvcjp3aGl0ZTtcclxud2lkdGg6NzAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlcjpub25lO1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnRyYW5zaXRpb246MC41cztcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuJjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3dEaXY9c3R5bGVkLmRpdmBcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDo0MDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbmBcclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbmBcclxud2lkdGg6MTUwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYFxyXG5jb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgcGFkZGluZzowcHg7XHJcbiB9XHJcblxyXG5gXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcblxyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcImxlZC5qcGdcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1wZW9wbGVcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zW3JhbmRvbV0uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEltYWdlRGl2IHVybGdldD17Y3VycmVudHVybH0+XHJcbiAgICAgICAgICAgPEdsb2JhbC8+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFLVBvc3RhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwixZ5pZnJlXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPkdpcmnFnyBZYXA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9XaW5kb3dEaXY+XHJcbiAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9