webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./containers/pages/Profile.js":
/*!*************************************!*\
  !*** ./containers/pages/Profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js",
    _s = $RefreshSig$();






var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Exteriordiv",
  componentId: "sc-1uvdthm-0"
})(["max-width:1400px;width:100%;padding-bottom:20px;padding-left:60px;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Innerdiv",
  componentId: "sc-1uvdthm-1"
})(["height:100%;"]);
_c2 = Innerdiv;
var Imagesection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Imagesection",
  componentId: "sc-1uvdthm-2"
})(["height:250px;position:relative;"]);
_c3 = Imagesection;
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__BackgroundImage",
  componentId: "sc-1uvdthm-3"
})(["width:100%;height:100%;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c4 = BackgroundImage;
var Contentpart = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Contentpart",
  componentId: "sc-1uvdthm-4"
})(["display:flex;margin-top:80px;padding-bottom:20px;align-self:flex-start;"]);
_c5 = Contentpart;
var Usersection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Usersection",
  componentId: "sc-1uvdthm-5"
})(["position:sticky;top:0;max-width:400px;text-align:center;width:100%;"]);
_c6 = Usersection;
var Contentsection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Profile__Contentsection",
  componentId: "sc-1uvdthm-6"
})(["max-width:1000px;width:100%;"]);
_c7 = Contentsection;
function Profile() {
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      stoprequesting = _useState6[0],
      setstopreq = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      spinner = _useState7[0],
      setspinner = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: 10,
      setspinner: setspinner,
      seterrmsg: seterror,
      setstopreq: setstopreq
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagesection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
          style: {
            position: "absolute",
            bottom: "-60px",
            left: "150px",
            border: "2px solid white"
          },
          width: "120px",
          height: "120px",
          profile: "/led.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Usersection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Emre \xD6zer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#8B8B8B"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              marginTop: "10px",
              marginBottom: "40px",
              justifyContent: "space-around"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "246"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 22
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentsection, {
          children: contentdata.length > 0 ? contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              postId: item.id,
              content: item.content,
              showwindow: function showwindow(stateoflist) {
                return setlist(stateoflist);
              },
              like: item.Like //bu bir obje array
              ,
              retweet: item.Retweet,
              comment: item.allcomments,
              readlater: item.Readlater,
              //key numarası
              profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
              title: item.title,
              titleimage: "/yaprak.jpg",
              username: "Duhan",
              usersurname: "Öztürk" //bir obje props
              ,
              subtitle: item.subtitle,
              date: item.createdAt
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 33
            }, _this);
          }) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

_s(Profile, "Bvif+SvSA1VlwgKwUi0du0MLarU=");

_c8 = Profile;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Imagesection");
$RefreshReg$(_c4, "BackgroundImage");
$RefreshReg$(_c5, "Contentpart");
$RefreshReg$(_c6, "Usersection");
$RefreshReg$(_c7, "Contentsection");
$RefreshReg$(_c8, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJQcm9maWxlIiwidXNlU3RhdGUiLCJjb250ZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRvcmRlciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJhY3RpdmVsaWtlIiwic2V0YWN0aXZlbGlrZSIsImxpc3QiLCJzZXRsaXN0Iiwic3RvcHJlcXVlc3RpbmciLCJzZXRzdG9wcmVxIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRlcnJtc2ciLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJib3JkZXIiLCJjb2xvciIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwiY29udGVudCIsInN0YXRlb2ZsaXN0IiwiTGlrZSIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsIlJlYWRsYXRlciIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDBFQUFqQjtLQUFNRixXO0FBT04sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9CQUFkO01BQU1DLFE7QUFJ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RUosSUFBSSxDQUFDSyxJQUpYLENBSWdCO0FBSmhCO0FBS0EscUJBQU8sRUFBRUwsSUFBSSxDQUFDTSxPQUxkO0FBTUEscUJBQU8sRUFBRU4sSUFBSSxDQUFDTyxXQU5kO0FBT0EsdUJBQVMsRUFBRVAsSUFBSSxDQUFDUSxTQVBoQjtBQVFXO0FBQ1gsMEJBQVksRUFBRSx3SEFUZDtBQVVBLG1CQUFLLEVBQUVSLElBQUksQ0FBQ1MsS0FWWjtBQVdBLHdCQUFVLEVBQUUsYUFYWjtBQVlBLHNCQUFRLEVBQUUsT0FaVjtBQWFBLHlCQUFXLEVBQUUsUUFiYixDQWFzQjtBQWJ0QjtBQWNBLHNCQUFRLEVBQUVULElBQUksQ0FBQ1UsUUFkZjtBQWVBLGtCQUFJLEVBQUVWLElBQUksQ0FBQ1c7QUFmWCxlQVFLVixLQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFk7QUFBQSxXQUFoQixDQURBLEdBb0JFO0FBeEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThESDs7R0FyRnVCbkMsTzs7TUFBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uZmI4ODhkZTcyYjc0MTQ1MDcyODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0hvbWVyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjE0MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxucGFkZGluZy1sZWZ0OjYwcHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNlY3Rpb249c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxuYFxyXG5cclxuY29uc3QgVXNlcnNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6MDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHNlY3Rpb249c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpe1xyXG5cclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FjdGl2ZWxpa2Usc2V0YWN0aXZlbGlrZV09dXNlU3RhdGUoKVxyXG4gICAgY29uc3RbbGlzdCxzZXRsaXN0XT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3RvcHJlcXVlc3Rpbmcsc2V0c3RvcHJlcV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixib3R0b206XCItNjBweFwiLGxlZnQ6XCIxNTBweFwiLGJvcmRlcjpcIjJweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCIxMjBweFwiIGhlaWdodD1cIjEyMHB4XCIgcHJvZmlsZT1cIi9sZWQuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtcmUgw5Z6ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM4QjhCOEJcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjI0NjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWtpcMOnaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWtpcCBFZGlsZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hw7ZuZGVyaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI4MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCIxNXB4XCJ9fT5Zb3UncmUgbm90IGhhdmluZyB0aGF0IHByb2JsZW0gaGVyZS4gVGhlcmUgaXMgbm8gbmVnYXRpdmUgc3BhY2UuIFRoZXJlZm9yZSwgSSBkb24ndCBiZWxpZXZlIGZsZXgtc2hyaW5rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1VzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wiL3lhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==