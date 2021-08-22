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
})(["display:flex;justify-content:center;align-items:center;color:#d90429;border-radius:50%;position:absolute;left:-15px;top:50%;font-size:20px;transform:translateY(-50%);"]);
_c7 = Iconholder;
var SeconderHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Iconholder).withConfig({
  displayName: "Home__SeconderHolder",
  componentId: "sc-14bmh8h-7"
})(["right:-100px;"]); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

_c8 = SeconderHolder;
function Home(_ref3) {
  _s();

  var _this = this;

  var mydata = _ref3.mydata;

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
            lineNumber: 203,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        },
        children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 35
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowBackIos"], {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SeconderHolder, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["ArrowForwardIos"], {
                  style: {
                    color: "#d90429",
                    fontSize: "20px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
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
                    lineNumber: 233,
                    columnNumber: 51
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 47
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
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
              lineNumber: 247,
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
      lineNumber: 201,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 200,
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

_c9 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "TitleDiv");
$RefreshReg$(_c3, "ContentDiv");
$RefreshReg$(_c4, "ShortDiv");
$RefreshReg$(_c5, "InnershortDiv");
$RefreshReg$(_c6, "Selectionboxes");
$RefreshReg$(_c7, "Iconholder");
$RefreshReg$(_c8, "SeconderHolder");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2IiwiU2VsZWN0aW9uYm94ZXMiLCJzZWxlY3RlZCIsIkljb25ob2xkZXIiLCJTZWNvbmRlckhvbGRlciIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiRmVsc2VmZSIsIlRhcmloIiwiVXpheSIsIkZpemlrIiwiQml5b2xvamkiLCLDh2V2cmUiLCJFZGViaXlhdCIsIktvbnUiLCJEaWZmZXJlbnQiLCJzRGlmZmVyZW50Iiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbmxpc3QiLCJsaXN0Iiwic2V0bGlzdCIsInN0b3ByZXF1ZXN0aW5nIiwic2V0c3RvcHJlcSIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwidXNlRWZmZWN0IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0ZXJybXNnIiwibGVuZ3RoIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJhdHRyaWJ1dGUiLCJ0eXBlb2ZyZWxhdGlvbiIsInVzZXJpZCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiU2VsZWN0aW9uaGFuZGVyIiwia2V5bmFtZSIsIk11dGF0ZWQiLCJrZXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJjb250ZW50Iiwic3RhdGVvZmxpc3QiLCJMaWtlIiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwiUmVhZGxhdGVyIiwidGl0bGUiLCJwZXJzb25hbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxZQUFZLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBRTtBQUNKLHlCQUFxQjtBQUNuQkMsV0FBSyxFQUFFO0FBRFk7QUFEakI7QUFEc0IsQ0FBRCxDQUEvQjtBQVFBLElBQU1DLE9BQU8sR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrRUFBYjtLQUFNRixPO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtLQUFkO01BQU1DLFE7QUFXTixJQUFNQyxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBaEI7TUFBTUUsVTtBQUlOLElBQU1DLFFBQVEsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpRkFBZDtNQUFNRyxRO0FBUU4sSUFBTUMsYUFBYSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9HQUFuQjtNQUFNSSxhO0FBU04sSUFBTUMsY0FBYyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDhMQVNEO0FBQUEsTUFBRU0sUUFBRixRQUFFQSxRQUFGO0FBQUEsU0FBY0EsUUFBUSxHQUFHLFNBQUgsR0FBYyxTQUFwQztBQUFBLENBVEMsRUFVWjtBQUFBLE1BQUVBLFFBQUYsU0FBRUEsUUFBRjtBQUFBLFNBQWNBLFFBQVEsR0FBRyxPQUFILEdBQVksT0FBbEM7QUFBQSxDQVZZLENBQXBCO01BQU1ELGM7QUFjTixJQUFNRSxVQUFVLEdBQUNSLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsOEtBQWhCO01BQU1PLFU7QUFhTixJQUFNQyxjQUFjLEdBQUdULGlFQUFNLENBQUNRLFVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxQkFBcEIsQyxDQUdBOztNQUhNQyxjO0FBT1MsU0FBU0MsSUFBVCxRQUF1QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLE1BQVEsU0FBUkEsTUFBUTs7QUFBQSxtQkFFbkJDLDhEQUFTLEVBRlU7QUFBQSxNQUUzQkMsTUFGMkIsY0FFM0JBLE1BRjJCOztBQUFBLG9CQUdmQyx3REFBVSxDQUFDQyxzRUFBRCxDQUhLO0FBQUEsTUFHM0JDLFFBSDJCLGVBRzNCQSxRQUgyQjs7QUFBQSxrQkFJQ0Msc0RBQVEsQ0FBQyxrSkFBSU4sTUFBTCxFQUpUO0FBQUEsTUFJM0JPLFdBSjJCO0FBQUEsTUFJZkMsY0FKZTs7QUFBQSxtQkFLWEYsc0RBQVEsQ0FBQyxDQUFELENBTEc7QUFBQSxNQUszQkcsS0FMMkI7QUFBQSxNQUtyQkMsUUFMcUI7O0FBQUEsbUJBTVJKLHNEQUFRLENBQUMsS0FBRCxDQU5BO0FBQUEsTUFNM0JLLFFBTjJCO0FBQUEsTUFNbEJDLFFBTmtCOztBQUFBLG1CQU9PTixzREFBUSxDQUFDO0FBQzlDTyxXQUFPLEVBQUM7QUFDSmpCLGNBQVEsRUFBQztBQURMLEtBRHNDO0FBSTlDa0IsU0FBSyxFQUFDO0FBQ0ZsQixjQUFRLEVBQUM7QUFEUCxLQUp3QztBQU85Q21CLFFBQUksRUFBQztBQUNEbkIsY0FBUSxFQUFDO0FBRFIsS0FQeUM7QUFVOUNvQixTQUFLLEVBQUM7QUFDRnBCLGNBQVEsRUFBQztBQURQLEtBVndDO0FBYTlDcUIsWUFBUSxFQUFDO0FBQ0xyQixjQUFRLEVBQUM7QUFESixLQWJxQztBQWdCOUNzQixTQUFLLEVBQUM7QUFDRnRCLGNBQVEsRUFBQztBQURQLEtBaEJ3QztBQW1COUN1QixZQUFRLEVBQUM7QUFDTHZCLGNBQVEsRUFBQztBQURKLEtBbkJxQztBQXNCOUN3QixRQUFJLEVBQUM7QUFDRHhCLGNBQVEsRUFBQztBQURSLEtBdEJ5QztBQXlCOUN5QixhQUFTLEVBQUM7QUFDTnpCLGNBQVEsRUFBQztBQURILEtBekJvQztBQTRCOUMwQixjQUFVLEVBQUM7QUFDUDFCLGNBQVEsRUFBQztBQURGO0FBNUJtQyxHQUFELENBUGY7QUFBQSxNQU8zQjJCLGFBUDJCO0FBQUEsTUFPYkMsZ0JBUGE7O0FBQUEsbUJBMENibEIsc0RBQVEsQ0FBQyxFQUFELENBMUNLO0FBQUEsTUEwQzNCbUIsSUExQzJCO0FBQUEsTUEwQ3RCQyxRQTFDc0I7O0FBQUEsbUJBMkNBcEIsc0RBQVEsQ0FBQyxLQUFELENBM0NSO0FBQUEsTUEyQzNCcUIsY0EzQzJCO0FBQUEsTUEyQ1pDLFVBM0NZOztBQUFBLG1CQTRDUHRCLHNEQUFRLENBQUMsS0FBRCxDQTVDRDtBQUFBLE1BNEMzQnVCLE9BNUMyQjtBQUFBLE1BNENuQkMsVUE1Q21COztBQStDbENDLHlEQUFTLENBQUMsWUFBSTtBQUdWO0FBSUEsUUFBRyxDQUFDSixjQUFELElBQW1CekIsTUFBdEIsRUFBNkI7QUFFekI0QixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSw4REFBTyxDQUFDO0FBQ0pDLG1CQUFXLEVBQUMxQixXQURSO0FBRUpDLHNCQUFjLEVBQUNBLGNBRlg7QUFHSkMsYUFBSyxFQUFDQSxLQUhGO0FBSUpxQixrQkFBVSxFQUFDQSxVQUpQO0FBS0pJLGlCQUFTLEVBQUN0QixRQUxOO0FBTUpnQixrQkFBVSxFQUFDQTtBQU5QLE9BQUQsQ0FBUDtBQVNIO0FBRUosR0FyQlEsRUFxQlAsQ0FBQ25CLEtBQUQsQ0FyQk8sQ0FBVDtBQTBCQXNCLHlEQUFTLENBQUMsWUFBSTtBQUVWLFFBQUc3QixNQUFILEVBQ0FRLFFBQVEsQ0FBQ1YsTUFBTSxDQUFDbUMsTUFBUCxHQUFjLEVBQWYsQ0FBUjtBQUVILEdBTFEsRUFLUCxDQUFDakMsTUFBRCxDQUxPLENBQVQ7O0FBT0EsTUFBTWtDLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLE1BQUQsRUFBUUMsU0FBUixFQUFrQkMsY0FBbEIsRUFBaUNDLE1BQWpDLEVBQTBDO0FBRTNEQyxzRUFBaUIsQ0FBQztBQUNkQyxZQUFNLEVBQUNyQyxRQUFRLENBQUNxQyxNQURGO0FBRWRDLFlBQU0sRUFBQ04sTUFGTztBQUdkQyxlQUFTLEVBQUNBLFNBSEk7QUFJZE0sa0JBQVksRUFBQ0wsY0FKQztBQUtkTSxxQkFBZSxFQUFDTDtBQUxGLEtBQUQsQ0FBakI7QUFPSCxHQVREOztBQVdBLE1BQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFZO0FBRWpDLFFBQU1DLE9BQU8scUJBQU96QixhQUFQLENBQWI7O0FBRUEsU0FBSyxJQUFNMEIsR0FBWCxJQUFrQkQsT0FBbEIsRUFBMkI7QUFDdkJBLGFBQU8sQ0FBQ0MsR0FBRCxDQUFQLENBQWFyRCxRQUFiLEdBQXNCLEtBQXRCO0FBQ0g7O0FBQ0RvRCxXQUFPLENBQUNELE9BQUQsQ0FBUCxDQUFpQm5ELFFBQWpCLEdBQTRCLElBQTVCO0FBQ0E0QixvQkFBZ0IsQ0FBQ3dCLE9BQUQsQ0FBaEI7QUFDRixHQVREOztBQVlBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNFLFlBQU0sWUFBSXpCLElBQUksQ0FBQ1UsTUFBTCxHQUFjLENBQWQsR0FBa0IsT0FBbEIsR0FBNEIsTUFBaEMsQ0FBUDtBQUFnRGdCLGNBQVEsRUFBQztBQUF6RCxLQUFaO0FBQUEsMkJBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsbUJBQVcsRUFBQztBQUFiLE9BQVo7QUFBQSw4QkFDSSxxRUFBQyxRQUFEO0FBQUEsK0JBQ0k7QUFBSSxlQUFLLEVBQUU7QUFBQ2pFLGlCQUFLLEVBQUM7QUFBUCxXQUFYO0FBQUEsa0NBQTRCLHFFQUFDLCtEQUFEO0FBQWEsaUJBQUssRUFBRTtBQUFDa0UsdUJBQVMsRUFBQztBQUFYO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVCLHVLQUF1TCxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF2TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFDLFFBQVg7QUFBb0JDLGlCQUFPLEVBQUMsTUFBNUI7QUFBbUNDLHdCQUFjLEVBQUM7QUFBbEQsU0FBWjtBQUFBLGtCQUVRM0IsT0FBTyxnQkFBRyxxRUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFILEdBQXlCO0FBRnhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNNSixJQUFJLENBQUNVLE1BQUwsR0FBYyxDQUFkLGdCQUVBLHFFQUFDLDBFQUFEO0FBQWMsZUFBTyxFQUFFO0FBQUEsaUJBQUlULFFBQU8sQ0FBQyxFQUFELENBQVg7QUFBQSxTQUF2QjtBQUF3QyxZQUFJLEVBQUVEO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxHQUlBLElBYk4sZUFnQkkscUVBQUMsT0FBRDtBQUFBLCtCQUNJLHFFQUFDLFVBQUQ7QUFBWSxlQUFLLEVBQUU7QUFBQ2dDLG9CQUFRLEVBQUMsT0FBVjtBQUFrQkMsc0JBQVUsRUFBQztBQUE3QixXQUFuQjtBQUFBLGtDQUVJLHFFQUFDLFFBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxhQUFEO0FBQUEsc0NBQ0sscUVBQUMsVUFBRDtBQUFBLHVDQUNHLHFFQUFDLGdFQUFEO0FBQWMsdUJBQUssRUFBRTtBQUFDdkUseUJBQUssRUFBQyxTQUFQO0FBQWlCd0UsNEJBQVEsRUFBQztBQUExQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFETCxlQUlLLHFFQUFDLGNBQUQ7QUFBQSx1Q0FDRyxxRUFBQyxtRUFBRDtBQUFpQix1QkFBSyxFQUFFO0FBQUN4RSx5QkFBSyxFQUFDLFNBQVA7QUFBaUJ3RSw0QkFBUSxFQUFDO0FBQTFCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpMLEVBUVVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEMsYUFBWixFQUEyQnVDLEdBQTNCLENBQStCLFVBQUNDLElBQUQsRUFBUTtBQUVuQyxvQ0FDSSxxRUFBQyxjQUFEO0FBQWdCLDBCQUFRLEVBQUV4QyxhQUFhLENBQUN3QyxJQUFELENBQWIsQ0FBb0JuRSxRQUE5QztBQUF3RCx5QkFBTyxFQUFFO0FBQUEsMkJBQUlrRCxlQUFlLENBQUNpQixJQUFELENBQW5CO0FBQUEsbUJBQWpFO0FBQUEseUNBQ0k7QUFBQSw4QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQU1ILGVBUkQsQ0FSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBMEJJeEQsV0FBVyxDQUFDNEIsTUFBWixJQUVBNUIsV0FBVyxDQUFDdUQsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSxnQ0FDWixxRUFBQyxzRUFBRDtBQUNBLG9CQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFEYjtBQUVBLHFCQUFPLEVBQUVGLElBQUksQ0FBQ0csT0FGZDtBQUdBLGtDQUFvQixFQUFFOUIsY0FIdEI7QUFJQSx3QkFBVSxFQUFFLG9CQUFDK0IsV0FBRDtBQUFBLHVCQUFlekMsUUFBTyxDQUFDeUMsV0FBRCxDQUF0QjtBQUFBLGVBSlo7QUFLQSxrQkFBSSxFQUFFSixJQUFJLENBQUNLLElBTFgsQ0FLZ0I7QUFMaEI7QUFNQSxxQkFBTyxFQUFFTCxJQUFJLENBQUNNLE9BTmQ7QUFPQSxxQkFBTyxFQUFFTixJQUFJLENBQUNPLFdBUGQ7QUFRQSx1QkFBUyxFQUFFUCxJQUFJLENBQUNRLFNBUmhCO0FBU1c7QUFDWCwwQkFBWSxFQUFFLHdIQVZkO0FBV0EsbUJBQUssRUFBRVIsSUFBSSxDQUFDUyxLQVhaO0FBWUEsd0JBQVUsRUFBRSxZQVpaO0FBYUEsc0JBQVEsRUFBRVQsSUFBSSxDQUFDVSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCVixJQUFJLENBQUNVLFFBQUwsQ0FBY0MsU0FBdkMsR0FBbUQsUUFiN0Q7QUFjQSx5QkFBVyxFQUFFWCxJQUFJLENBQUNVLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUJWLElBQUksQ0FBQ1UsUUFBTCxDQUFjRSxRQUF2QyxHQUFrRCxRQWQvRCxDQWN3RTtBQWR4RTtBQWVBLG9CQUFNLEVBQUVaLElBQUksQ0FBQ1UsUUFBTCxLQUFrQixJQUFsQixHQUF5QlYsSUFBSSxDQUFDVSxRQUFMLENBQWNSLEVBQXZDLEdBQTJDLFFBZm5EO0FBZ0JBLHNCQUFRLEVBQUVGLElBQUksQ0FBQ2EsUUFoQmY7QUFpQkEsa0JBQUksRUFBRWIsSUFBSSxDQUFDYztBQWpCWCxlQVNLYixLQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFk7QUFBQSxXQUFoQixDQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJFSDtBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FoTndCakUsSTtVQUVMRSxzRDs7O01BRktGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjA5ZWExY2E2ODFkNjEzY2E4YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXEsQ3JlYXRlcmVsYXRpb25yZXEsTm90aWZpY2F0aW9ucmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLElucHV0TGFiZWwsU2VsZWN0LE1lbnVJdGVtLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9MZWFkZXJib2FyZCc7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHsgQXJyb3dCYWNrSW9zLCBBcnJvd0ZvcndhcmRJb3MsIEZvcm1hdFF1b3RlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgVGl0bGVEaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6OTAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBTaG9ydERpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjUwcHg7XHJcbndpZHRoOjUwMHB4O1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcnNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG53aWR0aDo1MDBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm92ZXJmbG93LXg6aGlkZGVuO1xyXG5vdmVyZmxvdy15OmhpZGRlbjtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwcHg7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4zcztcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCIjZWYyMzNjXCIgOlwiI2NjZGJmZFwifTtcclxuY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCJ3aGl0ZVwiIDpcImJsYWNrXCJ9O1xyXG5mbGV4LXNocmluazowO1xyXG5gXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5jb2xvcjojZDkwNDI5O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6LTE1cHg7XHJcbnRvcDo1MCU7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kZXJIb2xkZXIgPSBzdHlsZWQoSWNvbmhvbGRlcilgXHJcbnJpZ2h0Oi0xMDBweDtcclxuYFxyXG4vL2ZsZXgtc2hyaW5rIGt1dHVsYXLEsW4gYmVsaXJsZW5lbiBib3l1dHRhbiBhxZ9hZ8SxIGlubWVtZXNpbmkgc2FnbMSxeW9yXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe215ZGF0YX0pe1xyXG4gICBcclxuICAgIGNvbnN0IHtib3R0b219PXVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVGFyaWg6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXpheTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBGaXppazp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCaXlvbG9qaTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICDDh2V2cmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRWRlYml5YXQ6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgS29udTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBEaWZmZXJlbnQ6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc0RpZmZlcmVudDp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtsaXN0LHNldGxpc3RdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcblxyXG4gICAgICAgIC8vVE9ETyBNT1ZFIFRIxLBTIFRPIExBWU9VVCBGxLBMRVxyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBpZighc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICBcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJvdHRvbSlcclxuICAgICAgICBzZXRvcmRlcihteWRhdGEubGVuZ3RoKzEwKTtcclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcblxyXG4gICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgTXV0YXRlZFtrZXldLnNlbGVjdGVkPWZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgICAgTXV0YXRlZFtrZXluYW1lXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICBzZXRzZWxlY3Rpb25saXN0KE11dGF0ZWQpO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7bGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzpcImhpZGRlblwifX0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lciA/IDxTcGlubmVyPjwvU3Bpbm5lcj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IGxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U2hvd2ZvbGxvd2VyIHNldGxpc3Q9eygpPT5zZXRsaXN0KFtdKX0gbGlzdD17bGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwiLHBhZGRpbmdUb3A6XCIxMHB4XCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFja0lvcyBzdHlsZT17e2NvbG9yOlwiI2Q5MDQyOVwiLGZvbnRTaXplOlwiMjBweFwifX0+PC9BcnJvd0JhY2tJb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY29uZGVySG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zIHN0eWxlPXt7Y29sb3I6XCIjZDkwNDI5XCIsZm9udFNpemU6XCIyMHB4XCJ9fT48L0Fycm93Rm9yd2FyZElvcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWNvbmRlckhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25saXN0KS5tYXAoKGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJveGVzIHNlbGVjdGVkPXtzZWxlY3Rpb25saXN0W2l0ZW1dLnNlbGVjdGVkfSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGVyKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJveGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyc2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvcnREaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5sZW5ndGggJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0uUmVhZGxhdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwubGFzdG5hbWUgOiBcIm5vdHlldFwifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuaWQ6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleGRpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qPFNlY3Rpb25wYXJ0PlxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIixtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5Hw7ZuZGVyaSBUw7xyw7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3VzZXN0eWxlcy5yb290fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUYXJpaFwiPlRhcmloPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJpeW9sb2ppXCI+VGFyaWg8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5TxLFyYWxhbWEgw5Zsw6fDvHTDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJMaWtlXCI+QmXEn2VuaSBTYXnEsXPEsTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRhdGVcIj5Zw7xrbGVubWUgVGFyaWhpPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJldHdlZXRcIj5SZXR3ZWV0IFNhecSxc8SxPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgPEJ1dHRvbiBlbmRJY29uPXs8U2VhcmhJY29uPjwvU2VhcmhJY29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+QXJhPC9CdXR0b24+XHJcbjwvZGl2PlxyXG48L1NlY3Rpb25wYXJ0PlxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=