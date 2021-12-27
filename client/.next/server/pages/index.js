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
/*! exports provided: loginreq, logout, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq, UpdateNotificationactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentanswerreq", function() { return Commentanswerreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationactive", function() { return UpdateNotificationactive; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  }

  return true;
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
    }, {
      withCredentials: true
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
const logout = async ({
  setspinner,
  setuserdata,
  setlogged
}) => {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/logout", {
      withCredentials: true
    });
    setlogged(false);
    setuserdata({});
    setspinner(true);
    console.log(logged);
  } catch (error) {///
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
  router,
  typeofsubmit
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/content/produce", _objectSpread(_objectSpread({}, contentdata), {}, {
      processtype: typeofsubmit
    }));

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
  paignation,
  selectionlist,
  setselection
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}/${category}`, {
      withCredentials: true
    });
    console.log(data);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      if (data.data.length == 0) {
        const selections = _objectSpread({}, selectionlist);

        selections[category].stoprequesting = true;
        setselection(selectionlist);
        console.log("stopped request");
      }

      var Current = [...currentdata];
      var Mydata = [...data.data];

      if (paignation) {
        setcontentdata(Current.concat(Mydata)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
      } else {
        setTimeout(() => {
          setcontentdata(Mydata);
        }, 1000);
      }

      setTimeout(() => {
        setspinner(false);
      }, 1000);
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
      console.log(Mydata);

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
  setlogged,
  setallowaction
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/getuserdata`, {
      withCredentials: true
    });
    console.log(data);

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
        Userrole: data.userdata.Role,
        Userimage: data.userdata.imageurl
      };
      setcontextdata(mydata);
      setspinner(true);
      setlogged(true);
      setallowaction(true);
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
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
      if (!data.data.length) {
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
  setspinner,
  setdata,
  category,
  UserId,
  ownerpost,
  order
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/getuserprofilecontent/${UserId}/${ownerpost}/${category}/${order}`);
    console.log(data.data);

    if (Errorhandler({
      data
    })) {
      setdata([...data.data]);
      setspinner(false);
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
  Prevent,
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
    setTimeout(() => {
      Prevent.current = true;
    }, 2000);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      return;
    } else return;
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
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`notification/getrows/${UserId}/${order}/${lastrow}`);
    const Mycurrentdata = [...navdata];
    const Newdata = data.mydata;

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
  setnothingfound
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/getusername/${inputvalue}`);
    console.log(data.data);

    if (data.data.length == 0) {
      setactive("Nothing");
    } else {
      setactive("");
      setusers(data.data);
    }
  } catch (error) {
    console.log("relation error"); //seterrmsg(true);
  }
};
const DeletePost = async ({
  PostId,
  seterrmsg,
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("user/deletepost", {
      PostId: PostId
    });

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      console.log(data.success);
    } else {
      return;
    }
  } catch (error) {
    console.log("error");
  }
};
const Commentanswerreq = async ({
  UppercommentId,
  Answer,
  UserId,
  seterrmsg,
  setwindow,
  ContentId
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("comment/produceanswer", {
      CommentId: UppercommentId,
      ContentId: ContentId,
      Message: Answer,
      UserId: UserId
    });

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      console.log(data.success);
    } else {
      return;
    }
  } catch (error) {
    console.log("error");
  }
};
const UpdateNotificationactive = async ({
  FollowedId,
  Prevent,
  FollowerId,
  currentactive,
  seterrmsg,
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`user/updateusernot/${FollowerId}/${FollowedId}/${currentactive}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      Prevent.current = true;
      console.log(data.state);
    } else {
      return;
    }
  } catch (error) {
    console.log("error");
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
  middle,
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
  rotate,
  zindex
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
z-index:${zindex};
background-color:${backcolor};
transform:rotate(${rotate ? "180deg" : "0deg"});
transform:translate(${middle ? "-50%" : "0"},${middle ? "-50%" : "0"});
&:hover{
 background-color:${hoverback};
 color:${hovercolor};
}
`);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Icon__Subtext",
  componentId: "sc-1bqjy35-1"
})([""]);
function Icon({
  className,
  Iconconfig,
  activefunc
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconspan, _objectSpread(_objectSpread({
      onClick: activefunc
    }, Iconconfig), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: className
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
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
  setlist,
  attribute
}) {
  var Title = "";
  var Icon = "";
  console.log(list);

  const Followingrelation = (checkfollow, UserId, followedid) => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createuserrelation"])({
      UserId: UserId,
      FollowedId: followedid,
      checkiffollow: checkfollow
    });
  };

  switch (attribute) {
    case "Like":
      Title = "Beğeniler";
      Icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["ThumbUp"], {
        style: {
          color: "#C72121"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 18
      }, this);
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
      lineNumber: 56,
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
          lineNumber: 59,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: Title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 61,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
          lineNumber: 65,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilsfunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilsfunc */ "./utilsfunc.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{font-size:16px}25%{font-size:18px}50%{font-size:21px}65%{font-size:17}70%{font-size:10px}100%{font-size:16px}"]);
const Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;height:", ";margin-bottom:30px;width:100%;background-color:", ";border-radius:7px;box-shadow:rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;"], ({
  draft
}) => draft ? "300px" : "", ({
  iscomment
}) => !iscomment ? "#faf9f9" : "#faf9f9"); //This is for draft page

const Softcover = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Softcover",
  componentId: "r68yrd-1"
})(["position:absolute;width:100%;height:100%;z-index:300;background-color:black;border-radius:7px;opacity:0.6;"]);
const Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-2"
})(["padding-right:5px;padding-left:5px;"]);
const Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-3"
})(["flex:1;"]);
const Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-4"
})(["flex:2;display:flex;flex-direction:column;"]);
const Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-5"
})(["padding:", ";padding-left:15px;padding-right:15px;flex:1;"], ({
  iscomment
}) => iscomment ? "15px" : "0px");
const SecondPart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__SecondPart",
  componentId: "r68yrd-6"
})(["display:", ";@media (max-width:540px){display:block;}"], ({
  foruser
}) => foruser ? "block" : "flex");
const Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-7"
})(["display:", ";padding-left:15px;border-radius:5px;"], ({
  foruser
}) => foruser ? "none" : "flex");
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-8"
})(["width:100%;height:150px;object-fit:cover;@media (max-width:540px){height:200px;}"]);
const Spanfor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Contentcard__Spanfor",
  componentId: "r68yrd-9"
})(["margin-left:5px;&:hover{text-decoration-line:underline;cursor:pointer;}"]);
const İconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-10"
})(["margin-right:10px;display:flex;align-items:center;&:hover ", "{color:", ";}"], Spanfor, ({
  howercolor
}) => howercolor);
const Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-11"
})(["width:100%;padding-top:10px;padding-bottom:10px;transition:all 0.3s;"]);
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-12"
})(["display:flex;justify-content:center;align-items:center;font-size:16px;transition-duration:0.5s;width:30px;height:30px;padding:5px;border-radius:50%;cursor:pointer;animation-duration:0.3s;animation-timing-function:ease-in-out;&:hover{background:rgba(", ");};color:", ";animation-name:", ";"], ({
  howercolor
}) => howercolor, ({
  ismarked,
  color
}) => ismarked ? color : "grey", ({
  animation
}) => animation ? Likeanimaton : "");
const Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Optionwindow",
  componentId: "r68yrd-13"
})(["display:block;width:350px;padding:5px;position:absolute;top:35px;right:10px;border-radius:7px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;background-color:white;z-index:480;"]);
const Optionholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Optionholder",
  componentId: "r68yrd-14"
})(["display:flex;position:relative;align-items:center;padding:10px;border-radius:6px;&:hover{background-color:#EBEBEB;cursor:pointer;}"]);
const Draftholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Contentcard__Draftholder",
  componentId: "r68yrd-15"
})(["display:flex;flex-direction:column;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:300;"]); //comment-answer section

const Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Inputholder",
  componentId: "r68yrd-16"
})(["display:flex;align-items:center;padding-left:15px;padding-bottom:15px;padding-top:15px;"]);
const Profileimageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Profileimageholder",
  componentId: "r68yrd-17"
})(["cursor:pointer;position:", ";left:", ";&:before{position:absolute;top:50px;left:20px;border-radius:10px;width:", ";height:", "px;border-left:2px solid lightgrey;border-bottom:2px solid lightgrey;content:\"\";};&:after{position:absolute;top:20px;left:-40px;border-radius:10px;width:", "px;z-index:-5;border-left:2px solid lightgrey;border-top:2px solid lightgrey;content:\"\";}"], ({
  iscomment
}) => iscomment ? "absolute" : "relative", ({
  iscomment
}) => iscomment ? "-60px" : "0px", ({
  length
}) => length, ({
  length
}) => length * 150, ({
  length
}) => length * 50); //içerik sayısı,takipçi sayısı,

function Contentcard({
  Childlength,
  Answerhandler,
  readlater,
  draft,
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
      array: like,
      animation: false,
      ismarked: false
    },
    reshow: {
      number: retweet.length,
      array: retweet,
      animation: false,
      ismarked: false
    },
    Readlater: {
      ismarked: false,
      animation: false,
      number: 0
    }
  });
  const {
    ref,
    visible,
    setvisible
  } = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    0: commentanswer,
    1: setcommentanswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: answervalue,
    1: setanswervalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var textforopiton = "";

  switch (foruseroption) {
    case "Readlater":
      textforopiton = "Kaydedilen gönderilerden kaldır";
      break;

    case "Like":
      textforopiton = "Beğenilen Gönderilerden kaldır";
      break;

    case "Draft":
      textforopiton = "Taslaklardan kaldır";
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const currentelements = _objectSpread({}, elements);

    if (!foruser && userdata.UserId) {
      like.forEach(user => {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["Like"].ismarked = true;
          const Indexofcurrentuser = currentelements["Like"].array.findIndex(item => item.id == userdata.UserId);
          currentelements["Like"].array.splice(Indexofcurrentuser, 1);
          currentelements["Like"].array.unshift(user);
        }
      });
      retweet.forEach(user => {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["reshow"].ismarked = true;
          const Indexofcurrentuser = currentelements["reshow"].array.findIndex(item => item.id == userdata.UserId);
          currentelements["reshow"].array.splice(Indexofcurrentuser, 1);
          currentelements["reshow"].array.unshift(user);
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
  }, [userdata]); //like , sign and save operations

  const Countplus = elementtype => {
    const currentelements = _objectSpread({}, elements);

    if (currentelements[elementtype].ismarked == false && userdata.UserId) {
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].animation = true;
      currentelements[elementtype].number = currentelements[elementtype].number + 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.unshift({
          firstname: userdata.Username,
          lastname: userdata.Usersurname,
          id: userdata.UserId
        });
      }

      createrelationforsmh(postId, elementtype, "Create", userid);
    } else if (currentelements[elementtype].ismarked == true && userdata.UserId) {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].animation = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.splice(0, 1);
      }

      createrelationforsmh(postId, elementtype, "Destroy");
    } else {
      router.push("/login");
    }

    setelements(currentelements);
  };

  const Makeacomment = () => {
    Answerhandler(answervalue, postId);
    setanswervalue("");
    setcommentanswer(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    draft: draft,
    iscomment: iscomment,
    children: [//draft cover
    draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Softcover, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Draftholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "far fa-edit fa-lg",
          Iconconfig: {
            zindex: "400",
            hoverback: "white",
            hovercolor: "#d90429",
            backcolor: "#d90429",
            color: "white",
            width: "60px",
            height: "60px",
            lineheight: "60px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            paddingTop: "10px",
            color: "white",
            textAlign: "center"
          },
          children: "Culture of the Ottoman Empire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 16
    }, this) : null, //left arrow
    iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fas fa-caret-left fa-lg",
      Iconconfig: {
        position: "absolute",
        left: "-6px",
        top: "8px",
        color: "#faf9f9"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 28
    }, this) : null, //option section
    !iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activefunc: () => {
          setvisible(!visible);
        },
        className: "fas fa-ellipsis-h",
        Iconconfig: {
          position: "absolute",
          right: "10px",
          top: "10px",
          color: draft ? "white" : "#2A2A2A",
          zindex: "500"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 21
      }, this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [!draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            style: {
              display: userdata.UserId ? "flex" : "none"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "fas fa-user-minus",
              Iconconfig: {
                width: "35px",
                backcolor: "#DEDEDE",
                height: "35px",
                lineheight: "32px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 45
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
                lineNumber: 374,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "fas fa-link",
              Iconconfig: {
                width: "35px",
                backcolor: "#DEDEDE",
                height: "35px",
                lineheight: "32px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 45
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
                lineNumber: 381,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 35
        }, this) : null, foruser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          onClick: () => createrelationforsmh(postId, foruseroption, "Destroy", indexnum, foruseroption),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "fas fa-trash-alt fa-sm",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 37
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
              lineNumber: 392,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 16
    }, this) :
    /*#__PURE__*/
    //comment report
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        lineNumber: 406,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 15
    }, this), !draft && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "5px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profileimageholder, {
          length: Childlength,
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
              lineNumber: 430,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 21
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
              lineNumber: 434,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 70
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "auto",
              fontSize: "13px",
              marginRight: "10px",
              color: "#7D7D7D"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_9__["calculatedate"])(date).time + " " + Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_9__["calculatedate"])(date).express + " Önce"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "break-word"
            },
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 29
        }, this) : !draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 464,
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
              lineNumber: 467,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 29
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          foruser: foruser,
          children: [!iscomment && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "green",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "0, 255, 0, 0.2",
              ismarked: elements.reshow.ismarked,
              animation: elements.reshow.animation,
              color: "green",
              onClick: () => Countplus("reshow"),
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["reshow"].array, "Reshow"),
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "red",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "255, 0, 0,0.2",
              ismarked: elements.Like.ismarked,
              animation: elements.Like.animation,
              color: "#C72121",
              onClick: () => Countplus("Like"),
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["Like"].array, "Like"),
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AddComment"], {
              onClick: () => setcommentanswer(!commentanswer),
              style: {
                color: "grey",
                cursor: "pointer"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 486,
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
              animation: elements.Readlater.animation,
              color: "black",
              onClick: () => Countplus("Readlater"),
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 21
        }, this), commentanswer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            value: answervalue,
            onChange: e => setanswervalue(e.target.value),
            InputProps: {
              style: {
                cursor: "pointer"
              },
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputAdornment"], {
                onClick: Makeacomment,
                style: {
                  color: answervalue.length > 0 ? "#e63946" : "grey"
                },
                position: "end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Send"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 505,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 337,
    columnNumber: 8
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Contentcard));

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
})(["position:fixed;top:60px;overflow:hidden;left:0;height:100vh;z-index:150;background-color:#e9ecef;box-shadow:3px 3px 3px rgba(0,0,0,0.2);transition:all 0.2s;width:", ";@media (max-width:940px){display:none;}"], ({
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
  const thirdlist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-pencil-ruler",
    desc: "Taslaklar",
    path: `Drafts`
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
            lineNumber: 93,
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
                lineNumber: 99,
                columnNumber: 24
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
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
                  lineNumber: 105,
                  columnNumber: 91
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 24
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                  lineNumber: 115,
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
                  lineNumber: 116,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
                  lineNumber: 129,
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
                  lineNumber: 130,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              width: "100%",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: myactive ? "flex-start" : "center"
            },
            children: thirdlist.current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/Drafts/[userid]",
              as: `/Drafts/${userdata.UserId}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "black",
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
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
                  lineNumber: 143,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
})(["position:fixed;top:0;left:0;width:100%;height:60px;padding:5px;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:200;"]);
const InnerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__InnerNavbar",
  componentId: "sc-9zri3r-2"
})(["position:relative;height:100%;margin:auto;display:flex;align-items:center;max-width:1100px;width:100%;justify-content:space-between;"]);
const Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Iconholder",
  componentId: "sc-9zri3r-3"
})(["position:relative;margin-right:10px;cursor:pointer;background-color:", ";padding:2px;border-radius:50%;transition:0.3s;&:active{background-color:#bbdefb;}"], ({
  clicked
}) => clicked ? "" : "");
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__InputHolder",
  componentId: "sc-9zri3r-4"
})(["position:relative;display:", ";position:relative;@media (max-width:850px){display:", ";}"], ({
  flex
}) => flex, ({
  flex2
}) => flex2);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Navigation__Input",
  componentId: "sc-9zri3r-5"
})(["padding:6px;padding-left:10px;padding-right:40px;border:none;width:100%;outline:none;border-radius:3px;background-color:#E0E0E0;color:black;::placeholder{color:black;}"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Navigation__Iconsecure",
  componentId: "sc-9zri3r-6"
})(["color:white;top:50%;height:100%;transform:translate(50%,-50%);"]);
const Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Optionwindow",
  componentId: "sc-9zri3r-7"
})(["position:absolute;top:60px;height:", ";overflow:auto;padding:8px;right:0px;width:350px;background-color:white;border-radius:6px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;"], ({
  fornotify
}) => fornotify ? "400px" : "");
const Inneroption = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Inneroption",
  componentId: "sc-9zri3r-8"
})([""]);
const Searchdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Searchdiv",
  componentId: "sc-9zri3r-9"
})(["padding:10px;position:absolute;top:60px;left:-55px;width:300px;height:300px;background-color:white;overflow:auto;border-radius:10px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;&:before{position:absolute;left:50px;top:0;}&::-webkit-scrollbar{width:30px;}&::-webkit-scrollbar:vertical{width:5px;}&::-webkit-scrollbar:horizontal{height:12px;}&::-webkit-scrollbar-thumb{fontsize:10px;background-color:rgba(0,0,0,.5);border-radius:10px;}"]);
const Searchelements = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Searchelements",
  componentId: "sc-9zri3r-10"
})(["display:flex;border-radius:5px;padding:10px;align-items:center;margin-bottom:15px;&:hover{cursor:pointer;background-color:#e63946;color:white;}"]); //ToDo 

function Navigation({
  Data,
  Count,
  Reloadfunc,
  Update
}) {
  const {
    logged,
    spinner,
    userdata,
    setspinner,
    setuserdata,
    setlogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]);
  const {
    ref,
    visible,
    setvisible
  } = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    ref: ref2,
    visible: visible2,
    setvisible: setvisible2
  } = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_5__["default"])(); //burada değişken isimi değiştirerek kullanabilrsin

  const {
    0: inputvalue,
    1: setinputvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: usersforsearch,
    1: setusersforsearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: searchactive,
    1: setsearchactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
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
  console.log(usersforsearch);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //Todo only input lenth
    if (!visible2) setinputvalue("");
    setsearchactive("");
  }, [visible2]);

  const Logout = () => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["logout"])({
      setlogged: setlogged,
      setuserdata: setuserdata,
      setspinner: setspinner
    });
  };

  const Keyupfunction = () => {
    console.log(inputvalue);

    if (inputvalue !== "") {
      setsearchactive("Loading");
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_9__["Getusersforsearchbar"])({
        inputvalue: inputvalue,
        setusers: setusersforsearch,
        setactive: setsearchactive
      });
    }
  };

  const ScrolltoBottom = () => {
    if (Myref.current.scrollTop + Myref.current.offsetHeight >= Myref.current.scrollHeight) {
      Reloadfunc(ordernumber + Data.length);
    }
  };

  const Changehandler = e => {
    setvisible2(true);
    setinputvalue(e.target.value);
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
  };

  const Iconclick = (item, shortname) => {
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
        lineNumber: 290,
        columnNumber: 108
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 293,
      columnNumber: 20
    }, this);
  }

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
              lineNumber: 302,
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
                lineNumber: 303,
                columnNumber: 112
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
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
                lineNumber: 304,
                columnNumber: 97
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
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
          lineNumber: 309,
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
            lineNumber: 313,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => setvisible2(false),
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
            lineNumber: 317,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }, this), inputvalue.length > 0 && visible2 == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchdiv, {
          children: searchactive.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            children: searchtype
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 33
          }, this) : usersforsearch.map(item => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Searchelements, {
              onClick: () => setinputvalue(""),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                href: {
                  pathname: `/profile/${item.id}`,
                  query: {
                    name: "Post"
                  }
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    display: "flex"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
                      profile: "/black.jpg",
                      width: "45px",
                      height: "45px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 53
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                      lineNumber: 348,
                      columnNumber: 57
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      style: {
                        color: "lightgray",
                        fontSize: "15px"
                      },
                      children: "\u0130n\u015Faat M\xFChendisi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 53
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 44
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 16
      }, this), !spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
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
              lineNumber: 374,
              columnNumber: 119
            }, this),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 26
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
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
            lineNumber: 378,
            columnNumber: 99
          }, this),
          color: "secondary",
          children: "Kay\u0131t Ol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 372,
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
                lineNumber: 389,
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
                lineNumber: 392,
                columnNumber: 50
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 37
          }, this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: {
            pathname: `/profile/${userdata.UserId}`,
            query: {
              name: "Post"
            }
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
            width: "35px",
            height: "35px",
            profile: "/car.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 26
        }, this), Iconumber !== 0 && visible == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
          onScroll: ScrolltoBottom,
          ref: Myref,
          fornotify: Iconobject["2"].onoff,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inneroption, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigationtools__WEBPACK_IMPORTED_MODULE_4__["default"], {
              Logout: Logout,
              Navdata: Data,
              optnumber: Iconumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 297,
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
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../context/Usercontext */ "./context/Usercontext.js");

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
  Navdata,
  Logout
}) {
  const {
    setlogged,
    setuserdata,
    setspinner,
    logged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_9__["createusercontext"]);
  console.log(setlogged);
  const {
    0: toggle,
    1: settogle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let Myoption = null;
  let title = "";

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
          lineNumber: 38,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "G\xF6nderi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            },
            children: "Sayfanda bir g\xF6nderi payla\u015F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
          lineNumber: 45,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "8px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Oda"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            },
            children: "Bir tart\u0131\u015Fma odas\u0131 olu\u015Ftur"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 67,
        columnNumber: 24
      }, this);
    }

    if (Navdata.length > 0) {
      Myoption = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        children: Navdata.map((item, index) => {
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
              href: {
                pathname: `${myitemobj.href}/${item[myitemobj.idname]}`,
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
                    width: "50px",
                    height: "50px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 39
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
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
                  lineNumber: 102,
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
                    lineNumber: 105,
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
                    lineNumber: 106,
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
                    lineNumber: 107,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 38
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 31
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
          lineNumber: 121,
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
            lineNumber: 123,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
          lineNumber: 128,
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
            lineNumber: 130,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
          lineNumber: 135,
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
            lineNumber: 137,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
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
            lineNumber: 141,
            columnNumber: 27
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option1div, {
        onClick: () => Logout(),
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
          lineNumber: 145,
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
            lineNumber: 147,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "13px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 156,
      columnNumber: 11
    }, this), Myoption]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId) {
      if (userdata.UserId !== userid) {
        followerlist.forEach(element => {
          if (userdata.UserId == element.id) {
            setcheckfollow(true);
          }
        });
      }
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
          lineNumber: 70,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "black"
          },
          children: firstname + " " + surname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Following, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }, this), userdata.UserId !== userid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["PersonAdd"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 40
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
        lineNumber: 76,
        columnNumber: 20
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
border-radius:5px;
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

 html{
   scroll-behavior:smooth;
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
})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], ({
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
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js";











const Bigdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "mainlayout__Bigdiv",
  componentId: "sc-1umognl-0"
})([""]);
const Goupicon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "mainlayout__Goupicon",
  componentId: "sc-1umognl-1"
})(["position:fixed;bottom:40px;right:40px;transition-property:opacity;transition-duration:0.5s;z-index:100;opacity:", ";"], ({
  up
}) => up ? "1" : "0"); //TODO socket io handle functions on serverside

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:3001");
function Mainlayout({
  children
}) {
  const {
    0: active,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: goup,
    1: setgoup
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
  console.log(userouter.pathname);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setactive(false);
  }, [userouter.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setgoup(true);
      } else {
        setgoup(false);
      }
    });

    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["NotificationCountreq"])({
        setcountdata: setcountdata,
        UserId: userdata.UserId
      });
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
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
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["NotificationCountreq"])({
          setcountdata: setcountdata,
          UserId: userdata.UserId
        });
      }
    };

    socket.on("Notification", listener);
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId && lastrecordactive) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
        setnavdata: setnavdata,
        UserId: userdata.UserId,
        order: countofdata,
        navdata: navdata,
        lastrow: true
      });
    }
  }, [lastrecord]);

  const Reloadnav = order => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["Notificationreq"])({
      setnavdata: setnavdata,
      UserId: userdata.UserId,
      order: order,
      navdata: navdata,
      lastrow: false
    });
  };

  const Updatecount = () => {
    console.log("updatinnggg");
    setcountdata(0);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_10__["UpdateNotificationcount"])({
      UserId: userdata.UserId
    });
  }; //


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bigdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Black"], {
      onClick: () => setactive(false),
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Goupicon, {
      onClick: () => {
        window.scrollTo({
          top: 0
        });
      },
      up: goup,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "fas fa-chevron-up fa-lg",
        Iconconfig: {
          backcolor: "#ef233c",
          color: "white",
          width: "40px",
          height: "40px",
          lineheight: "40px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
const Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;@media (max-width:940px){justify-content:center;}"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__TitleDiv",
  componentId: "sc-14bmh8h-1"
})(["width:100%;padding:10px;height:300px;background-image:url(/way.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-2"
})(["max-width:650px;padding-top:20px;width:100%;padding-right:25px;@media (max-width:940px){justify-content:center;padding-left:25px;}"]);
const ShortDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__ShortDiv",
  componentId: "sc-14bmh8h-3"
})(["position:sticky;top:60px;height:50px;max-width:650px;width:100%;margin:auto;margin-bottom:10px;overflow-x:hidden;background-color:white;z-index:120;"]);
const InnershortDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__InnershortDiv",
  componentId: "sc-14bmh8h-4"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:space-around;transition-duration:0.5s;position:relative;right:", ";"], ({
  slidevalue
}) => slidevalue);
const Selectionboxes = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Selectionboxes",
  componentId: "sc-14bmh8h-5"
})(["width:100px;font-weight:600;padding:5px;margin-left:5px;text-align:center;font-size:14px;border-radius:50px;cursor:pointer;background-color:", ";color:", ";flex-shrink:0;"], ({
  selected
}) => selected ? "#ef233c" : "#ced4da", ({
  selected
}) => selected ? "white" : "black");
const Iconholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Iconholder",
  componentId: "sc-14bmh8h-6"
})(["display:flex;justify-content:center;color:red;align-items:center;position:absolute;padding:6px;height:100%;cursor:pointer;background-color:white;opacity:1;z-index:150;left:", ";top:50%;font-size:20px;transition-duration:0.1s;transform:translateY(-50%);right:", ";box-shadow:10px 10px 60px 30px white;"], ({
  leftvalue
}) => leftvalue, ({
  rightvalue
}) => rightvalue);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Container",
  componentId: "sc-14bmh8h-7"
})(["padding-left:100px;@media (max-width:940px){padding-left:0;}"]); //flex-shrink kutuların belirlenen boyuttan aşagı inmemesini saglıyor

function Home({
  mydata
}) {
  const {
    bottom
  } = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    0: slidevalue,
    1: setslidevalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-30);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]);
  const {
    0: contentdata,
    1: setcontentdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(mydata);
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
      selected: false,
      stoprequesting: false
    },
    Metafizik: {
      selected: false,
      stoprequesting: false
    },
    Uzay: {
      selected: false,
      stoprequesting: false
    },
    Biyoloji: {
      selected: false,
      stoprequesting: false
    },
    Biyolos: {
      selected: false,
      stoprequesting: false
    },
    Biyolojs: {
      selected: false,
      stoprequesting: false
    }
  });
  const {
    0: selectedkey,
    1: setselectedkey
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Uzay");
  const {
    0: windowlist,
    1: setwindowlist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    list: [],
    attribute: ""
  });
  const {
    0: stoprequesting,
    1: setstopreq
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(document.cookie);

    if (!selectionlist[selectedkey].stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        paignation: true,
        selectionlist: selectionlist,
        setselection: setselectionlist,
        category: selectedkey,
        seterrmsg: seterror
      });
    }
  }, [order]);

  const Requestagain = keyname => {
    const selections = _objectSpread({}, selectionlist);

    selections[keyname].stoprequesting = false;
    setselectionlist(selectionlist);
    setspinner(true);
    setorder(10);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: 10,
      setspinner: setspinner,
      category: keyname,
      paignation: false,
      seterrmsg: seterror
    });
  };

  const Setslidevalue = value => {
    if (value == "Back" && slidevalue >= 20) {
      setslidevalue(slidevalue - 220);
    } else if (value == "forward" && slidevalue < 600) {
      setslidevalue(slidevalue + 220);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(bottom);

    if (bottom) {
      setorder(contentdata.length + 10);
    }
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
    window.scrollTo({
      top: 350,
      behavior: "auto"
    });

    if (keyname == selectedkey) {
      return;
    } else {
      const Mutated = _objectSpread({}, selectionlist);

      for (const key in Mutated) {
        Mutated[key].selected = false;
      }

      Mutated[keyname].selected = true;
      Requestagain(keyname);
      setselectionlist(Mutated);
      setselectedkey(keyname);
    }
  };

  const Showfollowers = (statelist, type) => {
    const Mutatedwindow = _objectSpread({}, windowlist);

    Mutatedwindow.list = statelist;
    Mutatedwindow.attribute = type;
    setwindowlist(Mutatedwindow);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: `${windowlist.list.length > 0 ? "100vh" : "100%"}`,
      overflow: windowlist.list.length > 0 ? "hidden" : "visible"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            color: "white"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {
            style: {
              transform: "rotateY(180deg)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 49
          }, this), " Bil ki nezaket ba\u015Fkas\u0131n\u0131 rahats\u0131z etmemek de\u011Fil, as\u0131l ba\u015Fkas\u0131 i\xE7in rahats\u0131zl\u0131k duymakt\u0131r.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FormatQuote"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 204
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, this), windowlist.list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setlist: () => setwindowlist(prev => {
          return _objectSpread(_objectSpread({}, prev), {}, {
            list: []
          });
        }),
        attribute: windowlist.attribute,
        list: windowlist.list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            maxWidth: "650px",
            minHeight: "600px",
            paddingTop: "30px",
            width: "100%",
            paddingRight: "30px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShortDiv, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: () => Setslidevalue("Back"),
              leftvalue: "0",
              rightvalue: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                style: {
                  color: "red"
                },
                class: "fas fa-chevron-left"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconholder, {
              onClick: () => Setslidevalue("forward"),
              leftvalue: "",
              rightvalue: "0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                style: {
                  color: "black"
                },
                class: "fas fa-chevron-right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnershortDiv, {
              slidevalue: slidevalue + "px",
              children: Object.keys(selectionlist).map(item => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionboxes, {
                  selected: selectionlist[item].selected,
                  onClick: () => Selectionhander(item),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 53
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 49
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              marginTop: "20px"
            },
            children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 47
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 24
          }, this), contentdata.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            postId: item.id,
            content: item.content,
            createrelationforsmh: createrelation,
            showwindow: (stateoflist, type) => Showfollowers(stateoflist, type),
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
          }, uniqid__WEBPACK_IMPORTED_MODULE_10___default()(), false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 33
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 271,
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
    0: allowaction,
    1: setallowaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: userdata,
    1: setuserdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: draftid,
    1: setdraftid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = localStorage.getItem("TOKEN"); //if(token){

    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_2__["Contextdata"])({
      Token: token,
      setcontextdata: setuserdata,
      setlogged: setlogged,
      setspinner: setspinner,
      setallowaction: setallowaction
    }); //}
    //else{
    //}
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(createusercontext.Provider, {
    value: {
      logged: logged,
      allowaction: allowaction,
      setlogged: setlogged,
      userdata: userdata,
      setuserdata: setuserdata,
      spinner: spinner,
      setspinner,
      setspinner,
      draftid: draftid,
      setdraftid,
      setdraftid
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

Home.layout = children => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps({
  req,
  res
}) {
  try {
    if (req.headers.cookie) {
      var {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`http://localhost:3001/content/gethome/10/Felsefe`, {
        headers: {
          Cookie: req.headers.cookie
        }
      });
    } else {
      var {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`http://localhost:3001/content/gethome/10/Felsefe`);
    }

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

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL01haW4vU2hvd2ZvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9udG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvVXNlcmNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL0NsaWtjb3V0aXNkZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzZnVuYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pcWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJsb2dvdXQiLCJnZXQiLCJsb2dnZWQiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwidHlwZW9mc3VibWl0IiwicHJvY2Vzc3R5cGUiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbiIsImxlbmd0aCIsInNlbGVjdGlvbnMiLCJzdG9wcmVxdWVzdGluZyIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJSb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIlByZXZlbnQiLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJjdXJyZW50IiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJDb21tZW50SWQiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJjdXJyZW50YWN0aXZlIiwic3RhdGUiLCJJY29uc3BhbiIsInN0eWxlZCIsInNwYW4iLCJ3aWR0aCIsIm1pZGRsZSIsImhlaWdodCIsImNvbG9yIiwiYmFja2NvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJsaW5laGVpZ2h0IiwiaG92ZXJjb2xvciIsImhvdmVyYmFjayIsInJvdGF0ZSIsInppbmRleCIsIlN1YnRleHQiLCJwIiwiSWNvbiIsImNsYXNzTmFtZSIsIkljb25jb25maWciLCJhY3RpdmVmdW5jIiwiUnRsaWtld2luZG93IiwiZGl2IiwiSW5uZXJ3aW5kb3ciLCJTaG93Zm9sbG93ZXIiLCJsaXN0Iiwic2V0bGlzdCIsIlRpdGxlIiwiRm9sbG93aW5ncmVsYXRpb24iLCJjaGVja2ZvbGxvdyIsImZvbGxvd2VkaWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIm1hcCIsIml0ZW0iLCJGb2xsb3dlZCIsIkxpa2VhbmltYXRvbiIsImtleWZyYW1lcyIsIk91dHNpZGVkaXYiLCJkcmFmdCIsImlzY29tbWVudCIsIlNvZnRjb3ZlciIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlNlY29uZFBhcnQiLCJmb3J1c2VyIiwiVG9vbGJhciIsIkltZyIsImltZyIsIlNwYW5mb3IiLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJhbmltYXRpb24iLCJPcHRpb253aW5kb3ciLCJPcHRpb25ob2xkZXIiLCJEcmFmdGhvbGRlciIsIklucHV0aG9sZGVyIiwiUHJvZmlsZWltYWdlaG9sZGVyIiwiQ29udGVudGNhcmQiLCJDaGlsZGxlbmd0aCIsIkFuc3dlcmhhbmRsZXIiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJjb250ZW50IiwidGl0bGVpbWFnZSIsInRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb25mb3JzbWgiLCJwb3N0SWQiLCJmb3J1c2Vyb3B0aW9uIiwiaW5kZXhudW0iLCJ1c2VyaWQiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJyZWYiLCJ2aXNpYmxlIiwic2V0dmlzaWJsZSIsInVzZUNsaWNrb3V0c2lkZSIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwiYW5zd2VydmFsdWUiLCJzZXRhbnN3ZXJ2YWx1ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZVJvdXRlciIsInRleHRmb3JvcGl0b24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50ZWxlbWVudHMiLCJmb3JFYWNoIiwidXNlciIsIkluZGV4b2ZjdXJyZW50dXNlciIsImZpbmRJbmRleCIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsIk1ha2VhY29tbWVudCIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm1hcmdpblJpZ2h0IiwiY2FsY3VsYXRlZGF0ZSIsInRpbWUiLCJleHByZXNzIiwid29yZEJyZWFrIiwiZmxleCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlIiwiZW5kQWRvcm5tZW50IiwiUmVhY3QiLCJtZW1vIiwiRXh0ZXJpb3JEaXYiLCJhY3RpdmUiLCJJbm5lckRpdiIsIkltYWdlRGl2IiwiTmF2aWdhdGlvbkRpdiIsIkxpIiwibGkiLCJDbG9zZW9wZW4iLCJMZWZ0dG9vbGJhciIsIm1ha2VhY3RpdmUiLCJteWFjdGl2ZSIsImZpcnN0bGlzdCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwicGF0aCIsInNlY29uZGxpc3QiLCJ0aGlyZGxpc3QiLCJ1bmRlZmluZWQiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsInJvdGF0ZTM2MCIsIlNwaW5uZXIiLCJOYXZiYXJleHQiLCJJbm5lck5hdmJhciIsIkljb25ob2xkZXIiLCJjbGlja2VkIiwiSW5wdXRIb2xkZXIiLCJmbGV4MiIsIklucHV0IiwiaW5wdXQiLCJJY29uc2VjdXJlIiwiZm9ybm90aWZ5IiwiSW5uZXJvcHRpb24iLCJTZWFyY2hkaXYiLCJTZWFyY2hlbGVtZW50cyIsIk5hdmlnYXRpb24iLCJEYXRhIiwiQ291bnQiLCJSZWxvYWRmdW5jIiwiVXBkYXRlIiwic3Bpbm5lciIsInVzZUNsaWNrb3V0c2llIiwicmVmMiIsInZpc2libGUyIiwic2V0dmlzaWJsZTIiLCJzZXRpbnB1dHZhbHVlIiwidXNlcnNmb3JzZWFyY2giLCJzZXR1c2Vyc2ZvcnNlYXJjaCIsInNlYXJjaGFjdGl2ZSIsInNldHNlYXJjaGFjdGl2ZSIsIk15cmVmIiwib3JkZXJudW1iZXIiLCJzZXRvcmRlcm51bWJlciIsIkljb251bWJlciIsInNldMSxY29ubnVtYmVyIiwiSWNvbm9iamVjdCIsInNldEljb25vYmplY3QiLCJvbm9mZiIsInNob3J0IiwiT25jZXJlcXVlc3RlZCIsIkxvZ291dCIsIktleXVwZnVuY3Rpb24iLCJTY3JvbGx0b0JvdHRvbSIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsIkNoYW5nZWhhbmRsZXIiLCJJY29uc2VsZWN0IiwiaWNvbm51bWJlciIsIm15b2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsIkljb25jbGljayIsInNob3J0bmFtZSIsInNlYXJjaHR5cGUiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsInBhZGRpbmdMZWZ0IiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwiT3B0aW9uMWRpdiIsImNoZWNrIiwiTmF2aWdhdGlvbnRvb2xzIiwib3B0bnVtYmVyIiwib3B0bmFtZSIsIk5hdmRhdGEiLCJ0b2dnbGUiLCJzZXR0b2dsZSIsIk15b3B0aW9uIiwiQXR0cml1YnRlYXJyYXkiLCJpZG5hbWUiLCJsaCIsImhyZWYiLCJpbmRleCIsIm15aXRlbW9iaiIsIkZhY2VjaGVjayIsIlVzZXIiLCJjcmVhdGVkQXQiLCJFeHRlcmlvciIsIklubmVyIiwiTmFtZSIsIkZvbGxvd2luZyIsIlVzZXJjYXJkIiwic3VybmFtZSIsIm9wdGlvbmZvcmJ1dHRvbiIsImNoaWxkcmVuIiwidXNlcm51bWJlciIsImZvbGxvd2VybGlzdCIsIlJlbGF0aW9uZnVuYyIsInNldGNoZWNrZm9sbG93IiwiZWxlbWVudCIsIkZvbGxvd2luZ3JlcSIsIkJ1dHRvbiIsImJ1dHRvbiIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwicHJvZmlsZSIsIkJsYWNrIiwiYWt0aWYiLCJCaWdkaXYiLCJHb3VwaWNvbiIsInVwIiwic29ja2V0IiwiaW8iLCJNYWlubGF5b3V0IiwiZ291cCIsInNldGdvdXAiLCJjb3VudG9mZGF0YSIsImxhc3RyZWNvcmQiLCJzZXRsYXN0cmVjb3JkIiwibGFzdHJlY29yZGFjdGl2ZSIsInNldGxhc3RyZWNvcmRhY3RpdmUiLCJ1c2Vyb3V0ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwibGlzdGVuZXIiLCJvbiIsIlJlbG9hZG5hdiIsIlVwZGF0ZWNvdW50Iiwic2Nyb2xsVG8iLCJDc3NUZXh0RmllbGQiLCJtYWtlU3R5bGVzIiwicm9vdCIsIkZsZXhkaXYiLCJUaXRsZURpdiIsIkNvbnRlbnREaXYiLCJTaG9ydERpdiIsIklubmVyc2hvcnREaXYiLCJzbGlkZXZhbHVlIiwiU2VsZWN0aW9uYm94ZXMiLCJzZWxlY3RlZCIsImxlZnR2YWx1ZSIsInJpZ2h0dmFsdWUiLCJDb250YWluZXIiLCJIb21lIiwidXNlU2Nyb2xsIiwic2V0c2xpZGV2YWx1ZSIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsInNldHNlbGVjdGlvbmxpc3QiLCJGZWxzZWZlIiwiTWV0YWZpemlrIiwiVXpheSIsIkJpeW9sb2ppIiwiQml5b2xvcyIsIkJpeW9sb2pzIiwic2VsZWN0ZWRrZXkiLCJzZXRzZWxlY3RlZGtleSIsIndpbmRvd2xpc3QiLCJzZXR3aW5kb3dsaXN0IiwiY29va2llIiwiUmVxdWVzdGFnYWluIiwia2V5bmFtZSIsIlNldHNsaWRldmFsdWUiLCJjcmVhdGVyZWxhdGlvbiIsInR5cGVvZnJlbGF0aW9uIiwiU2VsZWN0aW9uaGFuZGVyIiwiYmVoYXZpb3IiLCJNdXRhdGVkIiwiU2hvd2ZvbGxvd2VycyIsInN0YXRlbGlzdCIsInR5cGUiLCJNdXRhdGVkd2luZG93Iiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsInN0YXRlb2ZsaXN0IiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwicGVyc29uYWwiLCJzdWJ0aXRsZSIsInVuaXFpZCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImFsbG93YWN0aW9uIiwiZHJhZnRpZCIsInNldGRyYWZ0aWQiLCJnZXRJdGVtIiwiaGFuZGxlY2xpY2siLCJldmVudCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldGJvdHRvbSIsImlubmVySGVpZ2h0IiwiYm9keSIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJsYXlvdXQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJoZWFkZXJzIiwiQ29va2llIiwicmVkaXJlY3QiLCJwcmV2aW91c2RhdGUiLCJQcmV2ZGF0ZSIsImRpZmZlcmVuY2UiLCJhYnMiLCJub3ciLCJzZWNvbmQiLCJjZWlsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLE1BQU1DLFlBQVksR0FBQyxDQUFDO0FBQUNDLE1BQUQ7QUFBTUMsV0FBTjtBQUFnQkMsV0FBaEI7QUFBMEJDLGdCQUExQjtBQUF5Q0MsV0FBekM7QUFBbURDO0FBQW5ELENBQUQsS0FBa0U7QUFFbEYsTUFBR0wsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEtBQWhCLEVBQXNCO0FBRW5CTCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FDLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxXQUFPLEtBQVA7QUFFRixHQU5ELE1BT0ssSUFBR0YsSUFBSSxJQUFJLGNBQVgsRUFBMEI7QUFFNUJHLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FDLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUMsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLE9BQXhCO0FBQ0EsV0FBTyxLQUFQO0FBRUY7O0FBRUQsU0FBTyxJQUFQO0FBQ0YsQ0FwQkQ7O0FBc0JPLE1BQU1DLFFBQVEsR0FBQyxPQUFNO0FBQUNMLFdBQUQ7QUFBV0MsWUFBWDtBQUFzQkssYUFBdEI7QUFBa0NDLFVBQWxDO0FBQTJDQyxRQUEzQztBQUFrRFgsV0FBbEQ7QUFBNERZLGlCQUE1RDtBQUE0RUM7QUFBNUUsQ0FBTixLQUErRjtBQUdqSCxNQUFHO0FBRUQsVUFBSztBQUFDZDtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ21CLElBQU4sQ0FBVyxRQUFYLEVBQW9CO0FBQUNKLGNBQVEsRUFBQ0E7QUFBVixLQUFwQixFQUF3QztBQUFDSyxxQkFBZSxFQUFDO0FBQWpCLEtBQXhDLENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBWjs7QUFFQSxRQUFHQSxJQUFJLENBQUNtQixLQUFMLElBQWMsSUFBakIsRUFBc0I7QUFFcEJOLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFFRCxLQUxELE1BTUssSUFBR2QsSUFBSSxDQUFDbUIsS0FBTCxJQUFjLElBQWpCLEVBQXNCO0FBRXpCTixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBQyxlQUFTLENBQUMsSUFBRCxDQUFUO0FBRUQsS0FMSSxNQU1EO0FBQ0ZWLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQU0saUJBQVcsQ0FBQ1YsSUFBSSxDQUFDb0IsUUFBTixDQUFYO0FBQ0FmLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGtCQUFZLENBQUNjLE9BQWIsQ0FBcUIsT0FBckIsRUFBNkJyQixJQUFJLENBQUNzQixLQUFsQyxFQUpFLENBSXVDOztBQUN6Q1YsWUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjtBQUNEO0FBRUYsR0F6QkQsQ0F5QkMsT0FBTUMsR0FBTixFQUFVO0FBQ1B2QixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFFSixDQWhDTTtBQWtDQSxNQUFNd0IsTUFBTSxHQUFHLE9BQU07QUFBQ3BCLFlBQUQ7QUFBWUssYUFBWjtBQUF3Qk47QUFBeEIsQ0FBTixLQUEyQztBQUUvRCxNQUFJO0FBRUEsVUFBTVIsNENBQUssQ0FBQzhCLEdBQU4sQ0FBVSxTQUFWLEVBQW9CO0FBQUNWLHFCQUFlLEVBQUM7QUFBakIsS0FBcEIsQ0FBTjtBQUNBWixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FNLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUwsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWVMsTUFBWjtBQUNILEdBUEQsQ0FPRSxPQUFPckIsS0FBUCxFQUFjLENBQ2Q7QUFDRDtBQUNGLENBWk07QUFlQSxNQUFNc0IsV0FBVyxHQUFDLE9BQU07QUFBQ2YsaUJBQUQ7QUFBaUJGLFVBQWpCO0FBQTBCRyxXQUExQjtBQUFvQ2I7QUFBcEMsQ0FBTixLQUF1RDtBQUM1RWdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEVBQVo7O0FBQ0YsTUFBRztBQUNELFVBQUs7QUFBQ2xCO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLFdBQVgsRUFBdUI7QUFBQ0osY0FBUSxFQUFDQTtBQUFWLEtBQXZCLENBQWxCOztBQUVBLFFBQUdYLElBQUksQ0FBQzZCLEtBQVIsRUFBYztBQUNWaEIscUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDQUMsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEtBSEQsTUFJSTtBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNIO0FBQ0YsR0FWRCxDQVVDLE9BQU1NLEdBQU4sRUFBVTtBQUNQdkIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNIO0FBQ0YsQ0FoQk07QUFrQkEsTUFBTVksVUFBVSxHQUFDLE9BQU07QUFBQ0MsYUFBRDtBQUFhOUIsV0FBYjtBQUF1QkMsV0FBdkI7QUFBaUNVLFFBQWpDO0FBQXdDb0I7QUFBeEMsQ0FBTixLQUE4RDtBQUVwRixNQUFHO0FBRUQsVUFBSztBQUFDaEM7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVcsa0JBQVgsa0NBQWtDZ0IsV0FBbEM7QUFBOENFLGlCQUFXLEVBQUNEO0FBQTFELE9BQWxCOztBQUVBLFFBQUdqQyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNRSxlQUFOO0FBQWdCRDtBQUFoQixLQUFELENBQWYsRUFBNEM7QUFDeENDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQVUsWUFBTSxDQUFDVyxJQUFQLENBQVksa0JBQVosRUFGd0MsQ0FHeEM7QUFDSCxLQUpELE1BS0k7QUFDRDtBQUNGO0FBRUYsR0FiRCxDQWFDLE9BQU1DLEdBQU4sRUFBVTtBQUNQdkIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNIO0FBRUYsQ0FwQk07QUFzQkEsTUFBTWdCLGlCQUFpQixHQUFDLE9BQU87QUFBQ0MsU0FBRDtBQUFTQyxTQUFUO0FBQWlCQyxjQUFqQjtBQUE4Qm5DLFdBQTlCO0FBQXdDb0MsUUFBeEM7QUFBK0NDLFdBQS9DO0FBQXlEdEM7QUFBekQsQ0FBUCxLQUE2RTtBQUUxRyxNQUFHO0FBRUQsVUFBSztBQUFDRDtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ21CLElBQU4sQ0FBVyxrQkFBWCxFQUE4QjtBQUFDZ0IsaUJBQVcsRUFBQztBQUMzREksZUFBTyxFQUFDQSxPQURtRDtBQUUzREcsY0FBTSxFQUFDQSxNQUZvRDtBQUczREMsaUJBQVMsRUFBQ0EsU0FIaUQ7QUFJM0RILGVBQU8sRUFBQ0E7QUFKbUQ7QUFBYixLQUE5QixDQUFsQjs7QUFPQSxRQUFHckMsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUM7QUFBTixLQUFELENBQWYsRUFBa0M7QUFDOUJvQyxrQkFBWSxDQUFDRyxJQUFJLElBQUVBLElBQUksR0FBQyxDQUFaLENBQVo7QUFDQSxhQUY4QixDQUc5QjtBQUNILEtBSkQsTUFLSTtBQUNGdkIsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNDO0FBQ0Y7QUFFRixHQW5CRCxDQW1CQyxPQUFNTSxHQUFOLEVBQVU7QUFDUHZCLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUVGLENBMUJNO0FBNEJBLE1BQU11QixPQUFPLEdBQUMsT0FBTTtBQUFDQyxhQUFEO0FBQWFyQyxZQUFiO0FBQXdCSixXQUF4QjtBQUFrQ0MsV0FBbEM7QUFBNEN5QyxnQkFBNUM7QUFBMkRDLE9BQTNEO0FBQWlFQyxZQUFqRTtBQUE0RUMsVUFBNUU7QUFBcUZDLFlBQXJGO0FBQWdHQyxlQUFoRztBQUE4R0M7QUFBOUcsQ0FBTixLQUFvSTtBQUN2SixNQUFJO0FBRUYsVUFBSztBQUFDakQ7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsbUJBQWtCa0IsS0FBTSxJQUFHRSxRQUFTLEVBQS9DLEVBQWlEO0FBQUM5QixxQkFBZSxFQUFDO0FBQWpCLEtBQWpELENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBWjs7QUFDQSxRQUFHRCxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUMsVUFBR0YsSUFBSSxDQUFDQSxJQUFMLENBQVVrRCxNQUFWLElBQW9CLENBQXZCLEVBQXlCO0FBRXZCLGNBQU1DLFVBQVUscUJBQU9ILGFBQVAsQ0FBaEI7O0FBQ0FHLGtCQUFVLENBQUNMLFFBQUQsQ0FBVixDQUFxQk0sY0FBckIsR0FBc0MsSUFBdEM7QUFDQUgsb0JBQVksQ0FBQ0QsYUFBRCxDQUFaO0FBQ0EvQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUVEOztBQUVELFVBQUltQyxPQUFPLEdBQUMsQ0FBQyxHQUFHWCxXQUFKLENBQVo7QUFDQSxVQUFJWSxNQUFNLEdBQUMsQ0FBQyxHQUFHdEQsSUFBSSxDQUFDQSxJQUFULENBQVg7O0FBRUEsVUFBRytDLFVBQUgsRUFBYztBQUVaSixzQkFBYyxDQUFDVSxPQUFPLENBQUNFLE1BQVIsQ0FBZUQsTUFBZixDQUFELENBQWQsQ0FGWSxDQUlaO0FBRUQsT0FORCxNQU9JO0FBRUZFLGtCQUFVLENBQUMsTUFBTTtBQUNmYix3QkFBYyxDQUFDVyxNQUFELENBQWQ7QUFDRCxTQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUQ7O0FBRURFLGdCQUFVLENBQUMsTUFBTTtBQUNmbkQsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUQsS0FqQ0QsTUFrQ0k7QUFDRjtBQUNEO0FBRUYsR0ExQ0QsQ0EwQ0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1hMLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSjtBQUNGLENBOUNNO0FBaURBLE1BQU13RCxpQkFBaUIsR0FBQyxPQUFNO0FBQUNuQixRQUFEO0FBQVFvQixRQUFSO0FBQWVDLFdBQWY7QUFBeUIxRCxXQUF6QjtBQUFtQ0MsV0FBbkM7QUFBNkMwRCxjQUE3QztBQUEwREM7QUFBMUQsQ0FBTixLQUFtRjtBQUVoSCxNQUFJO0FBRUYsVUFBSztBQUFDN0Q7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVksd0JBQVosRUFBb0M7QUFDcER1QixZQUFNLEVBQUNBLE1BRDZDO0FBRXBEb0IsWUFBTSxFQUFDQSxNQUY2QztBQUdwREMsZUFBUyxFQUFDQSxTQUgwQztBQUlwREMsa0JBQVksRUFBQ0EsWUFKdUM7QUFLcERDLHFCQUFlLEVBQUNBO0FBTG9DLEtBQXBDLENBQWxCO0FBUUEsUUFBRzlELFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1DLGVBQU47QUFBZ0JDO0FBQWhCLEtBQUQsQ0FBZixFQUNBLE9BREEsS0FHQTtBQUdELEdBaEJELENBZ0JFLE9BQU9JLEtBQVAsRUFBYztBQUNYVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQURXLENBRVg7QUFDSjtBQUVGLENBdkJNO0FBMEJBLE1BQU00QyxVQUFVLEdBQUMsT0FBTTtBQUFDQyxXQUFEO0FBQVdDLFlBQVg7QUFBc0IvRCxXQUF0QjtBQUFnQ0M7QUFBaEMsQ0FBTixLQUFtRDtBQUV6RSxNQUFJO0FBRUYsVUFBSztBQUFDRjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyxXQUFVcUMsU0FBVSxFQUEvQixDQUFsQjs7QUFFQSxRQUFHaEUsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDO0FBQzFDZSxhQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7QUFDQ2dFLGdCQUFVLENBQUNoRSxJQUFJLENBQUNBLElBQU4sQ0FBVjtBQUlGLEtBTkQsTUFPSyxJQUFHQSxJQUFJLElBQUksY0FBWCxFQUEwQixDQUM1QjtBQUNGLEtBRkksTUFHRDtBQUNGO0FBQ0Q7QUFFRixHQWxCRCxDQWtCRSxPQUFPTSxLQUFQLEVBQWE7QUFFVkwsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUVKO0FBRUYsQ0ExQk07QUE0QkEsTUFBTWdFLFVBQVUsR0FBQyxPQUFNO0FBQUNGLFdBQUQ7QUFBV0csa0JBQVg7QUFBNEJDLFlBQTVCO0FBQXVDbEUsV0FBdkM7QUFBaURDLFdBQWpEO0FBQTJEa0UsTUFBM0Q7QUFBZ0V4QixPQUFoRTtBQUFzRXlCO0FBQXRFLENBQU4sS0FBMkY7QUFFakgsTUFBSTtBQUVGLFVBQUs7QUFBQ3JFO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLFdBQVVxQyxTQUFVLElBQUdLLElBQUssSUFBR3hCLEtBQU0sRUFBaEQsQ0FBbEIsQ0FGRSxDQUdGOztBQUNBLFFBQUc3QyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUMsVUFBSW1ELE9BQU8sR0FBQyxDQUFDLEdBQUdnQixXQUFKLENBQVo7QUFDQSxVQUFJZixNQUFNLEdBQUMsQ0FBQyxHQUFHdEQsSUFBSSxDQUFDQSxJQUFULENBQVg7QUFDQWlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsTUFBWjs7QUFDQSxVQUFHYyxJQUFILEVBQVE7QUFFTkQsa0JBQVUsQ0FBQ2IsTUFBTSxDQUFDQyxNQUFQLENBQWNGLE9BQWQsQ0FBRCxDQUFWLENBRk0sQ0FJTjtBQUVELE9BTkQsTUFPSTtBQUVGYyxrQkFBVSxDQUFDZCxPQUFPLENBQUNFLE1BQVIsQ0FBZUQsTUFBZixDQUFELENBQVY7QUFFRDs7QUFDQVksc0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNGLEtBbEJELE1Bb0JLLElBQUdsRSxJQUFJLElBQUksY0FBWCxFQUEwQixDQUM1QjtBQUNGLEtBRkksTUFHRDtBQUNGO0FBQ0Q7QUFFRixHQS9CRCxDQStCRSxPQUFPTSxLQUFQLEVBQWE7QUFFVkwsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUVKO0FBRUYsQ0F2Q007QUF5Q0EsTUFBTXFFLFdBQVcsR0FBQyxPQUFPO0FBQUNDLE9BQUQ7QUFBT2xFLFlBQVA7QUFBa0JGLGdCQUFsQjtBQUFpQ0YsV0FBakM7QUFBMkNDLFdBQTNDO0FBQXFERSxXQUFyRDtBQUErRG9FO0FBQS9ELENBQVAsS0FBd0Y7QUFFL0csTUFBSTtBQUVGLFVBQU07QUFBQ3hFO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLG1CQUFYLEVBQThCO0FBQUNWLHFCQUFlLEVBQUM7QUFBakIsS0FBOUIsQ0FBbkI7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFaOztBQUVBLFFBQUdELFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1DLGVBQU47QUFBZ0JDLGVBQWhCO0FBQTBCQyxvQkFBMUI7QUFBeUNDLGVBQXpDO0FBQW1EQztBQUFuRCxLQUFELENBQWYsRUFBZ0Y7QUFFOUUsWUFBTW9FLE1BQU0sR0FBQztBQUNYbkMsY0FBTSxFQUFDdEMsSUFBSSxDQUFDVyxRQUFMLENBQWMrRCxFQURWO0FBRVhDLGdCQUFRLEVBQUMzRSxJQUFJLENBQUNXLFFBQUwsQ0FBY2lFLFNBRlo7QUFHWEMsbUJBQVcsRUFBQzdFLElBQUksQ0FBQ1csUUFBTCxDQUFjbUUsUUFIZjtBQUlYQyxnQkFBUSxFQUFDL0UsSUFBSSxDQUFDVyxRQUFMLENBQWNxRSxJQUpaO0FBS1hDLGlCQUFTLEVBQUNqRixJQUFJLENBQUNXLFFBQUwsQ0FBY3VFO0FBTGIsT0FBYjtBQVFBL0Usb0JBQWMsQ0FBQ3NFLE1BQUQsQ0FBZDtBQUNBcEUsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUQsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBb0Usb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxLQWRELE1BZUk7QUFDQTtBQUNIO0FBR0YsR0ExQkQsQ0EwQkUsT0FBT2hELEdBQVAsRUFBWTtBQUNaUCxXQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNEO0FBQ0YsQ0EvQk07QUFpQ0EsTUFBTTJELGNBQWMsR0FBQyxPQUFNO0FBQUM3QyxRQUFEO0FBQVE4QyxRQUFSO0FBQWVDLFNBQWY7QUFBdUJuRixXQUF2QjtBQUFpQ0QsV0FBakM7QUFBMkMyQyxPQUEzQztBQUFpRDBDLGtCQUFqRDtBQUFrRTVDO0FBQWxFLENBQU4sS0FBdUY7QUFFakgsTUFBSTtBQUVGLFVBQUs7QUFBQzFDO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLHVCQUFzQjBELE1BQU8sSUFBRzlDLE1BQU8sSUFBR00sS0FBTSxFQUEzRCxDQUFsQjtBQUNDM0IsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFJLENBQUNBLElBQWpCOztBQUNELFFBQUdELFlBQVksQ0FBQztBQUFDQztBQUFELEtBQUQsQ0FBZixFQUF3QjtBQUVyQixVQUFHLENBQUNBLElBQUksQ0FBQ0EsSUFBTCxDQUFVa0QsTUFBZCxFQUFxQjtBQUNsQm9DLHdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRjs7QUFHRCxZQUFNakMsT0FBTyxHQUFDLENBQUMsR0FBR1gsV0FBSixDQUFkO0FBQ0EsWUFBTVksTUFBTSxHQUFDLENBQUMsR0FBR3RELElBQUksQ0FBQ0EsSUFBVCxDQUFiLENBUnFCLENBU3RCOztBQUNDcUYsYUFBTyxDQUFDaEMsT0FBTyxDQUFDRSxNQUFSLENBQWVELE1BQWYsQ0FBRCxDQUFQO0FBRUYsS0FaRCxNQWFLLElBQUd0RCxJQUFJLElBQUksY0FBWCxFQUEwQixDQUM1QjtBQUNGLEtBRkksTUFHRDtBQUNGO0FBQ0Q7QUFFRixHQXhCRCxDQXdCRSxPQUFPTSxLQUFQLEVBQWE7QUFFVlcsV0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFFSjtBQUVGLENBaENNO0FBa0NBLE1BQU1pRix1QkFBdUIsR0FBQyxPQUFNO0FBQUNqRDtBQUFELENBQU4sS0FBaUI7QUFFbkQsTUFBSTtBQUVELFVBQU0xQyw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLHdCQUF1QlksTUFBTyxFQUF6QyxDQUFOO0FBRUYsR0FKRCxDQUlFLE9BQU9oQyxLQUFQLEVBQWMsQ0FDYjtBQUNGO0FBRUgsQ0FWTTtBQVlBLE1BQU1rRixxQkFBcUIsR0FBQyxPQUFNO0FBQUNuRixZQUFEO0FBQVlnRixTQUFaO0FBQW9CdkMsVUFBcEI7QUFBNkJSLFFBQTdCO0FBQW9DbUQsV0FBcEM7QUFBOEM3QztBQUE5QyxDQUFOLEtBQTZEO0FBRTlGLE1BQUk7QUFFRixVQUFLO0FBQUM1QztBQUFELFFBQVEsTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyw4QkFBNkJZLE1BQU8sSUFBR21ELFNBQVUsSUFBRzNDLFFBQVMsSUFBR0YsS0FBTSxFQUFqRixDQUFuQjtBQUNBM0IsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFJLENBQUNBLElBQWpCOztBQUNBLFFBQUdELFlBQVksQ0FBQztBQUFDQztBQUFELEtBQUQsQ0FBZixFQUF3QjtBQUVyQnFGLGFBQU8sQ0FBQyxDQUFDLEdBQUdyRixJQUFJLENBQUNBLElBQVQsQ0FBRCxDQUFQO0FBQ0FLLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBR0YsS0FORCxNQU9LLElBQUdMLElBQUksSUFBSSxjQUFYLEVBQTBCLENBQzVCO0FBQ0YsS0FGSSxNQUdEO0FBQ0Y7QUFDRDtBQUVGLEdBbEJELENBa0JFLE9BQU9NLEtBQVAsRUFBYTtBQUVWVyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUVKO0FBQ0YsQ0F6Qk07QUEyQkEsTUFBTW9GLGNBQWMsR0FBQyxPQUFNO0FBQUNwRCxRQUFEO0FBQVE1QjtBQUFSLENBQU4sS0FBNkI7QUFFdkQsTUFBSTtBQUVGLFVBQUs7QUFBQ1Y7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsdUJBQXNCWSxNQUFPLEVBQXhDLENBQWxCO0FBRUFyQixXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQVo7O0FBRUEsUUFBR0QsWUFBWSxDQUFDO0FBQUNDO0FBQUQsS0FBRCxDQUFmLEVBQXdCO0FBRXJCVSxpQkFBVyxDQUFDVixJQUFJLENBQUNXLFFBQU4sQ0FBWDtBQUVGLEtBSkQsTUFLSyxJQUFHWCxJQUFJLElBQUksY0FBWCxFQUEwQixDQUM1QjtBQUNGLEtBRkksTUFHRDtBQUVGO0FBRUQ7QUFFRixHQXBCRCxDQW9CRSxPQUFPTSxLQUFQLEVBQWE7QUFFVlcsV0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFFSjtBQUVGLENBNUJNO0FBOEJBLE1BQU1xRixrQkFBa0IsR0FBQyxPQUFNO0FBQUNyRCxRQUFEO0FBQVFzRCxTQUFSO0FBQWdCQyxZQUFoQjtBQUEyQkM7QUFBM0IsQ0FBTixLQUFrRDtBQUVoRixNQUFJO0FBRUYsVUFBSztBQUFDOUY7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVkseUJBQVosRUFBcUM7QUFDckRnRixnQkFBVSxFQUFDekQsTUFEMEM7QUFFckR1RCxnQkFBVSxFQUFDQSxVQUYwQztBQUdyREMsbUJBQWEsRUFBQ0E7QUFIdUMsS0FBckMsQ0FBbEI7QUFLQXRDLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZvQyxhQUFPLENBQUNJLE9BQVIsR0FBa0IsSUFBbEI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWOztBQUlBLFFBQUdqRyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUM7QUFDRCxLQUhELE1BSUs7QUFFTixHQWpCRCxDQWlCRSxPQUFPSSxLQUFQLEVBQWM7QUFDWFcsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFEVyxDQUVYO0FBQ0o7QUFFRixDQXhCTTtBQTBCQSxNQUFNK0UsZUFBZSxHQUFDLE9BQU07QUFBQzNELFFBQUQ7QUFBUTRELFlBQVI7QUFBbUJ0RCxPQUFuQjtBQUF5QnVELFNBQXpCO0FBQWlDQztBQUFqQyxDQUFOLEtBQWtEO0FBRTdFLE1BQUk7QUFHRixVQUFLO0FBQUNwRztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyx3QkFBdUJZLE1BQU8sSUFBR00sS0FBTSxJQUFHd0QsT0FBUSxFQUE3RCxDQUFsQjtBQUNBLFVBQU1DLGFBQWEsR0FBQyxDQUFDLEdBQUdGLE9BQUosQ0FBcEI7QUFDQSxVQUFNRyxPQUFPLEdBQUN0RyxJQUFJLENBQUN5RSxNQUFuQjs7QUFFQSxRQUFHMkIsT0FBSCxFQUFXO0FBQ1RuRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FnRixnQkFBVSxDQUFDSSxPQUFPLENBQUMvQyxNQUFSLENBQWU4QyxhQUFmLENBQUQsQ0FBVjtBQUVELEtBSkQsTUFLSTtBQUNGcEYsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBZ0YsZ0JBQVUsQ0FBQ0csYUFBYSxDQUFDOUMsTUFBZCxDQUFxQitDLE9BQXJCLENBQUQsQ0FBVjtBQUNEO0FBSUYsR0FuQkQsQ0FtQkUsT0FBT2hHLEtBQVAsRUFBYztBQUNYVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQURXLENBRVg7QUFDSjtBQUVGLENBMUJNO0FBNEJBLE1BQU1xRixvQkFBb0IsR0FBQyxPQUFNO0FBQUNqRSxRQUFEO0FBQVFrRTtBQUFSLENBQU4sS0FBOEI7QUFFOUQsTUFBSTtBQUNGdkYsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaO0FBRUEsVUFBSztBQUFDdEM7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcseUJBQXdCWSxNQUFPLEVBQTFDLENBQWxCO0FBR0FrRSxnQkFBWSxDQUFDeEcsSUFBSSxDQUFDQSxJQUFOLENBQVo7QUFJRCxHQVZELENBVUUsT0FBT00sS0FBUCxFQUFjO0FBQ1hXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBRFcsQ0FFWDtBQUNKO0FBRUYsQ0FqQk07QUFtQkEsTUFBTXVGLG9CQUFvQixHQUFDLE9BQU07QUFBQ0MsWUFBRDtBQUFZQyxVQUFaO0FBQXFCN0YsV0FBckI7QUFBK0I4RjtBQUEvQixDQUFOLEtBQXdEO0FBRXhGLE1BQUk7QUFFRixVQUFLO0FBQUM1RztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyxvQkFBbUJnRixVQUFXLEVBQXpDLENBQWxCO0FBRUF6RixXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7O0FBRUEsUUFBR0EsSUFBSSxDQUFDQSxJQUFMLENBQVVrRCxNQUFWLElBQW9CLENBQXZCLEVBQXlCO0FBQ3RCcEMsZUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNGLEtBRkQsTUFHSTtBQUNGQSxlQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0E2RixjQUFRLENBQUMzRyxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNEO0FBSUYsR0FoQkQsQ0FnQkUsT0FBT00sS0FBUCxFQUFjO0FBQ1hXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBRFcsQ0FFWDtBQUNKO0FBRUYsQ0F2Qk07QUF5QkEsTUFBTTJGLFVBQVUsR0FBRyxPQUFNO0FBQUNuRCxRQUFEO0FBQVF6RCxXQUFSO0FBQWtCQztBQUFsQixDQUFOLEtBQXFDO0FBRTdELE1BQUk7QUFFRixVQUFLO0FBQUNGO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLGlCQUFYLEVBQTZCO0FBQzdDMkMsWUFBTSxFQUFDQTtBQURzQyxLQUE3QixDQUFsQjs7QUFJQSxRQUFHM0QsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDO0FBQ3pDZSxhQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQzhHLE9BQWpCO0FBQ0YsS0FGRCxNQUdJO0FBQ0Y7QUFDRDtBQUVGLEdBYkQsQ0FhRSxPQUFPeEcsS0FBUCxFQUFhO0FBRWJXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFFRDtBQUVGLENBckJNO0FBdUJBLE1BQU02RixnQkFBZ0IsR0FBRyxPQUFNO0FBQUNDLGdCQUFEO0FBQWdCQyxRQUFoQjtBQUF1QjNFLFFBQXZCO0FBQThCckMsV0FBOUI7QUFBd0NDLFdBQXhDO0FBQWtEcUM7QUFBbEQsQ0FBTixLQUFxRTtBQUVuRyxNQUFJO0FBRUYsVUFBSztBQUFDdkM7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVcsdUJBQVgsRUFBbUM7QUFDbkRtRyxlQUFTLEVBQUNGLGNBRHlDO0FBRW5EekUsZUFBUyxFQUFDQSxTQUZ5QztBQUduREosYUFBTyxFQUFDOEUsTUFIMkM7QUFJbkQzRSxZQUFNLEVBQUNBO0FBSjRDLEtBQW5DLENBQWxCOztBQU9BLFFBQUd2QyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFDekNlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBSSxDQUFDOEcsT0FBakI7QUFDRixLQUZELE1BR0k7QUFDRjtBQUNEO0FBRUYsR0FoQkQsQ0FnQkUsT0FBT3hHLEtBQVAsRUFBYTtBQUViVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBRUQ7QUFFRixDQXhCTTtBQTBCQSxNQUFNaUcsd0JBQXdCLEdBQUcsT0FBTztBQUFDdEIsWUFBRDtBQUFZRCxTQUFaO0FBQW9CRyxZQUFwQjtBQUErQnFCLGVBQS9CO0FBQTZDbkgsV0FBN0M7QUFBdURDO0FBQXZELENBQVAsS0FBMkU7QUFFakgsTUFBSTtBQUVGLFVBQUs7QUFBQ0Y7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsc0JBQXFCcUUsVUFBVyxJQUFHRixVQUFXLElBQUd1QixhQUFjLEVBQTFFLENBQWxCOztBQUVBLFFBQUdySCxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFekMwRixhQUFPLENBQUNJLE9BQVIsR0FBa0IsSUFBbEI7QUFDQS9FLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBSSxDQUFDcUgsS0FBakI7QUFDRixLQUpELE1BS0k7QUFDRjtBQUNEO0FBRUYsR0FiRCxDQWFFLE9BQU8vRyxLQUFQLEVBQWE7QUFFYlcsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUVEO0FBRUYsQ0FyQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3akJQO0FBQ0E7QUFFQSxNQUFNb0csUUFBUSxHQUFDQyx3REFBTSxDQUFDQyxJQUFSO0FBQUE7QUFBQTtBQUFBLEdBQWEsQ0FBQztBQUFDQyxPQUFEO0FBQU9DLFFBQVA7QUFBY0MsUUFBZDtBQUFxQkMsT0FBckI7QUFBMkJDLFdBQTNCO0FBQXFDQyxVQUFyQztBQUE4Q0MsS0FBOUM7QUFBa0RDLE1BQWxEO0FBQXVEQyxPQUF2RDtBQUE2REMsUUFBN0Q7QUFBb0VDLFlBQXBFO0FBQStFQyxZQUEvRTtBQUEwRkMsV0FBMUY7QUFBb0dDLFFBQXBHO0FBQTJHQztBQUEzRyxDQUFELEtBQXVIO0FBQ2xKLFdBQVdULFFBQVM7QUFDcEIsTUFBTUMsR0FBSTtBQUNWLE9BQU9DLElBQUs7QUFDWixRQUFRQyxLQUFNO0FBQ2QsU0FBU0MsTUFBTztBQUNoQjtBQUNBO0FBQ0EsY0FBY0MsVUFBVztBQUN6QixRQUFRVixLQUFNO0FBQ2QsU0FBU0UsTUFBTztBQUNoQjtBQUNBO0FBQ0EsUUFBUUMsS0FBTTtBQUNkLFVBQVVXLE1BQU87QUFDakIsbUJBQW1CVixTQUFVO0FBQzdCLG1CQUFtQlMsTUFBTSxHQUFHLFFBQUgsR0FBYyxNQUFPO0FBQzlDLHNCQUFzQlosTUFBTSxHQUFHLE1BQUgsR0FBWSxHQUFJLElBQUdBLE1BQU0sR0FBRyxNQUFILEdBQVksR0FBSTtBQUNyRTtBQUNBLG9CQUFvQlcsU0FBVTtBQUM5QixTQUFTRCxVQUFXO0FBQ3BCO0FBQ0EsQ0F0QmMsQ0FBZDtBQXdCQSxNQUFNSSxPQUFPLEdBQUdqQix3REFBTSxDQUFDa0IsQ0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFiO0FBSWUsU0FBU0MsSUFBVCxDQUFjO0FBQUNDLFdBQUQ7QUFBV0MsWUFBWDtBQUFzQkM7QUFBdEIsQ0FBZCxFQUFpRDtBQUM1RCxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLFFBQUQ7QUFBVSxhQUFPLEVBQUVBO0FBQW5CLE9BQW1DRCxVQUFuQztBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRyxZQUFZLEdBQUN2Qix3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSx1S0FBbEI7QUFhQSxNQUFNQyxXQUFXLEdBQUN6Qix3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSwrQ0FBakI7QUFNZSxTQUFTRSxZQUFULENBQXNCO0FBQUNDLE1BQUQ7QUFBTUMsU0FBTjtBQUFjeEY7QUFBZCxDQUF0QixFQUFnRDtBQUUzRCxNQUFJeUYsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJVixJQUFJLEdBQUksRUFBWjtBQUNBekgsU0FBTyxDQUFDQyxHQUFSLENBQVlnSSxJQUFaOztBQUNBLFFBQU1HLGlCQUFpQixHQUFHLENBQUNDLFdBQUQsRUFBYWhILE1BQWIsRUFBb0JpSCxVQUFwQixLQUFrQztBQUV4RDVELHVFQUFrQixDQUFDO0FBQ2ZyRCxZQUFNLEVBQUNBLE1BRFE7QUFFZnVELGdCQUFVLEVBQUMwRCxVQUZJO0FBR2Z6RCxtQkFBYSxFQUFDd0Q7QUFIQyxLQUFELENBQWxCO0FBS0gsR0FQRDs7QUFTQSxVQUFRM0YsU0FBUjtBQUNJLFNBQUssTUFBTDtBQUNJeUYsV0FBSyxHQUFDLFdBQU47QUFDQVYsVUFBSSxnQkFBQyxxRUFBQywwREFBRDtBQUFTLGFBQUssRUFBRTtBQUFDZCxlQUFLLEVBQUM7QUFBUDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUw7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSXdCLFdBQUssR0FBQyxXQUFOO0FBQ0E7O0FBQ0o7QUFDSUEsV0FBSyxHQUFDLGVBQU47QUFDQTtBQVZSOztBQWFBLHNCQUNJO0FBQUEsNEJBQ1EscUVBQUMsOERBQUQ7QUFBTyxhQUFPLEVBQUVELE9BQWhCO0FBQXlCLFdBQUssRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFIsZUFFUSxxRUFBQyxZQUFEO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0ssaUJBQU8sRUFBQyxNQUFUO0FBQWdCQyx5QkFBZSxFQUFDLFdBQWhDO0FBQTRDQyxzQkFBWSxFQUFDLE1BQXpEO0FBQWdFL0IsZ0JBQU0sRUFBQyxNQUF2RTtBQUE4RUYsZUFBSyxFQUFDLE1BQXBGO0FBQTJGa0MsZ0JBQU0sRUFBQyxNQUFsRztBQUF5R0MsaUJBQU8sRUFBQyxNQUFqSDtBQUF3SEMsb0JBQVUsRUFBQyxRQUFuSTtBQUE0SUMsd0JBQWMsRUFBQztBQUEzSixTQUFaO0FBQUEsZ0NBQ0kscUVBQUMsMERBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBQ2xDLGlCQUFLLEVBQUM7QUFBUDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBS3dCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUcsaUJBQU8sRUFBRUQsT0FBWjtBQUFzQixlQUFLLEVBQUU7QUFBQ3ZCLGlCQUFLLEVBQUMsT0FBUDtBQUFlbUMsa0JBQU0sRUFBQztBQUF0QixXQUE3QjtBQUErRCxtQkFBUyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSSxxRUFBQyxXQUFEO0FBQUEsa0JBQ0tiLElBQUksQ0FBQ2MsR0FBTCxDQUFTQyxJQUFJLGlCQUNWLHFFQUFDLHdEQUFEO0FBQ0EseUJBQWUsRUFBRSxJQURqQjtBQUVBLG1CQUFTLEVBQUVBLElBQUksQ0FBQ3JGLFNBRmhCO0FBR0EsaUJBQU8sRUFBRXFGLElBQUksQ0FBQ25GLFFBSGQ7QUFJQSxnQkFBTSxFQUFFbUYsSUFBSSxDQUFDdkYsRUFKYjtBQUtBLHNCQUFZLEVBQUV1RixJQUFJLENBQUNDLFFBTG5CO0FBTUEsc0JBQVksRUFBRWI7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNYyxZQUFZLEdBQUNDLG1FQUFELHNIQUFsQjtBQVFBLE1BQU1DLFVBQVUsR0FBQzlDLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLDJNQUdQLENBQUM7QUFBQ3VCO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLEdBQUcsT0FBSCxHQUFhLEVBSHZCLEVBTUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZSxDQUFDQSxTQUFELEdBQWEsU0FBYixHQUF3QixTQU4xQyxDQUFoQixDLENBWUE7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHakQsd0RBQU0sQ0FBQ3dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWY7QUFVQSxNQUFNMEIsUUFBUSxHQUFDbEQsd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkNBQWQ7QUFJQSxNQUFNMkIsV0FBVyxHQUFDbkQsd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsZUFBakI7QUFHQSxNQUFNNEIsYUFBYSxHQUFDcEQsd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0RBQW5CO0FBTUEsTUFBTTZCLFVBQVUsR0FBQ3JELHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLGtFQUNMLENBQUM7QUFBQ3dCO0FBQUQsQ0FBRCxLQUFlQSxTQUFTLEdBQUcsTUFBSCxHQUFXLEtBRDlCLENBQWhCO0FBT0EsTUFBTU0sVUFBVSxHQUFHdEQsd0RBQU0sQ0FBQ3dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQ04sQ0FBQztBQUFDK0I7QUFBRCxDQUFELEtBQWFBLE9BQU8sR0FBRyxPQUFILEdBQVcsTUFEekIsQ0FBaEI7QUFPQSxNQUFNQyxPQUFPLEdBQUN4RCx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSwwREFDSCxDQUFDO0FBQUMrQjtBQUFELENBQUQsS0FBYUEsT0FBTyxHQUFHLE1BQUgsR0FBWSxNQUQ3QixDQUFiO0FBTUEsTUFBTUUsR0FBRyxHQUFDekQsd0RBQU0sQ0FBQzBELEdBQVI7QUFBQTtBQUFBO0FBQUEsd0ZBQVQ7QUFTQSxNQUFNQyxPQUFPLEdBQUczRCx3REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLCtFQUFiO0FBUUEsTUFBTTJELFVBQVUsR0FBQzVELHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLG9GQUlMbUMsT0FKSyxFQUtKLENBQUM7QUFBQ0U7QUFBRCxDQUFELEtBQWdCQSxVQUxaLENBQWhCO0FBU0EsTUFBTUMsVUFBVSxHQUFDOUQsd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsNEVBQWhCO0FBU0EsTUFBTXVDLEtBQUssR0FBQy9ELHdEQUFNLENBQUNnRSxDQUFSO0FBQUE7QUFBQTtBQUFBLHlTQWNXLENBQUM7QUFBQ0g7QUFBRCxDQUFELEtBQWdCQSxVQWQzQixFQWdCSCxDQUFDO0FBQUNJLFVBQUQ7QUFBVTVEO0FBQVYsQ0FBRCxLQUFvQjRELFFBQVEsR0FBRzVELEtBQUgsR0FBVyxNQWhCcEMsRUFpQk0sQ0FBQztBQUFDNkQ7QUFBRCxDQUFELEtBQWVBLFNBQVMsR0FBR3RCLFlBQUgsR0FBa0IsRUFqQmhELENBQVg7QUFtQkEsTUFBTXVCLFlBQVksR0FBQ25FLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHNQQUFsQjtBQVlBLE1BQU00QyxZQUFZLEdBQUNwRSx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSwwSUFBbEI7QUFZQSxNQUFNNkMsV0FBVyxHQUFHckUsd0RBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw0SUFBakIsQyxDQVdBOztBQUNBLE1BQU1xRSxXQUFXLEdBQUd0RSx3REFBTSxDQUFDd0IsR0FBVjtBQUFBO0FBQUE7QUFBQSwrRkFBakI7QUFPQSxNQUFNK0Msa0JBQWtCLEdBQUN2RSx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxpWUFFYixDQUFDO0FBQUN3QjtBQUFELENBQUQsS0FBZUEsU0FBUyxHQUFHLFVBQUgsR0FBZ0IsVUFGM0IsRUFHakIsQ0FBQztBQUFDQTtBQUFELENBQUQsS0FBZUEsU0FBUyxHQUFHLE9BQUgsR0FBYSxLQUhwQixFQVNaLENBQUM7QUFBQ3JIO0FBQUQsQ0FBRCxLQUFZQSxNQVRBLEVBVVgsQ0FBQztBQUFDQTtBQUFELENBQUQsS0FBWUEsTUFBTSxHQUFDLEdBVlIsRUFvQlosQ0FBQztBQUFDQTtBQUFELENBQUQsS0FBWUEsTUFBTSxHQUFDLEVBcEJQLENBQXhCLEMsQ0E0QkE7O0FBQ0EsU0FBUzZJLFdBQVQsQ0FBcUI7QUFBQ0MsYUFBRDtBQUFhQyxlQUFiO0FBQTJCQyxXQUEzQjtBQUFxQzVCLE9BQXJDO0FBQTJDNkIsY0FBM0M7QUFBd0RDLFNBQXhEO0FBQWdFQyxZQUFoRTtBQUEyRUMsT0FBM0U7QUFBaUYvQixXQUFqRjtBQUEyRmdDLFVBQTNGO0FBQW9HQyxhQUFwRztBQUFnSEMsTUFBaEg7QUFBcUhDLFNBQXJIO0FBQTZIQyxTQUE3SDtBQUFxSUMsTUFBckk7QUFBMElDLFlBQTFJO0FBQXFKQyxzQkFBcko7QUFBMEtDLFFBQTFLO0FBQWlMakMsU0FBakw7QUFBeUxrQyxlQUF6TDtBQUF1TUMsVUFBdk07QUFBZ05DO0FBQWhOLENBQXJCLEVBQTZPO0FBRXpPLFFBQUs7QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QkMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFDO0FBQ0RDLFlBQU0sRUFBQ1gsSUFBSSxDQUFDMUosTUFEWDtBQUVEc0ssV0FBSyxFQUFDWixJQUZMO0FBR0RuQixlQUFTLEVBQUMsS0FIVDtBQUlERCxjQUFRLEVBQUM7QUFKUixLQUQ0QjtBQU9qQ2lDLFVBQU0sRUFBQztBQUNIRixZQUFNLEVBQUNaLE9BQU8sQ0FBQ3pKLE1BRFo7QUFFSHNLLFdBQUssRUFBQ2IsT0FGSDtBQUdIbEIsZUFBUyxFQUFDLEtBSFA7QUFJSEQsY0FBUSxFQUFDO0FBSk4sS0FQMEI7QUFhakNrQyxhQUFTLEVBQUM7QUFDTmxDLGNBQVEsRUFBQyxLQURIO0FBRU5DLGVBQVMsRUFBQyxLQUZKO0FBR044QixZQUFNLEVBQUM7QUFIRDtBQWJ1QixHQUFELENBQXBDO0FBbUJBLFFBQU07QUFBQ0ksT0FBRDtBQUFLQyxXQUFMO0FBQWFDO0FBQWIsTUFBMkJDLG9FQUFlLEVBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWlDWCxzREFBUSxDQUFDLEtBQUQsQ0FBL0M7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksV0FBRDtBQUFBLE9BQWFDO0FBQWIsTUFBNkJiLHNEQUFRLENBQUMsRUFBRCxDQUEzQztBQUNBLFFBQU07QUFBQzFNO0FBQUQsTUFBYXdOLHdEQUFVLENBQUNDLHNFQUFELENBQTdCO0FBQ0EsUUFBTXhOLE1BQU0sR0FBR3lOLDZEQUFTLEVBQXhCO0FBR0EsTUFBSUMsYUFBYSxHQUFDLEVBQWxCOztBQUNBLFVBQVF0QixhQUFSO0FBQ0ksU0FBSyxXQUFMO0FBQ0lzQixtQkFBYSxHQUFDLGlDQUFkO0FBQ0E7O0FBQ0osU0FBSyxNQUFMO0FBQ0lBLG1CQUFhLEdBQUMsZ0NBQWQ7QUFDQTs7QUFDSixTQUFLLE9BQUw7QUFDSUEsbUJBQWEsR0FBQyxxQkFBZDtBQVJSOztBQVlBQyx5REFBUyxDQUFDLE1BQUs7QUFHWixVQUFNQyxlQUFlLHFCQUFLckIsUUFBTCxDQUFyQjs7QUFFQyxRQUFHLENBQUNyQyxPQUFELElBQVluSyxRQUFRLENBQUMyQixNQUF4QixFQUErQjtBQUUzQnNLLFVBQUksQ0FBQzZCLE9BQUwsQ0FBY0MsSUFBRCxJQUFRO0FBQ2pCLFlBQUcvTixRQUFRLENBQUMyQixNQUFULElBQW1Cb00sSUFBSSxDQUFDaEssRUFBM0IsRUFBOEI7QUFBQztBQUU5QjhKLHlCQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCaEQsUUFBeEIsR0FBaUMsSUFBakM7QUFDQSxnQkFBTW1ELGtCQUFrQixHQUFHSCxlQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCaEIsS0FBeEIsQ0FBOEJvQixTQUE5QixDQUF5QzNFLElBQUQsSUFBUUEsSUFBSSxDQUFDdkYsRUFBTCxJQUFXL0QsUUFBUSxDQUFDMkIsTUFBcEUsQ0FBM0I7QUFDQWtNLHlCQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCaEIsS0FBeEIsQ0FBOEJxQixNQUE5QixDQUFxQ0Ysa0JBQXJDLEVBQXdELENBQXhEO0FBQ0FILHlCQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCaEIsS0FBeEIsQ0FBOEJzQixPQUE5QixDQUFzQ0osSUFBdEM7QUFFQTtBQUNKLE9BVEQ7QUFXQS9CLGFBQU8sQ0FBQzhCLE9BQVIsQ0FBaUJDLElBQUQsSUFBUTtBQUNwQixZQUFHL04sUUFBUSxDQUFDMkIsTUFBVCxJQUFtQm9NLElBQUksQ0FBQ2hLLEVBQTNCLEVBQThCO0FBQUM7QUFFM0I4Six5QkFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmhELFFBQTFCLEdBQW1DLElBQW5DO0FBQ0EsZ0JBQU1tRCxrQkFBa0IsR0FBR0gsZUFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmhCLEtBQTFCLENBQWdDb0IsU0FBaEMsQ0FBMkMzRSxJQUFELElBQVFBLElBQUksQ0FBQ3ZGLEVBQUwsSUFBVy9ELFFBQVEsQ0FBQzJCLE1BQXRFLENBQTNCO0FBQ0FrTSx5QkFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmhCLEtBQTFCLENBQWdDcUIsTUFBaEMsQ0FBdUNGLGtCQUF2QyxFQUEwRCxDQUExRDtBQUNBSCx5QkFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmhCLEtBQTFCLENBQWdDc0IsT0FBaEMsQ0FBd0NKLElBQXhDO0FBRUg7QUFDSixPQVREO0FBV0F4QyxlQUFTLENBQUN1QyxPQUFWLENBQW1CQyxJQUFELElBQVE7QUFDdEIsWUFBRy9OLFFBQVEsQ0FBQzJCLE1BQVQsSUFBbUJvTSxJQUFJLENBQUNoSyxFQUEzQixFQUE4QjtBQUFDO0FBQzNCOEoseUJBQWUsQ0FBQyxXQUFELENBQWYsQ0FBNkJoRCxRQUE3QixHQUFzQyxJQUF0QztBQUNIO0FBQ0osT0FKRDtBQU1KOztBQUdENEIsZUFBVyxDQUFDb0IsZUFBRCxDQUFYO0FBRUYsR0F4Q1EsRUF3Q1AsQ0FBQzdOLFFBQUQsQ0F4Q08sQ0FBVCxDQXpDeU8sQ0FtRnpPOztBQUNBLFFBQU1vTyxTQUFTLEdBQUVDLFdBQUQsSUFBZTtBQUUzQixVQUFNUixlQUFlLHFCQUFLckIsUUFBTCxDQUFyQjs7QUFHQSxRQUFHcUIsZUFBZSxDQUFDUSxXQUFELENBQWYsQ0FBNkJ4RCxRQUE3QixJQUF1QyxLQUF2QyxJQUFnRDdLLFFBQVEsQ0FBQzJCLE1BQTVELEVBQW1FO0FBRS9Ea00scUJBQWUsQ0FBQ1EsV0FBRCxDQUFmLENBQTZCeEQsUUFBN0IsR0FBc0MsSUFBdEM7QUFDQWdELHFCQUFlLENBQUNRLFdBQUQsQ0FBZixDQUE2QnZELFNBQTdCLEdBQXVDLElBQXZDO0FBQ0ErQyxxQkFBZSxDQUFDUSxXQUFELENBQWYsQ0FBNkJ6QixNQUE3QixHQUFxQ2lCLGVBQWUsQ0FBQ1EsV0FBRCxDQUFmLENBQTZCekIsTUFBN0IsR0FBb0MsQ0FBekU7O0FBQ0EsVUFBR3lCLFdBQVcsSUFBSSxRQUFmLElBQTJCQSxXQUFXLElBQUksTUFBN0MsRUFBb0Q7QUFDaERSLHVCQUFlLENBQUNRLFdBQUQsQ0FBZixDQUE2QnhCLEtBQTdCLENBQW1Dc0IsT0FBbkMsQ0FBMkM7QUFDdkNsSyxtQkFBUyxFQUFDakUsUUFBUSxDQUFDZ0UsUUFEb0I7QUFFdkNHLGtCQUFRLEVBQUNuRSxRQUFRLENBQUNrRSxXQUZxQjtBQUd2Q0gsWUFBRSxFQUFDL0QsUUFBUSxDQUFDMkI7QUFIMkIsU0FBM0M7QUFLSDs7QUFFRHdLLDBCQUFvQixDQUFDQyxNQUFELEVBQVFpQyxXQUFSLEVBQW9CLFFBQXBCLEVBQTZCOUIsTUFBN0IsQ0FBcEI7QUFFSCxLQWZELE1BZ0JLLElBQUdzQixlQUFlLENBQUNRLFdBQUQsQ0FBZixDQUE2QnhELFFBQTdCLElBQXVDLElBQXZDLElBQStDN0ssUUFBUSxDQUFDMkIsTUFBM0QsRUFBa0U7QUFFbkVrTSxxQkFBZSxDQUFDUSxXQUFELENBQWYsQ0FBNkJ4RCxRQUE3QixHQUF3QyxLQUF4QztBQUNBZ0QscUJBQWUsQ0FBQ1EsV0FBRCxDQUFmLENBQTZCdkQsU0FBN0IsR0FBdUMsS0FBdkM7QUFDQStDLHFCQUFlLENBQUNRLFdBQUQsQ0FBZixDQUE2QnpCLE1BQTdCLEdBQXNDaUIsZUFBZSxDQUFDUSxXQUFELENBQWYsQ0FBNkJ6QixNQUE3QixHQUFvQyxDQUExRTs7QUFDQSxVQUFHeUIsV0FBVyxJQUFJLFFBQWYsSUFBMkJBLFdBQVcsSUFBSSxNQUE3QyxFQUFvRDtBQUNqRFIsdUJBQWUsQ0FBQ1EsV0FBRCxDQUFmLENBQTZCeEIsS0FBN0IsQ0FBbUNxQixNQUFuQyxDQUEwQyxDQUExQyxFQUE0QyxDQUE1QztBQUNGOztBQUVEL0IsMEJBQW9CLENBQUNDLE1BQUQsRUFBUWlDLFdBQVIsRUFBb0IsU0FBcEIsQ0FBcEI7QUFFSCxLQVhJLE1BWUQ7QUFDQXBPLFlBQU0sQ0FBQ1csSUFBUCxDQUFZLFFBQVo7QUFDSDs7QUFFRDZMLGVBQVcsQ0FBQ29CLGVBQUQsQ0FBWDtBQUVILEdBdkNEOztBQXlDQSxRQUFNUyxZQUFZLEdBQUMsTUFBSTtBQUNuQmhELGlCQUFhLENBQUNnQyxXQUFELEVBQWFsQixNQUFiLENBQWI7QUFDQW1CLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FGLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxHQUpEOztBQU9BLHNCQUNHLHFFQUFDLFVBQUQ7QUFBYSxTQUFLLEVBQUUxRCxLQUFwQjtBQUEyQixhQUFTLEVBQUVDLFNBQXRDO0FBQUEsZUFHUTtBQUNBRCxTQUFLLGdCQUVMO0FBQUEsOEJBQ0sscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFFSyxxRUFBQyxXQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLG1CQUFoQjtBQUFvQyxvQkFBVSxFQUFFO0FBQUMvQixrQkFBTSxFQUFDLEtBQVI7QUFBY0YscUJBQVMsRUFBQyxPQUF4QjtBQUFnQ0Qsc0JBQVUsRUFBQyxTQUEzQztBQUFxRFAscUJBQVMsRUFBQyxTQUEvRDtBQUF5RUQsaUJBQUssRUFBQyxPQUEvRTtBQUF1RkgsaUJBQUssRUFBQyxNQUE3RjtBQUFvR0Usa0JBQU0sRUFBQyxNQUEzRztBQUFrSFEsc0JBQVUsRUFBQztBQUE3SDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxlQUFLLEVBQUU7QUFBQytHLHNCQUFVLEVBQUMsTUFBWjtBQUFtQnRILGlCQUFLLEVBQUMsT0FBekI7QUFBaUN1SCxxQkFBUyxFQUFDO0FBQTNDLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkssR0FTSCxJQWJWLEVBaUJPO0FBQ0E1RSxhQUFTLGdCQUFJLHFFQUFDLGdEQUFEO0FBQU0sZUFBUyxFQUFDLHlCQUFoQjtBQUEwQyxnQkFBVSxFQUFFO0FBQUN6QyxnQkFBUSxFQUFDLFVBQVY7QUFBcUJFLFlBQUksRUFBQyxNQUExQjtBQUFpQ0QsV0FBRyxFQUFDLEtBQXJDO0FBQTJDSCxhQUFLLEVBQUM7QUFBakQ7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFKLEdBQWlJLElBbEJqSixFQXNCSztBQUNBLEtBQUMyQyxTQUFELGdCQUVHO0FBQUssU0FBRyxFQUFFb0QsR0FBVjtBQUFBLDhCQUVLLHFFQUFDLGdEQUFEO0FBQU0sa0JBQVUsRUFBRSxNQUFJO0FBQUNFLG9CQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXFCLFNBQTVDO0FBQThDLGlCQUFTLEVBQUMsbUJBQXhEO0FBQTRFLGtCQUFVLEVBQUU7QUFBQzlGLGtCQUFRLEVBQUMsVUFBVjtBQUFxQkcsZUFBSyxFQUFDLE1BQTNCO0FBQWtDRixhQUFHLEVBQUMsTUFBdEM7QUFBNkNILGVBQUssRUFBQzBDLEtBQUssR0FBRyxPQUFILEdBQWEsU0FBckU7QUFBK0UvQixnQkFBTSxFQUFDO0FBQXRGO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGTCxFQUlTcUYsT0FBTyxnQkFDUCxxRUFBQyxZQUFEO0FBQWMsY0FBTSxFQUFFLElBQXRCO0FBQUEsbUJBRVEsQ0FBQ3RELEtBQUQsZ0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsa0NBQ00scUVBQUMsWUFBRDtBQUFjLGlCQUFLLEVBQUU7QUFBQ1YscUJBQU8sRUFBQ2pKLFFBQVEsQ0FBQzJCLE1BQVQsR0FBa0IsTUFBbEIsR0FBMkI7QUFBcEMsYUFBckI7QUFBQSxvQ0FDSSxxRUFBQyxnREFBRDtBQUFNLHVCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLHdCQUFVLEVBQUU7QUFBQ21GLHFCQUFLLEVBQUMsTUFBUDtBQUFjSSx5QkFBUyxFQUFDLFNBQXhCO0FBQWtDRixzQkFBTSxFQUFDLE1BQXpDO0FBQWdEUSwwQkFBVSxFQUFDO0FBQTNEO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLG1CQUFLLEVBQUU7QUFBQ2lILDBCQUFVLEVBQUMsS0FBWjtBQUFrQnhILHFCQUFLLEVBQUM7QUFBeEIsZUFBWjtBQUFBLHNDQUNJO0FBQUcscUJBQUssRUFBRTtBQUFDQSx1QkFBSyxFQUFDO0FBQVAsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ3lILDBCQUFRLEVBQUM7QUFBVixpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUROLGVBUU0scUVBQUMsWUFBRDtBQUFBLG9DQUNJLHFFQUFDLGdEQUFEO0FBQU0sdUJBQVMsRUFBQyxhQUFoQjtBQUE4Qix3QkFBVSxFQUFFO0FBQUM1SCxxQkFBSyxFQUFDLE1BQVA7QUFBY0kseUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Ysc0JBQU0sRUFBQyxNQUF6QztBQUFnRFEsMEJBQVUsRUFBQztBQUEzRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSyxtQkFBSyxFQUFFO0FBQUNpSCwwQkFBVSxFQUFDLEtBQVo7QUFBa0J4SCxxQkFBSyxFQUFDO0FBQXhCLGVBQVo7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ0EsdUJBQUssRUFBQztBQUFQLGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBRyxxQkFBSyxFQUFFO0FBQUN5SCwwQkFBUSxFQUFDO0FBQVYsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsR0FnQnNCLElBbEI5QixFQXFCUXZFLE9BQU8sZ0JBQ1AscUVBQUMsWUFBRDtBQUFjLGlCQUFPLEVBQUUsTUFBSWdDLG9CQUFvQixDQUFDQyxNQUFELEVBQVFDLGFBQVIsRUFBc0IsU0FBdEIsRUFBZ0NDLFFBQWhDLEVBQXlDRCxhQUF6QyxDQUEvQztBQUFBLGtDQUNJLHFFQUFDLGdEQUFEO0FBQU0scUJBQVMsRUFBQyx3QkFBaEI7QUFBeUMsc0JBQVUsRUFBRTtBQUFDdkYsbUJBQUssRUFBQyxNQUFQO0FBQWNJLHVCQUFTLEVBQUMsU0FBeEI7QUFBa0NGLG9CQUFNLEVBQUMsTUFBekM7QUFBZ0RRLHdCQUFVLEVBQUM7QUFBM0Q7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssaUJBQUssRUFBRTtBQUFDaUgsd0JBQVUsRUFBQyxLQUFaO0FBQWtCeEgsbUJBQUssRUFBQztBQUF4QixhQUFaO0FBQUEsb0NBQ0k7QUFBRyxtQkFBSyxFQUFFO0FBQUNBLHFCQUFLLEVBQUM7QUFBUCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBRyxtQkFBSyxFQUFFO0FBQUN5SCx3QkFBUSxFQUFDO0FBQVYsZUFBVjtBQUFBLHdCQUE4QmY7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURPLEdBUUwsSUE3QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE8sR0FpQ0wsSUFyQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkg7QUFBQTtBQTRDRTtBQUNBO0FBQUssU0FBRyxFQUFFWCxHQUFWO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBVSxFQUFFLE1BQUk7QUFBQ0Usb0JBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBcUIsU0FBNUM7QUFBOEMsaUJBQVMsRUFBQyxtQkFBeEQ7QUFBNEUsa0JBQVUsRUFBRTtBQUFDOUYsa0JBQVEsRUFBQyxVQUFWO0FBQXFCRyxlQUFLLEVBQUMsTUFBM0I7QUFBa0NGLGFBQUcsRUFBQyxNQUF0QztBQUE2Q0gsZUFBSyxFQUFDO0FBQW5EO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUdNZ0csT0FBTyxpQkFDTixxRUFBQyxZQUFEO0FBQWMsY0FBTSxFQUFFLElBQXRCO0FBQUEsK0JBQ0cscUVBQUMsWUFBRDtBQUFBLGtDQUNJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLGlCQUFLLEVBQUU7QUFBQ3dCLHdCQUFVLEVBQUM7QUFBWixhQUFaO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwRVAsRUFxRlMsQ0FBQzlFLEtBQUQsaUJBQ0EscUVBQUMsVUFBRDtBQUFBLDZCQUNBO0FBQUssYUFBSyxFQUFFO0FBQUNWLGlCQUFPLEVBQUMsTUFBVDtBQUFnQkMsb0JBQVUsRUFBQyxRQUEzQjtBQUFvQ2xDLGdCQUFNLEVBQUMsTUFBM0M7QUFBa0R5SCxvQkFBVSxFQUFDO0FBQTdELFNBQVo7QUFBQSxnQ0FDSSxxRUFBQyxrQkFBRDtBQUFvQixnQkFBTSxFQUFFcEQsV0FBNUI7QUFBeUMsbUJBQVMsRUFBRXpCLFNBQXBEO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFO0FBQ1IrRSxzQkFBUSxFQUFFLFlBQVdwQyxNQUFPLEVBRHBCO0FBRVJxQyxtQkFBSyxFQUFDO0FBQUNDLG9CQUFJLEVBQUM7QUFBTjtBQUZFLGFBQVo7QUFBQSxtQ0FJQSxxRUFBQyxxRUFBRDtBQUFjLG1CQUFLLEVBQUVqRixTQUFTLEdBQUcsTUFBSCxHQUFZLE1BQTFDO0FBQWtELG9CQUFNLEVBQUVBLFNBQVMsR0FBRyxNQUFILEdBQVksTUFBL0U7QUFBdUYscUJBQU8sRUFBRTRCO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJO0FBQUssZUFBSyxFQUFFO0FBQUNpRCxzQkFBVSxFQUFDLE1BQVo7QUFBbUJDLG9CQUFRLEVBQUM7QUFBNUIsV0FBWjtBQUFBLGtDQUFpRDtBQUFHLGlCQUFLLEVBQUU7QUFBQ3pILG1CQUFLLEVBQUM7QUFBUCxhQUFWO0FBQUEsbUNBQzdDO0FBQUEsd0JBQVMyRSxRQUFRLEdBQUMsR0FBVCxHQUFhQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWpELGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUM0Qyx3QkFBVSxFQUFDLE1BQVo7QUFBbUJDLHNCQUFRLEVBQUMsTUFBNUI7QUFBbUNJLHlCQUFXLEVBQUMsTUFBL0M7QUFBc0Q3SCxtQkFBSyxFQUFDO0FBQTVELGFBQVo7QUFBQSxtQ0FBb0Y7QUFBQSx3QkFBTzhILGdFQUFhLENBQUNqRCxJQUFELENBQWIsQ0FBb0JrRCxJQUFwQixHQUEyQixHQUEzQixHQUFpQ0QsZ0VBQWEsQ0FBQ2pELElBQUQsQ0FBYixDQUFvQm1ELE9BQXJELEdBQStEO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRGVCxlQXdHSSxxRUFBQyxVQUFEO0FBQVksYUFBTyxFQUFFOUUsT0FBckI7QUFBQSxpQkFFUVAsU0FBUyxJQUFJRCxLQUFiLEdBQXFCLElBQXJCLGdCQUVDLHFFQUFDLFdBQUQ7QUFBQSwrQkFDSSxxRUFBQyxRQUFEO0FBQUEsaUNBQ1EscUVBQUMsR0FBRDtBQUFLLGVBQUcsRUFBRStCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlQsZUFVSyxxRUFBQyxhQUFEO0FBQWUsaUJBQVMsRUFBRTlCLFNBQTFCO0FBQUEsbUJBRVFBLFNBQVMsZ0JBRUwscUVBQUMsVUFBRDtBQUFZLG1CQUFTLEVBQUVBLFNBQXZCO0FBQUEsaUNBQ0k7QUFBRyxpQkFBSyxFQUFFO0FBQUM0RSx1QkFBUyxFQUFDLE1BQVg7QUFBa0JVLHVCQUFTLEVBQUM7QUFBNUIsYUFBVjtBQUFBLHNCQUFzRHpEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZLLEdBT0wsQ0FBQzlCLEtBQUQsZ0JBRUEscUVBQUMsVUFBRDtBQUFZLG1CQUFTLEVBQUVDLFNBQXZCO0FBQUEsa0NBRUk7QUFBSSxpQkFBSyxFQUFFO0FBQUNiLDBCQUFZLEVBQUMsTUFBZDtBQUFxQjlCLG1CQUFLLEVBQUM7QUFBM0IsYUFBWDtBQUFBLHNCQUFtRDBFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFJSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsZUFBWDtBQUEyQixjQUFFLEVBQUcsWUFBV1MsTUFBTyxFQUFsRDtBQUFBLG1DQUNJO0FBQUcsbUJBQUssRUFBRTtBQUFDb0MseUJBQVMsRUFBQyxNQUFYO0FBQWtCVSx5QkFBUyxFQUFDLEtBQTVCO0FBQWtDOUYsc0JBQU0sRUFBQztBQUF6QyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsR0FXRSxJQXBCZCxlQXVCSSxxRUFBQyxPQUFEO0FBQVMsaUJBQU8sRUFBRWUsT0FBbEI7QUFBQSxxQkFFUSxDQUFDUCxTQUFELGlCQUNDLHFFQUFDLFVBQUQ7QUFBWSxzQkFBVSxFQUFDLE9BQXZCO0FBQStCLGlCQUFLLEVBQUU7QUFBQ3VGLGtCQUFJLEVBQUM7QUFBTixhQUF0QztBQUFBLG9DQUNHLHFFQUFDLEtBQUQ7QUFBUSx3QkFBVSxFQUFDLGdCQUFuQjtBQUFvQyxzQkFBUSxFQUFFM0MsUUFBUSxDQUFDTSxNQUFULENBQWdCakMsUUFBOUQ7QUFBd0UsdUJBQVMsRUFBRTJCLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQmhDLFNBQW5HO0FBQThHLG1CQUFLLEVBQUUsT0FBckg7QUFBK0gscUJBQU8sRUFBRSxNQUFJc0QsU0FBUyxDQUFDLFFBQUQsQ0FBcko7QUFBa0ssdUJBQVMsRUFBQztBQUE1SztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBRUcscUVBQUMsT0FBRDtBQUFTLHFCQUFPLEVBQUUsTUFBSWxDLFVBQVUsQ0FBQ00sUUFBUSxDQUFDLFFBQUQsQ0FBUixDQUFtQkssS0FBcEIsRUFBMEIsUUFBMUIsQ0FBaEM7QUFBQSx3QkFBc0VMLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQkY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSFQsZUFRSSxxRUFBQyxVQUFEO0FBQVksc0JBQVUsRUFBQyxLQUF2QjtBQUE2QixpQkFBSyxFQUFFO0FBQUN1QyxrQkFBSSxFQUFDO0FBQU4sYUFBcEM7QUFBQSxvQ0FDSSxxRUFBQyxLQUFEO0FBQVEsd0JBQVUsRUFBQyxlQUFuQjtBQUFtQyxzQkFBUSxFQUFFM0MsUUFBUSxDQUFDRyxJQUFULENBQWM5QixRQUEzRDtBQUFxRSx1QkFBUyxFQUFFMkIsUUFBUSxDQUFDRyxJQUFULENBQWM3QixTQUE5RjtBQUF5RyxtQkFBSyxFQUFFLFNBQWhIO0FBQTRILHFCQUFPLEVBQUUsTUFBSXNELFNBQVMsQ0FBQyxNQUFELENBQWxKO0FBQTRKLHVCQUFTLEVBQUM7QUFBdEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLHFFQUFDLE9BQUQ7QUFBVSxxQkFBTyxFQUFFLE1BQUlsQyxVQUFVLENBQUNNLFFBQVEsQ0FBQyxNQUFELENBQVIsQ0FBaUJLLEtBQWxCLEVBQXdCLE1BQXhCLENBQWpDO0FBQUEsd0JBQW9FTCxRQUFRLENBQUNHLElBQVQsQ0FBY0M7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkosZUFZSSxxRUFBQyxVQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDdUMsa0JBQUksRUFBQztBQUFOLGFBQW5CO0FBQUEsdUJBRVF2RixTQUFTLGdCQUVULHFFQUFDLDZEQUFEO0FBQVkscUJBQU8sRUFBRSxNQUFJeUQsZ0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUF6QztBQUE0RCxtQkFBSyxFQUFFO0FBQUNuRyxxQkFBSyxFQUFDLE1BQVA7QUFBY21DLHNCQUFNLEVBQUM7QUFBckI7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGUyxnQkFNVCxxRUFBQyxLQUFEO0FBQU8sdUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJSLGVBVUk7QUFBTSxtQkFBSyxFQUFFO0FBQUNxRiwwQkFBVSxFQUFDLEtBQVo7QUFBa0J4SCxxQkFBSyxFQUFDO0FBQXhCLGVBQWI7QUFBQSx3QkFBMkM4RSxPQUFPLENBQUN4SjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSixlQXdCSSxxRUFBQyxVQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDNE0sa0JBQUksRUFBQyxDQUFOO0FBQVFsRyxxQkFBTyxFQUFDLE1BQWhCO0FBQXVCRSw0QkFBYyxFQUFDLFVBQXRDO0FBQWlEbEMsbUJBQUssRUFBQztBQUF2RCxhQUFuQjtBQUFBLG1DQUNJLHFFQUFDLEtBQUQ7QUFBUSxzQkFBUSxFQUFFdUYsUUFBUSxDQUFDTyxTQUFULENBQW1CbEMsUUFBckM7QUFBK0MsdUJBQVMsRUFBRTJCLFFBQVEsQ0FBQ08sU0FBVCxDQUFtQmpDLFNBQTdFO0FBQXdGLG1CQUFLLEVBQUUsT0FBL0Y7QUFBd0cscUJBQU8sRUFBRSxNQUFJc0QsU0FBUyxDQUFDLFdBQUQsQ0FBOUg7QUFBOEksdUJBQVMsRUFBQztBQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCSixFQW9EUWhCLGFBQWEsaUJBQ1oscUVBQUMsV0FBRDtBQUFBLGlDQUNHLHFFQUFDLDREQUFEO0FBQ0ksaUJBQUssRUFBRUUsV0FEWDtBQUVJLG9CQUFRLEVBQUc4QixDQUFELElBQUs3QixjQUFjLENBQUM2QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUZqQztBQUdJLHNCQUFVLEVBQUU7QUFDUkMsbUJBQUssRUFBQztBQUFDbkcsc0JBQU0sRUFBQztBQUFSLGVBREU7QUFFUm9HLDBCQUFZLGVBQUUscUVBQUMsaUVBQUQ7QUFBZ0IsdUJBQU8sRUFBRWxCLFlBQXpCO0FBQXVDLHFCQUFLLEVBQUU7QUFBQ3JILHVCQUFLLEVBQUNxRyxXQUFXLENBQUMvSyxNQUFaLEdBQXFCLENBQXJCLEdBQTBCLFNBQTFCLEdBQXFDO0FBQTVDLGlCQUE5QztBQUFtRyx3QkFBUSxFQUFDLEtBQTVHO0FBQUEsdUNBQWtILHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZOLGFBSGhCO0FBT0ksaUJBQUssRUFBQyxxQkFQVjtBQU9nQyxnQkFBSSxFQUFDLE9BUHJDO0FBTzZDLG1CQUFPLEVBQUM7QUFQckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXdMSDs7QUFHY2tOLHdIQUFLLENBQUNDLElBQU4sQ0FBV3RFLFdBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTXVFLFdBQVcsR0FBQy9JLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHVOQVVULENBQUM7QUFBQ3dIO0FBQUQsQ0FBRCxLQUFZQSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BVnRCLENBQWpCO0FBZUEsTUFBTUMsUUFBUSxHQUFDakosd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsc0ZBQWQ7QUFRQSxNQUFNMEgsUUFBUSxHQUFDbEosd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsOERBQWQ7QUFNQSxNQUFNMkgsYUFBYSxHQUFDbkosd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkRBQW5CO0FBS0EsTUFBTTRILEVBQUUsR0FBQ3BKLHdEQUFNLENBQUNxSixFQUFSO0FBQUE7QUFBQTtBQUFBLHVLQUFSLEMsQ0FlQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFDdEosd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkRBQWY7O0FBT0EsTUFBTStILFdBQVcsR0FBQyxDQUFDO0FBQUNDLFlBQUQ7QUFBWUM7QUFBWixDQUFELEtBQXlCO0FBRXZDLFFBQU07QUFBQ3JRLFlBQUQ7QUFBVWdCO0FBQVYsTUFBa0J3TSx3REFBVSxDQUFDQyxzRUFBRCxDQUFsQztBQUNBLFFBQU02QyxTQUFTLEdBQUNDLG9EQUFNLENBQUMsQ0FBQztBQUFDQyxRQUFJLEVBQUMsaUJBQU47QUFBd0JDLFFBQUksRUFBQyxlQUE3QjtBQUE2Q0MsUUFBSSxFQUFFO0FBQW5ELEdBQUQsRUFBNEQ7QUFBQ0YsUUFBSSxFQUFDLGtCQUFOO0FBQXlCQyxRQUFJLEVBQUMsY0FBOUI7QUFBNkNDLFFBQUksRUFBRTtBQUFuRCxHQUE1RCxDQUFELENBQXRCO0FBQ0EsUUFBTUMsVUFBVSxHQUFDSixvREFBTSxDQUFDLENBQUM7QUFBQ0MsUUFBSSxFQUFDLGFBQU47QUFBb0JDLFFBQUksRUFBQyxjQUF6QjtBQUF3Q0MsUUFBSSxFQUFDO0FBQTdDLEdBQUQsRUFBNkQ7QUFBQ0YsUUFBSSxFQUFDLGNBQU47QUFBcUJDLFFBQUksRUFBQyxlQUExQjtBQUEwQ0MsUUFBSSxFQUFDO0FBQS9DLEdBQTdELENBQUQsQ0FBdkI7QUFDQSxRQUFNRSxTQUFTLEdBQUNMLG9EQUFNLENBQUMsQ0FBQztBQUFDQyxRQUFJLEVBQUMscUJBQU47QUFBNEJDLFFBQUksRUFBQyxXQUFqQztBQUE2Q0MsUUFBSSxFQUFFO0FBQW5ELEdBQUQsQ0FBRCxDQUF0QjtBQUVBOUMseURBQVMsQ0FBQyxNQUFNO0FBRVp0TixXQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBUSxDQUFDMkIsTUFBckI7QUFFSCxHQUpRLEVBSU4sQ0FBQzNCLFFBQUQsQ0FKTSxDQUFUO0FBS0Esc0JBQ0k7QUFBQSxjQUdJZ0IsTUFBTSxnQkFFTixxRUFBQyxXQUFEO0FBQWEsWUFBTSxFQUFFcVAsUUFBckI7QUFBQSw2QkFDSSxxRUFBQyxRQUFEO0FBQUEsZ0NBSUEscUVBQUMsUUFBRDtBQUFBLGtDQUNBLHFFQUFDLGdEQUFEO0FBQU0sc0JBQVUsRUFBRSxNQUFJO0FBQUNELHdCQUFVLENBQUMsQ0FBQ0MsUUFBRixDQUFWO0FBQXNCLGFBQTdDO0FBQStDLHFCQUFTLEVBQUMsMkJBQXpEO0FBQXFGLHNCQUFVLEVBQUU7QUFBQ3ZKLG1CQUFLLEVBQUMsTUFBUDtBQUFjRSxvQkFBTSxFQUFDLE1BQXJCO0FBQTRCUSx3QkFBVSxFQUFDLE1BQXZDO0FBQThDUCxtQkFBSyxFQUFDLE9BQXBEO0FBQTREVSxvQkFBTSxFQUFDMEksUUFBUSxHQUFHLElBQUgsR0FBVVE7QUFBckY7QUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxlQUVJO0FBQUssaUJBQUssRUFBRTtBQUFDQywyQkFBYSxFQUFDO0FBQWYsYUFBWjtBQUFBLG9DQUNBLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRTlRLFFBQVEsQ0FBQzJCLE1BQVQsSUFBbUI7QUFDekJnTix3QkFBUSxFQUFFLFlBQVczTyxRQUFRLENBQUMyQixNQUFPLEVBRFo7QUFFekJpTixxQkFBSyxFQUFDO0FBQUNDLHNCQUFJLEVBQUM7QUFBTjtBQUZtQixlQUEvQjtBQUFBLHFDQUlHLHFFQUFDLHFFQUFEO0FBQWMsdUJBQU8sRUFBRSxVQUF2QjtBQUFvQyxxQkFBSyxFQUFFd0IsUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUEvRDtBQUF1RSxzQkFBTSxFQUFFQSxRQUFRLEdBQUcsTUFBSCxHQUFZO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBLGVBT0EscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFFclEsUUFBUSxDQUFDMkIsTUFBVCxJQUFtQjtBQUN6QmdOLHdCQUFRLEVBQUUsWUFBVzNPLFFBQVEsQ0FBQzJCLE1BQU8sRUFEWjtBQUV6QmlOLHFCQUFLLEVBQUM7QUFBQ0Msc0JBQUksRUFBQztBQUFOO0FBRm1CLGVBQS9CO0FBQUEscUNBSUc7QUFBSyxxQkFBSyxFQUFFO0FBQUNrQywyQkFBUyxFQUFDLE1BQVg7QUFBa0I5Six1QkFBSyxFQUFDLFNBQXhCO0FBQWtDdUgsMkJBQVMsRUFBQztBQUE1QyxpQkFBWjtBQUFBLHVDQUFtRTtBQUFBLDRCQUFPNkIsUUFBUSxHQUFHclEsUUFBUSxDQUFDZ0UsUUFBWixHQUF1QjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkEsZUFxQkEscUVBQUMsYUFBRDtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFUTtBQUFJLGlCQUFLLEVBQUU7QUFBQzhDLG1CQUFLLEVBQUMsTUFBUDtBQUFjK0IscUJBQU8sRUFBQyxLQUF0QjtBQUE0QkkscUJBQU8sRUFBQyxNQUFwQztBQUEyQytILDJCQUFhLEVBQUMsUUFBekQ7QUFBa0U5SCx3QkFBVSxFQUFDbUgsUUFBUSxHQUFHLFlBQUgsR0FBa0I7QUFBdkcsYUFBWDtBQUFBLHNCQUNLQyxTQUFTLENBQUNqTCxPQUFWLENBQWtCZ0UsR0FBbEIsQ0FBdUJDLElBQUQsaUJBQ25CLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxhQUFZQSxJQUFJLENBQUNvSCxJQUFLLEVBQW5DO0FBQXNDLGdCQUFFLEVBQUcsSUFBRzFRLFFBQVEsQ0FBQzJCLE1BQU8sSUFBRzJILElBQUksQ0FBQ29ILElBQUssRUFBM0U7QUFBQSxxQ0FDSSxxRUFBQyxFQUFEO0FBQUEsd0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSwyQkFBUyxFQUFFcEgsSUFBSSxDQUFDa0gsSUFBdEI7QUFBNEIsNEJBQVUsRUFBRTtBQUFDMUoseUJBQUssRUFBQ3VKLFFBQVEsR0FBRyxNQUFILEdBQVksTUFBM0I7QUFBa0NySiwwQkFBTSxFQUFDcUosUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUE3RDtBQUFvRTdJLDhCQUFVLEVBQUM2SSxRQUFRLEdBQUcsTUFBSCxHQUFZLE1BQW5HO0FBQTBHbkosNkJBQVMsRUFBQyxTQUFwSDtBQUE4SEQseUJBQUssRUFBQztBQUFwSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBRUk7QUFBTSx1QkFBSyxFQUFFO0FBQUNnQywyQkFBTyxFQUFDb0gsUUFBUSxHQUFHLE9BQUgsR0FBYSxNQUE5QjtBQUFxQzNCLDRCQUFRLEVBQUMsTUFBOUM7QUFBcURELDhCQUFVLEVBQUM7QUFBaEUsbUJBQWI7QUFBQSw0QkFBdUZuRixJQUFJLENBQUNtSDtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkEsZUFtQ0EscUVBQUMsYUFBRDtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFUTtBQUFJLGlCQUFLLEVBQUU7QUFBQzNKLG1CQUFLLEVBQUMsTUFBUDtBQUFjK0IscUJBQU8sRUFBQyxLQUF0QjtBQUE0QkkscUJBQU8sRUFBQyxNQUFwQztBQUEyQytILDJCQUFhLEVBQUMsUUFBekQ7QUFBa0U5SCx3QkFBVSxFQUFDbUgsUUFBUSxHQUFHLFlBQUgsR0FBa0I7QUFBdkcsYUFBWDtBQUFBLHNCQUNLTSxVQUFVLENBQUN0TCxPQUFYLENBQW1CZ0UsR0FBbkIsQ0FBd0JDLElBQUQsaUJBQ3BCLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQXNCLGdCQUFFLEVBQUcsR0FBRUEsSUFBSSxDQUFDb0gsSUFBSyxFQUF2QztBQUFBLHFDQUNJLHFFQUFDLEVBQUQ7QUFBQSx3Q0FDSSxxRUFBQyxnREFBRDtBQUFNLDJCQUFTLEVBQUVwSCxJQUFJLENBQUNrSCxJQUF0QjtBQUE0Qiw0QkFBVSxFQUFFO0FBQUMxSix5QkFBSyxFQUFDdUosUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUEzQjtBQUFrQ3JKLDBCQUFNLEVBQUNxSixRQUFRLEdBQUcsTUFBSCxHQUFZLE1BQTdEO0FBQW9FN0ksOEJBQVUsRUFBQzZJLFFBQVEsR0FBRyxNQUFILEdBQVksTUFBbkc7QUFBMEduSiw2QkFBUyxFQUFDLFNBQXBIO0FBQThIRCx5QkFBSyxFQUFDO0FBQXBJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFNLHVCQUFLLEVBQUU7QUFBQ2dDLDJCQUFPLEVBQUNvSCxRQUFRLEdBQUcsT0FBSCxHQUFhLE1BQTlCO0FBQXFDM0IsNEJBQVEsRUFBQyxNQUE5QztBQUFxREQsOEJBQVUsRUFBQztBQUFoRSxtQkFBYjtBQUFBLDRCQUF1Rm5GLElBQUksQ0FBQ21IO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5DQSxlQWdEQSxxRUFBQyxhQUFEO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVRO0FBQUksaUJBQUssRUFBRTtBQUFDM0osbUJBQUssRUFBQyxNQUFQO0FBQWMrQixxQkFBTyxFQUFDLEtBQXRCO0FBQTRCSSxxQkFBTyxFQUFDLE1BQXBDO0FBQTJDK0gsMkJBQWEsRUFBQyxRQUF6RDtBQUFrRTlILHdCQUFVLEVBQUNtSCxRQUFRLEdBQUcsWUFBSCxHQUFrQjtBQUF2RyxhQUFYO0FBQUEsc0JBQ0tPLFNBQVMsQ0FBQ3ZMLE9BQVYsQ0FBa0JnRSxHQUFsQixDQUF1QkMsSUFBRCxpQkFDbkIscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGtCQUFYO0FBQThCLGdCQUFFLEVBQUcsV0FBVXRKLFFBQVEsQ0FBQzJCLE1BQU8sRUFBN0Q7QUFBQSxxQ0FDSSxxRUFBQyxFQUFEO0FBQUEsd0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSwyQkFBUyxFQUFFMkgsSUFBSSxDQUFDa0gsSUFBdEI7QUFBNEIsNEJBQVUsRUFBRTtBQUFDMUoseUJBQUssRUFBQ3VKLFFBQVEsR0FBRyxNQUFILEdBQVksTUFBM0I7QUFBa0NySiwwQkFBTSxFQUFDcUosUUFBUSxHQUFHLE1BQUgsR0FBWSxNQUE3RDtBQUFvRTdJLDhCQUFVLEVBQUM2SSxRQUFRLEdBQUcsTUFBSCxHQUFZLE1BQW5HO0FBQTBHbkosNkJBQVMsRUFBQyxPQUFwSDtBQUE0SEQseUJBQUssRUFBQztBQUFsSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBRUk7QUFBTSx1QkFBSyxFQUFFO0FBQUNnQywyQkFBTyxFQUFDb0gsUUFBUSxHQUFHLE9BQUgsR0FBYSxNQUE5QjtBQUFxQzNCLDRCQUFRLEVBQUMsTUFBOUM7QUFBcURELDhCQUFVLEVBQUM7QUFBaEUsbUJBQWI7QUFBQSw0QkFBdUZuRixJQUFJLENBQUNtSDtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGTSxHQW1FSjtBQXRFTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE0RUgsQ0F4RkQ7O0FBMkZlTiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTWMsU0FBUyxHQUFHeEgsbUVBQUgsZ0VBQWY7QUFTQSxNQUFNeUgsT0FBTyxHQUFHdEssd0RBQU0sQ0FBQ3dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVFBQ0U2SSxTQURGLENBQWI7QUFjQSxNQUFNRSxTQUFTLEdBQUN2Syx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSwrSUFBZjtBQVdBLE1BQU1nSixXQUFXLEdBQUN4Syx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSw0SUFBakI7QUFZQSxNQUFNaUosVUFBVSxHQUFDekssd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsbUtBSUcsQ0FBQztBQUFDa0o7QUFBRCxDQUFELEtBQWFBLE9BQU8sR0FBRyxFQUFILEdBQVEsRUFKL0IsQ0FBaEI7QUFhQSxNQUFNQyxXQUFXLEdBQUMzSyx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxpR0FFUCxDQUFDO0FBQUMrRztBQUFELENBQUQsS0FBVUEsSUFGSCxFQUtILENBQUM7QUFBQ3FDO0FBQUQsQ0FBRCxLQUFXQSxLQUxSLENBQWpCO0FBU0EsTUFBTUMsS0FBSyxHQUFDN0ssd0RBQU0sQ0FBQzhLLEtBQVI7QUFBQTtBQUFBO0FBQUEsK0tBQVg7QUFjQSxNQUFNQyxVQUFVLEdBQUMvSyx3REFBTSxDQUFDZ0UsQ0FBUjtBQUFBO0FBQUE7QUFBQSxzRUFBaEI7QUFNQSxNQUFNRyxZQUFZLEdBQUNuRSx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxzUEFHVCxDQUFDO0FBQUN3SjtBQUFELENBQUQsS0FBZUEsU0FBUyxHQUFHLE9BQUgsR0FBYSxFQUg1QixDQUFsQjtBQVlBLE1BQU1DLFdBQVcsR0FBQ2pMLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLFFBQWpCO0FBSUEsTUFBTTBKLFNBQVMsR0FBQ2xMLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHlmQUFmO0FBa0NBLE1BQU0ySixjQUFjLEdBQUNuTCx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSx1SkFBcEIsQyxDQWFBOztBQUNlLFNBQVM0SixVQUFULENBQW9CO0FBQUNDLE1BQUQ7QUFBTUMsT0FBTjtBQUFZQyxZQUFaO0FBQXVCQztBQUF2QixDQUFwQixFQUFtRDtBQUc5RCxRQUFNO0FBQUNwUixVQUFEO0FBQVFxUixXQUFSO0FBQWdCclMsWUFBaEI7QUFBeUJOLGNBQXpCO0FBQW9DSyxlQUFwQztBQUFnRE47QUFBaEQsTUFBNkQrTix3REFBVSxDQUFDQyxzRUFBRCxDQUE3RTtBQUNBLFFBQU07QUFBQ1QsT0FBRDtBQUFLQyxXQUFMO0FBQWFDO0FBQWIsTUFBMkJvRixtRUFBYyxFQUEvQztBQUNBLFFBQU07QUFBQ3RGLE9BQUcsRUFBQ3VGLElBQUw7QUFBVXRGLFdBQU8sRUFBQ3VGLFFBQWxCO0FBQTJCdEYsY0FBVSxFQUFDdUY7QUFBdEMsTUFBcURILG1FQUFjLEVBQXpFLENBTDhELENBTTlEOztBQUNBLFFBQU07QUFBQSxPQUFDdk0sVUFBRDtBQUFBLE9BQVkyTTtBQUFaLE1BQTZCaEcsc0RBQVEsQ0FBQyxFQUFELENBQTNDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpRyxjQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW1DbEcsc0RBQVEsQ0FBQyxFQUFELENBQWpEO0FBQ0EsUUFBTTtBQUFBLE9BQUNtRyxZQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUErQnBHLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU9xRyxLQUFLLEdBQUd4QyxvREFBTSxFQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDeUMsV0FBRDtBQUFBLE9BQWFDO0FBQWIsTUFBNkJ2RyxzREFBUSxDQUFDLEVBQUQsQ0FBM0M7QUFDQSxRQUFNO0FBQUEsT0FBQ3dHLFNBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTRCekcsc0RBQVEsQ0FBQyxDQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUMwRyxVQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE2QjNHLHNEQUFRLENBQUM7QUFDeEMsT0FBRTtBQUNBMUUsZUFBUyxFQUFDLGFBRFY7QUFFQXNMLFdBQUssRUFBQyxLQUZOO0FBR0E5TCxnQkFBVSxFQUFDLE1BSFg7QUFJQStMLFdBQUssRUFBQztBQUpOLEtBRHNDO0FBUXhDLE9BQUU7QUFDQXZMLGVBQVMsRUFBQyxhQURWO0FBRUFzTCxXQUFLLEVBQUMsS0FGTjtBQUdBOUwsZ0JBQVUsRUFBQyxNQUhYO0FBSUErTCxXQUFLLEVBQUMsTUFKTjtBQUtBQyxtQkFBYSxFQUFDO0FBTGQsS0FSc0M7QUFleEMsT0FBRTtBQUNBeEwsZUFBUyxFQUFDLGtCQURWO0FBRUFzTCxXQUFLLEVBQUMsS0FGTjtBQUdBOUwsZ0JBQVUsRUFBQyxNQUhYO0FBSUErTCxXQUFLLEVBQUM7QUFKTjtBQWZzQyxHQUFELENBQTNDO0FBd0JBalQsU0FBTyxDQUFDQyxHQUFSLENBQVlvUyxjQUFaO0FBQ0EvRSx5REFBUyxDQUFDLE1BQUk7QUFDWjtBQUNBLFFBQUcsQ0FBQzRFLFFBQUosRUFDQUUsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBSSxtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUVELEdBTlEsRUFNUCxDQUFDTixRQUFELENBTk8sQ0FBVDs7QUFRQSxRQUFNaUIsTUFBTSxHQUFFLE1BQUk7QUFDZDNTLDJEQUFNLENBQUM7QUFDSHJCLGVBQVMsRUFBQ0EsU0FEUDtBQUVITSxpQkFBVyxFQUFDQSxXQUZUO0FBR0hMLGdCQUFVLEVBQUNBO0FBSFIsS0FBRCxDQUFOO0FBS0gsR0FORDs7QUFRQSxRQUFNZ1UsYUFBYSxHQUFDLE1BQUk7QUFFckJwVCxXQUFPLENBQUNDLEdBQVIsQ0FBWXdGLFVBQVo7O0FBQ0EsUUFBR0EsVUFBVSxLQUFLLEVBQWxCLEVBQXFCO0FBQ2hCK00scUJBQWUsQ0FBQyxTQUFELENBQWY7QUFDQWhOLDJFQUFvQixDQUFDO0FBQ2pCQyxrQkFBVSxFQUFDQSxVQURNO0FBRWpCQyxnQkFBUSxFQUFDNE0saUJBRlE7QUFHakJ6UyxpQkFBUyxFQUFDMlM7QUFITyxPQUFELENBQXBCO0FBS0o7QUFFSCxHQVpEOztBQWNBLFFBQU1hLGNBQWMsR0FBQyxNQUFJO0FBRXJCLFFBQUdaLEtBQUssQ0FBQzFOLE9BQU4sQ0FBY3VPLFNBQWQsR0FBMEJiLEtBQUssQ0FBQzFOLE9BQU4sQ0FBY3dPLFlBQXhDLElBQXdEZCxLQUFLLENBQUMxTixPQUFOLENBQWN5TyxZQUF6RSxFQUFzRjtBQUNsRjNCLGdCQUFVLENBQUNhLFdBQVcsR0FBQ2YsSUFBSSxDQUFDMVAsTUFBbEIsQ0FBVjtBQUNIO0FBRUosR0FORDs7QUFRQSxRQUFNd1IsYUFBYSxHQUFFM0UsQ0FBRCxJQUFLO0FBQ3BCcUQsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBQyxpQkFBYSxDQUFDdEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNKLEdBSEQ7O0FBS0EsUUFBTTBFLFVBQVUsR0FBRUMsVUFBRCxJQUFjO0FBRTNCLFVBQU1DLFFBQVEscUJBQUtkLFVBQUwsQ0FBZDs7QUFFQWUsVUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JwRyxPQUF0QixDQUE4QnVHLEdBQUcsSUFBRztBQUNoQyxVQUFHSixVQUFVLEtBQUtJLEdBQWxCLEVBQXNCO0FBQ2xCSCxnQkFBUSxDQUFDRyxHQUFELENBQVIsQ0FBY2YsS0FBZCxHQUFvQixLQUFwQjtBQUNIO0FBRUosS0FMRDs7QUFPQSxRQUFHWSxRQUFRLENBQUNELFVBQUQsQ0FBUixDQUFxQlgsS0FBeEIsRUFBOEI7QUFFMUJZLGNBQVEsQ0FBQ0QsVUFBRCxDQUFSLENBQXFCWCxLQUFyQixHQUEyQixLQUEzQjtBQUNBSCxtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUVILEtBTEQsTUFNSTtBQUVBZSxjQUFRLENBQUNELFVBQUQsQ0FBUixDQUFxQlgsS0FBckIsR0FBMkIsSUFBM0I7QUFDQUgsbUJBQWEsQ0FBQ2MsVUFBRCxDQUFiO0FBRUg7O0FBRURaLGlCQUFhLENBQUNhLFFBQUQsQ0FBYjtBQUNBaEgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUVILEdBM0JEOztBQTZCQSxRQUFNb0gsU0FBUyxHQUFDLENBQUNoTCxJQUFELEVBQU1pTCxTQUFOLEtBQWtCO0FBQzlCO0FBQ0EsUUFBR0EsU0FBUyxJQUFJLE1BQWIsSUFBdUJuQixVQUFVLENBQUM5SixJQUFELENBQVYsQ0FBaUJnSyxLQUFqQixJQUEwQixLQUFwRCxFQUNBO0FBQ0lsQixZQUFNO0FBQ1Q7O0FBR0Q0QixjQUFVLENBQUMxSyxJQUFELENBQVY7QUFDSCxHQVREOztBQVdBLE1BQUlrTCxVQUFVLEdBQUMsRUFBZjs7QUFFQSxNQUFHM0IsWUFBWSxJQUFJLFNBQW5CLEVBQTZCO0FBQ3pCMkIsY0FBVSxnQkFBQztBQUFLLFdBQUssRUFBRTtBQUFDdkwsZUFBTyxFQUFDLE1BQVQ7QUFBZ0JFLHNCQUFjLEVBQUMsUUFBL0I7QUFBd0NELGtCQUFVLEVBQUMsUUFBbkQ7QUFBNERsQyxjQUFNLEVBQUM7QUFBbkUsT0FBWjtBQUFBLDZCQUF3RixxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFYO0FBQ0gsR0FGRCxNQUdLLElBQUc2TCxZQUFZLElBQUksU0FBbkIsRUFBNkI7QUFDOUIyQixjQUFVLGdCQUFDO0FBQUssV0FBSyxFQUFFO0FBQUN2TCxlQUFPLEVBQUMsTUFBVDtBQUFnQkUsc0JBQWMsRUFBQyxRQUEvQjtBQUF3Q0Qsa0JBQVUsRUFBQyxRQUFuRDtBQUE0RGxDLGNBQU0sRUFBQztBQUFuRSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVg7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0kscUVBQUMsV0FBRDtBQUFBLDhCQUNHLHFFQUFDLFdBQUQ7QUFBYSxZQUFJLEVBQUUsT0FBbkI7QUFBQSwrQkFDSyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBSyxpQkFBSyxFQUFFO0FBQUNpQyxxQkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHdCQUFVLEVBQUMsUUFBM0I7QUFBb0NFLG9CQUFNLEVBQUM7QUFBM0MsYUFBWjtBQUFBLG9DQUNJLHFFQUFDLHFFQUFEO0FBQWMscUJBQU8sRUFBQyxzREFBdEI7QUFBNkUsbUJBQUssRUFBQyxNQUFuRjtBQUEwRixvQkFBTSxFQUFDO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLG1CQUFLLEVBQUU7QUFBQ3FGLDBCQUFVLEVBQUMsTUFBWjtBQUFtQmdHLDRCQUFZLEVBQUMsTUFBaEM7QUFBdUNDLDJCQUFXLEVBQUM7QUFBbkQsZUFBWjtBQUFBLHFDQUFtRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBSyxtQkFBSyxFQUFFO0FBQUNqRywwQkFBVSxFQUFDLE1BQVo7QUFBbUJ4Rix1QkFBTyxFQUFDLE1BQTNCO0FBQWtDQywwQkFBVSxFQUFDO0FBQTdDLGVBQVo7QUFBQSxxQ0FBb0UscUVBQUMsd0RBQUQ7QUFBTSxxQkFBSyxFQUFFO0FBQUN3RiwwQkFBUSxFQUFDLE1BQVY7QUFBaUJ6SCx1QkFBSyxFQUFDO0FBQXZCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFVRyxxRUFBQyxXQUFEO0FBQWMsV0FBRyxFQUFFc0wsSUFBbkI7QUFBeUIsYUFBSyxFQUFFLE1BQWhDO0FBQXdDLFlBQUksRUFBRSxLQUE5QztBQUFBLGdDQUNLLHFFQUFDLEtBQUQ7QUFBTyxpQkFBTyxFQUFFbUIsYUFBaEI7QUFBK0IsZUFBSyxFQUFFM04sVUFBdEM7QUFBa0Qsa0JBQVEsRUFBRWdPLGFBQTVEO0FBQTJFLHFCQUFXLEVBQUM7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETCxFQUdTaE8sVUFBVSxDQUFDeEQsTUFBWCxJQUFxQixDQUFyQixnQkFDQTtBQUFLLGVBQUssRUFBRTtBQUFDNEUsb0JBQVEsRUFBQyxVQUFWO0FBQXFCRyxpQkFBSyxFQUFDLE1BQTNCO0FBQWtDRixlQUFHLEVBQUMsTUFBdEM7QUFBNkNOLGlCQUFLLEVBQUM7QUFBbkQsV0FBWjtBQUFBLGlDQUNHLHFFQUFDLFVBQUQ7QUFBWSxxQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGdCQUtBO0FBQUssaUJBQU8sRUFBRSxNQUFJMkwsV0FBVyxDQUFDLEtBQUQsQ0FBN0I7QUFBc0MsZUFBSyxFQUFFO0FBQUN0TCxvQkFBUSxFQUFDLFVBQVY7QUFBcUJHLGlCQUFLLEVBQUMsTUFBM0I7QUFBa0NGLGVBQUcsRUFBQyxNQUF0QztBQUE2Q04saUJBQUssRUFBQyxNQUFuRDtBQUEwRHNDLGtCQUFNLEVBQUM7QUFBakUsV0FBN0M7QUFBQSxpQ0FDRyxxRUFBQyxVQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSVCxFQWNTckQsVUFBVSxDQUFDeEQsTUFBWCxHQUFvQixDQUFwQixJQUF5QmlRLFFBQVEsSUFBSSxJQUFyQyxpQkFFQSxxRUFBQyxTQUFEO0FBQUEsb0JBR1FLLFlBQVksQ0FBQ3RRLE1BQWIsR0FBc0IsQ0FBdEIsZ0JBSUEscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsc0JBQWlCaVM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKQSxHQVFBN0IsY0FBYyxDQUFDdEosR0FBZixDQUFvQkMsSUFBRCxJQUFRO0FBRXZCLGdDQUFPLHFFQUFDLGNBQUQ7QUFBZ0IscUJBQU8sRUFBRSxNQUFJb0osYUFBYSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxxQ0FDQyxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUU7QUFDUi9ELDBCQUFRLEVBQUUsWUFBV3JGLElBQUksQ0FBQ3ZGLEVBQUcsRUFEckI7QUFFUjZLLHVCQUFLLEVBQUM7QUFBQ0Msd0JBQUksRUFBQztBQUFOO0FBRkUsaUJBQVo7QUFBQSx1Q0FLSTtBQUFLLHVCQUFLLEVBQUU7QUFBQzVGLDJCQUFPLEVBQUM7QUFBVCxtQkFBWjtBQUFBLDBDQUNJO0FBQUEsMkNBQ0kscUVBQUMscUVBQUQ7QUFBYyw2QkFBTyxFQUFDLFlBQXRCO0FBQW1DLDJCQUFLLEVBQUMsTUFBekM7QUFBZ0QsNEJBQU0sRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUlJO0FBQUsseUJBQUssRUFBRTtBQUFDMEwsaUNBQVcsRUFBQztBQUFiLHFCQUFaO0FBQUEsNENBQ0k7QUFBRywyQkFBSyxFQUFFO0FBQUNDLGtDQUFVLEVBQUM7QUFBWix1QkFBVjtBQUFBLGdDQUErQnRMLElBQUksQ0FBQ3JGLFNBQUwsR0FBZSxHQUFmLEdBQW1CcUYsSUFBSSxDQUFDbkY7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUcsMkJBQUssRUFBRTtBQUFDOEMsNkJBQUssRUFBQyxXQUFQO0FBQW1CeUgsZ0NBQVEsRUFBQztBQUE1Qix1QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFpQkgsV0FuQkQ7QUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSCxFQThETyxDQUFDMkQsT0FBRCxnQkFJQyxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxHQVFBLENBQUNyUixNQUFELGdCQUlBLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSyxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQUEsaUNBQ0MscUVBQUMsd0RBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGlCQUFLLEVBQUU7QUFBQzhOLHlCQUFXLEVBQUMsTUFBYjtBQUFvQitGLDJCQUFhLEVBQUM7QUFBbEMsYUFBbkM7QUFBb0YsbUJBQU8sZUFBRSxxRUFBQyxpRUFBRDtBQUFlLG1CQUFLLEVBQUU7QUFBQ25HLHdCQUFRLEVBQUM7QUFBVjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREwsZUFNSSxxRUFBQyx3REFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNkIsZUFBSyxFQUFFO0FBQUNtRyx5QkFBYSxFQUFDO0FBQWYsV0FBcEM7QUFBa0UsaUJBQU8sZUFBRSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQzVOLG1CQUFLLEVBQUMsT0FBUDtBQUFlNk4sMEJBQVksRUFBQyxLQUE1QjtBQUFrQ3BHLHNCQUFRLEVBQUM7QUFBM0M7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBM0U7QUFBaUssZUFBSyxFQUFDLFdBQXZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGdCQWVDLHFFQUFDLFdBQUQ7QUFBYyxhQUFLLEVBQUUsTUFBckI7QUFBNkIsV0FBRyxFQUFFMUIsR0FBbEM7QUFBdUMsWUFBSSxFQUFFLE1BQTdDO0FBQUEsbUJBRVFtSCxNQUFNLENBQUNDLElBQVAsQ0FBWWhCLFVBQVosRUFBd0IvSixHQUF4QixDQUE2QkMsSUFBRCxJQUFRO0FBQ2hDLDhCQUNJLHFFQUFDLFVBQUQ7QUFBWSxtQkFBTyxFQUFFOEosVUFBVSxDQUFDOUosSUFBRCxDQUFWLENBQWlCZ0ssS0FBdEM7QUFBNkMsbUJBQU8sRUFBRSxNQUFJZ0IsU0FBUyxDQUFDaEwsSUFBRCxFQUFNOEosVUFBVSxDQUFDOUosSUFBRCxDQUFWLENBQWlCaUssS0FBdkIsQ0FBbkU7QUFBQSxtQ0FDSTtBQUFNLG1CQUFLLEVBQUU7QUFBQ3RLLHVCQUFPLEVBQUMsT0FBVDtBQUFpQkgsK0JBQWUsRUFBQyxTQUFqQztBQUEyQ2dNLDRCQUFZLEVBQUMsS0FBeEQ7QUFBOERoTyxxQkFBSyxFQUFDLE1BQXBFO0FBQTJFRSxzQkFBTSxFQUFDLE1BQWxGO0FBQXlGd0gseUJBQVMsRUFBQyxRQUFuRztBQUE0R3VHLDBCQUFVLEVBQUMzQixVQUFVLENBQUM5SixJQUFELENBQVYsQ0FBaUI5QjtBQUF4SSxlQUFiO0FBQUEsc0NBQ0k7QUFBRyx5QkFBUyxFQUFFNEwsVUFBVSxDQUFDOUosSUFBRCxDQUFWLENBQWlCdEIsU0FBL0I7QUFBMEMscUJBQUssRUFBRTtBQUFDZix1QkFBSyxFQUFDaUwsS0FBSyxHQUFHLENBQVIsSUFBYWtCLFVBQVUsQ0FBQzlKLElBQUQsQ0FBVixDQUFpQmlLLEtBQWpCLElBQTBCLE1BQXZDLEdBQWdELFNBQWhELEdBQTREO0FBQW5FO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFHUUgsVUFBVSxDQUFDOUosSUFBRCxDQUFWLENBQWlCaUssS0FBakIsSUFBMEIsTUFBMUIsSUFBb0NyQixLQUFLLEdBQUcsQ0FBNUMsZ0JBQ0M7QUFBTSxxQkFBSyxFQUFFO0FBQUMvSywwQkFBUSxFQUFDLFVBQVY7QUFBcUJ1SCwwQkFBUSxFQUFDLE1BQTlCO0FBQXFDdEgscUJBQUcsRUFBQyxNQUF6QztBQUFnREUsdUJBQUssRUFBQyxNQUF0RDtBQUE2RFIsdUJBQUssRUFBQyxNQUFuRTtBQUEwRW1DLHlCQUFPLEVBQUMsT0FBbEY7QUFBMEZqQyx3QkFBTSxFQUFDLE1BQWpHO0FBQXdHd0gsMkJBQVMsRUFBQyxRQUFsSDtBQUEySHVHLDRCQUFVLEVBQUMsTUFBdEk7QUFBNklqTSxpQ0FBZSxFQUFDLFNBQTdKO0FBQXVLN0IsdUJBQUssRUFBQyxPQUE3SztBQUFxTDZOLDhCQUFZLEVBQUM7QUFBbE0saUJBQWI7QUFBQSwwQkFBd041QztBQUF4TjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEdBQzBPLElBSmxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFXSCxTQVpELENBRlIsZUFrQksscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUU7QUFDVHZELG9CQUFRLEVBQUUsWUFBVzNPLFFBQVEsQ0FBQzJCLE1BQU8sRUFENUI7QUFFVGlOLGlCQUFLLEVBQUM7QUFBQ0Msa0JBQUksRUFBQztBQUFOO0FBRkcsV0FBWjtBQUFBLGlDQUlFLHFFQUFDLHFFQUFEO0FBQWMsaUJBQUssRUFBQyxNQUFwQjtBQUEyQixrQkFBTSxFQUFDLE1BQWxDO0FBQXlDLG1CQUFPLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJMLEVBMkJRcUUsU0FBUyxLQUFLLENBQWQsSUFBbUJqRyxPQUFPLElBQUksSUFBOUIsZ0JBQ0EscUVBQUMsWUFBRDtBQUFjLGtCQUFRLEVBQUUwRyxjQUF4QjtBQUF3QyxhQUFHLEVBQUVaLEtBQTdDO0FBQW9ELG1CQUFTLEVBQUVLLFVBQVUsQ0FBQyxHQUFELENBQVYsQ0FBZ0JFLEtBQS9FO0FBQUEsaUNBQ0kscUVBQUMsV0FBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQVUsb0JBQU0sRUFBRUcsTUFBbEI7QUFBMEIscUJBQU8sRUFBRXhCLElBQW5DO0FBQXlDLHVCQUFTLEVBQUVpQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsR0FLa0IsSUFoQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpSUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hhRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNOEIsVUFBVSxHQUFDcE8sd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsK0xBU0csQ0FBQztBQUFDNk07QUFBRCxDQUFELEtBQVlBLEtBQUssSUFBSSxLQUFULEdBQWlCLFNBQWpCLEdBQTZCLEVBVDVDLENBQWhCO0FBZWUsU0FBU0MsZUFBVCxDQUF5QjtBQUFDQyxXQUFEO0FBQVdDLFNBQVg7QUFBbUJDLFNBQW5CO0FBQTJCNUI7QUFBM0IsQ0FBekIsRUFBNEQ7QUFDdkUsUUFBTTtBQUFDaFUsYUFBRDtBQUFXTSxlQUFYO0FBQXVCTCxjQUF2QjtBQUFrQ3NCO0FBQWxDLE1BQTRDd00sd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBNUQ7QUFDQW5OLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxTQUFaO0FBQ0EsUUFBTTtBQUFBLE9BQUM2VixNQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFrQjdJLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUVBLE1BQUk4SSxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUk3SixLQUFLLEdBQUcsRUFBWjs7QUFFQSxNQUFHd0osU0FBUyxJQUFJLENBQWhCLEVBQWtCO0FBQ2hCeEosU0FBSyxHQUFHLFNBQVI7QUFDQTZKLFlBQVEsZ0JBQUcscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsOEJBQ0cscUVBQUMsVUFBRDtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sbUJBQVMsRUFBQyxhQUFoQjtBQUE4QixvQkFBVSxFQUFFO0FBQUMxTyxpQkFBSyxFQUFDLE1BQVA7QUFBY0kscUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Ysa0JBQU0sRUFBQyxNQUF6QztBQUFnRFEsc0JBQVUsRUFBQztBQUEzRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ2lILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0Msc0JBQVEsRUFBQztBQUFWLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBUUcscUVBQUMsVUFBRDtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFnQyxvQkFBVSxFQUFFO0FBQUM1SCxpQkFBSyxFQUFDLE1BQVA7QUFBY0kscUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Ysa0JBQU0sRUFBQyxNQUF6QztBQUFnRFEsc0JBQVUsRUFBQztBQUEzRDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ2lILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0Msc0JBQVEsRUFBQztBQUFWLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFYO0FBZ0JEOztBQUNELE1BQUd5RyxTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFFZHhKLFNBQUssR0FBQyxhQUFOO0FBRUEsVUFBTThKLGNBQWMsR0FBQyxDQUNqQjtBQUFDNUcsVUFBSSxFQUFDLE1BQU47QUFBYTZHLFlBQU0sRUFBQyxXQUFwQjtBQUFnQ2pGLFVBQUksRUFBQywwQkFBckM7QUFBZ0UxSSxVQUFJLEVBQUMsa0JBQXJFO0FBQXdGZCxXQUFLLEVBQUMsU0FBOUY7QUFBd0cwTyxRQUFFLEVBQUMsTUFBM0c7QUFBa0hDLFVBQUksRUFBQztBQUF2SCxLQURpQixFQUVqQjtBQUFDL0csVUFBSSxFQUFDLFFBQU47QUFBZTZHLFlBQU0sRUFBQyxXQUF0QjtBQUFrQ2pGLFVBQUksRUFBQyw2QkFBdkM7QUFBcUUxSSxVQUFJLEVBQUMsa0JBQTFFO0FBQTZGZCxXQUFLLEVBQUMsU0FBbkc7QUFBNkcwTyxRQUFFLEVBQUMsTUFBaEg7QUFBdUhDLFVBQUksRUFBQztBQUE1SCxLQUZpQixFQUdqQjtBQUFDL0csVUFBSSxFQUFDLFFBQU47QUFBZTZHLFlBQU0sRUFBQyxRQUF0QjtBQUErQmpGLFVBQUksRUFBQyxpQkFBcEM7QUFBc0QxSSxVQUFJLEVBQUMsd0JBQTNEO0FBQW9GZCxXQUFLLEVBQUMsU0FBMUY7QUFBb0cwTyxRQUFFLEVBQUMsTUFBdkc7QUFBOEdDLFVBQUksRUFBQztBQUFuSCxLQUhpQixFQUlqQjtBQUFDL0csVUFBSSxFQUFDLFNBQU47QUFBZ0I2RyxZQUFNLEVBQUMsV0FBdkI7QUFBbUNqRixVQUFJLEVBQUMsd0JBQXhDO0FBQWlFMUksVUFBSSxFQUFDLHFCQUF0RTtBQUE0RmQsV0FBSyxFQUFDLFNBQWxHO0FBQTRHME8sUUFBRSxFQUFDLE1BQS9HO0FBQXNIQyxVQUFJLEVBQUM7QUFBM0gsS0FKaUIsRUFLakI7QUFBQy9HLFVBQUksRUFBQyxNQUFOO0FBQWE0QixVQUFJLEVBQUMsMkJBQWxCO0FBQThDMUksVUFBSSxFQUFDLGFBQW5EO0FBQWlFZCxXQUFLLEVBQUMsU0FBdkU7QUFBaUYwTyxRQUFFLEVBQUM7QUFBcEYsS0FMaUIsRUFNakI7QUFBQzlHLFVBQUksRUFBQyxRQUFOO0FBQWU0QixVQUFJLEVBQUMsMEJBQXBCO0FBQStDMUksVUFBSSxFQUFDO0FBQXBELEtBTmlCLENBQXJCOztBQVFBLFFBQUdzTixPQUFPLENBQUM5UyxNQUFSLElBQWtCLENBQXJCLEVBQ0E7QUFDSWlULGNBQVEsZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWDtBQUNIOztBQUVELFFBQUdILE9BQU8sQ0FBQzlTLE1BQVIsR0FBaUIsQ0FBcEIsRUFDQTtBQUVJaVQsY0FBUSxnQkFFUCxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxrQkFFSUgsT0FBTyxDQUFDaE0sR0FBUixDQUFZLENBQUNDLElBQUQsRUFBTXVNLEtBQU4sS0FBYztBQUN2QjtBQUNBLGNBQUlDLFNBQVMsR0FBQyxFQUFkOztBQUdBLGVBQUssSUFBSWxMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2SyxjQUFjLENBQUNsVCxNQUFuQyxFQUEyQ3FJLENBQUMsRUFBNUMsRUFBZ0Q7QUFFNUMsZ0JBQUd0QixJQUFJLENBQUN0RyxTQUFMLElBQWtCeVMsY0FBYyxDQUFDN0ssQ0FBRCxDQUFkLENBQWtCaUUsSUFBdkMsRUFBNEM7QUFFeENpSCx1QkFBUyxHQUFHTCxjQUFjLENBQUM3SyxDQUFELENBQTFCO0FBRUg7QUFFSjs7QUFFRCxjQUFHdEIsSUFBSSxDQUFDMUgsU0FBTCxJQUFrQixJQUFsQixJQUEwQjBILElBQUksQ0FBQy9DLFNBQUwsSUFBa0IsSUFBL0MsRUFBb0QsQ0FFbkQ7O0FBRUQsOEJBQVEscUVBQUMsVUFBRDtBQUF3QixpQkFBSyxFQUFFK0MsSUFBSSxDQUFDeU0sU0FBcEM7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUU7QUFBQ3BILHdCQUFRLEVBQUUsR0FBRW1ILFNBQVMsQ0FBQ0YsSUFBSyxJQUFHdE0sSUFBSSxDQUFDd00sU0FBUyxDQUFDSixNQUFYLENBQW1CLEVBQXREO0FBQXdEOUcscUJBQUssRUFBQztBQUFDQyxzQkFBSSxFQUFDO0FBQU47QUFBOUQsZUFBWjtBQUFBLHFDQUNFO0FBQUsscUJBQUssRUFBRTtBQUFDNUYseUJBQU8sRUFBQztBQUFULGlCQUFaO0FBQUEsd0NBQ0s7QUFBQSx5Q0FDQyxxRUFBQyxxRUFBRDtBQUFjLDJCQUFPLEVBQUMsWUFBdEI7QUFBbUMseUJBQUssRUFBQyxNQUF6QztBQUFnRCwwQkFBTSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURMLGVBSUsscUVBQUMsZ0RBQUQ7QUFBTSwyQkFBUyxFQUFFNk0sU0FBUyxDQUFDL04sSUFBM0I7QUFBaUMsNEJBQVUsRUFBRTtBQUFDWiw0QkFBUSxFQUFDLFVBQVY7QUFBcUJDLHVCQUFHLEVBQUMsTUFBekI7QUFBZ0NFLHlCQUFLLEVBQUMsTUFBdEM7QUFBNkNMLHlCQUFLLEVBQUMsT0FBbkQ7QUFBMkRDLDZCQUFTLEVBQUM0TyxTQUFTLENBQUM3TyxLQUEvRTtBQUFxRkgseUJBQUssRUFBQyxNQUEzRjtBQUFrR0UsMEJBQU0sRUFBQyxNQUF6RztBQUFnSFEsOEJBQVUsRUFBQ3NPLFNBQVMsQ0FBQ0g7QUFBckk7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKTCxlQU1LO0FBQUssdUJBQUssRUFBRTtBQUFDbEgsOEJBQVUsRUFBQztBQUFaLG1CQUFaO0FBQUEsMENBQ0c7QUFBRyx5QkFBSyxFQUFFO0FBQUNtRyxnQ0FBVSxFQUFDLE1BQVo7QUFBbUJsRyw4QkFBUSxFQUFDO0FBQTVCLHFCQUFWO0FBQUEsOEJBQWdEcEYsSUFBSSxDQUFDME0sSUFBTCxDQUFVL1IsU0FBVixHQUFzQixHQUF0QixHQUE0QnFGLElBQUksQ0FBQzBNLElBQUwsQ0FBVTdSLFFBQXRDLEdBQWlEO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREgsZUFFRztBQUFHLHlCQUFLLEVBQUU7QUFBQ3VLLDhCQUFRLEVBQUMsTUFBVjtBQUFpQnpILDJCQUFLLEVBQUMsU0FBdkI7QUFBaUMyTixnQ0FBVSxFQUFDO0FBQTVDLHFCQUFWO0FBQUEsOEJBQWdFa0IsU0FBUyxDQUFDckY7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSCxlQUdHO0FBQUcseUJBQUssRUFBRTtBQUFDL0IsOEJBQVEsRUFBQyxNQUFWO0FBQWlCekgsMkJBQUssRUFBQyxTQUF2QjtBQUFpQzJOLGdDQUFVLEVBQUM7QUFBNUMscUJBQVY7QUFBQSwrQkFBZ0U3RixnRUFBYSxDQUFDekYsSUFBSSxDQUFDMk0sU0FBTixDQUFiLENBQThCakgsSUFBOUIsR0FBcUMsR0FBckMsR0FBMkNELGdFQUFhLENBQUN6RixJQUFJLENBQUMyTSxTQUFOLENBQWIsQ0FBOEJoSCxPQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFpQjRHLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVI7QUFnQkgsU0FuQ0E7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUEwQ0g7QUFDSjs7QUFDRCxNQUFHVixTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDaEJ4SixTQUFLLEdBQUMsUUFBTjtBQUNBNkosWUFBUSxnQkFBRyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw4QkFDRyxxRUFBQyxVQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQThCLG9CQUFVLEVBQUU7QUFBQzFPLGlCQUFLLEVBQUMsTUFBUDtBQUFjRSxrQkFBTSxFQUFDLE1BQXJCO0FBQTRCRSxxQkFBUyxFQUFDLFNBQXRDO0FBQWdETSxzQkFBVSxFQUFDO0FBQTNEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLGVBQUssRUFBRTtBQUFDaUgsc0JBQVUsRUFBQztBQUFaLFdBQVo7QUFBQSxrQ0FDSTtBQUFJLGlCQUFLLEVBQUU7QUFBQ0Msc0JBQVEsRUFBQztBQUFWLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ0Esc0JBQVEsRUFBQztBQUFWO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFRRyxxRUFBQyxVQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLGtCQUFoQjtBQUFtQyxvQkFBVSxFQUFFO0FBQUM1SCxpQkFBSyxFQUFDLE1BQVA7QUFBY0Usa0JBQU0sRUFBQyxNQUFyQjtBQUE0QkUscUJBQVMsRUFBQyxTQUF0QztBQUFnRE0sc0JBQVUsRUFBQztBQUEzRDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ2lILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUEsa0NBQ0k7QUFBRyxpQkFBSyxFQUFFO0FBQUNDLHNCQUFRLEVBQUM7QUFBVixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxpQkFBSyxFQUFFO0FBQUNBLHNCQUFRLEVBQUM7QUFBVjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJILGVBZUcscUVBQUMsVUFBRDtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUErQixvQkFBVSxFQUFFO0FBQUM1SCxpQkFBSyxFQUFDLE1BQVA7QUFBY0kscUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Ysa0JBQU0sRUFBQyxNQUF6QztBQUFnRFEsc0JBQVUsRUFBQztBQUEzRDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ2lILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUEsa0NBQ0k7QUFBRyxpQkFBSyxFQUFFO0FBQUNDLHNCQUFRLEVBQUM7QUFBVixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxpQkFBSyxFQUFFO0FBQUNBLHNCQUFRLEVBQUM7QUFBVjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBTUk7QUFBSyxlQUFLLEVBQUU7QUFBQ0Qsc0JBQVUsRUFBQztBQUFaLFdBQVo7QUFBQSxpQ0FDRSxxRUFBQyxtREFBRDtBQUFTLHVCQUFXLEVBQUUsS0FBdEI7QUFBNkIseUJBQWEsRUFBRSxLQUE1QztBQUFtRCxvQkFBUSxFQUFFLE1BQUk4RyxRQUFRLENBQUMsQ0FBQ0QsTUFBRixDQUF6RTtBQUFvRixtQkFBTyxFQUFFQTtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSCxlQXlCRyxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFLE1BQUk3QixNQUFNLEVBQS9CO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLHNCQUFoQjtBQUF1QyxvQkFBVSxFQUFFO0FBQUMzTSxpQkFBSyxFQUFDLE1BQVA7QUFBY0kscUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Ysa0JBQU0sRUFBQyxNQUF6QztBQUFnRFEsc0JBQVUsRUFBQztBQUEzRDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ2lILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUEsa0NBQ0k7QUFBRyxpQkFBSyxFQUFFO0FBQUNDLHNCQUFRLEVBQUM7QUFBVixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxpQkFBSyxFQUFFO0FBQUNBLHNCQUFRLEVBQUM7QUFBVjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWDtBQWlDRDs7QUFFRCxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRTtBQUFHLFdBQUssRUFBRTtBQUFDN0YsZUFBTyxFQUFDLEtBQVQ7QUFBZTZGLGdCQUFRLEVBQUM7QUFBeEIsT0FBVjtBQUFBLGdCQUE0Qy9DO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHNkosUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1VLFFBQVEsR0FBQ3RQLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHNDQUFkO0FBSUEsTUFBTStOLEtBQUssR0FBQ3ZQLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHdDQUFYO0FBS0EsTUFBTWdPLElBQUksR0FBQ3hQLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHlDQUFWO0FBS0EsTUFBTWlPLFNBQVMsR0FBQ3pQLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLDJDQUFmO0FBSWUsU0FBU2tPLFFBQVQsQ0FBa0I7QUFBQ3JTLFdBQUQ7QUFBV3NTLFNBQVg7QUFBbUJoUyxVQUFuQjtBQUE0QmlTLGlCQUE1QjtBQUE0Q0MsVUFBNUM7QUFBcURDLFlBQXJEO0FBQWdFbkssUUFBaEU7QUFBdUVvSyxjQUF2RTtBQUFvRkM7QUFBcEYsQ0FBbEIsRUFBcUg7QUFFaEksUUFBTTtBQUFBLE9BQUNqTyxXQUFEO0FBQUEsT0FBYWtPO0FBQWIsTUFBK0JuSyxzREFBUSxDQUFDLEtBQUQsQ0FBN0M7QUFDQSxRQUFNO0FBQUMxTTtBQUFELE1BQWF3Tix3REFBVSxDQUFDQyxzRUFBRCxDQUE3QjtBQUVBRyx5REFBUyxDQUFDLE1BQUk7QUFHVixRQUFHNU4sUUFBUSxDQUFDMkIsTUFBWixFQUFtQjtBQUVmLFVBQUczQixRQUFRLENBQUMyQixNQUFULEtBQW9CNEssTUFBdkIsRUFBOEI7QUFFMUJvSyxvQkFBWSxDQUFDN0ksT0FBYixDQUFxQmdKLE9BQU8sSUFBSTtBQUU1QixjQUFHOVcsUUFBUSxDQUFDMkIsTUFBVCxJQUFtQm1WLE9BQU8sQ0FBQy9TLEVBQTlCLEVBQWlDO0FBRTdCOFMsMEJBQWMsQ0FBQyxJQUFELENBQWQ7QUFFSDtBQUVKLFNBUkQ7QUFVSDtBQUVKO0FBRUosR0FyQlEsRUFxQlAsQ0FBQzdXLFFBQUQsQ0FyQk8sQ0FBVDs7QUF1QkEsUUFBTStXLFlBQVksR0FBQyxNQUFJO0FBRW5CRixrQkFBYyxDQUFDLENBQUNsTyxXQUFGLENBQWQ7QUFDQWlPLGdCQUFZLENBQUNqTyxXQUFELEVBQWEzSSxRQUFRLENBQUMyQixNQUF0QixFQUE2QjRLLE1BQTdCLENBQVo7QUFDSCxHQUpEOztBQU9BLHNCQUNJLHFFQUFDLFFBQUQ7QUFBQSwyQkFDSSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0cscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUU7QUFDUm9DLGtCQUFRLEVBQUUsWUFBV3BDLE1BQU8sRUFEcEI7QUFFUnFDLGVBQUssRUFBQztBQUFDQyxnQkFBSSxFQUFDO0FBQU47QUFGRSxTQUFaO0FBQUEsK0JBSUUscUVBQUMscUVBQUQ7QUFBYyxpQkFBTyxFQUFFLFVBQXZCO0FBQW1DLGVBQUssRUFBQyxNQUF6QztBQUFnRCxnQkFBTSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFPRyxxRUFBQyxJQUFEO0FBQUEsK0JBQU07QUFBTSxlQUFLLEVBQUU7QUFBQzVILGlCQUFLLEVBQUM7QUFBUCxXQUFiO0FBQUEsb0JBQStCaEQsU0FBUyxHQUFDLEdBQVYsR0FBY3NTO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEgsZUFRRyxxRUFBQyxTQUFEO0FBQUEsa0JBQVlFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJILEVBVU96VyxRQUFRLENBQUMyQixNQUFULEtBQW9CNEssTUFBcEIsaUJBQ0EscUVBQUMsd0RBQUQ7QUFBUyxpQkFBUyxlQUFFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXBCO0FBQTZDLGFBQUssRUFBRTtBQUFDekYsZUFBSyxFQUFDLE9BQVA7QUFBZStOLHVCQUFhLEVBQUMsWUFBN0I7QUFBMENELG9CQUFVLEVBQUM7QUFBckQsU0FBcEQ7QUFBaUgsYUFBSyxFQUFDLFdBQXZIO0FBQW1JLGVBQU8sRUFBQyxVQUEzSTtBQUFzSixlQUFPLEVBQUVtQyxZQUEvSjtBQUFBLGtCQUE4S3BPLFdBQVcsR0FBRyxjQUFILEdBQW9CO0FBQTdNO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkgsQzs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXFPLE1BQU0sR0FBQ3BRLHdEQUFNLENBQUNxUSxNQUFSO0FBQUE7QUFBQTtBQUFBLEdBQWUsQ0FBQztBQUFDaFEsT0FBRDtBQUFPQyxXQUFQO0FBQWlCSixPQUFqQjtBQUF1Qlk7QUFBdkIsQ0FBRCxLQUNqQztBQUNELFFBQVFaLEtBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVFHLEtBQU07QUFDZCxtQkFBbUJDLFNBQVU7QUFDN0I7QUFDQTtBQUNBLHVCQUF1QlEsU0FBVTtBQUNqQztBQUNBO0FBQ0EsQ0FkbUIsQ0FBWjtBQWlCQSxNQUFNd1AsTUFBTSxHQUFDQyxtRUFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPO0FBZ0JBLE1BQU1DLFlBQVksR0FBQ3hRLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLEdBQVksQ0FBQztBQUFDdEIsT0FBRDtBQUFPRSxRQUFQO0FBQWNxUTtBQUFkLENBQUQsS0FBMkI7QUFDaEUsUUFBUXZRLEtBQU07QUFDZCxTQUFTRSxNQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QnFRLE9BQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FWeUIsQ0FBbEI7QUFjQSxNQUFNQyxLQUFLLEdBQUMxUSx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxxR0FNUixDQUFDO0FBQUNtUDtBQUFELENBQUQsS0FBV0EsS0FBSyxHQUFHLEtBQUgsR0FBVyxNQU5uQixFQU9TLENBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQVdBLEtBQUssR0FBRyxLQUFILEdBQVcsR0FQcEMsQ0FBWDtBQVdBLE1BQU10RyxTQUFTLEdBQUd4SCxtRUFBSCxnRUFBZjtBQVNBLE1BQU15SCxPQUFPLEdBQUd0Syx3REFBTSxDQUFDd0IsR0FBVjtBQUFBO0FBQUE7QUFBQSxtUUFDTDZJLFNBREssQ0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTXVHLE1BQU0sR0FBQzVRLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLFFBQVo7QUFHQSxNQUFNcVAsUUFBUSxHQUFDN1Esd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkhBT0osQ0FBQztBQUFDc1A7QUFBRCxDQUFELEtBQVFBLEVBQUUsR0FBRyxHQUFILEdBQVMsR0FQZixDQUFkLEMsQ0FTQTs7QUFFQSxNQUFNQyxNQUFNLEdBQUNDLHVEQUFFLENBQUMsdUJBQUQsQ0FBZjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0I7QUFBQ3BCO0FBQUQsQ0FBcEIsRUFBZ0M7QUFFM0MsUUFBTTtBQUFBLE9BQUM3RyxNQUFEO0FBQUEsT0FBUXpQO0FBQVIsTUFBbUJ1TSxzREFBUSxDQUFDLEtBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUEsT0FBQ29MLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWVyTCxzREFBUSxDQUFDLEtBQUQsQ0FBN0I7QUFDQSxRQUFNO0FBQUMxTTtBQUFELE1BQWF3Tix3REFBVSxDQUFDQyxzRUFBRCxDQUE3QjtBQUNBLFFBQU07QUFBQSxPQUFDakksT0FBRDtBQUFBLE9BQVNEO0FBQVQsTUFBcUJtSCxzREFBUSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxRQUFNO0FBQUEsT0FBQ3NMLFdBQUQ7QUFBQSxPQUFhblM7QUFBYixNQUEyQjZHLHNEQUFRLENBQUMsQ0FBRCxDQUF6QztBQUNBLFFBQU07QUFBQSxPQUFDdUwsVUFBRDtBQUFBLE9BQVlDO0FBQVosTUFBMkJ4TCxzREFBUSxDQUFDLENBQUQsQ0FBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ3lMLGdCQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXVDMUwsc0RBQVEsQ0FBQyxLQUFELENBQXJEO0FBQ0EsUUFBTTJMLFNBQVMsR0FBQzNLLDZEQUFTLEVBQXpCO0FBRUFwTixTQUFPLENBQUNDLEdBQVIsQ0FBWThYLFNBQVMsQ0FBQzFKLFFBQXRCO0FBRUFmLHlEQUFTLENBQUMsTUFBTTtBQUVaek4sYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBSFEsRUFHTixDQUFDa1ksU0FBUyxDQUFDekosS0FBWCxDQUhNLENBQVQ7QUFLQWhCLHlEQUFTLENBQUMsTUFBSTtBQUVYMEssWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFtQyxNQUFJO0FBRXBDLFVBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFwQixFQUF3QjtBQUNwQlYsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNILE9BRkQsTUFHSTtBQUNBQSxlQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0g7QUFFSCxLQVREOztBQVdBLFFBQUcvWCxRQUFRLENBQUMyQixNQUFaLEVBQW1CO0FBRWRpRSw0RUFBb0IsQ0FBQztBQUNqQkMsb0JBQVksRUFBQ0EsWUFESTtBQUVqQmxFLGNBQU0sRUFBQzNCLFFBQVEsQ0FBQzJCO0FBRkMsT0FBRCxDQUFwQjtBQUtBMkQsdUVBQWUsQ0FBQztBQUNaQyxrQkFBVSxFQUFDQSxVQURDO0FBRVo1RCxjQUFNLEVBQUMzQixRQUFRLENBQUMyQixNQUZKO0FBR1pNLGFBQUssRUFBQyxFQUhNO0FBSVp1RCxlQUFPLEVBQUNBLE9BSkk7QUFLWkMsZUFBTyxFQUFDO0FBTEksT0FBRCxDQUFmO0FBUUo7QUFFSCxHQTlCUSxFQThCUCxDQUFDekYsUUFBRCxDQTlCTyxDQUFUO0FBZ0NBNE4seURBQVMsQ0FBQyxNQUFJO0FBRVYsVUFBTThLLFFBQVEsR0FBQyxNQUFJO0FBQ2ZOLHlCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDQUYsbUJBQWEsQ0FBQ3JXLElBQUksSUFBRUEsSUFBSSxHQUFDLENBQVosQ0FBYjs7QUFDQSxVQUFHN0IsUUFBUSxDQUFDMkIsTUFBWixFQUFtQjtBQUVmaUUsOEVBQW9CLENBQUM7QUFDakJDLHNCQUFZLEVBQUNBLFlBREk7QUFFakJsRSxnQkFBTSxFQUFDM0IsUUFBUSxDQUFDMkI7QUFGQyxTQUFELENBQXBCO0FBS0Y7QUFDTCxLQVhEOztBQWFBZ1csVUFBTSxDQUFDZ0IsRUFBUCxDQUFVLGNBQVYsRUFBeUJELFFBQXpCO0FBSUgsR0FuQlEsRUFtQlAsQ0FBQzFZLFFBQUQsQ0FuQk8sQ0FBVDtBQXFCQTROLHlEQUFTLENBQUMsTUFBSTtBQUVaLFFBQUc1TixRQUFRLENBQUMyQixNQUFULElBQW1Cd1csZ0JBQXRCLEVBQXVDO0FBQ2pDN1MsdUVBQWUsQ0FBQztBQUNaQyxrQkFBVSxFQUFDQSxVQURDO0FBRVo1RCxjQUFNLEVBQUMzQixRQUFRLENBQUMyQixNQUZKO0FBR1pNLGFBQUssRUFBQytWLFdBSE07QUFJWnhTLGVBQU8sRUFBQ0EsT0FKSTtBQUtaQyxlQUFPLEVBQUM7QUFMSSxPQUFELENBQWY7QUFPTDtBQUVGLEdBWlEsRUFZUCxDQUFDd1MsVUFBRCxDQVpPLENBQVQ7O0FBY0EsUUFBTVcsU0FBUyxHQUFFM1csS0FBRCxJQUFTO0FBRXJCcUQscUVBQWUsQ0FBQztBQUNaQyxnQkFBVSxFQUFDQSxVQURDO0FBRVo1RCxZQUFNLEVBQUMzQixRQUFRLENBQUMyQixNQUZKO0FBR1pNLFdBQUssRUFBQ0EsS0FITTtBQUladUQsYUFBTyxFQUFDQSxPQUpJO0FBS1pDLGFBQU8sRUFBQztBQUxJLEtBQUQsQ0FBZjtBQVFILEdBVkQ7O0FBWUEsUUFBTW9ULFdBQVcsR0FBQyxNQUFJO0FBQ2xCdlksV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBc0YsZ0JBQVksQ0FBQyxDQUFELENBQVo7QUFDQWpCLDZFQUF1QixDQUFDO0FBQUNqRCxZQUFNLEVBQUMzQixRQUFRLENBQUMyQjtBQUFqQixLQUFELENBQXZCO0FBQ0gsR0FKRCxDQWpHMkMsQ0F1RzNDOzs7QUFDQSxzQkFDSSxxRUFBQyxNQUFEO0FBQUEsNEJBQ0kscUVBQUMseUVBQUQ7QUFBTyxhQUFPLEVBQUUsTUFBSXhCLFNBQVMsQ0FBQyxLQUFELENBQTdCO0FBQXNDLFdBQUssRUFBRXlQO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdGQUFEO0FBQVksWUFBTSxFQUFFaUosV0FBcEI7QUFBaUMsZ0JBQVUsRUFBRUQsU0FBN0M7QUFBd0QsV0FBSyxFQUFFWixXQUEvRDtBQUE0RSxVQUFJLEVBQUV4UztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFhLGNBQVEsRUFBRW9LLE1BQXZCO0FBQStCLGdCQUFVLEVBQUV6UDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFLSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSSxxRUFBQyxRQUFEO0FBQVUsYUFBTyxFQUFFLE1BQUk7QUFBQ3FZLGNBQU0sQ0FBQ00sUUFBUCxDQUFnQjtBQUFDMVIsYUFBRyxFQUFDO0FBQUwsU0FBaEI7QUFBeUIsT0FBakQ7QUFBbUQsUUFBRSxFQUFFMFEsSUFBdkQ7QUFBQSw2QkFDSSxxRUFBQywyREFBRDtBQUFNLGlCQUFTLEVBQUMseUJBQWhCO0FBQTBDLGtCQUFVLEVBQUU7QUFBQzVRLG1CQUFTLEVBQUMsU0FBWDtBQUFxQkQsZUFBSyxFQUFDLE9BQTNCO0FBQW1DSCxlQUFLLEVBQUMsTUFBekM7QUFBZ0RFLGdCQUFNLEVBQUMsTUFBdkQ7QUFBOERRLG9CQUFVLEVBQUM7QUFBekU7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixFQVNLaVAsUUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNc0MsWUFBWSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSix5QkFBcUI7QUFDbkJoUyxXQUFLLEVBQUU7QUFEWTtBQURqQjtBQURzQixDQUFELENBQS9CO0FBUUEsTUFBTWlTLE9BQU8sR0FBQ3RTLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLGdJQUFiO0FBU0EsTUFBTStRLFFBQVEsR0FBQ3ZTLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLHlKQUFkO0FBVUEsTUFBTWdSLFVBQVUsR0FBQ3hTLHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLDBJQUFoQjtBQVdBLE1BQU1pUixRQUFRLEdBQUN6Uyx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSw0SkFBZDtBQWFBLE1BQU1rUixhQUFhLEdBQUMxUyx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxtSkFRWCxDQUFDO0FBQUNtUjtBQUFELENBQUQsS0FBZ0JBLFVBUkwsQ0FBbkI7QUFXQSxNQUFNQyxjQUFjLEdBQUM1Uyx3REFBTSxDQUFDd0IsR0FBUjtBQUFBO0FBQUE7QUFBQSxtTEFTRCxDQUFDO0FBQUNxUjtBQUFELENBQUQsS0FBY0EsUUFBUSxHQUFHLFNBQUgsR0FBYyxTQVRuQyxFQVVaLENBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQWNBLFFBQVEsR0FBRyxPQUFILEdBQVksT0FWdEIsQ0FBcEI7QUFhQSxNQUFNcEksVUFBVSxHQUFDekssd0RBQU0sQ0FBQ3dCLEdBQVI7QUFBQTtBQUFBO0FBQUEscVRBWVQsQ0FBQztBQUFDc1I7QUFBRCxDQUFELEtBQWVBLFNBWk4sRUFpQlIsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0JBLFVBakJSLENBQWhCO0FBb0JBLE1BQU1DLFNBQVMsR0FBQ2hULHdEQUFNLENBQUN3QixHQUFSO0FBQUE7QUFBQTtBQUFBLG9FQUFmLEMsQ0FNQTs7QUFJZSxTQUFTeVIsSUFBVCxDQUFjO0FBQUMvVjtBQUFELENBQWQsRUFBdUI7QUFFbEMsUUFBTTtBQUFDeUQ7QUFBRCxNQUFTdVMsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ1AsVUFBRDtBQUFBLE9BQVlRO0FBQVosTUFBMkJyTixzREFBUSxDQUFDLENBQUMsRUFBRixDQUF6QztBQUNBLFFBQU07QUFBQzFNO0FBQUQsTUFBYXdOLHdEQUFVLENBQUNDLHNFQUFELENBQTdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNyTSxXQUFEO0FBQUEsT0FBYVk7QUFBYixNQUE2QjBLLHNEQUFRLENBQUM1SSxNQUFELENBQTNDO0FBQ0EsUUFBTTtBQUFBLE9BQUM3QixLQUFEO0FBQUEsT0FBTytYO0FBQVAsTUFBaUJ0TixzREFBUSxDQUFDLENBQUQsQ0FBL0I7QUFDQSxRQUFNO0FBQUEsT0FBQ3VOLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQW9CeE4sc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNySyxhQUFEO0FBQUEsT0FBZThYO0FBQWYsTUFBbUN6TixzREFBUSxDQUFDO0FBQzlDME4sV0FBTyxFQUFDO0FBQ0pYLGNBQVEsRUFBQyxLQURMO0FBRUpoWCxvQkFBYyxFQUFDO0FBRlgsS0FEc0M7QUFLOUM0WCxhQUFTLEVBQUM7QUFDTlosY0FBUSxFQUFDLEtBREg7QUFFTmhYLG9CQUFjLEVBQUM7QUFGVCxLQUxvQztBQVM5QzZYLFFBQUksRUFBQztBQUNEYixjQUFRLEVBQUMsS0FEUjtBQUVEaFgsb0JBQWMsRUFBQztBQUZkLEtBVHlDO0FBYTlDOFgsWUFBUSxFQUFDO0FBQ0xkLGNBQVEsRUFBQyxLQURKO0FBRUxoWCxvQkFBYyxFQUFDO0FBRlYsS0FicUM7QUFpQjlDK1gsV0FBTyxFQUFDO0FBQ0pmLGNBQVEsRUFBQyxLQURMO0FBRUpoWCxvQkFBYyxFQUFDO0FBRlgsS0FqQnNDO0FBcUI5Q2dZLFlBQVEsRUFBQztBQUNMaEIsY0FBUSxFQUFDLEtBREo7QUFFTGhYLG9CQUFjLEVBQUM7QUFGVjtBQXJCcUMsR0FBRCxDQUFqRDtBQTBCQSxRQUFNO0FBQUEsT0FBQ2lZLFdBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQTZCak8sc0RBQVEsQ0FBQyxNQUFELENBQTNDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrTyxVQUFEO0FBQUEsT0FBWUM7QUFBWixNQUEyQm5PLHNEQUFRLENBQUM7QUFDdENuRSxRQUFJLEVBQUMsRUFEaUM7QUFFdEN2RixhQUFTLEVBQUM7QUFGNEIsR0FBRCxDQUF6QztBQUlBLFFBQU07QUFBQSxPQUFDUCxjQUFEO0FBQUEsT0FBZ0JQO0FBQWhCLE1BQTRCd0ssc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUMyRixPQUFEO0FBQUEsT0FBUzNTO0FBQVQsTUFBcUJnTixzREFBUSxDQUFDLEtBQUQsQ0FBbkM7QUFHQWtCLHlEQUFTLENBQUMsTUFBSTtBQUNWdE4sV0FBTyxDQUFDQyxHQUFSLENBQVkrWCxRQUFRLENBQUN3QyxNQUFyQjs7QUFFQSxRQUFHLENBQUN6WSxhQUFhLENBQUNxWSxXQUFELENBQWIsQ0FBMkJqWSxjQUE1QixJQUE4QzhFLE1BQWpELEVBQXdEO0FBRXBEN0gsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQW9DLDhEQUFPLENBQUM7QUFDSkMsbUJBQVcsRUFBQ1gsV0FEUjtBQUVKWSxzQkFBYyxFQUFDQSxjQUZYO0FBR0pDLGFBQUssRUFBQ0EsS0FIRjtBQUlKdkMsa0JBQVUsRUFBQ0EsVUFKUDtBQUtKMEMsa0JBQVUsRUFBQyxJQUxQO0FBTUpDLHFCQUFhLEVBQUNBLGFBTlY7QUFPSkMsb0JBQVksRUFBQzZYLGdCQVBUO0FBUUpoWSxnQkFBUSxFQUFDdVksV0FSTDtBQVNKcGIsaUJBQVMsRUFBQzRhO0FBVE4sT0FBRCxDQUFQO0FBWUg7QUFFSixHQXBCUSxFQW9CUCxDQUFDalksS0FBRCxDQXBCTyxDQUFUOztBQXNCQSxRQUFNOFksWUFBWSxHQUFFQyxPQUFELElBQVc7QUFFMUIsVUFBTXhZLFVBQVUscUJBQU9ILGFBQVAsQ0FBaEI7O0FBQ0FHLGNBQVUsQ0FBQ3dZLE9BQUQsQ0FBVixDQUFvQnZZLGNBQXBCLEdBQXFDLEtBQXJDO0FBQ0EwWCxvQkFBZ0IsQ0FBQzlYLGFBQUQsQ0FBaEI7QUFFQTNDLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXNhLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQWxZLDREQUFPLENBQUM7QUFDSkMsaUJBQVcsRUFBQ1gsV0FEUjtBQUVKWSxvQkFBYyxFQUFDQSxjQUZYO0FBR0pDLFdBQUssRUFBQyxFQUhGO0FBSUp2QyxnQkFBVSxFQUFDQSxVQUpQO0FBS0p5QyxjQUFRLEVBQUM2WSxPQUxMO0FBTUo1WSxnQkFBVSxFQUFDLEtBTlA7QUFPSjlDLGVBQVMsRUFBQzRhO0FBUE4sS0FBRCxDQUFQO0FBVUgsR0FsQkQ7O0FBcUJBLFFBQU1lLGFBQWEsR0FBRTNMLEtBQUQsSUFBUztBQUUxQixRQUFHQSxLQUFLLElBQUksTUFBVCxJQUFtQmlLLFVBQVUsSUFBSSxFQUFwQyxFQUF1QztBQUNyQ1EsbUJBQWEsQ0FBQ1IsVUFBVSxHQUFDLEdBQVosQ0FBYjtBQUNELEtBRkQsTUFHSyxJQUFHakssS0FBSyxJQUFJLFNBQVQsSUFBc0JpSyxVQUFVLEdBQUcsR0FBdEMsRUFBMEM7QUFDOUNRLG1CQUFhLENBQUNSLFVBQVUsR0FBQyxHQUFaLENBQWI7QUFDQTtBQUNILEdBUkQ7O0FBV0EzTCx5REFBUyxDQUFDLE1BQUk7QUFDVnROLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZ0gsTUFBWjs7QUFDQSxRQUFHQSxNQUFILEVBQVU7QUFDTnlTLGNBQVEsQ0FBQzVZLFdBQVcsQ0FBQ21CLE1BQVosR0FBbUIsRUFBcEIsQ0FBUjtBQUNIO0FBRUosR0FOUSxFQU1QLENBQUNnRixNQUFELENBTk8sQ0FBVDs7QUFRQSxRQUFNMlQsY0FBYyxHQUFDLENBQUM5TyxNQUFELEVBQVFwSixTQUFSLEVBQWtCbVksY0FBbEIsRUFBaUM1TyxNQUFqQyxLQUEwQztBQUUzRHpKLHNFQUFpQixDQUFDO0FBQ2RuQixZQUFNLEVBQUMzQixRQUFRLENBQUMyQixNQURGO0FBRWRvQixZQUFNLEVBQUNxSixNQUZPO0FBR2RwSixlQUFTLEVBQUNBLFNBSEk7QUFJZEMsa0JBQVksRUFBQ2tZLGNBSkM7QUFLZGpZLHFCQUFlLEVBQUNxSjtBQUxGLEtBQUQsQ0FBakI7QUFPSCxHQVREOztBQVdBLFFBQU02TyxlQUFlLEdBQUlKLE9BQUQsSUFBWTtBQUVqQ3hDLFVBQU0sQ0FBQ00sUUFBUCxDQUFnQjtBQUFDMVIsU0FBRyxFQUFDLEdBQUw7QUFBU2lVLGNBQVEsRUFBQztBQUFsQixLQUFoQjs7QUFFQSxRQUFHTCxPQUFPLElBQUlOLFdBQWQsRUFBMEI7QUFDeEI7QUFDRCxLQUZELE1BR0k7QUFFQyxZQUFNWSxPQUFPLHFCQUFPalosYUFBUCxDQUFiOztBQUVBLFdBQUssTUFBTWdTLEdBQVgsSUFBa0JpSCxPQUFsQixFQUEyQjtBQUN2QkEsZUFBTyxDQUFDakgsR0FBRCxDQUFQLENBQWFvRixRQUFiLEdBQXNCLEtBQXRCO0FBQ0g7O0FBQ0Q2QixhQUFPLENBQUNOLE9BQUQsQ0FBUCxDQUFpQnZCLFFBQWpCLEdBQTRCLElBQTVCO0FBRUFzQixrQkFBWSxDQUFDQyxPQUFELENBQVo7QUFDQWIsc0JBQWdCLENBQUNtQixPQUFELENBQWhCO0FBQ0FYLG9CQUFjLENBQUNLLE9BQUQsQ0FBZDtBQUNKO0FBR0gsR0F0QkQ7O0FBd0JBLFFBQU1PLGFBQWEsR0FBQyxDQUFDQyxTQUFELEVBQVdDLElBQVgsS0FBa0I7QUFFbEMsVUFBTUMsYUFBYSxxQkFBS2QsVUFBTCxDQUFuQjs7QUFDQWMsaUJBQWEsQ0FBQ25ULElBQWQsR0FBcUJpVCxTQUFyQjtBQUNBRSxpQkFBYSxDQUFDMVksU0FBZCxHQUEwQnlZLElBQTFCO0FBQ0FaLGlCQUFhLENBQUNhLGFBQUQsQ0FBYjtBQUVILEdBUEQ7O0FBVUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQzFVLFlBQU0sRUFBRSxHQUFFNFQsVUFBVSxDQUFDclMsSUFBWCxDQUFnQmhHLE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLE9BQTdCLEdBQXVDLE1BQU8sRUFBekQ7QUFBMkRvWixjQUFRLEVBQUNmLFVBQVUsQ0FBQ3JTLElBQVgsQ0FBZ0JoRyxNQUFoQixHQUF5QixDQUF6QixHQUE2QixRQUE3QixHQUF1QztBQUEzRyxLQUFaO0FBQUEsMkJBQ0kscUVBQUMsU0FBRDtBQUFBLDhCQUNJLHFFQUFDLFFBQUQ7QUFBQSwrQkFDSTtBQUFJLGVBQUssRUFBRTtBQUFDMEUsaUJBQUssRUFBQztBQUFQLFdBQVg7QUFBQSxrQ0FBNEIscUVBQUMsK0RBQUQ7QUFBYSxpQkFBSyxFQUFFO0FBQUMyVSx1QkFBUyxFQUFDO0FBQVg7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUIsdUtBQXVMLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlLaEIsVUFBVSxDQUFDclMsSUFBWCxDQUFnQmhHLE1BQWhCLEdBQXlCLENBQXpCLGdCQUVDLHFFQUFDLHlFQUFEO0FBQWMsZUFBTyxFQUFFLE1BQUlzWSxhQUFhLENBQUNoWixJQUFJLElBQUU7QUFBQyxpREFBV0EsSUFBWDtBQUFnQjBHLGdCQUFJLEVBQUM7QUFBckI7QUFBeUIsU0FBakMsQ0FBeEM7QUFBNEUsaUJBQVMsRUFBRXFTLFVBQVUsQ0FBQzVYLFNBQWxHO0FBQTZHLFlBQUksRUFBRTRYLFVBQVUsQ0FBQ3JTO0FBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxHQUlDLElBUk4sZUFXSSxxRUFBQyxPQUFEO0FBQUEsK0JBQ0kscUVBQUMsVUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDc1Qsb0JBQVEsRUFBQyxPQUFWO0FBQWtCQyxxQkFBUyxFQUFDLE9BQTVCO0FBQW9Ddk4sc0JBQVUsRUFBQyxNQUEvQztBQUFzRHpILGlCQUFLLEVBQUMsTUFBNUQ7QUFBbUUyTix3QkFBWSxFQUFDO0FBQWhGLFdBQW5CO0FBQUEsa0NBQ1EscUVBQUMsUUFBRDtBQUFBLG9DQUNJLHFFQUFDLFVBQUQ7QUFBWSxxQkFBTyxFQUFFLE1BQUl3RyxhQUFhLENBQUMsTUFBRCxDQUF0QztBQUFnRCx1QkFBUyxFQUFDLEdBQTFEO0FBQThELHdCQUFVLEVBQUUsRUFBMUU7QUFBQSxxQ0FDRztBQUFHLHFCQUFLLEVBQUU7QUFBQ2hVLHVCQUFLLEVBQUM7QUFBUCxpQkFBVjtBQUF5QixxQkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUkscUVBQUMsVUFBRDtBQUFZLHFCQUFPLEVBQUUsTUFBSWdVLGFBQWEsQ0FBQyxTQUFELENBQXRDO0FBQW1ELHVCQUFTLEVBQUUsRUFBOUQ7QUFBa0Usd0JBQVUsRUFBQyxHQUE3RTtBQUFBLHFDQUNHO0FBQUcscUJBQUssRUFBRTtBQUFDaFUsdUJBQUssRUFBQztBQUFQLGlCQUFWO0FBQTJCLHFCQUFLLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFPSSxxRUFBQyxhQUFEO0FBQWUsd0JBQVUsRUFBRXNTLFVBQVUsR0FBQyxJQUF0QztBQUFBLHdCQUVRcEYsTUFBTSxDQUFDQyxJQUFQLENBQVkvUixhQUFaLEVBQTJCZ0gsR0FBM0IsQ0FBZ0NDLElBQUQsSUFBUTtBQUVuQyxvQ0FDSSxxRUFBQyxjQUFEO0FBQWdCLDBCQUFRLEVBQUVqSCxhQUFhLENBQUNpSCxJQUFELENBQWIsQ0FBb0JtUSxRQUE5QztBQUF3RCx5QkFBTyxFQUFFLE1BQUkyQixlQUFlLENBQUM5UixJQUFELENBQXBGO0FBQUEseUNBQ0k7QUFBQSw4QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESjtBQU1ILGVBUkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUixlQXVCRztBQUFLLGlCQUFLLEVBQUU7QUFBQ2tGLHVCQUFTLEVBQUMsUUFBWDtBQUFvQnZGLHFCQUFPLEVBQUMsTUFBNUI7QUFBbUNFLDRCQUFjLEVBQUMsUUFBbEQ7QUFBMkRKLDBCQUFZLEVBQUMsTUFBeEU7QUFBK0VnSSx1QkFBUyxFQUFDO0FBQXpGLGFBQVo7QUFBQSxzQkFFYXNCLE9BQU8sZ0JBQUcscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxHQUF5QjtBQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCSCxFQStCUWpSLFdBQVcsQ0FBQ2lJLEdBQVosQ0FBZ0IsQ0FBQ0MsSUFBRCxFQUFNdU0sS0FBTixrQkFDWixxRUFBQyxzRUFBRDtBQUNBLGtCQUFNLEVBQUV2TSxJQUFJLENBQUN2RixFQURiO0FBRUEsbUJBQU8sRUFBRXVGLElBQUksQ0FBQ21DLE9BRmQ7QUFHQSxnQ0FBb0IsRUFBRXlQLGNBSHRCO0FBSUEsc0JBQVUsRUFBRSxDQUFDYSxXQUFELEVBQWFOLElBQWIsS0FBb0JGLGFBQWEsQ0FBQ1EsV0FBRCxFQUFhTixJQUFiLENBSjdDO0FBS0EsZ0JBQUksRUFBRW5TLElBQUksQ0FBQ3FELElBTFgsQ0FLZ0I7QUFMaEI7QUFNQSxtQkFBTyxFQUFFckQsSUFBSSxDQUFDMFMsT0FOZDtBQU9BLG1CQUFPLEVBQUUxUyxJQUFJLENBQUMyUyxXQVBkO0FBUUEscUJBQVMsRUFBRTNTLElBQUksQ0FBQ3lELFNBUmhCO0FBU2M7QUFDZCx3QkFBWSxFQUFFLHdIQVZkO0FBV0EsaUJBQUssRUFBRXpELElBQUksQ0FBQ3FDLEtBWFo7QUFZQSxzQkFBVSxFQUFFLFlBWlo7QUFhQSxvQkFBUSxFQUFFckMsSUFBSSxDQUFDNFMsUUFBTCxLQUFrQixJQUFsQixHQUF5QjVTLElBQUksQ0FBQzRTLFFBQUwsQ0FBY2pZLFNBQXZDLEdBQW1ELFFBYjdEO0FBY0EsdUJBQVcsRUFBRXFGLElBQUksQ0FBQzRTLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUI1UyxJQUFJLENBQUM0UyxRQUFMLENBQWMvWCxRQUF2QyxHQUFrRCxRQWQvRCxDQWN3RTtBQWR4RTtBQWVBLGtCQUFNLEVBQUVtRixJQUFJLENBQUM0UyxRQUFMLEtBQWtCLElBQWxCLEdBQXlCNVMsSUFBSSxDQUFDNFMsUUFBTCxDQUFjblksRUFBdkMsR0FBMkMsUUFmbkQ7QUFnQkEsb0JBQVEsRUFBRXVGLElBQUksQ0FBQzZTLFFBaEJmO0FBaUJBLGdCQUFJLEVBQUU3UyxJQUFJLENBQUMyTTtBQWpCWCxhQVNLbUcsOENBQU0sRUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5RUg7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFhBO0FBQ0E7QUFFTyxNQUFNM08saUJBQWlCLGdCQUFDNE8sMkRBQWEsRUFBckM7O0FBRVAsTUFBTUMsV0FBVyxHQUFDLENBQUM7QUFBQzdGO0FBQUQsQ0FBRCxLQUFjO0FBRTVCLFFBQUs7QUFBQSxPQUFDelYsTUFBRDtBQUFBLE9BQVF2QjtBQUFSLE1BQW1CaU4sc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBSztBQUFBLE9BQUM2UCxXQUFEO0FBQUEsT0FBYTFZO0FBQWIsTUFBNkI2SSxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFLO0FBQUEsT0FBQzFNLFFBQUQ7QUFBQSxPQUFVRDtBQUFWLE1BQXVCMk0sc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBSztBQUFBLE9BQUM4UCxPQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFxQi9QLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQUs7QUFBQSxPQUFDMkYsT0FBRDtBQUFBLE9BQVMzUztBQUFULE1BQXFCZ04sc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBRUFrQix5REFBUyxDQUFDLE1BQUk7QUFFVixVQUFNak4sS0FBSyxHQUFDZixZQUFZLENBQUM4YyxPQUFiLENBQXFCLE9BQXJCLENBQVosQ0FGVSxDQUlWOztBQUVJL1ksZ0VBQVcsQ0FBQztBQUNSQyxXQUFLLEVBQUNqRCxLQURFO0FBRVJuQixvQkFBYyxFQUFDTyxXQUZQO0FBR1JOLGVBQVMsRUFBQ0EsU0FIRjtBQUlSQyxnQkFBVSxFQUFDQSxVQUpIO0FBS1JtRSxvQkFBYyxFQUFDQTtBQUxQLEtBQUQsQ0FBWCxDQU5NLENBY1Y7QUFDQTtBQUVBO0FBRUgsR0FuQlEsRUFtQlAsRUFuQk8sQ0FBVDtBQXFCQSxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNDLFNBQUssRUFBRTtBQUNIN0MsWUFBTSxFQUFDQSxNQURKO0FBRUh1YixpQkFBVyxFQUFDQSxXQUZUO0FBR0g5YyxlQUFTLEVBQUNBLFNBSFA7QUFJSE8sY0FBUSxFQUFDQSxRQUpOO0FBS0hELGlCQUFXLEVBQUNBLFdBTFQ7QUFNSHNTLGFBQU8sRUFBQ0EsT0FOTDtBQU9IM1MsZ0JBUEc7QUFPUUEsZ0JBUFI7QUFRSDhjLGFBQU8sRUFBQ0EsT0FSTDtBQVNIQyxnQkFURztBQVNRQTtBQVRSLEtBRFI7QUFBQSxjQWFLaEc7QUFiTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkgsQ0E5Q0Q7O0FBZ0RlNkYsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTblAsZUFBVCxHQUEwQjtBQUVyQyxRQUFNSCxHQUFHLEdBQUN1RCxvREFBTSxFQUFoQjtBQUNBLFFBQU07QUFBQSxPQUFDdEQsT0FBRDtBQUFBLE9BQVNDO0FBQVQsTUFBcUJSLHNEQUFRLENBQUMsS0FBRCxDQUFuQzs7QUFFQSxRQUFNaVEsV0FBVyxHQUFFQyxLQUFELElBQVM7QUFHdkIsUUFBRzVQLEdBQUcsQ0FBQzNILE9BQUosSUFBZSxDQUFDMkgsR0FBRyxDQUFDM0gsT0FBSixDQUFZd1gsUUFBWixDQUFxQkQsS0FBSyxDQUFDdk4sTUFBM0IsQ0FBbkIsRUFBc0Q7QUFDbERuQyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIO0FBRUosR0FQRDs7QUFTQVUseURBQVMsQ0FBQyxNQUFJO0FBRVowSyxZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQWtDb0UsV0FBbEM7QUFFQSxXQUFPLE1BQUk7QUFDVHJFLGNBQVEsQ0FBQ3dFLG1CQUFULENBQTZCLE9BQTdCLEVBQXFDSCxXQUFyQztBQUNELEtBRkQ7QUFJRCxHQVJRLENBQVQ7QUFVQSxTQUFPO0FBQ0wxUCxXQURLO0FBRUxDLGNBRks7QUFHTEY7QUFISyxHQUFQO0FBS0gsQzs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTOE0sU0FBVCxHQUFvQjtBQUUvQixRQUFNO0FBQUEsT0FBQ3ZTLE1BQUQ7QUFBQSxPQUFRd1Y7QUFBUixNQUFtQnJRLHNEQUFRLENBQUMsS0FBRCxDQUFqQztBQUVBa0IseURBQVMsQ0FBQyxNQUFJO0FBRVY7QUFDQTBLLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NuSixDQUFELElBQUs7QUFFcEMsVUFBSW9KLE1BQU0sQ0FBQ3dFLFdBQVAsR0FBcUJ4RSxNQUFNLENBQUNDLE9BQTdCLElBQXlDSCxRQUFRLENBQUMyRSxJQUFULENBQWNwSixZQUExRCxFQUF3RTtBQUNwRWtKLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBRUgsT0FIRCxNQUlJO0FBQ0FBLGlCQUFTLENBQUMsS0FBRCxDQUFUO0FBRUg7QUFDSixLQVZEO0FBWUQsV0FBTyxNQUFLekUsUUFBUSxDQUFDd0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBc0MsTUFBSTtBQUN4Q3RFLFlBQU0sQ0FBQ00sUUFBUCxDQUFnQjtBQUFDMVIsV0FBRyxFQUFDLENBQUw7QUFBT2lVLGdCQUFRLEVBQUM7QUFBaEIsT0FBaEI7QUFDRCxLQUZELENBQVo7QUFJRixHQW5CUSxFQW1CUCxFQW5CTyxDQUFUO0FBcUJBLFNBQU87QUFDTDlULFVBQU0sRUFBQ0E7QUFERixHQUFQO0FBR0gsQzs7Ozs7Ozs7Ozs7QUM5QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBOztBQVNBOztBQUNBOztBQXVCQSxNQUFNMlYsVUFBMkMsR0FBakQ7O0FBRUEsNkNBS1E7QUFDTixNQUFJLElBQUosRUFBOEM7QUFDOUMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBamQsUUFBTSxDQUFOQSxrQ0FBMENZLEdBQUQsSUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMRFo7QUFNQSxRQUFNa2QsU0FBUyxHQUNiQyxPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFkLFdBQVhBLGNBQ0lBLE9BQU8sQ0FEWEEsU0FFSW5kLE1BQU0sSUFBSUEsTUFBTSxDQUh0QixPQWJNLENBa0JOOztBQUNBaWQsWUFBVSxDQUFDdEgsSUFBSSxHQUFKQSxZQUFtQnVILFNBQVMsR0FBRyxNQUFILFlBQXZDRCxFQUFXdEgsQ0FBRCxDQUFWc0g7QUFHRjs7QUFBQSxnQ0FBMkQ7QUFDekQsUUFBTTtBQUFBO0FBQUEsTUFBYU4sS0FBSyxDQUF4QjtBQUNBLFNBQ0d2TixNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDRHVOLEtBQUssQ0FETCxPQUFDdk4sSUFFRHVOLEtBQUssQ0FGTCxPQUFDdk4sSUFHRHVOLEtBQUssQ0FITCxRQUFDdk4sSUFJRHVOLEtBQUssQ0FKTCxNQUFDdk4sSUFJZTtBQUNmdU4sT0FBSyxDQUFMQSxlQUFxQkEsS0FBSyxDQUFMQSxzQkFOeEI7QUFVRjs7QUFBQSw0RUFTUTtBQUNOLFFBQU07QUFBQTtBQUFBLE1BQWV4TixDQUFDLENBQXRCOztBQUVBLE1BQUlpTyxRQUFRLEtBQVJBLFFBQXFCQyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsSUFBc0IsQ0FBQyx3QkFBaEQsSUFBZ0QsQ0FBNUNELENBQUosRUFBbUU7QUFDakU7QUFDQTtBQUdGak87O0FBQUFBLEdBQUMsQ0FBREEsaUJBUk0sQ0FVTjs7QUFDQSxNQUFJbU8sTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxVQUFNLEdBQUdDLEVBQUUsQ0FBRkEsZUFBVEQ7QUFHRixHQWZNLENBZU47OztBQUNBdGQsUUFBTSxDQUFDd2QsT0FBTyxlQUFkeGQsTUFBTSxDQUFOQSxXQUErQztBQUFBO0FBQUE7QUFBL0NBO0FBQStDLEdBQS9DQSxPQUlTa0csT0FBRCxJQUFzQjtBQUM1QixRQUFJLENBQUosU0FBYzs7QUFDZCxnQkFBWTtBQUNWO0FBQ0FtUyxjQUFRLENBQVJBO0FBRUg7QUFWRHJZO0FBYUY7O0FBQUEscUJBQXlEO0FBQ3ZELFlBQTJDO0FBQ3pDLG1DQUlHO0FBQ0QsYUFBTyxVQUNKLGdDQUErQnlkLElBQUksQ0FBQ3JKLEdBQUksZ0JBQWVxSixJQUFJLENBQUNDLFFBQVMsNkJBQTRCRCxJQUFJLENBQUNFLE1BQXZHLGFBQUMsSUFDRSxvQkFGTCxFQUNHLENBREksQ0FBUDtBQVFGLEtBZHlDLENBY3pDOzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRGpJLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1rSSxhQUFrQyxHQUFHM0osTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkUsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsUUFBb0I7QUFDbEIsWUFDRTBKLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUNDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosaUJBQWtDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FGckMsVUFHRTtBQUNBLGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQkwsb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRUcsS0FBSyxDQUFMQSxHQUFLLENBQUxBLHFCQUErQixPQUFPQSxLQUFLLENBSHJELEdBR3FEO0FBSC9CLFdBQUQsQ0FBckI7QUFNSDtBQVhELGFBV087QUFDTDtBQUNBO0FBQ0EsY0FBTUUsQ0FBUSxHQUFkO0FBRUg7QUFqQkQsT0FyQnlDLENBd0N6Qzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRFYsUUFBRSxFQUR3RDtBQUUxREMsYUFBTyxFQUZtRDtBQUcxREYsWUFBTSxFQUhvRDtBQUkxRFksYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5rRDtBQU8xREMsWUFBTSxFQVBSO0FBQTRELEtBQTVEO0FBU0EsVUFBTUMsYUFBa0MsR0FBR3BLLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJFLEdBQUQsSUFBNEI7QUFDaEQsWUFBTW1LLE9BQU8sR0FBRyxPQUFPVCxLQUFLLENBQTVCLEdBQTRCLENBQTVCOztBQUVBLFVBQUkxSixHQUFHLEtBQVAsTUFBa0I7QUFDaEIsWUFBSTBKLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxJQUFjUyxPQUFPLEtBQXJCVCxZQUFzQ1MsT0FBTyxLQUFqRCxVQUFnRTtBQUM5RCxnQkFBTVIsZUFBZSxDQUFDO0FBQUE7QUFFcEJMLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUkQsYUFRTyxJQUFJdkosR0FBRyxLQUFQLFVBQXNCO0FBQzNCLFlBQUkwSixLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBY1MsT0FBTyxLQUF6QixVQUF3QztBQUN0QyxnQkFBTVIsZUFBZSxDQUFDO0FBQUE7QUFFcEJMLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUk0sYUFRQSxJQUNMdkosR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUkwSixLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0JTLE9BQU8sS0FBakMsV0FBaUQ7QUFDL0MsZ0JBQU1SLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQWRNLGFBY0E7QUFDTDtBQUNBO0FBQ0EsY0FBTUssQ0FBUSxHQUFkO0FBRUg7QUF0Q0QsT0FyRHlDLENBNkZ6QztBQUNBOztBQUNBLFVBQU1RLFNBQVMsR0FBR2hQLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSXNPLEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ1UsU0FBUyxDQUFoQyxTQUEwQztBQUN4Q0EsZUFBUyxDQUFUQTtBQUNBbmUsYUFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUEsUUFBTXdILENBQUMsR0FBR2lXLEtBQUssQ0FBTEEsYUFBVjtBQUVBLFFBQU05ZCxNQUFNLEdBQUcsYUFBZixTQUFlLEdBQWY7QUFDQSxRQUFNME8sUUFBUSxHQUFJMU8sTUFBTSxJQUFJQSxNQUFNLENBQWpCLFFBQUNBLElBQWxCOztBQUVBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBZXdQLHVCQUFjLE1BQU07QUFDdkMsVUFBTSw2QkFBNkIsbUNBQXNCc08sS0FBSyxDQUEzQixNQUFuQyxJQUFtQyxDQUFuQztBQUNBLFdBQU87QUFDTG5JLFVBQUksRUFEQztBQUVMNEgsUUFBRSxFQUFFTyxLQUFLLENBQUxBLEtBQ0EsbUNBQXNCQSxLQUFLLENBRDNCQSxFQUNBLENBREFBLEdBRUFXLFVBQVUsSUFKaEI7QUFBTyxLQUFQO0FBRm1CalAsS0FRbEIsV0FBV3NPLEtBQUssQ0FBaEIsTUFBdUJBLEtBQUssQ0FSL0IsRUFRRyxDQVJrQnRPLENBQXJCOztBQVVBLE1BQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSixNQXZIdUQsQ0F5SHZEOztBQUNBLE1BQUksb0JBQUosVUFBa0M7QUFDaENnSCxZQUFRLGdCQUFHLHdDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0E5SHVELENBOEh2RDs7O0FBQ0EsUUFBTWtJLEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFNQyxRQUFhLEdBQUdGLEtBQUssSUFBSSxpQkFBVEEsWUFBc0NBLEtBQUssQ0FBakU7QUFFQSxRQUFNLGtDQUFrQyxzQ0FBZ0I7QUFDdERHLGNBQVUsRUFEWjtBQUF3RCxHQUFoQixDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUd0UCwyQkFDWnVQLEVBQUQsSUFBaUI7QUFDZkMsc0JBQWtCLENBQWxCQSxFQUFrQixDQUFsQkE7O0FBQ0Esa0JBQWM7QUFDWixVQUFJLG9CQUFKLFlBQW9DSixRQUFRLENBQTVDLEVBQTRDLENBQVJBLENBQXBDLEtBQ0ssSUFBSSxvQkFBSixVQUFrQztBQUNyQ0EsZ0JBQVEsQ0FBUkE7QUFFSDtBQUNGO0FBVFlwUCxLQVViLFdBVkYsa0JBVUUsQ0FWYUEsQ0FBZjs7QUFZQSx3QkFBVSxNQUFNO0FBQ2QsVUFBTXlQLGNBQWMsR0FBR0MsU0FBUyxJQUFUQSxLQUFrQix3QkFBekMsSUFBeUMsQ0FBekM7QUFDQSxVQUFNaEMsU0FBUyxHQUNiLHlDQUF5Q2xkLE1BQU0sSUFBSUEsTUFBTSxDQUQzRDtBQUVBLFVBQU1tZixZQUFZLEdBQ2hCbEMsVUFBVSxDQUFDdEgsSUFBSSxHQUFKQSxZQUFtQnVILFNBQVMsR0FBRyxNQUFILFlBRHpDLEVBQ2F2SCxDQUFELENBRFo7O0FBRUEsUUFBSXNKLGNBQWMsSUFBSSxDQUF0QixjQUFxQztBQUNuQ2IsY0FBUSxtQkFBbUI7QUFDekJDLGNBQU0sRUFEUkQ7QUFBMkIsT0FBbkIsQ0FBUkE7QUFJSDtBQVhELEtBV0csaUNBWEgsTUFXRyxDQVhIO0FBYUEsUUFBTWdCLFVBS0wsR0FBRztBQUNGclMsT0FBRyxFQUREO0FBRUZzUyxXQUFPLEVBQUdsUSxDQUFELElBQXlCO0FBQ2hDLFVBQUl1UCxLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLFlBQW5CLFlBQThEO0FBQzVEQSxhQUFLLENBQUxBO0FBRUY7O0FBQUEsVUFBSSxDQUFDdlAsQ0FBQyxDQUFOLGtCQUF5QjtBQUN2Qm1RLG1CQUFXLGdEQUFYQSxNQUFXLENBQVhBO0FBRUg7QUFkSDtBQUtJLEdBTEo7O0FBaUJBRixZQUFVLENBQVZBLGVBQTJCalEsQ0FBRCxJQUF5QjtBQUNqRCxRQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixRQUFJdVAsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLFdBQUssQ0FBTEE7QUFFRk47O0FBQUFBLFlBQVEsbUJBQW1CO0FBQUVtQixjQUFRLEVBQXJDbkI7QUFBMkIsS0FBbkIsQ0FBUkE7QUFMRmdCLElBL0t1RCxDQXVMdkQ7QUFDQTs7O0FBQ0EsTUFBSXRCLEtBQUssQ0FBTEEsWUFBbUJZLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUE5RCxLQUE2QyxDQUE3QyxFQUF3RTtBQUN0RSxVQUFNeEIsU0FBUyxHQUNiLHlDQUF5Q2xkLE1BQU0sSUFBSUEsTUFBTSxDQUQzRDtBQUdBLFVBQU13ZixZQUFZLEdBQUcsNENBR25CeGYsTUFBTSxJQUFJQSxNQUFNLENBSEcsU0FJbkJBLE1BQU0sSUFBSUEsTUFBTSxDQUpsQixhQUFxQixDQUFyQjtBQU9Bb2YsY0FBVSxDQUFWQSxPQUNFSSxZQUFZLElBQ1oseUJBQVksc0NBQXlCeGYsTUFBTSxJQUFJQSxNQUFNLENBRnZEb2YsYUFFYyxDQUFaLENBRkZBO0FBS0Y7O0FBQUEsc0JBQU81UCxtQ0FBUCxVQUFPQSxDQUFQOzs7ZUFHYWlRLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlUZjtBQUNBO0FBQ0E7O0FBQ08sdUNBQXVEO0FBQzVELFNBQU9oUCxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTWlQLDBCQUEwQixHQUFHQyxTQUNyQ2xQLFNBRHFDa1AsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09QLE1BQU1DLG1CQUFtQixHQUN0QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9uZCxVQUFVLENBQUMsWUFBWTtBQUM1Qm9kLE1BQUUsQ0FBQztBQUNEQyxnQkFBVSxFQURUO0FBRURDLG1CQUFhLEVBQUUsWUFBWTtBQUN6QixlQUFPQyxJQUFJLENBQUpBLE9BQVksTUFBTUosSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFaSSxDQUFQO0FBSEpIO0FBQUcsS0FBRCxDQUFGQTtBQURlLEtBQWpCLENBQWlCLENBQWpCO0FBTko7O2VBZ0JlSixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2Y7O0FBQ0Esa0ssQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTVEsaUJBQWlCLEdBQXZCOztBQW1DQSx5Q0FJYztBQUNaLE1BQUlDLEtBQWdDLEdBQUdqWCxHQUFHLENBQUhBLElBQXZDLEdBQXVDQSxDQUF2Qzs7QUFDQSxhQUFXO0FBQ1QsUUFBSSxZQUFKLE9BQXVCO0FBQ3JCLGFBQU9pWCxLQUFLLENBQVo7QUFFRjs7QUFBQSxXQUFPQyxPQUFPLENBQVBBLFFBQVAsS0FBT0EsQ0FBUDtBQUVGOztBQUFBO0FBQ0EsUUFBTUMsSUFBZ0IsR0FBRyxZQUFnQkMsT0FBRCxJQUFhO0FBQ25EQyxZQUFRLEdBQVJBO0FBREYsR0FBeUIsQ0FBekI7QUFHQXJYLEtBQUcsQ0FBSEEsU0FBY2lYLEtBQUssR0FBRztBQUFFRyxXQUFPLEVBQVQ7QUFBc0JFLFVBQU0sRUFBbER0WDtBQUFzQixHQUF0QkE7QUFDQSxTQUFPdVgsU0FBUyxHQUNaO0FBQ0FBLFdBQVMsR0FBVEEsS0FBa0J0UixLQUFELEtBQVlvUixRQUFRLENBQVJBLEtBQVEsQ0FBUkEsRUFGakIsS0FFSyxDQUFqQkUsQ0FGWSxHQUFoQjtBQWFGOztBQUFBLDJCQUFzRDtBQUNwRCxNQUFJO0FBQ0ZDLFFBQUksR0FBR3ZJLFFBQVEsQ0FBUkEsY0FBUHVJLE1BQU92SSxDQUFQdUk7QUFDQSxXQUNFO0FBQ0E7QUFDQyxPQUFDLENBQUNySSxNQUFNLENBQVIsd0JBQWlDLENBQUMsQ0FBRUYsUUFBRCxDQUFwQyxZQUFDLElBQ0R1SSxJQUFJLENBQUpBLGlCQUpGLFVBSUVBO0FBSkY7QUFNQSxHQVJGLENBUUUsZ0JBQU07QUFDTjtBQUVIO0FBRUQ7O0FBQUEsTUFBTUMsV0FBb0IsR0FBR0MsV0FBN0I7O0FBRUEsd0NBSWdCO0FBQ2QsU0FBTyxZQUFZLGNBQWM7QUFDL0IsUUFBSXpJLFFBQVEsQ0FBUkEsY0FBd0IsK0JBQThCMUMsSUFBMUQsSUFBSTBDLENBQUosRUFBcUU7QUFDbkUsYUFBTzBJLEdBQVA7QUFHRkg7O0FBQUFBLFFBQUksR0FBR3ZJLFFBQVEsQ0FBUkEsY0FBUHVJLE1BQU92SSxDQUFQdUksQ0FMK0IsQ0FPL0I7O0FBQ0EsWUFBUUEsSUFBSSxDQUFKQTtBQUNSQSxRQUFJLENBQUpBO0FBQ0FBLFFBQUksQ0FBSkEsY0FBb0JqQixTQUFwQmlCO0FBQ0FBLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQSxjQVorQixDQWMvQjs7QUFDQUEsUUFBSSxDQUFKQTtBQUVBdkksWUFBUSxDQUFSQTtBQWpCRixHQUFPLENBQVA7QUFxQkY7O0FBQUEsTUFBTTJJLGdCQUFnQixHQUFHQyxNQUFNLENBQS9CLGtCQUErQixDQUEvQixDLENBQ0E7O0FBQ08sNkJBQTJDO0FBQ2hELFNBQU8vTSxNQUFNLENBQU5BLHNDQUFQLEVBQU9BLENBQVA7QUFHSzs7QUFBQSwyQkFBd0Q7QUFDN0QsU0FBT3RULEdBQUcsSUFBSW9nQixnQkFBZ0IsSUFBOUI7QUFHRjs7QUFBQSxtQ0FHb0I7QUFDbEIsU0FBTyxZQUFZLHFCQUFxQjtBQUN0Q0UsVUFBTSxHQUFHN0ksUUFBUSxDQUFSQSxjQUFUNkksUUFBUzdJLENBQVQ2SSxDQURzQyxDQUd0QztBQUNBO0FBQ0E7O0FBQ0FBLFVBQU0sQ0FBTkE7O0FBQ0FBLFVBQU0sQ0FBTkEsVUFBaUIsTUFDZkMsTUFBTSxDQUFDQyxjQUFjLENBQUMsVUFBVywwQkFBeUJDLEdBRDVESCxFQUN3QixDQUFELENBQWYsQ0FEUkEsQ0FQc0MsQ0FVdEM7QUFDQTs7O0FBQ0FBLFVBQU0sQ0FBTkEsY0FBcUJ2QixTQUFyQnVCLENBWnNDLENBY3RDO0FBQ0E7O0FBQ0FBLFVBQU0sQ0FBTkE7QUFDQTdJLFlBQVEsQ0FBUkE7QUFqQkYsR0FBTyxDQUFQO0FBcUJGOztBQUFBLDhCQUE0RDtBQUMxRCxTQUFPLFlBQVksc0JBQ2pCLGtDQUFvQixNQUFNelYsVUFBVSxDQUFDLE1BQU11ZSxNQUFNLENBQWIsR0FBYSxDQUFiLEVBRHRDLEVBQ3NDLENBQXBDLENBREssQ0FBUDtBQUtGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLGtDQUFnRTtBQUNyRSxNQUFJdEIsSUFBSSxDQUFSLGtCQUEyQjtBQUN6QixXQUFPUyxPQUFPLENBQVBBLFFBQWdCVCxJQUFJLENBQTNCLGdCQUFPUyxDQUFQO0FBR0Y7O0FBQUEsUUFBTWdCLGVBQTZDLEdBQUcsWUFFbkRkLE9BQUQsSUFBYTtBQUNiO0FBQ0EsVUFBTVIsRUFBRSxHQUFHSCxJQUFJLENBQWY7O0FBQ0FBLFFBQUksQ0FBSkEsc0JBQTJCLE1BQU07QUFDL0JXLGFBQU8sQ0FBQ1gsSUFBSSxDQUFaVyxnQkFBTyxDQUFQQTtBQUNBUixRQUFFLElBQUlBLEVBQU5BO0FBRkZIO0FBTEYsR0FBc0QsQ0FBdEQ7QUFVQSxTQUFPUyxPQUFPLENBQVBBLEtBQWEsa0JBRWxCaUIsV0FBVyxvQkFFVEgsY0FBYyxDQUFDLFVBSm5CLHNDQUltQixDQUFELENBRkwsQ0FGTyxDQUFiZCxDQUFQO0FBYUY7O0FBQUEsOENBR3VCO0FBQ3JCLFlBQTRDO0FBQzFDLFdBQU8sT0FBTyxDQUFQLFFBQWdCO0FBQ3JCa0IsYUFBTyxFQUFFLENBQ1BDLFdBQVcsR0FBWEEsK0JBRUVDLFNBQVMsQ0FBQywyQ0FKTyxLQUlQLENBQUQsQ0FISixDQURZO0FBTXJCO0FBQ0FDLFNBQUcsRUFQTDtBQUF1QixLQUFoQixDQUFQO0FBVUY7O0FBQUEsU0FBT0Msc0JBQXNCLEdBQXRCQSxLQUErQkMsUUFBRCxJQUFjO0FBQ2pELFFBQUksRUFBRUMsS0FBSyxJQUFYLFFBQUksQ0FBSixFQUEwQjtBQUN4QixZQUFNVixjQUFjLENBQUMsVUFBVywyQkFBMEJVLEtBQTFELEVBQXFCLENBQUQsQ0FBcEI7QUFFRjs7QUFBQSxVQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBUkEsS0FBUSxDQUFSQSxLQUNkeEIsS0FBRCxJQUFXb0IsV0FBVyxHQUFYQSxZQUEwQkMsU0FBUyxDQURoRCxLQUNnRCxDQUQvQkcsQ0FBakI7QUFHQSxXQUFPO0FBQ0xMLGFBQU8sRUFBRU8sUUFBUSxDQUFSQSxPQUFpQkMsQ0FBRCxJQUFPQSxDQUFDLENBQURBLFNBRDNCLEtBQzJCQSxDQUF2QkQsQ0FESjtBQUVMSixTQUFHLEVBQUVJLFFBQVEsQ0FBUkEsT0FBaUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFEQSxTQUY5QixNQUU4QkEsQ0FBdkJEO0FBRkEsS0FBUDtBQVBGLEdBQU9ILENBQVA7QUFjRjs7QUFBQSx3Q0FBNkQ7QUFDM0QsUUFBTUssV0FHTCxHQUFHLElBSEosR0FHSSxFQUhKO0FBSUEsUUFBTUMsYUFBNEMsR0FBRyxJQUFyRCxHQUFxRCxFQUFyRDtBQUNBLFFBQU1DLFdBQWtELEdBQUcsSUFBM0QsR0FBMkQsRUFBM0Q7QUFDQSxRQUFNQyxNQUdMLEdBQUcsSUFISixHQUdJLEVBSEo7O0FBS0EsbUNBQTJEO0FBQ3pELFFBQUk3QixJQUFrQyxHQUFHMkIsYUFBYSxDQUFiQSxJQUF6QyxHQUF5Q0EsQ0FBekM7O0FBQ0EsY0FBVTtBQUNSO0FBR0YsS0FOeUQsQ0FNekQ7OztBQUNBLFFBQUk3SixRQUFRLENBQVJBLGNBQXdCLGdCQUFlZ0osR0FBM0MsSUFBSWhKLENBQUosRUFBcUQ7QUFDbkQsYUFBT2lJLE9BQU8sQ0FBZCxPQUFPQSxFQUFQO0FBR0Y0Qjs7QUFBQUEsaUJBQWEsQ0FBYkEsU0FBd0IzQixJQUFJLEdBQUc4QixZQUFZLENBQTNDSCxHQUEyQyxDQUEzQ0E7QUFDQTtBQUdGOztBQUFBLGlDQUFpRTtBQUMvRCxRQUFJM0IsSUFBMEMsR0FBRzRCLFdBQVcsQ0FBWEEsSUFBakQsSUFBaURBLENBQWpEOztBQUNBLGNBQVU7QUFDUjtBQUdGQTs7QUFBQUEsZUFBVyxDQUFYQSxVQUVHNUIsSUFBSSxHQUFHK0IsS0FBSyxDQUFMQSxJQUFLLENBQUxBLE1BQ0N2QixHQUFELElBQVM7QUFDYixVQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsY0FBTSxVQUFXLDhCQUE2QnBMLElBQTlDLEVBQU0sQ0FBTjtBQUVGOztBQUFBLGFBQU9vTCxHQUFHLENBQUhBLFlBQWlCd0IsSUFBRCxLQUFXO0FBQUU1TSxZQUFJLEVBQU47QUFBY25LLGVBQU8sRUFBdkQ7QUFBa0MsT0FBWCxDQUFoQnVWLENBQVA7QUFMSXVCLGFBT0UxaEIsR0FBRCxJQUFTO0FBQ2QsWUFBTXdnQixjQUFjLENBQXBCLEdBQW9CLENBQXBCO0FBVk5lLEtBRVVHLENBRlZIO0FBYUE7QUFHRjs7QUFBQSxTQUFPO0FBQ0xLLGtCQUFjLFFBQWdCO0FBQzVCLGFBQU9DLFVBQVUsUUFBakIsV0FBaUIsQ0FBakI7QUFGRzs7QUFJTEMsZ0JBQVksaUJBQXdDO0FBQ2xEcEMsYUFBTyxDQUFQQSxzQkFDU3FDLEVBQUQsSUFBUUEsRUFEaEJyQyxTQUdLc0MsT0FBRCxLQUFtQjtBQUNqQkMsaUJBQVMsRUFBR0QsT0FBTyxJQUFJQSxPQUFPLENBQW5CLE9BQUNBLElBREs7QUFFakJBLGVBQU8sRUFMYnRDO0FBR3VCLE9BQW5CLENBSEpBLEVBT0sxZixHQUFELEtBQVU7QUFBRWxCLGFBQUssRUFQckI0Z0I7QUFPYyxPQUFWLENBUEpBLE9BU1M3TyxLQUFELElBQTRCO0FBQ2hDLGNBQU1xUixHQUFHLEdBQUdiLFdBQVcsQ0FBWEEsSUFBWixLQUFZQSxDQUFaO0FBQ0FBLG1CQUFXLENBQVhBO0FBQ0EsWUFBSWEsR0FBRyxJQUFJLGFBQVgsS0FBNkJBLEdBQUcsQ0FBSEE7QUFaakN4QztBQUxHOztBQW9CTHlDLGFBQVMsUUFBZ0I7QUFDdkIsYUFBT04sVUFBVSxnQkFBa0MsWUFBWTtBQUM3RCxZQUFJO0FBQ0YsZ0JBQU07QUFBQTtBQUFBO0FBQUEsY0FBbUIsTUFBTU8sZ0JBQWdCLGNBQS9DLEtBQStDLENBQS9DO0FBQ0EsZ0JBQU0sYUFBYSxNQUFNMUMsT0FBTyxDQUFQQSxJQUFZLENBQ25DMkIsV0FBVyxDQUFYQSxrQkFFSTNCLE9BQU8sQ0FBUEEsSUFBWWtCLE9BQU8sQ0FBUEEsSUFIbUIsa0JBR25CQSxDQUFabEIsQ0FIK0IsRUFJbkNBLE9BQU8sQ0FBUEEsSUFBWXFCLEdBQUcsQ0FBSEEsSUFKZCxlQUljQSxDQUFackIsQ0FKbUMsQ0FBWkEsQ0FBekI7QUFPQSxnQkFBTTJDLFVBQTJCLEdBQUcsTUFBTTNDLE9BQU8sQ0FBUEEsS0FBYSxDQUNyRCxvQkFEcUQsS0FDckQsQ0FEcUQsRUFFckRpQixXQUFXLG9CQUVUSCxjQUFjLENBQ1osVUFBVyxtQ0FBa0NVLEtBTG5ELEVBS00sQ0FEWSxDQUZMLENBRjBDLENBQWJ4QixDQUExQztBQVNBLGdCQUFNUyxHQUFxQixHQUFHN00sTUFBTSxDQUFOQSxPQUc1QjtBQUg0QkE7QUFHNUIsV0FINEJBLEVBQTlCLFVBQThCQSxDQUE5QjtBQUlBLGlCQUFPLHFDQUFQO0FBQ0EsU0F2QkYsQ0F1QkUsWUFBWTtBQUNaLGlCQUFPO0FBQUV4VSxpQkFBSyxFQUFkO0FBQU8sV0FBUDtBQUVIO0FBM0JELE9BQWlCLENBQWpCO0FBckJHOztBQWtETDBlLFlBQVEsUUFBK0I7QUFDckM7QUFDQTtBQUNBOztBQUNBLFVBQUs4RSxFQUFFLEdBQUlDLFNBQUQsQ0FBVixZQUEwQztBQUN4QztBQUNBLFlBQUlELEVBQUUsQ0FBRkEsWUFBZSxVQUFVQSxFQUFFLENBQS9CLGFBQW1CLENBQW5CLEVBQWdELE9BQU81QyxPQUFPLENBQWQsT0FBT0EsRUFBUDtBQUVsRDs7QUFBQSxhQUFPLGdCQUFnQixjQUFoQixLQUFnQixDQUFoQixNQUNFOEMsTUFBRCxJQUNKOUMsT0FBTyxDQUFQQSxJQUNFTyxXQUFXLEdBQ1B1QyxNQUFNLENBQU5BLFlBQW9CbEMsTUFBRCxJQUFZbUMsY0FBYyxTQUR0QyxRQUNzQyxDQUE3Q0QsQ0FETyxHQUhWLEVBRUg5QyxDQUZHLE9BUUMsTUFBTTtBQUNWLDBDQUFvQixNQUFNLGVBQTFCLEtBQTBCLENBQTFCO0FBVEcsZ0JBWUg7QUFDQSxZQUFNLENBYlYsQ0FBTyxDQUFQO0FBMURKOztBQUFPLEdBQVA7OztlQTZFYWdELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6VmY7O0FBQ0E7Ozs7O0FBQ0E7O0FBdUhBOzs7QUExSEE7O0FBbUJBLE1BQU1DLGVBQW9DLEdBQUc7QUFDM0N2akIsUUFBTSxFQURxQztBQUM3QjtBQUNkd2pCLGdCQUFjLEVBRjZCOztBQUczQ0MsT0FBSyxLQUFpQjtBQUNwQixRQUFJLEtBQUosUUFBaUIsT0FBT3pELEVBQVA7O0FBQ2pCLGVBQW1DLEVBR3BDO0FBUkg7O0FBQTZDLENBQTdDLEMsQ0FXQTs7QUFDQSxNQUFNMEQsaUJBQWlCLEdBQUcsdUhBQTFCLFNBQTBCLENBQTFCO0FBYUEsTUFBTUMsWUFBWSxHQUFHLDBHQUFyQixvQkFBcUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxrREFBekIsZ0JBQXlCLENBQXpCLEMsQ0FTQTs7QUFDQTFQLE1BQU0sQ0FBTkEsMENBQWlEO0FBQy9DcFQsS0FBRyxHQUFHO0FBQ0osV0FBTytpQixpQkFBUDtBQUZKM1A7O0FBQWlELENBQWpEQTtBQU1Bd1AsaUJBQWlCLENBQWpCQSxRQUEyQkksS0FBRCxJQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBNVAsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNwVCxPQUFHLEdBQUc7QUFDSixZQUFNZCxNQUFNLEdBQUcrakIsU0FBZjtBQUNBLGFBQU8vakIsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUhKa1U7O0FBQThDLEdBQTlDQTtBQUxGd1A7QUFhQSxnQkFBZ0IsQ0FBaEIsUUFBMEJJLEtBQUQsSUFBbUI7QUFDMUM7QUFDQTs7QUFBRVAsaUJBQUQsT0FBQ0EsR0FBaUMsQ0FBQyxHQUFELFNBQW9CO0FBQ3JELFVBQU12akIsTUFBTSxHQUFHK2pCLFNBQWY7QUFDQSxXQUFPL2pCLE1BQU0sQ0FBTkEsS0FBTSxDQUFOQSxDQUFjLEdBQXJCLElBQU9BLENBQVA7QUFGRCxHQUFDdWpCO0FBRko7QUFRQUksWUFBWSxDQUFaQSxRQUFzQmhILEtBQUQsSUFBbUI7QUFDdEM0RyxpQkFBZSxDQUFmQSxNQUFzQixNQUFNO0FBQzFCTSxzQ0FBd0IsQ0FBQyxHQUFELFNBQWE7QUFDbkMsWUFBTUcsVUFBVSxHQUFJLEtBQUlySCxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTXNILGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNaNWpCLGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDMmpCLFVBQXREM2pCO0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRU8sR0FBRyxDQUFDc2pCLE9BQVEsS0FBSXRqQixHQUFHLENBQUN1akIsS0FBckM5akI7QUFFSDtBQUNGO0FBYkR3akI7QUFERk47QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTVcsT0FBTyxHQUNYLGdDQURGO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU9YLGVBQWUsQ0FBdEI7QUFHRixDLENBQUE7OztlQUNlQSxlLEVBRWY7Ozs7QUFHTyxxQkFBaUM7QUFDdEMsU0FBTy9ULDBCQUFpQjRVLGVBQXhCLGFBQU81VSxDQUFQO0FBR0YsQyxDQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTTZVLFlBQVksR0FBRyxDQUFDLEdBQUQsU0FBaUM7QUFDM0RkLGlCQUFlLENBQWZBLFNBQXlCLElBQUlNLFNBQUosUUFBVyxHQUFwQ04sSUFBeUIsQ0FBekJBO0FBQ0FBLGlCQUFlLENBQWZBLHVCQUF3Q3ZELEVBQUQsSUFBUUEsRUFBL0N1RDtBQUNBQSxpQkFBZSxDQUFmQTtBQUVBLFNBQU9BLGVBQWUsQ0FBdEI7QUFMSyxFLENBUVA7Ozs7O0FBQ08sMENBQThEO0FBQ25FLFFBQU1lLE9BQU8sR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBZDs7QUFFQSxPQUFLLE1BQUwsK0JBQTBDO0FBQ3hDLFFBQUksT0FBT0QsT0FBTyxDQUFkLFFBQWMsQ0FBZCxLQUFKLFVBQTJDO0FBQ3pDQyxjQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUJyUSxNQUFNLENBQU5BLE9BQ25Cc1EsS0FBSyxDQUFMQSxRQUFjRixPQUFPLENBQXJCRSxRQUFxQixDQUFyQkEsU0FEbUJ0USxJQUVuQm9RLE9BQU8sQ0FGVEMsUUFFUyxDQUZZclEsQ0FBckJxUSxDQUR5QyxDQUl2Qzs7QUFDRjtBQUdGQTs7QUFBQUEsWUFBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCRCxPQUFPLENBQTVCQyxRQUE0QixDQUE1QkE7QUFHRixHQWhCbUUsQ0FnQm5FOzs7QUFDQUEsVUFBUSxDQUFSQSxTQUFrQlYsaUJBQWxCVTtBQUVBWCxrQkFBZ0IsQ0FBaEJBLFFBQTBCRSxLQUFELElBQVc7QUFDbENTLFlBQVEsQ0FBUkEsS0FBUSxDQUFSQSxHQUFrQixDQUFDLEdBQUQsU0FBb0I7QUFDcEMsYUFBT0QsT0FBTyxDQUFQQSxLQUFPLENBQVBBLENBQWUsR0FBdEIsSUFBT0EsQ0FBUDtBQURGQztBQURGWDtBQU1BO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFLRDs7QUFDQTs7QUFXQSxNQUFNYSx1QkFBdUIsR0FBRyxnQ0FBaEM7O0FBRU8seUJBQTRDO0FBQUE7QUFBNUM7QUFBNEMsQ0FBNUMsRUFHcUQ7QUFDMUQsUUFBTUMsVUFBbUIsR0FBR0MsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTUMsU0FBUyxHQUFHLFdBQWxCLE1BQWtCLEdBQWxCO0FBQ0EsUUFBTSx3QkFBd0IscUJBQTlCLEtBQThCLENBQTlCO0FBRUEsUUFBTTlGLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJNkYsU0FBUyxDQUFiLFNBQXVCO0FBQ3JCQSxlQUFTLENBQVRBO0FBQ0FBLGVBQVMsQ0FBVEE7QUFHRjs7QUFBQSxRQUFJRixVQUFVLElBQWQsU0FBMkI7O0FBRTNCLFFBQUkzRixFQUFFLElBQUlBLEVBQUUsQ0FBWixTQUFzQjtBQUNwQjZGLGVBQVMsQ0FBVEEsVUFBb0JDLE9BQU8sS0FFeEIzRixTQUFELElBQWVBLFNBQVMsSUFBSTRGLFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRkY7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYyxrQ0FBb0IsTUFBTUUsVUFBVSxDQUFwQyxJQUFvQyxDQUFwQztBQUVqQjtBQUpELEtBSUcsQ0FKSCxPQUlHLENBSkg7QUFNQSxTQUFPLFNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEsNkNBSWM7QUFDWixRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBNkJDLGNBQWMsQ0FBakQsT0FBaUQsQ0FBakQ7QUFDQXhZLFVBQVEsQ0FBUkE7QUFFQXlZLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ3pZLFlBQVEsQ0FBUkE7QUFDQXlZLFlBQVEsQ0FBUkEsbUJBRmdDLENBSWhDOztBQUNBLFFBQUl6WSxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJ5WSxjQUFRLENBQVJBO0FBQ0FDLGVBQVMsQ0FBVEE7QUFFSDtBQVREO0FBWUY7O0FBQUEsTUFBTUEsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCOztBQUNBLGlDQUF3RTtBQUN0RSxRQUFNbmhCLEVBQUUsR0FBR3FaLE9BQU8sQ0FBUEEsY0FBWDtBQUNBLE1BQUlvSCxRQUFRLEdBQUdVLFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNMVksUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsUUFBTXlZLFFBQVEsR0FBRyx5QkFBMEJFLE9BQUQsSUFBYTtBQUNyREEsV0FBTyxDQUFQQSxRQUFpQjdFLEtBQUQsSUFBVztBQUN6QixZQUFNOEUsUUFBUSxHQUFHNVksUUFBUSxDQUFSQSxJQUFhOFQsS0FBSyxDQUFuQyxNQUFpQjlULENBQWpCO0FBQ0EsWUFBTTJTLFNBQVMsR0FBR21CLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJOEUsUUFBUSxJQUFaLFdBQTJCO0FBQ3pCQSxnQkFBUSxDQUFSQSxTQUFRLENBQVJBO0FBRUg7QUFOREQ7QUFEZSxLQUFqQixPQUFpQixDQUFqQjtBQVVBRCxXQUFTLENBQVRBLFFBRUdWLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFGZFU7QUFFYyxHQUZkQTtBQVFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQW9EO0FBQ2xELHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NHLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTTFXLElBQUksR0FDUndXLGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWExVyxJQUE5QzBXO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDTSxnREFNTDtBQUNBLHFCQURBLENBRUE7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHN1csUUFBUSxDQUFSQSxNQUF0QixHQUFzQkEsQ0FBdEI7QUFFQyxHQUFDOFcsT0FBTyxJQUFSLFNBQXNCbkgsTUFBRCxJQUFZO0FBQ2hDLFFBQUlrSCxhQUFhLENBQWJBLENBQWEsQ0FBYkEsbUJBQW1DbEgsTUFBTSxDQUE3QyxXQUF1Q0EsRUFBdkMsRUFBNkQ7QUFDM0RvSCxvQkFBYyxHQUFkQTtBQUNBRixtQkFBYSxDQUFiQTtBQUNBN1csY0FBUSxHQUFHNlcsYUFBYSxDQUFiQSxhQUFYN1c7QUFDQTtBQUVGOztBQUFBO0FBUEQ7QUFVRCxTQUFPO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQVVlLGdCQUE2QjtBQUMxQyxRQUFNZ1gsR0FBK0IsR0FBR3hSLE1BQU0sQ0FBTkEsT0FBeEMsSUFBd0NBLENBQXhDO0FBRUEsU0FBTztBQUNMd0UsTUFBRSxnQkFBaUM7QUFDakM7QUFBQyxPQUFDZ04sR0FBRyxDQUFIQSxJQUFHLENBQUhBLEtBQWNBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxHQUFmLEVBQUNBLENBQUQ7QUFGRTs7QUFLTEMsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSUQsR0FBRyxDQUFQLElBQU8sQ0FBUCxFQUFlO0FBQ2JBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVRJOztBQVdMRSxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0YsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCRyxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBYkw7O0FBQU8sR0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDs7QUFLQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBbENBO0FBQUE7QUFDQTs7O0FBK0RBOztBQUVBLElBQUlsRyxLQUFKLEVBQXFDLEVBS3JDOztBQUFBLE1BQU1tRyxRQUFRLEdBQUluRyxVQUFsQjs7QUFFQSxrQ0FBa0M7QUFDaEMsU0FBT3pMLE1BQU0sQ0FBTkEsT0FBYyxVQUFkQSxpQkFBYyxDQUFkQSxFQUE0QztBQUNqRDZSLGFBQVMsRUFEWDtBQUFtRCxHQUE1QzdSLENBQVA7QUFLRjs7QUFBQSxxQ0FBc0Q7QUFDcEQsU0FBTzhSLE1BQU0sSUFBSXZWLElBQUksQ0FBSkEsV0FBVnVWLEdBQVV2VixDQUFWdVYsR0FDSHZWLElBQUksS0FBSkEsTUFDRSx3REFERkEsTUFDRSxDQURGQSxHQUVHLEdBQUV1VixNQUFPLEdBQUVDLGVBQWUsQ0FBZkEsSUFBZSxDQUFmQSxXQUFnQ3hWLElBQUksQ0FBSkEsVUFBaEN3VixDQUFnQ3hWLENBQWhDd1YsR0FBb0R4VixJQUgvRHVWLEtBQVA7QUFPSzs7QUFBQSwrREFLTDtBQUNBLE1BQUlyRyxLQUFKLEVBQXFDLEVBYXJDOztBQUFBO0FBR0s7O0FBQUEsZ0RBSUw7QUFDQSxNQUFJQSxLQUFKLEVBQXFDLEVBUXJDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFNckM7O0FBQUE7QUFHRjs7QUFBQSwrQkFBdUM7QUFDckMsUUFBTXVHLFVBQVUsR0FBR3pWLElBQUksQ0FBSkEsUUFBbkIsR0FBbUJBLENBQW5CO0FBQ0EsUUFBTTBWLFNBQVMsR0FBRzFWLElBQUksQ0FBSkEsUUFBbEIsR0FBa0JBLENBQWxCOztBQUVBLE1BQUl5VixVQUFVLEdBQUcsQ0FBYkEsS0FBbUJDLFNBQVMsR0FBRyxDQUFuQyxHQUF1QztBQUNyQzFWLFFBQUksR0FBR0EsSUFBSSxDQUFKQSxhQUFrQnlWLFVBQVUsR0FBRyxDQUFiQSxpQkFBekJ6VixTQUFPQSxDQUFQQTtBQUVGOztBQUFBO0FBR0s7O0FBQUEsMkJBQTRDO0FBQ2pEQSxNQUFJLEdBQUd3VixlQUFlLENBQXRCeFYsSUFBc0IsQ0FBdEJBO0FBQ0EsU0FBT0EsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQnFWLFFBQVEsR0FBcEQsR0FBNEJyVixDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU8yVixhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hEM1YsTUFBSSxHQUFHQSxJQUFJLENBQUpBLE1BQVdxVixRQUFRLENBQTFCclYsTUFBT0EsQ0FBUEE7QUFDQSxNQUFJLENBQUNBLElBQUksQ0FBSkEsV0FBTCxHQUFLQSxDQUFMLEVBQTJCQSxJQUFJLEdBQUksSUFBR0EsSUFBWEE7QUFDM0I7QUFHRjtBQUFBO0FBQ0E7QUFDQTs7O0FBQ08seUJBQTBDO0FBQy9DO0FBQ0EsTUFBSTRWLEdBQUcsQ0FBSEEsbUJBQXVCQSxHQUFHLENBQUhBLFdBQTNCLEdBQTJCQSxDQUEzQixFQUFnRDs7QUFDaEQsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLFdBQXZCLGlCQUF1QixHQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxhQUFqQixjQUFpQixDQUFqQjtBQUNBLFdBQU9BLFFBQVEsQ0FBUkEsNkJBQXNDQyxXQUFXLENBQUNELFFBQVEsQ0FBakUsUUFBd0QsQ0FBeEQ7QUFDQSxHQUxGLENBS0UsVUFBVTtBQUNWO0FBRUg7QUFJTTs7QUFBQSxpREFJTDtBQUNBLE1BQUlFLGlCQUFpQixHQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBRywrQkFBckIsS0FBcUIsQ0FBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUdELFlBQVksQ0FBbEM7QUFDQSxRQUFNRSxjQUFjLEdBQ2xCO0FBQ0EsR0FBQ0MsVUFBVSxLQUFWQSxRQUF1QixpREFBdkJBLFVBQXVCLENBQXZCQSxHQUFELE9BQ0E7QUFDQTtBQUpGO0FBT0FKLG1CQUFpQixHQUFqQkE7QUFDQSxRQUFNamlCLE1BQU0sR0FBRzBQLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQzFQLE1BQU0sQ0FBTkEsTUFBY3NpQixLQUFELElBQVc7QUFDdkIsUUFBSXpYLEtBQUssR0FBR3VYLGNBQWMsQ0FBZEEsS0FBYyxDQUFkQSxJQUFaO0FBQ0EsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUF1QkQsYUFBYSxDQUExQyxLQUEwQyxDQUExQyxDQUZ1QixDQUl2QjtBQUNBOztBQUNBLFFBQUlJLFFBQVEsR0FBSSxJQUFHQyxNQUFNLFdBQVcsRUFBRyxHQUFFRixLQUF6Qzs7QUFDQSxrQkFBYztBQUNaQyxjQUFRLEdBQUksR0FBRSxlQUFlLEVBQUcsSUFBR0EsUUFBbkNBO0FBRUY7O0FBQUEsUUFBSUMsTUFBTSxJQUFJLENBQUN4QyxLQUFLLENBQUxBLFFBQWYsS0FBZUEsQ0FBZixFQUFxQ25WLEtBQUssR0FBRyxDQUFSQSxLQUFRLENBQVJBO0FBRXJDLFdBQ0UsQ0FBQzRYLFFBQVEsSUFBSUgsS0FBSyxJQUFsQixxQkFDQTtBQUNDTCxxQkFBaUIsR0FDaEJBLGlCQUFpQixDQUFqQkEsa0JBRUVPLE1BQU0sR0FDRDNYLEtBQUQsSUFBQ0EsRUFFRztBQUNBO0FBQ0E7QUFDQTtBQUNDNlgsV0FBRCxJQUFhQyxrQkFBa0IsQ0FObkMsT0FNbUMsQ0FObEM5WCxFQUFELElBQUNBLENBREMsR0FDREEsQ0FEQyxHQVVGOFgsa0JBQWtCLENBWnhCVixLQVl3QixDQVp4QkEsS0FKSixHQUNFLENBREY7QUFiSixHQUNHamlCLENBREgsRUFpQ0U7QUFDQWlpQixxQkFBaUIsR0FBakJBLEdBREEsQ0FDdUI7QUFFdkI7QUFDQTtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMVyxVQUFNLEVBRlI7QUFBTyxHQUFQO0FBTUY7O0FBQUEsMkNBQXFFO0FBQ25FLFFBQU1DLGFBQTZCLEdBQW5DO0FBRUFuVCxRQUFNLENBQU5BLG9CQUE0QkUsR0FBRCxJQUFTO0FBQ2xDLFFBQUksQ0FBQzVQLE1BQU0sQ0FBTkEsU0FBTCxHQUFLQSxDQUFMLEVBQTJCO0FBQ3pCNmlCLG1CQUFhLENBQWJBLEdBQWEsQ0FBYkEsR0FBcUIxWSxLQUFLLENBQTFCMFksR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRG5UO0FBS0E7QUFHRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxtREFJRztBQUNSO0FBQ0EsUUFBTW9ULElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQ2Ysa0NBQWtDLGlDQURwQyxJQUNvQyxDQURwQyxDQUhRLENBS1I7O0FBQ0EsTUFBSSxDQUFDQyxVQUFVLENBQWYsV0FBZSxDQUFmLEVBQThCO0FBQzVCLFdBQVFDLFNBQVMsR0FBRyxDQUFILFdBQUcsQ0FBSCxHQUFqQjtBQUVGOztBQUFBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcscUJBQWpCLElBQWlCLENBQWpCO0FBQ0FBLFlBQVEsQ0FBUkEsV0FBb0Isd0RBQTJCQSxRQUFRLENBQXZEQSxRQUFvQixDQUFwQkE7QUFDQSxRQUFJQyxjQUFjLEdBQWxCOztBQUVBLFFBQ0UsK0JBQWVELFFBQVEsQ0FBdkIsYUFDQUEsUUFBUSxDQURSLGdCQURGLFdBSUU7QUFDQSxZQUFNL1ksS0FBSyxHQUFHLHlDQUF1QitZLFFBQVEsQ0FBN0MsWUFBYyxDQUFkO0FBRUEsWUFBTTtBQUFBO0FBQUE7QUFBQSxVQUFxQkUsYUFBYSxDQUN0Q0YsUUFBUSxDQUQ4QixVQUV0Q0EsUUFBUSxDQUY4QixVQUF4QyxLQUF3QyxDQUF4Qzs7QUFNQSxrQkFBWTtBQUNWQyxzQkFBYyxHQUFHLGlDQUFxQjtBQUNwQ2paLGtCQUFRLEVBRDRCO0FBRXBDbVosY0FBSSxFQUFFSCxRQUFRLENBRnNCO0FBR3BDL1ksZUFBSyxFQUFFbVosa0JBQWtCLFFBSDNCSCxNQUcyQjtBQUhXLFNBQXJCLENBQWpCQTtBQU1IO0FBRUQsS0EzQkUsQ0EyQkY7OztBQUNBLFVBQU1JLFlBQVksR0FDaEJMLFFBQVEsQ0FBUkEsV0FBb0JKLElBQUksQ0FBeEJJLFNBQ0lBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEeEJBLE1BQ0lBLENBREpBLEdBRUlBLFFBQVEsQ0FIZDtBQUtBLFdBQVFELFNBQVMsR0FDYixlQUFlRSxjQUFjLElBRGhCLFlBQ2IsQ0FEYSxHQUFqQjtBQUdBLEdBcENGLENBb0NFLFVBQVU7QUFDVixXQUFRRixTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFSDtBQUVEOztBQUFBLDBCQUFrQztBQUNoQyxRQUFNTyxNQUFNLEdBQUcsV0FBZixpQkFBZSxHQUFmO0FBRUEsU0FBTzNCLEdBQUcsQ0FBSEEscUJBQXlCQSxHQUFHLENBQUhBLFVBQWMyQixNQUFNLENBQTdDM0IsTUFBeUJBLENBQXpCQSxHQUFQO0FBR0Y7O0FBQUEsdUNBQThEO0FBQzVEO0FBQ0E7QUFDQSxNQUFJLDZCQUE2QjRCLFdBQVcsQ0FBQ2pvQixNQUFNLENBQVAsZUFBNUMsSUFBNEMsQ0FBNUM7QUFDQSxRQUFNZ29CLE1BQU0sR0FBRyxXQUFmLGlCQUFlLEdBQWY7QUFDQSxRQUFNRSxhQUFhLEdBQUdILFlBQVksQ0FBWkEsV0FBdEIsTUFBc0JBLENBQXRCO0FBQ0EsUUFBTUksV0FBVyxHQUFHMUosVUFBVSxJQUFJQSxVQUFVLENBQVZBLFdBQWxDLE1BQWtDQSxDQUFsQztBQUVBc0osY0FBWSxHQUFHSyxXQUFXLENBQTFCTCxZQUEwQixDQUExQkE7QUFDQXRKLFlBQVUsR0FBR0EsVUFBVSxHQUFHMkosV0FBVyxDQUFkLFVBQWMsQ0FBZCxHQUF2QjNKO0FBRUEsUUFBTTRKLFdBQVcsR0FBR0gsYUFBYSxrQkFBa0JJLFdBQVcsQ0FBOUQsWUFBOEQsQ0FBOUQ7QUFDQSxRQUFNQyxVQUFVLEdBQUdoTCxFQUFFLEdBQ2pCNkssV0FBVyxDQUFDSCxXQUFXLENBQUNqb0IsTUFBTSxDQUFQLFVBRE4sRUFDTSxDQUFaLENBRE0sR0FFakJ5ZSxVQUFVLElBRmQ7QUFJQSxTQUFPO0FBQ0w0SCxPQUFHLEVBREU7QUFFTDlJLE1BQUUsRUFBRTRLLFdBQVcsZ0JBQWdCRyxXQUFXLENBRjVDLFVBRTRDO0FBRnJDLEdBQVA7QUFvRUY7O0FBQUEsTUFBTUUsdUJBQXVCLEdBQzNCN0ksVUFHQSxLQUpGO0FBWUEsTUFBTThJLGtCQUFrQixHQUFHeEgsTUFBTSxDQUFqQyxvQkFBaUMsQ0FBakM7O0FBRUEsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXlILGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFM0gsR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLFVBQUk0SCxRQUFRLEdBQVJBLEtBQWdCNUgsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPNkgsVUFBVSxNQUFNRCxRQUFRLEdBQS9CLENBQWlCLENBQWpCO0FBRUY7O0FBQUEsVUFBSTVILEdBQUcsQ0FBSEEsV0FBSixLQUF3QjtBQUN0QixlQUFPQSxHQUFHLENBQUhBLFlBQWlCM2hCLElBQUQsSUFBVTtBQUMvQixjQUFJQSxJQUFJLENBQVIsVUFBbUI7QUFDakIsbUJBQU87QUFBRXlwQixzQkFBUSxFQUFqQjtBQUFPLGFBQVA7QUFFRjs7QUFBQSxnQkFBTSxVQUFOLDZCQUFNLENBQU47QUFKRixTQUFPOUgsQ0FBUDtBQU9GOztBQUFBLFlBQU0sVUFBTiw2QkFBTSxDQUFOO0FBRUY7O0FBQUEsV0FBT0EsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE1QkYsR0FBTyxDQUFQO0FBZ0NGOztBQUFBLGlEQUFrRTtBQUNoRSxTQUFPLFVBQVUsV0FBVytILGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EbG9CLEdBQUQsSUFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBRUEsUUFBSSxDQUFKLGdCQUFxQjtBQUNuQjtBQUVGOztBQUFBO0FBUkYsR0FBTyxDQUFQO0FBWWE7O0FBQUEsTUFBTWlqQixNQUFOLENBQW1DO0FBT2hEO0FBQ0Y7QUFSa0Q7QUFXaEQ7QUFzQkFrRixhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpTO0FBSVQsR0FKUyxFQStCVDtBQUFBLFNBL0RGakgsS0ErREU7QUFBQSxTQTlERnBULFFBOERFO0FBQUEsU0E3REZDLEtBNkRFO0FBQUEsU0E1REZxYSxNQTRERTtBQUFBLFNBM0RGbEQsUUEyREU7QUFBQSxTQXRERm1ELFVBc0RFO0FBQUEsU0FwREZDLEdBb0RFLEdBcERrQyxFQW9EbEM7QUFBQSxTQW5ERkMsR0FtREU7QUFBQSxTQWxERkMsR0FrREU7QUFBQSxTQWpERkMsVUFpREU7QUFBQSxTQWhERkMsSUFnREU7QUFBQSxTQS9DRkMsTUErQ0U7QUFBQSxTQTlDRkMsUUE4Q0U7QUFBQSxTQTdDRkMsS0E2Q0U7QUFBQSxTQTVDRkMsVUE0Q0U7QUFBQSxTQTNDRkMsY0EyQ0U7QUFBQSxTQTFDRkMsUUEwQ0U7QUFBQSxTQXpDRnZMLE1BeUNFO0FBQUEsU0F4Q0ZtSCxPQXdDRTtBQUFBLFNBdkNGcUUsYUF1Q0U7QUFBQSxTQXRDRkMsYUFzQ0U7QUFBQSxTQXJDRkMsT0FxQ0U7QUFBQSxTQW5DTUMsSUFtQ04sR0FuQ3FCLENBbUNyQjs7QUFBQSxzQkF5Rlk3YSxDQUFELElBQTRCO0FBQ3ZDLFlBQU0xSSxLQUFLLEdBQUcwSSxDQUFDLENBQWY7O0FBRUEsVUFBSSxDQUFKLE9BQVk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUE7QUFBQTtBQUFBLFlBQU47QUFDQSx5Q0FFRSxpQ0FBcUI7QUFBRVQsa0JBQVEsRUFBRTRaLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUM3aEIsS0FBSyxDQUFWLEtBQWdCO0FBQ2Q7QUFHRjs7QUFBQTtBQUNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBQ0EsVUFBSWtaLEtBQUosRUFBMkMsRUFxQjNDOztBQUFBO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0FuRHVDLENBcUR2QztBQUNBOztBQUNBLFVBQUksY0FBY3BDLEVBQUUsS0FBSyxLQUFyQixVQUFvQzdPLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BM0R1QyxDQTJEdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRXdGLE1BQU0sQ0FBTkEsb0JBQXFFO0FBQ25FZ0ssZUFBTyxFQUFFZixPQUFPLENBQVBBLFdBQW1CLEtBRHVDO0FBRW5Fa0IsY0FBTSxFQUFFbEIsT0FBTyxDQUFQQSxVQUFrQixLQU45QjtBQUl1RSxPQUFyRWpKLENBSkY7QUExSkEsT0FDQTs7O0FBQ0EsaUJBQWEscURBQWIsU0FBYSxDQUFiLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJeEYsU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCdWIsZUFBTyxFQUZxQjtBQUc1Qm5NLGFBQUssRUFIdUI7QUFBQTtBQUs1Qm9NLGVBQU8sRUFBRUMsWUFBWSxJQUFJQSxZQUFZLENBTFQ7QUFNNUJDLGVBQU8sRUFBRUQsWUFBWSxJQUFJQSxZQUFZLENBTnZDO0FBQThCLE9BQTlCO0FBVUY7O0FBQUEsK0JBQTJCO0FBQ3pCRSxlQUFTLEVBRGdCO0FBRXpCbEksaUJBQVcsRUFBRTtBQUZmO0FBRWU7QUFGWSxLQUEzQixDQXBCQSxDQTJCQTtBQUNBOztBQUNBLGtCQUFjMEIsTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkFqQ0EsQ0FrQ0E7QUFDQTs7QUFDQSxVQUFNeUcsaUJBQWlCLEdBQ3JCLDZDQUE0QnpLLElBQUksQ0FBSkEsY0FEOUI7O0FBR0Esa0JBQWN5SyxpQkFBaUIsZUFBL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkEzQ0EsQ0E0Q0E7QUFDQTs7QUFDQTtBQUVBO0FBRUEsbUJBQWUsQ0FBQyxFQUNkekssSUFBSSxDQUFKQSxzQkFDQUEsSUFBSSxDQUFKQSxjQURBQSxPQUVDLHNCQUFzQixDQUFDQSxJQUFJLENBQUpBLFNBSDFCLE1BQWdCLENBQWhCOztBQU1BLFFBQUlGLEtBQUosRUFBcUMsRUFPckM7O0FBQUEsZUFBbUMsRUF3QnBDO0FBK0VENEs7O0FBQUFBLFFBQU0sR0FBUztBQUNiaFMsVUFBTSxDQUFOQTtBQUdGO0FBQUE7QUFDRjtBQUNBOzs7QUFDRWlTLE1BQUksR0FBRztBQUNMalMsVUFBTSxDQUFOQTtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRTVYLE1BQUksVUFBcUJ3YyxPQUEwQixHQUEvQyxJQUFzRDtBQUN4RCxRQUFJd0MsS0FBSixFQUEyQyxFQWEzQzs7QUFBQTtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBYzhLLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRWpOLFNBQU8sVUFBcUJMLE9BQTBCLEdBQS9DLElBQXNEO0FBQzNEO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjc04sWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEsdURBTW9CO0FBQUE7O0FBQ2xCLFFBQUksQ0FBQ2pELFVBQVUsQ0FBZixHQUFlLENBQWYsRUFBc0I7QUFDcEJqUCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQU5rQixDQU1sQjtBQUNBOzs7QUFDQSxRQUFLNEUsT0FBRCxDQUFKLElBQXlCO0FBQ3ZCO0FBR0YsS0Faa0IsQ0FZbEI7QUFDQTtBQUNBOzs7QUFDQUEsV0FBTyxDQUFQQSxTQUFpQixDQUFDLHFCQUFFQSxPQUFPLENBQVQsb0NBQWxCQSxJQUFrQixDQUFsQkE7QUFFQSxRQUFJdU4sWUFBWSxHQUFHdk4sT0FBTyxDQUFQQSxXQUFtQixLQUF0Qzs7QUFFQSxRQUFJd0MsS0FBSixFQUFxQyxzQkErRXJDOztBQUFBLFFBQUksQ0FBRXhDLE9BQUQsQ0FBTCxJQUEwQjtBQUN4QjtBQUVGLEtBckdrQixDQXFHbEI7OztBQUNBLFFBQUl3TixPQUFKLElBQVE7QUFDTkMsaUJBQVcsQ0FBWEE7QUFHRjs7QUFBQSxVQUFNO0FBQUUxTSxhQUFPLEdBQVQ7QUFBQSxRQUFOO0FBQ0EsVUFBTTJNLFVBQVUsR0FBRztBQUFuQjtBQUFtQixLQUFuQjs7QUFFQSxRQUFJLEtBQUosZ0JBQXlCO0FBQ3ZCLDhCQUF3QixLQUF4QjtBQUdGdE47O0FBQUFBLE1BQUUsR0FBRytLLFdBQVcsQ0FDZHdDLFNBQVMsQ0FDUHRFLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQnVFLFdBQVcsQ0FBN0J2RSxFQUE2QixDQUE3QkEsR0FETyxJQUVQckosT0FBTyxDQUZBLFFBR1AsS0FKSkksYUFDVyxDQURLLENBQWhCQTtBQU9BLFVBQU15TixTQUFTLEdBQUdDLFNBQVMsQ0FDekJ6RSxXQUFXLENBQVhBLEVBQVcsQ0FBWEEsR0FBa0J1RSxXQUFXLENBQTdCdkUsRUFBNkIsQ0FBN0JBLEdBRHlCLElBRXpCLEtBRkYsTUFBMkIsQ0FBM0I7QUFJQSw2QkE1SGtCLENBOEhsQjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBRXJKLE9BQUQsQ0FBRCxNQUF3QixxQkFBNUIsU0FBNEIsQ0FBNUIsRUFBNkQ7QUFDM0Q7QUFDQTBHLFlBQU0sQ0FBTkEsK0NBRjJELENBRzNEOztBQUNBO0FBQ0E7QUFDQSxrQkFBWSxnQkFBZ0IsS0FBNUIsS0FBWSxDQUFaO0FBQ0FBLFlBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFFBQUlxSCxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBQ0EsUUFBSTtBQUFBO0FBQUE7QUFBQSxRQUFKLE9BaEprQixDQWtKbEI7QUFDQTtBQUNBOztBQUNBOztBQUNBLFFBQUk7QUFDRkMsV0FBSyxHQUFHLE1BQU0sZ0JBQWRBLFdBQWMsRUFBZEE7QUFDQyxPQUFDO0FBQUVDLGtCQUFVLEVBQVo7QUFBQSxVQUEyQixNQUFNLGlCQUFsQyxzQkFBa0MsR0FBbEM7QUFDRCxLQUhGLENBR0UsWUFBWTtBQUNaO0FBQ0E7QUFDQTdTLFlBQU0sQ0FBTkE7QUFDQTtBQUdGMlM7O0FBQUFBLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaEN4YyxjQUFRLEdBQUd3YyxNQUFNLENBQWpCeGM7QUFDQTJYLFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGLEtBdktrQixDQXVLbEI7QUFDQTtBQUNBOzs7QUFDQTNYLFlBQVEsR0FBR0EsUUFBUSxHQUNmLHFEQUF3QnFjLFdBQVcsQ0FEcEIsUUFDb0IsQ0FBbkMsQ0FEZSxHQUFuQnJjLFNBMUtrQixDQThLbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUMsY0FBRCxTQUFDLENBQUQsSUFBNkIsQ0FBakMsY0FBZ0Q7QUFDOUMyYyxZQUFNLEdBQU5BO0FBR0Y7O0FBQUEsUUFBSXZKLEtBQUssR0FBRyxxREFBWixRQUFZLENBQVosQ0F2TGtCLENBeUxsQjtBQUNBOztBQUNBLFFBQUlyRCxVQUFVLEdBQWQ7O0FBRUEsUUFBSWtCLEtBQUosRUFBMkQsRUFxQjNEOztBQUFBLFFBQUksQ0FBQzZILFVBQVUsQ0FBZixFQUFlLENBQWYsRUFBcUI7QUFDbkIsZ0JBQTJDO0FBQ3pDLGNBQU0sVUFDSCxrQkFBaUJuQixHQUFJLGNBQWE5SSxFQUFuQywyQ0FBQyxHQURILDBFQUFNLENBQU47QUFNRmhGOztBQUFBQSxZQUFNLENBQU5BO0FBQ0E7QUFHRmtHOztBQUFBQSxjQUFVLEdBQUd3TSxTQUFTLENBQUNGLFdBQVcsQ0FBWixVQUFZLENBQVosRUFBMEIsS0FBaER0TSxNQUFzQixDQUF0QkE7O0FBRUEsUUFBSSwrQkFBSixLQUFJLENBQUosRUFBMkI7QUFDekIsWUFBTTZNLFFBQVEsR0FBRyx3Q0FBakIsVUFBaUIsQ0FBakI7QUFDQSxZQUFNekUsVUFBVSxHQUFHeUUsUUFBUSxDQUEzQjtBQUVBLFlBQU1DLFVBQVUsR0FBRywrQkFBbkIsS0FBbUIsQ0FBbkI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsK0NBQW5CLFVBQW1CLENBQW5CO0FBQ0EsWUFBTUMsaUJBQWlCLEdBQUczSixLQUFLLEtBQS9CO0FBQ0EsWUFBTTZGLGNBQWMsR0FBRzhELGlCQUFpQixHQUNwQzdELGFBQWEsb0JBRHVCLEtBQ3ZCLENBRHVCLEdBQXhDOztBQUlBLFVBQUksZUFBZ0I2RCxpQkFBaUIsSUFBSSxDQUFDOUQsY0FBYyxDQUF4RCxRQUFrRTtBQUNoRSxjQUFNK0QsYUFBYSxHQUFHeFgsTUFBTSxDQUFOQSxLQUFZcVgsVUFBVSxDQUF0QnJYLGVBQ25CNFMsS0FBRCxJQUFXLENBQUNuWSxLQUFLLENBRG5CLEtBQ21CLENBREd1RixDQUF0Qjs7QUFJQSxZQUFJd1gsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLG9CQUEyQztBQUN6Q3JyQixtQkFBTyxDQUFQQSxLQUNHLEdBQ0NvckIsaUJBQWlCLDBCQUVaLGlDQUhQLDhCQUFDLEdBS0UsZUFBY0MsYUFBYSxDQUFiQSxVQU5uQnJyQjtBQVlGOztBQUFBLGdCQUFNLFVBQ0osQ0FBQ29yQixpQkFBaUIsR0FDYiwwQkFBeUJwRixHQUFJLG9DQUFtQ3FGLGFBQWEsQ0FBYkEsVUFEbkQsb0NBSWIsOEJBQTZCN0UsVUFBVyw4Q0FBNkMvRSxLQUoxRixTQUtHLDRDQUNDMkosaUJBQWlCLGlDQUViLHNCQVRWLEVBQU0sQ0FBTjtBQWFIO0FBaENELGFBZ0NPLHVCQUF1QjtBQUM1QmxPLFVBQUUsR0FBRyxpQ0FDSHJKLE1BQU0sQ0FBTkEscUJBQTRCO0FBQzFCeEYsa0JBQVEsRUFBRWlaLGNBQWMsQ0FERTtBQUUxQmhaLGVBQUssRUFBRW1aLGtCQUFrQixRQUFRSCxjQUFjLENBSG5EcEssTUFHNkI7QUFGQyxTQUE1QnJKLENBREcsQ0FBTHFKO0FBREssYUFPQTtBQUNMO0FBQ0FySixjQUFNLENBQU5BO0FBRUg7QUFFRDJQOztBQUFBQSxVQUFNLENBQU5BOztBQUVBLFFBQUk7QUFDRixVQUFJOEgsU0FBUyxHQUFHLE1BQU0sMERBQXRCLFVBQXNCLENBQXRCO0FBUUEsVUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSixVQVRFLENBV0Y7O0FBQ0EsVUFBSSxDQUFDekIsT0FBTyxJQUFSLFlBQUosT0FBbUM7QUFDakMsWUFBS3BNLEtBQUQsVUFBQ0EsSUFBNEJBLEtBQUQsVUFBQ0EsQ0FBakMsY0FBdUU7QUFDckUsZ0JBQU04TixXQUFXLEdBQUk5TixLQUFELFVBQUNBLENBQXJCLGFBRHFFLENBR3JFO0FBQ0E7QUFDQTs7QUFDQSxjQUFJOE4sV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0Isa0JBQU1DLFVBQVUsR0FBRyx3Q0FBbkIsV0FBbUIsQ0FBbkI7O0FBQ0E7O0FBRUEsZ0JBQUlWLEtBQUssQ0FBTEEsU0FBZVUsVUFBVSxDQUE3QixRQUFJVixDQUFKLEVBQXlDO0FBQ3ZDLG9CQUFNO0FBQUU5RSxtQkFBRyxFQUFMO0FBQWU5SSxrQkFBRSxFQUFqQjtBQUFBLGtCQUE2QmtOLFlBQVksb0JBQS9DLFdBQStDLENBQS9DO0FBS0EscUJBQU8sbUNBQVAsT0FBTyxDQUFQO0FBRUg7QUFFRGxTOztBQUFBQSxnQkFBTSxDQUFOQTtBQUNBLGlCQUFPLFlBQVksTUFBTSxDQUF6QixDQUFPLENBQVA7QUFHRixTQXpCaUMsQ0F5QmpDOzs7QUFDQSxZQUFJdUYsS0FBSyxDQUFMQSxhQUFKLG9CQUEyQztBQUN6Qzs7QUFFQSxjQUFJO0FBQ0Ysa0JBQU0sb0JBQU4sTUFBTSxDQUFOO0FBQ0FnTyx5QkFBYSxHQUFiQTtBQUNBLFdBSEYsQ0FHRSxVQUFVO0FBQ1ZBLHlCQUFhLEdBQWJBO0FBR0ZIOztBQUFBQSxtQkFBUyxHQUFHLE1BQU0sdUVBTWhCO0FBQUV6TixtQkFBTyxFQU5YeU47QUFNRSxXQU5nQixDQUFsQkE7QUFTSDtBQUVEOUg7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQTs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTWtJLE9BQVksR0FBRyx5QkFBckI7QUFDRXhULGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBd1QsT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVKLFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNwVDtBQUtKLE9BckVFLENBcUVGOzs7QUFDQSxZQUFNeVQsbUJBQW1CLEdBQUc3TyxPQUFPLENBQVBBLFdBQW1CLGVBQS9DO0FBQ0EsWUFBTSx1REFNSjhPLFlBQVksS0FDVEQsbUJBQW1CLElBQUksQ0FBQzdPLE9BQU8sQ0FBL0I2TyxnQkFBZ0Q7QUFBRUUsU0FBQyxFQUFIO0FBQVFDLFNBQUMsRUFQeEQ7QUFPK0MsT0FEdkMsQ0FOUixRQVFHaGQsQ0FBRCxJQUFPO0FBQ2IsWUFBSUEsQ0FBQyxDQUFMLFdBQWlCelAsS0FBSyxHQUFHQSxLQUFLLElBQTlCLENBQWlCQSxDQUFqQixLQUNLO0FBVlAsT0FBTSxDQUFOOztBQWFBLGlCQUFXO0FBQ1Rta0IsY0FBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSWxFLEtBQUosRUFBcUMsRUFLckNrRTs7QUFBQUEsWUFBTSxDQUFOQTtBQUVBO0FBQ0EsS0FqR0YsQ0FpR0UsWUFBWTtBQUNaLFVBQUlqakIsR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBRUY7O0FBQUE7QUFFSDtBQUVEd3JCOztBQUFBQSxhQUFXLGtCQUlUalAsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBTzVFLE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDbFksZUFBTyxDQUFQQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSSxPQUFPa1ksTUFBTSxDQUFOQSxRQUFQLE1BQU9BLENBQVAsS0FBSixhQUFtRDtBQUNqRGxZLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJnckIsTUFBekNockI7QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSWdyQixNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxzQkFBZ0JsTyxPQUFPLENBQXZCO0FBQ0EsWUFBTSxDQUFOLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBSUVrUCxXQUFHLEVBSkw7QUFLRUMsV0FBRyxFQUFFLFlBQVlqQixNQUFNLEtBQU5BLGNBQXlCLEtBQXpCQSxPQUFxQyxZQU4xRDtBQUNFLE9BREYsRUFRRTtBQUNBO0FBQ0E7QUFWRjtBQWVIO0FBRUQ7O0FBQUEsa0ZBT3FDO0FBQ25DLFFBQUl6cUIsR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBQ0E7QUFHRjs7QUFBQSxRQUFJLHVDQUFKLGVBQXdDO0FBQ3RDaWpCLFlBQU0sQ0FBTkEscURBRHNDLENBR3RDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0F0TCxZQUFNLENBQU5BLG1CQVRzQyxDQVd0QztBQUNBOztBQUNBLFlBQU1nVSxzQkFBTjtBQUdGOztBQUFBLFFBQUk7QUFDRjtBQUNBO0FBQ0E7O0FBRUEsVUFDRSxvQ0FDQSx1QkFGRixhQUdFO0FBQ0E7QUFBQyxTQUFDO0FBQUVDLGNBQUksRUFBTjtBQUFBO0FBQUEsWUFBbUMsTUFBTSxvQkFBMUMsU0FBMEMsQ0FBMUM7QUFLSDs7QUFBQSxZQUFNYixTQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLMUNqc0IsYUFBSyxFQUxQO0FBQTRDLE9BQTVDOztBQVFBLFVBQUksQ0FBQ2lzQixTQUFTLENBQWQsT0FBc0I7QUFDcEIsWUFBSTtBQUNGQSxtQkFBUyxDQUFUQSxRQUFrQixNQUFNLGdDQUFnQztBQUFBO0FBQUE7QUFBeERBO0FBQXdELFdBQWhDLENBQXhCQTtBQUtBLFNBTkYsQ0FNRSxlQUFlO0FBQ2Z0ckIsaUJBQU8sQ0FBUEE7QUFDQXNyQixtQkFBUyxDQUFUQTtBQUVIO0FBRUQ7O0FBQUE7QUFDQSxLQXBDRixDQW9DRSxxQkFBcUI7QUFDckIsYUFBTyx5RUFBUCxJQUFPLENBQVA7QUFTSDtBQUVEOztBQUFBLHlFQU82QjtBQUMzQixRQUFJO0FBQ0YsWUFBTWMsaUJBQStDLEdBQUcsZ0JBQXhELEtBQXdELENBQXhEOztBQUdBLFVBQUk1QixVQUFVLENBQVZBLGdDQUEyQyxlQUEvQyxPQUFxRTtBQUNuRTtBQUdGOztBQUFBLFlBQU02QixlQUFxRCxHQUN6REQsaUJBQWlCLElBQUksYUFBckJBLGdDQURGO0FBSUEsWUFBTWQsU0FBbUMsR0FBR2UsZUFBZSxxQkFFdkQsTUFBTSxnQ0FBaUMzTCxHQUFELEtBQVU7QUFDOUNzSixpQkFBUyxFQUFFdEosR0FBRyxDQURnQztBQUU5Q29CLG1CQUFXLEVBQUVwQixHQUFHLENBRjhCO0FBRzlDbUosZUFBTyxFQUFFbkosR0FBRyxDQUFIQSxJQUhxQztBQUk5Q3FKLGVBQU8sRUFBRXJKLEdBQUcsQ0FBSEEsSUFOZjtBQUVvRCxPQUFWLENBQWhDLENBRlY7QUFTQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUI0TCxtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsU0FBdUIsQ0FBdkIsRUFBb0M7QUFDbEMsZ0JBQU0sVUFDSCx5REFBd0RsZSxRQUQzRCxHQUFNLENBQU47QUFJSDtBQUVEOztBQUFBOztBQUVBLFVBQUl3YixPQUFPLElBQVgsU0FBd0I7QUFDdEIyQyxnQkFBUSxHQUFHLDRCQUNULGlDQUFxQjtBQUFBO0FBRFo7QUFDWSxTQUFyQixDQURTLHVCQUlULEtBSkZBLE1BQVcsQ0FBWEE7QUFRRjs7QUFBQSxZQUFNL08sS0FBSyxHQUFHLE1BQU0sY0FBd0MsTUFDMURvTSxPQUFPLEdBQ0gsb0JBREcsUUFDSCxDQURHLEdBRUhFLE9BQU8sR0FDUCxvQkFETyxRQUNQLENBRE8sR0FFUCxnQ0FFRTtBQUNBO0FBQUE7QUFBQTtBQUdFcEIsY0FBTSxFQVhoQjtBQVFRLE9BSEYsQ0FMYyxDQUFwQjtBQWdCQTJDLGVBQVMsQ0FBVEE7QUFDQTtBQUNBO0FBQ0EsS0E5REYsQ0E4REUsWUFBWTtBQUNaLGFBQU8sb0RBQVAsVUFBTyxDQUFQO0FBRUg7QUFFRG1COztBQUFBQSxLQUFHLGdEQU9jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sa0JBQVAsV0FBTyxDQUFQO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0VDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQnpQLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUkwUCxPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVc3UCxFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJc0ssSUFBSSxLQUFSLElBQWlCO0FBQ2Z0UCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTThVLElBQUksR0FBR2hWLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUmdWLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR2pWLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWaVYsWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRkM7O0FBQUFBLGNBQVksb0JBQXlDQyxhQUFhLEdBQXRELE1BQStEO0FBQ3pFLFVBQU07QUFBQTtBQUFBLFFBQU47QUFDQSxVQUFNQyxhQUFhLEdBQUcscURBQ3BCLDhDQUFvQkQsYUFBYSxHQUFHMUMsV0FBVyxDQUFkLFFBQWMsQ0FBZCxHQURuQyxRQUNFLENBRG9CLENBQXRCOztBQUlBLFFBQUkyQyxhQUFhLEtBQWJBLFVBQTRCQSxhQUFhLEtBQTdDLFdBQTZEO0FBQzNEO0FBR0YsS0FWeUUsQ0FVekU7OztBQUNBLFFBQUksQ0FBQ3ZDLEtBQUssQ0FBTEEsU0FBTCxhQUFLQSxDQUFMLEVBQXFDO0FBQ25DO0FBQ0FBLFdBQUssQ0FBTEEsS0FBWXFCLElBQUQsSUFBVTtBQUNuQixZQUNFLHdDQUNBLDZDQUZGLGFBRUUsQ0FGRixFQUdFO0FBQ0FYLG9CQUFVLENBQVZBLFdBQXNCNEIsYUFBYSxHQUFHbkYsV0FBVyxDQUFkLElBQWMsQ0FBZCxHQUFuQ3VEO0FBQ0E7QUFFSDtBQVJEVjtBQVVGVTs7QUFBQUEsY0FBVSxDQUFWQSxXQUFzQixxREFBd0JBLFVBQVUsQ0FBeERBLFFBQXNCLENBQXRCQTtBQUNBO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLHNCQUVFN0MsTUFBYyxHQUZoQixLQUdFN0wsT0FBd0IsR0FIMUIsSUFJaUI7QUFDZixRQUFJK04sTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBLFFBQUo7O0FBRUEsUUFBSXZMLEtBQUosRUFBcUMsRUFpQnJDOztBQUFBLFVBQU13TCxLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFFQUQsVUFBTSxHQUFHLGlDQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ3hjLGNBQVEsR0FBR3djLE1BQU0sQ0FBakJ4YztBQUNBMlgsU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0EvQmUsQ0ErQmY7OztBQUNBLGNBQTJDO0FBQ3pDO0FBR0Y7O0FBQUEsVUFBTXZFLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7QUFDQSxVQUFNeEIsT0FBTyxDQUFQQSxJQUFZLENBQ2hCLGlDQUFrQ3FOLEtBQUQsSUFBb0I7QUFDbkQsYUFBT0EsS0FBSyxHQUNSLG9CQUNFLCtDQUlFLE9BQU94USxPQUFPLENBQWQseUJBQ0lBLE9BQU8sQ0FEWCxTQUVJLEtBUkEsTUFFTixDQURGLENBRFEsR0FBWjtBQUZjLEtBQ2hCLENBRGdCLEVBZWhCLGdCQUFnQkEsT0FBTyxDQUFQQSx3QkFBaEIsWUFmRixLQWVFLENBZmdCLENBQVptRCxDQUFOO0FBbUJGOztBQUFBLDhCQUE0RDtBQUMxRCxRQUFJeUYsU0FBUyxHQUFiOztBQUNBLFVBQU02SCxNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9CN0gsZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU04SCxlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNbnVCLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUNvaUIsS0FEMUMsR0FBbUIsQ0FBbkI7QUFHQXBpQixXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJa3VCLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUE7QUFHRkU7O0FBQUFBLFVBQVEsS0FBc0M7QUFDNUMsUUFBSS9ILFNBQVMsR0FBYjs7QUFDQSxVQUFNNkgsTUFBTSxHQUFHLE1BQU07QUFDbkI3SCxlQUFTLEdBQVRBO0FBREY7O0FBR0E7QUFDQSxXQUFPcEQsRUFBRSxHQUFGQSxLQUFXdmpCLElBQUQsSUFBVTtBQUN6QixVQUFJd3VCLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNaHRCLEdBQVEsR0FBRyxVQUFqQixpQ0FBaUIsQ0FBakI7QUFDQUEsV0FBRyxDQUFIQTtBQUNBO0FBR0Y7O0FBQUE7QUFYRixLQUFPK2hCLENBQVA7QUFlRm9MOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUVwWSxVQUFJLEVBQU47QUFBQSxRQUFxQixrQkFBa0I0QyxNQUFNLENBQU5BLFNBQTdDLElBQTJCLENBQTNCOztBQUNBLFFBQUlvSCxLQUFKLEVBQWlFLEVBR2pFOztBQUFBLFdBQU9xTyxhQUFhLFdBQVcsS0FBeEJBLEtBQWEsQ0FBYkEsTUFBMEM1dUIsSUFBRCxJQUFVO0FBQ3hEO0FBQ0E7QUFGRixLQUFPNHVCLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGM0k7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFZ0YsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU02RCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdERudUIsWUFBTSxFQUhnRDtBQUF4RDtBQUF3RCxLQUFqRCxDQUFQO0FBUUZvdUI7O0FBQUFBLG9CQUFrQixpQkFBZ0Q7QUFDaEUsUUFBSSxLQUFKLEtBQWM7QUFDWnZLLFlBQU0sQ0FBTkEsZ0NBRUUwSSxzQkFGRjFJO0FBTUE7QUFDQTtBQUVIO0FBRUR3Szs7QUFBQUEsUUFBTSxvQkFHVztBQUNmLFdBQU8sZUFFTCx5QkFGSyxXQUFQLFdBQU8sQ0FBUDtBQTNsQzhDOztBQUFBOzs7QUFBN0J4SyxNLENBK0JaMEYsTUEvQlkxRixHQStCVSxvQkEvQlZBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxNQUFNeUssZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUk5ZixRQUFRLEdBQUc4ZixNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJM0csSUFBSSxHQUFHMkcsTUFBTSxDQUFOQSxRQUFYO0FBQ0EsTUFBSTdmLEtBQUssR0FBRzZmLE1BQU0sQ0FBTkEsU0FBWjtBQUNBLE1BQUlDLElBQW9CLEdBQXhCO0FBRUFDLE1BQUksR0FBR0EsSUFBSSxHQUFHdkgsa0JBQWtCLENBQWxCQSxJQUFrQixDQUFsQkEsd0JBQUgsTUFBWHVIOztBQUVBLE1BQUlGLE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxRQUFJLEdBQUdDLElBQUksR0FBR0YsTUFBTSxDQUFwQkM7QUFERixTQUVPLGNBQWM7QUFDbkJBLFFBQUksR0FBR0MsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZGLFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSTlmLEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHaWdCLE1BQU0sQ0FBQ0MsV0FBVyxDQUFYQSx1QkFBZmxnQixLQUFla2dCLENBQUQsQ0FBZGxnQjtBQUdGOztBQUFBLE1BQUltZ0IsTUFBTSxHQUFHTixNQUFNLENBQU5BLFVBQWtCN2YsS0FBSyxJQUFLLElBQUdBLEtBQS9CNmYsTUFBYjtBQUVBLE1BQUlELFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxPQUFnQixDQUFoQkEsT0FBaEIsS0FBNkNBLFFBQVEsSUFBUkE7O0FBRTdDLE1BQ0VDLE1BQU0sQ0FBTkEsV0FDQyxDQUFDLGFBQWFGLGdCQUFnQixDQUFoQkEsS0FBZCxRQUFjQSxDQUFkLEtBQWtERyxJQUFJLEtBRnpELE9BR0U7QUFDQUEsUUFBSSxHQUFHLFFBQVFBLElBQUksSUFBbkJBLEVBQU8sQ0FBUEE7QUFDQSxRQUFJL2YsUUFBUSxJQUFJQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBaEIsS0FBcUNBLFFBQVEsR0FBRyxNQUFYQTtBQUx2QyxTQU1PLElBQUksQ0FBSixNQUFXO0FBQ2hCK2YsUUFBSSxHQUFKQTtBQUdGOztBQUFBLE1BQUk1RyxJQUFJLElBQUlBLElBQUksQ0FBSkEsQ0FBSSxDQUFKQSxLQUFaLEtBQTZCQSxJQUFJLEdBQUcsTUFBUEE7QUFDN0IsTUFBSWlILE1BQU0sSUFBSUEsTUFBTSxDQUFOQSxDQUFNLENBQU5BLEtBQWQsS0FBaUNBLE1BQU0sR0FBRyxNQUFUQTtBQUVqQ3BnQixVQUFRLEdBQUdBLFFBQVEsQ0FBUkEsaUJBQVhBLGtCQUFXQSxDQUFYQTtBQUNBb2dCLFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxhQUFUQSxLQUFTQSxDQUFUQTtBQUVBLFNBQVEsR0FBRVAsUUFBUyxHQUFFRSxJQUFLLEdBQUUvZixRQUFTLEdBQUVvZ0IsTUFBTyxHQUFFakgsSUFBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDeEVEOztBQUNBLE1BQU1rSCxVQUFVLEdBQWhCOztBQUVPLCtCQUFnRDtBQUNyRCxTQUFPQSxVQUFVLENBQVZBLEtBQVAsS0FBT0EsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLHFDQUFzRDtBQUMzRCxRQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBR0EsUUFBTUMsWUFBWSxHQUFHM0gsSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXlELGFBQS9ELFlBQStELENBQS9EOztBQUlBLE1BQUlVLE1BQU0sS0FBS2dILFVBQVUsQ0FBekIsUUFBa0M7QUFDaEMsVUFBTSxVQUFXLG9EQUFtRDNJLEdBQXBFLEVBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMMVgsU0FBSyxFQUFFLHlDQUZGLFlBRUUsQ0FGRjtBQUFBO0FBQUE7QUFLTGdILFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXcVosVUFBVSxDQUFWQSxPQUxuQixNQUtRclo7QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTSw4Q0FFVztBQUNoQixRQUFNaEgsS0FBcUIsR0FBM0I7QUFDQXVnQixjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU92Z0IsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUFKLGFBQXVDO0FBQ3JDQSxXQUFLLENBQUxBLEdBQUssQ0FBTEE7QUFERixXQUVPLElBQUk2VixLQUFLLENBQUxBLFFBQWM3VixLQUFLLENBQXZCLEdBQXVCLENBQW5CNlYsQ0FBSixFQUErQjtBQUNwQztBQUFFN1YsV0FBSyxDQUFOLEdBQU0sQ0FBTEEsQ0FBRCxJQUFDQSxDQUFELEtBQUNBO0FBREcsV0FFQTtBQUNMQSxXQUFLLENBQUxBLEdBQUssQ0FBTEEsR0FBYSxDQUFDQSxLQUFLLENBQU4sR0FBTSxDQUFOLEVBQWJBLEtBQWEsQ0FBYkE7QUFFSDtBQVJEdWdCO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPUCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBTEYsU0FNTztBQUNMO0FBRUg7QUFFTTs7QUFBQSwwQ0FFWTtBQUNqQixRQUFNeEgsTUFBTSxHQUFHLElBQWYsZUFBZSxFQUFmO0FBQ0FsVCxRQUFNLENBQU5BLDBCQUFpQyxDQUFDLE1BQUQsS0FBQyxDQUFELEtBQWtCO0FBQ2pELFFBQUlzUSxLQUFLLENBQUxBLFFBQUosS0FBSUEsQ0FBSixFQUEwQjtBQUN4Qm5WLFdBQUssQ0FBTEEsUUFBZWhHLElBQUQsSUFBVStkLE1BQU0sQ0FBTkEsWUFBbUJnSSxzQkFBc0IsQ0FBakUvZixJQUFpRSxDQUF6QytYLENBQXhCL1g7QUFERixXQUVPO0FBQ0wrWCxZQUFNLENBQU5BLFNBQWdCZ0ksc0JBQXNCLENBQXRDaEksS0FBc0MsQ0FBdENBO0FBRUg7QUFORGxUO0FBT0E7QUFHSzs7QUFBQSx3QkFFTCxHQUZLLGtCQUdZO0FBQ2pCbWIsa0JBQWdCLENBQWhCQSxRQUEwQkgsWUFBRCxJQUFrQjtBQUN6QzFLLFNBQUssQ0FBTEEsS0FBVzBLLFlBQVksQ0FBdkIxSyxJQUFXMEssRUFBWDFLLFVBQXlDcFEsR0FBRCxJQUFTaEYsTUFBTSxDQUFOQSxPQUFqRG9WLEdBQWlEcFYsQ0FBakRvVjtBQUNBMEssZ0JBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCOWYsTUFBTSxDQUFOQSxZQUFyQzhmLEtBQXFDOWYsQ0FBckM4ZjtBQUZGRztBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGMsMkJBQTJCLENBQUUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFckMscUNBQXVFO0FBQzVFLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQVEzZ0IsUUFBRCxJQUF5QztBQUM5QyxVQUFNOGMsVUFBVSxHQUFHOEQsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUl6SSxLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPMEksa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNNXVCLEdBQThCLEdBQUcsVUFBdkMsd0JBQXVDLENBQXZDO0FBR0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUVIO0FBVkQ7O0FBV0EsVUFBTTRELE1BQWtELEdBQXhEO0FBRUEwUCxVQUFNLENBQU5BLHFCQUE2QnViLFFBQUQsSUFBc0I7QUFDaEQsWUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQWhCLFFBQWdCLENBQWhCO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHcEUsVUFBVSxDQUFDa0UsQ0FBQyxDQUF0QixHQUFvQixDQUFwQjs7QUFDQSxVQUFJRSxDQUFDLEtBQUwsV0FBcUI7QUFDbkJwckIsY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNvckIsQ0FBQyxDQUFEQSxRQUFELEdBQUNBLENBQUQsR0FDZkEsQ0FBQyxDQUFEQSxlQUFrQnZQLEtBQUQsSUFBV2tQLE1BQU0sQ0FEbkIsS0FDbUIsQ0FBbENLLENBRGUsR0FFZkYsQ0FBQyxDQUFEQSxTQUNBLENBQUNILE1BQU0sQ0FEUEcsQ0FDTyxDQUFQLENBREFBLEdBRUFILE1BQU0sQ0FKVi9xQixDQUlVLENBSlZBO0FBTUg7QUFWRDBQO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPMmIsR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU01SSxRQUFRLEdBQUdILEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFMVMsT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU0wYixRQUFRLEdBQUcsQ0FBQ0MsZUFBZSxDQUFmQSxzQkFBRCxvQkFBakIsR0FBaUIsQ0FBakI7QUFJQSxRQUFNSixNQUFzQyxHQUE1QztBQUNBLE1BQUlLLFVBQVUsR0FBZDtBQUNBLFFBQU1DLGtCQUFrQixHQUFHSCxRQUFRLENBQVJBLElBQ25CNUksT0FBRCxJQUFhO0FBQ2hCLFFBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNEJnSixjQUFjLENBQUNoSixPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhEO0FBQ0F5SSxZQUFNLENBQU5BLEdBQU0sQ0FBTkEsR0FBYztBQUFFUSxXQUFHLEVBQUVILFVBQVA7QUFBQTtBQUFkTDtBQUFjLE9BQWRBO0FBQ0EsYUFBTzNJLE1BQU0sR0FBSUMsUUFBUSxtQkFBWixXQUFiO0FBSEYsV0FJTztBQUNMLGFBQVEsSUFBR21KLFdBQVcsU0FBdEI7QUFFSDtBQVR3Qk4sVUFBM0IsRUFBMkJBLENBQTNCLENBUEEsQ0FtQkE7QUFDQTs7QUFDQSxZQUFtQztBQUNqQyxRQUFJTyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxrQkFBa0IsR0FBdEIsRUFGaUMsQ0FJakM7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBSUMsUUFBUSxHQUFaOztBQUVBLFdBQUssSUFBSTdsQixDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsb0JBQXdDQSxDQUF4QyxJQUE2QztBQUMzQzZsQixnQkFBUSxJQUFJNUIsTUFBTSxDQUFOQSxhQUFaNEIsZ0JBQVk1QixDQUFaNEI7QUFDQUgsd0JBQWdCOztBQUVoQixZQUFJQSxnQkFBZ0IsR0FBcEIsS0FBNEI7QUFDMUJDLDRCQUFrQjtBQUNsQkQsMEJBQWdCLEdBQWhCQTtBQUVIO0FBQ0Q7O0FBQUE7QUFaRjs7QUFlQSxVQUFNSSxTQUFzQyxHQUE1QztBQUVBLFFBQUlDLHVCQUF1QixHQUFHWixRQUFRLENBQVJBLElBQ3RCNUksT0FBRCxJQUFhO0FBQ2hCLFVBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxjQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNEJnSixjQUFjLENBQUNoSixPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhELENBRG9ELENBRXBEO0FBQ0E7O0FBQ0EsWUFBSXlKLFVBQVUsR0FBR3ZjLEdBQUcsQ0FBSEEsZUFBakIsRUFBaUJBLENBQWpCO0FBQ0EsWUFBSXdjLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQ3pCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQ0YsVUFBVSxDQUFWQSxVQUFwQixDQUFvQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7QUFDN0NDLG9CQUFVLEdBQVZBO0FBR0Y7O0FBQUEsd0JBQWdCO0FBQ2RELG9CQUFVLEdBQUdKLGVBQWJJO0FBR0ZGOztBQUFBQSxpQkFBUyxDQUFUQSxVQUFTLENBQVRBO0FBQ0EsZUFBT3pKLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVMwSixVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdQLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJOLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xSLFFBQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGEsZ0JBQVUsRUFBRyxJQUFHSix1QkFKbEI7QUFBTyxLQUFQO0FBUUY7O0FBQUEsU0FBTztBQUNMcEIsTUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhEO0FBMFFBO0FBQ0E7QUFDQTs7O0FBQ08sc0JBRUY7QUFDSCxNQUFJYyxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQTNKLFlBQU0sR0FBR3pFLEVBQUUsQ0FBQyxHQUFaeUUsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCN08sTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRWdXLFFBQVMsS0FBSUksUUFBUyxHQUFFcUMsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBV3pZLE1BQU0sQ0FBdkI7QUFDQSxRQUFNeVAsTUFBTSxHQUFHaUosaUJBQWY7QUFDQSxTQUFPdGIsSUFBSSxDQUFKQSxVQUFlcVMsTUFBTSxDQUE1QixNQUFPclMsQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVIMFUsU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPdEosR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSW1RLEdBQUcsQ0FBUCxzQkFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTWhOLE9BQU8sR0FBSSxJQUFHaU4sY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNcFEsR0FBRyxHQUFHb04sR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDK0MsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJL0MsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMaUQsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ2xELEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNclEsS0FBSyxHQUFHLE1BQU1vVCxHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSW5RLEdBQUcsSUFBSXVRLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU1wTixPQUFPLEdBQUksSUFBR2lOLGNBQWMsS0FFaEMsK0RBQThEclQsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSTVKLE1BQU0sQ0FBTkEsNEJBQW1DLENBQUNpYSxHQUFHLENBQTNDLEtBQWlEO0FBQy9DOXRCLGFBQU8sQ0FBUEEsS0FDRyxHQUFFOHdCLGNBQWMsS0FEbkI5d0I7QUFNSDtBQUVEOztBQUFBO0FBR0s7O0FBQUEsTUFBTWt4QixhQUFhLEdBQUcsd0dBQXRCLFNBQXNCLENBQXRCOzs7QUFlQSxtQ0FBc0Q7QUFDM0QsWUFBNEM7QUFDMUMsUUFBSWxMLEdBQUcsS0FBSEEsUUFBZ0IsZUFBcEIsVUFBNkM7QUFDM0NuUyxZQUFNLENBQU5BLGtCQUEwQkUsR0FBRCxJQUFTO0FBQ2hDLFlBQUltZCxhQUFhLENBQWJBLGlCQUErQixDQUFuQyxHQUF1QztBQUNyQ2x4QixpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRCtULEdBRHZEL1Q7QUFJSDtBQU5ENlQ7QUFRSDtBQUVEOztBQUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTXNkLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNN0csRUFBRSxHQUNiNkcsRUFBRSxJQUNGLE9BQU81RyxXQUFXLENBQWxCLFNBREE0RyxjQUVBLE9BQU81RyxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUN6WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNaFIsSUFBSSxHQUFDLENBQUM7QUFBQ3BPO0FBQUQsQ0FBRCxLQUFhO0FBRXBCLHNCQUNHLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsNEVBQTVCO0FBQXlHLGlCQUFTLEVBQUMsaUdBQW5IO0FBQXFOLG1CQUFXLEVBQUM7QUFBak87QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQU0sWUFBSSxFQUFDLGtPQUFYO0FBQThPLFdBQUcsRUFBQztBQUFsUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtHLHFFQUFDLDhEQUFEO0FBQU0sWUFBTSxFQUFFQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUFTSCxDQVhEOztBQWFBb08sSUFBSSxDQUFDNlgsTUFBTCxHQUFhamIsUUFBRCxJQUFZO0FBQ3BCLHNCQUNJLHFFQUFDLHFFQUFEO0FBQUEsY0FDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFPLGVBQWVrYixrQkFBZixDQUFrQztBQUFDQyxLQUFEO0FBQUs1UTtBQUFMLENBQWxDLEVBQTRDO0FBRS9DLE1BQUk7QUFDQSxRQUFHNFEsR0FBRyxDQUFDQyxPQUFKLENBQVkvVyxNQUFmLEVBQXNCO0FBQ2xCLFVBQUk7QUFBQ3piO0FBQUQsVUFBUyxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLGtEQUFYLEVBQTZEO0FBQUM4d0IsZUFBTyxFQUFDO0FBQUNDLGdCQUFNLEVBQUNGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZL1c7QUFBcEI7QUFBVCxPQUE3RCxDQUFuQjtBQUNILEtBRkQsTUFHSTtBQUNBLFVBQUk7QUFBQ3piO0FBQUQsVUFBUSxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLGtEQUFYLENBQWxCO0FBQ0g7O0FBSUQsUUFBRzFCLElBQUksSUFBSUEsSUFBSSxDQUFDTSxLQUFoQixFQUFzQjtBQUVsQixhQUFPO0FBQ0hveUIsZ0JBQVEsRUFBQztBQUNMbEcscUJBQVcsRUFBQztBQURQO0FBRE4sT0FBUDtBQU1IOztBQUVELFdBQU87QUFDSDlOLFdBQUssRUFBQztBQUFDdFMsZUFBTyxFQUFDcE0sSUFBSSxDQUFDQTtBQUFkO0FBREgsS0FBUDtBQUlILEdBeEJELENBd0JFLE9BQU9NLEtBQVAsRUFBYTtBQUVYLFdBQU87QUFDSG95QixjQUFRLEVBQUM7QUFDTGxHLG1CQUFXLEVBQUM7QUFEUDtBQUROLEtBQVA7QUFNSDtBQUNKO0FBR2NoUyxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFPLE1BQU05SyxhQUFhLEdBQUVpakIsWUFBRCxJQUFnQjtBQUV2QyxRQUFNQyxRQUFRLEdBQUMsSUFBSWpTLElBQUosQ0FBU2dTLFlBQVQsQ0FBZjtBQUNBLFFBQU1FLFVBQVUsR0FBQzlSLElBQUksQ0FBQytSLEdBQUwsQ0FBU25TLElBQUksQ0FBQ29TLEdBQUwsS0FBV0gsUUFBcEIsQ0FBakI7QUFDQSxRQUFNSSxNQUFNLEdBQUNqUyxJQUFJLENBQUNrUyxJQUFMLENBQVVKLFVBQVUsR0FBQyxJQUFyQixDQUFiOztBQUVBLE1BQUdHLE1BQU0sR0FBQyxFQUFWLEVBQWE7QUFFVCxXQUFPO0FBQUNyakIsVUFBSSxFQUFDcWpCLE1BQU47QUFBYXBqQixhQUFPLEVBQUM7QUFBckIsS0FBUDtBQUVGLEdBSkYsTUFLTSxJQUFHb2pCLE1BQU0sR0FBQyxFQUFQLElBQWFBLE1BQU0sR0FBQyxJQUF2QixFQUE0QjtBQUUvQixXQUFPO0FBQUNyakIsVUFBSSxFQUFDb1IsSUFBSSxDQUFDa1MsSUFBTCxDQUFVRCxNQUFNLEdBQUMsRUFBakIsQ0FBTjtBQUEyQnBqQixhQUFPLEVBQUM7QUFBbkMsS0FBUDtBQUNELEdBSEksTUFJQSxJQUFHb2pCLE1BQU0sR0FBQyxJQUFQLElBQWVBLE1BQU0sR0FBQyxLQUF6QixFQUErQjtBQUVqQyxXQUFPO0FBQUNyakIsVUFBSSxFQUFDb1IsSUFBSSxDQUFDa1MsSUFBTCxDQUFVRCxNQUFNLElBQUUsS0FBRyxFQUFMLENBQWhCLENBQU47QUFBZ0NwakIsYUFBTyxFQUFDO0FBQXhDLEtBQVA7QUFDRixHQUhJLE1BSUEsSUFBR29qQixNQUFNLEdBQUMsS0FBUCxJQUFnQkEsTUFBTSxHQUFDLFNBQTFCLEVBQW9DO0FBRXZDLFdBQU87QUFBQ3JqQixVQUFJLEVBQUNvUixJQUFJLENBQUNrUyxJQUFMLENBQVVELE1BQU0sSUFBRSxLQUFHLEVBQUgsR0FBTSxFQUFSLENBQWhCLENBQU47QUFBbUNwakIsYUFBTyxFQUFDO0FBQTNDLEtBQVA7QUFFRDtBQUVMLENBekJNLEM7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIlxyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICBcclxuICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuICAgIFxyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS53cm9uZyA9PSBcIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nID09IFwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyh7c2V0c3Bpbm5lcixzZXR1c2VyZGF0YSxzZXRsb2dnZWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2xvZ291dFwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSlcclxuICAgICAgc2V0dXNlcmRhdGEoe30pXHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2cobG9nZ2VkKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhxZ9hcsSxbMSxIGthecSxdFwiKVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJzb3J1biB2YXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXIsdHlwZW9mc3VibWl0fSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHsuLi5jb250ZW50ZGF0YSxwcm9jZXNzdHlwZTp0eXBlb2ZzdWJtaXR9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWNlY29tbWVudHJlcT1hc3luYyAoe01lc3NhZ2UsVGFrZXJJZCxzZXRudW1iZXJjb20sc2V0d2luZG93LFVzZXJJZCxDb250ZW50SWQsc2V0ZXJybXNnfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbW1lbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTp7XHJcbiAgICAgIE1lc3NhZ2U6TWVzc2FnZSxcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgVGFrZXJJZDpUYWtlcklkLFxyXG4gICAgfX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2d9KSl7ICAgIFxyXG4gICAgICAgIHNldG51bWJlcmNvbShwcmV2PT5wcmV2KzEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VsYW5cIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y3VycmVudGRhdGEsc2V0c3Bpbm5lcixzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyLHNldHN0b3ByZXEsY2F0ZWdvcnkscGFpZ25hdGlvbixzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbn0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfS8ke2NhdGVnb3J5fWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG4gICAgICAgIHNlbGVjdGlvbnNbY2F0ZWdvcnldLnN0b3ByZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRzZWxlY3Rpb24oc2VsZWN0aW9ubGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkIHJlcXVlc3RcIilcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcblxyXG4gICAgICBpZihwYWlnbmF0aW9uKXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgICBpZihsYXN0KXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChNeWRhdGEuY29uY2F0KEN1cnJlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChDdXJyZW50LmNvbmNhdChNeWRhdGEpKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkLHNldGFsbG93YWN0aW9ufSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLlJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpOyAgXHJcbiAgICAgIHNldGFsbG93YWN0aW9uKHRydWUpOyAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKCFkYXRhLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKHtVc2VySWR9KT0+e1xyXG5cclxuICAgdHJ5IHtcclxuICAgIFxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9ub3RpZmljYXRpb24vdXBkYXRlLyR7VXNlcklkfWApO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0c3Bpbm5lcixzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PSBhd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGVjb250ZW50LyR7VXNlcklkfS8ke293bmVycG9zdH0vJHtjYXRlZ29yeX0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoWy4uLmRhdGEuZGF0YV0pXHJcbiAgICAgICBzZXRzcGlubmVyKGZhbHNlKVxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsUHJldmVudCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhLGxhc3Ryb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn0vJHtsYXN0cm93fWApO1xyXG4gICAgY29uc3QgTXljdXJyZW50ZGF0YT1bLi4ubmF2ZGF0YV07XHJcbiAgICBjb25zdCBOZXdkYXRhPWRhdGEubXlkYXRhO1xyXG4gICAgXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxzZXRub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgc2V0YWN0aXZlKFwiTm90aGluZ1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0YWN0aXZlKFwiXCIpO1xyXG4gICAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gICAgfSAgXHJcblxyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQb3N0ID0gYXN5bmMoe1Bvc3RJZCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwidXNlci9kZWxldGVwb3N0XCIse1xyXG4gICAgICBQb3N0SWQ6UG9zdElkXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRhbnN3ZXJyZXEgPSBhc3luYyh7VXBwZXJjb21tZW50SWQsQW5zd2VyLFVzZXJJZCxzZXRlcnJtc2csc2V0d2luZG93LENvbnRlbnRJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEljb25zcGFuPXN0eWxlZC5zcGFuKCh7d2lkdGgsbWlkZGxlLGhlaWdodCxjb2xvcixiYWNrY29sb3IscG9zaXRpb24sdG9wLGxlZnQscmlnaHQsYm90dG9tLGxpbmVoZWlnaHQsaG92ZXJjb2xvcixob3ZlcmJhY2sscm90YXRlLHppbmRleH0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuZGlzcGxheTpibG9jaztcclxubGluZS1oZWlnaHQ6JHtsaW5laGVpZ2h0fTtcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6JHtjb2xvcn07XHJcbnotaW5kZXg6JHt6aW5kZXh9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNmb3JtOnJvdGF0ZSgke3JvdGF0ZSA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKCR7bWlkZGxlID8gXCItNTAlXCIgOiBcIjBcIn0sJHttaWRkbGUgPyBcIi01MCVcIiA6IFwiMFwifSk7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuIGNvbG9yOiR7aG92ZXJjb2xvcn07XHJcbn1cclxuYClcclxuXHJcbmNvbnN0IFN1YnRleHQgPSBzdHlsZWQucGBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oe2NsYXNzTmFtZSxJY29uY29uZmlnLGFjdGl2ZWZ1bmN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+PC9pPlxyXG4gICAgICAgICAgICA8L0ljb25zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVXNlcmNhcmQgZnJvbSBcIi4uLy4uL3NoYXJlZC9Vc2VyY2FyZFwiO1xyXG5pbXBvcnQge0NyZWF0ZXVzZXJyZWxhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge1RodW1iVXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5cclxuY29uc3QgUnRsaWtld2luZG93PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmhlaWdodDozNTBweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbnotaW5kZXg6MjAwO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDoxMDAlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Zm9sbG93ZXIoe2xpc3Qsc2V0bGlzdCxhdHRyaWJ1dGV9KSB7XHJcblxyXG4gICAgdmFyIFRpdGxlID0gXCJcIjtcclxuICAgIHZhciBJY29uICA9IFwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVsYXRpb24gPSAoY2hlY2tmb2xsb3csVXNlcklkLGZvbGxvd2VkaWQpID0+e1xyXG5cclxuICAgICAgICBDcmVhdGV1c2VycmVsYXRpb24oe1xyXG4gICAgICAgICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICAgICAgICBGb2xsb3dlZElkOmZvbGxvd2VkaWQsXHJcbiAgICAgICAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tmb2xsb3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzd2l0Y2ggKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJMaWtlXCI6XHJcbiAgICAgICAgICAgIFRpdGxlPVwiQmXEn2VuaWxlclwiXHJcbiAgICAgICAgICAgIEljb249PFRodW1iVXAgc3R5bGU9e3tjb2xvcjpcIiNDNzIxMjFcIn19PjwvVGh1bWJVcD5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlJlc2hvd1wiOlxyXG4gICAgICAgICAgICBUaXRsZT1cIsSwxZ9hcmV0bGVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgVGl0bGU9XCJFbXB0eSBmb3Igbm93XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtzZXRsaXN0fSBha3RpZj17dHJ1ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgICAgIDxSdGxpa2V3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6XCIxMHB4XCIsYmFja2dyb3VuZENvbG9yOlwibGlnaHRncmV5XCIsbWFyZ2luQm90dG9tOlwiMTBweFwiLGhlaWdodDpcIjQwcHhcIix3aWR0aDpcIjEwMCVcIixtYXJnaW46XCJhdXRvXCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRodW1iVXAgc3R5bGU9e3tjb2xvcjpcIiNDNzIxMjFcIn19PjwvVGh1bWJVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntUaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXtzZXRsaXN0fSAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsY3Vyc29yOlwicG9pbnRlclwifX0gY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJ3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcmNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25mb3JidXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU9e2l0ZW0uZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VybmFtZT17aXRlbS5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VybGlzdD17aXRlbS5Gb2xsb3dlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbGF0aW9uZnVuYz17Rm9sbG93aW5ncmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Vc2VyY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgIDwvUnRsaWtld2luZG93PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiXHJcbmltcG9ydCB7QWRkQ29tbWVudCwgZmVlZCwgRmVlZGJhY2ssU2VuZH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7Y2FsY3VsYXRlZGF0ZX0gZnJvbSBcIi4uLy4uL3V0aWxzZnVuY1wiXHJcbmltcG9ydCB1c2VDbGlja291dHNpZGUgZnJvbSBcIi4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgLCBCdXR0b24sSW5wdXRBZG9ybm1lbnR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCBMaWtlYW5pbWF0b249a2V5ZnJhbWVzYFxyXG4wJSB7Zm9udC1zaXplOjE2cHh9XHJcbjI1JSB7Zm9udC1zaXplOjE4cHh9XHJcbjUwJSB7Zm9udC1zaXplOjIxcHh9XHJcbjY1JSB7Zm9udC1zaXplOjE3fVxyXG43MCUge2ZvbnQtc2l6ZToxMHB4fVxyXG4xMDAlIHtmb250LXNpemU6MTZweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxuaGVpZ2h0OiR7KHtkcmFmdH0pPT4gZHJhZnQgPyBcIjMwMHB4XCIgOiBcIlwifTtcclxubWFyZ2luLWJvdHRvbTozMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2NvbW1lbnR9KT0+IWlzY29tbWVudCA/IFwiI2ZhZjlmOVwiOiBcIiNmYWY5ZjlcIn07XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcclxuXHJcbmBcclxuXHJcbi8vVGhpcyBpcyBmb3IgZHJhZnQgcGFnZVxyXG5jb25zdCBTb2Z0Y292ZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6MzAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxub3BhY2l0eTowLjY7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctcmlnaHQ6NXB4O1xyXG5wYWRkaW5nLWxlZnQ6NXB4O1xyXG5gXHJcbmNvbnN0IEltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MTtcclxuYFxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MjtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblxyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzogJHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIjE1cHhcIjogXCIwcHhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbmZsZXg6MTtcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kUGFydCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwiYmxvY2tcIjpcImZsZXhcIn07XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU3BhbmZvciA9IHN0eWxlZC5zcGFuYFxyXG5tYXJnaW4tbGVmdDo1cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6dW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4mOiBob3ZlciAke1NwYW5mb3J9e1xyXG4gICAgY29sb3I6JHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLXRvcDoxMHB4O1xyXG5wYWRkaW5nLWJvdHRvbToxMHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IEljb25zPXN0eWxlZC5pYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuZm9udC1zaXplOjE2cHg7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjowLjNzO1xyXG5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgkeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfSk7XHJcbn07XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2FuaW1hdGlvbn0pPT5hbmltYXRpb24gPyBMaWtlYW5pbWF0b24gOiBcIlwifTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpibG9jaztcclxud2lkdGg6MzUwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjEwcHg7IFxyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjQ4MDtcclxuYFxyXG5jb25zdCBPcHRpb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG4mOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUJFQkVCO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgRHJhZnRob2xkZXIgPSBzdHlsZWQuc3BhbmBcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo1MCU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbnotaW5kZXg6MzAwO1xyXG5gXHJcblxyXG4vL2NvbW1lbnQtYW5zd2VyIHNlY3Rpb25cclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctYm90dG9tOjE1cHg7XHJcbnBhZGRpbmctdG9wOjE1cHg7XHJcbmBcclxuY29uc3QgUHJvZmlsZWltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyOyBcclxucG9zaXRpb246JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCJ9O1xyXG5sZWZ0OiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCItNjBweFwiIDogXCIwcHhcIn07XHJcbiY6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTBweDtcclxuICAgIGxlZnQ6MjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiR7KHtsZW5ndGh9KT0+bGVuZ3RofTtcclxuICAgIGhlaWdodDokeyh7bGVuZ3RofSk9Pmxlbmd0aCoxNTB9cHg7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG59O1xyXG4mOmFmdGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIGxlZnQ6LTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDokeyh7bGVuZ3RofSk9Pmxlbmd0aCo1MH1weDtcclxuICAgIHotaW5kZXg6LTU7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXRvcDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG59XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZnVuY3Rpb24gQ29udGVudGNhcmQoe0NoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbY29tbWVudGFuc3dlcixzZXRjb21tZW50YW5zd2VyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5zd2VydmFsdWUsc2V0YW5zd2VydmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBsaWtlLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXR3ZWV0LmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZWFkbGF0ZXIuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiUmVhZGxhdGVyXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICAvL2xpa2UgLCBzaWduIGFuZCBzYXZlIG9wZXJhdGlvbnNcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2UgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6dXNlcmRhdGEuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6dXNlcmRhdGEuVXNlcnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJDcmVhdGVcIix1c2VyaWQpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT10cnVlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlciA9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNYWtlYWNvbW1lbnQ9KCk9PntcclxuICAgICAgICBBbnN3ZXJoYW5kbGVyKGFuc3dlcnZhbHVlLHBvc3RJZClcclxuICAgICAgICBzZXRhbnN3ZXJ2YWx1ZShcIlwiKVxyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiAgZHJhZnQ9e2RyYWZ0fSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgLy9kcmFmdCBjb3ZlclxyXG4gICAgICAgICAgICAgICBkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2Z0Y292ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEtbGdcIiBJY29uY29uZmlnPXt7emluZGV4OlwiNDAwXCIsaG92ZXJiYWNrOlwid2hpdGVcIixob3ZlcmNvbG9yOlwiI2Q5MDQyOVwiLGJhY2tjb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI2MHB4XCIsaGVpZ2h0OlwiNjBweFwiLGxpbmVoZWlnaHQ6XCI2MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5DdWx0dXJlIG9mIHRoZSBPdHRvbWFuIEVtcGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vb3B0aW9uIHNlY3Rpb25cclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgc3R5bGU9e3tkaXNwbGF5OnVzZXJkYXRhLlVzZXJJZCA/IFwiZmxleFwiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICg8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2s+PC9GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaWxkaXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZHJhZnQgJiZcclxuICAgICAgICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVpbWFnZWhvbGRlciBsZW5ndGg9e0NoaWxkbGVuZ3RofSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBoZWlnaHQ9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IHByb2ZpbGU9e3Byb2ZpbGVpbWFnZX0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50IHx8IGRyYWZ0ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0+e2NvbnRlbnR9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRlbnQvW2lkXVwiIGFzPXtgL2NvbnRlbnQvJHtwb3N0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc2NvbW1lbnQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJncmVlblwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMCwgMjU1LCAwLCAwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMucmVzaG93LmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLnJlc2hvdy5hbmltYXRpb259IGNvbG9yPXtcImdyZWVuXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmVzaG93XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LFwiUmVzaG93XCIpfT57ZWxlbWVudHMucmVzaG93Lm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwicmVkXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjI1NSwgMCwgMCwwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMuTGlrZS5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5MaWtlLmFuaW1hdGlvbn0gY29sb3I9e1wiI0M3MjEyMVwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcIkxpa2VcIil9IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciAgb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LFwiTGlrZVwiKX0gPntlbGVtZW50cy5MaWtlLm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRDb21tZW50IG9uQ2xpY2s9eygpPT5zZXRjb21tZW50YW5zd2VyKCFjb21tZW50YW5zd2VyKX0gIHN0eWxlPXt7Y29sb3I6XCJncmV5XCIsY3Vyc29yOlwicG9pbnRlclwifX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMuUmVhZGxhdGVyLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLlJlYWRsYXRlci5hbmltYXRpb259IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJSZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudGFuc3dlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VydmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0YW5zd2VydmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6e2N1cnNvcjpcInBvaW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IG9uQ2xpY2s9e01ha2VhY29tbWVudH0gc3R5bGU9e3tjb2xvcjphbnN3ZXJ2YWx1ZS5sZW5ndGggPiAwID8gIFwiI2U2Mzk0NlwiOiBcImdyZXlcIn19IHBvc2l0aW9uPVwiZW5kXCI+PFNlbmQ+PC9TZW5kPjwvSW5wdXRBZG9ybm1lbnQ+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3J1bWEgQ2V2YXAgVmVyLi4uXCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvU2Vjb25kUGFydD5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudGNhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDo2MHB4O1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjEwMHZoO1xyXG56LWluZGV4OjE1MDtcclxuYmFja2dyb3VuZC1jb2xvcjojZTllY2VmO1xyXG5ib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbnRyYW5zaXRpb246YWxsIDAuMnM7XHJcbndpZHRoOiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCIyMDBweFwiIDogXCI2MHB4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25EaXY9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xveW9yOnllbGxvdztcclxubWFyZ2luLXRvcDo1cHg7XHJcbndpZHRoOjk2JTtcclxuYFxyXG5jb25zdCBMaT1zdHlsZWQubGlgXHJcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzo3cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDRENEQ0O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5gXHJcblxyXG4vL2NvbnN0IEljb249c3R5bGVkLmlgXHJcbi8vY29sb3I6I0M3MDAzOTtcclxuLy9gXHJcbmNvbnN0IENsb3Nlb3Blbj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzoxMHB4O1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBMZWZ0dG9vbGJhcj0oe21ha2VhY3RpdmUsbXlhY3RpdmV9KT0+e1xyXG5cclxuICAgIGNvbnN0IHt1c2VyZGF0YSxsb2dnZWR9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3QgZmlyc3RsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiS2F5ZGVkaWxlbmxlclwiLHBhdGg6YHNhdmVkYH0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkJlxJ9lbmlsZW5sZXJcIixwYXRoOmBsaWtlZGB9XSlcclxuICAgIGNvbnN0IHNlY29uZGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1lZGl0XCIsZGVzYzpcIkfDtm5kZXJpbGVyaW1cIixwYXRoOlwiL2fDtm5kZXJpbGVyXCJ9LHtpY29uOlwiZmFzIGZhLXVzZXJzXCIsZGVzYzpcIlRhcnTEscWfbWFsYXLEsW1cIixwYXRoOlwiL3RhcnTEscWfbWFsYXJcIn1dKVxyXG4gICAgY29uc3QgdGhpcmRsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtcGVuY2lsLXJ1bGVyXCIsZGVzYzpcIlRhc2xha2xhclwiLHBhdGg6YERyYWZ0c2B9XSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmRhdGEuVXNlcklkKVxyXG5cclxuICAgIH0sIFt1c2VyZGF0YV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxvZ2dlZCA/XHJcblxyXG4gICAgICAgICAgICA8RXh0ZXJpb3JEaXYgYWN0aXZlPXtteWFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICA8Q2xvc2VvcGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PnttYWtlYWN0aXZlKCFteWFjdGl2ZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGNvbG9yOlwiYmxhY2tcIixyb3RhdGU6bXlhY3RpdmUgPyB0cnVlIDogdW5kZWZpbmVkfX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXNlcmRhdGEuVXNlcklkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD17bXlhY3RpdmUgPyBcIjgwcHhcIiA6IFwiNTBweFwifSBoZWlnaHQ9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt1c2VyZGF0YS5Vc2VySWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwiLGNvbG9yOlwiIzI5MzI0MVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+PHNwYW4+e215YWN0aXZlID8gdXNlcmRhdGEuVXNlcm5hbWUgOiBcIi4uLlwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9bdXNlcsSxZF0vJHtpdGVtLnBhdGh9YH0gYXM9e2AvJHt1c2VyZGF0YS5Vc2VySWR9LyR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiNmZjBhNTRcIixjb2xvcjpcIndoaXRlXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6bXlhY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kbGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tzdHVmZl1cIiBhcz17YCR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiMxNjhhYWRcIixjb2xvcjpcIndoaXRlXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6bXlhY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixmb250U2l6ZTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlyZGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9EcmFmdHMvW3VzZXJpZF1cIiBhcz17YC9EcmFmdHMvJHt1c2VyZGF0YS5Vc2VySWR9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcImJsYWNrXCIsY29sb3I6XCJ3aGl0ZVwifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5Om15YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCIsZm9udFNpemU6XCIxNXB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lckRpdj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdHRvb2xiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXIsbG9nb3V0fSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIEhvbWUsQXNzaWdubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBOYXZiYXJleHQ9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo2MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDoyMDA7XHJcbmBcclxuY29uc3QgSW5uZXJOYXZiYXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1heC13aWR0aDoxMTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtjbGlja2VkfSk9PmNsaWNrZWQgPyBcIlwiIDogXCJcIn07XHJcbnBhZGRpbmc6MnB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYmRlZmI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtmbGV4Mn0pPT5mbGV4Mn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbnBhZGRpbmctcmlnaHQ6NDBweDtcclxuYm9yZGVyOm5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I0UwRTBFMDtcclxuY29sb3I6YmxhY2s7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDokeyh7Zm9ybm90aWZ5fSk9PmZvcm5vdGlmeSA/IFwiNDAwcHhcIiA6IFwiXCJ9O1xyXG5vdmVyZmxvdzphdXRvO1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYFxyXG5jb25zdCBJbm5lcm9wdGlvbj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5sZWZ0Oi01NXB4O1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGZvbnRzaXplOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hlbGVtZW50cz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG4mOmhvdmVyIHtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2Mzk0NjtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuYFxyXG5cclxuLy9Ub0RvIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHtEYXRhLENvdW50LFJlbG9hZGZ1bmMsVXBkYXRlfSl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXIsdXNlcmRhdGEsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSxzZXRsb2dnZWR9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3Qge3JlZjpyZWYyLHZpc2libGU6dmlzaWJsZTIsc2V0dmlzaWJsZTpzZXR2aXNpYmxlMn0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgLy9idXJhZGEgZGXEn2nFn2tlbiBpc2ltaSBkZcSfacWfdGlyZXJlayBrdWxsYW5hYmlscnNpblxyXG4gICAgY29uc3QgW2lucHV0dmFsdWUsc2V0aW5wdXR2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2Vyc2ZvcnNlYXJjaCxzZXR1c2Vyc2ZvcnNlYXJjaF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaGFjdGl2ZSxzZXRzZWFyY2hhY3RpdmVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgIE15cmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbb3JkZXJudW1iZXIsc2V0b3JkZXJudW1iZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbSWNvbm9iamVjdCxzZXRJY29ub2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAxOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1wbHVzXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzM2cHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJwbHVzXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtYmVsbFwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczM3B4JyxcclxuICAgICAgICAgIHNob3J0OlwiYmVsbFwiLFxyXG4gICAgICAgICAgT25jZXJlcXVlc3RlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4JyxcclxuICAgICAgICAgIHNob3J0OlwiZG93blwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc2ZvcnNlYXJjaClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL1RvZG8gb25seSBpbnB1dCBsZW50aFxyXG4gICAgICBpZighdmlzaWJsZTIpXHJcbiAgICAgIHNldGlucHV0dmFsdWUoXCJcIik7XHJcbiAgICAgIHNldHNlYXJjaGFjdGl2ZShcIlwiKTtcclxuXHJcbiAgICB9LFt2aXNpYmxlMl0pXHJcblxyXG4gICAgY29uc3QgTG9nb3V0ID0oKT0+e1xyXG4gICAgICAgIGxvZ291dCh7XHJcbiAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEtleXVwZnVuY3Rpb249KCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhpbnB1dHZhbHVlKVxyXG4gICAgICAgaWYoaW5wdXR2YWx1ZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHNldHNlYXJjaGFjdGl2ZShcIkxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIEdldHVzZXJzZm9yc2VhcmNoYmFyKHtcclxuICAgICAgICAgICAgICAgIGlucHV0dmFsdWU6aW5wdXR2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHNldHVzZXJzOnNldHVzZXJzZm9yc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlOnNldHNlYXJjaGFjdGl2ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2Nyb2xsdG9Cb3R0b209KCk9PntcclxuXHJcbiAgICAgICAgaWYoTXlyZWYuY3VycmVudC5zY3JvbGxUb3AgKyBNeXJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA+PSBNeXJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgICAgIFJlbG9hZGZ1bmMob3JkZXJudW1iZXIrRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlaGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgc2V0dmlzaWJsZTIodHJ1ZSk7XHJcbiAgICAgICAgIHNldGlucHV0dmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25zZWxlY3Q9KGljb25udW1iZXIpPT57XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IG15b2JqZWN0PXsuLi5JY29ub2JqZWN0fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobXlvYmplY3QpLmZvckVhY2goa2V5ID0+e1xyXG4gICAgICAgICAgICBpZihpY29ubnVtYmVyICE9PSBrZXkpe1xyXG4gICAgICAgICAgICAgICAgbXlvYmplY3Rba2V5XS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZil7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9dHJ1ZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoaWNvbm51bWJlcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHNldEljb25vYmplY3QobXlvYmplY3QpOyBcclxuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25jbGljaz0oaXRlbSxzaG9ydG5hbWUpPT57XHJcbiAgICAgICAgLy9idXJhZGEgc2FkZWNlIGJpbGlkaXJpbSBrdXR1c3Uga2FwYWzEsXlrZW4gaXN0ZWsgYXTEsXlvcnV6IDIga2V6IGRlZ2lsXHJcbiAgICAgICAgaWYoc2hvcnRuYW1lID09IFwiYmVsbFwiICYmIEljb25vYmplY3RbaXRlbV0ub25vZmYgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBJY29uc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgc2VhcmNodHlwZT1cIlwiO1xyXG4gICAgXHJcbiAgICBpZihzZWFyY2hhY3RpdmUgPT0gXCJMb2FkaW5nXCIpe1xyXG4gICAgICAgIHNlYXJjaHR5cGU9PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+PFNwaW5uZXI+PC9TcGlubmVyPjwvZGl2PiBcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc2VhcmNoYWN0aXZlID09IFwiTm90aGluZ1wiKXtcclxuICAgICAgICBzZWFyY2h0eXBlPTxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIn19PlNvbnXDpyBCdWx1bmFtYWTEsS48L2Rpdj4gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyZXh0PlxyXG4gICAgICAgICAgICA8SW5uZXJOYXZiYXI+ICAgXHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtcImJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvL3YzLnN2Zz92PTFcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIscGFkZGluZ1JpZ2h0OlwiMTBweFwiLGJvcmRlclJpZ2h0OlwiMXB4IHNvbGlkIGJsYWNrXCJ9fT48c3Bhbj5FdnJpbSBBxJ9hY8SxPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT48SG9tZSBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLGNvbG9yOlwiI2M5MTg0YVwifX0+PC9Ib21lPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIHJlZj17cmVmMn0gZmxleDI9e1wibm9uZVwifSBmbGV4PXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5VXA9e0tleXVwZnVuY3Rpb259IHZhbHVlPXtpbnB1dHZhbHVlfSBvbkNoYW5nZT17Q2hhbmdlaGFuZGxlcn0gcGxhY2Vob2xkZXI9XCJBcmFcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR2YWx1ZS5sZW5ndGggPD0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxNXB4XCIsdG9wOlwiMTBweFwiLHdpZHRoOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnNldHZpc2libGUyKGZhbHNlKX0gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMXB4XCIsdG9wOlwiMTJweFwiLHdpZHRoOlwiMjBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA+IDAgJiYgdmlzaWJsZTIgPT0gdHJ1ZSAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFjdGl2ZS5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntzZWFyY2h0eXBlfTwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNmb3JzZWFyY2gubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPFNlYXJjaGVsZW1lbnRzIG9uQ2xpY2s9eygpPT5zZXRpbnB1dHZhbHVlKFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke2l0ZW0uaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDVweFwiIGhlaWdodD1cIjQ1cHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcIjYwMFwifX0+e2l0ZW0uZmlyc3RuYW1lK1wiIFwiK2l0ZW0ubGFzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJsaWdodGdyYXlcIixmb250U2l6ZTpcIjE1cHhcIn19PsSwbsWfYWF0IE3DvGhlbmRpc2k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hlbGVtZW50cz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIXNwaW5uZXIgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICFsb2dnZWQgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjEwcHhcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFjY291bnRDaXJjbGUgc3R5bGU9e3tmb250U2l6ZTpcIjI1cHhcIn19PjwvQWNjb3VudENpcmNsZT59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBc3NpZ25tZW50IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMjVweFwifX0+PC9Bc3NpZ25tZW50Pn0gY29sb3I9XCJzZWNvbmRhcnlcIj5LYXnEsXQgT2w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGZsZXgyPXtcImZsZXhcIn0gcmVmPXtyZWZ9IGZsZXg9e1wiZmxleFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoSWNvbm9iamVjdCkubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIGNsaWNrZWQ9e0ljb25vYmplY3RbaXRlbV0ub25vZmZ9IG9uQ2xpY2s9eygpPT5JY29uY2xpY2soaXRlbSxJY29ub2JqZWN0W2l0ZW1dLnNob3J0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiNGMEYwRjBcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpJY29ub2JqZWN0W2l0ZW1dLmxpbmVoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e0ljb25vYmplY3RbaXRlbV0uY2xhc3NOYW1lfSBzdHlsZT17e2NvbG9yOkNvdW50ID4gMCAmJiBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiID8gXCIjZDkwNDI5XCIgOiBcIlwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiAmJiBDb3VudCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsZm9udFNpemU6XCIxMnB4XCIsdG9wOlwiLTVweFwiLHJpZ2h0OlwiLTVweFwiLHdpZHRoOlwiMjBweFwiLGRpc3BsYXk6XCJibG9ja1wiLGhlaWdodDpcIjIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMjBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fT57Q291bnR9PC9zcGFuPikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD1cIjM1cHhcIiBoZWlnaHQ9XCIzNXB4XCIgcHJvZmlsZT1cIi9jYXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29udW1iZXIgIT09IDAgJiYgdmlzaWJsZSA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgb25TY3JvbGw9e1Njcm9sbHRvQm90dG9tfSByZWY9e015cmVmfSBmb3Jub3RpZnk9e0ljb25vYmplY3RbXCIyXCJdLm9ub2ZmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZ0b29scyBMb2dvdXQ9e0xvZ291dH0gTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNvbnRleHR9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9VSS9JY29uXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHtsb2dvdXR9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5cclxuY29uc3QgT3B0aW9uMWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NoZWNrfSk9PiBjaGVjayA9PSBmYWxzZSA/IFwiI0VCRUJFQlwiIDogXCJcIn07XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbnRvb2xzKHtvcHRudW1iZXIsb3B0bmFtZSxOYXZkYXRhLExvZ291dH0pe1xyXG4gICAgY29uc3Qge3NldGxvZ2dlZCxzZXR1c2VyZGF0YSxzZXRzcGlubmVyLGxvZ2dlZH0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc29sZS5sb2coc2V0bG9nZ2VkKVxyXG4gICAgY29uc3QgW3RvZ2dsZSxzZXR0b2dsZV09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCBNeW9wdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgdGl0bGUgPSBcIlwiO1xyXG5cclxuICAgIGlmKG9wdG51bWJlciA9PSAxKXtcclxuICAgICAgdGl0bGUgPSBcIk9sdcWfdHVyXCJcclxuICAgICAgTXlvcHRpb24gPSA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R8O2bmRlcmk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+U2F5ZmFuZGEgYmlyIGfDtm5kZXJpIHBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CaXIgdGFydMSxxZ9tYSBvZGFzxLEgb2x1xZ90dXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgfVxyXG4gICAgaWYob3B0bnVtYmVyID09IDIpe1xyXG5cclxuICAgICAgICB0aXRsZT1cIkJpbGRpcmltbGVyXCJcclxuXHJcbiAgICAgICAgY29uc3QgQXR0cml1YnRlYXJyYXk9W1xyXG4gICAgICAgICAgICB7bmFtZTpcIkxpa2VcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiU2VuaW4gR8O2bmRlcmluaSBCZcSfZW5kaS5cIixJY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGNvbG9yOlwiI0REMUYxRlwiLGxoOlwiMzBweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJSZXNob3dcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiU2VuaW4gR8O2bmRlcmluaSDEsMWfYXJldGxlZGkuXCIsSWNvbjpcImZhcyBmYS10aHVtYnRhY2tcIixjb2xvcjpcIiNhZGI1YmRcIixsaDpcIjM1cHhcIixocmVmOlwiL2NvbnRlbnRcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiRm9sbG93XCIsaWRuYW1lOlwiVXNlcklkXCIsZGVzYzpcIlNlbmkgVGFraXAgRXR0aVwiLEljb246XCJmYXMgZmEtdXNlci1wbHVzIGZhLXNtXCIsY29sb3I6XCIjZWU2MDU1XCIsbGg6XCIzMHB4XCIsaHJlZjpcIi9wcm9maWxlXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIkNvbW1lbnRcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiR8O2bmRlcmluZSBZb3J1bSBZYXB0xLEuXCIsSWNvbjpcImZhcyBmYS1jb21tZW50LWRvdHNcIixjb2xvcjpcIiNhZGI1YmRcIixsaDpcIjMwcHhcIixocmVmOlwiL2NvbnRlbnRcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiUG9zdFwiLGRlc2M6XCJZZW5pIEJpciBHw7ZuZGVyaSBQYXlsYcWfdMSxXCIsSWNvbjpcImZhcyBmYS1lZGl0XCIsY29sb3I6XCIjZmNhMzExXCIsbGg6XCIzMHB4XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIkRlYmF0ZVwiLGRlc2M6XCJZZW5pIEJpciBncnVwIE9sdcWfdHVyZHUuXCIsSWNvbjpcIlwifV07XHJcblxyXG4gICAgICAgIGlmKE5hdmRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBNeW9wdGlvbiA9IDxoND5IZW7DvHogYmlyIGJpbGRpcmltaW5peiB5b2suPC9oND5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoTmF2ZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIE15b3B0aW9uID0gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIHtOYXZkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE8gaWNvbiBkZXRlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBteWl0ZW1vYmo9e307XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEF0dHJpdWJ0ZWFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5hdHRyaWJ1dGUgPT0gQXR0cml1YnRlYXJyYXlbaV0ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteWl0ZW1vYmogPSBBdHRyaXVidGVhcnJheVtpXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uQ29udGVudElkID09IG51bGwgJiYgaXRlbS5Db21tZW50SWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxPcHRpb24xZGl2IGtleT17aW5kZXh9IGNoZWNrPXtpdGVtLkZhY2VjaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTpgJHtteWl0ZW1vYmouaHJlZn0vJHtpdGVtW215aXRlbW9iai5pZG5hbWVdfWAscXVlcnk6e25hbWU6XCJQb3N0XCJ9fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17bXlpdGVtb2JqLkljb259IEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiNDBweFwiLHJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIixiYWNrY29sb3I6bXlpdGVtb2JqLmNvbG9yLHdpZHRoOlwiMzBweFwiLGhlaWdodDpcIjMwcHhcIixsaW5laGVpZ2h0Om15aXRlbW9iai5saH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJY29uIGNsYXNzTmFtZT17XCJmYXMgZmEtc3RhciBmYS1zbVwifSBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIi04cHhcIixyaWdodDpcIi0ycHhcIixjb2xvcjpcIiM3MmRkZjdcIix3aWR0aDpcIjE3cHhcIixoZWlnaHQ6XCIxN3B4XCIsbGluZWhlaWdodDpcIjE3cHhcIn19PjwvSWNvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsZm9udFNpemU6XCIxNXB4XCJ9fT57aXRlbS5Vc2VyLmZpcnN0bmFtZSArIFwiIFwiICsgaXRlbS5Vc2VyLmxhc3RuYW1lICsgXCIgLCAoT3NtYW5sxLEgSGFsa8SxbsSxbsSxIEXEn2l0aW0gU2V2aXllc2kuLi4pXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIixjb2xvcjpcIiM3NTc1NzVcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+e215aXRlbW9iai5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCIsY29sb3I6XCIjMTc4MGExXCIsZm9udFdlaWdodDpcImJvbGRcIn19PntjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS5leHByZXNzfSDDtm5jZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbjFkaXY+KVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pICAgXHJcblxyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpZihvcHRudW1iZXIgPT0gMyl7XHJcbiAgICAgIHRpdGxlPVwiUHJvZmlsXCJcclxuICAgICAgTXlvcHRpb249KCA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzJweFwiLGhlaWdodDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWxpbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY29nIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixoZWlnaHQ6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWwgQXlhcmxhcsSxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbW9vbiBcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjMycHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTVweFwifX0+S2FyYW5sxLFrIE1vZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggIGNoZWNrZWRJY29uPXtmYWxzZX0gdW5jaGVja2VkSWNvbj17ZmFsc2V9IG9uQ2hhbmdlPXsoKT0+c2V0dG9nbGUoIXRvZ2dsZSl9IGNoZWNrZWQ9e3RvZ2dsZX0+PC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdiBvbkNsaWNrPXsoKT0+TG9nb3V0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1vdXQtYWx0IFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzJweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT7Dh8Sxa8SxxZ8gWWFwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PiAgICAgICBcclxuICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCI1cHhcIixmb250U2l6ZTpcIjIwcHhcIn19Pnt0aXRsZX08L3A+XHJcbiAgICAgICAgICB7TXlvcHRpb259XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbiAgIFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtQZXJzb25BZGR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3I9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5gXHJcbmNvbnN0IElubmVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYW1lPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuYFxyXG5cclxuY29uc3QgRm9sbG93aW5nPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1sZWZ0OmF1dG87XHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJjYXJkKHtmaXJzdG5hbWUsc3VybmFtZSxpbWFnZXVybCxvcHRpb25mb3JidXR0b24sY2hpbGRyZW4sdXNlcm51bWJlcix1c2VyaWQsZm9sbG93ZXJsaXN0LFJlbGF0aW9uZnVuY30pIHtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tmb2xsb3csc2V0Y2hlY2tmb2xsb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCAhPT0gdXNlcmlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBmb2xsb3dlcmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IGVsZW1lbnQuaWQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRjaGVja2ZvbGxvdyh0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXE9KCk9PntcclxuICAgICAgICBcclxuICAgICAgICBzZXRjaGVja2ZvbGxvdyghY2hlY2tmb2xsb3cpO1xyXG4gICAgICAgIFJlbGF0aW9uZnVuYyhjaGVja2ZvbGxvdyx1c2VyZGF0YS5Vc2VySWQsdXNlcmlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3I+XHJcbiAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e1wiL2xlZC5qcGdcIn0gd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgIDxOYW1lPjxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+e2ZpcnN0bmFtZStcIiBcIitzdXJuYW1lfTwvc3Bhbj48L05hbWU+XHJcbiAgICAgICAgICAgICAgIDxGb2xsb3dpbmc+e2NoaWxkcmVufTwvRm9sbG93aW5nPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5Vc2VySWQgIT09IHVzZXJpZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgc3RhcnRJY29uPXs8UGVyc29uQWRkPjwvUGVyc29uQWRkPn0gc3R5bGU9e3t3aWR0aDpcIjE3MHB4XCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixmb250V2VpZ2h0OlwiNjAwXCJ9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e0ZvbGxvd2luZ3JlcX0+e2NoZWNrZm9sbG93ID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZSxrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiB9XHJcblxyXG4gYm9keSB7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcblxyXG4gaHRtbHtcclxuICAgc2Nyb2xsLWJlaGF2aW9yOnNtb290aDtcclxuIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvcmZpbGVpbWFnZT1zdHlsZWQuZGl2KCh7d2lkdGgsaGVpZ2h0LHByb2ZpbGV9KT0+YFxyXG53aWR0aDoke3dpZHRofTtcclxuaGVpZ2h0OiR7aGVpZ2h0fTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjE1MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMZWZ0dG9vbGJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0ljb25cIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Db3VudHJlcSxOb3RpZmljYXRpb25yZXEsVXBkYXRlTm90aWZpY2F0aW9uY291bnR9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuXHJcblxyXG5jb25zdCBCaWdkaXY9c3R5bGVkLmRpdmBcclxuYFxyXG5cclxuY29uc3QgR291cGljb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbmJvdHRvbTo0MHB4O1xyXG5yaWdodDo0MHB4O1xyXG50cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxuei1pbmRleDoxMDA7XHJcbm9wYWNpdHk6JHsoe3VwfSk9PnVwID8gXCIxXCIgOiBcIjBcIn07XHJcbmBcclxuLy9UT0RPIHNvY2tldCBpbyBoYW5kbGUgZnVuY3Rpb25zIG9uIHNlcnZlcnNpZGVcclxuXHJcbmNvbnN0IHNvY2tldD1pbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ291cCxzZXRnb3VwXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtuYXZkYXRhLHNldG5hdmRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudG9mZGF0YSxzZXRjb3VudGRhdGFdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhc3RyZWNvcmQsc2V0bGFzdHJlY29yZF09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZGFjdGl2ZSxzZXRsYXN0cmVjb3JkYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXJvdXRlci5wYXRobmFtZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgICAgIHNldGFjdGl2ZShmYWxzZSk7ICBcclxuICAgIH0sIFt1c2Vyb3V0ZXIucXVlcnldKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntcclxuXHJcbiAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDUwMCl7XHJcbiAgICAgICAgICAgICAgc2V0Z291cCh0cnVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBzZXRnb3VwKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9ICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXI9KCk9PntcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZGFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZChwcmV2PT5wcmV2KzEpO1xyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y291bnRkYXRhOnNldGNvdW50ZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzb2NrZXQub24oXCJOb3RpZmljYXRpb25cIixsaXN0ZW5lcikgXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCAmJiBsYXN0cmVjb3JkYWN0aXZlKXtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpjb3VudG9mZGF0YSxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6dHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0sW2xhc3RyZWNvcmRdKVxyXG5cclxuICAgIGNvbnN0IFJlbG9hZG5hdj0ob3JkZXIpPT57XHJcblxyXG4gICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVjb3VudD0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRpbm5nZ2dcIik7XHJcbiAgICAgICAgc2V0Y291bnRkYXRhKDApO1xyXG4gICAgICAgIFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50KHtVc2VySWQ6dXNlcmRhdGEuVXNlcklkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBVcGRhdGU9e1VwZGF0ZWNvdW50fSBSZWxvYWRmdW5jPXtSZWxvYWRuYXZ9IENvdW50PXtjb3VudG9mZGF0YX0gRGF0YT17bmF2ZGF0YX0+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICB7Lyp0aGlzIHBhcnQgd2lsbCBiZSBjaGFuZ2VkKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIDxHb3VwaWNvbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5zY3JvbGxUbyh7dG9wOjB9KX19IHVwPXtnb3VwfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXVwIGZhLWxnXCIgSWNvbmNvbmZpZz17e2JhY2tjb2xvcjpcIiNlZjIzM2NcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI0MHB4XCIsaGVpZ2h0OlwiNDBweFwiLGxpbmVoZWlnaHQ6XCI0MHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvR291cGljb24+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIb21lcmVxLENyZWF0ZXJlbGF0aW9ucmVxLE5vdGlmaWNhdGlvbnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcclxuaW1wb3J0IHsgQXJyb3dCYWNrSW9zLCBBcnJvd0ZvcndhcmRJb3MsIEZvcm1hdFF1b3RlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbn1cclxuYFxyXG5jb25zdCBUaXRsZURpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL3dheS5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50RGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDo2NTBweDtcclxucGFkZGluZy10b3A6MjBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1yaWdodDoyNXB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU2hvcnREaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6NjBweDtcclxuaGVpZ2h0OjUwcHg7XHJcbm1heC13aWR0aDo2NTBweDtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6MTIwO1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcnNob3J0RGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucmlnaHQ6JHsoe3NsaWRldmFsdWV9KT0+c2xpZGV2YWx1ZX07XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdGlvbmJveGVzPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tbGVmdDo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czo1MHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIiNlZjIzM2NcIiA6XCIjY2VkNGRhXCJ9O1xyXG5jb2xvcjokeyh7c2VsZWN0ZWR9KT0+c2VsZWN0ZWQgPyBcIndoaXRlXCIgOlwiYmxhY2tcIn07XHJcbmZsZXgtc2hyaW5rOjA7XHJcbmBcclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmNvbG9yOnJlZDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxucGFkZGluZzo2cHg7XHJcbmhlaWdodDoxMDAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxub3BhY2l0eToxO1xyXG56LWluZGV4OjE1MDtcclxubGVmdDokeyh7bGVmdHZhbHVlfSk9PmxlZnR2YWx1ZX07XHJcbnRvcDo1MCU7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMXM7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG5yaWdodDokeyh7cmlnaHR2YWx1ZX0pPT5yaWdodHZhbHVlfTtcclxuYm94LXNoYWRvdzoxMHB4IDEwcHggNjBweCAzMHB4IHdoaXRlO1xyXG5gXHJcbmNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuIHBhZGRpbmctbGVmdDowO1xyXG59XHJcbmBcclxuLy9mbGV4LXNocmluayBrdXR1bGFyxLFuIGJlbGlybGVuZW4gYm95dXR0YW4gYcWfYWfEsSBpbm1lbWVzaW5pIHNhZ2zEsXlvclxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgIFxyXG4gICAgY29uc3Qge2JvdHRvbX09dXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbc2xpZGV2YWx1ZSxzZXRzbGlkZXZhbHVlXT11c2VTdGF0ZSgtMzApO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdCBbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKG15ZGF0YSk7XHJcbiAgICBjb25zdCBbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb25saXN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBGZWxzZWZlOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWV0YWZpemlrOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXpheTp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJpeW9sb2ppOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sICAgXHJcbiAgICAgICAgQml5b2xvczp7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wcmVxdWVzdGluZzpmYWxzZSxcclxuICAgICAgICB9LCAgIFxyXG4gICAgICAgIEJpeW9sb2pzOntcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3ByZXF1ZXN0aW5nOmZhbHNlLFxyXG4gICAgICAgIH0sICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZGtleSxzZXRzZWxlY3RlZGtleV09dXNlU3RhdGUoXCJVemF5XCIpO1xyXG4gICAgY29uc3QgW3dpbmRvd2xpc3Qsc2V0d2luZG93bGlzdF09dXNlU3RhdGUoe1xyXG4gICAgICAgIGxpc3Q6W10sXHJcbiAgICAgICAgYXR0cmlidXRlOlwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtzdG9wcmVxdWVzdGluZyxzZXRzdG9wcmVxXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICBcclxuICAgICAgICBpZighc2VsZWN0aW9ubGlzdFtzZWxlY3RlZGtleV0uc3RvcHJlcXVlc3RpbmcgJiYgYm90dG9tKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXIsIFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ubGlzdDpzZWxlY3Rpb25saXN0LFxyXG4gICAgICAgICAgICAgICAgc2V0c2VsZWN0aW9uOnNldHNlbGVjdGlvbmxpc3QsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTpzZWxlY3RlZGtleSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICBjb25zdCBSZXF1ZXN0YWdhaW49KGtleW5hbWUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1trZXluYW1lXS5zdG9wcmVxdWVzdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbmxpc3Qoc2VsZWN0aW9ubGlzdCk7XHJcblxyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0b3JkZXIoMTApO1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OmtleW5hbWUsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGNvbnN0IFNldHNsaWRldmFsdWU9KHZhbHVlKT0+e1xyXG5cclxuICAgICAgIGlmKHZhbHVlID09IFwiQmFja1wiICYmIHNsaWRldmFsdWUgPj0gMjApe1xyXG4gICAgICAgICBzZXRzbGlkZXZhbHVlKHNsaWRldmFsdWUtMjIwKVxyXG4gICAgICAgfSBcclxuICAgICAgIGVsc2UgaWYodmFsdWUgPT0gXCJmb3J3YXJkXCIgJiYgc2xpZGV2YWx1ZSA8IDYwMCl7XHJcbiAgICAgICAgc2V0c2xpZGV2YWx1ZShzbGlkZXZhbHVlKzIyMClcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coYm90dG9tKTtcclxuICAgICAgICBpZihib3R0b20pe1xyXG4gICAgICAgICAgICBzZXRvcmRlcihjb250ZW50ZGF0YS5sZW5ndGgrMTApOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbix1c2VyaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb24sXHJcbiAgICAgICAgICAgIFVzZXJJZG9mY29udGVudDp1c2VyaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGVyID0gKGtleW5hbWUpID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MzUwLGJlaGF2aW9yOlwiYXV0b1wifSlcclxuICAgICAgIFxyXG4gICAgICAgaWYoa2V5bmFtZSA9PSBzZWxlY3RlZGtleSl7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IE11dGF0ZWQgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBNdXRhdGVkW2tleV0uc2VsZWN0ZWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTXV0YXRlZFtrZXluYW1lXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICAgICAgUmVxdWVzdGFnYWluKGtleW5hbWUpO1xyXG4gICAgICAgICAgICBzZXRzZWxlY3Rpb25saXN0KE11dGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRzZWxlY3RlZGtleShrZXluYW1lKVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2hvd2ZvbGxvd2Vycz0oc3RhdGVsaXN0LHR5cGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgTXV0YXRlZHdpbmRvdz17Li4ud2luZG93bGlzdH07XHJcbiAgICAgICAgTXV0YXRlZHdpbmRvdy5saXN0ID0gc3RhdGVsaXN0O1xyXG4gICAgICAgIE11dGF0ZWR3aW5kb3cuYXR0cmlidXRlID0gdHlwZTtcclxuICAgICAgICBzZXR3aW5kb3dsaXN0KE11dGF0ZWR3aW5kb3cpO1xyXG5cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OmAke3dpbmRvd2xpc3QubGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzp3aW5kb3dsaXN0Lmxpc3QubGVuZ3RoID4gMCA/IFwiaGlkZGVuXCI6IFwidmlzaWJsZVwifX0+IFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjxGb3JtYXRRdW90ZSBzdHlsZT17e3RyYW5zZm9ybTpcInJvdGF0ZVkoMTgwZGVnKVwifX0+PC9Gb3JtYXRRdW90ZT4gQmlsIGtpIG5lemFrZXQgYmHFn2thc8SxbsSxIHJhaGF0c8SxeiBldG1lbWVrIGRlxJ9pbCwgYXPEsWwgYmHFn2thc8SxIGnDp2luIHJhaGF0c8SxemzEsWsgZHV5bWFrdMSxci48Rm9ybWF0UXVvdGU+PC9Gb3JtYXRRdW90ZT48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIHt3aW5kb3dsaXN0Lmxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U2hvd2ZvbGxvd2VyIHNldGxpc3Q9eygpPT5zZXR3aW5kb3dsaXN0KHByZXY9PntyZXR1cm4gey4uLnByZXYsbGlzdDpbXX19KX0gYXR0cmlidXRlPXt3aW5kb3dsaXN0LmF0dHJpYnV0ZX0gbGlzdD17d2luZG93bGlzdC5saXN0fT48L1Nob3dmb2xsb3dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZsZXhkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnREaXYgc3R5bGU9e3ttYXhXaWR0aDpcIjY1MHB4XCIsbWluSGVpZ2h0OlwiNjAwcHhcIixwYWRkaW5nVG9wOlwiMzBweFwiLHdpZHRoOlwiMTAwJVwiLHBhZGRpbmdSaWdodDpcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3J0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIG9uQ2xpY2s9eygpPT5TZXRzbGlkZXZhbHVlKFwiQmFja1wiKX0gbGVmdHZhbHVlPVwiMFwiIHJpZ2h0dmFsdWU9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19IGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgb25DbGljaz17KCk9PlNldHNsaWRldmFsdWUoXCJmb3J3YXJkXCIpfSBsZWZ0dmFsdWU9e1wiXCJ9IHJpZ2h0dmFsdWU9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJzaG9ydERpdiBzbGlkZXZhbHVlPXtzbGlkZXZhbHVlK1wicHhcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmxpc3QpLm1hcCgoaXRlbSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJveGVzIHNlbGVjdGVkPXtzZWxlY3Rpb25saXN0W2l0ZW1dLnNlbGVjdGVkfSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGVyKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25ib3hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5uZXJzaG9ydERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3J0RGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixtYXJnaW5Cb3R0b206XCIxMHB4XCIsbWFyZ2luVG9wOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17Y3JlYXRlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0LHR5cGUpPT5TaG93Zm9sbG93ZXJzKHN0YXRlb2ZsaXN0LHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXFpZCgpfS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvRmxleGRpdj5cclxuICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qPFNlY3Rpb25wYXJ0PlxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIixtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5Hw7ZuZGVyaSBUw7xyw7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9e3VzZXN0eWxlcy5yb290fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUYXJpaFwiPlRhcmloPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJpeW9sb2ppXCI+VGFyaWg8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxyXG4gICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbD5TxLFyYWxhbWEgw5Zsw6fDvHTDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJMaWtlXCI+QmXEn2VuaSBTYXnEsXPEsTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRhdGVcIj5Zw7xrbGVubWUgVGFyaWhpPC9NZW51SXRlbT4gXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJldHdlZXRcIj5SZXR3ZWV0IFNhecSxc8SxPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgPEJ1dHRvbiBlbmRJY29uPXs8U2VhcmhJY29uPjwvU2VhcmhJY29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+QXJhPC9CdXR0b24+XHJcbjwvZGl2PlxyXG48L1NlY3Rpb25wYXJ0PlxyXG4qLyIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FsbG93YWN0aW9uLHNldGFsbG93YWN0aW9uXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3RbZHJhZnRpZCxzZXRkcmFmdGlkXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBhbGxvd2FjdGlvbjphbGxvd2FjdGlvbixcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgZHJhZnRpZDpkcmFmdGlkLFxyXG4gICAgICAgICAgIHNldGRyYWZ0aWQsc2V0ZHJhZnRpZCxcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbGlja291dHNpZGUoKXtcclxuICAgIFxyXG4gICAgY29uc3QgcmVmPXVzZVJlZigpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsc2V0dmlzaWJsZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVjbGljaz0oZXZlbnQpPT57ICBcclxuXHJcblxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKXtcclxuICAgICAgICAgICAgc2V0dmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixoYW5kbGVjbGljayk7XHJcblxyXG4gICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixoYW5kbGVjbGljayk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aXNpYmxlLFxyXG4gICAgICBzZXR2aXNpYmxlLFxyXG4gICAgICByZWZcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNjcm9sbCgpe1xyXG5cclxuICAgIGNvbnN0IFtib3R0b20sc2V0Ym90dG9tXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLChlKT0+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkpID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7ICBcclxuICAgICAgICAgICAgICAgIHNldGJvdHRvbSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgIHJldHVybiAoKT0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDowLGJlaGF2aW9yOlwiYXV0b1wifSlcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBib3R0b206Ym90dG9tXHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlUmVkdWNlcix1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb250YWluZXJzL3BhZ2VzL0hvbWVcIjtcclxuaW1wb3J0IE1haW5sYXlvdXQgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTGF5b3V0L21haW5sYXlvdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBIb21lPSh7Y29udGVudH0pPT57XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwJmZhbWlseT1JQk0rUGxleCtTZXJpZjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxNYWluIG15ZGF0YT17Y29udGVudH0+PC9NYWluPlxyXG4gICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSG9tZS5sYXlvdXQ9KGNoaWxkcmVuKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbmxheW91dD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTWFpbmxheW91dD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSxyZXN9KXtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKHJlcS5oZWFkZXJzLmNvb2tpZSl7XHJcbiAgICAgICAgICAgIHZhciB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb250ZW50L2dldGhvbWUvMTAvRmVsc2VmZWAse2hlYWRlcnM6e0Nvb2tpZTpyZXEuaGVhZGVycy5jb29raWV9fSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIHtkYXRhfSA9YXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvY29udGVudC9nZXRob21lLzEwL0ZlbHNlZmVgKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246XCIvNTAwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgcHJvcHM6e2NvbnRlbnQ6ZGF0YS5kYXRhfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OntcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOlwiLzUwMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVkYXRlPShwcmV2aW91c2RhdGUpPT57XHJcblxyXG4gICAgY29uc3QgUHJldmRhdGU9bmV3IERhdGUocHJldmlvdXNkYXRlKTtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2U9TWF0aC5hYnMoRGF0ZS5ub3coKS1QcmV2ZGF0ZSk7XHJcbiAgICBjb25zdCBzZWNvbmQ9TWF0aC5jZWlsKGRpZmZlcmVuY2UvMTAwMCk7XHJcblxyXG4gICAgaWYoc2Vjb25kPDYwKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0aW1lOnNlY29uZCxleHByZXNzOlwiU2FuaXllXCJ9XHJcblxyXG4gICAgIH1cclxuICAgICBlbHNlIGlmKHNlY29uZD42MCAmJiBzZWNvbmQ8MzYwMCl7XHJcblxyXG4gICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvNjApLGV4cHJlc3M6XCJEYWtpa2FcIn1cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+MzYwMCAmJiBzZWNvbmQ8ODY0MDApe1xyXG5cclxuICAgICAgICByZXR1cm4ge3RpbWU6TWF0aC5jZWlsKHNlY29uZC8oNjAqNjApKSxleHByZXNzOlwiU2FhdFwifVxyXG4gICAgIH1cclxuICAgICBlbHNlIGlmKHNlY29uZD44NjQwMCAmJiBzZWNvbmQ8MjYyOTc0MzgzKXtcclxuXHJcbiAgICAgICByZXR1cm4ge3RpbWU6TWF0aC5jZWlsKHNlY29uZC8oNjAqNjAqMjQpKSxleHByZXNzOlwiR8O8blwifVxyXG5cclxuICAgICB9XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXFpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=