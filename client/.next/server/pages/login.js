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
/*! exports provided: loginreq, resigterreq, producereq, Homereq, Createrelationreq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
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
     padding:0px;
     font-family: 'Shippori Mincho', serif;
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
    lineNumber: 9,
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
      lineNumber: 232,
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
      lineNumber: 247,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Font+Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      active: windowactive,
      type: "error",
      children: backenderrormessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 3
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
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
        lineNumber: 257,
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
            lineNumber: 263,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            value: inputs[register][item]["value"],
            onChange: e => changehandler(e, register, item),
            placeholder: inputs[register][item]["placeholder"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 29
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 26
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: Submithandler,
          children: ["Giri\u015F Yap ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 64
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          onClick: register == "Login" ? () => setregister("Register") : Submithandler,
          children: register == "Login" ? "Hesap Oluştur" : "Kayıt ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 246,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzdGF0ZSIsImxvZ2lucmVxIiwic2V0bG9nZ2VkIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsImdldCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJlcnJvciIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwiYXR0cmlidXRlIiwiRXh0ZXJuYWwiLCJzdHlsZWQiLCJkaXYiLCJha3RpZiIsIlRleHRib3giLCJXaW5kb3ciLCJjaGlsZHJlbiIsImFjdGl2ZSIsInR5cGUiLCJpY29uIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJ3b3JkV3JhcCIsImxpbmVIZWlnaHQiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwiaGVpZ2h0IiwicHJvZmlsZSIsIkJsYWNrIiwiY3JlYXRldXNlcmNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJsb2dnZWQiLCJ1c2VTdGF0ZSIsIkltYWdlRGl2IiwiSW5wdXQiLCJpbnB1dCIsIldpbmRvd0RpdiIsIklucHV0SG9sZGVyIiwiSWNvbiIsImkiLCJJY29uc2VjdXJlIiwiTG9nbyIsIkxvZ2luIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsImN1cnJlbnR1cmwiLCJzZXRjdXJyZW50IiwiYmFja2VuZGVycm9yIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsInJlZ2lzdGVyIiwic2V0cmVnaXN0ZXIiLCJ3aW5kb3dhY3RpdmUiLCJpbnB1dHMiLCJzZXRpbnB1dHMiLCJFcG9zdGEiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsIsWeaWZyZSIsIlJlZ2lzdGVyIiwixLBzaW0iLCJTb3lpc2ltIiwidXNlRWZmZWN0IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiU3VibWl0aGFuZGxlciIsImN1cnJlbnRpbnB1dCIsIm91cmRhdGEiLCJrZXkiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsImlucHV0c2dldCIsInRhcmdldCIsImJhY2tlbmRlcnJvcm1lc3NhZ2UiLCJmbGV4IiwiZGlzcGxheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7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c0IsZUFBdEIsR0FBd0M7QUFBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURIO0FBNkJILENBekpEOztBQTJKZVIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuUkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuICAgaWYoZGF0YS5zdGF0ZSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZihkYXRhLndyb25nPVwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3Jvbmc9XCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIFxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgLy9rYXnEsXQgb2xtYW7EsXogYmHFn2FyxLFsxLFcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXJ9KT0+e1xyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxjdXJyZW50ZGF0YSxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXJ9KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn1gLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoVXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUpPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgICAvLy4uLlxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5cclxuY29uc3QgRXh0ZXJuYWw9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbnRyYW5zaXRpb246MC41cztcclxudG9wOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTAlXCIgOiBcIi0yMDBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDoyNTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjUwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvdz0oe2NoaWxkcmVuLGFjdGl2ZSx0eXBlfSk9PntcclxuICAgIHZhciBpY29uPSBudWxsO1xyXG4gICAgaWYodHlwZSA9PSBcImVycm9yXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcInJlZFwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PSBcImNvbmZpcm1cIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPEJsYWNrIGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgPEV4dGVybmFsIGFrdGlmPXthY3RpdmV9PlxyXG4gICAgICAgICAgICA8VGV4dGJveD5cclxuICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLHdvcmRXcmFwOidicmVhay13b3JkJyxsaW5lSGVpZ2h0OlwiMjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L1RleHRib3g+XHJcbiAgICAgICAgIDwvRXh0ZXJuYWw+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcclxuIiwiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnU2hpcHBvcmkgTWluY2hvJywgc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjQwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGV1c2VyY29udGV4dD1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyY29udGV4dD0oe2NoaWxkcmVufSk9PntcclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZShudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7bG9naW5yZXEscmVzaWd0ZXJyZXF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvd2luZG93XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyNTY4NTIvcGV4ZWxzLXBob3RvLTQyNTY4NTIuanBlZ1wiKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5jb2xvcjp3aGl0ZTtcclxud2lkdGg6ODglO1xyXG5wYWRkaW5nOjEwcHg7XHJcbnBhZGRpbmctbGVmdDozNXB4O1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG4mOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvd0Rpdj1zdHlsZWQuZGl2YFxyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NDUwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiY6aG92ZXIge1xyXG4gICAgXHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcblxyXG5gXHJcbmNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG5cclxubWFyZ2luLXRvcDoxMHB4O1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG53aWR0aDoxNTBweDtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6d2hpdGU7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnRyYW5zaXRpb246MC4zcztcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uPXN0eWxlZC5pYFxyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5cclxuYFxyXG5cclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvcmRlcjoxcHggc29saWQgZ3JleTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxucGFkZGluZzo3cHg7XHJcbmxlZnQ6LTE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgTG9nbz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuaGVpZ2h0OjEwMHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby12My5zdmc/dj0xXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5gXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdHtzZXRsb2dnZWQsc2V0dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W2JhY2tlbmRlcnJvcixzZXRiYWNrZW5kZXJyb3JdPXVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbcmVnaXN0ZXIsc2V0cmVnaXN0ZXJdPXVzZVN0YXRlKFwiTG9naW5cIik7XHJcbiAgICBjb25zdFt3aW5kb3dhY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtpbnB1dHMsc2V0aW5wdXRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBFcG9zdGE6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgxZ5pZnJlOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3Rlcjp7XHJcbiAgICAgICAgICAgIMSwc2ltOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU295aXNpbTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIlNveSDEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEVwb3N0YTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICDFnmlmcmU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfX0pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJlZFwiKTtcclxuXHJcbiAgICAgICBjb25zdCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpO1xyXG5cclxuICAgICAgIC8qYXhpb3NzLmdldChcImh0dHBzOi8vYXBpLnBleGVscy5jb20vdjEvc2VhcmNoP3F1ZXJ5PW1hZ2ljXCIse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOlwiNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxNGFkYjgwOWU4OTYzNDYwMmE4OTZkOGU2MmE4NTA0MDFcIixcclxuICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucGhvdG9zKTsgIFxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KHJlcy5kYXRhLnBob3Rvc1szXS5zcmMub3JpZ2luYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBTdWJtaXRoYW5kbGVyPSgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudGlucHV0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGNvbnN0IG91cmRhdGE9e307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudGlucHV0W3JlZ2lzdGVyXSkge1xyXG4gICAgICAgICAgICBvdXJkYXRhW2tleV09Y3VycmVudGlucHV0W3JlZ2lzdGVyXVtrZXldLnZhbHVlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhvdXJkYXRhKTtcclxuICAgICAgICBzd2l0Y2gocmVnaXN0ZXIpe1xyXG4gICAgICAgICAgICBjYXNlIFwiTG9naW5cIjpcclxuICAgICAgICAgICAgICAgIGxvZ2lucmVxKHtcclxuICAgICAgICAgICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGE6b3VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgcm91dGVyOnJvdXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0YWN0aXZlOnNldGFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWdpc3RlclwiOiAgXHJcbiAgICAgICAgICAgICAgICByZXNpZ3RlcnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShlLHR5cGUsdmFsdWUpPT57XHJcbiAgICAgICAgIGNvbnN0IGlucHV0c2dldD17Li4uaW5wdXRzfTtcclxuICAgICAgICAgaW5wdXRzZ2V0W3R5cGVdW3ZhbHVlXS52YWx1ZT1lLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgc2V0aW5wdXRzKGlucHV0c2dldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJcIjtcclxuICAgIGlmKGVycm9ybXNnKXtcclxuICAgICAgICByZXR1cm4gPGgyPlNvbWV0aGluZyBXZW50IFdyb25nLi4uPC9oMj5cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoYmFja2VuZGVycm9yID09IFwiRVjEsFNUXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZMSfaW5peiBlbWFpbCB6YXRlbiBrdWxsYW7EsW1kYSFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXUFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IMWfaWZyZSB5YW5sxLHFnyFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXRVwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IGUtcG9zdGEgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJbWFnZURpdiB1cmxnZXQ9e2N1cnJlbnR1cmx9IGFrdGlmPXt0cnVlfT5cclxuICAgICAgICAgICA8R2xvYmFsLz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZvbnQrTmFtZVwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgIDxXaW5kb3cgYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJlcnJvclwiPntiYWNrZW5kZXJyb3JtZXNzYWdlfTwvV2luZG93PlxyXG4gICAgICAgICAgIDxXaW5kb3dEaXY+ICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6M319PlxyXG4gICAgICAgICAgICAgICAgICA8TG9nbz48L0xvZ28+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8cCAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsZGlzcGxheTpyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixmbGV4OjQsd29yZFdyYXA6XCJicmVhay13b3JkXCJ9fT5IYWtpa2F0aW4gdGVtc2lsY2lzaW5pbiBlbiBheiBvbGR1xJ91IHphbWFuLCBvbnUgZGlsZSBnZXRpcm1lbmluIHRlaGxpa2VsaSBvbGR1xJ91IHphbWFuIGRlxJ9pbCwgY2FuIHPEsWvEsWPEsSBvbGR1xJ91IHphbWFuZMSxci48L3A+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI4MCVcIixmbGV4OjZ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJpY29uXCJdfT48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJ2YWx1ZVwiXX0gb25DaGFuZ2U9eyhlKT0+Y2hhbmdlaGFuZGxlcihlLHJlZ2lzdGVyLGl0ZW0pfSAgcGxhY2Vob2xkZXI9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV1bXCJwbGFjZWhvbGRlclwiXX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtTdWJtaXRoYW5kbGVyfSA+R2lyacWfIFlhcCA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvSWNvbj48L0J1dHRvbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyAoKT0+IHNldHJlZ2lzdGVyKFwiUmVnaXN0ZXJcIikgOiBTdWJtaXRoYW5kbGVyfT57cmVnaXN0ZXIgPT0gXCJMb2dpblwiID8gXCJIZXNhcCBPbHXFn3R1clwiIDogXCJLYXnEsXQgb2xcIn08L0J1dHRvbj4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgPC9XaW5kb3dEaXY+XHJcbiAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=