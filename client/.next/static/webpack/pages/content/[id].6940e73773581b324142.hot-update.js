webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/pages/Content/Commentsection/belowcomment.js":
/*!*****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/belowcomment.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\belowcomment.js";


 //deneme

var lengthcounter = 0;

function Belowcomment(_ref) {
  var _this = this;

  var parentId = _ref.parentId,
      Answerhandler = _ref.Answerhandler,
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
    Answerhandler: Answerhandler,
    Childlength: mylist.length
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 6
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date && Contentdiv, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "20px",
        marginLeft: "60px"
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
          username: item.User.firstname,
          usersurname: "sa",
          userid: item.User.id,
          imageurl: item.User.imageurl,
          imagetoken: item.User.imgatoken,
          subtitle: item.subtitle //no need
          ,
          date: item.createdAt,
          mylist: item.takeit,
          Answerhandler: Answerhandler,
          parentId: item.parentId
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

_c = Belowcomment;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Belowcomment));
/*

*/

var _c, _c2;

$RefreshReg$(_c, "Belowcomment");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwicGFyZW50SWQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJVc2VyIiwiZmlyc3RuYW1lIiwiaW1hZ2V1cmwiLCJpbWdhdG9rZW4iLCJjcmVhdGVkQXQiLCJ0YWtlaXQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUdBLElBQUlBLGFBQWEsR0FBRyxDQUFwQjs7QUFDQSxTQUFTQyxZQUFULE9BQWdMO0FBQUE7O0FBQUEsTUFBekpDLFFBQXlKLFFBQXpKQSxRQUF5SjtBQUFBLE1BQWhKQyxhQUFnSixRQUFoSkEsYUFBZ0o7QUFBQSxNQUFsSUMsTUFBa0ksUUFBbElBLE1BQWtJO0FBQUEsTUFBM0hDLE1BQTJILFFBQTNIQSxNQUEySDtBQUFBLE1BQXBIQyxPQUFvSCxRQUFwSEEsT0FBb0g7QUFBQSxNQUE1R0MsVUFBNEcsUUFBNUdBLFVBQTRHO0FBQUEsTUFBakdDLElBQWlHLFFBQWpHQSxJQUFpRztBQUFBLE1BQTVGQyxPQUE0RixRQUE1RkEsT0FBNEY7QUFBQSxNQUFwRkMsT0FBb0YsUUFBcEZBLE9BQW9GO0FBQUEs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R0E2QkM7QUEvQkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztLQXBFUTFCLFk7QUFzRU0sa0ZBQUFtQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdwQyxZQUFYLENBQWY7QUFHQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjY5NDBlNzM3NzM1ODFiMzI0MTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiXHJcbi8vZGVuZW1lXHJcblxyXG5cclxudmFyIGxlbmd0aGNvdW50ZXIgPSAwXHJcbmZ1bmN0aW9uIEJlbG93Y29tbWVudCh7cGFyZW50SWQsQW5zd2VyaGFuZGxlcixteWxpc3QscG9zdElkLGNvbnRlbnQsc2hvd3dpbmRvdyxsaWtlLHJldHdlZXQsY29tbWVudCxyZWFkbGF0ZXIscHJvZmlsZWltYWdlLHRpdGxlLHRpdGxlaW1hZ2UsdXNlcm5hbWUsdXNlcnN1cm5hbWUsc3VidGl0bGUsZGF0ZX0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBDb250ZW50ZGl2ID1cclxuICAgICg8Q29udGVudGNhcmQgXHJcbiAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICBwb3N0SWQ9e3Bvc3RJZH0vL25vIG5lZWRcclxuICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgY29tbWVudD17W119XHJcbiAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgIHRpdGxlPXt0aXRsZX0vL25vIG5lZWRcclxuICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICBzdWJ0aXRsZT17c3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICBkYXRlPXtkYXRlfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgIENoaWxkbGVuZ3RoPXtteWxpc3QubGVuZ3RofVxyXG4gICAgPlxyXG4gICAgPC9Db250ZW50Y2FyZD4pXHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbXlsaXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgbXlsaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEJlbG93Y29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dW5pcWlkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLlVzZXIuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcInNhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLlVzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V1cmw9e2l0ZW0uVXNlci5pbWFnZXVybH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXRva2VuPXtpdGVtLlVzZXIuaW1nYXRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS50YWtlaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZD17aXRlbS5wYXJlbnRJZH1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbG93Y29tbWVudClcclxuXHJcblxyXG4vKlxyXG5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9