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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyJdLCJuYW1lcyI6WyJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwicGFyZW50SWQiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsImNvbW1lbnQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZSIsInRpdGxlaW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwic3VidGl0bGUiLCJkYXRlIiwiQ29udGVudGRpdiIsInN0YXRlb2ZsaXN0Iiwic2V0bGlzdCIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIk1lc3NhZ2UiLCJVc2VyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJpbWFnZXVybCIsImltZ2F0b2tlbiIsImNyZWF0ZWRBdCIsInRha2VpdCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBR0EsSUFBSUEsYUFBYSxHQUFHLENBQXBCOztBQUNBLFNBQVNDLFlBQVQsT0FBZ0w7QUFBQTs7QUFBQSxNQUF6SkMsUUFBeUosUUFBekpBLFFBQXlKO0FBQUEsTUFBaEpDLGFBQWdKLFFBQWhKQSxhQUFnSjtBQUFBLE1BQWxJQyxNQUFrSSxRQUFsSUEsTUFBa0k7QUFBQSxNQUEzSEMsTUFBMkgsUUFBM0hBLE1BQTJIO0FBQUEsTUFBcEhDLE9BQW9ILFFBQXBIQSxPQUFvSDtBQUFBLE1BQTVHQyxVQUE0RyxRQUE1R0EsVUFBNEc7QUFBQSxNQUFqR0MsSUFBaUcsUUFBakdBLElBQWlHO0FBQUEsTUFBNUZDLE9BQTRGLFFBQTVGQSxPQUE0RjtBQUFBLE1BQXBGQyxPQUFvRixRQUFwRkEsT0FBb0Y7QUFBQSxNQUE1RUMsU0FBNEUsUUFBNUVBLFNBQTRFO0FBQUEsTUFBbEVDLFlBQWtFLFFBQWxFQSxZQUFrRTtBQUFBLE1BQXJEQyxLQUFxRCxRQUFyREEsS0FBcUQ7QUFBQSxNQUEvQ0MsVUFBK0MsUUFBL0NBLFVBQStDO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBRTVLLE1BQU1DLFVBQVUsZ0JBQ2YscUVBQUMsMkRBQUQ7QUFDRCxhQUFTLEVBQUUsSUFEVjtBQUVELFVBQU0sRUFBRWQsTUFGUCxDQUVjO0FBRmQ7QUFHRCxXQUFPLEVBQUVDLE9BSFI7QUFJRCxjQUFVLEVBQUUsb0JBQUNjLFdBQUQ7QUFBQSxhQUFlQyxPQUFPLENBQUNELFdBQUQsQ0FBdEI7QUFBQSxLQUpYO0FBS0QsUUFBSSxFQUFFLEVBTEwsQ0FLUTtBQUxSO0FBTUQsV0FBTyxFQUFFLEVBTlI7QUFPRCxXQUFPLEVBQUUsRUFQUjtBQVFELGFBQVMsRUFBRSxFQVJWO0FBU0QsZ0JBQVksRUFBRSxZQVRiO0FBVUQsU0FBSyxFQUFFUCxLQVZOLENBVVk7QUFWWjtBQVdELGNBQVUsRUFBRSxZQVhYO0FBWUQsWUFBUSxFQUFFLE9BWlQ7QUFhRCxlQUFXLEVBQUUsUUFiWjtBQWNELFlBQVEsRUFBRUksUUFkVCxDQWNrQjtBQWRsQjtBQWVELFFBQUksRUFBRUMsSUFmTDtBQWdCRCxpQkFBYSxFQUFFZixhQWhCZDtBQWlCRCxlQUFXLEVBQUVDLE1BQU0sQ0FBQ2tCO0FBakJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7O0FBd0JBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBRUVKLElBQUksSUFBSUMsVUFGVixlQUlBO0FBQUssV0FBSyxFQUFFO0FBQUNJLGlCQUFTLEVBQUMsTUFBWDtBQUFrQkMsa0JBQVUsRUFBQztBQUE3QixPQUFaO0FBQUEsZ0JBRUlwQixNQUFNLENBQUNrQixNQUFQLEdBQWdCLENBQWhCLEdBRUFsQixNQUFNLENBQUNxQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDckIsNEJBQVEscUVBQUMsWUFBRDtBQUVKLG1CQUFTLEVBQUUsSUFGUDtBQUdKLGdCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFIVCxDQUdZO0FBSFo7QUFJSixpQkFBTyxFQUFFRixJQUFJLENBQUNHLE9BSlY7QUFLSixvQkFBVSxFQUFFLG9CQUFDVCxXQUFEO0FBQUEsbUJBQWVDLE9BQU8sQ0FBQ0QsV0FBRCxDQUF0QjtBQUFBLFdBTFI7QUFNSixjQUFJLEVBQUUsRUFORixDQU1LO0FBTkw7QUFPSixpQkFBTyxFQUFFLEVBUEw7QUFRSixpQkFBTyxFQUFFLEVBUkw7QUFTSixtQkFBUyxFQUFFLEVBVFA7QUFVTztBQUNYLHNCQUFZLEVBQUUsWUFYVjtBQVlKLGVBQUssRUFBRU0sSUFBSSxDQUFDYixLQVpSLENBWWM7QUFaZDtBQWFKLG9CQUFVLEVBQUUsWUFiUjtBQWNKLGtCQUFRLEVBQUVhLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxTQWRoQjtBQWVKLHFCQUFXLEVBQUVMLElBQUksQ0FBQ0ksSUFBTCxDQUFVRSxRQWZuQjtBQWdCSixnQkFBTSxFQUFFTixJQUFJLENBQUNJLElBQUwsQ0FBVUYsRUFoQmQ7QUFpQkosa0JBQVEsRUFBRUYsSUFBSSxDQUFDSSxJQUFMLENBQVVHLFFBakJoQjtBQWtCSixvQkFBVSxFQUFFUCxJQUFJLENBQUNJLElBQUwsQ0FBVUksU0FsQmxCO0FBbUJKLGtCQUFRLEVBQUVSLElBQUksQ0FBQ1QsUUFuQlgsQ0FtQm9CO0FBbkJwQjtBQW9CSixjQUFJLEVBQUVTLElBQUksQ0FBQ1MsU0FwQlA7QUFxQkosZ0JBQU0sRUFBRVQsSUFBSSxDQUFDVSxNQXJCVDtBQXNCSix1QkFBYSxFQUFFakMsYUF0Qlg7QUF1Qkosa0JBQVEsRUFBRXVCLElBQUksQ0FBQ3hCO0FBdkJYLFdBVUN5QixLQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUF5QkgsT0ExQkQsQ0FGQSxHQTZCQztBQS9CTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7O0tBcEVRMUIsWTtBQXNFTSxrRkFBQW9DLDRDQUFLLENBQUNDLElBQU4sQ0FBV3JDLFlBQVgsQ0FBZjtBQUdBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uZWRjNjU2M2IwMWYxN2M0ZjI2MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCJcclxuLy9kZW5lbWVcclxuXHJcblxyXG52YXIgbGVuZ3RoY291bnRlciA9IDBcclxuZnVuY3Rpb24gQmVsb3djb21tZW50KHtwYXJlbnRJZCxBbnN3ZXJoYW5kbGVyLG15bGlzdCxwb3N0SWQsY29udGVudCxzaG93d2luZG93LGxpa2UscmV0d2VldCxjb21tZW50LHJlYWRsYXRlcixwcm9maWxlaW1hZ2UsdGl0bGUsdGl0bGVpbWFnZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxzdWJ0aXRsZSxkYXRlfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IENvbnRlbnRkaXYgPVxyXG4gICAgKDxDb250ZW50Y2FyZCBcclxuICAgIGlzY29tbWVudD17dHJ1ZX1cclxuICAgIHBvc3RJZD17cG9zdElkfS8vbm8gbmVlZFxyXG4gICAgY29udGVudD17Y29udGVudH1cclxuICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgcmV0d2VldD17W119XHJcbiAgICBjb21tZW50PXtbXX1cclxuICAgIHJlYWRsYXRlcj17W119XHJcbiAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgdGl0bGU9e3RpdGxlfS8vbm8gbmVlZFxyXG4gICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICB1c2VybmFtZT17XCJEdWhhblwifVxyXG4gICAgdXNlcnN1cm5hbWU9e1wiw5Z6dMO8cmtcIn1cclxuICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgIGRhdGU9e2RhdGV9XHJcbiAgICBBbnN3ZXJoYW5kbGVyPXtBbnN3ZXJoYW5kbGVyfVxyXG4gICAgQ2hpbGRsZW5ndGg9e215bGlzdC5sZW5ndGh9XHJcbiAgICA+XHJcbiAgICA8L0NvbnRlbnRjYXJkPilcclxuICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGRhdGUgJiYgQ29udGVudGRpdlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMjBweFwiLG1hcmdpbkxlZnQ6XCI2MHB4XCJ9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBteWxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICBteWxpc3QubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QmVsb3djb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt1bmlxaWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0uVXNlci5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0uVXNlci5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0uVXNlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXVybD17aXRlbS5Vc2VyLmltYWdldXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdldG9rZW49e2l0ZW0uVXNlci5pbWdhdG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9Ly9ubyBuZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlsaXN0PXtpdGVtLnRha2VpdH1cclxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJoYW5kbGVyPXtBbnN3ZXJoYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkPXtpdGVtLnBhcmVudElkfVxyXG4gICAgICAgICAgICAgICAgPjwvQmVsb3djb21tZW50PilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOm51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQmVsb3djb21tZW50KVxyXG5cclxuXHJcbi8qXHJcblxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=