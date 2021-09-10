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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
var Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;@media (max-width:940px){justify-content:center;}"]);
_c = Flexdiv;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__TitleDiv",
  componentId: "sc-14bmh8h-1"
})(["width:100%;padding:10px;height:300px;background-image:url(/way.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c2 = TitleDiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-2"
})(["max-width:650px;padding-top:20px;width:100%;padding-right:25px;@media (max-width:940px){justify-content:center;padding-left:25px;}"]);
_c3 = ContentDiv;
var ShortDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ShortDiv",
  componentId: "sc-14bmh8h-3"
})(["position:sticky;top:60px;height:50px;max-width:650px;width:100%;margin:auto;margin-bottom:10px;overflow-x:hidden;background-color:white;z-index:120;"]);
_c4 = ShortDiv;
var InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:space-around;transition-duration:0.5s;position:relative;right:", ";"], function (_ref) {
  var slidevalue = _ref.slidevalue;
  return slidevalue;
});
_c5 = InnershortDiv;
var Selectionboxes = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Selectionboxes",
  componentId: "sc-14bmh8h-5"
})(["width:100px;font-weight:600;padding:5px;margin-left:5px;text-align:center;font-size:14px;border-radius:50px;cursor:pointer;background-color:", ";color:", ";flex-shrink:0;"], function (_ref2) {
  var selected = _ref2.selected;
  return selected ? "#ef233c" : "#ced4da";
}, function (_ref3) {
  var selected = _ref3.selected;
  return selected ? "white" : "black";
});
_c6 = Selectionboxes;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;color:red;align-items:center;position:absolute;padding:6px;height:100%;cursor:pointer;background-color:white;opacity:1;z-index:150;left:", ";top:50%;font-size:20px;transition-duration:0.1s;transform:translateY(-50%);right:", ";box-shadow:10px 10px 60px 30px white;"], function (_ref4) {
  var leftvalue = _ref4.leftvalue;
  return leftvalue;
}, function (_ref5) {
  var rightvalue = _ref5.rightvalue;
  return rightvalue;
});
_c7 = Iconholder;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Container",
  componentId: "sc-14bmh8h-7"
})(["padding-left:100px;@media (max-width:940px){padding-left:0;}"]); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

_c8 = Container;
function Home(_ref6) {
  _s();

  var _this = this;

  var mydata = _ref6.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(-30),
      slidevalue = _useState[0],
      setslidevalue = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(mydata),
      contentdata = _useState2[0],
      setcontentdata = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      order = _useState3[0],
      setorder = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      errormsg = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Felsefe: {
      selected: false,
      stoprequesting: false
    },
    Metafizik: {
      selected: false,
      stoprequesting: false
    },
    Uzay: {
      selected: false,
      stoprequesting: false
    },
    Biyoloji: {
      selected: false,
      stoprequesting: false
    },
    Biyolos: {
      selected: false,
      stoprequesting: false
    },
    Biyolojs: {
      selected: false,
      stoprequesting: false
    }
  }),
      selectionlist = _useState5[0],
      setselectionlist = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Uzay"),
      selectedkey = _useState6[0],
      setselectedkey = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    list: [],
    attribute: ""
  }),
      windowlist = _useState7[0],
      setwindowlist = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      stoprequesting = _useState8[0],
      setstopreq = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      spinner = _useState9[0],
      setspinner = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("buradaaa");

    if (!selectionlist[selectedkey].stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        paignation: true,
        selectionlist: selectionlist,
        setselection: setselectionlist,
        category: selectedkey,
        seterrmsg: seterror
      });
    }
  }, [order]);

  var Requestagain = function Requestagain(keyname) {
    var selections = _objectSpread({}, selectionlist);

    selections[keyname].stoprequesting = false;
    setselectionlist(selectionlist);
    setspinner(true);
    setorder(10);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Homereq"])({
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
    if (value == "Back" && slidevalue >= 20) {
      setslidevalue(slidevalue - 220);
    } else if (value == "forward" && slidevalue < 600) {
      setslidevalue(slidevalue + 220);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(bottom);

    if (bottom) {
      setorder(contentdata.length + 10);
    }
  }, [bottom]);

  var createrelation = function createrelation(postId, attribute, typeofrelation, userid) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  };

  var Selectionhander = function Selectionhander(keyname) {
    window.scrollTo({
      top: 350,
      behavior: "auto"
    });

    if (keyname == selectedkey) {
      return;
    } else {
      var Mutated = _objectSpread({}, selectionlist);

      for (var key in Mutated) {
        Mutated[key].selected = false;
      }

      Mutated[keyname].selected = true;
      Requestagain(keyname);
      setselectionlist(Mutated);
      setselectedkey(keyname);
    }
  };

  var Showfollowers = function Showfollowers(statelist, type) {
    var Mutatedwindow = _objectSpread({}, windowlist);

    Mutatedwindow.list = statelist;
    Mutatedwindow.attribute = type;
    setwindowlist(Mutatedwindow);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "".concat(windowlist.list.length > 0 ? "100vh" : "100%"),
      overflow: windowlist.list.length > 0 ? "hidden" : "visible"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {
            style: {
              transform: "rotateY(180deg)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, this), windowlist.list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setlist: function setlist() {
          return setwindowlist(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              list: []
            });
          });
        },
        attribute: windowlist.attribute,
        list: windowlist.list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            minHeight: "600px",
            paddingTop: "30px",
            width: "100%",
            paddingRight: "30px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: function onClick() {
                return Setslidevalue("Back");
              },
              leftvalue: "0",
              rightvalue: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                style: {
                  color: "black"
                },
                "class": "fas fa-chevron-left"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: function onClick() {
                return Setslidevalue("forward");
              },
              leftvalue: "",
              rightvalue: "0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                style: {
                  color: "black"
                },
                "class": "fas fa-chevron-right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
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
                    lineNumber: 298,
                    columnNumber: 53
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 49
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px"
            },
            children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 24
          }, this), contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
              postId: item.id,
              content: item.content,
              createrelationforsmh: createrelation,
              showwindow: function showwindow(stateoflist, type) {
                return Showfollowers(stateoflist, type);
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
              lineNumber: 316,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 271,
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

_s(Home, "dJy1HyHfJ3sp3kdhpr1wjvaf8CA=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c9 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "TitleDiv");
$RefreshReg$(_c3, "ContentDiv");
$RefreshReg$(_c4, "ShortDiv");
$RefreshReg$(_c5, "InnershortDiv");
$RefreshReg$(_c6, "Selectionboxes");
$RefreshReg$(_c7, "Iconholder");
$RefreshReg$(_c8, "Container");
$RefreshReg$(_c9, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkNvbnRhaW5lciIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJzdG9wcmVxdWVzdGluZyIsIk1ldGFmaXppayIsIlV6YXkiLCJCaXlvbG9qaSIsIkJpeW9sb3MiLCJCaXlvbG9qcyIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb25saXN0Iiwic2VsZWN0ZWRrZXkiLCJzZXRzZWxlY3RlZGtleSIsImxpc3QiLCJhdHRyaWJ1dGUiLCJ3aW5kb3dsaXN0Iiwic2V0d2luZG93bGlzdCIsInNldHN0b3ByZXEiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJwYWlnbmF0aW9uIiwic2V0c2VsZWN0aW9uIiwiY2F0ZWdvcnkiLCJzZXRlcnJtc2ciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwic2VsZWN0aW9ucyIsIlNldHNsaWRldmFsdWUiLCJ2YWx1ZSIsImxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIlNlbGVjdGlvbmhhbmRlciIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJNdXRhdGVkIiwia2V5IiwiU2hvd2ZvbGxvd2VycyIsInN0YXRlbGlzdCIsInR5cGUiLCJNdXRhdGVkd2luZG93IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm0iLCJwcmV2IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsImluZGV4IiwiaWQiLCJjb250ZW50Iiwic3RhdGVvZmxpc3QiLCJMaWtlIiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwiUmVhZGxhdGVyIiwidGl0bGUiLCJwZXJzb25hbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSix5QkFBcUI7QUFDbkJDLFdBQUssRUFBRTtBQURZO0FBRGpCO0FBRHNCLENBQUQsQ0FBL0I7QUFRQSxJQUFNQyxPQUFPLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0lBQWI7S0FBTUYsTztBQVNOLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5SkFBZDtNQUFNQyxRO0FBVU4sSUFBTUMsVUFBVSxH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LElBQWxCLEdBQXlCZCxJQUFJLENBQUNjLFFBQUwsQ0FBY1IsRUFBdkMsR0FBMkMsUUFmbkQ7QUFnQkEsc0JBQVEsRUFBRU4sSUFBSSxDQUFDaUIsUUFoQmY7QUFpQkEsa0JBQUksRUFBRWpCLElBQUksQ0FBQ2tCO0FBakJYLGVBU0tiLEtBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQUFBLFdBQWhCLENBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5RUg7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBOVB3QnJGLEk7VUFFTEUscUQ7OztNQUZLRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0MmFkOTNjMGFlOTdlMTA1NGNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgeyBBcnJvd0JhY2tJb3MsIEFycm93Rm9yd2FyZElvcywgRm9ybWF0UXVvdGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgJyYgLk11aVNlbGVjdC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEZsZXhkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxubWF4LXdpZHRoOjEyNTBweDtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IFRpdGxlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvd2F5LmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjY1MHB4O1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLXJpZ2h0OjI1cHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjVweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTaG9ydERpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDo2MHB4O1xyXG5oZWlnaHQ6NTBweDtcclxubWF4LXdpZHRoOjY1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5vdmVyZmxvdy14OmhpZGRlbjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDoxMjA7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5yaWdodDokeyh7c2xpZGV2YWx1ZX0pPT5zbGlkZXZhbHVlfTtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1sZWZ0OjVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtzZWxlY3RlZH0pPT5zZWxlY3RlZCA/IFwiI2VmMjMzY1wiIDpcIiNjZWQ0ZGFcIn07XHJcbmNvbG9yOiR7KHtzZWxlY3RlZH0pPT5zZWxlY3RlZCA/IFwid2hpdGVcIiA6XCJibGFja1wifTtcclxuZmxleC1zaHJpbms6MDtcclxuYFxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuY29sb3I6cmVkO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nOjZweDtcclxuaGVpZ2h0OjEwMCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vcGFjaXR5OjE7XHJcbnotaW5kZXg6MTUwO1xyXG5sZWZ0OiR7KHtsZWZ0dmFsdWV9KT0+bGVmdHZhbHVlfTtcclxudG9wOjUwJTtcclxuZm9udC1zaXplOjIwcHg7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4xcztcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiR7KHtyaWdodHZhbHVlfSk9PnJpZ2h0dmFsdWV9O1xyXG5ib3gtc2hhZG93OjEwcHggMTBweCA2MHB4IDMwcHggd2hpdGU7XHJcbmBcclxuY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctbGVmdDoxMDBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG4vL2ZsZXgtc2hyaW5rIGt1dHVsYXLEsW4gYmVsaXJsZW5lbiBib3l1dHRhbiBhxZ9hZ8SxIGlubWVtZXNpbmkgc2FnbMSxeW9yXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe215ZGF0YX0pe1xyXG4gICBcclxuICAgIGNvbnN0IHtib3R0b219PXVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3QgW3NsaWRldmFsdWUsc2V0c2xpZGV2YWx1ZV09dXNlU3RhdGUoLTMwKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShteWRhdGEpO1xyXG4gICAgY29uc3QgW29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ubGlzdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgRmVsc2VmZTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIE1ldGFmaXppazp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFV6YXk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICAgICAgc3RvcHJlcXVlc3Rpbmc6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCaXlvbG9qaTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIEJpeW9sb3M6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICAgICAgc3RvcHJlcXVlc3Rpbmc6ZmFsc2UsXHJcbiAgICAgICAgfSwgICBcclxuICAgICAgICBCaXlvbG9qczp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LCAgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRrZXksc2V0c2VsZWN0ZWRrZXldPXVzZVN0YXRlKFwiVXpheVwiKTtcclxuICAgIGNvbnN0IFt3aW5kb3dsaXN0LHNldHdpbmRvd2xpc3RdPXVzZVN0YXRlKHtcclxuICAgICAgICBsaXN0OltdLFxyXG4gICAgICAgIGF0dHJpYnV0ZTpcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbc3RvcHJlcXVlc3Rpbmcsc2V0c3RvcHJlcV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFhXCIpO1xyXG5cclxuICAgICAgICBpZighc2VsZWN0aW9ubGlzdFtzZWxlY3RlZGtleV0uc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXIsIFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ubGlzdDpzZWxlY3Rpb25saXN0LFxyXG4gICAgICAgICAgICAgICAgc2V0c2VsZWN0aW9uOnNldHNlbGVjdGlvbmxpc3QsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTpzZWxlY3RlZGtleSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICBjb25zdCBSZXF1ZXN0YWdhaW49KGtleW5hbWUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1trZXluYW1lXS5zdG9wcmVxdWVzdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbmxpc3Qoc2VsZWN0aW9ubGlzdCk7XHJcblxyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0b3JkZXIoMTApO1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OmtleW5hbWUsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgY29uc3QgU2V0c2xpZGV2YWx1ZT0odmFsdWUpPT57XHJcblxyXG4gICAgICAgaWYodmFsdWUgPT0gXCJCYWNrXCIgJiYgc2xpZGV2YWx1ZSA+PSAyMCl7XHJcbiAgICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZS0yMjApXHJcbiAgICAgICB9IFxyXG4gICAgICAgZWxzZSBpZih2YWx1ZSA9PSBcImZvcndhcmRcIiAmJiBzbGlkZXZhbHVlIDwgNjAwKXtcclxuICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUrMjIwKVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhib3R0b20pO1xyXG4gICAgICAgIGlmKGJvdHRvbSl7XHJcbiAgICAgICAgICAgIHNldG9yZGVyKGNvbnRlbnRkYXRhLmxlbmd0aCsxMCk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDozNTAsYmVoYXZpb3I6XCJhdXRvXCJ9KVxyXG4gICAgICAgXHJcbiAgICAgICBpZihrZXluYW1lID09IHNlbGVjdGVka2V5KXtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIE11dGF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNdXRhdGVkW2tleW5hbWVdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgICAgICBSZXF1ZXN0YWdhaW4oa2V5bmFtZSk7XHJcbiAgICAgICAgICAgIHNldHNlbGVjdGlvbmxpc3QoTXV0YXRlZCk7XHJcbiAgICAgICAgICAgIHNldHNlbGVjdGVka2V5KGtleW5hbWUpXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTaG93Zm9sbG93ZXJzPShzdGF0ZWxpc3QsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBNdXRhdGVkd2luZG93PXsuLi53aW5kb3dsaXN0fTtcclxuICAgICAgICBNdXRhdGVkd2luZG93Lmxpc3QgPSBzdGF0ZWxpc3Q7XHJcbiAgICAgICAgTXV0YXRlZHdpbmRvdy5hdHRyaWJ1dGUgPSB0eXBlO1xyXG4gICAgICAgIHNldHdpbmRvd2xpc3QoTXV0YXRlZHdpbmRvdyk7XHJcblxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OndpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID8gXCJoaWRkZW5cIjogXCJ2aXNpYmxlXCJ9fT4gXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAge3dpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTaG93Zm9sbG93ZXIgc2V0bGlzdD17KCk9PnNldHdpbmRvd2xpc3QocHJldj0+e3JldHVybiB7Li4ucHJldixsaXN0OltdfX0pfSBhdHRyaWJ1dGU9e3dpbmRvd2xpc3QuYXR0cmlidXRlfSBsaXN0PXt3aW5kb3dsaXN0Lmxpc3R9PjwvU2hvd2ZvbGxvd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIixtaW5IZWlnaHQ6XCI2MDBweFwiLHBhZGRpbmdUb3A6XCIzMHB4XCIsd2lkdGg6XCIxMDAlXCIscGFkZGluZ1JpZ2h0OlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJCYWNrXCIpfSBsZWZ0dmFsdWU9XCIwXCIgcmlnaHR2YWx1ZT17XCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiZm9yd2FyZFwiKX0gbGVmdHZhbHVlPXtcIlwifSByaWdodHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyc2hvcnREaXYgc2xpZGV2YWx1ZT17c2xpZGV2YWx1ZStcInB4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25saXN0KS5tYXAoKGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25ib3hlcyBzZWxlY3RlZD17c2VsZWN0aW9ubGlzdFtpdGVtXS5zZWxlY3RlZH0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRlcihpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYm94ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyc2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG9ydERpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsbWFyZ2luQm90dG9tOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17Y3JlYXRlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0LHR5cGUpPT5TaG93Zm9sbG93ZXJzKHN0YXRlb2ZsaXN0LHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleGRpdj5cclxuICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qPFNlY3Rpb25wYXJ0PlxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIixtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5Hw7ZuZGVyaSBUw7xyw7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3VzZXN0eWxlcy5yb290fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUYXJpaFwiPlRhcmloPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJpeW9sb2ppXCI+VGFyaWg8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5TxLFyYWxhbWEgw5Zsw6fDvHTDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJMaWtlXCI+QmXEn2VuaSBTYXnEsXPEsTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRhdGVcIj5Zw7xrbGVubWUgVGFyaWhpPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJldHdlZXRcIj5SZXR3ZWV0IFNhecSxc8SxPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgPEJ1dHRvbiBlbmRJY29uPXs8U2VhcmhJY29uPjwvU2VhcmhJY29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+QXJhPC9CdXR0b24+XHJcbjwvZGl2PlxyXG48L1NlY3Rpb25wYXJ0PlxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=