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
            lineNumber: 189,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        },
        children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 35
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function (_setlist) {
          function setlist() {
            return _setlist.apply(this, arguments);
          }

          setlist.toString = function () {
            return _setlist.toString();
          };

          return setlist;
        }(function () {
          return setlist([]);
        }),
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
                lineNumber: 207,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
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
                lineNumber: 210,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
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
                      lineNumber: 220,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 31
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 24
          }, this), contentdata.length && contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_4__["default"], {
              postId: item.id,
              content: item.content,
              createrelationforsmh: createrelation,
              showwindow: function showwindow(stateoflist) {
                return setlist(stateoflist);
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
              lineNumber: 235,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 186,
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

_s(Home, "6qgkwbF1PTqo010IyXVP3RXLKwc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInN0b3ByZXF1ZXN0aW5nIiwic2V0c3RvcHJlcSIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0ZXJybXNnIiwiU2V0c2xpZGV2YWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsInVzZXJpZCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiU2VsZWN0aW9uaGFuZGVyIiwia2V5bmFtZSIsIk11dGF0ZWQiLCJrZXkiLCJoZWlnaHQiLCJsaXN0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nTGVmdCIsInRyYW5zZm9ybSIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInNldGxpc3QiLCJtYXhXaWR0aCIsInBhZGRpbmdUb3AiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwiY29udGVudCIsInN0YXRlb2ZsaXN0IiwiTGlrZSIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsIlJlYWRsYXRlciIsInRpdGxlIiwicGVyc29uYWwiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSix5QkFBcUI7QUFDbkJDLFdBQUssRUFBRTtBQURZO0FBRGpCO0FBRHNCLENBQUQsQ0FBL0I7QUFRQSxJQUFNQyxPQUFPLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrS0FBZDtNQUFNQyxRO0FBV04sSUFBTUMsVUFBVSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLFFBQWhCO01BQU1FLFU7QUFJTixJQUFNQyxRQUFRLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUZBQWQ7TUFBTUcsUTtBQVFOLElBQU1DLGFBQWEsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzSEFPWDtBQUFBLE1BQUVLLFVBQUYsUUFBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFoQjtBQUFBLENBUFcsQ0FBbkI7TUFBTUQsYTtBQVVOLElBQU1FLGNB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QUFqQlgsZUFTS2IsS0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBaEIsQ0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2RUg7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBdE13Qi9ELEk7VUFFTEUsc0Q7OztNQUZLRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczY2RjZDUzNTkxNTg4NzJlNjlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtGb3JtQ29udHJvbCxJbnB1dExhYmVsLFNlbGVjdCxNZW51SXRlbSxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBTaG93Zm9sbG93ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9TaG93Zm9sbGVyXCI7XHJcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVhZGVyYm9hcmQnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7IEFycm93QmFja0lvcywgQXJyb3dGb3J3YXJkSW9zLCBGb3JtYXRRdW90ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpU2VsZWN0LXJvb3QnOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmxleGRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5tYXgtd2lkdGg6MTI1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IFRpdGxlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjkwJTtcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6cmVkO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjUwcHg7XHJcbm1heC13aWR0aDo1MDBweDtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5yaWdodDokeyh7c2xpZGV2YWx1ZX0pPT5zbGlkZXZhbHVlfTtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tbGVmdDoxNXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czo1MHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2VkNGRhXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmxlZnQ6JHsoe2xlZnR2YWx1ZX0pPT5sZWZ0dmFsdWV9O1xyXG50b3A6NTAlO1xyXG5mb250LXNpemU6MjBweDtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiR7KHtyaWdodHZhbHVlfSk9PnJpZ2h0dmFsdWV9XHJcbmBcclxuLy9mbGV4LXNocmluayBrdXR1bGFyxLFuIGJlbGlybGVuZW4gYm95dXR0YW4gYcWfYWfEsSBpbm1lbWVzaW5pIHNhZ2zEsXlvclxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtzbGlkZXZhbHVlLHNldHNsaWRldmFsdWVdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFV6YXk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQml5b2xvamk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbc3RvcHJlcXVlc3Rpbmcsc2V0c3RvcHJlcV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG5cclxuICAgICAgICAvL1RPRE8gTU9WRSBUSMSwUyBUTyBMQVlPVVQgRsSwTEVcclxuICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaWYoIXN0b3ByZXF1ZXN0aW5nICYmIGJvdHRvbSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgXHJcbiAgICBjb25zdCBTZXRzbGlkZXZhbHVlPSh2YWx1ZSk9PntcclxuICAgICAgICBcclxuICAgICAgIGlmKHZhbHVlID09IFwiQmFja1wiICYmIHNsaWRldmFsdWUgIT09IDApe1xyXG4gICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUtMjIwKVxyXG4gICAgICAgfSBcclxuICAgICAgIGVsc2UgaWYodmFsdWUgPT0gXCJmb3J3YXJkXCIgJiYgc2xpZGV2YWx1ZSA8IDYwMCl7XHJcbiAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlKzIyMClcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBpZihib3R0b20pXHJcbiAgICAgICAgc2V0b3JkZXIobXlkYXRhLmxlbmd0aCsxMCk7XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbix1c2VyaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb24sXHJcbiAgICAgICAgICAgIFVzZXJJZG9mY29udGVudDp1c2VyaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGVyID0gKGtleW5hbWUpID0+e1xyXG5cclxuICAgICAgIGNvbnN0IE11dGF0ZWQgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcblxyXG4gICAgICAgZm9yIChjb25zdCBrZXkgaW4gTXV0YXRlZCkge1xyXG4gICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgIH1cclxuICAgICAgIE11dGF0ZWRba2V5bmFtZV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgc2V0c2VsZWN0aW9ubGlzdChNdXRhdGVkKTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OmAke2xpc3QubGVuZ3RoID4gMCA/IFwiMTAwdmhcIiA6IFwiMTAwJVwifWAsb3ZlcmZsb3c6XCJoaWRkZW5cIn19PiBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTAwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjxGb3JtYXRRdW90ZSBzdHlsZT17e3RyYW5zZm9ybTpcInJvdGF0ZVkoMTgwZGVnKVwifX0+PC9Gb3JtYXRRdW90ZT4gQmlsIGtpIG5lemFrZXQgYmHFn2thc8SxbsSxIHJhaGF0c8SxeiBldG1lbWVrIGRlxJ9pbCwgYXPEsWwgYmHFn2thc8SxIGnDp2luIHJhaGF0c8SxemzEsWsgZHV5bWFrdMSxci48Rm9ybWF0UXVvdGU+PC9Gb3JtYXRRdW90ZT48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXIgPyA8U3Bpbm5lcj48L1NwaW5uZXI+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBsaXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgPFNob3dmb2xsb3dlciBzZXRsaXN0PXsoKT0+c2V0bGlzdChbXSl9IGxpc3Q9e2xpc3R9PjwvU2hvd2ZvbGxvd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIixwYWRkaW5nVG9wOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJCYWNrXCIpfSBsZWZ0dmFsdWU9XCIyMHB4XCIgcmlnaHR2YWx1ZT17XCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSW9zIHN0eWxlPXt7Y29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMjBweFwifX0+PC9BcnJvd0JhY2tJb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiZm9yd2FyZFwiKX0gbGVmdHZhbHVlPXtcIlwifSByaWdodHZhbHVlPVwiMTVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvcyAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCIsZm9udFNpemU6XCIyMHB4XCJ9fT48L0Fycm93Rm9yd2FyZElvcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcnNob3J0RGl2IHNsaWRldmFsdWU9e3NsaWRldmFsdWUrXCJweFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9ubGlzdCkubWFwKChpdGVtKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uYm94ZXMgc2VsZWN0ZWQ9e3NlbGVjdGlvbmxpc3RbaXRlbV0uc2VsZWN0ZWR9IG9uQ2xpY2s9eygpPT5TZWxlY3Rpb25oYW5kZXIoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJveGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLmxlbmd0aCAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IFwibm90eWV0XCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4ZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyo8U2VjdGlvbnBhcnQ+XHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwiLG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPkfDtm5kZXJpIFTDvHLDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17dXNlc3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGZWxzZWZlXCI+RmVsc2VmZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRhcmloXCI+VGFyaWg8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQml5b2xvamlcIj5UYXJpaDwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPlPEsXJhbGFtYSDDlmzDp8O8dMO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkxpa2VcIj5CZcSfZW5pIFNhecSxc8SxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRGF0ZVwiPlnDvGtsZW5tZSBUYXJpaGk8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0d2VldFwiPlJldHdlZXQgU2F5xLFzxLE8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcbjxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcbiAgICA8QnV0dG9uIGVuZEljb249ezxTZWFyaEljb24+PC9TZWFyaEljb24+fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5BcmE8L0J1dHRvbj5cclxuPC9kaXY+XHJcbjwvU2VjdGlvbnBhcnQ+XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==