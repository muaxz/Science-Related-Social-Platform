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
/* harmony import */ var _components_shared_Usercard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pages/Main/Lefttoolbar */ "./components/pages/Main/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shared/Navigation */ "./components/shared/Navigation.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();










var Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Rtlikewindow",
  componentId: "sc-14bmh8h-0"
})(["position:absolute;width:500px;height:350px;border-radius:5px;background-color:#c83349;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c = Rtlikewindow;
var Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Innerwindow",
  componentId: "sc-14bmh8h-1"
})(["padding:10px;background-color:white;height:100%;border-radius:5px;overflow:auto;"]);
_c2 = Innerwindow;
var Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-2"
})([""]);
function Home() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      userdata = _useContext.userdata;

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      windowactive = _useState6[0],
      setactive = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: order,
      seterrmsg: seterror
    });
  }, [order]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    /*document.addEventListener("scroll",()=>{
        window.scrollTo({top:0,behavior:"auto"})
    })
    */
  });

  var createrelation = function createrelation(postId, attribute) {
    Createrelation({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: "#C7C7C7",
      paddingTop: "100px",
      paddingLeft: "300px"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: "".concat(list.length > 0 ? "100vh" : "100%"),
        overflow: "hidden"
      },
      children: [list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__["Black"], {
          onClick: function onClick() {
            return setlist([]);
          },
          aktif: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              height: "40px",
              width: "95%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "white",
                cursor: "pointer"
              },
              "class": "fas fa-times-circle fa-lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
            children: [{
              name: "Sadık",
              image: "car.jpg"
            }, {
              name: "Aadık",
              image: "black.jpg"
            }, {
              name: "Musa",
              image: "yaprak.jpg"
            }, {
              name: "Selman",
              image: "led.jpg"
            }, {
              name: "Ahmet",
              image: "rocket.jpg"
            }, {
              name: "Duhan",
              image: "car.jpg"
            }, {
              name: "Sadık",
              image: "car.jpg"
            }, {
              name: "Sadık",
              image: "car.jpg"
            }].map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Usercard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                firstname: item.name,
                imageurl: item.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maxWidth: "650px"
        },
        children: (console.log(contentdata), contentdata.length > 0 ? contentdata.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            createrelation: createrelation,
            showwindow: function showwindow(stateoflist) {
              return setlist(stateoflist);
            },
            like: item.Like //bu bir obje array
            ,
            retweet: item.Retweet,
            comment: item.allcomments,
            //key numarası
            profileimage: "car.jpg",
            title: item.title,
            titleimage: "yaprak.jpg",
            username: "Duhan",
            usersurname: "Öztürk" //bir obje props
            ,
            subtitle: item.subtitle,
            date: "8 dakika önce"
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this);
        }) : "Loading...")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, this);
}

_s(Home, "xQ9+VTNWLlx6wCaKW+Kuiu5Vl+M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIlJ0bGlrZXdpbmRvdyIsInN0eWxlZCIsImRpdiIsIklubmVyd2luZG93IiwiRmxleGRpdiIsIkhvbWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiYWN0aXZlbGlrZSIsInNldGFjdGl2ZWxpa2UiLCJsaXN0Iiwic2V0bGlzdCIsIndpbmRvd2FjdGl2ZSIsInNldGFjdGl2ZSIsInVzZUVmZmVjdCIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGVycm1zZyIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwiYXR0cmlidXRlIiwiQ3JlYXRlcmVsYXRpb24iLCJVc2VySWQiLCJQb3N0SWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJoZWlnaHQiLCJsZW5ndGgiLCJvdmVyZmxvdyIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiY3Vyc29yIiwibmFtZSIsImltYWdlIiwibWFwIiwiaXRlbSIsIm1heFdpZHRoIiwiY29uc29sZSIsImxvZyIsImluZGV4Iiwic3RhdGVvZmxpc3QiLCJMaWtlIiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxZQUFZLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMEpBQWxCO0tBQU1GLFk7QUFXTixJQUFN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QUNaLHFFQUFDLHNFQUFEO0FBQ0EsMEJBQWMsRUFBRTFCLGNBRGhCO0FBRUEsc0JBQVUsRUFBRSxvQkFBQzJCLFdBQUQ7QUFBQSxxQkFBZWxDLE9BQU8sQ0FBQ2tDLFdBQUQsQ0FBdEI7QUFBQSxhQUZaO0FBR0EsZ0JBQUksRUFBRUwsSUFBSSxDQUFDTSxJQUhYLENBR2dCO0FBSGhCO0FBSUEsbUJBQU8sRUFBRU4sSUFBSSxDQUFDTyxPQUpkO0FBS0EsbUJBQU8sRUFBRVAsSUFBSSxDQUFDUSxXQUxkO0FBTVc7QUFDWCx3QkFBWSxFQUFFLFNBUGQ7QUFRQSxpQkFBSyxFQUFFUixJQUFJLENBQUNTLEtBUlo7QUFTQSxzQkFBVSxFQUFFLFlBVFo7QUFVQSxvQkFBUSxFQUFFLE9BVlY7QUFXQSx1QkFBVyxFQUFFLFFBWGIsQ0FXc0I7QUFYdEI7QUFZQSxvQkFBUSxFQUFFVCxJQUFJLENBQUNVLFFBWmY7QUFhQSxnQkFBSSxFQUFFO0FBYk4sYUFNS04sS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBaEIsQ0FEQSxHQWtCRSxZQXJCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0RIOztHQXpGdUIvQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA5OGYwZjU2ZjA5YTYxMmIwMGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQgVXNlcmNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1VzZXJjYXJkXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25iYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb25cIjtcclxuXHJcblxyXG5cclxuY29uc3QgUnRsaWtld2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDo1MDBweDtcclxuaGVpZ2h0OjM1MHB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjojYzgzMzQ5O1xyXG56LWluZGV4OjEwMDtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBJbm5lcndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmhlaWdodDoxMDAlO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWN0aXZlbGlrZSxzZXRhY3RpdmVsaWtlXT11c2VTdGF0ZSgpXHJcbiAgICBjb25zdFtsaXN0LHNldGxpc3RdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtvcmRlcl0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKT0+e1xyXG4gICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsYmVoYXZpb3I6XCJhdXRvXCJ9KVxyXG4gICAgICAgfSlcclxuICAgICAgICovXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlKT0+e1xyXG5cclxuICAgICAgICBDcmVhdGVyZWxhdGlvbih7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI0M3QzdDN1wiLHBhZGRpbmdUb3A6XCIxMDBweFwiLHBhZGRpbmdMZWZ0OlwiMzAwcHhcIn19PiBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpgJHtsaXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OlwiaGlkZGVuXCJ9fT5cclxuICAgICAgICAgICAgICAgIHsgbGlzdC5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2sgb25DbGljaz17KCk9PnNldGxpc3QoW10pfSAgYWt0aWY9e3RydWV9PjwvQmxhY2s+XHJcbiAgICAgICAgICAgICAgICA8UnRsaWtld2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIsd2lkdGg6XCI5NSVcIixtYXJnaW46XCJhdXRvXCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsY3Vyc29yOlwicG9pbnRlclwifX0gY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1t7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIkFhZMSxa1wiLGltYWdlOlwiYmxhY2suanBnXCJ9LHtuYW1lOlwiTXVzYVwiLGltYWdlOlwieWFwcmFrLmpwZ1wifSx7bmFtZTpcIlNlbG1hblwiLGltYWdlOlwibGVkLmpwZ1wifSx7bmFtZTpcIkFobWV0XCIsaW1hZ2U6XCJyb2NrZXQuanBnXCJ9LHtuYW1lOlwiRHVoYW5cIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn1dLm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcmNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdldXJsPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICA8L1J0bGlrZXdpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50ZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImNhci5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e1wiOCBkYWtpa2Egw7ZuY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=