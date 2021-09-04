webpackHotUpdate_N_E("pages/404",{

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
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:2px;border-radius:50%;transition:0.3s;&:active{color:red;}"], function (_ref) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!visible2) setinputvalue("");
  }, [visible2]);

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
              lineNumber: 280,
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
                lineNumber: 282,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
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
                lineNumber: 283,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
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
          lineNumber: 288,
          columnNumber: 21
        }, this), inputvalue.length <= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            right: "15px",
            top: "12px",
            width: "20px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return setvisible2(false);
          },
          style: {
            position: "absolute",
            right: "10px",
            top: "12px",
            width: "20px",
            cursor: "pointer"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-times"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
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
              lineNumber: 305,
              columnNumber: 136
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
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
                  lineNumber: 310,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
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
                  lineNumber: 313,
                  columnNumber: 49
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: "lightgray",
                    fontSize: "15px"
                  },
                  children: "\u0130n\u015Faat M\xFChendisi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 49
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
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
              lineNumber: 332,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
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
            lineNumber: 336,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 330,
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
                lineNumber: 347,
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
                lineNumber: 350,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
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
            lineNumber: 360,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
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
              lineNumber: 368,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 9
  }, this);
}

_s(Navigation, "fzAwtORqv0sGC2MaCnCjvDLknhE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwidXNlRWZmZWN0IiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJzZXR1c2VycyIsInNldGFjdGl2ZSIsIlNjcm9sbHRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxlbmd0aCIsIkNoYW5nZWhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJJY29uc2VsZWN0IiwiaWNvbm51bWJlciIsIm15b2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJJY29uY2xpY2siLCJpdGVtIiwic2hvcnRuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyUmlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJtYXAiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1hcmdpblJpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0VKLFNBREYsQ0FBYjtLQUFNRSxPO0FBY04sSUFBTUcsU0FBUyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtJQUFmO01BQU1DLFM7QUFXTixJQUFNQyxXQUFXLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNElBQWpCO01BQU1FLFc7QUFZTixJQUFNQyxVQUFVLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0pBSUc7QUFBQSxNQUFFSSxPQUFGLFFBQUVBLE9BQUY7QUFB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LHFCQUFYO0FBQWlDLFlBQUUscUJBQWNPLFFBQVEsQ0FBQzRFLE1BQXZCLENBQW5DO0FBQUEsaUNBQ0UscUVBQUMscUVBQUQ7QUFBYyxpQkFBSyxFQUFDLE1BQXBCO0FBQTJCLGtCQUFNLEVBQUMsTUFBbEM7QUFBeUMsbUJBQU8sRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkwsRUF3QlF6RCxTQUFTLEtBQUssQ0FBZCxJQUFtQmhCLE9BQU8sSUFBSSxJQUE5QixnQkFDQSxxRUFBQyxZQUFEO0FBQWMsa0JBQVEsRUFBRTRCLGNBQXhCO0FBQXdDLGFBQUcsRUFBRWhCLEtBQTdDO0FBQW9ELG1CQUFTLEVBQUVVLFVBQVUsQ0FBQyxHQUFELENBQVYsQ0FBZ0JILEtBQS9FO0FBQUEsaUNBQ0kscUVBQUMsV0FBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVUscUJBQU8sRUFBRTlCLElBQW5CO0FBQXlCLHVCQUFTLEVBQUUyQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsR0FLa0IsSUE3QjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwR0g7O0dBdE51QjVCLFU7VUFJYVUsMkQsRUFDMEJBLDJEOzs7T0FMdkNWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LjYyZjVlY2YyM2Q4NjAxNDRjZWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ29udGV4dCwgdXNlRWZmZWN0ICwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTmF2dG9vbHMgZnJvbSBcIi4vTmF2aWdhdGlvbnRvb2xzXCI7XHJcbmltcG9ydCB1c2VDbGlja291dHNpZSBmcm9tICcuLi8uLi8uLi9ob29rcy9DbGlrY291dGlzZGUnO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0dldHVzZXJzZm9yc2VhcmNoYmFyfSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIEhvbWUsQXNzaWdubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBOYXZiYXJleHQ9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo2MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDoyMDA7XHJcbmBcclxuY29uc3QgSW5uZXJOYXZiYXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1heC13aWR0aDoxMTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtjbGlja2VkfSk9PmNsaWNrZWQgPyBcIlwiIDogXCJcIn07XHJcbnBhZGRpbmc6MnB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtmbGV4Mn0pPT5mbGV4Mn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbmJvcmRlcjpub25lO1xyXG53aWR0aDoxMDAlO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNFMEUwRTA7XHJcbmNvbG9yOmJsYWNrO1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbmhlaWdodDoxMDAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5oZWlnaHQ6JHsoe2Zvcm5vdGlmeX0pPT5mb3Jub3RpZnkgPyBcIjQwMHB4XCIgOiBcIlwifTtcclxub3ZlcmZsb3cteTpzY3JvbGw7XHJcbnBhZGRpbmc6OHB4O1xyXG5yaWdodDowcHg7XHJcbndpZHRoOjM1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5cclxuYFxyXG5jb25zdCBJbm5lcm9wdGlvbj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5sZWZ0Oi01NXB4O1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGZvbnRzaXplOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hlbGVtZW50cz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG4mOmhvdmVyIHtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2Mzk0NjtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuYFxyXG5cclxuLy9Ub0RvIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHtEYXRhLENvdW50LFJlbG9hZGZ1bmMsVXBkYXRlfSl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXIsdXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3Qge3JlZjpyZWYyLHZpc2libGU6dmlzaWJsZTIsc2V0dmlzaWJsZTpzZXR2aXNpYmxlMn0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgLy9idXJhZGEgZGXEn2nFn2tlbiBpc2ltaSBkZcSfacWfdGlyZXJlayBrdWxsYW5hYmlscnNpblxyXG4gICAgY29uc3QgW2lucHV0dmFsdWUsc2V0aW5wdXR2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2Vyc2ZvcnNlYXJjaCxzZXR1c2Vyc2ZvcnNlYXJjaF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaGFjdGl2ZSxzZXRzZWFyY2hhY3RpdmVdPXVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgIE15cmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbb3JkZXJudW1iZXIsc2V0b3JkZXJudW1iZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbSWNvbm9iamVjdCxzZXRJY29ub2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAxOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1wbHVzXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzM2cHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJwbHVzXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtYmVsbFwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczM3B4JyxcclxuICAgICAgICAgIHNob3J0OlwiYmVsbFwiLFxyXG4gICAgICAgICAgT25jZXJlcXVlc3RlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4JyxcclxuICAgICAgICAgIHNob3J0OlwiZG93blwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc2V0c2VhcmNoYWN0aXZlKHRydWUpO1xyXG4gICAgICAgIEdldHVzZXJzZm9yc2VhcmNoYmFyKHtcclxuICAgICAgICAgICBpbnB1dHZhbHVlOmlucHV0dmFsdWUsXHJcbiAgICAgICAgICAgc2V0dXNlcnM6c2V0dXNlcnNmb3JzZWFyY2gsXHJcbiAgICAgICAgICAgc2V0YWN0aXZlOnNldHNlYXJjaGFjdGl2ZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW2lucHV0dmFsdWVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgaWYoIXZpc2libGUyKVxyXG4gICAgICBzZXRpbnB1dHZhbHVlKFwiXCIpO1xyXG5cclxuICAgIH0sW3Zpc2libGUyXSlcclxuXHJcbiAgICBjb25zdCBTY3JvbGx0b0JvdHRvbT0oKT0+e1xyXG5cclxuICAgICAgICBpZihNeXJlZi5jdXJyZW50LnNjcm9sbFRvcCArIE15cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ID49IE15cmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICAgICAgUmVsb2FkZnVuYyhvcmRlcm51bWJlcitEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgQ2hhbmdlaGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgc2V0dmlzaWJsZTIodHJ1ZSk7XHJcbiAgICAgICAgIHNldGlucHV0dmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNsaWNrPShpdGVtLHNob3J0bmFtZSk9PntcclxuICAgICAgICAvL2J1cmFkYSBzYWRlY2UgYmlsaWRpcmltIGt1dHVzdSBrYXBhbMSxeWtlbiBpc3RlayBhdMSxeW9ydXogMiBrZXogZGVnaWxcclxuICAgICAgICBpZihzaG9ydG5hbWUgPT0gXCJiZWxsXCIgJiYgSWNvbm9iamVjdFtpdGVtXS5vbm9mZiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyZXh0PlxyXG4gICAgICAgICAgICA8SW5uZXJOYXZiYXI+ICAgXHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtcImJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvL3YzLnN2Zz92PTFcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLHBhZGRpbmdSaWdodDpcIjEwcHhcIixib3JkZXJSaWdodDpcIjFweCBzb2xpZCBibGFja1wifX0+PHNwYW4+RXZyaW0gQcSfYWPEsTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+PEhvbWUgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiNjOTE4NGFcIn19PjwvSG9tZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICByZWY9e3JlZjJ9IGZsZXgyPXtcIm5vbmVcIn0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXR2YWx1ZX0gb25DaGFuZ2U9e0NoYW5nZWhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiQXJhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoIDw9IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTVweFwiLHRvcDpcIjEycHhcIix3aWR0aDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5zZXR2aXNpYmxlMihmYWxzZSl9IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEycHhcIix3aWR0aDpcIjIwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR2YWx1ZS5sZW5ndGggPiAwICYmIHZpc2libGUyID09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhY3RpdmUgPyA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT48U3Bpbm5lcj48L1NwaW5uZXI+PC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2ZvcnNlYXJjaC5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8U2VhcmNoZWxlbWVudHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDVweFwiIGhlaWdodD1cIjQ1cHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcIjYwMFwifX0+e2l0ZW0uZmlyc3RuYW1lK1wiIFwiK2l0ZW0ubGFzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwibGlnaHRncmF5XCIsZm9udFNpemU6XCIxNXB4XCJ9fT7EsG7Fn2FhdCBNw7xoZW5kaXNpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hlbGVtZW50cz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIHsgICFzcGlubmVyID8gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAhbG9nZ2VkID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjEwcHhcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFjY291bnRDaXJjbGUgc3R5bGU9e3tmb250U2l6ZTpcIjI1cHhcIn19PjwvQWNjb3VudENpcmNsZT59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBc3NpZ25tZW50IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMjVweFwifX0+PC9Bc3NpZ25tZW50Pn0gY29sb3I9XCJzZWNvbmRhcnlcIj5LYXnEsXQgT2w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGZsZXgyPXtcImZsZXhcIn0gcmVmPXtyZWZ9IGZsZXg9e1wiZmxleFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoSWNvbm9iamVjdCkubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIGNsaWNrZWQ9e0ljb25vYmplY3RbaXRlbV0ub25vZmZ9IG9uQ2xpY2s9eygpPT5JY29uY2xpY2soaXRlbSxJY29ub2JqZWN0W2l0ZW1dLnNob3J0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiNGMEYwRjBcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpJY29ub2JqZWN0W2l0ZW1dLmxpbmVoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e0ljb25vYmplY3RbaXRlbV0uY2xhc3NOYW1lfSBzdHlsZT17e2NvbG9yOkNvdW50ID4gMCAmJiBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiID8gXCIjZDkwNDI5XCIgOiBcIlwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiAmJiBDb3VudCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsZm9udFNpemU6XCIxMnB4XCIsdG9wOlwiLTVweFwiLHJpZ2h0OlwiLTVweFwiLHdpZHRoOlwiMjBweFwiLGRpc3BsYXk6XCJibG9ja1wiLGhlaWdodDpcIjIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMjBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fT57Q291bnR9PC9zcGFuPikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VybmFtZV1cIiBhcz17YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWB9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD1cIjM1cHhcIiBoZWlnaHQ9XCIzNXB4XCIgcHJvZmlsZT1cIi9jYXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29udW1iZXIgIT09IDAgJiYgdmlzaWJsZSA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgb25TY3JvbGw9e1Njcm9sbHRvQm90dG9tfSByZWY9e015cmVmfSBmb3Jub3RpZnk9e0ljb25vYmplY3RbXCIyXCJdLm9ub2ZmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZ0b29scyBOYXZkYXRhPXtEYXRhfSBvcHRudW1iZXI9e0ljb251bWJlcn0+PC9OYXZ0b29scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0lubmVyTmF2YmFyPlxyXG4gICAgICAgIDwvTmF2YmFyZXh0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=