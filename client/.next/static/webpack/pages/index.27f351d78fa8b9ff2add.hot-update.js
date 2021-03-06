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
})(["flex:2;display:flex;flex-direction:column;background-color:white;justify-content:space-between;"]);
_c4 = Contentholder;
var Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})(["padding-left:20px;"]);
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
          lineNumber: 162,
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
            lineNumber: 163,
            columnNumber: 68
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
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
            lineNumber: 164,
            columnNumber: 101
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
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
            lineNumber: 170,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
            lineNumber: 175,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "How do I scroll to the top of the page using JavaScript? The scrollbar instantly..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
              lineNumber: 181,
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
              lineNumber: 181,
              columnNumber: 168
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
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
              lineNumber: 184,
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
              lineNumber: 184,
              columnNumber: 161
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
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
              lineNumber: 190,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsIkluZm9jYXJkIiwiTGFiZWxvZnRoZWluZm8iLCJDb250ZW50Y2FyZCIsInByb2ZpbGVpbWFnZSIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb24iLCJ1c2VTdGF0ZSIsIm51bWJlciIsImxlbmd0aCIsInJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZUVmZmVjdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiY3VycmVudGVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFDQyxtRUFBRCxxR0FBbEI7QUFPQSxJQUFNQyxVQUFVLEdB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LEVBQUU7QUFBQSx1QkFBSTZCLFNBQVMsQ0FBQyxXQUFELENBQWI7QUFBQSxlQUF4RTtBQUFxRyx1QkFBUyxFQUFDO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXVDSDs7R0F4RnVCekIsVzs7T0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2YzNTFkNzhmYThiOWZmMmFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MThweH1cclxuMzAlIHtmb250LXNpemU6MTlweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNzAlIHtmb250LXNpemU6MjJweH1cclxuMTAwJSB7Zm9udC1zaXplOjE4cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxud2lkdGg6MTAwJTtcclxuXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxuXHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcblxyXG5gXHJcbmNvbnN0IEltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MTtcclxuYFxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MjtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcblxyXG5gXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtwcm9maWxlfSk9PiBwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEljb25zPXN0eWxlZC5pYFxyXG5mb250LXNpemU6MTZweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2lzbWFya2VkfSk9PmlzbWFya2VkID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjowLjA4cztcclxuYFxyXG5cclxuY29uc3QgSW5mb2NhcmQ9c3R5bGVkLmRpdmBcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MHB4O1xyXG5yaWdodDowcHg7XHJcbnBhZGRpbmc6MTVweDtcclxud2lkdGg6NDMwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuei1pbmRleDoyMDA7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsb2Z0aGVpbmZvPXN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZToxM3B4O1xyXG53aWR0aDoyMDBweDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudGNhcmQoe3Byb2ZpbGVpbWFnZSx0aXRsZWltYWdlLHRpdGxlLHN1YnRpdGxlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbn0pe1xyXG4gICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgbGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXR3ZWV0OntcclxuICAgICAgICAgICAgbnVtYmVyOnJldHdlZXQubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3RbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgIC8qXHJcbiAgICAgICBsaWtlLmZvcmVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgIHNldGxpa2UodHJ1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAqL1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIik7XHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxPdXRzaWRlZGl2IG9uTW91c2VMZWF2ZT17KCk9PnNldGFjdGl2ZShmYWxzZSl9IG9uTW91c2VPdmVyPXsoKT0+c2V0YWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19Pnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiYmxhY2tcIn19PjxzcGFuPntkYXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3cgZG8gSSBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB1c2luZyBKYXZhU2NyaXB0PyBUaGUgc2Nyb2xsYmFyIGluc3RhbnRseS4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMucmV0d2VldC5pc21hcmtlZH0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXR3ZWV0XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPjxzcGFuICAgb25DbGljaz17KCk9PnNob3d3aW5kb3cocmV0d2VldCl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLnJldHdlZXQubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5saWtlLmlzbWFya2VkfSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwibGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz48c3BhbiAgb25DbGljaz17KCk9PnNob3d3aW5kb3cobGlrZSl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLmxpa2UubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5yZWFkbGF0ZXIuaXNtYXJrZWR9IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=