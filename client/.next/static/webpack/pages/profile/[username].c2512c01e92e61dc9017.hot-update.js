webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./components/pages/Profile/contentmap.js":
/*!************************************************!*\
  !*** ./components/pages/Profile/contentmap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Cards_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/shared/Cards/Contentcard */ "./components/shared/Cards/Contentcard.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\contentmap.js";




function Contentmap(_ref) {
  var _this = this;

  var contentlist = _ref.contentlist,
      relationfunc = _ref.relationfunc,
      norecord = _ref.norecord;
  console.log(contentlist);
  var textfornorecord = "";

  if (norecord == "Reshow") {
    textfornorecord = "Kullanıcının işaretlediği gönderi yok...";
  } else if (norecord == "Post") {
    textfornorecord = "Kullanıcının hiçbir gönderisi yok...";
  } else if (norecord == "Like") {
    textfornorecord = "Kullanıcının beğendiği gönderi yok...";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: contentlist.length ? contentlist.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Cards_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        postId: item.personal ? item.id : item.Content.id,
        like: item.personal ? item.Like : item.Content.Like //bu bir obje array
        ,
        retweet: item.personal ? item.Retweet : item.Content.Retweet,
        readlater: item.personal ? item.Readlater : item.Content.Readlater,
        comment: item.personal ? item.allcomments : item.Content.allcomments,
        profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
        title: item.personal ? item.title : item.Content.title,
        titleimage: "/yaprak.jpg",
        userfirstname: item.personal ? item.personal.firstname : item.Content.personal.firstname,
        usersurname: item.personal ? item.personal.lastname : item.Content.personal.lastname //bir obje props
        ,
        createrelationforsmh: relationfunc,
        date: item.personal ? item.createdAt : item.Content.createdAt
      }, uniqid__WEBPACK_IMPORTED_MODULE_3___default()(), false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 34
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textTransform: "capitalize",
        textAlign: "center",
        marginTop: "20px"
      },
      children: textfornorecord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_c = Contentmap;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Contentmap)); //sadece list değiştiginde tekrar render ediliyor

var _c, _c2;

$RefreshReg$(_c, "Contentmap");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL2NvbnRlbnRtYXAuanMiXSwibmFtZXMiOlsiQ29udGVudG1hcCIsImNvbnRlbnRsaXN0IiwicmVsYXRpb25mdW5jIiwibm9yZWNvcmQiLCJjb25zb2xlIiwibG9nIiwidGV4dGZvcm5vcmVjb3JkIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGVyc29uYWwiLCJpZCIsIkNvbnRlbnQiLCJMaWtlIiwiUmV0d2VldCIsIlJlYWRsYXRlciIsImFsbGNvbW1lbnRzIiwidGl0bGUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImNyZWF0ZWRBdCIsInVuaXFpZCIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFwQ0MsV0FBb0MsUUFBcENBLFdBQW9DO0FBQUEsTUFBeEJDLFlBQXdCLFFBQXhCQSxZQUF3QjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUNyREMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFdBQVo7QUFDQSxNQUFJSyxlQUFlLEdBQUcsRUFBdEI7O0FBQ0EsTUFBR0gsUUFBUSxJQUFJLFFBQWYsRUFBd0I7QUFDbkJHLG1CQUFlLEdBQUcsMENBQWxCO0FBQ0osR0FGRCxNQUdLLElBQUdILFFBQVEsSUFBSSxNQUFmLEVBQXNCO0FBQ3RCRyxtQkFBZSxHQUFHLHNDQUFsQjtBQUNKLEdBRkksTUFHQSxJQUFHSCxRQUFRLElBQUksTUFBZixFQUFzQjtBQUN0QkcsbUJBQWUsR0FBRyx1Q0FBbEI7QUFDSjs7QUFFRCxzQkFFSTtBQUFBLGNBRVFMLFdBQVcsQ0FBQ00sTUFBWixHQUNBTixXQUFXLENBQUNPLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFFdEIsMEJBQVMscUVBQUMsNEVBQUQ7QUFFRCxjQUFNLEVBQUVELElBQUksQ0FBQ0UsUUFBTCxHQUFlRixJQUFJLENBQUNHLEVBQXBCLEdBQXlCSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUQsRUFGN0M7QUFHRCxZQUFJLEVBQUVILElBQUksQ0FBQ0UsUUFBTCxHQUFnQkYsSUFBSSxDQUFDSyxJQUFyQixHQUE0QkwsSUFBSSxDQUFDSSxPQUFMLENBQWFDLElBSDlDLENBR21EO0FBSG5EO0FBSUQsZUFBTyxFQUFFTCxJQUFJLENBQUNFLFFBQUwsR0FBZ0JGLElBQUksQ0FBQ00sT0FBckIsR0FBK0JOLElBQUksQ0FBQ0ksT0FBTCxDQUFhRSxPQUpwRDtBQUtELGlCQUFTLEVBQUVOLElBQUksQ0FBQ0UsUUFBTCxHQUFnQkYsSUFBSSxDQUFDTyxTQUFyQixHQUFpQ1AsSUFBSSxDQUFDSSxPQUFMLENBQWFHLFNBTHhEO0FBTUQsZUFBTyxFQUFFUCxJQUFJLENBQUNFLFFBQUwsR0FBZ0JGLElBQUksQ0FBQ1EsV0FBckIsR0FBbUNSLElBQUksQ0FBQ0ksT0FBTCxDQUFhSSxXQU54RDtBQU9ELG9CQUFZLEVBQUUsd0hBUGI7QUFRRCxhQUFLLEVBQUVSLElBQUksQ0FBQ0UsUUFBTCxHQUFnQkYsSUFBSSxDQUFDUyxLQUFyQixHQUE2QlQsSUFBSSxDQUFDSSxPQUFMLENBQWFLLEtBUmhEO0FBU0Qsa0JBQVUsRUFBRSxhQVRYO0FBVUQscUJBQWEsRUFBRVQsSUFBSSxDQUFDRSxRQUFMLEdBQWdCRixJQUFJLENBQUNFLFFBQUwsQ0FBY1EsU0FBOUIsR0FBMENWLElBQUksQ0FBQ0ksT0FBTCxDQUFhRixRQUFiLENBQXNCUSxTQVY5RTtBQVdELG1CQUFXLEVBQUVWLElBQUksQ0FBQ0UsUUFBTCxHQUFnQkYsSUFBSSxDQUFDRSxRQUFMLENBQWNTLFFBQTlCLEdBQXlDWCxJQUFJLENBQUNJLE9BQUwsQ0FBYUYsUUFBYixDQUFzQlMsUUFYM0UsQ0FXb0Y7QUFYcEY7QUFZRCw0QkFBb0IsRUFBRWxCLFlBWnJCO0FBYUQsWUFBSSxFQUFFTyxJQUFJLENBQUNFLFFBQUwsR0FBZ0JGLElBQUksQ0FBQ1ksU0FBckIsR0FBaUNaLElBQUksQ0FBQ0ksT0FBTCxDQUFhUTtBQWJuRCxTQUNJQyw2Q0FBTSxFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQWVILEtBakJMLENBREEsZ0JBc0JBO0FBQUcsV0FBSyxFQUFFO0FBQUNDLHFCQUFhLEVBQUMsWUFBZjtBQUE0QkMsaUJBQVMsRUFBQyxRQUF0QztBQUErQ0MsaUJBQVMsRUFBQztBQUF6RCxPQUFWO0FBQUEsZ0JBQTZFbkI7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUE4Qkg7O0tBM0NRTixVO0FBNkNNLGtGQUFBMEIsNENBQUssQ0FBQ0MsSUFBTixDQUFXM0IsVUFBWCxDQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uYzI1MTJjMDFlOTJlNjFkYzkwMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NoYXJlZC9DYXJkcy9Db250ZW50Y2FyZFwiXHJcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiXHJcblxyXG5mdW5jdGlvbiBDb250ZW50bWFwKHtjb250ZW50bGlzdCxyZWxhdGlvbmZ1bmMsbm9yZWNvcmR9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZW50bGlzdClcclxuICAgIHZhciB0ZXh0Zm9ybm9yZWNvcmQgPSBcIlwiXHJcbiAgICBpZihub3JlY29yZCA9PSBcIlJlc2hvd1wiKXtcclxuICAgICAgICAgdGV4dGZvcm5vcmVjb3JkID0gXCJLdWxsYW7EsWPEsW7EsW4gacWfYXJldGxlZGnEn2kgZ8O2bmRlcmkgeW9rLi4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYobm9yZWNvcmQgPT0gXCJQb3N0XCIpe1xyXG4gICAgICAgICB0ZXh0Zm9ybm9yZWNvcmQgPSBcIkt1bGxhbsSxY8SxbsSxbiBoacOnYmlyIGfDtm5kZXJpc2kgeW9rLi4uXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYobm9yZWNvcmQgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICB0ZXh0Zm9ybm9yZWNvcmQgPSBcIkt1bGxhbsSxY8SxbsSxbiBiZcSfZW5kacSfaSBnw7ZuZGVyaSB5b2suLi5cIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRsaXN0Lmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgY29udGVudGxpc3QubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXFpZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5wZXJzb25hbD8gaXRlbS5pZCA6IGl0ZW0uQ29udGVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5MaWtlIDogaXRlbS5Db250ZW50Lkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLlJldHdlZXQgOiBpdGVtLkNvbnRlbnQuUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLlJlYWRsYXRlciA6IGl0ZW0uQ29udGVudC5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5wZXJzb25hbCA/IGl0ZW0uYWxsY29tbWVudHMgOiBpdGVtLkNvbnRlbnQuYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0udGl0bGUgOiBpdGVtLkNvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCIveWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJmaXJzdG5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IGl0ZW0uQ29udGVudC5wZXJzb25hbC5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmxhc3RuYW1lfS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17cmVsYXRpb25mdW5jfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLmNyZWF0ZWRBdCA6IGl0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHRleHRBbGlnbjpcImNlbnRlclwiLG1hcmdpblRvcDpcIjIwcHhcIn19Pnt0ZXh0Zm9ybm9yZWNvcmR9PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudG1hcCk7XHJcbi8vc2FkZWNlIGxpc3QgZGXEn2nFn3RpZ2luZGUgdGVrcmFyIHJlbmRlciBlZGlsaXlvclxyXG4iXSwic291cmNlUm9vdCI6IiJ9