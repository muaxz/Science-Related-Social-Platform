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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

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
  setstopreq,
  category,
  paignation
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}/${category}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      if (data.data.length == 0) {
        setstopreq(false);
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
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${contentId}`); //burada tekrardan bütün yorumlar çekiliyor eklenen en son yorum çekilmeli

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

/***/ "./components/pages/Main/Leaderboard.js":
/*!**********************************************!*\
  !*** ./components/pages/Main/Leaderboard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leaderboard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Leaderboard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Contentdiv",
  componentId: "cu1ye3-0"
})(["height:220px;padding:15px;border-radius:10px;width:100%;filter:blur (2x);background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;"], ({
  image
}) => image);
const Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Exteriordiv",
  componentId: "cu1ye3-1"
})(["position:sticky;top:80px;width:300px;height:600px;border-radius:7px;"]);
const Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Innerdiv",
  componentId: "cu1ye3-2"
})(["padding:10px;height:100%;"]);
const Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Imagediv",
  componentId: "cu1ye3-3"
})(["height:150px;display:flex;flex-direction:column;justify-content:space-between;border-top-left-radius:10px;border-top-right-radius:10px;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const Secondoptiondiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Secondoptiondiv",
  componentId: "cu1ye3-4"
})(["width:50%;text-align:center;color:", ";padding:8px;border-bottom:2px solid ", ";transition:0.1s;&:hover{background-color:#d90429;color:white;cursor:pointer;}"], ({
  border
}) => border == false ? "#d90429" : "white", ({
  border
}) => border ? "#d90429" : "transparent");
const Firstpart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Firstpart",
  componentId: "cu1ye3-5"
})(["overflow:auto;height:250px;margin-bottom:10px;&::-webkit-scrollbar{width:30px;}&::-webkit-scrollbar:vertical{width:5px;}&::-webkit-scrollbar:horizontal{height:12px;}&::-webkit-scrollbar-thumb{fontsize:10px;background-color:rgba(0,0,0,.5);border-radius:10px;}"]);
const Secondpart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Leaderboard__Secondpart",
  componentId: "cu1ye3-6"
})(["overflow:hidden;height:290px;"]);
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/

function Leaderboard({
  list
}) {
  const {
    0: options,
    1: setoptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    1: false,
    2: false
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          marginBottom: "10px",
          color: "#4a4a4a",
          fontWeight: "bold"
        },
        children: "Liderlik Tablosu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Firstpart, {
        children: [{
          name: "Musa",
          image: "/yaprak.jpg"
        }, {
          name: "Selman",
          image: "/led.jpg"
        }, {
          name: "Ahmet",
          image: "/yaprak.jpg"
        }, {
          name: "Duhan",
          image: "/car.jpg"
        }, {
          name: "Sadık",
          image: "/car.jpg"
        }, {
          name: "Sadık",
          image: "/car.jpg"
        }].map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          firstname: item.name,
          usernumber: index + 1,
          imageurl: item.image,
          optionforbutton: false,
          children: "543"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Secondpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: "#4a4a4a",
            marginBottom: "10px",
            paddingTop: "10px",
            fontWeight: "bold"
          },
          children: "\xD6ne \xC7\u0131kan G\xF6nderiler"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, settings), {}, {
          children: [{
            name: "Uzay neden gizemli? İnsanlar bu konuda ne yapmalı?",
            image: "/yaprak.jpg"
          }, {
            name: "Resim ve Düşüncenin insanın fizyolohisine etkisi.",
            image: "/led.jpg"
          }, {
            name: "İçimizdeki Sönmeyen Ateşi bulabilir miyiz?",
            image: "/yaprak.jpg"
          }, {
            name: "Son Krallık",
            image: "/car.jpg"
          }, {
            name: "Sadık",
            image: "/car.jpg"
          }, {
            name: "Sadık",
            image: "/car.jpg"
          }].map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
            image: item.image,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "white"
              },
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 36
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 32
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./components/pages/Main/Showfoller.js":
/*!*********************************************!*\
  !*** ./components/pages/Main/Showfoller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showfollower; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Usercard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Showfoller.js";






const Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Showfoller__Rtlikewindow",
  componentId: "sc-7i7cf-0"
})(["position:absolute;max-width:500px;width:100%;background-color:white;height:350px;border-radius:5px;z-index:200;top:50%;left:50%;transform:translate(-50%,-50%);"]);
const Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Showfoller__Innerwindow",
  componentId: "sc-7i7cf-1"
})(["padding:10px;height:100%;overflow:auto;"]);
function Showfollower({
  list,
  setlist
}) {
  var Title = "";

  const Followingrelation = (checkfollow, UserId, followedid) => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createuserrelation"])({
      UserId: UserId,
      FollowedId: followedid,
      checkiffollow: checkfollow
    });
  };

  switch (list[0].UserContent.attribute) {
    case "Like":
      Title = "Beğeniler";
      break;

    case "Reshow":
      Title = "İşaretler";
      break;

    default:
      Title = "Empty for now";
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Black"], {
      onClick: setlist,
      aktif: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: "10px",
          backgroundColor: "lightgrey",
          marginBottom: "10px",
          height: "40px",
          width: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ThumbUp"], {
          style: {
            color: "#C72121"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: Title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          onClick: setlist,
          style: {
            color: "white",
            cursor: "pointer"
          },
          className: "fas fa-times-circle fa-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
        children: list.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Usercard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          optionforbutton: true,
          firstname: item.firstname,
          surname: item.lastname,
          userid: item.id,
          followerlist: item.Followed,
          Relationfunc: Followingrelation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contentcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilsfunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilsfunc */ "./utilsfunc.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{font-size:18px}30%{font-size:19px}50%{font-size:21px}70%{font-size:22px}100%{font-size:18px}"]);
const Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;margin-bottom:30px;width:100%;background-color:", ";border-radius:7px;box-shadow:rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;"], ({
  iscomment
}) => !iscomment ? "#faf9f9" : "#faf9f9");
const Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-1"
})(["padding-right:5px;padding-left:5px;"]);
const Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-2"
})(["flex:1;"]);
const Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-3"
})(["flex:2;display:flex;flex-direction:column;"]);
const Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})(["padding:", ";padding-left:15px;padding-right:15px;flex:1;"], ({
  iscomment
}) => iscomment ? "15px" : "0px");
const Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-5"
})(["display:", ";padding-left:15px;border-radius:5px;"], ({
  foruser
}) => foruser ? "none" : "flex");
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-6"
})(["width:100%;height:150px;object-fit:cover;"]);
const Spanfor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Contentcard__Spanfor",
  componentId: "r68yrd-7"
})(["margin-left:5px;&:hover{text-decoration-line:underline;cursor:pointer;}"]);
const İconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-8"
})(["margin-right:10px;display:flex;align-items:center;&:hover ", "{color:", ";}"], Spanfor, ({
  howercolor
}) => howercolor);
const Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-9"
})(["width:100%;padding-top:10px;padding-bottom:10px;transition:all 0.3s;"]);
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-10"
})(["display:flex;justify-content:center;align-items:center;font-size:16px;transition-duration:0.5s;width:30px;height:30px;padding:5px;border-radius:50%;cursor:pointer;animation-duration:0.08s;&:hover{background:rgba(", ");};color:", ";animation-name:", ";"], ({
  howercolor
}) => howercolor, ({
  ismarked,
  color
}) => ismarked ? color : "grey", ({
  ismarked
}) => ismarked ? Likeanimaton : "");
const Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Optionwindow",
  componentId: "r68yrd-11"
})(["display:", ";width:350px;padding:5px;position:absolute;top:35px;right:10px;border-radius:7px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;background-color:white;z-index:1000;"], ({
  active
}) => active ? "block" : "none");
const Optionholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Optionholder",
  componentId: "r68yrd-12"
})(["display:flex;position:relative;align-items:center;padding:10px;border-radius:6px;&:hover{background-color:#EBEBEB;cursor:pointer;}"]);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Contentcard__Span",
  componentId: "r68yrd-13"
})([""]);
const Profileimageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Profileimageholder",
  componentId: "r68yrd-14"
})(["cursor:pointer;position:", ";left:", ";;"], ({
  iscomment
}) => iscomment ? "absolute" : "relative", ({
  iscomment
}) => iscomment ? "-60px" : "0px"); //içerik sayısı,takipçi sayısı,

function Contentcard({
  readlater,
  profileimage,
  content,
  titleimage,
  title,
  iscomment,
  username,
  usersurname,
  date,
  comment,
  retweet,
  like,
  showwindow,
  createrelationforsmh,
  postId,
  foruser,
  foruseroption,
  indexnum,
  userid
}) {
  const {
    0: elements,
    1: setelements
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Like: {
      number: like.length,
      ismarked: false
    },
    reshow: {
      number: retweet.length,
      ismarked: false
    },
    Readlater: {
      ismarked: false,
      number: 0
    }
  });
  const {
    ref,
    visible,
    setvisible
  } = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  var textforopiton = "";

  switch (foruseroption) {
    case "Readlater":
      textforopiton = "Kaydedilen gönderilerden kaldır";
      break;

    case "Like":
      textforopiton = "Beğenilen Gönderilerden kaldır";
      break;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const currentelements = _objectSpread({}, elements);

    if (!foruser) {
      like.forEach(user => {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["Like"].ismarked = true;
        }
      });
      retweet.forEach(user => {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["reshow"].ismarked = true;
        }
      });
      readlater.forEach(user => {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["Readlater"].ismarked = true;
        }
      });
    }

    setelements(currentelements);
  }, [userdata]);

  const Countplus = elementtype => {
    const currentelements = _objectSpread({}, elements);

    if (currentelements[elementtype].ismarked == false) {
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].number = currentelements[elementtype].number + 1;
      createrelationforsmh(postId, elementtype, "Create", userid);
    } else {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;
      createrelationforsmh(postId, elementtype, "Destroy");
    }

    setelements(currentelements);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    iscomment: iscomment,
    children: [//left arrow
    iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "fas fa-caret-left fa-lg",
      Iconconfig: {
        position: "absolute",
        left: "-6px",
        top: "8px",
        color: "#faf9f9"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 28
    }, this) : null, !iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: "red"
      },
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        activefunc: () => {
          setvisible(!visible);
        },
        className: "fas fa-ellipsis-h",
        Iconconfig: {
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "#2A2A2A"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "fas fa-user-minus",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Duhan \xD6zt\xFCrk'\xFC takipten \xE7\u0131k"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "fas fa-link",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Payla\u015F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: "Ba\u011Flant\u0131 adresini kopyala"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }, this), foruser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          onClick: () => createrelationforsmh(postId, foruseroption, "Destroy", indexnum),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "fas fa-trash-alt fa-sm",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Kald\u0131r"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 21
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        activefunc: () => {
          setvisible(!visible);
        },
        className: "fas fa-ellipsis-v",
        Iconconfig: {
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "#2A2A2A"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "5px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profileimageholder, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: {
              pathname: `/profile/${userid}`,
              query: {
                name: "Post"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
              width: iscomment ? "40px" : "35px",
              height: iscomment ? "40px" : "35px",
              profile: profileimage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px",
            fontSize: "15px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "black"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: username + " " + usersurname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 68
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "auto",
              fontSize: "13px",
              marginRight: "10px",
              color: "#7D7D7D"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_8__["calculatedate"])(date).time + " " + Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_8__["calculatedate"])(date).express + " Önce"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 107
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: foruser ? "block" : "flex"
      },
      children: [iscomment ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "bre"
            },
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/content/[id]",
            as: `/content/${postId}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                textAlign: "left",
                wordBreak: "bre",
                cursor: "pointer"
              },
              children: "While the Crypto Professors may set specific requirements for some...."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 29
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          foruser: foruser,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "green",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "0, 255, 0, 0.2",
              ismarked: elements.reshow.ismarked,
              color: "green",
              onClick: () => Countplus("reshow"),
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(retweet, "Reshow"),
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "red",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "255, 0, 0,0.2",
              ismarked: elements.Like.ismarked,
              color: "#C72121",
              onClick: () => Countplus("Like"),
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(like, "Like"),
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 4,
              display: "flex",
              justifyContent: "flex-end",
              color: "grey"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.Readlater.ismarked,
              color: "black",
              onClick: () => Countplus("Readlater"),
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 225,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./components/shared/Lefttoolbar.js":
/*!******************************************!*\
  !*** ./components/shared/Lefttoolbar.js ***!
  \******************************************/
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
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Lefttoolbar.js";






const ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-1dtr19t-0"
})(["position:fixed;top:60px;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#e9ecef;box-shadow:3px 3px 3px rgba(0,0,0,0.2);transition:all 0.2s;width:", ""], ({
  active
}) => active ? "200px" : "60px");
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-1dtr19t-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-1dtr19t-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
const NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-1dtr19t-3"
})(["background-coloyor:yellow;margin-top:5px;width:96%;"]);
const Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-1dtr19t-4"
})(["list-style-type:none;margin-top:10px;display:flex;width:100%;border-radius:5px;align-items:center;padding:7px;&:hover{background-color:#D4D4D4;cursor:pointer;}"]); //const Icon=styled.i`
//color:#C70039;
//`

const Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-1dtr19t-5"
})(["width:100%;height:30px;padding:10px;text-align:right;"]);

const Lefttoolbar = ({
  makeactive,
  myactive
}) => {
  const {
    userdata,
    logged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]);
  const firstlist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Kaydedilenler",
    path: `saved`
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Beğenilenler",
    path: `liked`
  }]);
  const secondlist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-edit",
    desc: "Gönderilerim",
    path: "/gönderiler"
  }, {
    icon: "fas fa-users",
    desc: "Tartışmalarım",
    path: "/tartışmalar"
  }]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(userdata.UserId);
  }, [userdata]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: logged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
      active: myactive,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            activefunc: () => {
              makeactive(!myactive);
            },
            className: "fas fa-angle-double-right",
            Iconconfig: {
              width: "35px",
              height: "35px",
              lineheight: "35px",
              color: "black",
              rotate: myactive ? true : undefined
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingBottom: "15px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: userdata.UserId && {
                pathname: `/profile/${userdata.UserId}`,
                query: {
                  name: "Post"
                }
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
                profile: "/car.jpg",
                width: myactive ? "80px" : "50px",
                height: myactive ? "80px" : "50px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 24
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: userdata.UserId && {
                pathname: `/profile/${userdata.UserId}`,
                query: {
                  name: "Post"
                }
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginTop: "10px",
                  color: "#293241",
                  textAlign: "center"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: myactive ? userdata.Username : "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 91
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 24
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: firstlist.current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/[userıd]/${item.path}`,
              as: `/${userdata.UserId}/${item.path}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#ff0a54",
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    display: myactive ? "block" : "none",
                    fontSize: "15px",
                    marginLeft: "10px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: secondlist.current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/[stuff]",
              as: `${item.path}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#168aad",
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    display: myactive ? "block" : "none",
                    fontSize: "15px",
                    marginLeft: "10px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: secondlist.current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: item.icon,
                Iconconfig: {
                  width: myactive ? "31px" : "35px",
                  height: myactive ? "31px" : "35px",
                  lineheight: myactive ? "31px" : "35px",
                  backcolor: "#F0F0F0",
                  color: "black"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  display: myactive ? "block" : "none",
                  fontSize: "15px",
                  marginLeft: "10px"
                },
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Lefttoolbar);

/***/ }),

/***/ "./components/shared/Navigation/Navigation.js":
/*!****************************************************!*\
  !*** ./components/shared/Navigation/Navigation.js ***!
  \****************************************************/
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
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Navigationtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigationtools */ "./components/shared/Navigation/Navigationtools.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation\\Navigation.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Spinner",
  componentId: "sc-9zri3r-0"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);
const Navbarext = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Navbarext",
  componentId: "sc-9zri3r-1"
})(["position:fixed;top:0;left:0;width:100%;height:60px;padding:5px;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:100;"]);
const InnerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__InnerNavbar",
  componentId: "sc-9zri3r-2"
})(["position:relative;height:100%;margin:auto;display:flex;align-items:center;max-width:1100px;width:100%;justify-content:space-between;"]);
const Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-9zri3r-3"
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:2px;border-radius:50%;transition:0.3s;"], ({
  clicked
}) => clicked ? "" : "");
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-9zri3r-4"
})(["display:", ";position:relative;@media (max-width:850px){display:", ";}"], ({
  flex
}) => flex, ({
  flex2
}) => flex2);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Navigation__Input",
  componentId: "sc-9zri3r-5"
})(["padding:6px;padding-left:10px;border:none;width:100%;outline:none;border-radius:3px;background-color:#E0E0E0;color:black;::placeholder{color:black;}"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-9zri3r-6"
})(["position:absolute;padding:6px;right:15px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-left:1px solid white;color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
const Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Optionwindow",
  componentId: "sc-9zri3r-7"
})(["position:absolute;top:60px;height:", ";overflow-y:scroll;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;"], ({
  fornotify
}) => fornotify ? "400px" : "");
const Inneroption = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Inneroption",
  componentId: "sc-9zri3r-8"
})([""]); //ToDo 

function Navigation({
  Data,
  Count,
  Reloadfunc,
  Update
}) {
  const {
    logged,
    spinner,
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]);
  const {
    ref,
    visible,
    setvisible
  } = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const Myref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: ordernumber,
    1: setordernumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const {
    0: Iconumber,
    1: setıconnumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: Iconobject,
    1: setIconobject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    1: {
      className: "fas fa-plus",
      onoff: false,
      lineheight: '36px',
      short: "plus"
    },
    2: {
      className: "fas fa-bell",
      onoff: false,
      lineheight: '33px',
      short: "bell",
      Oncerequested: false
    },
    3: {
      className: "fas fa-sort-down",
      onoff: false,
      lineheight: '30px',
      short: "down"
    }
  });

  const ScrolltoBottom = () => {
    if (Myref.current.scrollTop + Myref.current.offsetHeight >= Myref.current.scrollHeight) {
      Reloadfunc(ordernumber + Data.length);
    }
  };

  const Iconselect = iconnumber => {
    const myobject = _objectSpread({}, Iconobject);

    Object.keys(myobject).forEach(key => {
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
  }; //ToDo rewrite this code


  const Iconclick = (item, shortname) => {
    if (shortname == "bell") Update();
    Iconselect(item);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navbarext, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerNavbar, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex: "block",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              alignItems: "center",
              cursor: "pointer"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
              profile: "https://evrimagaci.org/public/images/logo/v3.svg?v=1",
              width: "40px",
              height: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
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
                lineNumber: 213,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "10px",
                display: "flex",
                alignItems: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Home"], {
                style: {
                  fontSize: "30px",
                  color: "#c9184a"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex2: "none",
        flex: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          placeholder: "Ara"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }, this) : !logged ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            variant: "contained",
            style: {
              marginRight: "10px",
              textTransform: "capitalize"
            },
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["AccountCircle"], {
              style: {
                fontSize: "25px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          variant: "contained",
          style: {
            textTransform: "capitalize"
          },
          endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Assignment"], {
            style: {
              color: "white",
              borderRadius: "50%",
              fontSize: "25px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 20
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        flex2: "flex",
        ref: ref,
        flex: "flex",
        children: [Object.keys(Iconobject).map(item => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
            clicked: Iconobject[item].onoff,
            onClick: () => Iconclick(item, Iconobject[item].short),
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
                  color: Count > 0 && Iconobject[item].short == "bell" ? "#d90429" : ""
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 45
              }, this), Iconobject[item].short == "bell" && Count > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
                lineNumber: 250,
                columnNumber: 50
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 37
          }, this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/profile/[username]",
          as: `/profile/${userdata.UserId}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
            width: "35px",
            height: "35px",
            profile: "/car.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 26
        }, this), Iconumber !== 0 && visible == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
          onScroll: ScrolltoBottom,
          ref: Myref,
          fornotify: Iconobject["2"].onoff,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inneroption, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigationtools__WEBPACK_IMPORTED_MODULE_4__["default"], {
              Navdata: Data,
              optnumber: Iconumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/shared/Navigation/Navigationtools.js":
/*!*********************************************************!*\
  !*** ./components/shared/Navigation/Navigationtools.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigationtools; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilsfunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilsfunc */ "./utilsfunc.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation\\Navigationtools.js";







const Option1div = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigationtools__Option1div",
  componentId: "kqs0vw-0"
})(["width:100%;display:flex;align-items:center;margin-bottom:10px;position:relative;cursor:pointer;padding:10px;border-radius:6px;background-color:", ";&:hover{background-color:#EBEBEB;}"], ({
  check
}) => check == false ? "#EBEBEB" : "");
function Navigationtools({
  optnumber,
  optname,
  Navdata
}) {
  const {
    0: toggle,
    1: settogle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let Myoption = null;
  let title = null;

  if (optnumber == 1) {
    title = "Oluştur";
    Myoption = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "far fa-edit",
          Iconconfig: {
            width: "35px",
            backcolor: "#DEDEDE",
            height: "35px",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "G\xF6nderi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            },
            children: "Sayfanda bir g\xF6nderi payla\u015F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "fas fa-users ",
          Iconconfig: {
            width: "35px",
            backcolor: "#DEDEDE",
            height: "35px",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Oda"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            },
            children: "Bir tart\u0131\u015Fma odas\u0131 olu\u015Ftur"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 18
    }, this);
  }

  if (optnumber == 2) {
    title = "Bildirimler";
    const Attriubtearray = [{
      name: "Like",
      idname: "ContentId",
      desc: "Senin Gönderini Beğendi.",
      Icon: "fas fa-thumbs-up",
      color: "#DD1F1F",
      lh: "30px",
      href: "/content"
    }, {
      name: "Reshow",
      idname: "ContentId",
      desc: "Senin Gönderini İşaretledi.",
      Icon: "fas fa-thumbtack",
      color: "#adb5bd",
      lh: "35px",
      href: "/content"
    }, {
      name: "Follow",
      idname: "UserId",
      desc: "Seni Takip Etti",
      Icon: "fas fa-user-plus fa-sm",
      color: "#ee6055",
      lh: "30px",
      href: "/profile"
    }, {
      name: "Comment",
      idname: "ContentId",
      desc: "Gönderine Yorum Yaptı.",
      Icon: "fas fa-comment-dots",
      color: "#adb5bd",
      lh: "30px",
      href: "/content"
    }, {
      name: "Post",
      desc: "Yeni Bir Gönderi Paylaştı",
      Icon: "fas fa-edit",
      color: "#fca311",
      lh: "30px"
    }, {
      name: "Debate",
      desc: "Yeni Bir grup Oluşturdu.",
      Icon: ""
    }];

    if (Navdata.length == 0) {
      Myoption = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Hen\xFCz bir bildiriminiz yok."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 24
      }, this);
    }

    if (Navdata.length > 0) {
      Myoption = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: Navdata.length > 0 && Navdata.map(item => {
          //TODO icon detector
          var myitemobj = {};

          for (let i = 0; i < Attriubtearray.length; i++) {
            if (item.attribute == Attriubtearray[i].name) {
              myitemobj = Attriubtearray[i];
            }
          }

          if (item.ContentId == null && item.CommentId == null) {}

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
            check: item.Facecheck,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: `${myitemobj.href}/${item[myitemobj.idname]}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "flex"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
                    profile: "/black.jpg",
                    width: "50px",
                    height: "50px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 39
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 38
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: myitemobj.Icon,
                  Iconconfig: {
                    position: "absolute",
                    top: "40px",
                    right: "10px",
                    color: "white",
                    backcolor: myitemobj.color,
                    width: "30px",
                    height: "30px",
                    lineheight: myitemobj.lh
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 38
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    marginLeft: "20px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      fontWeight: "bold",
                      fontSize: "15px"
                    },
                    children: item.User.firstname + " " + item.User.lastname + " , (Osmanlı Halkınını Eğitim Seviyesi...)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      fontSize: "13px",
                      color: "#757575",
                      fontWeight: "bold"
                    },
                    children: myitemobj.desc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      fontSize: "13px",
                      color: "#1780a1",
                      fontWeight: "bold"
                    },
                    children: [Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_7__["calculatedate"])(item.createdAt).time + " " + Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_7__["calculatedate"])(item.createdAt).express, " \xF6nce "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 38
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 14
      }, this);
    }
  }

  if (optnumber == 3) {
    title = "Profil";
    Myoption = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "fas fa-user",
          Iconconfig: {
            width: "32px",
            height: "32px",
            backcolor: "#DEDEDE",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "15px"
            },
            children: "Profilim"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "fas fa-user-cog ",
          Iconconfig: {
            width: "32px",
            height: "32px",
            backcolor: "#DEDEDE",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "15px"
            },
            children: "Profil Ayarlar\u0131"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "fas fa-moon ",
          Iconconfig: {
            width: "32px",
            backcolor: "#DEDEDE",
            height: "32px",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "15px"
            },
            children: "Karanl\u0131k Mod"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
            checkedIcon: false,
            uncheckedIcon: false,
            onChange: () => settogle(!toggle),
            checked: toggle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 27
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "fas fa-sign-out-alt ",
          Iconconfig: {
            width: "32px",
            backcolor: "#DEDEDE",
            height: "32px",
            lineheight: "32px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "15px"
            },
            children: "\xC7\u0131k\u0131\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 18
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        padding: "5px",
        fontSize: "20px"
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }, this), Myoption]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/shared/Usercard.js":
/*!***************************************!*\
  !*** ./components/shared/Usercard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usercard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Usercard.js";







const Exterior = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Exterior",
  componentId: "sc-8n1zyz-0"
})(["width:100%;margin-bottom:10px;"]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Inner",
  componentId: "sc-8n1zyz-1"
})(["display:flex;align-items:center;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Name",
  componentId: "sc-8n1zyz-2"
})(["margin-left:10px;font-weight:600;"]);
const Following = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Following",
  componentId: "sc-8n1zyz-3"
})(["margin-left:auto;margin-right:10px;"]);
function Usercard({
  firstname,
  surname,
  imageurl,
  optionforbutton,
  children,
  usernumber,
  userid,
  followerlist,
  Relationfunc
}) {
  const {
    0: checkfollow,
    1: setcheckfollow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  var Option = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId) {
      followerlist.forEach(element => {
        if (userdata.UserId == element.id) {
          setcheckfollow(true);
        }
      });
    }
  }, [userdata]);

  const Followingreq = () => {
    setcheckfollow(!checkfollow);
    Relationfunc(checkfollow, userdata.UserId, userid);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: {
          pathname: `/profile/${userid}`,
          query: {
            name: "Post"
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
          profile: "/led.jpg",
          width: "40px",
          height: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "black"
          },
          children: firstname + " " + surname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Following, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["PersonAdd"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 36
        }, this),
        style: {
          width: "170px",
          textTransform: "capitalize",
          fontWeight: "600"
        },
        color: "secondary",
        variant: "outlined",
        onClick: Followingreq,
        children: checkfollow ? "Takipten Çık" : "Takip Et"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/styledcomponents/button.js":
/*!***********************************************!*\
  !*** ./components/styledcomponents/button.js ***!
  \***********************************************/
/*! exports provided: Button, Global, Porfileimage, Black, rotate360, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Porfileimage", function() { return Porfileimage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate360", function() { return rotate360; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
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
     font-family: 'Poppins', sans-serif;
 }

 body {
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
cursor:pointer;
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
}) => aktif ? "150" : "-300", ({
  aktif
}) => aktif ? "0.7" : "0");
const rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-1dlve5z-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid #6c757d;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Lefttoolbar */ "./components/shared/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/Navigation/Navigation */ "./components/shared/Navigation/Navigation.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js";










const Bigdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "mainlayout__Bigdiv",
  componentId: "sc-1umognl-0"
})(["padding-top:65px;"]);
const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:3001");
function Mainlayout({
  children
}) {
  const {
    0: active,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]);
  const {
    0: navdata,
    1: setnavdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: countofdata,
    1: setcountdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: lastrecord,
    1: setlastrecord
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: lastrecordactive,
    1: setlastrecordactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const userouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setactive(false);
  }, [userouter.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["NotificationCountreq"])({
        setcountdata: setcountdata,
        UserId: userdata.UserId
      });
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: 10,
        navdata: navdata,
        lastrow: false
      });
    }
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const listener = () => {
      setlastrecordactive(true);
      setlastrecord(prev => prev + 1);

      if (userdata.UserId) {
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["NotificationCountreq"])({
          setcountdata: setcountdata,
          UserId: userdata.UserId
        });
      }
    };

    socket.on("Notification", listener);
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId && lastrecordactive) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: countofdata,
        navdata: navdata,
        lastrow: true
      });
    }
  }, [lastrecord]);

  const Reloadnav = order => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Notificationreq"])({
      setnavdata: setnavdata,
      UserId: userdata.UserId,
      order: order,
      navdata: navdata,
      lastrow: false
    });
  };

  const Updatecount = () => {
    console.log(lastrecordactive);
    setcountdata(0);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["UpdateNotificationcount"])({
      UserId: userdata.UserId
    });
  }; //


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bigdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Black"], {
      onClick: () => setactive(false),
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/pages/Main/Leaderboard */ "./components/pages/Main/Leaderboard.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
const Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__TitleDiv",
  componentId: "sc-14bmh8h-1"
})(["width:90%;padding:10px;height:300px;background-color:red;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-2"
})([""]);
const ShortDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__ShortDiv",
  componentId: "sc-14bmh8h-3"
})(["height:50px;max-width:500px;margin:auto;margin-bottom:10px;overflow-x:hidden;"]);
const InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:100%;display:flex;align-items:center;transition-duration:0.5s;position:relative;right:", ";"], ({
  slidevalue
}) => slidevalue);
const Selectionboxes = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Selectionboxes",
  componentId: "sc-14bmh8h-5"
})(["width:100px;font-weight:600;padding:5px;text-align:center;margin-left:15px;font-size:14px;border-radius:50px;cursor:pointer;background-color:", ";color:", ";flex-shrink:0;"], ({
  selected
}) => selected ? "#ef233c" : "#ced4da", ({
  selected
}) => selected ? "white" : "black");
const Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;position:absolute;cursor:pointer;left:", ";top:50%;font-size:20px;transform:translateY(-50%);right:", ""], ({
  leftvalue
}) => leftvalue, ({
  rightvalue
}) => rightvalue); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

function Home({
  mydata
}) {
  const {
    bottom
  } = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    0: slidevalue,
    1: setslidevalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]);
  const {
    0: contentdata,
    1: setcontentdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...mydata]);
  const {
    0: order,
    1: setorder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: errormsg,
    1: seterror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectionlist,
    1: setselectionlist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Felsefe: {
      selected: false
    },
    Metafizik: {
      selected: false
    },
    Uzay: {
      selected: false
    },
    Biyoloji: {
      selected: false
    }
  });
  const {
    0: selectedkey,
    1: setselectedkey
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //followerlist

  const {
    0: list,
    1: setlist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: stoprequesting,
    1: setstopreq
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        paignation: true,
        category: selectedkey,
        seterrmsg: seterror,
        setstopreq: setstopreq
      });
    }
  }, [order]);

  const Requestagain = keyname => {
    setspinner(true);
    setorder(10);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: 10,
      setspinner: setspinner,
      category: keyname,
      paignation: false,
      seterrmsg: seterror,
      setstopreq: setstopreq
    });
  };

  const Setslidevalue = value => {
    if (value == "Back" && slidevalue !== 0) {
      setslidevalue(slidevalue - 220);
    } else if (value == "forward" && slidevalue < 600) {
      setslidevalue(slidevalue + 220);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (bottom) setorder(mydata.length + 10);
  }, [bottom]);

  const createrelation = (postId, attribute, typeofrelation, userid) => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  };

  const Selectionhander = keyname => {
    const Mutated = _objectSpread({}, selectionlist);

    for (const key in Mutated) {
      Mutated[key].selected = false;
    }

    Mutated[keyname].selected = true;
    Requestagain(keyname);
    setselectionlist(Mutated);
    setselectedkey(keyname);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: `${list.length > 0 ? "100vh" : "100%"}`,
      overflow: "hidden"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        paddingLeft: "100px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["FormatQuote"], {
            style: {
              transform: "rotateY(180deg)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setlist: () => setlist([]),
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            paddingTop: "10px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              position: "relative"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: () => Setslidevalue("Back"),
              leftvalue: "20px",
              rightvalue: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["ArrowBackIos"], {
                style: {
                  color: "black",
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 32
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: () => Setslidevalue("forward"),
              leftvalue: "",
              rightvalue: "15px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["ArrowForwardIos"], {
                style: {
                  color: "black",
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
                slidevalue: slidevalue + "px",
                children: Object.keys(selectionlist).map(item => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionboxes, {
                    selected: selectionlist[item].selected,
                    onClick: () => Selectionhander(item),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: item
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 49
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 31
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 24
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px"
            },
            children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 24
          }, this), contentdata.length && contentdata.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            postId: item.id,
            content: item.content,
            createrelationforsmh: createrelation,
            showwindow: stateoflist => setlist(stateoflist),
            like: item.Like //bu bir obje array
            ,
            retweet: item.Retweet,
            comment: item.allcomments,
            readlater: item.Readlater,
            //key numarası
            profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
            title: item.title,
            titleimage: "yaprak.jpg",
            username: item.personal !== null ? item.personal.firstname : "notyet",
            usersurname: item.personal !== null ? item.personal.lastname : "notyet" //bir obje props
            ,
            userid: item.personal !== null ? item.personal.id : "notyet",
            subtitle: item.subtitle,
            date: item.createdAt
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 29
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 9
  }, this);
}
/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/

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

/***/ "./hooks/Clikcoutisde.js":
/*!*******************************!*\
  !*** ./hooks/Clikcoutisde.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useClickoutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useClickoutside() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: visible,
    1: setvisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleclick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setvisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("click", handleclick);
    return () => {
      document.removeEventListener("click", handleclick);
    };
  });
  return {
    visible,
    setvisible,
    ref
  };
}

/***/ }),

/***/ "./hooks/Scroll.js":
/*!*************************!*\
  !*** ./hooks/Scroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScroll() {
  const {
    0: bottom,
    1: setbottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //
    document.addEventListener("scroll", e => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setbottom(true);
      } else {
        setbottom(false);
      }
    });
    return () => document.removeEventListener("scroll", () => {
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
    });
  }, []);
  return {
    bottom: bottom
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _containers_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/pages/Home */ "./containers/pages/Home.js");
/* harmony import */ var _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Layout/mainlayout */ "./containers/Layout/mainlayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\index.js";







const Home = ({
  content
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mydata: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 8
  }, undefined);
};

Home.layout = _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_5__["default"];
async function getServerSideProps({}) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`http://localhost:3001/content/gethome/10/Felsefe`);

    if (data && data.error) {
      return {
        redirect: {
          destination: "/500"
        }
      };
    }

    return {
      props: {
        content: data.data
      }
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/500"
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./utilsfunc.js":
/*!**********************!*\
  !*** ./utilsfunc.js ***!
  \**********************/
/*! exports provided: calculatedate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatedate", function() { return calculatedate; });
const calculatedate = previousdate => {
  const Prevdate = new Date(previousdate);
  const difference = Math.abs(Date.now() - Prevdate);
  const second = Math.ceil(difference / 1000);

  if (second < 60) {
    return {
      time: second,
      express: "Saniye"
    };
  } else if (second > 60 && second < 3600) {
    return {
      time: Math.ceil(second / 60),
      express: "Dakika"
    };
  } else if (second > 3600 && second < 86400) {
    return {
      time: Math.ceil(second / (60 * 60)),
      express: "Saat"
    };
  } else if (second > 86400 && second < 262974383) {
    return {
      time: Math.ceil(second / (60 * 60 * 24)),
      express: "Gün"
    };
  }
};

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVhZGVyYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvbnRvb2xzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL1VzZXJjYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Vc2VyY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9DbGlrY291dGlzZGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsc2Z1bmMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwiZ2V0IiwibGVuZ3RoIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwiaGVhZGVycyIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJjYXRvZ2VyeSIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkljb25zcGFuIiwic3R5bGVkIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJiYWNrY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImxpbmVoZWlnaHQiLCJob3ZlcmNvbG9yIiwiaG92ZXJiYWNrIiwicm90YXRlIiwiSWNvbiIsImNsYXNzTmFtZSIsIkljb25jb25maWciLCJhY3RpdmVmdW5jIiwiQ29udGVudGRpdiIsImRpdiIsImltYWdlIiwiRXh0ZXJpb3JkaXYiLCJJbm5lcmRpdiIsIkltYWdlZGl2IiwiU2Vjb25kb3B0aW9uZGl2IiwiYm9yZGVyIiwiRmlyc3RwYXJ0IiwiU2Vjb25kcGFydCIsIkxlYWRlcmJvYXJkIiwibGlzdCIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwidXNlU3RhdGUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwibmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhZGRpbmdUb3AiLCJSdGxpa2V3aW5kb3ciLCJJbm5lcndpbmRvdyIsIlNob3dmb2xsb3dlciIsInNldGxpc3QiLCJUaXRsZSIsIkZvbGxvd2luZ3JlbGF0aW9uIiwiY2hlY2tmb2xsb3ciLCJmb2xsb3dlZGlkIiwiVXNlckNvbnRlbnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIkZvbGxvd2VkIiwiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsImlzY29tbWVudCIsIkltYWdlaG9sZGVyIiwiQ29udGVudGhvbGRlciIsIlRvb2xiYXIiLCJmb3J1c2VyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsIsSwY29uaG9sZGVyIiwiaG93ZXJjb2xvciIsIlByb2ZpbGVkaXYiLCJJY29ucyIsImkiLCJpc21hcmtlZCIsIk9wdGlvbndpbmRvdyIsImFjdGl2ZSIsIk9wdGlvbmhvbGRlciIsIlNwYW4iLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJDb250ZW50Y2FyZCIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsImNvbnRlbnQiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwiZGF0ZSIsImNvbW1lbnQiLCJyZXR3ZWV0IiwibGlrZSIsInNob3d3aW5kb3ciLCJjcmVhdGVyZWxhdGlvbmZvcnNtaCIsInBvc3RJZCIsImZvcnVzZXJvcHRpb24iLCJpbmRleG51bSIsInVzZXJpZCIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJMaWtlIiwibnVtYmVyIiwicmVzaG93IiwiUmVhZGxhdGVyIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJ1c2VDbGlja291dHNpZGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ0ZXh0Zm9yb3BpdG9uIiwidXNlRWZmZWN0IiwiY3VycmVudGVsZW1lbnRzIiwiZm9yRWFjaCIsInVzZXIiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsInBhdGhuYW1lIiwicXVlcnkiLCJtYXJnaW5SaWdodCIsImNhbGN1bGF0ZWRhdGUiLCJ0aW1lIiwiZXhwcmVzcyIsInRleHRBbGlnbiIsIndvcmRCcmVhayIsImZsZXgiLCJFeHRlcmlvckRpdiIsIklubmVyRGl2IiwiSW1hZ2VEaXYiLCJOYXZpZ2F0aW9uRGl2IiwiTGkiLCJsaSIsIkNsb3Nlb3BlbiIsIkxlZnR0b29sYmFyIiwibWFrZWFjdGl2ZSIsIm15YWN0aXZlIiwibG9nZ2VkIiwiZmlyc3RsaXN0IiwidXNlUmVmIiwiaWNvbiIsImRlc2MiLCJwYXRoIiwic2Vjb25kbGlzdCIsInVuZGVmaW5lZCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwiY3VycmVudCIsInJvdGF0ZTM2MCIsIlNwaW5uZXIiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4MiIsIklucHV0IiwiaW5wdXQiLCJJY29uc2VjdXJlIiwiZm9ybm90aWZ5IiwiSW5uZXJvcHRpb24iLCJOYXZpZ2F0aW9uIiwiRGF0YSIsIkNvdW50IiwiUmVsb2FkZnVuYyIsIlVwZGF0ZSIsInNwaW5uZXIiLCJ1c2VDbGlja291dHNpZSIsIk15cmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiSWNvbm9iamVjdCIsInNldEljb25vYmplY3QiLCJvbm9mZiIsInNob3J0IiwiT25jZXJlcXVlc3RlZCIsIlNjcm9sbHRvQm90dG9tIiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiSWNvbnNlbGVjdCIsImljb25udW1iZXIiLCJteW9iamVjdCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJJY29uY2xpY2siLCJzaG9ydG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwiT3B0aW9uMWRpdiIsImNoZWNrIiwiTmF2aWdhdGlvbnRvb2xzIiwib3B0bnVtYmVyIiwib3B0bmFtZSIsIk5hdmRhdGEiLCJ0b2dnbGUiLCJzZXR0b2dsZSIsIk15b3B0aW9uIiwiQXR0cml1YnRlYXJyYXkiLCJpZG5hbWUiLCJsaCIsImhyZWYiLCJteWl0ZW1vYmoiLCJDb21tZW50SWQiLCJGYWNlY2hlY2siLCJVc2VyIiwiY3JlYXRlZEF0IiwiRXh0ZXJpb3IiLCJJbm5lciIsIk5hbWUiLCJGb2xsb3dpbmciLCJVc2VyY2FyZCIsInN1cm5hbWUiLCJvcHRpb25mb3JidXR0b24iLCJjaGlsZHJlbiIsInVzZXJudW1iZXIiLCJmb2xsb3dlcmxpc3QiLCJSZWxhdGlvbmZ1bmMiLCJzZXRjaGVja2ZvbGxvdyIsIk9wdGlvbiIsImVsZW1lbnQiLCJGb2xsb3dpbmdyZXEiLCJCdXR0b24iLCJidXR0b24iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlBvcmZpbGVpbWFnZSIsInByb2ZpbGUiLCJCbGFjayIsImFrdGlmIiwiQmlnZGl2Iiwic29ja2V0IiwiaW8iLCJNYWlubGF5b3V0IiwiY291bnRvZmRhdGEiLCJsYXN0cmVjb3JkIiwic2V0bGFzdHJlY29yZCIsImxhc3RyZWNvcmRhY3RpdmUiLCJzZXRsYXN0cmVjb3JkYWN0aXZlIiwidXNlcm91dGVyIiwidXNlUm91dGVyIiwibGlzdGVuZXIiLCJvbiIsIlJlbG9hZG5hdiIsIlVwZGF0ZWNvdW50IiwiQ3NzVGV4dEZpZWxkIiwibWFrZVN0eWxlcyIsInJvb3QiLCJGbGV4ZGl2IiwiVGl0bGVEaXYiLCJDb250ZW50RGl2IiwiU2hvcnREaXYiLCJJbm5lcnNob3J0RGl2Iiwic2xpZGV2YWx1ZSIsIlNlbGVjdGlvbmJveGVzIiwic2VsZWN0ZWQiLCJsZWZ0dmFsdWUiLCJyaWdodHZhbHVlIiwiSG9tZSIsInVzZVNjcm9sbCIsInNldHNsaWRldmFsdWUiLCJzZXRvcmRlciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9ubGlzdCIsIkZlbHNlZmUiLCJNZXRhZml6aWsiLCJVemF5IiwiQml5b2xvamkiLCJzZWxlY3RlZGtleSIsInNldHNlbGVjdGVka2V5Iiwic3RvcHJlcXVlc3RpbmciLCJSZXF1ZXN0YWdhaW4iLCJrZXluYW1lIiwiU2V0c2xpZGV2YWx1ZSIsInZhbHVlIiwiY3JlYXRlcmVsYXRpb24iLCJ0eXBlb2ZyZWxhdGlvbiIsIlNlbGVjdGlvbmhhbmRlciIsIk11dGF0ZWQiLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJzdGF0ZW9mbGlzdCIsIlJldHdlZXQiLCJhbGxjb21tZW50cyIsInBlcnNvbmFsIiwic3VidGl0bGUiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJnZXRJdGVtIiwiaGFuZGxlY2xpY2siLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldGJvdHRvbSIsImUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImxpbmsiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJsYXlvdXQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZWRpcmVjdCIsInByZXZpb3VzZGF0ZSIsIlByZXZkYXRlIiwiZGlmZmVyZW5jZSIsImFicyIsIm5vdyIsInNlY29uZCIsImNlaWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QUwsQ0FBVUQsTUFBTSxJQUFFLEtBQUcsRUFBSCxHQUFNLEVBQVIsQ0FBaEIsQ0FBTjtBQUFtQ3BoQixhQUFPLEVBQUM7QUFBM0MsS0FBUDtBQUVEO0FBRUwsQ0F6Qk0sQzs7Ozs7Ozs7Ozs7QUNBUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcn0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6Y29udGVudGRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWNlY29tbWVudHJlcT1hc3luYyAoe01lc3NhZ2UsVGFrZXJJZCxzZXRudW1iZXJjb20sc2V0d2luZG93LFVzZXJJZCxDb250ZW50SWQsc2V0ZXJybXNnfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbW1lbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTp7XHJcbiAgICAgIE1lc3NhZ2U6TWVzc2FnZSxcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgVGFrZXJJZDpUYWtlcklkLFxyXG4gICAgfX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2d9KSl7ICAgIFxyXG4gICAgICAgIHNldG51bWJlcmNvbShwcmV2PT5wcmV2KzEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VsYW5cIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y3VycmVudGRhdGEsc2V0c3Bpbm5lcixzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyLHNldHN0b3ByZXEsY2F0ZWdvcnkscGFpZ25hdGlvbn0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfS8ke2NhdGVnb3J5fWApXHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2V0c3RvcHJlcShmYWxzZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgICAgc2V0Y29tbWVudChkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZH0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvcmJ1cmFkYWR1cnV5b3JcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRkYXRhLGNhdG9nZXJ5LFVzZXJJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvcHJvZmlsZWNvbnRlbnQvJHtjYXRvZ2VyeX0vJHtVc2VySWR9YCk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKGRhdGEuZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhOZXdkYXRhKTtcclxuXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEljb25zcGFuPXN0eWxlZC5zcGFuKCh7d2lkdGgsaGVpZ2h0LGNvbG9yLGJhY2tjb2xvcixwb3NpdGlvbix0b3AsbGVmdCxyaWdodCxib3R0b20sbGluZWhlaWdodCxob3ZlcmNvbG9yLGhvdmVyYmFjayxyb3RhdGV9KT0+YFxyXG5wb3NpdGlvbjoke3Bvc2l0aW9ufTtcclxudG9wOiR7dG9wfTtcclxubGVmdDoke2xlZnR9O1xyXG5yaWdodDoke3JpZ2h0fTtcclxuYm90dG9tOiR7Ym90dG9tfTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbmxpbmUtaGVpZ2h0OiR7bGluZWhlaWdodH07XHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNmb3JtOnJvdGF0ZSgke3JvdGF0ZSA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pO1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiBjb2xvcjoke2hvdmVyY29sb3J9O1xyXG59XHJcbmApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHtjbGFzc05hbWUsSWNvbmNvbmZpZyxhY3RpdmVmdW5jfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PjwvaT5cclxuICAgICAgIDwvSWNvbnNwYW4+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tICcuLi8uLi9zaGFyZWQvVXNlcmNhcmQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MjIwcHg7XHJcbnBhZGRpbmc6MTVweDtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5maWx0ZXI6Ymx1ciAoMngpO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7aW1hZ2V9KT0+aW1hZ2V9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6ODBweDtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDo2MDBweDtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjE1MHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2JsYWNrLmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZG9wdGlvbmRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDo1MCU7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5jb2xvcjogJHsoe2JvcmRlcn0pPT4gYm9yZGVyID09IGZhbHNlID8gXCIjZDkwNDI5XCIgOiBcIndoaXRlXCJ9O1xyXG5wYWRkaW5nOjhweDtcclxuYm9yZGVyLWJvdHRvbToycHggc29saWQgJHsoe2JvcmRlcn0pPT4gYm9yZGVyID8gXCIjZDkwNDI5XCIgOiBcInRyYW5zcGFyZW50XCJ9O1xyXG50cmFuc2l0aW9uOjAuMXM7XHJcbiY6IGhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDkwNDI5O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBGaXJzdHBhcnQ9c3R5bGVkLmRpdmBcclxub3ZlcmZsb3c6YXV0bztcclxuaGVpZ2h0OjI1MHB4O1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZm9udHNpemU6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbmBcclxuY29uc3QgU2Vjb25kcGFydD1zdHlsZWQuZGl2YFxyXG5vdmVyZmxvdzpoaWRkZW47XHJcbmhlaWdodDoyOTBweDtcclxuYFxyXG4vKlxyXG4gPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGNvbG9yOlwiI2Q5MDQyOVwiLHBhZGRpbmc6XCI4cHhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgPGgzPkxpZGVybGlrIFRhYmxvc3U8L2gzPlxyXG4gICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdHJvcGh5IGZhLWxnXCIgSWNvbmNvbmZpZz17e2NvbG9yOlwiI0U2RDYyNlwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKi8gICAgICAgICAgIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJib2FyZCh7bGlzdH0pe1xyXG4gICAgY29uc3QgW29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIDE6ZmFsc2UsXHJcbiAgICAgICAgMjpmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6MSxcclxuICAgICAgICBhcnJvd3M6dHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6MjAwMCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiIzRhNGE0YVwiLGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT5MaWRlcmxpayBUYWJsb3N1PC9wPlxyXG4gICAgICAgICAgICAgICA8Rmlyc3RwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3tuYW1lOlwiTXVzYVwiLGltYWdlOlwiL3lhcHJhay5qcGdcIn0se25hbWU6XCJTZWxtYW5cIixpbWFnZTpcIi9sZWQuanBnXCJ9LHtuYW1lOlwiQWhtZXRcIixpbWFnZTpcIi95YXByYWsuanBnXCJ9LHtuYW1lOlwiRHVoYW5cIixpbWFnZTpcIi9jYXIuanBnXCJ9LHtuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCIvY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiL2Nhci5qcGdcIn1dLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyY2FyZCBmaXJzdG5hbWU9e2l0ZW0ubmFtZX0gdXNlcm51bWJlcj17aW5kZXgrMX0gaW1hZ2V1cmw9e2l0ZW0uaW1hZ2V9IG9wdGlvbmZvcmJ1dHRvbj17ZmFsc2V9PjU0MzwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICA8L0ZpcnN0cGFydD4gXHJcbiAgICAgICAgICAgICAgIDxocj48L2hyPiAgXHJcbiAgICAgICAgICAgICAgIDxTZWNvbmRwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiM0YTRhNGFcIixtYXJnaW5Cb3R0b206XCIxMHB4XCIscGFkZGluZ1RvcDpcIjEwcHhcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+w5ZuZSDDh8Sxa2FuIEfDtm5kZXJpbGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgPFNsaWRlciAgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe25hbWU6XCJVemF5IG5lZGVuIGdpemVtbGk/IMSwbnNhbmxhciBidSBrb251ZGEgbmUgeWFwbWFsxLE/XCIsaW1hZ2U6XCIveWFwcmFrLmpwZ1wifSx7bmFtZTpcIlJlc2ltIHZlIETDvMWfw7xuY2VuaW4gaW5zYW7EsW4gZml6eW9sb2hpc2luZSBldGtpc2kuXCIsaW1hZ2U6XCIvbGVkLmpwZ1wifSx7bmFtZTpcIsSww6dpbWl6ZGVraSBTw7ZubWV5ZW4gQXRlxZ9pIGJ1bGFiaWxpciBtaXlpej9cIixpbWFnZTpcIi95YXByYWsuanBnXCJ9LHtuYW1lOlwiU29uIEtyYWxsxLFrXCIsaW1hZ2U6XCIvY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiL2Nhci5qcGdcIn0se25hbWU6XCJTYWTEsWtcIixpbWFnZTpcIi9jYXIuanBnXCJ9XS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBrZXk9e2luZGV4fSBpbWFnZT17aXRlbS5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICA8L1NlY29uZHBhcnQ+XHJcbiAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFVzZXJjYXJkIGZyb20gXCIuLi8uLi9zaGFyZWQvVXNlcmNhcmRcIjtcclxuaW1wb3J0IHtDcmVhdGV1c2VycmVsYXRpb259IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHtUaHVtYlVwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IFJ0bGlrZXdpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubWF4LXdpZHRoOjUwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5oZWlnaHQ6MzUwcHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG56LWluZGV4OjIwMDtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJ3aW5kb3c9c3R5bGVkLmRpdmBcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MTAwJTtcclxub3ZlcmZsb3c6YXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2ZvbGxvd2VyKHtsaXN0LHNldGxpc3R9KSB7XHJcblxyXG4gICAgdmFyIFRpdGxlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZWxhdGlvbiA9IChjaGVja2ZvbGxvdyxVc2VySWQsZm9sbG93ZWRpZCkgPT57XHJcblxyXG4gICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgICAgICAgIEZvbGxvd2VkSWQ6Zm9sbG93ZWRpZCxcclxuICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2ZvbGxvd1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzd2l0Y2ggKGxpc3RbMF0uVXNlckNvbnRlbnQuYXR0cmlidXRlKSB7XHJcbiAgICAgICAgY2FzZSBcIkxpa2VcIjpcclxuICAgICAgICAgICAgVGl0bGU9XCJCZcSfZW5pbGVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlJlc2hvd1wiOlxyXG4gICAgICAgICAgICBUaXRsZT1cIsSwxZ9hcmV0bGVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgVGl0bGU9XCJFbXB0eSBmb3Igbm93XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2sgb25DbGljaz17c2V0bGlzdH0gYWt0aWY9e3RydWV9PjwvQmxhY2s+XHJcbiAgICAgICAgICAgICAgICA8UnRsaWtld2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOlwiMTBweFwiLGJhY2tncm91bmRDb2xvcjpcImxpZ2h0Z3JleVwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIixoZWlnaHQ6XCI0MHB4XCIsd2lkdGg6XCIxMDAlXCIsbWFyZ2luOlwiYXV0b1wiLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYlVwIHN0eWxlPXt7Y29sb3I6XCIjQzcyMTIxXCJ9fT48L1RodW1iVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57VGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17c2V0bGlzdH0gIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19IGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uZm9yYnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lPXtpdGVtLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cm5hbWU9e2l0ZW0ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlcmxpc3Q9e2l0ZW0uRm9sbG93ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbmZ1bmM9e0ZvbGxvd2luZ3JlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVXNlcmNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICA8L1J0bGlrZXdpbmRvdz4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiXHJcbmltcG9ydCB7ZmVlZCwgRmVlZGJhY2t9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gXCIuLi8uLi9ob29rcy9DbGlrY291dGlzZGVcIjtcclxuXHJcblxyXG5jb25zdCBMaWtlYW5pbWF0b249a2V5ZnJhbWVzYFxyXG4wJSB7Zm9udC1zaXplOjE4cHh9XHJcbjMwJSB7Zm9udC1zaXplOjE5cHh9XHJcbjUwJSB7Zm9udC1zaXplOjIxcHh9XHJcbjcwJSB7Zm9udC1zaXplOjIycHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxOHB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5gXHJcbmNvbnN0IEltYWdlZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctcmlnaHQ6NXB4O1xyXG5wYWRkaW5nLWxlZnQ6NXB4O1xyXG5cclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuYFxyXG5jb25zdCBDb250ZW50ZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6ICR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCIxNXB4XCI6IFwiMHB4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuMDhzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgkeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfSk7XHJcbn07XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2lzbWFya2VkfSk9PmlzbWFya2VkID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbndpZHRoOjM1MHB4O1xyXG5wYWRkaW5nOjVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozNXB4O1xyXG5yaWdodDoxMHB4OyBcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDoxMDAwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcblxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTs7XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudGNhcmQoe3JlYWRsYXRlcixwcm9maWxlaW1hZ2UsY29udGVudCx0aXRsZWltYWdlLHRpdGxlLGlzY29tbWVudCx1c2VybmFtZSx1c2Vyc3VybmFtZSxkYXRlLGNvbW1lbnQscmV0d2VldCxsaWtlLHNob3d3aW5kb3csY3JlYXRlcmVsYXRpb25mb3JzbWgscG9zdElkLGZvcnVzZXIsZm9ydXNlcm9wdGlvbixpbmRleG51bSx1c2VyaWR9KXtcclxuICAgIFxyXG4gICAgY29uc3RbZWxlbWVudHMsc2V0ZWxlbWVudHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbnVtYmVyOmxpa2UubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2hvdzp7XHJcbiAgICAgICAgICAgIG51bWJlcjpyZXR3ZWV0Lmxlbmd0aCxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBudW1iZXI6MCxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2lkZSgpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIHZhciB0ZXh0Zm9yb3BpdG9uPVwiXCI7XHJcbiAgICBzd2l0Y2ggKGZvcnVzZXJvcHRpb24pIHtcclxuICAgICAgICBjYXNlIFwiUmVhZGxhdGVyXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJLYXlkZWRpbGVuIGfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkxpa2VcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIkJlxJ9lbmlsZW4gR8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiXHJcbiAgICAgICAgICAgIGJyZWFrOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuXHJcbiAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuXHJcbiAgICAgICAgaWYoIWZvcnVzZXIpe1xyXG5cclxuICAgICAgICAgICAgbGlrZS5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXR3ZWV0LmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2Upe1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiQ3JlYXRlXCIsdXNlcmlkKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIgPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE91dHNpZGVkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcclxuICAgICAgICAgICAgICBpc2NvbW1lbnQgPyAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNhcmV0LWxlZnQgZmEtbGdcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6XCItNnB4XCIsdG9wOlwiOHB4XCIsY29sb3I6XCIjZmFmOWY5XCJ9fT48L0ljb24+IDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCJ9fSByZWY9e3JlZn0+ICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6XCIjMkEyQTJBXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+RHVoYW4gw5Z6dMO8cmsnw7wgdGFraXB0ZW4gw6fEsWs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+UGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgb25DbGljaz17KCk9PmNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxmb3J1c2Vyb3B0aW9uLFwiRGVzdHJveVwiLGluZGV4bnVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdCBmYS1zbVwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT57dGV4dGZvcm9waXRvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy12XCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6XCIjMkEyQTJBXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAoPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrPjwvRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlsZGlyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlaW1hZ2Vob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gaGVpZ2h0PXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBwcm9maWxlPXtwcm9maWxlaW1hZ2V9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OmZvcnVzZXIgPyBcImJsb2NrXCIgOiBcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBudWxsIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlciBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIix3b3JkQnJlYWs6XCJicmVcIn19Pntjb250ZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI0E3MDkwOVwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250ZW50L1tpZF1cIiBhcz17YC9jb250ZW50LyR7cG9zdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIix3b3JkQnJlYWs6XCJicmVcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5XaGlsZSB0aGUgQ3J5cHRvIFByb2Zlc3NvcnMgbWF5IHNldCBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIHNvbWUuLi4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXNob3dcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhyZXR3ZWV0LFwiUmVzaG93XCIpfT57ZWxlbWVudHMucmVzaG93Lm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwicmVkXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjI1NSwgMCwgMCwwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMuTGlrZS5pc21hcmtlZH0gY29sb3I9e1wiI0M3MjEyMVwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcIkxpa2VcIil9IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciAgb25DbGljaz17KCk9PnNob3d3aW5kb3cobGlrZSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPjxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gY29sb3I9e1wiYmxhY2tcIn0gb25DbGljaz17KCk9PkNvdW50cGx1cyhcIlJlYWRsYXRlclwiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6NjBweDtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG5sZWZ0OjA7XHJcbmhlaWdodDoxMDB2aDtcclxuei1pbmRleDoxNTA7XHJcbmJhY2tncm91bmQtY29sb3I6I2U5ZWNlZjtcclxuYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG50cmFuc2l0aW9uOmFsbCAwLjJzO1xyXG53aWR0aDokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiMjAwcHhcIiA6IFwiNjBweFwifVxyXG5gXHJcbmNvbnN0IElubmVyRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzo1cHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTmF2aWdhdGlvbkRpdj1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG95b3I6eWVsbG93O1xyXG5tYXJnaW4tdG9wOjVweDtcclxud2lkdGg6OTYlO1xyXG5gXHJcbmNvbnN0IExpPXN0eWxlZC5saWBcclxubGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbm1hcmdpbi10b3A6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nOjdweDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNENEQ0RDQ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIFxyXG59XHJcbmBcclxuXHJcbi8vY29uc3QgSWNvbj1zdHlsZWQuaWBcclxuLy9jb2xvcjojQzcwMDM5O1xyXG4vL2BcclxuY29uc3QgQ2xvc2VvcGVuPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IExlZnR0b29sYmFyPSh7bWFrZWFjdGl2ZSxteWFjdGl2ZX0pPT57XHJcblxyXG4gICAgY29uc3Qge3VzZXJkYXRhLGxvZ2dlZH09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCBmaXJzdGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJLYXlkZWRpbGVubGVyXCIscGF0aDpgc2F2ZWRgfSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiQmXEn2VuaWxlbmxlclwiLHBhdGg6YGxpa2VkYH1dKVxyXG4gICAgY29uc3Qgc2Vjb25kbGlzdD11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWVkaXRcIixkZXNjOlwiR8O2bmRlcmlsZXJpbVwiLHBhdGg6XCIvZ8O2bmRlcmlsZXJcIn0se2ljb246XCJmYXMgZmEtdXNlcnNcIixkZXNjOlwiVGFydMSxxZ9tYWxhcsSxbVwiLHBhdGg6XCIvdGFydMSxxZ9tYWxhclwifV0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJkYXRhLlVzZXJJZClcclxuXHJcbiAgICB9LCBbdXNlcmRhdGFdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBsb2dnZWQgP1xyXG5cclxuICAgICAgICAgICAgPEV4dGVyaW9yRGl2IGFjdGl2ZT17bXlhY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgPElubmVyRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgPENsb3Nlb3Blbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L0Nsb3Nlb3Blbj4qL31cclxuICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57bWFrZWFjdGl2ZSghbXlhY3RpdmUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjM1cHhcIixjb2xvcjpcImJsYWNrXCIscm90YXRlOm15YWN0aXZlID8gdHJ1ZSA6IHVuZGVmaW5lZH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXJkYXRhLlVzZXJJZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17XCIvY2FyLmpwZ1wifSAgd2lkdGg9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0gaGVpZ2h0PXtteWFjdGl2ZSA/IFwiODBweFwiIDogXCI1MHB4XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXNlcmRhdGEuVXNlcklkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIixjb2xvcjpcIiMyOTMyNDFcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PjxzcGFuPntteWFjdGl2ZSA/IHVzZXJkYXRhLlVzZXJuYW1lIDogXCIuLi5cIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3RsaXN0LmN1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvW3VzZXLEsWRdLyR7aXRlbS5wYXRofWB9IGFzPXtgLyR7dXNlcmRhdGEuVXNlcklkfS8ke2l0ZW0ucGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsaGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixsaW5laGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixiYWNrY29sb3I6XCIjZmYwYTU0XCIsY29sb3I6XCJ3aGl0ZVwifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Om15YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCIsZm9udFNpemU6XCIxNXB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpteWFjdGl2ZSA/IFwiZmxleC1zdGFydFwiIDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bc3R1ZmZdXCIgYXM9e2Ake2l0ZW0ucGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsaGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixsaW5laGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixiYWNrY29sb3I6XCIjMTY4YWFkXCIsY29sb3I6XCJ3aGl0ZVwifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Om15YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCIsZm9udFNpemU6XCIxNXB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kbGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsbGluZWhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsYmFja2NvbG9yOlwiI0YwRjBGMFwiLGNvbG9yOlwiYmxhY2tcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Om15YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCIsZm9udFNpemU6XCIxNXB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3JEaXY+XHJcblxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdHRvb2xiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7VXBkYXRlTm90aWZpY2F0aW9uY291bnR9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSwgSG9tZSxBc3NpZ25tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjEwMDtcclxuYFxyXG5jb25zdCBJbm5lck5hdmJhcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbm1hcmdpbjphdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWF4LXdpZHRoOjExMDBweDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmBcclxuXHJcblxyXG5jb25zdCBJY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NsaWNrZWR9KT0+Y2xpY2tlZCA/IFwiXCIgOiBcIlwifTtcclxucGFkZGluZzoycHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtmbGV4Mn0pPT5mbGV4Mn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbmJvcmRlcjpub25lO1xyXG53aWR0aDoxMDAlO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNFMEUwRTA7XHJcbmNvbG9yOmJsYWNrO1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnBhZGRpbmc6NnB4O1xyXG5yaWdodDoxNXB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtcclxuYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHdoaXRlO1xyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDokeyh7Zm9ybm90aWZ5fSk9PmZvcm5vdGlmeSA/IFwiNDAwcHhcIiA6IFwiXCJ9O1xyXG5vdmVyZmxvdy15OnNjcm9sbDtcclxucGFkZGluZzo4cHg7XHJcbnJpZ2h0OjBweDtcclxud2lkdGg6MzUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcblxyXG5gXHJcbmNvbnN0IElubmVyb3B0aW9uPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG4vL1RvRG8gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe0RhdGEsQ291bnQsUmVsb2FkZnVuYyxVcGRhdGV9KXtcclxuIFxyXG5cclxuICAgIGNvbnN0IHtsb2dnZWQsc3Bpbm5lcix1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2llKCk7XHJcbiAgICBjb25zdCAgTXlyZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtvcmRlcm51bWJlcixzZXRvcmRlcm51bWJlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW0ljb251bWJlcixzZXTEsWNvbm51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtJY29ub2JqZWN0LHNldEljb25vYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIDE6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXBsdXNcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzZweCcsXHJcbiAgICAgICAgICBzaG9ydDpcInBsdXNcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAyOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1iZWxsXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMzcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJiZWxsXCIsXHJcbiAgICAgICAgICBPbmNlcmVxdWVzdGVkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtc29ydC1kb3duXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzMwcHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJkb3duXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBTY3JvbGx0b0JvdHRvbT0oKT0+e1xyXG5cclxuICAgICAgICBpZihNeXJlZi5jdXJyZW50LnNjcm9sbFRvcCArIE15cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ID49IE15cmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICAgICAgUmVsb2FkZnVuYyhvcmRlcm51bWJlcitEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uc2VsZWN0PShpY29ubnVtYmVyKT0+e1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBteW9iamVjdD17Li4uSWNvbm9iamVjdH07XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG15b2JqZWN0KS5mb3JFYWNoKGtleSA9PntcclxuICAgICAgICAgICAgaWYoaWNvbm51bWJlciAhPT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIG15b2JqZWN0W2tleV0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYobXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmYpe1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9ZmFsc2U7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPXRydWU7XHJcbiAgICAgICAgICAgIHNldMSxY29ubnVtYmVyKGljb25udW1iZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXRJY29ub2JqZWN0KG15b2JqZWN0KTsgXHJcbiAgICAgICAgc2V0dmlzaWJsZSh0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBcclxuICAgIC8vVG9EbyByZXdyaXRlIHRoaXMgY29kZVxyXG4gIFxyXG5cclxuICAgIGNvbnN0IEljb25jbGljaz0oaXRlbSxzaG9ydG5hbWUpPT57XHJcblxyXG4gICAgICAgIGlmKHNob3J0bmFtZSA9PSBcImJlbGxcIilcclxuICAgICAgICBVcGRhdGUoKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyZXh0PlxyXG4gICAgICAgICAgICA8SW5uZXJOYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgZmxleD17XCJibG9ja1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCJodHRwczovL2V2cmltYWdhY2kub3JnL3B1YmxpYy9pbWFnZXMvbG9nby92My5zdmc/dj0xXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsYm9yZGVyUmlnaHQ6XCIxcHggc29saWQgYmxhY2tcIn19PjxzcGFuPkV2cmltIEHEn2FjxLE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PjxIb21lIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjYzkxODRhXCJ9fT48L0hvbWU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGZsZXgyPXtcIm5vbmVcIn0gZmxleD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkFyYVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB7ICAhc3Bpbm5lciA/IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIWxvZ2dlZCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Zm9udFNpemU6XCIyNXB4XCJ9fT48L0FjY291bnRDaXJjbGU+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgR2lyacWfIFlhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiICBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QXNzaWdubWVudCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjI1cHhcIn19PjwvQXNzaWdubWVudD59IGNvbG9yPVwic2Vjb25kYXJ5XCI+S2F5xLF0IE9sPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyICBmbGV4Mj17XCJmbGV4XCJ9IHJlZj17cmVmfSBmbGV4PXtcImZsZXhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEljb25vYmplY3QpLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBjbGlja2VkPXtJY29ub2JqZWN0W2l0ZW1dLm9ub2ZmfSBvbkNsaWNrPXsoKT0+SWNvbmNsaWNrKGl0ZW0sSWNvbm9iamVjdFtpdGVtXS5zaG9ydCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIixiYWNrZ3JvdW5kQ29sb3I6XCIjRjBGMEYwXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6SWNvbm9iamVjdFtpdGVtXS5saW5laGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtJY29ub2JqZWN0W2l0ZW1dLmNsYXNzTmFtZX0gc3R5bGU9e3tjb2xvcjpDb3VudCA+IDAgJiYgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiA/IFwiI2Q5MDQyOVwiIDogXCJcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgJiYgQ291bnQgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGZvbnRTaXplOlwiMTJweFwiLHRvcDpcIi01cHhcIixyaWdodDpcIi01cHhcIix3aWR0aDpcIjIwcHhcIixkaXNwbGF5OlwiYmxvY2tcIixoZWlnaHQ6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpcIjIwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwifX0+e0NvdW50fTwvc3Bhbj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcm5hbWVdXCIgYXM9e2AvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9XCIzNXB4XCIgaGVpZ2h0PVwiMzVweFwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbnVtYmVyICE9PSAwICYmIHZpc2libGUgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IG9uU2Nyb2xsPXtTY3JvbGx0b0JvdHRvbX0gcmVmPXtNeXJlZn0gZm9ybm90aWZ5PXtJY29ub2JqZWN0W1wiMlwiXS5vbm9mZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2dG9vbHMgTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vVUkvSWNvblwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7Y2FsY3VsYXRlZGF0ZX0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzZnVuY1wiXHJcblxyXG5jb25zdCBPcHRpb24xZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7Y2hlY2t9KT0+IGNoZWNrID09IGZhbHNlID8gXCIjRUJFQkVCXCIgOiBcIlwifTtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9udG9vbHMoe29wdG51bWJlcixvcHRuYW1lLE5hdmRhdGF9KXtcclxuICAgIGNvbnN0IFt0b2dnbGUsc2V0dG9nbGVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCBNeW9wdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgdGl0bGUgPSBudWxsO1xyXG4gICAgaWYob3B0bnVtYmVyID09IDEpe1xyXG4gICAgICB0aXRsZSA9IFwiT2x1xZ90dXJcIlxyXG4gICAgICBNeW9wdGlvbiA9IDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hw7ZuZGVyaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5TYXlmYW5kYSBiaXIgZ8O2bmRlcmkgcGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnMgXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T2RhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJpciB0YXJ0xLHFn21hIG9kYXPEsSBvbHXFn3R1cjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbiAgICBpZihvcHRudW1iZXIgPT0gMil7XHJcblxyXG4gICAgICAgIHRpdGxlPVwiQmlsZGlyaW1sZXJcIlxyXG5cclxuICAgICAgICBjb25zdCBBdHRyaXVidGVhcnJheT1bXHJcbiAgICAgICAgICAgIHtuYW1lOlwiTGlrZVwiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJTZW5pbiBHw7ZuZGVyaW5pIEJlxJ9lbmRpLlwiLEljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsY29sb3I6XCIjREQxRjFGXCIsbGg6XCIzMHB4XCIsaHJlZjpcIi9jb250ZW50XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIlJlc2hvd1wiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJTZW5pbiBHw7ZuZGVyaW5pIMSwxZ9hcmV0bGVkaS5cIixJY29uOlwiZmFzIGZhLXRodW1idGFja1wiLGNvbG9yOlwiI2FkYjViZFwiLGxoOlwiMzVweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJGb2xsb3dcIixpZG5hbWU6XCJVc2VySWRcIixkZXNjOlwiU2VuaSBUYWtpcCBFdHRpXCIsSWNvbjpcImZhcyBmYS11c2VyLXBsdXMgZmEtc21cIixjb2xvcjpcIiNlZTYwNTVcIixsaDpcIjMwcHhcIixocmVmOlwiL3Byb2ZpbGVcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiQ29tbWVudFwiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJHw7ZuZGVyaW5lIFlvcnVtIFlhcHTEsS5cIixJY29uOlwiZmFzIGZhLWNvbW1lbnQtZG90c1wiLGNvbG9yOlwiI2FkYjViZFwiLGxoOlwiMzBweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJQb3N0XCIsZGVzYzpcIlllbmkgQmlyIEfDtm5kZXJpIFBheWxhxZ90xLFcIixJY29uOlwiZmFzIGZhLWVkaXRcIixjb2xvcjpcIiNmY2EzMTFcIixsaDpcIjMwcHhcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiRGViYXRlXCIsZGVzYzpcIlllbmkgQmlyIGdydXAgT2x1xZ90dXJkdS5cIixJY29uOlwiXCJ9XTtcclxuXHJcbiAgICAgICAgaWYoTmF2ZGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE15b3B0aW9uID0gPGg0PkhlbsO8eiBiaXIgYmlsZGlyaW1pbml6IHlvay48L2g0PlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihOYXZkYXRhLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgTXlvcHRpb24gPSBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAge05hdmRhdGEubGVuZ3RoID4gMCAmJiBOYXZkYXRhLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE8gaWNvbiBkZXRlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBteWl0ZW1vYmo9e307XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEF0dHJpdWJ0ZWFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5hdHRyaWJ1dGUgPT0gQXR0cml1YnRlYXJyYXlbaV0ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteWl0ZW1vYmogPSBBdHRyaXVidGVhcnJheVtpXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uQ29udGVudElkID09IG51bGwgJiYgaXRlbS5Db21tZW50SWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxPcHRpb24xZGl2IGNoZWNrPXtpdGVtLkZhY2VjaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake215aXRlbW9iai5ocmVmfS8ke2l0ZW1bbXlpdGVtb2JqLmlkbmFtZV19YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17bXlpdGVtb2JqLkljb259IEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiNDBweFwiLHJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIixiYWNrY29sb3I6bXlpdGVtb2JqLmNvbG9yLHdpZHRoOlwiMzBweFwiLGhlaWdodDpcIjMwcHhcIixsaW5laGVpZ2h0Om15aXRlbW9iai5saH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJY29uIGNsYXNzTmFtZT17XCJmYXMgZmEtc3RhciBmYS1zbVwifSBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIi04cHhcIixyaWdodDpcIi0ycHhcIixjb2xvcjpcIiM3MmRkZjdcIix3aWR0aDpcIjE3cHhcIixoZWlnaHQ6XCIxN3B4XCIsbGluZWhlaWdodDpcIjE3cHhcIn19PjwvSWNvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsZm9udFNpemU6XCIxNXB4XCJ9fT57aXRlbS5Vc2VyLmZpcnN0bmFtZSArIFwiIFwiICsgaXRlbS5Vc2VyLmxhc3RuYW1lICsgXCIgLCAoT3NtYW5sxLEgSGFsa8SxbsSxbsSxIEXEn2l0aW0gU2V2aXllc2kuLi4pXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIixjb2xvcjpcIiM3NTc1NzVcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+e215aXRlbW9iai5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCIsY29sb3I6XCIjMTc4MGExXCIsZm9udFdlaWdodDpcImJvbGRcIn19PntjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS5leHByZXNzfSDDtm5jZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbjFkaXY+KVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pICAgXHJcblxyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpZihvcHRudW1iZXIgPT0gMyl7XHJcbiAgICAgIHRpdGxlPVwiUHJvZmlsXCJcclxuICAgICAgTXlvcHRpb249KCA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzJweFwiLGhlaWdodDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWxpbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY29nIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixoZWlnaHQ6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWwgQXlhcmxhcsSxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbW9vbiBcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjMycHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTVweFwifX0+S2FyYW5sxLFrIE1vZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggIGNoZWNrZWRJY29uPXtmYWxzZX0gdW5jaGVja2VkSWNvbj17ZmFsc2V9IG9uQ2hhbmdlPXsoKT0+c2V0dG9nbGUoIXRvZ2dsZSl9IGNoZWNrZWQ9e3RvZ2dsZX0+PC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdCBcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjMycHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTVweFwifX0+w4fEsWvEscWfIFlhcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nOlwiNXB4XCIsZm9udFNpemU6XCIyMHB4XCJ9fT57dGl0bGV9PC9wPlxyXG4gICAgICAgICAge015b3B0aW9ufVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG4gICBcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7UGVyc29uQWRkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuYFxyXG5jb25zdCBJbm5lcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTmFtZT1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmBcclxuXHJcbmNvbnN0IEZvbGxvd2luZz1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tbGVmdDphdXRvO1xyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyY2FyZCh7Zmlyc3RuYW1lLHN1cm5hbWUsaW1hZ2V1cmwsb3B0aW9uZm9yYnV0dG9uLGNoaWxkcmVuLHVzZXJudW1iZXIsdXNlcmlkLGZvbGxvd2VybGlzdCxSZWxhdGlvbmZ1bmN9KSB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZm9sbG93LHNldGNoZWNrZm9sbG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcbiAgICB2YXIgT3B0aW9uPW51bGw7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGZvbGxvd2VybGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBlbGVtZW50LmlkKXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGNoZWNrZm9sbG93KHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxPSgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0Y2hlY2tmb2xsb3coIWNoZWNrZm9sbG93KTtcclxuICAgICAgICBSZWxhdGlvbmZ1bmMoY2hlY2tmb2xsb3csdXNlcmRhdGEuVXNlcklkLHVzZXJpZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yPlxyXG4gICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9sZWQuanBnXCJ9IHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICA8TmFtZT48c3BhbiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PntmaXJzdG5hbWUrXCIgXCIrc3VybmFtZX08L3NwYW4+PC9OYW1lPlxyXG4gICAgICAgICAgICAgICA8Rm9sbG93aW5nPntjaGlsZHJlbn08L0ZvbGxvd2luZz5cclxuICAgICAgICAgICAgICAgPEJ1dHRvbiAgc3RhcnRJY29uPXs8UGVyc29uQWRkPjwvUGVyc29uQWRkPn0gc3R5bGU9e3t3aWR0aDpcIjE3MHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixmb250V2VpZ2h0OlwiNjAwXCJ9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e0ZvbGxvd2luZ3JlcX0+e2NoZWNrZm9sbG93ID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGUsa2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7cHJvZmlsZX0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gKVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmxhY2s9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbnRyYW5zaXRpb246YmFja2dyb3VuZCAwLjRzO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjE1MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMZWZ0dG9vbGJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ291bnRyZXEsTm90aWZpY2F0aW9ucmVxLFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50fSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcblxyXG5cclxuY29uc3QgQmlnZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjY1cHg7XHJcbmBcclxuXHJcbmNvbnN0IHNvY2tldD1pbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtuYXZkYXRhLHNldG5hdmRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudG9mZGF0YSxzZXRjb3VudGRhdGFdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhc3RyZWNvcmQsc2V0bGFzdHJlY29yZF09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZGFjdGl2ZSxzZXRsYXN0cmVjb3JkYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRhY3RpdmUoZmFsc2UpOyAgXHJcbiAgICB9LCBbdXNlcm91dGVyLnF1ZXJ5XSlcclxuICAgIFxyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBcclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRjb3VudGRhdGE6c2V0Y291bnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfSAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyPSgpPT57XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmRhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmQocHJldj0+cHJldisxKTtcclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uQ291bnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTm90aWZpY2F0aW9uXCIsbGlzdGVuZXIpIFxyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgICBpZih1c2VyZGF0YS5Vc2VySWQgJiYgbGFzdHJlY29yZGFjdGl2ZSl7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y291bnRvZmRhdGEsXHJcbiAgICAgICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsYXN0cm93OnRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFtsYXN0cmVjb3JkXSlcclxuXHJcbiAgICBjb25zdCBSZWxvYWRuYXY9KG9yZGVyKT0+e1xyXG5cclxuICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlY291bnQ9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0cmVjb3JkYWN0aXZlKVxyXG4gICAgICAgIHNldGNvdW50ZGF0YSgwKTtcclxuICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25jb3VudCh7VXNlcklkOnVzZXJkYXRhLlVzZXJJZH0pO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBVcGRhdGU9e1VwZGF0ZWNvdW50fSBSZWxvYWRmdW5jPXtSZWxvYWRuYXZ9IENvdW50PXtjb3VudG9mZGF0YX0gRGF0YT17bmF2ZGF0YX0+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICB7Lyp0aGlzIHBhcnQgd2lsbCBiZSBjaGFuZ2VkKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtGb3JtQ29udHJvbCxJbnB1dExhYmVsLFNlbGVjdCxNZW51SXRlbSxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXHJcbmltcG9ydCBTaG93Zm9sbG93ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9TaG93Zm9sbGVyXCI7XHJcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVhZGVyYm9hcmQnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7IEFycm93QmFja0lvcywgQXJyb3dGb3J3YXJkSW9zLCBGb3JtYXRRdW90ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpU2VsZWN0LXJvb3QnOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmxleGRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5tYXgtd2lkdGg6MTI1MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IFRpdGxlRGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjkwJTtcclxucGFkZGluZzoxMHB4O1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6cmVkO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjUwcHg7XHJcbm1heC13aWR0aDo1MDBweDtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbmBcclxuXHJcbmNvbnN0IElubmVyc2hvcnREaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5yaWdodDokeyh7c2xpZGV2YWx1ZX0pPT5zbGlkZXZhbHVlfTtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0aW9uYm94ZXM9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tbGVmdDoxNXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czo1MHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2VkNGRhXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmxlZnQ6JHsoe2xlZnR2YWx1ZX0pPT5sZWZ0dmFsdWV9O1xyXG50b3A6NTAlO1xyXG5mb250LXNpemU6MjBweDtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiR7KHtyaWdodHZhbHVlfSk9PnJpZ2h0dmFsdWV9XHJcbmBcclxuLy9mbGV4LXNocmluayBrdXR1bGFyxLFuIGJlbGlybGVuZW4gYm95dXR0YW4gYcWfYWfEsSBpbm1lbWVzaW5pIHNhZ2zEsXlvclxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtzbGlkZXZhbHVlLHNldHNsaWRldmFsdWVdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0IFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbmxpc3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEZlbHNlZmU6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFV6YXk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQml5b2xvamk6e1xyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZGtleSxzZXRzZWxlY3RlZGtleV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICAvL2ZvbGxvd2VybGlzdFxyXG4gICAgY29uc3QgW2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgICAgICBpZighc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZW50ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6c2VsZWN0ZWRrZXksXHJcbiAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtvcmRlcl0pXHJcblxyXG4gICAgY29uc3QgUmVxdWVzdGFnYWluPShrZXluYW1lKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0b3JkZXIoMTApO1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OmtleW5hbWUsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgc2V0c3RvcHJlcTpzZXRzdG9wcmVxLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgY29uc3QgU2V0c2xpZGV2YWx1ZT0odmFsdWUpPT57XHJcblxyXG4gICAgICAgaWYodmFsdWUgPT0gXCJCYWNrXCIgJiYgc2xpZGV2YWx1ZSAhPT0gMCl7XHJcbiAgICAgICAgIHNldHNsaWRldmFsdWUoc2xpZGV2YWx1ZS0yMjApXHJcbiAgICAgICB9IFxyXG4gICAgICAgZWxzZSBpZih2YWx1ZSA9PSBcImZvcndhcmRcIiAmJiBzbGlkZXZhbHVlIDwgNjAwKXtcclxuICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUrMjIwKVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBpZihib3R0b20pXHJcbiAgICAgICAgc2V0b3JkZXIobXlkYXRhLmxlbmd0aCsxMCk7XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbix1c2VyaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb24sXHJcbiAgICAgICAgICAgIFVzZXJJZG9mY29udGVudDp1c2VyaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGVyID0gKGtleW5hbWUpID0+e1xyXG5cclxuICAgICAgIGNvbnN0IE11dGF0ZWQgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcblxyXG4gICAgICAgZm9yIChjb25zdCBrZXkgaW4gTXV0YXRlZCkge1xyXG4gICAgICAgICAgIE11dGF0ZWRba2V5XS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgIH1cclxuICAgICAgIE11dGF0ZWRba2V5bmFtZV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgUmVxdWVzdGFnYWluKGtleW5hbWUpO1xyXG4gICAgICAgc2V0c2VsZWN0aW9ubGlzdChNdXRhdGVkKTtcclxuICAgICAgIHNldHNlbGVjdGVka2V5KGtleW5hbWUpXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpgJHtsaXN0Lmxlbmd0aCA+IDAgPyBcIjEwMHZoXCIgOiBcIjEwMCVcIn1gLG92ZXJmbG93OlwiaGlkZGVuXCJ9fT4gXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjEwMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48Rm9ybWF0UXVvdGUgc3R5bGU9e3t0cmFuc2Zvcm06XCJyb3RhdGVZKDE4MGRlZylcIn19PjwvRm9ybWF0UXVvdGU+IEJpbCBraSBuZXpha2V0IGJhxZ9rYXPEsW7EsSByYWhhdHPEsXogZXRtZW1layBkZcSfaWwsIGFzxLFsIGJhxZ9rYXPEsSBpw6dpbiByYWhhdHPEsXpsxLFrIGR1eW1ha3TEsXIuPEZvcm1hdFF1b3RlPjwvRm9ybWF0UXVvdGU+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICB7IGxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U2hvd2ZvbGxvd2VyIHNldGxpc3Q9eygpPT5zZXRsaXN0KFtdKX0gbGlzdD17bGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwiLHBhZGRpbmdUb3A6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmhvbGRlciBvbkNsaWNrPXsoKT0+U2V0c2xpZGV2YWx1ZShcIkJhY2tcIil9IGxlZnR2YWx1ZT1cIjIwcHhcIiByaWdodHZhbHVlPXtcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3Mgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCIsZm9udFNpemU6XCIyMHB4XCJ9fT48L0Fycm93QmFja0lvcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJmb3J3YXJkXCIpfSBsZWZ0dmFsdWU9e1wiXCJ9IHJpZ2h0dmFsdWU9XCIxNXB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIixmb250U2l6ZTpcIjIwcHhcIn19PjwvQXJyb3dGb3J3YXJkSW9zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyc2hvcnREaXYgc2xpZGV2YWx1ZT17c2xpZGV2YWx1ZStcInB4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25saXN0KS5tYXAoKGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25ib3hlcyBzZWxlY3RlZD17c2VsZWN0aW9ubGlzdFtpdGVtXS5zZWxlY3RlZH0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRlcihpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYm94ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyc2hvcnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixtYXJnaW5Cb3R0b206XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXIgPyA8U3Bpbm5lcj48L1NwaW5uZXI+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5sZW5ndGggJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oPXtjcmVhdGVyZWxhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0uUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0uUmVhZGxhdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwubGFzdG5hbWUgOiBcIm5vdHlldFwifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuaWQ6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleGRpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qPFNlY3Rpb25wYXJ0PlxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIixtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5Hw7ZuZGVyaSBUw7xyw7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3VzZXN0eWxlcy5yb290fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUYXJpaFwiPlRhcmloPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJpeW9sb2ppXCI+VGFyaWg8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5TxLFyYWxhbWEgw5Zsw6fDvHTDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJMaWtlXCI+QmXEn2VuaSBTYXnEsXPEsTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRhdGVcIj5Zw7xrbGVubWUgVGFyaWhpPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJldHdlZXRcIj5SZXR3ZWV0IFNhecSxc8SxPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgPEJ1dHRvbiBlbmRJY29uPXs8U2VhcmhJY29uPjwvU2VhcmhJY29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+QXJhPC9CdXR0b24+XHJcbjwvZGl2PlxyXG48L1NlY3Rpb25wYXJ0PlxyXG4qLyIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTsgICBcclxuICAgICAgICBcclxuICAgICAgICBDb250ZXh0ZGF0YSh7XHJcbiAgICAgICAgICAgIFRva2VuOnRva2VuLFxyXG4gICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGNyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgIGxvZ2dlZDpsb2dnZWQsXHJcbiAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICB1c2VyZGF0YTp1c2VyZGF0YSxcclxuICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICBzcGlubmVyOnNwaW5uZXIsXHJcbiAgICAgICAgICAgc2V0c3Bpbm5lcixzZXRzcGlubmVyXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xpY2tvdXRzaWRlKCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlZj11c2VSZWYoKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLHNldHZpc2libGVdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVjbGljaz0oZXZlbnQpPT57ICBcclxuXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQgJiYgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xyXG4gICAgICAgICAgICBzZXR2aXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGhhbmRsZWNsaWNrKTtcclxuXHJcbiAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGhhbmRsZWNsaWNrKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpc2libGUsXHJcbiAgICAgIHNldHZpc2libGUsXHJcbiAgICAgIHJlZlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2Nyb2xsKCl7XHJcblxyXG4gICAgY29uc3QgW2JvdHRvbSxzZXRib3R0b21dPXVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgICAgLy9cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKGUpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSkgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIHsgIFxyXG4gICAgICAgICAgICAgICAgc2V0Ym90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgcmV0dXJuICgpPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsYmVoYXZpb3I6XCJhdXRvXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJvdHRvbTpib3R0b21cclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VSZWR1Y2VyLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbnRhaW5lcnMvcGFnZXMvSG9tZVwiO1xyXG5pbXBvcnQgTWFpbmxheW91dCBmcm9tIFwiLi4vY29udGFpbmVycy9MYXlvdXQvbWFpbmxheW91dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IEhvbWU9KHtjb250ZW50fSk9PntcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUlCTStQbGV4K1NlcmlmOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPE1haW4gbXlkYXRhPXtjb250ZW50fT48L01haW4+XHJcbiAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Ib21lLmxheW91dD1NYWlubGF5b3V0O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7fSl7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID1hd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb250ZW50L2dldGhvbWUvMTAvRmVsc2VmZWApXHJcblxyXG4gICAgICAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOlwiLzUwMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHByb3BzOntjb250ZW50OmRhdGEuZGF0YX1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjpcIi81MDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlZGF0ZT0ocHJldmlvdXNkYXRlKT0+e1xyXG5cclxuICAgIGNvbnN0IFByZXZkYXRlPW5ldyBEYXRlKHByZXZpb3VzZGF0ZSk7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlPU1hdGguYWJzKERhdGUubm93KCktUHJldmRhdGUpO1xyXG4gICAgY29uc3Qgc2Vjb25kPU1hdGguY2VpbChkaWZmZXJlbmNlLzEwMDApO1xyXG5cclxuICAgIGlmKHNlY29uZDw2MCl7XHJcblxyXG4gICAgICAgIHJldHVybiB7dGltZTpzZWNvbmQsZXhwcmVzczpcIlNhbml5ZVwifVxyXG5cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+NjAgJiYgc2Vjb25kPDM2MDApe1xyXG5cclxuICAgICAgIHJldHVybiB7dGltZTpNYXRoLmNlaWwoc2Vjb25kLzYwKSxleHByZXNzOlwiRGFraWthXCJ9XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYoc2Vjb25kPjM2MDAgJiYgc2Vjb25kPDg2NDAwKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvKDYwKjYwKSksZXhwcmVzczpcIlNhYXRcIn1cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+ODY0MDAgJiYgc2Vjb25kPDI2Mjk3NDM4Myl7XHJcblxyXG4gICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvKDYwKjYwKjI0KSksZXhwcmVzczpcIkfDvG5cIn1cclxuXHJcbiAgICAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9