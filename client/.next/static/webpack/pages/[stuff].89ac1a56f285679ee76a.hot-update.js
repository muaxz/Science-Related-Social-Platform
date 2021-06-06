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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Stuff.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Stuff__Exteriordiv",
  componentId: "sc-10eug5q-0"
})(["max-width:1200px;width:100%;margin:auto;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Stuff__Innerdiv",
  componentId: "sc-10eug5q-1"
})(["display:flex;padding-top:10px;flex-wrap:wrap;"]);
_c2 = Innerdiv;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Stuff__Contentholder",
  componentId: "sc-10eug5q-2"
})(["width:25%;padding-right:10px;"]);
_c3 = Contentholder;
function Stuff(_ref) {
  _s();

  var _this = this;

  var params = _ref.params;

  var _Usescroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      bottom = _Usescroll.bottom;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Readlater: 10,
    Like: 10
  }),
      itemcounts = _useState2[0],
      setitemcounts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      current = _useState3[0],
      setcurrent = _useState3[1];

  var latestparams = "";
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Getusercontent"])({
        params: latestparams,
        UserId: userdata.UserId,
        setdata: setdata,
        order: itemcounts[latestparams]
      });
    }
  }, [userdata, params, itemcounts]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    if (bottom) {
      var mutated = _objectSpread({}, itemcounts);

      mutated[current] += 1;
      setitemcounts(mutated);
    }
  }, [bottom]);

  var Relationreq = function Relationreq(postId, attribute, typeofrelation, index) {
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

    var mydata = _objectSpread({}, data);

    mydata[current].splice(index, 1);
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
      lineNumber: 94,
      columnNumber: 13
    }, this), console.log(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: data.length ? data.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            lineNumber: 104,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, this);
}

_s(Stuff, "9jd8ENL3XvOxsh1iL+gtbhWrCrg=");

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

/***/ }),

/***/ "./hooks/Scroll.js":
/*!*************************!*\
  !*** ./hooks/Scroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useScroll() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      bottom = _useState[0],
      setbottom = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //
    document.addEventListener("scroll", function (e) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setbottom(true);
      } else {
        setbottom(false);
      }
    });
    return function () {
      return document.removeEventListener("scroll", function () {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      });
    };
  }, []);
  return {
    bottom: bottom
  };
}

_s(useScroll, "M63v9ytBRp0Qg3WpY54h6zjtVr8=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9TdHVmZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvU2Nyb2xsLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJDb250ZW50aG9sZGVyIiwiU3R1ZmYiLCJwYXJhbXMiLCJVc2VzY3JvbGwiLCJib3R0b20iLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZVN0YXRlIiwiZGF0YSIsInNldGRhdGEiLCJSZWFkbGF0ZXIiLCJMaWtlIiwiaXRlbWNvdW50cyIsInNldGl0ZW1jb3VudHMiLCJjdXJyZW50Iiwic2V0Y3VycmVudCIsImxhdGVzdHBhcmFtcyIsInVzZUVmZmVjdCIsIlVzZXJJZCIsIkdldHVzZXJjb250ZW50Iiwib3JkZXIiLCJtdXRhdGVkIiwiUmVsYXRpb25yZXEiLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZWl0ZW0iLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIm15ZGF0YSIsInNwbGljZSIsInBhZGRpbmdCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiQ29udGVudCIsImlkIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiLCJ1c2VTY3JvbGwiLCJzZXRib3R0b20iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxZIiwiYm9keSIsIm9mZnNldEhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0NIOztHQTdHdUIxQixLOztNQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ4QjtBQUVlLFNBQVM2QyxTQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRU50QyxzREFBUSxDQUFDLEtBQUQsQ0FGRjtBQUFBLE1BRXhCSixNQUZ3QjtBQUFBLE1BRWpCMkMsU0FGaUI7O0FBSS9CN0IseURBQVMsQ0FBQyxZQUFJO0FBRVY7QUFDQThCLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFLO0FBRXBDLFVBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkQsTUFBTSxDQUFDRSxPQUE3QixJQUF5Q0wsUUFBUSxDQUFDTSxJQUFULENBQWNDLFlBQTFELEVBQXdFO0FBQ3BFUixpQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILE9BRkQsTUFHSTtBQUNBQSxpQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNIO0FBQ0osS0FSRDtBQVVELFdBQU87QUFBQSxhQUFLQyxRQUFRLENBQUNRLG1CQUFULENBQTZCLFFBQTdCLEVBQXNDLFlBQUk7QUFDeENMLGNBQU0sQ0FBQ00sUUFBUCxDQUFnQjtBQUFDQyxhQUFHLEVBQUMsQ0FBTDtBQUFPQyxrQkFBUSxFQUFDO0FBQWhCLFNBQWhCO0FBQ0QsT0FGRCxDQUFMO0FBQUEsS0FBUDtBQUlGLEdBakJRLEVBaUJQLEVBakJPLENBQVQ7QUFtQkEsU0FBTztBQUNMdkQsVUFBTSxFQUFDQTtBQURGLEdBQVA7QUFHSDs7R0ExQnVCMEMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc3R1ZmZdLjg5YWMxYTU2ZjI4NTY3OWVlNzZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCBVc2VzY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTIwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLXRvcDoxMHB4O1xyXG5mbGV4LXdyYXA6d3JhcDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoyNSU7XHJcbnBhZGRpbmctcmlnaHQ6MTBweDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVmZih7cGFyYW1zfSl7XHJcblxyXG4gICBjb25zdCB7Ym90dG9tfT1Vc2VzY3JvbGwoKTtcclxuICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgIGNvbnN0IFtpdGVtY291bnRzLHNldGl0ZW1jb3VudHNdPXVzZVN0YXRlKHtcclxuICAgICAgUmVhZGxhdGVyOjEwLFxyXG4gICAgICBMaWtlOjEwLFxyXG4gICB9KTtcclxuICAgY29uc3QgW2N1cnJlbnQsc2V0Y3VycmVudF09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdmFyIGxhdGVzdHBhcmFtcz1cIlwiO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgXHJcbiAgICAgICBzd2l0Y2ggKHBhcmFtcykge1xyXG4gICAgICAgICAgIGNhc2UgXCJrYXlkZWRpbGVubGVyXCI6XHJcbiAgICAgICAgICAgICAgIGxhdGVzdHBhcmFtcz1cIlJlYWRsYXRlclwiO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBjYXNlIFwiYmXEn2VuaWxlbmxlclwiOlxyXG4gICAgICAgICAgICAgICBsYXRlc3RwYXJhbXM9XCJMaWtlXCJcclxuICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICBcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgc2V0Y3VycmVudChsYXRlc3RwYXJhbXMpO1xyXG4gICAgICAgICAgICBHZXR1c2VyY29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6bGF0ZXN0cGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHNldGRhdGE6c2V0ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOml0ZW1jb3VudHNbbGF0ZXN0cGFyYW1zXSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3VzZXJkYXRhLHBhcmFtcyxpdGVtY291bnRzXSlcclxuXHJcbiAgICB1c2VTdGF0ZSgoKT0+e1xyXG5cclxuICAgICAgICBpZihib3R0b20pe1xyXG4gICAgICAgICAgICBjb25zdCBtdXRhdGVkPXsuLi5pdGVtY291bnRzfTtcclxuICAgICAgICAgICAgbXV0YXRlZFtjdXJyZW50XSs9MTtcclxuICAgICAgICAgICAgc2V0aXRlbWNvdW50cyhtdXRhdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBSZWxhdGlvbnJlcT0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPXsuLi5kYXRhfTtcclxuICAgICAgICAgbXlkYXRhW2N1cnJlbnRdLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTBweFwifX0+e2N1cnJlbnR9PC9oND5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLkNvbnRlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLkNvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4bnVtPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtSZWxhdGlvbnJlcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uQ29udGVudC5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcm9wdGlvbj17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2Nyb2xsKCl7XHJcblxyXG4gICAgY29uc3QgW2JvdHRvbSxzZXRib3R0b21dPXVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgICAgLy9cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKGUpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSkgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHsgIFxyXG4gICAgICAgICAgICAgICAgc2V0Ym90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgcmV0dXJuICgpPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsYmVoYXZpb3I6XCJhdXRvXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJvdHRvbTpib3R0b21cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9