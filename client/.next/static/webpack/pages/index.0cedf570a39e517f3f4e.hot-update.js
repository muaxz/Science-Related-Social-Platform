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
})(["position:absolute;top:60px;height:", ";overflow-y:scroll;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;&:before{content:\"merhaba\";background-color:red;}"], function (_ref4) {
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
        lineNumber: 286,
        columnNumber: 108
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
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
      lineNumber: 289,
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
              lineNumber: 298,
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
                lineNumber: 299,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
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
                lineNumber: 300,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
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
          lineNumber: 305,
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
            lineNumber: 309,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
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
            lineNumber: 313,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: searchtype
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
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
                      lineNumber: 341,
                      columnNumber: 57
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 340,
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
                      lineNumber: 344,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      style: {
                        color: "lightgray",
                        fontSize: "15px"
                      },
                      children: "\u0130n\u015Faat M\xFChendisi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 57
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 53
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 49
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 44
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 360,
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
              lineNumber: 370,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
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
            lineNumber: 374,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 368,
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
                lineNumber: 385,
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
                lineNumber: 388,
                columnNumber: 50
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
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
            lineNumber: 401,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
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
              lineNumber: 409,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 293,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4IiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImkiLCJPcHRpb253aW5kb3ciLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJsb2dnZWQiLCJzcGlubmVyIiwidXNlcmRhdGEiLCJ1c2VDbGlja291dHNpZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJ1c2VTdGF0ZSIsImlucHV0dmFsdWUiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwidXNlUmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiY2xhc3NOYW1lIiwib25vZmYiLCJsaW5laGVpZ2h0IiwiT25jZXJlcXVlc3RlZCIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIktleXVwZnVuY3Rpb24iLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsInNldHVzZXJzIiwic2V0YWN0aXZlIiwiU2Nyb2xsdG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiQ2hhbmdlaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkljb25zZWxlY3QiLCJpY29ubnVtYmVyIiwibXlvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkljb25jbGljayIsIml0ZW0iLCJzaG9ydG5hbWUiLCJzZWFyY2h0eXBlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJtYXAiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtYXJnaW5SaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiVXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG1FQUFILGdFQUFmO0FBU0EsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlRQUNFSixTQURGLENBQWI7S0FBTUUsTztBQWNOLElBQU1HLFNBQVMsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwrSUFBZjtNQUFNQyxTO0FBV04sSUFBTUMsV0FBVyxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDRJQUFqQjtNQUFNRSxXO0FBWU4sSUFBTUMsVUFB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LGVBa0JLLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFO0FBQ1Q2RSxvQkFBUSxxQkFBYXRFLFFBQVEsQ0FBQ29GLE1BQXRCLENBREM7QUFFVFosaUJBQUssRUFBQztBQUFDQyxrQkFBSSxFQUFDO0FBQU47QUFGRyxXQUFaO0FBQUEsaUNBSUUscUVBQUMscUVBQUQ7QUFBYyxpQkFBSyxFQUFDLE1BQXBCO0FBQTJCLGtCQUFNLEVBQUMsTUFBbEM7QUFBeUMsbUJBQU8sRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkwsRUEyQlF0RCxTQUFTLEtBQUssQ0FBZCxJQUFtQmhCLE9BQU8sSUFBSSxJQUE5QixnQkFDQSxxRUFBQyxZQUFEO0FBQWMsa0JBQVEsRUFBRStCLGNBQXhCO0FBQXdDLGFBQUcsRUFBRW5CLEtBQTdDO0FBQW9ELG1CQUFTLEVBQUVVLFVBQVUsQ0FBQyxHQUFELENBQVYsQ0FBZ0JILEtBQS9FO0FBQUEsaUNBQ0kscUVBQUMsV0FBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVUscUJBQU8sRUFBRTlCLElBQW5CO0FBQXlCLHVCQUFTLEVBQUUyQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsR0FLa0IsSUFoQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpSUg7O0dBM1B1QjVCLFU7VUFJYVUsMkQsRUFDMEJBLDJEOzs7T0FMdkNWLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNlZGY1NzBhMzllNTE3ZjNmNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXJ9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSwgSG9tZSxBc3NpZ25tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjIwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwiXCIgOiBcIlwifTtcclxucGFkZGluZzoycHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2JiZGVmYjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTokeyh7ZmxleH0pPT5mbGV4fTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjg1MHB4KXtcclxuICAgIGRpc3BsYXk6JHsoe2ZsZXgyfSk9PmZsZXgyfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6MTBweDtcclxucGFkZGluZy1yaWdodDo0MHB4O1xyXG5ib3JkZXI6bm9uZTtcclxud2lkdGg6MTAwJTtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xyXG5jb2xvcjpibGFjaztcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5gXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG5oZWlnaHQ6MTAwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxuaGVpZ2h0OiR7KHtmb3Jub3RpZnl9KT0+Zm9ybm90aWZ5ID8gXCI0MDBweFwiIDogXCJcIn07XHJcbm92ZXJmbG93LXk6c2Nyb2xsO1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmV7XHJcbiAgICBjb250ZW50OlwibWVyaGFiYVwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbn1cclxuYFxyXG5jb25zdCBJbm5lcm9wdGlvbj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5sZWZ0Oi01NXB4O1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGZvbnRzaXplOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hlbGVtZW50cz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG4mOmhvdmVyIHtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2Mzk0NjtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuYFxyXG5cclxuLy9Ub0RvIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHtEYXRhLENvdW50LFJlbG9hZGZ1bmMsVXBkYXRlfSl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXIsdXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3Qge3JlZjpyZWYyLHZpc2libGU6dmlzaWJsZTIsc2V0dmlzaWJsZTpzZXR2aXNpYmxlMn0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgLy9idXJhZGEgZGXEn2nFn2tlbiBpc2ltaSBkZcSfacWfdGlyZXJlayBrdWxsYW5hYmlscnNpblxyXG4gICAgY29uc3QgW2lucHV0dmFsdWUsc2V0aW5wdXR2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2Vyc2ZvcnNlYXJjaCxzZXR1c2Vyc2ZvcnNlYXJjaF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaGFjdGl2ZSxzZXRzZWFyY2hhY3RpdmVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgIE15cmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbb3JkZXJudW1iZXIsc2V0b3JkZXJudW1iZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbSWNvbm9iamVjdCxzZXRJY29ub2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAxOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1wbHVzXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzM2cHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJwbHVzXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtYmVsbFwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczM3B4JyxcclxuICAgICAgICAgIHNob3J0OlwiYmVsbFwiLFxyXG4gICAgICAgICAgT25jZXJlcXVlc3RlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4JyxcclxuICAgICAgICAgIHNob3J0OlwiZG93blwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc2ZvcnNlYXJjaClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL1RvZG8gb25seSBpbnB1dCBsZW50aFxyXG4gICAgICBpZighdmlzaWJsZTIpXHJcbiAgICAgIHNldGlucHV0dmFsdWUoXCJcIik7XHJcbiAgICAgIHNldHNlYXJjaGFjdGl2ZShcIlwiKTtcclxuXHJcbiAgICB9LFt2aXNpYmxlMl0pXHJcblxyXG4gICAgY29uc3QgS2V5dXBmdW5jdGlvbj0oKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGlucHV0dmFsdWUpXHJcbiAgICAgICBpZihpbnB1dHZhbHVlICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgc2V0c2VhcmNoYWN0aXZlKFwiTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgR2V0dXNlcnNmb3JzZWFyY2hiYXIoe1xyXG4gICAgICAgICAgICAgICAgaW5wdXR2YWx1ZTppbnB1dHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2V0dXNlcnM6c2V0dXNlcnNmb3JzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0c2VhcmNoYWN0aXZlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTY3JvbGx0b0JvdHRvbT0oKT0+e1xyXG5cclxuICAgICAgICBpZihNeXJlZi5jdXJyZW50LnNjcm9sbFRvcCArIE15cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ID49IE15cmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICAgICAgUmVsb2FkZnVuYyhvcmRlcm51bWJlcitEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDaGFuZ2VoYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICBzZXR2aXNpYmxlMih0cnVlKTtcclxuICAgICAgICAgc2V0aW5wdXR2YWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNsaWNrPShpdGVtLHNob3J0bmFtZSk9PntcclxuICAgICAgICAvL2J1cmFkYSBzYWRlY2UgYmlsaWRpcmltIGt1dHVzdSBrYXBhbMSxeWtlbiBpc3RlayBhdMSxeW9ydXogMiBrZXogZGVnaWxcclxuICAgICAgICBpZihzaG9ydG5hbWUgPT0gXCJiZWxsXCIgJiYgSWNvbm9iamVjdFtpdGVtXS5vbm9mZiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBzZWFyY2h0eXBlPVwiXCI7XHJcbiAgICBcclxuICAgIGlmKHNlYXJjaGFjdGl2ZSA9PSBcIkxvYWRpbmdcIil7XHJcbiAgICAgICAgc2VhcmNodHlwZT08ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT48U3Bpbm5lcj48L1NwaW5uZXI+PC9kaXY+IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWFyY2hhY3RpdmUgPT0gXCJOb3RoaW5nXCIpe1xyXG4gICAgICAgIHNlYXJjaHR5cGU9PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+U29udcOnIEJ1bHVuYW1hZMSxLjwvZGl2PiBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXJleHQ+XHJcbiAgICAgICAgICAgIDxJbm5lck5hdmJhcj4gICBcclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyIGZsZXg9e1wiYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGN1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiaHR0cHM6Ly9ldnJpbWFnYWNpLm9yZy9wdWJsaWMvaW1hZ2VzL2xvZ28vdjMuc3ZnP3Y9MVwiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsYm9yZGVyUmlnaHQ6XCIxcHggc29saWQgYmxhY2tcIn19PjxzcGFuPkV2cmltIEHEn2FjxLE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PjxIb21lIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjYzkxODRhXCJ9fT48L0hvbWU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgcmVmPXtyZWYyfSBmbGV4Mj17XCJub25lXCJ9IGZsZXg9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlVcD17S2V5dXBmdW5jdGlvbn0gdmFsdWU9e2lucHV0dmFsdWV9IG9uQ2hhbmdlPXtDaGFuZ2VoYW5kbGVyfSBwbGFjZWhvbGRlcj1cIkFyYVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA8PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjE1cHhcIix0b3A6XCIxMHB4XCIsd2lkdGg6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+c2V0dmlzaWJsZTIoZmFsc2UpfSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjExcHhcIix0b3A6XCIxMnB4XCIsd2lkdGg6XCIyMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoID4gMCAmJiB2aXNpYmxlMiA9PSB0cnVlICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWN0aXZlLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e3NlYXJjaHR5cGV9PC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2ZvcnNlYXJjaC5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8U2VhcmNoZWxlbWVudHMgb25DbGljaz17KCk9PnNldGlucHV0dmFsdWUoXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7aXRlbS5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiNDVweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiNjAwXCJ9fT57aXRlbS5maXJzdG5hbWUrXCIgXCIraXRlbS5sYXN0bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImxpZ2h0Z3JheVwiLGZvbnRTaXplOlwiMTVweFwifX0+xLBuxZ9hYXQgTcO8aGVuZGlzaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGVsZW1lbnRzPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAhc3Bpbm5lciBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIWxvZ2dlZCBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwiLHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QWNjb3VudENpcmNsZSBzdHlsZT17e2ZvbnRTaXplOlwiMjVweFwifX0+PC9BY2NvdW50Q2lyY2xlPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIyNXB4XCJ9fT48L0Fzc2lnbm1lbnQ+fSBjb2xvcj1cInNlY29uZGFyeVwiPkthecSxdCBPbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgZmxleDI9e1wiZmxleFwifSByZWY9e3JlZn0gZmxleD17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhJY29ub2JqZWN0KS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgY2xpY2tlZD17SWNvbm9iamVjdFtpdGVtXS5vbm9mZn0gb25DbGljaz17KCk9Pkljb25jbGljayhpdGVtLEljb25vYmplY3RbaXRlbV0uc2hvcnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsYmFja2dyb3VuZENvbG9yOlwiI0YwRjBGMFwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0Okljb25vYmplY3RbaXRlbV0ubGluZWhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17SWNvbm9iamVjdFtpdGVtXS5jbGFzc05hbWV9IHN0eWxlPXt7Y29sb3I6Q291bnQgPiAwICYmIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgPyBcIiNkOTA0MjlcIiA6IFwiXCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiICYmIENvdW50ID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixmb250U2l6ZTpcIjEycHhcIix0b3A6XCItNXB4XCIscmlnaHQ6XCItNXB4XCIsd2lkdGg6XCIyMHB4XCIsZGlzcGxheTpcImJsb2NrXCIsaGVpZ2h0OlwiMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6XCIyMHB4XCIsYmFja2dyb3VuZENvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIn19PntDb3VudH08L3NwYW4+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPVwiMzVweFwiIGhlaWdodD1cIjM1cHhcIiBwcm9maWxlPVwiL2Nhci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb251bWJlciAhPT0gMCAmJiB2aXNpYmxlID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBvblNjcm9sbD17U2Nyb2xsdG9Cb3R0b219IHJlZj17TXlyZWZ9IGZvcm5vdGlmeT17SWNvbm9iamVjdFtcIjJcIl0ub25vZmZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdnRvb2xzIE5hdmRhdGE9e0RhdGF9IG9wdG51bWJlcj17SWNvbnVtYmVyfT48L05hdnRvb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSW5uZXJOYXZiYXI+XHJcbiAgICAgICAgPC9OYXZiYXJleHQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==