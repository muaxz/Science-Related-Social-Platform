module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/content/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Homereq, Createrelationreq, Contentreq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contentreq", function() { return Contentreq; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://localhost:3001";

const Errorhandler = ({
  data,
  seterrmsg,
  setwindow
}) => {
  if (data.state == "success") {
    return true;
  } else {
    seterrmsg(true);
    setwindow(true);
    return false;
  }
};

const loginreq = async ({
  setlogged,
  setuserdata,
  userdata,
  router,
  seterrmsg,
  setbackenderror,
  setactive
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/login", {
      userdata: userdata
    });
    console.log(data);

    if (data.wrong = "WP") {
      setbackenderror("WP");
      setactive(true);
    } else if (data.wrong = "WE") {
      setbackenderror("WE");
      setactive(true);
    } else {
      setlogged(true);
      setuserdata(data.Userdata);
      localStorage.setItem("_TOKEN", data.token); //http cookie only ile store edicez

      router.push("/");
    }
  } catch (err) {
    seterrmsg(true);
  }
};
const resigterreq = async ({
  setbackenderror,
  userdata,
  setactive,
  seterrmsg
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/register", {
      userdata: userdata
    });

    if (data.exist) {
      setbackenderror("EXİST");
      setactive(true);
    } else {//kayıt olmanız başarılı
    }
  } catch (err) {
    seterrmsg(true);
  }
};
const producereq = async ({
  contentdata,
  seterrmsg,
  setwindow,
  router
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/content/produce", {
      contentdata: contentdata
    });

    if (Errorhandler({
      data,
      setwindow,
      seterrmsg
    })) {
      setwindow(true);
      router.push("/profile/content"); //we route işlemi
    } else {
      return;
    }
  } catch (err) {
    seterrmsg(true);
    console.log("burada");
  }
};
const Homereq = async ({
  contentdata,
  seterrmsg,
  currentdata,
  setwindow,
  setcontentdata,
  order
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}`, {
      contentdata: contentdata
    });
    console.log(data.data);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      const Current = [...currentdata];
      const Mydata = [...data.data]; //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      setcontentdata(Current.concat(Mydata));
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Createrelationreq = async (UserId, PostId, attribute) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`content/createrelation`, {
      UserId: UserId,
      PostId: PostId,
      attribute: attribute
    });

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {//...
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Contentreq = async ({
  contentId,
  setcontent,
  seterrmsg,
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/${contentId}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      setcontent(data.data);
      console.log("buradaaaaaaaa");
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};

/***/ }),

/***/ "./components/UI/Icon.js":
/*!*******************************!*\
  !*** ./components/UI/Icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\Icon.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Iconspan = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Icon__Iconspan",
  componentId: "sc-1bqjy35-0"
})(({
  width,
  height,
  color,
  backcolor,
  position,
  top,
  left,
  right,
  bottom,
  lineheight,
  hovercolor,
  hoverback,
  rotate
}) => `
position:${position};
top:${top};
left:${left};
right:${right};
bottom:${bottom};
border-radius:50%;
transition:0.3s;
display:block;
line-height:${lineheight};
width:${width};
height:${height};
cursor:pointer;
text-align:center;
color:${color};
background-color:${backcolor};
transform:rotate(${rotate ? "180deg" : "0deg"});
&:hover{
 background-color:${hoverback};
 color:${hovercolor};
}
`);
function Icon({
  className,
  Iconconfig,
  activefunc
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconspan, _objectSpread(_objectSpread({
    onClick: activefunc
  }, Iconconfig), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: className
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./components/pages/Main/Lefttoolbar.js":
/*!**********************************************!*\
  !*** ./components/pages/Main/Lefttoolbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Lefttoolbar.js";




const ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-25lf6-0"
})(["position:fixed;top:0;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#3B4058;transition:all 0.2s;width:", ""], ({
  active
}) => active ? "200px" : "70px");
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-25lf6-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-25lf6-2"
})(["display:flex;border-bottom:1px solid white;flex-direction:column;align-items:center;"]);
const NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-25lf6-3"
})(["background-coloyor:yellow;margin-top:30px;width:96%;"]);
const Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-25lf6-4"
})(["list-style-type:none;margin-top:20px;display:flex;align-items:center;"]); //const Icon=styled.i`
//color:#C70039;
//`

const Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-25lf6-5"
})(["width:100%;height:30px;padding:10px;text-align:right;"]);

const Lefttoolbar = () => {
  const {
    current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Kaydedilenler"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Beğenilenler"
  }, {
    icon: "fas fa-retweet",
    desc: "Retweet"
  }]);
  const {
    0: open,
    1: setopen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
    active: open,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activefunc: () => setopen(!open),
          className: "fas fa-angle-double-right",
          Iconconfig: {
            width: "35px",
            height: "35px",
            lineheight: "35px",
            color: "white",
            rotate: open ? true : false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 16
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            paddingBottom: "15px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
            profile: "/car.jpg",
            width: open ? "80px" : "50px",
            height: open ? "80px" : "50px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 20
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginTop: "10px",
              color: "white"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: open ? "block" : "none"
              },
              children: "Emre \xD6zer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 66
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 20
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          style: {
            width: "100%",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: open ? "flex-start" : "center"
          },
          children: current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: item.icon,
              Iconconfig: {
                width: "35px",
                height: "35px",
                lineheight: "35px",
                backcolor: "#CFCFCF",
                color: "#E84040"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 34
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                display: open ? "block" : "none",
                fontSize: "14px",
                marginLeft: "10px"
              },
              children: item.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 34
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 30
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Lefttoolbar);

/***/ }),

/***/ "./components/shared/Navigation.js":
/*!*****************************************!*\
  !*** ./components/shared/Navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation.js";


const Navbarext = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Navbarext",
  componentId: "sc-1hbo2cn-0"
})(["position:fixed;display:flex;align-items:center;top:0;left:0;width:100%;height:65px;padding-left:250px;background-color:#f8f4ff;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:100;"]);
const Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-1hbo2cn-1"
})(["position:relative;margin-right:10px;"]);
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-1hbo2cn-2"
})(["position:relative;flex:2;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Navigation__Input",
  componentId: "sc-1hbo2cn-3"
})(["padding:5px;padding-left:10px;border:none;width:100%;outline:none;border-radius:4px;background-color:#CCCFCE;color:black;::placeholder{color:black;}&:focus{box-shadow:0px 0px 2px 3px #2ADB90;color:black;}"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-1hbo2cn-4"
})(["position:absolute;padding:7px;border-left:1px solid white;right:20px;color:black;top:50%;transform:translate(50%,-50%);"]);
function Navigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navbarext, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        placeholder: "Ara"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
        className: "fas fa-search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        flex: 6,
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "20px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            display: "block",
            backgroundColor: "#2C7585",
            color: "white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            textAlign: "center",
            lineHeight: "35px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            display: "block",
            backgroundColor: "#E16060",
            color: "white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            textAlign: "center",
            lineHeight: "35px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-pencil-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            display: "block",
            backgroundColor: "lightgrey",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            textAlign: "center",
            lineHeight: "35px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            class: "fas fa-bell fa-lg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              display: "block",
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: "red",
              color: "white",
              fontSize: "10px",
              height: "20px",
              width: "20px",
              textAlign: "center",
              right: "-10px",
              top: "-5px",
              lineHeight: "20px"
            },
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/styledcomponents/button.js":
/*!***********************************************!*\
  !*** ./components/styledcomponents/button.js ***!
  \***********************************************/
/*! exports provided: Button, Global, Porfileimage, Black */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Porfileimage", function() { return Porfileimage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "button__Button",
  componentId: "sc-1dlve5z-0"
})(({
  color,
  backcolor,
  width,
  hoverback
}) => `
width:${width};
padding:10px;
outline:none;
border:none;
border-radius:8px;
color:${color};
background-color:${backcolor};
transition:0.3s;
&:hover {
    background-color:${hoverback};
    cursor:pointer;
}
`);
const Global = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
 *{
     box-sizing:border-box;
     margin:0px;
     font-family: 'Shippori Mincho', serif;
 }

 body {
    background-color:#EAEAEA;
    height:100%;
 }
`;
const Porfileimage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Porfileimage",
  componentId: "sc-1dlve5z-1"
})(({
  width,
  height,
  profile
}) => `
width:${width};
height:${height};
background-color:white;
border-radius:50%;
background-image:url(${profile});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`);
const Black = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Black",
  componentId: "sc-1dlve5z-2"
})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], ({
  aktif
}) => aktif ? "40" : "-300", ({
  aktif
}) => aktif ? "0.7" : "0");

/***/ }),

/***/ "./containers/Layout/mainlayout.js":
/*!*****************************************!*\
  !*** ./containers/Layout/mainlayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mainlayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pages/Main/Lefttoolbar */ "./components/pages/Main/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Navigation */ "./components/shared/Navigation.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js";




function Mainlayout({
  children
}) {
  //istekler burada
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      paddingLeft: "250px",
      paddingTop: "100px",
      height: "100%",
      paddingRight: "25px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./containers/pages/Content.js":
/*!*************************************!*\
  !*** ./containers/pages/Content.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Content.js";







const Exteriorcontent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__Exteriorcontent",
  componentId: "t38n1c-0"
})(["background-color:white;max-width:950px;width:100%"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__ImageDiv",
  componentId: "t38n1c-1"
})(["position:relative;width:100%;height:400px;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__ContentDiv",
  componentId: "t38n1c-2"
})(["margin-top:40px;padding:10px;"]);
const ProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__ProfileDiv",
  componentId: "t38n1c-3"
})(["box-sizing:border-box;padding:10px;display:flex;align-items:center;"]);
const Attribute = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__Attribute",
  componentId: "t38n1c-4"
})(["display:", ";position:absolute;top:35px;right:35px;border-radius:7px;background-color:white;"], ({
  active
}) => active ? "block" : "none");
const Attributeholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Content__Attributeholder",
  componentId: "t38n1c-5"
})(["display:flex;align-items:center;padding:5px;border-bottom:1px solid lightgrey;&:hover{background-color:#E2E3E3;cursor:pointer;}"]); //todo map array to create attribute list

function Content() {
  const {
    current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Gönderiyi Kaydet"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Gönderiyi Beğen"
  }, {
    icon: "fas fa-retweet",
    desc: "Gönderiyi Profil Sayfamda Göster"
  }]);
  const {
    0: content,
    1: setcontent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: active,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: errmsg,
    1: seterrmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    id
  } = router.query;
  console.log(id);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["Contentreq"])({
      contentId: id,
      setcontent: setcontent,
      seterrmsg: seterrmsg
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriorcontent, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/car.jpg",
          style: {
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activefunc: () => setactive(!active),
          className: "fas fa-ellipsis-h",
          Iconconfig: {
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            borderRadius: "50%",
            width: "25px",
            height: "25px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attribute, {
          active: active,
          children: current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attributeholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: item.icon,
              Iconconfig: {
                width: "28px",
                height: "28px",
                rotate: true
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                fontSize: "13px"
              },
              children: item.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 30
            }, this)]
          }, item.icon, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Porfileimage"], {
          profile: "/black.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Duhan \xD6zt\xFCrk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              backgroundColor: "#DE3C3C",
              color: "white",
              padding: "4px",
              borderRadius: "6px"
            },
            children: "Yay\u0131nlanma tarihi: 12/08/2020"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 54
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: content.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: content.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/content/[id].js":
/*!*******************************!*\
  !*** ./pages/content/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Layout/mainlayout */ "./containers/Layout/mainlayout.js");
/* harmony import */ var _containers_pages_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/pages/Content */ "./containers/pages/Content.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\content\\[id].js";





function Content(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 8
  }, this);
}
Content.layout = _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__["default"]; //query zaten bir obje

Content.getInitialProps = ({
  query
}) => {
  return {
    query: query
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL0xlZnR0b29sYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvcGFnZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250ZW50Ly5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1odG1sLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic3RhdGUiLCJsb2dpbnJlcSIsInNldGxvZ2dlZCIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJnZXQiLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiZXJyb3IiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiSWNvbnNwYW4iLCJzdHlsZWQiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImJhY2tjb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibGluZWhlaWdodCIsImhvdmVyY29sb3IiLCJob3ZlcmJhY2siLCJyb3RhdGUiLCJJY29uIiwiY2xhc3NOYW1lIiwiSWNvbmNvbmZpZyIsImFjdGl2ZWZ1bmMiLCJFeHRlcmlvckRpdiIsImRpdiIsImFjdGl2ZSIsIklubmVyRGl2IiwiSW1hZ2VEaXYiLCJOYXZpZ2F0aW9uRGl2IiwiTGkiLCJsaSIsIkNsb3Nlb3BlbiIsIkxlZnR0b29sYmFyIiwiY3VycmVudCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwib3BlbiIsInNldG9wZW4iLCJ1c2VTdGF0ZSIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwicGFkZGluZyIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFwIiwiaXRlbSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIk5hdmJhcmV4dCIsIkljb25ob2xkZXIiLCJJbnB1dEhvbGRlciIsIklucHV0IiwiaW5wdXQiLCJJY29uc2VjdXJlIiwiaSIsIk5hdmlnYXRpb24iLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJCdXR0b24iLCJidXR0b24iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlBvcmZpbGVpbWFnZSIsInByb2ZpbGUiLCJCbGFjayIsImFrdGlmIiwiTWFpbmxheW91dCIsImNoaWxkcmVuIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwiRXh0ZXJpb3Jjb250ZW50IiwiQ29udGVudERpdiIsIlByb2ZpbGVEaXYiLCJBdHRyaWJ1dGUiLCJBdHRyaWJ1dGVob2xkZXIiLCJDb250ZW50IiwiY29udGVudCIsImVycm1zZyIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJvYmplY3RGaXQiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHJvcHMiLCJsYXlvdXQiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdB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O0FBQUE7QUFBQSxZQURKLGVBS0cscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxILGVBTUcscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBVUg7QUFFRFYsT0FBTyxDQUFDVyxNQUFSLEdBQWVyQixxRUFBZixDLENBRUE7O0FBQ0FVLE9BQU8sQ0FBQ1ksZUFBUixHQUF3QixDQUFDO0FBQUNQO0FBQUQsQ0FBRCxLQUFXO0FBRWpDLFNBQU87QUFBQ0EsU0FBSyxFQUFDQTtBQUFQLEdBQVA7QUFFRCxDQUpELEM7Ozs7Ozs7Ozs7O0FDdkJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2NvbnRlbnQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY29udGVudC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuICAgaWYoZGF0YS5zdGF0ZSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZihkYXRhLndyb25nPVwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3Jvbmc9XCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIFxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgLy9rYXnEsXQgb2xtYW7EsXogYmHFn2FyxLFsxLFcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXJ9KT0+e1xyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxjdXJyZW50ZGF0YSxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXJ9KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn1gLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoVXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUpPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgICAvLy4uLlxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSlcclxuICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhYWFhYWFhYVwiKTtcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSWNvbnNwYW49c3R5bGVkLnNwYW4oKHt3aWR0aCxoZWlnaHQsY29sb3IsYmFja2NvbG9yLHBvc2l0aW9uLHRvcCxsZWZ0LHJpZ2h0LGJvdHRvbSxsaW5laGVpZ2h0LGhvdmVyY29sb3IsaG92ZXJiYWNrLHJvdGF0ZX0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5saW5lLWhlaWdodDoke2xpbmVoZWlnaHR9O1xyXG53aWR0aDoke3dpZHRofTtcclxuaGVpZ2h0OiR7aGVpZ2h0fTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zZm9ybTpyb3RhdGUoJHtyb3RhdGUgPyBcIjE4MGRlZ1wiIDogXCIwZGVnXCJ9KTtcclxuJjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gY29sb3I6JHtob3ZlcmNvbG9yfTtcclxufVxyXG5gKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHtjbGFzc05hbWUsSWNvbmNvbmZpZyxhY3RpdmVmdW5jfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PjwvaT5cclxuICAgICAgIDwvSWNvbnNwYW4+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbm92ZXJmbG93OmhpZGRlbjtcclxubGVmdDowO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbnotaW5kZXg6MTUwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMzQjQwNTg7XHJcbnRyYW5zaXRpb246YWxsIDAuMnM7XHJcbndpZHRoOiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCIyMDBweFwiIDogXCI3MHB4XCJ9XHJcbmBcclxuY29uc3QgSW5uZXJEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nOjVweDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTmF2aWdhdGlvbkRpdj1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG95b3I6eWVsbG93O1xyXG5tYXJnaW4tdG9wOjMwcHg7XHJcbndpZHRoOjk2JTtcclxuYFxyXG5jb25zdCBMaT1zdHlsZWQubGlgXHJcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG4vL2NvbnN0IEljb249c3R5bGVkLmlgXHJcbi8vY29sb3I6I0M3MDAzOTtcclxuLy9gXHJcbmNvbnN0IENsb3Nlb3Blbj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzoxMHB4O1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBMZWZ0dG9vbGJhcj0oKT0+e1xyXG4gICAgY29uc3Qge2N1cnJlbnR9PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiS2F5ZGVkaWxlbmxlclwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiQmXEn2VuaWxlbmxlclwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIlJldHdlZXRcIn1dKVxyXG4gICAgY29uc3QgW29wZW4sc2V0b3Blbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JEaXYgYWN0aXZlPXtvcGVufT5cclxuICAgICAgICAgICAgPElubmVyRGl2PlxyXG4gICAgICAgICAgICAgICAgey8qICA8Q2xvc2VvcGVuPlxyXG4gICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgPC9DbG9zZW9wZW4+Ki99XHJcbiAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PnNldG9wZW4oIW9wZW4pfSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGNvbG9yOlwid2hpdGVcIixyb3RhdGU6b3BlbiA/IHRydWUgOiBmYWxzZX19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e1wiL2Nhci5qcGdcIn0gIHdpZHRoPXtvcGVuID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0gaGVpZ2h0PXtvcGVuID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCJ9fT48c3BhbiBzdHlsZT17e2Rpc3BsYXk6b3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+RW1yZSDDlnplcjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpvcGVuID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0NGQ0ZDRlwiLGNvbG9yOlwiI0U4NDA0MFwifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6b3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLGZvbnRTaXplOlwiMTRweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyZXh0PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjY1cHg7XHJcbnBhZGRpbmctbGVmdDoyNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojZjhmNGZmO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjEwMDtcclxuYFxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmZsZXg6MjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjVweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbmJvcmRlcjpub25lO1xyXG53aWR0aDoxMDAlO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNDQ0NGQ0U7XHJcbmNvbG9yOmJsYWNrO1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbiY6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDJweCAzcHggIzJBREI5MDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnBhZGRpbmc6N3B4O1xyXG5ib3JkZXItbGVmdDoxcHggc29saWQgd2hpdGU7XHJcbnJpZ2h0OjIwcHg7XHJcbmNvbG9yOmJsYWNrO1xyXG50b3A6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dD5cclxuICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJBcmFcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDo2LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLG1hcmdpblJpZ2h0OlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiMyQzc1ODVcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6XCIzNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsYmFja2dyb3VuZENvbG9yOlwiI0UxNjA2MFwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjM1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcImxpZ2h0Z3JleVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMzVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJlbGwgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGJhY2tncm91bmRDb2xvcjpcInJlZFwiLGNvbG9yOlwid2hpdGVcIixmb250U2l6ZTpcIjEwcHhcIixoZWlnaHQ6XCIyMHB4XCIsd2lkdGg6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIscmlnaHQ6XCItMTBweFwiLHRvcDpcIi01cHhcIixsaW5lSGVpZ2h0OlwiMjBweFwifX0+Mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTmF2YmFyZXh0PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1NoaXBwb3JpIE1pbmNobycsIHNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUFFQUVBO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjQwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGVmdHRvb2xiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gICAgLy9pc3Rla2xlciBidXJhZGFcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMjUwcHhcIixwYWRkaW5nVG9wOlwiMTAwcHhcIixoZWlnaHQ6XCIxMDAlXCIscGFkZGluZ1JpZ2h0OlwiMjVweFwifX0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPjwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPExlZnR0b29sYmFyPjwvTGVmdHRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUsdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0ljb25cIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7Q29udGVudHJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmNvbnRlbnQ9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG53aWR0aDoxMDAlXHJcbmBcclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MDBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjQwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZURpdj1zdHlsZWQuZGl2YFxyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbnBhZGRpbmc6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuJjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6I0UyRTNFMztcclxuIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuLy90b2RvIG1hcCBhcnJheSB0byBjcmVhdGUgYXR0cmlidXRlIGxpc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoKXtcclxuXHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJHw7ZuZGVyaXlpIEtheWRldFwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiR8O2bmRlcml5aSBCZcSfZW5cIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJHw7ZuZGVyaXlpIFByb2ZpbCBTYXlmYW1kYSBHw7ZzdGVyXCJ9XSlcclxuICAgIGNvbnN0IFtjb250ZW50LHNldGNvbnRlbnRdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJybXNnLHNldGVycm1zZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfT1yb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIENvbnRlbnRyZXEoe1xyXG4gICAgICAgICAgICBjb250ZW50SWQ6aWQsXHJcbiAgICAgICAgICAgIHNldGNvbnRlbnQ6c2V0Y29udGVudCxcclxuICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICB9KTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nhci5qcGdcIn0gc3R5bGU9e3tvYmplY3RGaXQ6XCJjb3ZlclwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn19ID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiAgYWN0aXZlZnVuYz17KCk9PnNldGFjdGl2ZSghYWN0aXZlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjEwcHhcIixyaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIyNXB4XCIsaGVpZ2h0OlwiMjVweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdHRyaWJ1dGUgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlaG9sZGVyIGtleT17aXRlbS5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMjhweFwiLGhlaWdodDpcIjI4cHhcIixyb3RhdGU6dHJ1ZX19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixmb250U2l6ZTpcIjEzcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGVob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGU+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PjxzcGFuPkR1aGFuIMOWenTDvHJrPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+PHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjREUzQzNDXCIsY29sb3I6XCJ3aGl0ZVwiLHBhZGRpbmc6XCI0cHhcIixib3JkZXJSYWRpdXM6XCI2cHhcIn19PllhecSxbmxhbm1hIHRhcmloaTogMTIvMDgvMjAyMDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntjb250ZW50LnN1YnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0V4dGVyaW9yY29udGVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYWlubGF5b3V0IGZyb20gXCIuLi8uLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0XCI7XHJcbmltcG9ydCBNeWNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvcGFnZXMvQ29udGVudFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8UmVhY3QuRnJhZ21lbnQ+IFxyXG4gICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlJmRpc3BsYXk9c3dhcCZmYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgIDxNeWNvbnRlbnQvPlxyXG4gICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuQ29udGVudC5sYXlvdXQ9TWFpbmxheW91dDtcclxuXHJcbi8vcXVlcnkgemF0ZW4gYmlyIG9iamVcclxuQ29udGVudC5nZXRJbml0aWFsUHJvcHM9KHtxdWVyeX0pPT57XHJcblxyXG4gIHJldHVybiB7cXVlcnk6cXVlcnl9O1xyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==