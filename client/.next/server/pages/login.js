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
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq */
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

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
  } else {
    return true;
  }
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
  router
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/content/produce", {
      contentdata: contentdata
    });

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
  setstopreq
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      if (data.data.length == 0) {
        setstopreq(false);
      }

      const Current = [...currentdata];
      const Mydata = [...data.data]; //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      setcontentdata(Current.concat(Mydata));
      setspinner(false);
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
  setwindow
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`comment/${contentId}`);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      console.log(data.data);
      setcomment(data.data);
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
  setlogged
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/getuserdata`, {
      headers: {
        "authorization": `Bearer ${Token}`
      }
    });

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
        Userrole: data.userdata.role,
        Userimage: data.userdata.imageurl
      };
      setcontextdata(mydata);
      setspinner(true);
      setlogged(true);
    } else {
      return;
    }
  } catch (err) {
    console.log("errorburadaduruyor");
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
      if (data.data.length == 0) {
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
  setdata,
  catogery,
  UserId
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/profilecontent/${catogery}/${UserId}`);

    if (Errorhandler({
      data
    })) {
      setdata(data.data);
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
})(["position:absolute;left:50%;transform:translate(-50%,-50%);width:300px;height:200px;text-align:center;transition:top 0.4s;top:", ";z-index:", ";background-color:white;border-radius:10px;"], ({
  aktif
}) => aktif ? "50%" : "200px", ({
  aktif
}) => aktif ? "50" : "-200");
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
      lineNumber: 31,
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
      lineNumber: 34,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Black"], {
      onClick: closefunction,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(External, {
      aktif: active,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textbox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Error"], {
          style: {
            fontSize: "40px"
          },
          color: "error"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: 'center',
            wordWrap: 'break-word',
            lineHeight: "25px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
          lineNumber: 47,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
border-radius:8px;
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
})(["animation:", " 1s linear infinite;transform:translateZ(0);border-top:2px solid lightgrey;border-right:2px solid lightgrey;border-bottom:2px solid lightgrey;border-left:2px solid black;background:transparent;width:24px;height:24px;border-radius:50%;"], rotate360);

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
    0: userdata,
    1: setuserdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = localStorage.getItem("TOKEN");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_2__["Contextdata"])({
      Token: token,
      setcontextdata: setuserdata,
      setlogged: setlogged,
      setspinner: setspinner
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(createusercontext.Provider, {
    value: {
      logged: logged,
      setlogged: setlogged,
      userdata: userdata,
      setuserdata: setuserdata,
      spinner: spinner,
      setspinner,
      setspinner
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__);

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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["EmailOutlined"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 26
        }, undefined);

      case "password":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Lock"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 26
        }, undefined);

      case "name":
      case "surname":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["AccountCircle"], {
          style: {
            color: "white"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
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
      lineNumber: 295,
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
        lineNumber: 311,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      closefunction: () => setactive(false),
      active: windowactive,
      type: "error",
      children: "E-posta veya \u015Fifre yanl\u0131\u015F!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WindowDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Registerloginholder, {
        onClick: register == "Login" ? () => setregister("Register") : () => setregister("Login"),
        children: register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Assignment"], {
            style: {
              color: "white",
              borderRadius: "50%",
              fontSize: "30px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 24
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Person"], {
          style: {
            color: "white",
            borderRadius: "50%",
            fontSize: "30px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 24
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          flex: 4
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
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
        lineNumber: 330,
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
                lineNumber: 339,
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
            lineNumber: 336,
            columnNumber: 28
          }, undefined)
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 26
        }, undefined)), register == "Login" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: "#EB3232"
          },
          children: "\u015Eifreni mi unuttun?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 47
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
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
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ChevronRight"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 46
            }, undefined),
            onClick: register == "Login" ? Submithandler : () => setregister("Login"),
            children: "Giri\u015F Yap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
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
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SupervisorAccount"], {
              style: {
                fontSize: "30px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 46
            }, undefined),
            onClick: Submithandler,
            children: "Kay\u0131t Ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 309,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImdldCIsImxlbmd0aCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiQ29tbWVudHJlcSIsInNldGFjdGl2ZXByb2R1Y2UiLCJzZXRjb21tZW50IiwiQ29udGV4dGRhdGEiLCJUb2tlbiIsImhlYWRlcnMiLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwicm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIlVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50IiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiY2F0b2dlcnkiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiRm9sbG93ZXJJZCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJFeHRlcm5hbCIsInN0eWxlZCIsImRpdiIsImFrdGlmIiwiVGV4dGJveCIsIldpbmRvdyIsImNoaWxkcmVuIiwiYWN0aXZlIiwidHlwZSIsImNsb3NlZnVuY3Rpb24iLCJpY29uIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIndvcmRXcmFwIiwibGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwiaGVpZ2h0IiwicHJvZmlsZSIsIkJsYWNrIiwicm90YXRlMzYwIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsImNyZWF0ZXVzZXJjb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJjb250ZXh0IiwibG9nZ2VkIiwidXNlU3RhdGUiLCJzcGlubmVyIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJDb2xvciIsIkltYWdlRGl2IiwiSW5wdXQiLCJpbnB1dCIsIldpbmRvd0RpdiIsIklucHV0SG9sZGVyIiwiY2hlY2tyZWdpc3RlciIsIkJ1dHRvbnMiLCJJY29uIiwiaSIsIkljb25zZWN1cmUiLCJMb2dvIiwiUmVnaXN0ZXJsb2dpbmhvbGRlciIsIkxvZ2luIiwic3R5bGVzZ2V0IiwidXNlQ29udGV4dCIsImN1cnJlbnR1cmwiLCJzZXRjdXJyZW50IiwiYmFja2VuZGVycm9yIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsInJlZ2lzdGVyIiwic2V0cmVnaXN0ZXIiLCJ3aW5kb3dhY3RpdmUiLCJ1c2VSb3V0ZXIiLCJpbnB1dHMiLCJzZXRpbnB1dHMiLCJlbWFpbCIsInBsYWNlaG9sZGVyIiwiZnVuYyIsInZhbHVlIiwiZm9jdXNlZCIsInBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJuYW1lIiwic3VybmFtZSIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsIlJlbmRlcmljb24iLCJpdGVtIiwiU3VibWl0aGFuZGxlciIsImN1cnJlbnRpbnB1dCIsIm91cmRhdGEiLCJrZXkiLCJ0cmltIiwiY2hla2NpZmZvY3VzIiwidHlwZW9mZm9jdXMiLCJpbnB1dHNnZXQiLCJjaGFuZ2VoYW5kbGVyIiwiZSIsInNlY3Rpb24iLCJ0YXJnZXQiLCJiYWNrZW5kZXJyb3JtZXNzYWdlIiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImZsZXgiLCJib3hTaXppbmciLCJmbGV4V3JhcCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzdHlsZSIsImVuZEFkb3JubWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS53cm9uZyA9PSBcIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nID09IFwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhxZ9hcsSxbMSxIGthecSxdFwiKVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJzb3J1biB2YXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXJ9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxfSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9YClcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBzZXRzdG9wcmVxKGZhbHNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29tbWVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgICAgc2V0Y29tbWVudChkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZH0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSkpeyBcclxuXHJcbiAgICAgIGNvbnN0IG15ZGF0YT17IFxyXG4gICAgICAgIFVzZXJJZDpkYXRhLnVzZXJkYXRhLmlkLFxyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvcmJ1cmFkYWR1cnV5b3JcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRkYXRhLGNhdG9nZXJ5LFVzZXJJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvcHJvZmlsZWNvbnRlbnQvJHtjYXRvZ2VyeX0vJHtVc2VySWR9YCk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKGRhdGEuZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhOZXdkYXRhKTtcclxuXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQge0Vycm9yfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuXHJcbmNvbnN0IEV4dGVybmFsPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxudHJhbnNpdGlvbjp0b3AgMC40cztcclxudG9wOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTAlXCIgOiBcIjIwMHB4XCJ9O1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTBcIiA6IFwiLTIwMFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjMwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBXaW5kb3c9KHtjaGlsZHJlbixhY3RpdmUsdHlwZSxjbG9zZWZ1bmN0aW9ufSk9PntcclxuICAgIHZhciBpY29uPSBudWxsO1xyXG4gICAgaWYodHlwZSA9PSBcImVycm9yXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcInJlZFwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PSBcImNvbmZpcm1cIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgPEV4dGVybmFsIGFrdGlmPXthY3RpdmV9PlxyXG4gICAgICAgICAgICA8VGV4dGJveD5cclxuICAgICAgICAgICAgICAgICAgPEVycm9yIHN0eWxlPXt7Zm9udFNpemU6XCI0MHB4XCJ9fSBjb2xvcj1cImVycm9yXCI+PC9FcnJvcj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsd29yZFdyYXA6J2JyZWFrLXdvcmQnLGxpbmVIZWlnaHQ6XCIyNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvVGV4dGJveD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Nsb3NlZnVuY3Rpb259IHZhcmlhbnQ9XCJjb250YWluZWRcIj5PSzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9FeHRlcm5hbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZSxrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiB9XHJcblxyXG4gYm9keSB7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxudHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuNHM7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiMTUwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3RhdGUzNjAgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke3JvdGF0ZTM2MH0gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGV4dGRhdGF9IGZyb20gXCIuLi9BcGkvQXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRldXNlcmNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlcmNvbnRleHQ9KHtjaGlsZHJlbn0pPT57XHJcblxyXG4gICAgY29uc3RbbG9nZ2VkLHNldGxvZ2dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdXNlcmRhdGEsc2V0dXNlcmRhdGFdPXVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPS0VOXCIpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIENvbnRleHRkYXRhKHtcclxuICAgICAgICAgICAgVG9rZW46dG9rZW4sXHJcbiAgICAgICAgICAgIHNldGNvbnRleHRkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgbG9nZ2VkOmxvZ2dlZCxcclxuICAgICAgICAgICBzZXRsb2dnZWQ6c2V0bG9nZ2VkLFxyXG4gICAgICAgICAgIHVzZXJkYXRhOnVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgIHNwaW5uZXI6c3Bpbm5lcixcclxuICAgICAgICAgICBzZXRzcGlubmVyLHNldHNwaW5uZXJcclxuICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcmNvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtsb2dpbnJlcSxyZXNpZ3RlcnJlcX0gZnJvbSBcIi4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS93aW5kb3dcIjtcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7d2l0aFN0eWxlcyxtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0FjY291bnRDaXJjbGUsRW1haWxPdXRsaW5lZCxMb2NrLEFycm93UmlnaHQsIEFycm93TGVmdCxTdXBlcnZpc29yQWNjb3VudCxTdXBlcnZpc2VkVXNlckNpcmNsZVNoYXJwLCBTdXBlcnZpc29yQWNjb3VudFJvdW5kZWQsIFN1cGVydmlzb3JBY2NvdW50U2hhcnAsIEFjY291bnRDaXJjbGVTaGFycCwgQWNjb3VudENpcmNsZVJvdW5kZWQsIFBlcnNvbiwgSG9tZSwgQXJyb3dSaWdodEFsdFJvdW5kZWQsIENoZXZyb25SaWdodCwgQXNzaWdubWVudH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IENzc1RleHRGaWVsZCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XHJcbiAgICAgICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyIGZpZWxkc2V0Jzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNGQkVBNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2xlZC5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxuY29sb3I6d2hpdGU7XHJcbndpZHRoOjg4JTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MzVweDtcclxuYm9yZGVyOm5vbmU7XHJcbm91dGxpbmU6bm9uZTtcclxudHJhbnNpdGlvbjowLjVzO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuYFxyXG5cclxuY29uc3QgV2luZG93RGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6NjAwcHg7XHJcbmhlaWdodDo1NTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG50cmFuc2l0aW9uOjAuNXM7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcblxyXG5gXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDokeyh7Y2hlY2tyZWdpc3Rlcn0pPT5jaGVja3JlZ2lzdGVyID8gXCI1MCVcIiA6IFwiMTAwJVwifTtcclxucGFkZGluZzo1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYFxyXG5jb25zdCBCdXR0b25zPXN0eWxlZC5idXR0b25gXHJcblxyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbndpZHRoOjE1MHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjowLjNzO1xyXG5ib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbmNvbnN0IEljb249c3R5bGVkLmlgXHJcbm1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZToxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5wYWRkaW5nOjdweDtcclxubGVmdDotMTVweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dvPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMHB4O1xyXG5oZWlnaHQ6MTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybChcIi93YXkuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBSZWdpc3RlcmxvZ2luaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE1cHg7XHJcbnJpZ2h0OjE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDBweDtcclxuaGVpZ2h0OjQwcHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxudHJhbnNpdGlvbjowLjA5cyBlYXNlLWluO1xyXG4mOmhvdmVyIHtcclxuY29sb3I6I2Y1MDA1Nztcclxud2lkdGg6NDVweDtcclxuaGVpZ2h0OjQ1cHg7XHJcbn1cclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsZXNnZXQ9Q3NzVGV4dEZpZWxkKCk7XHJcbiAgICBjb25zdHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsc2V0c3Bpbm5lcn09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdFtjdXJyZW50dXJsLHNldGN1cnJlbnRdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3RbYmFja2VuZGVycm9yLHNldGJhY2tlbmRlcnJvcl09dXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtyZWdpc3RlcixzZXRyZWdpc3Rlcl09dXNlU3RhdGUoXCJMb2dpblwiKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0W2lucHV0cyxzZXRpbnB1dHNdPXVzZVN0YXRlKHtcclxuXHJcbiAgICAgICAgTG9naW46e1xyXG4gICAgICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkUtcG9zdGFcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXIgZmEtZW52ZWxvcGVcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOntcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwixZ5pZnJlXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiTG9naW5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFzIGZhLXVubG9jay1hbHRcIixcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXI6e1xyXG4gICAgICAgICAgICBuYW1lOntcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCLEsHNpbVwiLFxyXG4gICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11c2VyXCIsXHJcbiAgICAgICAgICAgICAgIGZvY3VzZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJTb3kgxLBzaW1cIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6XCJSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgICAgIGljb246XCJmYXMgZmEtdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZDpmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFLXBvc3RhXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOlwiUmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOlwiZmFyIGZhLWVudmVsb3BlXCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcIsWeaWZyZVwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzpcIlJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjpcImZhcyBmYS11bmxvY2stYWx0XCIsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH19KTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIik7XHJcblxyXG4gICAgICAgY29uc3QgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KTtcclxuXHJcbiAgICAgICAvKmF4aW9zcy5nZXQoXCJodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT1tYWdpY1wiLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIjU2MzQ5MmFkNmY5MTcwMDAwMTAwMDAwMTRhZGI4MDllODk2MzQ2MDJhODk2ZDhlNjJhODUwNDAxXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnBob3Rvcyk7ICBcclxuICAgICAgICAgICAgc2V0Y3VycmVudChyZXMuZGF0YS5waG90b3NbM10uc3JjLm9yaWdpbmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiBcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgUmVuZGVyaWNvbj0oaXRlbSk9PntcclxuXHJcbiAgICAgICAgICBzd2l0Y2goaXRlbSl7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8RW1haWxPdXRsaW5lZCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvRW1haWxPdXRsaW5lZD5cclxuICAgICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMb2NrIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9Mb2NrPlxyXG4gICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgY2FzZSBcInN1cm5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9BY2NvdW50Q2lyY2xlPiAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0aGFuZGxlcj0oKT0+e1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGlucHV0PXsuLi5pbnB1dHN9O1xyXG4gICAgICAgIGNvbnN0IG91cmRhdGE9e307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudGlucHV0W3JlZ2lzdGVyXSkge1xyXG4gICAgICAgICAgICBvdXJkYXRhW2tleV09Y3VycmVudGlucHV0W3JlZ2lzdGVyXVtrZXldLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc3dpdGNoKHJlZ2lzdGVyKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxvZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBsb2dpbnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhOm91cmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgIHJvdXRlcjpyb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHVzZXJkYXRhOnNldHVzZXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGJhY2tlbmRlcnJvcjpzZXRiYWNrZW5kZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldGFjdGl2ZTpzZXRhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWdpc3RlclwiOiAgXHJcbiAgICAgICAgICAgICAgICByZXNpZ3RlcnJlcSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0YmFja2VuZGVycm9yOnNldGJhY2tlbmRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YTpvdXJkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBzZXRhY3RpdmU6c2V0YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIGNvbnN0IGNoZWtjaWZmb2N1cz0odHlwZW9mZm9jdXMsdHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3JlZ2lzdGVyXVt0eXBlXS5mb2N1c2VkPXR5cGVvZmZvY3VzID09IFwiZm9jdXNcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzZXRpbnB1dHMoaW5wdXRzZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShlLHR5cGUsc2VjdGlvbik9PntcclxuICAgICAgICBjb25zdCBpbnB1dHNnZXQ9ey4uLmlucHV0c307XHJcbiAgICAgICAgaW5wdXRzZ2V0W3R5cGVdW3NlY3Rpb25dLnZhbHVlPWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldGlucHV0cyhpbnB1dHNnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWNrZW5kZXJyb3JtZXNzYWdlPVwiXCI7XHJcbiAgICBpZihlcnJvcm1zZyl7XHJcbiAgICAgICAgcmV0dXJuIDxoMj5Tb21ldGhpbmcgV2VudCBXcm9uZy4uLjwvaDI+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGJhY2tlbmRlcnJvciA9PSBcIkVYxLBTVFwiKXtcclxuICAgICAgYmFja2VuZGVycm9ybWVzc2FnZT1cIkdpcmTEn2luaXogZW1haWwgemF0ZW4ga3VsbGFuxLFtZGEhXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV1BcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiDFn2lmcmUgeWFubMSxxZ8hXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYmFja2VuZGVycm9yID09IFwiV0VcIil7XHJcbiAgICAgIGJhY2tlbmRlcnJvcm1lc3NhZ2U9XCJHaXJkacSfaW5peiBlLXBvc3RhIHlhbmzEscWfIVwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8SW1hZ2VEaXYgdXJsZ2V0PXtjdXJyZW50dXJsfSBha3RpZj17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgPFdpbmRvdyBjbG9zZWZ1bmN0aW9uPXsoKT0+c2V0YWN0aXZlKGZhbHNlKX0gYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJlcnJvclwiPkUtcG9zdGEgdmV5YSDFn2lmcmUgeWFubMSxxZ8hPC9XaW5kb3c+XHJcbiAgICAgICAgICAgPFdpbmRvd0Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgIDxSZWdpc3RlcmxvZ2luaG9sZGVyIG9uQ2xpY2s9e3JlZ2lzdGVyID09IFwiTG9naW5cIiA/ICgpPT5zZXRyZWdpc3RlcihcIlJlZ2lzdGVyXCIpIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2lnbm1lbnQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L0Fzc2lnbm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsZm9udFNpemU6XCIzMHB4XCJ9fT48L1BlcnNvbj5cclxuICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvUmVnaXN0ZXJsb2dpbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjR9fT5cclxuICAgICAgICAgICAgICAgICAgPExvZ28+PC9Mb2dvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGZsZXg6NCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIn19Pkhha2lrYXRpbiB0ZW1zaWxjaXNpbmluIGVuIGF6IG9sZHXEn3UgemFtYW4sIG9udSBkaWxlIGdldGlybWVuaW4gdGVobGlrZWxpIG9sZHXEn3UgemFtYW4gZGXEn2lsLCBjYW4gc8Sxa8SxY8SxIG9sZHXEn3UgemFtYW5kxLFyLjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOnJlZ2lzdGVyID09IFwiUmVnaXN0ZXJcIiA/IFwiMTAwJVwiIDogXCI3MCVcIixib3hTaXppbmc6XCJib3JkZXItYm94XCIsZmxleDo3LGRpc3BsYXk6cmVnaXN0ZXIgPT0gXCJSZWdpc3RlclwiID8gXCJmbGV4XCIgOiBcImJsb2NrXCIsZmxleFdyYXA6XCJ3cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRzW3JlZ2lzdGVyXSkubWFwKGl0ZW09PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0SG9sZGVyICBjaGVja3JlZ2lzdGVyPXtyZWdpc3RlciA9PSBcIlJlZ2lzdGVyXCIgPyB0cnVlOmZhbHNlfSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjb2xvcjpcIndoaXRlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+e1JlbmRlcmljb24oaXRlbSl9PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNnZXQucm9vdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtpdGVtID09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5jaGFuZ2VoYW5kbGVyKGUscmVnaXN0ZXIsaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCk9PmNoZWtjaWZmb2N1cyhcImZvY3VzXCIsaXRlbSl9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PmNoZWtjaWZmb2N1cyhcInJlbW92ZVwiLGl0ZW0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZD17aW5wdXRzW3JlZ2lzdGVyXVtpdGVtXS52YWx1ZSAhPT0gXCJcIiB8fCBpbnB1dHNbcmVnaXN0ZXJdW2l0ZW1dLmZvY3VzZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2lucHV0c1tyZWdpc3Rlcl1baXRlbV0ucGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/IDxwIHN0eWxlPXt7Y29sb3I6XCIjRUIzMjMyXCJ9fT7FnmlmcmVuaSBtaSB1bnV0dHVuPzwvcD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjNcIix3aWR0aDpcIjEwMCVcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyID09IFwiTG9naW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PENoZXZyb25SaWdodCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+PC9DaGV2cm9uUmlnaHQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWdpc3RlciA9PSBcIkxvZ2luXCIgPyBTdWJtaXRoYW5kbGVyIDogKCk9PnNldHJlZ2lzdGVyKFwiTG9naW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXJpxZ8gWWFwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZTp7Y29sb3I6XCJyZWRcIn19fSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8U3VwZXJ2aXNvckFjY291bnQgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PjwvU3VwZXJ2aXNvckFjY291bnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTdWJtaXRoYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5xLF0IE9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvV2luZG93RGl2PlxyXG4gICAgICAgPC9JbWFnZURpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=