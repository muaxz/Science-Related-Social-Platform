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
            width: "100%"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJJY29uaG9sZGVyIiwibGVmdHZhbHVlIiwicmlnaHR2YWx1ZSIsIkhvbWUiLCJteWRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInNldHNsaWRldmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJCaXlvbG9zIiwiQml5b2xvanMiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsInNlbGVjdGVka2V5Iiwic2V0c2VsZWN0ZWRrZXkiLCJsaXN0IiwiYXR0cmlidXRlIiwid2luZG93bGlzdCIsInNldHdpbmRvd2xpc3QiLCJzdG9wcmVxdWVzdGluZyIsInNldHN0b3ByZXEiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJwYWlnbmF0aW9uIiwiY2F0ZWdvcnkiLCJzZXRlcnJtc2ciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwiU2V0c2xpZGV2YWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwiY3JlYXRlcmVsYXRpb24iLCJwb3N0SWQiLCJ0eXBlb2ZyZWxhdGlvbiIsInVzZXJpZCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiU2VsZWN0aW9uaGFuZGVyIiwiTXV0YXRlZCIsImtleSIsIlNob3dmb2xsb3dlcnMiLCJzdGF0ZWxpc3QiLCJ0eXBlIiwiTXV0YXRlZHdpbmRvdyIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJwcmV2IiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxZQUFZLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBRTtBQUNKLHlCQUFxQjtBQUNuQkMsV0FBSyxFQUFFO0FBRFk7QUFEakI7QUFEc0IsQ0FBRCxDQUEvQjtBQVFBLElBQU1DLE9BQU8sR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrRUFBYjtLQUFNRixPO0FBTU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlKQUFkO01BQU1DLFE7QUFVTixJQUFNQyxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBaEI7TUFBTUUsVTtBQUdOLElBQU1DLFFBQVEsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw0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LElBQUksQ0FBQ1UsUUFBTCxDQUFjQyxTQUF2QyxHQUFtRCxRQWI3RDtBQWNBLHlCQUFXLEVBQUVYLElBQUksQ0FBQ1UsUUFBTCxLQUFrQixJQUFsQixHQUF5QlYsSUFBSSxDQUFDVSxRQUFMLENBQWNFLFFBQXZDLEdBQWtELFFBZC9ELENBY3dFO0FBZHhFO0FBZUEsb0JBQU0sRUFBRVosSUFBSSxDQUFDVSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCVixJQUFJLENBQUNVLFFBQUwsQ0FBY1IsRUFBdkMsR0FBMkMsUUFmbkQ7QUFnQkEsc0JBQVEsRUFBRUYsSUFBSSxDQUFDYSxRQWhCZjtBQWlCQSxrQkFBSSxFQUFFYixJQUFJLENBQUNjO0FBakJYLGVBU0tiLEtBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQUFBLFdBQWhCLENBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3RUg7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBeE93QjVFLEk7VUFFTEUscUQ7OztNQUZLRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiZGY2NDhmMzZlNzUyNTBhM2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgeyBBcnJvd0JhY2tJb3MsIEFycm93Rm9yd2FyZElvcywgRm9ybWF0UXVvdGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgJyYgLk11aVNlbGVjdC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEZsZXhkaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxubWF4LXdpZHRoOjEyNTBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBUaXRsZURpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL3dheS5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmNvbnN0IFNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDo1MHB4O1xyXG5tYXgtd2lkdGg6NjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbm92ZXJmbG93LXg6aGlkZGVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjEyMDtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJzaG9ydERpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxud2lkdGg6MTAwJTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnJpZ2h0OiR7KHtzbGlkZXZhbHVlfSk9PnNsaWRldmFsdWV9O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3Rpb25ib3hlcz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5wYWRkaW5nOjVweDtcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6NTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCIjZWYyMzNjXCIgOlwiI2NlZDRkYVwifTtcclxuY29sb3I6JHsoe3NlbGVjdGVkfSk9PnNlbGVjdGVkID8gXCJ3aGl0ZVwiIDpcImJsYWNrXCJ9O1xyXG5mbGV4LXNocmluazowO1xyXG5gXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5jb2xvcjpyZWQ7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnBhZGRpbmc6NnB4O1xyXG5oZWlnaHQ6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDYsMTk2LDE4MiwxKTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnotaW5kZXg6MTUwO1xyXG5sZWZ0OiR7KHtsZWZ0dmFsdWV9KT0+bGVmdHZhbHVlfTtcclxudG9wOjUwJTtcclxuZm9udC1zaXplOjIwcHg7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4xcztcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiR7KHtyaWdodHZhbHVlfSk9PnJpZ2h0dmFsdWV9O1xyXG4mOmhvdmVyIHtcclxuIGJhY2tncm91bmQtY29sb3I6I2Q5MDQyOTtcclxufVxyXG5gXHJcbi8vZmxleC1zaHJpbmsga3V0dWxhcsSxbiBiZWxpcmxlbmVuIGJveXV0dGFuIGHFn2FnxLEgaW5tZW1lc2luaSBzYWdsxLF5b3JcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7bXlkYXRhfSl7XHJcbiAgIFxyXG4gICAgY29uc3Qge2JvdHRvbX09dXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbc2xpZGV2YWx1ZSxzZXRzbGlkZXZhbHVlXT11c2VTdGF0ZSgtMzApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCBbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb25saXN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBGZWxzZWZlOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIE1ldGFmaXppazp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVemF5OntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJpeW9sb2ppOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIEJpeW9sb3M6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgXHJcbiAgICAgICAgQml5b2xvanM6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZGtleSxzZXRzZWxlY3RlZGtleV09dXNlU3RhdGUoXCJVemF5XCIpO1xyXG4gICAgY29uc3QgW3dpbmRvd2xpc3Qsc2V0d2luZG93bGlzdF09dXNlU3RhdGUoe1xyXG4gICAgICAgIGxpc3Q6W10sXHJcbiAgICAgICAgYXR0cmlidXRlOlwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhYWFcIik7XHJcbiAgICAgICAgaWYoIXN0b3ByZXF1ZXN0aW5nICYmIGJvdHRvbSl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyLCBcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHBhaWduYXRpb246dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OnNlbGVjdGVka2V5LFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbb3JkZXJdKVxyXG5cclxuICAgIGNvbnN0IFJlcXVlc3RhZ2Fpbj0oa2V5bmFtZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIHNldG9yZGVyKDEwKTtcclxuICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTprZXluYW1lLFxyXG4gICAgICAgICAgICBwYWlnbmF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGNvbnN0IFNldHNsaWRldmFsdWU9KHZhbHVlKT0+e1xyXG5cclxuICAgICAgIGlmKHZhbHVlID09IFwiQmFja1wiICYmIHNsaWRldmFsdWUgPj0gMjApe1xyXG4gICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUtMjIwKVxyXG4gICAgICAgfSBcclxuICAgICAgIGVsc2UgaWYodmFsdWUgPT0gXCJmb3J3YXJkXCIgJiYgc2xpZGV2YWx1ZSA8IDYwMCl7XHJcbiAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlKzIyMClcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoYm90dG9tKXtcclxuICAgICAgICAgICAgc2V0b3JkZXIoY29udGVudGRhdGEubGVuZ3RoKzEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kZXIgPSAoa2V5bmFtZSkgPT57XHJcblxyXG4gICAgICAgc2V0Y29udGVudGRhdGEoW10pO1xyXG4gICAgICAgY29uc3QgTXV0YXRlZCA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuXHJcbiAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgTXV0YXRlZFtrZXldLnNlbGVjdGVkPWZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgICAgTXV0YXRlZFtrZXluYW1lXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICBSZXF1ZXN0YWdhaW4oa2V5bmFtZSk7XHJcbiAgICAgICBzZXRzZWxlY3Rpb25saXN0KE11dGF0ZWQpO1xyXG4gICAgICAgc2V0c2VsZWN0ZWRrZXkoa2V5bmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTaG93Zm9sbG93ZXJzPShzdGF0ZWxpc3QsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBNdXRhdGVkd2luZG93PXsuLi53aW5kb3dsaXN0fTtcclxuICAgICAgICBNdXRhdGVkd2luZG93Lmxpc3QgPSBzdGF0ZWxpc3Q7XHJcbiAgICAgICAgTXV0YXRlZHdpbmRvdy5hdHRyaWJ1dGUgPSB0eXBlO1xyXG4gICAgICAgIHNldHdpbmRvd2xpc3QoTXV0YXRlZHdpbmRvdyk7XHJcblxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YCR7d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OndpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID8gXCJoaWRkZW5cIjogXCJ2aXNpYmxlXCJ9fT4gXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjEwMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48Rm9ybWF0UXVvdGUgc3R5bGU9e3t0cmFuc2Zvcm06XCJyb3RhdGVZKDE4MGRlZylcIn19PjwvRm9ybWF0UXVvdGU+IEJpbCBraSBuZXpha2V0IGJhxZ9rYXPEsW7EsSByYWhhdHPEsXogZXRtZW1layBkZcSfaWwsIGFzxLFsIGJhxZ9rYXPEsSBpw6dpbiByYWhhdHPEsXpsxLFrIGR1eW1ha3TEsXIuPEZvcm1hdFF1b3RlPjwvRm9ybWF0UXVvdGU+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICB7d2luZG93bGlzdC5saXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgPFNob3dmb2xsb3dlciBzZXRsaXN0PXsoKT0+c2V0d2luZG93bGlzdChwcmV2PT57cmV0dXJuIHsuLi5wcmV2LGxpc3Q6W119fSl9IGF0dHJpYnV0ZT17d2luZG93bGlzdC5hdHRyaWJ1dGV9IGxpc3Q9e3dpbmRvd2xpc3QubGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwiLHBhZGRpbmdUb3A6XCIyMHB4XCIsd2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxTaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBvbkNsaWNrPXsoKT0+U2V0c2xpZGV2YWx1ZShcIkJhY2tcIil9IGxlZnR2YWx1ZT1cIjBcIiByaWdodHZhbHVlPXtcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJmb3J3YXJkXCIpfSBsZWZ0dmFsdWU9e1wiXCJ9IHJpZ2h0dmFsdWU9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJzaG9ydERpdiBzbGlkZXZhbHVlPXtzbGlkZXZhbHVlK1wicHhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmxpc3QpLm1hcCgoaXRlbSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJveGVzIHNlbGVjdGVkPXtzZWxlY3Rpb25saXN0W2l0ZW1dLnNlbGVjdGVkfSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGVyKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25ib3hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJzaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3J0RGl2PiovfSBcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLG1hcmdpbkJvdHRvbTpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lciA/IDxTcGlubmVyPjwvU3Bpbm5lcj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCx0eXBlKT0+U2hvd2ZvbGxvd2VycyhzdGF0ZW9mbGlzdCx0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmlkOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhkaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4vKjxTZWN0aW9ucGFydD5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCIsbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+R8O2bmRlcmkgVMO8csO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXt1c2VzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVGFyaWhcIj5UYXJpaDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJCaXlvbG9qaVwiPlRhcmloPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+U8SxcmFsYW1hIMOWbMOnw7x0w7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTGlrZVwiPkJlxJ9lbmkgU2F5xLFzxLE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEYXRlXCI+WcO8a2xlbm1lIFRhcmloaTwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXR3ZWV0XCI+UmV0d2VldCBTYXnEsXPEsTwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuICAgIDxCdXR0b24gZW5kSWNvbj17PFNlYXJoSWNvbj48L1NlYXJoSWNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkFyYTwvQnV0dG9uPlxyXG48L2Rpdj5cclxuPC9TZWN0aW9ucGFydD5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9