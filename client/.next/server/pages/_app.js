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
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getusersforsearchbar", function() { return Getusersforsearchbar; });
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
  setstopreq,
  category,
  paignation
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}/${category}`);
    console.log(data);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      if (data.data.length == 0) {
        setstopreq(true);
        console.log("stopped request");
      }

      var Current = [...currentdata];
      var Mydata = [...data.data];

      if (paignation) {
        setcontentdata(Current.concat(Mydata)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
      } else {
        setcontentdata(Mydata);
      }

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
  setwindow,
  last,
  order,
  commentlist
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${contentId}/${last}/${order}`); //burada tekrardan bütün yorumlar çekiliyor eklenen en son yorum çekilmeli

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      var Current = [...commentlist];
      var Mydata = [...data.data];

      if (last) {
        setcomment(Mydata.concat(Current)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
      } else {
        setcomment(Current.concat(Mydata));
      }

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
const UpdateNotificationcount = async ({
  UserId
}) => {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/notification/update/${UserId}`);
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
  navdata,
  lastrow
}) => {
  try {
    console.log(UserId);
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`notification/getrows/${UserId}/${order}/${lastrow}`);
    const Mycurrentdata = [...navdata];
    const Newdata = data.mydata;
    console.log(Newdata);

    if (lastrow) {
      console.log("looo2");
      setnavdata(Newdata.concat(Mycurrentdata));
    } else {
      console.log("looo");
      setnavdata(Mycurrentdata.concat(Newdata));
    }
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
  } catch (error) {
    console.log("relation error"); //seterrmsg(true);
  }
};
const Getusersforsearchbar = async ({
  inputvalue,
  setusers,
  setactive,
  nothingfound
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/getusername/${inputvalue}`);
    console.log(data.data);
    /*
    if(data.data == null){
       nothingfound(true)
    }
    */

    setactive(false);
    setusers(data.data);
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwiZ2V0IiwibGVuZ3RoIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwiaGVhZGVycyIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJjYXRvZ2VyeSIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwibm90aGluZ2ZvdW5kIiwiY3JlYXRldXNlcmNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJjaGlsZHJlbiIsImxvZ2dlZCIsInVzZVN0YXRlIiwic3Bpbm5lciIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJNeWFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VSb3V0ZXIiXSwibWFwcGluZ3MiOiI7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QyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLDhRQUFYO0FBQTBSLFdBQUcsRUFBQztBQUE5UjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsZUFBTyxFQUFDLE9BQS9DO0FBQXVELFlBQUksRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsWUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyw0RUFBNUI7QUFBeUcsaUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4sbUJBQVcsRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBTSxZQUFJLEVBQUMsa09BQVg7QUFBOE8sV0FBRyxFQUFDO0FBQWxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBUUkscUVBQUMsTUFBRDtBQUFBLDZCQUNHLHFFQUFDLFNBQUQsb0JBQWVMLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFjSCxDQXBCRDs7QUFzQmVGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHNldHN0b3ByZXEodHJ1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYocGFpZ25hdGlvbil7XHJcblxyXG4gICAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYobGFzdCl7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoTXlkYXRhLmNvbmNhdChDdXJyZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoQ3VycmVudC5jb25jYXQoTXlkYXRhKSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZH0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvcmJ1cmFkYWR1cnV5b3JcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRkYXRhLGNhdG9nZXJ5LFVzZXJJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvcHJvZmlsZWNvbnRlbnQvJHtjYXRvZ2VyeX0vJHtVc2VySWR9YCk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKGRhdGEuZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhOZXdkYXRhKTtcclxuXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgLypcclxuICAgIGlmKGRhdGEuZGF0YSA9PSBudWxsKXtcclxuICAgICAgIG5vdGhpbmdmb3VuZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgKi9cclxuICAgICBcclxuICAgIHNldGFjdGl2ZShmYWxzZSk7XHJcbiAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250ZXh0ZGF0YX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGV1c2VyY29udGV4dD1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyY29udGV4dD0oe2NoaWxkcmVufSk9PntcclxuXHJcbiAgICBjb25zdFtsb2dnZWQsc2V0bG9nZ2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIik7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICBUb2tlbjp0b2tlbixcclxuICAgICAgICAgICAgc2V0Y29udGV4dGRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc3Bpbm5lcjpzcGlubmVyLFxyXG4gICAgICAgICAgIHNldHNwaW5uZXIsc2V0c3Bpbm5lclxyXG4gICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2NyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyY29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcblxyXG5jb25zdCBNeWFwcD0oe0NvbXBvbmVudCxwYWdlUHJvcHN9KT0+e1xyXG4gICBcclxuICAgIGNvbnN0IExheW91dD1Db21wb25lbnQubGF5b3V0IHx8IFJlYWN0LkZyYWdtZW50O1xyXG4gICAgY29uc3Qgcm91dGVyID11c2VSb3V0ZXIoKTtcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAmZmFtaWx5PURvbWluZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9VGlub3M6aXRhbEAxJmRpc3BsYXk9c3dhcCZmYW1pbHk9SUJNK1BsZXgrU2VyaWY6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDMwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+IFxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUlCTStQbGV4K1NlcmlmOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQ29udGV4dFByb3ZpZGVyPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15YXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=