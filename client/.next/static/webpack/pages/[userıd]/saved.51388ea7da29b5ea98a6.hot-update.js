webpackHotUpdate_N_E("pages/[userıd]/saved",{

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
        paddingBottom: "10px",
        justifyContent: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        style: {
          paddingRight: "5px"
        },
        children: [params == "Like" ? "Beğenilen Gönderiler" : "Kaydedilen Gönderiler", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }, this), params == "Readlater" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Bookmark"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 18
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ThumbUpAlt"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 18
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: {
          paddingLeft: "5px",
          color: "#6c757d"
        },
        children: "(".concat(data.length, ")")
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Vc2VyY29udGVudC5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlVzZXJjb250ZW50IiwicGFyYW1zIiwibXlkYXRhIiwidXNlU2Nyb2xsIiwiYm90dG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0ZGF0YSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJsZW5ndGgiLCJvcmRlcmNvdW50Iiwic2V0b3JkZXJjb3VudCIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvdW50IiwiSGFuZGxlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsInNwbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJDb250ZW50IiwiaWQiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnREFBakI7S0FBTUYsVztBQU1OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtB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RUFBRSxFQWZUO0FBZ0JBLG1CQUFPLEVBQUUsRUFoQlQ7QUFpQkEseUJBQWEsRUFBRS9DLE1BakJmO0FBa0JBLGdDQUFvQixFQUFFcUI7QUFsQnRCLGFBTUtJLEtBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREE7QUF5QkgsT0ExQkQsQ0FGQSxHQTZCRTtBQS9CVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBdURIOztHQXBIdUIxQixXO1VBRUxHLHFEOzs7TUFGS0gsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdXNlcsSxZF0vc2F2ZWQuNTEzODhlYTdkYTI5YjVlYTk4YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0dldHVzZXJjb250ZW50LENyZWF0ZXJlbGF0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCJcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7IEJvb2ttYXJrLCBCb29rbWFya0JvcmRlck91dGxpbmVkLCBCb29rbWFya0JvcmRlclJvdW5kZWQsIFRodW1iVXBBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEyMDBweDtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy10b3A6NDBweDtcclxuZmxleC13cmFwOndyYXA7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MjUlO1xyXG5wYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJjb250ZW50KHtwYXJhbXMsbXlkYXRhfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHtib3R0b219PXVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3QgW2RhdGEsc2V0ZGF0YV09dXNlU3RhdGUobXlkYXRhKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtzdG9wc2Nyb2xsaW5nLHNldHN0b3BzY3JvbGxpbmddPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcmRlcmNvdW50LHNldG9yZGVyY291bnRdPXVzZVN0YXRlKG15ZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgXHJcblxyXG4gICAgICAgIGlmKGJvdHRvbSAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgR2V0dXNlcmNvbnRlbnQoe1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBzZXRkYXRhOnNldGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlcmNvdW50LFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHNjcm9sbGluZzpzZXRzdG9wc2Nyb2xsaW5nLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6ZGF0YSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9LFtvcmRlcmNvdW50XSlcclxuICAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcblxyXG4gICAgICAgaWYoYm90dG9tICYmICFzdG9wc2Nyb2xsaW5nKXtcclxuXHJcbiAgICAgICAgICAgdmFyIGNvdW50PW9yZGVyY291bnQ7XHJcbiAgICAgICAgICAgY291bnQrPWRhdGEubGVuZ3RoKzEwO1xyXG4gICAgICAgICAgIHNldG9yZGVyY291bnQoY291bnQpO1xyXG5cclxuICAgICAgIH1cclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IEhhbmRsZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLGluZGV4KT0+e1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUscG9zdElkKVxyXG4gICAgICAgIERlbGV0ZWl0ZW0oaW5kZXgpXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb25cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVpdGVtPShpbmRleCk9PntcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICBjb25zdCBteWRhdGE9Wy4uLmRhdGFdO1xyXG4gICAgICAgICBteWRhdGEuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICBzZXRkYXRhKG15ZGF0YSk7XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIscGFkZGluZ0JvdHRvbTpcIjEwcHhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgPGg0IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiNXB4XCJ9fT57cGFyYW1zID09IFwiTGlrZVwiID8gXCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyXCIgOiBcIktheWRlZGlsZW4gR8O2bmRlcmlsZXJcIn0gPC9oND5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgcGFyYW1zID09IFwiUmVhZGxhdGVyXCIgP1xyXG5cclxuICAgICAgICAgICAgICAgICA8Qm9va21hcmsgPjwvQm9va21hcms+XHJcblxyXG4gICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICA8VGh1bWJVcEFsdD48L1RodW1iVXBBbHQ+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1cHhcIixjb2xvcjpcIiM2Yzc1N2RcIn19PlxyXG4gICAgICAgICAgICAgICB7YCgke2RhdGEubGVuZ3RofSlgfVxyXG4gICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoID9cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLkNvbnRlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uQ29udGVudC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleG51bT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLkNvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wiL3lhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLkNvbnRlbnQuc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2Vyb3B0aW9uPXtwYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtIYW5kbGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRjYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgIDwvRXh0ZXJpb3JkaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=