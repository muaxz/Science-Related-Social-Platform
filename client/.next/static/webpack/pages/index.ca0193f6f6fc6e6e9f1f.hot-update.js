webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/Scroll.js":
/*!*************************!*\
  !*** ./hooks/Scroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useScroll() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      bottom = _useState[0],
      setbottom = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //
    document.addEventListener("scroll", function (e) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setbottom(true);
      } else {
        setbottom(false);
      }
    });
    return function () {
      return document.removeEventListener("scroll", function () {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      });
    };
  }, []);
  return {
    bottom: bottom
  };
}

_s(useScroll, "M63v9ytBRp0Qg3WpY54h6zjtVr8=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvU2Nyb2xsLmpzIl0sIm5hbWVzIjpbInVzZVNjcm9sbCIsInVzZVN0YXRlIiwiYm90dG9tIiwic2V0Ym90dG9tIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsWSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsU0FBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUVOQyxzREFBUSxDQUFDLEtBQUQsQ0FGRjtBQUFBLE1BRXhCQyxNQUZ3QjtBQUFBLE1BRWpCQyxTQUZpQjs7QUFJL0JDLHlEQUFTLENBQUMsWUFBSTtBQUVWO0FBQ0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFLO0FBRXBDLFVBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkQsTUFBTSxDQUFDRSxPQUE3QixJQUF5Q0wsUUFBUSxDQUFDTSxJQUFULENBQWNDLFlBQTFELEVBQXdFO0FBQ3BFVCxpQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUVILE9BSEQsTUFJSTtBQUNBQSxpQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUVIO0FBQ0osS0FWRDtBQVlELFdBQU87QUFBQSxhQUFLRSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFFBQTdCLEVBQXNDLFlBQUk7QUFDeENMLGNBQU0sQ0FBQ00sUUFBUCxDQUFnQjtBQUFDQyxhQUFHLEVBQUMsQ0FBTDtBQUFPQyxrQkFBUSxFQUFDO0FBQWhCLFNBQWhCO0FBQ0QsT0FGRCxDQUFMO0FBQUEsS0FBUDtBQUlGLEdBbkJRLEVBbUJQLEVBbkJPLENBQVQ7QUFxQkEsU0FBTztBQUNMZCxVQUFNLEVBQUNBO0FBREYsR0FBUDtBQUdIOztHQTVCdUJGLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2EwMTkzZjZmNmZjNmU2ZTlmMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNjcm9sbCgpe1xyXG5cclxuICAgIGNvbnN0IFtib3R0b20sc2V0Ym90dG9tXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLChlKT0+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkpID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7ICBcclxuICAgICAgICAgICAgICAgIHNldGJvdHRvbSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgIHJldHVybiAoKT0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDowLGJlaGF2aW9yOlwiYXV0b1wifSlcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBib3R0b206Ym90dG9tXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==