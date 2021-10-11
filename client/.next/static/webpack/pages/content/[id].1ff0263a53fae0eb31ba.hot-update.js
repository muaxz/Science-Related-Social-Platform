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
          mylist: item.subcomments,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJjcmVhdGVkQXQiLCJzdWJjb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ2UsU0FBU0EsWUFBVCxPQUF1SztBQUFBOztBQUFBLE1BQWhKQyxhQUFnSixRQUFoSkEsYUFBZ0o7QUFBQSxNQUFsSUMsTUFBa0ksUUFBbElBLE1BQWtJO0FBQUEsTUFBM0hDLE1BQTJILFFBQTNIQSxNQUEySDtBQUFBLE1BQXBIQyxPQUFvSCxRQUFwSEEsT0FBb0g7QUFBQSxNQUE1R0MsVUFBNEcsUUFBNUdBLFVBQTRHO0FBQUEsTUFBakdDLElBQWlHLFFBQWpHQSxJQUFpRztBQUFBLE1BQTVGQyxPQUE0RixRQUE1RkEsT0FBNEY7QUFBQSxNQUFwRkMsT0FBb0YsUUFBcEZBLE9BQW9GO0FBQUEsTUFBNUVDLFNBQTRFLFFBQTVFQSxTQUE0RTtBQUFBLE1BQWxFQyxZQUFrRSxRQUFsRUEsWUFBa0U7QUFBQSxNQUFyREMsS0FBcUQsUUFBckRBLEtBQXFEO0FBQUEsTUFBL0NDLFVBQStDLFFBQS9DQSxVQUErQztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNOztBQUVsTCxNQUFNQyxVQUFVLGdCQUNmLHFFQUFDLDJEQUFEO0FBQ0QsYUFBUyxFQUFFLElBRFY7QUFFRCxVQUFNLEVBQUVkLE1BRlAsQ0FFYztBQUZkO0FBR0QsV0FBTyxFQUFFQyxPQUhSO0FBSUQsY0FBVSxFQUFFLG9CQUFDYyxXQUFEO0FBQUEsYUFBZUMsT0FBTyxDQUFDRCxXQUFELENBQXRCO0FBQUEsS0FKWDtBQUtELFFBQUksRUFBRSxFQUxMLENBS1E7QUFMUjtBQU1ELFdBQU8sRUFBRSxFQU5SO0FBT0QsV0FBTyxFQUFFLEVBUFI7QUFRRCxhQUFTLEVBQUUsRUFSVjtBQVNELGdCQUFZLEVBQUUsWUFUYjtBQVVELFNBQUssRUFBRVAsS0FWTixDQVVZO0FBVlo7QUFXRCxjQUFVLEVBQUUsWUFYWDtBQVlELFlBQVEsRUFBRSxPQVpUO0FBYUQsZUFBVyxFQUFFLFFBYlo7QUFjRCxZQUFRLEVBQUVJLFFBZFQsQ0Fja0I7QUFkbEI7QUFlRCxRQUFJLEVBQUVDLElBZkw7QUFnQkQsaUJBQWEsRUFBRWY7QUFoQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREOztBQW9CQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsTUFBWjtBQUNBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBRUVjLElBQUksSUFBSUMsVUFGVixlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNLLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsZ0JBRUlwQixNQUFNLENBQUNxQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDckIsNEJBQVEscUVBQUMsWUFBRDtBQUNKLG1CQUFTLEVBQUUsSUFEUDtBQUVKLGdCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFGVCxDQUVZO0FBRlo7QUFHSixpQkFBTyxFQUFFRixJQUFJLENBQUNHLE9BSFY7QUFJSixvQkFBVSxFQUFFLG9CQUFDVCxXQUFEO0FBQUEsbUJBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLFdBSlI7QUFLSixjQUFJLEVBQUUsRUFMRixDQUtLO0FBTEw7QUFNSixpQkFBTyxFQUFFLEVBTkw7QUFPSixpQkFBTyxFQUFFLEVBUEw7QUFRSixtQkFBUyxFQUFFLEVBUlA7QUFTTztBQUNYLHNCQUFZLEVBQUUsWUFWVjtBQVdKLGVBQUssRUFBRU0sSUFBSSxDQUFDYixLQVhSLENBV2M7QUFYZDtBQVlKLG9CQUFVLEVBQUUsWUFaUjtBQWFKLGtCQUFRLEVBQUUsT0FiTjtBQWNKLHFCQUFXLEVBQUUsUUFkVDtBQWVKLGtCQUFRLEVBQUVhLElBQUksQ0FBQ1QsUUFmWCxDQWVvQjtBQWZwQjtBQWdCSixjQUFJLEVBQUVTLElBQUksQ0FBQ0ksU0FoQlA7QUFpQkosZ0JBQU0sRUFBRUosSUFBSSxDQUFDSyxXQWpCVDtBQWtCSix1QkFBYSxFQUFFNUI7QUFsQlgsV0FTQ3dCLEtBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQW9CSCxPQXJCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDtBQUdEO0FBQ0E7QUFDQTs7S0E5RHdCekIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uMWZmMDI2M2E1M2ZhZTBlYjMxYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuLy9kZW5lbWVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVsb3djb21tZW50KHtBbnN3ZXJoYW5kbGVyLG15bGlzdCxwb3N0SWQsY29udGVudCxzaG93d2luZG93LGxpa2UscmV0d2VldCxjb21tZW50LHJlYWRsYXRlcixwcm9maWxlaW1hZ2UsdGl0bGUsdGl0bGVpbWFnZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxzdWJ0aXRsZSxkYXRlfSl7XHJcblxyXG4gICAgY29uc3QgQ29udGVudGRpdiA9XHJcbiAgICAoPENvbnRlbnRjYXJkIFxyXG4gICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgcG9zdElkPXtwb3N0SWR9Ly9ubyBuZWVkXHJcbiAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICByZXR3ZWV0PXtbXX1cclxuICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgcmVhZGxhdGVyPXtbXX1cclxuICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICB0aXRsZT17dGl0bGV9Ly9ubyBuZWVkXHJcbiAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifVxyXG4gICAgc3VidGl0bGU9e3N1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgZGF0ZT17ZGF0ZX1cclxuICAgIEFuc3dlcmhhbmRsZXI9e0Fuc3dlcmhhbmRsZXJ9XHJcbiAgICA+XHJcbiAgICA8L0NvbnRlbnRjYXJkPilcclxuICAgIGNvbnNvbGUubG9nKG15bGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG15bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCZWxvd2NvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e1wiRHVoYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS5zdWJjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJoYW5kbGVyPXtBbnN3ZXJoYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgPjwvQmVsb3djb21tZW50PilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG4vKlxyXG5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9