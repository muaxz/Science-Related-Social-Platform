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
          color: "#ff4d6d",
          paddingRight: "10px"
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
      }, this), data.length]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
            lineNumber: 110,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Vc2VyY29udGVudC5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlVzZXJjb250ZW50IiwicGFyYW1zIiwibXlkYXRhIiwidXNlU2Nyb2xsIiwiYm90dG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0ZGF0YSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJsZW5ndGgiLCJvcmRlcmNvdW50Iiwic2V0b3JkZXJjb3VudCIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvdW50IiwiSGFuZGxlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsInNwbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsImNvbG9yIiwicGFkZGluZ1JpZ2h0IiwibWFwIiwiaXRlbSIsIkNvbnRlbnQiLCJpZCIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFqQjtLQUFNRixXO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFEQUFkO01BQU1DLFE7QUFN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QUFrQkEsZ0NBQW9CLEVBQUVxQjtBQWxCdEIsYUFNS0ksS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQXlCSCxPQTFCRCxDQUZBLEdBNkJFO0FBL0JWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXFESDs7R0FsSHVCMUIsVztVQUVMRyxxRDs7O01BRktILFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3VzZXLEsWRdL3NhdmVkLmQ3MDI0NTNmYmMyNjQ3YTM2NmE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQgeyBCb29rbWFyaywgQm9va21hcmtCb3JkZXJPdXRsaW5lZCwgQm9va21hcmtCb3JkZXJSb3VuZGVkLCBUaHVtYlVwQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctdG9wOjQwcHg7XHJcbmZsZXgtd3JhcDp3cmFwO1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjI1JTtcclxucGFkZGluZy1yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyY29udGVudCh7cGFyYW1zLG15ZGF0YX0pe1xyXG4gICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtkYXRhLHNldGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbc3RvcHNjcm9sbGluZyxzZXRzdG9wc2Nyb2xsaW5nXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3JkZXJjb3VudCxzZXRvcmRlcmNvdW50XT11c2VTdGF0ZShteWRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgIFxyXG5cclxuICAgICAgICBpZihib3R0b20gJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEdldHVzZXJjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczpwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXJjb3VudCxcclxuICAgICAgICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmc6c2V0c3RvcHNjcm9sbGluZyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSxbb3JkZXJjb3VudF0pXHJcbiAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG5cclxuICAgICAgIGlmKGJvdHRvbSAmJiAhc3RvcHNjcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgIHZhciBjb3VudD1vcmRlcmNvdW50O1xyXG4gICAgICAgICAgIGNvdW50Kz1kYXRhLmxlbmd0aCsxMDtcclxuICAgICAgICAgICBzZXRvcmRlcmNvdW50KGNvdW50KTtcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBIYW5kbGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPVsuLi5kYXRhXTtcclxuICAgICAgICAgbXlkYXRhLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLHBhZGRpbmdCb3R0b206XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICA8aDQgc3R5bGU9e3tjb2xvcjpcIiNmZjRkNmRcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCJ9fT57cGFyYW1zID09IFwiTGlrZVwiID8gXCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyXCIgOiBcIktheWRlZGlsZW4gR8O2bmRlcmlsZXJcIn0gPC9oND5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgcGFyYW1zID09IFwiUmVhZGxhdGVyXCIgP1xyXG5cclxuICAgICAgICAgICAgICAgICA8Qm9va21hcmsgc3R5bGU9e3tjb2xvcjpcIiNmZjRkNmRcIn19PjwvQm9va21hcms+XHJcblxyXG4gICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICA8VGh1bWJVcEFsdCAgc3R5bGU9e3tjb2xvcjpcIiNmZjRkNmRcIn19ID48L1RodW1iVXBBbHQ+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHsoZGF0YS5sZW5ndGgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggP1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uQ29udGVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5Db250ZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4bnVtPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCIveWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uQ29udGVudC5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5Db250ZW50LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXJvcHRpb249e3BhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e0hhbmRsZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgPC9FeHRlcmlvcmRpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==