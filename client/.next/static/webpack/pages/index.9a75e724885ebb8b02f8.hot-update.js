webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/Layout/mainlayout.js":
/*!*****************************************!*\
  !*** ./containers/Layout/mainlayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mainlayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Lefttoolbar */ "./components/shared/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Navigation/Navigation */ "./components/shared/Navigation/Navigation.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js",
    _s = $RefreshSig$();












var Bigdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mainlayout__Bigdiv",
  componentId: "sc-1umognl-0"
})(["padding-top:60px;"]);
_c = Bigdiv;
var Goupicon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mainlayout__Goupicon",
  componentId: "sc-1umognl-1"
})(["transition:all 0.5s;opacity:", " z-index:300;"], function (_ref) {
  var up = _ref.up;
  return up ? "1" : "0";
});
_c2 = Goupicon;
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:3001");
function Mainlayout(_ref2) {
  _s();

  var children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState[0],
      setactive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      goup = _useState2[0],
      setgoup = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      navdata = _useState3[0],
      setnavdata = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      countofdata = _useState4[0],
      setcountdata = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      lastrecord = _useState5[0],
      setlastrecord = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lastrecordactive = _useState6[0],
      setlastrecordactive = _useState6[1];

  var userouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setactive(false);
  }, [userouter.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        setgoup(true);
      } else {
        setgoup(false);
      }
    });

    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["NotificationCountreq"])({
        setcountdata: setcountdata,
        UserId: userdata.UserId
      });
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: 10,
        navdata: navdata,
        lastrow: false
      });
    }
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var listener = function listener() {
      setlastrecordactive(true);
      setlastrecord(function (prev) {
        return prev + 1;
      });

      if (userdata.UserId) {
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["NotificationCountreq"])({
          setcountdata: setcountdata,
          UserId: userdata.UserId
        });
      }
    };

    socket.on("Notification", listener);
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userdata.UserId && lastrecordactive) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: countofdata,
        navdata: navdata,
        lastrow: true
      });
    }
  }, [lastrecord]);

  var Reloadnav = function Reloadnav(order) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
      setnavdata: setnavdata,
      UserId: userdata.UserId,
      order: order,
      navdata: navdata,
      lastrow: false
    });
  };

  var Updatecount = function Updatecount() {
    console.log("updatinnggg");
    setcountdata(0);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["UpdateNotificationcount"])({
      UserId: userdata.UserId
    });
  }; //


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bigdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Black"], {
      onClick: function onClick() {
        return setactive(false);
      },
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Goupicon, {
      onClick: function onClick() {
        window.scrollTo({
          top: 0
        });
      },
      up: goup,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "fas fa-chevron-up fa-lg",
        Iconconfig: {
          position: "fixed",
          bottom: "40px",
          right: "40px",
          backcolor: "#ef233c",
          color: "white",
          width: "40px",
          height: "40px",
          lineheight: "40px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, this);
}

_s(Mainlayout, "HF7gCR2O8IFytqHdujnJFpBhpqU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c3 = Mainlayout;

var _c, _c2, _c3;

$RefreshReg$(_c, "Bigdiv");
$RefreshReg$(_c2, "Goupicon");
$RefreshReg$(_c3, "Mainlayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJHb3VwaWNvbiIsInVwIiwic29ja2V0IiwiaW8iLCJNYWlubGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldGFjdGl2ZSIsImdvdXAiLCJzZXRnb3VwIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJuYXZkYXRhIiwic2V0bmF2ZGF0YSIsImNvdW50b2ZkYXRhIiwic2V0Y291bnRkYXRhIiwibGFzdHJlY29yZCIsInNldGxhc3RyZWNvcmQiLCJsYXN0cmVjb3JkYWN0aXZlIiwic2V0bGFzdHJlY29yZGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIlVzZXJJZCIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwiTm90aWZpY2F0aW9ucmVxIiwib3JkZXIiLCJsYXN0cm93IiwibGlzdGVuZXIiLCJwcmV2Iiwib24iLCJSZWxvYWRuYXYiLCJVcGRhdGVjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsInNjcm9sbFRvIiwidG9wIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImJhY2tjb2xvciIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUJBQVo7S0FBTUYsTTtBQUlOLElB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QUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFhLGNBQVEsRUFBRVAsTUFBdkI7QUFBK0IsZ0JBQVUsRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBS0kscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUkscUVBQUMsUUFBRDtBQUFVLGFBQU8sRUFBRSxtQkFBSTtBQUFDb0IsY0FBTSxDQUFDZSxRQUFQLENBQWdCO0FBQUNDLGFBQUcsRUFBQztBQUFMLFNBQWhCO0FBQXlCLE9BQWpEO0FBQW1ELFFBQUUsRUFBRW5DLElBQXZEO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQ7QUFBTSxpQkFBUyxFQUFDLHlCQUFoQjtBQUEwQyxrQkFBVSxFQUFFO0FBQUNvQyxrQkFBUSxFQUFDLE9BQVY7QUFBa0JDLGdCQUFNLEVBQUMsTUFBekI7QUFBZ0NDLGVBQUssRUFBQyxNQUF0QztBQUE2Q0MsbUJBQVMsRUFBQyxTQUF2RDtBQUFpRUMsZUFBSyxFQUFDLE9BQXZFO0FBQStFQyxlQUFLLEVBQUMsTUFBckY7QUFBNEZDLGdCQUFNLEVBQUMsTUFBbkc7QUFBMEdDLG9CQUFVLEVBQUM7QUFBckg7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixFQVNLL0MsUUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztHQXJIdUJELFU7VUFTSm1CLHFEOzs7TUFUSW5CLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWE3NWU3MjQ4ODVlYmI4YjAyZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGVmdHRvb2xiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0xlZnR0b29sYmFyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ291bnRyZXEsTm90aWZpY2F0aW9ucmVxLFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50fSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcblxyXG5cclxuY29uc3QgQmlnZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjYwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEdvdXBpY29uPXN0eWxlZC5kaXZgXHJcbnRyYW5zaXRpb246YWxsIDAuNXM7XHJcbm9wYWNpdHk6JHsoe3VwfSk9PnVwID8gXCIxXCIgOiBcIjBcIn1cclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcbmNvbnN0IHNvY2tldD1pbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ291cCxzZXRnb3VwXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtuYXZkYXRhLHNldG5hdmRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudG9mZGF0YSxzZXRjb3VudGRhdGFdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhc3RyZWNvcmQsc2V0bGFzdHJlY29yZF09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZGFjdGl2ZSxzZXRsYXN0cmVjb3JkYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgICAgIHNldGFjdGl2ZShmYWxzZSk7ICBcclxuICAgIH0sIFt1c2Vyb3V0ZXIucXVlcnldKVxyXG4gICAgXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcblxyXG4gICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPiA1MDApe1xyXG4gICAgICAgICAgICAgIHNldGdvdXAodHJ1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgc2V0Z291cChmYWxzZSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRjb3VudGRhdGE6c2V0Y291bnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfSAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyPSgpPT57XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmRhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmQocHJldj0+cHJldisxKTtcclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uQ291bnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTm90aWZpY2F0aW9uXCIsbGlzdGVuZXIpIFxyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgICBpZih1c2VyZGF0YS5Vc2VySWQgJiYgbGFzdHJlY29yZGFjdGl2ZSl7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y291bnRvZmRhdGEsXHJcbiAgICAgICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsYXN0cm93OnRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFtsYXN0cmVjb3JkXSlcclxuXHJcbiAgICBjb25zdCBSZWxvYWRuYXY9KG9yZGVyKT0+e1xyXG5cclxuICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlY291bnQ9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5uZ2dnXCIpO1xyXG4gICAgICAgIHNldGNvdW50ZGF0YSgwKTtcclxuICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25jb3VudCh7VXNlcklkOnVzZXJkYXRhLlVzZXJJZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCaWdkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWt0aWY9e2FjdGl2ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gVXBkYXRlPXtVcGRhdGVjb3VudH0gUmVsb2FkZnVuYz17UmVsb2FkbmF2fSBDb3VudD17Y291bnRvZmRhdGF9IERhdGE9e25hdmRhdGF9PjwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPExlZnR0b29sYmFyIG15YWN0aXZlPXthY3RpdmV9IG1ha2VhY3RpdmU9e3NldGFjdGl2ZX0+PC9MZWZ0dG9vbGJhcj5cclxuICAgICAgICAgICAgey8qdGhpcyBwYXJ0IHdpbGwgYmUgY2hhbmdlZCovfVxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgICA8R291cGljb24gb25DbGljaz17KCk9Pnt3aW5kb3cuc2Nyb2xsVG8oe3RvcDowfSl9fSB1cD17Z291cH0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi11cCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImZpeGVkXCIsYm90dG9tOlwiNDBweFwiLHJpZ2h0OlwiNDBweFwiLGJhY2tjb2xvcjpcIiNlZjIzM2NcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI0MHB4XCIsaGVpZ2h0OlwiNDBweFwiLGxpbmVoZWlnaHQ6XCI0MHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvR291cGljb24+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9