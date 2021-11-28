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
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0L3JvdXRlcmd1YXJkLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwibG9nb3V0IiwiZ2V0IiwibG9nZ2VkIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0Iiwic2V0VGltZW91dCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwiUm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50Iiwib3duZXJwb3N0IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJQcmV2ZW50IiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiY3VycmVudCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsImlucHV0dmFsdWUiLCJzZXR1c2VycyIsInNldG5vdGhpbmdmb3VuZCIsIkRlbGV0ZVBvc3QiLCJzdWNjZXNzIiwiQ29tbWVudGFuc3dlcnJlcSIsIlVwcGVyY29tbWVudElkIiwiQW5zd2VyIiwiQ29tbWVudElkIiwiVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlIiwiY3VycmVudGFjdGl2ZSIsInN0YXRlIiwiRXh0ZXJuYWwiLCJzdHlsZWQiLCJkaXYiLCJha3RpZiIsIlRleHRib3giLCJXaW5kb3ciLCJjaGlsZHJlbiIsImFjdGl2ZSIsInR5cGUiLCJjbG9zZWZ1bmN0aW9uIiwiaWNvbiIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwid29yZFdyYXAiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsIkJ1dHRvbiIsImJ1dHRvbiIsImJhY2tjb2xvciIsIndpZHRoIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQb3JmaWxlaW1hZ2UiLCJoZWlnaHQiLCJwcm9maWxlIiwiQmxhY2siLCJyb3RhdGUzNjAiLCJrZXlmcmFtZXMiLCJTcGlubmVyIiwiUm91dGVyZ3VhcmQiLCJteXJvdXRlciIsInVzZVJvdXRlciIsImNvbnRyb2xsZXIiLCJzZXRjb250cm9sbGVyIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXLEsWQiLCJ1c2VybmFtZSIsInVzZXJpZCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImFsbG93YWN0aW9uIiwiZHJhZnRpZCIsInNldGRyYWZ0aWQiLCJzcGlubmVyIiwiQ3NzVGV4dEZpZWxkIiwibWFrZVN0eWxlcyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiSW1hZ2VEaXYiLCJJbnB1dCIsImlucHV0IiwiV2luZG93RGl2IiwiSW5wdXRIb2xkZXIiLCJjaGVja3JlZ2lzdGVyIiwiQnV0dG9ucyIsIkljb24iLCJpIiwiSWNvbnNlY3VyZSIsIkxvZ28iLCJSZWdpc3RlcmxvZ2luaG9sZGVyIiwiTG9naW4iLCJzdHlsZXNnZXQiLCJjdXJyZW50dXJsIiwic2V0Y3VycmVudCIsImJhY2tlbmRlcnJvciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJyZWdpc3RlciIsInNldHJlZ2lzdGVyIiwid2luZG93YWN0aXZlIiwiaW5wdXRzIiwic2V0aW5wdXRzIiwiZW1haWwiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJ2YWx1ZSIsImZvY3VzZWQiLCJwYXNzd29yZCIsIlJlZ2lzdGVyIiwibmFtZSIsInN1cm5hbWUiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJSZW5kZXJpY29uIiwiaXRlbSIsIlN1Ym1pdGhhbmRsZXIiLCJjdXJyZW50aW5wdXQiLCJvdXJkYXRhIiwia2V5IiwidHJpbSIsImNoZWtjaWZmb2N1cyIsInR5cGVvZmZvY3VzIiwiaW5wdXRzZ2V0IiwiY2hhbmdlaGFuZGxlciIsImUiLCJzZWN0aW9uIiwidGFyZ2V0IiwiYmFja2VuZGVycm9ybWVzc2FnZSIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImZsZXgiLCJib3hTaXppbmciLCJmbGV4V3JhcCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzdHlsZSIsImVuZEFkb3JubWVudCJdLCJtYXBwaW5n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ZixFOzs7Ozs7Ozs7OztBQ25aQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCJcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcbiAgICBcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMoe3NldHNwaW5uZXIsc2V0dXNlcmRhdGEsc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9sb2dvdXRcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpXHJcbiAgICAgIHNldHVzZXJkYXRhKHt9KVxyXG4gICAgICBzZXRzcGlubmVyKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuICAgICAgICBzZWxlY3Rpb25zW2NhdGVnb3J5XS5zdG9wcmVxdWVzdGluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0c2VsZWN0aW9uKHNlbGVjdGlvbmxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcHBlZCByZXF1ZXN0XCIpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYocGFpZ25hdGlvbil7XHJcblxyXG4gICAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldGNvbnRlbnRkYXRhKE15ZGF0YSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKHtVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93LHJlbGF0aW9udHlwZSxVc2VySWRvZmNvbnRlbnR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgcmVsYXRpb250eXBlOnJlbGF0aW9udHlwZSxcclxuICAgICAgVXNlcklkb2Zjb250ZW50OlVzZXJJZG9mY29udGVudCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93LGxhc3Qsb3JkZXIsY29tbWVudGxpc3R9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke2NvbnRlbnRJZH0vJHtsYXN0fS8ke29yZGVyfWApO1xyXG4gICAgLy9idXJhZGEgdGVrcmFyZGFuIGLDvHTDvG4geW9ydW1sYXIgw6dla2lsaXlvciBla2xlbmVuIGVuIHNvbiB5b3J1bSDDp2VraWxtZWxpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jb21tZW50bGlzdF07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIGNvbnNvbGUubG9nKE15ZGF0YSlcclxuICAgICAgaWYobGFzdCl7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoTXlkYXRhLmNvbmNhdChDdXJyZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoQ3VycmVudC5jb25jYXQoTXlkYXRhKSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZCxzZXRhbGxvd2FjdGlvbn0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5Sb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTsgIFxyXG4gICAgICBzZXRhbGxvd2FjdGlvbih0cnVlKTsgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZighZGF0YS5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmkgIHIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICAgc2V0ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25jb3VudD1hc3luYyh7VXNlcklkfSk9PntcclxuXHJcbiAgIHRyeSB7XHJcbiAgICBcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvbm90aWZpY2F0aW9uL3VwZGF0ZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldHNwaW5uZXIsc2V0ZGF0YSxjYXRlZ29yeSxVc2VySWQsb3duZXJwb3N0LG9yZGVyfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT0gYXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke1VzZXJJZH0vJHtvd25lcnBvc3R9LyR7Y2F0ZWdvcnl9LyR7b3JkZXJ9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKFsuLi5kYXRhLmRhdGFdKVxyXG4gICAgICAgc2V0c3Bpbm5lcihmYWxzZSlcclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLFByZXZlbnQsRm9sbG93ZWRJZCxjaGVja2lmZm9sbG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGB1c2VyL2NyZWF0ZXVzZXJyZWxhdGlvbmAse1xyXG4gICAgICBGb2xsb3dlcklkOlVzZXJJZCxcclxuICAgICAgRm9sbG93ZWRJZDpGb2xsb3dlZElkLFxyXG4gICAgICBjaGVja2lmZm9sbG93OmNoZWNraWZmb2xsb3csXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgIH0sIDIwMDApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuICAgICAgXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyh7VXNlcklkLHNldG5hdmRhdGEsb3JkZXIsbmF2ZGF0YSxsYXN0cm93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9LyR7b3JkZXJ9LyR7bGFzdHJvd31gKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIFxyXG4gICAgaWYobGFzdHJvdyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vbzJcIilcclxuICAgICAgc2V0bmF2ZGF0YShOZXdkYXRhLmNvbmNhdChNeWN1cnJlbnRkYXRhKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTXljdXJyZW50ZGF0YS5jb25jYXQoTmV3ZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvdW50cmVxPWFzeW5jKHtVc2VySWQsc2V0Y291bnRkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0Y291bnQvJHtVc2VySWR9YCk7XHJcblxyXG5cclxuICAgIHNldGNvdW50ZGF0YShkYXRhLmRhdGEpO1xyXG4gXHJcbiAgICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2Vyc2ZvcnNlYXJjaGJhcj1hc3luYyh7aW5wdXR2YWx1ZSxzZXR1c2VycyxzZXRhY3RpdmUsc2V0bm90aGluZ2ZvdW5kfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcm5hbWUvJHtpbnB1dHZhbHVlfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgIHNldGFjdGl2ZShcIk5vdGhpbmdcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHNldGFjdGl2ZShcIlwiKTtcclxuICAgICAgc2V0dXNlcnMoZGF0YS5kYXRhKTtcclxuICAgIH0gIFxyXG5cclxuIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdCA9IGFzeW5jKHtQb3N0SWQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcInVzZXIvZGVsZXRlcG9zdFwiLHtcclxuICAgICAgUG9zdElkOlBvc3RJZFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50YW5zd2VycmVxID0gYXN5bmMoe1VwcGVyY29tbWVudElkLEFuc3dlcixVc2VySWQsc2V0ZXJybXNnLHNldHdpbmRvdyxDb250ZW50SWR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJjb21tZW50L3Byb2R1Y2VhbnN3ZXJcIix7XHJcbiAgICAgIENvbW1lbnRJZDpVcHBlcmNvbW1lbnRJZCxcclxuICAgICAgQ29udGVudElkOkNvbnRlbnRJZCxcclxuICAgICAgTWVzc2FnZTpBbnN3ZXIsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSA9IGFzeW5jICh7Rm9sbG93ZWRJZCxQcmV2ZW50LEZvbGxvd2VySWQsY3VycmVudGFjdGl2ZSxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvdXBkYXRldXNlcm5vdC8ke0ZvbGxvd2VySWR9LyR7Rm9sbG93ZWRJZH0vJHtjdXJyZW50YWN0aXZlfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcblxyXG4gICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0ZSk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtFcnJvcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5jb25zdCBFeHRlcm5hbD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDoyMDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnRyYW5zaXRpb246JHsoe2FrdGlmfSk9PmFrdGlmID8gXCJ0b3AgMC40c1wiIDogXCJ0b3AgMC40cywgei1pbmRleCAwLjZzXCJ9O1xyXG50b3A6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI1MCVcIiA6IFwiMjAwcHhcIn07XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCIxODBcIiA6IFwiLTIwMFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjMwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3c9KHtjaGlsZHJlbixhY3RpdmUsdHlwZSxjbG9zZWZ1bmN0aW9ufSk9PntcclxuICAgXHJcbiAgICB2YXIgaWNvbj0gbnVsbDtcclxuICAgIGlmKHR5cGUgPT0gXCJlcnJvclwiKXtcclxuICAgICAgIGljb249PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS0yeFwiIHN0eWxlPXt7Y29sb3I6XCJyZWRcIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHR5cGUgPT0gXCJjb25maXJtXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcImdyZWVuXCIsbWFyZ2luQm90dG9tOlwiMTBweFwifX0+PC9pPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN0aW9ufSBha3RpZj17YWN0aXZlfS8+XHJcbiAgICAgICAgIDxFeHRlcm5hbCBha3RpZj17YWN0aXZlfT5cclxuICAgICAgICAgICAgPFRleHRib3g+XHJcbiAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyx3b3JkV3JhcDonYnJlYWstd29yZCcsbGluZUhlaWdodDpcIjI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9UZXh0Ym94PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xvc2VmdW5jdGlvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiPk9LPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L0V4dGVybmFsPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XHJcbiIsImltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlLGtleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuIH1cclxuXHJcbiBib2R5IHtcclxuICBoZWlnaHQ6MTAwJTtcclxuIH1cclxuXHJcbiBodG1se1xyXG4gICBzY3JvbGwtYmVoYXZpb3I6c21vb3RoO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7cHJvZmlsZX0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gKVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmxhY2s9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMTUwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzZjNzU3ZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZXJndWFyZCh7Y2hpbGRyZW59KXtcclxuICAgIC8vaG9tZXBhZ2VcclxuXHJcbiAgICBjb25zdCBteXJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NvbnRyb2xsZXIsc2V0Y29udHJvbGxlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhLGxvZ2dlZH0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgXHJcbiAgICAgICAgY29uc3QgVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYobXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvW3VzZXLEsWRdL2xpa2VkXCIgfHwgbXlyb3V0ZXIucGF0aG5hbWUgPT0gXCIvW3VzZXLEsWRdL3NhdmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihteXJvdXRlci5xdWVyeS51c2VyxLFkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlyb3V0ZXIucHVzaChcIi9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9wcm9maWxlL1t1c2VybmFtZV0vZWRpdHByb2ZpbGVcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobXlyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRjb250cm9sbGVyKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cm91dGVyLnB1c2goXCIvNDA0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9EcmFmdHMvW3VzZXJpZF1cIil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobXlyb3V0ZXIucXVlcnkudXNlcmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Y29udHJvbGxlcih0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICB7Y29udHJvbGxlciA/IGNoaWxkcmVuIDogbnVsbH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbnRleHRkYXRhfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZXVzZXJjb250ZXh0PWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJjb250ZXh0PSh7Y2hpbGRyZW59KT0+e1xyXG5cclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FsbG93YWN0aW9uLHNldGFsbG93YWN0aW9uXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt1c2VyZGF0YSxzZXR1c2VyZGF0YV09dXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3RbZHJhZnRpZCxzZXRkcmFmdGlkXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBhbGxvd2FjdGlvbjphbGxvd2FjdGlvbixcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgZHJhZnRpZDpkcmFmdGlkLFxyXG4gICAgICAgICAgIHNldGRyYWZ0aWQsc2V0ZHJhZnRpZCxcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtsb2dpbnJlcSxyZXNpZ3RlcnJlcX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS93aW5kb3dcIjtcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7d2l0aFN0eWxlcyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQgR3VhcmRsYXlvdXQgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTGF5b3V0L3JvdXRlcmd1YXJkXCI7XHJcbmltcG9ydCB7QWNjb3VudENpcmNsZSxFbWFpbE91dGxpbmVkLExvY2ssQXJyb3dSaWdodCwgQXJyb3dMZWZ0LFN1cGVydmlzb3JBY2NvdW50LFN1cGVydmlzZWRVc2VyQ2lyY2xlU2hhcnAsIFN1cGVydmlzb3JBY2NvdW50Um91bmRlZCwgU3VwZXJ2aXNvckFjY291bnRTaGFycCwgQWNjb3VudENpcmNsZVNoYXJwLCBBY2NvdW50Q2lyY2xlUm91bmRlZCwgUGVyc29uLCBIb21lLCBBcnJvd1JpZ2h0QWx0Um91bmRlZCwgQ2hldnJvblJpZ2h0LCBBc3NpZ25tZW50fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlJbnB1dExhYmVsLXJvb3QnOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmV5JyxcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aUlucHV0LXVuZGVybGluZTphZnRlcic6IHtcclxuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2dyZWVuJyxcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdCc6IHtcclxuICAgICAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjM0ZCRUE3JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvbGVkLmpwZ1wiKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG5jb2xvcjp3aGl0ZTtcclxud2lkdGg6ODglO1xyXG5wYWRkaW5nOjEwcHg7XHJcbnBhZGRpbmctbGVmdDozNXB4O1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3dEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy1yaWdodDoyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy10b3A6MjBweDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDo2MDBweDtcclxuaGVpZ2h0OjU1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbnRyYW5zaXRpb246MC41cztcclxudHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcclxuXHJcbmBcclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOiR7KHtjaGVja3JlZ2lzdGVyfSk9PmNoZWNrcmVnaXN0ZXIgPyBcIjUwJVwiIDogXCIxMDAlXCJ9O1xyXG5wYWRkaW5nOjVweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5gXHJcbmNvbnN0IEJ1dHRvbnM9c3R5bGVkLmJ1dHRvbmBcclxuXHJcbm1hcmdpbi10b3A6MTBweDtcclxubWFyZ2luLWxlZnQ6MTBweDtcclxud2lkdGg6MTUwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbmJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuY29uc3QgSWNvbj1zdHlsZWQuaWBcclxubWFyZ2luLWxlZnQ6MTBweDtcclxuZm9udC1zaXplOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEljb25zZWN1cmU9c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIGdyZXk7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbnBhZGRpbmc6N3B4O1xyXG5sZWZ0Oi0xNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxudG9wOjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbmBcclxuXHJcbmNvbnN0IExvZ289c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwcHg7XHJcbmhlaWdodDoxMDBweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL3dheS5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IFJlZ2lzdGVybG9naW5ob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTVweDtcclxucmlnaHQ6MTVweDtcclxuYmFja2dyb3VuZC1jb2xvcjojZjUwMDU3O1xyXG53aWR0aDo0MHB4O1xyXG5oZWlnaHQ6NDBweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG50cmFuc2l0aW9uOjAuMDlzIGVhc2UtaW47XHJcbiY6aG92ZXIge1xyXG5jb2xvcjojZjUwMDU3O1xyXG53aWR0aDo0NXB4O1xyXG5oZWlnaHQ6NDVweDtcclxufVxyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IExvZ2luPSgpPT57XHJcbiAgICBcclxuICAgIGNvbnN0IHN0eWxlc2dldD1Dc3NUZXh0RmllbGQoKTtcclxuICAgIGNvbnN0e3NldGxvZ2dlZCxzZXR1c2VyZGF0YSxzZXRzcGlubmVyfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0W2N1cnJlbnR1cmwsc2V0Y3VycmVudF09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdFtiYWNrZW5kZXJyb3Isc2V0YmFja2VuZGVycm9yXT11c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3JlZ2lzdGVyLHNldHJlZ2lzdGVyXT11c2VTdGF0ZShcIkxvZ2luXCIpO1xyXG4gICAgY29uc3Rbd2luZG93YWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3RbaW5wdXRzLHNldGlucHV0c109dXNlU3RhdGUoe1xyXG5cclxuICAgICAgICBMb2dpbjp7XHJcbiAgICAgICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRS1wb3N0YVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhciBmYS1lbnZlbG9wZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3Rlcjp7XHJcbiAgICAgICAgICAgIG5hbWU6e1xyXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIixcclxuICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIlNveSDEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfX0pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJlZFwiKTtcclxuXHJcbiAgICAgICBjb25zdCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpO1xyXG5cclxuICAgICAgIC8qYXhpb3NzLmdldChcImh0dHBzOi8vYXBpLnBleGVscy5jb20vdjEvc2VhcmNoP3F1ZXJ5PW1hZ2ljXCIse1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOlwiNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxNGFkYjgwOWU4OTYzNDYwMmE4OTZkOGU2MmE4NTA0MDFcIixcclxuICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucGhvdG9zKTsgIFxyXG4gICAgICAgICAgICBzZXRjdXJyZW50KHJlcy5kYXRhLnBob3Rvc1szXS5zcmMub3JpZ2luYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBSZW5kZXJpY29uPShpdGVtKT0+e1xyXG5cclxuICAgICAgICAgIHN3aXRjaChpdGVtKXtcclxuICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFbWFpbE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9FbWFpbE91dGxpbmVkPlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPExvY2sgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0xvY2s+XHJcbiAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICBjYXNlIFwic3VybmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEFjY291bnRDaXJjbGUgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0FjY291bnRDaXJjbGU+ICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJtaXRoYW5kbGVyPSgpPT57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50aW5wdXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgY29uc3Qgb3VyZGF0YT17fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdXJyZW50aW5wdXRbcmVnaXN0ZXJdKSB7XHJcbiAgICAgICAgICAgIG91cmRhdGFba2V5XT1jdXJyZW50aW5wdXRbcmVnaXN0ZXJdW2tleV0udmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBzd2l0Y2gocmVnaXN0ZXIpe1xyXG4gICAgICAgICAgICBjYXNlIFwiTG9naW5cIjpcclxuICAgICAgICAgICAgICAgIGxvZ2lucmVxKHtcclxuICAgICAgICAgICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGE6b3VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgcm91dGVyOnJvdXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgc2V0YWN0aXZlOnNldGFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJlZ2lzdGVyXCI6ICBcclxuICAgICAgICAgICAgICAgIHJlc2lndGVycmVxKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgY29uc3QgY2hla2NpZmZvY3VzPSh0eXBlb2Zmb2N1cyx0eXBlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0c2dldD17Li4uaW5wdXRzfTtcclxuICAgICAgICBpbnB1dHNnZXRbcmVnaXN0ZXJdW3R5cGVdLmZvY3VzZWQ9dHlwZW9mZm9jdXMgPT0gXCJmb2N1c1wiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGUsdHlwZSxzZWN0aW9uKT0+e1xyXG4gICAgICAgIGNvbnN0IGlucHV0c2dldD17Li4uaW5wdXRzfTtcclxuICAgICAgICBpbnB1dHNnZXRbdHlwZV1bc2VjdGlvbl0udmFsdWU9ZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0aW5wdXRzKGlucHV0c2dldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJcIjtcclxuICAgIGlmKGVycm9ybXNnKXtcclxuICAgICAgICByZXR1cm4gPGgyPlNvbWV0aGluZyBXZW50IFdyb25nLi4uPC9oMj5cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoYmFja2VuZGVycm9yID09IFwiRVjEsFNUXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZMSfaW5peiBlbWFpbCB6YXRlbiBrdWxsYW7EsW1kYSFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXUFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IMWfaWZyZSB5YW5sxLHFnyFcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihiYWNrZW5kZXJyb3IgPT0gXCJXRVwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmRpxJ9pbml6IGUtcG9zdGEgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxJbWFnZURpdiB1cmxnZXQ9e2N1cnJlbnR1cmx9IGFrdGlmPXt0cnVlfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgICA8V2luZG93IGNsb3NlZnVuY3Rpb249eygpPT5zZXRhY3RpdmUoZmFsc2UpfSBhY3RpdmU9e3dpbmRvd2FjdGl2ZX0gdHlwZT1cImVycm9yXCI+RS1wb3N0YSB2ZXlhIMWfaWZyZSB5YW5sxLHFnyE8L1dpbmRvdz5cclxuICAgICAgICAgICA8V2luZG93RGl2PiAgICBcclxuICAgICAgICAgICAgICAgPFJlZ2lzdGVybG9naW5ob2xkZXIgb25DbGljaz17cmVnaXN0ZXIgPT0gXCJMb2dpblwiID8gKCk9PnNldHJlZ2lzdGVyKFwiUmVnaXN0ZXJcIikgOiAoKT0+c2V0cmVnaXN0ZXIoXCJMb2dpblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIgPT0gXCJMb2dpblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzaWdubWVudCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjMwcHhcIn19PjwvQXNzaWdubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIixmb250U2l6ZTpcIjMwcHhcIn19PjwvUGVyc29uPlxyXG4gICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgPC9SZWdpc3RlcmxvZ2luaG9sZGVyPiBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6NH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9nbz48L0xvZ28+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8cCAgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsZmxleDo0LHdvcmRXcmFwOlwiYnJlYWstd29yZFwifX0+SGFraWthdGluIHRlbXNpbGNpc2luaW4gZW4gYXogb2xkdcSfdSB6YW1hbiwgb251IGRpbGUgZ2V0aXJtZW5pbiB0ZWhsaWtlbGkgb2xkdcSfdSB6YW1hbiBkZcSfaWwsIGNhbiBzxLFrxLFjxLEgb2xkdcSfdSB6YW1hbmTEsXIuPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gXCIxMDAlXCIgOiBcIjcwJVwiLGJveFNpemluZzpcImJvcmRlci1ib3hcIixmbGV4OjcsZGlzcGxheTpyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyBcImZsZXhcIiA6IFwiYmxvY2tcIixmbGV4V3JhcDpcIndyYXBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dHNbcmVnaXN0ZXJdKS5tYXAoaXRlbT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRIb2xkZXIgIGNoZWNrcmVnaXN0ZXI9e3JlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IHRydWU6ZmFsc2V9IGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6e2NvbG9yOlwid2hpdGVcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj57UmVuZGVyaWNvbihpdGVtKX08L0lucHV0QWRvcm5tZW50PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc2dldC5yb290fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2l0ZW0gPT0gXCJwYXNzd29yZFwiID8gXCJwYXNzd29yZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZWhhbmRsZXIoZSxyZWdpc3RlcixpdGVtKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKT0+Y2hla2NpZmZvY3VzKFwiZm9jdXNcIixpdGVtKX0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKT0+Y2hla2NpZmZvY3VzKFwicmVtb3ZlXCIsaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnZhbHVlICE9PSBcIlwiIHx8IGlucHV0c1tyZWdpc3Rlcl1baXRlbV0uZm9jdXNlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS5wbGFjZWhvbGRlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCc+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIgPT0gXCJMb2dpblwiID8gPHAgc3R5bGU9e3tjb2xvcjpcIiNFQjMyMzJcIn19PsWeaWZyZW5pIG1pIHVudXR0dW4/PC9wPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4OlwiM1wiLHdpZHRoOlwiMTAwJVwifX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIgPT0gXCJMb2dpblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e3N0eWxlOntjb2xvcjpcInJlZFwifX19ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8Q2hldnJvblJpZ2h0IHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCJ9fT48L0NoZXZyb25SaWdodD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/IFN1Ym1pdGhhbmRsZXIgOiAoKT0+c2V0cmVnaXN0ZXIoXCJMb2dpblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpcmnFnyBZYXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e3N0eWxlOntjb2xvcjpcInJlZFwifX19ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxTdXBlcnZpc29yQWNjb3VudCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+PC9TdXBlcnZpc29yQWNjb3VudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1N1Ym1pdGhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLYXnEsXQgT2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9XaW5kb3dEaXY+XHJcbiAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vKlxyXG5Mb2dpbi5sYXlvdXQ9KGNoaWxkcmVuKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICA8R3VhcmRsYXlvdXQ+XHJcbiAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgIDwvR3VhcmRsYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuKi9cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==