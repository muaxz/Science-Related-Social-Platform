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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);
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
          lineNumber: 74,
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
          lineNumber: 75,
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
                lineNumber: 79,
                columnNumber: 30
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  marginLeft: "5px",
                  fontSize: "13px"
                },
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 30
              }, _this)]
            }, item.icon, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Porfileimage"], {
          profile: "/black.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Duhan \xD6zt\xFCrk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 88,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: content.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: content.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsIkltYWdlRGl2IiwiQ29udGVudERpdiIsIlByb2ZpbGVEaXYiLCJBdHRyaWJ1dGUiLCJhY3RpdmUiLCJBdHRyaWJ1dGVob2xkZXIiLCJDb250ZW50IiwiaWQiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRjb250ZW50Iiwic2V0YWN0aXZlIiwiZXJybXNnIiwic2V0ZXJybXNnIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwiaXRlbSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsZUFBZSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFFQUFyQjtLQUFNRixlO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGtEQUFkO01BQU1DLFE7QUFNTixJQUFNQyxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUNBQWhCO01BQU1FLFU7QUFLTixJQUFNQyxVQUFVLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkVBQWhCO01BQU1HLFU7QUFPTixJQUFNQyxTQUFTLEdBQUNMLHlEQUFNLENBQUND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QUFBO0FBQUE7QUFBQSxVQURKO0FBZ0NIOztHQWhEdUJQLE87VUFNUGEscUQ7OztNQU5PYixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS4xZjM4NDZlNzEyNDE5ZDY5ZjcwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvSWNvblwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtDb250ZW50cmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yY29udGVudD1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjphdXRvO1xyXG53aWR0aDoxMDAlXHJcbmBcclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MDBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjQwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZURpdj1zdHlsZWQuZGl2YFxyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbnBhZGRpbmc6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojRTJFM0UzO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vL3RvZG8gbWFwIGFycmF5IHRvIGNyZWF0ZSBhdHRyaWJ1dGUgbGlzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7aWR9KXtcclxuXHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJHw7ZuZGVyaXlpIEtheWRldFwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiR8O2bmRlcml5aSBCZcSfZW5cIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJHw7ZuZGVyaXlpIFByb2ZpbCBTYXlmYW1kYSBHw7ZzdGVyXCJ9XSlcclxuICAgIGNvbnN0IFtjb250ZW50LHNldGNvbnRlbnRdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJybXNnLHNldGVycm1zZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgLy9jb25zdCB7aWR9PXJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2FyLmpwZ1wifSBzdHlsZT17e29iamVjdEZpdDpcImNvdmVyXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0gPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uICBhY3RpdmVmdW5jPXsoKT0+c2V0YWN0aXZlKCFhY3RpdmUpfSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMTBweFwiLHJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjI1cHhcIixoZWlnaHQ6XCIyNXB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF0dHJpYnV0ZSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRyaWJ1dGVob2xkZXIga2V5PXtpdGVtLmljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6XCIyOHB4XCIsaGVpZ2h0OlwiMjhweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGZvbnRTaXplOlwiMTNweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZWhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZT5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwifX0+PHNwYW4+RHVoYW4gw5Z6dMO8cms8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT48c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNERTNDM0NcIixjb2xvcjpcIndoaXRlXCIscGFkZGluZzpcIjRweFwiLGJvcmRlclJhZGl1czpcIjVweFwifX0+WWF5xLFubGFubWEgdGFyaWhpOiAxMi8wOC8yMDIwPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntjb250ZW50LnN1YnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0V4dGVyaW9yY29udGVudD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9