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
/*! exports provided: loginreq, resigterreq, producereq, Homereq, Createrelationreq, Contentreq, Contextdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contentreq", function() { return Contentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contextdata", function() { return Contextdata; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://localhost:3001";

const Errorhandler = ({
  data,
  seterrmsg,
  setwindow,
  setcontextdata,
  setlogged,
  setspinner
}) => {
  if (data && data.error) {
    seterrmsg(true);
    setwindow(true);
    return false;
  } else if (data == "Unauthorized") {
    setcontextdata({});
    setlogged(false);
    setspinner(true);
    localStorage.removeItem("TOKEN");
  } else {
    return true;
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

    if (data.wrong == "WP") {
      setbackenderror("WP");
      setactive(true);
    } else if (data.wrong == "WE") {
      setbackenderror("WE");
      setactive(true);
    } else {
      setlogged(true);
      setuserdata(data.Userdata);
      localStorage.setItem("TOKEN", data.token); //http cookie only ile store edicez

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
  console.log("");

  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/register", {
      userdata: userdata
    });

    if (data.exist) {
      setbackenderror("EXİST");
      setactive(true);
    } else {
      console.log("Başarılı kayıt");
    }
  } catch (err) {
    seterrmsg(true);
    console.log("sorun var");
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
  currentdata,
  seterrmsg,
  setwindow,
  setcontentdata,
  order
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}`);
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
const Createrelationreq = async (UserId, PostId, attribute, seterrmsg, setwindow) => {
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
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Contextdata = async ({
  Token,
  setspinner,
  setcontextdata,
  seterrmsg,
  setwindow,
  setlogged
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/getuserdata`, {
      headers: {
        "authorization": `Bearer ${Token}`
      }
    });

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow,
      setcontextdata,
      setlogged,
      setspinner
    })) {
      const mydata = {
        Username: data.userdata.firstname,
        Usersurname: data.userdata.usersurname,
        Userrole: data.userdata.role,
        Userimage: data.userdata.imageurl
      };
      setcontextdata(mydata);
      setspinner(true);
      setlogged(true);
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\window.js";





const External = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__External",
  componentId: "o1iyjf-0"
})(["position:absolute;left:50%;transform:translate(-50%,-50%);width:300px;height:200px;text-align:center;transition:top 0.4s;top:", ";z-index:", ";background-color:white;border-radius:10px;"], ({
  aktif
}) => aktif ? "50%" : "200px", ({
  aktif
}) => aktif ? "50" : "-200");
const Textbox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__Textbox",
  componentId: "o1iyjf-1"
})(["width:80%;margin:30px auto;text-align:center;"]);

const Window = ({
  children,
  active,
  type,
  closefunction
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
      lineNumber: 31,
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
      lineNumber: 34,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Black"], {
      onClick: closefunction,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(External, {
      aktif: active,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textbox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Error"], {
          style: {
            fontSize: "40px"
          },
          color: "error"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: 'center',
            wordWrap: 'break-word',
            lineHeight: "25px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          paddingTop: "15px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: closefunction,
          variant: "contained",
          children: "OK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
     font-family: 'IBM Plex Serif', serif;
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
})(["position:fixed;top:0;left:0;width:100%;transition:background 0.4s;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], ({
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
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Api */ "./Api/Api.js");

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: currentpostId,
    1: setcurrentpostId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: currentuserId,
    1: setcurrentuserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = localStorage.getItem("TOKEN");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_2__["Contextdata"])({
      Token: token,
      setcontextdata: setuserdata,
      setlogged: setlogged,
      setspinner: setspinner
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(createusercontext.Provider, {
    value: {
      logged: logged,
      setlogged: setlogged,
      userdata: userdata,
      setuserdata: setuserdata,
      spinner: spinner,
      setspinner,
      setspinner
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    '& .MuiInputLabel-root': {
      color: 'grey'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3FBEA7'
      }
    }
  }
});
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__ImageDiv",
  componentId: "sc-1x3o0wi-0"
})(["background-image:url(\"/led.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100vh;background-color:white;display:flex;justify-content:center;align-items:center;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1x3o0wi-1"
})(["color:white;width:88%;padding:10px;padding-left:35px;border:none;outline:none;transition:0.5s;background:transparent;::placeholder{color:white}"]);
const WindowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__WindowDiv",
  componentId: "sc-1x3o0wi-2"
})(["position:relative;border:1px solid white;display:flex;padding-right:20px;padding-left:20px;padding-top:20px;flex-direction:column;align-items:center;text-align:center;width:600px;height:550px;background-color:rgba(0,0,0,0.3);transition:0.5s;transform:rotate(0deg);"]);
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__InputHolder",
  componentId: "sc-1x3o0wi-3"
})(["position:relative;width:", ";padding:5px;margin-bottom:20px;"], ({
  checkregister
}) => checkregister ? "50%" : "100%");
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "login__Buttons",
  componentId: "sc-1x3o0wi-4"
})(["margin-top:10px;margin-left:10px;width:150px;padding:10px;outline:none;border:none;border-radius:8px;color:white;background:transparent;transition:0.3s;border:1px solid white;&:hover{background-color:rgba(0,0,0,1);cursor:pointer;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.i.withConfig({
  displayName: "login__Icon",
  componentId: "sc-1x3o0wi-5"
})(["margin-left:10px;font-size:10px;"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.i.withConfig({
  displayName: "login__Iconsecure",
  componentId: "sc-1x3o0wi-6"
})(["position:absolute;border:1px solid grey;background-color:black;padding:7px;left:-15px;color:white;top:50%;transform:translate(50%,-50%);"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__Logo",
  componentId: "sc-1x3o0wi-7"
})(["width:100px;height:100px;border-radius:50%;background-image:url(\"/way.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const Registerloginholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "login__Registerloginholder",
  componentId: "sc-1x3o0wi-8"
})(["cursor:pointer;position:absolute;top:15px;right:15px;background-color:#f50057;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:0.09s ease-in;&:hover{color:#f50057;width:45px;height:45px;}"]);

const Login = () => {
  const stylesget = CssTextField();
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: inputs,
    1: setinputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Login: {
      email: {
        placeholder: "E-posta",
        func: "Login",
        value: "",
        icon: "far fa-envelope",
        focused: false
      },
      password: {
        placeholder: "Şifre",
        func: "Login",
        value: "",
        icon: "fas fa-unlock-alt",
        focused: false
      }
    },
    Register: {
      name: {
        placeholder: "İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user",
        focused: false
      },
      surname: {
        placeholder: "Soy İsim",
        func: "Register",
        value: "",
        icon: "fas fa-user",
        focused: false
      },
      email: {
        placeholder: "E-posta",
        func: "Register",
        value: "",
        icon: "far fa-envelope",
        focused: false
      },
      password: {
        placeholder: "Şifre",
        func: "Register",
        value: "",
        icon: "fas fa-unlock-alt",
        focused: false
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

  const Rendericon = item => {
    switch (item) {
      case "email":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["EmailOutlined"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 26
        }, undefined);

      case "password":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Lock"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 26
        }, undefined);

      case "name":
      case "surname":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["AccountCircle"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 26
        }, undefined);
    }
  };

  const Submithandler = () => {
    console.log("submit");

    const currentinput = _objectSpread({}, inputs);

    const ourdata = {};

    for (const key in currentinput[register]) {
      ourdata[key] = currentinput[register][key].value.trim();
    }

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

  const chekciffocus = (typeoffocus, type) => {
    const inputsget = _objectSpread({}, inputs);

    inputsget[register][type].focused = typeoffocus == "focus" ? true : false;
    setinputs(inputsget);
  };

  const changehandler = (e, type, section) => {
    const inputsget = _objectSpread({}, inputs);

    inputsget[type][section].value = e.target.value;
    setinputs(inputsget);
  };

  var backenderrormessage = "";

  if (errormsg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Something Went Wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      closefunction: () => setactive(false),
      active: windowactive,
      type: "error",
      children: "E-posta veya \u015Fifre yanl\u0131\u015F!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Registerloginholder, {
        onClick: register == "Login" ? () => setregister("Register") : () => setregister("Login"),
        children: register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SupervisorAccountSharp"], {
          style: {
            color: "white",
            borderRadius: "50%",
            fontSize: "30px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 24
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Person"], {
          style: {
            color: "white",
            borderRadius: "50%",
            fontSize: "30px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 24
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 4
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          color: "white",
          flex: 4,
          wordWrap: "break-word"
        },
        children: "Hakikatin temsilcisinin en az oldu\u011Fu zaman, onu dile getirmenin tehlikeli oldu\u011Fu zaman de\u011Fil, can s\u0131k\u0131c\u0131 oldu\u011Fu zamand\u0131r."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: register == "Register" ? "100%" : "70%",
          boxSizing: "border-box",
          flex: 7,
          display: register == "Register" ? "flex" : "block",
          flexWrap: "wrap"
        },
        children: [Object.keys(inputs[register]).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          checkregister: register == "Register" ? true : false,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            InputProps: {
              style: {
                color: "white"
              },
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
                position: "end",
                children: Rendericon(item)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 47
              }, undefined)
            },
            className: stylesget.root,
            type: item == "password" ? "password" : "",
            onChange: e => changehandler(e, register, item),
            onFocus: () => chekciffocus("focus", item),
            onBlur: () => chekciffocus("remove", item),
            value: inputs[register][item].value,
            focused: inputs[register][item].value !== "" || inputs[register][item].focused == true ? true : false,
            size: "small",
            label: inputs[register][item].placeholder,
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 28
          }, undefined)
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 26
        }, undefined)), register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: "#EB3232"
          },
          children: "\u015Eifreni mi unuttun?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 47
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flex: "3",
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            style: {
              width: "50%"
            },
            inputProps: {
              style: {
                color: "red"
              }
            },
            variant: "contained",
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Home"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 46
            }, undefined),
            onClick: register == "Login" ? Submithandler : () => setregister("Login"),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 33
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            style: {
              width: "50%"
            },
            inputProps: {
              style: {
                color: "red"
              }
            },
            variant: "contained",
            color: "secondary",
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SupervisorAccount"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 46
            }, undefined),
            onClick: Submithandler,
            children: "Kay\u0131t Ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 308,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsImdldCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiQ29udGV4dGRhdGEiLCJUb2tlbiIsImhlYWRlcnMiLCJteWRhdGEiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwidXNlcnN1cm5hbWUiLCJVc2Vycm9sZSIsInJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkV4dGVybmFsIiwic3R5bGVkIiwiZGl2IiwiYWt0aWYiLCJUZXh0Ym94IiwiV2luZG93IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJ0eXBlIiwiY2xvc2VmdW5jdGlvbiIsImljb24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwid29yZFdyYXAiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJjcmVhdGV1c2VyY29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImxvZ2dlZCIsInVzZVN0YXRlIiwic3Bpbm5lciIsImN1cnJlbnRwb3N0SWQiLCJzZXRjdXJyZW50cG9zdElkIiwiY3VycmVudHVzZXJJZCIsInNldGN1cnJlbnR1c2VySWQiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwiQ3NzVGV4dEZpZWxkIiwibWFrZVN0eWxlcyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiSW1hZ2VEaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJjaGVja3JlZ2lzdGVyIiwiQnV0dG9ucyIsIkljb24iLCJpIiwiSWNvbnNlY3VyZSIsIkxvZ28iLCJSZWdpc3RlcmxvZ2luaG9sZGVyIiwiTG9naW4iLCJzdHlsZXNnZXQiLCJ1c2VDb250ZXh0IiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJiYWNrZW5kZXJyb3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwicmVnaXN0ZXIiLCJzZXRyZWdpc3RlciIsIndpbmRvd2FjdGl2ZSIsInVzZVJvdXRlciIsImlucHV0cyIsInNldGlucHV0cyIsImVtYWlsIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwidmFsdWUiLCJmb2N1c2VkIiwicGFzc3dvcmQiLCJSZWdpc3RlciIsIm5hbWUiLCJzdXJuYW1lIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiUmVuZGVyaWNvbiIsIml0ZW0iLCJTdWJtaXRoYW5kbGVyIiwiY3VycmVudGlucHV0Iiwib3VyZGF0YSIsImtleSIsInRyaW0iLCJjaGVrY2lmZm9jdXMiLCJ0eXBlb2Zmb2N1cyIsImlucHV0c2dldCIsImNoYW5nZWhhbmRsZXIiLCJlIiwic2VjdGlvbiIsInRhcmdldCIsImJhY2tlbmRlcnJvcm1lc3NhZ2UiLCJib3JkZXJSYWRpdXMiLCJmbGV4IiwiYm94U2l6aW5nIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInN0eWxlIiwiZW5kQWRvcm5tZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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LGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICBcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyfSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9YClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyhVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICAgLy8uLi5cclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcblxyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpXHJcbiAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFhYWFhYWFcIik7XHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcbiAgIFxyXG4gICAgICBjb25zdCBteWRhdGE9e1xyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEudXNlcnN1cm5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge0Vycm9yfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IEV4dGVybmFsPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxudHJhbnNpdGlvbjp0b3AgMC40cztcclxudG9wOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTAlXCIgOiBcIjIwMHB4XCJ9O1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTBcIiA6IFwiLTIwMFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjMwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3c9KHtjaGlsZHJlbixhY3RpdmUsdHlwZSxjbG9zZWZ1bmN0aW9ufSk9PntcclxuICAgIHZhciBpY29uPSBudWxsO1xyXG4gICAgaWYodHlwZSA9PSBcImVycm9yXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcInJlZFwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PSBcImNvbmZpcm1cIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgPEV4dGVybmFsIGFrdGlmPXthY3RpdmV9PlxyXG4gICAgICAgICAgICA8VGV4dGJveD5cclxuICAgICAgICAgICAgICAgICAgPEVycm9yIHN0eWxlPXt7Zm9udFNpemU6XCI0MHB4XCJ9fSBjb2xvcj1cImVycm9yXCI+PC9FcnJvcj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsd29yZFdyYXA6J2JyZWFrLXdvcmQnLGxpbmVIZWlnaHQ6XCIyNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvVGV4dGJveD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5PSzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9FeHRlcm5hbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTZXJpZicsIHNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgXHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG50cmFuc2l0aW9uOmJhY2tncm91bmQgMC40cztcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI0MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGV4dGRhdGF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdXNlcmRhdGEsc2V0dXNlcmRhdGFdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbY3VycmVudHBvc3RJZCxzZXRjdXJyZW50cG9zdElkXT11c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0W2N1cnJlbnR1c2VySWQsc2V0Y3VycmVudHVzZXJJZF09dXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIENvbnRleHRkYXRhKHtcclxuICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgIHNldGNvbnRleHRkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXJcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtsb2dpbnJlcSxyZXNpZ3RlcnJlcX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS93aW5kb3dcIjtcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7d2l0aFN0eWxlcyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0FjY291bnRDaXJjbGUsRW1haWxPdXRsaW5lZCxMb2NrLEFycm93UmlnaHQsIEFycm93TGVmdCxTdXBlcnZpc29yQWNjb3VudCxTdXBlcnZpc2VkVXNlckNpcmNsZVNoYXJwLCBTdXBlcnZpc29yQWNjb3VudFJvdW5kZWQsIFN1cGVydmlzb3JBY2NvdW50U2hhcnAsIEFjY291bnRDaXJjbGVTaGFycCwgQWNjb3VudENpcmNsZVJvdW5kZWQsIFBlcnNvbiwgSG9tZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcbiAgICAgICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNGQkVBNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2xlZC5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjg4JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MzVweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NjAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcblxyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDokeyh7Y2hlY2tyZWdpc3Rlcn0pPT5jaGVja3JlZ2lzdGVyID8gXCI1MCVcIiA6IFwiMTAwJVwifTtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYFxyXG5jb25zdCBCdXR0b25zPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZToxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcIi93YXkuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBSZWdpc3RlcmxvZ2luaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE1cHg7XHJcbnJpZ2h0OjE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDBweDtcclxuaGVpZ2h0OjQwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxudHJhbnNpdGlvbjowLjA5cyBlYXNlLWluO1xyXG4mOmhvdmVyIHtcclxuY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDVweDtcclxuaGVpZ2h0OjQ1cHg7XHJcbn1cclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsZXNnZXQ9Q3NzVGV4dEZpZWxkKCk7XHJcbiAgICBjb25zdHtzZXRsb2dnZWQsc2V0dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W2JhY2tlbmRlcnJvcixzZXRiYWNrZW5kZXJyb3JdPXVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbcmVnaXN0ZXIsc2V0cmVnaXN0ZXJdPXVzZVN0YXRlKFwiTG9naW5cIik7XHJcbiAgICBjb25zdFt3aW5kb3dhY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdFtpbnB1dHMsc2V0aW5wdXRzXT11c2VTdGF0ZSh7XHJcblxyXG4gICAgICAgIExvZ2luOntcclxuICAgICAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyOntcclxuICAgICAgICAgICAgbmFtZTp7XHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixLBzaW1cIixcclxuICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdXNlclwiLFxyXG4gICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiU295IMSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRS1wb3N0YVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhciBmYS1lbnZlbG9wZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpO1xyXG5cclxuICAgICAgIGNvbnN0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSk7XHJcblxyXG4gICAgICAgLypheGlvc3MuZ2V0KFwiaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9bWFnaWNcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zWzNdLnNyYy5vcmlnaW5hbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IFJlbmRlcmljb249KGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgc3dpdGNoKGl0ZW0pe1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEVtYWlsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0VtYWlsT3V0bGluZWQ+XHJcbiAgICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8TG9jayBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvTG9jaz5cclxuICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJzdXJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8QWNjb3VudENpcmNsZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQWNjb3VudENpcmNsZT4gICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdGhhbmRsZXI9KCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRpbnB1dD17Li4uaW5wdXRzfTtcclxuICAgICAgICBjb25zdCBvdXJkYXRhPXt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN1cnJlbnRpbnB1dFtyZWdpc3Rlcl0pIHtcclxuICAgICAgICAgICAgb3VyZGF0YVtrZXldPWN1cnJlbnRpbnB1dFtyZWdpc3Rlcl1ba2V5XS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHN3aXRjaChyZWdpc3Rlcil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbG9naW5yZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICByb3V0ZXI6cm91dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJlZ2lzdGVyXCI6ICBcclxuICAgICAgICAgICAgICAgIHJlc2lndGVycmVxKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgY29uc3QgY2hla2NpZmZvY3VzPSh0eXBlb2Zmb2N1cyx0eXBlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0c2dldD17Li4uaW5wdXRzfTtcclxuICAgICAgICBpbnB1dHNnZXRbcmVnaXN0ZXJdW3R5cGVdLmZvY3VzZWQ9dHlwZW9mZm9jdXMgPT0gXCJmb2N1c1wiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGUsdHlwZSxzZWN0aW9uKT0+e1xyXG4gICAgICAgIGNvbnN0IGlucHV0c2dldD17Li4uaW5wdXRzfTtcclxuICAgICAgICBpbnB1dHNnZXRbdHlwZV1bc2VjdGlvbl0udmFsdWU9ZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0aW5wdXRzKGlucHV0c2dldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJcIjtcclxuICAgIGlmKGVycm9ybXNnKXtcclxuICAgICAgICByZXR1cm4gPGgyPlNvbWV0aGluZyBXZW50IFdyb25nLi4uPC9oMj5cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoYmFja2VuZGVycm9yID09IFwiRVjEsFNUXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZMSfaW5peiBlbWFpbCB6YXRlbiBrdWxsYW7EsW1kYSFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXUFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IMWfaWZyZSB5YW5sxLHFnyFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXRVwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IGUtcG9zdGEgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJbWFnZURpdiB1cmxnZXQ9e2N1cnJlbnR1cmx9IGFrdGlmPXt0cnVlfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgICA8V2luZG93IGNsb3NlZnVuY3Rpb249eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBhY3RpdmU9e3dpbmRvd2FjdGl2ZX0gdHlwZT1cImVycm9yXCI+RS1wb3N0YSB2ZXlhIMWfaWZyZSB5YW5sxLHFnyE8L1dpbmRvdz5cclxuICAgICAgICAgICA8V2luZG93RGl2PiAgICBcclxuICAgICAgICAgICAgICAgPFJlZ2lzdGVybG9naW5ob2xkZXIgb25DbGljaz17cmVnaXN0ZXIgPT0gXCJMb2dpblwiID8gKCk9PnNldHJlZ2lzdGVyKFwiUmVnaXN0ZXJcIikgOiAoKT0+c2V0cmVnaXN0ZXIoXCJMb2dpblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIgPT0gXCJMb2dpblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICA8U3VwZXJ2aXNvckFjY291bnRTaGFycCAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L1N1cGVydmlzb3JBY2NvdW50U2hhcnA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L1BlcnNvbj5cclxuICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvUmVnaXN0ZXJsb2dpbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjR9fT5cclxuICAgICAgICAgICAgICAgICAgPExvZ28+PC9Mb2dvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGZsZXg6NCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIn19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwiMTAwJVwiIDogXCI3MCVcIixib3hTaXppbmc6XCJib3JkZXItYm94XCIsZmxleDo3LGRpc3BsYXk6cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gXCJmbGV4XCIgOiBcImJsb2NrXCIsZmxleFdyYXA6XCJ3cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyICBjaGVja3JlZ2lzdGVyPXtyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyB0cnVlOmZhbHNlfSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjb2xvcjpcIndoaXRlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+e1JlbmRlcmljb24oaXRlbSl9PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNnZXQucm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpdGVtID09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PmNoZWtjaWZmb2N1cyhcImZvY3VzXCIsaXRlbSl9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PmNoZWtjaWZmb2N1cyhcInJlbW92ZVwiLGl0ZW0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZD17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS52YWx1ZSAhPT0gXCJcIiB8fCBpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLmZvY3VzZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0ucGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/IDxwIHN0eWxlPXt7Y29sb3I6XCIjRUIzMjMyXCJ9fT7FnmlmcmVuaSBtaSB1bnV0dHVuPzwvcD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjNcIix3aWR0aDpcIjEwMCVcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEhvbWUgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PjwvSG9tZT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/IFN1Ym1pdGhhbmRsZXIgOiAoKT0+c2V0cmVnaXN0ZXIoXCJMb2dpblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e3N0eWxlOntjb2xvcjpcInJlZFwifX19ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxTdXBlcnZpc29yQWNjb3VudCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+PC9TdXBlcnZpc29yQWNjb3VudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1N1Ym1pdGhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLYXnEsXQgT2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9XaW5kb3dEaXY+XHJcbiAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==