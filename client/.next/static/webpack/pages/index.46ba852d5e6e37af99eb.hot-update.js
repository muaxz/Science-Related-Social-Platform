webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pages/Main/Leaderboard */ "./components/pages/Main/Leaderboard.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
var Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;"]);
_c = Flexdiv;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__TitleDiv",
  componentId: "sc-14bmh8h-1"
})(["width:90%;padding:10px;height:300px;background-color:red;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c2 = TitleDiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-2"
})([""]);
_c3 = ContentDiv;
var ShortDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__ShortDiv",
  componentId: "sc-14bmh8h-3"
})(["position:relative;height:50px;width:500px;margin:auto;margin-bottom:10px;"]);
_c4 = ShortDiv;
var InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:500px;display:flex;align-items:center;overflow-x:hidden;overflow-y:hidden;"]);
_c5 = InnershortDiv;
var Selectionboxes = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__Selectionboxes",
  componentId: "sc-14bmh8h-5"
})(["width:100px;font-weight:600;padding:5px;text-align:center;margin-left:10px;border-radius:50px;transition-duration:0.3s;cursor:pointer;background-color:", ";color:", ";flex-shrink:0;"], function (_ref) {
  var selected = _ref.selected;
  return selected ? "#ef233c" : "#ccdbfd";
}, function (_ref2) {
  var selected = _ref2.selected;
  return selected ? "white" : "black";
});
_c6 = Selectionboxes;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;align-items:center;color:#d90429;border-radius:50%;position:absolute;left:", ";top:50%;font-size:20px;transform:translateY(-50%);right:", ""], function (_ref3) {
  var leftvalue = _ref3.leftvalue;
  return leftvalue;
}, function (_ref4) {
  var rightvalue = _ref4.rightvalue;
  return rightvalue;
}); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

_c7 = Iconholder;
function Home(_ref5) {
  _s();

  var _this = this;

  var mydata = _ref5.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      bottom = _useScroll.bottom;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mydata)),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      errormsg = _useState3[0],
      seterror = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Felsefe: {
      selected: false
    },
    Tarih: {
      selected: false
    },
    Uzay: {
      selected: false
    },
    Fizik: {
      selected: false
    },
    Biyoloji: {
      selected: false
    },
    Çevre: {
      selected: false
    },
    Edebiyat: {
      selected: false
    },
    Konu: {
      selected: false
    },
    Different: {
      selected: false
    },
    sDifferent: {
      selected: false
    }
  }),
      selectionlist = _useState4[0],
      setselectionlist = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      list = _useState5[0],
      _setlist = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      stoprequesting = _useState6[0],
      setstopreq = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinner = _useState7[0],
      setspinner = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //TODO MOVE THİS TO LAYOUT FİLE
    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        seterrmsg: seterror,
        setstopreq: setstopreq
      });
    }
  }, [order]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (bottom) setorder(mydata.length + 10);
  }, [bottom]);

  var createrelation = function createrelation(postId, attribute, typeofrelation, userid) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  };

  var Selectionhander = function Selectionhander(keyname) {
    var Mutated = _objectSpread({}, selectionlist);

    for (var key in Mutated) {
      Mutated[key].selected = false;
    }

    Mutated[keyname].selected = true;
    setselectionlist(Mutated);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "".concat(list.length > 0 ? "100vh" : "100%"),
      overflow: "hidden"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        paddingLeft: "100px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {
            style: {
              transform: "rotateY(180deg)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        },
        children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 35
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function setlist() {
          return _setlist([]);
        },
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            paddingTop: "10px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
                leftvalue: "-15px",
                rightvalue: "",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowBackIos"], {
                  style: {
                    color: "#d90429",
                    fontSize: "20px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 34
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
                leftvalue: "",
                rightvalue: "-20px",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowForwardIos"], {
                  style: {
                    color: "#d90429",
                    fontSize: "20px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 34
              }, this), Object.keys(selectionlist).map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionboxes, {
                  selected: selectionlist[item].selected,
                  onClick: function onClick() {
                    return Selectionhander(item);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 51
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 47
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this), contentdata.length && contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__["default"], {
              postId: item.id,
              content: item.content,
              createrelationforsmh: createrelation,
              showwindow: function showwindow(stateoflist) {
                return _setlist(stateoflist);
              },
              like: item.Like //bu bir obje array
              ,
              retweet: item.Retweet,
              comment: item.allcomments,
              readlater: item.Readlater,
              //key numarası
              profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
              title: item.title,
              titleimage: "yaprak.jpg",
              username: item.personal !== null ? item.personal.firstname : "notyet",
              usersurname: item.personal !== null ? item.personal.lastname : "notyet" //bir obje props
              ,
              userid: item.personal !== null ? item.personal.id : "notyet",
              subtitle: item.subtitle,
              date: item.createdAt
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 9
  }, this);
}
/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/

_s(Home, "aljenrAi6g8j4rdq3gCp+yGh2ZU=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"]];
});

_c8 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "TitleDiv");
$RefreshReg$(_c3, "ContentDiv");
$RefreshReg$(_c4, "ShortDiv");
$RefreshReg$(_c5, "InnershortDiv");
$RefreshReg$(_c6, "Selectionboxes");
$RefreshReg$(_c7, "Iconholder");
$RefreshReg$(_c8, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2IiwiU2VsZWN0aW9uYm94ZXMiLCJzZWxlY3RlZCIsIkljb25ob2xkZXIiLCJsZWZ0dmFsdWUiLCJyaWdodHZhbHVlIiwiSG9tZSIsIm15ZGF0YSIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlU3RhdGUiLCJjb250ZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRvcmRlciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJGZWxzZWZlIiwiVGFyaWgiLCJVemF5IiwiRml6aWsiLCJCaXlvbG9qaSIsIsOHZXZyZSIsIkVkZWJpeWF0IiwiS29udSIsIkRpZmZlcmVudCIsInNEaWZmZXJlbnQiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsImxpc3QiLCJzZXRsaXN0Iiwic3RvcHJlcXVlc3RpbmciLCJzZXRzdG9wcmVxIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRlcnJtc2ciLCJsZW5ndGgiLCJjcmVhdGVyZWxhdGlvbiIsInBvc3RJZCIsImF0dHJpYnV0ZSIsInR5cGVvZnJlbGF0aW9uIiwidXNlcmlkIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJVc2VySWQiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJTZWxlY3Rpb25oYW5kZXIiLCJrZXluYW1lIiwiTXV0YXRlZCIsImtleSIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXhXaWR0aCIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0oseUJBQXFCO0FBQ25CQyxXQUFLLEVBQUU7QUFEWTtBQURqQjtBQURzQixDQUFELENBQS9CO0FBUUEsSUFBTUMsT0FBTyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0tBQWQ7TUFBTUMsUTtBQVdOLElBQU1DLFVBQVUsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFoQjtNQUFNRSxVO0FBSU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlGQUFkO01BQU1HLFE7QUFRTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0dBQW5CO01BQU1JLGE7QUFTTixJQUFNQyxjQUFjLEdBQUNOLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsOExBU0Q7QUFBQSxNQUFFTSxRQUFGLFFBQUVB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O1VBRUxFLHNEOzs7TUFGS0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NmJhODUyZDVlNmUzN2FmOTllYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcSxDcmVhdGVyZWxhdGlvbnJlcSxOb3RpZmljYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsSW5wdXRMYWJlbCxTZWxlY3QsTWVudUl0ZW0sQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQgU2hvd2ZvbGxvd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vU2hvd2ZvbGxlclwiO1xyXG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkJztcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgeyBBcnJvd0JhY2tJb3MsIEFycm93Rm9yd2FyZElvcywgRm9ybWF0UXVvdGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgJyYgLk11aVNlbGVjdC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEZsZXhkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxubWF4LXdpZHRoOjEyNTBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBUaXRsZURpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDo5MCU7XHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2JsYWNrLmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6NTBweDtcclxud2lkdGg6NTAwcHg7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjUwMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbm92ZXJmbG93LXk6aGlkZGVuO1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3Rpb25ib3hlcz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5wYWRkaW5nOjVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTBweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2NkYmZkXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmNvbG9yOiNkOTA0Mjk7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDokeyh7bGVmdHZhbHVlfSk9PmxlZnR2YWx1ZX07XHJcbnRvcDo1MCU7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxucmlnaHQ6JHsoe3JpZ2h0dmFsdWV9KT0+cmlnaHR2YWx1ZX1cclxuYFxyXG4vL2ZsZXgtc2hyaW5rIGt1dHVsYXLEsW4gYmVsaXJsZW5lbiBib3l1dHRhbiBhxZ9hZ8SxIGlubWVtZXNpbmkgc2FnbMSxeW9yXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe215ZGF0YX0pe1xyXG4gICBcclxuICAgIGNvbnN0IHtib3R0b219PXVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVGFyaWg6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXpheTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBGaXppazp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCaXlvbG9qaTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICDDh2V2cmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRWRlYml5YXQ6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgS29udTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBEaWZmZXJlbnQ6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc0RpZmZlcmVudDp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtsaXN0LHNldGxpc3RdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcblxyXG4gICAgICAgIC8vVE9ETyBNT1ZFIFRIxLBTIFRPIExBWU9VVCBGxLBMRVxyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBpZighc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICBcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJvdHRvbSlcclxuICAgICAgICBzZXRvcmRlcihteWRhdGEubGVuZ3RoKzEwKTtcclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcblxyXG4gICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgTXV0YXRlZFtrZXldLnNlbGVjdGVkPWZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgICAgTXV0YXRlZFtrZXluYW1lXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICBzZXRzZWxlY3Rpb25saXN0KE11dGF0ZWQpO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7bGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzpcImhpZGRlblwifX0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lciA/IDxTcGlubmVyPjwvU3Bpbm5lcj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IGxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U2hvd2ZvbGxvd2VyIHNldGxpc3Q9eygpPT5zZXRsaXN0KFtdKX0gbGlzdD17bGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwiLHBhZGRpbmdUb3A6XCIxMHB4XCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBsZWZ0dmFsdWU9XCItMTVweFwiIHJpZ2h0dmFsdWU9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSW9zICBzdHlsZT17e2NvbG9yOlwiI2Q5MDQyOVwiLGZvbnRTaXplOlwiMjBweFwifX0+PC9BcnJvd0JhY2tJb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgbGVmdHZhbHVlPXtcIlwifSByaWdodHZhbHVlPVwiLTIwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvcyAgc3R5bGU9e3tjb2xvcjpcIiNkOTA0MjlcIixmb250U2l6ZTpcIjIwcHhcIn19PjwvQXJyb3dGb3J3YXJkSW9zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9ubGlzdCkubWFwKChpdGVtKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25ib3hlcyBzZWxlY3RlZD17c2VsZWN0aW9ubGlzdFtpdGVtXS5zZWxlY3RlZH0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRlcihpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25ib3hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3J0RGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubGVuZ3RoICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17Y3JlYXRlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmlkOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhkaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4vKjxTZWN0aW9ucGFydD5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCIsbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+R8O2bmRlcmkgVMO8csO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXt1c2VzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVGFyaWhcIj5UYXJpaDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJCaXlvbG9qaVwiPlRhcmloPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+U8SxcmFsYW1hIMOWbMOnw7x0w7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTGlrZVwiPkJlxJ9lbmkgU2F5xLFzxLE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEYXRlXCI+WcO8a2xlbm1lIFRhcmloaTwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXR3ZWV0XCI+UmV0d2VldCBTYXnEsXPEsTwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuICAgIDxCdXR0b24gZW5kSWNvbj17PFNlYXJoSWNvbj48L1NlYXJoSWNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkFyYTwvQnV0dG9uPlxyXG48L2Rpdj5cclxuPC9TZWN0aW9ucGFydD5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9