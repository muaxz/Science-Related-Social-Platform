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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      current = _useState2[0],
      setcurrent = _useState2[1];

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
        setdata: setdata
      });
    }
  }, [userdata, params]);

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
      lineNumber: 78,
      columnNumber: 13
    }, this), console.log(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: data.length > 0 ? data.map(function (item, index) {
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
            lineNumber: 88,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, _this);
      }) : "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

_s(Stuff, "lhxXCUIldqwbHHyXaMNkins+tj0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9TdHVmZi5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlN0dWZmIiwicGFyYW1zIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXRkYXRhIiwiY3VycmVudCIsInNldGN1cnJlbnQiLCJsYXRlc3RwYXJhbXMiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJHZXR1c2VyY29udGVudCIsIlJlbGF0aW9ucmVxIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJEZWxldGVpdGVtIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJteWRhdGEiLCJzcGxpY2UiLCJwYWRkaW5nQm90dG9tIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIkNvbnRlbnQiLCJpZCIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFqQjtLQUFNRixXO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFEQUFkO01BQU1DLFE7QUFNTixJQUFNQyxhQUFhLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1FLGE7QUFJUyxTQUFTQyxLQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsTUFBUSxRQUFSQSxNQUFROztBQUFBLG9CQUVuQkMs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YUssU0FibkI7QUFjQSxnQkFBSSxFQUFFLEVBZE4sQ0FjUztBQWRUO0FBZUEsbUJBQU8sRUFBRSxFQWZUO0FBZ0JBLG1CQUFPLEVBQUUsRUFoQlQ7QUFpQkEseUJBQWEsRUFBRTVCO0FBakJmLGFBTUtVLEtBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREE7QUF3QkgsT0F6QkQsQ0FGQSxHQTRCRTtBQTlCVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0dBN0Z1QmxCLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3N0dWZmXS4yYzU4Y2NjODZjNjYwYjc5Y2M1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB7R2V0dXNlcmNvbnRlbnR9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQge0NyZWF0ZXJlbGF0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbmZsZXgtd3JhcDp3cmFwO1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjI1JTtcclxucGFkZGluZy1yaWdodDoxMHB4O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWZmKHtwYXJhbXN9KXtcclxuXHJcbiAgIGNvbnN0IHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgY29uc3QgW2RhdGEsc2V0ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICBjb25zdCBbY3VycmVudCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB2YXIgbGF0ZXN0cGFyYW1zPVwiXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICBcclxuICAgICAgIHN3aXRjaCAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgY2FzZSBcImtheWRlZGlsZW5sZXJcIjpcclxuICAgICAgICAgICAgICAgbGF0ZXN0cGFyYW1zPVwiUmVhZGxhdGVyXCI7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGNhc2UgXCJiZcSfZW5pbGVubGVyXCI6XHJcbiAgICAgICAgICAgICAgIGxhdGVzdHBhcmFtcz1cIkxpa2VcIlxyXG4gICAgICAgICAgICAgICBicmVhazsgICAgICAgIFxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KGxhdGVzdHBhcmFtcyk7XHJcbiAgICAgICAgICAgIEdldHVzZXJjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczpsYXRlc3RwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRkYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdXNlcmRhdGEscGFyYW1zXSlcclxuXHJcbiAgICBjb25zdCBSZWxhdGlvbnJlcT0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbixpbmRleCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLHBvc3RJZClcclxuICAgICAgICBEZWxldGVpdGVtKGluZGV4KVxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlaXRlbT0oaW5kZXgpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgY29uc3QgbXlkYXRhPXsuLi5kYXRhfTtcclxuICAgICAgICAgbXlkYXRhW2N1cnJlbnRdLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgc2V0ZGF0YShteWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTBweFwifX0+e2N1cnJlbnR9PC9oND5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoID4gMD9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLkNvbnRlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLkNvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4bnVtPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtSZWxhdGlvbnJlcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uQ29udGVudC5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlcm9wdGlvbj17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==