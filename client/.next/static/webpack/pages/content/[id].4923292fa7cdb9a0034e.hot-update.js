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
          mylist: []
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJCZWxvd2NvbW1lbnQiLCJteWxpc3QiLCJpc2NvbW1lbnQiLCJwb3N0SWQiLCJjb250ZW50Iiwic2hvd3dpbmRvdyIsImxpa2UiLCJyZXR3ZWV0IiwiY29tbWVudCIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsInRpdGxlIiwidGl0bGVpbWFnZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJzdWJ0aXRsZSIsImRhdGUiLCJDb250ZW50ZGl2Iiwic3RhdGVvZmxpc3QiLCJzZXRsaXN0IiwibWFyZ2luVG9wIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJNZXNzYWdlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDZSxTQUFTQSxZQUFULE9BQW1LO0FBQUE7O0FBQUEsTUFBNUlDLE1BQTRJLFFBQTVJQSxNQUE0STtBQUFBLE1BQXJJQyxTQUFxSSxRQUFySUEsU0FBcUk7QUFBQSxNQUEzSEMsTUFBMkgsUUFBM0hBLE1BQTJIO0FBQUEsTUFBcEhDLE9BQW9ILFFBQXBIQSxPQUFvSDtBQUFBLE1BQTVHQyxVQUE0RyxRQUE1R0EsVUFBNEc7QUFBQSxNQUFqR0MsSUFBaUcsUUFBakdBLElBQWlHO0FBQUEsTUFBNUZDLE9BQTRGLFFBQTVGQSxPQUE0RjtBQUFBLE1BQXBGQyxPQUFvRixRQUFwRkEsT0FBb0Y7QUFBQSxNQUE1RUMsU0FBNEUsUUFBNUVBLFNBQTRFO0FBQUEsTUFBbEVDLFlBQWtFLFFBQWxFQSxZQUFrRTtBQUFBLE1BQXJEQyxLQUFxRCxRQUFyREEsS0FBcUQ7QUFBQSxNQUEvQ0MsVUFBK0MsUUFBL0NBLFVBQStDO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBRTlLLE1BQU1DLFVBQVUsZ0JBQ2YscUVBQUMsMkRBQUQ7QUFDRCxhQUFTLEVBQUUsSUFEVjtBQUVELFVBQU0sRUFBRWQsTUFGUCxDQUVjO0FBRmQ7QUFHRCxXQUFPLEVBQUVDLE9BSFI7QUFJRCxjQUFVLEVBQUUsb0JBQUNjLFdBQUQ7QUFBQSxhQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxLQUpYO0FBS0QsUUFBSSxFQUFFLEVBTEwsQ0FLUTtBQUxSO0FBTUQsV0FBTyxFQUFFLEVBTlI7QUFPRCxXQUFPLEVBQUUsRUFQUjtBQVFELGFBQVMsRUFBRSxFQVJWO0FBU0QsZ0JBQVksRUFBRSxZQVRiO0FBVUQsU0FBSyxFQUFFUCxLQVZOLENBVVk7QUFWWjtBQVdELGNBQVUsRUFBRSxZQVhYO0FBWUQsWUFBUSxFQUFFLE9BWlQ7QUFhRCxlQUFXLEVBQUUsUUFiWjtBQWNELFlBQVEsRUFBRUksUUFkVCxDQWNrQjtBQWRsQjtBQWVELFFBQUksRUFBRUM7QUFmTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7O0FBb0JBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBRUVBLElBQUksSUFBSUMsVUFGVixlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNHLGlCQUFTLEVBQUM7QUFBWCxPQUFaO0FBQUEsZ0JBQ0tuQixNQUFNLENBQUNvQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDdEIsNEJBQVEscUVBQUMsWUFBRDtBQUNKLG1CQUFTLEVBQUUsSUFEUDtBQUVKLGdCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFGVCxDQUVZO0FBRlo7QUFHSixpQkFBTyxFQUFFRixJQUFJLENBQUNHLE9BSFY7QUFJSixvQkFBVSxFQUFFLG9CQUFDUCxXQUFEO0FBQUEsbUJBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLFdBSlI7QUFLSixjQUFJLEVBQUUsRUFMRixDQUtLO0FBTEw7QUFNSixpQkFBTyxFQUFFLEVBTkw7QUFPSixpQkFBTyxFQUFFLEVBUEw7QUFRSixtQkFBUyxFQUFFLEVBUlA7QUFTTztBQUNYLHNCQUFZLEVBQUUsWUFWVjtBQVdKLGVBQUssRUFBRUksSUFBSSxDQUFDWCxLQVhSLENBV2M7QUFYZDtBQVlKLG9CQUFVLEVBQUUsWUFaUjtBQWFKLGtCQUFRLEVBQUUsT0FiTjtBQWNKLHFCQUFXLEVBQUUsUUFkVDtBQWVKLGtCQUFRLEVBQUVXLElBQUksQ0FBQ1AsUUFmWCxDQWVvQjtBQWZwQjtBQWdCSixjQUFJLEVBQUVPLElBQUksQ0FBQ0ksU0FoQlA7QUFpQkosZ0JBQU0sRUFBRTtBQWpCSixXQVNDSCxLQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUFtQkgsT0FwQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQkg7QUFHRDtBQUNBO0FBQ0E7O0tBMUR3QnZCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjQ5MjMyOTJmYTdjZGI5YTAwMzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbi8vZGVuZW1lXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJlbG93Y29tbWVudCh7bXlsaXN0LGlzY29tbWVudCxwb3N0SWQsY29udGVudCxzaG93d2luZG93LGxpa2UscmV0d2VldCxjb21tZW50LHJlYWRsYXRlcixwcm9maWxlaW1hZ2UsdGl0bGUsdGl0bGVpbWFnZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxzdWJ0aXRsZSxkYXRlfSl7XHJcblxyXG4gICAgY29uc3QgQ29udGVudGRpdiA9XHJcbiAgICAoPENvbnRlbnRjYXJkIFxyXG4gICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgcG9zdElkPXtwb3N0SWR9Ly9ubyBuZWVkXHJcbiAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICByZXR3ZWV0PXtbXX1cclxuICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgcmVhZGxhdGVyPXtbXX1cclxuICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICB0aXRsZT17dGl0bGV9Ly9ubyBuZWVkXHJcbiAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifVxyXG4gICAgc3VidGl0bGU9e3N1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgZGF0ZT17ZGF0ZX1cclxuICAgID5cclxuICAgIDwvQ29udGVudGNhcmQ+KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICB7bXlsaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEJlbG93Y29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcIi9ibGFjay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlsaXN0PXtbXX1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuLypcclxuXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==