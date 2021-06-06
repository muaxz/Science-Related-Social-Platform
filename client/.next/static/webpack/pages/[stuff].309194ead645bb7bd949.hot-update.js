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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9TdHVmZi5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvcmRpdiIsInN0eWxlZCIsImRpdiIsIklubmVyZGl2IiwiQ29udGVudGhvbGRlciIsIlN0dWZmIiwicGFyYW1zIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXRkYXRhIiwiY3VycmVudCIsInNldGN1cnJlbnQiLCJsYXRlc3RwYXJhbXMiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJHZXR1c2VyY29udGVudCIsIlJlbGF0aW9ucmVxIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJEZWxldGVpdGVtIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJteWRhdGEiLCJzcGxpY2UiLCJwYWRkaW5nQm90dG9tIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIkNvbnRlbnQiLCJpZCIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdEQUFqQjtLQUFNRixXO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFEQUFkO01BQU1DLFE7QUFNTixJQUFNQyxhQUFhLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1FLGE7QUFJUyxTQUFTQyxLQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsTUFBUSxRQUFSQSxNQUFROztBQUFBLG9CQUVuQkMs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QWNBLGdCQUFJLEVBQUUsRUFkTixDQWNTO0FBZFQ7QUFlQSxtQkFBTyxFQUFFLEVBZlQ7QUFnQkEsbUJBQU8sRUFBRSxFQWhCVDtBQWlCQSx5QkFBYSxFQUFFNUI7QUFqQmYsYUFNS1UsS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQXdCSCxPQXpCRCxDQUZBLEdBNEJFO0FBOUJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdDSDs7R0E3RnVCbEIsSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc3R1ZmZdLjMwOTE5NGVhZDY0NWJiN2JkOTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtHZXR1c2VyY29udGVudH0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7Q3JlYXRlcmVsYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEyMDBweDtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy10b3A6MTBweDtcclxuZmxleC13cmFwOndyYXA7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MjUlO1xyXG5wYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZmYoe3BhcmFtc30pe1xyXG5cclxuICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgIGNvbnN0IFtjdXJyZW50LHNldGN1cnJlbnRdPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHZhciBsYXRlc3RwYXJhbXM9XCJcIjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgIFxyXG4gICAgICAgc3dpdGNoIChwYXJhbXMpIHtcclxuICAgICAgICAgICBjYXNlIFwia2F5ZGVkaWxlbmxlclwiOlxyXG4gICAgICAgICAgICAgICBsYXRlc3RwYXJhbXM9XCJSZWFkbGF0ZXJcIjtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgY2FzZSBcImJlxJ9lbmlsZW5sZXJcIjpcclxuICAgICAgICAgICAgICAgbGF0ZXN0cGFyYW1zPVwiTGlrZVwiXHJcbiAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgXHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQobGF0ZXN0cGFyYW1zKTtcclxuICAgICAgICAgICAgR2V0dXNlcmNvbnRlbnQoe1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOmxhdGVzdHBhcmFtcyxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBzZXRkYXRhOnNldGRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxwYXJhbXNdKVxyXG5cclxuICAgIGNvbnN0IFJlbGF0aW9ucmVxPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLGluZGV4KT0+e1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUscG9zdElkKVxyXG4gICAgICAgIERlbGV0ZWl0ZW0oaW5kZXgpXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb25cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVpdGVtPShpbmRleCk9PntcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICBjb25zdCBteWRhdGE9ey4uLmRhdGF9O1xyXG4gICAgICAgICBteWRhdGFbY3VycmVudF0uc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICBzZXRkYXRhKG15ZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e3BhZGRpbmdCb3R0b206XCIxMHB4XCJ9fT57Y3VycmVudH08L2g0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uQ29udGVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uQ29udGVudC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhudW09e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e1JlbGF0aW9ucmVxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5Db250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5Db250ZW50LnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5Db250ZW50LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2Vyb3B0aW9uPXtjdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Y2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9