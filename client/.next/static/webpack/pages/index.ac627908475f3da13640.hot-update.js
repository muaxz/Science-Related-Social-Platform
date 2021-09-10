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
    },
    Biyolos: {
      selected: false
    },
    Biyolojs: {
      selected: false
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

    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Homereq"])({
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
    setcontentdata([]);

    var Mutated = _objectSpread({}, selectionlist);

    for (var key in Mutated) {
      Mutated[key].selected = false;
    }

    Mutated[keyname].selected = true;
    Requestagain(keyname);
    setselectionlist(Mutated);
    setselectedkey(keyname);
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
            lineNumber: 254,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
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
        lineNumber: 258,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            minHeight: "600px",
            paddingTop: "20px",
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
                lineNumber: 267,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
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
                lineNumber: 270,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
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
                    lineNumber: 278,
                    columnNumber: 53
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 49
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
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
              lineNumber: 289,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
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
              lineNumber: 296,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 251,
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

_s(Home, "Zo9RC3TNWwKHTAMlkF08GIQUSjk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkNvbnRhaW5lciIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJCaXlvbG9zIiwiQml5b2xvanMiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInNlbGVjdGVka2V5Iiwic2V0c2VsZWN0ZWRrZXkiLCJsaXN0IiwiYXR0cmlidXRlIiwid2luZG93bGlzdCIsInNldHdpbmRvd2xpc3QiLCJzdG9wcmVxdWVzdGluZyIsInNldHN0b3ByZXEiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJwYWlnbmF0aW9uIiwiY2F0ZWdvcnkiLCJzZXRlcnJtc2ciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwiU2V0c2xpZGV2YWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJ0eXBlb2ZyZWxhdGlvbiIsInVzZXJpZCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiU2VsZWN0aW9uaGFuZGVyIiwiTXV0YXRlZCIsImtleSIsIlNob3dmb2xsb3dlcnMiLCJzdGF0ZWxpc3QiLCJ0eXBlIiwiTXV0YXRlZHdpbmRvdyIsImhlaWdodCIsIm92ZXJmbG93IiwidHJhbnNmb3JtIiwicHJldiIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwicGFkZGluZ1RvcCIsIndpZHRoIiwicGFkZGluZ1JpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJpbmRleCIsImlkIiwiY29udGVudCIsInN0YXRlb2ZsaXN0IiwiTGlrZSIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsIlJlYWRsYXRlciIsInRpdGxlIiwicGVyc29uYWwiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0oseUJBQXFCO0FBQ25CQyxXQUFLLEVBQUU7QUFEWTtBQURqQjtBQURzQixDQUFELENBQS9CO0FBUUEsSUFBTUMsT0FBTyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdJQUFiO0tBQU1GLE87QUFTTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUpBQWQ7TUFBTUMsUTtBQVVOLElBQU1DLFVBQVUsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwSUFBaEI7TUFBTUUsVTtBQVdOLElBQU1DLFFB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ay9wYWdlcy9pbmRleC5hYzYyNzkwODQ3NWYzZGExMzY0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcSxDcmVhdGVyZWxhdGlvbnJlcSxOb3RpZmljYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBTaG93Zm9sbG93ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9TaG93Zm9sbGVyXCI7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHsgQXJyb3dCYWNrSW9zLCBBcnJvd0ZvcndhcmRJb3MsIEZvcm1hdFF1b3RlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbn1cclxuYFxyXG5jb25zdCBUaXRsZURpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL3dheS5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDo2NTBweDtcclxucGFkZGluZy10b3A6MjBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1yaWdodDoyNXB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU2hvcnREaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6NjBweDtcclxuaGVpZ2h0OjUwcHg7XHJcbm1heC13aWR0aDo2NTBweDtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6MTIwO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcnNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucmlnaHQ6JHsoe3NsaWRldmFsdWV9KT0+c2xpZGV2YWx1ZX07XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdGlvbmJveGVzPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tbGVmdDo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czo1MHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2VkNGRhXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmNvbG9yOnJlZDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxucGFkZGluZzo2cHg7XHJcbmhlaWdodDoxMDAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxub3BhY2l0eToxO1xyXG56LWluZGV4OjE1MDtcclxubGVmdDokeyh7bGVmdHZhbHVlfSk9PmxlZnR2YWx1ZX07XHJcbnRvcDo1MCU7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMXM7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG5yaWdodDokeyh7cmlnaHR2YWx1ZX0pPT5yaWdodHZhbHVlfTtcclxuYm94LXNoYWRvdzoxMHB4IDEwcHggNjBweCAzMHB4IHdoaXRlO1xyXG5gXHJcbmNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuIHBhZGRpbmctbGVmdDowO1xyXG59XHJcbmBcclxuLy9mbGV4LXNocmluayBrdXR1bGFyxLFuIGJlbGlybGVuZW4gYm95dXR0YW4gYcWfYWfEsSBpbm1lbWVzaW5pIHNhZ2zEsXlvclxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtzbGlkZXZhbHVlLHNldHNsaWRldmFsdWVdPXVzZVN0YXRlKC0zMCk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUobXlkYXRhKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFV6YXk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQml5b2xvamk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgXHJcbiAgICAgICAgQml5b2xvczp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSwgICBcclxuICAgICAgICBCaXlvbG9qczp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSwgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGVka2V5LHNldHNlbGVjdGVka2V5XT11c2VTdGF0ZShcIlV6YXlcIik7XHJcbiAgICBjb25zdCBbd2luZG93bGlzdCxzZXR3aW5kb3dsaXN0XT11c2VTdGF0ZSh7XHJcbiAgICAgICAgbGlzdDpbXSxcclxuICAgICAgICBhdHRyaWJ1dGU6XCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFhYVwiKTtcclxuICAgICAgICBpZighc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXIsIFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6c2VsZWN0ZWRrZXksXHJcbiAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtvcmRlcl0pXHJcblxyXG4gICAgY29uc3QgUmVxdWVzdGFnYWluPShrZXluYW1lKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0b3JkZXIoMTApO1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OmtleW5hbWUsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgY29uc3QgU2V0c2xpZGV2YWx1ZT0odmFsdWUpPT57XHJcblxyXG4gICAgICAgaWYodmFsdWUgPT0gXCJCYWNrXCIgJiYgc2xpZGV2YWx1ZSA+PSAyMCl7XHJcbiAgICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZS0yMjApXHJcbiAgICAgICB9IFxyXG4gICAgICAgZWxzZSBpZih2YWx1ZSA9PSBcImZvcndhcmRcIiAmJiBzbGlkZXZhbHVlIDwgNjAwKXtcclxuICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUrMjIwKVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhib3R0b20pO1xyXG4gICAgICAgIGlmKGJvdHRvbSl7XHJcbiAgICAgICAgICAgIHNldG9yZGVyKGNvbnRlbnRkYXRhLmxlbmd0aCsxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlcmVsYXRpb249KHBvc3RJZCxhdHRyaWJ1dGUsdHlwZW9mcmVsYXRpb24sdXNlcmlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uLFxyXG4gICAgICAgICAgICBVc2VySWRvZmNvbnRlbnQ6dXNlcmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IFNlbGVjdGlvbmhhbmRlciA9IChrZXluYW1lKSA9PntcclxuICAgICAgIFxyXG4gICAgICAgc2V0Y29udGVudGRhdGEoW10pO1xyXG5cclxuICAgICAgIGNvbnN0IE11dGF0ZWQgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcblxyXG4gICAgICAgZm9yIChjb25zdCBrZXkgaW4gTXV0YXRlZCkge1xyXG4gICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgIH1cclxuICAgICAgIE11dGF0ZWRba2V5bmFtZV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgIFJlcXVlc3RhZ2FpbihrZXluYW1lKTtcclxuICAgICAgIHNldHNlbGVjdGlvbmxpc3QoTXV0YXRlZCk7XHJcbiAgICAgICBzZXRzZWxlY3RlZGtleShrZXluYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNob3dmb2xsb3dlcnM9KHN0YXRlbGlzdCx0eXBlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IE11dGF0ZWR3aW5kb3c9ey4uLndpbmRvd2xpc3R9O1xyXG4gICAgICAgIE11dGF0ZWR3aW5kb3cubGlzdCA9IHN0YXRlbGlzdDtcclxuICAgICAgICBNdXRhdGVkd2luZG93LmF0dHJpYnV0ZSA9IHR5cGU7XHJcbiAgICAgICAgc2V0d2luZG93bGlzdChNdXRhdGVkd2luZG93KTtcclxuXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpgJHt3aW5kb3dsaXN0Lmxpc3QubGVuZ3RoID4gMCA/IFwiMTAwdmhcIiA6IFwiMTAwJVwifWAsb3ZlcmZsb3c6d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgPyBcImhpZGRlblwiOiBcInZpc2libGVcIn19PiBcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48Rm9ybWF0UXVvdGUgc3R5bGU9e3t0cmFuc2Zvcm06XCJyb3RhdGVZKDE4MGRlZylcIn19PjwvRm9ybWF0UXVvdGU+IEJpbCBraSBuZXpha2V0IGJhxZ9rYXPEsW7EsSByYWhhdHPEsXogZXRtZW1layBkZcSfaWwsIGFzxLFsIGJhxZ9rYXPEsSBpw6dpbiByYWhhdHPEsXpsxLFrIGR1eW1ha3TEsXIuPEZvcm1hdFF1b3RlPjwvRm9ybWF0UXVvdGU+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICB7d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgPFNob3dmb2xsb3dlciBzZXRsaXN0PXsoKT0+c2V0d2luZG93bGlzdChwcmV2PT57cmV0dXJuIHsuLi5wcmV2LGxpc3Q6W119fSl9IGF0dHJpYnV0ZT17d2luZG93bGlzdC5hdHRyaWJ1dGV9IGxpc3Q9e3dpbmRvd2xpc3QubGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwiLG1pbkhlaWdodDpcIjYwMHB4XCIscGFkZGluZ1RvcDpcIjIwcHhcIix3aWR0aDpcIjEwMCVcIixwYWRkaW5nUmlnaHQ6XCIzMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBvbkNsaWNrPXsoKT0+U2V0c2xpZGV2YWx1ZShcIkJhY2tcIil9IGxlZnR2YWx1ZT1cIjBcIiByaWdodHZhbHVlPXtcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJmb3J3YXJkXCIpfSBsZWZ0dmFsdWU9e1wiXCJ9IHJpZ2h0dmFsdWU9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJzaG9ydERpdiBzbGlkZXZhbHVlPXtzbGlkZXZhbHVlK1wicHhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmxpc3QpLm1hcCgoaXRlbSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJveGVzIHNlbGVjdGVkPXtzZWxlY3Rpb25saXN0W2l0ZW1dLnNlbGVjdGVkfSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGVyKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25ib3hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJzaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3J0RGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixtYXJnaW5Cb3R0b206XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXIgPyA8U3Bpbm5lcj48L1NwaW5uZXI+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QsdHlwZSk9PlNob3dmb2xsb3dlcnMoc3RhdGVvZmxpc3QsdHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0uUmVhZGxhdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwubGFzdG5hbWUgOiBcIm5vdHlldFwifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmlkOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4ZGl2PlxyXG4gICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyo8U2VjdGlvbnBhcnQ+XHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwiLG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPkfDtm5kZXJpIFTDvHLDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17dXNlc3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGZWxzZWZlXCI+RmVsc2VmZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRhcmloXCI+VGFyaWg8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQml5b2xvamlcIj5UYXJpaDwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPlPEsXJhbGFtYSDDlmzDp8O8dMO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkxpa2VcIj5CZcSfZW5pIFNhecSxc8SxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRGF0ZVwiPlnDvGtsZW5tZSBUYXJpaGk8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0d2VldFwiPlJldHdlZXQgU2F5xLFzxLE8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcbjxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcbiAgICA8QnV0dG9uIGVuZEljb249ezxTZWFyaEljb24+PC9TZWFyaEljb24+fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5BcmE8L0J1dHRvbj5cclxuPC9kaXY+XHJcbjwvU2VjdGlvbnBhcnQ+XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==