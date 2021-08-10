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
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationcount", function() { return UpdateNotificationcount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofilecontent", function() { return Getuserprofilecontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofile", function() { return Getuserprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createuserrelation", function() { return Createuserrelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificationreq", function() { return Notificationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCountreq", function() { return NotificationCountreq; });
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
  TakerId,
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
        ContentId: ContentId,
        TakerId: TakerId
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
  relationtype,
  UserIdofcontent
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`content/createrelation`, {
      UserId: UserId,
      PostId: PostId,
      attribute: attribute,
      relationtype: relationtype,
      UserIdofcontent: UserIdofcontent
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/getuserdata`, {
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
        Usersurname: data.userdata.lastname,
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
      const Mydata = [...data.data]; //push metodu bir diziyi bi  r dizinin içine pushluyor fakat concat elemanları

      setdata(Current.concat(Mydata));
    } else if (data == "Unauthroized") {//
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
const UpdateNotificationcount = async () => {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/notification/update");
  } catch (error) {//
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
  FollowedId,
  checkiffollow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`user/createuserrelation`, {
      FollowerId: UserId,
      FollowedId: FollowedId,
      checkiffollow: checkiffollow
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
const Notificationreq = async ({
  UserId,
  setnavdata,
  order,
  navdata
}) => {
  try {
    console.log(UserId);
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`notification/getrows/${UserId}/${order}`);
    console.log(data.mydata);
    const Mycurrentdata = [...navdata];
    const Newdata = data.mydata;
    setnavdata(Mycurrentdata.concat(Newdata));
  } catch (error) {
    console.log("relation error"); //seterrmsg(true);
  }
};
const NotificationCountreq = async ({
  UserId,
  setcountdata
}) => {
  try {
    console.log(UserId);
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`notification/getcount/${UserId}`);
    setcountdata(data.data);
    console.log(data.mydata);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiZ2V0IiwibGVuZ3RoIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwiaGVhZGVycyIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJjYXRvZ2VyeSIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJNeWN1cnJlbnRkYXRhIiwiTmV3ZGF0YSIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwic2V0Y291bnRkYXRhIiwiY3JlYXRldXNlcmNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJjaGlsZHJlbiIsImxvZ2dlZCIsInVzZVN0YXRlIiwic3Bpbm5lciIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJNeWFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFD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QUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsWUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUkscUVBQUMsTUFBRDtBQUFBLDZCQUNHLHFFQUFDLFNBQUQsb0JBQWVMLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWxCRDs7QUFvQmVGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcX0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfWApXHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2V0c3RvcHJlcShmYWxzZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKHtVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93LHJlbGF0aW9udHlwZSxVc2VySWRvZmNvbnRlbnR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgcmVsYXRpb250eXBlOnJlbGF0aW9udHlwZSxcclxuICAgICAgVXNlcklkb2Zjb250ZW50OlVzZXJJZG9mY29udGVudCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgICAgIHNldGNvbW1lbnQoZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWR9KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse1xyXG4gICAgICBoZWFkZXJzOntcclxuICAgICAgICBcImF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7VG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEucm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JidXJhZGFkdXJ1eW9yXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKCk9PntcclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9ub3RpZmljYXRpb24vdXBkYXRlXCIpO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0ZGF0YSxjYXRvZ2VyeSxVc2VySWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3Byb2ZpbGVjb250ZW50LyR7Y2F0b2dlcnl9LyR7VXNlcklkfWApO1xyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShkYXRhLmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsRm9sbG93ZWRJZCxjaGVja2lmZm9sbG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGB1c2VyL2NyZWF0ZXVzZXJyZWxhdGlvbmAse1xyXG4gICAgICBGb2xsb3dlcklkOlVzZXJJZCxcclxuICAgICAgRm9sbG93ZWRJZDpGb2xsb3dlZElkLFxyXG4gICAgICBjaGVja2lmZm9sbG93OmNoZWNraWZmb2xsb3csXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEubXlkYXRhKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIHNldG5hdmRhdGEoTXljdXJyZW50ZGF0YS5jb25jYXQoTmV3ZGF0YSkpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgY29uc29sZS5sb2coZGF0YS5teWRhdGEpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTsgICBcclxuICAgICAgICBcclxuICAgICAgICBDb250ZXh0ZGF0YSh7XHJcbiAgICAgICAgICAgIFRva2VuOnRva2VuLFxyXG4gICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGNyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgIGxvZ2dlZDpsb2dnZWQsXHJcbiAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICB1c2VyZGF0YTp1c2VyZGF0YSxcclxuICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICBzcGlubmVyOnNwaW5uZXIsXHJcbiAgICAgICAgICAgc2V0c3Bpbm5lcixzZXRzcGlubmVyXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuXHJcbmNvbnN0IE15YXBwPSh7Q29tcG9uZW50LHBhZ2VQcm9wc30pPT57XHJcbiAgIFxyXG4gICAgY29uc3QgTGF5b3V0PUNvbXBvbmVudC5sYXlvdXQgfHwgUmVhY3QuRnJhZ21lbnQ7XHJcbiAgICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwJmZhbWlseT1JQk0rUGxleCtTZXJpZjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsMzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJzZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz4gXHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlhcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==