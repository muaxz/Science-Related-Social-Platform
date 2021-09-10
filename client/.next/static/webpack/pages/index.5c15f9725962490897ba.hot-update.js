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
      seterrmsg: seterror
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
            lineNumber: 273,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
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
        lineNumber: 277,
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
                lineNumber: 286,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
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
                lineNumber: 289,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
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
                    lineNumber: 297,
                    columnNumber: 53
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 49
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              marginTop: "20px"
            },
            children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
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
              lineNumber: 315,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 270,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkNvbnRhaW5lciIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJzdG9wcmVxdWVzdGluZyIsIk1ldGFmaXppayIsIlV6YXkiLCJCaXlvbG9qaSIsIkJpeW9sb3MiLCJCaXlvbG9qcyIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb25saXN0Iiwic2VsZWN0ZWRrZXkiLCJzZXRzZWxlY3RlZGtleSIsImxpc3QiLCJhdHRyaWJ1dGUiLCJ3aW5kb3dsaXN0Iiwic2V0d2luZG93bGlzdCIsInNldHN0b3ByZXEiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJwYWlnbmF0aW9uIiwic2V0c2VsZWN0aW9uIiwiY2F0ZWdvcnkiLCJzZXRlcnJtc2ciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwic2VsZWN0aW9ucyIsIlNldHNsaWRldmFsdWUiLCJ2YWx1ZSIsImxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIlNlbGVjdGlvbmhhbmRlciIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJNdXRhdGVkIiwia2V5IiwiU2hvd2ZvbGxvd2VycyIsInN0YXRlbGlzdCIsInR5cGUiLCJNdXRhdGVkd2luZG93IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm0iLCJwcmV2IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImluZGV4IiwiaWQiLCJjb250ZW50Iiwic3RhdGVvZmxpc3QiLCJMaWtlIiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwiUmVhZGxhdGVyIiwidGl0bGUiLCJwZXJzb25hbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSix5QkFBcUI7QUFDbkJDLFdBQUssRUFBRTtBQURZO0FBRGpCO0FBRHNCLENBQUQsQ0FBL0I7QUFRQSxJQUFNQyxPQUFPLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0lBQWI7S0FBTUYsTztBQVNOLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5SkFBZDtNQUFNQyxRO0FBVU4s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QUNlLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUJmLElBQUksQ0FBQ2UsUUFBTCxDQUFjUixFQUF2QyxHQUEyQyxRQWZuRDtBQWdCQSxzQkFBUSxFQUFFUCxJQUFJLENBQUNrQixRQWhCZjtBQWlCQSxrQkFBSSxFQUFFbEIsSUFBSSxDQUFDbUI7QUFqQlgsZUFTS2IsS0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBaEIsQ0EvQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlFSDtBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E3UHdCdEYsSTtVQUVMRSxxRDs7O01BRktGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWMxNWY5NzI1OTYyNDkwODk3YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXEsQ3JlYXRlcmVsYXRpb25yZXEsTm90aWZpY2F0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQgU2hvd2ZvbGxvd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vU2hvd2ZvbGxlclwiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7IEFycm93QmFja0lvcywgQXJyb3dGb3J3YXJkSW9zLCBGb3JtYXRRdW90ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpU2VsZWN0LXJvb3QnOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmxleGRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5tYXgtd2lkdGg6MTI1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbmBcclxuY29uc3QgVGl0bGVEaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC93YXkuanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6NjUwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctcmlnaHQ6MjVweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDoyNXB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDo1MHB4O1xyXG5tYXgtd2lkdGg6NjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbm92ZXJmbG93LXg6aGlkZGVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjEyMDtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJzaG9ydERpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxud2lkdGg6MTAwJTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnJpZ2h0OiR7KHtzbGlkZXZhbHVlfSk9PnNsaWRldmFsdWV9O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3Rpb25ib3hlcz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5wYWRkaW5nOjVweDtcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6NTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCIjZWYyMzNjXCIgOlwiI2NlZDRkYVwifTtcclxuY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCJ3aGl0ZVwiIDpcImJsYWNrXCJ9O1xyXG5mbGV4LXNocmluazowO1xyXG5gXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5jb2xvcjpyZWQ7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnBhZGRpbmc6NnB4O1xyXG5oZWlnaHQ6MTAwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbm9wYWNpdHk6MTtcclxuei1pbmRleDoxNTA7XHJcbmxlZnQ6JHsoe2xlZnR2YWx1ZX0pPT5sZWZ0dmFsdWV9O1xyXG50b3A6NTAlO1xyXG5mb250LXNpemU6MjBweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjFzO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxucmlnaHQ6JHsoe3JpZ2h0dmFsdWV9KT0+cmlnaHR2YWx1ZX07XHJcbmJveC1zaGFkb3c6MTBweCAxMHB4IDYwcHggMzBweCB3aGl0ZTtcclxuYFxyXG5jb25zdCBDb250YWluZXI9c3R5bGVkLmRpdmBcclxucGFkZGluZy1sZWZ0OjEwMHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5gXHJcbi8vZmxleC1zaHJpbmsga3V0dWxhcsSxbiBiZWxpcmxlbmVuIGJveXV0dGFuIGHFn2FnxLEgaW5tZW1lc2luaSBzYWdsxLF5b3JcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7bXlkYXRhfSl7XHJcbiAgIFxyXG4gICAgY29uc3Qge2JvdHRvbX09dXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbc2xpZGV2YWx1ZSxzZXRzbGlkZXZhbHVlXT11c2VTdGF0ZSgtMzApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCBbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb25saXN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBGZWxzZWZlOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXpheTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJpeW9sb2ppOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sICAgXHJcbiAgICAgICAgQml5b2xvczp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIEJpeW9sb2pzOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZGtleSxzZXRzZWxlY3RlZGtleV09dXNlU3RhdGUoXCJVemF5XCIpO1xyXG4gICAgY29uc3QgW3dpbmRvd2xpc3Qsc2V0d2luZG93bGlzdF09dXNlU3RhdGUoe1xyXG4gICAgICAgIGxpc3Q6W10sXHJcbiAgICAgICAgYXR0cmlidXRlOlwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhYWFcIik7XHJcblxyXG4gICAgICAgIGlmKCFzZWxlY3Rpb25saXN0W3NlbGVjdGVka2V5XS5zdG9wcmVxdWVzdGluZyAmJiBib3R0b20pe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlciwgXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBwYWlnbmF0aW9uOnRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25saXN0OnNlbGVjdGlvbmxpc3QsXHJcbiAgICAgICAgICAgICAgICBzZXRzZWxlY3Rpb246c2V0c2VsZWN0aW9ubGlzdCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OnNlbGVjdGVka2V5LFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICAgIGNvbnN0IFJlcXVlc3RhZ2Fpbj0oa2V5bmFtZSk9PntcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuICAgICAgICBzZWxlY3Rpb25zW2tleW5hbWVdLnN0b3ByZXF1ZXN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgc2V0c2VsZWN0aW9ubGlzdChzZWxlY3Rpb25saXN0KTtcclxuXHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBzZXRvcmRlcigxMCk7XHJcbiAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6a2V5bmFtZSxcclxuICAgICAgICAgICAgcGFpZ25hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgY29uc3QgU2V0c2xpZGV2YWx1ZT0odmFsdWUpPT57XHJcblxyXG4gICAgICAgaWYodmFsdWUgPT0gXCJCYWNrXCIgJiYgc2xpZGV2YWx1ZSA+PSAyMCl7XHJcbiAgICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZS0yMjApXHJcbiAgICAgICB9IFxyXG4gICAgICAgZWxzZSBpZih2YWx1ZSA9PSBcImZvcndhcmRcIiAmJiBzbGlkZXZhbHVlIDwgNjAwKXtcclxuICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUrMjIwKVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhib3R0b20pO1xyXG4gICAgICAgIGlmKGJvdHRvbSl7XHJcbiAgICAgICAgICAgIHNldG9yZGVyKGNvbnRlbnRkYXRhLmxlbmd0aCsxMCk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDozNTAsYmVoYXZpb3I6XCJhdXRvXCJ9KVxyXG4gICAgICAgXHJcbiAgICAgICBpZihrZXluYW1lID09IHNlbGVjdGVka2V5KXtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIE11dGF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNdXRhdGVkW2tleW5hbWVdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgICAgICBSZXF1ZXN0YWdhaW4oa2V5bmFtZSk7XHJcbiAgICAgICAgICAgIHNldHNlbGVjdGlvbmxpc3QoTXV0YXRlZCk7XHJcbiAgICAgICAgICAgIHNldHNlbGVjdGVka2V5KGtleW5hbWUpXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTaG93Zm9sbG93ZXJzPShzdGF0ZWxpc3QsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBNdXRhdGVkd2luZG93PXsuLi53aW5kb3dsaXN0fTtcclxuICAgICAgICBNdXRhdGVkd2luZG93Lmxpc3QgPSBzdGF0ZWxpc3Q7XHJcbiAgICAgICAgTXV0YXRlZHdpbmRvdy5hdHRyaWJ1dGUgPSB0eXBlO1xyXG4gICAgICAgIHNldHdpbmRvd2xpc3QoTXV0YXRlZHdpbmRvdyk7XHJcblxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OndpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID8gXCJoaWRkZW5cIjogXCJ2aXNpYmxlXCJ9fT4gXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAge3dpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTaG93Zm9sbG93ZXIgc2V0bGlzdD17KCk9PnNldHdpbmRvd2xpc3QocHJldj0+e3JldHVybiB7Li4ucHJldixsaXN0OltdfX0pfSBhdHRyaWJ1dGU9e3dpbmRvd2xpc3QuYXR0cmlidXRlfSBsaXN0PXt3aW5kb3dsaXN0Lmxpc3R9PjwvU2hvd2ZvbGxvd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIixtaW5IZWlnaHQ6XCI2MDBweFwiLHBhZGRpbmdUb3A6XCIzMHB4XCIsd2lkdGg6XCIxMDAlXCIscGFkZGluZ1JpZ2h0OlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJCYWNrXCIpfSBsZWZ0dmFsdWU9XCIwXCIgcmlnaHR2YWx1ZT17XCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiZm9yd2FyZFwiKX0gbGVmdHZhbHVlPXtcIlwifSByaWdodHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyc2hvcnREaXYgc2xpZGV2YWx1ZT17c2xpZGV2YWx1ZStcInB4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25saXN0KS5tYXAoKGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25ib3hlcyBzZWxlY3RlZD17c2VsZWN0aW9ubGlzdFtpdGVtXS5zZWxlY3RlZH0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRlcihpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYm94ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyc2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG9ydERpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsbWFyZ2luQm90dG9tOlwiMTBweFwiLG1hcmdpblRvcDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lciA/IDxTcGlubmVyPjwvU3Bpbm5lcj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCx0eXBlKT0+U2hvd2ZvbGxvd2VycyhzdGF0ZW9mbGlzdCx0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IFwibm90eWV0XCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuaWQ6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhkaXY+XHJcbiAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4vKjxTZWN0aW9ucGFydD5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCIsbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+R8O2bmRlcmkgVMO8csO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXt1c2VzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVGFyaWhcIj5UYXJpaDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJCaXlvbG9qaVwiPlRhcmloPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+U8SxcmFsYW1hIMOWbMOnw7x0w7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTGlrZVwiPkJlxJ9lbmkgU2F5xLFzxLE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEYXRlXCI+WcO8a2xlbm1lIFRhcmloaTwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXR3ZWV0XCI+UmV0d2VldCBTYXnEsXPEsTwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuICAgIDxCdXR0b24gZW5kSWNvbj17PFNlYXJoSWNvbj48L1NlYXJoSWNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkFyYTwvQnV0dG9uPlxyXG48L2Rpdj5cclxuPC9TZWN0aW9ucGFydD5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9