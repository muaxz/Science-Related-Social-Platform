webpackHotUpdate_N_E("pages/profile/[username]",{

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
})(["transition:all 0.5s;opacity:", ";z-index:300;"], function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyJdLCJuYW1lcyI6WyJCaWdkaXYiLCJzdHlsZWQiLCJkaXYiLCJHb3VwaWNvbiIsInVwIiwic29ja2V0IiwiaW8iLCJNYWlubGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldGFjdGl2ZSIsImdvdXAiLCJzZXRnb3VwIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJuYXZkYXRhIiwic2V0bmF2ZGF0YSIsImNvdW50b2ZkYXRhIiwic2V0Y291bnRkYXRhIiwibGFzdHJlY29yZCIsInNldGxhc3RyZWNvcmQiLCJsYXN0cmVjb3JkYWN0aXZlIiwic2V0bGFzdHJlY29yZGFjdGl2ZSIsInVzZXJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIlVzZXJJZCIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwiTm90aWZpY2F0aW9ucmVxIiwib3JkZXIiLCJsYXN0cm93IiwibGlzdGVuZXIiLCJwcmV2Iiwib24iLCJSZWxvYWRuYXYiLCJVcGRhdGVjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsInNjcm9sbFRvIiwidG9wIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImJhY2tjb2xvciIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUJBQVo7S0FBTUYsTTtBQUlOLElB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QUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFhLGNBQVEsRUFBRVAsTUFBdkI7QUFBK0IsZ0JBQVUsRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBS0kscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUkscUVBQUMsUUFBRDtBQUFVLGFBQU8sRUFBRSxtQkFBSTtBQUFDb0IsY0FBTSxDQUFDZSxRQUFQLENBQWdCO0FBQUNDLGFBQUcsRUFBQztBQUFMLFNBQWhCO0FBQXlCLE9BQWpEO0FBQW1ELFFBQUUsRUFBRW5DLElBQXZEO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQ7QUFBTSxpQkFBUyxFQUFDLHlCQUFoQjtBQUEwQyxrQkFBVSxFQUFFO0FBQUNvQyxrQkFBUSxFQUFDLE9BQVY7QUFBa0JDLGdCQUFNLEVBQUMsTUFBekI7QUFBZ0NDLGVBQUssRUFBQyxNQUF0QztBQUE2Q0MsbUJBQVMsRUFBQyxTQUF2RDtBQUFpRUMsZUFBSyxFQUFDLE9BQXZFO0FBQStFQyxlQUFLLEVBQUMsTUFBckY7QUFBNEZDLGdCQUFNLEVBQUMsTUFBbkc7QUFBMEdDLG9CQUFVLEVBQUM7QUFBckg7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixFQVNLL0MsUUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztHQXJIdUJELFU7VUFTSm1CLHFEOzs7TUFUSW5CLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmRmNzE4ZjE0ZmZmNjE3ZDliMTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvSWNvblwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkNvdW50cmVxLE5vdGlmaWNhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25jb3VudH0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5cclxuXHJcbmNvbnN0IEJpZ2Rpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXRvcDo2MHB4O1xyXG5gXHJcblxyXG5jb25zdCBHb3VwaWNvbj1zdHlsZWQuZGl2YFxyXG50cmFuc2l0aW9uOmFsbCAwLjVzO1xyXG5vcGFjaXR5OiR7KHt1cH0pPT51cCA/IFwiMVwiIDogXCIwXCJ9O1xyXG56LWluZGV4OjMwMDtcclxuYFxyXG5cclxuY29uc3Qgc29ja2V0PWlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbmxheW91dCh7Y2hpbGRyZW59KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnb3VwLHNldGdvdXBdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW25hdmRhdGEsc2V0bmF2ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50b2ZkYXRhLHNldGNvdW50ZGF0YV09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZCxzZXRsYXN0cmVjb3JkXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsYXN0cmVjb3JkYWN0aXZlLHNldGxhc3RyZWNvcmRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVzZXJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgc2V0YWN0aXZlKGZhbHNlKTsgIFxyXG4gICAgfSwgW3VzZXJvdXRlci5xdWVyeV0pXHJcbiAgICBcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntcclxuXHJcbiAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDUwMCl7XHJcbiAgICAgICAgICAgICAgc2V0Z291cCh0cnVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBzZXRnb3VwKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9ICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXI9KCk9PntcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZGFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZChwcmV2PT5wcmV2KzEpO1xyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y291bnRkYXRhOnNldGNvdW50ZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzb2NrZXQub24oXCJOb3RpZmljYXRpb25cIixsaXN0ZW5lcikgXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCAmJiBsYXN0cmVjb3JkYWN0aXZlKXtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpjb3VudG9mZGF0YSxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6dHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0sW2xhc3RyZWNvcmRdKVxyXG5cclxuICAgIGNvbnN0IFJlbG9hZG5hdj0ob3JkZXIpPT57XHJcblxyXG4gICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVjb3VudD0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRpbm5nZ2dcIik7XHJcbiAgICAgICAgc2V0Y291bnRkYXRhKDApO1xyXG4gICAgICAgIFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50KHtVc2VySWQ6dXNlcmRhdGEuVXNlcklkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBVcGRhdGU9e1VwZGF0ZWNvdW50fSBSZWxvYWRmdW5jPXtSZWxvYWRuYXZ9IENvdW50PXtjb3VudG9mZGF0YX0gRGF0YT17bmF2ZGF0YX0+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICB7Lyp0aGlzIHBhcnQgd2lsbCBiZSBjaGFuZ2VkKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIDxHb3VwaWNvbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5zY3JvbGxUbyh7dG9wOjB9KX19IHVwPXtnb3VwfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXVwIGZhLWxnXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiZml4ZWRcIixib3R0b206XCI0MHB4XCIscmlnaHQ6XCI0MHB4XCIsYmFja2NvbG9yOlwiI2VmMjMzY1wiLGNvbG9yOlwid2hpdGVcIix3aWR0aDpcIjQwcHhcIixoZWlnaHQ6XCI0MHB4XCIsbGluZWhlaWdodDpcIjQwcHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgPC9Hb3VwaWNvbj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQmlnZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=