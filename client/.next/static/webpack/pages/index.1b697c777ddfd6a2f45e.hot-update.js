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
})(["position:absolute;padding:6px;right:15px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-left:1px solid white;color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
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
})(["padding:10px;position:absolute;top:80px;left:-55px;width:300px;height:300px;background-color:white;overflow:auto;border-radius:10px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;&:before{position:absolute;left:50px;top:0;}&::-webkit-scrollbar{width:30px;}&::-webkit-scrollbar:vertical{width:5px;}&::-webkit-scrollbar:horizontal{height:12px;}&::-webkit-scrollbar-thumb{fontsize:10px;background-color:rgba(0,0,0,.5);border-radius:10px;}"]);
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
      setvisible2 = _useClickoutsie2.setvisible;

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
              lineNumber: 281,
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
                lineNumber: 283,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
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
                lineNumber: 284,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
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
          lineNumber: 289,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
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
              lineNumber: 296,
              columnNumber: 136
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
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
                  lineNumber: 301,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
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
                  lineNumber: 304,
                  columnNumber: 49
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: "lightgray",
                    fontSize: "15px"
                  },
                  children: "\u0130n\u015Faat M\xFChendisi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 49
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
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
              lineNumber: 323,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
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
            lineNumber: 327,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 321,
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
                lineNumber: 338,
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
                lineNumber: 341,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
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
            lineNumber: 351,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
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
              lineNumber: 359,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwidXNlRWZmZWN0IiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJzZXR1c2VycyIsInNldGFjdGl2ZSIsIlNjcm9sbHRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxlbmd0aCIsIkNoYW5nZWhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJJY29uc2VsZWN0IiwiaWNvbm51bWJlciIsIm15b2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJJY29uY2xpY2siLCJpdGVtIiwic2hvcnRuYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyUmlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJtYXAiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1hcmdpblJpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsbUVBQUgsZ0VBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0VKLFNBREYsQ0FBYjtLQUFNRSxPO0FBY04sSUFBTUcsU0FBUyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtJQUFmO01BQU1DLFM7QUFXTixJQUFNQyxXQUFXLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNElBQWpCO01BQU1FLFc7QUFZTixJQUFNQyxVQUFVLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0lBSUc7QUFBQSxNQUFFSSxPQUFGLFFBQUVBLE9BQUY7QUFB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QUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrR0g7O0dBMU11QjVCLFU7VUFJYVUsMkQsRUFDMEJBLDJEOzs7T0FMdkNWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWI2OTdjNzc3ZGRmZDZhMmY0NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXJ9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSwgSG9tZSxBc3NpZ25tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjIwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwiXCIgOiBcIlwifTtcclxucGFkZGluZzoycHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OiR7KHtmbGV4fSk9PmZsZXh9O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuQG1lZGlhIChtYXgtd2lkdGg6ODUwcHgpe1xyXG4gICAgZGlzcGxheTokeyh7ZmxleDJ9KT0+ZmxleDJ9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nOjZweDtcclxucmlnaHQ6MTVweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7XHJcbmJvcmRlci1sZWZ0OjFweCBzb2xpZCB3aGl0ZTtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbmhlaWdodDoxMDAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5oZWlnaHQ6JHsoe2Zvcm5vdGlmeX0pPT5mb3Jub3RpZnkgPyBcIjQwMHB4XCIgOiBcIlwifTtcclxub3ZlcmZsb3cteTpzY3JvbGw7XHJcbnBhZGRpbmc6OHB4O1xyXG5yaWdodDowcHg7XHJcbndpZHRoOjM1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5cclxuYFxyXG5jb25zdCBJbm5lcm9wdGlvbj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo4MHB4O1xyXG5sZWZ0Oi01NXB4O1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGZvbnRzaXplOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hlbGVtZW50cz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG4mOmhvdmVyIHtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2Mzk0NjtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuYFxyXG5cclxuLy9Ub0RvIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHtEYXRhLENvdW50LFJlbG9hZGZ1bmMsVXBkYXRlfSl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXIsdXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3Qge3JlZjpyZWYyLHZpc2libGU6dmlzaWJsZTIsc2V0dmlzaWJsZTpzZXR2aXNpYmxlMn0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3QgW2lucHV0dmFsdWUsc2V0aW5wdXR2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2Vyc2ZvcnNlYXJjaCxzZXR1c2Vyc2ZvcnNlYXJjaF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaGFjdGl2ZSxzZXRzZWFyY2hhY3RpdmVdPXVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgIE15cmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbb3JkZXJudW1iZXIsc2V0b3JkZXJudW1iZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbSWNvbm9iamVjdCxzZXRJY29ub2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAxOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1wbHVzXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzM2cHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJwbHVzXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtYmVsbFwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczM3B4JyxcclxuICAgICAgICAgIHNob3J0OlwiYmVsbFwiLFxyXG4gICAgICAgICAgT25jZXJlcXVlc3RlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4JyxcclxuICAgICAgICAgIHNob3J0OlwiZG93blwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc2V0c2VhcmNoYWN0aXZlKHRydWUpO1xyXG4gICAgICAgIEdldHVzZXJzZm9yc2VhcmNoYmFyKHtcclxuICAgICAgICAgICBpbnB1dHZhbHVlOmlucHV0dmFsdWUsXHJcbiAgICAgICAgICAgc2V0dXNlcnM6c2V0dXNlcnNmb3JzZWFyY2gsXHJcbiAgICAgICAgICAgc2V0YWN0aXZlOnNldHNlYXJjaGFjdGl2ZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW2lucHV0dmFsdWVdKVxyXG5cclxuICAgIGNvbnN0IFNjcm9sbHRvQm90dG9tPSgpPT57XHJcblxyXG4gICAgICAgIGlmKE15cmVmLmN1cnJlbnQuc2Nyb2xsVG9wICsgTXlyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgPj0gTXlyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpe1xyXG4gICAgICAgICAgICBSZWxvYWRmdW5jKG9yZGVybnVtYmVyK0RhdGEubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBDaGFuZ2VoYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICBzZXR2aXNpYmxlMih0cnVlKTtcclxuICAgICAgICAgc2V0aW5wdXR2YWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uc2VsZWN0PShpY29ubnVtYmVyKT0+e1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG15b2JqZWN0KS5mb3JFYWNoKGtleSA9PntcclxuICAgICAgICAgICAgaWYoaWNvbm51bWJlciAhPT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIG15b2JqZWN0W2tleV0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYobXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmYpe1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPXRydWU7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKGljb25udW1iZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXRJY29ub2JqZWN0KG15b2JqZWN0KTsgXHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBcclxuICAgIC8vVG9EbyByZXdyaXRlIHRoaXMgY29kZVxyXG5cclxuICAgIGNvbnN0IEljb25jbGljaz0oaXRlbSxzaG9ydG5hbWUpPT57XHJcbiAgICAgICAgLy9idXJhZGEgc2FkZWNlIGJpbGlkaXJpbSBrdXR1c3Uga2FwYWzEsXlrZW4gaXN0ZWsgYXTEsXlvcnV6IDIga2V6IGRlZ2lsXHJcbiAgICAgICAgaWYoc2hvcnRuYW1lID09IFwiYmVsbFwiICYmIEljb25vYmplY3RbaXRlbV0ub25vZmYgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBJY29uc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dD5cclxuICAgICAgICAgICAgPElubmVyTmF2YmFyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgZmxleD17XCJibG9ja1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby92My5zdmc/dj0xXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsYm9yZGVyUmlnaHQ6XCIxcHggc29saWQgYmxhY2tcIn19PjxzcGFuPkV2cmltIEHEn2FjxLE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PjxIb21lIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjYzkxODRhXCJ9fT48L0hvbWU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIHJlZj17cmVmMn0gZmxleDI9e1wibm9uZVwifSBmbGV4PXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtpbnB1dHZhbHVlfSBvbkNoYW5nZT17Q2hhbmdlaGFuZGxlcn0gcGxhY2Vob2xkZXI9XCJBcmFcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA+IDAgJiYgdmlzaWJsZTIgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFjdGl2ZSA/IDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIn19PjxTcGlubmVyPjwvU3Bpbm5lcj48L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzZm9yc2VhcmNoLm1hcCgoaXRlbSk9PntcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxTZWFyY2hlbGVtZW50cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiNDVweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiNjAwXCJ9fT57aXRlbS5maXJzdG5hbWUrXCIgXCIraXRlbS5sYXN0bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJsaWdodGdyYXlcIixmb250U2l6ZTpcIjE1cHhcIn19PsSwbsWfYWF0IE3DvGhlbmRpc2k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGVsZW1lbnRzPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgeyAgIXNwaW5uZXIgPyBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICFsb2dnZWQgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwiLHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QWNjb3VudENpcmNsZSBzdHlsZT17e2ZvbnRTaXplOlwiMjVweFwifX0+PC9BY2NvdW50Q2lyY2xlPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIyNXB4XCJ9fT48L0Fzc2lnbm1lbnQ+fSBjb2xvcj1cInNlY29uZGFyeVwiPkthecSxdCBPbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgZmxleDI9e1wiZmxleFwifSByZWY9e3JlZn0gZmxleD17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhJY29ub2JqZWN0KS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgY2xpY2tlZD17SWNvbm9iamVjdFtpdGVtXS5vbm9mZn0gb25DbGljaz17KCk9Pkljb25jbGljayhpdGVtLEljb25vYmplY3RbaXRlbV0uc2hvcnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsYmFja2dyb3VuZENvbG9yOlwiI0YwRjBGMFwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0Okljb25vYmplY3RbaXRlbV0ubGluZWhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17SWNvbm9iamVjdFtpdGVtXS5jbGFzc05hbWV9IHN0eWxlPXt7Y29sb3I6Q291bnQgPiAwICYmIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgPyBcIiNkOTA0MjlcIiA6IFwiXCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiICYmIENvdW50ID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixmb250U2l6ZTpcIjEycHhcIix0b3A6XCItNXB4XCIscmlnaHQ6XCItNXB4XCIsd2lkdGg6XCIyMHB4XCIsZGlzcGxheTpcImJsb2NrXCIsaGVpZ2h0OlwiMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6XCIyMHB4XCIsYmFja2dyb3VuZENvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIn19PntDb3VudH08L3NwYW4+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJuYW1lXVwiIGFzPXtgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPVwiMzVweFwiIGhlaWdodD1cIjM1cHhcIiBwcm9maWxlPVwiL2Nhci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb251bWJlciAhPT0gMCAmJiB2aXNpYmxlID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBvblNjcm9sbD17U2Nyb2xsdG9Cb3R0b219IHJlZj17TXlyZWZ9IGZvcm5vdGlmeT17SWNvbm9iamVjdFtcIjJcIl0ub25vZmZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdnRvb2xzIE5hdmRhdGE9e0RhdGF9IG9wdG51bWJlcj17SWNvbnVtYmVyfT48L05hdnRvb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSW5uZXJOYXZiYXI+XHJcbiAgICAgICAgPC9OYXZiYXJleHQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==