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
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getusersforsearchbar", function() { return Getusersforsearchbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentanswerreq", function() { return Commentanswerreq; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}/${category}`);
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
      headers: {
        "authorization": `Bearer ${Token}`
      }
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
      console.log("girdiiiiiii");

      if (myrouter.pathname == "/[userıd]/liked" || myrouter.pathname == "/[userıd]/saved") {
        if (myrouter.query.userıd == userdata.UserId) {
          setcontroller(true);
        } else {
          myrouter.push("/404");
        }
      }

      if (myrouter.pathname == "/login") {
        console.log(logged);

        if (logged) {
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
    const token = localStorage.getItem("TOKEN");

    if (token) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_2__["Contextdata"])({
        Token: token,
        setcontextdata: setuserdata,
        setlogged: setlogged,
        setspinner: setspinner,
        setallowaction: setallowaction
      });
    }
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
    lineNumber: 33,
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0L3JvdXRlcmd1YXJkLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwidHlwZW9mc3VibWl0IiwicHJvY2Vzc3R5cGUiLCJQcm9kdWNlY29tbWVudHJlcSIsIk1lc3NhZ2UiLCJUYWtlcklkIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiY2F0ZWdvcnkiLCJwYWlnbmF0aW9uIiwic2VsZWN0aW9ubGlzdCIsInNldHNlbGVjdGlvbiIsImdldCIsImxlbmd0aCIsInNlbGVjdGlvbnMiLCJzdG9wcmVxdWVzdGluZyIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsImhlYWRlcnMiLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwiUm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50Iiwib3duZXJwb3N0IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJOb3RpZmljYXRpb25yZXEiLCJzZXRuYXZkYXRhIiwibmF2ZGF0YSIsImxhc3Ryb3ciLCJNeWN1cnJlbnRkYXRhIiwiTmV3ZGF0YSIsIk5vdGlmaWNhdGlvbkNvdW50cmVxIiwic2V0Y291bnRkYXRhIiwiR2V0dXNlcnNmb3JzZWFyY2hiYXIiLCJpbnB1dHZhbHVlIiwic2V0dXNlcnMiLCJzZXRub3RoaW5nZm91bmQiLCJEZWxldGVQb3N0Iiwic3VjY2VzcyIsIkNvbW1lbnRhbnN3ZXJyZXEiLCJVcHBlcmNvbW1lbnRJZCIsIkFuc3dlciIsIkNvbW1lbnRJZCIsIkV4dGVybmFsIiwic3R5bGVkIiwiZGl2IiwiYWt0aWYiLCJUZXh0Ym94IiwiV2luZG93IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJ0eXBlIiwiY2xvc2VmdW5jdGlvbiIsImljb24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsIndvcmRXcmFwIiwibGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwiaGVpZ2h0IiwicHJvZmlsZSIsIkJsYWNrIiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsIlJvdXRlcmd1YXJkIiwibXlyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb250cm9sbGVyIiwic2V0Y29udHJvbGxlciIsInVzZVN0YXRlIiwibG9nZ2VkIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyxLFkIiwidXNlcm5hbWUiLCJ1c2VyaWQiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJhbGxvd2FjdGlvbiIsImRyYWZ0aWQiLCJzZXRkcmFmdGlkIiwic3Bpbm5lciIsIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJDb2xvciIsIkltYWdlRGl2IiwiSW5wdXQiLCJpbnB1dCIsIldpbmRvd0RpdiIsIklucHV0SG9sZGVyIiwiY2hlY2tyZWdpc3RlciIsIkJ1dHRvbnMiLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiUmVnaXN0ZXJsb2dpbmhvbGRlciIsIkxvZ2luIiwic3R5bGVzZ2V0IiwiY3VycmVudHVybCIsInNldGN1cnJlbnQiLCJiYWNrZW5kZXJyb3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwicmVnaXN0ZXIiLCJzZXRyZWdpc3RlciIsIndpbmRvd2FjdGl2ZSIsImlucHV0cyIsInNldGlucHV0cyIsImVtYWlsIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwidmFsdWUiLCJmb2N1c2VkIiwicGFzc3dvcmQiLCJSZWdpc3RlciIsIm5hbWUiLCJzdXJuYW1lIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiUmVuZGVyaWNvbiIsIml0ZW0iLCJTdWJtaXRoYW5kbGVyIiwiY3VycmVudGlucHV0Iiwib3VyZGF0YSIsImtleSIsInRyaW0iLCJjaGVrY2lmZm9jdXMiLCJ0eXBlb2Zmb2N1cyIsImlucHV0c2dldCIsImNoYW5nZWhhbmRsZXIiLCJlIiwic2VjdGlvbiIsInRhcmdldCIsImJhY2tlbmRlcnJvcm1lc3NhZ2UiLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJmbGV4IiwiYm94U2l6aW5nIiwiZmxleFdyYXAiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic3R5bGUiLCJlbmRBZG9ybm1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtR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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhNeWRhdGEpXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWQsc2V0YWxsb3dhY3Rpb259KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse1xyXG4gICAgICBoZWFkZXJzOntcclxuICAgICAgICBcImF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7VG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5Sb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTsgIFxyXG4gICAgICBzZXRhbGxvd2FjdGlvbih0cnVlKTsgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZighZGF0YS5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZXRzdG9wc2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmkgIHIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICAgc2V0ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25jb3VudD1hc3luYyh7VXNlcklkfSk9PntcclxuXHJcbiAgIHRyeSB7XHJcbiAgICBcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvbm90aWZpY2F0aW9uL3VwZGF0ZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldHNwaW5uZXIsc2V0ZGF0YSxjYXRlZ29yeSxVc2VySWQsb3duZXJwb3N0LG9yZGVyfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT0gYXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke1VzZXJJZH0vJHtvd25lcnBvc3R9LyR7Y2F0ZWdvcnl9LyR7b3JkZXJ9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKFsuLi5kYXRhLmRhdGFdKVxyXG4gICAgICAgc2V0c3Bpbm5lcihmYWxzZSlcclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyh7VXNlcklkLHNldG5hdmRhdGEsb3JkZXIsbmF2ZGF0YSxsYXN0cm93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9LyR7b3JkZXJ9LyR7bGFzdHJvd31gKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKE5ld2RhdGEpO1xyXG5cclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3QgPSBhc3luYyh7UG9zdElkLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJ1c2VyL2RlbGV0ZXBvc3RcIix7XHJcbiAgICAgIFBvc3RJZDpQb3N0SWRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudGFuc3dlcnJlcSA9IGFzeW5jKHtVcHBlcmNvbW1lbnRJZCxBbnN3ZXIsVXNlcklkLHNldGVycm1zZyxzZXR3aW5kb3csQ29udGVudElkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiY29tbWVudC9wcm9kdWNlYW5zd2VyXCIse1xyXG4gICAgICBDb21tZW50SWQ6VXBwZXJjb21tZW50SWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIE1lc3NhZ2U6QW5zd2VyLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHtFcnJvcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5jb25zdCBFeHRlcm5hbD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxud2lkdGg6MzAwcHg7XHJcbmhlaWdodDoyMDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnRyYW5zaXRpb246JHsoe2FrdGlmfSk9PmFrdGlmID8gXCJ0b3AgMC40c1wiIDogXCJ0b3AgMC40cywgei1pbmRleCAwLjZzXCJ9O1xyXG50b3A6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI1MCVcIiA6IFwiMjAwcHhcIn07XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCIxODBcIiA6IFwiLTIwMFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjMwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3c9KHtjaGlsZHJlbixhY3RpdmUsdHlwZSxjbG9zZWZ1bmN0aW9ufSk9PntcclxuICAgXHJcbiAgICB2YXIgaWNvbj0gbnVsbDtcclxuICAgIGlmKHR5cGUgPT0gXCJlcnJvclwiKXtcclxuICAgICAgIGljb249PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS0yeFwiIHN0eWxlPXt7Y29sb3I6XCJyZWRcIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHR5cGUgPT0gXCJjb25maXJtXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcImdyZWVuXCIsbWFyZ2luQm90dG9tOlwiMTBweFwifX0+PC9pPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN0aW9ufSBha3RpZj17YWN0aXZlfS8+XHJcbiAgICAgICAgIDxFeHRlcm5hbCBha3RpZj17YWN0aXZlfT5cclxuICAgICAgICAgICAgPFRleHRib3g+XHJcbiAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyx3b3JkV3JhcDonYnJlYWstd29yZCcsbGluZUhlaWdodDpcIjI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9UZXh0Ym94PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xvc2VmdW5jdGlvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiPk9LPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L0V4dGVybmFsPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XHJcbiIsImltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlLGtleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuIH1cclxuXHJcbiBib2R5IHtcclxuICBoZWlnaHQ6MTAwJTtcclxuIH1cclxuXHJcbiBodG1se1xyXG4gICBzY3JvbGwtYmVoYXZpb3I6c21vb3RoO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7cHJvZmlsZX0pO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gKVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmxhY2s9c3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRvcDowO1xyXG5sZWZ0OjA7XHJcbndpZHRoOjEwMCU7XHJcbnRyYW5zaXRpb246YmFja2dyb3VuZCAwLjRzO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjE1MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlMzYwID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFuaW1hdGlvbjogJHtyb3RhdGUzNjB9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyZ3VhcmQoe2NoaWxkcmVufSl7XHJcbiAgICAvL2hvbWVwYWdlXHJcblxyXG4gICAgY29uc3QgbXlyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtjb250cm9sbGVyLHNldGNvbnRyb2xsZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YSxsb2dnZWR9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhsb2dnZWQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnaXJkaWlpaWlpaVwiKVxyXG4gICAgICAgICAgICBpZihteXJvdXRlci5wYXRobmFtZSA9PSBcIi9bdXNlcsSxZF0vbGlrZWRcIiB8fCBteXJvdXRlci5wYXRobmFtZSA9PSBcIi9bdXNlcsSxZF0vc2F2ZWRcIil7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKG15cm91dGVyLnF1ZXJ5LnVzZXLEsWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRjb250cm9sbGVyKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cm91dGVyLnB1c2goXCIvNDA0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15cm91dGVyLnBhdGhuYW1lID09IFwiL2xvZ2luXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nZ2VkKVxyXG4gICAgICAgICAgICAgICAgaWYobG9nZ2VkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBteXJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRjb250cm9sbGVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15cm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2ZpbGUvW3VzZXJuYW1lXS9lZGl0cHJvZmlsZVwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihteXJvdXRlci5xdWVyeS51c2VybmFtZSA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGNvbnRyb2xsZXIodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlyb3V0ZXIucHVzaChcIi80MDRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15cm91dGVyLnBhdGhuYW1lID09IFwiL0RyYWZ0cy9bdXNlcmlkXVwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihteXJvdXRlci5xdWVyeS51c2VyaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRjb250cm9sbGVyKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG15cm91dGVyLnB1c2goXCIvNDA0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIHtjb250cm9sbGVyID8gY2hpbGRyZW4gOiBudWxsfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGV4dGRhdGF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWxsb3dhY3Rpb24sc2V0YWxsb3dhY3Rpb25dPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtkcmFmdGlkLHNldGRyYWZ0aWRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIik7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG5cclxuICAgICAgICAgICAgQ29udGV4dGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRjb250ZXh0ZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRhbGxvd2FjdGlvbjpzZXRhbGxvd2FjdGlvbixcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIGFsbG93YWN0aW9uOmFsbG93YWN0aW9uLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc3Bpbm5lcjpzcGlubmVyLFxyXG4gICAgICAgICAgIHNldHNwaW5uZXIsc2V0c3Bpbm5lcixcclxuICAgICAgICAgICBkcmFmdGlkOmRyYWZ0aWQsXHJcbiAgICAgICAgICAgc2V0ZHJhZnRpZCxzZXRkcmFmdGlkLFxyXG4gICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2NyZWF0ZXVzZXJjb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyY29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge2xvZ2lucmVxLHJlc2lndGVycmVxfSBmcm9tIFwiLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQgV2luZG93IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL3dpbmRvd1wiO1xyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b24sSW5wdXRBZG9ybm1lbnR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHt3aXRoU3R5bGVzLG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCBSb3V0ZXJndWFyZCBmcm9tIFwiLi4vY29udGFpbmVycy9MYXlvdXQvcm91dGVyZ3VhcmRcIjtcclxuaW1wb3J0IHtBY2NvdW50Q2lyY2xlLEVtYWlsT3V0bGluZWQsTG9jayxBcnJvd1JpZ2h0LCBBcnJvd0xlZnQsU3VwZXJ2aXNvckFjY291bnQsU3VwZXJ2aXNlZFVzZXJDaXJjbGVTaGFycCwgU3VwZXJ2aXNvckFjY291bnRSb3VuZGVkLCBTdXBlcnZpc29yQWNjb3VudFNoYXJwLCBBY2NvdW50Q2lyY2xlU2hhcnAsIEFjY291bnRDaXJjbGVSb3VuZGVkLCBQZXJzb24sIEhvbWUsIEFycm93UmlnaHRBbHRSb3VuZGVkLCBDaGV2cm9uUmlnaHQsIEFzc2lnbm1lbnR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5cclxuXHJcblxyXG5jb25zdCBDc3NUZXh0RmllbGQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgJyYgLk11aUlucHV0TGFiZWwtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAuTXVpSW5wdXQtdW5kZXJsaW5lOmFmdGVyJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xyXG4gICAgICAgICcmIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMzRkJFQTcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcIi9sZWQuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbmNvbG9yOndoaXRlO1xyXG53aWR0aDo4OCU7XHJcbnBhZGRpbmc6MTBweDtcclxucGFkZGluZy1sZWZ0OjM1cHg7XHJcbmJvcmRlcjpub25lO1xyXG5vdXRsaW5lOm5vbmU7XHJcbnRyYW5zaXRpb246MC41cztcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjp3aGl0ZVxyXG59XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvd0Rpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjYwMHB4O1xyXG5oZWlnaHQ6NTUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG50cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG5cclxuYFxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxud2lkdGg6JHsoe2NoZWNrcmVnaXN0ZXJ9KT0+Y2hlY2tyZWdpc3RlciA/IFwiNTAlXCIgOiBcIjEwMCVcIn07XHJcbnBhZGRpbmc6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbmBcclxuY29uc3QgQnV0dG9ucz1zdHlsZWQuYnV0dG9uYFxyXG5cclxubWFyZ2luLXRvcDoxMHB4O1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG53aWR0aDoxNTBweDtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6d2hpdGU7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnRyYW5zaXRpb246MC4zcztcclxuYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5jb25zdCBJY29uPXN0eWxlZC5pYFxyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5mb250LXNpemU6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvcmRlcjoxcHggc29saWQgZ3JleTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxucGFkZGluZzo3cHg7XHJcbmxlZnQ6LTE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgTG9nbz1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDBweDtcclxuaGVpZ2h0OjEwMHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvd2F5LmpwZ1wiKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgUmVnaXN0ZXJsb2dpbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNXB4O1xyXG5yaWdodDoxNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNmNTAwNTc7XHJcbndpZHRoOjQwcHg7XHJcbmhlaWdodDo0MHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbnRyYW5zaXRpb246MC4wOXMgZWFzZS1pbjtcclxuJjpob3ZlciB7XHJcbmNvbG9yOiNmNTAwNTc7XHJcbndpZHRoOjQ1cHg7XHJcbmhlaWdodDo0NXB4O1xyXG59XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgTG9naW49KCk9PntcclxuICAgIFxyXG4gICAgY29uc3Qgc3R5bGVzZ2V0PUNzc1RleHRGaWVsZCgpO1xyXG4gICAgY29uc3R7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHNldHNwaW5uZXJ9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3RbY3VycmVudHVybCxzZXRjdXJyZW50XT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W2JhY2tlbmRlcnJvcixzZXRiYWNrZW5kZXJyb3JdPXVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbcmVnaXN0ZXIsc2V0cmVnaXN0ZXJdPXVzZVN0YXRlKFwiTG9naW5cIik7XHJcbiAgICBjb25zdFt3aW5kb3dhY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdFtpbnB1dHMsc2V0aW5wdXRzXT11c2VTdGF0ZSh7XHJcblxyXG4gICAgICAgIExvZ2luOntcclxuICAgICAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyOntcclxuICAgICAgICAgICAgbmFtZTp7XHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixLBzaW1cIixcclxuICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdXNlclwiLFxyXG4gICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiU295IMSwc2ltXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVzZXJcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRS1wb3N0YVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhciBmYS1lbnZlbG9wZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLFnmlmcmVcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdW5sb2NrLWFsdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpO1xyXG5cclxuICAgICAgIGNvbnN0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSk7XHJcblxyXG4gICAgICAgLypheGlvc3MuZ2V0KFwiaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9bWFnaWNcIix7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCI1NjM0OTJhZDZmOTE3MDAwMDEwMDAwMDE0YWRiODA5ZTg5NjM0NjAyYTg5NmQ4ZTYyYTg1MDQwMVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5waG90b3MpOyAgXHJcbiAgICAgICAgICAgIHNldGN1cnJlbnQocmVzLmRhdGEucGhvdG9zWzNdLnNyYy5vcmlnaW5hbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IFJlbmRlcmljb249KGl0ZW0pPT57XHJcblxyXG4gICAgICAgICAgc3dpdGNoKGl0ZW0pe1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEVtYWlsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0VtYWlsT3V0bGluZWQ+XHJcbiAgICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8TG9jayBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvTG9jaz5cclxuICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJzdXJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8QWNjb3VudENpcmNsZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQWNjb3VudENpcmNsZT4gICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdGhhbmRsZXI9KCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRpbnB1dD17Li4uaW5wdXRzfTtcclxuICAgICAgICBjb25zdCBvdXJkYXRhPXt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN1cnJlbnRpbnB1dFtyZWdpc3Rlcl0pIHtcclxuICAgICAgICAgICAgb3VyZGF0YVtrZXldPWN1cnJlbnRpbnB1dFtyZWdpc3Rlcl1ba2V5XS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHN3aXRjaChyZWdpc3Rlcil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbG9naW5yZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICByb3V0ZXI6cm91dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXR1c2VyZGF0YTpzZXR1c2VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRiYWNrZW5kZXJyb3I6c2V0YmFja2VuZGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUmVnaXN0ZXJcIjogIFxyXG4gICAgICAgICAgICAgICAgcmVzaWd0ZXJyZXEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGJhY2tlbmRlcnJvcjpzZXRiYWNrZW5kZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGE6b3VyZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0YWN0aXZlOnNldGFjdGl2ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICBjb25zdCBjaGVrY2lmZm9jdXM9KHR5cGVvZmZvY3VzLHR5cGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXRzZ2V0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGlucHV0c2dldFtyZWdpc3Rlcl1bdHlwZV0uZm9jdXNlZD10eXBlb2Zmb2N1cyA9PSBcImZvY3VzXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgc2V0aW5wdXRzKGlucHV0c2dldCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlaGFuZGxlcj0oZSx0eXBlLHNlY3Rpb24pPT57XHJcbiAgICAgICAgY29uc3QgaW5wdXRzZ2V0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGlucHV0c2dldFt0eXBlXVtzZWN0aW9uXS52YWx1ZT1lLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFja2VuZGVycm9ybWVzc2FnZT1cIlwiO1xyXG4gICAgaWYoZXJyb3Jtc2cpe1xyXG4gICAgICAgIHJldHVybiA8aDI+U29tZXRoaW5nIFdlbnQgV3JvbmcuLi48L2gyPlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihiYWNrZW5kZXJyb3IgPT0gXCJFWMSwU1RcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkxJ9pbml6IGVtYWlsIHphdGVuIGt1bGxhbsSxbWRhIVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGJhY2tlbmRlcnJvciA9PSBcIldQXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZGnEn2luaXogxZ9pZnJlIHlhbmzEscWfIVwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGJhY2tlbmRlcnJvciA9PSBcIldFXCIpe1xyXG4gICAgICBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiR2lyZGnEn2luaXogZS1wb3N0YSB5YW5sxLHFnyFcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEltYWdlRGl2IHVybGdldD17Y3VycmVudHVybH0gYWt0aWY9e3RydWV9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgIDxXaW5kb3cgY2xvc2VmdW5jdGlvbj17KCk9PnNldGFjdGl2ZShmYWxzZSl9IGFjdGl2ZT17d2luZG93YWN0aXZlfSB0eXBlPVwiZXJyb3JcIj5FLXBvc3RhIHZleWEgxZ9pZnJlIHlhbmzEscWfITwvV2luZG93PlxyXG4gICAgICAgICAgIDxXaW5kb3dEaXY+ICAgIFxyXG4gICAgICAgICAgICAgICA8UmVnaXN0ZXJsb2dpbmhvbGRlciBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyAoKT0+c2V0cmVnaXN0ZXIoXCJSZWdpc3RlclwiKSA6ICgpPT5zZXRyZWdpc3RlcihcIkxvZ2luXCIpfT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlciA9PSBcIkxvZ2luXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NpZ25tZW50IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMzBweFwifX0+PC9Bc3NpZ25tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGZvbnRTaXplOlwiMzBweFwifX0+PC9QZXJzb24+XHJcbiAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L1JlZ2lzdGVybG9naW5ob2xkZXI+IFxyXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDo0fX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvPjwvTG9nbz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxwICBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixmbGV4OjQsd29yZFdyYXA6XCJicmVhay13b3JkXCJ9fT5IYWtpa2F0aW4gdGVtc2lsY2lzaW5pbiBlbiBheiBvbGR1xJ91IHphbWFuLCBvbnUgZGlsZSBnZXRpcm1lbmluIHRlaGxpa2VsaSBvbGR1xJ91IHphbWFuIGRlxJ9pbCwgY2FuIHPEsWvEsWPEsSBvbGR1xJ91IHphbWFuZMSxci48L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyBcIjEwMCVcIiA6IFwiNzAlXCIsYm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLGZsZXg6NyxkaXNwbGF5OnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwiZmxleFwiIDogXCJibG9ja1wiLGZsZXhXcmFwOlwid3JhcFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGlucHV0c1tyZWdpc3Rlcl0pLm1hcChpdGVtPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dEhvbGRlciAgY2hlY2tyZWdpc3Rlcj17cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gdHJ1ZTpmYWxzZX0ga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTp7Y29sb3I6XCJ3aGl0ZVwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPntSZW5kZXJpY29uKGl0ZW0pfTwvSW5wdXRBZG9ybm1lbnQ+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzZ2V0LnJvb3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17aXRlbSA9PSBcInBhc3N3b3JkXCIgPyBcInBhc3N3b3JkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+Y2hhbmdlaGFuZGxlcihlLHJlZ2lzdGVyLGl0ZW0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT5jaGVrY2lmZm9jdXMoXCJmb2N1c1wiLGl0ZW0pfSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpPT5jaGVrY2lmZm9jdXMoXCJyZW1vdmVcIixpdGVtKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWQ9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0udmFsdWUgIT09IFwiXCIgfHwgaW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS5mb2N1c2VkID09IHRydWUgPyB0cnVlIDogZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCIgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnBsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJz48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlciA9PSBcIkxvZ2luXCIgPyA8cCBzdHlsZT17e2NvbG9yOlwiI0VCMzIzMlwifX0+xZ5pZnJlbmkgbWkgdW51dHR1bj88L3A+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXg6XCIzXCIsd2lkdGg6XCIxMDAlXCJ9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlciA9PSBcIkxvZ2luXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7c3R5bGU6e2NvbG9yOlwicmVkXCJ9fX0gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxDaGV2cm9uUmlnaHQgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PjwvQ2hldnJvblJpZ2h0Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVnaXN0ZXIgPT0gXCJMb2dpblwiID8gU3VibWl0aGFuZGxlciA6ICgpPT5zZXRyZWdpc3RlcihcIkxvZ2luXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2lyacWfIFlhcCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7c3R5bGU6e2NvbG9yOlwicmVkXCJ9fX0gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PFN1cGVydmlzb3JBY2NvdW50IHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCJ9fT48L1N1cGVydmlzb3JBY2NvdW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17U3VibWl0aGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEthecSxdCBPbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj4gICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L1dpbmRvd0Rpdj5cclxuICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=