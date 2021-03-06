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
})(["padding-left:5px;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsIkluZm9jYXJkIiwiTGFiZWxvZnRoZWluZm8iLCJDb250ZW50Y2FyZCIsInByb2ZpbGVpbWFnZSIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb24iLCJ1c2VTdGF0ZSIsIm51bWJlciIsImxlbmd0aCIsInJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZUVmZmVjdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiY3VycmVudGVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFDQyxtRUFBRCxxR0FBbEI7QUFPQSxJQUFNQyxVQUFVLEdB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LEVBQUU7QUFBQSx1QkFBSTZCLFNBQVMsQ0FBQyxXQUFELENBQWI7QUFBQSxlQUF4RTtBQUFxRyx1QkFBUyxFQUFDO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXVDSDs7R0F4RnVCekIsVzs7T0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MGFmNjU0YzFmNzdiM2E3NzQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MThweH1cclxuMzAlIHtmb250LXNpemU6MTlweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNzAlIHtmb250LXNpemU6MjJweH1cclxuMTAwJSB7Zm9udC1zaXplOjE4cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxud2lkdGg6MTAwJTtcclxuXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxuXHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcblxyXG5gXHJcbmNvbnN0IEltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MTtcclxuYFxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MjtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1sZWZ0OjVweDtcclxuXHJcbmBcclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5gXHJcblxyXG5jb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe3Byb2ZpbGV9KT0+IHByb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7aXNtYXJrZWR9KT0+aXNtYXJrZWQgPyBMaWtlYW5pbWF0b24gOiBcIlwifTtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuMDhzO1xyXG5gXHJcblxyXG5jb25zdCBJbmZvY2FyZD1zdHlsZWQuZGl2YFxyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDowcHg7XHJcbnJpZ2h0OjBweDtcclxucGFkZGluZzoxNXB4O1xyXG53aWR0aDo0MzBweDtcclxuY29sb3I6d2hpdGU7XHJcbmhlaWdodDoxNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG56LWluZGV4OjIwMDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuY29uc3QgTGFiZWxvZnRoZWluZm89c3R5bGVkLmRpdmBcclxuZm9udC1zaXplOjEzcHg7XHJcbndpZHRoOjIwMHB4O1xyXG5wYWRkaW5nOjVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Y2FyZCh7cHJvZmlsZWltYWdlLHRpdGxlaW1hZ2UsdGl0bGUsc3VidGl0bGUsdXNlcm5hbWUsdXNlcnN1cm5hbWUsZGF0ZSxjb21tZW50LHJldHdlZXQsbGlrZSxzaG93d2luZG93LGNyZWF0ZXJlbGF0aW9ufSl7XHJcbiAgIFxyXG4gICAgY29uc3RbZWxlbWVudHMsc2V0ZWxlbWVudHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBsaWtlOntcclxuICAgICAgICAgICAgbnVtYmVyOmxpa2UubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldHdlZXQ6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkbGF0ZXI6e1xyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICAgICAgbnVtYmVyOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgLypcclxuICAgICAgIGxpa2UuZm9yZWFjaCgodXNlcik9PntcclxuICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgc2V0bGlrZSh0cnVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgICovXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBDb3VudHBsdXM9KGVsZW1lbnR0eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PWZhbHNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXItMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE91dHNpZGVkaXYgb25Nb3VzZUxlYXZlPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gb25Nb3VzZU92ZXI9eygpPT5zZXRhY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtwcm9maWxlaW1hZ2V9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJibGFja1wifX0+PHNwYW4+e2RhdGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI0E3MDkwOVwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvdyBkbyBJIHNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBwYWdlIHVzaW5nIEphdmFTY3JpcHQ/IFRoZSBzY3JvbGxiYXIgaW5zdGFudGx5Li4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5yZXR3ZWV0LmlzbWFya2VkfSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJldHdlZXRcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvSWNvbnM+PHNwYW4gICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhyZXR3ZWV0KX0gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCJ9fT57ZWxlbWVudHMucmV0d2VldC5udW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLmxpa2UuaXNtYXJrZWR9IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJsaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPjxzcGFuICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhsaWtlKX0gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCJ9fT57ZWxlbWVudHMubGlrZS5udW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPjxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlYWRsYXRlci5pc21hcmtlZH0gY29sb3I9e1wiYmxhY2tcIn0gb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlYWRsYXRlclwiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==