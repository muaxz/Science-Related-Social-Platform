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

 //deneme

function Belowcomment(_ref) {
  var _this = this;

  var Answerhandler = _ref.Answerhandler,
      mylist = _ref.mylist,
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
    date: date,
    Answerhandler: Answerhandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 6
  }, this);

  console.log(mylist);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date && Contentdiv, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          mylist: [],
          Answerhandler: Answerhandler
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNlLFNBQVNBLFlBQVQsT0FBdUs7QUFBQTs7QUFBQSxNQUFoSkMsYUFBZ0osUUFBaEpBLGFBQWdKO0FBQUEsTUFBbElDLE1BQWtJLFFBQWxJQSxNQUFrSTtBQUFBLE1BQTNIQyxNQUEySCxRQUEzSEEsTUFBMkg7QUFBQSxNQUFwSEMsT0FBb0gsUUFBcEhBLE9BQW9IO0FBQUEsTUFBNUdDLFVBQTRHLFFBQTVHQSxVQUE0RztBQUFBLE1BQWpHQyxJQUFpRyxRQUFqR0EsSUFBaUc7QUFBQSxNQUE1RkMsT0FBNEYsUUFBNUZBLE9BQTRGO0FBQUEsTUFBcEZDLE9BQW9GLFFBQXBGQSxPQUFvRjtBQUFBLE1BQTVFQyxTQUE0RSxRQUE1RUEsU0FBNEU7QUFBQSxNQUFsRUMsWUFBa0UsUUFBbEVBLFlBQWtFO0FBQUEsTUFBckRDLEtBQXFELFFBQXJEQSxLQUFxRDtBQUFBLE1BQS9DQyxVQUErQyxRQUEvQ0EsVUFBK0M7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTs7QUFFbEwsTUFBTUMsVUFBVSxnQkFDZixxRUFBQywyREFBRDtBQUNELGFBQVMsRUFBRSxJQURWO0FBRUQsVUFBTSxFQUFFZCxNQUZQLENBRWM7QUFGZDtBQUdELFdBQU8sRUFBRUMsT0FIUjtBQUlELGNBQVUsRUFBRSxvQkFBQ2MsV0FBRDtBQUFBLGFBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLEtBSlg7QUFLRCxRQUFJLEVBQUUsRUFMTCxDQUtRO0FBTFI7QUFNRCxXQUFPLEVBQUUsRUFOUjtBQU9ELFdBQU8sRUFBRSxFQVBSO0FBUUQsYUFBUyxFQUFFLEVBUlY7QUFTRCxnQkFBWSxFQUFFLFlBVGI7QUFVRCxTQUFLLEVBQUVQLEtBVk4sQ0FVWTtBQVZaO0FBV0QsY0FBVSxFQUFFLFlBWFg7QUFZRCxZQUFRLEVBQUUsT0FaVDtBQWFELGVBQVcsRUFBRSxRQWJaO0FBY0QsWUFBUSxFQUFFSSxRQWRULENBY2tCO0FBZGxCO0FBZUQsUUFBSSxFQUFFQyxJQWZMO0FBZ0JELGlCQUFhLEVBQUVmO0FBaEJkO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDs7QUFvQkFtQixTQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7QUFDQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUVFYyxJQUFJLElBQUlDLFVBRlYsZUFJQTtBQUFLLFdBQUssRUFBRTtBQUFDSyxpQkFBUyxFQUFDO0FBQVgsT0FBWjtBQUFBLGdCQUVJcEIsTUFBTSxDQUFDcUIsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFjO0FBQ3JCLDRCQUFRLHFFQUFDLFlBQUQ7QUFDSixtQkFBUyxFQUFFLElBRFA7QUFFSixnQkFBTSxFQUFFRCxJQUFJLENBQUNFLEVBRlQsQ0FFWTtBQUZaO0FBR0osaUJBQU8sRUFBRUYsSUFBSSxDQUFDRyxPQUhWO0FBSUosb0JBQVUsRUFBRSxvQkFBQ1QsV0FBRDtBQUFBLG1CQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxXQUpSO0FBS0osY0FBSSxFQUFFLEVBTEYsQ0FLSztBQUxMO0FBTUosaUJBQU8sRUFBRSxFQU5MO0FBT0osaUJBQU8sRUFBRSxFQVBMO0FBUUosbUJBQVMsRUFBRSxFQVJQO0FBU087QUFDWCxzQkFBWSxFQUFFLFlBVlY7QUFXSixlQUFLLEVBQUVNLElBQUksQ0FBQ2IsS0FYUixDQVdjO0FBWGQ7QUFZSixvQkFBVSxFQUFFLFlBWlI7QUFhSixrQkFBUSxFQUFFLE9BYk47QUFjSixxQkFBVyxFQUFFLFFBZFQ7QUFlSixrQkFBUSxFQUFFYSxJQUFJLENBQUNULFFBZlgsQ0Flb0I7QUFmcEI7QUFnQkosY0FBSSxFQUFFUyxJQUFJLENBQUNJLFNBaEJQO0FBaUJKLGdCQUFNLEVBQUUsRUFqQko7QUFrQkosdUJBQWEsRUFBRTNCO0FBbEJYLFdBU0N3QixLQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUFvQkgsT0FyQkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0g7QUFHRDtBQUNBO0FBQ0E7O0tBOUR3QnpCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmY2YThkZWQ2YzQ2NDg0NjAzODAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbi8vZGVuZW1lXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJlbG93Y29tbWVudCh7QW5zd2VyaGFuZGxlcixteWxpc3QscG9zdElkLGNvbnRlbnQsc2hvd3dpbmRvdyxsaWtlLHJldHdlZXQsY29tbWVudCxyZWFkbGF0ZXIscHJvZmlsZWltYWdlLHRpdGxlLHRpdGxlaW1hZ2UsdXNlcm5hbWUsdXNlcnN1cm5hbWUsc3VidGl0bGUsZGF0ZX0pe1xyXG5cclxuICAgIGNvbnN0IENvbnRlbnRkaXYgPVxyXG4gICAgKDxDb250ZW50Y2FyZCBcclxuICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgIHBvc3RJZD17cG9zdElkfS8vbm8gbmVlZFxyXG4gICAgY29udGVudD17Y29udGVudH1cclxuICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgcmV0d2VldD17W119XHJcbiAgICBjb21tZW50PXtbXX1cclxuICAgIHJlYWRsYXRlcj17W119XHJcbiAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgdGl0bGU9e3RpdGxlfS8vbm8gbmVlZFxyXG4gICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn1cclxuICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgIGRhdGU9e2RhdGV9XHJcbiAgICBBbnN3ZXJoYW5kbGVyPXtBbnN3ZXJoYW5kbGVyfVxyXG4gICAgPlxyXG4gICAgPC9Db250ZW50Y2FyZD4pXHJcbiAgICBjb25zb2xlLmxvZyhteWxpc3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZGF0ZSAmJiBDb250ZW50ZGl2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBteWxpc3QubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QmVsb3djb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn1cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICBteWxpc3Q9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcmhhbmRsZXI9e0Fuc3dlcmhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+PC9CZWxvd2NvbW1lbnQ+KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbi8qXHJcblxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=