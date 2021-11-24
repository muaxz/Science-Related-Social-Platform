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
          href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap&family=Poppins:ital,wght@1,300&display=swap",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJjb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJsb2dvdXQiLCJnZXQiLCJsb2dnZWQiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwidHlwZW9mc3VibWl0IiwicHJvY2Vzc3R5cGUiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbiIsImxlbmd0aCIsInNlbGVjdGlvbnMiLCJzdG9wcmVxdWVzdGluZyIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJSb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIlByZXZlbnQiLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJjdXJyZW50IiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJDb21tZW50SWQiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJjdXJyZW50YWN0aXZlIiwic3RhdGUiLCJjcmVhdGV1c2VyY29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyY29udGV4dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJhbGxvd2FjdGlvbiIsImRyYWZ0aWQiLCJzZXRkcmFmdGlkIiwic3Bpbm5lciIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15YXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDLDRFQUE1QjtBQUF5RyxtQkFBUyxFQUFDLGlHQUFuSDtBQUFxTixxQkFBVyxFQUFDO0FBQWpPO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFNLGNBQUksRUFBQyxxUUFBWDtBQUFpUixhQUFHLEVBQUM7QUFBclI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFIsRUFRU0YsTUFBTSxlQUFDLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxDQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURILG1CQURIO0FBY0gsQ0FuQkQ7O0FBcUJlRixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG4gICAgXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jKHtzZXRzcGlubmVyLHNldHVzZXJkYXRhLHNldGxvZ2dlZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoXCIvbG9nb3V0XCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKVxyXG4gICAgICBzZXR1c2VyZGF0YSh7fSlcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhsb2dnZWQpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcix0eXBlb2ZzdWJtaXR9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIsey4uLmNvbnRlbnRkYXRhLHByb2Nlc3N0eXBlOnR5cGVvZnN1Ym1pdH0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhNeWRhdGEpXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWQsc2V0YWxsb3dhY3Rpb259KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEuUm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7ICBcclxuICAgICAgc2V0YWxsb3dhY3Rpb24odHJ1ZSk7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRzcGlubmVyLHNldGRhdGEsY2F0ZWdvcnksVXNlcklkLG93bmVycG9zdCxvcmRlcn0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09IGF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZWNvbnRlbnQvJHtVc2VySWR9LyR7b3duZXJwb3N0fS8ke2NhdGVnb3J5fS8ke29yZGVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShbLi4uZGF0YS5kYXRhXSlcclxuICAgICAgIHNldHNwaW5uZXIoZmFsc2UpXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxQcmV2ZW50LEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBcclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3QgPSBhc3luYyh7UG9zdElkLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJ1c2VyL2RlbGV0ZXBvc3RcIix7XHJcbiAgICAgIFBvc3RJZDpQb3N0SWRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudGFuc3dlcnJlcSA9IGFzeW5jKHtVcHBlcmNvbW1lbnRJZCxBbnN3ZXIsVXNlcklkLHNldGVycm1zZyxzZXR3aW5kb3csQ29udGVudElkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiY29tbWVudC9wcm9kdWNlYW5zd2VyXCIse1xyXG4gICAgICBDb21tZW50SWQ6VXBwZXJjb21tZW50SWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIE1lc3NhZ2U6QW5zd2VyLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUgPSBhc3luYyAoe0ZvbGxvd2VkSWQsUHJldmVudCxGb2xsb3dlcklkLGN1cnJlbnRhY3RpdmUsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL3VwZGF0ZXVzZXJub3QvJHtGb2xsb3dlcklkfS8ke0ZvbGxvd2VkSWR9LyR7Y3VycmVudGFjdGl2ZX1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG5cclxuICAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdGUpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGV4dGRhdGF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWxsb3dhY3Rpb24sc2V0YWxsb3dhY3Rpb25dPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtkcmFmdGlkLHNldGRyYWZ0aWRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIik7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9pZih0b2tlbil7XHJcblxyXG4gICAgICAgICAgICBDb250ZXh0ZGF0YSh7XHJcbiAgICAgICAgICAgICAgICBUb2tlbjp0b2tlbixcclxuICAgICAgICAgICAgICAgIHNldGNvbnRleHRkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0bG9nZ2VkOnNldGxvZ2dlZCxcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHNldGFsbG93YWN0aW9uOnNldGFsbG93YWN0aW9uLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL31cclxuICAgICAgICAvL2Vsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIGFsbG93YWN0aW9uOmFsbG93YWN0aW9uLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc3Bpbm5lcjpzcGlubmVyLFxyXG4gICAgICAgICAgIHNldHNwaW5uZXIsc2V0c3Bpbm5lcixcclxuICAgICAgICAgICBkcmFmdGlkOmRyYWZ0aWQsXHJcbiAgICAgICAgICAgc2V0ZHJhZnRpZCxzZXRkcmFmdGlkLFxyXG4gICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2NyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyY29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgUm91dGVyLHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJzsgXHJcbmltcG9ydCAnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuXHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpOyBcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpOyBcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuXHJcbmNvbnN0IE15YXBwPSh7Q29tcG9uZW50LHBhZ2VQcm9wc30pPT57XHJcbiAgIFxyXG4gICAgY29uc3QgTGF5b3V0PUNvbXBvbmVudC5sYXlvdXQgfHwgKChwYWdlKT0+cGFnZSk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgICAgPENvbnRleHRQcm92aWRlcj4gICBcclxuICAgICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAmZmFtaWx5PURvbWluZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9VGlub3M6aXRhbEAxJmRpc3BsYXk9c3dhcCZmYW1pbHk9SUJNK1BsZXgrU2VyaWY6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDMwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJmZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJmZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAmZmFtaWx5PVRpbm9zOml0YWxAMSZkaXNwbGF5PXN3YXAmZmFtaWx5PUlCTStQbGV4K1NlcmlmOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9SW50ZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgICB7TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPil9XHJcbiAgICAgICAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgPC8+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlhcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==