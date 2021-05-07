webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./containers/pages/Content.js":
/*!*************************************!*\
  !*** ./containers/pages/Content.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Content.js",
    _s = $RefreshSig$();








var Exteriorcontent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__Exteriorcontent",
  componentId: "t38n1c-0"
})(["background-color:white;max-width:950px;margin:auto;width:100%"]);
_c = Exteriorcontent;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__ImageDiv",
  componentId: "t38n1c-1"
})(["position:relative;width:100%;height:400px;"]);
_c2 = ImageDiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__ContentDiv",
  componentId: "t38n1c-2"
})(["margin-top:40px;padding:10px;"]);
_c3 = ContentDiv;
var ProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__ProfileDiv",
  componentId: "t38n1c-3"
})(["box-sizing:border-box;padding:10px;display:flex;align-items:center;"]);
_c4 = ProfileDiv;
var Attribute = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__Attribute",
  componentId: "t38n1c-4"
})(["display:", ";position:absolute;top:35px;right:35px;border-radius:7px;background-color:white;"], function (_ref) {
  var active = _ref.active;
  return active ? "block" : "none";
});
_c5 = Attribute;
var Attributeholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Content__Attributeholder",
  componentId: "t38n1c-5"
})(["display:flex;align-items:center;border-radius:7px;padding:5px;&:hover{background-color:#E2E3E3;cursor:pointer;}"]); //todo map array to create attribute list

_c6 = Attributeholder;
function Content(_ref2) {
  _s();

  var _this = this;

  var query = _ref2.query;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Gönderiyi Kaydet"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Gönderiyi Beğen"
  }, {
    icon: "fas fa-retweet",
    desc: "Gönderiyi Profil Sayfamda Göster"
  }]),
      current = _useRef.current;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      content = _useState[0],
      setcontent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState2[0],
      setactive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      errmsg = _useState3[0],
      seterrmsg = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  console.log(id);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Contentreq"])({
      contentId: query,
      setcontent: setcontent,
      seterrmsg: seterrmsg
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriorcontent, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/car.jpg",
          style: {
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activefunc: function activefunc() {
            return setactive(!active);
          },
          className: "fas fa-ellipsis-h",
          Iconconfig: {
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            borderRadius: "50%",
            width: "25px",
            height: "25px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attribute, {
          active: active,
          children: current.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attributeholder, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: item.icon,
                Iconconfig: {
                  width: "28px",
                  height: "28px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 30
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  marginLeft: "5px",
                  fontSize: "13px"
                },
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 30
              }, _this)]
            }, item.icon, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Porfileimage"], {
          profile: "/black.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Duhan \xD6zt\xFCrk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              backgroundColor: "#DE3C3C",
              color: "white",
              padding: "4px",
              borderRadius: "5px"
            },
            children: "Yay\u0131nlanma tarihi: 12/08/2020"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: content.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: content.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(Content, "8CcTiQXT47FH6dB4AGCD7urNFkI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c7 = Content;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Exteriorcontent");
$RefreshReg$(_c2, "ImageDiv");
$RefreshReg$(_c3, "ContentDiv");
$RefreshReg$(_c4, "ProfileDiv");
$RefreshReg$(_c5, "Attribute");
$RefreshReg$(_c6, "Attributeholder");
$RefreshReg$(_c7, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsIkltYWdlRGl2IiwiQ29udGVudERpdiIsIlByb2ZpbGVEaXYiLCJBdHRyaWJ1dGUiLCJhY3RpdmUiLCJBdHRyaWJ1dGVob2xkZXIiLCJDb250ZW50IiwicXVlcnkiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRjb250ZW50Iiwic2V0YWN0aXZlIiwiZXJybXNnIiwic2V0ZXJybXNnIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwiaXRlbSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsZUFBZSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFFQUFyQjtLQUFNRixlO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGtEQUFkO01BQU1DLFE7QUFNTixJQUFNQyxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUNBQWhCO01BQU1FLFU7QUFLTixJQUFNQyxVQUFVLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkVBQWhCO01BQU1HLFU7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QUFBLGdCQUZKLGVBR0k7QUFBQSxpQ0FDSTtBQUFBLHNCQUNHNUIsT0FBTyxDQUFDQTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0g7O0dBcER1QlAsTztVQU1QYSxxRDs7O01BTk9iLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmJlMzIwMTU4ZmViMTkxMzQ5NzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0NvbnRlbnRyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3Jjb250ZW50PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOmF1dG87XHJcbndpZHRoOjEwMCVcclxuYFxyXG5jb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjQwMHB4O1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6NDBweDtcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlRGl2PXN0eWxlZC5kaXZgXHJcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxucGFkZGluZzoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQXR0cmlidXRlPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MzVweDtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmBcclxuY29uc3QgQXR0cmlidXRlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUzRTM7XHJcbiBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbi8vdG9kbyBtYXAgYXJyYXkgdG8gY3JlYXRlIGF0dHJpYnV0ZSBsaXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHtxdWVyeX0pe1xyXG5cclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIkfDtm5kZXJpeWkgS2F5ZGV0XCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJHw7ZuZGVyaXlpIEJlxJ9lblwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIkfDtm5kZXJpeWkgUHJvZmlsIFNheWZhbWRhIEfDtnN0ZXJcIn1dKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsc2V0Y29udGVudF09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJtc2csc2V0ZXJybXNnXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9PXJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIENvbnRlbnRyZXEoe1xyXG4gICAgICAgICAgICBjb250ZW50SWQ6cXVlcnksXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnQ6c2V0Y29udGVudCxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jYXIuanBnXCJ9IHN0eWxlPXt7b2JqZWN0Rml0OlwiY292ZXJcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9fSA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gIGFjdGl2ZWZ1bmM9eygpPT5zZXRhY3RpdmUoIWFjdGl2ZSl9IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIxMHB4XCIscmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMjVweFwiLGhlaWdodDpcIjI1cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0dHJpYnV0ZWhvbGRlciBrZXk9e2l0ZW0uaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpcIjI4cHhcIixoZWlnaHQ6XCIyOHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsZm9udFNpemU6XCIxM3B4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT48c3Bhbj5EdWhhbiDDlnp0w7xyazwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PjxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI0RFM0MzQ1wiLGNvbG9yOlwid2hpdGVcIixwYWRkaW5nOlwiNHB4XCIsYm9yZGVyUmFkaXVzOlwiNXB4XCJ9fT5ZYXnEsW5sYW5tYSB0YXJpaGk6IDEyLzA4LzIwMjA8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2NvbnRlbnQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NvbnRlbnQuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=