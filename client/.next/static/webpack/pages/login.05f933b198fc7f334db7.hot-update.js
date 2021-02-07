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
  var data = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n *{\n     margin:0px;\n     padding:0px;\n }\n"]);

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
})(["width:70%;padding:10px;border:none;outline:none;border-bottom:1px solid black;background:transparent;"]);
_c2 = Input;
var WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["text-align:center;width:400px;height:300px;background-color:rgba(0,0,0,0.3);"]);
_c3 = WindowDiv;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
_c4 = Global;

var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      currenturl = _useState[0],
      setcurrent = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var random = Math.floor(Math.random() * 15);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://api.pexels.com/v1/search?query=people", {
      headers: {
        "Authorization": "563492ad6f917000010000014adb809e89634602a896d8e62a850401"
      }
    }).then(function (res) {
      console.log(res.data.photos);
      setcurrent(res.data.photos[random].src.original);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
    urlget: currenturl,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 8
  }, _this);
};

_s(Login, "f9bt4DbaAHM+xHuBvNvlXTgoEdM=");

_c5 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ImageDiv");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "WindowDiv");
$RefreshReg$(_c4, "Global");
$RefreshReg$(_c5, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJ1cmxnZXQiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJMb2dpbiIsInVzZVN0YXRlIiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJheGlvc3MiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicGhvdG9zIiwic3JjIiwib3JpZ2luYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1TkFDUztBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQWFBLE1BQWI7QUFBQSxDQURULENBQWQ7S0FBTUgsUTtBQWFOLElBQU1JLEtBQUssR0FBQ0gseURBQU0sQ0FBQ0ksS0FBUjtBQUFBO0FBQUE7QUFBQSw2R0FBWDtNQUFNRCxLO0FBU04sSUFBTUUsU0FBUyxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9GQUFmO01BQU1JLFM7QUFPTixJQUFNQyxNQUFNLEdBQUNDLDJFQUFELG1CQUFaO01BQU1ELE07O0FBTU4sSUFBTUUsS0FBSyxHQUFDLFNBQU5BLEtBQU0sR0FBSTtBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFTkMsVUFGTTtBQUFBLE1BRUtDLFVBRkw7O0FBSVpDLHlEQUFTLENBQUMsWUFBSTtBQUVYLFFBQU1DLE1BQU0sR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixFQUEzQixDQUFiO0FBRUFHLGdEQUFNLENBQUNDLEdBQVAsQ0FBVywrQ0FBWCxFQUEyRDtBQUMxREMsYUFBTyxFQUFDO0FBQ0wseUJBQWdCO0FBRFg7QUFEa0QsS0FBM0QsRUFLQ0MsSUFMRCxDQUtNLFVBQUNDLEdBQUQsRUFBTztBQUNSQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLE1BQXJCO0FBQ0FiLGdCQUFVLENBQUNTLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxNQUFULENBQWdCWCxNQUFoQixFQUF3QlksR0FBeEIsQ0FBNEJDLFFBQTdCLENBQVY7QUFDSCxLQVJGO0FBU0YsR0FiUSxFQWFQLEVBYk8sQ0FBVDtBQWVBLHNCQUNHLHFFQUFDLFFBQUQ7QUFBVSxVQUFNLEVBQUVoQixVQUFsQjtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsU0FBRDtBQUFBLDhCQUNJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREg7QUFTSCxDQTVCRDs7R0FBTUYsSzs7TUFBQUEsSztBQThCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMDVmOTMzYjE5OGZjN2YzMzRkYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3NzIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHt1cmxnZXR9KT0+IHVybGdldH0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbndpZHRoOjcwJTtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDo0MDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbmBcclxuXHJcbmNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBwYWRkaW5nOjBweDtcclxuIH1cclxuYFxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG5cclxuICAgIGNvbnN0W2N1cnJlbnR1cmwsc2V0Y3VycmVudF09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICBheGlvc3MuZ2V0KFwiaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9cGVvcGxlXCIse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOlwiNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxNGFkYjgwOWU4OTYzNDYwMmE4OTZkOGU2MmE4NTA0MDFcIixcclxuICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucGhvdG9zKTsgIFxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KHJlcy5kYXRhLnBob3Rvc1tyYW5kb21dLnNyYy5vcmlnaW5hbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SW1hZ2VEaXYgdXJsZ2V0PXtjdXJyZW50dXJsfT5cclxuICAgICAgICAgICA8R2xvYmFsLz5cclxuICAgICAgICAgICA8V2luZG93RGl2PlxyXG4gICAgICAgICAgICAgICA8SW5wdXQ+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgPElucHV0PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgPC9XaW5kb3dEaXY+XHJcbiAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9