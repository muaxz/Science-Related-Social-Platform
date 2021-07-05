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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, Getuserprofilecontent, Getuserprofile, Createuserrelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producecommentreq", function() { return Producecommentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contentreq", function() { return Contentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentreq", function() { return Commentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contextdata", function() { return Contextdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getusercontent", function() { return Getusercontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofilecontent", function() { return Getuserprofilecontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofile", function() { return Getuserprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createuserrelation", function() { return Createuserrelation; });
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
    return false;
  } else {
    return true;
  }
};

const loginreq = async ({
  setlogged,
  setspinner,
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
      setspinner(true);
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
const Producecommentreq = async ({
  Message,
  setnumbercom,
  setwindow,
  UserId,
  ContentId,
  seterrmsg
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/comment/produce", {
      contentdata: {
        Message: Message,
        UserId: UserId,
        ContentId: ContentId
      }
    });

    if (Errorhandler({
      data,
      seterrmsg
    })) {
      setnumbercom(prev => prev + 1);
      return; //we route işlemi
    } else {
      console.log("falselan");
      return;
    }
  } catch (err) {
    seterrmsg(true);
    console.log("burada");
  }
};
const Homereq = async ({
  currentdata,
  setspinner,
  seterrmsg,
  setwindow,
  setcontentdata,
  order,
  setstopreq
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      if (data.data.length == 0) {
        setstopreq(false);
      }

      const Current = [...currentdata];
      const Mydata = [...data.data]; //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      setcontentdata(Current.concat(Mydata));
      setspinner(false);
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Createrelationreq = async ({
  UserId,
  PostId,
  attribute,
  seterrmsg,
  setwindow,
  relationtype
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`content/createrelation`, {
      UserId: UserId,
      PostId: PostId,
      attribute: attribute,
      relationtype: relationtype
    });
    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) return;else return;
  } catch (error) {
    console.log("relation error"); //seterrmsg(true);
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
      console.log(data.data);
      setcontent(data.data);
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Commentreq = async ({
  contentId,
  setactiveproduce,
  setcomment,
  seterrmsg,
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${contentId}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      console.log(data.data);
      setcomment(data.data);
      setactiveproduce(false);
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
        UserId: data.userdata.id,
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
    console.log("errorburadaduruyor");
  }
};
const Getusercontent = async ({
  UserId,
  params,
  setdata,
  setwindow,
  seterrmsg,
  order,
  setstopscrolling,
  currentdata
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/usercontent/${params}/${UserId}/${order}`);
    console.log(data.data);

    if (Errorhandler({
      data
    })) {
      if (data.data.length == 0) {
        setstopscrolling(true);
      }

      const Current = [...currentdata];
      const Mydata = [...data.data]; //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      setdata(Mydata);
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
const Getuserprofilecontent = async ({
  setdata,
  catogery,
  UserId
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/profilecontent/${catogery}/${UserId}`);

    if (Errorhandler({
      data
    })) {
      setdata(data.data);
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
const Getuserprofile = async ({
  UserId,
  setuserdata
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/getuserprofile/${UserId}`);
    console.log(data);

    if (Errorhandler({
      data
    })) {
      setuserdata(data.userdata);
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
const Createuserrelation = async ({
  UserId,
  FollowedId
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`user/createuserrelation`, {
      FollowerId: UserId,
      FollowedId: FollowedId
    });
    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) return;else return;
  } catch (error) {
    console.log("relation error"); //seterrmsg(true);
  }
};

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
    lineNumber: 26,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Usercontext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Myapp = ({
  Component,
  pageProps
}) => {
  const Layout = Component.layout || react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Poppins:ital,wght@1,300&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Myapp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJzZXRudW1iZXJjb20iLCJVc2VySWQiLCJDb250ZW50SWQiLCJwcmV2IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldHN0b3ByZXEiLCJnZXQiLCJsZW5ndGgiLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJoZWFkZXJzIiwibXlkYXRhIiwiaWQiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwidXNlcnN1cm5hbWUiLCJVc2Vycm9sZSIsInJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkdldHVzZXJjb250ZW50IiwicGFyYW1zIiwic2V0ZGF0YSIsInNldHN0b3BzY3JvbGxpbmciLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJjYXRvZ2VyeSIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsIkZvbGxvd2VySWQiLCJjcmVhdGV1c2VyY29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImNoaWxkcmVuIiwibG9nZ2VkIiwidXNlU3RhdGUiLCJzcGlubmVyIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIk15YXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwiUmVhY3QiLCJGcmFnbWVudCIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTU8sS0FBSyxHQUFDLENBQUM7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQUQsS0FBeUI7QUFFakMsUUFBTUMsTUFBTSxHQUFDRixTQUFTLENBQUNHLE1BQVYsSUFBb0JDLDRDQUFLLENBQUNDLFFBQXZDO0FBQ0EsUUFBTWhGLE1BQU0sR0FBRWlGLDZEQUFTLEVBQXZCO0FBR0Esc0JBQ0kscUVBQUMsNERBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLDhRQUFYO0FBQTBSLFdBQUcsRUFBQztBQUE5UjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsZUFBTyxFQUFDLE9BQS9DO0FBQXVELFlBQUksRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsWUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUkscUVBQUMsTUFBRDtBQUFBLDZCQUNHLHFFQUFDLFNBQUQsb0JBQWVMLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWxCRDs7QUFvQmVGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxzZXRudW1iZXJjb20sc2V0d2luZG93LFVzZXJJZCxDb250ZW50SWQsc2V0ZXJybXNnfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbW1lbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTp7XHJcbiAgICAgIE1lc3NhZ2U6TWVzc2FnZSxcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxfSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9YClcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBzZXRzdG9wcmVxKGZhbHNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGVcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgICAgIHNldGNvbW1lbnQoZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcmRhdGFgLHtcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgXCJhdXRob3JpemF0aW9uXCI6YEJlYXJlciAke1Rva2VufWAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuICAgXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEudXNlcnN1cm5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yYnVyYWRhZHVydXlvclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoTXlkYXRhKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldGRhdGEsY2F0b2dlcnksVXNlcklkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9wcm9maWxlY29udGVudC8ke2NhdG9nZXJ5fS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoZGF0YS5kYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLEZvbGxvd2VkSWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGV4dGRhdGF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdXNlcmRhdGEsc2V0dXNlcmRhdGFdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIENvbnRleHRkYXRhKHtcclxuICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgIHNldGNvbnRleHRkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXJcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5cclxuY29uc3QgTXlhcHA9KHtDb21wb25lbnQscGFnZVByb3BzfSk9PntcclxuICAgXHJcbiAgICBjb25zdCBMYXlvdXQ9Q29tcG9uZW50LmxheW91dCB8fCBSZWFjdC5GcmFnbWVudDtcclxuICAgIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKCk7XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUlCTStQbGV4K1NlcmlmOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMSwzMDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPiBcclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9