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
})(["flex:2;display:flex;"]);
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
          lineNumber: 160,
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
            lineNumber: 161,
            columnNumber: 68
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
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
            lineNumber: 162,
            columnNumber: 101
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
            lineNumber: 168,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
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
            lineNumber: 173,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              background: "yellow"
            },
            children: "How do I scroll to the top of the page using JavaScript? The scrollbar instantly..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
              lineNumber: 179,
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
              lineNumber: 179,
              columnNumber: 168
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
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
              lineNumber: 182,
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
              lineNumber: 182,
              columnNumber: 161
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
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
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
              lineNumber: 188,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCLEsGNvbmhvbGRlciIsIlByb2ZpbGVkaXYiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsIkluZm9jYXJkIiwiTGFiZWxvZnRoZWluZm8iLCJDb250ZW50Y2FyZCIsInByb2ZpbGVpbWFnZSIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb24iLCJ1c2VTdGF0ZSIsIm51bWJlciIsImxlbmd0aCIsInJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZUVmZmVjdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiY3VycmVudGVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kIiwiZmxleCIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQscUdBQWxCO0FBT0Es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Q0QsU0FBVCxDQUFtQnBCLFFBQXJDO0FBQStDLG1CQUFLLEVBQUUsT0FBdEQ7QUFBK0QscUJBQU8sRUFBRTtBQUFBLHVCQUFJNkIsU0FBUyxDQUFDLFdBQUQsQ0FBYjtBQUFBLGVBQXhFO0FBQXFHLHVCQUFTLEVBQUM7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBdUNIOztHQXhGdUJ6QixXOztPQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiNjk3MmI0NGRiZTMyYWVjMDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxOHB4fVxyXG4zMCUge2ZvbnQtc2l6ZToxOXB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG43MCUge2ZvbnQtc2l6ZToyMnB4fVxyXG4xMDAlIHtmb250LXNpemU6MThweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG53aWR0aDoxMDAlO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxucGFkZGluZy1sZWZ0OjVweDtcclxuXHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcblxyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1sZWZ0OjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbmBcclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5gXHJcblxyXG5jb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe3Byb2ZpbGV9KT0+IHByb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7aXNtYXJrZWR9KT0+aXNtYXJrZWQgPyBMaWtlYW5pbWF0b24gOiBcIlwifTtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuMDhzO1xyXG5gXHJcblxyXG5jb25zdCBJbmZvY2FyZD1zdHlsZWQuZGl2YFxyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDowcHg7XHJcbnJpZ2h0OjBweDtcclxucGFkZGluZzoxNXB4O1xyXG53aWR0aDo0MzBweDtcclxuY29sb3I6d2hpdGU7XHJcbmhlaWdodDoxNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG56LWluZGV4OjIwMDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuY29uc3QgTGFiZWxvZnRoZWluZm89c3R5bGVkLmRpdmBcclxuZm9udC1zaXplOjEzcHg7XHJcbndpZHRoOjIwMHB4O1xyXG5wYWRkaW5nOjVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Y2FyZCh7cHJvZmlsZWltYWdlLHRpdGxlaW1hZ2UsdGl0bGUsc3VidGl0bGUsdXNlcm5hbWUsdXNlcnN1cm5hbWUsZGF0ZSxjb21tZW50LHJldHdlZXQsbGlrZSxzaG93d2luZG93LGNyZWF0ZXJlbGF0aW9ufSl7XHJcbiAgIFxyXG4gICAgY29uc3RbZWxlbWVudHMsc2V0ZWxlbWVudHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBsaWtlOntcclxuICAgICAgICAgICAgbnVtYmVyOmxpa2UubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldHdlZXQ6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkbGF0ZXI6e1xyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICAgICAgbnVtYmVyOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgLypcclxuICAgICAgIGxpa2UuZm9yZWFjaCgodXNlcik9PntcclxuICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgc2V0bGlrZSh0cnVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgICovXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBDb3VudHBsdXM9KGVsZW1lbnR0eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PWZhbHNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXItMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE91dHNpZGVkaXYgb25Nb3VzZUxlYXZlPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gb25Nb3VzZU92ZXI9eygpPT5zZXRhY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtwcm9maWxlaW1hZ2V9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJibGFja1wifX0+PHNwYW4+e2RhdGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI0E3MDkwOVwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7YmFja2dyb3VuZDpcInllbGxvd1wifX0+SG93IGRvIEkgc2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgdXNpbmcgSmF2YVNjcmlwdD8gVGhlIHNjcm9sbGJhciBpbnN0YW50bHkuLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLnJldHdlZXQuaXNtYXJrZWR9IGNvbG9yPXtcImdyZWVuXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmV0d2VldFwiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz48c3BhbiAgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KHJldHdlZXQpfSBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIn19PntlbGVtZW50cy5yZXR3ZWV0Lm51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMubGlrZS5pc21hcmtlZH0gY29sb3I9e1wiI0M3MjEyMVwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcImxpa2VcIil9IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvSWNvbnM+PHNwYW4gIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGxpa2UpfSBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIn19PntlbGVtZW50cy5saWtlLm51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zIGNsYXNzTmFtZT1cImZhcyBmYS1jb21tZW50LWFsdCBmYS1zbVwiPjwvSWNvbnM+PHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMucmVhZGxhdGVyLmlzbWFya2VkfSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9