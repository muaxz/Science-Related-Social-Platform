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
/*! exports provided: loginreq, logout, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq, UpdateNotificationactive, UpdateProfile */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
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
        setcontentdata(Mydata);
      }

      return setspinner(false);
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
}; //user alert activated or not

const UpdateProfile = async ({
  userdata,
  typeofupdate,
  setuploading,
  setsuccesfulupload
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/user/updateprofile/${typeofupdate}`, userdata, {
      withCredentials: true
    });
    console.log("buradaxx");
    setuploading(false);
    setsuccesfulupload("SUCCESSFUL");
    setTimeout(() => {
      setsuccesfulupload("");
    }, 3000);
  } catch (error) {
    console.log(error);
    setsuccesfulupload("ERROR");
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

/***/ "./components/pages/Content/Commentsection/Commentpart.js":
/*!****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/Commentpart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _writecomment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writecomment */ "./components/pages/Content/Commentsection/writecomment.js");
/* harmony import */ var _belowcomment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./belowcomment */ "./components/pages/Content/Commentsection/belowcomment.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\Commentpart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var rendered = 0;

function Commentpart({
  Producecomment,
  list,
  spinner,
  handleanswer
}) {
  console.log(list);

  const mutated = _objectSpread({}, list);

  const numobj = {};

  for (let i = 0; i < list.length; i++) {
    numobj[i] = 0;
  }

  const Lengthcalcualter = (comment, index) => {
    if (comment.takeit.length > 0) {
      numobj[index] += comment.takeit.length;
      comment.takeit.forEach(element => {
        Lengthcalcualter(element, index);
      });
    } else return;
  };

  for (let i = 0; i < list.length; i++) {
    Lengthcalcualter(list[i], i);
  }

  console.log(numobj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: "20px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_writecomment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      spinner: spinner,
      Producecomment: Producecomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_belowcomment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Answerhandler: handleanswer,
      mylist: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Commentpart));

/***/ }),

/***/ "./components/pages/Content/Commentsection/belowcomment.js":
/*!*****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/belowcomment.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\belowcomment.js";


 //deneme

var lengthcounter = 0;

function Belowcomment({
  imagetoken,
  imagefilename,
  Answerhandler,
  mylist,
  postId,
  content,
  showwindow,
  like,
  retweet,
  comment,
  readlater,
  profileimage,
  title,
  titleimage,
  username,
  usersurname,
  subtitle,
  date,
  userid
}) {
  const Contentdiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iscomment: true,
    postId: postId //no need
    ,
    content: content,
    showwindow: stateoflist => setlist(stateoflist),
    like: [] //bu bir obje array
    ,
    retweet: [],
    comment: [],
    readlater: [],
    profileimage: "/black.jpg",
    title: title //no need
    ,
    titleimage: "yaprak.jpg",
    username: username,
    usersurname: usersurname,
    subtitle: subtitle //no need
    ,
    date: date,
    imagefilename: imagefilename,
    imagetoken: imagetoken,
    userid: userid,
    Answerhandler: Answerhandler,
    Childlength: mylist.length
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 6
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [date && Contentdiv, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "20px",
        marginLeft: "60px"
      },
      children: mylist.length > 0 ? mylist.map((item, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Belowcomment, {
          iscomment: true,
          postId: item.id //no need
          ,
          content: item.Message,
          showwindow: stateoflist => setlist(stateoflist),
          like: [] //bu bir obje array
          ,
          retweet: [],
          comment: [],
          readlater: [],
          //key numarası
          profileimage: "/black.jpg",
          title: item.title //no need
          ,
          titleimage: "yaprak.jpg",
          username: item.User.firstname,
          usersurname: item.User.lastname,
          userid: item.User.id,
          imagefilename: item.User.imageurl,
          imagetoken: item.User.imagetoken,
          subtitle: item.subtitle //no need
          ,
          date: item.createdAt,
          mylist: item.takeit,
          Answerhandler: Answerhandler
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Belowcomment));
/*

*/

/***/ }),

/***/ "./components/pages/Content/Commentsection/writecomment.js":
/*!*****************************************************************!*\
  !*** ./components/pages/Content/Commentsection/writecomment.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Commentsection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Content\\Commentsection\\writecomment.js";





const Writecomment = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "writecomment__Writecomment",
  componentId: "tkv0t0-0"
})(["width:100%;padding-bottom:30px;"]);
const Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "writecomment__Innerdiv",
  componentId: "tkv0t0-1"
})(["display:flex;align-items:center;justify-content:center;"]);
const Options = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "writecomment__Options",
  componentId: "tkv0t0-2"
})(["width:", ";padding-right:10px;"], ({
  flex
}) => flex);
const rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "writecomment__Spinner",
  componentId: "tkv0t0-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);
function Commentsection({
  Producecomment,
  spinner
}) {
  const {
    0: commentvalue,
    1: setcommentvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const Changevalue = e => {
    if (commentvalue.length >= 140) return false;
    setcommentvalue(e.target.value);
  };

  const Submitcomment = () => {
    if (commentvalue.length > 0) {
      Producecomment(commentvalue);
    }

    setcommentvalue("");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Writecomment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_2__["Porfileimage"], {
          width: "50px",
          height: "50px",
          profile: "/car.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        flex: "70%",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
          value: commentvalue,
          onChange: Changevalue,
          color: "secondary",
          style: {
            width: "100%"
          },
          label: "Bir Yorum Yaz...",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          color: "secondary",
          onClick: Submitcomment,
          variant: "contained",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AddComment"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 94
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 24
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
  imagefilename,
  imagetoken,
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
        children: userid == userdata.UserId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Edit"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Duzenle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Delete"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Yorumu Sil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 423,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 33
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 410,
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
              profile: `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${imagefilename}?alt=media&token=${imagetoken}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
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
              lineNumber: 455,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
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
              lineNumber: 456,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
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
            lineNumber: 477,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 476,
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
            lineNumber: 485,
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
              lineNumber: 488,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 483,
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
              lineNumber: 499,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["reshow"].array, "Reshow"),
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
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
              lineNumber: 504,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["Like"].array, "Like"),
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 503,
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
              lineNumber: 511,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 507,
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
              lineNumber: 520,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 495,
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
                  lineNumber: 531,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 531,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 462,
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
})(["position:fixed;top:60px;left:0;height:100vh;z-index:150;background-color:#11101d;box-shadow:3px 3px 3px rgba(0,0,0,0.2);transition:width 0.3s;width:", ";@media (max-width:940px){display:none;}"], ({
  active
}) => active ? "200px" : "60px");
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-1dtr19t-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;overflow:hidden;&:hover{overflow:visible;}"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-1dtr19t-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
const NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-1dtr19t-3"
})(["background-coloyor:yellow;margin-top:5px;width:96%;"]);
const Rightsidedesc = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Lefttoolbar__Rightsidedesc",
  componentId: "sc-1dtr19t-4"
})(["position:absolute;text-align:center;box-shadow:rgba(14,30,37,0.12) 0px 2px 4px 0px,rgba(14,30,37,0.32) 0px 2px 16px 0px;right:-160px;top:-10px;width:140px;opacity:0;transition-duration:0.2s;border-radius:9px;color:black;background-color:white;font-size:16px;padding:10px;pointer-events:none;"]);
const Spanfordesc = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Lefttoolbar__Spanfordesc",
  componentId: "sc-1dtr19t-5"
})(["transition-duration:", ";margin-left:10px;font-size:15px;color:white;opacity:", ""], ({
  leftbaractive
}) => leftbaractive ? "0.5s" : "0s", ({
  leftbaractive
}) => leftbaractive ? "1" : "0");
const Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-1dtr19t-6"
})(["position:relative;list-style-type:none;margin-top:10px;display:flex;width:100%;border-radius:5px;align-items:center;padding:7px;&:hover{background-color:rgba(255,255,255,0.2);cursor:pointer;}&:hover ", "{opacity:", ";top:5px;}"], Rightsidedesc, ({
  leftbaractive
}) => leftbaractive ? "0" : "1"); //const Icon=styled.i`
//color:#C70039;
//`

const Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-1dtr19t-7"
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
    var myli = document.querySelector(".getli");

    if (myli) {
      myli.addEventListener("mouseover", e => {
        e.stopPropagation();
      });
    }
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
              color: "white",
              rotate: myactive ? true : undefined
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
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
                lineNumber: 145,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 25
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
                  style: {
                    color: "white"
                  },
                  children: myactive ? userdata.Username : "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 92
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
                className: "getli",
                leftbaractive: myactive,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#F7FAFF",
                    color: "black"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfordesc, {
                  leftbaractive: myactive,
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rightsidedesc, {
                  leftbaractive: myactive,
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
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
                leftbaractive: myactive,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#F7FAFF",
                    color: "black"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfordesc, {
                  leftbaractive: myactive,
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rightsidedesc, {
                  leftbaractive: myactive,
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
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
                leftbaractive: myactive,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: myactive ? "31px" : "35px",
                    height: myactive ? "31px" : "35px",
                    lineheight: myactive ? "31px" : "35px",
                    backcolor: "#F7FAFF",
                    color: "black"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfordesc, {
                  leftbaractive: myactive,
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rightsidedesc, {
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, undefined) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
     font-family: 'Raleway', sans-serif;
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
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid #6c757d;background:transparent;width:16px;height:16px;border-radius:50%;"], rotate360);

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
    if (userdata.UserId) {
      socket.emit("create", userdata.UserId);
    }
  }, [userdata]);
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
      lineNumber: 142,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Update: Updatecount,
      Reloadfunc: Reloadnav,
      Count: countofdata,
      Data: navdata
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Lefttoolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      myactive: active,
      makeactive: setactive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
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
        lineNumber: 148,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pages/Content/Commentsection/Commentpart */ "./components/pages/Content/Commentsection/Commentpart.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Content.js";








const Exteriorcontent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__Exteriorcontent",
  componentId: "t38n1c-0"
})(["background-color:", ";max-width:950px;margin:50px auto;width:100%"], ({
  iscomment
}) => iscomment ? "" : "white");
const Commentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__Commentdiv",
  componentId: "t38n1c-1"
})(["margin:50px auto;max-width:700px;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__ImageDiv",
  componentId: "t38n1c-2"
})(["position:relative;width:100%;height:400px;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__ContentDiv",
  componentId: "t38n1c-3"
})(["margin-top:20px;padding:25px;"]);
const ProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__ProfileDiv",
  componentId: "t38n1c-4"
})(["box-sizing:border-box;padding-left:25px;padding-top:15px;padding-bottom:15px;display:flex;align-items:center;"]);
const Attribute = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__Attribute",
  componentId: "t38n1c-5"
})(["display:", ";position:absolute;top:35px;right:35px;border-radius:7px;background-color:white;"], ({
  active
}) => active ? "block" : "none");
const Attributeholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Content__Attributeholder",
  componentId: "t38n1c-6"
})(["display:flex;align-items:center;border-radius:7px;padding:5px;&:hover{background-color:#E2E3E3;cursor:pointer;}"]); //todo map array to create attribute list

function Content({
  Contentdata,
  comments,
  id
}) {
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
    bottom
  } = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    0: content,
    1: setcontent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Contentdata);
  const {
    0: commentlist,
    1: setcommentlist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(comments);
  const {
    0: numberofcomment,
    1: setnumbercom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: active,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: actives,
    1: seterrmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeproduce,
    1: setactiveproduce
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]); //const {id}=router.query;

  console.log(commentlist);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (numberofcomment > 0) {
      //ilk sayfa geldiginde isteği önlemk için
      setactiveproduce(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
        contentId: id,
        setcomment: setcommentlist,
        commentlist: commentlist,
        last: true,
        order: commentlist.length + 10,
        setactiveproduce: setactiveproduce,
        seterrmsg: seterrmsg
      });
    }
  }, [numberofcomment]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (bottom) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
        contentId: id,
        setcomment: setcommentlist,
        commentlist: commentlist,
        last: false,
        order: commentlist.length + 10,
        setactiveproduce: setactiveproduce,
        seterrmsg: seterrmsg
      });
    }
  }, [bottom]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //changeable
    setcontent(Contentdata);
    setcommentlist(comments);
  }, [id]);
  const Produce = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(message => {
    console.log(content.personal.id);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Producecommentreq"])({
      ContentId: id,
      UserId: userdata.UserId,
      Message: message,
      TakerId: content.personal.id,
      setnumbercom: setnumbercom,
      seterrmsg: seterrmsg
    });
  }, [userdata.UserId]);

  const Answerhandler = (Answer, UpperId) => {
    console.log("BURADAAA");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentanswerreq"])({
      UppercommentId: UpperId,
      UserId: userdata.UserId,
      Answer: Answer,
      ContentId: id
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      maxWidth: "950px",
      margin: "auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriorcontent, {
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
            lineNumber: 153,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
            lineNumber: 154,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attribute, {
            active: active,
            children: current.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attributeholder, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                className: item.icon,
                Iconconfig: {
                  width: "28px",
                  height: "28px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  marginLeft: "5px",
                  fontSize: "13px"
                },
                children: item.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 33
              }, this)]
            }, item.icon, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            profile: "/black.jpg",
            width: "40px",
            height: "40px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Duhan \xD6zt\xFCrk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "#5c6b73",
                fontSize: "15px"
              },
              children: "12/08/2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            style: {
              marginBottom: "10px",
              color: "#e63946"
            },
            children: " The state plans to pay around 20 percent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px"
            },
            children: "The structre of the culture in ottoman empire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "The state plans to pay around 20 percent of the project from its central budget. The rest will come from a $1.5 billion Chinese bank loan to Hungary. The documents say that all the work will be done by Chinese, not Hungarian, workers and all the material will be Chinese. \u201CThe Chinese are doing everything, while we\u2019re doing only one thing: paying,\u201D Karacsony said. Hungary\u2019s government follows the economic thinking known as \u201CEastern Opening.\u201D It favors increased diplomacy and trade with countries like China, Russia, Turkey and others in Central Asia. Although it joined the European Union in 2004, the Orban government often has disputes with other E.U. members. Peter Kreko is the director of the Budapest-based research company Political Capital. He believes the Fudan project is part of China\u2019s efforts to increase soft power. And he said the project could help China\u2019s spy operations. Hungary is a popular place for Russian and Chinese spies because the government shows, Kreko said, \u201Cthe lack of willingness of intelligence forces to push back malign foreign influence.\u201D Neither the Hungarian government\u2019s spokesperson nor the ministry leading the project answered requests for comments."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: commentlist.length + " Yorum"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Commentdiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handleanswer: Answerhandler,
        spinner: activeproduce,
        list: commentlist,
        Producecomment: Produce
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 9
  }, this);
}

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

/***/ "./pages/content/[id].js":
/*!*******************************!*\
  !*** ./pages/content/[id].js ***!
  \*******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Layout/mainlayout */ "./containers/Layout/mainlayout.js");
/* harmony import */ var _containers_pages_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/pages/Content */ "./containers/pages/Content.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\content\\[id].js";






function Content({
  mydata,
  comments,
  getquery,
  comments2
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Contentdata: mydata,
      comments: comments,
      id: getquery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, this)]
  }, void 0, true);
}

Content.layout = children => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps({
  query
}) {
  try {
    const recieve = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.all([axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`content/${query.id}`), axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`comment/${query.id}/false/10`)]); //ilk 10 comment için istek atılıcak
    //eğer burası null ise 404 olarak hata döndür redirect to 404.js

    if (recieve[0].data && recieve[0].data.error || recieve[1].data && recieve[1].data.error) {
      return {
        redirect: {
          destination: "/500"
        }
      };
    }

    ; //404.js page not found error

    if (recieve[0].data.data == null) {
      return {
        redirect: {
          destination: "/404.js"
        }
      };
    }

    ;
    return {
      props: {
        mydata: recieve[0].data.data,
        comments: recieve[1].data.data,
        getquery: query.id,
        comments2: recieve[1].data.trial
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRlbnQvQ29tbWVudHNlY3Rpb24vQ29tbWVudHBhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL2JlbG93Y29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRlbnQvQ29tbWVudHNlY3Rpb24vd3JpdGVjb21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL0xlZnR0b29sYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb250b29scy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0L21haW5sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvQ2xpa2NvdXRpc2RlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGVudC8uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHNmdW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmlxaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtY29va2llXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsImxvZ291dCIsImdldCIsImxvZ2dlZCIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJ0eXBlb2ZzdWJtaXQiLCJwcm9jZXNzdHlwZSIsIlByb2R1Y2Vjb21tZW50cmVxIiwiTWVzc2FnZSIsIlRha2VySWQiLCJzZXRudW1iZXJjb20iLCJVc2VySWQiLCJDb250ZW50SWQiLCJwcmV2IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldHN0b3ByZXEiLCJjYXRlZ29yeSIsInBhaWduYXRpb24iLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9uIiwibGVuZ3RoIiwic2VsZWN0aW9ucyIsInN0b3ByZXF1ZXN0aW5nIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwiUm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50Iiwib3duZXJwb3N0IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJQcmV2ZW50IiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJOb3RpZmljYXRpb25yZXEiLCJzZXRuYXZkYXRhIiwibmF2ZGF0YSIsImxhc3Ryb3ciLCJNeWN1cnJlbnRkYXRhIiwiTmV3ZGF0YSIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwic2V0Y291bnRkYXRhIiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJpbnB1dHZhbHVlIiwic2V0dXNlcnMiLCJzZXRub3RoaW5nZm91bmQiLCJEZWxldGVQb3N0Iiwic3VjY2VzcyIsIkNvbW1lbnRhbnN3ZXJyZXEiLCJVcHBlcmNvbW1lbnRJZCIsIkFuc3dlciIsIkNvbW1lbnRJZCIsIlVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSIsImN1cnJlbnRhY3RpdmUiLCJzdGF0ZSIsIlVwZGF0ZVByb2ZpbGUiLCJ0eXBlb2Z1cGRhdGUiLCJzZXR1cGxvYWRpbmciLCJzZXRzdWNjZXNmdWx1cGxvYWQiLCJJY29uc3BhbiIsInN0eWxlZCIsInNwYW4iLCJ3aWR0aCIsIm1pZGRsZSIsImhlaWdodCIsImNvbG9yIiwiYmFja2NvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJsaW5laGVpZ2h0IiwiaG92ZXJjb2xvciIsImhvdmVyYmFjayIsInJvdGF0ZSIsInppbmRleCIsIlN1YnRleHQiLCJwIiwiSWNvbiIsImNsYXNzTmFtZSIsIkljb25jb25maWciLCJhY3RpdmVmdW5jIiwicmVuZGVyZWQiLCJDb21tZW50cGFydCIsIlByb2R1Y2Vjb21tZW50IiwibGlzdCIsInNwaW5uZXIiLCJoYW5kbGVhbnN3ZXIiLCJtdXRhdGVkIiwibnVtb2JqIiwiaSIsIkxlbmd0aGNhbGN1YWx0ZXIiLCJjb21tZW50IiwiaW5kZXgiLCJ0YWtlaXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInBhZGRpbmciLCJSZWFjdCIsIm1lbW8iLCJsZW5ndGhjb3VudGVyIiwiQmVsb3djb21tZW50IiwiaW1hZ2V0b2tlbiIsImltYWdlZmlsZW5hbWUiLCJBbnN3ZXJoYW5kbGVyIiwibXlsaXN0IiwicG9zdElkIiwiY29udGVudCIsInNob3d3aW5kb3ciLCJsaWtlIiwicmV0d2VldCIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsInRpdGxlIiwidGl0bGVpbWFnZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJzdWJ0aXRsZSIsImRhdGUiLCJ1c2VyaWQiLCJDb250ZW50ZGl2Iiwic3RhdGVvZmxpc3QiLCJzZXRsaXN0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcCIsIml0ZW0iLCJVc2VyIiwiY3JlYXRlZEF0IiwiV3JpdGVjb21tZW50IiwiZGl2IiwiSW5uZXJkaXYiLCJPcHRpb25zIiwiZmxleCIsInJvdGF0ZTM2MCIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJDb21tZW50c2VjdGlvbiIsImNvbW1lbnR2YWx1ZSIsInNldGNvbW1lbnR2YWx1ZSIsInVzZVN0YXRlIiwiQ2hhbmdldmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJTdWJtaXRjb21tZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiTGlrZWFuaW1hdG9uIiwiT3V0c2lkZWRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJTZWNvbmRQYXJ0IiwiZm9ydXNlciIsIlRvb2xiYXIiLCJJbWciLCJpbWciLCJTcGFuZm9yIiwixLBjb25ob2xkZXIiLCJob3dlcmNvbG9yIiwiUHJvZmlsZWRpdiIsIkljb25zIiwiaXNtYXJrZWQiLCJhbmltYXRpb24iLCJPcHRpb253aW5kb3ciLCJPcHRpb25ob2xkZXIiLCJEcmFmdGhvbGRlciIsIklucHV0aG9sZGVyIiwiUHJvZmlsZWltYWdlaG9sZGVyIiwiQ29udGVudGNhcmQiLCJDaGlsZGxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwiZWxlbWVudHMiLCJzZXRlbGVtZW50cyIsIkxpa2UiLCJudW1iZXIiLCJhcnJheSIsInJlc2hvdyIsIlJlYWRsYXRlciIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwidXNlQ2xpY2tvdXRzaWRlIiwiY29tbWVudGFuc3dlciIsInNldGNvbW1lbnRhbnN3ZXIiLCJhbnN3ZXJ2YWx1ZSIsInNldGFuc3dlcnZhbHVlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlUm91dGVyIiwidGV4dGZvcm9waXRvbiIsInVzZUVmZmVjdCIsImN1cnJlbnRlbGVtZW50cyIsInVzZXIiLCJJbmRleG9mY3VycmVudHVzZXIiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiQ291bnRwbHVzIiwiZWxlbWVudHR5cGUiLCJNYWtlYWNvbW1lbnQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhbGlnbkl0ZW1zIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJtYXJnaW5SaWdodCIsImNhbGN1bGF0ZWRhdGUiLCJ0aW1lIiwiZXhwcmVzcyIsIndvcmRCcmVhayIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsInN0eWxlIiwiZW5kQWRvcm5tZW50IiwiRXh0ZXJpb3JEaXYiLCJhY3RpdmUiLCJJbm5lckRpdiIsIkltYWdlRGl2IiwiTmF2aWdhdGlvbkRpdiIsIlJpZ2h0c2lkZWRlc2MiLCJTcGFuZm9yZGVzYyIsImxlZnRiYXJhY3RpdmUiLCJMaSIsImxpIiwiQ2xvc2VvcGVuIiwiTGVmdHRvb2xiYXIiLCJtYWtlYWN0aXZlIiwibXlhY3RpdmUiLCJmaXJzdGxpc3QiLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsInBhdGgiLCJzZWNvbmRsaXN0IiwidGhpcmRsaXN0IiwibXlsaSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmRlZmluZWQiLCJwYWRkaW5nQm90dG9tIiwiZmxleERpcmVjdGlvbiIsIk5hdmJhcmV4dCIsIklubmVyTmF2YmFyIiwiSWNvbmhvbGRlciIsImNsaWNrZWQiLCJJbnB1dEhvbGRlciIsImZsZXgyIiwiSW5wdXQiLCJpbnB1dCIsIkljb25zZWN1cmUiLCJmb3Jub3RpZnkiLCJJbm5lcm9wdGlvbiIsIlNlYXJjaGRpdiIsIlNlYXJjaGVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsIkRhdGEiLCJDb3VudCIsIlJlbG9hZGZ1bmMiLCJVcGRhdGUiLCJ1c2VDbGlja291dHNpZSIsInJlZjIiLCJ2aXNpYmxlMiIsInNldHZpc2libGUyIiwic2V0aW5wdXR2YWx1ZSIsInVzZXJzZm9yc2VhcmNoIiwic2V0dXNlcnNmb3JzZWFyY2giLCJzZWFyY2hhY3RpdmUiLCJzZXRzZWFyY2hhY3RpdmUiLCJNeXJlZiIsIm9yZGVybnVtYmVyIiwic2V0b3JkZXJudW1iZXIiLCJJY29udW1iZXIiLCJzZXTEsWNvbm51bWJlciIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0Iiwib25vZmYiLCJzaG9ydCIsIk9uY2VyZXF1ZXN0ZWQiLCJMb2dvdXQiLCJLZXl1cGZ1bmN0aW9uIiwiU2Nyb2xsdG9Cb3R0b20iLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJDaGFuZ2VoYW5kbGVyIiwiSWNvbnNlbGVjdCIsImljb25udW1iZXIiLCJteW9iamVjdCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJJY29uY2xpY2siLCJzaG9ydG5hbWUiLCJzZWFyY2h0eXBlIiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwibGluZUhlaWdodCIsIk9wdGlvbjFkaXYiLCJjaGVjayIsIk5hdmlnYXRpb250b29scyIsIm9wdG51bWJlciIsIm9wdG5hbWUiLCJOYXZkYXRhIiwidG9nZ2xlIiwic2V0dG9nbGUiLCJNeW9wdGlvbiIsIkF0dHJpdWJ0ZWFycmF5IiwiaWRuYW1lIiwibGgiLCJocmVmIiwibXlpdGVtb2JqIiwiRmFjZWNoZWNrIiwiQnV0dG9uIiwiYnV0dG9uIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJwcm9maWxlIiwiQmxhY2siLCJha3RpZiIsIkJpZ2RpdiIsIkdvdXBpY29uIiwidXAiLCJzb2NrZXQiLCJpbyIsIk1haW5sYXlvdXQiLCJjaGlsZHJlbiIsImdvdXAiLCJzZXRnb3VwIiwiY291bnRvZmRhdGEiLCJsYXN0cmVjb3JkIiwic2V0bGFzdHJlY29yZCIsImxhc3RyZWNvcmRhY3RpdmUiLCJzZXRsYXN0cmVjb3JkYWN0aXZlIiwidXNlcm91dGVyIiwiZW1pdCIsIndpbmRvdyIsInNjcm9sbFkiLCJsaXN0ZW5lciIsIm9uIiwiUmVsb2FkbmF2IiwiVXBkYXRlY291bnQiLCJzY3JvbGxUbyIsIkV4dGVyaW9yY29udGVudCIsIkNvbW1lbnRkaXYiLCJDb250ZW50RGl2IiwiUHJvZmlsZURpdiIsIkF0dHJpYnV0ZSIsIkF0dHJpYnV0ZWhvbGRlciIsIkNvbnRlbnQiLCJDb250ZW50ZGF0YSIsImNvbW1lbnRzIiwidXNlU2Nyb2xsIiwic2V0Y29tbWVudGxpc3QiLCJudW1iZXJvZmNvbW1lbnQiLCJhY3RpdmVzIiwiYWN0aXZlcHJvZHVjZSIsIlByb2R1Y2UiLCJ1c2VDYWxsYmFjayIsIm1lc3NhZ2UiLCJwZXJzb25hbCIsIlVwcGVySWQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsIm9iamVjdEZpdCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImFsbG93YWN0aW9uIiwiZHJhZnRpZCIsInNldGRyYWZ0aWQiLCJnZXRJdGVtIiwiaGFuZGxlY2xpY2siLCJldmVudCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldGJvdHRvbSIsImlubmVySGVpZ2h0IiwiYm9keSIsImJlaGF2aW9yIiwicHJlZmV0Y2hlZCIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvZmYiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJnZXRxdWVyeSIsImNvbW1lbnRzMiIsImxheW91dCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlY2lldmUiLCJheGlvdXMiLCJyZWRpcmVjdCIsInRyaWFsIiwicHJldmlvdXNkYXRlIiwiUHJldmRhdGUiLCJkaWZmZXJlbmNlIiwiYWJzIiwibm93Iiwic2Vjb25kIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFDLENBQUM7QUFBQ0MsTUFB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LEdBSEksTUFJQSxJQUFHcWdCLE1BQU0sR0FBQyxJQUFQLElBQWVBLE1BQU0sR0FBQyxLQUF6QixFQUErQjtBQUVqQyxXQUFPO0FBQUN0Z0IsVUFBSSxFQUFDcU8sSUFBSSxDQUFDa1MsSUFBTCxDQUFVRCxNQUFNLElBQUUsS0FBRyxFQUFMLENBQWhCLENBQU47QUFBZ0NyZ0IsYUFBTyxFQUFDO0FBQXhDLEtBQVA7QUFDRixHQUhJLE1BSUEsSUFBR3FnQixNQUFNLEdBQUMsS0FBUCxJQUFnQkEsTUFBTSxHQUFDLFNBQTFCLEVBQW9DO0FBRXZDLFdBQU87QUFBQ3RnQixVQUFJLEVBQUNxTyxJQUFJLENBQUNrUyxJQUFMLENBQVVELE1BQU0sSUFBRSxLQUFHLEVBQUgsR0FBTSxFQUFSLENBQWhCLENBQU47QUFBbUNyZ0IsYUFBTyxFQUFDO0FBQTNDLEtBQVA7QUFFRDtBQUVMLENBekJNLEM7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvY29udGVudC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jb250ZW50L1tpZF0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG4gICAgXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jKHtzZXRzcGlubmVyLHNldHVzZXJkYXRhLHNldGxvZ2dlZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoXCIvbG9nb3V0XCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKVxyXG4gICAgICBzZXR1c2VyZGF0YSh7fSlcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhsb2dnZWQpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcix0eXBlb2ZzdWJtaXR9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIsey4uLmNvbnRlbnRkYXRhLHByb2Nlc3N0eXBlOnR5cGVvZnN1Ym1pdH0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiBcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICByZXR1cm4gc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICBcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgICBpZihsYXN0KXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChNeWRhdGEuY29uY2F0KEN1cnJlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChDdXJyZW50LmNvbmNhdChNeWRhdGEpKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkLHNldGFsbG93YWN0aW9ufSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLlJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpOyAgXHJcbiAgICAgIHNldGFsbG93YWN0aW9uKHRydWUpOyAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKCFkYXRhLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKHtVc2VySWR9KT0+e1xyXG5cclxuICAgdHJ5IHtcclxuICAgIFxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9ub3RpZmljYXRpb24vdXBkYXRlLyR7VXNlcklkfWApO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0c3Bpbm5lcixzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PSBhd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGVjb250ZW50LyR7VXNlcklkfS8ke293bmVycG9zdH0vJHtjYXRlZ29yeX0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoWy4uLmRhdGEuZGF0YV0pXHJcbiAgICAgICBzZXRzcGlubmVyKGZhbHNlKVxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsUHJldmVudCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhLGxhc3Ryb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn0vJHtsYXN0cm93fWApO1xyXG4gICAgY29uc3QgTXljdXJyZW50ZGF0YT1bLi4ubmF2ZGF0YV07XHJcbiAgICBjb25zdCBOZXdkYXRhPWRhdGEubXlkYXRhO1xyXG4gICAgXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxzZXRub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgc2V0YWN0aXZlKFwiTm90aGluZ1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0YWN0aXZlKFwiXCIpO1xyXG4gICAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gICAgfSAgXHJcblxyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQb3N0ID0gYXN5bmMoe1Bvc3RJZCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwidXNlci9kZWxldGVwb3N0XCIse1xyXG4gICAgICBQb3N0SWQ6UG9zdElkXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRhbnN3ZXJyZXEgPSBhc3luYyh7VXBwZXJjb21tZW50SWQsQW5zd2VyLFVzZXJJZCxzZXRlcnJtc2csc2V0d2luZG93LENvbnRlbnRJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufS8vdXNlciBhbGVydCBhY3RpdmF0ZWQgb3Igbm90XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUHJvZmlsZSA9IGFzeW5jICh7dXNlcmRhdGEsdHlwZW9mdXBkYXRlLHNldHVwbG9hZGluZyxzZXRzdWNjZXNmdWx1cGxvYWR9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvdXNlci91cGRhdGVwcm9maWxlLyR7dHlwZW9mdXBkYXRlfWAsdXNlcmRhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRheHhcIilcclxuICAgICAgICAgIHNldHVwbG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlNVQ0NFU1NGVUxcIilcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJcIilcclxuICAgICAgICAgIH0sMzAwMCk7XHJcblxyXG4gICAgICAgICAgXHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJFUlJPUlwiKVxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEljb25zcGFuPXN0eWxlZC5zcGFuKCh7d2lkdGgsbWlkZGxlLGhlaWdodCxjb2xvcixiYWNrY29sb3IscG9zaXRpb24sdG9wLGxlZnQscmlnaHQsYm90dG9tLGxpbmVoZWlnaHQsaG92ZXJjb2xvcixob3ZlcmJhY2sscm90YXRlLHppbmRleH0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuZGlzcGxheTpibG9jaztcclxubGluZS1oZWlnaHQ6JHtsaW5laGVpZ2h0fTtcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6JHtjb2xvcn07XHJcbnotaW5kZXg6JHt6aW5kZXh9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNmb3JtOnJvdGF0ZSgke3JvdGF0ZSA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKCR7bWlkZGxlID8gXCItNTAlXCIgOiBcIjBcIn0sJHttaWRkbGUgPyBcIi01MCVcIiA6IFwiMFwifSk7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuIGNvbG9yOiR7aG92ZXJjb2xvcn07XHJcbn1cclxuYClcclxuXHJcbmNvbnN0IFN1YnRleHQgPSBzdHlsZWQucGBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oe2NsYXNzTmFtZSxJY29uY29uZmlnLGFjdGl2ZWZ1bmN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+PC9pPlxyXG4gICAgICAgICAgICA8L0ljb25zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXcml0ZWNvbW1lbnQgZnJvbSBcIi4vd3JpdGVjb21tZW50XCI7XHJcbmltcG9ydCBCZWxvd2NvbW1lbnQgZnJvbSBcIi4vYmVsb3djb21tZW50XCI7XHJcblxyXG52YXIgcmVuZGVyZWQgPSAwXHJcblxyXG5mdW5jdGlvbiBDb21tZW50cGFydCh7UHJvZHVjZWNvbW1lbnQsbGlzdCxzcGlubmVyLGhhbmRsZWFuc3dlcn0pe1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgY29uc3QgbXV0YXRlZCA9IHsuLi5saXN0fVxyXG4gICAgXHJcbiAgICBjb25zdCBudW1vYmogPSB7fVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG51bW9ialtpXSA9IDBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBMZW5ndGhjYWxjdWFsdGVyID0gKGNvbW1lbnQsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29tbWVudC50YWtlaXQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBudW1vYmpbaW5kZXhdICs9IGNvbW1lbnQudGFrZWl0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgY29tbWVudC50YWtlaXQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMZW5ndGhjYWxjdWFsdGVyKGVsZW1lbnQsaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIExlbmd0aGNhbGN1YWx0ZXIobGlzdFtpXSxpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKG51bW9iailcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgIDxXcml0ZWNvbW1lbnQgc3Bpbm5lcj17c3Bpbm5lcn0gUHJvZHVjZWNvbW1lbnQ9e1Byb2R1Y2Vjb21tZW50fT48L1dyaXRlY29tbWVudD5cclxuICAgICAgICAgICAgPEJlbG93Y29tbWVudCBBbnN3ZXJoYW5kbGVyPXtoYW5kbGVhbnN3ZXJ9IG15bGlzdD17bGlzdH0+PC9CZWxvd2NvbW1lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29tbWVudHBhcnQpXHJcbiIsImltcG9ydCBSZWFjdCx7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCJcclxuLy9kZW5lbWVcclxuXHJcblxyXG52YXIgbGVuZ3RoY291bnRlciA9IDBcclxuZnVuY3Rpb24gQmVsb3djb21tZW50KHtpbWFnZXRva2VuLGltYWdlZmlsZW5hbWUsQW5zd2VyaGFuZGxlcixteWxpc3QscG9zdElkLGNvbnRlbnQsc2hvd3dpbmRvdyxsaWtlLHJldHdlZXQsY29tbWVudCxyZWFkbGF0ZXIscHJvZmlsZWltYWdlLHRpdGxlLHRpdGxlaW1hZ2UsdXNlcm5hbWUsdXNlcnN1cm5hbWUsc3VidGl0bGUsZGF0ZSx1c2VyaWR9KXtcclxuICAgIFxyXG4gICAgY29uc3QgQ29udGVudGRpdiA9XHJcbiAgICAoPENvbnRlbnRjYXJkIFxyXG4gICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgcG9zdElkPXtwb3N0SWR9Ly9ubyBuZWVkXHJcbiAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICBsaWtlPXtbXX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICByZXR3ZWV0PXtbXX1cclxuICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgcmVhZGxhdGVyPXtbXX1cclxuICAgIHByb2ZpbGVpbWFnZT17XCIvYmxhY2suanBnXCJ9XHJcbiAgICB0aXRsZT17dGl0bGV9Ly9ubyBuZWVkXHJcbiAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgIHVzZXJzdXJuYW1lPXt1c2Vyc3VybmFtZX1cclxuICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX0vL25vIG5lZWRcclxuICAgIGRhdGU9e2RhdGV9XHJcbiAgICBpbWFnZWZpbGVuYW1lPXtpbWFnZWZpbGVuYW1lfVxyXG4gICAgaW1hZ2V0b2tlbj17aW1hZ2V0b2tlbn1cclxuICAgIHVzZXJpZD17dXNlcmlkfVxyXG4gICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgIENoaWxkbGVuZ3RoPXtteWxpc3QubGVuZ3RofVxyXG4gICAgPlxyXG4gICAgPC9Db250ZW50Y2FyZD4pXHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBkYXRlICYmIENvbnRlbnRkaXZcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbXlsaXN0Lmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgbXlsaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEJlbG93Y29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dW5pcWlkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17aXRlbS5pZH0vL25vIG5lZWRcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiL2JsYWNrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wieWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLlVzZXIuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLlVzZXIubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLlVzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VmaWxlbmFtZT17aXRlbS5Vc2VyLmltYWdldXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdldG9rZW49e2l0ZW0uVXNlci5pbWFnZXRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfS8vbm8gbmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG15bGlzdD17aXRlbS50YWtlaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgQW5zd2VyaGFuZGxlcj17QW5zd2VyaGFuZGxlcn1cclxuICAgICAgICAgICAgICAgID48L0JlbG93Y29tbWVudD4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbG93Y29tbWVudClcclxuXHJcblxyXG4vKlxyXG5cclxuKi8iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtBZGRDb21tZW50fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IFdyaXRlY29tbWVudD1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbTozMHB4O1xyXG5gXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuYFxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbndpZHRoOiR7KHtmbGV4fSk9PmZsZXh9O1xyXG5wYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbmBcclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzZWN0aW9uKHtQcm9kdWNlY29tbWVudCxzcGlubmVyfSl7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnR2YWx1ZSxzZXRjb21tZW50dmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IENoYW5nZXZhbHVlPShlKT0+e1xyXG5cclxuICAgICAgICBpZihjb21tZW50dmFsdWUubGVuZ3RoID49IDE0MClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnR2YWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJtaXRjb21tZW50PSgpPT57XHJcblxyXG4gICAgICBpZihjb21tZW50dmFsdWUubGVuZ3RoID4gMCl7XHJcblxyXG4gICAgICAgIFByb2R1Y2Vjb21tZW50KGNvbW1lbnR2YWx1ZSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRjb21tZW50dmFsdWUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JpdGVjb21tZW50PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgIDxPcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBwcm9maWxlPVwiL2Nhci5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb25zIGZsZXg9e1wiNzAlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtDaGFuZ2V2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCaXIgWW9ydW0gWWF6Li4uXCIgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPiBcclxuICAgICAgICAgICAgICAgIDwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxPcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtTdWJtaXRjb21tZW50fSB2YXJpYW50PVwiY29udGFpbmVkXCI+PEFkZENvbW1lbnQ+PC9BZGRDb21tZW50PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb25zPiAgXHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcGlubmVyID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1dyaXRlY29tbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiXHJcbmltcG9ydCB7QWRkQ29tbWVudCxmZWVkLEZlZWRiYWNrLFNlbmQsRGVsZXRlLCBFZGl0fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tIFwiLi4vLi4vaG9va3MvQ2xpa2NvdXRpc2RlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCAsIEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MTZweH1cclxuMjUlIHtmb250LXNpemU6MThweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNjUlIHtmb250LXNpemU6MTd9XHJcbjcwJSB7Zm9udC1zaXplOjEwcHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5oZWlnaHQ6JHsoe2RyYWZ0fSk9PiBkcmFmdCA/IFwiMzAwcHhcIiA6IFwiXCJ9O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5cclxuYFxyXG5cclxuLy9UaGlzIGlzIGZvciBkcmFmdCBwYWdlXHJcbmNvbnN0IFNvZnRjb3ZlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDozMDA7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5vcGFjaXR5OjAuNjtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAkeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiMTVweFwiOiBcIjBweFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxuZmxleDoxO1xyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJibG9ja1wiOlwiZmxleFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5gXHJcblxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7YW5pbWF0aW9ufSk9PmFuaW1hdGlvbiA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDozNTBweDtcclxucGFkZGluZzo1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MTBweDsgXHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6NDgwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBEcmFmdGhvbGRlciA9IHN0eWxlZC5zcGFuYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcbi8vY29tbWVudC1hbnN3ZXIgc2VjdGlvblxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxuYFxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTtcclxuJjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGh9O1xyXG4gICAgaGVpZ2h0OiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjE1MH1weDtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn07XHJcbiY6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgbGVmdDotNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjUwfXB4O1xyXG4gICAgei1pbmRleDotNTtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn1cclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5mdW5jdGlvbiBDb250ZW50Y2FyZCh7aW1hZ2VmaWxlbmFtZSxpbWFnZXRva2VuLENoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbY29tbWVudGFuc3dlcixzZXRjb21tZW50YW5zd2VyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5zd2VydmFsdWUsc2V0YW5zd2VydmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBsaWtlLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXR3ZWV0LmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZWFkbGF0ZXIuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiUmVhZGxhdGVyXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICAvL2xpa2UgLCBzaWduIGFuZCBzYXZlIG9wZXJhdGlvbnNcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2UgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6dXNlcmRhdGEuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6dXNlcmRhdGEuVXNlcnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJDcmVhdGVcIix1c2VyaWQpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT10cnVlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlciA9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNYWtlYWNvbW1lbnQ9KCk9PntcclxuICAgICAgICBBbnN3ZXJoYW5kbGVyKGFuc3dlcnZhbHVlLHBvc3RJZClcclxuICAgICAgICBzZXRhbnN3ZXJ2YWx1ZShcIlwiKVxyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiAgZHJhZnQ9e2RyYWZ0fSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgLy9kcmFmdCBjb3ZlclxyXG4gICAgICAgICAgICAgICBkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2Z0Y292ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEtbGdcIiBJY29uY29uZmlnPXt7emluZGV4OlwiNDAwXCIsaG92ZXJiYWNrOlwid2hpdGVcIixob3ZlcmNvbG9yOlwiI2Q5MDQyOVwiLGJhY2tjb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI2MHB4XCIsaGVpZ2h0OlwiNjBweFwiLGxpbmVoZWlnaHQ6XCI2MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5DdWx0dXJlIG9mIHRoZSBPdHRvbWFuIEVtcGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vb3B0aW9uIHNlY3Rpb25cclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgc3R5bGU9e3tkaXNwbGF5OnVzZXJkYXRhLlVzZXJJZCA/IFwiZmxleFwiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICg8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZCA9PSB1c2VyZGF0YS5Vc2VySWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQ+PC9FZGl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EdXplbmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlPjwvRGVsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3J1bXUgU2lsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2s+PC9GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJpbGRpcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWRyYWZ0ICYmXHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlaW1hZ2Vob2xkZXIgbGVuZ3RoPXtDaGlsZGxlbmd0aH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gaGVpZ2h0PXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBwcm9maWxlPXtgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9teW5leHQtYTA3NGEuYXBwc3BvdC5jb20vby8ke2ltYWdlZmlsZW5hbWV9P2FsdD1tZWRpYSZ0b2tlbj0ke2ltYWdldG9rZW59YH0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50IHx8IGRyYWZ0ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0+e2NvbnRlbnR9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRlbnQvW2lkXVwiIGFzPXtgL2NvbnRlbnQvJHtwb3N0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc2NvbW1lbnQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJncmVlblwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMCwgMjU1LCAwLCAwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMucmVzaG93LmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLnJlc2hvdy5hbmltYXRpb259IGNvbG9yPXtcImdyZWVuXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmVzaG93XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LFwiUmVzaG93XCIpfT57ZWxlbWVudHMucmVzaG93Lm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwicmVkXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjI1NSwgMCwgMCwwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMuTGlrZS5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5MaWtlLmFuaW1hdGlvbn0gY29sb3I9e1wiI0M3MjEyMVwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcIkxpa2VcIil9IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciAgb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LFwiTGlrZVwiKX0gPntlbGVtZW50cy5MaWtlLm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRDb21tZW50IG9uQ2xpY2s9eygpPT5zZXRjb21tZW50YW5zd2VyKCFjb21tZW50YW5zd2VyKX0gIHN0eWxlPXt7Y29sb3I6XCJncmV5XCIsY3Vyc29yOlwicG9pbnRlclwifX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMuUmVhZGxhdGVyLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLlJlYWRsYXRlci5hbmltYXRpb259IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJSZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudGFuc3dlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VydmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0YW5zd2VydmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6e2N1cnNvcjpcInBvaW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IG9uQ2xpY2s9e01ha2VhY29tbWVudH0gc3R5bGU9e3tjb2xvcjphbnN3ZXJ2YWx1ZS5sZW5ndGggPiAwID8gIFwiI2U2Mzk0NlwiOiBcImdyZXlcIn19IHBvc2l0aW9uPVwiZW5kXCI+PFNlbmQ+PC9TZW5kPjwvSW5wdXRBZG9ybm1lbnQ+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3J1bWEgQ2V2YXAgVmVyLi4uXCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvU2Vjb25kUGFydD5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudGNhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDo2MHB4O1xyXG5sZWZ0OjA7XHJcbmhlaWdodDoxMDB2aDtcclxuei1pbmRleDoxNTA7XHJcbmJhY2tncm91bmQtY29sb3I6IzExMTAxZDtcclxuYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG50cmFuc2l0aW9uOndpZHRoIDAuM3M7XHJcbndpZHRoOiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCIyMDBweFwiIDogXCI2MHB4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbm92ZXJmbG93OmhpZGRlbjtcclxuJjpob3ZlciB7XHJcbiAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25EaXY9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xveW9yOnllbGxvdztcclxubWFyZ2luLXRvcDo1cHg7XHJcbndpZHRoOjk2JTtcclxuYFxyXG5cclxuY29uc3QgUmlnaHRzaWRlZGVzYyA9IHN0eWxlZC5zcGFuYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XHJcbnJpZ2h0Oi0xNjBweDtcclxudG9wOi0xMHB4O1xyXG53aWR0aDoxNDBweDtcclxub3BhY2l0eTowO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMnM7XHJcbmJvcmRlci1yYWRpdXM6OXB4O1xyXG5jb2xvcjpibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZm9udC1zaXplOjE2cHg7XHJcbnBhZGRpbmc6MTBweDtcclxucG9pbnRlci1ldmVudHM6bm9uZTtcclxuYFxyXG5jb25zdCBTcGFuZm9yZGVzYyA9IHN0eWxlZC5zcGFuYFxyXG50cmFuc2l0aW9uLWR1cmF0aW9uOiR7KHtsZWZ0YmFyYWN0aXZlfSk9PmxlZnRiYXJhY3RpdmUgPyBcIjAuNXNcIiA6IFwiMHNcIn07XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxub3BhY2l0eTokeyh7bGVmdGJhcmFjdGl2ZX0pPT5sZWZ0YmFyYWN0aXZlID8gXCIxXCIgOiBcIjBcIn1cclxuYFxyXG5cclxuY29uc3QgTGkgPSBzdHlsZWQubGlgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5saXN0LXN0eWxlLXR5cGU6bm9uZTtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6N3B4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG59XHJcblxyXG4mOmhvdmVyICR7UmlnaHRzaWRlZGVzY317XHJcbiAgICBvcGFjaXR5OiR7KHtsZWZ0YmFyYWN0aXZlfSk9PmxlZnRiYXJhY3RpdmUgPyBcIjBcIiA6IFwiMVwifTtcclxuICAgIHRvcDo1cHg7XHJcbn1cclxuXHJcbmBcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3QgSWNvbj1zdHlsZWQuaWBcclxuLy9jb2xvcjojQzcwMDM5O1xyXG4vL2BcclxuY29uc3QgQ2xvc2VvcGVuPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IExlZnR0b29sYmFyPSh7bWFrZWFjdGl2ZSxteWFjdGl2ZX0pPT57XHJcbiAgICBcclxuICAgIGNvbnN0IHt1c2VyZGF0YSxsb2dnZWR9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3QgZmlyc3RsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiS2F5ZGVkaWxlbmxlclwiLHBhdGg6YHNhdmVkYH0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkJlxJ9lbmlsZW5sZXJcIixwYXRoOmBsaWtlZGB9XSlcclxuICAgIGNvbnN0IHNlY29uZGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1lZGl0XCIsZGVzYzpcIkfDtm5kZXJpbGVyaW1cIixwYXRoOlwiL2fDtm5kZXJpbGVyXCJ9LHtpY29uOlwiZmFzIGZhLXVzZXJzXCIsZGVzYzpcIlRhcnTEscWfbWFsYXLEsW1cIixwYXRoOlwiL3RhcnTEscWfbWFsYXJcIn1dKVxyXG4gICAgY29uc3QgdGhpcmRsaXN0PXVzZVJlZihbe2ljb246XCJmYXMgZmEtcGVuY2lsLXJ1bGVyXCIsZGVzYzpcIlRhc2xha2xhclwiLHBhdGg6YERyYWZ0c2B9XSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBcclxuICAgICAgICB2YXIgbXlsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0bGlcIilcclxuICAgICAgICBpZihteWxpKXtcclxuICAgICAgICAgICAgbXlsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsKGUpPT57XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIH0pICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgXHJcblxyXG4gICAgfSwgW3VzZXJkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGxvZ2dlZCA/XHJcblxyXG4gICAgICAgICAgICA8RXh0ZXJpb3JEaXYgYWN0aXZlPXtteWFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICA8Q2xvc2VvcGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZSBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PnttYWtlYWN0aXZlKCFteWFjdGl2ZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzVweFwiLGNvbG9yOlwid2hpdGVcIixyb3RhdGU6bXlhY3RpdmUgPyB0cnVlIDogdW5kZWZpbmVkfX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXJkYXRhLlVzZXJJZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17XCIvY2FyLmpwZ1wifSAgd2lkdGg9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0gaGVpZ2h0PXtteWFjdGl2ZSA/IFwiODBweFwiIDogXCI1MHB4XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt1c2VyZGF0YS5Vc2VySWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwiLGNvbG9yOlwiIzI5MzI0MVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+PHNwYW4gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT57bXlhY3RpdmUgPyB1c2VyZGF0YS5Vc2VybmFtZSA6IFwiLi4uXCJ9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9bdXNlcsSxZF0vJHtpdGVtLnBhdGh9YH0gYXM9e2AvJHt1c2VyZGF0YS5Vc2VySWR9LyR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGkgY2xhc3NOYW1lPVwiZ2V0bGlcIiBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiNGN0ZBRkZcIixjb2xvcjpcImJsYWNrXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvcmRlc2MgICAgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PntpdGVtLmRlc2N9PC9TcGFuZm9yZGVzYz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRzaWRlZGVzYyAgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PntpdGVtLmRlc2N9PC9SaWdodHNpZGVkZXNjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kbGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tzdHVmZl1cIiBhcz17YCR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGkgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsaGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixsaW5laGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixiYWNrY29sb3I6XCIjRjdGQUZGXCIsY29sb3I6XCJibGFja1wifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3JkZXNjICBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+e2l0ZW0uZGVzY308L1NwYW5mb3JkZXNjPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodHNpZGVkZXNjIGxlZnRiYXJhY3RpdmU9e215YWN0aXZlfT57aXRlbS5kZXNjfTwvUmlnaHRzaWRlZGVzYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCIwcHhcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixhbGlnbkl0ZW1zOm15YWN0aXZlID8gXCJmbGV4LXN0YXJ0XCIgOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcmRsaXN0LmN1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvRHJhZnRzL1t1c2VyaWRdXCIgYXM9e2AvRHJhZnRzLyR7dXNlcmRhdGEuVXNlcklkfWB9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpIGxlZnRiYXJhY3RpdmU9e215YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsbGluZWhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsYmFja2NvbG9yOlwiI0Y3RkFGRlwiLGNvbG9yOlwiYmxhY2tcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yZGVzYyAgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PntpdGVtLmRlc2N9PC9TcGFuZm9yZGVzYz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRzaWRlZGVzYyA+e2l0ZW0uZGVzY308L1JpZ2h0c2lkZWRlc2M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3JEaXY+XHJcblxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ29udGV4dCwgdXNlRWZmZWN0ICwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTmF2dG9vbHMgZnJvbSBcIi4vTmF2aWdhdGlvbnRvb2xzXCI7XHJcbmltcG9ydCB1c2VDbGlja291dHNpZSBmcm9tICcuLi8uLi8uLi9ob29rcy9DbGlrY291dGlzZGUnO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0dldHVzZXJzZm9yc2VhcmNoYmFyLGxvZ291dH0gZnJvbSBcIi4uLy4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlLCBIb21lLEFzc2lnbm1lbnR9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyZXh0PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NjBweDtcclxucGFkZGluZzo1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbnotaW5kZXg6MjAwO1xyXG5gXHJcbmNvbnN0IElubmVyTmF2YmFyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MTAwJTtcclxubWFyZ2luOmF1dG87XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXgtd2lkdGg6MTEwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEljb25ob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7Y2xpY2tlZH0pPT5jbGlja2VkID8gXCJcIiA6IFwiXCJ9O1xyXG5wYWRkaW5nOjJweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYmJkZWZiO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OiR7KHtmbGV4fSk9PmZsZXh9O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuQG1lZGlhIChtYXgtd2lkdGg6ODUwcHgpe1xyXG4gICAgZGlzcGxheTokeyh7ZmxleDJ9KT0+ZmxleDJ9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbmJvcmRlcjpub25lO1xyXG53aWR0aDoxMDAlO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNFMEUwRTA7XHJcbmNvbG9yOmJsYWNrO1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbmhlaWdodDoxMDAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5oZWlnaHQ6JHsoe2Zvcm5vdGlmeX0pPT5mb3Jub3RpZnkgPyBcIjQwMHB4XCIgOiBcIlwifTtcclxub3ZlcmZsb3c6YXV0bztcclxucGFkZGluZzo4cHg7XHJcbnJpZ2h0OjBweDtcclxud2lkdGg6MzUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmBcclxuY29uc3QgSW5uZXJvcHRpb249c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjEwcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxubGVmdDotNTVweDtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDozMDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxub3ZlcmZsb3c6YXV0bztcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbiY6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MHB4O1xyXG4gICAgdG9wOjA7XHJcbn1cclxuJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6MzBweDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4mOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBmb250c2l6ZToxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZWxlbWVudHM9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxucGFkZGluZzoxMHB4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuJjpob3ZlciB7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNlNjM5NDY7XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcbmBcclxuXHJcbi8vVG9EbyBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7RGF0YSxDb3VudCxSZWxvYWRmdW5jLFVwZGF0ZX0pe1xyXG4gXHJcblxyXG4gICAgY29uc3Qge2xvZ2dlZCxzcGlubmVyLHVzZXJkYXRhLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsc2V0bG9nZ2VkfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWUoKTtcclxuICAgIGNvbnN0IHtyZWY6cmVmMix2aXNpYmxlOnZpc2libGUyLHNldHZpc2libGU6c2V0dmlzaWJsZTJ9ID0gdXNlQ2xpY2tvdXRzaWUoKTtcclxuICAgIC8vYnVyYWRhIGRlxJ9pxZ9rZW4gaXNpbWkgZGXEn2nFn3RpcmVyZWsga3VsbGFuYWJpbHJzaW5cclxuICAgIGNvbnN0IFtpbnB1dHZhbHVlLHNldGlucHV0dmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcnNmb3JzZWFyY2gsc2V0dXNlcnNmb3JzZWFyY2hdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWFyY2hhY3RpdmUsc2V0c2VhcmNoYWN0aXZlXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0ICBNeXJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW29yZGVybnVtYmVyLHNldG9yZGVybnVtYmVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdCBbSWNvbnVtYmVyLHNldMSxY29ubnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW0ljb25vYmplY3Qsc2V0SWNvbm9iamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgMTp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtcGx1c1wiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczNnB4JyxcclxuICAgICAgICAgIHNob3J0OlwicGx1c1wiXHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLWJlbGxcIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzNweCcsXHJcbiAgICAgICAgICBzaG9ydDpcImJlbGxcIixcclxuICAgICAgICAgIE9uY2VyZXF1ZXN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1zb3J0LWRvd25cIixcclxuICAgICAgICAgIG9ub2ZmOmZhbHNlLFxyXG4gICAgICAgICAgbGluZWhlaWdodDonMzBweCcsXHJcbiAgICAgICAgICBzaG9ydDpcImRvd25cIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codXNlcnNmb3JzZWFyY2gpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgLy9Ub2RvIG9ubHkgaW5wdXQgbGVudGhcclxuICAgICAgaWYoIXZpc2libGUyKVxyXG4gICAgICBzZXRpbnB1dHZhbHVlKFwiXCIpO1xyXG4gICAgICBzZXRzZWFyY2hhY3RpdmUoXCJcIik7XHJcblxyXG4gICAgfSxbdmlzaWJsZTJdKVxyXG5cclxuICAgIGNvbnN0IExvZ291dD0oKT0+e1xyXG4gICAgICAgIGxvZ291dCh7XHJcbiAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEtleXVwZnVuY3Rpb249KCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhpbnB1dHZhbHVlKVxyXG4gICAgICAgaWYoaW5wdXR2YWx1ZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHNldHNlYXJjaGFjdGl2ZShcIkxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIEdldHVzZXJzZm9yc2VhcmNoYmFyKHtcclxuICAgICAgICAgICAgICAgIGlucHV0dmFsdWU6aW5wdXR2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHNldHVzZXJzOnNldHVzZXJzZm9yc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlOnNldHNlYXJjaGFjdGl2ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2Nyb2xsdG9Cb3R0b209KCk9PntcclxuXHJcbiAgICAgICAgaWYoTXlyZWYuY3VycmVudC5zY3JvbGxUb3AgKyBNeXJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA+PSBNeXJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgICAgIFJlbG9hZGZ1bmMob3JkZXJudW1iZXIrRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlaGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgc2V0dmlzaWJsZTIodHJ1ZSk7XHJcbiAgICAgICAgIHNldGlucHV0dmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25zZWxlY3Q9KGljb25udW1iZXIpPT57XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IG15b2JqZWN0PXsuLi5JY29ub2JqZWN0fTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobXlvYmplY3QpLmZvckVhY2goa2V5ID0+e1xyXG4gICAgICAgICAgICBpZihpY29ubnVtYmVyICE9PSBrZXkpe1xyXG4gICAgICAgICAgICAgICAgbXlvYmplY3Rba2V5XS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZil7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj1mYWxzZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgbXlvYmplY3RbaWNvbm51bWJlcl0ub25vZmY9dHJ1ZTtcclxuICAgICAgICAgICAgc2V0xLFjb25udW1iZXIoaWNvbm51bWJlcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHNldEljb25vYmplY3QobXlvYmplY3QpOyBcclxuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25jbGljaz0oaXRlbSxzaG9ydG5hbWUpPT57XHJcbiAgICAgICAgLy9idXJhZGEgc2FkZWNlIGJpbGlkaXJpbSBrdXR1c3Uga2FwYWzEsXlrZW4gaXN0ZWsgYXTEsXlvcnV6IDIga2V6IGRlZ2lsXHJcbiAgICAgICAgaWYoc2hvcnRuYW1lID09IFwiYmVsbFwiICYmIEljb25vYmplY3RbaXRlbV0ub25vZmYgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBJY29uc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgc2VhcmNodHlwZT1cIlwiO1xyXG4gICAgXHJcbiAgICBpZihzZWFyY2hhY3RpdmUgPT0gXCJMb2FkaW5nXCIpe1xyXG4gICAgICAgIHNlYXJjaHR5cGU9PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+PFNwaW5uZXI+PC9TcGlubmVyPjwvZGl2PiBcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc2VhcmNoYWN0aXZlID09IFwiTm90aGluZ1wiKXtcclxuICAgICAgICBzZWFyY2h0eXBlPTxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIn19PlNvbnXDpyBCdWx1bmFtYWTEsS48L2Rpdj4gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyZXh0PlxyXG4gICAgICAgICAgICA8SW5uZXJOYXZiYXI+ICAgXHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciBmbGV4PXtcImJsb2NrXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cImh0dHBzOi8vZXZyaW1hZ2FjaS5vcmcvcHVibGljL2ltYWdlcy9sb2dvL3YzLnN2Zz92PTFcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIscGFkZGluZ1JpZ2h0OlwiMTBweFwiLGJvcmRlclJpZ2h0OlwiMXB4IHNvbGlkIGJsYWNrXCJ9fT48c3Bhbj5FdnJpbSBBxJ9hY8SxPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT48SG9tZSBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLGNvbG9yOlwiI2M5MTg0YVwifX0+PC9Ib21lPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIHJlZj17cmVmMn0gZmxleDI9e1wibm9uZVwifSBmbGV4PXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5VXA9e0tleXVwZnVuY3Rpb259IHZhbHVlPXtpbnB1dHZhbHVlfSBvbkNoYW5nZT17Q2hhbmdlaGFuZGxlcn0gcGxhY2Vob2xkZXI9XCJBcmFcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR2YWx1ZS5sZW5ndGggPD0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxNXB4XCIsdG9wOlwiMTBweFwiLHdpZHRoOlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnNldHZpc2libGUyKGZhbHNlKX0gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMXB4XCIsdG9wOlwiMTJweFwiLHdpZHRoOlwiMjBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA+IDAgJiYgdmlzaWJsZTIgPT0gdHJ1ZSAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFjdGl2ZS5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntzZWFyY2h0eXBlfTwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNmb3JzZWFyY2gubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPFNlYXJjaGVsZW1lbnRzIG9uQ2xpY2s9eygpPT5zZXRpbnB1dHZhbHVlKFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke2l0ZW0uaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDVweFwiIGhlaWdodD1cIjQ1cHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcIjYwMFwifX0+e2l0ZW0uZmlyc3RuYW1lK1wiIFwiK2l0ZW0ubGFzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJsaWdodGdyYXlcIixmb250U2l6ZTpcIjE1cHhcIn19PsSwbsWfYWF0IE3DvGhlbmRpc2k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hlbGVtZW50cz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIXNwaW5uZXIgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICFsb2dnZWQgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjEwcHhcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFjY291bnRDaXJjbGUgc3R5bGU9e3tmb250U2l6ZTpcIjI1cHhcIn19PjwvQWNjb3VudENpcmNsZT59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19IGVuZEljb249ezxBc3NpZ25tZW50IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMjVweFwifX0+PC9Bc3NpZ25tZW50Pn0gY29sb3I9XCJzZWNvbmRhcnlcIj5LYXnEsXQgT2w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXIgIGZsZXgyPXtcImZsZXhcIn0gcmVmPXtyZWZ9IGZsZXg9e1wiZmxleFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoSWNvbm9iamVjdCkubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uaG9sZGVyIGNsaWNrZWQ9e0ljb25vYmplY3RbaXRlbV0ub25vZmZ9IG9uQ2xpY2s9eygpPT5JY29uY2xpY2soaXRlbSxJY29ub2JqZWN0W2l0ZW1dLnNob3J0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLGJhY2tncm91bmRDb2xvcjpcIiNGMEYwRjBcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjM1cHhcIixoZWlnaHQ6XCIzNXB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbGluZUhlaWdodDpJY29ub2JqZWN0W2l0ZW1dLmxpbmVoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e0ljb25vYmplY3RbaXRlbV0uY2xhc3NOYW1lfSBzdHlsZT17e2NvbG9yOkNvdW50ID4gMCAmJiBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiID8gXCIjZDkwNDI5XCIgOiBcIlwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbm9iamVjdFtpdGVtXS5zaG9ydCA9PSBcImJlbGxcIiAmJiBDb3VudCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsZm9udFNpemU6XCIxMnB4XCIsdG9wOlwiLTVweFwiLHJpZ2h0OlwiLTVweFwiLHdpZHRoOlwiMjBweFwiLGRpc3BsYXk6XCJibG9ja1wiLGhlaWdodDpcIjIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0OlwiMjBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fT57Q291bnR9PC9zcGFuPikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmRhdGEuVXNlcklkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD1cIjM1cHhcIiBoZWlnaHQ9XCIzNXB4XCIgcHJvZmlsZT1cIi9jYXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29udW1iZXIgIT09IDAgJiYgdmlzaWJsZSA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgb25TY3JvbGw9e1Njcm9sbHRvQm90dG9tfSByZWY9e015cmVmfSBmb3Jub3RpZnk9e0ljb25vYmplY3RbXCIyXCJdLm9ub2ZmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJvcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZ0b29scyBMb2dvdXQ9e0xvZ291dH0gTmF2ZGF0YT17RGF0YX0gb3B0bnVtYmVyPXtJY29udW1iZXJ9PjwvTmF2dG9vbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Jbm5lck5hdmJhcj5cclxuICAgICAgICA8L05hdmJhcmV4dD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNvbnRleHR9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9VSS9JY29uXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHtsb2dvdXR9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5cclxuY29uc3QgT3B0aW9uMWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2NoZWNrfSk9PiBjaGVjayA9PSBmYWxzZSA/IFwiI0VCRUJFQlwiIDogXCJcIn07XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbnRvb2xzKHtvcHRudW1iZXIsb3B0bmFtZSxOYXZkYXRhLExvZ291dH0pe1xyXG4gICAgY29uc3Qge3NldGxvZ2dlZCxzZXR1c2VyZGF0YSxzZXRzcGlubmVyLGxvZ2dlZH0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc29sZS5sb2coc2V0bG9nZ2VkKVxyXG4gICAgY29uc3QgW3RvZ2dsZSxzZXR0b2dsZV09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCBNeW9wdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgdGl0bGUgPSBcIlwiO1xyXG5cclxuICAgIGlmKG9wdG51bWJlciA9PSAxKXtcclxuICAgICAgdGl0bGUgPSBcIk9sdcWfdHVyXCJcclxuICAgICAgTXlvcHRpb24gPSA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R8O2bmRlcmk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+U2F5ZmFuZGEgYmlyIGfDtm5kZXJpIHBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CaXIgdGFydMSxxZ9tYSBvZGFzxLEgb2x1xZ90dXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgfVxyXG4gICAgaWYob3B0bnVtYmVyID09IDIpe1xyXG5cclxuICAgICAgICB0aXRsZT1cIkJpbGRpcmltbGVyXCJcclxuXHJcbiAgICAgICAgY29uc3QgQXR0cml1YnRlYXJyYXk9W1xyXG4gICAgICAgICAgICB7bmFtZTpcIkxpa2VcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiU2VuaW4gR8O2bmRlcmluaSBCZcSfZW5kaS5cIixJY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGNvbG9yOlwiI0REMUYxRlwiLGxoOlwiMzBweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJSZXNob3dcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiU2VuaW4gR8O2bmRlcmluaSDEsMWfYXJldGxlZGkuXCIsSWNvbjpcImZhcyBmYS10aHVtYnRhY2tcIixjb2xvcjpcIiNhZGI1YmRcIixsaDpcIjM1cHhcIixocmVmOlwiL2NvbnRlbnRcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiRm9sbG93XCIsaWRuYW1lOlwiVXNlcklkXCIsZGVzYzpcIlNlbmkgVGFraXAgRXR0aVwiLEljb246XCJmYXMgZmEtdXNlci1wbHVzIGZhLXNtXCIsY29sb3I6XCIjZWU2MDU1XCIsbGg6XCIzMHB4XCIsaHJlZjpcIi9wcm9maWxlXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIkNvbW1lbnRcIixpZG5hbWU6XCJDb250ZW50SWRcIixkZXNjOlwiR8O2bmRlcmluZSBZb3J1bSBZYXB0xLEuXCIsSWNvbjpcImZhcyBmYS1jb21tZW50LWRvdHNcIixjb2xvcjpcIiNhZGI1YmRcIixsaDpcIjMwcHhcIixocmVmOlwiL2NvbnRlbnRcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiUG9zdFwiLGRlc2M6XCJZZW5pIEJpciBHw7ZuZGVyaSBQYXlsYcWfdMSxXCIsSWNvbjpcImZhcyBmYS1lZGl0XCIsY29sb3I6XCIjZmNhMzExXCIsbGg6XCIzMHB4XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIkRlYmF0ZVwiLGRlc2M6XCJZZW5pIEJpciBncnVwIE9sdcWfdHVyZHUuXCIsSWNvbjpcIlwifV07XHJcblxyXG4gICAgICAgIGlmKE5hdmRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBNeW9wdGlvbiA9IDxoND5IZW7DvHogYmlyIGJpbGRpcmltaW5peiB5b2suPC9oND5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoTmF2ZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIE15b3B0aW9uID0gXHJcblxyXG4gICAgICAgICAgICAoPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIHtOYXZkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE8gaWNvbiBkZXRlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBteWl0ZW1vYmo9e307XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEF0dHJpdWJ0ZWFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5hdHRyaWJ1dGUgPT0gQXR0cml1YnRlYXJyYXlbaV0ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteWl0ZW1vYmogPSBBdHRyaXVidGVhcnJheVtpXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uQ29udGVudElkID09IG51bGwgJiYgaXRlbS5Db21tZW50SWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxPcHRpb24xZGl2IGtleT17aW5kZXh9IGNoZWNrPXtpdGVtLkZhY2VjaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTpgJHtteWl0ZW1vYmouaHJlZn0vJHtpdGVtW215aXRlbW9iai5pZG5hbWVdfWAscXVlcnk6e25hbWU6XCJQb3N0XCJ9fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17bXlpdGVtb2JqLkljb259IEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiNDBweFwiLHJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIixiYWNrY29sb3I6bXlpdGVtb2JqLmNvbG9yLHdpZHRoOlwiMzBweFwiLGhlaWdodDpcIjMwcHhcIixsaW5laGVpZ2h0Om15aXRlbW9iai5saH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJY29uIGNsYXNzTmFtZT17XCJmYXMgZmEtc3RhciBmYS1zbVwifSBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIi04cHhcIixyaWdodDpcIi0ycHhcIixjb2xvcjpcIiM3MmRkZjdcIix3aWR0aDpcIjE3cHhcIixoZWlnaHQ6XCIxN3B4XCIsbGluZWhlaWdodDpcIjE3cHhcIn19PjwvSWNvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsZm9udFNpemU6XCIxNXB4XCJ9fT57aXRlbS5Vc2VyLmZpcnN0bmFtZSArIFwiIFwiICsgaXRlbS5Vc2VyLmxhc3RuYW1lICsgXCIgLCAoT3NtYW5sxLEgSGFsa8SxbsSxbsSxIEXEn2l0aW0gU2V2aXllc2kuLi4pXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIixjb2xvcjpcIiM3NTc1NzVcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+e215aXRlbW9iai5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCIsY29sb3I6XCIjMTc4MGExXCIsZm9udFdlaWdodDpcImJvbGRcIn19PntjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGl0ZW0uY3JlYXRlZEF0KS5leHByZXNzfSDDtm5jZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbjFkaXY+KVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pICAgXHJcblxyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpZihvcHRudW1iZXIgPT0gMyl7XHJcbiAgICAgIHRpdGxlPVwiUHJvZmlsXCJcclxuICAgICAgTXlvcHRpb249KCA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzJweFwiLGhlaWdodDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWxpbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY29nIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixoZWlnaHQ6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5Qcm9maWwgQXlhcmxhcsSxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbW9vbiBcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzMnB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjMycHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTVweFwifX0+S2FyYW5sxLFrIE1vZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggIGNoZWNrZWRJY29uPXtmYWxzZX0gdW5jaGVja2VkSWNvbj17ZmFsc2V9IG9uQ2hhbmdlPXsoKT0+c2V0dG9nbGUoIXRvZ2dsZSl9IGNoZWNrZWQ9e3RvZ2dsZX0+PC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdiBvbkNsaWNrPXsoKT0+TG9nb3V0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1vdXQtYWx0IFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzJweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT7Dh8Sxa8SxxZ8gWWFwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PiAgICAgICBcclxuICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCI1cHhcIixmb250U2l6ZTpcIjIwcHhcIn19Pnt0aXRsZX08L3A+XHJcbiAgICAgICAgICB7TXlvcHRpb259XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbiAgIFxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlLGtleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuIH1cclxuXHJcbiBib2R5IHtcclxuICBoZWlnaHQ6MTAwJTtcclxuIH1cclxuXHJcbiBodG1se1xyXG4gICBzY3JvbGwtYmVoYXZpb3I6c21vb3RoO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7cHJvZmlsZX0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gKVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmxhY2s9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMTUwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzZjNzU3ZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvSWNvblwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkNvdW50cmVxLE5vdGlmaWNhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25jb3VudH0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5cclxuXHJcbmNvbnN0IEJpZ2Rpdj1zdHlsZWQuZGl2YFxyXG5gXHJcblxyXG5jb25zdCBHb3VwaWNvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxuYm90dG9tOjQwcHg7XHJcbnJpZ2h0OjQwcHg7XHJcbnRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG56LWluZGV4OjEwMDtcclxub3BhY2l0eTokeyh7dXB9KT0+dXAgPyBcIjFcIiA6IFwiMFwifTtcclxuYFxyXG4vL1RPRE8gc29ja2V0IGlvIGhhbmRsZSBmdW5jdGlvbnMgb24gc2VydmVyc2lkZVxyXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ291cCxzZXRnb3VwXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dClcclxuICAgIGNvbnN0IFtuYXZkYXRhLHNldG5hdmRhdGFdPXVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudG9mZGF0YSxzZXRjb3VudGRhdGFdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhc3RyZWNvcmQsc2V0bGFzdHJlY29yZF09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZGFjdGl2ZSxzZXRsYXN0cmVjb3JkYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2Vyb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXJvdXRlci5wYXRobmFtZSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjcmVhdGVcIix1c2VyZGF0YS5Vc2VySWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgICAgICBzZXRhY3RpdmUoZmFsc2UpOyAgXHJcbiAgICB9LCBbdXNlcm91dGVyLnF1ZXJ5XSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcblxyXG4gICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPiA1MDApe1xyXG4gICAgICAgICAgICAgIHNldGdvdXAodHJ1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgc2V0Z291cChmYWxzZSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRjb3VudGRhdGE6c2V0Y291bnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfSAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyPSgpPT57XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmRhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldGxhc3RyZWNvcmQocHJldj0+cHJldisxKTtcclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uQ291bnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTm90aWZpY2F0aW9uXCIsbGlzdGVuZXIpIFxyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgICBpZih1c2VyZGF0YS5Vc2VySWQgJiYgbGFzdHJlY29yZGFjdGl2ZSl7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y291bnRvZmRhdGEsXHJcbiAgICAgICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsYXN0cm93OnRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFtsYXN0cmVjb3JkXSlcclxuXHJcbiAgICBjb25zdCBSZWxvYWRuYXY9KG9yZGVyKT0+e1xyXG5cclxuICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBzZXRuYXZkYXRhOnNldG5hdmRhdGEsXHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBuYXZkYXRhOm5hdmRhdGEsXHJcbiAgICAgICAgICAgIGxhc3Ryb3c6ZmFsc2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlY291bnQ9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5uZ2dnXCIpO1xyXG4gICAgICAgIHNldGNvdW50ZGF0YSgwKTtcclxuICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25jb3VudCh7VXNlcklkOnVzZXJkYXRhLlVzZXJJZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCaWdkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWt0aWY9e2FjdGl2ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gVXBkYXRlPXtVcGRhdGVjb3VudH0gUmVsb2FkZnVuYz17UmVsb2FkbmF2fSBDb3VudD17Y291bnRvZmRhdGF9IERhdGE9e25hdmRhdGF9PjwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPExlZnR0b29sYmFyIG15YWN0aXZlPXthY3RpdmV9IG1ha2VhY3RpdmU9e3NldGFjdGl2ZX0+PC9MZWZ0dG9vbGJhcj5cclxuICAgICAgICAgICAgey8qdGhpcyBwYXJ0IHdpbGwgYmUgY2hhbmdlZCovfVxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgICA8R291cGljb24gb25DbGljaz17KCk9Pnt3aW5kb3cuc2Nyb2xsVG8oe3RvcDowfSl9fSB1cD17Z291cH0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi11cCBmYS1sZ1wiIEljb25jb25maWc9e3tiYWNrY29sb3I6XCIjZWYyMzNjXCIsY29sb3I6XCJ3aGl0ZVwiLHdpZHRoOlwiNDBweFwiLGhlaWdodDpcIjQwcHhcIixsaW5laGVpZ2h0OlwiNDBweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICA8L0dvdXBpY29uPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CaWdkaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWYsIHVzZUNvbnRleHQsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge1Byb2R1Y2Vjb21tZW50cmVxLENvbW1lbnRyZXEsQ29tbWVudGFuc3dlcnJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IENvbW1lbnRwYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvQ29udGVudC9Db21tZW50c2VjdGlvbi9Db21tZW50cGFydCc7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmNvbnRlbnQ9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiXCIgOiBcIndoaXRlXCJ9O1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjo1MHB4IGF1dG87XHJcbndpZHRoOjEwMCVcclxuYFxyXG5cclxuY29uc3QgQ29tbWVudGRpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW46NTBweCBhdXRvO1xyXG5tYXgtd2lkdGg6NzAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5wYWRkaW5nOjI1cHg7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVEaXY9c3R5bGVkLmRpdmBcclxuYm94LXNpemluZzpib3JkZXItYm94O1xyXG5wYWRkaW5nLWxlZnQ6MjVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojRTJFM0UzO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vL3RvZG8gbWFwIGFycmF5IHRvIGNyZWF0ZSBhdHRyaWJ1dGUgbGlzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7Q29udGVudGRhdGEsY29tbWVudHMsaWR9KXtcclxuXHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJHw7ZuZGVyaXlpIEtheWRldFwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiR8O2bmRlcml5aSBCZcSfZW5cIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJHw7ZuZGVyaXlpIFByb2ZpbCBTYXlmYW1kYSBHw7ZzdGVyXCJ9XSlcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbY29udGVudCxzZXRjb250ZW50XT11c2VTdGF0ZShDb250ZW50ZGF0YSk7XHJcbiAgICBjb25zdCBbY29tbWVudGxpc3Qsc2V0Y29tbWVudGxpc3RdPXVzZVN0YXRlKGNvbW1lbnRzKTtcclxuICAgIGNvbnN0IFtudW1iZXJvZmNvbW1lbnQsc2V0bnVtYmVyY29tXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWN0aXZlcyxzZXRlcnJtc2ddPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmVwcm9kdWNlLHNldGFjdGl2ZXByb2R1Y2VdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICAvL2NvbnN0IHtpZH09cm91dGVyLnF1ZXJ5O1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coY29tbWVudGxpc3QpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgaWYobnVtYmVyb2Zjb21tZW50ID4gMCl7XHJcbiAgICAgICAgICAgIC8vaWxrIHNheWZhIGdlbGRpZ2luZGUgaXN0ZcSfaSDDtm5sZW1rIGnDp2luXHJcbiAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIENvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOmlkLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29tbWVudDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRsaXN0OmNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y29tbWVudGxpc3QubGVuZ3RoKzEwLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlcHJvZHVjZTpzZXRhY3RpdmVwcm9kdWNlLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbbnVtYmVyb2Zjb21tZW50XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihib3R0b20pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SWQ6aWQsXHJcbiAgICAgICAgICAgICAgICBzZXRjb21tZW50OnNldGNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGxpc3Q6Y29tbWVudGxpc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y29tbWVudGxpc3QubGVuZ3RoKzEwLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlcHJvZHVjZTpzZXRhY3RpdmVwcm9kdWNlLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIC8vY2hhbmdlYWJsZVxyXG4gICAgICAgc2V0Y29udGVudChDb250ZW50ZGF0YSk7XHJcbiAgICAgICBzZXRjb21tZW50bGlzdChjb21tZW50cyk7XHJcbiAgICB9LFtpZF0pXHJcbiAgICBcclxuICAgIGNvbnN0IFByb2R1Y2U9dXNlQ2FsbGJhY2soKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudC5wZXJzb25hbC5pZClcclxuICAgICAgICBQcm9kdWNlY29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgIENvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgTWVzc2FnZTptZXNzYWdlLFxyXG4gICAgICAgICAgICBUYWtlcklkOmNvbnRlbnQucGVyc29uYWwuaWQsXHJcbiAgICAgICAgICAgIHNldG51bWJlcmNvbTpzZXRudW1iZXJjb20sXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFt1c2VyZGF0YS5Vc2VySWRdKVxyXG5cclxuICAgIGNvbnN0IEFuc3dlcmhhbmRsZXI9KEFuc3dlcixVcHBlcklkKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJCVVJBREFBQVwiKVxyXG4gICAgICAgICAgQ29tbWVudGFuc3dlcnJlcSh7XHJcbiAgICAgICAgICAgICAgVXBwZXJjb21tZW50SWQ6VXBwZXJJZCxcclxuICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgIEFuc3dlcjpBbnN3ZXIsXHJcbiAgICAgICAgICAgICAgQ29udGVudElkOmlkXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDpcIjk1MHB4XCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvcmNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nhci5qcGdcIn0gc3R5bGU9e3tvYmplY3RGaXQ6XCJjb3ZlclwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn19ID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gIGFjdGl2ZWZ1bmM9eygpPT5zZXRhY3RpdmUoIWFjdGl2ZSl9IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIxMHB4XCIscmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMjVweFwiLGhlaWdodDpcIjI1cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0dHJpYnV0ZSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoaXRlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF0dHJpYnV0ZWhvbGRlciBrZXk9e2l0ZW0uaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpcIjI4cHhcIixoZWlnaHQ6XCIyOHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsZm9udFNpemU6XCIxM3B4XCJ9fT57aXRlbS5kZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiL2JsYWNrLmpwZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkR1aGFuIMOWenTDvHJrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiM1YzZiNzNcIixmb250U2l6ZTpcIjE1cHhcIn19PjEyLzA4LzIwMjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNlNjM5NDZcIn19PiBUaGUgc3RhdGUgcGxhbnMgdG8gcGF5IGFyb3VuZCAyMCBwZXJjZW50PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwifX0+VGhlIHN0cnVjdHJlIG9mIHRoZSBjdWx0dXJlIGluIG90dG9tYW4gZW1waXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHN0YXRlIHBsYW5zIHRvIHBheSBhcm91bmQgMjAgcGVyY2VudCBvZiB0aGUgcHJvamVjdCBmcm9tIGl0cyBjZW50cmFsIGJ1ZGdldC4gVGhlIHJlc3Qgd2lsbCBjb21lIGZyb20gYSAkMS41IGJpbGxpb24gQ2hpbmVzZSBiYW5rIGxvYW4gdG8gSHVuZ2FyeS4gVGhlIGRvY3VtZW50cyBzYXkgdGhhdCBhbGwgdGhlIHdvcmsgd2lsbCBiZSBkb25lIGJ5IENoaW5lc2UsIG5vdCBIdW5nYXJpYW4sIHdvcmtlcnMgYW5kIGFsbCB0aGUgbWF0ZXJpYWwgd2lsbCBiZSBDaGluZXNlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnFRoZSBDaGluZXNlIGFyZSBkb2luZyBldmVyeXRoaW5nLCB3aGlsZSB3ZeKAmXJlIGRvaW5nIG9ubHkgb25lIHRoaW5nOiBwYXlpbmcs4oCdIEthcmFjc29ueSBzYWlkLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bmdhcnnigJlzIGdvdmVybm1lbnQgZm9sbG93cyB0aGUgZWNvbm9taWMgdGhpbmtpbmcga25vd24gYXMg4oCcRWFzdGVybiBPcGVuaW5nLuKAnSBJdCBmYXZvcnMgaW5jcmVhc2VkIGRpcGxvbWFjeSBhbmQgdHJhZGUgd2l0aCBjb3VudHJpZXMgbGlrZSBDaGluYSwgUnVzc2lhLCBUdXJrZXkgYW5kIG90aGVycyBpbiBDZW50cmFsIEFzaWEuIEFsdGhvdWdoIGl0IGpvaW5lZCB0aGUgRXVyb3BlYW4gVW5pb24gaW4gMjAwNCwgdGhlIE9yYmFuIGdvdmVybm1lbnQgb2Z0ZW4gaGFzIGRpc3B1dGVzIHdpdGggb3RoZXIgRS5VLiBtZW1iZXJzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBldGVyIEtyZWtvIGlzIHRoZSBkaXJlY3RvciBvZiB0aGUgQnVkYXBlc3QtYmFzZWQgcmVzZWFyY2ggY29tcGFueSBQb2xpdGljYWwgQ2FwaXRhbC4gSGUgYmVsaWV2ZXMgdGhlIEZ1ZGFuIHByb2plY3QgaXMgcGFydCBvZiBDaGluYeKAmXMgZWZmb3J0cyB0byBpbmNyZWFzZSBzb2Z0IHBvd2VyLiBBbmQgaGUgc2FpZCB0aGUgcHJvamVjdCBjb3VsZCBoZWxwIENoaW5h4oCZcyBzcHkgb3BlcmF0aW9ucy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdW5nYXJ5IGlzIGEgcG9wdWxhciBwbGFjZSBmb3IgUnVzc2lhbiBhbmQgQ2hpbmVzZSBzcGllcyBiZWNhdXNlIHRoZSBnb3Zlcm5tZW50IHNob3dzLCBLcmVrbyBzYWlkLCDigJx0aGUgbGFjayBvZiB3aWxsaW5nbmVzcyBvZiBpbnRlbGxpZ2VuY2UgZm9yY2VzIHRvIHB1c2ggYmFjayBtYWxpZ24gZm9yZWlnbiBpbmZsdWVuY2Uu4oCdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVpdGhlciB0aGUgSHVuZ2FyaWFuIGdvdmVybm1lbnTigJlzIHNwb2tlc3BlcnNvbiBub3IgdGhlIG1pbmlzdHJ5IGxlYWRpbmcgdGhlIHByb2plY3QgYW5zd2VyZWQgcmVxdWVzdHMgZm9yIGNvbW1lbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcmNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8cD57Y29tbWVudGxpc3QubGVuZ3RoKyBcIiBZb3J1bVwifTwvcD5cclxuICAgICAgICAgICAgPENvbW1lbnRkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudHBhcnQgaGFuZGxlYW5zd2VyPXtBbnN3ZXJoYW5kbGVyfSBzcGlubmVyPXthY3RpdmVwcm9kdWNlfSBsaXN0PXtjb21tZW50bGlzdH0gUHJvZHVjZWNvbW1lbnQ9e1Byb2R1Y2V9PjwvQ29tbWVudHBhcnQ+XHJcbiAgICAgICAgICAgIDwvQ29tbWVudGRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250ZXh0ZGF0YX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGV1c2VyY29udGV4dD1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyY29udGV4dD0oe2NoaWxkcmVufSk9PntcclxuXHJcbiAgICBjb25zdFtsb2dnZWQsc2V0bG9nZ2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthbGxvd2FjdGlvbixzZXRhbGxvd2FjdGlvbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdXNlcmRhdGEsc2V0dXNlcmRhdGFdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0W2RyYWZ0aWQsc2V0ZHJhZnRpZF09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTsgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2lmKHRva2VuKXtcclxuXHJcbiAgICAgICAgICAgIENvbnRleHRkYXRhKHtcclxuICAgICAgICAgICAgICAgIFRva2VuOnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGV4dGRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgc2V0YWxsb3dhY3Rpb246c2V0YWxsb3dhY3Rpb24sXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGNyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgIGxvZ2dlZDpsb2dnZWQsXHJcbiAgICAgICAgICAgYWxsb3dhY3Rpb246YWxsb3dhY3Rpb24sXHJcbiAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICB1c2VyZGF0YTp1c2VyZGF0YSxcclxuICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICBzcGlubmVyOnNwaW5uZXIsXHJcbiAgICAgICAgICAgc2V0c3Bpbm5lcixzZXRzcGlubmVyLFxyXG4gICAgICAgICAgIGRyYWZ0aWQ6ZHJhZnRpZCxcclxuICAgICAgICAgICBzZXRkcmFmdGlkLHNldGRyYWZ0aWQsXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xpY2tvdXRzaWRlKCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlZj11c2VSZWYoKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLHNldHZpc2libGVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlY2xpY2s9KGV2ZW50KT0+eyAgXHJcblxyXG5cclxuICAgICAgICBpZihyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XHJcbiAgICAgICAgICAgIHNldHZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaGFuZGxlY2xpY2spO1xyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaGFuZGxlY2xpY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlzaWJsZSxcclxuICAgICAgc2V0dmlzaWJsZSxcclxuICAgICAgcmVmXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTY3JvbGwoKXtcclxuXHJcbiAgICBjb25zdCBbYm90dG9tLHNldGJvdHRvbV09dXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgICAgICAvL1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoZSk9PntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkgeyAgXHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0Ym90dG9tKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICByZXR1cm4gKCk9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcImF1dG9cIn0pXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm90dG9tOmJvdHRvbVxyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYWlubGF5b3V0IGZyb20gXCIuLi8uLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0XCI7XHJcbmltcG9ydCBNeWNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvcGFnZXMvQ29udGVudFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IGF4aW91cyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHtteWRhdGEsY29tbWVudHMsZ2V0cXVlcnksY29tbWVudHMyfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PiBcclxuICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwJmZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICA8TXljb250ZW50IENvbnRlbnRkYXRhPXtteWRhdGF9IGNvbW1lbnRzPXtjb21tZW50c30gaWQ9e2dldHF1ZXJ5fS8+XHJcbiAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuQ29udGVudC5sYXlvdXQ9KGNoaWxkcmVuKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbmxheW91dD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTWFpbmxheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pe1xyXG4gICAgXHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVjaWV2ZT1hd2FpdCBheGlvdXMuYWxsKFtcclxuICAgICAgICBheGlvdXMuZ2V0KGBjb250ZW50LyR7cXVlcnkuaWR9YCksXHJcbiAgICAgICAgYXhpb3VzLmdldChgY29tbWVudC8ke3F1ZXJ5LmlkfS9mYWxzZS8xMGApXHJcbiAgICAgICAgXSlcclxuICAgICAgICAvL2lsayAxMCBjb21tZW50IGnDp2luIGlzdGVrIGF0xLFsxLFjYWtcclxuICAgICAgICAvL2XEn2VyIGJ1cmFzxLEgbnVsbCBpc2UgNDA0IG9sYXJhayBoYXRhIGTDtm5kw7xyIHJlZGlyZWN0IHRvIDQwNC5qc1xyXG4gICAgICAgIGlmKHJlY2lldmVbMF0uZGF0YSAmJiByZWNpZXZlWzBdLmRhdGEuZXJyb3IgfHwgcmVjaWV2ZVsxXS5kYXRhICYmIHJlY2lldmVbMV0uZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOlwiLzUwMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vNDA0LmpzIHBhZ2Ugbm90IGZvdW5kIGVycm9yXHJcbiAgICAgICAgaWYocmVjaWV2ZVswXS5kYXRhLmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOlwiLzQwNC5qc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB9O1xyXG4gXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHMgOntteWRhdGE6cmVjaWV2ZVswXS5kYXRhLmRhdGEsY29tbWVudHM6cmVjaWV2ZVsxXS5kYXRhLmRhdGEsZ2V0cXVlcnk6cXVlcnkuaWQsY29tbWVudHMyOnJlY2lldmVbMV0uZGF0YS50cmlhbH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjpcIi81MDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSBcclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVkYXRlPShwcmV2aW91c2RhdGUpPT57XHJcblxyXG4gICAgY29uc3QgUHJldmRhdGU9bmV3IERhdGUocHJldmlvdXNkYXRlKTtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2U9TWF0aC5hYnMoRGF0ZS5ub3coKS1QcmV2ZGF0ZSk7XHJcbiAgICBjb25zdCBzZWNvbmQ9TWF0aC5jZWlsKGRpZmZlcmVuY2UvMTAwMCk7XHJcblxyXG4gICAgaWYoc2Vjb25kPDYwKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0aW1lOnNlY29uZCxleHByZXNzOlwiU2FuaXllXCJ9XHJcblxyXG4gICAgIH1cclxuICAgICBlbHNlIGlmKHNlY29uZD42MCAmJiBzZWNvbmQ8MzYwMCl7XHJcblxyXG4gICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvNjApLGV4cHJlc3M6XCJEYWtpa2FcIn1cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+MzYwMCAmJiBzZWNvbmQ8ODY0MDApe1xyXG5cclxuICAgICAgICByZXR1cm4ge3RpbWU6TWF0aC5jZWlsKHNlY29uZC8oNjAqNjApKSxleHByZXNzOlwiU2FhdFwifVxyXG4gICAgIH1cclxuICAgICBlbHNlIGlmKHNlY29uZD44NjQwMCAmJiBzZWNvbmQ8MjYyOTc0MzgzKXtcclxuXHJcbiAgICAgICByZXR1cm4ge3RpbWU6TWF0aC5jZWlsKHNlY29uZC8oNjAqNjAqMjQpKSxleHByZXNzOlwiR8O8blwifVxyXG5cclxuICAgICB9XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pcWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==