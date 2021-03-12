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
          lineNumber: 72,
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
              className: "fas fa-times-circle fa-lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
                lineNumber: 81,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maxWidth: "650px",
          margin: "auto"
        },
        children: (console.log(contentdata), contentdata.length > 0 ? contentdata.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            postId: item.id,
            content: item.content,
            createrelation: createrelation,
            showwindow: function showwindow(stateoflist) {
              return setlist(stateoflist);
            },
            like: item.Like //bu bir obje array
            ,
            retweet: item.Retweet,
            comment: item.allcomments,
            //key numarası
            profileimage: "/black.jpg",
            title: item.title,
            titleimage: "yaprak.jpg",
            username: "Duhan",
            usersurname: "Öztürk" //bir obje props
            ,
            subtitle: item.subtitle,
            date: "8 dakika önce"
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this);
        }) : "Loading...")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIlJ0bGlrZXdpbmRvdyIsInN0eWxlZCIsImRpdiIsIklubmVyd2luZG93IiwiSG9tZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlU3RhdGUiLCJjb250ZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRvcmRlciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJhY3RpdmVsaWtlIiwic2V0YWN0aXZlbGlrZSIsImxpc3QiLCJzZXRsaXN0Iiwid2luZG93YWN0aXZlIiwic2V0YWN0aXZlIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0ZXJybXNnIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJDcmVhdGVyZWxhdGlvbiIsIlVzZXJJZCIsIlBvc3RJZCIsImhlaWdodCIsImxlbmd0aCIsIm92ZXJmbG93Iiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJjdXJzb3IiLCJuYW1lIiwiaW1hZ2UiLCJtYXAiLCJpdGVtIiwibWF4V2lkdGgiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFlBQVksR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwSkFBbEI7S0FBTUYsWTtBQVdOLElBQU1HLFdBQVcsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx3RkFBakI7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Slo7QUFLQSxnQkFBSSxFQUFFUCxJQUFJLENBQUNRLElBTFgsQ0FLZ0I7QUFMaEI7QUFNQSxtQkFBTyxFQUFFUixJQUFJLENBQUNTLE9BTmQ7QUFPQSxtQkFBTyxFQUFFVCxJQUFJLENBQUNVLFdBUGQ7QUFRVztBQUNYLHdCQUFZLEVBQUUsWUFUZDtBQVVBLGlCQUFLLEVBQUVWLElBQUksQ0FBQ1csS0FWWjtBQVdBLHNCQUFVLEVBQUUsWUFYWjtBQVlBLG9CQUFRLEVBQUUsT0FaVjtBQWFBLHVCQUFXLEVBQUUsUUFiYixDQWFzQjtBQWJ0QjtBQWNBLG9CQUFRLEVBQUVYLElBQUksQ0FBQ1ksUUFkZjtBQWVBLGdCQUFJLEVBQUU7QUFmTixhQVFLUixLQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFoQixDQURBLEdBb0JFLFlBdkJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3REg7O0dBNUZ1QjVDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2MzZjIzYzNjMGRhNGY5ZTY4OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXEsQ3JlYXRlcmVsYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvVXNlcmNhcmRcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUnRsaWtld2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDo1MDBweDtcclxuaGVpZ2h0OjM1MHB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjojYzgzMzQ5O1xyXG56LWluZGV4OjEwMDtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBJbm5lcndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmhlaWdodDoxMDAlO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVsaWtlLHNldGFjdGl2ZWxpa2VdPXVzZVN0YXRlKClcclxuICAgIGNvbnN0W2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Rbd2luZG93YWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcbiAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcImF1dG9cIn0pXHJcbiAgICAgICB9KVxyXG4gICAgICAgKi9cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlcmVsYXRpb249KHBvc3RJZCxhdHRyaWJ1dGUpPT57XHJcblxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9uKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpgJHtsaXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OlwiaGlkZGVuXCJ9fT5cclxuICAgICAgICAgICAgICAgIHsgbGlzdC5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2sgb25DbGljaz17KCk9PnNldGxpc3QoW10pfSAgYWt0aWY9e3RydWV9PjwvQmxhY2s+XHJcbiAgICAgICAgICAgICAgICA8UnRsaWtld2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIsd2lkdGg6XCI5NSVcIixtYXJnaW46XCJhdXRvXCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsY3Vyc29yOlwicG9pbnRlclwifX0gY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtbe25hbWU6XCJTYWTEsWtcIixpbWFnZTpcImNhci5qcGdcIn0se25hbWU6XCJBYWTEsWtcIixpbWFnZTpcImJsYWNrLmpwZ1wifSx7bmFtZTpcIk11c2FcIixpbWFnZTpcInlhcHJhay5qcGdcIn0se25hbWU6XCJTZWxtYW5cIixpbWFnZTpcImxlZC5qcGdcIn0se25hbWU6XCJBaG1ldFwiLGltYWdlOlwicm9ja2V0LmpwZ1wifSx7bmFtZTpcIkR1aGFuXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9XS5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXVybD17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1VzZXJjYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0lubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgPC9SdGxpa2V3aW5kb3c+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDpcIjY1MHB4XCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e1wiOCBkYWtpa2Egw7ZuY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=