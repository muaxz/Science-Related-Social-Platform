webpackHotUpdate_N_E("pages/profile/[username]",{

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
})(["position:absolute;top:60px;height:", ";overflow:auto;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;"], function (_ref4) {
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

  console.log(usersforsearch);
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
        lineNumber: 282,
        columnNumber: 108
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 285,
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
              lineNumber: 294,
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
                lineNumber: 295,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
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
                lineNumber: 296,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
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
          lineNumber: 301,
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
            lineNumber: 305,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return setvisible2(false);
          },
          style: {
            position: "absolute",
            right: "11px",
            top: "12px",
            width: "20px",
            cursor: "pointer"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-times"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: searchtype
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 33
          }, this) : usersforsearch.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchelements, {
              onClick: function onClick() {
                return setinputvalue("");
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                href: {
                  pathname: "/profile/".concat(item.id),
                  query: {
                    name: "Post"
                  }
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    display: "flex"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
                      profile: "/black.jpg",
                      width: "45px",
                      height: "45px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 337,
                      columnNumber: 57
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 53
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
                      lineNumber: 340,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      style: {
                        color: "lightgray",
                        fontSize: "15px"
                      },
                      children: "\u0130n\u015Faat M\xFChendisi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 57
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 53
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
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
              lineNumber: 366,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
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
            lineNumber: 370,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 364,
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
                lineNumber: 381,
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
                lineNumber: 384,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
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
            lineNumber: 397,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
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
              lineNumber: 405,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 289,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIktleXVwZnVuY3Rpb24iLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsInNldHVzZXJzIiwic2V0YWN0aXZlIiwiU2Nyb2xsdG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiQ2hhbmdlaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkljb25zZWxlY3QiLCJpY29ubnVtYmVyIiwibXlvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkljb25jbGljayIsIml0ZW0iLCJzaG9ydG5hbWUiLCJzZWFyY2h0eXBlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJtYXAiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtYXJnaW5SaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiVXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG1FQUFILGdFQUFmO0FBU0EsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUNFSixTQURGLENBQWI7S0FBTUUsTztBQWNOLElBQU1HLFNBQVMsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrSUFBZjtNQUFNQyxTO0FBV04sSUFBTUMsV0FBVyxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDRJQUFqQjtNQUFNRSxXO0FBWU4sSUFBTUMsVUFB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ZUFrQksscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUU7QUFDVDZFLG9CQUFRLHFCQUFhdEUsUUFBUSxDQUFDb0YsTUFBdEIsQ0FEQztBQUVUWixpQkFBSyxFQUFDO0FBQUNDLGtCQUFJLEVBQUM7QUFBTjtBQUZHLFdBQVo7QUFBQSxpQ0FJRSxxRUFBQyxxRUFBRDtBQUFjLGlCQUFLLEVBQUMsTUFBcEI7QUFBMkIsa0JBQU0sRUFBQyxNQUFsQztBQUF5QyxtQkFBTyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCTCxFQTJCUXRELFNBQVMsS0FBSyxDQUFkLElBQW1CaEIsT0FBTyxJQUFJLElBQTlCLGdCQUNBLHFFQUFDLFlBQUQ7QUFBYyxrQkFBUSxFQUFFK0IsY0FBeEI7QUFBd0MsYUFBRyxFQUFFbkIsS0FBN0M7QUFBb0QsbUJBQVMsRUFBRVUsVUFBVSxDQUFDLEdBQUQsQ0FBVixDQUFnQkgsS0FBL0U7QUFBQSxpQ0FDSSxxRUFBQyxXQUFEO0FBQUEsbUNBQ0kscUVBQUMsd0RBQUQ7QUFBVSxxQkFBTyxFQUFFOUIsSUFBbkI7QUFBeUIsdUJBQVMsRUFBRTJCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxHQUtrQixJQWhDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlJSDs7R0EzUHVCNUIsVTtVQUlhVSwyRCxFQUMwQkEsMkQ7OztPQUx2Q1YsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uMDhkNDRjYzQ5YjFhOTI0ZjIxYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXJ9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSwgSG9tZSxBc3NpZ25tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjIwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwiXCIgOiBcIlwifTtcclxucGFkZGluZzoycHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2JiZGVmYjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTokeyh7ZmxleH0pPT5mbGV4fTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjg1MHB4KXtcclxuICAgIGRpc3BsYXk6JHsoe2ZsZXgyfSk9PmZsZXgyfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxucGFkZGluZy1yaWdodDo0MHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG5oZWlnaHQ6MTAwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxuaGVpZ2h0OiR7KHtmb3Jub3RpZnl9KT0+Zm9ybm90aWZ5ID8gXCI0MDBweFwiIDogXCJcIn07XHJcbm92ZXJmbG93OmF1dG87XHJcbnBhZGRpbmc6OHB4O1xyXG5yaWdodDowcHg7XHJcbndpZHRoOjM1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5gXHJcbmNvbnN0IElubmVyb3B0aW9uPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmxlZnQ6LTU1cHg7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbm92ZXJmbG93OmF1dG87XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG4mOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTBweDtcclxuICAgIHRvcDowO1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZm9udHNpemU6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaGVsZW1lbnRzPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbiY6aG92ZXIge1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjojZTYzOTQ2O1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5gXHJcblxyXG4vL1RvRG8gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe0RhdGEsQ291bnQsUmVsb2FkZnVuYyxVcGRhdGV9KXtcclxuIFxyXG5cclxuICAgIGNvbnN0IHtsb2dnZWQsc3Bpbm5lcix1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICBjb25zdCB7cmVmOnJlZjIsdmlzaWJsZTp2aXNpYmxlMixzZXR2aXNpYmxlOnNldHZpc2libGUyfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICAvL2J1cmFkYSBkZcSfacWfa2VuIGlzaW1pIGRlxJ9pxZ90aXJlcmVrIGt1bGxhbmFiaWxyc2luXHJcbiAgICBjb25zdCBbaW5wdXR2YWx1ZSxzZXRpbnB1dHZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJzZm9yc2VhcmNoLHNldHVzZXJzZm9yc2VhcmNoXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoYWN0aXZlLHNldHNlYXJjaGFjdGl2ZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCAgTXlyZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtvcmRlcm51bWJlcixzZXRvcmRlcm51bWJlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW0ljb251bWJlcixzZXTEsWNvbm51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29ub2JqZWN0LHNldEljb25vYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzZweCcsXHJcbiAgICAgICAgICBzaG9ydDpcInBsdXNcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAyOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1iZWxsXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMzcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJiZWxsXCIsXHJcbiAgICAgICAgICBPbmNlcmVxdWVzdGVkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtc29ydC1kb3duXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMwcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJkb3duXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXJzZm9yc2VhcmNoKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIC8vVG9kbyBvbmx5IGlucHV0IGxlbnRoXHJcbiAgICAgIGlmKCF2aXNpYmxlMilcclxuICAgICAgc2V0aW5wdXR2YWx1ZShcIlwiKTtcclxuICAgICAgc2V0c2VhcmNoYWN0aXZlKFwiXCIpO1xyXG5cclxuICAgIH0sW3Zpc2libGUyXSlcclxuXHJcbiAgICBjb25zdCBLZXl1cGZ1bmN0aW9uPSgpPT57XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coaW5wdXR2YWx1ZSlcclxuICAgICAgIGlmKGlucHV0dmFsdWUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICBzZXRzZWFyY2hhY3RpdmUoXCJMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICBHZXR1c2Vyc2ZvcnNlYXJjaGJhcih7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHZhbHVlOmlucHV0dmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZXR1c2VyczpzZXR1c2Vyc2ZvcnNlYXJjaCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRzZWFyY2hhY3RpdmUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNjcm9sbHRvQm90dG9tPSgpPT57XHJcblxyXG4gICAgICAgIGlmKE15cmVmLmN1cnJlbnQuc2Nyb2xsVG9wICsgTXlyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgPj0gTXlyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpe1xyXG4gICAgICAgICAgICBSZWxvYWRmdW5jKG9yZGVybnVtYmVyK0RhdGEubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENoYW5nZWhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgIHNldHZpc2libGUyKHRydWUpO1xyXG4gICAgICAgICBzZXRpbnB1dHZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uc2VsZWN0PShpY29ubnVtYmVyKT0+e1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG15b2JqZWN0KS5mb3JFYWNoKGtleSA9PntcclxuICAgICAgICAgICAgaWYoaWNvbm51bWJlciAhPT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIG15b2JqZWN0W2tleV0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYobXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmYpe1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPXRydWU7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKGljb25udW1iZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXRJY29ub2JqZWN0KG15b2JqZWN0KTsgXHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uY2xpY2s9KGl0ZW0sc2hvcnRuYW1lKT0+e1xyXG4gICAgICAgIC8vYnVyYWRhIHNhZGVjZSBiaWxpZGlyaW0ga3V0dXN1IGthcGFsxLF5a2VuIGlzdGVrIGF0xLF5b3J1eiAyIGtleiBkZWdpbFxyXG4gICAgICAgIGlmKHNob3J0bmFtZSA9PSBcImJlbGxcIiAmJiBJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgSWNvbnNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIHNlYXJjaHR5cGU9XCJcIjtcclxuICAgIFxyXG4gICAgaWYoc2VhcmNoYWN0aXZlID09IFwiTG9hZGluZ1wiKXtcclxuICAgICAgICBzZWFyY2h0eXBlPTxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIn19PjxTcGlubmVyPjwvU3Bpbm5lcj48L2Rpdj4gXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlYXJjaGFjdGl2ZSA9PSBcIk5vdGhpbmdcIil7XHJcbiAgICAgICAgc2VhcmNodHlwZT08ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT5Tb251w6cgQnVsdW5hbWFkxLEuPC9kaXY+IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dD5cclxuICAgICAgICAgICAgPElubmVyTmF2YmFyPiAgIFxyXG4gICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgZmxleD17XCJibG9ja1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby92My5zdmc/dj0xXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLHBhZGRpbmdSaWdodDpcIjEwcHhcIixib3JkZXJSaWdodDpcIjFweCBzb2xpZCBibGFja1wifX0+PHNwYW4+RXZyaW0gQcSfYWPEsTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+PEhvbWUgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiNjOTE4NGFcIn19PjwvSG9tZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICByZWY9e3JlZjJ9IGZsZXgyPXtcIm5vbmVcIn0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVVwPXtLZXl1cGZ1bmN0aW9ufSB2YWx1ZT17aW5wdXR2YWx1ZX0gb25DaGFuZ2U9e0NoYW5nZWhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiQXJhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoIDw9IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTVweFwiLHRvcDpcIjEwcHhcIix3aWR0aDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5zZXR2aXNpYmxlMihmYWxzZSl9IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTFweFwiLHRvcDpcIjEycHhcIix3aWR0aDpcIjIwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR2YWx1ZS5sZW5ndGggPiAwICYmIHZpc2libGUyID09IHRydWUgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhY3RpdmUubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57c2VhcmNodHlwZX08L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzZm9yc2VhcmNoLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxTZWFyY2hlbGVtZW50cyBvbkNsaWNrPXsoKT0+c2V0aW5wdXR2YWx1ZShcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtpdGVtLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQ1cHhcIiBoZWlnaHQ9XCI0NXB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCI2MDBcIn19PntpdGVtLmZpcnN0bmFtZStcIiBcIitpdGVtLmxhc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwibGlnaHRncmF5XCIsZm9udFNpemU6XCIxNXB4XCJ9fT7EsG7Fn2FhdCBNw7xoZW5kaXNpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZWxlbWVudHM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB7ICBcclxuICAgICAgICAgICAgICAgICAgICFzcGlubmVyIFxyXG5cclxuICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAhbG9nZ2VkIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Zm9udFNpemU6XCIyNXB4XCJ9fT48L0FjY291bnRDaXJjbGU+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgR2lyacWfIFlhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiICBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QXNzaWdubWVudCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjI1cHhcIn19PjwvQXNzaWdubWVudD59IGNvbG9yPVwic2Vjb25kYXJ5XCI+S2F5xLF0IE9sPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJmbGV4XCJ9IHJlZj17cmVmfSBmbGV4PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEljb25vYmplY3QpLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBjbGlja2VkPXtJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmfSBvbkNsaWNrPXsoKT0+SWNvbmNsaWNrKGl0ZW0sSWNvbm9iamVjdFtpdGVtXS5zaG9ydCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIixiYWNrZ3JvdW5kQ29sb3I6XCIjRjBGMEYwXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6SWNvbm9iamVjdFtpdGVtXS5saW5laGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtJY29ub2JqZWN0W2l0ZW1dLmNsYXNzTmFtZX0gc3R5bGU9e3tjb2xvcjpDb3VudCA+IDAgJiYgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiA/IFwiI2Q5MDQyOVwiIDogXCJcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgJiYgQ291bnQgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGZvbnRTaXplOlwiMTJweFwiLHRvcDpcIi01cHhcIixyaWdodDpcIi01cHhcIix3aWR0aDpcIjIwcHhcIixkaXNwbGF5OlwiYmxvY2tcIixoZWlnaHQ6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjIwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwifX0+e0NvdW50fTwvc3Bhbj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9XCIzNXB4XCIgaGVpZ2h0PVwiMzVweFwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbnVtYmVyICE9PSAwICYmIHZpc2libGUgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IG9uU2Nyb2xsPXtTY3JvbGx0b0JvdHRvbX0gcmVmPXtNeXJlZn0gZm9ybm90aWZ5PXtJY29ub2JqZWN0W1wiMlwiXS5vbm9mZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2dG9vbHMgTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9