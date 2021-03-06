webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contentcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{font-size:18px}30%{font-size:19px}50%{font-size:21px}70%{font-size:22px}100%{font-size:18px}"]);
var Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;margin-bottom:15px;width:100%;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);"]);
_c = Outsidediv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-1"
})(["padding-left:5px;"]);
_c2 = Imagediv;
var Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-2"
})(["flex:1;"]);
_c3 = Imageholder;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-3"
})(["flex:2;display:flex;padding-left:20px;flex-direction:column;background-color:white;justify-content:space-between;"]);
_c4 = Contentholder;
var Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})([""]);
_c5 = Contentdiv;
var Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-5"
})(["display:flex;padding-left:10px;"]);
_c6 = Toolbar;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-6"
})(["width:100%;height:150px;object-fit:cover;"]);
_c7 = Img;
var İconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-7"
})(["margin-right:10px;display:flex;align-items:center;"]);
var Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-8"
})(["width:100%;height:40px;transition:all 0.3s;"]);
_c8 = Profilediv;
var Porfileimage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Porfileimage",
  componentId: "r68yrd-9"
})(["width:30px;height:30px;cursor:pointer;background-color:white;border-radius:50%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;"], function (_ref) {
  var profile = _ref.profile;
  return profile;
});
_c9 = Porfileimage;
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-10"
})(["font-size:16px;cursor:pointer;color:", ";animation-name:", ";animation-duration:0.08s;"], function (_ref2) {
  var ismarked = _ref2.ismarked,
      color = _ref2.color;
  return ismarked ? color : "grey";
}, function (_ref3) {
  var ismarked = _ref3.ismarked;
  return ismarked ? Likeanimaton : "";
});
_c10 = Icons;
var Infocard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Infocard",
  componentId: "r68yrd-11"
})(["position:absolute;top:0px;right:0px;padding:15px;width:430px;color:white;height:150px;background-color:grey;z-index:200;transition:all 0.3s;"]);
var Labeloftheinfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Labeloftheinfo",
  componentId: "r68yrd-12"
})(["font-size:13px;width:200px;padding:5px;text-align:center;border-radius:10px;"]); //içerik sayısı,takipçi sayısı,

function Contentcard(_ref4) {
  _s();

  var profileimage = _ref4.profileimage,
      titleimage = _ref4.titleimage,
      title = _ref4.title,
      subtitle = _ref4.subtitle,
      username = _ref4.username,
      usersurname = _ref4.usersurname,
      date = _ref4.date,
      comment = _ref4.comment,
      retweet = _ref4.retweet,
      like = _ref4.like,
      showwindow = _ref4.showwindow,
      createrelation = _ref4.createrelation;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    like: {
      number: like.length,
      ismarked: false
    },
    retweet: {
      number: retweet.length,
      ismarked: false
    },
    readlater: {
      ismarked: false,
      number: 0
    }
  }),
      elements = _useState[0],
      setelements = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      active = _useState2[0],
      setactive = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_4__["createusercontext"]),
      userdata = _useContext.userdata;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /*
    like.foreach((user)=>{
      if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
         setlike(true);
      }
    })
    */
  }, []);

  var Countplus = function Countplus(elementtype) {
    var currentelements = _objectSpread({}, elements);

    console.log("burada");

    if (currentelements[elementtype].ismarked == false) {
      console.log("burada");
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].number = currentelements[elementtype].number + 1;
    } else {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;
    }

    setelements(currentelements);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    onMouseLeave: function onMouseLeave() {
      return setactive(false);
    },
    onMouseOver: function onMouseOver() {
      return setactive(true);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "5px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Porfileimage, {
          profile: profileimage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px",
            fontSize: "15px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "black"
            },
            children: username + " " + usersurname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 68
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto",
            fontSize: "13px",
            marginRight: "10px",
            color: "black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 101
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "How do I scroll to the top of the page using JavaScript? The scrollbar instantly..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.retweet.ismarked,
              color: "green",
              onClick: function onClick() {
                return Countplus("retweet");
              },
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: function onClick() {
                return showwindow(retweet);
              },
              style: {
                marginLeft: "5px"
              },
              children: elements.retweet.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 168
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.like.ismarked,
              color: "#C72121",
              onClick: function onClick() {
                return Countplus("like");
              },
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: function onClick() {
                return showwindow(like);
              },
              style: {
                marginLeft: "5px"
              },
              children: elements.like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 161
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 4,
              display: "flex",
              justifyContent: "flex-end",
              color: "grey"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.readlater.ismarked,
              color: "black",
              onClick: function onClick() {
                return Countplus("readlater");
              },
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "h3E7+TZMDB4Tvj7xCEFmdBcW0nA=");

_c11 = Contentcard;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Outsidediv");
$RefreshReg$(_c2, "Imagediv");
$RefreshReg$(_c3, "Imageholder");
$RefreshReg$(_c4, "Contentholder");
$RefreshReg$(_c5, "Contentdiv");
$RefreshReg$(_c6, "Toolbar");
$RefreshReg$(_c7, "Img");
$RefreshReg$(_c8, "Profilediv");
$RefreshReg$(_c9, "Porfileimage");
$RefreshReg$(_c10, "Icons");
$RefreshReg$(_c11, "Contentcard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsIkluZm9jYXJkIiwiTGFiZWxvZnRoZWluZm8iLCJDb250ZW50Y2FyZCIsInByb2ZpbGVpbWFnZSIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb24iLCJ1c2VTdGF0ZSIsIm51bWJlciIsImxlbmd0aCIsInJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZUVmZmVjdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiY3VycmVudGVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFDQyxtRUFBRCxxR0FBbEI7QUFPQSxJQUFNQyxVQUFVLEdB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RUFBRTtBQUFBLHVCQUFJNkIsU0FBUyxDQUFDLFdBQUQsQ0FBYjtBQUFBLGVBQXhFO0FBQXFHLHVCQUFTLEVBQUM7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBdUNIOztHQXhGdUJ6QixXOztPQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3MjMwYjE4ODE3ZDM0MmNjNDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxOHB4fVxyXG4zMCUge2ZvbnQtc2l6ZToxOXB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG43MCUge2ZvbnQtc2l6ZToyMnB4fVxyXG4xMDAlIHtmb250LXNpemU6MThweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG53aWR0aDoxMDAlO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxucGFkZGluZy1sZWZ0OjVweDtcclxuXHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxuXHJcblxyXG5gXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtwcm9maWxlfSk9PiBwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEljb25zPXN0eWxlZC5pYFxyXG5mb250LXNpemU6MTZweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2lzbWFya2VkfSk9PmlzbWFya2VkID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjowLjA4cztcclxuYFxyXG5cclxuY29uc3QgSW5mb2NhcmQ9c3R5bGVkLmRpdmBcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MHB4O1xyXG5yaWdodDowcHg7XHJcbnBhZGRpbmc6MTVweDtcclxud2lkdGg6NDMwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuei1pbmRleDoyMDA7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsb2Z0aGVpbmZvPXN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZToxM3B4O1xyXG53aWR0aDoyMDBweDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudGNhcmQoe3Byb2ZpbGVpbWFnZSx0aXRsZWltYWdlLHRpdGxlLHN1YnRpdGxlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbn0pe1xyXG4gICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgbGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXR3ZWV0OntcclxuICAgICAgICAgICAgbnVtYmVyOnJldHdlZXQubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3RbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgIC8qXHJcbiAgICAgICBsaWtlLmZvcmVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgIHNldGxpa2UodHJ1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAqL1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIik7XHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxPdXRzaWRlZGl2IG9uTW91c2VMZWF2ZT17KCk9PnNldGFjdGl2ZShmYWxzZSl9IG9uTW91c2VPdmVyPXsoKT0+c2V0YWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19Pnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiYmxhY2tcIn19PjxzcGFuPntkYXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3cgZG8gSSBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB1c2luZyBKYXZhU2NyaXB0PyBUaGUgc2Nyb2xsYmFyIGluc3RhbnRseS4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMucmV0d2VldC5pc21hcmtlZH0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXR3ZWV0XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPjxzcGFuICAgb25DbGljaz17KCk9PnNob3d3aW5kb3cocmV0d2VldCl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLnJldHdlZXQubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5saWtlLmlzbWFya2VkfSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwibGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz48c3BhbiAgb25DbGljaz17KCk9PnNob3d3aW5kb3cobGlrZSl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLmxpa2UubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5yZWFkbGF0ZXIuaXNtYXJrZWR9IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=