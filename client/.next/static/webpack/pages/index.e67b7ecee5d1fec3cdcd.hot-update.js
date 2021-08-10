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
    }
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on("Notification", function (data) {
      if (userdata.UserId) {
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["NotificationCountreq"])({
          setcountdata: setcountdata,
          UserId: userdata.UserId
        });
      }
    });
  }, [userdata]);

  var Reloadnav = function Reloadnav(order) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
      setnavdata: setnavdata,
      UserId: userdata.UserId,
      order: order,
      navdata: navdata
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
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, this);
}

_s(Mainlayout, "XcrPOsWj9Wd4KVtgfCKZXWFFUqY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJzb2NrZXQiLCJpbyIsIk1haW5sYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0YWN0aXZlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJuYXZkYXRhIiwic2V0bmF2ZGF0YSIsImNvdW50b2ZkYXRhIiwic2V0Y291bnRkYXRhIiwidXNlcm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnkiLCJVc2VySWQiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsIm9uIiwiZGF0YSIsIlJlbG9hZG5hdiIsIm9yZGVyIiwiTm90aWZpY2F0aW9ucmVxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUJBQVo7S0FBTUYsTTtBQUlOLElBQU1HLE1BQU0sR0FBQ0MsdURBQUUsQ0FBQyx1QkFBRCxDQUFmO0FBRWUsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFFbEJDLHNEQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFcENDLE1BRm9DO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG9CQUd4QkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FIYztBQUFBLE1BR3BDQyxRQUhvQyxlQUdwQ0EsUUFIb0M7O0FBQUEsbUJBSWhCTCxzREFBUSxDQUFDLEVBQUQsQ0FKUTtBQUFBLE1BSXBDTSxPQUpvQztBQUFBLE1BSTVCQyxVQUo0Qjs7QUFBQSxtQkFLVlAsc0RBQVEsQ0FBQyxDQUFELENBTEU7QUFBQSxNQUtwQ1EsV0FMb0M7QUFBQSxNQUt4QkMsWUFMd0I7O0FBTTNDLE1BQU1DLFNBQVMsR0FBQ0MsNkRBQVMsRUFBekI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pWLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ1EsU0FBUyxDQUFDRyxLQUFYLENBRk0sQ0FBVDtBQUtBRCx5REFBUyxDQUFDLFlBQUk7QUFFWCxRQUFHUCxRQUFRLENBQUNTLE1BQVosRUFBbUI7QUFDZEMsMkVBQW9CLENBQUM7QUFDakJOLG9CQUFZLEVBQUNBLFlBREk7QUFFakJLLGNBQU0sRUFBQ1QsUUFBUSxDQUFDUztBQUZDLE9BQUQsQ0FBcEI7QUFJSjtBQUNILEdBUlEsRUFRUCxDQUFDVCxRQUFELENBUk8sQ0FBVDtBQVVBTyx5REFBUyxDQUFDLFlBQUk7QUFFVmhCLFVBQU0sQ0FBQ29CLEVBQVAsQ0FBVSxjQUFWLEVBQXlCLFVBQUNDLElBQUQsRUFBUTtBQUU1QixVQUFHWixRQUFRLENBQUNTLE1BQVosRUFBbUI7QUFFaEJDLDZFQUFvQixDQUFDO0FBQ2pCTixzQkFBWSxFQUFDQSxZQURJO0FBRWpCSyxnQkFBTSxFQUFDVCxRQUFRLENBQUNTO0FBRkMsU0FBRCxDQUFwQjtBQUtGO0FBQ0wsS0FWRDtBQVlILEdBZFEsRUFjUCxDQUFDVCxRQUFELENBZE8sQ0FBVDs7QUFnQkEsTUFBTWEsU0FBUyxHQUFDLFNBQVZBLFNBQVUsQ0FBQ0MsS0FBRCxFQUFTO0FBRXJCQyxvRUFBZSxDQUFDO0FBQ1piLGdCQUFVLEVBQUNBLFVBREM7QUFFWk8sWUFBTSxFQUFDVCxRQUFRLENBQUNTLE1BRko7QUFHWkssV0FBSyxFQUFDQSxLQUhNO0FBSVpiLGFBQU8sRUFBQ0E7QUFKSSxLQUFELENBQWY7QUFPSCxHQVRELENBdkMyQyxDQWlEM0M7OztBQUNBLHNCQUNJLHFFQUFDLE1BQUQ7QUFBQSw0QkFDSSxxRUFBQyx5RUFBRDtBQUFPLGFBQU8sRUFBRTtBQUFBLGVBQUlKLFNBQVMsQ0FBQyxLQUFELENBQWI7QUFBQSxPQUFoQjtBQUFzQyxXQUFLLEVBQUVEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdGQUFEO0FBQVksZ0JBQVUsRUFBRWlCLFNBQXhCO0FBQW1DLFdBQUssRUFBRVYsV0FBMUM7QUFBdUQsVUFBSSxFQUFFRjtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFhLGNBQVEsRUFBRUwsTUFBdkI7QUFBK0IsZ0JBQVUsRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBS0kscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtILFFBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0E1RHVCRCxVO1VBTUphLHFEOzs7TUFOSWIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjdiN2VjZWU1ZDFmZWMzY2RjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMZWZ0dG9vbGJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ291bnRyZXEsTm90aWZpY2F0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcblxyXG5jb25zdCBCaWdkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy10b3A6ODBweDtcclxuYFxyXG5cclxuY29uc3Qgc29ja2V0PWlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbmxheW91dCh7Y2hpbGRyZW59KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW25hdmRhdGEsc2V0bmF2ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50b2ZkYXRhLHNldGNvdW50ZGF0YV09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRhY3RpdmUoZmFsc2UpOyAgXHJcbiAgICB9LCBbdXNlcm91dGVyLnF1ZXJ5XSlcclxuICAgIFxyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9ICAgIFxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTm90aWZpY2F0aW9uXCIsKGRhdGEpPT57XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uQ291bnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG4gICAgY29uc3QgUmVsb2FkbmF2PShvcmRlcik9PntcclxuXHJcbiAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBSZWxvYWRmdW5jPXtSZWxvYWRuYXZ9IENvdW50PXtjb3VudG9mZGF0YX0gRGF0YT17bmF2ZGF0YX0+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICB7Lyp0aGlzIHBhcnQgd2lsbCBiZSBjaGFuZ2VkKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9