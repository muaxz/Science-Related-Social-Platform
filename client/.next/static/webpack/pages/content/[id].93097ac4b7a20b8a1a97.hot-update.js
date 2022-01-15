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

  var Editcommenthandler = _ref.Editcommenthandler,
      imagetoken = _ref.imagetoken,
      imagefilename = _ref.imagefilename,
      Answerhandler = _ref.Answerhandler,
      mylist = _ref.mylist,
      commentID = _ref.commentID,
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
    postId: commentID //no need
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
    imagefilename: imagefilename,
    imagetoken: imagetoken,
    userid: userid,
    Answerhandler: Answerhandler,
    Childlength: mylist.length,
    Editcommenthandler: Editcommenthandler
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
          commentID: item.id //no need
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
          imagefilename: item.User.imageurl,
          imagetoken: item.User.imagetoken,
          subtitle: item.subtitle //no need
          ,
          date: item.createdAt,
          mylist: item.takeit,
          Answerhandler: Answerhandler,
          Editcommenthandler: Editcommenthandler
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwiRWRpdGNvbW1lbnRoYW5kbGVyIiwiaW1hZ2V0b2tlbiIsImltYWdlZmlsZW5hbWUiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwiY29tbWVudElEIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwidXNlcmlkIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJVc2VyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJpbWFnZXVybCIsImNyZWF0ZWRBdCIsInRha2VpdCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBR0EsSUFBSUEsYUFBYSxHQUFHLENBQXBCOztBQUNBLFNBQVNDLFlBQVQsT0FBNk47QUFBQTs7QUFBQSxNQUF0TUMsa0JBQXNNLFFBQXRNQSxrQkFBc007QUFBQSxNQUFuTEMsVUFBbUwsUUFBbkxBLFVBQW1MO0FBQUEsTUFBeEtDLGFBQXdLLFFBQXhLQSxhQUF3SztBQUFBLE1BQTFKQyxhQUEwSixRQUExSkEsYUFBMEo7QUFBQSxNQUE1SUMsTUFBNEksUUFBNUlBLE1BQTRJO0FBQUEsTUFBcklDLFNBQXFJLFFBQXJJQSxTQUFxSTtBQUFBLE1BQTNIQyxPQUEySCxRQUEzSEEsT0FBMkg7QUFBQSxNQUFuSEMsVUFB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QUFVLEVBQUVQLElBQUksQ0FBQ0ksSUFBTCxDQUFVOUIsVUFsQmxCO0FBbUJKLGtCQUFRLEVBQUUwQixJQUFJLENBQUNWLFFBbkJYLENBbUJvQjtBQW5CcEI7QUFvQkosY0FBSSxFQUFFVSxJQUFJLENBQUNRLFNBcEJQO0FBcUJKLGdCQUFNLEVBQUVSLElBQUksQ0FBQ1MsTUFyQlQ7QUFzQkosdUJBQWEsRUFBRWpDLGFBdEJYO0FBdUJKLDRCQUFrQixFQUFFSDtBQXZCaEIsV0FVQzRCLEtBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQXlCSCxPQTFCRCxDQUZBLEdBNkJDO0FBaENMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7S0F6RVE3QixZO0FBMkVNLGtGQUFBc0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXdkMsWUFBWCxDQUFmO0FBR0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS45MzA5N2FjNGI3YTIwYjhhMWE5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIlxyXG4vL2RlbmVtZVxyXG5cclxuXHJcbnZhciBsZW5ndGhjb3VudGVyID0gMFxyXG5mdW5jdGlvbiBCZWxvd2NvbW1lbnQoe0VkaXRjb21tZW50aGFuZGxlcixpbWFnZXRva2VuLGltYWdlZmlsZW5hbWUsQW5zd2VyaGFuZGxlcixteWxpc3QsY29tbWVudElELGNvbnRlbnQsc2hvd3dpbmRvdyxsaWtlLHJldHdlZXQsY29tbWVudCxyZWFkbGF0ZXIscHJvZmlsZWltYWdlLHRpdGxlLHRpdGxlaW1hZ2UsdXNlcm5hbWUsdXNlcnN1cm5hbWUsc3VidGl0bGUsZGF0ZSx1c2VyaWR9KXtcclxuICAgIFxyXG4gICAgY29uc3QgQ29udGVudGRpdiA9XHJcbiAgICAoPENvbnRlbnRjYXJkIFxyXG4gICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgcG9zdElkPXtjb21tZW50SUR9Ly9ubyBuZWVkXHJcbiAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICByZXR3ZWV0PXtbXX1cclxuICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgcmVhZGxhdGVyPXtbXX1cclxuICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICB0aXRsZT17dGl0bGV9Ly9ubyBuZWVkXHJcbiAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgIHVzZXJzdXJuYW1lPXt1c2Vyc3VybmFtZX1cclxuICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgIGRhdGU9e2RhdGV9XHJcbiAgICBpbWFnZWZpbGVuYW1lPXtpbWFnZWZpbGVuYW1lfVxyXG4gICAgaW1hZ2V0b2tlbj17aW1hZ2V0b2tlbn1cclxuICAgIHVzZXJpZD17dXNlcmlkfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgIENoaWxkbGVuZ3RoPXtteWxpc3QubGVuZ3RofVxyXG4gICAgRWRpdGNvbW1lbnRoYW5kbGVyPXtFZGl0Y29tbWVudGhhbmRsZXJ9XHJcbiAgICA+XHJcbiAgICA8L0NvbnRlbnRjYXJkPilcclxuICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGRhdGUgJiYgQ29udGVudGRpdlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwiLG1hcmdpbkxlZnQ6XCI2MHB4XCJ9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG15bGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgIG15bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCZWxvd2NvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXFpZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50SUQ9e2l0ZW0uaWR9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5Vc2VyLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5Vc2VyLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5Vc2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlZmlsZW5hbWU9e2l0ZW0uVXNlci5pbWFnZXVybH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXRva2VuPXtpdGVtLlVzZXIuaW1hZ2V0b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICBteWxpc3Q9e2l0ZW0udGFrZWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcmhhbmRsZXI9e0Fuc3dlcmhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdGNvbW1lbnRoYW5kbGVyPXtFZGl0Y29tbWVudGhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+PC9CZWxvd2NvbW1lbnQ+KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCZWxvd2NvbW1lbnQpXHJcblxyXG5cclxuLypcclxuXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==