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
      date = _ref.date,
      userid = _ref.userid;

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
    username: username,
    usersurname: usersurname,
    subtitle: subtitle //no need
    ,
    date: date,
    userid: userid,
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
          usersurname: item.User.lastname,
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
          lineNumber: 45,
          columnNumber: 25
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwicGFyZW50SWQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwidXNlcmlkIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJVc2VyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJpbWFnZXVybCIsImltZ2F0b2tlbiIsImNyZWF0ZWRBdCIsInRha2VpdCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBR0EsSUFBSUEsYUFBYSxHQUFHLENBQXBCOztBQUNBLFNBQVNDLFlBQVQsT0FBdUw7QUFBQTs7QUFBQSxNQUFoS0MsUUFBZ0ssUUFBaEtBLFFBQWdLO0FBQUEsTUFBdkpDLGFBQXVKLFFBQXZKQSxhQUF1SjtBQUFBLE1BQXpJQyxNQUF5SSxRQUF6SUEsTUFBeUk7QUFBQSxNQUFsSUMsTUFBa0ksUUFBbElBLE1BQWtJO0FBQUEsTUFBM0hDLE9BQTJILFFBQTNIQSxPQUEySDtBQUFBLE1BQW5IQyxVQUFtSCxRQUFuSEEsVUFBbUg7QUFBQSxNQUF4R0MsSUFBd0csUUFBeEdBLElBQXdHO0FBQUEsTUFBbkdDLE9BQW1HLFFBQW5HQSxPQUFtRztBQUFBLE1BQTNGQyxPQUEy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bEMsYUF0Qlg7QUF1Qkosa0JBQVEsRUFBRXdCLElBQUksQ0FBQ3pCO0FBdkJYLFdBVUMwQixLQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUF5QkgsT0ExQkQsQ0FGQSxHQTZCQztBQS9CTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7O0tBckVRM0IsWTtBQXVFTSxrRkFBQXFDLDRDQUFLLENBQUNDLElBQU4sQ0FBV3RDLFlBQVgsQ0FBZjtBQUdBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uOTEwMWNiNGM2MDBkMTYyMmQzNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCJcclxuLy9kZW5lbWVcclxuXHJcblxyXG52YXIgbGVuZ3RoY291bnRlciA9IDBcclxuZnVuY3Rpb24gQmVsb3djb21tZW50KHtwYXJlbnRJZCxBbnN3ZXJoYW5kbGVyLG15bGlzdCxwb3N0SWQsY29udGVudCxzaG93d2luZG93LGxpa2UscmV0d2VldCxjb21tZW50LHJlYWRsYXRlcixwcm9maWxlaW1hZ2UsdGl0bGUsdGl0bGVpbWFnZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxzdWJ0aXRsZSxkYXRlLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBDb250ZW50ZGl2ID1cclxuICAgICg8Q29udGVudGNhcmQgXHJcbiAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICBwb3N0SWQ9e3Bvc3RJZH0vL25vIG5lZWRcclxuICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgY29tbWVudD17W119XHJcbiAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgIHRpdGxlPXt0aXRsZX0vL25vIG5lZWRcclxuICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgdXNlcnN1cm5hbWU9e3VzZXJzdXJuYW1lfVxyXG4gICAgc3VidGl0bGU9e3N1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgZGF0ZT17ZGF0ZX1cclxuICAgIHVzZXJpZD17dXNlcmlkfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgIENoaWxkbGVuZ3RoPXtteWxpc3QubGVuZ3RofVxyXG4gICAgPlxyXG4gICAgPC9Db250ZW50Y2FyZD4pXHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbXlsaXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgbXlsaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEJlbG93Y29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dW5pcWlkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLlVzZXIuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLlVzZXIubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLlVzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V1cmw9e2l0ZW0uVXNlci5pbWFnZXVybH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXRva2VuPXtpdGVtLlVzZXIuaW1nYXRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS50YWtlaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZD17aXRlbS5wYXJlbnRJZH1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbG93Y29tbWVudClcclxuXHJcblxyXG4vKlxyXG5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9