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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/[username]/index.js");
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
/*! exports provided: loginreq, logout, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq, UpdateNotificationactive, UpdateProfile, Editcomment */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editcomment", function() { return Editcomment; });
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
  setsuccesfulupload,
  userinfo,
  setuserinfo
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/user/updateprofile/${typeofupdate}`, userdata, {
      withCredentials: true
    });

    if (!data.state) {
      const copy = _objectSpread({}, userinfo);

      copy["Currentpassword"].warning = true;
      setuserinfo(copy);
    } else {
      setsuccesfulupload("SUCCESSFUL");
      setTimeout(() => {
        setsuccesfulupload("");
      }, 3000);
    }

    setuploading(false);
  } catch (error) {
    console.log(error);
    setsuccesfulupload("ERROR");
  }
};
const Editcomment = async ({
  commentID,
  message,
  setloading
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/comment/EditComment`, {
      commentID: commentID,
      message: message
    }, {
      withCredentials: true
    });

    if (data.state == "SUCCESS") {
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  } catch (error) {
    console.log(error);
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

/***/ "./components/pages/Profile/Editwindow.js":
/*!************************************************!*\
  !*** ./components/pages/Profile/Editwindow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editwindow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-crop */ "react-image-crop");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\Editwindow.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Exterior = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Exterior",
  componentId: "sc-9h7al1-0"
})(["display:", ";position:absolute;transform:translateX(-50%);left:50%;top:", ";;max-width:600px;width:90%;height:", ";background-color:white;border-radius:10px;z-index:1000;"], ({
  active
}) => active ? "block" : "none", ({
  getcropper
}) => getcropper ? "150px" : "70px", ({
  getcropper
}) => getcropper ? "350px" : "580px");
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Inner",
  componentId: "sc-9h7al1-1"
})(["position:relative;padding:10px;overflow:auto;height:580px;"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-2"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], ({
  ImageforBack
}) => ImageforBack);
const ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__ProfileImageholder",
  componentId: "sc-9h7al1-3"
})(["position:absolute;top:160px;opacity:0.8;left:30px;z-index:1;transition:0.4s;&:hover{opacity:1;}"]);
const Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Inputholder",
  componentId: "sc-9h7al1-4"
})(["display:", ";margin-top:20px;"], ({
  displayed
}) => displayed ? "block" : "none");
const Information = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-5"
})(["position:relative;padding-top:", ";background-color:", ";padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], ({
  isforedit
}) => isforedit ? "10px" : "80px", ({
  isforedit
}) => isforedit ? "#e9ecef" : "white");
const Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.label.withConfig({
  displayName: "Editwindow__Labelimage",
  componentId: "sc-9h7al1-6"
})(["position:absolute;width:100%;height:200px;display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;opacity:0;"]); //selection bar for editing

const Selectionbar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Selectionbar",
  componentId: "sc-9h7al1-7"
})(["display:flex;justify-content:space-around;height:30px;margin-bottom:40px;"]);
const Childsofselection = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Childsofselection",
  componentId: "sc-9h7al1-8"
})(["position:relative;top:", ";background-color:", ";display:flex;align-items:center;justify-content:center;border-radius:50%;width:38px;height:38px;cursor:pointer;transition-duration:0.18s;padding:5px;"], ({
  innercolor
}) => innercolor ? "10px" : "0", ({
  innercolor
}) => innercolor ? "#7de2d1" : "#ff0a54");
const Holderforupicon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__Holderforupicon",
  componentId: "sc-9h7al1-9"
})(["position:absolute;transition-duration:0.3s;top:-45px;left:", ";"], ({
  slipvalue
}) => {
  if (slipvalue == 1) {
    return "55px";
  } else if (slipvalue == 2) {
    return "250px";
  } else {
    return "440px";
  }
});
const ProfileuploadedDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Editwindow__ProfileuploadedDiv",
  componentId: "sc-9h7al1-10"
})(["position:fixed;transition-duration:0.5s;top:500px;opacity:", ";left:", ";padding:10px;border-radius:10px;z-index:1000;background-color:#403d58;color:white;box-shadow:rgba(14,30,37,0.12) 0px 2px 4px 0px,rgba(14,30,37,0.32) 0px 2px 16px 0px;"], ({
  successful
}) => successful ? "1" : "0", ({
  successful
}) => successful ? "20px" : "5px"); //email,password,notification

function Editwindow({
  isWindowforsettings,
  updatefunc,
  active,
  editdata,
  closefunc
}) {
  console.log(editdata);
  console.log(editdata.backgroundurl);
  const {
    0: file,
    1: setfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Backimage: "",
    Profileimage: ""
  });
  const {
    0: crop,
    1: setcrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    aspect: 16 / 16,
    height: 200,
    width: 100,
    x: 50,
    y: 50
  });
  const {
    0: src,
    1: setsrc
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Profileimage: {
      token: editdata.imagetoken,
      name: editdata.imageurl
    },
    Backimage: {
      token: editdata.backgroundtoken,
      name: editdata.backgroundurl
    }
  });
  const {
    0: uploading,
    1: setuploading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: succesfulupload,
    1: setsuccesfulupload
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: imagetype,
    1: setimagetype
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: image,
    1: setimage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: result,
    1: setresult
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Backimage: {
      src: "",
      cropvalues: {
        width: "",
        height: "",
        x: "",
        y: ""
      }
    },
    Profileimage: {
      src: "",
      cropvalues: {
        width: "",
        height: "",
        x: "",
        y: ""
      }
    }
  });
  const {
    0: iscropperactive,
    1: setcropperactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: userinfo,
    1: setuserinfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    musername: {
      activate: false,
      value: editdata.username,
      label: "Kullanici Adi",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    firstname: {
      activate: false,
      value: editdata.firstname,
      label: "Ad",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    surname: {
      activate: false,
      value: editdata.lastname,
      label: "Soyad",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    personaltext: {
      activate: false,
      value: editdata.personaltext,
      label: "Kisisel Bilgiler",
      warning: false,
      multiline: true,
      msg: "",
      errormsg: ""
    },
    email: {
      activate: false,
      value: editdata.email,
      label: "E-Posta",
      warning: false,
      multiline: false,
      msg: "E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir.",
      errormsg: "Gecerli Bir E-posta adresi girin !"
    },
    Currentpassword: {
      activate: false,
      value: "",
      label: "Eski Sifreniz",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Eski sifreni yanlis girdin galiba, tekrar dene !"
    },
    Newpassword: {
      activate: false,
      value: "",
      label: "Yeni sifrenizi girin",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Make sure that your password has at least 6 length and contains one upper, one lower character and one number."
    },
    ValidationNewpassword: {
      activate: false,
      value: "",
      label: "Yeni sifrenizi tekrar girin",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Girdiginiz sifreler ayni degil"
    },
    Notifications: {
      activate: false,
      value: {
        Whenfollow: {
          value: editdata.Notification.Whenfollow,
          msg: "Biri takip ettiginde"
        },
        Whenlike: {
          value: editdata.Notification.Whenlike,
          msg: "Biri icerik begendiginde"
        },
        Whencomment: {
          value: editdata.Notification.Whencomment,
          msg: "Biri yorum yaptiginda"
        }
      },
      label: "",
      warning: false,
      multiline: false,
      msg: ""
    }
  });
  const {
    0: selectionchilds,
    1: setselectionchilds
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Email: true,
    Password: false,
    Notification: false
  });
  const {
    0: selected,
    1: setselected
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const copy = _objectSpread({}, userinfo);

    for (const key in copy) {
      copy[key].activate = false;
      copy[key].warning = false;
      console.log(copy[key].activate);
    }

    if (isWindowforsettings) {
      if (selected == 1) {
        copy["email"].activate = true;
      } else if (selected == 2) {
        copy["Currentpassword"].activate = true;
        copy["Newpassword"].activate = true;
        copy["ValidationNewpassword"].activate = true;
      } else {
        //selected 3
        copy["Notifications"].activate = true;
      }
    } else {
      if (active) {
        for (const key in copy) {
          if (key == "musername" || key == "personaltext" || key == "firstname" || key == "surname") {
            copy[key].activate = true;
          }
        }
      }
    }

    setuserinfo(copy);
  }, [active, selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setcropperactive(false);
  }, [active]);
  /*
  useEffect(()=>{
       if(src.Backimage !== ""){
         console.log("heyyo")
          const backimg = document.querySelector("#Backimg")
          backimg.addEventListener("load",()=>{
              setimage(backimg)
              console.log(backimg)
          })
     }    
    },[src])
  */

  const Inputerrorhandler = (type, value) => {
    switch (type) {
      case "username":
        break;

      case "firstname":
        break;

      case "email":
        return validator__WEBPACK_IMPORTED_MODULE_11___default.a.isEmail(value);

      case "password":
        console.log(value.New);
        console.log(value.Newvalidation);
        if (value.New !== value.Newvalidation) return {
          state: "Unequal",
          validate: false
        };
        if (!validator__WEBPACK_IMPORTED_MODULE_11___default.a.isStrongPassword(value.New, {
          minSymbols: 0,
          minNumbers: 1,
          minLowercase: 1,
          minUppercase: 1,
          minLength: 6
        })) return {
          state: "Strong",
          validate: false
        };
        return {
          state: "Success",
          validate: true
        };
      //newpassword character checking

      default:
        break;
    }
  };

  const ToCanvas = async () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    const base64Image = canvas.toDataURL("imge/png");
    setresult(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        [imagetype]: {
          src: base64Image,
          cropvalues: {
            x: crop.x,
            y: crop.y,
            width: crop.width,
            height: crop.height
          }
        }
      });
    });
    setcropperactive(false);
  };

  const Inputhandler = (key, event, subkey) => {
    const mutated = _objectSpread({}, userinfo);

    if (key == "Notifications") {
      mutated[key]["value"][subkey]["value"] = !mutated[key]["value"][subkey]["value"];
    } else {
      mutated[key].value = event.target.value;
      mutated[key].warning = false;
    }

    setuserinfo(mutated);
  };

  const Updatefile = (event, type) => {
    if (type == "Backimage") {
      setcrop({
        aspect: 16 / 9,
        height: 200,
        width: 300,
        unit: "px",
        x: 0,
        y: 50
      });
    } else {
      setcrop({
        aspect: 16 / 16,
        height: 200,
        width: 200,
        unit: "px",
        x: 50,
        y: 50
      });
    }

    setimagetype(type);
    setcropperactive(true);
    setsrc(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        [type]: URL.createObjectURL(event.target.files[0])
      });
    });
    setfile(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        [type]: event.target.files[0]
      });
    });
  };

  const updatecrop = newcrop => {
    //buraya bak
    if (crop.aspect > 1) {
      setcrop(res => {
        return _objectSpread(_objectSpread({}, res), {}, {
          y: newcrop.y
        });
      });
    } else {
      setcrop(res => {
        return _objectSpread(_objectSpread({}, res), {}, {
          y: newcrop.y,
          x: newcrop.x
        });
      });
    }

    console.log(crop); //value of cropper width height x and y
  };

  const Sendupdates = async typeofupdate => {
    const values = {};

    const copy = _objectSpread({}, userinfo);

    var updateFor = "";

    if (!isWindowforsettings) {
      console.log("IN UPDATE");
      updateFor = "Profile";
      values.backcrop = result.Backimage.cropvalues;
      values.profile = result.Profileimage.cropvalues;

      for (const key in userinfo) {
        if (key == "email") break;
        values[key] = userinfo[key].value;
      }
    } else if (typeofupdate == 1) {
      updateFor = "Email";

      if (!Inputerrorhandler("email", userinfo["email"].value)) {
        copy["email"].warning = true;
        copy["email"].msg = "Gecerli Bir E-posta adresi girin !";
        return setuserinfo(copy);
      }

      values["email"] = userinfo["email"].value;
    } else if (typeofupdate == 2) {
      updateFor = "Password";
      const {
        state,
        validate
      } = Inputerrorhandler("password", {
        Current: userinfo["Currentpassword"].value,
        New: userinfo["Newpassword"].value,
        Newvalidation: userinfo["ValidationNewpassword"].value
      });

      if (!validate) {
        if (state == "Unequal") {
          copy["ValidationNewpassword"].warning = true;
        } else {
          copy["Newpassword"].warning = true;
        }

        return setuserinfo(copy);
      }

      values["Currentpassword"] = userinfo["Currentpassword"].value;
      values["Newpassword"] = userinfo["Newpassword"].value;
      values["NewValidation"] = userinfo["ValidationNewpassword"].value;
    } else {
      updateFor = "Notification";
      values["Notifications"] = userinfo["Notifications"]["value"];
    }

    const formData = new FormData();

    if (file.Backimage !== "" && file.Profileimage !== "") {
      formData.append("upload", file.Backimage);
      formData.append("upload2", file.Profileimage);
    } else {
      formData.append("upload", file[imagetype]);
    }

    formData.append("Profilevalues", JSON.stringify(values));
    setuploading(true);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_8__["UpdateProfile"])({
      userdata: formData,
      typeofupdate: updateFor,
      setuploading: setuploading,
      setsuccesfulupload: setsuccesfulupload,
      userinfo: userinfo,
      setuserinfo: setuserinfo
    });
  };

  const Selectionhandler = (keyname, index) => {
    const copy = _objectSpread({}, selectionchilds);

    for (const key in copy) {
      copy[key] = false;
    }

    copy[keyname] = true;
    setselected(index + 1);
    setselectionchilds(copy);
  };

  const Iconcreater = keyname => {
    if (keyname == "Email") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Email"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 16
    }, this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 16
    }, this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 16
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        visibility: "hidden",
        position: "absolute"
      },
      id: "Backimg",
      src: src["Backimage"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        visibility: "hidden",
        position: "absolute"
      },
      id: "Profileimg",
      src: src["Profileimage"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileuploadedDiv, {
          successful: succesfulupload == "SUCCESSFUL" ? true : false,
          children: "Profil Basariyla Guncellendi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            top: isWindowforsettings ? "500px" : "250px",
            right: "40px",
            zIndex: "300"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: () => Sendupdates(selected),
            style: {
              textTransform: "capitalize",
              borderRadius: "25px"
            },
            color: "secondary",
            variant: "contained",
            children: [uploading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
              style: {
                marginRight: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 598,
              columnNumber: 46
            }, this) : null, "Kaydet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 596,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 21
        }, this), isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
          children: Object.keys(selectionchilds).map((item, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Childsofselection, {
              innercolor: selectionchilds[item],
              style: {
                color: selectionchilds[item] ? "white" : "white"
              },
              onClick: () => Selectionhandler(item, index),
              children: Iconcreater(item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 45
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 26
        }, this), iscropperactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_image_crop__WEBPACK_IMPORTED_MODULE_6___default.a, {
            onImageLoaded: img => setimage(img),
            style: {
              backgroundColor: "red",
              height: "350px",
              width: "300px"
            },
            imageStyle: {
              height: "350px",
              width: "300px",
              objectFit: "cover"
            },
            src: src[imagetype],
            crop: crop,
            onChange: newcrop => updatecrop(newcrop)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 618,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: () => ToCanvas(),
              color: "secondary",
              variant: "contained",
              children: "Upload the file to server"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage.token ? `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${src.Backimage.name}?alt=media&token=${src.Backimage.token}` : "/yaprak.jpg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 631,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 632,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => Updatefile(e, "Backimage"),
                name: "upload",
                accept: "image/png, image/gif, image/jpeg",
                id: "file",
                type: "file",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 633,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
              isHavingprofile: src.Profileimage.token,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
                profile: src.Profileimage.token ? `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${src.Profileimage.name}?alt=media&token=${src.Profileimage.token}` : "/yaprak.jpg",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                width: "80px",
                height: "80px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                  htmlFor: "file2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 637,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 638,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: e => Updatefile(e, "Profileimage"),
                  accept: "image/png, image/gif, image/jpeg",
                  id: "file2",
                  type: "file",
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 639,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 636,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 635,
              columnNumber: 45
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            isforedit: isWindowforsettings,
            children: [isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Holderforupicon, {
              slipvalue: selected,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowDropUp"], {
                style: {
                  fontSize: "80px",
                  color: "#e9ecef"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 652,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 651,
              columnNumber: 41
            }, this), Object.keys(userinfo).map((item, index) => {
              var subelements = null;

              if (typeof userinfo[item].value == "object") {
                var subelements = Object.keys(userinfo[item].value).map((subitem, subindex) =>
                /*#__PURE__*/
                //sub values of noitification phase
                Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                  displayed: userinfo[item].activate,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      style: {
                        textTransform: "capitalize"
                      },
                      children: userinfo[item]["value"][subitem]["msg"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 665,
                      columnNumber: 61
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      onColor: "#ff002b",
                      andleDiameter: 20,
                      onChange: () => Inputhandler(item, "", subitem),
                      checkedIcon: true,
                      uncheckedIcon: true,
                      checked: userinfo[item]["value"][subitem]["value"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 666,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 664,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 663,
                  columnNumber: 53
                }, this));
              } else {
                subelements = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                  displayed: userinfo[item].activate,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                    error: userinfo[item].warning,
                    multiline: userinfo[item].multiline,
                    rows: 4,
                    onChange: e => Inputhandler(item, e),
                    style: {
                      width: "100%"
                    },
                    label: userinfo[item].label,
                    variant: "outlined",
                    value: userinfo[item].value,
                    helperText: !userinfo[item].warning ? userinfo[item].msg : userinfo[item].errormsg
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 673,
                    columnNumber: 65
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 672,
                  columnNumber: 64
                }, this);
              }

              return subelements;
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 588,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/pages/Profile/contentmap.js":
/*!************************************************!*\
  !*** ./components/pages/Profile/contentmap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\contentmap.js";




function Contentmap({
  contentlist,
  relationfunc,
  norecord
}) {
  console.log(contentlist);
  var textfornorecord = "";

  if (norecord == "Reshow") {
    textfornorecord = "Kullanıcının işaretlediği gönderi yok...";
  } else if (norecord == "Post") {
    textfornorecord = "Kullanıcının hiçbir gönderisi yok...";
  } else if (norecord == "Like") {
    textfornorecord = "Kullanıcının beğendiği gönderi yok...";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: contentlist.length ? contentlist.map((item, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        postId: item.personal ? item.id : item.Content.id,
        like: item.personal ? item.Like : item.Content.Like //bu bir obje array
        ,
        retweet: item.personal ? item.Retweet : item.Content.Retweet,
        readlater: item.personal ? item.Readlater : item.Content.Readlater,
        comment: item.personal ? item.allcomments : item.Content.allcomments,
        profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
        title: item.personal ? item.title : item.Content.title,
        titleimage: "/yaprak.jpg",
        username: item.personal ? item.personal.firstname : item.Content.personal.firstname,
        usersurname: item.personal ? item.personal.lastname : item.Content.personal.lastname //bir obje props
        ,
        createrelationforsmh: relationfunc,
        date: item.personal ? item.createdAt : item.Content.createdAt
      }, uniqid__WEBPACK_IMPORTED_MODULE_3___default()(), false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 34
      }, this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textTransform: "capitalize",
        textAlign: "center",
        marginTop: "20px"
      },
      children: textfornorecord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Contentmap)); //sadece list değiştiginde tekrar render ediliyor

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
})(["padding:", ";padding-left:15px;width:100%;padding-right:15px;flex:1;"], ({
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
  Editcommenthandler,
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
    0: loading_commentedit,
    1: setloading_commentedit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commentanswer,
    1: setcommentanswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: answervalue,
    1: setanswervalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: editcomment,
    1: seteditcomment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commenteditvalue,
    1: setcommenteditvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(content);
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

  const Editcommentactiveness = determiner => {
    if (determiner == "cancel") {
      seteditcomment(false);
      setcommenteditvalue(content);
      return;
    } else if (determiner == "save") {
      setloading_commentedit(true);
      Editcommenthandler({
        message: commenteditvalue,
        commentID: postId,
        setloading: setloading_commentedit
      });
    }

    seteditcomment(true);
    setvisible(false); //turning off option window

    setcommentanswer(false); //turning off other things
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
        lineNumber: 370,
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
          lineNumber: 372,
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
          lineNumber: 373,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 16
    }, this) : null, //Comment Left Icon
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
      lineNumber: 381,
      columnNumber: 28
    }, this) : null, //Options on top right
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
        lineNumber: 390,
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
              lineNumber: 398,
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
                lineNumber: 400,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 397,
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
              lineNumber: 405,
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
                lineNumber: 407,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 396,
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
            lineNumber: 416,
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
              lineNumber: 418,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 388,
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
        lineNumber: 432,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: userid == userdata.UserId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            onClick: Editcommentactiveness,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Edit"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Duzenle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 443,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Delete"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Yorumu Sil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 33
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 457,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 431,
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
              lineNumber: 477,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 25
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
              lineNumber: 481,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 74
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
              lineNumber: 482,
              columnNumber: 113
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 494,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: editcomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            InputProps: {
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputAdornment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                  disabled: loading_commentedit,
                  startIcon: loading_commentedit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 509,
                    columnNumber: 117
                  }, this) : null,
                  onClick: () => Editcommentactiveness("save"),
                  style: {
                    backgroundColor: loading_commentedit ? "lightgrey" : "#e63946",
                    color: "white",
                    textTransform: "capitalize",
                    position: "relative",
                    bottom: "10px",
                    marginRight: "5px"
                  },
                  variant: "contained",
                  size: "small",
                  children: "Kaydet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 509,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                  onClick: () => Editcommentactiveness("cancel"),
                  color: "primary",
                  style: {
                    textTransform: "capitalize",
                    position: "relative",
                    bottom: "10px"
                  },
                  variant: "contained",
                  size: "small",
                  children: "iptal"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 512,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 508,
                columnNumber: 41
              }, this)
            },
            style: {
              width: "100%"
            },
            onChange: e => setcommenteditvalue(e.target.value),
            value: commenteditvalue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 37
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "break-word"
            },
            children: commenteditvalue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 523,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 502,
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
            lineNumber: 532,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/content/[id]",
            as: `/content/${postId}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                textAlign: "left",
                wordBreak: "break-word",
                cursor: "pointer"
              },
              children: "While the Crypto Professors may set specific requirements for some...."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 531,
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
              lineNumber: 545,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["reshow"].array, "Reshow"),
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 544,
            columnNumber: 29
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
              lineNumber: 550,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: () => showwindow(elements["Like"].array, "Like"),
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 549,
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
              lineNumber: 557,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 553,
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
              lineNumber: 566,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 565,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 541,
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
                  lineNumber: 577,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 363,
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

/***/ "./containers/pages/Profile.js":
/*!*************************************!*\
  !*** ./containers/pages/Profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_pages_Profile_contentmap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pages/Profile/contentmap */ "./components/pages/Profile/contentmap.js");
/* harmony import */ var _components_pages_Profile_Editwindow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/pages/Profile/Editwindow */ "./components/pages/Profile/Editwindow.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Exteriordiv",
  componentId: "sc-1uvdthm-0"
})(["max-width:1400px;padding-top:60px;width:100%;height:100vh;overflow:", ";padding-bottom:20px;padding-left:60px;@media (max-width:940px){padding-left:0;}"], ({
  editactive
}) => editactive ? "hidden" : "visible");
const Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Innerdiv",
  componentId: "sc-1uvdthm-1"
})(["height:100%;"]);
const Imagesection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Imagesection",
  componentId: "sc-1uvdthm-2"
})(["position:relative;height:250px;position:relative;"]);
const ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__ProfileImageholder",
  componentId: "sc-1uvdthm-3"
})(["position:absolute;width:120px;height:120px;top:-120px;left:140px;@media (max-width:1050px){position:absolute;width:90px;height:90px;top:-100px;left:160px;color:White;}"]);
const BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__BackgroundImage",
  componentId: "sc-1uvdthm-4"
})(["width:100%;height:100%;background-image:url(/yaprak.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
const Contentpart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Contentpart",
  componentId: "sc-1uvdthm-5"
})(["display:flex;padding-bottom:20px;"]);
const Usersection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Usersection",
  componentId: "sc-1uvdthm-6"
})(["position:sticky;top:250px;margin-top:80px;align-self:flex-start;max-width:400px;text-align:center;width:100%;@media (max-width:1050px){position:absolute;left:50%;transform:translateX(-50%);top:100px;color:White;}"]);
const Contentsection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Contentsection",
  componentId: "sc-1uvdthm-7"
})(["max-width:1000px;width:100%;"]);
const Optionbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Optionbar",
  componentId: "sc-1uvdthm-8"
})(["display:flex;justify-content:space-around;margin:auto;max-width:500px;width:100%;padding:20px;"]);
const Options = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Options",
  componentId: "sc-1uvdthm-9"
})(["cursor:pointer;transition:all 0.1s;font-weight:600;color:", ";"], ({
  applyborder
}) => applyborder ? "#d62828" : "black");
const ButtonHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__ButtonHolder",
  componentId: "sc-1uvdthm-10"
})(["display:flex;align-items:center;position:absolute;bottom:10px;right:10px;"]);
const P = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Profile__P",
  componentId: "sc-1uvdthm-11"
})(["font-weight:600;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Profile__Description",
  componentId: "sc-1uvdthm-12"
})(["width:80%;margin:auto;@media (max-width:1050px){display:none;}"]);
function Profile({
  Mydata,
  Counts,
  Contentdata,
  query
}) {
  //use reducer try on it
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  const Preventspam = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  const Preventspam2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  const {
    bottom
  } = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    0: contentdata,
    1: setcontentdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Contentdata);
  const {
    0: order,
    1: setorder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const {
    0: profiledata,
    1: setprofiledata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Mydata);
  const {
    0: checkuserid,
    1: setcheckuserid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: beingfollowed,
    1: setbeingfollowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: Timetorender,
    1: settimetorender
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: notificationactive,
    1: setnotificationactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeedit,
    1: setactiveedit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: editforsettings,
    1: seteditforsettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: options,
    1: setoptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Post: {
      name: "Gönderiler",
      bottom: false
    },
    Like: {
      name: "Beğeniler",
      bottom: false
    },
    Reshow: {
      name: "İşaretler",
      bottom: false
    }
  });
  console.log(Mydata);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //sadece paignation zaten query değişince ilk 10 value serverside tarafından çekiliyor
    var Leakcontrolloer = true;
    var Requestpermission = false; //sadece scroll down oldugunda

    if (Requestpermission) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Getuserprofilecontent"])({
        UserId: query.username,
        category: query.name,
        setdata: setcontentdata,
        setspinner: setspinner,
        paignation: false,
        ownerpost: query.name == "Post" ? "true" : "false",
        Leakcontrolloer: Leakcontrolloer,
        order: 10,
        currentdata: contentdata
      });
    }

    return () => {
      Leakcontrolloer = false;
    };
  }, [bottom]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const optionobj = _objectSpread({}, options);

    optionobj[query.name].bottom = true;
    setoptions(optionobj);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userdata.UserId) {
      settimetorender(true);
      setcheckuserid(false);
      console.log(query.username);

      if (userdata.UserId == query.username) {
        setcheckuserid(true); //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.
      } else {
        Mydata.Followed.forEach(item => {
          if (item.id == userdata.UserId) {
            if (item.UserUser.Active == true) {
              setnotificationactive(true);
            }

            setbeingfollowed(true); //zaten buraya girememiş ise default değer false
          }
        });
      }
    }
  }, [userdata, query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setprofiledata(_objectSpread({}, Mydata));
    setcontentdata([...Contentdata]);
  }, [query]); //

  const Relationrequest = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((postId, attribute, typeofrelation, userid) => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  }, [userdata.UserId]); //sending following request

  const Followingrequest = () => {
    //todo response gelene kadar bekle hamleye izin verme
    if (Preventspam2.current) {
      Preventspam2.current = false;
      setbeingfollowed(!beingfollowed);

      if (userdata.UserId) {
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createuserrelation"])({
          UserId: userdata.UserId,
          FollowedId: Mydata.id,
          checkiffollow: beingfollowed,
          Prevent: Preventspam2
        });
      }
    }
  }; //Aactivate notification bell


  const NotificationActivate = () => {
    if (Preventspam.current) {
      Preventspam.current = false;
      setnotificationactive(!notificationactive);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["UpdateNotificationactive"])({
        FollowerId: userdata.UserId,
        FollowedId: Mydata.id,
        currentactive: notificationactive,
        Prevent: Preventspam
      });
    }
  }; //handling sorting bar


  const Handleoptions = optiontype => {
    const optionobj = _objectSpread({}, options);

    for (const key in optionobj) {
      optionobj[key].bottom = false;
    }

    optionobj[optiontype].bottom = true;
    setoptions(optionobj);
  };

  const Editwindowhandler = (isforedit, close) => {
    if (isforedit) {
      seteditforsettings(true);
    }

    if (close) {
      seteditforsettings(false);
    }

    setactiveedit(!activeedit);
  };
  /*
  const Profileupdate = () =>{
        UpdateProfile({
          
      })
  }
  */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    editactive: activeedit,
    children: [activeedit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Profile_Editwindow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      isWindowforsettings: editforsettings,
      closefunc: () => Editwindowhandler(false, true),
      editdata: Mydata,
      active: activeedit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 18
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagesection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundImage, {
          ImageforBack: "/way.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 21
        }, this), //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
        //TODO this should be fixed during navigaiton
        //userdata.userıd yoksa kullanıcı giriş yapmamıştır
        !checkuserid && Timetorender ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: [beingfollowed && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            children: notificationactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["NotificationsActive"], {
              style: {
                color: "white",
                marginRight: "10px",
                cursor: "pointer"
              },
              onClick: NotificationActivate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 46
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Notifications"], {
              style: {
                color: "white",
                marginRight: "10px",
                cursor: "pointer"
              },
              onClick: NotificationActivate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            onClick: () => Followingrequest(beingfollowed),
            style: {
              color: "white",
              backgroundColor: "#0ead69",
              textTransform: "none"
            },
            variant: "contained",
            children: beingfollowed ? "Takipten Çık" : "Takip Et"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 30
        }, this) : Timetorender && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            onClick: () => Editwindowhandler(true, false),
            style: {
              borderRadius: "25px",
              marginRight: "10px"
            },
            variant: "contained",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Settings"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 154
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            onClick: () => Editwindowhandler(false, false),
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Person"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 95
            }, this),
            variant: "contained",
            style: {
              color: "white",
              backgroundColor: "#e63946",
              textTransform: "none",
              borderRadius: "25px"
            },
            children: "Profili Duzenle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Usersection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
              style: {
                border: "4px solid white"
              },
              width: "100%",
              height: "100%",
              profile: "/car.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              marginTop: "10px",
              marginBottom: "40px",
              justifyContent: "space-around"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followedcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 22
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentsection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionbar, {
            children: Object.keys(options).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: {
                pathname: `/profile/${query.username}`,
                query: {
                  name: `${item}`
                }
              },
              scroll: false,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
                applyborder: options[item].bottom,
                onClick: () => Handleoptions(item),
                children: options[item].name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 39
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 36
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingRight: "10px",
              paddingLeft: "10px",
              maxWidth: "700px",
              margin: "auto"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Profile_contentmap__WEBPACK_IMPORTED_MODULE_11__["default"], {
              norecord: query.name,
              relationfunc: Relationrequest,
              contentlist: Contentdata
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 329,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useClickoutside() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: visible,
    1: setvisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  console.log("sa");

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
  }, []);
  return {
    visible,
    setvisible,
    ref
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useClickoutside);

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

/***/ "./node_modules/react-image-crop/dist/ReactCrop.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/profile/[username]/index.js":
/*!*******************************************!*\
  !*** ./pages/profile/[username]/index.js ***!
  \*******************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stuff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../containers/Layout/mainlayout */ "./containers/Layout/mainlayout.js");
/* harmony import */ var _containers_pages_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/pages/Profile */ "./containers/pages/Profile.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\profile\\[username]\\index.js";






function Stuff({
  profile,
  counts,
  contents,
  getquery
}) {
  console.log(profile);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap&family=Amiri&display=swap&family=Poppins:ital,wght@1,300&display=swap&family=Inter:wght@700&display=swap&family=Roboto:wght@700&display=swap&family=Bebas+Neue&display=swap",
        rel: "stylesheet",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Counts: counts,
      Mydata: profile,
      query: getquery,
      Contentdata: contents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
async function getServerSideProps({
  query
}) {
  try {
    const recieve = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.all([axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`user/getuserprofile/${query.username}`), axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`user/getusercount/${query.username}`), axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`user/getuserprofilecontent/${query.username}/${query.name == "Post" ? "true" : "false"}/${query.name}/10`)]);

    if (recieve[0].data && recieve[0].data.error || recieve[1].data && recieve[1].data.error) {
      s;
      return {
        redirect: {
          destination: "/500"
        }
      };
    } //404


    if (recieve[0].data.userdata == null) {
      return {
        redirect: {
          destination: "/404.js"
        }
      };
    }

    ;
    return {
      props: {
        profile: recieve[0].data.userdata,
        counts: recieve[1].data.data,
        contents: recieve[2].data.data,
        getquery: query
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

Stuff.layout = children => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, undefined);
};

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

/***/ "react-image-crop":
/*!***********************************!*\
  !*** external "react-image-crop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

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

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2ZpbGUvRWRpdHdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2ZpbGUvY29udGVudG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9MZWZ0dG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9udG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL0NsaWtjb3V0aXNkZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsc2Z1bmMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1jcm9wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmlxaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdG9yXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsImxvZ291dCIsImdldCIsImxvZ2dlZCIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJ0eXBlb2ZzdWJtaXQiLCJwcm9jZXNzdHlwZSIsIlByb2R1Y2Vjb21tZW50cmVxIiwiTWVzc2FnZSIsIlRha2VySWQiLCJzZXRudW1iZXJjb20iLCJVc2VySWQiLCJDb250ZW50SWQiLCJwcmV2IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldHN0b3ByZXEiLCJjYXRlZ29yeSIsInBhaWduYXRpb24iLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9uIiwibGVuZ3RoIiwic2VsZWN0aW9ucyIsInN0b3ByZXF1ZXN0aW5nIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwiUm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50Iiwib3duZXJwb3N0IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJQcmV2ZW50IiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJOb3RpZmljYXRpb25yZXEiLCJzZXRuYXZkYXRhIiwibmF2ZGF0YSIsImxhc3Ryb3ciLCJNeWN1cnJlbnRkYXRhIiwiTmV3ZGF0YSIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwic2V0Y291bnRkYXRhIiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJpbnB1dHZhbHVlIiwic2V0dXNlcnMiLCJzZXRub3RoaW5nZm91bmQiLCJEZWxldGVQb3N0Iiwic3VjY2VzcyIsIkNvbW1lbnRhbnN3ZXJyZXEiLCJVcHBlcmNvbW1lbnRJZCIsIkFuc3dlciIsIkNvbW1lbnRJZCIsIlVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSIsImN1cnJlbnRhY3RpdmUiLCJzdGF0ZSIsIlVwZGF0ZVByb2ZpbGUiLCJ0eXBlb2Z1cGRhdGUiLCJzZXR1cGxvYWRpbmciLCJzZXRzdWNjZXNmdWx1cGxvYWQiLCJ1c2VyaW5mbyIsInNldHVzZXJpbmZvIiwiY29weSIsIndhcm5pbmciLCJFZGl0Y29tbWVudCIsImNvbW1lbnRJRCIsIm1lc3NhZ2UiLCJzZXRsb2FkaW5nIiwiSWNvbnNwYW4iLCJzdHlsZWQiLCJzcGFuIiwid2lkdGgiLCJtaWRkbGUiLCJoZWlnaHQiLCJjb2xvciIsImJhY2tjb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibGluZWhlaWdodCIsImhvdmVyY29sb3IiLCJob3ZlcmJhY2siLCJyb3RhdGUiLCJ6aW5kZXgiLCJTdWJ0ZXh0IiwicCIsIkljb24iLCJjbGFzc05hbWUiLCJJY29uY29uZmlnIiwiYWN0aXZlZnVuYyIsIkV4dGVyaW9yIiwiZGl2IiwiYWN0aXZlIiwiZ2V0Y3JvcHBlciIsIklubmVyIiwiQmFja2dyb3VuZCIsIkltYWdlZm9yQmFjayIsIlByb2ZpbGVJbWFnZWhvbGRlciIsIklucHV0aG9sZGVyIiwiZGlzcGxheWVkIiwiSW5mb3JtYXRpb24iLCJpc2ZvcmVkaXQiLCJMYWJlbGltYWdlIiwibGFiZWwiLCJTZWxlY3Rpb25iYXIiLCJDaGlsZHNvZnNlbGVjdGlvbiIsImlubmVyY29sb3IiLCJIb2xkZXJmb3J1cGljb24iLCJzbGlwdmFsdWUiLCJQcm9maWxldXBsb2FkZWREaXYiLCJzdWNjZXNzZnVsIiwiRWRpdHdpbmRvdyIsImlzV2luZG93Zm9yc2V0dGluZ3MiLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJiYWNrZ3JvdW5kdXJsIiwiZmlsZSIsInNldGZpbGUiLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImNyb3AiLCJzZXRjcm9wIiwiYXNwZWN0IiwieCIsInkiLCJzcmMiLCJzZXRzcmMiLCJpbWFnZXRva2VuIiwibmFtZSIsImJhY2tncm91bmR0b2tlbiIsInVwbG9hZGluZyIsInN1Y2Nlc2Z1bHVwbG9hZCIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJjcm9wdmFsdWVzIiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ1c2VybmFtZSIsIm11bHRpbGluZSIsIm1zZyIsImVycm9ybXNnIiwic3VybmFtZSIsInBlcnNvbmFsdGV4dCIsImVtYWlsIiwiQ3VycmVudHBhc3N3b3JkIiwiTmV3cGFzc3dvcmQiLCJWYWxpZGF0aW9uTmV3cGFzc3dvcmQiLCJOb3RpZmljYXRpb25zIiwiV2hlbmZvbGxvdyIsIk5vdGlmaWNhdGlvbiIsIldoZW5saWtlIiwiV2hlbmNvbW1lbnQiLCJzZWxlY3Rpb25jaGlsZHMiLCJzZXRzZWxlY3Rpb25jaGlsZHMiLCJFbWFpbCIsIlBhc3N3b3JkIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImtleSIsIklucHV0ZXJyb3JoYW5kbGVyIiwidHlwZSIsIlZhbGlkYXRlIiwiaXNFbWFpbCIsIk5ldyIsIk5ld3ZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsImlzU3Ryb25nUGFzc3dvcmQiLCJtaW5TeW1ib2xzIiwibWluTnVtYmVycyIsIm1pbkxvd2VyY2FzZSIsIm1pblVwcGVyY2FzZSIsIm1pbkxlbmd0aCIsIlRvQ2FudmFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2NhbGVYIiwibmF0dXJhbFdpZHRoIiwic2NhbGVZIiwibmF0dXJhbEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJiYXNlNjRJbWFnZSIsInRvRGF0YVVSTCIsIklucHV0aGFuZGxlciIsImV2ZW50Iiwic3Via2V5IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwidXBkYXRlRm9yIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwiekluZGV4IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJ0ZXh0QWxpZ24iLCJpbWciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3RGaXQiLCJlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwic3ViZWxlbWVudHMiLCJzdWJpdGVtIiwic3ViaW5kZXgiLCJDb250ZW50bWFwIiwiY29udGVudGxpc3QiLCJyZWxhdGlvbmZ1bmMiLCJub3JlY29yZCIsInRleHRmb3Jub3JlY29yZCIsInBlcnNvbmFsIiwiQ29udGVudCIsIkxpa2UiLCJSZXR3ZWV0IiwiUmVhZGxhdGVyIiwiYWxsY29tbWVudHMiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsInVuaXFpZCIsIm1hcmdpblRvcCIsIlJlYWN0IiwibWVtbyIsIkxpa2VhbmltYXRvbiIsImtleWZyYW1lcyIsIk91dHNpZGVkaXYiLCJkcmFmdCIsImlzY29tbWVudCIsIlNvZnRjb3ZlciIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlNlY29uZFBhcnQiLCJmb3J1c2VyIiwiVG9vbGJhciIsIkltZyIsIlNwYW5mb3IiLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJhbmltYXRpb24iLCJPcHRpb253aW5kb3ciLCJPcHRpb25ob2xkZXIiLCJEcmFmdGhvbGRlciIsIlByb2ZpbGVpbWFnZWhvbGRlciIsIkNvbnRlbnRjYXJkIiwiaW1hZ2VmaWxlbmFtZSIsIkVkaXRjb21tZW50aGFuZGxlciIsIkNoaWxkbGVuZ3RoIiwiQW5zd2VyaGFuZGxlciIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsImNvbnRlbnQiLCJ0aXRsZWltYWdlIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwiZWxlbWVudHMiLCJzZXRlbGVtZW50cyIsIm51bWJlciIsImFycmF5IiwicmVzaG93IiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJ1c2VDbGlja291dHNpZGUiLCJsb2FkaW5nX2NvbW1lbnRlZGl0Iiwic2V0bG9hZGluZ19jb21tZW50ZWRpdCIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwiYW5zd2VydmFsdWUiLCJzZXRhbnN3ZXJ2YWx1ZSIsImVkaXRjb21tZW50Iiwic2V0ZWRpdGNvbW1lbnQiLCJjb21tZW50ZWRpdHZhbHVlIiwic2V0Y29tbWVudGVkaXR2YWx1ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZVJvdXRlciIsInRleHRmb3JvcGl0b24iLCJjdXJyZW50ZWxlbWVudHMiLCJmb3JFYWNoIiwidXNlciIsIkluZGV4b2ZjdXJyZW50dXNlciIsImZpbmRJbmRleCIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsIkVkaXRjb21tZW50YWN0aXZlbmVzcyIsImRldGVybWluZXIiLCJNYWtlYWNvbW1lbnQiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsInBhdGhuYW1lIiwicXVlcnkiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJlbmRBZG9ybm1lbnQiLCJ3b3JkQnJlYWsiLCJtYXJnaW5Cb3R0b20iLCJjdXJzb3IiLCJmbGV4Iiwic3R5bGUiLCJFeHRlcmlvckRpdiIsIklubmVyRGl2IiwiSW1hZ2VEaXYiLCJOYXZpZ2F0aW9uRGl2IiwiUmlnaHRzaWRlZGVzYyIsIlNwYW5mb3JkZXNjIiwibGVmdGJhcmFjdGl2ZSIsIkxpIiwibGkiLCJDbG9zZW9wZW4iLCJMZWZ0dG9vbGJhciIsIm1ha2VhY3RpdmUiLCJteWFjdGl2ZSIsImZpcnN0bGlzdCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwicGF0aCIsInNlY29uZGxpc3QiLCJ0aGlyZGxpc3QiLCJteWxpIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmRlZmluZWQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZyIsImZsZXhEaXJlY3Rpb24iLCJyb3RhdGUzNjAiLCJTcGlubmVyIiwiTmF2YmFyZXh0IiwiSW5uZXJOYXZiYXIiLCJJY29uaG9sZGVyIiwiY2xpY2tlZCIsIklucHV0SG9sZGVyIiwiZmxleDIiLCJJbnB1dCIsImlucHV0IiwiSWNvbnNlY3VyZSIsImZvcm5vdGlmeSIsIklubmVyb3B0aW9uIiwiU2VhcmNoZGl2IiwiU2VhcmNoZWxlbWVudHMiLCJOYXZpZ2F0aW9uIiwiRGF0YSIsIkNvdW50IiwiUmVsb2FkZnVuYyIsIlVwZGF0ZSIsInNwaW5uZXIiLCJ1c2VDbGlja291dHNpZSIsInJlZjIiLCJ2aXNpYmxlMiIsInNldHZpc2libGUyIiwic2V0aW5wdXR2YWx1ZSIsInVzZXJzZm9yc2VhcmNoIiwic2V0dXNlcnNmb3JzZWFyY2giLCJzZWFyY2hhY3RpdmUiLCJzZXRzZWFyY2hhY3RpdmUiLCJNeXJlZiIsIm9yZGVybnVtYmVyIiwic2V0b3JkZXJudW1iZXIiLCJJY29udW1iZXIiLCJzZXTEsWNvbm51bWJlciIsIkljb25vYmplY3QiLCJzZXRJY29ub2JqZWN0Iiwib25vZmYiLCJzaG9ydCIsIk9uY2VyZXF1ZXN0ZWQiLCJMb2dvdXQiLCJLZXl1cGZ1bmN0aW9uIiwiU2Nyb2xsdG9Cb3R0b20iLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJDaGFuZ2VoYW5kbGVyIiwiSWNvbnNlbGVjdCIsImljb25udW1iZXIiLCJteW9iamVjdCIsIkljb25jbGljayIsInNob3J0bmFtZSIsInNlYXJjaHR5cGUiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJSaWdodCIsInBhZGRpbmdMZWZ0IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJPcHRpb24xZGl2IiwiY2hlY2siLCJOYXZpZ2F0aW9udG9vbHMiLCJvcHRudW1iZXIiLCJvcHRuYW1lIiwiTmF2ZGF0YSIsInRvZ2dsZSIsInNldHRvZ2xlIiwiTXlvcHRpb24iLCJBdHRyaXVidGVhcnJheSIsImlkbmFtZSIsImxoIiwiaHJlZiIsIm15aXRlbW9iaiIsIkZhY2VjaGVjayIsIlVzZXIiLCJCdXR0b24iLCJidXR0b24iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlBvcmZpbGVpbWFnZSIsIkJsYWNrIiwiYWt0aWYiLCJCaWdkaXYiLCJHb3VwaWNvbiIsInVwIiwic29ja2V0IiwiaW8iLCJNYWlubGF5b3V0IiwiY2hpbGRyZW4iLCJnb3VwIiwic2V0Z291cCIsImNvdW50b2ZkYXRhIiwibGFzdHJlY29yZCIsInNldGxhc3RyZWNvcmQiLCJsYXN0cmVjb3JkYWN0aXZlIiwic2V0bGFzdHJlY29yZGFjdGl2ZSIsInVzZXJvdXRlciIsImVtaXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwibGlzdGVuZXIiLCJvbiIsIlJlbG9hZG5hdiIsIlVwZGF0ZWNvdW50Iiwic2Nyb2xsVG8iLCJFeHRlcmlvcmRpdiIsImVkaXRhY3RpdmUiLCJJbm5lcmRpdiIsIkltYWdlc2VjdGlvbiIsIkJhY2tncm91bmRJbWFnZSIsIkNvbnRlbnRwYXJ0IiwiVXNlcnNlY3Rpb24iLCJDb250ZW50c2VjdGlvbiIsIk9wdGlvbmJhciIsIk9wdGlvbnMiLCJhcHBseWJvcmRlciIsIkJ1dHRvbkhvbGRlciIsIlAiLCJEZXNjcmlwdGlvbiIsIlByb2ZpbGUiLCJDb3VudHMiLCJDb250ZW50ZGF0YSIsIlByZXZlbnRzcGFtIiwiUHJldmVudHNwYW0yIiwidXNlU2Nyb2xsIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwiYWN0aXZlZWRpdCIsInNldGFjdGl2ZWVkaXQiLCJlZGl0Zm9yc2V0dGluZ3MiLCJzZXRlZGl0Zm9yc2V0dGluZ3MiLCJvcHRpb25zIiwic2V0b3B0aW9ucyIsIlBvc3QiLCJSZXNob3ciLCJMZWFrY29udHJvbGxvZXIiLCJSZXF1ZXN0cGVybWlzc2lvbiIsIm9wdGlvbm9iaiIsIkZvbGxvd2VkIiwiVXNlclVzZXIiLCJBY3RpdmUiLCJSZWxhdGlvbnJlcXVlc3QiLCJ1c2VDYWxsYmFjayIsInR5cGVvZnJlbGF0aW9uIiwiRm9sbG93aW5ncmVxdWVzdCIsIk5vdGlmaWNhdGlvbkFjdGl2YXRlIiwiSGFuZGxlb3B0aW9ucyIsIm9wdGlvbnR5cGUiLCJFZGl0d2luZG93aGFuZGxlciIsImNsb3NlIiwiYm9yZGVyIiwiRm9sbG93ZWRjb3VudCIsIkZvbGxvd2VyY291bnQiLCJDb250ZW50Y291bnQiLCJtYXJnaW4iLCJtYXhXaWR0aCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImFsbG93YWN0aW9uIiwiZHJhZnRpZCIsInNldGRyYWZ0aWQiLCJnZXRJdGVtIiwiaGFuZGxlY2xpY2siLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRib3R0b20iLCJpbm5lckhlaWdodCIsImJvZHkiLCJiZWhhdmlvciIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvZmYiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiU3R1ZmYiLCJjb3VudHMiLCJjb250ZW50cyIsImdldHF1ZXJ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVjaWV2ZSIsImF4aW91cyIsInMiLCJyZWRpcmVjdCIsImxheW91dCIsInByZXZpb3VzZGF0ZSIsIlByZXZkYXRlIiwiZGlmZmVyZW5jZSIsImFicyIsIm5vdyIsInNlY29uZCIsImNlaWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FB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Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJwYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCJcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcbiAgICBcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMoe3NldHNwaW5uZXIsc2V0dXNlcmRhdGEsc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9sb2dvdXRcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpXHJcbiAgICAgIHNldHVzZXJkYXRhKHt9KVxyXG4gICAgICBzZXRzcGlubmVyKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuICAgICAgICBzZWxlY3Rpb25zW2NhdGVnb3J5XS5zdG9wcmVxdWVzdGluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0c2VsZWN0aW9uKHNlbGVjdGlvbmxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcHBlZCByZXF1ZXN0XCIpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYocGFpZ25hdGlvbil7XHJcblxyXG4gICAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICAgIHNldGNvbnRlbnRkYXRhKE15ZGF0YSlcclxuIFxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgIHJldHVybiBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhNeWRhdGEpXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWQsc2V0YWxsb3dhY3Rpb259KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEuUm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7ICBcclxuICAgICAgc2V0YWxsb3dhY3Rpb24odHJ1ZSk7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRzcGlubmVyLHNldGRhdGEsY2F0ZWdvcnksVXNlcklkLG93bmVycG9zdCxvcmRlcn0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09IGF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZWNvbnRlbnQvJHtVc2VySWR9LyR7b3duZXJwb3N0fS8ke2NhdGVnb3J5fS8ke29yZGVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShbLi4uZGF0YS5kYXRhXSlcclxuICAgICAgIHNldHNwaW5uZXIoZmFsc2UpXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxQcmV2ZW50LEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBcclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3QgPSBhc3luYyh7UG9zdElkLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJ1c2VyL2RlbGV0ZXBvc3RcIix7XHJcbiAgICAgIFBvc3RJZDpQb3N0SWRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudGFuc3dlcnJlcSA9IGFzeW5jKHtVcHBlcmNvbW1lbnRJZCxBbnN3ZXIsVXNlcklkLHNldGVycm1zZyxzZXR3aW5kb3csQ29udGVudElkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiY29tbWVudC9wcm9kdWNlYW5zd2VyXCIse1xyXG4gICAgICBDb21tZW50SWQ6VXBwZXJjb21tZW50SWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIE1lc3NhZ2U6QW5zd2VyLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUgPSBhc3luYyAoe0ZvbGxvd2VkSWQsUHJldmVudCxGb2xsb3dlcklkLGN1cnJlbnRhY3RpdmUsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL3VwZGF0ZXVzZXJub3QvJHtGb2xsb3dlcklkfS8ke0ZvbGxvd2VkSWR9LyR7Y3VycmVudGFjdGl2ZX1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG5cclxuICAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdGUpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59Ly91c2VyIGFsZXJ0IGFjdGl2YXRlZCBvciBub3RcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVQcm9maWxlID0gYXN5bmMgKHt1c2VyZGF0YSx0eXBlb2Z1cGRhdGUsc2V0dXBsb2FkaW5nLHNldHN1Y2Nlc2Z1bHVwbG9hZCx1c2VyaW5mbyxzZXR1c2VyaW5mb30pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvdXNlci91cGRhdGVwcm9maWxlLyR7dHlwZW9mdXBkYXRlfWAsdXNlcmRhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWRhdGEuc3RhdGUpe1xyXG5cclxuICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgICAgICBjb3B5W1wiQ3VycmVudHBhc3N3b3JkXCJdLndhcm5pbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgc2V0c3VjY2VzZnVsdXBsb2FkKFwiU1VDQ0VTU0ZVTFwiKVxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0c3VjY2VzZnVsdXBsb2FkKFwiXCIpXHJcbiAgICAgICAgICAgICAgfSwzMDAwKTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0dXBsb2FkaW5nKGZhbHNlKVxyXG5cclxuICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIkVSUk9SXCIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdGNvbW1lbnQgPSBhc3luYyh7Y29tbWVudElELG1lc3NhZ2Usc2V0bG9hZGluZ30pPT57XHJcblxyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvY29tbWVudC9FZGl0Q29tbWVudGAse2NvbW1lbnRJRDpjb21tZW50SUQsbWVzc2FnZTptZXNzYWdlfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG5cclxuICAgICAgICBpZihkYXRhLnN0YXRlID09IFwiU1VDQ0VTU1wiKXtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRsb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSBcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEljb25zcGFuPXN0eWxlZC5zcGFuKCh7d2lkdGgsbWlkZGxlLGhlaWdodCxjb2xvcixiYWNrY29sb3IscG9zaXRpb24sdG9wLGxlZnQscmlnaHQsYm90dG9tLGxpbmVoZWlnaHQsaG92ZXJjb2xvcixob3ZlcmJhY2sscm90YXRlLHppbmRleH0pPT5gXHJcbnBvc2l0aW9uOiR7cG9zaXRpb259O1xyXG50b3A6JHt0b3B9O1xyXG5sZWZ0OiR7bGVmdH07XHJcbnJpZ2h0OiR7cmlnaHR9O1xyXG5ib3R0b206JHtib3R0b219O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuZGlzcGxheTpibG9jaztcclxubGluZS1oZWlnaHQ6JHtsaW5laGVpZ2h0fTtcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuY29sb3I6JHtjb2xvcn07XHJcbnotaW5kZXg6JHt6aW5kZXh9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNmb3JtOnJvdGF0ZSgke3JvdGF0ZSA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKCR7bWlkZGxlID8gXCItNTAlXCIgOiBcIjBcIn0sJHttaWRkbGUgPyBcIi01MCVcIiA6IFwiMFwifSk7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuIGNvbG9yOiR7aG92ZXJjb2xvcn07XHJcbn1cclxuYClcclxuXHJcbmNvbnN0IFN1YnRleHQgPSBzdHlsZWQucGBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oe2NsYXNzTmFtZSxJY29uY29uZmlnLGFjdGl2ZWZ1bmN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJY29uc3BhbiBvbkNsaWNrPXthY3RpdmVmdW5jfSB7Li4uSWNvbmNvbmZpZ30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+PC9pPlxyXG4gICAgICAgICAgICA8L0ljb25zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcCxFbWFpbCxMb2NrLE5vdGlmaWNhdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZSxTcGlubmVyfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtVcGRhdGVQcm9maWxlfSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuaW1wb3J0IFZhbGlkYXRlIGZyb20gXCJ2YWxpZGF0b3JcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5cclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbm92ZXJmbG93OmF1dG87XHJcbmhlaWdodDo1ODBweDtcclxuYFxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IFxyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxuei1pbmRleDoxO1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiI2U5ZWNlZlwiIDogXCJ3aGl0ZVwifTtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG4vL3NlbGVjdGlvbiBiYXIgZm9yIGVkaXRpbmdcclxuY29uc3QgU2VsZWN0aW9uYmFyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5oZWlnaHQ6MzBweDtcclxubWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5gXHJcblxyXG5jb25zdCBDaGlsZHNvZnNlbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG50b3A6JHsoe2lubmVyY29sb3J9KT0+aW5uZXJjb2xvciA/IFwiMTBweFwiIDogXCIwXCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpbm5lcmNvbG9yfSk9PmlubmVyY29sb3IgPyBcIiM3ZGUyZDFcIiA6IFwiI2ZmMGE1NFwifTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG53aWR0aDozOHB4O1xyXG5oZWlnaHQ6MzhweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4xOHM7XHJcbnBhZGRpbmc6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBIb2xkZXJmb3J1cGljb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzO1xyXG50b3A6LTQ1cHg7XHJcbmxlZnQ6JHsoe3NsaXB2YWx1ZX0pPT57XHJcbiAgICBpZihzbGlwdmFsdWUgPT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIFwiNTVweFwiXHJcbiAgICB9ZWxzZSBpZihzbGlwdmFsdWUgPT0gMil7XHJcbiAgICAgICAgcmV0dXJuIFwiMjUwcHhcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiNDQwcHhcIlxyXG4gICAgfVxyXG59fTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZXVwbG9hZGVkRGl2ID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxudG9wOjUwMHB4O1xyXG5vcGFjaXR5OiR7KHtzdWNjZXNzZnVsfSk9PiBzdWNjZXNzZnVsID8gXCIxXCIgOiBcIjBcIn07XHJcbmxlZnQ6JHsoe3N1Y2Nlc3NmdWx9KT0+IHN1Y2Nlc3NmdWwgPyBcIjIwcHhcIiA6IFwiNXB4XCJ9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM0MDNkNTg7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xyXG5gXHJcblxyXG5cclxuLy9lbWFpbCxwYXNzd29yZCxub3RpZmljYXRpb25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe2lzV2luZG93Zm9yc2V0dGluZ3MsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhlZGl0ZGF0YS5iYWNrZ3JvdW5kdXJsKVxyXG4gICAgY29uc3QgW2ZpbGUsc2V0ZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbY3JvcCxzZXRjcm9wXSA9IHVzZVN0YXRlKHthc3BlY3Q6MTYvMTYsaGVpZ2h0OjIwMCx3aWR0aDoxMDAseDo1MCx5OjUwfSlcclxuICAgIGNvbnN0IFtzcmMsc2V0c3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICB0b2tlbjplZGl0ZGF0YS5pbWFnZXRva2VuLFxyXG4gICAgICAgICAgICBuYW1lOmVkaXRkYXRhLmltYWdldXJsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICB0b2tlbjplZGl0ZGF0YS5iYWNrZ3JvdW5kdG9rZW4sXHJcbiAgICAgICAgICAgIG5hbWU6ZWRpdGRhdGEuYmFja2dyb3VuZHVybFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbdXBsb2FkaW5nLHNldHVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdWNjZXNmdWx1cGxvYWQsc2V0c3VjY2VzZnVsdXBsb2FkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbXVzZXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkt1bGxhbmljaSBBZGlcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5wZXJzb25hbHRleHQsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS2lzaXNlbCBCaWxnaWxlclwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6dHJ1ZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIkdlY2VybGkgQmlyIEUtcG9zdGEgYWRyZXNpIGdpcmluICFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ3VycmVudHBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBTaWZyZW5pelwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIkVza2kgc2lmcmVuaSB5YW5saXMgZ2lyZGluIGdhbGliYSwgdGVrcmFyIGRlbmUgIVwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgTmV3cGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJZZW5pIHNpZnJlbml6aSBnaXJpblwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIk1ha2Ugc3VyZSB0aGF0IHlvdXIgcGFzc3dvcmQgaGFzIGF0IGxlYXN0IDYgbGVuZ3RoIGFuZCBjb250YWlucyBvbmUgdXBwZXIsIG9uZSBsb3dlciBjaGFyYWN0ZXIgYW5kIG9uZSBudW1iZXIuXCJcclxuICAgICAgICB9LCBcclxuICAgICAgICBWYWxpZGF0aW9uTmV3cGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJZZW5pIHNpZnJlbml6aSB0ZWtyYXIgZ2lyaW5cIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJHaXJkaWdpbml6IHNpZnJlbGVyIGF5bmkgZGVnaWxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTm90aWZpY2F0aW9uczp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgICAgICBXaGVuZm9sbG93OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5Ob3RpZmljYXRpb24uV2hlbmZvbGxvdyxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIHRha2lwIGV0dGlnaW5kZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgV2hlbmxpa2U6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLk5vdGlmaWNhdGlvbi5XaGVubGlrZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIGljZXJpayBiZWdlbmRpZ2luZGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFdoZW5jb21tZW50OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5Ob3RpZmljYXRpb24uV2hlbmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSB5b3J1bSB5YXB0aWdpbmRhXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbmNoaWxkcyxzZXRzZWxlY3Rpb25jaGlsZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEVtYWlsOnRydWUsXHJcbiAgICAgICAgUGFzc3dvcmQ6ZmFsc2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uOmZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGVkLHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0ud2FybmluZyAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29weVtrZXldLmFjdGl2YXRlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Zm9yc2V0dGluZ3Mpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09IDEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGVjdGVkID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJDdXJyZW50cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7Ly9zZWxlY3RlZCAzXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIk5vdGlmaWNhdGlvbnNcIl0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoa2V5ID09IFwibXVzZXJuYW1lXCIgfHwga2V5ID09IFwicGVyc29uYWx0ZXh0XCIgfHwga2V5ID09IFwiZmlyc3RuYW1lXCIgfHwga2V5ID09IFwic3VybmFtZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH0sW2FjdGl2ZSxzZWxlY3RlZF0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICB9LFthY3RpdmVdKVxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGlmKHNyYy5CYWNraW1hZ2UgIT09IFwiXCIpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGV5eW9cIilcclxuICAgICAgICAgICAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQmFja2ltZ1wiKVxyXG4gICAgICAgICAgICBiYWNraW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIHNldGltYWdlKGJhY2tpbWcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWNraW1nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfSAgICBcclxuXHJcbiAgICB9LFtzcmNdKVxyXG4gICAgKi9cclxuICAgIGNvbnN0IElucHV0ZXJyb3JoYW5kbGVyID0gKHR5cGUsdmFsdWUpPT57XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VybmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaXJzdG5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5pc0VtYWlsKHZhbHVlKVxyXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLk5ldylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLk5ld3ZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUuTmV3ICE9PSB2YWx1ZS5OZXd2YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTpcIlVuZXF1YWxcIix2YWxpZGF0ZTpmYWxzZX1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighVmFsaWRhdGUuaXNTdHJvbmdQYXNzd29yZCh2YWx1ZS5OZXcse21pblN5bWJvbHM6MCxtaW5OdW1iZXJzOjEsbWluTG93ZXJjYXNlOjEsbWluVXBwZXJjYXNlOjEsbWluTGVuZ3RoOjZ9KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdGU6XCJTdHJvbmdcIix2YWxpZGF0ZTpmYWxzZX07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTpcIlN1Y2Nlc3NcIix2YWxpZGF0ZTp0cnVlfVxyXG4gICAgICAgICAgICAgICAgLy9uZXdwYXNzd29yZCBjaGFyYWN0ZXIgY2hlY2tpbmdcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodFxyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gY2FudmFzLnRvRGF0YVVSTChcImltZ2UvcG5nXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQsc3Via2V5KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIGlmKGtleSA9PSBcIk5vdGlmaWNhdGlvbnNcIil7XHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XVtcInZhbHVlXCJdW3N1YmtleV1bXCJ2YWx1ZVwiXT0gIW11dGF0ZWRba2V5XVtcInZhbHVlXCJdW3N1YmtleV1bXCJ2YWx1ZVwiXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtdXRhdGVkW2tleV0udmFsdWU9ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XS53YXJuaW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWNyb3AgPSAobmV3Y3JvcCk9PntcclxuICAgICAgICAvL2J1cmF5YSBiYWtcclxuICAgICAgICBpZihjcm9wLmFzcGVjdCA+IDEpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnkseDpuZXdjcm9wLnh9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyb3ApXHJcblxyXG4gICAgICAgIC8vdmFsdWUgb2YgY3JvcHBlciB3aWR0aCBoZWlnaHQgeCBhbmQgeVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbmR1cGRhdGVzID0gYXN5bmMgKHR5cGVvZnVwZGF0ZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge31cclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIHZhciB1cGRhdGVGb3IgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmKCFpc1dpbmRvd2ZvcnNldHRpbmdzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTiBVUERBVEVcIilcclxuICAgICAgICAgICAgdXBkYXRlRm9yID0gXCJQcm9maWxlXCJcclxuICAgICAgICAgICAgdmFsdWVzLmJhY2tjcm9wID0gcmVzdWx0LkJhY2tpbWFnZS5jcm9wdmFsdWVzXHJcbiAgICAgICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IFwiZW1haWxcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZih0eXBlb2Z1cGRhdGUgPT0gMSl7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVGb3IgPSBcIkVtYWlsXCJcclxuICAgICAgICAgICAgaWYoIUlucHV0ZXJyb3JoYW5kbGVyKFwiZW1haWxcIix1c2VyaW5mb1tcImVtYWlsXCJdLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0ud2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvcHlbXCJlbWFpbFwiXS5tc2cgPSBcIkdlY2VybGkgQmlyIEUtcG9zdGEgYWRyZXNpIGdpcmluICFcIlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsdWVzW1wiZW1haWxcIl0gPSB1c2VyaW5mb1tcImVtYWlsXCJdLnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKHR5cGVvZnVwZGF0ZSA9PSAyKXtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvciA9IFwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjb25zdCB7c3RhdGUsdmFsaWRhdGV9ID0gSW5wdXRlcnJvcmhhbmRsZXIoXCJwYXNzd29yZFwiLHtDdXJyZW50OnVzZXJpbmZvW1wiQ3VycmVudHBhc3N3b3JkXCJdLnZhbHVlLE5ldzp1c2VyaW5mb1tcIk5ld3Bhc3N3b3JkXCJdLnZhbHVlLE5ld3ZhbGlkYXRpb246dXNlcmluZm9bXCJWYWxpZGF0aW9uTmV3cGFzc3dvcmRcIl0udmFsdWV9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdmFsaWRhdGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlID09IFwiVW5lcXVhbFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZSAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiTmV3cGFzc3dvcmRcIl0ud2FybmluZyA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIkN1cnJlbnRwYXNzd29yZFwiXSA9IHVzZXJpbmZvW1wiQ3VycmVudHBhc3N3b3JkXCJdLnZhbHVlXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIk5ld3Bhc3N3b3JkXCJdID0gdXNlcmluZm9bXCJOZXdwYXNzd29yZFwiXS52YWx1ZVxyXG4gICAgICAgICAgICB2YWx1ZXNbXCJOZXdWYWxpZGF0aW9uXCJdID0gdXNlcmluZm9bXCJWYWxpZGF0aW9uTmV3cGFzc3dvcmRcIl0udmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVGb3IgPSBcIk5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIk5vdGlmaWNhdGlvbnNcIl0gPSB1c2VyaW5mb1tcIk5vdGlmaWNhdGlvbnNcIl1bXCJ2YWx1ZVwiXVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgc2V0dXBsb2FkaW5nKHRydWUpXHJcbiAgICAgICAgVXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgIHVzZXJkYXRhOmZvcm1EYXRhLFxyXG4gICAgICAgICAgICB0eXBlb2Z1cGRhdGU6dXBkYXRlRm9yLFxyXG4gICAgICAgICAgICBzZXR1cGxvYWRpbmc6c2V0dXBsb2FkaW5nLFxyXG4gICAgICAgICAgICBzZXRzdWNjZXNmdWx1cGxvYWQ6c2V0c3VjY2VzZnVsdXBsb2FkLFxyXG4gICAgICAgICAgICB1c2VyaW5mbzp1c2VyaW5mbyxcclxuICAgICAgICAgICAgc2V0dXNlcmluZm86c2V0dXNlcmluZm9cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kbGVyPShrZXluYW1lLGluZGV4KT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4uc2VsZWN0aW9uY2hpbGRzfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICBjb3B5W2tleV0gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb3B5W2tleW5hbWVdID0gdHJ1ZVxyXG4gICAgICAgIHNldHNlbGVjdGVkKGluZGV4KzEpXHJcbiAgICAgICAgc2V0c2VsZWN0aW9uY2hpbGRzKGNvcHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNyZWF0ZXIgPShrZXluYW1lKT0+e1xyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJFbWFpbFwiKVxyXG4gICAgICAgIHJldHVybiA8RW1haWw+PC9FbWFpbD5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiUGFzc3dvcmRcIilcclxuICAgICAgICByZXR1cm4gPExvY2s+PC9Mb2NrPlxyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJOb3RpZmljYXRpb25cIilcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbnM+PC9Ob3RpZmljYXRpb25zPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiQmFja2ltZ1wiIHNyYz17c3JjW1wiQmFja2ltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIlByb2ZpbGVpbWdcIiBzcmM9e3NyY1tcIlByb2ZpbGVpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZXVwbG9hZGVkRGl2IHN1Y2Nlc3NmdWw9e3N1Y2Nlc2Z1bHVwbG9hZCA9PSBcIlNVQ0NFU1NGVUxcIiA/IHRydWUgOiBmYWxzZX0+UHJvZmlsIEJhc2FyaXlsYSBHdW5jZWxsZW5kaTwvUHJvZmlsZXVwbG9hZGVkRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOmlzV2luZG93Zm9yc2V0dGluZ3MgPyBcIjUwMHB4XCI6XCIyNTBweFwiLHJpZ2h0OlwiNDBweFwiLHpJbmRleDpcIjMwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlNlbmR1cGRhdGVzKHNlbGVjdGVkKX0gc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGluZyA/ICg8U3Bpbm5lciBzdHlsZT17e21hcmdpblJpZ2h0OlwiNXB4XCJ9fT48L1NwaW5uZXI+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtheWRldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxTZWxlY3Rpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9uY2hpbGRzKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENoaWxkc29mc2VsZWN0aW9uIGlubmVyY29sb3I9e3NlbGVjdGlvbmNoaWxkc1tpdGVtXX0gc3R5bGU9e3tjb2xvcjpzZWxlY3Rpb25jaGlsZHNbaXRlbV0gPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9fSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGxlcihpdGVtLGluZGV4KX0+e0ljb25jcmVhdGVyKGl0ZW0pfTwvQ2hpbGRzb2ZzZWxlY3Rpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYmFyPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2Nyb3BwZXJhY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXIgIG9uSW1hZ2VMb2FkZWQ9eyhpbWcpPT5zZXRpbWFnZShpbWcpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLGhlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwifX0gIGltYWdlU3R5bGU9e3toZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIixvYmplY3RGaXQ6XCJjb3ZlclwifX0gIHNyYz17c3JjW2ltYWdldHlwZV19IGNyb3A9e2Nyb3B9IG9uQ2hhbmdlPXsobmV3Y3JvcCk9PnVwZGF0ZWNyb3AobmV3Y3JvcCl9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlRvQ2FudmFzKCl9IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiID5VcGxvYWQgdGhlIGZpbGUgdG8gc2VydmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICFpc1dpbmRvd2ZvcnNldHRpbmdzICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2UudG9rZW4gPyBgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9teW5leHQtYTA3NGEuYXBwc3BvdC5jb20vby8ke3NyYy5CYWNraW1hZ2UubmFtZX0/YWx0PW1lZGlhJnRva2VuPSR7c3JjLkJhY2tpbWFnZS50b2tlbn1gIDogXCIveWFwcmFrLmpwZ1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlciBpc0hhdmluZ3Byb2ZpbGU9e3NyYy5Qcm9maWxlaW1hZ2UudG9rZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9e3NyYy5Qcm9maWxlaW1hZ2UudG9rZW4gPyBgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9teW5leHQtYTA3NGEuYXBwc3BvdC5jb20vby8ke3NyYy5Qcm9maWxlaW1hZ2UubmFtZX0/YWx0PW1lZGlhJnRva2VuPSR7c3JjLlByb2ZpbGVpbWFnZS50b2tlbn1gIDogXCIveWFwcmFrLmpwZ1wifSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgaHRtbEZvcj1cImZpbGUyXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUFsdCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQ2FtZXJhQWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIlByb2ZpbGVpbWFnZVwiKX0gYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWdcIiBpZD1cImZpbGUyXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvcm1hdGlvbiBpc2ZvcmVkaXQ9e2lzV2luZG93Zm9yc2V0dGluZ3N9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW5kb3dmb3JzZXR0aW5ncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbGRlcmZvcnVwaWNvbiBzbGlwdmFsdWU9e3NlbGVjdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0Ryb3BVcCBzdHlsZT17e2ZvbnRTaXplOlwiODBweFwiLGNvbG9yOlwiI2U5ZWNlZlwifX0+PC9BcnJvd0Ryb3BVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHVzZXJpbmZvKS5tYXAoKGl0ZW0saW5kZXgpPT57ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJlbGVtZW50cyA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdXNlcmluZm9baXRlbV0udmFsdWUgPT0gXCJvYmplY3RcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZWxlbWVudHMgPSBPYmplY3Qua2V5cyh1c2VyaW5mb1tpdGVtXS52YWx1ZSkubWFwKChzdWJpdGVtLHN1YmluZGV4KT0+KC8vc3ViIHZhbHVlcyBvZiBub2l0aWZpY2F0aW9uIHBoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fT57dXNlcmluZm9baXRlbV1bXCJ2YWx1ZVwiXVtzdWJpdGVtXVtcIm1zZ1wiXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggb25Db2xvcj0nI2ZmMDAyYicgYW5kbGVEaWFtZXRlcj17MjB9IG9uQ2hhbmdlPXsoKT0+SW5wdXRoYW5kbGVyKGl0ZW0sXCJcIixzdWJpdGVtKX0gY2hlY2tlZEljb249e3RydWV9IHVuY2hlY2tlZEljb249e3RydWV9IGNoZWNrZWQ9e3VzZXJpbmZvW2l0ZW1dW1widmFsdWVcIl1bc3ViaXRlbV1bXCJ2YWx1ZVwiXX0+PC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPikpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViZWxlbWVudHMgPSAoPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt1c2VyaW5mb1tpdGVtXS53YXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyF1c2VyaW5mb1tpdGVtXS53YXJuaW5nID8gdXNlcmluZm9baXRlbV0ubXNnIDogdXNlcmluZm9baXRlbV0uZXJyb3Jtc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vc2hhcmVkL0NvbnRlbnRjYXJkXCJcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCJcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnRtYXAoe2NvbnRlbnRsaXN0LHJlbGF0aW9uZnVuYyxub3JlY29yZH0pIHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnRsaXN0KVxyXG4gICAgdmFyIHRleHRmb3Jub3JlY29yZCA9IFwiXCJcclxuICAgIGlmKG5vcmVjb3JkID09IFwiUmVzaG93XCIpe1xyXG4gICAgICAgICB0ZXh0Zm9ybm9yZWNvcmQgPSBcIkt1bGxhbsSxY8SxbsSxbiBpxZ9hcmV0bGVkacSfaSBnw7ZuZGVyaSB5b2suLi5cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihub3JlY29yZCA9PSBcIlBvc3RcIil7XHJcbiAgICAgICAgIHRleHRmb3Jub3JlY29yZCA9IFwiS3VsbGFuxLFjxLFuxLFuIGhpw6diaXIgZ8O2bmRlcmlzaSB5b2suLi5cIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihub3JlY29yZCA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgIHRleHRmb3Jub3JlY29yZCA9IFwiS3VsbGFuxLFjxLFuxLFuIGJlxJ9lbmRpxJ9pIGfDtm5kZXJpIHlvay4uLlwiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudGxpc3QubGVuZ3RoID8gXHJcbiAgICAgICAgICAgICAgICBjb250ZW50bGlzdC5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dW5pcWlkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLnBlcnNvbmFsPyBpdGVtLmlkIDogaXRlbS5Db250ZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLkxpa2UgOiBpdGVtLkNvbnRlbnQuTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5wZXJzb25hbCA/IGl0ZW0uUmV0d2VldCA6IGl0ZW0uQ29udGVudC5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5wZXJzb25hbCA/IGl0ZW0uUmVhZGxhdGVyIDogaXRlbS5Db250ZW50LlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLnBlcnNvbmFsID8gaXRlbS5hbGxjb21tZW50cyA6IGl0ZW0uQ29udGVudC5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnBlcnNvbmFsID8gaXRlbS50aXRsZSA6IGl0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmZpcnN0bmFtZSA6IGl0ZW0uQ29udGVudC5wZXJzb25hbC5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmxhc3RuYW1lfS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17cmVsYXRpb25mdW5jfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLmNyZWF0ZWRBdCA6IGl0ZW0uQ29udGVudC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHRleHRBbGlnbjpcImNlbnRlclwiLG1hcmdpblRvcDpcIjIwcHhcIn19Pnt0ZXh0Zm9ybm9yZWNvcmR9PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudG1hcCk7XHJcbi8vc2FkZWNlIGxpc3QgZGXEn2nFn3RpZ2luZGUgdGVrcmFyIHJlbmRlciBlZGlsaXlvclxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2UsU3Bpbm5lcn0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LGZlZWQsRmVlZGJhY2ssU2VuZCxEZWxldGUsIEVkaXR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gXCIuLi8uLi9ob29rcy9DbGlrY291dGlzZGVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkICwgQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG4yNSUge2ZvbnQtc2l6ZToxOHB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG42NSUge2ZvbnQtc2l6ZToxN31cclxuNzAlIHtmb250LXNpemU6MTBweH1cclxuMTAwJSB7Zm9udC1zaXplOjE2cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbmhlaWdodDokeyh7ZHJhZnR9KT0+IGRyYWZ0ID8gXCIzMDBweFwiIDogXCJcIn07XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PiFpc2NvbW1lbnQgPyBcIiNmYWY5ZjlcIjogXCIjZmFmOWY5XCJ9O1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcblxyXG5gXHJcblxyXG4vL1RoaXMgaXMgZm9yIGRyYWZ0IHBhZ2VcclxuY29uc3QgU29mdGNvdmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OjMwMDtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbm9wYWNpdHk6MC42O1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXJpZ2h0OjVweDtcclxucGFkZGluZy1sZWZ0OjVweDtcclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuYFxyXG5jb25zdCBDb250ZW50ZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6ICR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCIxNXB4XCI6IFwiMHB4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG5mbGV4OjE7XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZFBhcnQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcImJsb2NrXCI6XCJmbGV4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJub25lXCIgOiBcImZsZXhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNwYW5mb3IgPSBzdHlsZWQuc3BhbmBcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG4mOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOnVuZGVybGluZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuJjogaG92ZXIgJHtTcGFuZm9yfXtcclxuICAgIGNvbG9yOiR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy10b3A6MTBweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBJY29ucz1zdHlsZWQuaWBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5hbmltYXRpb24tZHVyYXRpb246MC4zcztcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoJHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn0pO1xyXG59O1xyXG5jb2xvcjokeyh7aXNtYXJrZWQsY29sb3J9KT0+aXNtYXJrZWQgPyBjb2xvciA6IFwiZ3JleVwiIH07XHJcbmFuaW1hdGlvbi1uYW1lOiR7KHthbmltYXRpb259KT0+YW5pbWF0aW9uID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6YmxvY2s7XHJcbndpZHRoOjM1MHB4O1xyXG5wYWRkaW5nOjVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozNXB4O1xyXG5yaWdodDoxMHB4OyBcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDo0ODA7XHJcbmBcclxuY29uc3QgT3B0aW9uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IERyYWZ0aG9sZGVyID0gc3R5bGVkLnNwYW5gXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG56LWluZGV4OjMwMDtcclxuYFxyXG5cclxuLy9jb21tZW50LWFuc3dlciBzZWN0aW9uXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVpbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjsgXHJcbnBvc2l0aW9uOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwifTtcclxubGVmdDokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiLTYwcHhcIiA6IFwiMHB4XCJ9O1xyXG4mOmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwcHg7XHJcbiAgICBsZWZ0OjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDokeyh7bGVuZ3RofSk9Pmxlbmd0aH07XHJcbiAgICBoZWlnaHQ6JHsoe2xlbmd0aH0pPT5sZW5ndGgqMTUwfXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufTtcclxuJjphZnRlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBsZWZ0Oi00MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGgqNTB9cHg7XHJcbiAgICB6LWluZGV4Oi01O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufVxyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmZ1bmN0aW9uIENvbnRlbnRjYXJkKHtpbWFnZWZpbGVuYW1lLEVkaXRjb21tZW50aGFuZGxlcixpbWFnZXRva2VuLENoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZ19jb21tZW50ZWRpdCxzZXRsb2FkaW5nX2NvbW1lbnRlZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NvbW1lbnRhbnN3ZXIsc2V0Y29tbWVudGFuc3dlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Fuc3dlcnZhbHVlLHNldGFuc3dlcnZhbHVlXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlZGl0Y29tbWVudCxzZXRlZGl0Y29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjb21tZW50ZWRpdHZhbHVlLHNldGNvbW1lbnRlZGl0dmFsdWVdID0gdXNlU3RhdGUoY29udGVudClcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cclxuICAgIHZhciB0ZXh0Zm9yb3BpdG9uPVwiXCI7XHJcbiAgICBzd2l0Y2ggKGZvcnVzZXJvcHRpb24pIHtcclxuICAgICAgICBjYXNlIFwiUmVhZGxhdGVyXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJLYXlkZWRpbGVuIGfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkxpa2VcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIkJlxJ9lbmlsZW4gR8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJEcmFmdFwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiVGFzbGFrbGFyZGFuIGthbGTEsXJcIiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcblxyXG5cclxuICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG5cclxuICAgICAgICBpZighZm9ydXNlciAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgbGlrZS5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0d2VldC5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmVhZGxhdGVyLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIlJlYWRsYXRlclwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgLy9saWtlICwgc2lnbiBhbmQgc2F2ZSBvcGVyYXRpb25zXHJcbiAgICBjb25zdCBDb3VudHBsdXM9KGVsZW1lbnR0eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuICBcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PWZhbHNlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOnVzZXJkYXRhLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOnVzZXJkYXRhLlVzZXJzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiQ3JlYXRlXCIsdXNlcmlkKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09dHJ1ZSAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIgPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiRGVzdHJveVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRWRpdGNvbW1lbnRhY3RpdmVuZXNzPShkZXRlcm1pbmVyKT0+e1xyXG5cclxuICAgICAgICBpZihkZXRlcm1pbmVyID09IFwiY2FuY2VsXCIpe1xyXG5cclxuICAgICAgICAgICAgc2V0ZWRpdGNvbW1lbnQoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRlZGl0dmFsdWUoY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9ZWxzZSBpZihkZXRlcm1pbmVyID09IFwic2F2ZVwiKXtcclxuICAgICAgICAgICAgc2V0bG9hZGluZ19jb21tZW50ZWRpdCh0cnVlKVxyXG4gICAgICAgICAgICBFZGl0Y29tbWVudGhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpjb21tZW50ZWRpdHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudElEOnBvc3RJZCxcclxuICAgICAgICAgICAgICAgIHNldGxvYWRpbmc6c2V0bG9hZGluZ19jb21tZW50ZWRpdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWRpdGNvbW1lbnQodHJ1ZSlcclxuICAgICAgICBzZXR2aXNpYmxlKGZhbHNlKS8vdHVybmluZyBvZmYgb3B0aW9uIHdpbmRvd1xyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpLy90dXJuaW5nIG9mZiBvdGhlciB0aGluZ3NcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNYWtlYWNvbW1lbnQ9KCk9PntcclxuICAgICAgICBBbnN3ZXJoYW5kbGVyKGFuc3dlcnZhbHVlLHBvc3RJZClcclxuICAgICAgICBzZXRhbnN3ZXJ2YWx1ZShcIlwiKVxyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgPE91dHNpZGVkaXYgIGRyYWZ0PXtkcmFmdH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIC8vZHJhZnQgY292ZXJcclxuICAgICAgICAgICAgICAgZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U29mdGNvdmVyLz5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3ppbmRleDpcIjQwMFwiLGhvdmVyYmFjazpcIndoaXRlXCIsaG92ZXJjb2xvcjpcIiNkOTA0MjlcIixiYWNrY29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLHdpZHRoOlwiNjBweFwiLGhlaWdodDpcIjYwcHhcIixsaW5laGVpZ2h0OlwiNjBweFwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmdUb3A6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+Q3VsdHVyZSBvZiB0aGUgT3R0b21hbiBFbXBpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL0NvbW1lbnQgTGVmdCBJY29uXHJcbiAgICAgICAgICAgICAgaXNjb21tZW50ID8gIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1sZWZ0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixsZWZ0OlwiLTZweFwiLHRvcDpcIjhweFwiLGNvbG9yOlwiI2ZhZjlmOVwifX0+PC9JY29uPiA6IG51bGxcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy9PcHRpb25zIG9uIHRvcCByaWdodFxyXG4gICAgICAgICAgICAhaXNjb21tZW50ID8gIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PiAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpkcmFmdCA/IFwid2hpdGVcIiA6IFwiIzJBMkEyQVwiLHppbmRleDpcIjUwMFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBzdHlsZT17e2Rpc3BsYXk6dXNlcmRhdGEuVXNlcklkID8gXCJmbGV4XCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLW1pbnVzXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+RHVoYW4gw5Z6dMO8cmsnw7wgdGFraXB0ZW4gw6fEsWs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CdSBrdWxsYW7EsWPEsWRhbiBnZWxlbiBiaWxkaXJpbWxlcmkgZ8O2cm1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+UGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJhxJ9sYW50xLEgYWRyZXNpbmkga29weWFsYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgb25DbGljaz17KCk9PmNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxmb3J1c2Vyb3B0aW9uLFwiRGVzdHJveVwiLGluZGV4bnVtLGZvcnVzZXJvcHRpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdCBmYS1zbVwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+S2FsZMSxcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT57dGV4dGZvcm9waXRvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgIC8vY29tbWVudCByZXBvcnRcclxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtdlwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOlwiIzJBMkEyQVwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkID09IHVzZXJkYXRhLlVzZXJJZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9e0VkaXRjb21tZW50YWN0aXZlbmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0PjwvRWRpdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHV6ZW5sZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZT48L0RlbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW9ydW11IFNpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrPjwvRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaWxkaXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFkcmFmdCAmJlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlaW1hZ2Vob2xkZXIgbGVuZ3RoPXtDaGlsZGxlbmd0aH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IGhlaWdodD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gcHJvZmlsZT17YGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXluZXh0LWEwNzRhLmFwcHNwb3QuY29tL28vJHtpbWFnZWZpbGVuYW1lfT9hbHQ9bWVkaWEmdG9rZW49JHtpbWFnZXRva2VufWB9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIDxTZWNvbmRQYXJ0IGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgfHwgZHJhZnQgPyBudWxsIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlciBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRjb21tZW50ID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tlbmRBZG9ybm1lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ19jb21tZW50ZWRpdH0gc3RhcnRJY29uPXtsb2FkaW5nX2NvbW1lbnRlZGl0ID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGx9IG9uQ2xpY2s9eygpPT5FZGl0Y29tbWVudGFjdGl2ZW5lc3MoXCJzYXZlXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpsb2FkaW5nX2NvbW1lbnRlZGl0ID8gXCJsaWdodGdyZXlcIjpcIiNlNjM5NDZcIixjb2xvcjpcIndoaXRlXCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCIsYm90dG9tOlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiNXB4XCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtheWRldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkVkaXRjb21tZW50YWN0aXZlbmVzcyhcImNhbmNlbFwiKX0gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3R0b206XCIxMHB4XCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50Pn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0Y29tbWVudGVkaXR2YWx1ZShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRlZGl0dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZWFrLXdvcmRcIn19Pntjb21tZW50ZWRpdHZhbHVlfTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRlbnQvW2lkXVwiIGFzPXtgL2NvbnRlbnQvJHtwb3N0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZWFrLXdvcmRcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5XaGlsZSB0aGUgQ3J5cHRvIFByb2Zlc3NvcnMgbWF5IHNldCBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIHNvbWUuLi4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc2NvbW1lbnQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICg8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIwLCAyNTUsIDAsIDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5yZXNob3cuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMucmVzaG93LmFuaW1hdGlvbn0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXNob3dcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3Igb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXksXCJSZXNob3dcIil9PntlbGVtZW50cy5yZXNob3cubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJyZWRcIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMjU1LCAwLCAwLDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5MaWtlLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLkxpa2UuYW5pbWF0aW9ufSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiTGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXksXCJMaWtlXCIpfSA+e2VsZW1lbnRzLkxpa2UubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENvbW1lbnQgb25DbGljaz17KCk9PnNldGNvbW1lbnRhbnN3ZXIoIWNvbW1lbnRhbnN3ZXIpfSAgc3R5bGU9e3tjb2xvcjpcImdyZXlcIixjdXJzb3I6XCJwb2ludGVyXCJ9fS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zIGNsYXNzTmFtZT1cImZhcyBmYS1jb21tZW50LWFsdCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5SZWFkbGF0ZXIuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuUmVhZGxhdGVyLmFuaW1hdGlvbn0gY29sb3I9e1wiYmxhY2tcIn0gb25DbGljaz17KCk9PkNvdW50cGx1cyhcIlJlYWRsYXRlclwiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50YW5zd2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXJ2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRhbnN3ZXJ2YWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTp7Y3Vyc29yOlwicG9pbnRlclwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgb25DbGljaz17TWFrZWFjb21tZW50fSBzdHlsZT17e2NvbG9yOmFuc3dlcnZhbHVlLmxlbmd0aCA+IDAgPyAgXCIjZTYzOTQ2XCI6IFwiZ3JleVwifX0gcG9zaXRpb249XCJlbmRcIj48U2VuZD48L1NlbmQ+PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvcnVtYSBDZXZhcCBWZXIuLi5cIiBzaXplPVwic21hbGxcIiB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgPC9TZWNvbmRQYXJ0PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDb250ZW50Y2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL1VJL0ljb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvckRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjYwcHg7XHJcbmxlZnQ6MDtcclxuaGVpZ2h0OjEwMHZoO1xyXG56LWluZGV4OjE1MDtcclxuYmFja2dyb3VuZC1jb2xvcjojMTExMDFkO1xyXG5ib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbnRyYW5zaXRpb246d2lkdGggMC4zcztcclxud2lkdGg6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIn07XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gXHJcbmNvbnN0IElubmVyRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzo1cHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwJTtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG4mOmhvdmVyIHtcclxuICAgIG92ZXJmbG93OnZpc2libGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTmF2aWdhdGlvbkRpdj1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG95b3I6eWVsbG93O1xyXG5tYXJnaW4tdG9wOjVweDtcclxud2lkdGg6OTYlO1xyXG5gXHJcblxyXG5jb25zdCBSaWdodHNpZGVkZXNjID0gc3R5bGVkLnNwYW5gXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMTQsIDMwLCAzNywgMC4zMikgMHB4IDJweCAxNnB4IDBweDtcclxucmlnaHQ6LTE2MHB4O1xyXG50b3A6LTEwcHg7XHJcbndpZHRoOjE0MHB4O1xyXG5vcGFjaXR5OjA7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4ycztcclxuYm9yZGVyLXJhZGl1czo5cHg7XHJcbmNvbG9yOmJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5mb250LXNpemU6MTZweDtcclxucGFkZGluZzoxMHB4O1xyXG5wb2ludGVyLWV2ZW50czpub25lO1xyXG5gXHJcbmNvbnN0IFNwYW5mb3JkZXNjID0gc3R5bGVkLnNwYW5gXHJcbnRyYW5zaXRpb24tZHVyYXRpb246JHsoe2xlZnRiYXJhY3RpdmV9KT0+bGVmdGJhcmFjdGl2ZSA/IFwiMC41c1wiIDogXCIwc1wifTtcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuZm9udC1zaXplOjE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5vcGFjaXR5OiR7KHtsZWZ0YmFyYWN0aXZlfSk9PmxlZnRiYXJhY3RpdmUgPyBcIjFcIiA6IFwiMFwifVxyXG5gXHJcblxyXG5jb25zdCBMaSA9IHN0eWxlZC5saWBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzo3cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbn1cclxuXHJcbiY6aG92ZXIgJHtSaWdodHNpZGVkZXNjfXtcclxuICAgIG9wYWNpdHk6JHsoe2xlZnRiYXJhY3RpdmV9KT0+bGVmdGJhcmFjdGl2ZSA/IFwiMFwiIDogXCIxXCJ9O1xyXG4gICAgdG9wOjVweDtcclxufVxyXG5cclxuYFxyXG5cclxuXHJcblxyXG5cclxuLy9jb25zdCBJY29uPXN0eWxlZC5pYFxyXG4vL2NvbG9yOiNDNzAwMzk7XHJcbi8vYFxyXG5jb25zdCBDbG9zZW9wZW49c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYFxyXG5cclxuY29uc3QgTGVmdHRvb2xiYXI9KHttYWtlYWN0aXZlLG15YWN0aXZlfSk9PntcclxuICAgIFxyXG4gICAgY29uc3Qge3VzZXJkYXRhLGxvZ2dlZH09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCBmaXJzdGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJLYXlkZWRpbGVubGVyXCIscGF0aDpgc2F2ZWRgfSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiQmXEn2VuaWxlbmxlclwiLHBhdGg6YGxpa2VkYH1dKVxyXG4gICAgY29uc3Qgc2Vjb25kbGlzdD11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWVkaXRcIixkZXNjOlwiR8O2bmRlcmlsZXJpbVwiLHBhdGg6XCIvZ8O2bmRlcmlsZXJcIn0se2ljb246XCJmYXMgZmEtdXNlcnNcIixkZXNjOlwiVGFydMSxxZ9tYWxhcsSxbVwiLHBhdGg6XCIvdGFydMSxxZ9tYWxhclwifV0pXHJcbiAgICBjb25zdCB0aGlyZGxpc3Q9dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1wZW5jaWwtcnVsZXJcIixkZXNjOlwiVGFzbGFrbGFyXCIscGF0aDpgRHJhZnRzYH1dKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgICAgIHZhciBteWxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXRsaVwiKVxyXG4gICAgICAgIGlmKG15bGkpe1xyXG4gICAgICAgICAgICBteWxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwoZSk9PntcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICB9LCBbdXNlcmRhdGFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgbG9nZ2VkID9cclxuXHJcbiAgICAgICAgICAgIDxFeHRlcmlvckRpdiBhY3RpdmU9e215YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogIDxDbG9zZW9wZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9XCJmYXIgZmEtdGltZXMtY2lyY2xlIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9DbG9zZW9wZW4+Ki99XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e21ha2VhY3RpdmUoIW15YWN0aXZlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzNXB4XCIsY29sb3I6XCJ3aGl0ZVwiLHJvdGF0ZTpteWFjdGl2ZSA/IHRydWUgOiB1bmRlZmluZWR9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXNlcmRhdGEuVXNlcklkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJkYXRhLlVzZXJJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtcIi9jYXIuanBnXCJ9ICB3aWR0aD17bXlhY3RpdmUgPyBcIjgwcHhcIiA6IFwiNTBweFwifSBoZWlnaHQ9e215YWN0aXZlID8gXCI4MHB4XCIgOiBcIjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXJkYXRhLlVzZXJJZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCIsY29sb3I6XCIjMjkzMjQxXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT48c3BhbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PntteWFjdGl2ZSA/IHVzZXJkYXRhLlVzZXJuYW1lIDogXCIuLi5cIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiMHB4XCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsYWxpZ25JdGVtczpteWFjdGl2ZSA/IFwiZmxleC1zdGFydFwiIDogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0bGlzdC5jdXJyZW50Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1t1c2VyxLFkXS8ke2l0ZW0ucGF0aH1gfSBhcz17YC8ke3VzZXJkYXRhLlVzZXJJZH0vJHtpdGVtLnBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaSBjbGFzc05hbWU9XCJnZXRsaVwiIGxlZnRiYXJhY3RpdmU9e215YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsbGluZWhlaWdodDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsYmFja2NvbG9yOlwiI0Y3RkFGRlwiLGNvbG9yOlwiYmxhY2tcIn19PjwvSWNvbj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yZGVzYyAgICBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+e2l0ZW0uZGVzY308L1NwYW5mb3JkZXNjPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodHNpZGVkZXNjICBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+e2l0ZW0uZGVzY308L1JpZ2h0c2lkZWRlc2M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRsaXN0LmN1cnJlbnQubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW3N0dWZmXVwiIGFzPXtgJHtpdGVtLnBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaSBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOm15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGxpbmVoZWlnaHQ6bXlhY3RpdmUgPyBcIjMxcHhcIiA6IFwiMzVweFwiLGJhY2tjb2xvcjpcIiNGN0ZBRkZcIixjb2xvcjpcImJsYWNrXCJ9fT48L0ljb24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvcmRlc2MgIGxlZnRiYXJhY3RpdmU9e215YWN0aXZlfT57aXRlbS5kZXNjfTwvU3BhbmZvcmRlc2M+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0c2lkZWRlc2MgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PntpdGVtLmRlc2N9PC9SaWdodHNpZGVkZXNjPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjBweFwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGFsaWduSXRlbXM6bXlhY3RpdmUgPyBcImZsZXgtc3RhcnRcIiA6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlyZGxpc3QuY3VycmVudC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9EcmFmdHMvW3VzZXJpZF1cIiBhcz17YC9EcmFmdHMvJHt1c2VyZGF0YS5Vc2VySWR9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGkgbGVmdGJhcmFjdGl2ZT17bXlhY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IEljb25jb25maWc9e3t3aWR0aDpteWFjdGl2ZSA/IFwiMzFweFwiIDogXCIzNXB4XCIsaGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixsaW5laGVpZ2h0Om15YWN0aXZlID8gXCIzMXB4XCIgOiBcIjM1cHhcIixiYWNrY29sb3I6XCIjRjdGQUZGXCIsY29sb3I6XCJibGFja1wifX0+PC9JY29uPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3JkZXNjICBsZWZ0YmFyYWN0aXZlPXtteWFjdGl2ZX0+e2l0ZW0uZGVzY308L1NwYW5mb3JkZXNjPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodHNpZGVkZXNjID57aXRlbS5kZXNjfTwvUmlnaHRzaWRlZGVzYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lckRpdj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdHRvb2xiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VDb250ZXh0LCB1c2VFZmZlY3QgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBOYXZ0b29scyBmcm9tIFwiLi9OYXZpZ2F0aW9udG9vbHNcIjtcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2llIGZyb20gJy4uLy4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZSc7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7R2V0dXNlcnNmb3JzZWFyY2hiYXIsbG9nb3V0fSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUsIEhvbWUsQXNzaWdubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBOYXZiYXJleHQ9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo2MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDoyMDA7XHJcbmBcclxuY29uc3QgSW5uZXJOYXZiYXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoxMDAlO1xyXG5tYXJnaW46YXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbm1heC13aWR0aDoxMTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSWNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtjbGlja2VkfSk9PmNsaWNrZWQgPyBcIlwiIDogXCJcIn07XHJcbnBhZGRpbmc6MnB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYmRlZmI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6JHsoe2ZsZXh9KT0+ZmxleH07XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBkaXNwbGF5OiR7KHtmbGV4Mn0pPT5mbGV4Mn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbnBhZGRpbmctcmlnaHQ6NDBweDtcclxuYm9yZGVyOm5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I0UwRTBFMDtcclxuY29sb3I6YmxhY2s7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbmhlaWdodDokeyh7Zm9ybm90aWZ5fSk9PmZvcm5vdGlmeSA/IFwiNDAwcHhcIiA6IFwiXCJ9O1xyXG5vdmVyZmxvdzphdXRvO1xyXG5wYWRkaW5nOjhweDtcclxucmlnaHQ6MHB4O1xyXG53aWR0aDozNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYFxyXG5jb25zdCBJbm5lcm9wdGlvbj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG5sZWZ0Oi01NXB4O1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjMwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5vdmVyZmxvdzphdXRvO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4mOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGZvbnRzaXplOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hlbGVtZW50cz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG4mOmhvdmVyIHtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2Mzk0NjtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuYFxyXG5cclxuLy9Ub0RvIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHtEYXRhLENvdW50LFJlbG9hZGZ1bmMsVXBkYXRlfSl7XHJcbiBcclxuXHJcbiAgICBjb25zdCB7bG9nZ2VkLHNwaW5uZXIsdXNlcmRhdGEsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSxzZXRsb2dnZWR9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgY29uc3Qge3JlZjpyZWYyLHZpc2libGU6dmlzaWJsZTIsc2V0dmlzaWJsZTpzZXR2aXNpYmxlMn0gPSB1c2VDbGlja291dHNpZSgpO1xyXG4gICAgLy9idXJhZGEgZGXEn2nFn2tlbiBpc2ltaSBkZcSfacWfdGlyZXJlayBrdWxsYW5hYmlscnNpblxyXG4gICAgY29uc3QgW2lucHV0dmFsdWUsc2V0aW5wdXR2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2Vyc2ZvcnNlYXJjaCxzZXR1c2Vyc2ZvcnNlYXJjaF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaGFjdGl2ZSxzZXRzZWFyY2hhY3RpdmVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgIE15cmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbb3JkZXJudW1iZXIsc2V0b3JkZXJudW1iZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFtJY29udW1iZXIsc2V0xLFjb25udW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbSWNvbm9iamVjdCxzZXRJY29ub2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAxOntcclxuICAgICAgICAgIGNsYXNzTmFtZTpcImZhcyBmYS1wbHVzXCIsXHJcbiAgICAgICAgICBvbm9mZjpmYWxzZSxcclxuICAgICAgICAgIGxpbmVoZWlnaHQ6JzM2cHgnLFxyXG4gICAgICAgICAgc2hvcnQ6XCJwbHVzXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjp7XHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJmYXMgZmEtYmVsbFwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczM3B4JyxcclxuICAgICAgICAgIHNob3J0OlwiYmVsbFwiLFxyXG4gICAgICAgICAgT25jZXJlcXVlc3RlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6e1xyXG4gICAgICAgICAgY2xhc3NOYW1lOlwiZmFzIGZhLXNvcnQtZG93blwiLFxyXG4gICAgICAgICAgb25vZmY6ZmFsc2UsXHJcbiAgICAgICAgICBsaW5laGVpZ2h0OiczMHB4JyxcclxuICAgICAgICAgIHNob3J0OlwiZG93blwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc2ZvcnNlYXJjaClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL1RvZG8gb25seSBpbnB1dCBsZW50aFxyXG4gICAgICBpZighdmlzaWJsZTIpXHJcbiAgICAgIHNldGlucHV0dmFsdWUoXCJcIik7XHJcbiAgICAgIHNldHNlYXJjaGFjdGl2ZShcIlwiKTtcclxuXHJcbiAgICB9LFt2aXNpYmxlMl0pXHJcblxyXG4gICAgY29uc3QgTG9nb3V0PSgpPT57XHJcbiAgICAgICAgbG9nb3V0KHtcclxuICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgS2V5dXBmdW5jdGlvbj0oKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGlucHV0dmFsdWUpXHJcbiAgICAgICBpZihpbnB1dHZhbHVlICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgc2V0c2VhcmNoYWN0aXZlKFwiTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgR2V0dXNlcnNmb3JzZWFyY2hiYXIoe1xyXG4gICAgICAgICAgICAgICAgaW5wdXR2YWx1ZTppbnB1dHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2V0dXNlcnM6c2V0dXNlcnNmb3JzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0c2VhcmNoYWN0aXZlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTY3JvbGx0b0JvdHRvbT0oKT0+e1xyXG5cclxuICAgICAgICBpZihNeXJlZi5jdXJyZW50LnNjcm9sbFRvcCArIE15cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ID49IE15cmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICAgICAgUmVsb2FkZnVuYyhvcmRlcm51bWJlcitEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDaGFuZ2VoYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICBzZXR2aXNpYmxlMih0cnVlKTtcclxuICAgICAgICAgc2V0aW5wdXR2YWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbnNlbGVjdD0oaWNvbm51bWJlcik9PntcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbXlvYmplY3Q9ey4uLkljb25vYmplY3R9O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhteW9iamVjdCkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIGlmKGljb25udW1iZXIgIT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICBteW9iamVjdFtrZXldLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmKXtcclxuXHJcbiAgICAgICAgICAgIG15b2JqZWN0W2ljb25udW1iZXJdLm9ub2ZmPWZhbHNlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcigwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBteW9iamVjdFtpY29ubnVtYmVyXS5vbm9mZj10cnVlO1xyXG4gICAgICAgICAgICBzZXTEsWNvbm51bWJlcihpY29ubnVtYmVyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SWNvbm9iamVjdChteW9iamVjdCk7IFxyXG4gICAgICAgIHNldHZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNsaWNrPShpdGVtLHNob3J0bmFtZSk9PntcclxuICAgICAgICAvL2J1cmFkYSBzYWRlY2UgYmlsaWRpcmltIGt1dHVzdSBrYXBhbMSxeWtlbiBpc3RlayBhdMSxeW9ydXogMiBrZXogZGVnaWxcclxuICAgICAgICBpZihzaG9ydG5hbWUgPT0gXCJiZWxsXCIgJiYgSWNvbm9iamVjdFtpdGVtXS5vbm9mZiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIEljb25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBzZWFyY2h0eXBlPVwiXCI7XHJcbiAgICBcclxuICAgIGlmKHNlYXJjaGFjdGl2ZSA9PSBcIkxvYWRpbmdcIil7XHJcbiAgICAgICAgc2VhcmNodHlwZT08ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCJ9fT48U3Bpbm5lcj48L1NwaW5uZXI+PC9kaXY+IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWFyY2hhY3RpdmUgPT0gXCJOb3RoaW5nXCIpe1xyXG4gICAgICAgIHNlYXJjaHR5cGU9PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwifX0+U29udcOnIEJ1bHVuYW1hZMSxLjwvZGl2PiBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXJleHQ+XHJcbiAgICAgICAgICAgIDxJbm5lck5hdmJhcj4gICBcclxuICAgICAgICAgICAgICAgPElucHV0SG9sZGVyIGZsZXg9e1wiYmxvY2tcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGN1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiaHR0cHM6Ly9ldnJpbWFnYWNpLm9yZy9wdWJsaWMvaW1hZ2VzL2xvZ28vdjMuc3ZnP3Y9MVwiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsYm9yZGVyUmlnaHQ6XCIxcHggc29saWQgYmxhY2tcIn19PjxzcGFuPkV2cmltIEHEn2FjxLE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PjxIb21lIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjYzkxODRhXCJ9fT48L0hvbWU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgcmVmPXtyZWYyfSBmbGV4Mj17XCJub25lXCJ9IGZsZXg9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlVcD17S2V5dXBmdW5jdGlvbn0gdmFsdWU9e2lucHV0dmFsdWV9IG9uQ2hhbmdlPXtDaGFuZ2VoYW5kbGVyfSBwbGFjZWhvbGRlcj1cIkFyYVwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHZhbHVlLmxlbmd0aCA8PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjE1cHhcIix0b3A6XCIxMHB4XCIsd2lkdGg6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+c2V0dmlzaWJsZTIoZmFsc2UpfSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjExcHhcIix0b3A6XCIxMnB4XCIsd2lkdGg6XCIyMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0dmFsdWUubGVuZ3RoID4gMCAmJiB2aXNpYmxlMiA9PSB0cnVlICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWN0aXZlLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e3NlYXJjaHR5cGV9PC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2ZvcnNlYXJjaC5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8U2VhcmNoZWxlbWVudHMgb25DbGljaz17KCk9PnNldGlucHV0dmFsdWUoXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7aXRlbS5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiNDVweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiNjAwXCJ9fT57aXRlbS5maXJzdG5hbWUrXCIgXCIraXRlbS5sYXN0bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImxpZ2h0Z3JheVwiLGZvbnRTaXplOlwiMTVweFwifX0+xLBuxZ9hYXQgTcO8aGVuZGlzaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGVsZW1lbnRzPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAhc3Bpbm5lciBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIWxvZ2dlZCBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwiLHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJ9fSBlbmRJY29uPXs8QWNjb3VudENpcmNsZSBzdHlsZT17e2ZvbnRTaXplOlwiMjVweFwifX0+PC9BY2NvdW50Q2lyY2xlPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gZW5kSWNvbj17PEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIyNXB4XCJ9fT48L0Fzc2lnbm1lbnQ+fSBjb2xvcj1cInNlY29uZGFyeVwiPkthecSxdCBPbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlciAgZmxleDI9e1wiZmxleFwifSByZWY9e3JlZn0gZmxleD17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhJY29ub2JqZWN0KS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25ob2xkZXIgY2xpY2tlZD17SWNvbm9iamVjdFtpdGVtXS5vbm9mZn0gb25DbGljaz17KCk9Pkljb25jbGljayhpdGVtLEljb25vYmplY3RbaXRlbV0uc2hvcnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsYmFja2dyb3VuZENvbG9yOlwiI0YwRjBGMFwiLGJvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOlwiMzVweFwiLGhlaWdodDpcIjM1cHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsaW5lSGVpZ2h0Okljb25vYmplY3RbaXRlbV0ubGluZWhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17SWNvbm9iamVjdFtpdGVtXS5jbGFzc05hbWV9IHN0eWxlPXt7Y29sb3I6Q291bnQgPiAwICYmIEljb25vYmplY3RbaXRlbV0uc2hvcnQgPT0gXCJiZWxsXCIgPyBcIiNkOTA0MjlcIiA6IFwiXCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29ub2JqZWN0W2l0ZW1dLnNob3J0ID09IFwiYmVsbFwiICYmIENvdW50ID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixmb250U2l6ZTpcIjEycHhcIix0b3A6XCItNXB4XCIscmlnaHQ6XCItNXB4XCIsd2lkdGg6XCIyMHB4XCIsZGlzcGxheTpcImJsb2NrXCIsaGVpZ2h0OlwiMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwiLGxpbmVIZWlnaHQ6XCIyMHB4XCIsYmFja2dyb3VuZENvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIn19PntDb3VudH08L3NwYW4+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyZGF0YS5Vc2VySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPVwiMzVweFwiIGhlaWdodD1cIjM1cHhcIiBwcm9maWxlPVwiL2Nhci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb251bWJlciAhPT0gMCAmJiB2aXNpYmxlID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBvblNjcm9sbD17U2Nyb2xsdG9Cb3R0b219IHJlZj17TXlyZWZ9IGZvcm5vdGlmeT17SWNvbm9iamVjdFtcIjJcIl0ub25vZmZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lcm9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdnRvb2xzIExvZ291dD17TG9nb3V0fSBOYXZkYXRhPXtEYXRhfSBvcHRudW1iZXI9e0ljb251bWJlcn0+PC9OYXZ0b29scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lubmVyb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0lubmVyTmF2YmFyPlxyXG4gICAgICAgIDwvTmF2YmFyZXh0PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ29udGV4dH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL1VJL0ljb25cIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQge2xvZ291dH0gZnJvbSBcIi4uLy4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcblxyXG5jb25zdCBPcHRpb24xZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7Y2hlY2t9KT0+IGNoZWNrID09IGZhbHNlID8gXCIjRUJFQkVCXCIgOiBcIlwifTtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9udG9vbHMoe29wdG51bWJlcixvcHRuYW1lLE5hdmRhdGEsTG9nb3V0fSl7XHJcbiAgICBjb25zdCB7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHNldHNwaW5uZXIsbG9nZ2VkfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zb2xlLmxvZyhzZXRsb2dnZWQpXHJcbiAgICBjb25zdCBbdG9nZ2xlLHNldHRvZ2xlXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgbGV0IE15b3B0aW9uID0gbnVsbDtcclxuICAgIGxldCB0aXRsZSA9IFwiXCI7XHJcblxyXG4gICAgaWYob3B0bnVtYmVyID09IDEpe1xyXG4gICAgICB0aXRsZSA9IFwiT2x1xZ90dXJcIlxyXG4gICAgICBNeW9wdGlvbiA9IDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hw7ZuZGVyaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5TYXlmYW5kYSBiaXIgZ8O2bmRlcmkgcGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnMgXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T2RhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJpciB0YXJ0xLHFn21hIG9kYXPEsSBvbHXFn3R1cjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbiAgICBpZihvcHRudW1iZXIgPT0gMil7XHJcblxyXG4gICAgICAgIHRpdGxlPVwiQmlsZGlyaW1sZXJcIlxyXG5cclxuICAgICAgICBjb25zdCBBdHRyaXVidGVhcnJheT1bXHJcbiAgICAgICAgICAgIHtuYW1lOlwiTGlrZVwiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJTZW5pbiBHw7ZuZGVyaW5pIEJlxJ9lbmRpLlwiLEljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsY29sb3I6XCIjREQxRjFGXCIsbGg6XCIzMHB4XCIsaHJlZjpcIi9jb250ZW50XCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcIlJlc2hvd1wiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJTZW5pbiBHw7ZuZGVyaW5pIMSwxZ9hcmV0bGVkaS5cIixJY29uOlwiZmFzIGZhLXRodW1idGFja1wiLGNvbG9yOlwiI2FkYjViZFwiLGxoOlwiMzVweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJGb2xsb3dcIixpZG5hbWU6XCJVc2VySWRcIixkZXNjOlwiU2VuaSBUYWtpcCBFdHRpXCIsSWNvbjpcImZhcyBmYS11c2VyLXBsdXMgZmEtc21cIixjb2xvcjpcIiNlZTYwNTVcIixsaDpcIjMwcHhcIixocmVmOlwiL3Byb2ZpbGVcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiQ29tbWVudFwiLGlkbmFtZTpcIkNvbnRlbnRJZFwiLGRlc2M6XCJHw7ZuZGVyaW5lIFlvcnVtIFlhcHTEsS5cIixJY29uOlwiZmFzIGZhLWNvbW1lbnQtZG90c1wiLGNvbG9yOlwiI2FkYjViZFwiLGxoOlwiMzBweFwiLGhyZWY6XCIvY29udGVudFwifSxcclxuICAgICAgICAgICAge25hbWU6XCJQb3N0XCIsZGVzYzpcIlllbmkgQmlyIEfDtm5kZXJpIFBheWxhxZ90xLFcIixJY29uOlwiZmFzIGZhLWVkaXRcIixjb2xvcjpcIiNmY2EzMTFcIixsaDpcIjMwcHhcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOlwiRGViYXRlXCIsZGVzYzpcIlllbmkgQmlyIGdydXAgT2x1xZ90dXJkdS5cIixJY29uOlwiXCJ9XTtcclxuXHJcbiAgICAgICAgaWYoTmF2ZGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE15b3B0aW9uID0gPGg0PkhlbsO8eiBiaXIgYmlsZGlyaW1pbml6IHlvay48L2g0PlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihOYXZkYXRhLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgTXlvcHRpb24gPSBcclxuXHJcbiAgICAgICAgICAgICg8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAge05hdmRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETyBpY29uIGRldGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15aXRlbW9iaj17fTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXR0cml1YnRlYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmF0dHJpYnV0ZSA9PSBBdHRyaXVidGVhcnJheVtpXS5uYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15aXRlbW9iaiA9IEF0dHJpdWJ0ZWFycmF5W2ldO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5Db250ZW50SWQgPT0gbnVsbCAmJiBpdGVtLkNvbW1lbnRJZCA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPE9wdGlvbjFkaXYga2V5PXtpbmRleH0gY2hlY2s9e2l0ZW0uRmFjZWNoZWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOmAke215aXRlbW9iai5ocmVmfS8ke2l0ZW1bbXlpdGVtb2JqLmlkbmFtZV19YCxxdWVyeTp7bmFtZTpcIlBvc3RcIn19fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtteWl0ZW1vYmouSWNvbn0gSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCI0MHB4XCIscmlnaHQ6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLGJhY2tjb2xvcjpteWl0ZW1vYmouY29sb3Isd2lkdGg6XCIzMHB4XCIsaGVpZ2h0OlwiMzBweFwiLGxpbmVoZWlnaHQ6bXlpdGVtb2JqLmxofX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEljb24gY2xhc3NOYW1lPXtcImZhcyBmYS1zdGFyIGZhLXNtXCJ9IEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiLThweFwiLHJpZ2h0OlwiLTJweFwiLGNvbG9yOlwiIzcyZGRmN1wiLHdpZHRoOlwiMTdweFwiLGhlaWdodDpcIjE3cHhcIixsaW5laGVpZ2h0OlwiMTdweFwifX0+PC9JY29uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIixmb250U2l6ZTpcIjE1cHhcIn19PntpdGVtLlVzZXIuZmlyc3RuYW1lICsgXCIgXCIgKyBpdGVtLlVzZXIubGFzdG5hbWUgKyBcIiAsIChPc21hbmzEsSBIYWxrxLFuxLFuxLEgRcSfaXRpbSBTZXZpeWVzaS4uLilcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwiLGNvbG9yOlwiIzc1NzU3NVwiLGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT57bXlpdGVtb2JqLmRlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIixjb2xvcjpcIiMxNzgwYTFcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+e2NhbGN1bGF0ZWRhdGUoaXRlbS5jcmVhdGVkQXQpLnRpbWUgKyBcIiBcIiArIGNhbGN1bGF0ZWRhdGUoaXRlbS5jcmVhdGVkQXQpLmV4cHJlc3N9IMO2bmNlIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uMWRpdj4pXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PikgICBcclxuXHJcbiAgICAgICAgfSAgICAgICAgICBcclxuICAgIH1cclxuICAgIGlmKG9wdG51bWJlciA9PSAzKXtcclxuICAgICAgdGl0bGU9XCJQcm9maWxcIlxyXG4gICAgICBNeW9wdGlvbj0oIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uMWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzMnB4XCIsaGVpZ2h0OlwiMzJweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAgc3R5bGU9e3tmb250U2l6ZTpcIjE1cHhcIn19PlByb2ZpbGltPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jb2cgXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzJweFwiLGhlaWdodDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjE1cHhcIn19PlByb2ZpbCBBeWFybGFyxLE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbjFkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1tb29uIFwiIEljb25jb25maWc9e3t3aWR0aDpcIjMycHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzJweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNXB4XCJ9fT5LYXJhbmzEsWsgTW9kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCAgY2hlY2tlZEljb249e2ZhbHNlfSB1bmNoZWNrZWRJY29uPXtmYWxzZX0gb25DaGFuZ2U9eygpPT5zZXR0b2dsZSghdG9nZ2xlKX0gY2hlY2tlZD17dG9nZ2xlfT48L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24xZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24xZGl2IG9uQ2xpY2s9eygpPT5Mb2dvdXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLW91dC1hbHQgXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzJweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzMnB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjE1cHhcIn19PsOHxLFrxLHFnyBZYXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbjFkaXY+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjVweFwiLGZvbnRTaXplOlwiMjBweFwifX0+e3RpdGxlfTwvcD5cclxuICAgICAgICAgIHtNeW9wdGlvbn1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxuICAgXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGUsa2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5cclxuIGh0bWx7XHJcbiAgIHNjcm9sbC1iZWhhdmlvcjpzbW9vdGg7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCIxNTBcIiA6IFwiLTMwMFwifTtcclxuYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsICR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMC43XCIgOiBcIjBcIn0pO1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGVmdHRvb2xiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0xlZnR0b29sYmFyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9OYXZpZ2F0aW9uL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ291bnRyZXEsTm90aWZpY2F0aW9ucmVxLFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50fSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcblxyXG5cclxuY29uc3QgQmlnZGl2PXN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmNvbnN0IEdvdXBpY29uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5ib3R0b206NDBweDtcclxucmlnaHQ6NDBweDtcclxudHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnotaW5kZXg6MTAwO1xyXG5vcGFjaXR5OiR7KHt1cH0pPT51cCA/IFwiMVwiIDogXCIwXCJ9O1xyXG5gXHJcbi8vVE9ETyBzb2NrZXQgaW8gaGFuZGxlIGZ1bmN0aW9ucyBvbiBzZXJ2ZXJzaWRlXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbmxheW91dCh7Y2hpbGRyZW59KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnb3VwLHNldGdvdXBdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3QgW25hdmRhdGEsc2V0bmF2ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50b2ZkYXRhLHNldGNvdW50ZGF0YV09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFzdHJlY29yZCxzZXRsYXN0cmVjb3JkXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsYXN0cmVjb3JkYWN0aXZlLHNldGxhc3RyZWNvcmRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVzZXJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codXNlcm91dGVyLnBhdGhuYW1lKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImNyZWF0ZVwiLHVzZXJkYXRhLlVzZXJJZClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgICAgIHNldGFjdGl2ZShmYWxzZSk7ICBcclxuICAgIH0sIFt1c2Vyb3V0ZXIucXVlcnldKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntcclxuXHJcbiAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDUwMCl7XHJcbiAgICAgICAgICAgICAgc2V0Z291cCh0cnVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBzZXRnb3VwKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvdW50cmVxKHtcclxuICAgICAgICAgICAgICAgIHNldGNvdW50ZGF0YTpzZXRjb3VudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25yZXEoe1xyXG4gICAgICAgICAgICAgICAgc2V0bmF2ZGF0YTpzZXRuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgbmF2ZGF0YTpuYXZkYXRhLFxyXG4gICAgICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9ICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXI9KCk9PntcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZGFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0bGFzdHJlY29yZChwcmV2PT5wcmV2KzEpO1xyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25Db3VudHJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y291bnRkYXRhOnNldGNvdW50ZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzb2NrZXQub24oXCJOb3RpZmljYXRpb25cIixsaXN0ZW5lcikgXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCAmJiBsYXN0cmVjb3JkYWN0aXZlKXtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucmVxKHtcclxuICAgICAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpjb3VudG9mZGF0YSxcclxuICAgICAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3Ryb3c6dHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0sW2xhc3RyZWNvcmRdKVxyXG5cclxuICAgIGNvbnN0IFJlbG9hZG5hdj0ob3JkZXIpPT57XHJcblxyXG4gICAgICAgIE5vdGlmaWNhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIHNldG5hdmRhdGE6c2V0bmF2ZGF0YSxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgIG5hdmRhdGE6bmF2ZGF0YSxcclxuICAgICAgICAgICAgbGFzdHJvdzpmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVjb3VudD0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRpbm5nZ2dcIik7XHJcbiAgICAgICAgc2V0Y291bnRkYXRhKDApO1xyXG4gICAgICAgIFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50KHtVc2VySWQ6dXNlcmRhdGEuVXNlcklkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJpZ2Rpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBha3RpZj17YWN0aXZlfT48L0JsYWNrPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBVcGRhdGU9e1VwZGF0ZWNvdW50fSBSZWxvYWRmdW5jPXtSZWxvYWRuYXZ9IENvdW50PXtjb3VudG9mZGF0YX0gRGF0YT17bmF2ZGF0YX0+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXIgbXlhY3RpdmU9e2FjdGl2ZX0gbWFrZWFjdGl2ZT17c2V0YWN0aXZlfT48L0xlZnR0b29sYmFyPlxyXG4gICAgICAgICAgICB7Lyp0aGlzIHBhcnQgd2lsbCBiZSBjaGFuZ2VkKi99XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIDxHb3VwaWNvbiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5zY3JvbGxUbyh7dG9wOjB9KX19IHVwPXtnb3VwfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXVwIGZhLWxnXCIgSWNvbmNvbmZpZz17e2JhY2tjb2xvcjpcIiNlZjIzM2NcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI0MHB4XCIsaGVpZ2h0OlwiNDBweFwiLGxpbmVoZWlnaHQ6XCI0MHB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgIDwvR291cGljb24+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0JpZ2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJwcm9maWxlY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25hY3RpdmV9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgRWRpdFJvdW5kZWQsIE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUsU2V0dGluZ3MsUGVyc29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgQ29udGVudG1hcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL2NvbnRlbnRtYXBcIjtcclxuaW1wb3J0IEVkaXR3aW5kb3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvUHJvZmlsZS9FZGl0d2luZG93XCJcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG5wYWRkaW5nLXRvcDo2MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbm92ZXJmbG93OiR7KHtlZGl0YWN0aXZlfSk9PmVkaXRhY3RpdmUgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJ9O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG50b3A6LTEyMHB4O1xyXG5sZWZ0OjE0MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbiAgICB0b3A6LTEwMHB4O1xyXG4gICAgbGVmdDoxNjBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL3lhcHJhay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgT3B0aW9uYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxubWFyZ2luOmF1dG87XHJcbm1heC13aWR0aDo1MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uOmFsbCAwLjFzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmNvbG9yOiR7KHthcHBseWJvcmRlcn0pPT5hcHBseWJvcmRlciA/IFwiI2Q2MjgyOFwiIDogXCJibGFja1wifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjphdXRvO1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7TXlkYXRhLENvdW50cyxDb250ZW50ZGF0YSxxdWVyeX0pe1xyXG5cclxuICAgIC8vdXNlIHJlZHVjZXIgdHJ5IG9uIGl0XHJcbiAgICBjb25zdHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCBQcmV2ZW50c3BhbSA9IHVzZVJlZih0cnVlKVxyXG4gICAgY29uc3QgUHJldmVudHNwYW0yID0gdXNlUmVmKHRydWUpXHJcbiAgICBjb25zdCB7Ym90dG9tfSA9IHVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKENvbnRlbnRkYXRhKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtwcm9maWxlZGF0YSxzZXRwcm9maWxlZGF0YV09dXNlU3RhdGUoTXlkYXRhKVxyXG4gICAgY29uc3RbY2hlY2t1c2VyaWQsc2V0Y2hlY2t1c2VyaWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2JlaW5nZm9sbG93ZWQsc2V0YmVpbmdmb2xsb3dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbVGltZXRvcmVuZGVyLHNldHRpbWV0b3JlbmRlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbbm90aWZpY2F0aW9uYWN0aXZlLHNldG5vdGlmaWNhdGlvbmFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVlZGl0LHNldGFjdGl2ZWVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbZWRpdGZvcnNldHRpbmdzLHNldGVkaXRmb3JzZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0W29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIFBvc3Q6e1xyXG4gICAgICAgICAgICBuYW1lOlwiR8O2bmRlcmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJCZcSfZW5pbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlc2hvdzp7XHJcbiAgICAgICAgICAgIG5hbWU6XCLEsMWfYXJldGxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgIFxyXG4gIGNvbnNvbGUubG9nKE15ZGF0YSk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgLy9zYWRlY2UgcGFpZ25hdGlvbiB6YXRlbiBxdWVyeSBkZcSfacWfaW5jZSBpbGsgMTAgdmFsdWUgc2VydmVyc2lkZSB0YXJhZsSxbmRhbiDDp2VraWxpeW9yXHJcbiAgICAgIHZhciBMZWFrY29udHJvbGxvZXIgPSB0cnVlO1xyXG4gICAgICB2YXIgUmVxdWVzdHBlcm1pc3Npb24gPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIC8vc2FkZWNlIHNjcm9sbCBkb3duIG9sZHVndW5kYVxyXG4gICAgICBpZihSZXF1ZXN0cGVybWlzc2lvbil7XHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEdldHVzZXJwcm9maWxlY29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6cXVlcnkudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTpxdWVyeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvd25lcnBvc3Q6cXVlcnkubmFtZSA9PSBcIlBvc3RcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLFxyXG4gICAgICAgICAgICAgICAgTGVha2NvbnRyb2xsb2VyOkxlYWtjb250cm9sbG9lcixcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICBMZWFrY29udHJvbGxvZXI9ZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcbiAgICAgICAgb3B0aW9ub2JqW3F1ZXJ5Lm5hbWVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW1ldG9yZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnkudXNlcm5hbWUpXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBxdWVyeS51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRjaGVja3VzZXJpZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vYnVyYWRhIHRha2lwIGV0IGJ1dG9udSB2ZSBiaWxkaXJpbSBidXRvbnUga2Fsa8SxY2FrIHllcmluZSBiZWxraSBheWFybGFyLlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICBNeWRhdGEuRm9sbG93ZWQuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uVXNlclVzZXIuQWN0aXZlID09IHRydWUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRub3RpZmljYXRpb25hY3RpdmUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxxdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICBzZXRwcm9maWxlZGF0YSh7Li4uTXlkYXRhfSlcclxuICAgICAgc2V0Y29udGVudGRhdGEoWy4uLkNvbnRlbnRkYXRhXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcbiAgICAvL1xyXG4gICAgY29uc3QgUmVsYXRpb25yZXF1ZXN0PXVzZUNhbGxiYWNrKChwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW3VzZXJkYXRhLlVzZXJJZF0pXHJcbiAgICBcclxuICAgIC8vc2VuZGluZyBmb2xsb3dpbmcgcmVxdWVzdFxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxdWVzdD0oKT0+e1xyXG5cclxuICAgICAgICAvL3RvZG8gcmVzcG9uc2UgZ2VsZW5lIGthZGFyIGJla2xlIGhhbWxleWUgaXppbiB2ZXJtZVxyXG4gICAgICAgaWYoUHJldmVudHNwYW0yLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICBQcmV2ZW50c3BhbTIuY3VycmVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldGJlaW5nZm9sbG93ZWQoIWJlaW5nZm9sbG93ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBDcmVhdGV1c2VycmVsYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpiZWluZ2ZvbGxvd2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZlbnQ6UHJldmVudHNwYW0yXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9BYWN0aXZhdGUgbm90aWZpY2F0aW9uIGJlbGxcclxuICAgIGNvbnN0IE5vdGlmaWNhdGlvbkFjdGl2YXRlID0gKCk9PntcclxuXHJcbiAgICAgICAgaWYoUHJldmVudHNwYW0uY3VycmVudCl7XHJcblxyXG4gICAgICAgICAgICBQcmV2ZW50c3BhbS5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9uYWN0aXZlKCFub3RpZmljYXRpb25hY3RpdmUpXHJcblxyXG4gICAgICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUoe1xyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRhY3RpdmU6bm90aWZpY2F0aW9uYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgUHJldmVudDpQcmV2ZW50c3BhbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9oYW5kbGluZyBzb3J0aW5nIGJhclxyXG4gICAgY29uc3QgSGFuZGxlb3B0aW9ucz0ob3B0aW9udHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBFZGl0d2luZG93aGFuZGxlcj0oaXNmb3JlZGl0LGNsb3NlKT0+e1xyXG5cclxuICAgICAgICBpZihpc2ZvcmVkaXQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzZXRlZGl0Zm9yc2V0dGluZ3ModHJ1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjbG9zZSl7XHJcblxyXG4gICAgICAgICAgICBzZXRlZGl0Zm9yc2V0dGluZ3MoZmFsc2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0YWN0aXZlZWRpdCghYWN0aXZlZWRpdClcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBjb25zdCBQcm9maWxldXBkYXRlID0gKCkgPT57XHJcblxyXG4gICAgICAgIFVwZGF0ZVByb2ZpbGUoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdiBlZGl0YWN0aXZlPXthY3RpdmVlZGl0fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlZWRpdCAmJlxyXG5cclxuICAgICAgICAgICAgICAgICg8RWRpdHdpbmRvdyBpc1dpbmRvd2ZvcnNldHRpbmdzPXtlZGl0Zm9yc2V0dGluZ3N9IGNsb3NlZnVuYz17KCk9PkVkaXR3aW5kb3doYW5kbGVyKGZhbHNlLHRydWUpfSBlZGl0ZGF0YT17TXlkYXRhfSBhY3RpdmU9e2FjdGl2ZWVkaXR9IC8+KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UgSW1hZ2Vmb3JCYWNrPXtcIi93YXkuanBnXCJ9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgICAgLy9idXJhZGEgY29udGV4dCB1c2VySWQgeW9rIGlzZSBidW5hIGl6aW4gdmVybWl5b3J1bSBhbmNhayBzZXRzdGF0ZSBvbGR1Z3VuZGEgZ8O2c3RlcmltIHZhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIHRoaXMgc2hvdWxkIGJlIGZpeGVkIGR1cmluZyBuYXZpZ2FpdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VzZXJkYXRhLnVzZXLEsWQgeW9rc2Ega3VsbGFuxLFjxLEgZ2lyacWfIHlhcG1hbcSxxZ90xLFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2t1c2VyaWQgJiYgVGltZXRvcmVuZGVyID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uYWN0aXZlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXtOb3RpZmljYXRpb25BY3RpdmF0ZX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17Tm90aWZpY2F0aW9uQWN0aXZhdGV9PjwvTm90aWZpY2F0aW9ucz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Gb2xsb3dpbmdyZXF1ZXN0KGJlaW5nZm9sbG93ZWQpfSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMGVhZDY5XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIj57YmVpbmdmb2xsb3dlZCA/IFwiVGFraXB0ZW4gw4fEsWtcIiA6IFwiVGFraXAgRXRcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ib2xkZXI+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1ldG9yZW5kZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkVkaXR3aW5kb3doYW5kbGVyKHRydWUsZmFsc2UpfSBzdHlsZT17e2JvcmRlclJhZGl1czpcIjI1cHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIj48U2V0dGluZ3M+PC9TZXR0aW5ncz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5FZGl0d2luZG93aGFuZGxlcihmYWxzZSxmYWxzZSl9IGVuZEljb249ezxQZXJzb24+PC9QZXJzb24+fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYmFja2dyb3VuZENvbG9yOlwiI2U2Mzk0NlwiLHRleHRUcmFuc2Zvcm06XCJub25lXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0+UHJvZmlsaSBEdXplbmxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlICBzdHlsZT17e2JvcmRlcjpcIjRweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByb2ZpbGU9XCIvY2FyLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGVkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvZmlsZWRhdGEubGFzdG5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjNmM3NTdkXCJ9fT5VSSBkZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjEwcHhcIixtYXJnaW5Cb3R0b206XCI0MHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VkY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lww6dpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZXJjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXAgRWRpbGVuPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuQ29udGVudGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5Hw7ZuZGVyaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Vc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtxdWVyeS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpgJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17ZmFsc2V9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbnMgYXBwbHlib3JkZXI9e29wdGlvbnNbaXRlbV0uYm90dG9tfSBvbkNsaWNrPXsoKT0+SGFuZGxlb3B0aW9ucyhpdGVtKX0+e29wdGlvbnNbaXRlbV0ubmFtZX08L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETyBzZXBhcmF0ZSB0aGlzIG1hcCBmdW5jdGlvbiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwiLG1heFdpZHRoOlwiNzAwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50bWFwICBub3JlY29yZD17cXVlcnkubmFtZX0gcmVsYXRpb25mdW5jPXtSZWxhdGlvbnJlcXVlc3R9IGNvbnRlbnRsaXN0PXtDb250ZW50ZGF0YX0vPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50cGFydD5cclxuICAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FsbG93YWN0aW9uLHNldGFsbG93YWN0aW9uXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3RbZHJhZnRpZCxzZXRkcmFmdGlkXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBhbGxvd2FjdGlvbjphbGxvd2FjdGlvbixcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgZHJhZnRpZDpkcmFmdGlkLFxyXG4gICAgICAgICAgIHNldGRyYWZ0aWQsc2V0ZHJhZnRpZCxcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VDbGlja291dHNpZGUoKXtcclxuICAgIFxyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSxzZXR2aXNpYmxlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhXCIpXHJcbiAgICBjb25zdCBoYW5kbGVjbGljaz0oZXZlbnQpPT57ICBcclxuXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQgJiYgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xyXG4gICAgICAgICAgICBzZXR2aXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaGFuZGxlY2xpY2spO1xyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaGFuZGxlY2xpY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aXNpYmxlLFxyXG4gICAgICBzZXR2aXNpYmxlLFxyXG4gICAgICByZWZcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIHVzZUNsaWNrb3V0c2lkZTtcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTY3JvbGwoKXtcclxuXHJcbiAgICBjb25zdCBbYm90dG9tLHNldGJvdHRvbV09dXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgICAgICAvL1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoZSk9PntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkgeyAgXHJcbiAgICAgICAgICAgICAgICBzZXRib3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0Ym90dG9tKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICByZXR1cm4gKCk9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcImF1dG9cIn0pXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm90dG9tOmJvdHRvbVxyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE1haW5sYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbnRhaW5lcnMvTGF5b3V0L21haW5sYXlvdXRcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uLy4uL2NvbnRhaW5lcnMvcGFnZXMvUHJvZmlsZVwiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgYXhpb3VzIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWZmKHtwcm9maWxlLGNvdW50cyxjb250ZW50cyxnZXRxdWVyeX0pe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAmZmFtaWx5PURvbWluZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9VGlub3M6aXRhbEAxJmRpc3BsYXk9c3dhcCZmYW1pbHk9TGlicmUrQmFza2VydmlsbGUmZGlzcGxheT1zd2FwJmZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA2MDAmZGlzcGxheT1zd2FwJmZhbWlseT1BbWlyaSZkaXNwbGF5PXN3YXAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsMzAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9SW50ZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwJmZhbWlseT1Sb2JvdG86d2dodEA3MDAmZGlzcGxheT1zd2FwJmZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgIDxQcm9maWxlIENvdW50cz17Y291bnRzfSBNeWRhdGE9e3Byb2ZpbGV9IHF1ZXJ5PXtnZXRxdWVyeX0gQ29udGVudGRhdGE9e2NvbnRlbnRzfT48L1Byb2ZpbGU+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cXVlcnl9KXsgXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVjaWV2ZT1hd2FpdCBheGlvdXMuYWxsKFtcclxuICAgICAgICAgICAgYXhpb3VzLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke3F1ZXJ5LnVzZXJuYW1lfWApLFxyXG4gICAgICAgICAgICBheGlvdXMuZ2V0KGB1c2VyL2dldHVzZXJjb3VudC8ke3F1ZXJ5LnVzZXJuYW1lfWApLFxyXG4gICAgICAgICAgICBheGlvdXMuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke3F1ZXJ5LnVzZXJuYW1lfS8ke3F1ZXJ5Lm5hbWUgPT0gXCJQb3N0XCIgPyBcInRydWVcIiA6IFwiZmFsc2VcIn0vJHtxdWVyeS5uYW1lfS8xMGApXHJcbiAgICAgICAgXSlcclxuICAgICAgICAgIFxyXG4gICAgICAgIGlmKHJlY2lldmVbMF0uZGF0YSAmJiByZWNpZXZlWzBdLmRhdGEuZXJyb3IgfHwgcmVjaWV2ZVsxXS5kYXRhICYmIHJlY2lldmVbMV0uZGF0YS5lcnJvcil7XHJcbnNcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OntcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjpcIi81MDBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy80MDRcclxuICAgICAgICBpZihyZWNpZXZlWzBdLmRhdGEudXNlcmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOlwiLzQwNC5qc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wcyA6e3Byb2ZpbGU6cmVjaWV2ZVswXS5kYXRhLnVzZXJkYXRhLGNvdW50czpyZWNpZXZlWzFdLmRhdGEuZGF0YSxjb250ZW50czpyZWNpZXZlWzJdLmRhdGEuZGF0YSxnZXRxdWVyeTpxdWVyeX1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjpcIi81MDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn0gXHJcblxyXG5TdHVmZi5sYXlvdXQ9KGNoaWxkcmVuKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbmxheW91dD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTWFpbmxheW91dD5cclxuICAgIClcclxufTsiLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlZGF0ZT0ocHJldmlvdXNkYXRlKT0+e1xyXG5cclxuICAgIGNvbnN0IFByZXZkYXRlPW5ldyBEYXRlKHByZXZpb3VzZGF0ZSk7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlPU1hdGguYWJzKERhdGUubm93KCktUHJldmRhdGUpO1xyXG4gICAgY29uc3Qgc2Vjb25kPU1hdGguY2VpbChkaWZmZXJlbmNlLzEwMDApO1xyXG5cclxuICAgIGlmKHNlY29uZDw2MCl7XHJcblxyXG4gICAgICAgIHJldHVybiB7dGltZTpzZWNvbmQsZXhwcmVzczpcIlNhbml5ZVwifVxyXG5cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+NjAgJiYgc2Vjb25kPDM2MDApe1xyXG5cclxuICAgICAgIHJldHVybiB7dGltZTpNYXRoLmNlaWwoc2Vjb25kLzYwKSxleHByZXNzOlwiRGFraWthXCJ9XHJcbiAgICAgfVxyXG4gICAgIGVsc2UgaWYoc2Vjb25kPjM2MDAgJiYgc2Vjb25kPDg2NDAwKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvKDYwKjYwKSksZXhwcmVzczpcIlNhYXRcIn1cclxuICAgICB9XHJcbiAgICAgZWxzZSBpZihzZWNvbmQ+ODY0MDAgJiYgc2Vjb25kPDI2Mjk3NDM4Myl7XHJcblxyXG4gICAgICAgcmV0dXJuIHt0aW1lOk1hdGguY2VpbChzZWNvbmQvKDYwKjYwKjI0KSksZXhwcmVzczpcIkfDvG5cIn1cclxuXHJcbiAgICAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtY3JvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pcWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=