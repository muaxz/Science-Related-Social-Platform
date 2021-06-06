webpackHotUpdate_N_E("pages/[stuff]",{

/***/ "./containers/pages/Stuff.js":
/*!***********************************!*\
  !*** ./containers/pages/Stuff.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stuff; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Stuff.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Stuff__Exteriordiv",
  componentId: "sc-10eug5q-0"
})(["max-width:1200px;width:100%;margin:auto;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Stuff__Innerdiv",
  componentId: "sc-10eug5q-1"
})(["display:flex;padding-top:10px;flex-wrap:wrap;"]);
_c2 = Innerdiv;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Stuff__Contentholder",
  componentId: "sc-10eug5q-2"
})(["width:25%;padding-right:10px;"]);
_c3 = Contentholder;
function Stuff(_ref) {
  _s();

  var _this = this;

  var params = _ref.params;

  var _Usescroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      bottom = _Usescroll.bottom;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      data = _useState[0],
      setdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      stopscrolling = _useState2[0],
      setstopscrolling = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Readlater: 10,
    Like: 10
  }),
      itemcounts = _useState3[0],
      setitemcounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      current = _useState4[0],
      setcurrent = _useState4[1];

  var latestparams = "";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switch (params) {
      case "kaydedilenler":
        latestparams = "Readlater";
        break;

      case "beğenilenler":
        latestparams = "Like";
        break;
    }

    if (userdata.UserId) {
      setcurrent(latestparams);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Getusercontent"])({
        params: latestparams,
        UserId: userdata.UserId,
        setdata: setdata,
        order: itemcounts[latestparams],
        setstopscrolling: setstopscrolling,
        currentdata: data
      });
    }
  }, [userdata, params, itemcounts]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    console.log("buradaa");

    if (bottom && !stopscrolling) {
      var mutated = _objectSpread({}, itemcounts);

      mutated[current] += 10;
      setitemcounts(mutated);
      console.log("changing");
    }
  }, [bottom]);

  var Relationreq = function Relationreq(postId, attribute, typeofrelation, index) {
    console.log(attribute, postId);
    Deleteitem(index);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Createrelationreq"])({
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      style: {
        paddingBottom: "10px"
      },
      children: current
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: data.length ? data.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            foruser: true,
            postId: item.Content.id,
            content: item.Content.content,
            indexnum: index,
            createrelationforsmh: Relationreq,
            //key numarası
            profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
            title: item.Content.title,
            titleimage: "yaprak.jpg",
            username: "Duhan",
            usersurname: "Öztürk" //bir obje props
            ,
            subtitle: item.Content.subtitle,
            date: item.Content.createdAt,
            like: [] //bu bir obje array
            ,
            retweet: [],
            comment: [],
            foruseroption: current
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

_s(Stuff, "dD1T/TELUPuHxTOUdGEjyAjOJYo=");

_c4 = Stuff;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Contentholder");
$RefreshReg$(_c4, "Stuff");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9TdHVmZi5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlN0dWZmIiwicGFyYW1zIiwiVXNlc2Nyb2xsIiwiYm90dG9tIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXRkYXRhIiwic3RvcHNjcm9sbGluZyIsInNldHN0b3BzY3JvbGxpbmciLCJSZWFkbGF0ZXIiLCJMaWtlIiwiaXRlbWNvdW50cyIsInNldGl0ZW1jb3VudHMiLCJjdXJyZW50Iiwic2V0Y3VycmVudCIsImxhdGVzdHBhcmFtcyIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJjdXJyZW50ZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGVkIiwiUmVsYXRpb25yZXEiLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiRGVsZXRlaXRlbSIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwibXlkYXRhIiwic3BsaWNlIiwicGFkZGluZ0JvdHRvbSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJDb250ZW50IiwiaWQiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnREFBakI7S0FBTUYsVztBQU1OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxREFBZDtNQUFNQyxRO0FBTU4s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O0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdDSDs7R0FsSHVCL0IsSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc3R1ZmZdLmYzOTQ0MjRjNmFiNzE2NDJjNjhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCBVc2VzY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTIwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLXRvcDoxMHB4O1xyXG5mbGV4LXdyYXA6d3JhcDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoyNSU7XHJcbnBhZGRpbmctcmlnaHQ6MTBweDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVmZih7cGFyYW1zfSl7XHJcblxyXG4gICBjb25zdCB7Ym90dG9tfT1Vc2VzY3JvbGwoKTtcclxuICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgIGNvbnN0IFtzdG9wc2Nyb2xsaW5nLHNldHN0b3BzY3JvbGxpbmddPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgY29uc3QgW2l0ZW1jb3VudHMsc2V0aXRlbWNvdW50c109dXNlU3RhdGUoe1xyXG4gICAgICBSZWFkbGF0ZXI6MTAsXHJcbiAgICAgIExpa2U6MTAsXHJcbiAgIH0pO1xyXG4gICBjb25zdCBbY3VycmVudCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB2YXIgbGF0ZXN0cGFyYW1zPVwiXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICBcclxuICAgICAgIHN3aXRjaCAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgY2FzZSBcImtheWRlZGlsZW5sZXJcIjpcclxuICAgICAgICAgICAgICAgbGF0ZXN0cGFyYW1zPVwiUmVhZGxhdGVyXCI7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGNhc2UgXCJiZcSfZW5pbGVubGVyXCI6XHJcbiAgICAgICAgICAgICAgIGxhdGVzdHBhcmFtcz1cIkxpa2VcIlxyXG4gICAgICAgICAgICAgICBicmVhazsgICAgICAgIFxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KGxhdGVzdHBhcmFtcyk7XHJcbiAgICAgICAgICAgIEdldHVzZXJjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczpsYXRlc3RwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6aXRlbWNvdW50c1tsYXRlc3RwYXJhbXNdLFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHNjcm9sbGluZzpzZXRzdG9wc2Nyb2xsaW5nLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6ZGF0YSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3VzZXJkYXRhLHBhcmFtcyxpdGVtY291bnRzXSlcclxuXHJcbiAgICB1c2VTdGF0ZSgoKT0+e1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFcIik7XHJcbiAgICAgICAgaWYoYm90dG9tICYmICFzdG9wc2Nyb2xsaW5nKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG11dGF0ZWQ9ey4uLml0ZW1jb3VudHN9O1xyXG4gICAgICAgICAgICBtdXRhdGVkW2N1cnJlbnRdKz0xMDtcclxuICAgICAgICAgICAgc2V0aXRlbWNvdW50cyhtdXRhdGVkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2luZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBSZWxhdGlvbnJlcT0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPVsuLi5kYXRhXTtcclxuICAgICAgICAgbXlkYXRhLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTBweFwifX0+e2N1cnJlbnR9PC9oND5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLkNvbnRlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLkNvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4bnVtPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtSZWxhdGlvbnJlcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uQ29udGVudC5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcm9wdGlvbj17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==