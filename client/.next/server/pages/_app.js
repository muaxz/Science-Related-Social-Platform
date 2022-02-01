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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Emre\\MyProjects\\Mynextrepo\\client\\pages\\_app.js";

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
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "path/to/assets/content-styles.css",
          type: "text/css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Poppins:ital,wght@1,300&display=swap&family=Raleway&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          type: "text/css",
          charset: "UTF-8",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
          integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
          crossOrigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Inter:wght@700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }, undefined), Layout( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 27
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Myapp);

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtY29va2llXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic2V0Y29udGV4dGRhdGEiLCJzZXRsb2dnZWQiLCJzZXRzcGlubmVyIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9naW5yZXEiLCJzZXR1c2VyZGF0YSIsInVzZXJkYXRhIiwicm91dGVyIiwic2V0YmFja2VuZGVycm9yIiwic2V0YWN0aXZlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZyIsIlVzZXJkYXRhIiwic2V0SXRlbSIsInRva2VuIiwicHVzaCIsImVyciIsImxvZ291dCIsImdldCIsImxvZ2dlZCIsInJlc2lndGVycmVxIiwiZXhpc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJ0eXBlb2ZzdWJtaXQiLCJwcm9jZXNzdHlwZSIsIlByb2R1Y2Vjb21tZW50cmVxIiwiTWVzc2FnZSIsIlRha2VySWQiLCJzZXRudW1iZXJjb20iLCJVc2VySWQiLCJDb250ZW50SWQiLCJwcmV2IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldHN0b3ByZXEiLCJjYXRlZ29yeSIsInBhaWduYXRpb24iLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9uIiwibGVuZ3RoIiwic2VsZWN0aW9ucyIsInN0b3ByZXF1ZXN0aW5nIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwiUm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50Iiwib3duZXJwb3N0IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJQcmV2ZW50IiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJOb3RpZmljYXRpb25yZXEiLCJzZXRuYXZkYXRhIiwibmF2ZGF0YSIsImxhc3Ryb3ciLCJNeWN1cnJlbnRkYXRhIiwiTmV3ZGF0YSIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwic2V0Y291bnRkYXRhIiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJpbnB1dHZhbHVlIiwic2V0dXNlcnMiLCJzZXRub3RoaW5nZm91bmQiLCJEZWxldGVQb3N0Iiwic3VjY2VzcyIsIkNvbW1lbnRhbnN3ZXJyZXEiLCJVcHBlcmNvbW1lbnRJZCIsIkFuc3dlciIsIk1haW5wYXJlbnRJRCIsInNldGNvbW1lbnRsaXN0IiwiQ29tbWVudElkIiwib25seU9uZWNvbW1lbnQiLCJjb3B5b2Zjb21tZW50bGlzdCIsIkluZGV4b2ZlbGVtZW50IiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsIlVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSIsImN1cnJlbnRhY3RpdmUiLCJzdGF0ZSIsIlVwZGF0ZVByb2ZpbGUiLCJ0eXBlb2Z1cGRhdGUiLCJzZXR1cGxvYWRpbmciLCJzZXRzdWNjZXNmdWx1cGxvYWQiLCJ1c2VyaW5mbyIsInNldHVzZXJpbmZvIiwiY29weSIsIndhcm5pbmciLCJFZGl0Y29tbWVudCIsImNvbW1lbnRJRCIsIm1lc3NhZ2UiLCJzZXRsb2FkaW5nIiwic2V0ZWRpdGNvbW1lbnQiLCJjcmVhdGV1c2VyY29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJhbGxvd2FjdGlvbiIsImRyYWZ0aWQiLCJzZXRkcmFmdGlkIiwic3Bpbm5lciIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15YXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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TyxFQUFDLE9BQS9DO0FBQXVELGNBQUksRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0U7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUMsVUFBNUI7QUFBdUMsY0FBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRTtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQyw0RUFBNUI7QUFBeUcsbUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4scUJBQVcsRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0U7QUFBTSxjQUFJLEVBQUMscVFBQVg7QUFBaVIsYUFBRyxFQUFDO0FBQXJSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSLEVBVVNGLE1BQU0sZUFBQyxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxtQkFESDtBQWdCSCxDQXJCRDs7QUF1QmVGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIlxyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICBcclxuICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuICAgIFxyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS53cm9uZyA9PSBcIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nID09IFwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyh7c2V0c3Bpbm5lcixzZXR1c2VyZGF0YSxzZXRsb2dnZWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2xvZ291dFwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSlcclxuICAgICAgc2V0dXNlcmRhdGEoe30pXHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2cobG9nZ2VkKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhxZ9hcsSxbMSxIGthecSxdFwiKVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJzb3J1biB2YXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXIsdHlwZW9mc3VibWl0fSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHsuLi5jb250ZW50ZGF0YSxwcm9jZXNzdHlwZTp0eXBlb2ZzdWJtaXR9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWNlY29tbWVudHJlcT1hc3luYyAoe01lc3NhZ2UsVGFrZXJJZCxzZXRudW1iZXJjb20sc2V0d2luZG93LFVzZXJJZCxDb250ZW50SWQsc2V0ZXJybXNnfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbW1lbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTp7XHJcbiAgICAgIE1lc3NhZ2U6TWVzc2FnZSxcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgVGFrZXJJZDpUYWtlcklkLFxyXG4gICAgfX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2d9KSl7ICAgIFxyXG4gICAgICAgIHNldG51bWJlcmNvbShwcmV2PT5wcmV2KzEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VsYW5cIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y3VycmVudGRhdGEsc2V0c3Bpbm5lcixzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyLHNldHN0b3ByZXEsY2F0ZWdvcnkscGFpZ25hdGlvbixzZWxlY3Rpb25saXN0LHNldHNlbGVjdGlvbn0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfS8ke2NhdGVnb3J5fWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG4gICAgICAgIHNlbGVjdGlvbnNbY2F0ZWdvcnldLnN0b3ByZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRzZWxlY3Rpb24oc2VsZWN0aW9ubGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkIHJlcXVlc3RcIilcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcblxyXG4gICAgICBpZihwYWlnbmF0aW9uKXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgcmV0dXJuIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKHtVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93LHJlbGF0aW9udHlwZSxVc2VySWRvZmNvbnRlbnR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgcmVsYXRpb250eXBlOnJlbGF0aW9udHlwZSxcclxuICAgICAgVXNlcklkb2Zjb250ZW50OlVzZXJJZG9mY29udGVudCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93LGxhc3Qsb3JkZXIsY29tbWVudGxpc3R9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke2NvbnRlbnRJZH0vJHtsYXN0fS8ke29yZGVyfS9mYWxzZWApO1xyXG4gICAgLy9idXJhZGEgdGVrcmFyZGFuIGLDvHTDvG4geW9ydW1sYXIgw6dla2lsaXlvciBla2xlbmVuIGVuIHNvbiB5b3J1bSDDp2VraWxtZWxpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jb21tZW50bGlzdF07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIGNvbnNvbGUubG9nKE15ZGF0YSlcclxuICAgICAgaWYobGFzdCl7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoTXlkYXRhLmNvbmNhdChDdXJyZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoQ3VycmVudC5jb25jYXQoTXlkYXRhKSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZCxzZXRhbGxvd2FjdGlvbn0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5Sb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTsgIFxyXG4gICAgICBzZXRhbGxvd2FjdGlvbih0cnVlKTsgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZighZGF0YS5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmkgIHIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICAgc2V0ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25jb3VudD1hc3luYyh7VXNlcklkfSk9PntcclxuXHJcbiAgIHRyeSB7XHJcbiAgICBcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvbm90aWZpY2F0aW9uL3VwZGF0ZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldHNwaW5uZXIsc2V0ZGF0YSxjYXRlZ29yeSxVc2VySWQsb3duZXJwb3N0LG9yZGVyfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT0gYXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke1VzZXJJZH0vJHtvd25lcnBvc3R9LyR7Y2F0ZWdvcnl9LyR7b3JkZXJ9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKFsuLi5kYXRhLmRhdGFdKVxyXG4gICAgICAgc2V0c3Bpbm5lcihmYWxzZSlcclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLFByZXZlbnQsRm9sbG93ZWRJZCxjaGVja2lmZm9sbG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGB1c2VyL2NyZWF0ZXVzZXJyZWxhdGlvbmAse1xyXG4gICAgICBGb2xsb3dlcklkOlVzZXJJZCxcclxuICAgICAgRm9sbG93ZWRJZDpGb2xsb3dlZElkLFxyXG4gICAgICBjaGVja2lmZm9sbG93OmNoZWNraWZmb2xsb3csXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgIH0sIDIwMDApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyh7VXNlcklkLHNldG5hdmRhdGEsb3JkZXIsbmF2ZGF0YSxsYXN0cm93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9LyR7b3JkZXJ9LyR7bGFzdHJvd31gKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIFxyXG4gICAgaWYobGFzdHJvdyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vbzJcIilcclxuICAgICAgc2V0bmF2ZGF0YShOZXdkYXRhLmNvbmNhdChNeWN1cnJlbnRkYXRhKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTXljdXJyZW50ZGF0YS5jb25jYXQoTmV3ZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvdW50cmVxPWFzeW5jKHtVc2VySWQsc2V0Y291bnRkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0Y291bnQvJHtVc2VySWR9YCk7XHJcblxyXG5cclxuICAgIHNldGNvdW50ZGF0YShkYXRhLmRhdGEpO1xyXG4gXHJcbiAgICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2Vyc2ZvcnNlYXJjaGJhcj1hc3luYyh7aW5wdXR2YWx1ZSxzZXR1c2VycyxzZXRhY3RpdmUsc2V0bm90aGluZ2ZvdW5kfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcm5hbWUvJHtpbnB1dHZhbHVlfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgIHNldGFjdGl2ZShcIk5vdGhpbmdcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHNldGFjdGl2ZShcIlwiKTtcclxuICAgICAgc2V0dXNlcnMoZGF0YS5kYXRhKTtcclxuICAgIH0gIFxyXG5cclxuIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdCA9IGFzeW5jKHtQb3N0SWQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcInVzZXIvZGVsZXRlcG9zdFwiLHtcclxuICAgICAgUG9zdElkOlBvc3RJZFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50YW5zd2VycmVxID0gYXN5bmMoe1VwcGVyY29tbWVudElkLEFuc3dlcixVc2VySWQsc2V0ZXJybXNnLHNldHdpbmRvdyxDb250ZW50SWQsTWFpbnBhcmVudElELHNldGNvbW1lbnRsaXN0LGNvbW1lbnRsaXN0fSk9PntcclxuICBjb25zb2xlLmxvZyhNYWlucGFyZW50SUQpXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgICBcclxuICAgICAgIGNvbnN0IG9ubHlPbmVjb21tZW50ID0gYXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7TWFpbnBhcmVudElEfS9mYWxzZS8xMC90cnVlYClcclxuICAgICAgIGNvbnN0IGNvcHlvZmNvbW1lbnRsaXN0ID0gWy4uLmNvbW1lbnRsaXN0XVxyXG4gICAgICAgY29uc3QgSW5kZXhvZmVsZW1lbnQgPSBjb3B5b2Zjb21tZW50bGlzdC5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IE1haW5wYXJlbnRJRClcclxuICAgICAgIGNvcHlvZmNvbW1lbnRsaXN0LnNwbGljZShJbmRleG9mZWxlbWVudCwxLG9ubHlPbmVjb21tZW50LmRhdGEuZGF0YVswXSlcclxuICAgICAgIHNldGNvbW1lbnRsaXN0KGNvcHlvZmNvbW1lbnRsaXN0KVxyXG4gICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufS8vdXNlciBhbGVydCBhY3RpdmF0ZWQgb3Igbm90XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUHJvZmlsZSA9IGFzeW5jICh7dXNlcmRhdGEsdHlwZW9mdXBkYXRlLHNldHVwbG9hZGluZyxzZXRzdWNjZXNmdWx1cGxvYWQsdXNlcmluZm8sc2V0dXNlcmluZm99KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL3VzZXIvdXBkYXRlcHJvZmlsZS8ke3R5cGVvZnVwZGF0ZX1gLHVzZXJkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCFkYXRhLnN0YXRlKXtcclxuXHJcbiAgICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICAgY29weVtcIkN1cnJlbnRwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlNVQ0NFU1NGVUxcIilcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlwiKVxyXG4gICAgICAgICAgICAgIH0sMzAwMCk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldHVwbG9hZGluZyhmYWxzZSlcclxuXHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJFUlJPUlwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRjb21tZW50ID0gYXN5bmMoe2NvbW1lbnRJRCxtZXNzYWdlLHNldGxvYWRpbmcsc2V0ZWRpdGNvbW1lbnR9KT0+e1xyXG5cclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL2NvbW1lbnQvRWRpdENvbW1lbnRgLHtjb21tZW50SUQ6Y29tbWVudElELG1lc3NhZ2U6bWVzc2FnZX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuXHJcbiAgICAgICAgaWYoZGF0YS5zdGF0ZSA9PSBcIlNVQ0NFU1NcIil7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0ZWRpdGNvbW1lbnQoZmFsc2UpXHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH0gXHJcbn0iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250ZXh0ZGF0YX0gZnJvbSBcIi4uL0FwaS9yZXF1ZXN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FsbG93YWN0aW9uLHNldGFsbG93YWN0aW9uXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3RbZHJhZnRpZCxzZXRkcmFmdGlkXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBhbGxvd2FjdGlvbjphbGxvd2FjdGlvbixcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgZHJhZnRpZDpkcmFmdGlkLFxyXG4gICAgICAgICAgIHNldGRyYWZ0aWQsc2V0ZHJhZnRpZCxcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZXJjb250ZXh0cHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyBcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTsgXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTsgXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcblxyXG5jb25zdCBNeWFwcD0oe0NvbXBvbmVudCxwYWdlUHJvcHN9KT0+e1xyXG4gICBcclxuICAgIGNvbnN0IExheW91dCA9IENvbXBvbmVudC5sYXlvdXQgfHwgKChwYWdlKT0+cGFnZSk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgICAgPFVzZXJjb250ZXh0cHJvdmlkZXI+ICAgXHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJwYXRoL3RvL2Fzc2V0cy9jb250ZW50LXN0eWxlcy5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAmZmFtaWx5PURvbWluZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9VGlub3M6aXRhbEAxJmRpc3BsYXk9c3dhcCZmYW1pbHk9SUJNK1BsZXgrU2VyaWY6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDMwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwJmZhbWlseT1JQk0rUGxleCtTZXJpZjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PUludGVyOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgICAge0xheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz4pfVxyXG4gICAgICAgICAgPC9Vc2VyY29udGV4dHByb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9