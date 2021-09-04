webpackHotUpdate_N_E("pages/404",{

/***/ "./components/shared/Lefttoolbar.js":
/*!******************************************!*\
  !*** ./components/shared/Lefttoolbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Lefttoolbar.js",
    _this = undefined,
    _s = $RefreshSig$();







var ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-1dtr19t-0"
})(["position:fixed;top:60px;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#e9ecef;box-shadow:3px 3px 3px rgba(0,0,0,0.2);transition:all 0.2s;width:", ";@media (max-width:940px){display:none;}"], function (_ref) {
  var active = _ref.active;
  return active ? "200px" : "60px";
});
_c = ExteriorDiv;
var InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-1dtr19t-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;"]);
_c2 = InnerDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-1dtr19t-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c3 = ImageDiv;
var NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-1dtr19t-3"
})(["background-coloyor:yellow;margin-top:5px;width:96%;"]);
_c4 = NavigationDiv;
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-1dtr19t-4"
})(["list-style-type:none;margin-top:10px;display:flex;width:100%;border-radius:5px;align-items:center;padding:7px;&:hover{background-color:#D4D4D4;cursor:pointer;}"]); //const Icon=styled.i`
//color:#C70039;
//`

_c5 = Li;
var Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-1dtr19t-5"
})(["width:100%;height:30px;padding:10px;text-align:right;"]);

var Lefttoolbar = function Lefttoolbar(_ref2) {
  _s();

  var makeactive = _ref2.makeactive,
      myactive = _ref2.myactive;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata,
      logged = _useContext.logged;

  var firstlist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Kaydedilenler",
    path: "saved"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Beğenilenler",
    path: "liked"
  }]);
  var secondlist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-edit",
    desc: "Gönderilerim",
    path: "/gönderiler"
  }, {
    icon: "fas fa-users",
    desc: "Tartışmalarım",
    path: "/tartışmalar"
  }]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(userdata.UserId);
  }, [userdata]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: logged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
      active: myactive,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            activefunc: function activefunc() {
              makeactive(!myactive);
            },
            className: "fas fa-angle-double-right",
            Iconconfig: {
              width: "35px",
              height: "35px",
              lineheight: "35px",
              color: "black",
              rotate: myactive ? true : undefined
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingBottom: "15px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: userdata.UserId && {
                pathname: "/profile/".concat(userdata.UserId),
                query: {
                  name: "Post"
                }
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
                profile: "/car.jpg",
                width: myactive ? "80px" : "50px",
                height: myactive ? "80px" : "50px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 24
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: userdata.UserId && {
                pathname: "/profile/".concat(userdata.UserId),
                query: {
                  name: "Post"
                }
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginTop: "10px",
                  color: "#293241",
                  textAlign: "center"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: myactive ? userdata.Username : "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 91
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 24
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: firstlist.current.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/[user\u0131d]/".concat(item.path),
                as: "/".concat(userdata.UserId, "/").concat(item.path),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: item.icon,
                    Iconconfig: {
                      width: myactive ? "31px" : "35px",
                      height: myactive ? "31px" : "35px",
                      lineheight: myactive ? "31px" : "35px",
                      backcolor: "#ff0a54",
                      color: "white"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      display: myactive ? "block" : "none",
                      fontSize: "15px",
                      marginLeft: "10px"
                    },
                    children: item.desc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: secondlist.current.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/[stuff]",
                as: "".concat(item.path),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: item.icon,
                    Iconconfig: {
                      width: myactive ? "31px" : "35px",
                      height: myactive ? "31px" : "35px",
                      lineheight: myactive ? "31px" : "35px",
                      backcolor: "#168aad",
                      color: "white"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      display: myactive ? "block" : "none",
                      fontSize: "15px",
                      marginLeft: "10px"
                    },
                    children: item.desc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: secondlist.current.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#F0F0F0",
                    color: "black"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    display: myactive ? "block" : "none",
                    fontSize: "15px",
                    marginLeft: "10px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, _this);
};

_s(Lefttoolbar, "jtpY2aAAM/HMm7Fq7gFHF8fVkY4=");

_c6 = Lefttoolbar;
/* harmony default export */ __webpack_exports__["default"] = (Lefttoolbar);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ExteriorDiv");
$RefreshReg$(_c2, "InnerDiv");
$RefreshReg$(_c3, "ImageDiv");
$RefreshReg$(_c4, "NavigationDiv");
$RefreshReg$(_c5, "Li");
$RefreshReg$(_c6, "Lefttoolbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXIuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3JEaXYiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJJbm5lckRpdiIsIkltYWdlRGl2IiwiTmF2aWdhdGlvbkRpdiIsIkxpIiwibGkiLCJDbG9zZW9wZW4iLCJMZWZ0dG9vbGJhciIsIm1ha2VhY3RpdmUiLCJteWFjdGl2ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwibG9nZ2VkIiwiZmlyc3RsaXN0IiwidXNlUmVmIiwiaWNvbiIsImRlc2MiLCJwYXRoIiwic2Vjb25kbGlzdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJVc2VySWQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJjb2xvciIsInJvdGF0ZSIsInVuZGVmaW5lZCIsInBhZGRpbmdCb3R0b20iLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIlVzZXJuYW1lIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImN1cnJlbnQiLCJtYXAiLCJpdGVtIiwiYmFja2NvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdU5BVVQ7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFZQSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQUEsQ0FWUyxDQUFqQjtLQUFNSCxXO0FBZU4sSUFBTUksUUFBUSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHNGQUFkO01BQU1FLFE7QUFR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QkFDS1UsVUFBVSxDQUFDc0IsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRDtBQUFBLGtDQUNwQixxRUFBQyxFQUFEO0FBQUEsd0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSwyQkFBUyxFQUFFQSxJQUFJLENBQUMzQixJQUF0QjtBQUE0Qiw0QkFBVSxFQUFFO0FBQUNRLHlCQUFLLEVBQUNmLFFBQVEsR0FBRyxNQUFILEdBQVksTUFBM0I7QUFBa0NnQiwwQkFBTSxFQUFDaEIsUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUE3RDtBQUFvRWlCLDhCQUFVLEVBQUNqQixRQUFRLEdBQUcsTUFBSCxHQUFZLE1BQW5HO0FBQTBHbUMsNkJBQVMsRUFBQyxTQUFwSDtBQUE4SGpCLHlCQUFLLEVBQUM7QUFBcEk7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQU0sdUJBQUssRUFBRTtBQUFDVywyQkFBTyxFQUFDN0IsUUFBUSxHQUFHLE9BQUgsR0FBYSxNQUE5QjtBQUFxQ29DLDRCQUFRLEVBQUMsTUFBOUM7QUFBcURDLDhCQUFVLEVBQUM7QUFBaEUsbUJBQWI7QUFBQSw0QkFBdUZILElBQUksQ0FBQzFCO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURvQjtBQUFBLGFBQXZCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGTSxHQWtFSjtBQXJFTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwRUgsQ0FyRkQ7O0dBQU1WLFc7O01BQUFBLFc7QUF3RlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC40ZmUxM2IwODUzZWQ1Nzg3NDdmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6NjBweDtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG5sZWZ0OjA7XHJcbmhlaWdodDoxMDB2aDtcclxuei1pbmRleDoxNTA7XHJcbmJhY2tncm91bmQtY29sb3I6I2U5ZWNlZjtcclxuYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG50cmFuc2l0aW9uOmFsbCAwLjJzO1xyXG53aWR0aDokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMjAwcHhcIiA6IFwiNjBweFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbmBcclxuY29uc3QgSW5uZXJEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nOjVweDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uRGl2PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3lvcjp5ZWxsb3c7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG53aWR0aDo5NiU7XHJcbmBcclxuY29uc3QgTGk9c3R5bGVkLmxpYFxyXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6N3B4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Q0RDRENDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuYFxyXG5cclxuLy9jb25zdCBJY29uPXN0eWxlZC5pYFxyXG4vL2NvbG9yOiNDNzAwMzk7XHJcbi8vYFxyXG5jb25zdCBDbG9zZW9wZW49c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYFxyXG5cclxuY29uc3QgTGVmdHRvb2xiYXI9KHttYWtlYWN0aXZlLG15YWN0aXZlfSk9PntcclxuXHJcbiAgICBjb25zdCB7dXNlcmRhdGEsbG9nZ2VkfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IGZpcnN0bGlzdD11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIktheWRlZGlsZW5sZXJcIixwYXRoOmBzYXZlZGB9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJCZcSfZW5pbGVubGVyXCIscGF0aDpgbGlrZWRgfV0pXHJcbiAgICBjb25zdCBzZWNvbmRsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtZWRpdFwiLGRlc2M6XCJHw7ZuZGVyaWxlcmltXCIscGF0aDpcIi9nw7ZuZGVyaWxlclwifSx7aWNvbjpcImZhcyBmYS11c2Vyc1wiLGRlc2M6XCJUYXJ0xLHFn21hbGFyxLFtXCIscGF0aDpcIi90YXJ0xLHFn21hbGFyXCJ9XSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmRhdGEuVXNlcklkKVxyXG5cclxuICAgIH0sIFt1c2VyZGF0YV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxvZ2dlZCA/XHJcblxyXG4gICAgICAgICAgICA8RXh0ZXJpb3JEaXYgYWN0aXZlPXtteWFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICA8Q2xvc2VvcGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PnttYWtlYWN0aXZlKCFteWFjdGl2ZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGNvbG9yOlwiYmxhY2tcIixyb3RhdGU6bXlhY3RpdmUgPyB0cnVlIDogdW5kZWZpbmVkfX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXNlcmRhdGEuVXNlcklkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD17bXlhY3RpdmUgPyBcIjgwcHhcIiA6IFwiNTBweFwifSBoZWlnaHQ9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt1c2VyZGF0YS5Vc2VySWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwiLGNvbG9yOlwiIzI5MzI0MVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+PHNwYW4+e215YWN0aXZlID8gdXNlcmRhdGEuVXNlcm5hbWUgOiBcIi4uLlwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9bdXNlcsSxZF0vJHtpdGVtLnBhdGh9YH0gYXM9e2AvJHt1c2VyZGF0YS5Vc2VySWR9LyR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiNmZjBhNTRcIixjb2xvcjpcIndoaXRlXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6bXlhY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kbGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tzdHVmZl1cIiBhcz17YCR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiMxNjhhYWRcIixjb2xvcjpcIndoaXRlXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6bXlhY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRsaXN0LmN1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsaGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixsaW5laGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixiYWNrY29sb3I6XCIjRjBGMEYwXCIsY29sb3I6XCJibGFja1wifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6bXlhY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lckRpdj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0dG9vbGJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==