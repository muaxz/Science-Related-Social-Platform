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
            lineNumber: 207,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function setlist() {
          return _setlist([]);
        },
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
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
                lineNumber: 220,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
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
                lineNumber: 223,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
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
                      lineNumber: 233,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 31
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                textAlign: "center",
                display: "flex",
                justifyContent: "center"
              },
              children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 47
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
              lineNumber: 253,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInNlbGVjdGVka2V5Iiwic2V0c2VsZWN0ZWRrZXkiLCJsaXN0Iiwic2V0bGlzdCIsInN0b3ByZXF1ZXN0aW5nIiwic2V0c3RvcHJlcSIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwicGFpZ25hdGlvbiIsImNhdGVnb3J5Iiwic2V0ZXJybXNnIiwiUmVxdWVzdGFnYWluIiwia2V5bmFtZSIsIlNldHNsaWRldmFsdWUiLCJ2YWx1ZSIsImxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIlNlbGVjdGlvbmhhbmRlciIsIk11dGF0ZWQiLCJrZXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwicG9zaXRpb24iLCJmb250U2l6ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0oseUJBQXFCO0FBQ25CQyxXQUFLLEVBQUU7QUFEWTtBQURqQjtBQURzQixDQUFELENBQS9CO0FBUUEsSUFBTUMsT0FBTyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0tBQWQ7TUFBTUMsUTtBQVdOLElBQU1DLFVBQVUsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFoQjtNQUFNRSxVO0FBSU4sSUFBTUMsUUFBUSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFGQUFkO01BQU1HLFE7QUFRTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0hBT1g7QUFBQSxNQUFFSyxV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBeE53QnBFLEk7VUFFTEUsc0Q7OztNQUZLRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjODBkMmYzY2Y1MmE1Mzk4ODRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtGb3JtQ29udHJvbCxJbnB1dExhYmVsLFNlbGVjdCxNZW51SXRlbSxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBTaG93Zm9sbG93ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9TaG93Zm9sbGVyXCI7XHJcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVhZGVyYm9hcmQnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7IEFycm93QmFja0lvcywgQXJyb3dGb3J3YXJkSW9zLCBGb3JtYXRRdW90ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpU2VsZWN0LXJvb3QnOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmxleGRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5tYXgtd2lkdGg6MTI1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IFRpdGxlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjkwJTtcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6cmVkO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjUwcHg7XHJcbm1heC13aWR0aDo1MDBweDtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5yaWdodDokeyh7c2xpZGV2YWx1ZX0pPT5zbGlkZXZhbHVlfTtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tbGVmdDoxNXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czo1MHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2VkNGRhXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmxlZnQ6JHsoe2xlZnR2YWx1ZX0pPT5sZWZ0dmFsdWV9O1xyXG50b3A6NTAlO1xyXG5mb250LXNpemU6MjBweDtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiR7KHtyaWdodHZhbHVlfSk9PnJpZ2h0dmFsdWV9XHJcbmBcclxuLy9mbGV4LXNocmluayBrdXR1bGFyxLFuIGJlbGlybGVuZW4gYm95dXR0YW4gYcWfYWfEsSBpbm1lbWVzaW5pIHNhZ2zEsXlvclxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtzbGlkZXZhbHVlLHNldHNsaWRldmFsdWVdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFV6YXk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQml5b2xvamk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZGtleSxzZXRzZWxlY3RlZGtleV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICAvL2ZvbGxvd2VybGlzdFxyXG4gICAgY29uc3QgW2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBpZighc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6c2VsZWN0ZWRrZXksXHJcbiAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtvcmRlcl0pXHJcblxyXG4gICAgY29uc3QgUmVxdWVzdGFnYWluPShrZXluYW1lKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6a2V5bmFtZSxcclxuICAgICAgICAgICAgcGFpZ25hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBjb25zdCBTZXRzbGlkZXZhbHVlPSh2YWx1ZSk9PntcclxuXHJcbiAgICAgICBpZih2YWx1ZSA9PSBcIkJhY2tcIiAmJiBzbGlkZXZhbHVlICE9PSAwKXtcclxuICAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlLTIyMClcclxuICAgICAgIH0gXHJcbiAgICAgICBlbHNlIGlmKHZhbHVlID09IFwiZm9yd2FyZFwiICYmIHNsaWRldmFsdWUgPCA2MDApe1xyXG4gICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZSsyMjApXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJvdHRvbSlcclxuICAgICAgICBzZXRvcmRlcihteWRhdGEubGVuZ3RoKzEwKTtcclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcblxyXG4gICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgTXV0YXRlZFtrZXldLnNlbGVjdGVkPWZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgICAgTXV0YXRlZFtrZXluYW1lXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICBSZXF1ZXN0YWdhaW4oa2V5bmFtZSk7XHJcbiAgICAgICBzZXRzZWxlY3Rpb25saXN0KE11dGF0ZWQpO1xyXG4gICAgICAgc2V0c2VsZWN0ZWRrZXkoa2V5bmFtZSlcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OmAke2xpc3QubGVuZ3RoID4gMCA/IFwiMTAwdmhcIiA6IFwiMTAwJVwifWAsb3ZlcmZsb3c6XCJoaWRkZW5cIn19PiBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTAwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjxGb3JtYXRRdW90ZSBzdHlsZT17e3RyYW5zZm9ybTpcInJvdGF0ZVkoMTgwZGVnKVwifX0+PC9Gb3JtYXRRdW90ZT4gQmlsIGtpIG5lemFrZXQgYmHFn2thc8SxbsSxIHJhaGF0c8SxeiBldG1lbWVrIGRlxJ9pbCwgYXPEsWwgYmHFn2thc8SxIGnDp2luIHJhaGF0c8SxemzEsWsgZHV5bWFrdMSxci48Rm9ybWF0UXVvdGU+PC9Gb3JtYXRRdW90ZT48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIHsgbGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTaG93Zm9sbG93ZXIgc2V0bGlzdD17KCk9PnNldGxpc3QoW10pfSBsaXN0PXtsaXN0fT48L1Nob3dmb2xsb3dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZsZXhkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnREaXYgc3R5bGU9e3ttYXhXaWR0aDpcIjY1MHB4XCIscGFkZGluZ1RvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiQmFja1wiKX0gbGVmdHZhbHVlPVwiMjBweFwiIHJpZ2h0dmFsdWU9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFja0lvcyBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIixmb250U2l6ZTpcIjIwcHhcIn19PjwvQXJyb3dCYWNrSW9zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBvbkNsaWNrPXsoKT0+U2V0c2xpZGV2YWx1ZShcImZvcndhcmRcIil9IGxlZnR2YWx1ZT17XCJcIn0gcmlnaHR2YWx1ZT1cIjE1cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3MgIHN0eWxlPXt7Y29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMjBweFwifX0+PC9BcnJvd0ZvcndhcmRJb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJzaG9ydERpdiBzbGlkZXZhbHVlPXtzbGlkZXZhbHVlK1wicHhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmxpc3QpLm1hcCgoaXRlbSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJveGVzIHNlbGVjdGVkPXtzZWxlY3Rpb25saXN0W2l0ZW1dLnNlbGVjdGVkfSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGVyKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25ib3hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJzaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLmxlbmd0aCAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IFwibm90eWV0XCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4ZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyo8U2VjdGlvbnBhcnQ+XHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwiLG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPkfDtm5kZXJpIFTDvHLDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17dXNlc3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGZWxzZWZlXCI+RmVsc2VmZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRhcmloXCI+VGFyaWg8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQml5b2xvamlcIj5UYXJpaDwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPlPEsXJhbGFtYSDDlmzDp8O8dMO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkxpa2VcIj5CZcSfZW5pIFNhecSxc8SxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRGF0ZVwiPlnDvGtsZW5tZSBUYXJpaGk8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0d2VldFwiPlJldHdlZXQgU2F5xLFzxLE8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcbjxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcbiAgICA8QnV0dG9uIGVuZEljb249ezxTZWFyaEljb24+PC9TZWFyaEljb24+fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5BcmE8L0J1dHRvbj5cclxuPC9kaXY+XHJcbjwvU2VjdGlvbnBhcnQ+XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==