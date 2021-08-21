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
})([""]);
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
      lineNumber: 110,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJzb2NrZXQiLCJpbyIsIk1haW5sYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0YWN0aXZlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJuYXZkYXRhIiwic2V0bmF2ZGF0YSIsImNvdW50b2ZkYXRhIiwic2V0Y291bnRkYXRhIiwibGFzdHJlY29yZCIsInNldGxhc3RyZWNvcmQiLCJsYXN0cmVjb3JkYWN0aXZlIiwic2V0bGFzdHJlY29yZGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiVXNlcklkIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJOb3RpZmljYXRpb25yZXEiLCJvcmRlciIsImxhc3Ryb3ciLCJsaXN0ZW5lciIsInByZXYiLCJvbiIsIlJlbG9hZG5hdiIsIlVwZGF0ZWNvdW50IiwiY29uc29sZSIsImxvZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBWjtLQUFNRixNO0FBR04sSUFBTUcsTUFBTSxHQUFDQyx1REFBRSxDQUFDLHVCQUFELENBQWY7QUFFZSxTQUFTQyxVQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUVsQkMsc0RBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUVwQ0MsTUFGb0M7QUFBQSxNQUU3QkMsU0FGNkI7O0FBQUEsb0JBR3hCQyx3REFBVSxD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QUFqQixLQUFELENBQXZCO0FBQ0gsR0FKRCxDQXBGMkMsQ0F5RjNDOzs7QUFDQSxzQkFDSSxxRUFBQyxNQUFEO0FBQUEsNEJBQ0kscUVBQUMseUVBQUQ7QUFBTyxhQUFPLEVBQUU7QUFBQSxlQUFJaEIsU0FBUyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BQWhCO0FBQXNDLFdBQUssRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFBWSxZQUFNLEVBQUUwQixXQUFwQjtBQUFpQyxnQkFBVSxFQUFFRCxTQUE3QztBQUF3RCxXQUFLLEVBQUVsQixXQUEvRDtBQUE0RSxVQUFJLEVBQUVGO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLHNFQUFEO0FBQWEsY0FBUSxFQUFFTCxNQUF2QjtBQUErQixnQkFBVSxFQUFFQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFLSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFNS0gsUUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQXBHdUJELFU7VUFRSmlCLHFEOzs7TUFSSWpCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTIzZDM3YjUyOGIzNTE4ZmE0YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGVmdHRvb2xiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0xlZnR0b29sYmFyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkNvdW50cmVxLE5vdGlmaWNhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25jb3VudH0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5cclxuXHJcbmNvbnN0IEJpZ2Rpdj1zdHlsZWQuZGl2YFxyXG5gXHJcblxyXG5jb25zdCBzb2NrZXQ9aW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWlubGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbbmF2ZGF0YSxzZXRuYXZkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnRvZmRhdGEsc2V0Y291bnRkYXRhXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsYXN0cmVjb3JkLHNldGxhc3RyZWNvcmRdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhc3RyZWNvcmRhY3RpdmUsc2V0bGFzdHJlY29yZGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdXNlcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0YWN0aXZlKGZhbHNlKTsgIFxyXG4gICAgfSwgW3VzZXJvdXRlci5xdWVyeV0pXHJcbiAgICBcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgXHJcbiAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uQ291bnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0Y291bnRkYXRhOnNldGNvdW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsYXN0cm93OmZhbHNlLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgIH0gICBcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ZW5lcj0oKT0+e1xyXG4gICAgICAgICAgICBzZXRsYXN0cmVjb3JkYWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRsYXN0cmVjb3JkKHByZXY9PnByZXYrMSk7XHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRjb3VudGRhdGE6c2V0Y291bnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHNvY2tldC5vbihcIk5vdGlmaWNhdGlvblwiLGxpc3RlbmVyKSBcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgICAgaWYodXNlcmRhdGEuVXNlcklkICYmIGxhc3RyZWNvcmRhY3RpdmUpe1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvdW50b2ZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbGFzdHJvdzp0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxbbGFzdHJlY29yZF0pXHJcblxyXG4gICAgY29uc3QgUmVsb2FkbmF2PShvcmRlcik9PntcclxuXHJcbiAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICBsYXN0cm93OmZhbHNlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWNvdW50PSgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdHJlY29yZGFjdGl2ZSlcclxuICAgICAgICBzZXRjb3VudGRhdGEoMCk7XHJcbiAgICAgICAgVXBkYXRlTm90aWZpY2F0aW9uY291bnQoe1VzZXJJZDp1c2VyZGF0YS5Vc2VySWR9KTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCaWdkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWt0aWY9e2FjdGl2ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gVXBkYXRlPXtVcGRhdGVjb3VudH0gUmVsb2FkZnVuYz17UmVsb2FkbmF2fSBDb3VudD17Y291bnRvZmRhdGF9IERhdGE9e25hdmRhdGF9PjwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPExlZnR0b29sYmFyIG15YWN0aXZlPXthY3RpdmV9IG1ha2VhY3RpdmU9e3NldGFjdGl2ZX0+PC9MZWZ0dG9vbGJhcj5cclxuICAgICAgICAgICAgey8qdGhpcyBwYXJ0IHdpbGwgYmUgY2hhbmdlZCovfVxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CaWdkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==