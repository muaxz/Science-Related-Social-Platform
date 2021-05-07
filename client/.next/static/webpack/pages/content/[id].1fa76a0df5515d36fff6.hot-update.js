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
})(["background-color:white;max-width:950px;height:700px;margin:auto;width:100%"]);
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

  var id = _ref2.id;

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); //const {id}=router.query;

  console.log(id);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Contentreq"])({
      contentId: id,
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
          lineNumber: 79,
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
          lineNumber: 80,
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
                lineNumber: 84,
                columnNumber: 30
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  marginLeft: "5px",
                  fontSize: "13px"
                },
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 30
              }, _this)]
            }, item.icon, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Porfileimage"], {
          profile: "/black.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Duhan \xD6zt\xFCrk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: content.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(content.content)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsIkltYWdlRGl2IiwiQ29udGVudERpdiIsIlByb2ZpbGVEaXYiLCJBdHRyaWJ1dGUiLCJhY3RpdmUiLCJBdHRyaWJ1dGVob2xkZXIiLCJDb250ZW50IiwiaWQiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRjb250ZW50Iiwic2V0YWN0aXZlIiwiZXJybXNnIiwic2V0ZXJybXNnIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidGl0bGUiLCJzdWJ0aXRsZSIsIlBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGVBQWUsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxrRkFBckI7S0FBTUYsZTtBQU9OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxrREFBZDtNQUFNQyxRO0FBTU4sSUFBTUMsVUFBVSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFDQUFoQjtNQUFNRSxVO0FBS04sSUFBTUMsVUFBVSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJFQUFoQjtNQUFNRyxV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LENBQUM1QixPQUFPLENBQUNBLE9BQVQ7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0NIOztHQXBEdUJQLE87VUFNUGEscUQ7OztNQU5PYixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS4xZmE3NmEwZGY1NTE1ZDM2ZmZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvSWNvblwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtDb250ZW50cmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yY29udGVudD1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbmhlaWdodDo3MDBweDtcclxubWFyZ2luOmF1dG87XHJcbndpZHRoOjEwMCVcclxuYFxyXG5jb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjQwMHB4O1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6NDBweDtcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlRGl2PXN0eWxlZC5kaXZgXHJcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxucGFkZGluZzoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQXR0cmlidXRlPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MzVweDtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmBcclxuY29uc3QgQXR0cmlidXRlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUzRTM7XHJcbiBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbi8vdG9kbyBtYXAgYXJyYXkgdG8gY3JlYXRlIGF0dHJpYnV0ZSBsaXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHtpZH0pe1xyXG5cclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIkfDtm5kZXJpeWkgS2F5ZGV0XCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJHw7ZuZGVyaXlpIEJlxJ9lblwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIkfDtm5kZXJpeWkgUHJvZmlsIFNheWZhbWRhIEfDtnN0ZXJcIn1dKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsc2V0Y29udGVudF09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJtc2csc2V0ZXJybXNnXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICAvL2NvbnN0IHtpZH09cm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgQ29udGVudHJlcSh7XHJcbiAgICAgICAgICAgIGNvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgc2V0Y29udGVudDpzZXRjb250ZW50LFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJybXNnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nhci5qcGdcIn0gc3R5bGU9e3tvYmplY3RGaXQ6XCJjb3ZlclwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn19ID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiAgYWN0aXZlZnVuYz17KCk9PnNldGFjdGl2ZSghYWN0aXZlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjEwcHhcIixyaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIyNXB4XCIsaGVpZ2h0OlwiMjVweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdHRyaWJ1dGUgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlaG9sZGVyIGtleT17aXRlbS5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMjhweFwiLGhlaWdodDpcIjI4cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixmb250U2l6ZTpcIjEzcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGVob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGU+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PjxzcGFuPkR1aGFuIMOWenTDvHJrPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+PHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjREUzQzNDXCIsY29sb3I6XCJ3aGl0ZVwiLHBhZGRpbmc6XCI0cHhcIixib3JkZXJSYWRpdXM6XCI1cHhcIn19PllhecSxbmxhbm1hIHRhcmloaTogMTIvMDgvMjAyMDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57Y29udGVudC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57Y29udGVudC5zdWJ0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtQYXJzZXIoY29udGVudC5jb250ZW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0V4dGVyaW9yY29udGVudD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9