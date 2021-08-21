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
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js",
    _s = $RefreshSig$();











var Bigdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mainlayout__Bigdiv",
  componentId: "sc-1umognl-0"
})(["padding-top:80px;"]);
_c = Bigdiv;
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:3001");
function Mainlayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState[0],
      setactive = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      navdata = _useState2[0],
      setnavdata = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      countofdata = _useState3[0],
      setcountdata = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      lastrecord = _useState4[0],
      setlastrecord = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lastrecordactive = _useState5[0],
      setlastrecordactive = _useState5[1];

  var userouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setactive(false);
  }, [userouter.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["NotificationCountreq"])({
        setcountdata: setcountdata,
        UserId: userdata.UserId
      });
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
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
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["NotificationCountreq"])({
          setcountdata: setcountdata,
          UserId: userdata.UserId
        });
      }
    };

    socket.on("Notification", listener);
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userdata.UserId && lastrecordactive) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: countofdata,
        navdata: navdata,
        lastrow: true
      });
    }
  }, [lastrecord]);

  var Reloadnav = function Reloadnav(order) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
      setnavdata: setnavdata,
      UserId: userdata.UserId,
      order: order,
      navdata: navdata,
      lastrow: false
    });
  };

  var Updatecount = function Updatecount() {
    console.log(lastrecordactive);
    setcountdata(0);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["UpdateNotificationcount"])({
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
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }, this);
}

_s(Mainlayout, "WwlPQxciutjrtuUBQVdRCjywyGI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c2 = Mainlayout;

var _c, _c2;

$RefreshReg$(_c, "Bigdiv");
$RefreshReg$(_c2, "Mainlayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJzb2NrZXQiLCJpbyIsIk1haW5sYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0YWN0aXZlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJuYXZkYXRhIiwic2V0bmF2ZGF0YSIsImNvdW50b2ZkYXRhIiwic2V0Y291bnRkYXRhIiwibGFzdHJlY29yZCIsInNldGxhc3RyZWNvcmQiLCJsYXN0cmVjb3JkYWN0aXZlIiwic2V0bGFzdHJlY29yZGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiVXNlcklkIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJOb3RpZmljYXRpb25yZXEiLCJvcmRlciIsImxhc3Ryb3ciLCJsaXN0ZW5lciIsInByZXYiLCJvbiIsIlJlbG9hZG5hdiIsIlVwZGF0ZWNvdW50IiwiY29uc29sZSIsImxvZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUJBQVo7S0FBTUYsTTtBQUlOLElBQU1HLE1BQU0sR0FBQ0MsdURBQUUsQ0FBQyx1QkFBRCxDQUFmO0FBRWUsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFFbEJDLHNEQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFcENDLE1BRm9DO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG9CQUd4QkMsd0RBQVUs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QUFBakIsS0FBRCxDQUF2QjtBQUNILEdBSkQsQ0FwRjJDLENBeUYzQzs7O0FBQ0Esc0JBQ0kscUVBQUMsTUFBRDtBQUFBLDRCQUNJLHFFQUFDLHlFQUFEO0FBQU8sYUFBTyxFQUFFO0FBQUEsZUFBSWhCLFNBQVMsQ0FBQyxLQUFELENBQWI7QUFBQSxPQUFoQjtBQUFzQyxXQUFLLEVBQUVEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdGQUFEO0FBQVksWUFBTSxFQUFFMEIsV0FBcEI7QUFBaUMsZ0JBQVUsRUFBRUQsU0FBN0M7QUFBd0QsV0FBSyxFQUFFbEIsV0FBL0Q7QUFBNEUsVUFBSSxFQUFFRjtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFhLGNBQVEsRUFBRUwsTUFBdkI7QUFBK0IsZ0JBQVUsRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBS0kscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtILFFBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0FwR3VCRCxVO1VBUUppQixxRDs7O01BUklqQixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2ZWVjYmU4YzQxN2I1MWRhMmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Db3VudHJlcSxOb3RpZmljYXRpb25yZXEsVXBkYXRlTm90aWZpY2F0aW9uY291bnR9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuXHJcblxyXG5jb25zdCBCaWdkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy10b3A6ODBweDtcclxuYFxyXG5cclxuY29uc3Qgc29ja2V0PWlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbmxheW91dCh7Y2hpbGRyZW59KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW25hdmRhdGEsc2V0bmF2ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50b2ZkYXRhLHNldGNvdW50ZGF0YV09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZCxzZXRsYXN0cmVjb3JkXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsYXN0cmVjb3JkYWN0aXZlLHNldGxhc3RyZWNvcmRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVzZXJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldGFjdGl2ZShmYWxzZSk7ICBcclxuICAgIH0sIFt1c2Vyb3V0ZXIucXVlcnldKVxyXG4gICAgXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIFxyXG4gICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9ICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXI9KCk9PntcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZGFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZChwcmV2PT5wcmV2KzEpO1xyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y291bnRkYXRhOnNldGNvdW50ZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzb2NrZXQub24oXCJOb3RpZmljYXRpb25cIixsaXN0ZW5lcikgXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCAmJiBsYXN0cmVjb3JkYWN0aXZlKXtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpjb3VudG9mZGF0YSxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6dHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0sW2xhc3RyZWNvcmRdKVxyXG5cclxuICAgIGNvbnN0IFJlbG9hZG5hdj0ob3JkZXIpPT57XHJcblxyXG4gICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVjb3VudD0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RyZWNvcmRhY3RpdmUpXHJcbiAgICAgICAgc2V0Y291bnRkYXRhKDApO1xyXG4gICAgICAgIFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50KHtVc2VySWQ6dXNlcmRhdGEuVXNlcklkfSk7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmlnZGl2PlxyXG4gICAgICAgICAgICA8QmxhY2sgb25DbGljaz17KCk9PnNldGFjdGl2ZShmYWxzZSl9IGFrdGlmPXthY3RpdmV9PjwvQmxhY2s+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIFVwZGF0ZT17VXBkYXRlY291bnR9IFJlbG9hZGZ1bmM9e1JlbG9hZG5hdn0gQ291bnQ9e2NvdW50b2ZkYXRhfSBEYXRhPXtuYXZkYXRhfT48L05hdmlnYXRpb24+XHJcbiAgICAgICAgICAgIDxMZWZ0dG9vbGJhciBteWFjdGl2ZT17YWN0aXZlfSBtYWtlYWN0aXZlPXtzZXRhY3RpdmV9PjwvTGVmdHRvb2xiYXI+XHJcbiAgICAgICAgICAgIHsvKnRoaXMgcGFydCB3aWxsIGJlIGNoYW5nZWQqL31cclxuICAgICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQmlnZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=