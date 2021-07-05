webpackHotUpdate_N_E("pages/[userıd]/liked",{

/***/ "./containers/pages/Usercontent.js":
/*!*****************************************!*\
  !*** ./containers/pages/Usercontent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usercontent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Usercontent.js",
    _s = $RefreshSig$();








var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Usercontent__Exteriordiv",
  componentId: "sc-84fi95-0"
})(["max-width:1200px;width:100%;margin:auto;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Usercontent__Innerdiv",
  componentId: "sc-84fi95-1"
})(["display:flex;padding-top:40px;flex-wrap:wrap;"]);
_c2 = Innerdiv;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Usercontent__Contentholder",
  componentId: "sc-84fi95-2"
})(["width:25%;padding-right:10px;"]);
_c3 = Contentholder;
function Usercontent(_ref) {
  _s();

  var _this = this;

  var params = _ref.params,
      mydata = _ref.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(mydata),
      data = _useState[0],
      setdata = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      stopscrolling = _useState2[0],
      setstopscrolling = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(mydata.length),
      ordercount = _useState3[0],
      setordercount = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (bottom && userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Getusercontent"])({
        params: params,
        UserId: userdata.UserId,
        setdata: setdata,
        order: ordercount,
        setstopscrolling: setstopscrolling,
        currentdata: data
      });
    }
  }, [ordercount]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (bottom && !stopscrolling) {
      var count = ordercount;
      count += data.length + 10;
      setordercount(count);
    }
  }, [bottom]);

  var Handlerelation = function Handlerelation(postId, attribute, typeofrelation, index) {
    console.log(attribute, postId);
    Deleteitem(index);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation
    });
  };

  var Deleteitem = function Deleteitem(index) {
    console.log(index);

    var mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data);

    mydata.splice(index, 1);
    setdata(mydata);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        alignItems: "center",
        paddingBottom: "10px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        style: {
          color: "#ff4d6d",
          paddingRight: "5px"
        },
        children: [params == "Like" ? "Beğenilen Gönderiler" : "Kaydedilen Gönderiler", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }, this), params == "Readlater" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Bookmark"], {
        style: {
          color: "#ff4d6d"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 18
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ThumbUpAlt"], {
        style: {
          color: "#ff4d6d"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 18
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ["(", data.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: data.length ? data.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            foruser: true,
            iscomment: false,
            postId: item.Content.id,
            content: item.Content.content,
            indexnum: index,
            //key numarası
            profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
            title: item.Content.title,
            titleimage: "/yaprak.jpg",
            username: "Duhan",
            usersurname: "Öztürk" //bir obje props
            ,
            subtitle: item.Content.subtitle,
            date: item.Content.createdAt,
            like: [] //bu bir obje array
            ,
            retweet: [],
            comment: [],
            foruseroption: params,
            createrelationforsmh: Handlerelation
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, this);
}

_s(Usercontent, "QEi6GnhaxXRWXi3hMDKLFx0ew3w=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c4 = Usercontent;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Contentholder");
$RefreshReg$(_c4, "Usercontent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Vc2VyY29udGVudC5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlVzZXJjb250ZW50IiwicGFyYW1zIiwibXlkYXRhIiwidXNlU2Nyb2xsIiwiYm90dG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0ZGF0YSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJsZW5ndGgiLCJvcmRlcmNvdW50Iiwic2V0b3JkZXJjb3VudCIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvdW50IiwiSGFuZGxlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsInNwbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwicGFkZGluZ1JpZ2h0IiwibWFwIiwiaXRlbSIsIkNvbnRlbnQiLCJpZCIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFqQjtLQUFNRixXO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFEQUFkO01BQU1DLFE7QUFN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bUJBQU8sRUFBRSxFQWhCVDtBQWlCQSx5QkFBYSxFQUFFN0MsTUFqQmY7QUFrQkEsZ0NBQW9CLEVBQUVxQjtBQWxCdEIsYUFNS0ksS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQXlCSCxPQTFCRCxDQUZBLEdBNkJFO0FBL0JWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUF1REg7O0dBcEh1QjFCLFc7VUFFTEcscUQ7OztNQUZLSCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t1c2VyxLFkXS9saWtlZC5hOWZmMmE4MTQyZjZkMGU1OTk4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB7R2V0dXNlcmNvbnRlbnQsQ3JlYXRlcmVsYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgQm9va21hcmssIEJvb2ttYXJrQm9yZGVyT3V0bGluZWQsIEJvb2ttYXJrQm9yZGVyUm91bmRlZCwgVGh1bWJVcEFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTIwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLXRvcDo0MHB4O1xyXG5mbGV4LXdyYXA6d3JhcDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoyNSU7XHJcbnBhZGRpbmctcmlnaHQ6MTBweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcmNvbnRlbnQoe3BhcmFtcyxteWRhdGF9KXtcclxuICAgIFxyXG4gICAgY29uc3Qge2JvdHRvbX09dXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShteWRhdGEpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW3N0b3BzY3JvbGxpbmcsc2V0c3RvcHNjcm9sbGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29yZGVyY291bnQsc2V0b3JkZXJjb3VudF09dXNlU3RhdGUobXlkYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgaWYoYm90dG9tICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBHZXR1c2VyY29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6cGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHNldGRhdGE6c2V0ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyY291bnQsXHJcbiAgICAgICAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nOnNldHN0b3BzY3JvbGxpbmcsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpkYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgIH0sW29yZGVyY291bnRdKVxyXG4gICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuXHJcbiAgICAgICBpZihib3R0b20gJiYgIXN0b3BzY3JvbGxpbmcpe1xyXG5cclxuICAgICAgICAgICB2YXIgY291bnQ9b3JkZXJjb3VudDtcclxuICAgICAgICAgICBjb3VudCs9ZGF0YS5sZW5ndGgrMTA7XHJcbiAgICAgICAgICAgc2V0b3JkZXJjb3VudChjb3VudCk7XHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgY29uc3QgSGFuZGxlcmVsYXRpb249KHBvc3RJZCxhdHRyaWJ1dGUsdHlwZW9mcmVsYXRpb24saW5kZXgpPT57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZSxwb3N0SWQpXHJcbiAgICAgICAgRGVsZXRlaXRlbShpbmRleClcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZWl0ZW09KGluZGV4KT0+e1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgIGNvbnN0IG15ZGF0YT1bLi4uZGF0YV07XHJcbiAgICAgICAgIG15ZGF0YS5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgIHNldGRhdGEobXlkYXRhKTtcclxuICAgIH1cclxuIFxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixwYWRkaW5nQm90dG9tOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgPGg0IHN0eWxlPXt7Y29sb3I6XCIjZmY0ZDZkXCIscGFkZGluZ1JpZ2h0OlwiNXB4XCJ9fT57cGFyYW1zID09IFwiTGlrZVwiID8gXCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyXCIgOiBcIktheWRlZGlsZW4gR8O2bmRlcmlsZXJcIn0gPC9oND5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgcGFyYW1zID09IFwiUmVhZGxhdGVyXCIgP1xyXG5cclxuICAgICAgICAgICAgICAgICA8Qm9va21hcmsgc3R5bGU9e3tjb2xvcjpcIiNmZjRkNmRcIn19PjwvQm9va21hcms+XHJcblxyXG4gICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICA8VGh1bWJVcEFsdCAgc3R5bGU9e3tjb2xvcjpcIiNmZjRkNmRcIn19ID48L1RodW1iVXBBbHQ+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAoe2RhdGEubGVuZ3RofSlcclxuICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCA/XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5Db250ZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLkNvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhudW09e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5Db250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5Db250ZW50LnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLkNvbnRlbnQuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcm9wdGlvbj17cGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17SGFuZGxlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Y2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICA8L0V4dGVyaW9yZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9