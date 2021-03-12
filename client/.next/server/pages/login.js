module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
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

/***/ "./components/UI/window.js":
/*!*********************************!*\
  !*** ./components/UI/window.js ***!
  \*********************************/
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
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\window.js";



const External = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__External",
  componentId: "o1iyjf-0"
})(["position:absolute;left:50%;transform:translate(-50%,-50%);width:300px;height:200px;transition:0.5s;top:", ";background-color:white;z-index:25;border-radius:10px;"], ({
  aktif
}) => aktif ? "50%" : "-200px");
const Textbox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__Textbox",
  componentId: "o1iyjf-1"
})(["width:80%;margin:50px auto;text-align:center;"]);

const Window = ({
  children,
  active,
  type
}) => {
  var icon = null;

  if (type == "error") {
    icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fas fa-exclamation-circle fa-2x",
      style: {
        color: "red",
        marginBottom: "10px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined);
  } else if (type == "confirm") {
    icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fas fa-check-circle fa-2x",
      style: {
        color: "green",
        marginBottom: "10px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Black"], {
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(External, {
      aktif: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textbox, {
        children: [icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: 'center',
            wordWrap: 'break-word',
            lineHeight: "25px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Window);

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

/***/ "./context/Usercontext.js":
/*!********************************!*\
  !*** ./context/Usercontext.js ***!
  \********************************/
/*! exports provided: createusercontext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createusercontext", function() { return createusercontext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\context\\Usercontext.js";

const createusercontext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const Usercontext = ({
  children
}) => {
  const {
    0: logged,
    1: setlogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: userdata,
    1: setuserdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: currentpostId,
    1: setcurrentpostId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: currentuserId,
    1: setcurrentuserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(createusercontext.Provider, {
    value: {
      logged: logged,
      setlogged: setlogged,
      userdata: userdata,
      setuserdata: setuserdata
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Usercontext);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_UI_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/window */ "./components/UI/window.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__ImageDiv",
  componentId: "sc-1x3o0wi-0"
})(["background-image:url(\"https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg\");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1x3o0wi-1"
})(["color:white;width:88%;padding:10px;padding-left:35px;border:none;outline:none;transition:0.5s;background:transparent;::placeholder{color:white}&:focus{background-color:rgba(0,0,0,0.5);}"]);
const WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["border:1px solid white;display:flex;padding-right:20px;padding-left:20px;padding-top:20px;flex-direction:column;align-items:center;text-align:center;width:450px;height:550px;background-color:rgba(0,0,0,0.5);transition:0.5s;transform:rotate(0deg);&:hover{}"]);
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["position:relative;width:100%;border-bottom:1px solid white;padding:5px;margin-bottom:20px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1x3o0wi-4"
})(["margin-top:10px;margin-left:10px;width:150px;padding:10px;outline:none;border:none;border-radius:8px;color:white;background:transparent;transition:0.3s;border:1px solid white;&:hover{background-color:rgba(0,0,0,1);cursor:pointer;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.i.withConfig({
  displayName: "login__Icon",
  componentId: "sc-1x3o0wi-5"
})(["margin-left:10px;"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.i.withConfig({
  displayName: "login__Iconsecure",
  componentId: "sc-1x3o0wi-6"
})(["position:absolute;border:1px solid grey;background-color:black;padding:7px;left:-15px;color:white;top:50%;transform:translate(50%,-50%);"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__Logo",
  componentId: "sc-1x3o0wi-7"
})(["width:100px;height:100px;border-radius:50%;background-image:url(\"https://evrimagaci.org/public/images/logo-v3.svg?v=1\");background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const Global = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
 *{
     margin:0px;
     padding:0px;
     font-family: 'Oswald', sans-serif;
 }
`;

const Login = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    setlogged,
    setuserdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_2__["createusercontext"]);
  const {
    0: currenturl,
    1: setcurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: backenderror,
    1: setbackenderror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: errormsg,
    1: seterror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: register,
    1: setregister
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Login");
  const {
    0: windowactive,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: inputs,
    1: setinputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Login: {
      Eposta: {
        placeholder: "E-posta",
        func: "Login",
        value: "",
        icon: "far fa-envelope"
      },
      Şifre: {
        placeholder: "Şifre",
        func: "Login",
        value: "",
        icon: "fas fa-unlock-alt"
      }
    },
    Register: {
      İsim: {
        placeholder: "İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user"
      },
      Soyisim: {
        placeholder: "Soy İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user"
      },
      Eposta: {
        placeholder: "E-posta",
        func: "Register",
        value: "",
        icon: "far fa-envelope"
      },
      Şifre: {
        placeholder: "Şifre",
        func: "Register",
        value: "",
        icon: "fas fa-unlock-alt"
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log("rendered");
    const random = Math.floor(Math.random() * 15);
    /*axioss.get("https://api.pexels.com/v1/search?query=magic",{
     headers:{
        "Authorization":"563492ad6f917000010000014adb809e89634602a896d8e62a850401",
     }
    })
    .then((res)=>{
         console.log(res.data.photos);  
         setcurrent(res.data.photos[3].src.original);
     })
     */
  }, []);

  const Submithandler = () => {
    console.log("submit");

    const currentinput = _objectSpread({}, inputs);

    const ourdata = {};

    for (const key in currentinput[register]) {
      ourdata[key] = currentinput[register][key].value;
    }

    console.log(ourdata);

    switch (register) {
      case "Login":
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["loginreq"])({
          setlogged: setlogged,
          userdata: ourdata,
          router: router,
          setuserdata: setuserdata,
          seterrmsg: seterror,
          setbackenderror: setbackenderror,
          setactive: setactive
        });
        break;

      case "Register":
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["resigterreq"])({
          setbackenderror: setbackenderror,
          userdata: ourdata,
          seterrmsg: seterror,
          setactive: setactive
        });
    }
  };

  const changehandler = (e, type, value) => {
    const inputsget = _objectSpread({}, inputs);

    inputsget[type][value].value = e.target.value;
    setinputs(inputsget);
  };

  var backenderrormessage = "";

  if (errormsg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Something Went Wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 16
    }, undefined);
  }

  if (backenderror == "EXİST") {
    backenderrormessage = "Girdğiniz email zaten kullanımda!";
  } else if (backenderror == "WP") {
    backenderrormessage = "Girdiğiniz şifre yanlış!";
  } else if (backenderror == "WE") {
    backenderrormessage = "Girdiğiniz e-posta yanlış!";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
    urlget: currenturl,
    aktif: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Font+Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      active: windowactive,
      type: "error",
      children: backenderrormessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 3
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          color: "white",
          display: register == "Register" ? "none" : "block",
          flex: 4,
          wordWrap: "break-word"
        },
        children: "Hakikatin temsilcisinin en az oldu\u011Fu zaman, onu dile getirmenin tehlikeli oldu\u011Fu zaman de\u011Fil, can s\u0131k\u0131c\u0131 oldu\u011Fu zamand\u0131r."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "80%",
          flex: 6
        },
        children: [Object.keys(inputs[register]).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: inputs[register][item]["icon"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            value: inputs[register][item]["value"],
            onChange: e => changehandler(e, register, item),
            placeholder: inputs[register][item]["placeholder"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 29
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 26
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: Submithandler,
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 64
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: register == "Login" ? () => setregister("Register") : Submithandler,
          children: register == "Login" ? "Hesap Oluştur" : "Kayıt ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzdGF0ZSIsImxvZ2lucmVxIiwic2V0bG9nZ2VkIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsImdldCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJlcnJvciIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwiYXR0cmlidXRlIiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJFeHRlcm5hbCIsInN0eWxlZCIsImRpdiIsImFrdGlmIiwiVGV4dGJveCIsIldpbmRvdyIsImNoaWxkcmVuIiwiYWN0aXZlIiwidHlwZSIsImljb24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsIndvcmRXcmFwIiwibGluZUhlaWdodCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJjcmVhdGV1c2VyY29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImxvZ2dlZCIsInVzZVN0YXRlIiwiY3VycmVudHBvc3RJZCIsInNldGN1cnJlbnRwb3N0SWQiLCJjdXJyZW50dXNlcklkIiwic2V0Y3VycmVudHVzZXJJZCIsIkltYWdlRGl2IiwiSW5wdXQiLCJpbnB1dCIsIldpbmRvd0RpdiIsIklucHV0SG9sZGVyIiwiSWNvbiIsImkiLCJJY29uc2VjdXJlIiwiTG9nbyIsIkxvZ2luIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsImN1cnJlbnR1cmwiLCJzZXRjdXJyZW50IiwiYmFja2VuZGVycm9yIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsInJlZ2lzdGVyIiwic2V0cmVnaXN0ZXIiLCJ3aW5kb3dhY3RpdmUiLCJpbnB1dHMiLCJzZXRpbnB1dHMiLCJFcG9zdGEiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsIsWeaWZyZSIsIlJlZ2lzdGVyIiwixLBzaW0iLCJTb3lpc2ltIiwidXNlRWZmZWN0IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiU3VibWl0aGFuZGxlciIsImN1cnJlbnRpbnB1dCIsIm91cmRhdGEiLCJrZXkiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsImlucHV0c2dldCIsInRhcmdldCIsImJhY2tlbmRlcnJvcm1lc3NhZ2UiLCJmbGV4IiwiZGlzcGxheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBRUEsTUFBTUMsWUFBWSxHQUFDLENBQUM7QUFBQ0MsTUFBRDtBQUFNQyxXQUFOO0FBQWdCQztBQUFoQixDQUFELEtBQThCO0FBQzlDLE1BQUdGLElBQUksQ0FBQ0csS0FBTCxJQUFjLFNBQWpCLEVBQTJCO0FBQ3hCLFdBQU8sSUFBUDtBQUNGLEdBRkQsTUFHSTtBQUNGRixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FD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Q0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcbiAgIGlmKGRhdGEuc3RhdGUgPT0gXCJzdWNjZXNzXCIpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYoZGF0YS53cm9uZz1cIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nPVwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX1RPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIC8va2F5xLF0IG9sbWFuxLF6IGJhxZ9hcsSxbMSxXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csY3VycmVudGRhdGEsc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyfSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9YCx7Y29udGVudGRhdGE6Y29udGVudGRhdGF9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKFVzZXJJZCxQb3N0SWQsYXR0cmlidXRlKT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICAgLy8uLi5cclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcblxyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpXHJcbiAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFhYWFhYWFcIik7XHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcblxyXG5jb25zdCBFeHRlcm5hbD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDoyMDBweDtcclxudHJhbnNpdGlvbjowLjVzO1xyXG50b3A6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI1MCVcIiA6IFwiLTIwMHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjI1O1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFRleHRib3g9c3R5bGVkLmRpdmBcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46NTBweCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgV2luZG93PSh7Y2hpbGRyZW4sYWN0aXZlLHR5cGV9KT0+e1xyXG4gICAgdmFyIGljb249IG51bGw7XHJcbiAgICBpZih0eXBlID09IFwiZXJyb3JcIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwicmVkXCIsbWFyZ2luQm90dG9tOlwiMTBweFwifX0+PC9pPlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlID09IFwiY29uZmlybVwiKXtcclxuICAgICAgIGljb249PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBmYS0yeFwiIHN0eWxlPXt7Y29sb3I6XCJncmVlblwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8QmxhY2sgYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICA8RXh0ZXJuYWwgYWt0aWY9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgIDxUZXh0Ym94PlxyXG4gICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsd29yZFdyYXA6J2JyZWFrLXdvcmQnLGxpbmVIZWlnaHQ6XCIyNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvVGV4dGJveD5cclxuICAgICAgICAgPC9FeHRlcm5hbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdTaGlwcG9yaSBNaW5jaG8nLCBzZXJpZjtcclxuIH1cclxuXHJcbiBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VBRUFFQTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI0MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcbiAgICBjb25zdFtsb2dnZWQsc2V0bG9nZ2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdFtjdXJyZW50cG9zdElkLHNldGN1cnJlbnRwb3N0SWRdPXVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3RbY3VycmVudHVzZXJJZCxzZXRjdXJyZW50dXNlcklkXT11c2VTdGF0ZShudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7bG9naW5yZXEscmVzaWd0ZXJyZXF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvd2luZG93XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyNTY4NTIvcGV4ZWxzLXBob3RvLTQyNTY4NTIuanBlZ1wiKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5jb2xvcjp3aGl0ZTtcclxud2lkdGg6ODglO1xyXG5wYWRkaW5nOjEwcHg7XHJcbnBhZGRpbmctbGVmdDozNXB4O1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG4mOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvd0Rpdj1zdHlsZWQuZGl2YFxyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NDUwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiY6aG92ZXIge1xyXG4gICAgXHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbmBcclxuY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvLXYzLnN2Zz92PTFcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBwYWRkaW5nOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0e3NldGxvZ2dlZCxzZXR1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdFtjdXJyZW50dXJsLHNldGN1cnJlbnRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3RbYmFja2VuZGVycm9yLHNldGJhY2tlbmRlcnJvcl09dXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtyZWdpc3RlcixzZXRyZWdpc3Rlcl09dXNlU3RhdGUoXCJMb2dpblwiKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2lucHV0cyxzZXRpbnB1dHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBMb2dpbjp7XHJcbiAgICAgICAgICAgIEVwb3N0YTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICDFnmlmcmU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyOntcclxuICAgICAgICAgICAgxLBzaW06e1xyXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBTb3lpc2ltOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiU295IMSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgRXBvc3RhOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRS1wb3N0YVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhciBmYS1lbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIMWeaWZyZTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpO1xyXG5cclxuICAgICAgIGNvbnN0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSk7XHJcblxyXG4gICAgICAgLypheGlvc3MuZ2V0KFwiaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9bWFnaWNcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zWzNdLnNyYy5vcmlnaW5hbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdGhhbmRsZXI9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50aW5wdXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgY29uc3Qgb3VyZGF0YT17fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdXJyZW50aW5wdXRbcmVnaXN0ZXJdKSB7XHJcbiAgICAgICAgICAgIG91cmRhdGFba2V5XT1jdXJyZW50aW5wdXRbcmVnaXN0ZXJdW2tleV0udmFsdWU7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG91cmRhdGEpO1xyXG4gICAgICAgIHN3aXRjaChyZWdpc3Rlcil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbG9naW5yZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICByb3V0ZXI6cm91dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJlZ2lzdGVyXCI6ICBcclxuICAgICAgICAgICAgICAgIHJlc2lndGVycmVxKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGUsdHlwZSx2YWx1ZSk9PntcclxuICAgICAgICAgY29uc3QgaW5wdXRzZ2V0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgICBpbnB1dHNnZXRbdHlwZV1bdmFsdWVdLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFja2VuZGVycm9ybWVzc2FnZT1cIlwiO1xyXG4gICAgaWYoZXJyb3Jtc2cpe1xyXG4gICAgICAgIHJldHVybiA8aDI+U29tZXRoaW5nIFdlbnQgV3JvbmcuLi48L2gyPlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihiYWNrZW5kZXJyb3IgPT0gXCJFWMSwU1RcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkxJ9pbml6IGVtYWlsIHphdGVuIGt1bGxhbsSxbWRhIVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGJhY2tlbmRlcnJvciA9PSBcIldQXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZGnEn2luaXogxZ9pZnJlIHlhbmzEscWfIVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGJhY2tlbmRlcnJvciA9PSBcIldFXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZGnEn2luaXogZS1wb3N0YSB5YW5sxLHFnyFcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEltYWdlRGl2IHVybGdldD17Y3VycmVudHVybH0gYWt0aWY9e3RydWV9PlxyXG4gICAgICAgICAgIDxHbG9iYWwvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Rm9udCtOYW1lXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgPFdpbmRvdyBhY3RpdmU9e3dpbmRvd2FjdGl2ZX0gdHlwZT1cImVycm9yXCI+e2JhY2tlbmRlcnJvcm1lc3NhZ2V9PC9XaW5kb3c+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDozfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvPjwvTG9nbz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxwICBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixkaXNwbGF5OnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiLGZsZXg6NCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIn19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLGZsZXg6Nn19PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dHNbcmVnaXN0ZXJdKS5tYXAoaXRlbT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRIb2xkZXIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcImljb25cIl19PjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInZhbHVlXCJdfSBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9ICBwbGFjZWhvbGRlcj17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXVtcInBsYWNlaG9sZGVyXCJdfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1N1Ym1pdGhhbmRsZXJ9ID5HaXJpxZ8gWWFwIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9JY29uPjwvQnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/ICgpPT4gc2V0cmVnaXN0ZXIoXCJSZWdpc3RlclwiKSA6IFN1Ym1pdGhhbmRsZXJ9PntyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyBcIkhlc2FwIE9sdcWfdHVyXCIgOiBcIkthecSxdCBvbFwifTwvQnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICA8L1dpbmRvd0Rpdj5cclxuICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==