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

  var imagetoken = _ref.imagetoken,
      imagefilename = _ref.imagefilename,
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
    imagefilename: imagefilename,
    imagetoken: imagetoken,
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
          imagefilename: item.User.imageurl,
          imagetoken: item.User.imgatoken,
          subtitle: item.subtitle //no need
          ,
          date: item.createdAt,
          mylist: item.takeit,
          Answerhandler: Answerhandler
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwiaW1hZ2V0b2tlbiIsImltYWdlZmlsZW5hbWUiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwidXNlcmlkIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJVc2VyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJpbWFnZXVybCIsImltZ2F0b2tlbiIsImNyZWF0ZWRBdCIsInRha2VpdCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBR0EsSUFBSUEsYUFBYSxHQUFHLENBQXBCOztBQUNBLFNBQVNDLFlBQVQsT0FBdU07QUFBQTs7QUFBQSxNQUFoTEMsVUFBZ0wsUUFBaExBLFVBQWdMO0FBQUEsTUFBcktDLGFBQXFLLFFBQXJLQSxhQUFxSztBQUFBLE1BQXZKQyxhQUF1SixRQUF2SkEsYUFBdUo7QUFBQSxNQUF6SUMsTUFBeUksUUFBeklBLE1BQXlJO0FBQUEsTUFBbElDLE1BQWtJLFFBQWxJQSxNQUFrSTtBQUFBLE1BQTNIQyxPQUEySCxRQUEzSEEsT0FBMkg7QUFBQSxNQUFuSEMsVUFBbUgsUUFBbkhBLFVBQW1IO0FBQUEsTUFBeEdDLElBQXdHLFFBQXhHQSxJQUF3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QW1Cb0I7QUFuQnBCO0FBb0JKLGNBQUksRUFBRVUsSUFBSSxDQUFDUyxTQXBCUDtBQXFCSixnQkFBTSxFQUFFVCxJQUFJLENBQUNVLE1BckJUO0FBc0JKLHVCQUFhLEVBQUVsQztBQXRCWCxXQVVDeUIsS0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBd0JILE9BekJELENBRkEsR0E0QkM7QUE5Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIOztLQXRFUTVCLFk7QUF3RU0sa0ZBQUFzQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVd2QyxZQUFYLENBQWY7QUFHQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmI3YjdkZTMzYzkzZGZhNTkwZDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiXHJcbi8vZGVuZW1lXHJcblxyXG5cclxudmFyIGxlbmd0aGNvdW50ZXIgPSAwXHJcbmZ1bmN0aW9uIEJlbG93Y29tbWVudCh7aW1hZ2V0b2tlbixpbWFnZWZpbGVuYW1lLEFuc3dlcmhhbmRsZXIsbXlsaXN0LHBvc3RJZCxjb250ZW50LHNob3d3aW5kb3csbGlrZSxyZXR3ZWV0LGNvbW1lbnQscmVhZGxhdGVyLHByb2ZpbGVpbWFnZSx0aXRsZSx0aXRsZWltYWdlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLHN1YnRpdGxlLGRhdGUsdXNlcmlkfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IENvbnRlbnRkaXYgPVxyXG4gICAgKDxDb250ZW50Y2FyZCBcclxuICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgIHBvc3RJZD17cG9zdElkfS8vbm8gbmVlZFxyXG4gICAgY29udGVudD17Y29udGVudH1cclxuICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgcmV0d2VldD17W119XHJcbiAgICBjb21tZW50PXtbXX1cclxuICAgIHJlYWRsYXRlcj17W119XHJcbiAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgdGl0bGU9e3RpdGxlfS8vbm8gbmVlZFxyXG4gICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICB1c2Vyc3VybmFtZT17dXNlcnN1cm5hbWV9XHJcbiAgICBzdWJ0aXRsZT17c3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICBkYXRlPXtkYXRlfVxyXG4gICAgaW1hZ2VmaWxlbmFtZT17aW1hZ2VmaWxlbmFtZX1cclxuICAgIGltYWdldG9rZW49e2ltYWdldG9rZW59XHJcbiAgICB1c2VyaWQ9e3VzZXJpZH1cclxuICAgIEFuc3dlcmhhbmRsZXI9e0Fuc3dlcmhhbmRsZXJ9XHJcbiAgICBDaGlsZGxlbmd0aD17bXlsaXN0Lmxlbmd0aH1cclxuICAgID5cclxuICAgIDwvQ29udGVudGNhcmQ+KVxyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZGF0ZSAmJiBDb250ZW50ZGl2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCIsbWFyZ2luTGVmdDpcIjYwcHhcIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG15bGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgIG15bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCZWxvd2NvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXFpZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5Vc2VyLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5Vc2VyLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5Vc2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlZmlsZW5hbWU9e2l0ZW0uVXNlci5pbWFnZXVybH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXRva2VuPXtpdGVtLlVzZXIuaW1nYXRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS50YWtlaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbG93Y29tbWVudClcclxuXHJcblxyXG4vKlxyXG5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9