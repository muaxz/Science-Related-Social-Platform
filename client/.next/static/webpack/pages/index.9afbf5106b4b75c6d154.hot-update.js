webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();





var Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Rtlikewindow",
  componentId: "sc-14bmh8h-0"
})(["position:absolute;width:300px;height:400px;background-color:grey;borrder:2px solid black;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c = Rtlikewindow;
var Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Innerwindow",
  componentId: "sc-14bmh8h-1"
})(["padding:10px;"]);
_c2 = Innerwindow;
function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      errormsg = _useState3[0],
      seterror = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      activelike = _useState4[0],
      setactivelike = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      list = _useState5[0],
      setlist = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: order,
      seterrmsg: seterror
    });
  }, [order]);

  var showindow = function showindow(stateoflist) {
    setlist(stateoflist);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
        children: list.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: item.firstname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 27
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: "60%",
        margin: "auto"
      },
      children: (console.log(contentdata), contentdata.length > 0 ? contentdata.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          like: item.Like,
          retweet: item.Retweet,
          comment: item.allcomments,
          //key numarası
          profileimage: "car.jpg",
          title: item.title,
          titleimage: "led.jpg",
          username: "duhan",
          usersurname: "öztürk" //bir obje props
          ,
          subtitle: item.subtitle,
          date: item.createdAt
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 18
        }, _this);
      }) : "Loading...")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(Home, "VD6ugO9rwv0F53oP/KOBmIj7GWI=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Rtlikewindow");
$RefreshReg$(_c2, "Innerwindow");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIlJ0bGlrZXdpbmRvdyIsInN0eWxlZCIsImRpdiIsIklubmVyd2luZG93IiwiSG9tZSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiYWN0aXZlbGlrZSIsInNldGFjdGl2ZWxpa2UiLCJsaXN0Iiwic2V0bGlzdCIsInVzZUVmZmVjdCIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGVycm1zZyIsInNob3dpbmRvdyIsInN0YXRlb2ZsaXN0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImZpcnN0bmFtZSIsIndpZHRoIiwibWFyZ2luIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiTGlrZSIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZKQUFsQjtLQUFNRixZO0FBV04sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFCQUFqQjtNQUFNQyxXO0FBSVMsU0FBU0MsSUFBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3BCQyxXQURvQjtBQUFBLE1BQ1JDLGNBRFE7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFcEJHLEtBRm9CO0FBQUEsTUFFZEMsUUFGYzs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxLQUFELENBSFA7QUFBQSxNQUdwQkssUUFIb0I7QUFBQSxNQUdYQyxRQUhXOztBQUFBLG1CQUlNTixzREFBUSxFQUpkO0FBQUEsTUFJcEJPLFVBSm9CO0FBQUEsTUFJVEMsYUFKUzs7QUFBQSxtQkFLTlIsc0RBQVEsQ0FBQyxFQUFELENBTEY7QUFBQSxNQUtwQlMsSUFMb0I7QUFBQSxNQUtmQyxPQUxlOztBQU8xQkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLDREQUFPLENBQUM7QUFDSkMsaUJBQVcsRUFBQ1osV0FEUjtBQUVKQyxvQkFBYyxFQUFDQSxjQUZYO0FBR0pDLFdBQUssRUFBQ0EsS0FIRjtBQUlKVyxlQUFTLEVBQUNSO0FBSk4sS0FBRCxDQUFQO0FBTUgsR0FQUSxFQU9QLENBQUNILEtBQUQsQ0FQTyxDQUFUOztBQVNBLE1BQU1ZLFNBQVMsR0FBQyxTQUFWQSxTQUFVLENBQUNDLFdBQUQsRUFBZTtBQUM1Qk4sV0FBTyxDQUFDTSxXQUFELENBQVA7QUFDRixHQUZEOztBQUlBLHNCQUNJO0FBQUEsZUFDTVAsSUFBSSxDQUFDUSxNQUFMLEdBQWMsQ0FBZCxnQkFDQSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0kscUVBQUMsV0FBRDtBQUFBLGtCQUNLUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsOEJBQ1Y7QUFBQSxzQkFBTUEsSUFBSSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxHQVFDLEVBVFAsZUFXRTtBQUFLLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUMsS0FBUDtBQUFhQyxjQUFNLEVBQUM7QUFBcEIsT0FBWjtBQUFBLGlCQUVLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWXZCLFdBQVosR0FDQUEsV0FBVyxDQUFDZ0IsTUFBWixHQUFxQixDQUFyQixHQUNBaEIsV0FBVyxDQUFDaUIsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU1NLEtBQU47QUFBQSw0QkFDZCxxRUFBQyxzRUFBRDtBQUNBLGNBQUksRUFBRU4sSUFBSSxDQUFDTyxJQURYO0FBRUEsaUJBQU8sRUFBRVAsSUFBSSxDQUFDUSxPQUZkO0FBR0EsaUJBQU8sRUFBRVIsSUFBSSxDQUFDUyxXQUhkO0FBSVc7QUFDWCxzQkFBWSxFQUFFLFNBTGQ7QUFNQSxlQUFLLEVBQUVULElBQUksQ0FBQ1UsS0FOWjtBQU9BLG9CQUFVLEVBQUUsU0FQWjtBQVFBLGtCQUFRLEVBQUUsT0FSVjtBQVNBLHFCQUFXLEVBQUUsUUFUYixDQVNzQjtBQVR0QjtBQVVBLGtCQUFRLEVBQUVWLElBQUksQ0FBQ1csUUFWZjtBQVdBLGNBQUksRUFBRVgsSUFBSSxDQUFDWTtBQVhYLFdBSUtOLEtBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWhCLENBREEsR0FnQkUsWUFuQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQ0g7O0dBeER1QjFCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWFmYmY1MTA2YjRiNzVjNmQxNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5cclxuXHJcbmNvbnN0IFJ0bGlrZXdpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDo0MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG5ib3JyZGVyOjJweCBzb2xpZCBibGFjaztcclxuei1pbmRleDoxMDA7XHJcbnRvcDo1MCU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbmBcclxuY29uc3QgSW5uZXJ3aW5kb3c9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVsaWtlLHNldGFjdGl2ZWxpa2VdPXVzZVN0YXRlKClcclxuICAgIGNvbnN0W2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICBjb25zdCBzaG93aW5kb3c9KHN0YXRlb2ZsaXN0KT0+e1xyXG4gICAgICAgc2V0bGlzdChzdGF0ZW9mbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IGxpc3QubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgPFJ0bGlrZXdpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgPElubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpc3QubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLmZpcnN0bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0lubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgPC9SdGxpa2V3aW5kb3c+IFxyXG4gICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjYwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRkYXRhKSxcclxuICAgICAgICAgICAgICAgY29udGVudGRhdGEubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfVxyXG4gICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImNhci5qcGdcIn1cclxuICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcImxlZC5qcGdcIn1cclxuICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJkdWhhblwifVxyXG4gICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsO2enTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgIDogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=