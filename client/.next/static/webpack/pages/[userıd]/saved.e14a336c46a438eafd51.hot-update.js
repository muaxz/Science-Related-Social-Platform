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
            lineNumber: 111,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Vc2VyY29udGVudC5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlVzZXJjb250ZW50IiwicGFyYW1zIiwibXlkYXRhIiwidXNlU2Nyb2xsIiwiYm90dG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0ZGF0YSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJsZW5ndGgiLCJvcmRlcmNvdW50Iiwic2V0b3JkZXJjb3VudCIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvdW50IiwiSGFuZGxlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsInNwbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJDb250ZW50IiwiaWQiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnREFBakI7S0FBTUYsVztBQU1OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtB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VDtBQWlCQSx5QkFBYSxFQUFFL0MsTUFqQmY7QUFrQkEsZ0NBQW9CLEVBQUVxQjtBQWxCdEIsYUFNS0ksS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQXlCSCxPQTFCRCxDQUZBLEdBNkJFO0FBL0JWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXNESDs7R0FuSHVCMUIsVztVQUVMRyxxRDs7O01BRktILFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3VzZXLEsWRdL3NhdmVkLmUxNGEzMzZjNDZhNDM4ZWFmZDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQgeyBCb29rbWFyaywgQm9va21hcmtCb3JkZXJPdXRsaW5lZCwgQm9va21hcmtCb3JkZXJSb3VuZGVkLCBUaHVtYlVwQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctdG9wOjQwcHg7XHJcbmZsZXgtd3JhcDp3cmFwO1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjI1JTtcclxucGFkZGluZy1yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyY29udGVudCh7cGFyYW1zLG15ZGF0YX0pe1xyXG4gICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtkYXRhLHNldGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbc3RvcHNjcm9sbGluZyxzZXRzdG9wc2Nyb2xsaW5nXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3JkZXJjb3VudCxzZXRvcmRlcmNvdW50XT11c2VTdGF0ZShteWRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgIFxyXG5cclxuICAgICAgICBpZihib3R0b20gJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEdldHVzZXJjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczpwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXJjb3VudCxcclxuICAgICAgICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmc6c2V0c3RvcHNjcm9sbGluZyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSxbb3JkZXJjb3VudF0pXHJcbiAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG5cclxuICAgICAgIGlmKGJvdHRvbSAmJiAhc3RvcHNjcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgIHZhciBjb3VudD1vcmRlcmNvdW50O1xyXG4gICAgICAgICAgIGNvdW50Kz1kYXRhLmxlbmd0aCsxMDtcclxuICAgICAgICAgICBzZXRvcmRlcmNvdW50KGNvdW50KTtcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBIYW5kbGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPVsuLi5kYXRhXTtcclxuICAgICAgICAgbXlkYXRhLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLHBhZGRpbmdCb3R0b206XCIxMHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgIDxoNCBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjVweFwifX0+e3BhcmFtcyA9PSBcIkxpa2VcIiA/IFwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlclwiIDogXCJLYXlkZWRpbGVuIEfDtm5kZXJpbGVyXCJ9IDwvaDQ+XHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHBhcmFtcyA9PSBcIlJlYWRsYXRlclwiID9cclxuXHJcbiAgICAgICAgICAgICAgICAgPEJvb2ttYXJrID48L0Jvb2ttYXJrPlxyXG5cclxuICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgPFRodW1iVXBBbHQ+PC9UaHVtYlVwQWx0PlxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiNXB4XCIsY29sb3I6XCIjNmM3NTdkXCJ9fT5cclxuICAgICAgICAgICAgICAge2AoJHtkYXRhLmxlbmd0aH0pYH1cclxuICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCA/XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5Db250ZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLkNvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhudW09e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5Db250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5Db250ZW50LnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLkNvbnRlbnQuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcm9wdGlvbj17cGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17SGFuZGxlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Y2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICA8L0V4dGVyaW9yZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9