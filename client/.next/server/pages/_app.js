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

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());

const Myapp = ({
  Component,
  pageProps
}) => {
  const Layout = Component.layout || (page => page);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Poppins:ital,wght@1,300&display=swap&family=Raleway&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          type: "text/css",
          charset: "UTF-8",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
          integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
          crossOrigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Inter:wght@700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }, undefined), Layout( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 27
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }, undefined)
  }, void 0, false);
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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJsb2dvdXQiLCJnZXQiLCJsb2dnZWQiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwidHlwZW9mc3VibWl0IiwicHJvY2Vzc3R5cGUiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbiIsImxlbmd0aCIsInNlbGVjdGlvbnMiLCJzdG9wcmVxdWVzdGluZyIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiQ29tbWVudHJlcSIsInNldGFjdGl2ZXByb2R1Y2UiLCJzZXRjb21tZW50IiwibGFzdCIsImNvbW1lbnRsaXN0IiwiQ29udGV4dGRhdGEiLCJUb2tlbiIsInNldGFsbG93YWN0aW9uIiwibXlkYXRhIiwiaWQiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vycm9sZSIsIlJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkdldHVzZXJjb250ZW50IiwicGFyYW1zIiwic2V0ZGF0YSIsInNldHN0b3BzY3JvbGxpbmciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIm93bmVycG9zdCIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiUHJldmVudCIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiRm9sbG93ZXJJZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJNYWlucGFyZW50SUQiLCJzZXRjb21tZW50bGlzdCIsIkNvbW1lbnRJZCIsIm9ubHlPbmVjb21tZW50IiwiY29weW9mY29tbWVudGxpc3QiLCJJbmRleG9mZWxlbWVudCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJjdXJyZW50YWN0aXZlIiwic3RhdGUiLCJVcGRhdGVQcm9maWxlIiwidHlwZW9mdXBkYXRlIiwic2V0dXBsb2FkaW5nIiwic2V0c3VjY2VzZnVsdXBsb2FkIiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsImNvcHkiLCJ3YXJuaW5nIiwiRWRpdGNvbW1lbnQiLCJjb21tZW50SUQiLCJtZXNzYWdlIiwic2V0bG9hZGluZyIsInNldGVkaXRjb21tZW50IiwiY3JlYXRldXNlcmNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiYWxsb3dhY3Rpb24iLCJkcmFmdGlkIiwic2V0ZHJhZnRpZCIsInNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJNeWFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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RTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQyw0RUFBNUI7QUFBeUcsbUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4scUJBQVcsRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0U7QUFBTSxjQUFJLEVBQUMscVFBQVg7QUFBaVIsYUFBRyxFQUFDO0FBQXJSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSLEVBUVNGLE1BQU0sZUFBQyxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FSZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxtQkFESDtBQWNILENBbkJEOztBQXFCZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIlxyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICBcclxuICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuICAgIFxyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS53cm9uZyA9PSBcIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nID09IFwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyh7c2V0c3Bpbm5lcixzZXR1c2VyZGF0YSxzZXRsb2dnZWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2xvZ291dFwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSlcclxuICAgICAgc2V0dXNlcmRhdGEoe30pXHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2cobG9nZ2VkKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhxZ9hcsSxbMSxIGthecSxdFwiKVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJzb3J1biB2YXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXIsdHlwZW9mc3VibWl0fSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHsuLi5jb250ZW50ZGF0YSxwcm9jZXNzdHlwZTp0eXBlb2ZzdWJtaXR9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWNlY29tbWVudHJlcT1hc3luYyAoe01lc3NhZ2UsVGFrZXJJZCxzZXRudW1iZXJjb20sc2V0d2luZG93LFVzZXJJZCxDb250ZW50SWQsc2V0ZXJybXNnfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbW1lbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTp7XHJcbiAgICAgIE1lc3NhZ2U6TWVzc2FnZSxcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgVGFrZXJJZDpUYWtlcklkLFxyXG4gICAgfX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2d9KSl7ICAgIFxyXG4gICAgICAgIHNldG51bWJlcmNvbShwcmV2PT5wcmV2KzEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VsYW5cIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y3VycmVudGRhdGEsc2V0c3Bpbm5lcixzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyLHNldHN0b3ByZXEsY2F0ZWdvcnkscGFpZ25hdGlvbixzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbn0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfS8ke2NhdGVnb3J5fWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG4gICAgICAgIHNlbGVjdGlvbnNbY2F0ZWdvcnldLnN0b3ByZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRzZWxlY3Rpb24oc2VsZWN0aW9ubGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkIHJlcXVlc3RcIilcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcblxyXG4gICAgICBpZihwYWlnbmF0aW9uKXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgcmV0dXJuIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKHtVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93LHJlbGF0aW9udHlwZSxVc2VySWRvZmNvbnRlbnR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgcmVsYXRpb250eXBlOnJlbGF0aW9udHlwZSxcclxuICAgICAgVXNlcklkb2Zjb250ZW50OlVzZXJJZG9mY29udGVudCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93LGxhc3Qsb3JkZXIsY29tbWVudGxpc3R9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke2NvbnRlbnRJZH0vJHtsYXN0fS8ke29yZGVyfS9mYWxzZWApO1xyXG4gICAgLy9idXJhZGEgdGVrcmFyZGFuIGLDvHTDvG4geW9ydW1sYXIgw6dla2lsaXlvciBla2xlbmVuIGVuIHNvbiB5b3J1bSDDp2VraWxtZWxpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jb21tZW50bGlzdF07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIGNvbnNvbGUubG9nKE15ZGF0YSlcclxuICAgICAgaWYobGFzdCl7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoTXlkYXRhLmNvbmNhdChDdXJyZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoQ3VycmVudC5jb25jYXQoTXlkYXRhKSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZCxzZXRhbGxvd2FjdGlvbn0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5Sb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTsgIFxyXG4gICAgICBzZXRhbGxvd2FjdGlvbih0cnVlKTsgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZighZGF0YS5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmkgIHIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICAgc2V0ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25jb3VudD1hc3luYyh7VXNlcklkfSk9PntcclxuXHJcbiAgIHRyeSB7XHJcbiAgICBcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvbm90aWZpY2F0aW9uL3VwZGF0ZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldHNwaW5uZXIsc2V0ZGF0YSxjYXRlZ29yeSxVc2VySWQsb3duZXJwb3N0LG9yZGVyfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT0gYXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke1VzZXJJZH0vJHtvd25lcnBvc3R9LyR7Y2F0ZWdvcnl9LyR7b3JkZXJ9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKFsuLi5kYXRhLmRhdGFdKVxyXG4gICAgICAgc2V0c3Bpbm5lcihmYWxzZSlcclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLFByZXZlbnQsRm9sbG93ZWRJZCxjaGVja2lmZm9sbG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGB1c2VyL2NyZWF0ZXVzZXJyZWxhdGlvbmAse1xyXG4gICAgICBGb2xsb3dlcklkOlVzZXJJZCxcclxuICAgICAgRm9sbG93ZWRJZDpGb2xsb3dlZElkLFxyXG4gICAgICBjaGVja2lmZm9sbG93OmNoZWNraWZmb2xsb3csXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgIH0sIDIwMDApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyh7VXNlcklkLHNldG5hdmRhdGEsb3JkZXIsbmF2ZGF0YSxsYXN0cm93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9LyR7b3JkZXJ9LyR7bGFzdHJvd31gKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIFxyXG4gICAgaWYobGFzdHJvdyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vbzJcIilcclxuICAgICAgc2V0bmF2ZGF0YShOZXdkYXRhLmNvbmNhdChNeWN1cnJlbnRkYXRhKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTXljdXJyZW50ZGF0YS5jb25jYXQoTmV3ZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvdW50cmVxPWFzeW5jKHtVc2VySWQsc2V0Y291bnRkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0Y291bnQvJHtVc2VySWR9YCk7XHJcblxyXG5cclxuICAgIHNldGNvdW50ZGF0YShkYXRhLmRhdGEpO1xyXG4gXHJcbiAgICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2Vyc2ZvcnNlYXJjaGJhcj1hc3luYyh7aW5wdXR2YWx1ZSxzZXR1c2VycyxzZXRhY3RpdmUsc2V0bm90aGluZ2ZvdW5kfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcm5hbWUvJHtpbnB1dHZhbHVlfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgIHNldGFjdGl2ZShcIk5vdGhpbmdcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHNldGFjdGl2ZShcIlwiKTtcclxuICAgICAgc2V0dXNlcnMoZGF0YS5kYXRhKTtcclxuICAgIH0gIFxyXG5cclxuIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdCA9IGFzeW5jKHtQb3N0SWQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcInVzZXIvZGVsZXRlcG9zdFwiLHtcclxuICAgICAgUG9zdElkOlBvc3RJZFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50YW5zd2VycmVxID0gYXN5bmMoe1VwcGVyY29tbWVudElkLEFuc3dlcixVc2VySWQsc2V0ZXJybXNnLHNldHdpbmRvdyxDb250ZW50SWQsTWFpbnBhcmVudElELHNldGNvbW1lbnRsaXN0LGNvbW1lbnRsaXN0fSk9PntcclxuICBjb25zb2xlLmxvZyhNYWlucGFyZW50SUQpXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgICBcclxuICAgICAgIGNvbnN0IG9ubHlPbmVjb21tZW50ID0gYXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7TWFpbnBhcmVudElEfS9mYWxzZS8xMC90cnVlYClcclxuICAgICAgIGNvbnN0IGNvcHlvZmNvbW1lbnRsaXN0ID0gWy4uLmNvbW1lbnRsaXN0XVxyXG4gICAgICAgY29uc3QgSW5kZXhvZmVsZW1lbnQgPSBjb3B5b2Zjb21tZW50bGlzdC5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IE1haW5wYXJlbnRJRClcclxuICAgICAgIGNvcHlvZmNvbW1lbnRsaXN0LnNwbGljZShJbmRleG9mZWxlbWVudCwxLG9ubHlPbmVjb21tZW50LmRhdGEuZGF0YVswXSlcclxuICAgICAgIHNldGNvbW1lbnRsaXN0KGNvcHlvZmNvbW1lbnRsaXN0KVxyXG4gICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufS8vdXNlciBhbGVydCBhY3RpdmF0ZWQgb3Igbm90XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUHJvZmlsZSA9IGFzeW5jICh7dXNlcmRhdGEsdHlwZW9mdXBkYXRlLHNldHVwbG9hZGluZyxzZXRzdWNjZXNmdWx1cGxvYWQsdXNlcmluZm8sc2V0dXNlcmluZm99KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL3VzZXIvdXBkYXRlcHJvZmlsZS8ke3R5cGVvZnVwZGF0ZX1gLHVzZXJkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCFkYXRhLnN0YXRlKXtcclxuXHJcbiAgICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICAgY29weVtcIkN1cnJlbnRwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlNVQ0NFU1NGVUxcIilcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlwiKVxyXG4gICAgICAgICAgICAgIH0sMzAwMCk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldHVwbG9hZGluZyhmYWxzZSlcclxuXHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJFUlJPUlwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRjb21tZW50ID0gYXN5bmMoe2NvbW1lbnRJRCxtZXNzYWdlLHNldGxvYWRpbmcsc2V0ZWRpdGNvbW1lbnR9KT0+e1xyXG5cclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL2NvbW1lbnQvRWRpdENvbW1lbnRgLHtjb21tZW50SUQ6Y29tbWVudElELG1lc3NhZ2U6bWVzc2FnZX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuXHJcbiAgICAgICAgaWYoZGF0YS5zdGF0ZSA9PSBcIlNVQ0NFU1NcIil7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0ZWRpdGNvbW1lbnQoZmFsc2UpXHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH0gXHJcbn0iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250ZXh0ZGF0YX0gZnJvbSBcIi4uL0FwaS9yZXF1ZXN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FsbG93YWN0aW9uLHNldGFsbG93YWN0aW9uXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3RbZHJhZnRpZCxzZXRkcmFmdGlkXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBhbGxvd2FjdGlvbjphbGxvd2FjdGlvbixcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgZHJhZnRpZDpkcmFmdGlkLFxyXG4gICAgICAgICAgIHNldGRyYWZ0aWQsc2V0ZHJhZnRpZCxcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZXJjb250ZXh0cHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyBcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcblxyXG5cclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7IFxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5cclxuY29uc3QgTXlhcHA9KHtDb21wb25lbnQscGFnZVByb3BzfSk9PntcclxuICAgXHJcbiAgICBjb25zdCBMYXlvdXQgPSBDb21wb25lbnQubGF5b3V0IHx8ICgocGFnZSk9PnBhZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgICAgIDxVc2VyY29udGV4dHByb3ZpZGVyPiAgIFxyXG4gICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwJmZhbWlseT1JQk0rUGxleCtTZXJpZjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsMzAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUlCTStQbGV4K1NlcmlmOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9SW50ZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgICB7TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPil9XHJcbiAgICAgICAgICA8L1VzZXJjb250ZXh0cHJvdmlkZXI+XHJcbiAgICAgIDwvPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15YXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=