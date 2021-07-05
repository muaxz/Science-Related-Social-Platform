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
        paddingBottom: "10px"
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
          color: "#adb5bd"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Vc2VyY29udGVudC5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlVzZXJjb250ZW50IiwicGFyYW1zIiwibXlkYXRhIiwidXNlU2Nyb2xsIiwiYm90dG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0ZGF0YSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJsZW5ndGgiLCJvcmRlcmNvdW50Iiwic2V0b3JkZXJjb3VudCIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvdW50IiwiSGFuZGxlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsInNwbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiY29sb3IiLCJtYXAiLCJpdGVtIiwiQ29udGVudCIsImlkIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0RBQWpCO0tBQU1GLFc7QUFNTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscURB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LEVBQUU5QyxNQWpCZjtBQWtCQSxnQ0FBb0IsRUFBRXFCO0FBbEJ0QixhQU1LSSxLQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBO0FBeUJILE9BMUJELENBRkEsR0E2QkU7QUEvQlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXVESDs7R0FwSHVCMUIsVztVQUVMRyxxRDs7O01BRktILFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3VzZXLEsWRdL3NhdmVkLmIzMWMxOTlkMjVmMDU5MzM5NzJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQgeyBCb29rbWFyaywgQm9va21hcmtCb3JkZXJPdXRsaW5lZCwgQm9va21hcmtCb3JkZXJSb3VuZGVkLCBUaHVtYlVwQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctdG9wOjQwcHg7XHJcbmZsZXgtd3JhcDp3cmFwO1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjI1JTtcclxucGFkZGluZy1yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyY29udGVudCh7cGFyYW1zLG15ZGF0YX0pe1xyXG4gICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtkYXRhLHNldGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbc3RvcHNjcm9sbGluZyxzZXRzdG9wc2Nyb2xsaW5nXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3JkZXJjb3VudCxzZXRvcmRlcmNvdW50XT11c2VTdGF0ZShteWRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgIFxyXG5cclxuICAgICAgICBpZihib3R0b20gJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEdldHVzZXJjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczpwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXJjb3VudCxcclxuICAgICAgICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmc6c2V0c3RvcHNjcm9sbGluZyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSxbb3JkZXJjb3VudF0pXHJcbiAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG5cclxuICAgICAgIGlmKGJvdHRvbSAmJiAhc3RvcHNjcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgIHZhciBjb3VudD1vcmRlcmNvdW50O1xyXG4gICAgICAgICAgIGNvdW50Kz1kYXRhLmxlbmd0aCsxMDtcclxuICAgICAgICAgICBzZXRvcmRlcmNvdW50KGNvdW50KTtcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBIYW5kbGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPVsuLi5kYXRhXTtcclxuICAgICAgICAgbXlkYXRhLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLHBhZGRpbmdCb3R0b206XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICA8aDQgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCI1cHhcIn19PntwYXJhbXMgPT0gXCJMaWtlXCIgPyBcIkJlxJ9lbmlsZW4gR8O2bmRlcmlsZXJcIiA6IFwiS2F5ZGVkaWxlbiBHw7ZuZGVyaWxlclwifSA8L2g0PlxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBwYXJhbXMgPT0gXCJSZWFkbGF0ZXJcIiA/XHJcblxyXG4gICAgICAgICAgICAgICAgIDxCb29rbWFyayA+PC9Cb29rbWFyaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgIDxUaHVtYlVwQWx0PjwvVGh1bWJVcEFsdD5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDpcIjVweFwiLGNvbG9yOlwiI2FkYjViZFwifX0+XHJcbiAgICAgICAgICAgICAgIHtgKCR7ZGF0YS5sZW5ndGh9KWB9XHJcbiAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggP1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uQ29udGVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5Db250ZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4bnVtPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCIveWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uQ29udGVudC5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5Db250ZW50LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXJvcHRpb249e3BhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e0hhbmRsZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgPC9FeHRlcmlvcmRpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==