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
            children: content.content
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsIkltYWdlRGl2IiwiQ29udGVudERpdiIsIlByb2ZpbGVEaXYiLCJBdHRyaWJ1dGUiLCJhY3RpdmUiLCJBdHRyaWJ1dGVob2xkZXIiLCJDb250ZW50IiwiaWQiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRjb250ZW50Iiwic2V0YWN0aXZlIiwiZXJybXNnIiwic2V0ZXJybXNnIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGVBQWUsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxrRkFBckI7S0FBTUYsZTtBQU9OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxrREFBZDtNQUFNQyxRO0FBTU4sSUFBTUMsVUFBVSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFDQUFoQjtNQUFNRSxVO0FBS04sSUFBTUMsVUFBVSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJFQUFoQjtNQUFNRyxVO0FBT04sSUFB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RFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDs7R0FwRHVCUCxPO1VBTVBhLHFEOzs7TUFOT2IsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uYjQxODg1NzE3YWJiNzE0ZDYyNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUsdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0ljb25cIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7Q29udGVudHJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmNvbnRlbnQ9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG5oZWlnaHQ6NzAwcHg7XHJcbm1hcmdpbjphdXRvO1xyXG53aWR0aDoxMDAlXHJcbmBcclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MDBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjQwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZURpdj1zdHlsZWQuZGl2YFxyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbnBhZGRpbmc6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojRTJFM0UzO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vL3RvZG8gbWFwIGFycmF5IHRvIGNyZWF0ZSBhdHRyaWJ1dGUgbGlzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7aWR9KXtcclxuXHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJHw7ZuZGVyaXlpIEtheWRldFwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiR8O2bmRlcml5aSBCZcSfZW5cIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJHw7ZuZGVyaXlpIFByb2ZpbCBTYXlmYW1kYSBHw7ZzdGVyXCJ9XSlcclxuICAgIGNvbnN0IFtjb250ZW50LHNldGNvbnRlbnRdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJybXNnLHNldGVycm1zZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgLy9jb25zdCB7aWR9PXJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIENvbnRlbnRyZXEoe1xyXG4gICAgICAgICAgICBjb250ZW50SWQ6aWQsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnQ6c2V0Y29udGVudCxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jYXIuanBnXCJ9IHN0eWxlPXt7b2JqZWN0Rml0OlwiY292ZXJcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9fSA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gIGFjdGl2ZWZ1bmM9eygpPT5zZXRhY3RpdmUoIWFjdGl2ZSl9IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIxMHB4XCIscmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMjVweFwiLGhlaWdodDpcIjI1cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0dHJpYnV0ZWhvbGRlciBrZXk9e2l0ZW0uaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpcIjI4cHhcIixoZWlnaHQ6XCIyOHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsZm9udFNpemU6XCIxM3B4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT48c3Bhbj5EdWhhbiDDlnp0w7xyazwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PjxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI0RFM0MzQ1wiLGNvbG9yOlwid2hpdGVcIixwYWRkaW5nOlwiNHB4XCIsYm9yZGVyUmFkaXVzOlwiNXB4XCJ9fT5ZYXnEsW5sYW5tYSB0YXJpaGk6IDEyLzA4LzIwMjA8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2NvbnRlbnQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NvbnRlbnQuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=