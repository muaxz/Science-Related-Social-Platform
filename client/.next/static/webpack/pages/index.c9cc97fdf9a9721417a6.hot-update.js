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
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:2px;border-radius:50%;transition:0.3s;&:active{background-color:#bbdefb;}"], function (_ref) {
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
})(["padding:6px;padding-left:10px;padding-right:40px;border:none;width:100%;outline:none;border-radius:3px;background-color:#E0E0E0;color:black;::placeholder{color:black;}"]);
_c6 = Input;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-9zri3r-6"
})(["color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
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
    //Todo only input lenth
    if (!visible2) setinputvalue("");
    setsearchactive("");
  }, [visible2]);

  var Keyupfunction = function Keyupfunction() {
    console.log(inputvalue);

    if (inputvalue !== "") {
      setsearchactive("Loading");
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Getusersforsearchbar"])({
        inputvalue: inputvalue,
        setusers: setusersforsearch,
        setactive: setsearchactive
      });
    }
  };

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
  };

  var Iconclick = function Iconclick(item, shortname) {
    //burada sadece bilidirim kutusu kapalıyken istek atıyoruz 2 kez degil
    if (shortname == "bell" && Iconobject[item].onoff == false) {
      Update();
    }

    Iconselect(item);
  };

  var searchtype = "";

  if (searchactive == "Loading") {
    searchtype = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 108
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 20
    }, this);
  } else if (searchactive == "Nothing") {
    searchtype = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      },
      children: "Sonu\xE7 Bulunamad\u0131."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 20
    }, this);
  }

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
              lineNumber: 295,
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
                lineNumber: 296,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
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
                lineNumber: 297,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        ref: ref2,
        flex2: "none",
        flex: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          onKeyUp: Keyupfunction,
          value: inputvalue,
          onChange: Changehandler,
          placeholder: "Ara"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 21
        }, this), inputvalue.length <= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            right: "15px",
            top: "10px",
            width: "20px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return setvisible2(false);
          },
          style: {
            position: "absolute",
            right: "12px",
            top: "10px",
            width: "20px",
            cursor: "pointer"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-times"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: searchtype
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 59
          }, this) : usersforsearch.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchelements, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
                  profile: "/black.jpg",
                  width: "45px",
                  height: "45px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
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
                  lineNumber: 331,
                  columnNumber: 49
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: "lightgray",
                    fontSize: "15px"
                  },
                  children: "\u0130n\u015Faat M\xFChendisi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 49
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
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
              lineNumber: 350,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
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
            lineNumber: 354,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 348,
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
                lineNumber: 365,
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
                lineNumber: 368,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 37
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: {
            pathname: "/profile/".concat(userdata.UserId),
            query: {
              name: "Post"
            }
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            width: "35px",
            height: "35px",
            profile: "/car.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
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
              lineNumber: 389,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 9
  }, this);
}

_s(Navigation, "YI5eYIQa9+OjKh9/wbmWpdeGCKs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwidXNlRWZmZWN0IiwiS2V5dXBmdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsInNldHVzZXJzIiwic2V0YWN0aXZlIiwiU2Nyb2xsdG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiQ2hhbmdlaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkljb25zZWxlY3QiLCJpY29ubnVtYmVyIiwibXlvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkljb25jbGljayIsIml0ZW0iLCJzaG9ydG5hbWUiLCJzZWFyY2h0eXBlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJtYXAiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1hcmdpblJpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJwYXRobmFtZSIsIlVzZXJJZCIsInF1ZXJ5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQyxtRUFBSCxnRUFBZjtBQVNBLElBQU1DLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpUUFDRUosU0FERixDQUFiO0tBQU1FLE87QUFjTixJQUFNRyxTQUFTLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0lBQWY7TUFBTUMsUztBQVdOLElBQU1DLFdBQVcsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw0SUFBakI7TUFBTUUsVztBQVlOLElBQU1DLFVBQVUsR0FB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RStCLGNBQXhCO0FBQXdDLGFBQUcsRUFBRW5CLEtBQTdDO0FBQW9ELG1CQUFTLEVBQUVVLFVBQVUsQ0FBQyxHQUFELENBQVYsQ0FBZ0JILEtBQS9FO0FBQUEsaUNBQ0kscUVBQUMsV0FBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVUscUJBQU8sRUFBRTlCLElBQW5CO0FBQXlCLHVCQUFTLEVBQUUyQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsR0FLa0IsSUFoQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnSEg7O0dBMU91QjVCLFU7VUFJYVUsMkQsRUFDMEJBLDJEOzs7T0FMdkNWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzljYzk3ZmRmOWE5NzIxNDE3YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXJ9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSwgSG9tZSxBc3NpZ25tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjIwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwiXCIgOiBcIlwifTtcclxucGFkZGluZzoycHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2JiZGVmYjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTokeyh7ZmxleH0pPT5mbGV4fTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjg1MHB4KXtcclxuICAgIGRpc3BsYXk6JHsoe2ZsZXgyfSk9PmZsZXgyfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxucGFkZGluZy1yaWdodDo0MHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG5oZWlnaHQ6MTAwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxuaGVpZ2h0OiR7KHtmb3Jub3RpZnl9KT0+Zm9ybm90aWZ5ID8gXCI0MDBweFwiIDogXCJcIn07XHJcbm92ZXJmbG93LXk6c2Nyb2xsO1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuXHJcbmBcclxuY29uc3QgSW5uZXJvcHRpb249c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxubGVmdDotNTVweDtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxub3ZlcmZsb3c6YXV0bztcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbiY6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MHB4O1xyXG4gICAgdG9wOjA7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6MzBweDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4mOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBmb250c2l6ZToxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZWxlbWVudHM9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxucGFkZGluZzoxMHB4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuJjpob3ZlciB7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNlNjM5NDY7XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcbmBcclxuXHJcbi8vVG9EbyBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7RGF0YSxDb3VudCxSZWxvYWRmdW5jLFVwZGF0ZX0pe1xyXG4gXHJcblxyXG4gICAgY29uc3Qge2xvZ2dlZCxzcGlubmVyLHVzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWUoKTtcclxuICAgIGNvbnN0IHtyZWY6cmVmMix2aXNpYmxlOnZpc2libGUyLHNldHZpc2libGU6c2V0dmlzaWJsZTJ9ID0gdXNlQ2xpY2tvdXRzaWUoKTtcclxuICAgIC8vYnVyYWRhIGRlxJ9pxZ9rZW4gaXNpbWkgZGXEn2nFn3RpcmVyZWsga3VsbGFuYWJpbHJzaW5cclxuICAgIGNvbnN0IFtpbnB1dHZhbHVlLHNldGlucHV0dmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcnNmb3JzZWFyY2gsc2V0dXNlcnNmb3JzZWFyY2hdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWFyY2hhY3RpdmUsc2V0c2VhcmNoYWN0aXZlXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0ICBNeXJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW29yZGVybnVtYmVyLHNldG9yZGVybnVtYmVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdCBbSWNvbnVtYmVyLHNldMSxY29ubnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW0ljb25vYmplY3Qsc2V0SWNvbm9iamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgMTp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtcGx1c1wiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczNnB4JyxcclxuICAgICAgICAgIHNob3J0OlwicGx1c1wiXHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLWJlbGxcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzNweCcsXHJcbiAgICAgICAgICBzaG9ydDpcImJlbGxcIixcclxuICAgICAgICAgIE9uY2VyZXF1ZXN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1zb3J0LWRvd25cIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzBweCcsXHJcbiAgICAgICAgICBzaG9ydDpcImRvd25cIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL1RvZG8gb25seSBpbnB1dCBsZW50aFxyXG4gICAgICBpZighdmlzaWJsZTIpXHJcbiAgICAgIHNldGlucHV0dmFsdWUoXCJcIik7XHJcbiAgICAgIHNldHNlYXJjaGFjdGl2ZShcIlwiKTtcclxuXHJcbiAgICB9LFt2aXNpYmxlMl0pXHJcblxyXG4gICAgY29uc3QgS2V5dXBmdW5jdGlvbj0oKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGlucHV0dmFsdWUpXHJcbiAgICAgICBpZihpbnB1dHZhbHVlICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgc2V0c2VhcmNoYWN0aXZlKFwiTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgR2V0dXNlcnNmb3JzZWFyY2hiYXIoe1xyXG4gICAgICAgICAgICAgICAgaW5wdXR2YWx1ZTppbnB1dHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2V0dXNlcnM6c2V0dXNlcnNmb3JzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0c2VhcmNoYWN0aXZlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTY3JvbGx0b0JvdHRvbT0oKT0+e1xyXG5cclxuICAgICAgICBpZihNeXJlZi5jdXJyZW50LnNjcm9sbFRvcCArIE15cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ID49IE15cmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICAgICAgUmVsb2FkZnVuYyhvcmRlcm51bWJlcitEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDaGFuZ2VoYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICBzZXR2aXNpYmxlMih0cnVlKTtcclxuICAgICAgICAgc2V0aW5wdXR2YWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNsaWNrPShpdGVtLHNob3J0bmFtZSk9PntcclxuICAgICAgICAvL2J1cmFkYSBzYWRlY2UgYmlsaWRpcmltIGt1dHVzdSBrYXBhbMSxeWtlbiBpc3RlayBhdMSxeW9ydXogMiBrZXogZGVnaWxcclxuICAgICAgICBpZihzaG9ydG5hbWUgPT0gXCJiZWxsXCIgJiYgSWNvbm9iamVjdFtpdGVtXS5vbm9mZiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBzZWFyY2h0eXBlPVwiXCI7XHJcbiAgICBcclxuICAgIGlmKHNlYXJjaGFjdGl2ZSA9PSBcIkxvYWRpbmdcIil7XHJcbiAgICAgICAgc2VhcmNodHlwZT08ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT48U3Bpbm5lcj48L1NwaW5uZXI+PC9kaXY+IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWFyY2hhY3RpdmUgPT0gXCJOb3RoaW5nXCIpe1xyXG4gICAgICAgIHNlYXJjaHR5cGU9PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+U29udcOnIEJ1bHVuYW1hZMSxLjwvZGl2PiBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXJleHQ+XHJcbiAgICAgICAgICAgIDxJbm5lck5hdmJhcj4gICBcclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyIGZsZXg9e1wiYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGN1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiaHR0cHM6Ly9ldnJpbWFnYWNpLm9yZy9wdWJsaWMvaW1hZ2VzL2xvZ28vdjMuc3ZnP3Y9MVwiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsYm9yZGVyUmlnaHQ6XCIxcHggc29saWQgYmxhY2tcIn19PjxzcGFuPkV2cmltIEHEn2FjxLE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PjxIb21lIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjYzkxODRhXCJ9fT48L0hvbWU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgcmVmPXtyZWYyfSBmbGV4Mj17XCJub25lXCJ9IGZsZXg9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlVcD17S2V5dXBmdW5jdGlvbn0gdmFsdWU9e2lucHV0dmFsdWV9IG9uQ2hhbmdlPXtDaGFuZ2VoYW5kbGVyfSBwbGFjZWhvbGRlcj1cIkFyYVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA8PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjE1cHhcIix0b3A6XCIxMHB4XCIsd2lkdGg6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+c2V0dmlzaWJsZTIoZmFsc2UpfSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEycHhcIix0b3A6XCIxMHB4XCIsd2lkdGg6XCIyMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoID4gMCAmJiB2aXNpYmxlMiA9PSB0cnVlICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWN0aXZlLmxlbmd0aCA+IDAgPyA8UmVhY3QuRnJhZ21lbnQ+e3NlYXJjaHR5cGV9PC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2ZvcnNlYXJjaC5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8U2VhcmNoZWxlbWVudHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDVweFwiIGhlaWdodD1cIjQ1cHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcIjYwMFwifX0+e2l0ZW0uZmlyc3RuYW1lK1wiIFwiK2l0ZW0ubGFzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwibGlnaHRncmF5XCIsZm9udFNpemU6XCIxNXB4XCJ9fT7EsG7Fn2FhdCBNw7xoZW5kaXNpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hlbGVtZW50cz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIHsgICFzcGlubmVyID8gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAhbG9nZ2VkID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjEwcHhcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFjY291bnRDaXJjbGUgc3R5bGU9e3tmb250U2l6ZTpcIjI1cHhcIn19PjwvQWNjb3VudENpcmNsZT59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBc3NpZ25tZW50IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMjVweFwifX0+PC9Bc3NpZ25tZW50Pn0gY29sb3I9XCJzZWNvbmRhcnlcIj5LYXnEsXQgT2w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGZsZXgyPXtcImZsZXhcIn0gcmVmPXtyZWZ9IGZsZXg9e1wiZmxleFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoSWNvbm9iamVjdCkubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIGNsaWNrZWQ9e0ljb25vYmplY3RbaXRlbV0ub25vZmZ9IG9uQ2xpY2s9eygpPT5JY29uY2xpY2soaXRlbSxJY29ub2JqZWN0W2l0ZW1dLnNob3J0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiNGMEYwRjBcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpJY29ub2JqZWN0W2l0ZW1dLmxpbmVoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e0ljb25vYmplY3RbaXRlbV0uY2xhc3NOYW1lfSBzdHlsZT17e2NvbG9yOkNvdW50ID4gMCAmJiBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiID8gXCIjZDkwNDI5XCIgOiBcIlwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiAmJiBDb3VudCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsZm9udFNpemU6XCIxMnB4XCIsdG9wOlwiLTVweFwiLHJpZ2h0OlwiLTVweFwiLHdpZHRoOlwiMjBweFwiLGRpc3BsYXk6XCJibG9ja1wiLGhlaWdodDpcIjIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMjBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fT57Q291bnR9PC9zcGFuPikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD1cIjM1cHhcIiBoZWlnaHQ9XCIzNXB4XCIgcHJvZmlsZT1cIi9jYXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29udW1iZXIgIT09IDAgJiYgdmlzaWJsZSA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgb25TY3JvbGw9e1Njcm9sbHRvQm90dG9tfSByZWY9e015cmVmfSBmb3Jub3RpZnk9e0ljb25vYmplY3RbXCIyXCJdLm9ub2ZmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZ0b29scyBOYXZkYXRhPXtEYXRhfSBvcHRudW1iZXI9e0ljb251bWJlcn0+PC9OYXZ0b29scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0lubmVyTmF2YmFyPlxyXG4gICAgICAgIDwvTmF2YmFyZXh0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=