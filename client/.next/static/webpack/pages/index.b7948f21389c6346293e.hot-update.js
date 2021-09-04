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
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;"]);
_c = Flexdiv;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__TitleDiv",
  componentId: "sc-14bmh8h-1"
})(["width:100%;padding:10px;height:300px;background-image:url(/way.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c2 = TitleDiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-2"
})([""]);
_c3 = ContentDiv;
var ShortDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ShortDiv",
  componentId: "sc-14bmh8h-3"
})(["position:sticky;top:60px;height:50px;max-width:650px;width:100%;margin:auto;margin-bottom:10px;overflow-x:hidden;background-color:white;z-index:120;"]);
var InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:space-around;transition-duration:0.5s;position:relative;right:", ";"], function (_ref) {
  var slidevalue = _ref.slidevalue;
  return slidevalue;
});
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
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;color:red;align-items:center;position:absolute;padding:6px;height:100%;background-color:rgb(46,196,182,1);cursor:pointer;z-index:150;left:", ";top:50%;font-size:20px;transition-duration:0.1s;transform:translateY(-50%);right:", ";&:hover{background-color:#d90429;}"], function (_ref4) {
  var leftvalue = _ref4.leftvalue;
  return leftvalue;
}, function (_ref5) {
  var rightvalue = _ref5.rightvalue;
  return rightvalue;
}); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        paddingLeft: "100px"
      },
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
            lineNumber: 237,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
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
        lineNumber: 241,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            paddingTop: "20px",
            width: "100%",
            paddingRight: "50px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px"
            },
            children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
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
              lineNumber: 278,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 234,
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

_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "TitleDiv");
$RefreshReg$(_c3, "ContentDiv");
$RefreshReg$(_c4, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJCaXlvbG9zIiwiQml5b2xvanMiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInNlbGVjdGVka2V5Iiwic2V0c2VsZWN0ZWRrZXkiLCJsaXN0IiwiYXR0cmlidXRlIiwid2luZG93bGlzdCIsInNldHdpbmRvd2xpc3QiLCJzdG9wcmVxdWVzdGluZyIsInNldHN0b3ByZXEiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJwYWlnbmF0aW9uIiwiY2F0ZWdvcnkiLCJzZXRlcnJtc2ciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwiU2V0c2xpZGV2YWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJ0eXBlb2ZyZWxhdGlvbiIsInVzZXJpZCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiU2VsZWN0aW9uaGFuZGVyIiwiTXV0YXRlZCIsImtleSIsIlNob3dmb2xsb3dlcnMiLCJzdGF0ZWxpc3QiLCJ0eXBlIiwiTXV0YXRlZHdpbmRvdyIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJwcmV2IiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxZQUFZLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBRTtBQUNKLHlCQUFxQjtBQUNuQkMsV0FBSyxFQUFFO0FBRFk7QUFEakI7QUFEc0IsQ0FBRCxDQUEvQjtBQVFBLElBQU1DLE9BQU8sR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrRUFBYjtLQUFNRixPO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlKQUFkO01BQU1DLFE7QUFVTixJQUFNQyxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBaEI7TUFBTUUsVTtBQUdOLElBQU1DLFFBQVEsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtB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RUFBRVQsSUFBSSxDQUFDVSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCVixJQUFJLENBQUNVLFFBQUwsQ0FBY0MsU0FBdkMsR0FBbUQsUUFiN0Q7QUFjQSx5QkFBVyxFQUFFWCxJQUFJLENBQUNVLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUJWLElBQUksQ0FBQ1UsUUFBTCxDQUFjRSxRQUF2QyxHQUFrRCxRQWQvRCxDQWN3RTtBQWR4RTtBQWVBLG9CQUFNLEVBQUVaLElBQUksQ0FBQ1UsUUFBTCxLQUFrQixJQUFsQixHQUF5QlYsSUFBSSxDQUFDVSxRQUFMLENBQWNSLEVBQXZDLEdBQTJDLFFBZm5EO0FBZ0JBLHNCQUFRLEVBQUVGLElBQUksQ0FBQ2EsUUFoQmY7QUFpQkEsa0JBQUksRUFBRWIsSUFBSSxDQUFDYztBQWpCWCxlQVNLYixLQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFk7QUFBQSxXQUFoQixDQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0VIO0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXhPd0I3RSxJO1VBRUxFLHFEOzs7TUFGS0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNzk0OGYyMTM4OWM2MzQ2MjkzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcSxDcmVhdGVyZWxhdGlvbnJlcSxOb3RpZmljYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBTaG93Zm9sbG93ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9TaG93Zm9sbGVyXCI7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHsgQXJyb3dCYWNrSW9zLCBBcnJvd0ZvcndhcmRJb3MsIEZvcm1hdFF1b3RlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgVGl0bGVEaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC93YXkuanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5gXHJcblxyXG5jb25zdCBTaG9ydERpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDo2MHB4O1xyXG5oZWlnaHQ6NTBweDtcclxubWF4LXdpZHRoOjY1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5vdmVyZmxvdy14OmhpZGRlbjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDoxMjA7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5yaWdodDokeyh7c2xpZGV2YWx1ZX0pPT5zbGlkZXZhbHVlfTtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1sZWZ0OjVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtzZWxlY3RlZH0pPT5zZWxlY3RlZCA/IFwiI2VmMjMzY1wiIDpcIiNjZWQ0ZGFcIn07XHJcbmNvbG9yOiR7KHtzZWxlY3RlZH0pPT5zZWxlY3RlZCA/IFwid2hpdGVcIiA6XCJibGFja1wifTtcclxuZmxleC1zaHJpbms6MDtcclxuYFxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuY29sb3I6cmVkO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nOjZweDtcclxuaGVpZ2h0OjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiKDQ2LDE5NiwxODIsMSk7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG56LWluZGV4OjE1MDtcclxubGVmdDokeyh7bGVmdHZhbHVlfSk9PmxlZnR2YWx1ZX07XHJcbnRvcDo1MCU7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMXM7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG5yaWdodDokeyh7cmlnaHR2YWx1ZX0pPT5yaWdodHZhbHVlfTtcclxuJjpob3ZlciB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNkOTA0Mjk7XHJcbn1cclxuYFxyXG4vL2ZsZXgtc2hyaW5rIGt1dHVsYXLEsW4gYmVsaXJsZW5lbiBib3l1dHRhbiBhxZ9hZ8SxIGlubWVtZXNpbmkgc2FnbMSxeW9yXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe215ZGF0YX0pe1xyXG4gICBcclxuICAgIGNvbnN0IHtib3R0b219PXVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3QgW3NsaWRldmFsdWUsc2V0c2xpZGV2YWx1ZV09dXNlU3RhdGUoLTMwKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShteWRhdGEpO1xyXG4gICAgY29uc3QgW29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ubGlzdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgRmVsc2VmZTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBNZXRhZml6aWs6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXpheTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCaXlvbG9qaTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSwgICBcclxuICAgICAgICBCaXlvbG9zOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIEJpeW9sb2pzOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LCAgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRrZXksc2V0c2VsZWN0ZWRrZXldPXVzZVN0YXRlKFwiVXpheVwiKTtcclxuICAgIGNvbnN0IFt3aW5kb3dsaXN0LHNldHdpbmRvd2xpc3RdPXVzZVN0YXRlKHtcclxuICAgICAgICBsaXN0OltdLFxyXG4gICAgICAgIGF0dHJpYnV0ZTpcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbc3RvcHJlcXVlc3Rpbmcsc2V0c3RvcHJlcV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFhXCIpO1xyXG4gICAgICAgIGlmKCFzdG9wcmVxdWVzdGluZyAmJiBib3R0b20pe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlciwgXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBwYWlnbmF0aW9uOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTpzZWxlY3RlZGtleSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICBjb25zdCBSZXF1ZXN0YWdhaW49KGtleW5hbWUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBzZXRvcmRlcigxMCk7XHJcbiAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6a2V5bmFtZSxcclxuICAgICAgICAgICAgcGFpZ25hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBjb25zdCBTZXRzbGlkZXZhbHVlPSh2YWx1ZSk9PntcclxuXHJcbiAgICAgICBpZih2YWx1ZSA9PSBcIkJhY2tcIiAmJiBzbGlkZXZhbHVlID49IDIwKXtcclxuICAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlLTIyMClcclxuICAgICAgIH0gXHJcbiAgICAgICBlbHNlIGlmKHZhbHVlID09IFwiZm9yd2FyZFwiICYmIHNsaWRldmFsdWUgPCA2MDApe1xyXG4gICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZSsyMjApXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJvdHRvbSl7XHJcbiAgICAgICAgICAgIHNldG9yZGVyKGNvbnRlbnRkYXRhLmxlbmd0aCsxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbix1c2VyaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb24sXHJcbiAgICAgICAgICAgIFVzZXJJZG9mY29udGVudDp1c2VyaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGVyID0gKGtleW5hbWUpID0+e1xyXG5cclxuICAgICAgIHNldGNvbnRlbnRkYXRhKFtdKTtcclxuICAgICAgIGNvbnN0IE11dGF0ZWQgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcblxyXG4gICAgICAgZm9yIChjb25zdCBrZXkgaW4gTXV0YXRlZCkge1xyXG4gICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgIH1cclxuICAgICAgIE11dGF0ZWRba2V5bmFtZV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgUmVxdWVzdGFnYWluKGtleW5hbWUpO1xyXG4gICAgICAgc2V0c2VsZWN0aW9ubGlzdChNdXRhdGVkKTtcclxuICAgICAgIHNldHNlbGVjdGVka2V5KGtleW5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2hvd2ZvbGxvd2Vycz0oc3RhdGVsaXN0LHR5cGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgTXV0YXRlZHdpbmRvdz17Li4ud2luZG93bGlzdH07XHJcbiAgICAgICAgTXV0YXRlZHdpbmRvdy5saXN0ID0gc3RhdGVsaXN0O1xyXG4gICAgICAgIE11dGF0ZWR3aW5kb3cuYXR0cmlidXRlID0gdHlwZTtcclxuICAgICAgICBzZXR3aW5kb3dsaXN0KE11dGF0ZWR3aW5kb3cpO1xyXG5cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OmAke3dpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzp3aW5kb3dsaXN0Lmxpc3QubGVuZ3RoID4gMCA/IFwiaGlkZGVuXCI6IFwidmlzaWJsZVwifX0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMDBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PEZvcm1hdFF1b3RlIHN0eWxlPXt7dHJhbnNmb3JtOlwicm90YXRlWSgxODBkZWcpXCJ9fT48L0Zvcm1hdFF1b3RlPiBCaWwga2kgbmV6YWtldCBiYcWfa2FzxLFuxLEgcmFoYXRzxLF6IGV0bWVtZWsgZGXEn2lsLCBhc8SxbCBiYcWfa2FzxLEgacOnaW4gcmFoYXRzxLF6bMSxayBkdXltYWt0xLFyLjxGb3JtYXRRdW90ZT48L0Zvcm1hdFF1b3RlPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAge3dpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTaG93Zm9sbG93ZXIgc2V0bGlzdD17KCk9PnNldHdpbmRvd2xpc3QocHJldj0+e3JldHVybiB7Li4ucHJldixsaXN0OltdfX0pfSBhdHRyaWJ1dGU9e3dpbmRvd2xpc3QuYXR0cmlidXRlfSBsaXN0PXt3aW5kb3dsaXN0Lmxpc3R9PjwvU2hvd2ZvbGxvd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdiBzdHlsZT17e21heFdpZHRoOlwiNjUwcHhcIixwYWRkaW5nVG9wOlwiMjBweFwiLHdpZHRoOlwiMTAwJVwiLHBhZGRpbmdSaWdodDpcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiQmFja1wiKX0gbGVmdHZhbHVlPVwiMFwiIHJpZ2h0dmFsdWU9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBvbkNsaWNrPXsoKT0+U2V0c2xpZGV2YWx1ZShcImZvcndhcmRcIil9IGxlZnR2YWx1ZT17XCJcIn0gcmlnaHR2YWx1ZT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcnNob3J0RGl2IHNsaWRldmFsdWU9e3NsaWRldmFsdWUrXCJweFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9ubGlzdCkubWFwKChpdGVtKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uYm94ZXMgc2VsZWN0ZWQ9e3NlbGVjdGlvbmxpc3RbaXRlbV0uc2VsZWN0ZWR9IG9uQ2xpY2s9eygpPT5TZWxlY3Rpb25oYW5kZXIoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJveGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcnNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvcnREaXY+Ki99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsbWFyZ2luQm90dG9tOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0LHR5cGUpPT5TaG93Zm9sbG93ZXJzKHN0YXRlb2ZsaXN0LHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0uUmVhZGxhdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwubGFzdG5hbWUgOiBcIm5vdHlldFwifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuaWQ6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleGRpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qPFNlY3Rpb25wYXJ0PlxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIixtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5Hw7ZuZGVyaSBUw7xyw7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3VzZXN0eWxlcy5yb290fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUYXJpaFwiPlRhcmloPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJpeW9sb2ppXCI+VGFyaWg8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5TxLFyYWxhbWEgw5Zsw6fDvHTDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJMaWtlXCI+QmXEn2VuaSBTYXnEsXPEsTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRhdGVcIj5Zw7xrbGVubWUgVGFyaWhpPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJldHdlZXRcIj5SZXR3ZWV0IFNhecSxc8SxPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgPEJ1dHRvbiBlbmRJY29uPXs8U2VhcmhJY29uPjwvU2VhcmhJY29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+QXJhPC9CdXR0b24+XHJcbjwvZGl2PlxyXG48L1NlY3Rpb25wYXJ0PlxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=