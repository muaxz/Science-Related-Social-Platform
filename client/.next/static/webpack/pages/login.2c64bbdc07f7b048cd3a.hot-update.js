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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



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
})(["color:white;width:70%;padding:10px;border:none;outline:none;border-bottom:1px solid white;transition:0.5s;background:transparent;&:focus{background-color:rgba(0,0,0,0.5);}"]);
_c2 = Input;
var WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["border:1px solid white;display:flex;justify-content:center;align-items:center;text-align:center;width:400px;height:300px;background-color:rgba(0,0,0,0.3);"]);
_c3 = WindowDiv;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["position:relative;width:100%;padding:5px;margin-bottom:20px;border:1px solid white;"]);
_c4 = InputHolder;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1x3o0wi-4"
})(["display:flex;justify-content:center;align-items:center;width:150px;padding:10px;outline:none;border:none;border-radius:8px;"]);
_c5 = Button;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "login__Icon",
  componentId: "sc-1x3o0wi-5"
})(["margin-left:10px;"]);
_c6 = Icon;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "login__Iconsecure",
  componentId: "sc-1x3o0wi-6"
})([""]);
_c7 = Iconsecure;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
_c8 = Global;

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
      lineNumber: 97,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "far fa-envelope"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            placeholder: "E-Posta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-unlock-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            placeholder: "\u015Eifre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-angle-right fa-lg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 39
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 8
  }, _this);
};

_s(Login, "xpxvLpsawdVY6KQScGMwNoOxsFE=");

_c9 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "ImageDiv");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "WindowDiv");
$RefreshReg$(_c4, "InputHolder");
$RefreshReg$(_c5, "Button");
$RefreshReg$(_c6, "Icon");
$RefreshReg$(_c7, "Iconsecure");
$RefreshReg$(_c8, "Global");
$RefreshReg$(_c9, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSW1hZ2VEaXYiLCJzdHlsZWQiLCJkaXYiLCJ1cmxnZXQiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJCdXR0b24iLCJidXR0b24iLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkxvZ2luIiwidXNlU3RhdGUiLCJjdXJyZW50dXJsIiwic2V0Y3VycmVudCIsInVzZUVmZmVjdCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdU5BQ1M7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFhQSxNQUFiO0FBQUEsQ0FEVCxDQUFkO0tBQU1ILFE7QUFhTixJQUFNSSxLQUFLLEdBQUNILHlEQUFNLENBQUNJLEtBQVI7QUFBQTtBQUFBO0FBQUEsbUxBQVg7TUFBTUQsSztBQWNOLElBQU1FLFNBQVMsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxrS0FBZjtNQUFNSSxTO0FBVU4sSUFBTUMsV0FBVyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJGQUFqQjtNQUFNSyxXO0FBT04sSUFBTUMsTUFBTSxHQUFDUCx5REFBTSxDQUFDUSxNQUFSO0FBQUE7QUFBQTtBQUFBLG1JQUFaO01BQU1ELE07QUFVTixJQUFNRSxJQUFJLEdBQUNULHlEQUFNLENBQUNVLENBQVI7QUFBQTtBQUFBO0FBQUEseUJBQVY7TUFBTUQsSTtBQUlOLElBQU1FLFVBQVUsR0FBQ1gseURBQU0sQ0FBQ1UsQ0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFoQjtNQUFNQyxVO0FBR04sSUFBTUMsTUFBTSxHQUFDQywyRUFBRCxtQkFBWjtNQUFNRCxNOztBQU1OLElBQU1FLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUMsU0FBRCxDQUZ6QjtBQUFBLE1BRU5DLFVBRk07QUFBQSxNQUVLQyxVQUZMOztBQUlaQyx5REFBUyxDQUFDLFlBQUk7QUFFWCxRQUFNQyxNQUFNLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNELE1BQUwsS0FBZ0IsRUFBM0IsQ0FBYjtBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssR0FkUSxFQWNQLEVBZE8sQ0FBVDtBQWdCQSxzQkFDRyxxRUFBQyxRQUFEO0FBQVUsVUFBTSxFQUFFSCxVQUFsQjtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUsscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyw0RUFBNUI7QUFBeUcsaUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4sbUJBQVcsRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZMLGVBS0kscUVBQUMsU0FBRDtBQUFBLDZCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNNLGVBQUssRUFBQyxLQUFQO0FBQWFDLGlCQUFPLEVBQUMsTUFBckI7QUFBNEJDLHdCQUFjLEVBQUMsUUFBM0M7QUFBb0RDLGtCQUFRLEVBQUM7QUFBN0QsU0FBWjtBQUFBLGdDQUNLLHFFQUFDLFdBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxVQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMsS0FBRDtBQUFPLHVCQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREwsZUFLSyxxRUFBQyxXQUFEO0FBQUEsa0NBQ0kscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLEtBQUQ7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxMLGVBU0sscUVBQUMsTUFBRDtBQUFBLHFEQUFrQixxRUFBQyxJQUFEO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBcUJILENBekNEOztHQUFNWCxLOztNQUFBQSxLO0FBMkNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yYzY0YmJkYzA3ZjdiMDQ4Y2QzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGF4aW9zcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7dXJsZ2V0fSk9PiB1cmxnZXR9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5jb2xvcjp3aGl0ZTtcclxud2lkdGg6NzAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlcjpub25lO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiY6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbmJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NDAwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjVweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5gXHJcbmNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxud2lkdGg6MTUwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbmBcclxuY29uc3QgSWNvbj1zdHlsZWQuaWBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxuXHJcbmBcclxuY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIHBhZGRpbmc6MHB4O1xyXG4gfVxyXG5gXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcblxyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcImxlZC5qcGdcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1wZW9wbGVcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zW3JhbmRvbV0uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEltYWdlRGl2IHVybGdldD17Y3VycmVudHVybH0+XHJcbiAgICAgICAgICAgPEdsb2JhbC8+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgIDxXaW5kb3dEaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixmbGV4V3JhcDpcIndyYXBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFLVBvc3RhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXVubG9jay1hbHRcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIsWeaWZyZVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkdpcmnFnyBZYXAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0IGZhLWxnXCI+PC9JY29uPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L1dpbmRvd0Rpdj5cclxuICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=