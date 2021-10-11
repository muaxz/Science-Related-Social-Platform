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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date && Contentdiv, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "20px"
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
          lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwiTWVzc2FnZSIsImNyZWF0ZWRBdCIsInN1YmNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDZSxTQUFTQSxZQUFULE9BQXVLO0FBQUE7O0FBQUEsTUFBaEpDLGFBQWdKLFFBQWhKQSxhQUFnSjtBQUFBLE1BQWxJQyxNQUFrSSxRQUFsSUEsTUFBa0k7QUFBQSxNQUEzSEMsTUFBMkgsUUFBM0hBLE1BQTJIO0FBQUEsTUFBcEhDLE9BQW9ILFFBQXBIQSxPQUFvSDtBQUFBLE1BQTVHQyxVQUE0RyxRQUE1R0EsVUFBNEc7QUFBQSxNQUFqR0MsSUFBaUcsUUFBakdBLElBQWlHO0FBQUEsTUFBNUZDLE9BQTRGLFFBQTVGQSxPQUE0RjtBQUFBLE1BQXBGQyxPQUFvRixRQUFwRkEsT0FBb0Y7QUFBQSxNQUE1RUMsU0FBNEUsUUFBNUVBLFNBQTRFO0FBQUEsTUFBbEVDLFlBQWtFLFFBQWxFQSxZQUFrRTtBQUFBLE1BQXJEQyxLQUFxRCxRQUFyREEsS0FBcUQ7QUFBQSxNQUEvQ0MsVUFBK0MsUUFBL0NBLFVBQStDO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBRWxMLE1BQU1DLFVBQVUsZ0JBQ2YscUVBQUMsMkRBQUQ7QUFDRCxhQUFTLEVBQUUsSUFEVjtBQUVELFVBQU0sRUFBRWQsTUFGUCxDQUVjO0FBRmQ7QUFHRCxXQUFPLEVBQUVDLE9BSFI7QUFJRCxjQUFVLEVBQUUsb0JBQUNjLFdBQUQ7QUFBQSxhQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxLQUpYO0FBS0QsUUFBSSxFQUFFLEVBTEwsQ0FLUTtBQUxSO0FBTUQsV0FBTyxFQUFFLEVBTlI7QUFPRCxXQUFPLEVBQUUsRUFQUjtBQVFELGFBQVMsRUFBRSxFQVJWO0FBU0QsZ0JBQVksRUFBRSxZQVRiO0FBVUQsU0FBSyxFQUFFUCxLQVZOLENBVVk7QUFWWjtBQVdELGNBQVUsRUFBRSxZQVhYO0FBWUQsWUFBUSxFQUFFLE9BWlQ7QUFhRCxlQUFXLEVBQUUsUUFiWjtBQWNELFlBQVEsRUFBRUksUUFkVCxDQWNrQjtBQWRsQjtBQWVELFFBQUksRUFBRUMsSUFmTDtBQWdCRCxpQkFBYSxFQUFFZjtBQWhCZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7O0FBcUJBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBRUVlLElBQUksSUFBSUMsVUFGVixlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNHLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsZ0JBRUlsQixNQUFNLEdBQ05BLE1BQU0sQ0FBQ21CLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU1DLEtBQU4sRUFBYztBQUNyQiw0QkFBUSxxRUFBQyxZQUFEO0FBQ0osbUJBQVMsRUFBRSxJQURQO0FBRUosZ0JBQU0sRUFBRUQsSUFBSSxDQUFDRSxFQUZULENBRVk7QUFGWjtBQUdKLGlCQUFPLEVBQUVGLElBQUksQ0FBQ0csT0FIVjtBQUlKLG9CQUFVLEVBQUUsb0JBQUNQLFdBQUQ7QUFBQSxtQkFBZUMsT0FBTyxDQUFDRCxXQUFELENBQXRCO0FBQUEsV0FKUjtBQUtKLGNBQUksRUFBRSxFQUxGLENBS0s7QUFMTDtBQU1KLGlCQUFPLEVBQUUsRUFOTDtBQU9KLGlCQUFPLEVBQUUsRUFQTDtBQVFKLG1CQUFTLEVBQUUsRUFSUDtBQVNPO0FBQ1gsc0JBQVksRUFBRSxZQVZWO0FBV0osZUFBSyxFQUFFSSxJQUFJLENBQUNYLEtBWFIsQ0FXYztBQVhkO0FBWUosb0JBQVUsRUFBRSxZQVpSO0FBYUosa0JBQVEsRUFBRSxPQWJOO0FBY0oscUJBQVcsRUFBRSxRQWRUO0FBZUosa0JBQVEsRUFBRVcsSUFBSSxDQUFDUCxRQWZYLENBZW9CO0FBZnBCO0FBZ0JKLGNBQUksRUFBRU8sSUFBSSxDQUFDSSxTQWhCUDtBQWlCSixnQkFBTSxFQUFFSixJQUFJLENBQUNLLFdBakJUO0FBa0JKLHVCQUFhLEVBQUUxQjtBQWxCWCxXQVNDc0IsS0FURDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBb0JILE9BckJELENBRE0sR0F1Qkw7QUF6Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0NIO0FBR0Q7QUFDQTtBQUNBOztLQWhFd0J2QixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS5jOWVhOWUzM2QzMzdkMTczMzJmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG4vL2RlbmVtZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZWxvd2NvbW1lbnQoe0Fuc3dlcmhhbmRsZXIsbXlsaXN0LHBvc3RJZCxjb250ZW50LHNob3d3aW5kb3csbGlrZSxyZXR3ZWV0LGNvbW1lbnQscmVhZGxhdGVyLHByb2ZpbGVpbWFnZSx0aXRsZSx0aXRsZWltYWdlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLHN1YnRpdGxlLGRhdGV9KXtcclxuXHJcbiAgICBjb25zdCBDb250ZW50ZGl2ID1cclxuICAgICg8Q29udGVudGNhcmQgXHJcbiAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICBwb3N0SWQ9e3Bvc3RJZH0vL25vIG5lZWRcclxuICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgY29tbWVudD17W119XHJcbiAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgIHRpdGxlPXt0aXRsZX0vL25vIG5lZWRcclxuICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICBzdWJ0aXRsZT17c3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICBkYXRlPXtkYXRlfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgID5cclxuICAgIDwvQ29udGVudGNhcmQ+KVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG15bGlzdCA/XHJcbiAgICAgICAgICAgIG15bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCZWxvd2NvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS5zdWJjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJoYW5kbGVyPXtBbnN3ZXJoYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgPjwvQmVsb3djb21tZW50PilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOm51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG4vKlxyXG5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9