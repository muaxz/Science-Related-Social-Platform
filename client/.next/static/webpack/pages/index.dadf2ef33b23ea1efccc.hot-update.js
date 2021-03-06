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
})(["padding-left:5px;background-color:red;"]);
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
            style: {
              background: "yellow"
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsIkluZm9jYXJkIiwiTGFiZWxvZnRoZWluZm8iLCJDb250ZW50Y2FyZCIsInByb2ZpbGVpbWFnZSIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb24iLCJ1c2VTdGF0ZSIsIm51bWJlciIsImxlbmd0aCIsInJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZUVmZmVjdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiY3VycmVudGVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kIiwiZmxleCIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQscUdBQWxCO0FBT0Es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Q0QsU0FBVCxDQUFtQnBCLFFBQXJDO0FBQStDLG1CQUFLLEVBQUUsT0FBdEQ7QUFBK0QscUJBQU8sRUFBRTtBQUFBLHVCQUFJNkIsU0FBUyxDQUFDLFdBQUQsQ0FBYjtBQUFBLGVBQXhFO0FBQXFHLHVCQUFTLEVBQUM7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBdUNIOztHQXhGdUJ6QixXOztPQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhZGYyZWYzM2IyM2VhMWVmY2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxOHB4fVxyXG4zMCUge2ZvbnQtc2l6ZToxOXB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG43MCUge2ZvbnQtc2l6ZToyMnB4fVxyXG4xMDAlIHtmb250LXNpemU6MThweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG53aWR0aDoxMDAlO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxucGFkZGluZy1sZWZ0OjVweDtcclxuXHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLWxlZnQ6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuYFxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjQwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IFBvcmZpbGVpbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7cHJvZmlsZX0pPT4gcHJvZmlsZX0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBJY29ucz1zdHlsZWQuaWBcclxuZm9udC1zaXplOjE2cHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5jb2xvcjokeyh7aXNtYXJrZWQsY29sb3J9KT0+aXNtYXJrZWQgPyBjb2xvciA6IFwiZ3JleVwiIH07XHJcbmFuaW1hdGlvbi1uYW1lOiR7KHtpc21hcmtlZH0pPT5pc21hcmtlZCA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5hbmltYXRpb24tZHVyYXRpb246MC4wOHM7XHJcbmBcclxuXHJcbmNvbnN0IEluZm9jYXJkPXN0eWxlZC5kaXZgXHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjBweDtcclxucmlnaHQ6MHB4O1xyXG5wYWRkaW5nOjE1cHg7XHJcbndpZHRoOjQzMHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbnotaW5kZXg6MjAwO1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbG9mdGhlaW5mbz1zdHlsZWQuZGl2YFxyXG5mb250LXNpemU6MTNweDtcclxud2lkdGg6MjAwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRjYXJkKHtwcm9maWxlaW1hZ2UsdGl0bGVpbWFnZSx0aXRsZSxzdWJ0aXRsZSx1c2VybmFtZSx1c2Vyc3VybmFtZSxkYXRlLGNvbW1lbnQscmV0d2VldCxsaWtlLHNob3d3aW5kb3csY3JlYXRlcmVsYXRpb259KXtcclxuICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIGxpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV0d2VldDp7XHJcbiAgICAgICAgICAgIG51bWJlcjpyZXR3ZWV0Lmxlbmd0aCxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBudW1iZXI6MCxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0W2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAvKlxyXG4gICAgICAgbGlrZS5mb3JlYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICBzZXRsaWtlKHRydWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgKi9cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiBvbk1vdXNlTGVhdmU9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBvbk1vdXNlT3Zlcj17KCk9PnNldGFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e3Byb2ZpbGVpbWFnZX0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGZvbnRTaXplOlwiMTVweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIixmb250U2l6ZTpcIjEzcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjb2xvcjpcImJsYWNrXCJ9fT48c3Bhbj57ZGF0ZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tiYWNrZ3JvdW5kOlwieWVsbG93XCJ9fT5Ib3cgZG8gSSBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB1c2luZyBKYXZhU2NyaXB0PyBUaGUgc2Nyb2xsYmFyIGluc3RhbnRseS4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMucmV0d2VldC5pc21hcmtlZH0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXR3ZWV0XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPjxzcGFuICAgb25DbGljaz17KCk9PnNob3d3aW5kb3cocmV0d2VldCl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLnJldHdlZXQubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5saWtlLmlzbWFya2VkfSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwibGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz48c3BhbiAgb25DbGljaz17KCk9PnNob3d3aW5kb3cobGlrZSl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLmxpa2UubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5yZWFkbGF0ZXIuaXNtYXJrZWR9IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=