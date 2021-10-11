webpackHotUpdate_N_E("pages/content/[id]",{

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
})(["position:absolute;top:60px;height:", ";overflow-y:scroll;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;&:before{position:absolute;top:50px;left:0;width:100px;border:2px solid black;content:\"\";background-color:red;}"], function (_ref4) {
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
        lineNumber: 292,
        columnNumber: 108
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
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
      lineNumber: 295,
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
              lineNumber: 304,
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
                lineNumber: 305,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
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
                lineNumber: 306,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
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
          lineNumber: 311,
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
            lineNumber: 315,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
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
            lineNumber: 319,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: searchtype
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
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
                      lineNumber: 347,
                      columnNumber: 57
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
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
                      lineNumber: 350,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      style: {
                        color: "lightgray",
                        fontSize: "15px"
                      },
                      children: "\u0130n\u015Faat M\xFChendisi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 351,
                      columnNumber: 57
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 53
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 366,
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
              lineNumber: 376,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
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
            lineNumber: 380,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 374,
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
                lineNumber: 391,
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
                lineNumber: 394,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
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
            lineNumber: 407,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
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
              lineNumber: 415,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 299,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIktleXVwZnVuY3Rpb24iLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsInNldHVzZXJzIiwic2V0YWN0aXZlIiwiU2Nyb2xsdG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiQ2hhbmdlaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkljb25zZWxlY3QiLCJpY29ubnVtYmVyIiwibXlvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkljb25jbGljayIsIml0ZW0iLCJzaG9ydG5hbWUiLCJzZWFyY2h0eXBlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJtYXAiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtYXJnaW5SaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiVXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG1FQUFILGdFQUFmO0FBU0EsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUNFSixTQURGLENBQWI7S0FBTUUsTztBQWNOLElBQU1HLFNBQVMsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrSUFBZjtNQUFNQyxTO0FBV04sSUFBTUMsV0FBVyxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDRJQUFqQjtNQUFNRSxXO0FBWU4sSUFBTUMsVUFBVSxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1LQUlHO0FBQUEsTUFBRUksT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FBYUEsT0FBTyxHQUFHLEVBQUgsR0FBUSxFQUE1QjtBQUFBLENBSkgsQ0FBaEI7TUFBTUQsVTtBQWFOLElBQU1FLFdBQVcsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpR0FFUDtBQUFBLE1BQUVNLElBQUYsU0FBRUEsSUFBRjtBQUFBLFNBQVVBLElBQVY7QUFBQSxDQUZPLEVBS0g7QUFBQSxNQUFFQyxLQUFGLFNBQUVBLEtBQUY7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FMRyxDQUFqQjtNQUFNRixXO0FBU04sSUFBTUcsS0FBSyxHQUFDVCx5REFBTSxDQUFDVSxLQUFSO0FBQUE7QUFBQTtBQUFBLCtLQUFYO01BQU1ELEs7QUFjTixJQUFNRSxVQUFVLEdBQUNYLHlEQUFNLENBQUNZLENBQVI7QUFBQTtBQUFBO0FBQUEsc0VBQWhCO01BQU1ELFU7QUFNTixJQUFNRSxZQUFZLEdBQUNiLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMldBR1Q7QUFBQSxNQUFFYSxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFlQSxTQUFTLEdBQUcsT0FBSCxHQUFhLEVBQXJDO0FBQUEsQ0FIUyxDQUFsQjtNQUFNRCxZO0FBc0JOLElBQU1FLFdBQVcsR0FBQ2YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNYyxXO0FBSU4sSUFBTUMsU0FBUyxHQUFDaEIseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5ZkFBZjtPQUFNZSxTO0FBa0NOLElBQU1DLGNBQWMsR0FBQ2pCLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUpBQXBCLEMsQ0FhQTs7T0FiTWdCLGM7QUFjUyxTQUFTQyxVQUFULFFBQW1EO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUJDLElBQThCLFNBQTlCQSxJQUE4QjtBQUFBLE1BQXpCQyxLQUF5QixTQUF6QkEsS0FBeUI7QUFBQSxNQUFuQkMsVUFBbUIsU0FBbkJBLFVBQW1CO0FBQUEsTUFBUkMsTUFBUSxTQUFSQSxNQUFROztBQUFBLG9CQUc1QkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FIa0I7QUFBQSxNQUd2REMsTUFIdUQsZUFHdkRBLE1BSHVEO0FBQUEsTUFHaERDLE9BSGdELGVBR2hEQSxPQUhnRDtBQUFBLE1BR3hDQyxRQUh3QyxlQUd4Q0EsUUFId0M7O0FBQUEsd0JBSTdCQyxtRUFBYyxFQUplO0FBQUEsTUFJdkRDLEdBSnVELG1CQUl2REEsR0FKdUQ7QUFBQSxNQUluREMsT0FKbUQsbUJBSW5EQSxPQUptRDtBQUFBLE1BSTNDQyxVQUoyQyxtQkFJM0NBLFVBSjJDOztBQUFBLHlCQUtISCxtRUFBYyxFQUxYO0FBQUEsTUFLbkRJLElBTG1ELG9CQUt2REgsR0FMdUQ7QUFBQSxNQUt0Q0ksUUFMc0Msb0JBSzlDSCxPQUw4QztBQUFBLE1BS2xCSSxXQUxrQixvQkFLN0JILFVBTDZCLEVBTTlEOzs7QUFOOEQsa0JBTzNCSSxzREFBUSxDQUFDLEVBQUQsQ0FQbUI7QUFBQSxNQU92REMsVUFQdUQ7QUFBQSxNQU81Q0MsYUFQNEM7O0FBQUEsbUJBUXJCRixzREFBUSxDQUFDLEVBQUQsQ0FSYTtBQUFBLE1BUXZERyxjQVJ1RDtBQUFBLE1BUXhDQyxpQkFSd0M7O0FBQUEsbUJBU3pCSixzREFBUSxDQUFDLEVBQUQsQ0FUaUI7QUFBQSxNQVN2REssWUFUdUQ7QUFBQSxNQVMxQ0MsZUFUMEM7O0FBVTlELE1BQU9DLEtBQUssR0FBR0Msb0RBQU0sRUFBckI7O0FBVjhELG1CQVczQlIsc0RBQVEsQ0FBQyxFQUFELENBWG1CO0FBQUEsTUFXdkRTLFdBWHVEO0FBQUEsTUFXM0NDLGNBWDJDOztBQUFBLG1CQVk1QlYsc0RBQVEsQ0FBQyxDQUFELENBWm9CO0FBQUEsTUFZdkRXLFNBWnVEO0FBQUEsTUFZN0NDLGFBWjZDOztBQUFBLG1CQWEzQlosc0RBQVEsQ0FBQztBQUN4QyxPQUFFO0FBQ0FhLGVBQVMsRUFBQyxhQURWO0FBRUFDLFdBQUssRUFBQyxLQUZOO0FBR0FDLGdCQUFVLEVBQUMsTUFIWDtBQUlBLGVBQU07QUFKTixLQURzQztBQVF4QyxPQUFFO0FBQ0FGLGVBQVMsRUFBQyxhQURWO0FBRUFDLFdBQUssRUFBQyxLQUZOO0FBR0FDLGdCQUFVLEVBQUMsTUFIWDtBQUlBLGVBQU0sTUFKTjtBQUtBQyxtQkFBYSxFQUFDO0FBTGQsS0FSc0M7QUFleEMsT0FBRTtBQUNBSCxlQUFTLEVBQUMsa0JBRFY7QUFFQUMsV0FBSyxFQUFDLEtBRk47QUFHQUMsZ0JBQVUsRUFBQyxNQUhYO0FBSUEsZUFBTTtBQUpOO0FBZnNDLEdBQUQsQ0FibUI7QUFBQSxNQWF2REUsVUFidUQ7QUFBQSxNQWE1Q0MsYUFiNEM7O0FBcUM5REMsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixjQUFaO0FBQ0FrQix5REFBUyxDQUFDLFlBQUk7QUFDWjtBQUNBLFFBQUcsQ0FBQ3ZCLFFBQUosRUFDQUksYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBSSxtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUVELEdBTlEsRUFNUCxDQUFDUixRQUFELENBTk8sQ0FBVDs7QUFRQSxNQUFNd0IsYUFBYSxHQUFDLFNBQWRBLGFBQWMsR0FBSTtBQUVyQkgsV0FBTyxDQUFDQyxHQUFSLENBQVluQixVQUFaOztBQUNBLFFBQUdBLFVBQVUsS0FBSyxFQUFsQixFQUFxQjtBQUNoQksscUJBQWUsQ0FBQyxTQUFELENBQWY7QUFDQWlCLDRFQUFvQixDQUFDO0FBQ2pCdEIsa0JBQVUsRUFBQ0EsVUFETTtBQUVqQnVCLGdCQUFRLEVBQUNwQixpQkFGUTtBQUdqQnFCLGlCQUFTLEVBQUNuQjtBQUhPLE9BQUQsQ0FBcEI7QUFLSjtBQUVILEdBWkQ7O0FBY0EsTUFBTW9CLGNBQWMsR0FBQyxTQUFmQSxjQUFlLEdBQUk7QUFFckIsUUFBR25CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsU0FBZCxHQUEwQnJCLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0UsWUFBeEMsSUFBd0R0QixLQUFLLENBQUNvQixPQUFOLENBQWNHLFlBQXpFLEVBQXNGO0FBQ2xGNUMsZ0JBQVUsQ0FBQ3VCLFdBQVcsR0FBQ3pCLElBQUksQ0FBQytDLE1BQWxCLENBQVY7QUFDSDtBQUVKLEdBTkQ7O0FBUUEsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCbEMsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRyxpQkFBYSxDQUFDK0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNKLEdBSEQ7O0FBS0EsTUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsVUFBRCxFQUFjO0FBRTNCLFFBQU1DLFFBQVEscUJBQUtyQixVQUFMLENBQWQ7O0FBRUFzQixVQUFNLENBQUNDLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsT0FBdEIsQ0FBOEIsVUFBQUMsR0FBRyxFQUFHO0FBQ2hDLFVBQUdMLFVBQVUsS0FBS0ssR0FBbEIsRUFBc0I7QUFDbEJKLGdCQUFRLENBQUNJLEdBQUQsQ0FBUixDQUFjNUIsS0FBZCxHQUFvQixLQUFwQjtBQUNIO0FBRUosS0FMRDs7QUFPQSxRQUFHd0IsUUFBUSxDQUFDRCxVQUFELENBQVIsQ0FBcUJ2QixLQUF4QixFQUE4QjtBQUUxQndCLGNBQVEsQ0FBQ0QsVUFBRCxDQUFSLENBQXFCdkIsS0FBckIsR0FBMkIsS0FBM0I7QUFDQUYsbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFFSCxLQUxELE1BTUk7QUFFQTBCLGNBQVEsQ0FBQ0QsVUFBRCxDQUFSLENBQXFCdkIsS0FBckIsR0FBMkIsSUFBM0I7QUFDQUYsbUJBQWEsQ0FBQ3lCLFVBQUQsQ0FBYjtBQUVIOztBQUVEbkIsaUJBQWEsQ0FBQ29CLFFBQUQsQ0FBYjtBQUNBMUMsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUVILEdBM0JEOztBQTZCQSxNQUFNK0MsU0FBUyxHQUFDLFNBQVZBLFNBQVUsQ0FBQ0MsSUFBRCxFQUFNQyxTQUFOLEVBQWtCO0FBQzlCO0FBQ0EsUUFBR0EsU0FBUyxJQUFJLE1BQWIsSUFBdUI1QixVQUFVLENBQUMyQixJQUFELENBQVYsQ0FBaUI5QixLQUFqQixJQUEwQixLQUFwRCxFQUNBO0FBQ0kzQixZQUFNO0FBQ1Q7O0FBR0RpRCxjQUFVLENBQUNRLElBQUQsQ0FBVjtBQUNILEdBVEQ7O0FBV0EsTUFBSUUsVUFBVSxHQUFDLEVBQWY7O0FBRUEsTUFBR3pDLFlBQVksSUFBSSxTQUFuQixFQUE2QjtBQUN6QnlDLGNBQVUsZ0JBQUM7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHNCQUFjLEVBQUMsUUFBL0I7QUFBd0NDLGtCQUFVLEVBQUMsUUFBbkQ7QUFBNERDLGNBQU0sRUFBQztBQUFuRSxPQUFaO0FBQUEsNkJBQXdGLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVg7QUFDSCxHQUZELE1BR0ssSUFBRzdDLFlBQVksSUFBSSxTQUFuQixFQUE2QjtBQUM5QnlDLGNBQVUsZ0JBQUM7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHNCQUFjLEVBQUMsUUFBL0I7QUFBd0NDLGtCQUFVLEVBQUMsUUFBbkQ7QUFBNERDLGNBQU0sRUFBQztBQUFuRSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVg7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0kscUVBQUMsV0FBRDtBQUFBLDhCQUNHLHFFQUFDLFdBQUQ7QUFBYSxZQUFJLEVBQUUsT0FBbkI7QUFBQSwrQkFDSyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBSyxpQkFBSyxFQUFFO0FBQUNILHFCQUFPLEVBQUMsTUFBVDtBQUFnQkUsd0JBQVUsRUFBQyxRQUEzQjtBQUFvQ0Usb0JBQU0sRUFBQztBQUEzQyxhQUFaO0FBQUEsb0NBQ0kscUVBQUMscUVBQUQ7QUFBYyxxQkFBTyxFQUFDLHNEQUF0QjtBQUE2RSxtQkFBSyxFQUFDLE1BQW5GO0FBQTBGLG9CQUFNLEVBQUM7QUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUssbUJBQUssRUFBRTtBQUFDQywwQkFBVSxFQUFDLE1BQVo7QUFBbUJDLDRCQUFZLEVBQUMsTUFBaEM7QUFBdUNDLDJCQUFXLEVBQUM7QUFBbkQsZUFBWjtBQUFBLHFDQUFtRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBSyxtQkFBSyxFQUFFO0FBQUNGLDBCQUFVLEVBQUMsTUFBWjtBQUFtQkwsdUJBQU8sRUFBQyxNQUEzQjtBQUFrQ0UsMEJBQVUsRUFBQztBQUE3QyxlQUFaO0FBQUEscUNBQW9FLHFFQUFDLHdEQUFEO0FBQU0scUJBQUssRUFBRTtBQUFDTSwwQkFBUSxFQUFDLE1BQVY7QUFBaUJDLHVCQUFLLEVBQUM7QUFBdkI7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQVVHLHFFQUFDLFdBQUQ7QUFBYyxXQUFHLEVBQUUzRCxJQUFuQjtBQUF5QixhQUFLLEVBQUUsTUFBaEM7QUFBd0MsWUFBSSxFQUFFLEtBQTlDO0FBQUEsZ0NBQ0sscUVBQUMsS0FBRDtBQUFPLGlCQUFPLEVBQUV5QixhQUFoQjtBQUErQixlQUFLLEVBQUVyQixVQUF0QztBQUFrRCxrQkFBUSxFQUFFK0IsYUFBNUQ7QUFBMkUscUJBQVcsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURMLEVBR1MvQixVQUFVLENBQUM4QixNQUFYLElBQXFCLENBQXJCLGdCQUNBO0FBQUssZUFBSyxFQUFFO0FBQUMwQixvQkFBUSxFQUFDLFVBQVY7QUFBcUJDLGlCQUFLLEVBQUMsTUFBM0I7QUFBa0NDLGVBQUcsRUFBQyxNQUF0QztBQUE2Q0MsaUJBQUssRUFBQztBQUFuRCxXQUFaO0FBQUEsaUNBQ0cscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZ0JBS0E7QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQUk3RCxXQUFXLENBQUMsS0FBRCxDQUFmO0FBQUEsV0FBZDtBQUFzQyxlQUFLLEVBQUU7QUFBQzBELG9CQUFRLEVBQUMsVUFBVjtBQUFxQkMsaUJBQUssRUFBQyxNQUEzQjtBQUFrQ0MsZUFBRyxFQUFDLE1BQXRDO0FBQTZDQyxpQkFBSyxFQUFDLE1BQW5EO0FBQTBEVCxrQkFBTSxFQUFDO0FBQWpFLFdBQTdDO0FBQUEsaUNBQ0cscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUlQsRUFjU2xELFVBQVUsQ0FBQzhCLE1BQVgsR0FBb0IsQ0FBcEIsSUFBeUJqQyxRQUFRLElBQUksSUFBckMsaUJBRUEscUVBQUMsU0FBRDtBQUFBLG9CQUdRTyxZQUFZLENBQUMwQixNQUFiLEdBQXNCLENBQXRCLGdCQUlBLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLHNCQUFpQmU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKQSxHQVFBM0MsY0FBYyxDQUFDMEQsR0FBZixDQUFtQixVQUFDakIsSUFBRCxFQUFRO0FBRXZCLGdDQUFPLHFFQUFDLGNBQUQ7QUFBZ0IscUJBQU8sRUFBRTtBQUFBLHVCQUFJMUMsYUFBYSxDQUFDLEVBQUQsQ0FBakI7QUFBQSxlQUF6QjtBQUFBLHFDQUNDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBRTtBQUNSNEQsMEJBQVEscUJBQWFsQixJQUFJLENBQUNtQixFQUFsQixDQURBO0FBRVJDLHVCQUFLLEVBQUM7QUFBQ0Msd0JBQUksRUFBQztBQUFOO0FBRkUsaUJBQVo7QUFBQSx1Q0FLSTtBQUFLLHVCQUFLLEVBQUU7QUFBQ2xCLDJCQUFPLEVBQUM7QUFBVCxtQkFBWjtBQUFBLDBDQUNJO0FBQUEsMkNBQ0kscUVBQUMscUVBQUQ7QUFBYyw2QkFBTyxFQUFDLFlBQXRCO0FBQW1DLDJCQUFLLEVBQUMsTUFBekM7QUFBZ0QsNEJBQU0sRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUlJO0FBQUsseUJBQUssRUFBRTtBQUFDbUIsaUNBQVcsRUFBQztBQUFiLHFCQUFaO0FBQUEsNENBQ0k7QUFBRywyQkFBSyxFQUFFO0FBQUNDLGtDQUFVLEVBQUM7QUFBWix1QkFBVjtBQUFBLGdDQUErQnZCLElBQUksQ0FBQ3dCLFNBQUwsR0FBZSxHQUFmLEdBQW1CeEIsSUFBSSxDQUFDeUI7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUVJO0FBQUcsMkJBQUssRUFBRTtBQUFDYiw2QkFBSyxFQUFDLFdBQVA7QUFBbUJELGdDQUFRLEVBQUM7QUFBNUIsdUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBaUJILFdBbkJEO0FBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkgsRUE4RE8sQ0FBQ2hFLE9BQUQsZ0JBSUMscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsR0FRQSxDQUFDRCxNQUFELGdCQUlBLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSyxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQUEsaUNBQ0MscUVBQUMsd0RBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGlCQUFLLEVBQUU7QUFBQ2dGLHlCQUFXLEVBQUMsTUFBYjtBQUFvQkMsMkJBQWEsRUFBQztBQUFsQyxhQUFuQztBQUFvRixtQkFBTyxlQUFFLHFFQUFDLGlFQUFEO0FBQWUsbUJBQUssRUFBRTtBQUFDaEIsd0JBQVEsRUFBQztBQUFWO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETCxlQU1JLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE2QixlQUFLLEVBQUU7QUFBQ2dCLHlCQUFhLEVBQUM7QUFBZixXQUFwQztBQUFrRSxpQkFBTyxlQUFFLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDZixtQkFBSyxFQUFDLE9BQVA7QUFBZWdCLDBCQUFZLEVBQUMsS0FBNUI7QUFBa0NqQixzQkFBUSxFQUFDO0FBQTNDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTNFO0FBQWlLLGVBQUssRUFBQyxXQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQSxnQkFlQyxxRUFBQyxXQUFEO0FBQWMsYUFBSyxFQUFFLE1BQXJCO0FBQTZCLFdBQUcsRUFBRTdELEdBQWxDO0FBQXVDLFlBQUksRUFBRSxNQUE3QztBQUFBLG1CQUVRNkMsTUFBTSxDQUFDQyxJQUFQLENBQVl2QixVQUFaLEVBQXdCNEMsR0FBeEIsQ0FBNEIsVUFBQ2pCLElBQUQsRUFBUTtBQUNoQyw4QkFDSSxxRUFBQyxVQUFEO0FBQVksbUJBQU8sRUFBRTNCLFVBQVUsQ0FBQzJCLElBQUQsQ0FBVixDQUFpQjlCLEtBQXRDO0FBQTZDLG1CQUFPLEVBQUU7QUFBQSxxQkFBSTZCLFNBQVMsQ0FBQ0MsSUFBRCxFQUFNM0IsVUFBVSxDQUFDMkIsSUFBRCxDQUFWLFNBQU4sQ0FBYjtBQUFBLGFBQXREO0FBQUEsbUNBQ0k7QUFBTSxtQkFBSyxFQUFFO0FBQUNHLHVCQUFPLEVBQUMsT0FBVDtBQUFpQjBCLCtCQUFlLEVBQUMsU0FBakM7QUFBMkNELDRCQUFZLEVBQUMsS0FBeEQ7QUFBOERaLHFCQUFLLEVBQUMsTUFBcEU7QUFBMkVWLHNCQUFNLEVBQUMsTUFBbEY7QUFBeUZ3Qix5QkFBUyxFQUFDLFFBQW5HO0FBQTRHQywwQkFBVSxFQUFDMUQsVUFBVSxDQUFDMkIsSUFBRCxDQUFWLENBQWlCN0I7QUFBeEksZUFBYjtBQUFBLHNDQUNJO0FBQUcseUJBQVMsRUFBRUUsVUFBVSxDQUFDMkIsSUFBRCxDQUFWLENBQWlCL0IsU0FBL0I7QUFBMEMscUJBQUssRUFBRTtBQUFDMkMsdUJBQUssRUFBQ3ZFLEtBQUssR0FBRyxDQUFSLElBQWFnQyxVQUFVLENBQUMyQixJQUFELENBQVYsYUFBMEIsTUFBdkMsR0FBZ0QsU0FBaEQsR0FBNEQ7QUFBbkU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUdRM0IsVUFBVSxDQUFDMkIsSUFBRCxDQUFWLGFBQTBCLE1BQTFCLElBQW9DM0QsS0FBSyxHQUFHLENBQTVDLGdCQUNDO0FBQU0scUJBQUssRUFBRTtBQUFDd0UsMEJBQVEsRUFBQyxVQUFWO0FBQXFCRiwwQkFBUSxFQUFDLE1BQTlCO0FBQXFDSSxxQkFBRyxFQUFDLE1BQXpDO0FBQWdERCx1QkFBSyxFQUFDLE1BQXREO0FBQTZERSx1QkFBSyxFQUFDLE1BQW5FO0FBQTBFYix5QkFBTyxFQUFDLE9BQWxGO0FBQTBGRyx3QkFBTSxFQUFDLE1BQWpHO0FBQXdHd0IsMkJBQVMsRUFBQyxRQUFsSDtBQUEySEMsNEJBQVUsRUFBQyxNQUF0STtBQUE2SUYsaUNBQWUsRUFBQyxTQUE3SjtBQUF1S2pCLHVCQUFLLEVBQUMsT0FBN0s7QUFBcUxnQiw4QkFBWSxFQUFDO0FBQWxNLGlCQUFiO0FBQUEsMEJBQXdOdkY7QUFBeE47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxHQUMwTyxJQUpsUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBV0gsU0FaRCxDQUZSLGVBa0JLLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFO0FBQ1Q2RSxvQkFBUSxxQkFBYXRFLFFBQVEsQ0FBQ29GLE1BQXRCLENBREM7QUFFVFosaUJBQUssRUFBQztBQUFDQyxrQkFBSSxFQUFDO0FBQU47QUFGRyxXQUFaO0FBQUEsaUNBSUUscUVBQUMscUVBQUQ7QUFBYyxpQkFBSyxFQUFDLE1BQXBCO0FBQTJCLGtCQUFNLEVBQUMsTUFBbEM7QUFBeUMsbUJBQU8sRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkwsRUEyQlF0RCxTQUFTLEtBQUssQ0FBZCxJQUFtQmhCLE9BQU8sSUFBSSxJQUE5QixnQkFDQSxxRUFBQyxZQUFEO0FBQWMsa0JBQVEsRUFBRStCLGNBQXhCO0FBQXdDLGFBQUcsRUFBRW5CLEtBQTdDO0FBQW9ELG1CQUFTLEVBQUVVLFVBQVUsQ0FBQyxHQUFELENBQVYsQ0FBZ0JILEtBQS9FO0FBQUEsaUNBQ0kscUVBQUMsV0FBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVUscUJBQU8sRUFBRTlCLElBQW5CO0FBQXlCLHVCQUFTLEVBQUUyQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsR0FLa0IsSUFoQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpSUg7O0dBM1B1QjVCLFU7VUFJYVUsMkQsRUFDMEJBLDJEOzs7T0FMdkNWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjJhY2ZkNmM2MjFjYWE4MGU2Njg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ29udGV4dCwgdXNlRWZmZWN0ICwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTmF2dG9vbHMgZnJvbSBcIi4vTmF2aWdhdGlvbnRvb2xzXCI7XHJcbmltcG9ydCB1c2VDbGlja291dHNpZSBmcm9tICcuLi8uLi8uLi9ob29rcy9DbGlrY291dGlzZGUnO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0dldHVzZXJzZm9yc2VhcmNoYmFyfSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIEhvbWUsQXNzaWdubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBOYXZiYXJleHQ9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo2MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDoyMDA7XHJcbmBcclxuY29uc3QgSW5uZXJOYXZiYXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1heC13aWR0aDoxMTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtjbGlja2VkfSk9PmNsaWNrZWQgPyBcIlwiIDogXCJcIn07XHJcbnBhZGRpbmc6MnB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYmRlZmI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtmbGV4Mn0pPT5mbGV4Mn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbnBhZGRpbmctcmlnaHQ6NDBweDtcclxuYm9yZGVyOm5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I0UwRTBFMDtcclxuY29sb3I6YmxhY2s7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDokeyh7Zm9ybm90aWZ5fSk9PmZvcm5vdGlmeSA/IFwiNDAwcHhcIiA6IFwiXCJ9O1xyXG5vdmVyZmxvdy15OnNjcm9sbDtcclxucGFkZGluZzo4cHg7XHJcbnJpZ2h0OjBweDtcclxud2lkdGg6MzUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbiY6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTBweDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG5cclxufVxyXG5gXHJcbmNvbnN0IElubmVyb3B0aW9uPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmxlZnQ6LTU1cHg7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbm92ZXJmbG93OmF1dG87XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG4mOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTBweDtcclxuICAgIHRvcDowO1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZm9udHNpemU6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaGVsZW1lbnRzPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbiY6aG92ZXIge1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjojZTYzOTQ2O1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5gXHJcblxyXG4vL1RvRG8gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe0RhdGEsQ291bnQsUmVsb2FkZnVuYyxVcGRhdGV9KXtcclxuIFxyXG5cclxuICAgIGNvbnN0IHtsb2dnZWQsc3Bpbm5lcix1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICBjb25zdCB7cmVmOnJlZjIsdmlzaWJsZTp2aXNpYmxlMixzZXR2aXNpYmxlOnNldHZpc2libGUyfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICAvL2J1cmFkYSBkZcSfacWfa2VuIGlzaW1pIGRlxJ9pxZ90aXJlcmVrIGt1bGxhbmFiaWxyc2luXHJcbiAgICBjb25zdCBbaW5wdXR2YWx1ZSxzZXRpbnB1dHZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJzZm9yc2VhcmNoLHNldHVzZXJzZm9yc2VhcmNoXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoYWN0aXZlLHNldHNlYXJjaGFjdGl2ZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCAgTXlyZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtvcmRlcm51bWJlcixzZXRvcmRlcm51bWJlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW0ljb251bWJlcixzZXTEsWNvbm51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29ub2JqZWN0LHNldEljb25vYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzZweCcsXHJcbiAgICAgICAgICBzaG9ydDpcInBsdXNcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAyOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1iZWxsXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMzcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJiZWxsXCIsXHJcbiAgICAgICAgICBPbmNlcmVxdWVzdGVkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtc29ydC1kb3duXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMwcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJkb3duXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXJzZm9yc2VhcmNoKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIC8vVG9kbyBvbmx5IGlucHV0IGxlbnRoXHJcbiAgICAgIGlmKCF2aXNpYmxlMilcclxuICAgICAgc2V0aW5wdXR2YWx1ZShcIlwiKTtcclxuICAgICAgc2V0c2VhcmNoYWN0aXZlKFwiXCIpO1xyXG5cclxuICAgIH0sW3Zpc2libGUyXSlcclxuXHJcbiAgICBjb25zdCBLZXl1cGZ1bmN0aW9uPSgpPT57XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coaW5wdXR2YWx1ZSlcclxuICAgICAgIGlmKGlucHV0dmFsdWUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICBzZXRzZWFyY2hhY3RpdmUoXCJMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICBHZXR1c2Vyc2ZvcnNlYXJjaGJhcih7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHZhbHVlOmlucHV0dmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZXR1c2VyczpzZXR1c2Vyc2ZvcnNlYXJjaCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRzZWFyY2hhY3RpdmUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNjcm9sbHRvQm90dG9tPSgpPT57XHJcblxyXG4gICAgICAgIGlmKE15cmVmLmN1cnJlbnQuc2Nyb2xsVG9wICsgTXlyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgPj0gTXlyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpe1xyXG4gICAgICAgICAgICBSZWxvYWRmdW5jKG9yZGVybnVtYmVyK0RhdGEubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENoYW5nZWhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgIHNldHZpc2libGUyKHRydWUpO1xyXG4gICAgICAgICBzZXRpbnB1dHZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uc2VsZWN0PShpY29ubnVtYmVyKT0+e1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG15b2JqZWN0KS5mb3JFYWNoKGtleSA9PntcclxuICAgICAgICAgICAgaWYoaWNvbm51bWJlciAhPT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIG15b2JqZWN0W2tleV0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYobXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmYpe1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPXRydWU7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKGljb25udW1iZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXRJY29ub2JqZWN0KG15b2JqZWN0KTsgXHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uY2xpY2s9KGl0ZW0sc2hvcnRuYW1lKT0+e1xyXG4gICAgICAgIC8vYnVyYWRhIHNhZGVjZSBiaWxpZGlyaW0ga3V0dXN1IGthcGFsxLF5a2VuIGlzdGVrIGF0xLF5b3J1eiAyIGtleiBkZWdpbFxyXG4gICAgICAgIGlmKHNob3J0bmFtZSA9PSBcImJlbGxcIiAmJiBJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgSWNvbnNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIHNlYXJjaHR5cGU9XCJcIjtcclxuICAgIFxyXG4gICAgaWYoc2VhcmNoYWN0aXZlID09IFwiTG9hZGluZ1wiKXtcclxuICAgICAgICBzZWFyY2h0eXBlPTxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIn19PjxTcGlubmVyPjwvU3Bpbm5lcj48L2Rpdj4gXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlYXJjaGFjdGl2ZSA9PSBcIk5vdGhpbmdcIil7XHJcbiAgICAgICAgc2VhcmNodHlwZT08ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT5Tb251w6cgQnVsdW5hbWFkxLEuPC9kaXY+IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dD5cclxuICAgICAgICAgICAgPElubmVyTmF2YmFyPiAgIFxyXG4gICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgZmxleD17XCJibG9ja1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby92My5zdmc/dj0xXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLHBhZGRpbmdSaWdodDpcIjEwcHhcIixib3JkZXJSaWdodDpcIjFweCBzb2xpZCBibGFja1wifX0+PHNwYW4+RXZyaW0gQcSfYWPEsTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+PEhvbWUgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiNjOTE4NGFcIn19PjwvSG9tZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICByZWY9e3JlZjJ9IGZsZXgyPXtcIm5vbmVcIn0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVVwPXtLZXl1cGZ1bmN0aW9ufSB2YWx1ZT17aW5wdXR2YWx1ZX0gb25DaGFuZ2U9e0NoYW5nZWhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiQXJhXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoIDw9IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTVweFwiLHRvcDpcIjEwcHhcIix3aWR0aDpcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5zZXR2aXNpYmxlMihmYWxzZSl9IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTFweFwiLHRvcDpcIjEycHhcIix3aWR0aDpcIjIwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR2YWx1ZS5sZW5ndGggPiAwICYmIHZpc2libGUyID09IHRydWUgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhY3RpdmUubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57c2VhcmNodHlwZX08L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzZm9yc2VhcmNoLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxTZWFyY2hlbGVtZW50cyBvbkNsaWNrPXsoKT0+c2V0aW5wdXR2YWx1ZShcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtpdGVtLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQ1cHhcIiBoZWlnaHQ9XCI0NXB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCI2MDBcIn19PntpdGVtLmZpcnN0bmFtZStcIiBcIitpdGVtLmxhc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwibGlnaHRncmF5XCIsZm9udFNpemU6XCIxNXB4XCJ9fT7EsG7Fn2FhdCBNw7xoZW5kaXNpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZWxlbWVudHM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB7ICBcclxuICAgICAgICAgICAgICAgICAgICFzcGlubmVyIFxyXG5cclxuICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAhbG9nZ2VkIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Zm9udFNpemU6XCIyNXB4XCJ9fT48L0FjY291bnRDaXJjbGU+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgR2lyacWfIFlhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiICBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QXNzaWdubWVudCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjI1cHhcIn19PjwvQXNzaWdubWVudD59IGNvbG9yPVwic2Vjb25kYXJ5XCI+S2F5xLF0IE9sPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJmbGV4XCJ9IHJlZj17cmVmfSBmbGV4PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEljb25vYmplY3QpLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBjbGlja2VkPXtJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmfSBvbkNsaWNrPXsoKT0+SWNvbmNsaWNrKGl0ZW0sSWNvbm9iamVjdFtpdGVtXS5zaG9ydCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIixiYWNrZ3JvdW5kQ29sb3I6XCIjRjBGMEYwXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6SWNvbm9iamVjdFtpdGVtXS5saW5laGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtJY29ub2JqZWN0W2l0ZW1dLmNsYXNzTmFtZX0gc3R5bGU9e3tjb2xvcjpDb3VudCA+IDAgJiYgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiA/IFwiI2Q5MDQyOVwiIDogXCJcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgJiYgQ291bnQgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGZvbnRTaXplOlwiMTJweFwiLHRvcDpcIi01cHhcIixyaWdodDpcIi01cHhcIix3aWR0aDpcIjIwcHhcIixkaXNwbGF5OlwiYmxvY2tcIixoZWlnaHQ6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjIwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwifX0+e0NvdW50fTwvc3Bhbj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9XCIzNXB4XCIgaGVpZ2h0PVwiMzVweFwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbnVtYmVyICE9PSAwICYmIHZpc2libGUgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IG9uU2Nyb2xsPXtTY3JvbGx0b0JvdHRvbX0gcmVmPXtNeXJlZn0gZm9ybm90aWZ5PXtJY29ub2JqZWN0W1wiMlwiXS5vbm9mZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2dG9vbHMgTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9