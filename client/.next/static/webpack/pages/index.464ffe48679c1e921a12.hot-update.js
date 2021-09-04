webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Navigation/Navigation.js":
/*!****************************************************!*\
  !*** ./components/shared/Navigation/Navigation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Navigationtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigationtools */ "./components/shared/Navigation/Navigationtools.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation\\Navigation.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Spinner",
  componentId: "sc-9zri3r-0"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);
_c = Spinner;
var Navbarext = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Navbarext",
  componentId: "sc-9zri3r-1"
})(["position:fixed;top:0;left:0;width:100%;height:60px;padding:5px;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:200;"]);
_c2 = Navbarext;
var InnerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__InnerNavbar",
  componentId: "sc-9zri3r-2"
})(["position:relative;height:100%;margin:auto;display:flex;align-items:center;max-width:1100px;width:100%;justify-content:space-between;"]);
_c3 = InnerNavbar;
var Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-9zri3r-3"
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:2px;border-radius:50%;transition:0.3s;"], function (_ref) {
  var clicked = _ref.clicked;
  return clicked ? "" : "";
});
_c4 = Iconholder;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-9zri3r-4"
})(["position:relative;display:", ";position:relative;@media (max-width:850px){display:", ";}"], function (_ref2) {
  var flex = _ref2.flex;
  return flex;
}, function (_ref3) {
  var flex2 = _ref3.flex2;
  return flex2;
});
_c5 = InputHolder;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "Navigation__Input",
  componentId: "sc-9zri3r-5"
})(["padding:6px;padding-left:10px;border:none;width:100%;outline:none;border-radius:3px;background-color:#E0E0E0;color:black;::placeholder{color:black;}"]);
_c6 = Input;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-9zri3r-6"
})(["border-top-right-radius:4px;border-bottom-right-radius:4px;border-left:1px solid white;color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
_c7 = Iconsecure;
var Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Optionwindow",
  componentId: "sc-9zri3r-7"
})(["position:absolute;top:60px;height:", ";overflow-y:scroll;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;"], function (_ref4) {
  var fornotify = _ref4.fornotify;
  return fornotify ? "400px" : "";
});
_c8 = Optionwindow;
var Inneroption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Inneroption",
  componentId: "sc-9zri3r-8"
})([""]);
_c9 = Inneroption;
var Searchdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Searchdiv",
  componentId: "sc-9zri3r-9"
})(["padding:10px;position:absolute;top:60px;left:-55px;width:300px;height:300px;background-color:white;overflow:auto;border-radius:10px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;&:before{position:absolute;left:50px;top:0;}&::-webkit-scrollbar{width:30px;}&::-webkit-scrollbar:vertical{width:5px;}&::-webkit-scrollbar:horizontal{height:12px;}&::-webkit-scrollbar-thumb{fontsize:10px;background-color:rgba(0,0,0,.5);border-radius:10px;}"]);
_c10 = Searchdiv;
var Searchelements = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navigation__Searchelements",
  componentId: "sc-9zri3r-10"
})(["display:flex;border-radius:5px;padding:10px;align-items:center;margin-bottom:15px;&:hover{cursor:pointer;background-color:#e63946;color:white;}"]); //ToDo 

_c11 = Searchelements;
function Navigation(_ref5) {
  _s();

  var _this = this;

  var Data = _ref5.Data,
      Count = _ref5.Count,
      Reloadfunc = _ref5.Reloadfunc,
      Update = _ref5.Update;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]),
      logged = _useContext.logged,
      spinner = _useContext.spinner,
      userdata = _useContext.userdata;

  var _useClickoutsie = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      ref = _useClickoutsie.ref,
      visible = _useClickoutsie.visible,
      setvisible = _useClickoutsie.setvisible;

  var _useClickoutsie2 = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      ref2 = _useClickoutsie2.ref,
      visible2 = _useClickoutsie2.visible,
      setvisible2 = _useClickoutsie2.setvisible; //burada değişken isimi değiştirerek kullanabilrsin


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      inputvalue = _useState[0],
      setinputvalue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      usersforsearch = _useState2[0],
      setusersforsearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      searchactive = _useState3[0],
      setsearchactive = _useState3[1];

  var Myref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      ordernumber = _useState4[0],
      setordernumber = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      Iconumber = _useState5[0],
      setıconnumber = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    1: {
      className: "fas fa-plus",
      onoff: false,
      lineheight: '36px',
      "short": "plus"
    },
    2: {
      className: "fas fa-bell",
      onoff: false,
      lineheight: '33px',
      "short": "bell",
      Oncerequested: false
    },
    3: {
      className: "fas fa-sort-down",
      onoff: false,
      lineheight: '30px',
      "short": "down"
    }
  }),
      Iconobject = _useState6[0],
      setIconobject = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setsearchactive(true);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Getusersforsearchbar"])({
      inputvalue: inputvalue,
      setusers: setusersforsearch,
      setactive: setsearchactive
    });
  }, [inputvalue]);

  var ScrolltoBottom = function ScrolltoBottom() {
    if (Myref.current.scrollTop + Myref.current.offsetHeight >= Myref.current.scrollHeight) {
      Reloadfunc(ordernumber + Data.length);
    }
  };

  var Changehandler = function Changehandler(e) {
    setvisible2(true);
    setinputvalue(e.target.value);
  };

  var Iconselect = function Iconselect(iconnumber) {
    var myobject = _objectSpread({}, Iconobject);

    Object.keys(myobject).forEach(function (key) {
      if (iconnumber !== key) {
        myobject[key].onoff = false;
      }
    });

    if (myobject[iconnumber].onoff) {
      myobject[iconnumber].onoff = false;
      setıconnumber(0);
    } else {
      myobject[iconnumber].onoff = true;
      setıconnumber(iconnumber);
    }

    setIconobject(myobject);
    setvisible(true);
  }; //ToDo rewrite this code


  var Iconclick = function Iconclick(item, shortname) {
    //burada sadece bilidirim kutusu kapalıyken istek atıyoruz 2 kez degil
    if (shortname == "bell" && Iconobject[item].onoff == false) {
      Update();
    }

    Iconselect(item);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navbarext, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerNavbar, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex: "block",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              alignItems: "center",
              cursor: "pointer"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
              profile: "https://evrimagaci.org/public/images/logo/v3.svg?v=1",
              width: "40px",
              height: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "10px",
                paddingRight: "10px",
                borderRight: "1px solid black"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Evrim A\u011Fac\u0131"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "10px",
                display: "flex",
                alignItems: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Home"], {
                style: {
                  fontSize: "30px",
                  color: "#c9184a"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        ref: ref2,
        flex2: "none",
        flex: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          value: inputvalue,
          onChange: Changehandler,
          placeholder: "Ara"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, this), inputvalue.length <= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            right: "15px",
            top: "0"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
          className: "fas fa-times"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 136
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 48
          }, this) : usersforsearch.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchelements, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
                  profile: "/black.jpg",
                  width: "45px",
                  height: "45px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingLeft: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    fontWeight: "600"
                  },
                  children: item.firstname + " " + item.lastname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 49
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: "lightgray",
                    fontSize: "15px"
                  },
                  children: "\u0130n\u015Faat M\xFChendisi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 49
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 21
      }, this) : !logged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            variant: "contained",
            style: {
              marginRight: "10px",
              textTransform: "capitalize"
            },
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["AccountCircle"], {
              style: {
                fontSize: "25px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "contained",
          style: {
            textTransform: "capitalize"
          },
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Assignment"], {
            style: {
              color: "white",
              borderRadius: "50%",
              fontSize: "25px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 20
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex2: "flex",
        ref: ref,
        flex: "flex",
        children: [Object.keys(Iconobject).map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
            clicked: Iconobject[item].onoff,
            onClick: function onClick() {
              return Iconclick(item, Iconobject[item]["short"]);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: "block",
                backgroundColor: "#F0F0F0",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                textAlign: "center",
                lineHeight: Iconobject[item].lineheight
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: Iconobject[item].className,
                style: {
                  color: Count > 0 && Iconobject[item]["short"] == "bell" ? "#d90429" : ""
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 45
              }, _this), Iconobject[item]["short"] == "bell" && Count > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  position: "absolute",
                  fontSize: "12px",
                  top: "-5px",
                  right: "-5px",
                  width: "20px",
                  display: "block",
                  height: "20px",
                  textAlign: "center",
                  lineHeight: "20px",
                  backgroundColor: "#d90429",
                  color: "white",
                  borderRadius: "50%"
                },
                children: Count
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 37
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/profile/[username]",
          as: "/profile/".concat(userdata.UserId),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            width: "35px",
            height: "35px",
            profile: "/car.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 26
        }, this), Iconumber !== 0 && visible == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
          onScroll: ScrolltoBottom,
          ref: Myref,
          fornotify: Iconobject["2"].onoff,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inneroption, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigationtools__WEBPACK_IMPORTED_MODULE_5__["default"], {
              Navdata: Data,
              optnumber: Iconumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 9
  }, this);
}

_s(Navigation, "2g/8QfZTdQmkIgp22NujRTcTl7Y=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c12 = Navigation;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Spinner");
$RefreshReg$(_c2, "Navbarext");
$RefreshReg$(_c3, "InnerNavbar");
$RefreshReg$(_c4, "Iconholder");
$RefreshReg$(_c5, "InputHolder");
$RefreshReg$(_c6, "Input");
$RefreshReg$(_c7, "Iconsecure");
$RefreshReg$(_c8, "Optionwindow");
$RefreshReg$(_c9, "Inneroption");
$RefreshReg$(_c10, "Searchdiv");
$RefreshReg$(_c11, "Searchelements");
$RefreshReg$(_c12, "Navigation");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwidXNlRWZmZWN0IiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJzZXR1c2VycyIsInNldGFjdGl2ZSIsIlNjcm9sbHRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxlbmd0aCIsIkNoYW5nZWhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJJY29uc2VsZWN0IiwiaWNvbm51bWJlciIsIm15b2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJJY29uY2xpY2siLCJpdGVtIiwic2hvcnRuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyUmlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwibWFwIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtYXJnaW5SaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0VKLFNBREYsQ0FBYjtLQUFNRSxPO0FBY04sSUFBTUcsU0FBUyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtJQUFmO01BQU1DLFM7QUFXTixJQUFNQyxXQUFXLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNElBQWpCO01BQU1FLFc7QUFZTixJQUFNQyxVQUFVLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0lBSUc7QUFBQSxNQUFFSSxPQUFGLFFBQUVBLE9BQUY7QUFB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RTtBQUFBLGlDQUNJLHFFQUFDLFdBQUQ7QUFBQSxtQ0FDSSxxRUFBQyx3REFBRDtBQUFVLHFCQUFPLEVBQUU5QixJQUFuQjtBQUF5Qix1QkFBUyxFQUFFMkI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEdBS2tCLElBN0IxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0dIOztHQWpOdUI1QixVO1VBSWFVLDJELEVBQzBCQSwyRDs7O09BTHZDVixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2NGZmZTQ4Njc5YzFlOTIxYTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ29udGV4dCwgdXNlRWZmZWN0ICwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTmF2dG9vbHMgZnJvbSBcIi4vTmF2aWdhdGlvbnRvb2xzXCI7XHJcbmltcG9ydCB1c2VDbGlja291dHNpZSBmcm9tICcuLi8uLi8uLi9ob29rcy9DbGlrY291dGlzZGUnO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0dldHVzZXJzZm9yc2VhcmNoYmFyfSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIEhvbWUsQXNzaWdubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBOYXZiYXJleHQ9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo2MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDoyMDA7XHJcbmBcclxuY29uc3QgSW5uZXJOYXZiYXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1heC13aWR0aDoxMTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtjbGlja2VkfSk9PmNsaWNrZWQgPyBcIlwiIDogXCJcIn07XHJcbnBhZGRpbmc6MnB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTokeyh7ZmxleH0pPT5mbGV4fTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjg1MHB4KXtcclxuICAgIGRpc3BsYXk6JHsoe2ZsZXgyfSk9PmZsZXgyfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxuYm9yZGVyOm5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I0UwRTBFMDtcclxuY29sb3I6YmxhY2s7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtcclxuYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHdoaXRlO1xyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDokeyh7Zm9ybm90aWZ5fSk9PmZvcm5vdGlmeSA/IFwiNDAwcHhcIiA6IFwiXCJ9O1xyXG5vdmVyZmxvdy15OnNjcm9sbDtcclxucGFkZGluZzo4cHg7XHJcbnJpZ2h0OjBweDtcclxud2lkdGg6MzUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcblxyXG5gXHJcbmNvbnN0IElubmVyb3B0aW9uPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmxlZnQ6LTU1cHg7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbm92ZXJmbG93OmF1dG87XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG4mOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTBweDtcclxuICAgIHRvcDowO1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZm9udHNpemU6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaGVsZW1lbnRzPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbiY6aG92ZXIge1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjojZTYzOTQ2O1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5gXHJcblxyXG4vL1RvRG8gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe0RhdGEsQ291bnQsUmVsb2FkZnVuYyxVcGRhdGV9KXtcclxuIFxyXG5cclxuICAgIGNvbnN0IHtsb2dnZWQsc3Bpbm5lcix1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICBjb25zdCB7cmVmOnJlZjIsdmlzaWJsZTp2aXNpYmxlMixzZXR2aXNpYmxlOnNldHZpc2libGUyfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICAvL2J1cmFkYSBkZcSfacWfa2VuIGlzaW1pIGRlxJ9pxZ90aXJlcmVrIGt1bGxhbmFiaWxyc2luXHJcbiAgICBjb25zdCBbaW5wdXR2YWx1ZSxzZXRpbnB1dHZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJzZm9yc2VhcmNoLHNldHVzZXJzZm9yc2VhcmNoXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoYWN0aXZlLHNldHNlYXJjaGFjdGl2ZV09dXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCAgTXlyZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtvcmRlcm51bWJlcixzZXRvcmRlcm51bWJlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW0ljb251bWJlcixzZXTEsWNvbm51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29ub2JqZWN0LHNldEljb25vYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzZweCcsXHJcbiAgICAgICAgICBzaG9ydDpcInBsdXNcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAyOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1iZWxsXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMzcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJiZWxsXCIsXHJcbiAgICAgICAgICBPbmNlcmVxdWVzdGVkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtc29ydC1kb3duXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMwcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJkb3duXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBzZXRzZWFyY2hhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgR2V0dXNlcnNmb3JzZWFyY2hiYXIoe1xyXG4gICAgICAgICAgIGlucHV0dmFsdWU6aW5wdXR2YWx1ZSxcclxuICAgICAgICAgICBzZXR1c2VyczpzZXR1c2Vyc2ZvcnNlYXJjaCxcclxuICAgICAgICAgICBzZXRhY3RpdmU6c2V0c2VhcmNoYWN0aXZlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbaW5wdXR2YWx1ZV0pXHJcblxyXG4gICAgY29uc3QgU2Nyb2xsdG9Cb3R0b209KCk9PntcclxuXHJcbiAgICAgICAgaWYoTXlyZWYuY3VycmVudC5zY3JvbGxUb3AgKyBNeXJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA+PSBNeXJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgICAgIFJlbG9hZGZ1bmMob3JkZXJudW1iZXIrRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IENoYW5nZWhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgIHNldHZpc2libGUyKHRydWUpO1xyXG4gICAgICAgICBzZXRpbnB1dHZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25zZWxlY3Q9KGljb25udW1iZXIpPT57XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IG15b2JqZWN0PXsuLi5JY29ub2JqZWN0fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobXlvYmplY3QpLmZvckVhY2goa2V5ID0+e1xyXG4gICAgICAgICAgICBpZihpY29ubnVtYmVyICE9PSBrZXkpe1xyXG4gICAgICAgICAgICAgICAgbXlvYmplY3Rba2V5XS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZil7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9dHJ1ZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoaWNvbm51bWJlcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHNldEljb25vYmplY3QobXlvYmplY3QpOyBcclxuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIFxyXG4gICAgLy9Ub0RvIHJld3JpdGUgdGhpcyBjb2RlXHJcblxyXG4gICAgY29uc3QgSWNvbmNsaWNrPShpdGVtLHNob3J0bmFtZSk9PntcclxuICAgICAgICAvL2J1cmFkYSBzYWRlY2UgYmlsaWRpcmltIGt1dHVzdSBrYXBhbMSxeWtlbiBpc3RlayBhdMSxeW9ydXogMiBrZXogZGVnaWxcclxuICAgICAgICBpZihzaG9ydG5hbWUgPT0gXCJiZWxsXCIgJiYgSWNvbm9iamVjdFtpdGVtXS5vbm9mZiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyZXh0PlxyXG4gICAgICAgICAgICA8SW5uZXJOYXZiYXI+ICAgXHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtcImJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvL3YzLnN2Zz92PTFcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLHBhZGRpbmdSaWdodDpcIjEwcHhcIixib3JkZXJSaWdodDpcIjFweCBzb2xpZCBibGFja1wifX0+PHNwYW4+RXZyaW0gQcSfYWPEsTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+PEhvbWUgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiNjOTE4NGFcIn19PjwvSG9tZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICByZWY9e3JlZjJ9IGZsZXgyPXtcIm5vbmVcIn0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXR2YWx1ZX0gb25DaGFuZ2U9e0NoYW5nZWhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiQXJhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoIDw9IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTVweFwiLHRvcDpcIjBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoID4gMCAmJiB2aXNpYmxlMiA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWN0aXZlID8gPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+PFNwaW5uZXI+PC9TcGlubmVyPjwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNmb3JzZWFyY2gubWFwKChpdGVtKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPFNlYXJjaGVsZW1lbnRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQ1cHhcIiBoZWlnaHQ9XCI0NXB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCI2MDBcIn19PntpdGVtLmZpcnN0bmFtZStcIiBcIitpdGVtLmxhc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImxpZ2h0Z3JheVwiLGZvbnRTaXplOlwiMTVweFwifX0+xLBuxZ9hYXQgTcO8aGVuZGlzaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZWxlbWVudHM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB7ICAhc3Bpbm5lciA/IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIWxvZ2dlZCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Zm9udFNpemU6XCIyNXB4XCJ9fT48L0FjY291bnRDaXJjbGU+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgR2lyacWfIFlhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiICBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QXNzaWdubWVudCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjI1cHhcIn19PjwvQXNzaWdubWVudD59IGNvbG9yPVwic2Vjb25kYXJ5XCI+S2F5xLF0IE9sPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJmbGV4XCJ9IHJlZj17cmVmfSBmbGV4PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEljb25vYmplY3QpLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBjbGlja2VkPXtJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmfSBvbkNsaWNrPXsoKT0+SWNvbmNsaWNrKGl0ZW0sSWNvbm9iamVjdFtpdGVtXS5zaG9ydCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIixiYWNrZ3JvdW5kQ29sb3I6XCIjRjBGMEYwXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6SWNvbm9iamVjdFtpdGVtXS5saW5laGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtJY29ub2JqZWN0W2l0ZW1dLmNsYXNzTmFtZX0gc3R5bGU9e3tjb2xvcjpDb3VudCA+IDAgJiYgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiA/IFwiI2Q5MDQyOVwiIDogXCJcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgJiYgQ291bnQgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGZvbnRTaXplOlwiMTJweFwiLHRvcDpcIi01cHhcIixyaWdodDpcIi01cHhcIix3aWR0aDpcIjIwcHhcIixkaXNwbGF5OlwiYmxvY2tcIixoZWlnaHQ6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjIwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwifX0+e0NvdW50fTwvc3Bhbj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcm5hbWVdXCIgYXM9e2AvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9XCIzNXB4XCIgaGVpZ2h0PVwiMzVweFwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbnVtYmVyICE9PSAwICYmIHZpc2libGUgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IG9uU2Nyb2xsPXtTY3JvbGx0b0JvdHRvbX0gcmVmPXtNeXJlZn0gZm9ybm90aWZ5PXtJY29ub2JqZWN0W1wiMlwiXS5vbm9mZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2dG9vbHMgTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9