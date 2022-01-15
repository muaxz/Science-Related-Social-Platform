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
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\window.js";





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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Black"], {
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

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\routerguard.js";



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
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_UI_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/window */ "./components/UI/window.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _containers_Layout_routerguard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/Layout/routerguard */ "./containers/Layout/routerguard.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\login.js";

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
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["loginreq"])({
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
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_6__["resigterreq"])({
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0L3JvdXRlcmd1YXJkLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwibG9nb3V0IiwiZ2V0IiwibG9nZ2VkIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJSb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIlByZXZlbnQiLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsImlucHV0dmFsdWUiLCJzZXR1c2VycyIsInNldG5vdGhpbmdmb3VuZCIsIkRlbGV0ZVBvc3QiLCJzdWNjZXNzIiwiQ29tbWVudGFuc3dlcnJlcSIsIlVwcGVyY29tbWVudElkIiwiQW5zd2VyIiwiQ29tbWVudElkIiwiVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlIiwiY3VycmVudGFjdGl2ZSIsInN0YXRlIiwiVXBkYXRlUHJvZmlsZSIsInR5cGVvZnVwZGF0ZSIsInNldHVwbG9hZGluZyIsInNldHN1Y2Nlc2Z1bHVwbG9hZCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJjb3B5Iiwid2FybmluZyIsIkV4dGVybmFsIiwic3R5bGVkIiwiZGl2IiwiYWt0aWYiLCJUZXh0Ym94IiwiV2luZG93IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJ0eXBlIiwiY2xvc2VmdW5jdGlvbiIsImljb24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsIndvcmRXcmFwIiwibGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwiaGVpZ2h0IiwicHJvZmlsZSIsIkJsYWNrIiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsIlJvdXRlcmd1YXJkIiwibXlyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb250cm9sbGVyIiwic2V0Y29udHJvbGxlciIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyxLFkIiwidXNlcm5hbWUiLCJ1c2VyaWQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJhbGxvd2FjdGlvbiIsImRyYWZ0aWQiLCJzZXRkcmFmdGlkIiwic3Bpbm5lciIsIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJDb2xvciIsIkltYWdlRGl2IiwiSW5wdXQiLCJpbnB1dCIsIldpbmRvd0RpdiIsIklucHV0SG9sZGVyIiwiY2hlY2tyZWdpc3RlciIsIkJ1dHRvbnMiLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiUmVnaXN0ZXJsb2dpbmhvbGRlciIsIkxvZ2luIiwic3R5bGVzZ2V0IiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJiYWNrZW5kZXJyb3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwicmVnaXN0ZXIiLCJzZXRyZWdpc3RlciIsIndpbmRvd2FjdGl2ZSIsImlucHV0cyIsInNldGlucHV0cyIsImVtYWlsIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwidmFsdWUiLCJmb2N1c2VkIiwicGFzc3dvcmQiLCJSZWdpc3RlciIsIm5hbWUiLCJzdXJuYW1lIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiUmVuZGVyaWNvbiIsIml0ZW0iLCJTdWJtaXRoYW5kbGVyIiwiY3VycmVudGlucHV0Iiwib3VyZGF0YSIsImtleSIsInRyaW0iLCJjaGVrY2lmZm9jdXMiLCJ0eXBlb2Zmb2N1cyIsImlucHV0c2dldCIsImNoYW5nZWhhbmRsZXIiLCJlIiwic2VjdGlvbiIsInRhcmdldCIsImJhY2tlbmRlcnJvcm1lc3NhZ2UiLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJmbGV4IiwiYm94U2l6aW5nIiwiZmxleFdyYXAiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic3R5bGUiLCJlbmRBZG9ybm1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLE1BQU1DLFlBQVksR0FBQyxDQUFDO0FBQUNDLE1BQUQ7QUFBTUMsV0FBTjtBQUFnQkMsV0FBaEI7QUFBMEJDLGdCQUExQjtBQUF5Q0MsV0FBekM7QUFBbURDO0FBQW5ELENBQUQsS0FBa0U7QUFFbEYsTUFBR0wsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEtBQWhCLEVBQXNCO0FBRW5CTCxhQUFT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bG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG4gICAgXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jKHtzZXRzcGlubmVyLHNldHVzZXJkYXRhLHNldGxvZ2dlZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoXCIvbG9nb3V0XCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKVxyXG4gICAgICBzZXR1c2VyZGF0YSh7fSlcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhsb2dnZWQpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcix0eXBlb2ZzdWJtaXR9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIsey4uLmNvbnRlbnRkYXRhLHByb2Nlc3N0eXBlOnR5cGVvZnN1Ym1pdH0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiBcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICByZXR1cm4gc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICBcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgICBpZihsYXN0KXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChNeWRhdGEuY29uY2F0KEN1cnJlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChDdXJyZW50LmNvbmNhdChNeWRhdGEpKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkLHNldGFsbG93YWN0aW9ufSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLlJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpOyAgXHJcbiAgICAgIHNldGFsbG93YWN0aW9uKHRydWUpOyAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKCFkYXRhLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKHtVc2VySWR9KT0+e1xyXG5cclxuICAgdHJ5IHtcclxuICAgIFxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9ub3RpZmljYXRpb24vdXBkYXRlLyR7VXNlcklkfWApO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0c3Bpbm5lcixzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PSBhd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGVjb250ZW50LyR7VXNlcklkfS8ke293bmVycG9zdH0vJHtjYXRlZ29yeX0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoWy4uLmRhdGEuZGF0YV0pXHJcbiAgICAgICBzZXRzcGlubmVyKGZhbHNlKVxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsUHJldmVudCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhLGxhc3Ryb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn0vJHtsYXN0cm93fWApO1xyXG4gICAgY29uc3QgTXljdXJyZW50ZGF0YT1bLi4ubmF2ZGF0YV07XHJcbiAgICBjb25zdCBOZXdkYXRhPWRhdGEubXlkYXRhO1xyXG4gICAgXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxzZXRub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgc2V0YWN0aXZlKFwiTm90aGluZ1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0YWN0aXZlKFwiXCIpO1xyXG4gICAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gICAgfSAgXHJcblxyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQb3N0ID0gYXN5bmMoe1Bvc3RJZCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwidXNlci9kZWxldGVwb3N0XCIse1xyXG4gICAgICBQb3N0SWQ6UG9zdElkXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRhbnN3ZXJyZXEgPSBhc3luYyh7VXBwZXJjb21tZW50SWQsQW5zd2VyLFVzZXJJZCxzZXRlcnJtc2csc2V0d2luZG93LENvbnRlbnRJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufS8vdXNlciBhbGVydCBhY3RpdmF0ZWQgb3Igbm90XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUHJvZmlsZSA9IGFzeW5jICh7dXNlcmRhdGEsdHlwZW9mdXBkYXRlLHNldHVwbG9hZGluZyxzZXRzdWNjZXNmdWx1cGxvYWQsdXNlcmluZm8sc2V0dXNlcmluZm99KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL3VzZXIvdXBkYXRlcHJvZmlsZS8ke3R5cGVvZnVwZGF0ZX1gLHVzZXJkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCFkYXRhLnN0YXRlKXtcclxuXHJcbiAgICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICAgY29weVtcIkN1cnJlbnRwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlNVQ0NFU1NGVUxcIilcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlwiKVxyXG4gICAgICAgICAgICAgIH0sMzAwMCk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldHVwbG9hZGluZyhmYWxzZSlcclxuXHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJFUlJPUlwiKVxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge0Vycm9yfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IEV4dGVybmFsPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxudHJhbnNpdGlvbjokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcInRvcCAwLjRzXCIgOiBcInRvcCAwLjRzLCB6LWluZGV4IDAuNnNcIn07XHJcbnRvcDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjUwJVwiIDogXCIyMDBweFwifTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjE4MFwiIDogXCItMjAwXCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFRleHRib3g9c3R5bGVkLmRpdmBcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46MzBweCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvdz0oe2NoaWxkcmVuLGFjdGl2ZSx0eXBlLGNsb3NlZnVuY3Rpb259KT0+e1xyXG4gICBcclxuICAgIHZhciBpY29uPSBudWxsO1xyXG4gICAgaWYodHlwZSA9PSBcImVycm9yXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcInJlZFwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PSBcImNvbmZpcm1cIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgPEV4dGVybmFsIGFrdGlmPXthY3RpdmV9PlxyXG4gICAgICAgICAgICA8VGV4dGJveD5cclxuICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLHdvcmRXcmFwOidicmVhay13b3JkJyxsaW5lSGVpZ2h0OlwiMjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L1RleHRib3g+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbG9zZWZ1bmN0aW9ufSB2YXJpYW50PVwiY29udGFpbmVkXCI+T0s8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvRXh0ZXJuYWw+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcclxuIiwiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGUsa2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gfVxyXG5cclxuIGJvZHkge1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gfVxyXG5cclxuIGh0bWx7XHJcbiAgIHNjcm9sbC1iZWhhdmlvcjpzbW9vdGg7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCIxNTBcIiA6IFwiLTMwMFwifTtcclxuYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsICR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMC43XCIgOiBcIjBcIn0pO1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7cm90YXRlMzYwfSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmA7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlcmd1YXJkKHtjaGlsZHJlbn0pe1xyXG4gICAgLy9ob21lcGFnZVxyXG5cclxuICAgIGNvbnN0IG15cm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY29udHJvbGxlcixzZXRjb250cm9sbGVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGEsbG9nZ2VkfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cobG9nZ2VkKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICBcclxuICAgICAgICBjb25zdCBUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGlmKG15cm91dGVyLnBhdGhuYW1lID09IFwiL1t1c2VyxLFkXS9saWtlZFwiIHx8IG15cm91dGVyLnBhdGhuYW1lID09IFwiL1t1c2VyxLFkXS9zYXZlZFwiKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYobXlyb3V0ZXIucXVlcnkudXNlcsSxZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvbnRyb2xsZXIodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlyb3V0ZXIucHVzaChcIi80MDRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvbG9naW5cIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dnZWQpXHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvbnRyb2xsZXIodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvZmlsZS9bdXNlcm5hbWVdL2VkaXRwcm9maWxlXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG15cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvRHJhZnRzL1t1c2VyaWRdXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG15cm91dGVyLnF1ZXJ5LnVzZXJpZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvbnRyb2xsZXIodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlyb3V0ZXIucHVzaChcIi80MDRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAge2NvbnRyb2xsZXIgPyBjaGlsZHJlbiA6IG51bGx9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb250ZXh0ZGF0YX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGV1c2VyY29udGV4dD1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyY29udGV4dD0oe2NoaWxkcmVufSk9PntcclxuXHJcbiAgICBjb25zdFtsb2dnZWQsc2V0bG9nZ2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthbGxvd2FjdGlvbixzZXRhbGxvd2FjdGlvbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdXNlcmRhdGEsc2V0dXNlcmRhdGFdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0W2RyYWZ0aWQsc2V0ZHJhZnRpZF09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTsgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2lmKHRva2VuKXtcclxuXHJcbiAgICAgICAgICAgIENvbnRleHRkYXRhKHtcclxuICAgICAgICAgICAgICAgIFRva2VuOnRva2VuLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGV4dGRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgc2V0YWxsb3dhY3Rpb246c2V0YWxsb3dhY3Rpb24sXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGNyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgIGxvZ2dlZDpsb2dnZWQsXHJcbiAgICAgICAgICAgYWxsb3dhY3Rpb246YWxsb3dhY3Rpb24sXHJcbiAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICB1c2VyZGF0YTp1c2VyZGF0YSxcclxuICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICBzcGlubmVyOnNwaW5uZXIsXHJcbiAgICAgICAgICAgc2V0c3Bpbm5lcixzZXRzcGlubmVyLFxyXG4gICAgICAgICAgIGRyYWZ0aWQ6ZHJhZnRpZCxcclxuICAgICAgICAgICBzZXRkcmFmdGlkLHNldGRyYWZ0aWQsXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7bG9naW5yZXEscmVzaWd0ZXJyZXF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvd2luZG93XCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge3dpdGhTdHlsZXMsbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IEd1YXJkbGF5b3V0IGZyb20gXCIuLi9jb250YWluZXJzL0xheW91dC9yb3V0ZXJndWFyZFwiO1xyXG5pbXBvcnQge0FjY291bnRDaXJjbGUsRW1haWxPdXRsaW5lZCxMb2NrLEFycm93UmlnaHQsIEFycm93TGVmdCxTdXBlcnZpc29yQWNjb3VudCxTdXBlcnZpc2VkVXNlckNpcmNsZVNoYXJwLCBTdXBlcnZpc29yQWNjb3VudFJvdW5kZWQsIFN1cGVydmlzb3JBY2NvdW50U2hhcnAsIEFjY291bnRDaXJjbGVTaGFycCwgQWNjb3VudENpcmNsZVJvdW5kZWQsIFBlcnNvbiwgSG9tZSwgQXJyb3dSaWdodEFsdFJvdW5kZWQsIENoZXZyb25SaWdodCwgQXNzaWdubWVudH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcbiAgICAgICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNGQkVBNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2xlZC5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjg4JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MzVweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NjAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcblxyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDokeyh7Y2hlY2tyZWdpc3Rlcn0pPT5jaGVja3JlZ2lzdGVyID8gXCI1MCVcIiA6IFwiMTAwJVwifTtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYFxyXG5jb25zdCBCdXR0b25zPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZToxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcIi93YXkuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBSZWdpc3RlcmxvZ2luaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE1cHg7XHJcbnJpZ2h0OjE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDBweDtcclxuaGVpZ2h0OjQwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxudHJhbnNpdGlvbjowLjA5cyBlYXNlLWluO1xyXG4mOmhvdmVyIHtcclxuY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDVweDtcclxuaGVpZ2h0OjQ1cHg7XHJcbn1cclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsZXNnZXQ9Q3NzVGV4dEZpZWxkKCk7XHJcbiAgICBjb25zdHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsc2V0c3Bpbm5lcn09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdFtjdXJyZW50dXJsLHNldGN1cnJlbnRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3RbYmFja2VuZGVycm9yLHNldGJhY2tlbmRlcnJvcl09dXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtyZWdpc3RlcixzZXRyZWdpc3Rlcl09dXNlU3RhdGUoXCJMb2dpblwiKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0W2lucHV0cyxzZXRpbnB1dHNdPXVzZVN0YXRlKHtcclxuXHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXI6e1xyXG4gICAgICAgICAgICBuYW1lOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJTb3kgxLBzaW1cIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH19KTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIik7XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1tYWdpY1wiLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIjU2MzQ5MmFkNmY5MTcwMDAwMTAwMDAwMTRhZGI4MDllODk2MzQ2MDJhODk2ZDhlNjJhODUwNDAxXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnBob3Rvcyk7ICBcclxuICAgICAgICAgICAgc2V0Y3VycmVudChyZXMuZGF0YS5waG90b3NbM10uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiBcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgUmVuZGVyaWNvbj0oaXRlbSk9PntcclxuXHJcbiAgICAgICAgICBzd2l0Y2goaXRlbSl7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8RW1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvRW1haWxPdXRsaW5lZD5cclxuICAgICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMb2NrIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9Mb2NrPlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgY2FzZSBcInN1cm5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9BY2NvdW50Q2lyY2xlPiAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0aGFuZGxlcj0oKT0+e1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGlucHV0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGNvbnN0IG91cmRhdGE9e307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudGlucHV0W3JlZ2lzdGVyXSkge1xyXG4gICAgICAgICAgICBvdXJkYXRhW2tleV09Y3VycmVudGlucHV0W3JlZ2lzdGVyXVtrZXldLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc3dpdGNoKHJlZ2lzdGVyKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxvZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBsb2dpbnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHJvdXRlcjpyb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGJhY2tlbmRlcnJvcjpzZXRiYWNrZW5kZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWdpc3RlclwiOiAgXHJcbiAgICAgICAgICAgICAgICByZXNpZ3RlcnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIGNvbnN0IGNoZWtjaWZmb2N1cz0odHlwZW9mZm9jdXMsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3JlZ2lzdGVyXVt0eXBlXS5mb2N1c2VkPXR5cGVvZmZvY3VzID09IFwiZm9jdXNcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShlLHR5cGUsc2VjdGlvbik9PntcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3R5cGVdW3NlY3Rpb25dLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiXCI7XHJcbiAgICBpZihlcnJvcm1zZyl7XHJcbiAgICAgICAgcmV0dXJuIDxoMj5Tb21ldGhpbmcgV2VudCBXcm9uZy4uLjwvaDI+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGJhY2tlbmRlcnJvciA9PSBcIkVYxLBTVFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmTEn2luaXogZW1haWwgemF0ZW4ga3VsbGFuxLFtZGEhXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV1BcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiDFn2lmcmUgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV0VcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiBlLXBvc3RhIHlhbmzEscWfIVwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SW1hZ2VEaXYgdXJsZ2V0PXtjdXJyZW50dXJsfSBha3RpZj17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgPFdpbmRvdyBjbG9zZWZ1bmN0aW9uPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJlcnJvclwiPkUtcG9zdGEgdmV5YSDFn2lmcmUgeWFubMSxxZ8hPC9XaW5kb3c+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgIDxSZWdpc3RlcmxvZ2luaG9sZGVyIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/ICgpPT5zZXRyZWdpc3RlcihcIlJlZ2lzdGVyXCIpIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L0Fzc2lnbm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L1BlcnNvbj5cclxuICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvUmVnaXN0ZXJsb2dpbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjR9fT5cclxuICAgICAgICAgICAgICAgICAgPExvZ28+PC9Mb2dvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGZsZXg6NCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIn19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwiMTAwJVwiIDogXCI3MCVcIixib3hTaXppbmc6XCJib3JkZXItYm94XCIsZmxleDo3LGRpc3BsYXk6cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gXCJmbGV4XCIgOiBcImJsb2NrXCIsZmxleFdyYXA6XCJ3cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyICBjaGVja3JlZ2lzdGVyPXtyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyB0cnVlOmZhbHNlfSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjb2xvcjpcIndoaXRlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+e1JlbmRlcmljb24oaXRlbSl9PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNnZXQucm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpdGVtID09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PmNoZWtjaWZmb2N1cyhcImZvY3VzXCIsaXRlbSl9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PmNoZWtjaWZmb2N1cyhcInJlbW92ZVwiLGl0ZW0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZD17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS52YWx1ZSAhPT0gXCJcIiB8fCBpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLmZvY3VzZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0ucGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/IDxwIHN0eWxlPXt7Y29sb3I6XCIjRUIzMjMyXCJ9fT7FnmlmcmVuaSBtaSB1bnV0dHVuPzwvcD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjNcIix3aWR0aDpcIjEwMCVcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PENoZXZyb25SaWdodCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+PC9DaGV2cm9uUmlnaHQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyBTdWJtaXRoYW5kbGVyIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8U3VwZXJ2aXNvckFjY291bnQgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PjwvU3VwZXJ2aXNvckFjY291bnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTdWJtaXRoYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5xLF0IE9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvV2luZG93RGl2PlxyXG4gICAgICAgPC9JbWFnZURpdj5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuTG9naW4ubGF5b3V0PShjaGlsZHJlbik9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgPEd1YXJkbGF5b3V0PlxyXG4gICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICA8L0d1YXJkbGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=