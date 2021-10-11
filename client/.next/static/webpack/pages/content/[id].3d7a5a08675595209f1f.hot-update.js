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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);

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
    lineNumber: 8,
    columnNumber: 6
  }, this);

  console.log(mylist);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date && Contentdiv, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "20px",
        marginLeft: "60px"
      },
      children: mylist ? mylist.map(function (item, index) {
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
          mylist: item.subcomments,
          Answerhandler: Answerhandler
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJNZXNzYWdlIiwiY3JlYXRlZEF0Iiwic3ViY29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDZSxTQUFTQSxZQUFULE9BQXVLO0FBQUE7O0FBQUEsTUFBaEpDLGFBQWdKLFFBQWhKQSxhQUFnSjtBQUFBLE1BQWxJQyxNQUFrSSxRQUFsSUEsTUFBa0k7QUFBQSxNQUEzSEMsTUFBMkgsUUFBM0hBLE1BQTJIO0FBQUEsTUFBcEhDLE9BQW9ILFFBQXBIQSxPQUFvSDtBQUFBLE1BQTVHQyxVQUE0RyxRQUE1R0EsVUFBNEc7QUFBQSxNQUFqR0MsSUFBaUcsUUFBakdBLElBQWlHO0FBQUEsTUFBNUZDLE9BQTRGLFFBQTVGQSxPQUE0RjtBQUFBLE1BQXBGQyxPQUFvRixRQUFwRkEsT0FBb0Y7QUFBQSxNQUE1RUMsU0FBNEUsUUFBNUVBLFNBQTRFO0FBQUEsTUFBbEVDLFlBQWtFLFFBQWxFQSxZQUFrRTtBQUFBLE1BQXJEQyxLQUFxRCxRQUFyREEsS0FBcUQ7QUFBQSxNQUEvQ0MsVUFBK0MsUUFBL0NBLFVBQStDO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBRWxMLE1BQU1DLFVBQVUsZ0JBQ2YscUVBQUMsMkRBQUQ7QUFDRCxhQUFTLEVBQUUsSUFEVjtBQUVELFVBQU0sRUFBRWQsTUFGUCxDQUVjO0FBRmQ7QUFHRCxXQUFPLEVBQUVDLE9BSFI7QUFJRCxjQUFVLEVBQUUsb0JBQUNjLFdBQUQ7QUFBQSxhQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxLQUpYO0FBS0QsUUFBSSxFQUFFLEVBTEwsQ0FLUTtBQUxSO0FBTUQsV0FBTyxFQUFFLEVBTlI7QUFPRCxXQUFPLEVBQUUsRUFQUjtBQVFELGFBQVMsRUFBRSxFQVJWO0FBU0QsZ0JBQVksRUFBRSxZQVRiO0FBVUQsU0FBSyxFQUFFUCxLQVZOLENBVVk7QUFWWjtBQVdELGNBQVUsRUFBRSxZQVhYO0FBWUQsWUFBUSxFQUFFLE9BWlQ7QUFhRCxlQUFXLEVBQUUsUUFiWjtBQWNELFlBQVEsRUFBRUksUUFkVCxDQWNrQjtBQWRsQjtBQWVELFFBQUksRUFBRUMsSUFmTDtBQWdCRCxpQkFBYSxFQUFFZjtBQWhCZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7O0FBcUJBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVluQixNQUFaO0FBQ0Esc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFFRWMsSUFBSSxJQUFJQyxVQUZWLGVBSUE7QUFBSyxXQUFLLEVBQUU7QUFBQ0ssaUJBQVMsRUFBQyxNQUFYO0FBQWtCQyxrQkFBVSxFQUFDO0FBQTdCLE9BQVo7QUFBQSxnQkFFSXJCLE1BQU0sR0FDTkEsTUFBTSxDQUFDc0IsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFjO0FBQ3JCLDRCQUFRLHFFQUFDLFlBQUQ7QUFFSixtQkFBUyxFQUFFLElBRlA7QUFHSixnQkFBTSxFQUFFRCxJQUFJLENBQUNFLEVBSFQsQ0FHWTtBQUhaO0FBSUosaUJBQU8sRUFBRUYsSUFBSSxDQUFDRyxPQUpWO0FBS0osb0JBQVUsRUFBRSxvQkFBQ1YsV0FBRDtBQUFBLG1CQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxXQUxSO0FBTUosY0FBSSxFQUFFLEVBTkYsQ0FNSztBQU5MO0FBT0osaUJBQU8sRUFBRSxFQVBMO0FBUUosaUJBQU8sRUFBRSxFQVJMO0FBU0osbUJBQVMsRUFBRSxFQVRQO0FBVU87QUFDWCxzQkFBWSxFQUFFLFlBWFY7QUFZSixlQUFLLEVBQUVPLElBQUksQ0FBQ2QsS0FaUixDQVljO0FBWmQ7QUFhSixvQkFBVSxFQUFFLFlBYlI7QUFjSixrQkFBUSxFQUFFLE9BZE47QUFlSixxQkFBVyxFQUFFLFFBZlQ7QUFnQkosa0JBQVEsRUFBRWMsSUFBSSxDQUFDVixRQWhCWCxDQWdCb0I7QUFoQnBCO0FBaUJKLGNBQUksRUFBRVUsSUFBSSxDQUFDSSxTQWpCUDtBQWtCSixnQkFBTSxFQUFFSixJQUFJLENBQUNLLFdBbEJUO0FBbUJKLHVCQUFhLEVBQUU3QjtBQW5CWCxXQVVDeUIsS0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBcUJILE9BdEJELENBRE0sR0F3Qkw7QUExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIO0FBR0Q7QUFDQTtBQUNBOztLQWxFd0IxQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS4zZDdhNWEwODY3NTU5NTIwOWYxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIlxyXG4vL2RlbmVtZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWxvd2NvbW1lbnQoe0Fuc3dlcmhhbmRsZXIsbXlsaXN0LHBvc3RJZCxjb250ZW50LHNob3d3aW5kb3csbGlrZSxyZXR3ZWV0LGNvbW1lbnQscmVhZGxhdGVyLHByb2ZpbGVpbWFnZSx0aXRsZSx0aXRsZWltYWdlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLHN1YnRpdGxlLGRhdGV9KXtcclxuXHJcbiAgICBjb25zdCBDb250ZW50ZGl2ID1cclxuICAgICg8Q29udGVudGNhcmQgXHJcbiAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICBwb3N0SWQ9e3Bvc3RJZH0vL25vIG5lZWRcclxuICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgY29tbWVudD17W119XHJcbiAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgIHRpdGxlPXt0aXRsZX0vL25vIG5lZWRcclxuICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICBzdWJ0aXRsZT17c3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICBkYXRlPXtkYXRlfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgID5cclxuICAgIDwvQ29udGVudGNhcmQ+KVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhteWxpc3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZGF0ZSAmJiBDb250ZW50ZGl2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCIsbWFyZ2luTGVmdDpcIjYwcHhcIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG15bGlzdCA/XHJcbiAgICAgICAgICAgIG15bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCZWxvd2NvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXFpZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlsaXN0PXtpdGVtLnN1YmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcmhhbmRsZXI9e0Fuc3dlcmhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+PC9CZWxvd2NvbW1lbnQ+KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbi8qXHJcblxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=