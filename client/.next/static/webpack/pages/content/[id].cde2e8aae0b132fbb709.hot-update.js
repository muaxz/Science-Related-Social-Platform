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
      children: mylist.length > 0 ? mylist.map(function (item, index) {
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
          mylist: [item.subcomments]
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, _this);
      }) : null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJjcmVhdGVkQXQiLCJzdWJjb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ2UsU0FBU0EsWUFBVCxPQUF1SztBQUFBOztBQUFBLE1BQWhKQyxhQUFnSixRQUFoSkEsYUFBZ0o7QUFBQSxNQUFsSUMsTUFBa0ksUUFBbElBLE1BQWtJO0FBQUEsTUFBM0hDLE1BQTJILFFBQTNIQSxNQUEySDtBQUFBLE1BQXBIQyxPQUFvSCxRQUFwSEEsT0FBb0g7QUFBQSxNQUE1R0MsVUFBNEcsUUFBNUdBLFVBQTRHO0FBQUEsTUFBakdDLElBQWlHLFFBQWpHQSxJQUFpRztBQUFBLE1BQTVGQyxPQUE0RixRQUE1RkEsT0FBNEY7QUFBQSxNQUFwRkMsT0FBb0YsUUFBcEZBLE9BQW9GO0FBQUEsTUFBNUVDLFNBQTRFLFFBQTVFQSxTQUE0RTtBQUFBLE1BQWxFQyxZQUFrRSxRQUFsRUEsWUFBa0U7QUFBQSxNQUFyREMsS0FBcUQsUUFBckRBLEtBQXFEO0FBQUEsTUFBL0NDLFVBQStDLFFBQS9DQSxVQUErQztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNOztBQUVsTCxNQUFNQyxVQUFVLGdCQUNmLHFFQUFDLDJEQUFEO0FBQ0QsYUFBUyxFQUFFLElBRFY7QUFFRCxVQUFNLEVBQUVkLE1BRlAsQ0FFYztBQUZkO0FBR0QsV0FBTyxFQUFFQyxPQUhSO0FBSUQsY0FBVSxFQUFFLG9CQUFDYyxXQUFEO0FBQUEsYUFBZUMsT0FBTyxDQUFDRCxXQUFELENBQXRCO0FBQUEsS0FKWDtBQUtELFFBQUksRUFBRSxFQUxMLENBS1E7QUFMUjtBQU1ELFdBQU8sRUFBRSxFQU5SO0FBT0QsV0FBTyxFQUFFLEVBUFI7QUFRRCxhQUFTLEVBQUUsRUFSVjtBQVNELGdCQUFZLEVBQUUsWUFUYjtBQVVELFNBQUssRUFBRVAsS0FWTixDQVVZO0FBVlo7QUFXRCxjQUFVLEVBQUUsWUFYWDtBQVlELFlBQVEsRUFBRSxPQVpUO0FBYUQsZUFBVyxFQUFFLFFBYlo7QUFjRCxZQUFRLEVBQUVJLFFBZFQsQ0Fja0I7QUFkbEI7QUFlRCxRQUFJLEVBQUVDLElBZkw7QUFnQkQsaUJBQWEsRUFBRWY7QUFoQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREOztBQW9CQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsTUFBWjtBQUNBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBRUVjLElBQUksSUFBSUMsVUFGVixlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNLLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsZ0JBR0lwQixNQUFNLENBQUNxQixNQUFQLEdBQWdCLENBQWhCLEdBRUFyQixNQUFNLENBQUNzQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDckIsNEJBQVEscUVBQUMsWUFBRDtBQUNKLG1CQUFTLEVBQUUsSUFEUDtBQUVKLGdCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFGVCxDQUVZO0FBRlo7QUFHSixpQkFBTyxFQUFFRixJQUFJLENBQUNHLE9BSFY7QUFJSixvQkFBVSxFQUFFLG9CQUFDVixXQUFEO0FBQUEsbUJBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLFdBSlI7QUFLSixjQUFJLEVBQUUsRUFMRixDQUtLO0FBTEw7QUFNSixpQkFBTyxFQUFFLEVBTkw7QUFPSixpQkFBTyxFQUFFLEVBUEw7QUFRSixtQkFBUyxFQUFFLEVBUlA7QUFTTztBQUNYLHNCQUFZLEVBQUUsWUFWVjtBQVdKLGVBQUssRUFBRU8sSUFBSSxDQUFDZCxLQVhSLENBV2M7QUFYZDtBQVlKLG9CQUFVLEVBQUUsWUFaUjtBQWFKLGtCQUFRLEVBQUUsT0FiTjtBQWNKLHFCQUFXLEVBQUUsUUFkVDtBQWVKLGtCQUFRLEVBQUVjLElBQUksQ0FBQ1YsUUFmWCxDQWVvQjtBQWZwQjtBQWdCSixjQUFJLEVBQUVVLElBQUksQ0FBQ0ksU0FoQlA7QUFpQkosZ0JBQU0sRUFBRSxDQUFDSixJQUFJLENBQUNLLFdBQU47QUFqQkosV0FTQ0osS0FURDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBbUJILE9BcEJELENBRkEsR0F1QkM7QUExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIO0FBR0Q7QUFDQTtBQUNBOztLQWpFd0IxQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS5jZGUyZThhYWUwYjEzMmZiYjcwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG4vL2RlbmVtZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWxvd2NvbW1lbnQoe0Fuc3dlcmhhbmRsZXIsbXlsaXN0LHBvc3RJZCxjb250ZW50LHNob3d3aW5kb3csbGlrZSxyZXR3ZWV0LGNvbW1lbnQscmVhZGxhdGVyLHByb2ZpbGVpbWFnZSx0aXRsZSx0aXRsZWltYWdlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLHN1YnRpdGxlLGRhdGV9KXtcclxuXHJcbiAgICBjb25zdCBDb250ZW50ZGl2ID1cclxuICAgICg8Q29udGVudGNhcmQgXHJcbiAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICBwb3N0SWQ9e3Bvc3RJZH0vL25vIG5lZWRcclxuICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgY29tbWVudD17W119XHJcbiAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgIHRpdGxlPXt0aXRsZX0vL25vIG5lZWRcclxuICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICBzdWJ0aXRsZT17c3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICBkYXRlPXtkYXRlfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgID5cclxuICAgIDwvQ29udGVudGNhcmQ+KVxyXG4gICAgY29uc29sZS5sb2cobXlsaXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGRhdGUgJiYgQ29udGVudGRpdlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBteWxpc3QubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBteWxpc3QubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QmVsb3djb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn1cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICBteWxpc3Q9e1tpdGVtLnN1YmNvbW1lbnRzXX1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuLypcclxuXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==