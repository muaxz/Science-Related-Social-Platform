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
})(["height:50px;max-width:500px;margin:auto;margin-bottom:10px;overflow-x:hidden;"]);
_c4 = ShortDiv;
var InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:100%;display:flex;align-items:center;transition-duration:0.5s;position:relative;right:", ";"], function (_ref) {
  var slidevalue = _ref.slidevalue;
  return slidevalue;
});
_c5 = InnershortDiv;
var Selectionboxes = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__Selectionboxes",
  componentId: "sc-14bmh8h-5"
})(["width:100px;font-weight:600;padding:5px;text-align:center;margin-left:15px;font-size:14px;border-radius:50px;cursor:pointer;background-color:", ";color:", ";flex-shrink:0;"], function (_ref2) {
  var selected = _ref2.selected;
  return selected ? "#ef233c" : "#ced4da";
}, function (_ref3) {
  var selected = _ref3.selected;
  return selected ? "white" : "black";
});
_c6 = Selectionboxes;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;position:absolute;cursor:pointer;left:", ";top:50%;font-size:20px;transform:translateY(-50%);right:", ""], function (_ref4) {
  var leftvalue = _ref4.leftvalue;
  return leftvalue;
}, function (_ref5) {
  var rightvalue = _ref5.rightvalue;
  return rightvalue;
}); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

_c7 = Iconholder;
function Home(_ref6) {
  _s();

  var _this = this;

  var mydata = _ref6.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      slidevalue = _useState[0],
      setslidevalue = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mydata)),
      contentdata = _useState2[0],
      setcontentdata = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      order = _useState3[0],
      setorder = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      errormsg = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Felsefe: {
      selected: false
    },
    Metafizik: {
      selected: false
    },
    Uzay: {
      selected: false
    },
    Biyoloji: {
      selected: false
    }
  }),
      selectionlist = _useState5[0],
      setselectionlist = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      selectedkey = _useState6[0],
      setselectedkey = _useState6[1]; //followerlist


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      list = _useState7[0],
      _setlist = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      stoprequesting = _useState8[0],
      setstopreq = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinner = _useState9[0],
      setspinner = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setspinner(true);

    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        paignation: true,
        category: selectedkey,
        seterrmsg: seterror,
        setstopreq: setstopreq
      });
    }
  }, [order]);

  var Requestagain = function Requestagain(keyname) {
    setspinner(true);
    setorder(10);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: 10,
      setspinner: setspinner,
      category: keyname,
      paignation: false,
      seterrmsg: seterror,
      setstopreq: setstopreq
    });
  };

  var Setslidevalue = function Setslidevalue(value) {
    if (value == "Back" && slidevalue !== 0) {
      setslidevalue(slidevalue - 220);
    } else if (value == "forward" && slidevalue < 600) {
      setslidevalue(slidevalue + 220);
    }
  };

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
    Requestagain(keyname);
    setselectionlist(Mutated);
    setselectedkey(keyname);
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
            lineNumber: 208,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function setlist() {
          return _setlist([]);
        },
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            paddingTop: "10px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              position: "relative"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: function onClick() {
                return Setslidevalue("Back");
              },
              leftvalue: "20px",
              rightvalue: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowBackIos"], {
                style: {
                  color: "black",
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 32
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: function onClick() {
                return Setslidevalue("forward");
              },
              leftvalue: "",
              rightvalue: "15px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowForwardIos"], {
                style: {
                  color: "black",
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
                slidevalue: slidevalue + "px",
                children: Object.keys(selectionlist).map(function (item) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionboxes, {
                    selected: selectionlist[item].selected,
                    onClick: function onClick() {
                      return Selectionhander(item);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: item
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 31
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                textAlign: "center",
                display: "flex",
                justifyContent: "center"
              },
              children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 47
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 24
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
              lineNumber: 254,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
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

_s(Home, "YyOUZE7+MUKhAc0mPLQgmJNRhwg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInNlbGVjdGVka2V5Iiwic2V0c2VsZWN0ZWRrZXkiLCJsaXN0Iiwic2V0bGlzdCIsInN0b3ByZXF1ZXN0aW5nIiwic2V0c3RvcHJlcSIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwicGFpZ25hdGlvbiIsImNhdGVnb3J5Iiwic2V0ZXJybXNnIiwiUmVxdWVzdGFnYWluIiwia2V5bmFtZSIsIlNldHNsaWRldmFsdWUiLCJ2YWx1ZSIsImxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIlNlbGVjdGlvbmhhbmRlciIsIk11dGF0ZWQiLCJrZXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwicG9zaXRpb24iLCJmb250U2l6ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0oseUJBQXFCO0FBQ25CQyxXQUFLLEVBQUU7QUFEWTtBQURqQjtBQURzQixDQUFELENBQS9CO0FBUUEsSUFBTUMsT0FBTyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0tBQWQ7TUFBTUMsUTtBQVdOLElBQU1DLFVBQVUsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFoQjtNQUFNRSxVO0FBSU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFGQUFkO01BQU1HLFE7QUFRTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0hBT1g7QUFBQSxNQUFFSyxV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXpOd0JwRSxJO1VBRUxFLHNEOzs7TUFGS0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMDI4NWU4YzMwZDVhNjIzMzVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcSxDcmVhdGVyZWxhdGlvbnJlcSxOb3RpZmljYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsSW5wdXRMYWJlbCxTZWxlY3QsTWVudUl0ZW0sQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQgU2hvd2ZvbGxvd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vU2hvd2ZvbGxlclwiO1xyXG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlYWRlcmJvYXJkJztcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgeyBBcnJvd0JhY2tJb3MsIEFycm93Rm9yd2FyZElvcywgRm9ybWF0UXVvdGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgJyYgLk11aVNlbGVjdC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEZsZXhkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxubWF4LXdpZHRoOjEyNTBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBUaXRsZURpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDo5MCU7XHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2JsYWNrLmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDo1MHB4O1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbm92ZXJmbG93LXg6aGlkZGVuO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcnNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucmlnaHQ6JHsoe3NsaWRldmFsdWV9KT0+c2xpZGV2YWx1ZX07XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdGlvbmJveGVzPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbnBhZGRpbmc6NXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWxlZnQ6MTVweDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6NTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCIjZWYyMzNjXCIgOlwiI2NlZDRkYVwifTtcclxuY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCJ3aGl0ZVwiIDpcImJsYWNrXCJ9O1xyXG5mbGV4LXNocmluazowO1xyXG5gXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5sZWZ0OiR7KHtsZWZ0dmFsdWV9KT0+bGVmdHZhbHVlfTtcclxudG9wOjUwJTtcclxuZm9udC1zaXplOjIwcHg7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG5yaWdodDokeyh7cmlnaHR2YWx1ZX0pPT5yaWdodHZhbHVlfVxyXG5gXHJcbi8vZmxleC1zaHJpbmsga3V0dWxhcsSxbiBiZWxpcmxlbmVuIGJveXV0dGFuIGHFn2FnxLEgaW5tZW1lc2luaSBzYWdsxLF5b3JcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7bXlkYXRhfSl7XHJcbiAgIFxyXG4gICAgY29uc3Qge2JvdHRvbX09dXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbc2xpZGV2YWx1ZSxzZXRzbGlkZXZhbHVlXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShbLi4ubXlkYXRhXSk7XHJcbiAgICBjb25zdCBbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb25saXN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBGZWxzZWZlOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIE1ldGFmaXppazp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVemF5OntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJpeW9sb2ppOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LCAgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRrZXksc2V0c2VsZWN0ZWRrZXldPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy9mb2xsb3dlcmxpc3RcclxuICAgIGNvbnN0IFtsaXN0LHNldGxpc3RdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgaWYoIXN0b3ByZXF1ZXN0aW5nICYmIGJvdHRvbSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHBhaWduYXRpb246dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OnNlbGVjdGVka2V5LFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICAgIGNvbnN0IFJlcXVlc3RhZ2Fpbj0oa2V5bmFtZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIHNldG9yZGVyKDEwKTtcclxuICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTprZXluYW1lLFxyXG4gICAgICAgICAgICBwYWlnbmF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGNvbnN0IFNldHNsaWRldmFsdWU9KHZhbHVlKT0+e1xyXG5cclxuICAgICAgIGlmKHZhbHVlID09IFwiQmFja1wiICYmIHNsaWRldmFsdWUgIT09IDApe1xyXG4gICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUtMjIwKVxyXG4gICAgICAgfSBcclxuICAgICAgIGVsc2UgaWYodmFsdWUgPT0gXCJmb3J3YXJkXCIgJiYgc2xpZGV2YWx1ZSA8IDYwMCl7XHJcbiAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlKzIyMClcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoYm90dG9tKVxyXG4gICAgICAgIHNldG9yZGVyKG15ZGF0YS5sZW5ndGgrMTApO1xyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlcmVsYXRpb249KHBvc3RJZCxhdHRyaWJ1dGUsdHlwZW9mcmVsYXRpb24sdXNlcmlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uLFxyXG4gICAgICAgICAgICBVc2VySWRvZmNvbnRlbnQ6dXNlcmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IFNlbGVjdGlvbmhhbmRlciA9IChrZXluYW1lKSA9PntcclxuXHJcbiAgICAgICBjb25zdCBNdXRhdGVkID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG5cclxuICAgICAgIGZvciAoY29uc3Qga2V5IGluIE11dGF0ZWQpIHtcclxuICAgICAgICAgICBNdXRhdGVkW2tleV0uc2VsZWN0ZWQ9ZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgICBNdXRhdGVkW2tleW5hbWVdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgIFJlcXVlc3RhZ2FpbihrZXluYW1lKTtcclxuICAgICAgIHNldHNlbGVjdGlvbmxpc3QoTXV0YXRlZCk7XHJcbiAgICAgICBzZXRzZWxlY3RlZGtleShrZXluYW1lKVxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7bGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzpcImhpZGRlblwifX0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgeyBsaXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgPFNob3dmb2xsb3dlciBzZXRsaXN0PXsoKT0+c2V0bGlzdChbXSl9IGxpc3Q9e2xpc3R9PjwvU2hvd2ZvbGxvd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIixwYWRkaW5nVG9wOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJCYWNrXCIpfSBsZWZ0dmFsdWU9XCIyMHB4XCIgcmlnaHR2YWx1ZT17XCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSW9zIHN0eWxlPXt7Y29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMjBweFwifX0+PC9BcnJvd0JhY2tJb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiZm9yd2FyZFwiKX0gbGVmdHZhbHVlPXtcIlwifSByaWdodHZhbHVlPVwiMTVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvcyAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCIsZm9udFNpemU6XCIyMHB4XCJ9fT48L0Fycm93Rm9yd2FyZElvcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcnNob3J0RGl2IHNsaWRldmFsdWU9e3NsaWRldmFsdWUrXCJweFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9ubGlzdCkubWFwKChpdGVtKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uYm94ZXMgc2VsZWN0ZWQ9e3NlbGVjdGlvbmxpc3RbaXRlbV0uc2VsZWN0ZWR9IG9uQ2xpY2s9eygpPT5TZWxlY3Rpb25oYW5kZXIoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJveGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXIgPyA8U3Bpbm5lcj48L1NwaW5uZXI+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubGVuZ3RoICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17Y3JlYXRlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmlkOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhkaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4vKjxTZWN0aW9ucGFydD5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCIsbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+R8O2bmRlcmkgVMO8csO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXt1c2VzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVGFyaWhcIj5UYXJpaDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJCaXlvbG9qaVwiPlRhcmloPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+U8SxcmFsYW1hIMOWbMOnw7x0w7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTGlrZVwiPkJlxJ9lbmkgU2F5xLFzxLE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEYXRlXCI+WcO8a2xlbm1lIFRhcmloaTwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXR3ZWV0XCI+UmV0d2VldCBTYXnEsXPEsTwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuICAgIDxCdXR0b24gZW5kSWNvbj17PFNlYXJoSWNvbj48L1NlYXJoSWNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkFyYTwvQnV0dG9uPlxyXG48L2Rpdj5cclxuPC9TZWN0aW9ucGFydD5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9