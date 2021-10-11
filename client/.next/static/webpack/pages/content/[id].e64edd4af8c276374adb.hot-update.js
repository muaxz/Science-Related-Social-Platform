webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/pages/Content/Commentsection/belowcomment.js":
/*!*****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/belowcomment.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Belowcomment; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/Contentcard */ "./components/shared/Contentcard.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\belowcomment.js";


function Belowcomment(_ref) {
  var _this = this;

  var mylist = _ref.mylist,
      iscomment = _ref.iscomment,
      postId = _ref.postId,
      content = _ref.content,
      showwindow = _ref.showwindow,
      like = _ref.like,
      retweet = _ref.retweet,
      comment = _ref.comment,
      readlater = _ref.readlater,
      profileimage = _ref.profileimage,
      title = _ref.title,
      titleimage = _ref.titleimage,
      username = _ref.username,
      usersurname = _ref.usersurname,
      subtitle = _ref.subtitle,
      date = _ref.date;

  var Contentdiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iscomment: true,
    postId: postId //no need
    ,
    content: content,
    showwindow: function showwindow(stateoflist) {
      return setlist(stateoflist);
    },
    like: [] //bu bir obje array
    ,
    retweet: [],
    comment: [],
    readlater: [],
    profileimage: "/black.jpg",
    title: title //no need
    ,
    titleimage: "yaprak.jpg",
    username: "Duhan",
    usersurname: "Öztürk",
    subtitle: subtitle //no need
    ,
    date: date
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 6
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date ? Contentdiv : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "20px"
      },
      children: mylist.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Belowcomment, {
          iscomment: true,
          postId: item.id //no need
          ,
          content: item.Message,
          showwindow: function showwindow(stateoflist) {
            return setlist(stateoflist);
          },
          like: [] //bu bir obje array
          ,
          retweet: [],
          comment: [],
          readlater: [],
          //key numarası
          profileimage: "/black.jpg",
          title: item.title //no need
          ,
          titleimage: "yaprak.jpg",
          username: "Duhan",
          usersurname: "Öztürk",
          subtitle: item.subtitle //no need
          ,
          date: item.createdAt,
          mylist: []
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
/*

*/

_c = Belowcomment;

var _c;

$RefreshReg$(_c, "Belowcomment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJteWxpc3QiLCJpc2NvbW1lbnQiLCJwb3N0SWQiLCJjb250ZW50Iiwic2hvd3dpbmRvdyIsImxpa2UiLCJyZXR3ZWV0IiwiY29tbWVudCIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsInRpdGxlIiwidGl0bGVpbWFnZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJzdWJ0aXRsZSIsImRhdGUiLCJDb250ZW50ZGl2Iiwic3RhdGVvZmxpc3QiLCJzZXRsaXN0IiwibWFyZ2luVG9wIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJNZXNzYWdlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBbUs7QUFBQTs7QUFBQSxNQUE1SUMsTUFBNEksUUFBNUlBLE1BQTRJO0FBQUEsTUFBcklDLFNBQXFJLFFBQXJJQSxTQUFxSTtBQUFBLE1BQTNIQyxNQUEySCxRQUEzSEEsTUFBMkg7QUFBQSxNQUFwSEMsT0FBb0gsUUFBcEhBLE9BQW9IO0FBQUEsTUFBNUdDLFVBQTRHLFFBQTVHQSxVQUE0RztBQUFBLE1BQWpHQyxJQUFpRyxRQUFqR0EsSUFBaUc7QUFBQSxNQUE1RkMsT0FBNEYsUUFBNUZBLE9BQTRGO0FBQUEsTUFBcEZDLE9BQW9GLFFBQXBGQSxPQUFvRjtBQUFBLE1BQTVFQyxTQUE0RSxRQUE1RUEsU0FBNEU7QUFBQSxNQUFsRUMsWUFBa0UsUUFBbEVBLFlBQWtFO0FBQUEsTUFBckRDLEtBQXFELFFBQXJEQSxLQUFxRDtBQUFBLE1BQS9DQyxVQUErQyxRQUEvQ0EsVUFBK0M7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTs7QUFFOUssTUFBTUMsVUFBVSxnQkFDZixxRUFBQywyREFBRDtBQUNELGFBQVMsRUFBRSxJQURWO0FBRUQsVUFBTSxFQUFFZCxNQUZQLENBRWM7QUFGZDtBQUdELFdBQU8sRUFBRUMsT0FIUjtBQUlELGNBQVUsRUFBRSxvQkFBQ2MsV0FBRDtBQUFBLGFBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLEtBSlg7QUFLRCxRQUFJLEVBQUUsRUFMTCxDQUtRO0FBTFI7QUFNRCxXQUFPLEVBQUUsRUFOUjtBQU9ELFdBQU8sRUFBRSxFQVBSO0FBUUQsYUFBUyxFQUFFLEVBUlY7QUFTRCxnQkFBWSxFQUFFLFlBVGI7QUFVRCxTQUFLLEVBQUVQLEtBVk4sQ0FVWTtBQVZaO0FBV0QsY0FBVSxFQUFFLFlBWFg7QUFZRCxZQUFRLEVBQUUsT0FaVDtBQWFELGVBQVcsRUFBRSxRQWJaO0FBY0QsWUFBUSxFQUFFSSxRQWRULENBY2tCO0FBZGxCO0FBZUQsUUFBSSxFQUFFQztBQWZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDs7QUFvQkEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFDTUEsSUFBSSxHQUNOQyxVQURNLEdBRUosSUFITixlQUtBO0FBQUssV0FBSyxFQUFFO0FBQUNHLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsZ0JBQ0tuQixNQUFNLENBQUNvQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDdEIsNEJBQVEscUVBQUMsWUFBRDtBQUNKLG1CQUFTLEVBQUUsSUFEUDtBQUVKLGdCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFGVCxDQUVZO0FBRlo7QUFHSixpQkFBTyxFQUFFRixJQUFJLENBQUNHLE9BSFY7QUFJSixvQkFBVSxFQUFFLG9CQUFDUCxXQUFEO0FBQUEsbUJBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLFdBSlI7QUFLSixjQUFJLEVBQUUsRUFMRixDQUtLO0FBTEw7QUFNSixpQkFBTyxFQUFFLEVBTkw7QUFPSixpQkFBTyxFQUFFLEVBUEw7QUFRSixtQkFBUyxFQUFFLEVBUlA7QUFTTztBQUNYLHNCQUFZLEVBQUUsWUFWVjtBQVdKLGVBQUssRUFBRUksSUFBSSxDQUFDWCxLQVhSLENBV2M7QUFYZDtBQVlKLG9CQUFVLEVBQUUsWUFaUjtBQWFKLGtCQUFRLEVBQUUsT0FiTjtBQWNKLHFCQUFXLEVBQUUsUUFkVDtBQWVKLGtCQUFRLEVBQUVXLElBQUksQ0FBQ1AsUUFmWCxDQWVvQjtBQWZwQjtBQWdCSixjQUFJLEVBQUVPLElBQUksQ0FBQ0ksU0FoQlA7QUFpQkosZ0JBQU0sRUFBRTtBQWpCSixXQVNDSCxLQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUFtQkgsT0FwQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0g7QUFHRDtBQUNBO0FBQ0E7O0tBM0R3QnZCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmU2NGVkZDRhZjhjMjc2Mzc0YWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWxvd2NvbW1lbnQoe215bGlzdCxpc2NvbW1lbnQscG9zdElkLGNvbnRlbnQsc2hvd3dpbmRvdyxsaWtlLHJldHdlZXQsY29tbWVudCxyZWFkbGF0ZXIscHJvZmlsZWltYWdlLHRpdGxlLHRpdGxlaW1hZ2UsdXNlcm5hbWUsdXNlcnN1cm5hbWUsc3VidGl0bGUsZGF0ZX0pe1xyXG5cclxuICAgIGNvbnN0IENvbnRlbnRkaXYgPVxyXG4gICAgKDxDb250ZW50Y2FyZCBcclxuICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgIHBvc3RJZD17cG9zdElkfS8vbm8gbmVlZFxyXG4gICAgY29udGVudD17Y29udGVudH1cclxuICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgcmV0d2VldD17W119XHJcbiAgICBjb21tZW50PXtbXX1cclxuICAgIHJlYWRsYXRlcj17W119XHJcbiAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgdGl0bGU9e3RpdGxlfS8vbm8gbmVlZFxyXG4gICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn1cclxuICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgIGRhdGU9e2RhdGV9XHJcbiAgICA+XHJcbiAgICA8L0NvbnRlbnRjYXJkPilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgeyBkYXRlID9cclxuICAgICAgICAgICAgQ29udGVudGRpdlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICB7bXlsaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEJlbG93Y29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlsaXN0PXtbXX1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuLypcclxuXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==