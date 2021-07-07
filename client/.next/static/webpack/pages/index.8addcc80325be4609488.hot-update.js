webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Lefttoolbar.js",
    _this = undefined,
    _s = $RefreshSig$();








var ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-1dtr19t-0"
})(["position:fixed;top:60px;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#e9ecef;box-shadow:3px 3px 3px rgba(0,0,0,0.2);transition:all 0.2s;width:", ""], function (_ref) {
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
            lineNumber: 90,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingBottom: "15px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
              onClick: function onClick() {
                return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.replace("/profile/".concat(userdata.UserId));
              },
              profile: "/car.jpg",
              width: myactive ? "80px" : "50px",
              height: myactive ? "80px" : "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 24
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
                  lineNumber: 99,
                  columnNumber: 91
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 24
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
                    lineNumber: 109,
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
                    lineNumber: 110,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
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
                    lineNumber: 123,
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
                    lineNumber: 124,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
                  lineNumber: 135,
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
                  lineNumber: 136,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXIuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3JEaXYiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJJbm5lckRpdiIsIkltYWdlRGl2IiwiTmF2aWdhdGlvbkRpdiIsIkxpIiwibGkiLCJDbG9zZW9wZW4iLCJMZWZ0dG9vbGJhciIsIm1ha2VhY3RpdmUiLCJteWFjdGl2ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwibG9nZ2VkIiwiZmlyc3RsaXN0IiwidXNlUmVmIiwiaWNvbiIsImRlc2MiLCJwYXRoIiwic2Vjb25kbGlzdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJVc2VySWQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJjb2xvciIsInJvdGF0ZSIsInVuZGVmaW5lZCIsInBhZGRpbmdCb3R0b20iLCJyb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJVc2VybmFtZSIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjdXJyZW50IiwibWFwIiwiaXRlbSIsImJhY2tjb2xvciIsImZvbnRTaXplIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrS0FVVDtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQVZTLENBQWpCO0tBQU1ILFc7QUFZTixJQUFNSSxRQUFRLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtB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RUFBRDtBQUFBLHdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sMkJBQVMsRUFBRUEsSUFBSSxDQUFDN0IsSUFBdEI7QUFBNEIsNEJBQVUsRUFBRTtBQUFDUSx5QkFBSyxFQUFDZixRQUFRLEdBQUcsTUFBSCxHQUFZLE1BQTNCO0FBQWtDZ0IsMEJBQU0sRUFBQ2hCLFFBQVEsR0FBRyxNQUFILEdBQVksTUFBN0Q7QUFBb0VpQiw4QkFBVSxFQUFDakIsUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUFuRztBQUEwR3FDLDZCQUFTLEVBQUMsU0FBcEg7QUFBOEhuQix5QkFBSyxFQUFDO0FBQXBJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFNLHVCQUFLLEVBQUU7QUFBQ2EsMkJBQU8sRUFBQy9CLFFBQVEsR0FBRyxPQUFILEdBQWEsTUFBOUI7QUFBcUNzQyw0QkFBUSxFQUFDLE1BQTlDO0FBQXFEQyw4QkFBVSxFQUFDO0FBQWhFLG1CQUFiO0FBQUEsNEJBQXVGSCxJQUFJLENBQUM1QjtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEb0I7QUFBQSxhQUF2QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRk0sR0ErREo7QUFsRU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUVILENBbEZEOztHQUFNVixXOztNQUFBQSxXO0FBcUZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWRkY2M4MDMyNWJlNDYwOTQ4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjYwcHg7XHJcbm92ZXJmbG93OmhpZGRlbjtcclxubGVmdDowO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbnotaW5kZXg6MTUwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNlOWVjZWY7XHJcbmJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxudHJhbnNpdGlvbjphbGwgMC4ycztcclxud2lkdGg6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIn1cclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25EaXY9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xveW9yOnllbGxvdztcclxubWFyZ2luLXRvcDo1cHg7XHJcbndpZHRoOjk2JTtcclxuYFxyXG5jb25zdCBMaT1zdHlsZWQubGlgXHJcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzo3cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDRENEQ0O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5gXHJcblxyXG4vL2NvbnN0IEljb249c3R5bGVkLmlgXHJcbi8vY29sb3I6I0M3MDAzOTtcclxuLy9gXHJcbmNvbnN0IENsb3Nlb3Blbj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzoxMHB4O1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBMZWZ0dG9vbGJhcj0oe21ha2VhY3RpdmUsbXlhY3RpdmV9KT0+e1xyXG5cclxuICAgIGNvbnN0IHt1c2VyZGF0YSxsb2dnZWR9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3QgZmlyc3RsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiS2F5ZGVkaWxlbmxlclwiLHBhdGg6YHNhdmVkYH0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkJlxJ9lbmlsZW5sZXJcIixwYXRoOmBsaWtlZGB9XSlcclxuICAgIGNvbnN0IHNlY29uZGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1lZGl0XCIsZGVzYzpcIkfDtm5kZXJpbGVyaW1cIixwYXRoOlwiL2fDtm5kZXJpbGVyXCJ9LHtpY29uOlwiZmFzIGZhLXVzZXJzXCIsZGVzYzpcIlRhcnTEscWfbWFsYXLEsW1cIixwYXRoOlwiL3RhcnTEscWfbWFsYXJcIn1dKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyZGF0YS5Vc2VySWQpXHJcblxyXG4gICAgfSwgW3VzZXJkYXRhXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbG9nZ2VkID9cclxuXHJcbiAgICAgICAgICAgIDxFeHRlcmlvckRpdiBhY3RpdmU9e215YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogIDxDbG9zZW9wZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9XCJmYXIgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9DbG9zZW9wZW4+Ki99XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e21ha2VhY3RpdmUoIW15YWN0aXZlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzNXB4XCIsY29sb3I6XCJibGFja1wiLHJvdGF0ZTpteWFjdGl2ZSA/IHRydWUgOiB1bmRlZmluZWR9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugb25DbGljaz17KCk9PnJvdXRlci5yZXBsYWNlKGAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gKX0gcHJvZmlsZT17XCIvY2FyLmpwZ1wifSAgd2lkdGg9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0gaGVpZ2h0PXtteWFjdGl2ZSA/IFwiODBweFwiIDogXCI1MHB4XCJ9Lz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXJkYXRhLlVzZXJJZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCIsY29sb3I6XCIjMjkzMjQxXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT48c3Bhbj57bXlhY3RpdmUgPyB1c2VyZGF0YS5Vc2VybmFtZSA6IFwiLi4uXCJ9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpteWFjdGl2ZSA/IFwiZmxleC1zdGFydFwiIDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0bGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1t1c2VyxLFkXS8ke2l0ZW0ucGF0aH1gfSBhcz17YC8ke3VzZXJkYXRhLlVzZXJJZH0vJHtpdGVtLnBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsbGluZWhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsYmFja2NvbG9yOlwiI2ZmMGE1NFwiLGNvbG9yOlwid2hpdGVcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpteWFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLGZvbnRTaXplOlwiMTVweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRsaXN0LmN1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW3N0dWZmXVwiIGFzPXtgJHtpdGVtLnBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsbGluZWhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsYmFja2NvbG9yOlwiIzE2OGFhZFwiLGNvbG9yOlwid2hpdGVcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpteWFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLGZvbnRTaXplOlwiMTVweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpteWFjdGl2ZSA/IFwiZmxleC1zdGFydFwiIDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiNGMEYwRjBcIixjb2xvcjpcImJsYWNrXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpteWFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLGZvbnRTaXplOlwiMTVweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lubmVyRGl2PlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yRGl2PlxyXG5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9