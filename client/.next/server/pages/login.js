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

/***/ "./Api/requests.js":
/*!*************************!*\
  !*** ./Api/requests.js ***!
  \*************************/
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${contentId}/${last}/${order}/false`); //burada tekrardan bütün yorumlar çekiliyor eklenen en son yorum çekilmeli

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
  ContentId,
  MainparentID,
  setcommentlist,
  commentlist
}) => {
  console.log(MainparentID);

  try {
    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("comment/produceanswer", {
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
      const onlyOnecomment = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${MainparentID}/false/10/true`);
      const copyofcommentlist = [...commentlist];
      const Indexofelement = copyofcommentlist.findIndex(item => item.id == MainparentID);
      copyofcommentlist.splice(Indexofelement, 1, onlyOnecomment.data.data[0]);
      setcommentlist(copyofcommentlist);
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
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
  setloading,
  seteditcomment
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
        seteditcomment(false);
      }, 1000);
    }
  } catch (error) {
    console.log(error);
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
/* harmony import */ var _styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/Globalstyles */ "./components/styledcomponents/Globalstyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Emre\\MyProjects\\Mynextrepo\\client\\components\\UI\\window.js";





const External = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__External",
  componentId: "o1iyjf-0"
})(["position:absolute;left:50%;transform:translate(-50%,-50%);width:300px;height:200px;text-align:center;transition:", ";top:", ";z-index:", ";background-color:white;border-radius:10px;"], ({
  aktif
}) => aktif ? "top 0.4s" : "top 0.4s, z-index 0.6s", ({
  aktif
}) => aktif ? "50%" : "200px", ({
  aktif
}) => aktif ? "180" : "-200");
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
      lineNumber: 32,
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
      lineNumber: 35,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_3__["Black"], {
      onClick: closefunction,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(External, {
      aktif: active,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textbox, {
        children: [icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: 'center',
            wordWrap: 'break-word',
            lineHeight: "25px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
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
          lineNumber: 48,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Window);

/***/ }),

/***/ "./components/styledcomponents/Globalstyles.js":
/*!*****************************************************!*\
  !*** ./components/styledcomponents/Globalstyles.js ***!
  \*****************************************************/
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
  displayName: "Globalstyles__Button",
  componentId: "sc-1wqfwod-0"
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
  displayName: "Globalstyles__Porfileimage",
  componentId: "sc-1wqfwod-1"
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
  displayName: "Globalstyles__Black",
  componentId: "sc-1wqfwod-2"
})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:", ";background:rgba(0,0,0,", ");"], ({
  aktif
}) => aktif ? "150" : "-300", ({
  aktif
}) => aktif ? "0.7" : "0");
const rotate360 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Globalstyles__Spinner",
  componentId: "sc-1wqfwod-3"
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid #6c757d;background:transparent;width:16px;height:16px;border-radius:50%;"], rotate360);

/***/ }),

/***/ "./containers/Layout/routerguard.js":
/*!******************************************!*\
  !*** ./containers/Layout/routerguard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routerguard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");

var _jsxFileName = "C:\\Users\\Emre\\MyProjects\\Mynextrepo\\client\\containers\\Layout\\routerguard.js";



function Routerguard({
  children
}) {
  //homepage
  const myrouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: controller,
    1: setcontroller
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userdata,
    logged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  console.log(logged);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const Token = localStorage.getItem("TOKEN");

    if (userdata.UserId) {
      if (myrouter.pathname == "/[userıd]/liked" || myrouter.pathname == "/[userıd]/saved") {
        if (myrouter.query.userıd == userdata.UserId) {
          setcontroller(true);
        } else {
          myrouter.push("/404");
        }
      }

      if (myrouter.pathname == "/login") {
        console.log(logged);

        if (userdata.UserId) {
          myrouter.push("/");
        } else {
          setcontroller(true);
        }
      }

      if (myrouter.pathname == "/profile/[username]/editprofile") {
        if (myrouter.query.username == userdata.UserId) {
          setcontroller(true);
        } else {
          myrouter.push("/404");
        }
      }

      if (myrouter.pathname == "/Drafts/[userid]") {
        if (myrouter.query.userid == userdata.UserId) {
          setcontroller(true);
        } else {
          myrouter.push("/404");
        }
      }
    }
  }, [userdata]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: controller ? children : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
/* harmony import */ var _Api_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/requests */ "./Api/requests.js");

var _jsxFileName = "C:\\Users\\Emre\\MyProjects\\Mynextrepo\\client\\context\\Usercontext.js";


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

    Object(_Api_requests__WEBPACK_IMPORTED_MODULE_2__["Contextdata"])({
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
/* harmony import */ var _Api_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Api/requests */ "./Api/requests.js");
/* harmony import */ var _components_UI_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/window */ "./components/UI/window.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styledcomponents/Globalstyles */ "./components/styledcomponents/Globalstyles.js");
/* harmony import */ var _containers_Layout_routerguard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/Layout/routerguard */ "./containers/Layout/routerguard.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\Emre\\MyProjects\\Mynextrepo\\client\\pages\\login.js";

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
    setuserdata,
    setspinner
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["EmailOutlined"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 26
        }, undefined);

      case "password":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Lock"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 26
        }, undefined);

      case "name":
      case "surname":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["AccountCircle"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
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
        Object(_Api_requests__WEBPACK_IMPORTED_MODULE_6__["loginreq"])({
          setlogged: setlogged,
          userdata: ourdata,
          router: router,
          setuserdata: setuserdata,
          seterrmsg: seterror,
          setbackenderror: setbackenderror,
          setactive: setactive,
          setspinner: setspinner
        });
        break;

      case "Register":
        Object(_Api_requests__WEBPACK_IMPORTED_MODULE_6__["resigterreq"])({
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
      lineNumber: 296,
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
        lineNumber: 312,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      closefunction: () => setactive(false),
      active: windowactive,
      type: "error",
      children: "E-posta veya \u015Fifre yanl\u0131\u015F!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Registerloginholder, {
        onClick: register == "Login" ? () => setregister("Register") : () => setregister("Login"),
        children: register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Assignment"], {
            style: {
              color: "white",
              borderRadius: "50%",
              fontSize: "30px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 24
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Person"], {
          style: {
            color: "white",
            borderRadius: "50%",
            fontSize: "30px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 24
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 4
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 328,
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
        lineNumber: 331,
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
                lineNumber: 340,
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
            lineNumber: 337,
            columnNumber: 28
          }, undefined)
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 26
        }, undefined)), register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: "#EB3232"
          },
          children: "\u015Eifreni mi unuttun?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 47
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 333,
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
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["ChevronRight"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 46
            }, undefined),
            onClick: register == "Login" ? Submithandler : () => setregister("Login"),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
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
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["SupervisorAccount"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 46
            }, undefined),
            onClick: Submithandler,
            children: "Kay\u0131t Ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 8
  }, undefined);
};
/*
Login.layout=(children)=>{
    return (
           <Guardlayout>
               <React.Fragment>
                  {children}
               </React.Fragment>
           </Guardlayout>
    )
}
*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvd2luZG93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9HbG9iYWxzdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9MYXlvdXQvcm91dGVyZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Vc2VyY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJsb2dvdXQiLCJnZXQiLCJsb2dnZWQiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwidHlwZW9mc3VibWl0IiwicHJvY2Vzc3R5cGUiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbiIsImxlbmd0aCIsInNlbGVjdGlvbnMiLCJzdG9wcmVxdWVzdGluZyIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiQ29tbWVudHJlcSIsInNldGFjdGl2ZXByb2R1Y2UiLCJzZXRjb21tZW50IiwibGFzdCIsImNvbW1lbnRsaXN0IiwiQ29udGV4dGRhdGEiLCJUb2tlbiIsInNldGFsbG93YWN0aW9uIiwibXlkYXRhIiwiaWQiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vycm9sZSIsIlJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkdldHVzZXJjb250ZW50IiwicGFyYW1zIiwic2V0ZGF0YSIsInNldHN0b3BzY3JvbGxpbmciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIm93bmVycG9zdCIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiUHJldmVudCIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiRm9sbG93ZXJJZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJNYWlucGFyZW50SUQiLCJzZXRjb21tZW50bGlzdCIsIkNvbW1lbnRJZCIsIm9ubHlPbmVjb21tZW50IiwiY29weW9mY29tbWVudGxpc3QiLCJJbmRleG9mZWxlbWVudCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJjdXJyZW50YWN0aXZlIiwic3RhdGUiLCJVcGRhdGVQcm9maWxlIiwidHlwZW9mdXBkYXRlIiwic2V0dXBsb2FkaW5nIiwic2V0c3VjY2VzZnVsdXBsb2FkIiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsImNvcHkiLCJ3YXJuaW5nIiwiRWRpdGNvbW1lbnQiLCJjb21tZW50SUQiLCJtZXNzYWdlIiwic2V0bG9hZGluZyIsInNldGVkaXRjb21tZW50IiwiRXh0ZXJuYWwiLCJzdHlsZWQiLCJkaXYiLCJha3RpZiIsIlRleHRib3giLCJXaW5kb3ciLCJjaGlsZHJlbiIsImFjdGl2ZSIsInR5cGUiLCJjbG9zZWZ1bmN0aW9uIiwiaWNvbiIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwid29yZFdyYXAiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJyb3RhdGUzNjAiLCJrZXlmcmFtZXMiLCJTcGlubmVyIiwiUm91dGVyZ3VhcmQiLCJteXJvdXRlciIsInVzZVJvdXRlciIsImNvbnRyb2xsZXIiLCJzZXRjb250cm9sbGVyIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXLEsWQiLCJ1c2VybmFtZSIsInVzZXJpZCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImFsbG93YWN0aW9uIiwiZHJhZnRpZCIsInNldGRyYWZ0aWQiLCJzcGlubmVyIiwiQ3NzVGV4dEZpZWxkIiwibWFrZVN0eWxlcyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiSW1hZ2VEaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJjaGVja3JlZ2lzdGVyIiwiQnV0dG9ucyIsIkljb24iLCJpIiwiSWNvbnNlY3VyZSIsIkxvZ28iLCJSZWdpc3RlcmxvZ2luaG9sZGVyIiwiTG9naW4iLCJzdHlsZXNnZXQiLCJjdXJyZW50dXJsIiwic2V0Y3VycmVudCIsImJhY2tlbmRlcnJvciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJyZWdpc3RlciIsInNldHJlZ2lzdGVyIiwid2luZG93YWN0aXZlIiwiaW5wdXRzIiwic2V0aW5wdXRzIiwiZW1haWwiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsImZvY3VzZWQiLCJwYXNzd29yZCIsIlJlZ2lzdGVyIiwibmFtZSIsInN1cm5hbWUiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJSZW5kZXJpY29uIiwiU3VibWl0aGFuZGxlciIsImN1cnJlbnRpbnB1dCIsIm91cmRhdGEiLCJrZXkiLCJ0cmltIiwiY2hla2NpZmZvY3VzIiwidHlwZW9mZm9jdXMiLCJpbnB1dHNnZXQiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsInNlY3Rpb24iLCJ0YXJnZXQiLCJiYWNrZW5kZXJyb3JtZXNzYWdlIiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZmxleCIsImJveFNpemluZyIsImZsZXhXcmFwIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInN0eWxlIiwiZW5kQWRvcm5tZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFDLENBQUM7QUFBQ0MsTUFBRDtBQUFNQyxXQUFOO0FBQWdCQyxXQUFoQjtBQUEwQkMsZ0JBQTFCO0FBQXlDQyxXQUF6QztBQUFtREM7QUFBbkQsQ0FBRCxLQUFrRTtBQUVsRixNQUFHTCxJQUFJLElBQUlBLElBQUksQ0FBQ00sS0FBaEIsRUFBc0I7QUFFbkJMLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUMsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLFdBQU8sS0FBUDtBQUVGLEdBTkQsTUFPSyxJQUFHRixJQUFJLElBQUksY0FBWCxFQUEwQjtBQUU1Qkcsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQUMsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBQyxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQSxXQUFPLEtBQVA7QUFFRjs7QUFFRCxTQUFPLElBQVA7QUFDRixDQXBCRDs7QUFzQk8sTUFBTUMsUUFBUSxHQUFDLE9BQU07QUFBQ0wsV0FBRDtBQUFXQyxZQUFYO0FBQXNCSyxhQUF0QjtBQUFrQ0MsVUFBbEM7QUFBMkNDLFFBQTNDO0FBQWtEWCxXQUFsRDtBQUE0RFksaUJBQTVEO0FBQTRFQztBQUE1RSxDQUFOLEtBQStGO0FBR2pILE1BQUc7QUFFRCxVQUFLO0FBQUNkO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLFFBQVgsRUFBb0I7QUFBQ0osY0FBUSxFQUFDQTtBQUFWLEtBQXBCLEVBQXdDO0FBQUNLLHFCQUFlLEVBQUM7QUFBakIsS0FBeEMsQ0FBbEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFaOztBQUVBLFFBQUdBLElBQUksQ0FBQ21CLEtBQUwsSUFBYyxJQUFqQixFQUFzQjtBQUVwQk4scUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQUMsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUVELEtBTEQsTUFNSyxJQUFHZCxJQUFJLENBQUNtQixLQUFMLElBQWMsSUFBakIsRUFBc0I7QUFFekJOLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFFRCxLQUxJLE1BTUQ7QUFDRlYsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBTSxpQkFBVyxDQUFDVixJQUFJLENBQUNvQixRQUFOLENBQVg7QUFDQWYsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsa0JBQVksQ0FBQ2MsT0FBYixDQUFxQixPQUFyQixFQUE2QnJCLElBQUksQ0FBQ3NCLEtBQWxDLEVBSkUsQ0FJdUM7O0FBQ3pDVixZQUFNLENBQUNXLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFFRixHQXpCRCxDQXlCQyxPQUFNQyxHQUFOLEVBQVU7QUFDUHZCLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUVKLENBaENNO0FBa0NBLE1BQU13QixNQUFNLEdBQUcsT0FBTTtBQUFDcEIsWUFBRDtBQUFZSyxhQUFaO0FBQXdCTjtBQUF4QixDQUFOLEtBQTJDO0FBRS9ELE1BQUk7QUFFQSxVQUFNUiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFVLFNBQVYsRUFBb0I7QUFBQ1YscUJBQWUsRUFBQztBQUFqQixLQUFwQixDQUFOO0FBQ0FaLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQU0sZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUyxNQUFaO0FBQ0gsR0FQRCxDQU9FLE9BQU9yQixLQUFQLEVBQWMsQ0FDZDtBQUNEO0FBQ0YsQ0FaTTtBQWVBLE1BQU1zQixXQUFXLEdBQUMsT0FBTTtBQUFDZixpQkFBRDtBQUFpQkYsVUFBakI7QUFBMEJHLFdBQTFCO0FBQW9DYjtBQUFwQyxDQUFOLEtBQXVEO0FBQzVFZ0IsU0FBTyxDQUFDQyxHQUFSLENBQVksRUFBWjs7QUFDRixNQUFHO0FBQ0QsVUFBSztBQUFDbEI7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVcsV0FBWCxFQUF1QjtBQUFDSixjQUFRLEVBQUNBO0FBQVYsS0FBdkIsQ0FBbEI7O0FBRUEsUUFBR1gsSUFBSSxDQUFDNkIsS0FBUixFQUFjO0FBQ1ZoQixxQkFBZSxDQUFDLE9BQUQsQ0FBZjtBQUNBQyxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsS0FIRCxNQUlJO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0g7QUFDRixHQVZELENBVUMsT0FBTU0sR0FBTixFQUFVO0FBQ1B2QixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FnQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFDRixDQWhCTTtBQWtCQSxNQUFNWSxVQUFVLEdBQUMsT0FBTTtBQUFDQyxhQUFEO0FBQWE5QixXQUFiO0FBQXVCQyxXQUF2QjtBQUFpQ1UsUUFBakM7QUFBd0NvQjtBQUF4QyxDQUFOLEtBQThEO0FBRXBGLE1BQUc7QUFFRCxVQUFLO0FBQUNoQztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ21CLElBQU4sQ0FBVyxrQkFBWCxrQ0FBa0NnQixXQUFsQztBQUE4Q0UsaUJBQVcsRUFBQ0Q7QUFBMUQsT0FBbEI7O0FBRUEsUUFBR2pDLFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1FLGVBQU47QUFBZ0JEO0FBQWhCLEtBQUQsQ0FBZixFQUE0QztBQUN4Q0MsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBVSxZQUFNLENBQUNXLElBQVAsQ0FBWSxrQkFBWixFQUZ3QyxDQUd4QztBQUNILEtBSkQsTUFLSTtBQUNEO0FBQ0Y7QUFFRixHQWJELENBYUMsT0FBTUMsR0FBTixFQUFVO0FBQ1B2QixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FnQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFFRixDQXBCTTtBQXNCQSxNQUFNZ0IsaUJBQWlCLEdBQUMsT0FBTztBQUFDQyxTQUFEO0FBQVNDLFNBQVQ7QUFBaUJDLGNBQWpCO0FBQThCbkMsV0FBOUI7QUFBd0NvQyxRQUF4QztBQUErQ0MsV0FBL0M7QUFBeUR0QztBQUF6RCxDQUFQLEtBQTZFO0FBRTFHLE1BQUc7QUFFRCxVQUFLO0FBQUNEO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLGtCQUFYLEVBQThCO0FBQUNnQixpQkFBVyxFQUFDO0FBQzNESSxlQUFPLEVBQUNBLE9BRG1EO0FBRTNERyxjQUFNLEVBQUNBLE1BRm9EO0FBRzNEQyxpQkFBUyxFQUFDQSxTQUhpRDtBQUkzREgsZUFBTyxFQUFDQTtBQUptRDtBQUFiLEtBQTlCLENBQWxCOztBQU9BLFFBQUdyQyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQztBQUFOLEtBQUQsQ0FBZixFQUFrQztBQUM5Qm9DLGtCQUFZLENBQUNHLElBQUksSUFBRUEsSUFBSSxHQUFDLENBQVosQ0FBWjtBQUNBLGFBRjhCLENBRzlCO0FBQ0gsS0FKRCxNQUtJO0FBQ0Z2QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0M7QUFDRjtBQUVGLEdBbkJELENBbUJDLE9BQU1NLEdBQU4sRUFBVTtBQUNQdkIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNIO0FBRUYsQ0ExQk07QUE0QkEsTUFBTXVCLE9BQU8sR0FBQyxPQUFNO0FBQUNDLGFBQUQ7QUFBYXJDLFlBQWI7QUFBd0JKLFdBQXhCO0FBQWtDQyxXQUFsQztBQUE0Q3lDLGdCQUE1QztBQUEyREMsT0FBM0Q7QUFBaUVDLFlBQWpFO0FBQTRFQyxVQUE1RTtBQUFxRkMsWUFBckY7QUFBZ0dDLGVBQWhHO0FBQThHQztBQUE5RyxDQUFOLEtBQW9JO0FBQ3ZKLE1BQUk7QUFFRixVQUFLO0FBQUNqRDtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyxtQkFBa0JrQixLQUFNLElBQUdFLFFBQVMsRUFBL0MsRUFBaUQ7QUFBQzlCLHFCQUFlLEVBQUM7QUFBakIsS0FBakQsQ0FBbEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFaOztBQUNBLFFBQUdELFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1DLGVBQU47QUFBZ0JDO0FBQWhCLEtBQUQsQ0FBZixFQUE0QztBQUUxQyxVQUFHRixJQUFJLENBQUNBLElBQUwsQ0FBVWtELE1BQVYsSUFBb0IsQ0FBdkIsRUFBeUI7QUFFdkIsY0FBTUMsVUFBVSxxQkFBT0gsYUFBUCxDQUFoQjs7QUFDQUcsa0JBQVUsQ0FBQ0wsUUFBRCxDQUFWLENBQXFCTSxjQUFyQixHQUFzQyxJQUF0QztBQUNBSCxvQkFBWSxDQUFDRCxhQUFELENBQVo7QUFDQS9CLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUQ7O0FBRUQsVUFBSW1DLE9BQU8sR0FBQyxDQUFDLEdBQUdYLFdBQUosQ0FBWjtBQUNBLFVBQUlZLE1BQU0sR0FBQyxDQUFDLEdBQUd0RCxJQUFJLENBQUNBLElBQVQsQ0FBWDs7QUFFQSxVQUFHK0MsVUFBSCxFQUFjO0FBRVpKLHNCQUFjLENBQUNVLE9BQU8sQ0FBQ0UsTUFBUixDQUFlRCxNQUFmLENBQUQsQ0FBZCxDQUZZLENBSVo7QUFFRCxPQU5ELE1BT0k7QUFFQVgsc0JBQWMsQ0FBQ1csTUFBRCxDQUFkO0FBRUg7O0FBR0QsYUFBT2pELFVBQVUsQ0FBQyxLQUFELENBQWpCO0FBR0QsS0EvQkQsTUFnQ0k7QUFDRjtBQUNEO0FBRUYsR0F4Q0QsQ0F3Q0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1hMLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSjtBQUNGLENBNUNNO0FBK0NBLE1BQU11RCxpQkFBaUIsR0FBQyxPQUFNO0FBQUNsQixRQUFEO0FBQVFtQixRQUFSO0FBQWVDLFdBQWY7QUFBeUJ6RCxXQUF6QjtBQUFtQ0MsV0FBbkM7QUFBNkN5RCxjQUE3QztBQUEwREM7QUFBMUQsQ0FBTixLQUFtRjtBQUVoSCxNQUFJO0FBRUYsVUFBSztBQUFDNUQ7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNtQixJQUFOLENBQVksd0JBQVosRUFBb0M7QUFDcER1QixZQUFNLEVBQUNBLE1BRDZDO0FBRXBEbUIsWUFBTSxFQUFDQSxNQUY2QztBQUdwREMsZUFBUyxFQUFDQSxTQUgwQztBQUlwREMsa0JBQVksRUFBQ0EsWUFKdUM7QUFLcERDLHFCQUFlLEVBQUNBO0FBTG9DLEtBQXBDLENBQWxCO0FBUUEsUUFBRzdELFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1DLGVBQU47QUFBZ0JDO0FBQWhCLEtBQUQsQ0FBZixFQUNBLE9BREEsS0FHQTtBQUdELEdBaEJELENBZ0JFLE9BQU9JLEtBQVAsRUFBYztBQUNYVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQURXLENBRVg7QUFDSjtBQUVGLENBdkJNO0FBMEJBLE1BQU0yQyxVQUFVLEdBQUMsT0FBTTtBQUFDQyxXQUFEO0FBQVdDLFlBQVg7QUFBc0I5RCxXQUF0QjtBQUFnQ0M7QUFBaEMsQ0FBTixLQUFtRDtBQUV6RSxNQUFJO0FBRUYsVUFBSztBQUFDRjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyxXQUFVb0MsU0FBVSxFQUEvQixDQUFsQjs7QUFFQSxRQUFHL0QsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDO0FBQzFDZSxhQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7QUFDQytELGdCQUFVLENBQUMvRCxJQUFJLENBQUNBLElBQU4sQ0FBVjtBQUlGLEtBTkQsTUFPSyxJQUFHQSxJQUFJLElBQUksY0FBWCxFQUEwQixDQUM1QjtBQUNGLEtBRkksTUFHRDtBQUNGO0FBQ0Q7QUFFRixHQWxCRCxDQWtCRSxPQUFPTSxLQUFQLEVBQWE7QUFFVkwsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUVKO0FBRUYsQ0ExQk07QUE0QkEsTUFBTStELFVBQVUsR0FBQyxPQUFNO0FBQUNGLFdBQUQ7QUFBV0csa0JBQVg7QUFBNEJDLFlBQTVCO0FBQXVDakUsV0FBdkM7QUFBaURDLFdBQWpEO0FBQTJEaUUsTUFBM0Q7QUFBZ0V2QixPQUFoRTtBQUFzRXdCO0FBQXRFLENBQU4sS0FBMkY7QUFFakgsTUFBSTtBQUVGLFVBQUs7QUFBQ3BFO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLFdBQVVvQyxTQUFVLElBQUdLLElBQUssSUFBR3ZCLEtBQU0sUUFBaEQsQ0FBbEIsQ0FGRSxDQUdGOztBQUNBLFFBQUc3QyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUMsVUFBSW1ELE9BQU8sR0FBQyxDQUFDLEdBQUdlLFdBQUosQ0FBWjtBQUNBLFVBQUlkLE1BQU0sR0FBQyxDQUFDLEdBQUd0RCxJQUFJLENBQUNBLElBQVQsQ0FBWDtBQUNBaUIsYUFBTyxDQUFDQyxHQUFSLENBQVlvQyxNQUFaOztBQUNBLFVBQUdhLElBQUgsRUFBUTtBQUVORCxrQkFBVSxDQUFDWixNQUFNLENBQUNDLE1BQVAsQ0FBY0YsT0FBZCxDQUFELENBQVYsQ0FGTSxDQUlOO0FBRUQsT0FORCxNQU9JO0FBRUZhLGtCQUFVLENBQUNiLE9BQU8sQ0FBQ0UsTUFBUixDQUFlRCxNQUFmLENBQUQsQ0FBVjtBQUVEOztBQUNBVyxzQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0YsS0FsQkQsTUFvQkssSUFBR2pFLElBQUksSUFBSSxjQUFYLEVBQTBCLENBQzVCO0FBQ0YsS0FGSSxNQUdEO0FBQ0Y7QUFDRDtBQUVGLEdBL0JELENBK0JFLE9BQU9NLEtBQVAsRUFBYTtBQUVWTCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBRUo7QUFFRixDQXZDTTtBQXlDQSxNQUFNb0UsV0FBVyxHQUFDLE9BQU87QUFBQ0MsT0FBRDtBQUFPakUsWUFBUDtBQUFrQkYsZ0JBQWxCO0FBQWlDRixXQUFqQztBQUEyQ0MsV0FBM0M7QUFBcURFLFdBQXJEO0FBQStEbUU7QUFBL0QsQ0FBUCxLQUF3RjtBQUUvRyxNQUFJO0FBRUYsVUFBTTtBQUFDdkU7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsbUJBQVgsRUFBOEI7QUFBQ1YscUJBQWUsRUFBQztBQUFqQixLQUE5QixDQUFuQjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQVo7O0FBRUEsUUFBR0QsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkMsZUFBaEI7QUFBMEJDLG9CQUExQjtBQUF5Q0MsZUFBekM7QUFBbURDO0FBQW5ELEtBQUQsQ0FBZixFQUFnRjtBQUU5RSxZQUFNbUUsTUFBTSxHQUFDO0FBQ1hsQyxjQUFNLEVBQUN0QyxJQUFJLENBQUNXLFFBQUwsQ0FBYzhELEVBRFY7QUFFWEMsZ0JBQVEsRUFBQzFFLElBQUksQ0FBQ1csUUFBTCxDQUFjZ0UsU0FGWjtBQUdYQyxtQkFBVyxFQUFDNUUsSUFBSSxDQUFDVyxRQUFMLENBQWNrRSxRQUhmO0FBSVhDLGdCQUFRLEVBQUM5RSxJQUFJLENBQUNXLFFBQUwsQ0FBY29FLElBSlo7QUFLWEMsaUJBQVMsRUFBQ2hGLElBQUksQ0FBQ1csUUFBTCxDQUFjc0U7QUFMYixPQUFiO0FBUUE5RSxvQkFBYyxDQUFDcUUsTUFBRCxDQUFkO0FBQ0FuRSxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRCxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FtRSxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEtBZEQsTUFlSTtBQUNBO0FBQ0g7QUFHRixHQTFCRCxDQTBCRSxPQUFPL0MsR0FBUCxFQUFZO0FBQ1pQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaO0FBQ0Q7QUFDRixDQS9CTTtBQWlDQSxNQUFNMEQsY0FBYyxHQUFDLE9BQU07QUFBQzVDLFFBQUQ7QUFBUTZDLFFBQVI7QUFBZUMsU0FBZjtBQUF1QmxGLFdBQXZCO0FBQWlDRCxXQUFqQztBQUEyQzJDLE9BQTNDO0FBQWlEeUMsa0JBQWpEO0FBQWtFM0M7QUFBbEUsQ0FBTixLQUF1RjtBQUVqSCxNQUFJO0FBRUYsVUFBSztBQUFDMUM7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsdUJBQXNCeUQsTUFBTyxJQUFHN0MsTUFBTyxJQUFHTSxLQUFNLEVBQTNELENBQWxCO0FBQ0MzQixXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7O0FBQ0QsUUFBR0QsWUFBWSxDQUFDO0FBQUNDO0FBQUQsS0FBRCxDQUFmLEVBQXdCO0FBRXJCLFVBQUcsQ0FBQ0EsSUFBSSxDQUFDQSxJQUFMLENBQVVrRCxNQUFkLEVBQXFCO0FBQ2xCbUMsd0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNGOztBQUdELFlBQU1oQyxPQUFPLEdBQUMsQ0FBQyxHQUFHWCxXQUFKLENBQWQ7QUFDQSxZQUFNWSxNQUFNLEdBQUMsQ0FBQyxHQUFHdEQsSUFBSSxDQUFDQSxJQUFULENBQWIsQ0FScUIsQ0FTdEI7O0FBQ0NvRixhQUFPLENBQUMvQixPQUFPLENBQUNFLE1BQVIsQ0FBZUQsTUFBZixDQUFELENBQVA7QUFFRixLQVpELE1BYUssSUFBR3RELElBQUksSUFBSSxjQUFYLEVBQTBCLENBQzVCO0FBQ0YsS0FGSSxNQUdEO0FBQ0Y7QUFDRDtBQUVGLEdBeEJELENBd0JFLE9BQU9NLEtBQVAsRUFBYTtBQUVWVyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUVKO0FBRUYsQ0FoQ007QUFrQ0EsTUFBTWdGLHVCQUF1QixHQUFDLE9BQU07QUFBQ2hEO0FBQUQsQ0FBTixLQUFpQjtBQUVuRCxNQUFJO0FBRUQsVUFBTTFDLDRDQUFLLENBQUM4QixHQUFOLENBQVcsd0JBQXVCWSxNQUFPLEVBQXpDLENBQU47QUFFRixHQUpELENBSUUsT0FBT2hDLEtBQVAsRUFBYyxDQUNiO0FBQ0Y7QUFFSCxDQVZNO0FBWUEsTUFBTWlGLHFCQUFxQixHQUFDLE9BQU07QUFBQ2xGLFlBQUQ7QUFBWStFLFNBQVo7QUFBb0J0QyxVQUFwQjtBQUE2QlIsUUFBN0I7QUFBb0NrRCxXQUFwQztBQUE4QzVDO0FBQTlDLENBQU4sS0FBNkQ7QUFFOUYsTUFBSTtBQUVGLFVBQUs7QUFBQzVDO0FBQUQsUUFBUSxNQUFNSiw0Q0FBSyxDQUFDOEIsR0FBTixDQUFXLDhCQUE2QlksTUFBTyxJQUFHa0QsU0FBVSxJQUFHMUMsUUFBUyxJQUFHRixLQUFNLEVBQWpGLENBQW5CO0FBQ0EzQixXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7O0FBQ0EsUUFBR0QsWUFBWSxDQUFDO0FBQUNDO0FBQUQsS0FBRCxDQUFmLEVBQXdCO0FBRXJCb0YsYUFBTyxDQUFDLENBQUMsR0FBR3BGLElBQUksQ0FBQ0EsSUFBVCxDQUFELENBQVA7QUFDQUssZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFHRixLQU5ELE1BT0ssSUFBR0wsSUFBSSxJQUFJLGNBQVgsRUFBMEIsQ0FDNUI7QUFDRixLQUZJLE1BR0Q7QUFDRjtBQUNEO0FBRUYsR0FsQkQsQ0FrQkUsT0FBT00sS0FBUCxFQUFhO0FBRVZXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBRUo7QUFDRixDQXpCTTtBQTJCQSxNQUFNbUYsY0FBYyxHQUFDLE9BQU07QUFBQ25ELFFBQUQ7QUFBUTVCO0FBQVIsQ0FBTixLQUE2QjtBQUV2RCxNQUFJO0FBRUYsVUFBSztBQUFDVjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyx1QkFBc0JZLE1BQU8sRUFBeEMsQ0FBbEI7QUFFQXJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBWjs7QUFFQSxRQUFHRCxZQUFZLENBQUM7QUFBQ0M7QUFBRCxLQUFELENBQWYsRUFBd0I7QUFFckJVLGlCQUFXLENBQUNWLElBQUksQ0FBQ1csUUFBTixDQUFYO0FBRUYsS0FKRCxNQUtLLElBQUdYLElBQUksSUFBSSxjQUFYLEVBQTBCLENBQzVCO0FBQ0YsS0FGSSxNQUdEO0FBRUY7QUFFRDtBQUVGLEdBcEJELENBb0JFLE9BQU9NLEtBQVAsRUFBYTtBQUVWVyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUVKO0FBRUYsQ0E1Qk07QUE4QkEsTUFBTW9GLGtCQUFrQixHQUFDLE9BQU07QUFBQ3BELFFBQUQ7QUFBUXFELFNBQVI7QUFBZ0JDLFlBQWhCO0FBQTJCQztBQUEzQixDQUFOLEtBQWtEO0FBRWhGLE1BQUk7QUFFRixVQUFLO0FBQUM3RjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ21CLElBQU4sQ0FBWSx5QkFBWixFQUFxQztBQUNyRCtFLGdCQUFVLEVBQUN4RCxNQUQwQztBQUVyRHNELGdCQUFVLEVBQUNBLFVBRjBDO0FBR3JEQyxtQkFBYSxFQUFDQTtBQUh1QyxLQUFyQyxDQUFsQjtBQUtBRSxjQUFVLENBQUMsTUFBTTtBQUNmSixhQUFPLENBQUNLLE9BQVIsR0FBa0IsSUFBbEI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWOztBQUlBLFFBQUdqRyxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUM7QUFDRCxLQUhELE1BSUs7QUFFTixHQWpCRCxDQWlCRSxPQUFPSSxLQUFQLEVBQWM7QUFDWFcsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFEVyxDQUVYO0FBQ0o7QUFFRixDQXhCTTtBQTBCQSxNQUFNK0UsZUFBZSxHQUFDLE9BQU07QUFBQzNELFFBQUQ7QUFBUTRELFlBQVI7QUFBbUJ0RCxPQUFuQjtBQUF5QnVELFNBQXpCO0FBQWlDQztBQUFqQyxDQUFOLEtBQWtEO0FBRTdFLE1BQUk7QUFHRixVQUFLO0FBQUNwRztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyx3QkFBdUJZLE1BQU8sSUFBR00sS0FBTSxJQUFHd0QsT0FBUSxFQUE3RCxDQUFsQjtBQUNBLFVBQU1DLGFBQWEsR0FBQyxDQUFDLEdBQUdGLE9BQUosQ0FBcEI7QUFDQSxVQUFNRyxPQUFPLEdBQUN0RyxJQUFJLENBQUN3RSxNQUFuQjs7QUFFQSxRQUFHNEIsT0FBSCxFQUFXO0FBQ1RuRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FnRixnQkFBVSxDQUFDSSxPQUFPLENBQUMvQyxNQUFSLENBQWU4QyxhQUFmLENBQUQsQ0FBVjtBQUVELEtBSkQsTUFLSTtBQUNGcEYsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBZ0YsZ0JBQVUsQ0FBQ0csYUFBYSxDQUFDOUMsTUFBZCxDQUFxQitDLE9BQXJCLENBQUQsQ0FBVjtBQUNEO0FBSUYsR0FuQkQsQ0FtQkUsT0FBT2hHLEtBQVAsRUFBYztBQUNYVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQURXLENBRVg7QUFDSjtBQUVGLENBMUJNO0FBNEJBLE1BQU1xRixvQkFBb0IsR0FBQyxPQUFNO0FBQUNqRSxRQUFEO0FBQVFrRTtBQUFSLENBQU4sS0FBOEI7QUFFOUQsTUFBSTtBQUNGdkYsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaO0FBRUEsVUFBSztBQUFDdEM7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcseUJBQXdCWSxNQUFPLEVBQTFDLENBQWxCO0FBR0FrRSxnQkFBWSxDQUFDeEcsSUFBSSxDQUFDQSxJQUFOLENBQVo7QUFJRCxHQVZELENBVUUsT0FBT00sS0FBUCxFQUFjO0FBQ1hXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBRFcsQ0FFWDtBQUNKO0FBRUYsQ0FqQk07QUFtQkEsTUFBTXVGLG9CQUFvQixHQUFDLE9BQU07QUFBQ0MsWUFBRDtBQUFZQyxVQUFaO0FBQXFCN0YsV0FBckI7QUFBK0I4RjtBQUEvQixDQUFOLEtBQXdEO0FBRXhGLE1BQUk7QUFFRixVQUFLO0FBQUM1RztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQzhCLEdBQU4sQ0FBVyxvQkFBbUJnRixVQUFXLEVBQXpDLENBQWxCO0FBRUF6RixXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQ0EsSUFBakI7O0FBRUEsUUFBR0EsSUFBSSxDQUFDQSxJQUFMLENBQVVrRCxNQUFWLElBQW9CLENBQXZCLEVBQXlCO0FBQ3RCcEMsZUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNGLEtBRkQsTUFHSTtBQUNGQSxlQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0E2RixjQUFRLENBQUMzRyxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNEO0FBSUYsR0FoQkQsQ0FnQkUsT0FBT00sS0FBUCxFQUFjO0FBQ1hXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBRFcsQ0FFWDtBQUNKO0FBRUYsQ0F2Qk07QUF5QkEsTUFBTTJGLFVBQVUsR0FBRyxPQUFNO0FBQUNwRCxRQUFEO0FBQVF4RCxXQUFSO0FBQWtCQztBQUFsQixDQUFOLEtBQXFDO0FBRTdELE1BQUk7QUFFRixVQUFLO0FBQUNGO0FBQUQsUUFBTyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLGlCQUFYLEVBQTZCO0FBQzdDMEMsWUFBTSxFQUFDQTtBQURzQyxLQUE3QixDQUFsQjs7QUFJQSxRQUFHMUQsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDO0FBQ3pDZSxhQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQUksQ0FBQzhHLE9BQWpCO0FBQ0YsS0FGRCxNQUdJO0FBQ0Y7QUFDRDtBQUVGLEdBYkQsQ0FhRSxPQUFPeEcsS0FBUCxFQUFhO0FBRWJXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFFRDtBQUVGLENBckJNO0FBdUJBLE1BQU02RixnQkFBZ0IsR0FBRyxPQUFNO0FBQUNDLGdCQUFEO0FBQWdCQyxRQUFoQjtBQUF1QjNFLFFBQXZCO0FBQThCckMsV0FBOUI7QUFBd0NDLFdBQXhDO0FBQWtEcUMsV0FBbEQ7QUFBNEQyRSxjQUE1RDtBQUF5RUMsZ0JBQXpFO0FBQXdGL0M7QUFBeEYsQ0FBTixLQUE2RztBQUMzSW5ELFNBQU8sQ0FBQ0MsR0FBUixDQUFZZ0csWUFBWjs7QUFDQSxNQUFJO0FBRUYsVUFBTWxILElBQUksR0FBRyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFXLHVCQUFYLEVBQW1DO0FBQ3BEcUcsZUFBUyxFQUFDSixjQUQwQztBQUVwRHpFLGVBQVMsRUFBQ0EsU0FGMEM7QUFHcERKLGFBQU8sRUFBQzhFLE1BSDRDO0FBSXBEM0UsWUFBTSxFQUFDQTtBQUo2QyxLQUFuQyxDQUFuQjs7QUFPQSxRQUFHdkMsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDO0FBQ3pDLFlBQU1tSCxjQUFjLEdBQUcsTUFBTXpILDRDQUFLLENBQUM4QixHQUFOLENBQVcsV0FBVXdGLFlBQWEsZ0JBQWxDLENBQTdCO0FBQ0EsWUFBTUksaUJBQWlCLEdBQUcsQ0FBQyxHQUFHbEQsV0FBSixDQUExQjtBQUNBLFlBQU1tRCxjQUFjLEdBQUdELGlCQUFpQixDQUFDRSxTQUFsQixDQUE2QkMsSUFBRCxJQUFRQSxJQUFJLENBQUNoRCxFQUFMLElBQVd5QyxZQUEvQyxDQUF2QjtBQUNBSSx1QkFBaUIsQ0FBQ0ksTUFBbEIsQ0FBeUJILGNBQXpCLEVBQXdDLENBQXhDLEVBQTBDRixjQUFjLENBQUNySCxJQUFmLENBQW9CQSxJQUFwQixDQUF5QixDQUF6QixDQUExQztBQUNBbUgsb0JBQWMsQ0FBQ0csaUJBQUQsQ0FBZDtBQUVGLEtBUEQsTUFRSTtBQUNGO0FBQ0Q7QUFFRixHQXJCRCxDQXFCRSxPQUFPaEgsS0FBUCxFQUFhO0FBRWJXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBRUQ7QUFFRixDQTdCTTtBQStCQSxNQUFNcUgsd0JBQXdCLEdBQUcsT0FBTztBQUFDL0IsWUFBRDtBQUFZRCxTQUFaO0FBQW9CRyxZQUFwQjtBQUErQjhCLGVBQS9CO0FBQTZDM0gsV0FBN0M7QUFBdURDO0FBQXZELENBQVAsS0FBMkU7QUFFakgsTUFBSTtBQUVGLFVBQUs7QUFBQ0Y7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUM4QixHQUFOLENBQVcsc0JBQXFCb0UsVUFBVyxJQUFHRixVQUFXLElBQUdnQyxhQUFjLEVBQTFFLENBQWxCOztBQUVBLFFBQUc3SCxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFekN5RixhQUFPLENBQUNLLE9BQVIsR0FBa0IsSUFBbEI7QUFDQS9FLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsSUFBSSxDQUFDNkgsS0FBakI7QUFDRixLQUpELE1BS0k7QUFDRjtBQUNEO0FBRUYsR0FiRCxDQWFFLE9BQU92SCxLQUFQLEVBQWE7QUFFYlcsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUVEO0FBRUYsQ0FyQk0sQyxDQXFCTjs7QUFFTSxNQUFNNEcsYUFBYSxHQUFHLE9BQU87QUFBQ25ILFVBQUQ7QUFBVW9ILGNBQVY7QUFBdUJDLGNBQXZCO0FBQW9DQyxvQkFBcEM7QUFBdURDLFVBQXZEO0FBQWdFQztBQUFoRSxDQUFQLEtBQXNGO0FBRWpILE1BQUk7QUFFSSxVQUFNO0FBQUNuSTtBQUFELFFBQVMsTUFBTUosNENBQUssQ0FBQ21CLElBQU4sQ0FBWSx1QkFBc0JnSCxZQUFhLEVBQS9DLEVBQWlEcEgsUUFBakQsRUFBMEQ7QUFBQ0sscUJBQWUsRUFBQztBQUFqQixLQUExRCxDQUFyQjs7QUFFQSxRQUFHLENBQUNoQixJQUFJLENBQUM2SCxLQUFULEVBQWU7QUFFWixZQUFNTyxJQUFJLHFCQUFPRixRQUFQLENBQVY7O0FBQ0FFLFVBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCQyxPQUF4QixHQUFrQyxJQUFsQztBQUNBRixpQkFBVyxDQUFDQyxJQUFELENBQVg7QUFFRixLQU5ELE1BTUs7QUFFREgsd0JBQWtCLENBQUMsWUFBRCxDQUFsQjtBQUNBbEMsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZrQywwQkFBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0QsT0FGUyxFQUVSLElBRlEsQ0FBVjtBQUlIOztBQUVERCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUVQLEdBckJELENBcUJDLE9BQU8xSCxLQUFQLEVBQWM7QUFDYlcsV0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFDQTJILHNCQUFrQixDQUFDLE9BQUQsQ0FBbEI7QUFDRDtBQUNGLENBM0JNO0FBNkJBLE1BQU1LLFdBQVcsR0FBRyxPQUFNO0FBQUNDLFdBQUQ7QUFBV0MsU0FBWDtBQUFtQkMsWUFBbkI7QUFBOEJDO0FBQTlCLENBQU4sS0FBc0Q7QUFFM0UsTUFBSTtBQUVGLFVBQU07QUFBQzFJO0FBQUQsUUFBUyxNQUFNSiw0Q0FBSyxDQUFDbUIsSUFBTixDQUFZLHNCQUFaLEVBQWtDO0FBQUN3SCxlQUFTLEVBQUNBLFNBQVg7QUFBcUJDLGFBQU8sRUFBQ0E7QUFBN0IsS0FBbEMsRUFBd0U7QUFBQ3hILHFCQUFlLEVBQUM7QUFBakIsS0FBeEUsQ0FBckI7O0FBRUEsUUFBR2hCLElBQUksQ0FBQzZILEtBQUwsSUFBYyxTQUFqQixFQUEyQjtBQUN6QjlCLGdCQUFVLENBQUMsTUFBTTtBQUNmMEMsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUMsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQ7QUFFRixHQVhELENBV0UsT0FBT3BJLEtBQVAsRUFBYztBQUNaVyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNIO0FBQ04sQ0FoQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwbkJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNcUksUUFBUSxHQUFDQyx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDhMQU9ELENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVdBLEtBQUssR0FBRyxVQUFILEdBQWdCLHdCQVAvQixFQVFSLENBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQVdBLEtBQUssR0FBRyxLQUFILEdBQVcsT0FSbkIsRUFTSixDQUFDO0FBQUNBO0FBQUQsQ0FBRCxLQUFXQSxLQUFLLEdBQUcsS0FBSCxHQUFXLE1BVHZCLENBQWQ7QUFjQSxNQUFNQyxPQUFPLEdBQUNILHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscURBQWI7O0FBT0EsTUFBTUcsTUFBTSxHQUFDLENBQUM7QUFBQ0MsVUFBRDtBQUFVQyxRQUFWO0FBQWlCQyxNQUFqQjtBQUFzQkM7QUFBdEIsQ0FBRCxLQUF3QztBQUVqRCxNQUFJQyxJQUFJLEdBQUUsSUFBVjs7QUFDQSxNQUFHRixJQUFJLElBQUksT0FBWCxFQUFtQjtBQUNoQkUsUUFBSSxnQkFBQztBQUFHLGVBQVMsRUFBQyxpQ0FBYjtBQUErQyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFDLEtBQVA7QUFBYUMsb0JBQVksRUFBQztBQUExQjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQ0YsR0FGRCxNQUdLLElBQUdKLElBQUksSUFBSSxTQUFYLEVBQXFCO0FBQ3ZCRSxRQUFJLGdCQUFDO0FBQUcsZUFBUyxFQUFDLDJCQUFiO0FBQXlDLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUMsT0FBUDtBQUFlQyxvQkFBWSxFQUFDO0FBQTVCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUw7QUFDRjs7QUFDRCxzQkFDRztBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQU8sYUFBTyxFQUFFSCxhQUFoQjtBQUErQixXQUFLLEVBQUVGO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQSxNQUFqQjtBQUFBLDhCQUNHLHFFQUFDLE9BQUQ7QUFBQSxtQkFDT0csSUFEUCxlQUVNO0FBQUcsZUFBSyxFQUFFO0FBQUNHLHFCQUFTLEVBQUMsUUFBWDtBQUFvQkMsb0JBQVEsRUFBQyxZQUE3QjtBQUEwQ0Msc0JBQVUsRUFBQztBQUFyRCxXQUFWO0FBQUEsb0JBQ0lUO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsZUFPRztBQUFLLGFBQUssRUFBRTtBQUFDVSxvQkFBVSxFQUFDO0FBQVosU0FBWjtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sRUFBRVAsYUFBakI7QUFBZ0MsaUJBQU8sRUFBQyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURIO0FBZ0JILENBekJEOztBQTRCZUoscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVksTUFBTSxHQUFDaEIsd0RBQU0sQ0FBQ2lCLE1BQVI7QUFBQTtBQUFBO0FBQUEsR0FBZSxDQUFDO0FBQUNQLE9BQUQ7QUFBT1EsV0FBUDtBQUFpQkMsT0FBakI7QUFBdUJDO0FBQXZCLENBQUQsS0FDakM7QUFDRCxRQUFRRCxLQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRVCxLQUFNO0FBQ2QsbUJBQW1CUSxTQUFVO0FBQzdCO0FBQ0E7QUFDQSx1QkFBdUJFLFNBQVU7QUFDakM7QUFDQTtBQUNBLENBZG1CLENBQVo7QUFpQkEsTUFBTUMsTUFBTSxHQUFDQyxtRUFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPO0FBZ0JBLE1BQU1DLFlBQVksR0FBQ3ZCLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsR0FBWSxDQUFDO0FBQUNrQixPQUFEO0FBQU9LLFFBQVA7QUFBY0M7QUFBZCxDQUFELEtBQTJCO0FBQ2hFLFFBQVFOLEtBQU07QUFDZCxTQUFTSyxNQUFPO0FBQ2hCO0FBQ0E7QUFDQSx1QkFBdUJDLE9BQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FUeUIsQ0FBbEI7QUFhQSxNQUFNQyxLQUFLLEdBQUMxQix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFHQU1SLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVdBLEtBQUssR0FBRyxLQUFILEdBQVcsTUFObkIsRUFPUyxDQUFDO0FBQUNBO0FBQUQsQ0FBRCxLQUFXQSxLQUFLLEdBQUcsS0FBSCxHQUFXLEdBUHBDLENBQVg7QUFXQSxNQUFNeUIsU0FBUyxHQUFHQyxtRUFBSCxnRUFBZjtBQVNBLE1BQU1DLE9BQU8sR0FBRzdCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVFBQ0wwQixTQURLLENBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRVA7QUFDQTtBQUNBO0FBRWUsU0FBU0csV0FBVCxDQUFxQjtBQUFDekI7QUFBRCxDQUFyQixFQUFnQztBQUMzQztBQUVBLFFBQU0wQixRQUFRLEdBQUdDLDZEQUFTLEVBQTFCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTJCQyxzREFBUSxDQUFDLEtBQUQsQ0FBekM7QUFDQSxRQUFNO0FBQUNwSyxZQUFEO0FBQVVnQjtBQUFWLE1BQW9CcUosd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBcEM7QUFHQWhLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUyxNQUFaO0FBRUF1Six5REFBUyxDQUFDLE1BQUk7QUFFVixVQUFNNUcsS0FBSyxHQUFHL0QsWUFBWSxDQUFDNEssT0FBYixDQUFxQixPQUFyQixDQUFkOztBQUVBLFFBQUd4SyxRQUFRLENBQUMyQixNQUFaLEVBQW1CO0FBRWYsVUFBR3FJLFFBQVEsQ0FBQ1MsUUFBVCxJQUFxQixpQkFBckIsSUFBMENULFFBQVEsQ0FBQ1MsUUFBVCxJQUFxQixpQkFBbEUsRUFBb0Y7QUFFaEYsWUFBR1QsUUFBUSxDQUFDVSxLQUFULENBQWVDLE1BQWYsSUFBeUIzSyxRQUFRLENBQUMyQixNQUFyQyxFQUE0QztBQUV4Q3dJLHVCQUFhLENBQUMsSUFBRCxDQUFiO0FBRUgsU0FKRCxNQUtJO0FBRUFILGtCQUFRLENBQUNwSixJQUFULENBQWMsTUFBZDtBQUNIO0FBRUo7O0FBQ0QsVUFBR29KLFFBQVEsQ0FBQ1MsUUFBVCxJQUFxQixRQUF4QixFQUFpQztBQUM3Qm5LLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxNQUFaOztBQUNBLFlBQUdoQixRQUFRLENBQUMyQixNQUFaLEVBQW1CO0FBRWZxSSxrQkFBUSxDQUFDcEosSUFBVCxDQUFjLEdBQWQ7QUFFSCxTQUpELE1BS0k7QUFFQXVKLHVCQUFhLENBQUMsSUFBRCxDQUFiO0FBRUg7QUFFSjs7QUFDRCxVQUFHSCxRQUFRLENBQUNTLFFBQVQsSUFBcUIsaUNBQXhCLEVBQTBEO0FBRXRELFlBQUdULFFBQVEsQ0FBQ1UsS0FBVCxDQUFlRSxRQUFmLElBQTJCNUssUUFBUSxDQUFDMkIsTUFBdkMsRUFBOEM7QUFFMUN3SSx1QkFBYSxDQUFDLElBQUQsQ0FBYjtBQUVILFNBSkQsTUFLSTtBQUVBSCxrQkFBUSxDQUFDcEosSUFBVCxDQUFjLE1BQWQ7QUFDSDtBQUVKOztBQUNELFVBQUdvSixRQUFRLENBQUNTLFFBQVQsSUFBcUIsa0JBQXhCLEVBQTJDO0FBRXZDLFlBQUdULFFBQVEsQ0FBQ1UsS0FBVCxDQUFlRyxNQUFmLElBQXlCN0ssUUFBUSxDQUFDMkIsTUFBckMsRUFBNEM7QUFFeEN3SSx1QkFBYSxDQUFDLElBQUQsQ0FBYjtBQUVILFNBSkQsTUFLSTtBQUVBSCxrQkFBUSxDQUFDcEosSUFBVCxDQUFjLE1BQWQ7QUFDSDtBQUVKO0FBRUo7QUFFSixHQTlEUSxFQThEUCxDQUFDWixRQUFELENBOURPLENBQVQ7QUFpRUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsY0FDTWtLLFVBQVUsR0FBRzVCLFFBQUgsR0FBYztBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkQ7QUFDQTtBQUVPLE1BQU1nQyxpQkFBaUIsZ0JBQUNRLDJEQUFhLEVBQXJDOztBQUVQLE1BQU1DLFdBQVcsR0FBQyxDQUFDO0FBQUN6QztBQUFELENBQUQsS0FBYztBQUU1QixRQUFLO0FBQUEsT0FBQ3RILE1BQUQ7QUFBQSxPQUFRdkI7QUFBUixNQUFtQjJLLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQUs7QUFBQSxPQUFDWSxXQUFEO0FBQUEsT0FBYXBIO0FBQWIsTUFBNkJ3RyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFLO0FBQUEsT0FBQ3BLLFFBQUQ7QUFBQSxPQUFVRDtBQUFWLE1BQXVCcUssc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBSztBQUFBLE9BQUNhLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXFCZCxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFLO0FBQUEsT0FBQ2UsT0FBRDtBQUFBLE9BQVN6TDtBQUFULE1BQXFCMEssc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBRUFHLHlEQUFTLENBQUMsTUFBSTtBQUVWLFVBQU01SixLQUFLLEdBQUNmLFlBQVksQ0FBQzRLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWixDQUZVLENBSVY7O0FBRUk5RyxxRUFBVyxDQUFDO0FBQ1JDLFdBQUssRUFBQ2hELEtBREU7QUFFUm5CLG9CQUFjLEVBQUNPLFdBRlA7QUFHUk4sZUFBUyxFQUFDQSxTQUhGO0FBSVJDLGdCQUFVLEVBQUNBLFVBSkg7QUFLUmtFLG9CQUFjLEVBQUNBO0FBTFAsS0FBRCxDQUFYLENBTk0sQ0FjVjtBQUNBO0FBRUE7QUFFSCxHQW5CUSxFQW1CUCxFQW5CTyxDQUFUO0FBcUJBLHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0MsU0FBSyxFQUFFO0FBQ0g1QyxZQUFNLEVBQUNBLE1BREo7QUFFSGdLLGlCQUFXLEVBQUNBLFdBRlQ7QUFHSHZMLGVBQVMsRUFBQ0EsU0FIUDtBQUlITyxjQUFRLEVBQUNBLFFBSk47QUFLSEQsaUJBQVcsRUFBQ0EsV0FMVDtBQU1Ib0wsYUFBTyxFQUFDQSxPQU5MO0FBT0h6TCxnQkFQRztBQU9RQSxnQkFQUjtBQVFIdUwsYUFBTyxFQUFDQSxPQVJMO0FBU0hDLGdCQVRHO0FBU1FBO0FBVFIsS0FEUjtBQUFBLGNBYUs1QztBQWJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCSCxDQTlDRDs7QUFnRGV5QywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1LLFlBQVksR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0osNkJBQXlCO0FBQ3ZCM0MsV0FBSyxFQUFFO0FBRGdCLEtBRHJCO0FBSUosbUNBQStCO0FBQzdCNEMsdUJBQWlCLEVBQUU7QUFEVSxLQUozQjtBQU9KLGdDQUE0QjtBQUMxQixvQkFBYztBQUNaQyxtQkFBVyxFQUFFO0FBREQsT0FEWTtBQUkxQiwwQkFBb0I7QUFDbEJBLG1CQUFXLEVBQUU7QUFESyxPQUpNO0FBTzFCLGdDQUEwQjtBQUN4QkEsbUJBQVcsRUFBRTtBQURXO0FBUEE7QUFQeEI7QUFEc0IsQ0FBRCxDQUEvQjtBQXNCQSxNQUFNQyxRQUFRLEdBQUd4RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhOQUFkO0FBYUEsTUFBTXdELEtBQUssR0FBQ3pELHdEQUFNLENBQUMwRCxLQUFSO0FBQUE7QUFBQTtBQUFBLHVKQUFYO0FBY0EsTUFBTUMsU0FBUyxHQUFDM0Qsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnUkFBZjtBQWlCQSxNQUFNMkQsV0FBVyxHQUFDNUQsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxRUFFVCxDQUFDO0FBQUM0RDtBQUFELENBQUQsS0FBbUJBLGFBQWEsR0FBRyxLQUFILEdBQVcsTUFGbEMsQ0FBakI7QUFNQSxNQUFNQyxPQUFPLEdBQUM5RCx3REFBTSxDQUFDaUIsTUFBUjtBQUFBO0FBQUE7QUFBQSw4T0FBYjtBQWtCQSxNQUFNOEMsSUFBSSxHQUFDL0Qsd0RBQU0sQ0FBQ2dFLENBQVI7QUFBQTtBQUFBO0FBQUEsd0NBQVY7QUFLQSxNQUFNQyxVQUFVLEdBQUNqRSx3REFBTSxDQUFDZ0UsQ0FBUjtBQUFBO0FBQUE7QUFBQSxnSkFBaEI7QUFXQSxNQUFNRSxJQUFJLEdBQUNsRSx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1LQUFWO0FBVUEsTUFBTWtFLG1CQUFtQixHQUFDbkUsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2UEFBekI7O0FBc0JBLE1BQU1tRSxLQUFLLEdBQUMsTUFBSTtBQUVaLFFBQU1DLFNBQVMsR0FBQ2xCLFlBQVksRUFBNUI7QUFDQSxRQUFLO0FBQUMzTCxhQUFEO0FBQVdNLGVBQVg7QUFBdUJMO0FBQXZCLE1BQW1DMkssd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBbEQ7QUFDQSxRQUFLO0FBQUEsT0FBQ2lDLFVBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQXdCcEMsc0RBQVEsQ0FBQyxFQUFELENBQXJDO0FBQ0EsUUFBSztBQUFBLE9BQUNxQyxZQUFEO0FBQUEsT0FBY3ZNO0FBQWQsTUFBK0JrSyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFLO0FBQUEsT0FBQ3NDLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQW9CdkMsc0RBQVEsQ0FBQyxLQUFELENBQWpDO0FBQ0EsUUFBSztBQUFBLE9BQUN3QyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QnpDLHNEQUFRLENBQUMsT0FBRCxDQUFwQztBQUNBLFFBQUs7QUFBQSxPQUFDMEMsWUFBRDtBQUFBLE9BQWMzTTtBQUFkLE1BQXlCaUssc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTW5LLE1BQU0sR0FBQ2dLLDZEQUFTLEVBQXRCO0FBQ0EsUUFBSztBQUFBLE9BQUM4QyxNQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQjVDLHNEQUFRLENBQUM7QUFFN0JpQyxTQUFLLEVBQUM7QUFDRlksV0FBSyxFQUFDO0FBQ0ZDLG1CQUFXLEVBQUMsU0FEVjtBQUVGQyxZQUFJLEVBQUMsT0FGSDtBQUdGQyxhQUFLLEVBQUMsRUFISjtBQUlGMUUsWUFBSSxFQUFDLGlCQUpIO0FBS0YyRSxlQUFPLEVBQUM7QUFMTixPQURKO0FBUUZDLGNBQVEsRUFBQztBQUNMSixtQkFBVyxFQUFDLE9BRFA7QUFFTEMsWUFBSSxFQUFDLE9BRkE7QUFHTEMsYUFBSyxFQUFDLEVBSEQ7QUFJTDFFLFlBQUksRUFBQyxtQkFKQTtBQUtMMkUsZUFBTyxFQUFDO0FBTEg7QUFSUCxLQUZ1QjtBQWtCN0JFLFlBQVEsRUFBQztBQUNMQyxVQUFJLEVBQUM7QUFDRk4sbUJBQVcsRUFBQyxNQURWO0FBRUZDLFlBQUksRUFBQyxVQUZIO0FBR0ZDLGFBQUssRUFBQyxFQUhKO0FBSUYxRSxZQUFJLEVBQUMsYUFKSDtBQUtGMkUsZUFBTyxFQUFDO0FBTE4sT0FEQTtBQVFMSSxhQUFPLEVBQUM7QUFDSlAsbUJBQVcsRUFBQyxVQURSO0FBRUpDLFlBQUksRUFBQyxVQUZEO0FBR0pDLGFBQUssRUFBQyxFQUhGO0FBSUoxRSxZQUFJLEVBQUMsYUFKRDtBQUtKMkUsZUFBTyxFQUFDO0FBTEosT0FSSDtBQWVMSixXQUFLLEVBQUM7QUFDRkMsbUJBQVcsRUFBQyxTQURWO0FBRUZDLFlBQUksRUFBQyxVQUZIO0FBR0ZDLGFBQUssRUFBQyxFQUhKO0FBSUYxRSxZQUFJLEVBQUMsaUJBSkg7QUFLRjJFLGVBQU8sRUFBQztBQUxOLE9BZkQ7QUFzQkxDLGNBQVEsRUFBQztBQUNMSixtQkFBVyxFQUFDLE9BRFA7QUFFTEMsWUFBSSxFQUFDLFVBRkE7QUFHTEMsYUFBSyxFQUFDLEVBSEQ7QUFJTDFFLFlBQUksRUFBQyxtQkFKQTtBQUtMMkUsZUFBTyxFQUFDO0FBTEg7QUF0Qko7QUFsQm9CLEdBQUQsQ0FBaEM7QUFrREE5Qyx5REFBUyxDQUFDLE1BQUk7QUFFWGpLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFFQSxVQUFNbU4sTUFBTSxHQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLEtBQWdCLEVBQTNCLENBQWI7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVLLEdBakJRLEVBaUJQLEVBakJPLENBQVQ7O0FBbUJBLFFBQU1HLFVBQVUsR0FBRS9HLElBQUQsSUFBUTtBQUVuQixZQUFPQSxJQUFQO0FBQ0ksV0FBSyxPQUFMO0FBQ0ksNEJBQU8scUVBQUMsaUVBQUQ7QUFBZSxlQUFLLEVBQUU7QUFBQzZCLGlCQUFLLEVBQUM7QUFBUDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQOztBQUNKLFdBQUssVUFBTDtBQUNJLDRCQUFPLHFFQUFDLHdEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUNBLGlCQUFLLEVBQUM7QUFBUDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7O0FBQ0osV0FBSyxNQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0ksNEJBQU8scUVBQUMsaUVBQUQ7QUFBZSxlQUFLLEVBQUU7QUFBQ0EsaUJBQUssRUFBQztBQUFQO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFQUjtBQVNMLEdBWEQ7O0FBYUEsUUFBTW1GLGFBQWEsR0FBQyxNQUFJO0FBRXBCeE4sV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFFQSxVQUFNd04sWUFBWSxxQkFBS2hCLE1BQUwsQ0FBbEI7O0FBQ0EsVUFBTWlCLE9BQU8sR0FBQyxFQUFkOztBQUNBLFNBQUssTUFBTUMsR0FBWCxJQUFrQkYsWUFBWSxDQUFDbkIsUUFBRCxDQUE5QixFQUEwQztBQUN0Q29CLGFBQU8sQ0FBQ0MsR0FBRCxDQUFQLEdBQWFGLFlBQVksQ0FBQ25CLFFBQUQsQ0FBWixDQUF1QnFCLEdBQXZCLEVBQTRCYixLQUE1QixDQUFrQ2MsSUFBbEMsRUFBYjtBQUNIOztBQUdELFlBQU90QixRQUFQO0FBQ0ksV0FBSyxPQUFMO0FBQ0k5TSxzRUFBUSxDQUFDO0FBQ0pMLG1CQUFTLEVBQUNBLFNBRE47QUFFSk8sa0JBQVEsRUFBQ2dPLE9BRkw7QUFHSi9OLGdCQUFNLEVBQUNBLE1BSEg7QUFJSkYscUJBQVcsRUFBQ0EsV0FKUjtBQUtKVCxtQkFBUyxFQUFDcU4sUUFMTjtBQU1Kek0seUJBQWUsRUFBQ0EsZUFOWjtBQU9KQyxtQkFBUyxFQUFDQSxTQVBOO0FBUUpULG9CQUFVLEVBQUNBO0FBUlAsU0FBRCxDQUFSO0FBVUE7O0FBQ0osV0FBSyxVQUFMO0FBQ0l1Qix5RUFBVyxDQUFDO0FBQ1JmLHlCQUFlLEVBQUNBLGVBRFI7QUFFUkYsa0JBQVEsRUFBQ2dPLE9BRkQ7QUFHUjFPLG1CQUFTLEVBQUNxTixRQUhGO0FBSVJ4TSxtQkFBUyxFQUFDQTtBQUpGLFNBQUQsQ0FBWDtBQWRSO0FBc0JILEdBakNEOztBQW1DQSxRQUFNZ08sWUFBWSxHQUFDLENBQUNDLFdBQUQsRUFBYTVGLElBQWIsS0FBb0I7QUFFbkMsVUFBTTZGLFNBQVMscUJBQUt0QixNQUFMLENBQWY7O0FBQ0FzQixhQUFTLENBQUN6QixRQUFELENBQVQsQ0FBb0JwRSxJQUFwQixFQUEwQjZFLE9BQTFCLEdBQWtDZSxXQUFXLElBQUksT0FBZixHQUF5QixJQUF6QixHQUFnQyxLQUFsRTtBQUNBcEIsYUFBUyxDQUFDcUIsU0FBRCxDQUFUO0FBQ0gsR0FMRDs7QUFPQSxRQUFNQyxhQUFhLEdBQUMsQ0FBQ0MsQ0FBRCxFQUFHL0YsSUFBSCxFQUFRZ0csT0FBUixLQUFrQjtBQUNsQyxVQUFNSCxTQUFTLHFCQUFLdEIsTUFBTCxDQUFmOztBQUNBc0IsYUFBUyxDQUFDN0YsSUFBRCxDQUFULENBQWdCZ0csT0FBaEIsRUFBeUJwQixLQUF6QixHQUErQm1CLENBQUMsQ0FBQ0UsTUFBRixDQUFTckIsS0FBeEM7QUFDQUosYUFBUyxDQUFDcUIsU0FBRCxDQUFUO0FBQ0gsR0FKRDs7QUFNQSxNQUFJSyxtQkFBbUIsR0FBQyxFQUF4Qjs7QUFDQSxNQUFHaEMsUUFBSCxFQUFZO0FBQ1Isd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSDs7QUFFRCxNQUFHRCxZQUFZLElBQUksT0FBbkIsRUFBMkI7QUFDekJpQyx1QkFBbUIsR0FBQyxtQ0FBcEI7QUFDRCxHQUZELE1BR0ssSUFBR2pDLFlBQVksSUFBSSxJQUFuQixFQUF3QjtBQUMzQmlDLHVCQUFtQixHQUFDLDBCQUFwQjtBQUNELEdBRkksTUFHQSxJQUFHakMsWUFBWSxJQUFJLElBQW5CLEVBQXdCO0FBQzNCaUMsdUJBQW1CLEdBQUMsNEJBQXBCO0FBQ0Q7O0FBRUQsc0JBQ0cscUVBQUMsUUFBRDtBQUFVLFVBQU0sRUFBRW5DLFVBQWxCO0FBQThCLFNBQUssRUFBRSxJQUFyQztBQUFBLDRCQUNLLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsNEVBQTVCO0FBQXlHLGlCQUFTLEVBQUMsaUdBQW5IO0FBQXFOLG1CQUFXLEVBQUM7QUFBak87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREwsZUFLSyxxRUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxMLGVBTUkscUVBQUMsNkRBQUQ7QUFBUSxtQkFBYSxFQUFFLE1BQUlwTSxTQUFTLENBQUMsS0FBRCxDQUFwQztBQUE2QyxZQUFNLEVBQUUyTSxZQUFyRDtBQUFtRSxVQUFJLEVBQUMsT0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0kscUVBQUMsbUJBQUQ7QUFBcUIsZUFBTyxFQUFFRixRQUFRLElBQUksT0FBWixHQUFzQixNQUFJQyxXQUFXLENBQUMsVUFBRCxDQUFyQyxHQUFvRCxNQUFJQSxXQUFXLENBQUMsT0FBRCxDQUFqRztBQUFBLGtCQUVRRCxRQUFRLElBQUksT0FBWixnQkFDQTtBQUFLLGVBQUssRUFBRTtBQUFDK0IsbUJBQU8sRUFBQztBQUFULFdBQVo7QUFBQSxpQ0FDSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQ2hHLG1CQUFLLEVBQUMsT0FBUDtBQUFlaUcsMEJBQVksRUFBQyxLQUE1QjtBQUFrQ0Msc0JBQVEsRUFBQztBQUEzQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxnQkFLQSxxRUFBQywwREFBRDtBQUFRLGVBQUssRUFBRTtBQUFDbEcsaUJBQUssRUFBQyxPQUFQO0FBQWVpRyx3QkFBWSxFQUFDLEtBQTVCO0FBQWtDQyxvQkFBUSxFQUFDO0FBQTNDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFXSTtBQUFLLGFBQUssRUFBRTtBQUFDQyxjQUFJLEVBQUM7QUFBTixTQUFaO0FBQUEsK0JBQ0cscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSixlQWNJO0FBQUksYUFBSyxFQUFFO0FBQUNuRyxlQUFLLEVBQUMsT0FBUDtBQUFlbUcsY0FBSSxFQUFDLENBQXBCO0FBQXNCaEcsa0JBQVEsRUFBQztBQUEvQixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRKLGVBZ0JJO0FBQUssYUFBSyxFQUFFO0FBQUNNLGVBQUssRUFBQ3dELFFBQVEsSUFBSSxVQUFaLEdBQXlCLE1BQXpCLEdBQWtDLEtBQXpDO0FBQStDbUMsbUJBQVMsRUFBQyxZQUF6RDtBQUFzRUQsY0FBSSxFQUFDLENBQTNFO0FBQTZFSCxpQkFBTyxFQUFDL0IsUUFBUSxJQUFJLFVBQVosR0FBeUIsTUFBekIsR0FBa0MsT0FBdkg7QUFBK0hvQyxrQkFBUSxFQUFDO0FBQXhJLFNBQVo7QUFBQSxtQkFFU0MsTUFBTSxDQUFDQyxJQUFQLENBQVluQyxNQUFNLENBQUNILFFBQUQsQ0FBbEIsRUFBOEJ1QyxHQUE5QixDQUFrQ3JJLElBQUksaUJBQ3JDLHFFQUFDLFdBQUQ7QUFBYyx1QkFBYSxFQUFFOEYsUUFBUSxJQUFJLFVBQVosR0FBeUIsSUFBekIsR0FBOEIsS0FBM0Q7QUFBQSxpQ0FDRSxxRUFBQywyREFBRDtBQUNDLHNCQUFVLEVBQUU7QUFDUndDLG1CQUFLLEVBQUM7QUFBQ3pHLHFCQUFLLEVBQUM7QUFBUCxlQURFO0FBRVIwRywwQkFBWSxlQUFFLHFFQUFDLGdFQUFEO0FBQWdCLHdCQUFRLEVBQUMsS0FBekI7QUFBQSwwQkFBZ0N4QixVQUFVLENBQUMvRyxJQUFEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTixhQURiO0FBS0MscUJBQVMsRUFBRXdGLFNBQVMsQ0FBQ2hCLElBTHRCO0FBTUMsZ0JBQUksRUFBRXhFLElBQUksSUFBSSxVQUFSLEdBQXFCLFVBQXJCLEdBQWtDLEVBTnpDO0FBT0Msb0JBQVEsRUFBR3lILENBQUQsSUFBS0QsYUFBYSxDQUFDQyxDQUFELEVBQUczQixRQUFILEVBQVk5RixJQUFaLENBUDdCO0FBUUMsbUJBQU8sRUFBRSxNQUFJcUgsWUFBWSxDQUFDLE9BQUQsRUFBU3JILElBQVQsQ0FSMUI7QUFTQyxrQkFBTSxFQUFFLE1BQUlxSCxZQUFZLENBQUMsUUFBRCxFQUFVckgsSUFBVixDQVR6QjtBQVVDLGlCQUFLLEVBQUVpRyxNQUFNLENBQUNILFFBQUQsQ0FBTixDQUFpQjlGLElBQWpCLEVBQXVCc0csS0FWL0I7QUFXQyxtQkFBTyxFQUFFTCxNQUFNLENBQUNILFFBQUQsQ0FBTixDQUFpQjlGLElBQWpCLEVBQXVCc0csS0FBdkIsS0FBaUMsRUFBakMsSUFBdUNMLE1BQU0sQ0FBQ0gsUUFBRCxDQUFOLENBQWlCOUYsSUFBakIsRUFBdUJ1RyxPQUF2QixJQUFrQyxJQUF6RSxHQUFnRixJQUFoRixHQUF1RixLQVhqRztBQVlDLGdCQUFJLEVBQUMsT0FaTjtBQWFDLGlCQUFLLEVBQUVOLE1BQU0sQ0FBQ0gsUUFBRCxDQUFOLENBQWlCOUYsSUFBakIsRUFBdUJvRyxXQWIvQjtBQWNDLG1CQUFPLEVBQUM7QUFkVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBdUVwRyxJQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELENBRlQsRUF1QlM4RixRQUFRLElBQUksT0FBWixnQkFBc0I7QUFBRyxlQUFLLEVBQUU7QUFBQ2pFLGlCQUFLLEVBQUM7QUFBUCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF0QixHQUE2RSxFQXZCdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSixlQTBDSztBQUFLLGFBQUssRUFBRTtBQUFDZ0csaUJBQU8sRUFBQyxNQUFUO0FBQWdCRyxjQUFJLEVBQUMsR0FBckI7QUFBeUIxRixlQUFLLEVBQUM7QUFBL0IsU0FBWjtBQUFBLCtCQUNRLHFFQUFDLFdBQUQ7QUFBQSxvQkFFUXdELFFBQVEsSUFBSSxPQUFaLGdCQUNBLHFFQUFDLHdEQUFEO0FBQ0ksaUJBQUssRUFBRTtBQUFDeEQsbUJBQUssRUFBQztBQUFQLGFBRFg7QUFFSSxzQkFBVSxFQUFFO0FBQUNnRyxtQkFBSyxFQUFDO0FBQUN6RyxxQkFBSyxFQUFDO0FBQVA7QUFBUCxhQUZoQjtBQUdJLG1CQUFPLEVBQUMsV0FIWjtBQUlJLG1CQUFPLGVBQUUscUVBQUMsZ0VBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNrRyx3QkFBUSxFQUFDO0FBQVY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKYjtBQUtJLG1CQUFPLEVBQUVqQyxRQUFRLElBQUksT0FBWixHQUFzQmtCLGFBQXRCLEdBQXNDLE1BQUlqQixXQUFXLENBQUMsT0FBRCxDQUxsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxnQkFVQSxxRUFBQyx3REFBRDtBQUNJLGlCQUFLLEVBQUU7QUFBQ3pELG1CQUFLLEVBQUM7QUFBUCxhQURYO0FBRUksc0JBQVUsRUFBRTtBQUFDZ0csbUJBQUssRUFBQztBQUFDekcscUJBQUssRUFBQztBQUFQO0FBQVAsYUFGaEI7QUFHSSxtQkFBTyxFQUFDLFdBSFo7QUFJSSxpQkFBSyxFQUFDLFdBSlY7QUFLSSxtQkFBTyxlQUFFLHFFQUFDLHFFQUFEO0FBQW1CLG1CQUFLLEVBQUU7QUFBQ2tHLHdCQUFRLEVBQUM7QUFBVjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxiO0FBTUksbUJBQU8sRUFBRWYsYUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUErRUgsQ0ExT0Q7QUE0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSWV6QixvRUFBZixFOzs7Ozs7Ozs7OztBQ25aQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCJcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcbiAgICBcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMoe3NldHNwaW5uZXIsc2V0dXNlcmRhdGEsc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9sb2dvdXRcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpXHJcbiAgICAgIHNldHVzZXJkYXRhKHt9KVxyXG4gICAgICBzZXRzcGlubmVyKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuICAgICAgICBzZWxlY3Rpb25zW2NhdGVnb3J5XS5zdG9wcmVxdWVzdGluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0c2VsZWN0aW9uKHNlbGVjdGlvbmxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcHBlZCByZXF1ZXN0XCIpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYocGFpZ25hdGlvbil7XHJcblxyXG4gICAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICAgIHNldGNvbnRlbnRkYXRhKE15ZGF0YSlcclxuIFxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgIHJldHVybiBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn0vZmFsc2VgKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhNeWRhdGEpXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWQsc2V0YWxsb3dhY3Rpb259KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEuUm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7ICBcclxuICAgICAgc2V0YWxsb3dhY3Rpb24odHJ1ZSk7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRzcGlubmVyLHNldGRhdGEsY2F0ZWdvcnksVXNlcklkLG93bmVycG9zdCxvcmRlcn0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09IGF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZWNvbnRlbnQvJHtVc2VySWR9LyR7b3duZXJwb3N0fS8ke2NhdGVnb3J5fS8ke29yZGVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShbLi4uZGF0YS5kYXRhXSlcclxuICAgICAgIHNldHNwaW5uZXIoZmFsc2UpXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxQcmV2ZW50LEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBcclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3QgPSBhc3luYyh7UG9zdElkLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJ1c2VyL2RlbGV0ZXBvc3RcIix7XHJcbiAgICAgIFBvc3RJZDpQb3N0SWRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudGFuc3dlcnJlcSA9IGFzeW5jKHtVcHBlcmNvbW1lbnRJZCxBbnN3ZXIsVXNlcklkLHNldGVycm1zZyxzZXR3aW5kb3csQ29udGVudElkLE1haW5wYXJlbnRJRCxzZXRjb21tZW50bGlzdCxjb21tZW50bGlzdH0pPT57XHJcbiAgY29uc29sZS5sb2coTWFpbnBhcmVudElEKVxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJjb21tZW50L3Byb2R1Y2VhbnN3ZXJcIix7XHJcbiAgICAgIENvbW1lbnRJZDpVcHBlcmNvbW1lbnRJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgTWVzc2FnZTpBbnN3ZXIsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7ICAgXHJcbiAgICAgICBjb25zdCBvbmx5T25lY29tbWVudCA9IGF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke01haW5wYXJlbnRJRH0vZmFsc2UvMTAvdHJ1ZWApXHJcbiAgICAgICBjb25zdCBjb3B5b2Zjb21tZW50bGlzdCA9IFsuLi5jb21tZW50bGlzdF1cclxuICAgICAgIGNvbnN0IEluZGV4b2ZlbGVtZW50ID0gY29weW9mY29tbWVudGxpc3QuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSBNYWlucGFyZW50SUQpXHJcbiAgICAgICBjb3B5b2Zjb21tZW50bGlzdC5zcGxpY2UoSW5kZXhvZmVsZW1lbnQsMSxvbmx5T25lY29tbWVudC5kYXRhLmRhdGFbMF0pXHJcbiAgICAgICBzZXRjb21tZW50bGlzdChjb3B5b2Zjb21tZW50bGlzdClcclxuICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSA9IGFzeW5jICh7Rm9sbG93ZWRJZCxQcmV2ZW50LEZvbGxvd2VySWQsY3VycmVudGFjdGl2ZSxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvdXBkYXRldXNlcm5vdC8ke0ZvbGxvd2VySWR9LyR7Rm9sbG93ZWRJZH0vJHtjdXJyZW50YWN0aXZlfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcblxyXG4gICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0ZSk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn0vL3VzZXIgYWxlcnQgYWN0aXZhdGVkIG9yIG5vdFxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVByb2ZpbGUgPSBhc3luYyAoe3VzZXJkYXRhLHR5cGVvZnVwZGF0ZSxzZXR1cGxvYWRpbmcsc2V0c3VjY2VzZnVsdXBsb2FkLHVzZXJpbmZvLHNldHVzZXJpbmZvfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC91c2VyL3VwZGF0ZXByb2ZpbGUvJHt0eXBlb2Z1cGRhdGV9YCx1c2VyZGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZighZGF0YS5zdGF0ZSl7XHJcblxyXG4gICAgICAgICAgICAgY29uc3QgY29weSA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICAgICAgIGNvcHlbXCJDdXJyZW50cGFzc3dvcmRcIl0ud2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJTVUNDRVNTRlVMXCIpXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJcIilcclxuICAgICAgICAgICAgICB9LDMwMDApO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZXR1cGxvYWRpbmcoZmFsc2UpXHJcblxyXG4gIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgc2V0c3VjY2VzZnVsdXBsb2FkKFwiRVJST1JcIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0Y29tbWVudCA9IGFzeW5jKHtjb21tZW50SUQsbWVzc2FnZSxzZXRsb2FkaW5nLHNldGVkaXRjb21tZW50fSk9PntcclxuXHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9jb21tZW50L0VkaXRDb21tZW50YCx7Y29tbWVudElEOmNvbW1lbnRJRCxtZXNzYWdlOm1lc3NhZ2V9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcblxyXG4gICAgICAgIGlmKGRhdGEuc3RhdGUgPT0gXCJTVUNDRVNTXCIpe1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGxvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldGVkaXRjb21tZW50KGZhbHNlKVxyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9IFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0JsYWNrfSBmcm9tIFwiLi4vc3R5bGVkY29tcG9uZW50cy9HbG9iYWxzdHlsZXNcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7RXJyb3J9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5cclxuY29uc3QgRXh0ZXJuYWw9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG50cmFuc2l0aW9uOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwidG9wIDAuNHNcIiA6IFwidG9wIDAuNHMsIHotaW5kZXggMC42c1wifTtcclxudG9wOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTAlXCIgOiBcIjIwMHB4XCJ9O1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMTgwXCIgOiBcIi0yMDBcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYFxyXG5cclxuY29uc3QgVGV4dGJveD1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjozMHB4IGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuYFxyXG5cclxuY29uc3QgV2luZG93PSh7Y2hpbGRyZW4sYWN0aXZlLHR5cGUsY2xvc2VmdW5jdGlvbn0pPT57XHJcbiAgIFxyXG4gICAgdmFyIGljb249IG51bGw7XHJcbiAgICBpZih0eXBlID09IFwiZXJyb3JcIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwicmVkXCIsbWFyZ2luQm90dG9tOlwiMTBweFwifX0+PC9pPlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlID09IFwiY29uZmlybVwiKXtcclxuICAgICAgIGljb249PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSBmYS0yeFwiIHN0eWxlPXt7Y29sb3I6XCJncmVlblwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8QmxhY2sgb25DbGljaz17Y2xvc2VmdW5jdGlvbn0gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICA8RXh0ZXJuYWwgYWt0aWY9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgIDxUZXh0Ym94PlxyXG4gICAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsd29yZFdyYXA6J2JyZWFrLXdvcmQnLGxpbmVIZWlnaHQ6XCIyNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvVGV4dGJveD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5PSzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9FeHRlcm5hbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZSxrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiB9XHJcblxyXG4gYm9keSB7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcblxyXG4gaHRtbHtcclxuICAgc2Nyb2xsLWJlaGF2aW9yOnNtb290aDtcclxuIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvcmZpbGVpbWFnZT1zdHlsZWQuZGl2KCh7d2lkdGgsaGVpZ2h0LHByb2ZpbGV9KT0+YFxyXG53aWR0aDoke3dpZHRofTtcclxuaGVpZ2h0OiR7aGVpZ2h0fTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjE1MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyZ3VhcmQoe2NoaWxkcmVufSl7XHJcbiAgICAvL2hvbWVwYWdlXHJcblxyXG4gICAgY29uc3QgbXlyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtjb250cm9sbGVyLHNldGNvbnRyb2xsZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YSxsb2dnZWR9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhsb2dnZWQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgaWYobXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvW3VzZXLEsWRdL2xpa2VkXCIgfHwgbXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvW3VzZXLEsWRdL3NhdmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihteXJvdXRlci5xdWVyeS51c2VyxLFkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlyb3V0ZXIucHVzaChcIi9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL1t1c2VybmFtZV0vZWRpdHByb2ZpbGVcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobXlyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRjb250cm9sbGVyKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cm91dGVyLnB1c2goXCIvNDA0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9EcmFmdHMvW3VzZXJpZF1cIil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobXlyb3V0ZXIucXVlcnkudXNlcmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICB7Y29udHJvbGxlciA/IGNoaWxkcmVuIDogbnVsbH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL3JlcXVlc3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWxsb3dhY3Rpb24sc2V0YWxsb3dhY3Rpb25dPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtkcmFmdGlkLHNldGRyYWZ0aWRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIik7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9pZih0b2tlbil7XHJcblxyXG4gICAgICAgICAgICBDb250ZXh0ZGF0YSh7XHJcbiAgICAgICAgICAgICAgICBUb2tlbjp0b2tlbixcclxuICAgICAgICAgICAgICAgIHNldGNvbnRleHRkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHNldGFsbG93YWN0aW9uOnNldGFsbG93YWN0aW9uLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL31cclxuICAgICAgICAvL2Vsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIGFsbG93YWN0aW9uOmFsbG93YWN0aW9uLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc3Bpbm5lcjpzcGlubmVyLFxyXG4gICAgICAgICAgIHNldHNwaW5uZXIsc2V0c3Bpbm5lcixcclxuICAgICAgICAgICBkcmFmdGlkOmRyYWZ0aWQsXHJcbiAgICAgICAgICAgc2V0ZHJhZnRpZCxzZXRkcmFmdGlkLFxyXG4gICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2NyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyY29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge2xvZ2lucmVxLHJlc2lndGVycmVxfSBmcm9tIFwiLi4vQXBpL3JlcXVlc3RzXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvd2luZG93XCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge3dpdGhTdHlsZXMsbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvR2xvYmFsc3R5bGVzXCJcclxuaW1wb3J0IEd1YXJkbGF5b3V0IGZyb20gXCIuLi9jb250YWluZXJzL0xheW91dC9yb3V0ZXJndWFyZFwiO1xyXG5pbXBvcnQge0FjY291bnRDaXJjbGUsRW1haWxPdXRsaW5lZCxMb2NrLEFycm93UmlnaHQsIEFycm93TGVmdCxTdXBlcnZpc29yQWNjb3VudCxTdXBlcnZpc2VkVXNlckNpcmNsZVNoYXJwLCBTdXBlcnZpc29yQWNjb3VudFJvdW5kZWQsIFN1cGVydmlzb3JBY2NvdW50U2hhcnAsIEFjY291bnRDaXJjbGVTaGFycCwgQWNjb3VudENpcmNsZVJvdW5kZWQsIFBlcnNvbiwgSG9tZSwgQXJyb3dSaWdodEFsdFJvdW5kZWQsIENoZXZyb25SaWdodCwgQXNzaWdubWVudH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcbiAgICAgICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNGQkVBNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2xlZC5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjg4JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MzVweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NjAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcblxyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDokeyh7Y2hlY2tyZWdpc3Rlcn0pPT5jaGVja3JlZ2lzdGVyID8gXCI1MCVcIiA6IFwiMTAwJVwifTtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYFxyXG5jb25zdCBCdXR0b25zPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZToxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcIi93YXkuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBSZWdpc3RlcmxvZ2luaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE1cHg7XHJcbnJpZ2h0OjE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDBweDtcclxuaGVpZ2h0OjQwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxudHJhbnNpdGlvbjowLjA5cyBlYXNlLWluO1xyXG4mOmhvdmVyIHtcclxuY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDVweDtcclxuaGVpZ2h0OjQ1cHg7XHJcbn1cclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsZXNnZXQ9Q3NzVGV4dEZpZWxkKCk7XHJcbiAgICBjb25zdHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsc2V0c3Bpbm5lcn09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdFtjdXJyZW50dXJsLHNldGN1cnJlbnRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3RbYmFja2VuZGVycm9yLHNldGJhY2tlbmRlcnJvcl09dXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtyZWdpc3RlcixzZXRyZWdpc3Rlcl09dXNlU3RhdGUoXCJMb2dpblwiKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0W2lucHV0cyxzZXRpbnB1dHNdPXVzZVN0YXRlKHtcclxuXHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXI6e1xyXG4gICAgICAgICAgICBuYW1lOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJTb3kgxLBzaW1cIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH19KTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIik7XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1tYWdpY1wiLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIjU2MzQ5MmFkNmY5MTcwMDAwMTAwMDAwMTRhZGI4MDllODk2MzQ2MDJhODk2ZDhlNjJhODUwNDAxXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnBob3Rvcyk7ICBcclxuICAgICAgICAgICAgc2V0Y3VycmVudChyZXMuZGF0YS5waG90b3NbM10uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiBcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgUmVuZGVyaWNvbj0oaXRlbSk9PntcclxuXHJcbiAgICAgICAgICBzd2l0Y2goaXRlbSl7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8RW1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvRW1haWxPdXRsaW5lZD5cclxuICAgICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMb2NrIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9Mb2NrPlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgY2FzZSBcInN1cm5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9BY2NvdW50Q2lyY2xlPiAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0aGFuZGxlcj0oKT0+e1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGlucHV0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGNvbnN0IG91cmRhdGE9e307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudGlucHV0W3JlZ2lzdGVyXSkge1xyXG4gICAgICAgICAgICBvdXJkYXRhW2tleV09Y3VycmVudGlucHV0W3JlZ2lzdGVyXVtrZXldLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc3dpdGNoKHJlZ2lzdGVyKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxvZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBsb2dpbnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHJvdXRlcjpyb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGJhY2tlbmRlcnJvcjpzZXRiYWNrZW5kZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWdpc3RlclwiOiAgXHJcbiAgICAgICAgICAgICAgICByZXNpZ3RlcnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIGNvbnN0IGNoZWtjaWZmb2N1cz0odHlwZW9mZm9jdXMsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3JlZ2lzdGVyXVt0eXBlXS5mb2N1c2VkPXR5cGVvZmZvY3VzID09IFwiZm9jdXNcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShlLHR5cGUsc2VjdGlvbik9PntcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3R5cGVdW3NlY3Rpb25dLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiXCI7XHJcbiAgICBpZihlcnJvcm1zZyl7XHJcbiAgICAgICAgcmV0dXJuIDxoMj5Tb21ldGhpbmcgV2VudCBXcm9uZy4uLjwvaDI+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGJhY2tlbmRlcnJvciA9PSBcIkVYxLBTVFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmTEn2luaXogZW1haWwgemF0ZW4ga3VsbGFuxLFtZGEhXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV1BcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiDFn2lmcmUgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV0VcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiBlLXBvc3RhIHlhbmzEscWfIVwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SW1hZ2VEaXYgdXJsZ2V0PXtjdXJyZW50dXJsfSBha3RpZj17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgPFdpbmRvdyBjbG9zZWZ1bmN0aW9uPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJlcnJvclwiPkUtcG9zdGEgdmV5YSDFn2lmcmUgeWFubMSxxZ8hPC9XaW5kb3c+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgIDxSZWdpc3RlcmxvZ2luaG9sZGVyIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/ICgpPT5zZXRyZWdpc3RlcihcIlJlZ2lzdGVyXCIpIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L0Fzc2lnbm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L1BlcnNvbj5cclxuICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvUmVnaXN0ZXJsb2dpbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjR9fT5cclxuICAgICAgICAgICAgICAgICAgPExvZ28+PC9Mb2dvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGZsZXg6NCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIn19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwiMTAwJVwiIDogXCI3MCVcIixib3hTaXppbmc6XCJib3JkZXItYm94XCIsZmxleDo3LGRpc3BsYXk6cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gXCJmbGV4XCIgOiBcImJsb2NrXCIsZmxleFdyYXA6XCJ3cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyICBjaGVja3JlZ2lzdGVyPXtyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyB0cnVlOmZhbHNlfSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjb2xvcjpcIndoaXRlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+e1JlbmRlcmljb24oaXRlbSl9PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNnZXQucm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpdGVtID09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PmNoZWtjaWZmb2N1cyhcImZvY3VzXCIsaXRlbSl9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PmNoZWtjaWZmb2N1cyhcInJlbW92ZVwiLGl0ZW0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZD17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS52YWx1ZSAhPT0gXCJcIiB8fCBpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLmZvY3VzZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0ucGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/IDxwIHN0eWxlPXt7Y29sb3I6XCIjRUIzMjMyXCJ9fT7FnmlmcmVuaSBtaSB1bnV0dHVuPzwvcD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjNcIix3aWR0aDpcIjEwMCVcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PENoZXZyb25SaWdodCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+PC9DaGV2cm9uUmlnaHQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyBTdWJtaXRoYW5kbGVyIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8U3VwZXJ2aXNvckFjY291bnQgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PjwvU3VwZXJ2aXNvckFjY291bnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTdWJtaXRoYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5xLF0IE9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvV2luZG93RGl2PlxyXG4gICAgICAgPC9JbWFnZURpdj5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuTG9naW4ubGF5b3V0PShjaGlsZHJlbik9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgPEd1YXJkbGF5b3V0PlxyXG4gICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICA8L0d1YXJkbGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=