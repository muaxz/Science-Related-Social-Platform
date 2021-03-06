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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Homereq, Createrelationreq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://localhost:3001";

const Errorhandler = ({
  data,
  seterrmsg,
  setwindow
}) => {
  if (data.state == "success") {
    return true;
  } else {
    seterrmsg(true);
    setwindow(true);
    return false;
  }
};

const loginreq = async ({
  setlogged,
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

    if (data.wrong = "WP") {
      setbackenderror("WP");
      setactive(true);
    } else if (data.wrong = "WE") {
      setbackenderror("WE");
      setactive(true);
    } else {
      setlogged(true);
      setuserdata(data.Userdata);
      localStorage.setItem("_TOKEN", data.token); //http cookie only ile store edicez

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
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/register", {
      userdata: userdata
    });

    if (data.exist) {
      setbackenderror("EXİST");
      setactive(true);
    } else {//kayıt olmanız başarılı
    }
  } catch (err) {
    seterrmsg(true);
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
const Homereq = async ({
  contentdata,
  seterrmsg,
  currentdata,
  setwindow,
  setcontentdata,
  order
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`content/gethome/${order}`, {
      contentdata: contentdata
    });
    console.log(data.data);

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {
      const Current = [...currentdata];
      const Mydata = [...data.data]; //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      setcontentdata(Current.concat(Mydata));
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};
const Createrelationreq = async (UserId, PostId, attribute) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`content/createrelation`, {
      UserId: UserId,
      PostId: PostId,
      attribute: attribute
    });

    if (Errorhandler({
      data,
      seterrmsg,
      setwindow
    })) {//...
    } else {
      return;
    }
  } catch (error) {
    seterrmsg(true);
  }
};

/***/ }),

/***/ "./components/pages/Main/Lefttoolbar.js":
/*!**********************************************!*\
  !*** ./components/pages/Main/Lefttoolbar.js ***!
  \**********************************************/
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
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Main\\Lefttoolbar.js";



const ExteriorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ExteriorDiv",
  componentId: "sc-25lf6-0"
})(["position:fixed;top:0;left:0;height:100vh;width:220px;z-index:101;background-color:#E0E2E1;"]);
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__InnerDiv",
  componentId: "sc-25lf6-1"
})(["display:flex;padding:5px;flex-direction:column;align-items:center;height:100%;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__ImageDiv",
  componentId: "sc-25lf6-2"
})(["padding:10px;display:flex;width:100%;justify-content:flex-start;align-items:center;"]);
const NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__NavigationDiv",
  componentId: "sc-25lf6-3"
})(["background-coloyor:yellow;margin-top:px;width:96%;"]);
const Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Lefttoolbar__Li",
  componentId: "sc-25lf6-4"
})(["position:relative;border-radius:15px;text-align:center;background-color:white;padding:10px;list-style-type:none;margin:10px auto;color:black;font-size:13px;s width:96%;box-shadow:0 3px 3px rgba(0,0,0,0.2);&:hover{box-shadow:0 3px 3px rgba(0,0,0,0.2);cursor:pointer;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Lefttoolbar__Icon",
  componentId: "sc-25lf6-5"
})(["position:absolute;left:9px;top:50%;transform:translateY(-50%);color:", ""], ({
  color
}) => color);
const Closeopen = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Lefttoolbar__Closeopen",
  componentId: "sc-25lf6-6"
})(["width:100%;height:30px;padding:10px;text-align:right;"]);

const Lefttoolbar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExteriorDiv, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InnerDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
          profile: "black.jpg",
          width: "50px",
          height: "50px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 18
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            marginLeft: "20px",
            color: "black",
            fontSize: "15px"
          },
          children: "Emre \xD6zer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationDiv, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          style: {
            width: "100%"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, undefined), "Kaydedilen Postlar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              color: "#F92323",
              className: "fas fa-thumbs-up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), "Be\u011Fenilen Postlar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              color: "#337DF1",
              className: "fas fa-share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined), " Retweet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              className: "fas fa-users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, undefined), "Tart\u0131\u015Fmalar\u0131m"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              className: "fas fa-pencil-alt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, undefined), "\u0130\xE7erik \xDCret"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              className: "fas fa-book-open"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined), "Yaz\u0131lar\u0131m"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Li, {
            style: {
              position: "relative",
              top: "260px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              className: "fas fa-cog fa-lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 73
            }, undefined), "Profil Ayarlar\u0131"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Lefttoolbar);

/***/ }),

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contentcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{font-size:18px}30%{font-size:19px}50%{font-size:21px}70%{font-size:22px}100%{font-size:18px}"]);
const Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;margin-bottom:15px;width:100%;background-color:white;box-shadow:0 3px 3px rgba(0,0,0,0.2);"]);
const Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-1"
})(["padding-left:5px;"]);
const Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-2"
})(["flex:1;"]);
const Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-3"
})(["flex:2;display:flex;padding-left:15px;flex-direction:column;background-color:white;justify-content:space-between;"]);
const Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})([""]);
const Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-5"
})(["display:flex;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-6"
})(["width:100%;height:150px;object-fit:cover;"]);
const İconholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-7"
})(["margin-right:10px;display:flex;align-items:center;"]);
const Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-8"
})(["width:100%;height:40px;transition:all 0.3s;"]);
const Porfileimage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Porfileimage",
  componentId: "r68yrd-9"
})(["width:30px;height:30px;cursor:pointer;background-color:white;border-radius:50%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;"], ({
  profile
}) => profile);
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-10"
})(["font-size:16px;cursor:pointer;color:", ";animation-name:", ";animation-duration:0.08s;"], ({
  ismarked,
  color
}) => ismarked ? color : "grey", ({
  ismarked
}) => ismarked ? Likeanimaton : "");
const Infocard = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Infocard",
  componentId: "r68yrd-11"
})(["position:absolute;top:0px;right:0px;padding:15px;width:430px;color:white;height:150px;background-color:grey;z-index:200;transition:all 0.3s;"]);
const Labeloftheinfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Contentcard__Labeloftheinfo",
  componentId: "r68yrd-12"
})(["font-size:13px;width:200px;padding:5px;text-align:center;border-radius:10px;"]); //içerik sayısı,takipçi sayısı,

function Contentcard({
  profileimage,
  titleimage,
  title,
  subtitle,
  username,
  usersurname,
  date,
  comment,
  retweet,
  like,
  showwindow,
  createrelation
}) {
  const {
    0: elements,
    1: setelements
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    like: {
      number: like.length,
      ismarked: false
    },
    retweet: {
      number: retweet.length,
      ismarked: false
    },
    readlater: {
      ismarked: false,
      number: 0
    }
  });
  const {
    0: active,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_3__["createusercontext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    /*
    like.foreach((user)=>{
      if(userdata.UserId == user.id){//eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
         setlike(true);
      }
    })
    */
  }, []);

  const Countplus = elementtype => {
    const currentelements = _objectSpread({}, elements);

    console.log("burada");

    if (currentelements[elementtype].ismarked == false) {
      console.log("burada");
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].number = currentelements[elementtype].number + 1;
    } else {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;
    }

    setelements(currentelements);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    onMouseLeave: () => setactive(false),
    onMouseOver: () => setactive(true),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "5px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Porfileimage, {
          profile: profileimage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px",
            fontSize: "15px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "black"
            },
            children: username + " " + usersurname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 68
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "auto",
            fontSize: "13px",
            marginRight: "10px",
            color: "black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 101
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "How do I scroll to the top of the page using JavaScript? The scrollbar instantly..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.retweet.ismarked,
              color: "green",
              onClick: () => Countplus("retweet"),
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: () => showwindow(retweet),
              style: {
                marginLeft: "5px"
              },
              children: elements.retweet.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 168
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.like.ismarked,
              color: "#C72121",
              onClick: () => Countplus("like"),
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: () => showwindow(like),
              style: {
                marginLeft: "5px"
              },
              children: elements.like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 161
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 4,
              display: "flex",
              justifyContent: "flex-end",
              color: "grey"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.readlater.ismarked,
              color: "black",
              onClick: () => Countplus("readlater"),
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./components/shared/Navigation.js":
/*!*****************************************!*\
  !*** ./components/shared/Navigation.js ***!
  \*****************************************/
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

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Navigation.js";


const Navbarext = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navigation__Navbarext",
  componentId: "sc-1hbo2cn-0"
})(["position:fixed;display:flex;align-items:center;justify-content:flex-end;top:0;left:0;width:100%;height:65px;padding-left:250px;background-color:#E0E2E1;box-shadow:0 3px 3px rgba(0,0,0,0.2);z-index:100;"]);
function Navigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navbarext, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginRight: "20px",
        position: "relative"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        class: "fas fa-bell fa-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: {
          display: "block",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "red",
          color: "white",
          fontSize: "10px",
          width: "15px",
          textAlign: "center",
          left: "-5px",
          top: "0px"
        },
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/shared/Usercard.js":
/*!***************************************!*\
  !*** ./components/shared/Usercard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usercard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Usercard.js";



const Exterior = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Exterior",
  componentId: "sc-8n1zyz-0"
})(["width:100%;margin-bottom:10px;"]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Inner",
  componentId: "sc-8n1zyz-1"
})(["display:flex;align-items:center;"]);
const Imageurl = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Imageurl",
  componentId: "sc-8n1zyz-2"
})([""]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Name",
  componentId: "sc-8n1zyz-3"
})(["margin-left:10px;"]);
const Following = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Usercard__Following",
  componentId: "sc-8n1zyz-4"
})(["margin-left:auto;margin-right:10px;"]);
function Usercard({
  firstname,
  surname,
  imageurl
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Porfileimage"], {
        profile: imageurl,
        width: "40px",
        height: "40px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "black",
            fontWeight: "bold"
          },
          children: [firstname, " \xD6zer"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Following, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          color: "black",
          backcolor: "#CFD9BA",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            style: {
              marginRight: "8px"
            },
            className: "fas fa-user-plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 71
          }, this), "Takip Et"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/styledcomponents/button.js":
/*!***********************************************!*\
  !*** ./components/styledcomponents/button.js ***!
  \***********************************************/
/*! exports provided: Button, Global, Porfileimage, Black */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Porfileimage", function() { return Porfileimage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
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
     padding:0px;
     font-family: 'Shippori Mincho', serif;
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
}) => aktif ? "40" : "-300", ({
  aktif
}) => aktif ? "0.7" : "0");

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
/* harmony import */ var _components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pages/Main/Lefttoolbar */ "./components/pages/Main/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Navigation */ "./components/shared/Navigation.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\Layout\\mainlayout.js";



function Mainlayout({
  children
}) {
  //istekler burada
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_shared_Usercard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/Usercard */ "./components/shared/Usercard.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_pages_Main_Lefttoolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pages/Main/Lefttoolbar */ "./components/pages/Main/Lefttoolbar.js");
/* harmony import */ var _components_shared_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shared/Navigation */ "./components/shared/Navigation.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js";









const Rtlikewindow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Rtlikewindow",
  componentId: "sc-14bmh8h-0"
})(["position:absolute;width:500px;height:350px;border-radius:5px;background-color:#c83349;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);"]);
const Innerwindow = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Innerwindow",
  componentId: "sc-14bmh8h-1"
})(["padding:10px;background-color:white;height:100%;border-radius:5px;overflow:auto;"]);
const Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-2"
})([""]);
function Home() {
  const {
    userdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_7__["createusercontext"]);
  const {
    0: contentdata,
    1: setcontentdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: order,
    1: setorder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const {
    0: errormsg,
    1: seterror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activelike,
    1: setactivelike
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: list,
    1: setlist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: windowactive,
    1: setactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["Homereq"])({
      currentdata: contentdata,
      setcontentdata: setcontentdata,
      order: order,
      seterrmsg: seterror
    });
  }, [order]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    /*document.addEventListener("scroll",()=>{
        window.scrollTo({top:0,behavior:"auto"})
    })
    */
  });

  const createrelation = (postId, attribute) => {
    Createrelation({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: "#C7C7C7",
      paddingTop: "100px",
      paddingLeft: "300px"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: `${list.length > 0 ? "100vh" : "100%"}`,
        overflow: "hidden"
      },
      children: [list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__["Black"], {
          onClick: () => setlist([]),
          aktif: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rtlikewindow, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              height: "40px",
              width: "95%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "white",
                cursor: "pointer"
              },
              class: "fas fa-times-circle fa-lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerwindow, {
            children: [{
              name: "Sadık",
              image: "car.jpg"
            }, {
              name: "Aadık",
              image: "black.jpg"
            }, {
              name: "Musa",
              image: "yaprak.jpg"
            }, {
              name: "Selman",
              image: "led.jpg"
            }, {
              name: "Ahmet",
              image: "rocket.jpg"
            }, {
              name: "Duhan",
              image: "car.jpg"
            }, {
              name: "Sadık",
              image: "car.jpg"
            }, {
              name: "Sadık",
              image: "car.jpg"
            }].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Usercard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              firstname: item.name,
              imageurl: item.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maxWidth: "650px"
        },
        children: (console.log(contentdata), contentdata.length > 0 ? contentdata.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          createrelation: createrelation,
          showwindow: stateoflist => setlist(stateoflist),
          like: item.Like //bu bir obje array
          ,
          retweet: item.Retweet,
          comment: item.allcomments,
          //key numarası
          profileimage: "car.jpg",
          title: item.title,
          titleimage: "yaprak.jpg",
          username: "Duhan",
          usersurname: "Öztürk" //bir obje props
          ,
          subtitle: item.subtitle,
          date: "8 dakika önce"
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this)) : "Loading...")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(createusercontext.Provider, {
    value: {
      logged: logged,
      setlogged: setlogged,
      userdata: userdata,
      setuserdata: setuserdata
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Usercontext);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _containers_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/pages/Home */ "./containers/pages/Home.js");
/* harmony import */ var _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Layout/mainlayout */ "./containers/Layout/mainlayout.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\index.js";






const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 8
  }, undefined);
};

Home.layout = _containers_Layout_mainlayout__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVmdHRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Vc2VyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0L21haW5sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlcmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJFcnJvcmhhbmRsZXIiLCJkYXRhIiwic2V0ZXJybXNnIiwic2V0d2luZG93Iiwic3RhdGUiLCJsb2dpbnJlcSIsInNldGxvZ2dlZCIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJnZXQiLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiZXJyb3IiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlVzZXJJZCIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsIkV4dGVyaW9yRGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJEaXYiLCJJbWFnZURpdiIsIk5hdmlnYXRpb25EaXYiLCJMaSIsImxpIiwiSWNvbiIsImkiLCJjb2xvciIsIkNsb3Nlb3BlbiIsIkxlZnR0b29sYmFyIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsIkxpa2VhbmltYXRvbiIsImtleWZyYW1lcyIsIk91dHNpZGVkaXYiLCJJbWFnZWRpdiIsIkltYWdlaG9sZGVyIiwiQ29udGVudGhvbGRlciIsIkNvbnRlbnRkaXYiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwixLBjb25ob2xkZXIiLCJQcm9maWxlZGl2IiwiUG9yZmlsZWltYWdlIiwicHJvZmlsZSIsIkljb25zIiwiaXNtYXJrZWQiLCJJbmZvY2FyZCIsIkxhYmVsb2Z0aGVpbmZvIiwiQ29udGVudGNhcmQiLCJwcm9maWxlaW1hZ2UiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uIiwiZWxlbWVudHMiLCJzZXRlbGVtZW50cyIsInVzZVN0YXRlIiwibnVtYmVyIiwibGVuZ3RoIiwicmVhZGxhdGVyIiwiYWN0aXZlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlRWZmZWN0IiwiQ291bnRwbHVzIiwiZWxlbWVudHR5cGUiLCJjdXJyZW50ZWxlbWVudHMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiTmF2YmFyZXh0IiwiTmF2aWdhdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImxlZnQiLCJFeHRlcmlvciIsIklubmVyIiwiSW1hZ2V1cmwiLCJOYW1lIiwiRm9sbG93aW5nIiwiVXNlcmNhcmQiLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwiaW1hZ2V1cmwiLCJmb250V2VpZ2h0IiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2NvbG9yIiwiaG92ZXJiYWNrIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJCbGFjayIsImFrdGlmIiwiTWFpbmxheW91dCIsImNoaWxkcmVuIiwiUnRsaWtld2luZG93IiwiSW5uZXJ3aW5kb3ciLCJGbGV4ZGl2IiwiSG9tZSIsInNldG9yZGVyIiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsImFjdGl2ZWxpa2UiLCJzZXRhY3RpdmVsaWtlIiwibGlzdCIsInNldGxpc3QiLCJ3aW5kb3dhY3RpdmUiLCJwb3N0SWQiLCJDcmVhdGVyZWxhdGlvbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsIm92ZXJmbG93IiwibWFyZ2luIiwiY3Vyc29yIiwibmFtZSIsImltYWdlIiwibWFwIiwiaXRlbSIsIm1heFdpZHRoIiwiaW5kZXgiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJjcmVhdGVDb250ZXh0IiwiVXNlcmNvbnRleHQiLCJsb2dnZWQiLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBRUEsTUFBTUMsWUFBWSxHQUFDLENBQUM7QUFBQ0MsTUFBRDtBQUFNQyxXQUFOO0FBQWdCQztBQUFoQixDQUFELEtBQThCO0FBQzlDLE1BQUdGLElBQUksQ0FBQ0csS0FBTCxJQUFjLFNBQWpCLEVBQTJCO0FBQ3hCLFdBQU8sSUFBUDtBQUNGLEdBRkQsTUFHSTtBQUNGRixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FDLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxXQUFPLEtBQVA7QUFDRDtBQUNILENBVEQ7O0FBVU8sTUFBTUUsUUFBUSxHQUFDLE9BQU07QUFBQ0MsV0FBRDtBQUFXQyxhQUFYO0FBQXVCQyxVQUF2QjtBQUFnQ0MsUUFBaEM7QUFBdUNQLFdBQXZDO0FBQWlEUSxpQkFBakQ7QUFBaUVDO0FBQWpFLENBQU4sS0FBb0Y7QUFFdEcsTUFBRztBQUVELFVBQUs7QUFBQ1Y7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNlLElBQU4sQ0FBVyxRQUFYLEVBQW9CO0FBQUNKLGNBQVEsRUFBQ0E7QUFBVixLQUFwQixDQUFsQjtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWjs7QUFDQSxRQUFHQSxJQUFJLENBQUNjLEtBQUwsR0FBVyxJQUFkLEVBQW1CO0FBRWpCTCxxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBQyxlQUFTLENBQUMsSUFBRCxDQUFUO0FBRUQsS0FMRCxNQU1LLElBQUdWLElBQUksQ0FBQ2MsS0FBTCxHQUFXLElBQWQsRUFBbUI7QUFFdEJMLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFFRCxLQUxJLE1BTUQ7QUFDRkwsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBQyxpQkFBVyxDQUFDTixJQUFJLENBQUNlLFFBQU4sQ0FBWDtBQUNBQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEVBQThCakIsSUFBSSxDQUFDa0IsS0FBbkMsRUFIRSxDQUd3Qzs7QUFDMUNWLFlBQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUVGLEdBdkJELENBdUJDLE9BQU1DLEdBQU4sRUFBVTtBQUNQbkIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBRUosQ0E3Qk07QUFnQ0EsTUFBTW9CLFdBQVcsR0FBQyxPQUFNO0FBQUNaLGlCQUFEO0FBQWlCRixVQUFqQjtBQUEwQkcsV0FBMUI7QUFBb0NUO0FBQXBDLENBQU4sS0FBdUQ7QUFFOUUsTUFBRztBQUNELFVBQUs7QUFBQ0Q7QUFBRCxRQUFPLE1BQU1KLDRDQUFLLENBQUNlLElBQU4sQ0FBVyxXQUFYLEVBQXVCO0FBQUNKLGNBQVEsRUFBQ0E7QUFBVixLQUF2QixDQUFsQjs7QUFFQSxRQUFHUCxJQUFJLENBQUNzQixLQUFSLEVBQWM7QUFDVmIscUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDQUMsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEtBSEQsTUFJSSxDQUNBO0FBQ0g7QUFDRixHQVZELENBVUMsT0FBTVUsR0FBTixFQUFVO0FBQ1BuQixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFDRixDQWZNO0FBaUJBLE1BQU1zQixVQUFVLEdBQUMsT0FBTTtBQUFDQyxhQUFEO0FBQWF2QixXQUFiO0FBQXVCQyxXQUF2QjtBQUFpQ007QUFBakMsQ0FBTixLQUFpRDtBQUN2RSxNQUFHO0FBQ0QsVUFBSztBQUFDUjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ2UsSUFBTixDQUFXLGtCQUFYLEVBQThCO0FBQUNhLGlCQUFXLEVBQUNBO0FBQWIsS0FBOUIsQ0FBbEI7O0FBRUEsUUFBR3pCLFlBQVksQ0FBQztBQUFDQyxVQUFEO0FBQU1FLGVBQU47QUFBZ0JEO0FBQWhCLEtBQUQsQ0FBZixFQUE0QztBQUN4Q0MsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBTSxZQUFNLENBQUNXLElBQVAsQ0FBWSxrQkFBWixFQUZ3QyxDQUd4QztBQUNILEtBSkQsTUFLSTtBQUNEO0FBQ0Y7QUFDRixHQVhELENBV0MsT0FBTUMsR0FBTixFQUFVO0FBQ1BuQixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNGLENBaEJNO0FBa0JBLE1BQU1ZLE9BQU8sR0FBQyxPQUFNO0FBQUNELGFBQUQ7QUFBYXZCLFdBQWI7QUFBdUJ5QixhQUF2QjtBQUFtQ3hCLFdBQW5DO0FBQTZDeUIsZ0JBQTdDO0FBQTREQztBQUE1RCxDQUFOLEtBQTJFO0FBQzlGLE1BQUk7QUFFRixVQUFLO0FBQUM1QjtBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ2lDLEdBQU4sQ0FBVyxtQkFBa0JELEtBQU0sRUFBbkMsRUFBcUM7QUFBQ0osaUJBQVcsRUFBQ0E7QUFBYixLQUFyQyxDQUFsQjtBQUNBWixXQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBSSxDQUFDQSxJQUFqQjs7QUFFQSxRQUFHRCxZQUFZLENBQUM7QUFBQ0MsVUFBRDtBQUFNQyxlQUFOO0FBQWdCQztBQUFoQixLQUFELENBQWYsRUFBNEM7QUFFMUMsWUFBTTRCLE9BQU8sR0FBQyxDQUFDLEdBQUdKLFdBQUosQ0FBZDtBQUNBLFlBQU1LLE1BQU0sR0FBQyxDQUFDLEdBQUcvQixJQUFJLENBQUNBLElBQVQsQ0FBYixDQUgwQyxDQUkxQzs7QUFDQTJCLG9CQUFjLENBQUNHLE9BQU8sQ0FBQ0UsTUFBUixDQUFlRCxNQUFmLENBQUQsQ0FBZDtBQUNELEtBTkQsTUFPSTtBQUNGO0FBQ0Q7QUFFRixHQWhCRCxDQWdCRSxPQUFPRSxLQUFQLEVBQWM7QUFDWGhDLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSjtBQUNGLENBcEJNO0FBdUJBLE1BQU1pQyxpQkFBaUIsR0FBQyxPQUFNQyxNQUFOLEVBQWFDLE1BQWIsRUFBb0JDLFNBQXBCLEtBQWdDO0FBRTdELE1BQUk7QUFFRixVQUFLO0FBQUNyQztBQUFELFFBQU8sTUFBTUosNENBQUssQ0FBQ2UsSUFBTixDQUFZLHdCQUFaLEVBQW9DO0FBQ3BEd0IsWUFBTSxFQUFDQSxNQUQ2QztBQUVwREMsWUFBTSxFQUFDQSxNQUY2QztBQUdwREMsZUFBUyxFQUFDQTtBQUgwQyxLQUFwQyxDQUFsQjs7QUFNQSxRQUFHdEMsWUFBWSxDQUFDO0FBQUNDLFVBQUQ7QUFBTUMsZUFBTjtBQUFnQkM7QUFBaEIsS0FBRCxDQUFmLEVBQTRDLENBQ3hDO0FBQ0gsS0FGRCxNQUdJO0FBQ0Y7QUFDRDtBQUVGLEdBZkQsQ0FlRSxPQUFPK0IsS0FBUCxFQUFjO0FBQ1hoQyxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0o7QUFFRixDQXJCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdQO0FBQ0E7QUFDQTtBQUVBLE1BQU1xQyxXQUFXLEdBQUNDLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0dBQWpCO0FBVUEsTUFBTUMsUUFBUSxHQUFDRix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHNGQUFkO0FBUUEsTUFBTUUsUUFBUSxHQUFDSCx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJGQUFkO0FBUUEsTUFBTUcsYUFBYSxHQUFDSix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDBEQUFuQjtBQUtBLE1BQU1JLEVBQUUsR0FBQ0wsd0RBQU0sQ0FBQ00sRUFBUjtBQUFBO0FBQUE7QUFBQSxrUkFBUjtBQWtCQSxNQUFNQyxJQUFJLEdBQUNQLHdEQUFNLENBQUNRLENBQVI7QUFBQTtBQUFBO0FBQUEsaUZBS0YsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBV0EsS0FMVCxDQUFWO0FBT0EsTUFBTUMsU0FBUyxHQUFDVix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZEQUFmOztBQU9BLE1BQU1VLFdBQVcsR0FBQyxNQUFJO0FBQ2xCLHNCQUNJLHFFQUFDLFdBQUQ7QUFBQSwyQkFDSSxxRUFBQyxRQUFEO0FBQUEsOEJBSUcscUVBQUMsUUFBRDtBQUFBLGdDQUNFLHFFQUFDLHFFQUFEO0FBQWMsaUJBQU8sRUFBQyxXQUF0QjtBQUFtQyxlQUFLLEVBQUMsTUFBekM7QUFBZ0QsZ0JBQU0sRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTSxlQUFLLEVBQUU7QUFBQ0Msc0JBQVUsRUFBQyxNQUFaO0FBQW1CSCxpQkFBSyxFQUFDLE9BQXpCO0FBQWlDSSxvQkFBUSxFQUFDO0FBQTFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpILGVBUUcscUVBQUMsYUFBRDtBQUFBLCtCQUNLO0FBQUksZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUM7QUFBUCxXQUFYO0FBQUEsa0NBQ0kscUVBQUMsRUFBRDtBQUFBLG9DQUFJLHFFQUFDLElBQUQ7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUkscUVBQUMsRUFBRDtBQUFBLG9DQUFJLHFFQUFDLElBQUQ7QUFBTSxtQkFBSyxFQUFDLFNBQVo7QUFBc0IsdUJBQVMsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJLHFFQUFDLEVBQUQ7QUFBQSxvQ0FBSSxxRUFBQyxJQUFEO0FBQU0sbUJBQUssRUFBQyxTQUFaO0FBQXNCLHVCQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosZUFJSSxxRUFBQyxFQUFEO0FBQUEsb0NBQUkscUVBQUMsSUFBRDtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFLSSxxRUFBQyxFQUFEO0FBQUEsb0NBQUkscUVBQUMsSUFBRDtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosZUFNSSxxRUFBQyxFQUFEO0FBQUEsb0NBQUkscUVBQUMsSUFBRDtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkosZUFPSSxxRUFBQyxFQUFEO0FBQUssaUJBQUssRUFBRTtBQUFDQyxzQkFBUSxFQUFDLFVBQVY7QUFBcUJDLGlCQUFHLEVBQUM7QUFBekIsYUFBWjtBQUFBLG9DQUFnRCxxRUFBQyxJQUFEO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3QkgsQ0F6QkQ7O0FBNEJlTCwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBSUEsTUFBTU0sWUFBWSxHQUFDQyxtRUFBRCxxR0FBbEI7QUFPQSxNQUFNQyxVQUFVLEdBQUNuQix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdJQUFoQjtBQVNBLE1BQU1tQixRQUFRLEdBQUNwQix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlCQUFkO0FBS0EsTUFBTW9CLFdBQVcsR0FBQ3JCLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZUFBakI7QUFHQSxNQUFNcUIsYUFBYSxHQUFDdEIsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5SEFBbkI7QUFRQSxNQUFNc0IsVUFBVSxHQUFDdkIsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxRQUFoQjtBQUlBLE1BQU11QixPQUFPLEdBQUN4Qix3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFCQUFiO0FBS0EsTUFBTXdCLEdBQUcsR0FBQ3pCLHdEQUFNLENBQUMwQixHQUFSO0FBQUE7QUFBQTtBQUFBLGlEQUFUO0FBT0EsTUFBTUMsVUFBVSxHQUFDM0Isd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwREFBaEI7QUFNQSxNQUFNMkIsVUFBVSxHQUFDNUIsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtREFBaEI7QUFNQSxNQUFNNEIsWUFBWSxHQUFDN0Isd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnTUFNSyxDQUFDO0FBQUM2QjtBQUFELENBQUQsS0FBY0EsT0FObkIsQ0FBbEI7QUFZQSxNQUFNQyxLQUFLLEdBQUMvQix3REFBTSxDQUFDUSxDQUFSO0FBQUE7QUFBQTtBQUFBLCtGQUdILENBQUM7QUFBQ3dCLFVBQUQ7QUFBVXZCO0FBQVYsQ0FBRCxLQUFvQnVCLFFBQVEsR0FBR3ZCLEtBQUgsR0FBVyxNQUhwQyxFQUlNLENBQUM7QUFBQ3VCO0FBQUQsQ0FBRCxLQUFjQSxRQUFRLEdBQUdmLFlBQUgsR0FBa0IsRUFKOUMsQ0FBWDtBQVFBLE1BQU1nQixRQUFRLEdBQUNqQyx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9KQUFkO0FBY0EsTUFBTWlDLGNBQWMsR0FBQ2xDLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0ZBQXBCLEMsQ0FRQTs7QUFDZSxTQUFTa0MsV0FBVCxDQUFxQjtBQUFDQyxjQUFEO0FBQWNDLFlBQWQ7QUFBeUJDLE9BQXpCO0FBQStCQyxVQUEvQjtBQUF3Q0MsVUFBeEM7QUFBaURDLGFBQWpEO0FBQTZEQyxNQUE3RDtBQUFrRUMsU0FBbEU7QUFBMEVDLFNBQTFFO0FBQWtGQyxNQUFsRjtBQUF1RkMsWUFBdkY7QUFBa0dDO0FBQWxHLENBQXJCLEVBQXVJO0FBRWxKLFFBQUs7QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QkMsc0RBQVEsQ0FBQztBQUNqQ0wsUUFBSSxFQUFDO0FBQ0RNLFlBQU0sRUFBQ04sSUFBSSxDQUFDTyxNQURYO0FBRURwQixjQUFRLEVBQUM7QUFGUixLQUQ0QjtBQUtqQ1ksV0FBTyxFQUFDO0FBQ0pPLFlBQU0sRUFBQ1AsT0FBTyxDQUFDUSxNQURYO0FBRUpwQixjQUFRLEVBQUM7QUFGTCxLQUx5QjtBQVNqQ3FCLGFBQVMsRUFBQztBQUNOckIsY0FBUSxFQUFDLEtBREg7QUFFTm1CLFlBQU0sRUFBQztBQUZEO0FBVHVCLEdBQUQsQ0FBcEM7QUFjQSxRQUFLO0FBQUEsT0FBQ0csTUFBRDtBQUFBLE9BQVFuRjtBQUFSLE1BQW1CK0Usc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFDbEY7QUFBRCxNQUFhdUYsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBN0I7QUFFQUMseURBQVMsQ0FBQyxNQUFLO0FBQ1o7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxHQVJRLEVBUVAsRUFSTyxDQUFUOztBQVVBLFFBQU1DLFNBQVMsR0FBRUMsV0FBRCxJQUFlO0FBRTNCLFVBQU1DLGVBQWUscUJBQUtaLFFBQUwsQ0FBckI7O0FBQ0EzRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUVBLFFBQUdzRixlQUFlLENBQUNELFdBQUQsQ0FBZixDQUE2QjNCLFFBQTdCLElBQXVDLEtBQTFDLEVBQWdEO0FBQzVDM0QsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBc0YscUJBQWUsQ0FBQ0QsV0FBRCxDQUFmLENBQTZCM0IsUUFBN0IsR0FBc0MsSUFBdEM7QUFDQTRCLHFCQUFlLENBQUNELFdBQUQsQ0FBZixDQUE2QlIsTUFBN0IsR0FBcUNTLGVBQWUsQ0FBQ0QsV0FBRCxDQUFmLENBQTZCUixNQUE3QixHQUFvQyxDQUF6RTtBQUNILEtBSkQsTUFLSTtBQUVBUyxxQkFBZSxDQUFDRCxXQUFELENBQWYsQ0FBNkIzQixRQUE3QixHQUFzQyxLQUF0QztBQUNBNEIscUJBQWUsQ0FBQ0QsV0FBRCxDQUFmLENBQTZCUixNQUE3QixHQUFxQ1MsZUFBZSxDQUFDRCxXQUFELENBQWYsQ0FBNkJSLE1BQTdCLEdBQW9DLENBQXpFO0FBQ0g7O0FBRURGLGVBQVcsQ0FBQ1csZUFBRCxDQUFYO0FBRUgsR0FsQkQ7O0FBb0JBLHNCQUNHLHFFQUFDLFVBQUQ7QUFBWSxnQkFBWSxFQUFFLE1BQUl6RixTQUFTLENBQUMsS0FBRCxDQUF2QztBQUFnRCxlQUFXLEVBQUUsTUFBSUEsU0FBUyxDQUFDLElBQUQsQ0FBMUU7QUFBQSw0QkFDSSxxRUFBQyxVQUFEO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQzBGLGlCQUFPLEVBQUMsTUFBVDtBQUFnQkMsb0JBQVUsRUFBQyxRQUEzQjtBQUFvQ0MsZ0JBQU0sRUFBQyxNQUEzQztBQUFrRG5ELG9CQUFVLEVBQUM7QUFBN0QsU0FBWjtBQUFBLGdDQUNHLHFFQUFDLFlBQUQ7QUFBYyxpQkFBTyxFQUFFd0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUVHO0FBQUssZUFBSyxFQUFFO0FBQUN4QixzQkFBVSxFQUFDLE1BQVo7QUFBbUJDLG9CQUFRLEVBQUM7QUFBNUIsV0FBWjtBQUFBLGlDQUFpRDtBQUFHLGlCQUFLLEVBQUU7QUFBQ0osbUJBQUssRUFBQztBQUFQLGFBQVY7QUFBQSxzQkFBNEIrQixRQUFRLEdBQUMsR0FBVCxHQUFhQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkgsZUFHRztBQUFLLGVBQUssRUFBRTtBQUFDN0Isc0JBQVUsRUFBQyxNQUFaO0FBQW1CQyxvQkFBUSxFQUFDLE1BQTVCO0FBQW1DbUQsdUJBQVcsRUFBQyxNQUEvQztBQUFzRHZELGlCQUFLLEVBQUM7QUFBNUQsV0FBWjtBQUFBLGlDQUFrRjtBQUFBLHNCQUFPaUM7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBUUk7QUFBSyxXQUFLLEVBQUU7QUFBQ21CLGVBQU8sRUFBQztBQUFULE9BQVo7QUFBQSw4QkFDSyxxRUFBQyxXQUFEO0FBQUEsK0JBQ0kscUVBQUMsUUFBRDtBQUFBLGlDQUNRLHFFQUFDLEdBQUQ7QUFBSyxlQUFHLEVBQUV4QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURMLGVBTUsscUVBQUMsYUFBRDtBQUFBLGdDQUNJLHFFQUFDLFVBQUQ7QUFBQSxrQ0FDSTtBQUFJLGlCQUFLLEVBQUU7QUFBQzRCLDBCQUFZLEVBQUMsTUFBZDtBQUFxQnhELG1CQUFLLEVBQUM7QUFBM0IsYUFBWDtBQUFBLHNCQUFtRDZCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSSxxRUFBQyxPQUFEO0FBQUEsa0NBQ0kscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQzRCLGtCQUFJLEVBQUM7QUFBTixhQUFuQjtBQUFBLG9DQUNJLHFFQUFDLEtBQUQ7QUFBUSxzQkFBUSxFQUFFbEIsUUFBUSxDQUFDSixPQUFULENBQWlCWixRQUFuQztBQUE2QyxtQkFBSyxFQUFFLE9BQXBEO0FBQThELHFCQUFPLEVBQUUsTUFBSTBCLFNBQVMsQ0FBQyxTQUFELENBQXBGO0FBQWtHLHVCQUFTLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUMrSTtBQUFRLHFCQUFPLEVBQUUsTUFBSVosVUFBVSxDQUFDRixPQUFELENBQS9CO0FBQTBDLG1CQUFLLEVBQUU7QUFBQ2hDLDBCQUFVLEVBQUM7QUFBWixlQUFqRDtBQUFBLHdCQUFzRW9DLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQk87QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEL0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUkscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQ2Usa0JBQUksRUFBQztBQUFOLGFBQW5CO0FBQUEsb0NBQ0kscUVBQUMsS0FBRDtBQUFRLHNCQUFRLEVBQUVsQixRQUFRLENBQUNILElBQVQsQ0FBY2IsUUFBaEM7QUFBMEMsbUJBQUssRUFBRSxTQUFqRDtBQUE2RCxxQkFBTyxFQUFFLE1BQUkwQixTQUFTLENBQUMsTUFBRCxDQUFuRjtBQUE2Rix1QkFBUyxFQUFDO0FBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFDd0k7QUFBTyxxQkFBTyxFQUFFLE1BQUlaLFVBQVUsQ0FBQ0QsSUFBRCxDQUE5QjtBQUFzQyxtQkFBSyxFQUFFO0FBQUNqQywwQkFBVSxFQUFDO0FBQVosZUFBN0M7QUFBQSx3QkFBa0VvQyxRQUFRLENBQUNILElBQVQsQ0FBY007QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEeEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBT0kscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQ2Usa0JBQUksRUFBQztBQUFOLGFBQW5CO0FBQUEsb0NBQ0kscUVBQUMsS0FBRDtBQUFPLHVCQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUN3RDtBQUFNLG1CQUFLLEVBQUU7QUFBQ3RELDBCQUFVLEVBQUMsS0FBWjtBQUFrQkgscUJBQUssRUFBQztBQUF4QixlQUFiO0FBQUEsd0JBQTJDa0MsT0FBTyxDQUFDUztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFVSSxxRUFBQyxVQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDYyxrQkFBSSxFQUFDLENBQU47QUFBUUwscUJBQU8sRUFBQyxNQUFoQjtBQUF1Qk0sNEJBQWMsRUFBQyxVQUF0QztBQUFpRDFELG1CQUFLLEVBQUM7QUFBdkQsYUFBbkI7QUFBQSxtQ0FDSSxxRUFBQyxLQUFEO0FBQVEsc0JBQVEsRUFBRXVDLFFBQVEsQ0FBQ0ssU0FBVCxDQUFtQnJCLFFBQXJDO0FBQStDLG1CQUFLLEVBQUUsT0FBdEQ7QUFBK0QscUJBQU8sRUFBRSxNQUFJMEIsU0FBUyxDQUFDLFdBQUQsQ0FBckY7QUFBcUcsdUJBQVMsRUFBQztBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUF1Q0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JNRDtBQUNBO0FBRUEsTUFBTVUsU0FBUyxHQUFDcEUsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpTkFBZjtBQWVlLFNBQVNvRSxVQUFULEdBQXNCO0FBQ2pDLHNCQUNJLHFFQUFDLFNBQUQ7QUFBQSwyQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDTCxtQkFBVyxFQUFDLE1BQWI7QUFBb0JqRCxnQkFBUSxFQUFDO0FBQTdCLE9BQVo7QUFBQSw4QkFDSTtBQUFHLGFBQUssRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sYUFBSyxFQUFFO0FBQUM4QyxpQkFBTyxFQUFDLE9BQVQ7QUFBaUI5QyxrQkFBUSxFQUFDLFVBQTFCO0FBQXFDdUQsc0JBQVksRUFBQyxLQUFsRDtBQUF3REMseUJBQWUsRUFBQyxLQUF4RTtBQUE4RTlELGVBQUssRUFBQyxPQUFwRjtBQUE0Rkksa0JBQVEsRUFBQyxNQUFyRztBQUE0R0MsZUFBSyxFQUFDLE1BQWxIO0FBQXlIMEQsbUJBQVMsRUFBQyxRQUFuSTtBQUE0SUMsY0FBSSxFQUFDLE1BQWpKO0FBQXdKekQsYUFBRyxFQUFDO0FBQTVKLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFFQSxNQUFNMEQsUUFBUSxHQUFDMUUsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzQ0FBZDtBQUlBLE1BQU0wRSxLQUFLLEdBQUMzRSx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHdDQUFYO0FBSUEsTUFBTTJFLFFBQVEsR0FBQzVFLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBZDtBQUdBLE1BQU00RSxJQUFJLEdBQUM3RSx3REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlCQUFWO0FBSUEsTUFBTTZFLFNBQVMsR0FBQzlFLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMkNBQWY7QUFJZSxTQUFTOEUsUUFBVCxDQUFrQjtBQUFDQyxXQUFEO0FBQVdDLFNBQVg7QUFBbUJDO0FBQW5CLENBQWxCLEVBQWdEO0FBQzNELHNCQUNJLHFFQUFDLFFBQUQ7QUFBQSwyQkFDSSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0cscUVBQUMscUVBQUQ7QUFBYyxlQUFPLEVBQUVBLFFBQXZCO0FBQWlDLGFBQUssRUFBQyxNQUF2QztBQUE4QyxjQUFNLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUcscUVBQUMsSUFBRDtBQUFBLCtCQUFNO0FBQU0sZUFBSyxFQUFFO0FBQUN6RSxpQkFBSyxFQUFDLE9BQVA7QUFBZTBFLHNCQUFVLEVBQUM7QUFBMUIsV0FBYjtBQUFBLHFCQUFpREgsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZILGVBR0cscUVBQUMsU0FBRDtBQUFBLCtCQUFZLHFFQUFDLCtEQUFEO0FBQVMsZUFBSyxFQUFDLE9BQWY7QUFBdUIsbUJBQVMsRUFBQyxTQUFqQztBQUFBLGtDQUEyQztBQUFHLGlCQUFLLEVBQUU7QUFBQ2hCLHlCQUFXLEVBQUM7QUFBYixhQUFWO0FBQStCLHFCQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNILEM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTW9CLE1BQU0sR0FBQ3BGLHdEQUFNLENBQUNxRixNQUFSO0FBQUE7QUFBQTtBQUFBLEdBQWUsQ0FBQztBQUFDNUUsT0FBRDtBQUFPNkUsV0FBUDtBQUFpQnhFLE9BQWpCO0FBQXVCeUU7QUFBdkIsQ0FBRCxLQUNqQztBQUNELFFBQVF6RSxLQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRTCxLQUFNO0FBQ2QsbUJBQW1CNkUsU0FBVTtBQUM3QjtBQUNBO0FBQ0EsdUJBQXVCQyxTQUFVO0FBQ2pDO0FBQ0E7QUFDQSxDQWRtQixDQUFaO0FBaUJBLE1BQU1DLE1BQU0sR0FBQ0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUE87QUFTQSxNQUFNNUQsWUFBWSxHQUFDN0Isd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxHQUFZLENBQUM7QUFBQ2EsT0FBRDtBQUFPaUQsUUFBUDtBQUFjakM7QUFBZCxDQUFELEtBQTJCO0FBQ2hFLFFBQVFoQixLQUFNO0FBQ2QsU0FBU2lELE1BQU87QUFDaEI7QUFDQTtBQUNBLHVCQUF1QmpDLE9BQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FUeUIsQ0FBbEI7QUFhQSxNQUFNNEQsS0FBSyxHQUFDMUYsd0RBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxR0FNUixDQUFDO0FBQUMwRjtBQUFELENBQUQsS0FBV0EsS0FBSyxHQUFHLElBQUgsR0FBVSxNQU5sQixFQU9TLENBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQVdBLEtBQUssR0FBRyxLQUFILEdBQVcsR0FQcEMsQ0FBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNQO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFVBQVQsQ0FBb0I7QUFBQ0M7QUFBRCxDQUFwQixFQUFnQztBQUMzQztBQUNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0tBLFFBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1DLFlBQVksR0FBQzlGLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMEpBQWxCO0FBV0EsTUFBTThGLFdBQVcsR0FBQy9GLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsd0ZBQWpCO0FBT0EsTUFBTStGLE9BQU8sR0FBQ2hHLHdEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBYjtBQUdlLFNBQVNnRyxJQUFULEdBQWU7QUFDMUIsUUFBTTtBQUFDakk7QUFBRCxNQUFhdUYsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBN0I7QUFDQSxRQUFLO0FBQUEsT0FBQ3ZFLFdBQUQ7QUFBQSxPQUFhRztBQUFiLE1BQTZCOEQsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBSztBQUFBLE9BQUM3RCxLQUFEO0FBQUEsT0FBTzZHO0FBQVAsTUFBaUJoRCxzREFBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFLO0FBQUEsT0FBQ2lELFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQW9CbEQsc0RBQVEsQ0FBQyxLQUFELENBQWpDO0FBQ0EsUUFBSztBQUFBLE9BQUNtRCxVQUFEO0FBQUEsT0FBWUM7QUFBWixNQUEyQnBELHNEQUFRLEVBQXhDO0FBQ0EsUUFBSztBQUFBLE9BQUNxRCxJQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFldEQsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQ0EsUUFBSztBQUFBLE9BQUN1RCxZQUFEO0FBQUEsT0FBY3RJO0FBQWQsTUFBeUIrRSxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQU8seURBQVMsQ0FBQyxNQUFJO0FBQ1Z2RSw0REFBTyxDQUFDO0FBQ0pDLGlCQUFXLEVBQUNGLFdBRFI7QUFFSkcsb0JBQWMsRUFBQ0EsY0FGWDtBQUdKQyxXQUFLLEVBQUNBLEtBSEY7QUFJSjNCLGVBQVMsRUFBQzBJO0FBSk4sS0FBRCxDQUFQO0FBTUgsR0FQUSxFQU9QLENBQUMvRyxLQUFELENBUE8sQ0FBVDtBQVNBb0UseURBQVMsQ0FBQyxNQUFJO0FBQ1g7QUFDUDtBQUNBO0FBQ0E7QUFDSyxHQUxRLENBQVQ7O0FBT0EsUUFBTVYsY0FBYyxHQUFDLENBQUMyRCxNQUFELEVBQVE1RyxTQUFSLEtBQW9CO0FBRXJDNkcsa0JBQWMsQ0FBQztBQUNYL0csWUFBTSxFQUFDNUIsUUFBUSxDQUFDNEIsTUFETDtBQUVYQyxZQUFNLEVBQUM2RyxNQUZJO0FBR1g1RyxlQUFTLEVBQUNBO0FBSEMsS0FBRCxDQUFkO0FBS0gsR0FQRDs7QUFVQSxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFDeUUscUJBQWUsRUFBQyxTQUFqQjtBQUEyQnFDLGdCQUFVLEVBQUMsT0FBdEM7QUFBOENDLGlCQUFXLEVBQUM7QUFBMUQsS0FBWjtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUM5QyxjQUFNLEVBQUUsR0FBRXdDLElBQUksQ0FBQ25ELE1BQUwsR0FBYyxDQUFkLEdBQWtCLE9BQWxCLEdBQTRCLE1BQU8sRUFBOUM7QUFBZ0QwRCxnQkFBUSxFQUFDO0FBQXpELE9BQVo7QUFBQSxpQkFDTVAsSUFBSSxDQUFDbkQsTUFBTCxHQUFjLENBQWQsZ0JBQ0Y7QUFBQSxnQ0FDQSxxRUFBQyx5RUFBRDtBQUFPLGlCQUFPLEVBQUUsTUFBSW9ELE9BQU8sQ0FBQyxFQUFELENBQTNCO0FBQWtDLGVBQUssRUFBRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUEscUVBQUMsWUFBRDtBQUFBLGtDQUNJO0FBQUssaUJBQUssRUFBRTtBQUFDekMsb0JBQU0sRUFBQyxNQUFSO0FBQWVqRCxtQkFBSyxFQUFDLEtBQXJCO0FBQTJCaUcsb0JBQU0sRUFBQyxNQUFsQztBQUF5Q2xELHFCQUFPLEVBQUMsTUFBakQ7QUFBd0RDLHdCQUFVLEVBQUMsUUFBbkU7QUFBNEVLLDRCQUFjLEVBQUM7QUFBM0YsYUFBWjtBQUFBLG1DQUVJO0FBQUcsbUJBQUssRUFBRTtBQUFDMUQscUJBQUssRUFBQyxPQUFQO0FBQWV1RyxzQkFBTSxFQUFDO0FBQXRCLGVBQVY7QUFBNEMsbUJBQUssRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU1JLHFFQUFDLFdBQUQ7QUFBQSxzQkFDSyxDQUFDO0FBQUNDLGtCQUFJLEVBQUMsT0FBTjtBQUFjQyxtQkFBSyxFQUFDO0FBQXBCLGFBQUQsRUFBZ0M7QUFBQ0Qsa0JBQUksRUFBQyxPQUFOO0FBQWNDLG1CQUFLLEVBQUM7QUFBcEIsYUFBaEMsRUFBaUU7QUFBQ0Qsa0JBQUksRUFBQyxNQUFOO0FBQWFDLG1CQUFLLEVBQUM7QUFBbkIsYUFBakUsRUFBa0c7QUFBQ0Qsa0JBQUksRUFBQyxRQUFOO0FBQWVDLG1CQUFLLEVBQUM7QUFBckIsYUFBbEcsRUFBa0k7QUFBQ0Qsa0JBQUksRUFBQyxPQUFOO0FBQWNDLG1CQUFLLEVBQUM7QUFBcEIsYUFBbEksRUFBb0s7QUFBQ0Qsa0JBQUksRUFBQyxPQUFOO0FBQWNDLG1CQUFLLEVBQUM7QUFBcEIsYUFBcEssRUFBbU07QUFBQ0Qsa0JBQUksRUFBQyxPQUFOO0FBQWNDLG1CQUFLLEVBQUM7QUFBcEIsYUFBbk0sRUFBa087QUFBQ0Qsa0JBQUksRUFBQyxPQUFOO0FBQWNDLG1CQUFLLEVBQUM7QUFBcEIsYUFBbE8sRUFBa1FDLEdBQWxRLENBQXNRQyxJQUFJLGlCQUN2USxxRUFBQyxtRUFBRDtBQUNBLHVCQUFTLEVBQUVBLElBQUksQ0FBQ0gsSUFEaEI7QUFFQSxzQkFBUSxFQUFFRyxJQUFJLENBQUNGO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURFLEdBb0JBLElBckJOLGVBd0JJO0FBQUssYUFBSyxFQUFFO0FBQUNHLGtCQUFRLEVBQUM7QUFBVixTQUFaO0FBQUEsbUJBRUloSixPQUFPLENBQUNDLEdBQVIsQ0FBWVcsV0FBWixHQUNBQSxXQUFXLENBQUNtRSxNQUFaLEdBQXFCLENBQXJCLEdBQ0FuRSxXQUFXLENBQUNrSSxHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBTUUsS0FBTixrQkFDWixxRUFBQyxzRUFBRDtBQUNBLHdCQUFjLEVBQUV2RSxjQURoQjtBQUVBLG9CQUFVLEVBQUd3RSxXQUFELElBQWVmLE9BQU8sQ0FBQ2UsV0FBRCxDQUZsQztBQUdBLGNBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUhYLENBR2dCO0FBSGhCO0FBSUEsaUJBQU8sRUFBRUosSUFBSSxDQUFDSyxPQUpkO0FBS0EsaUJBQU8sRUFBRUwsSUFBSSxDQUFDTSxXQUxkO0FBTVc7QUFDWCxzQkFBWSxFQUFFLFNBUGQ7QUFRQSxlQUFLLEVBQUVOLElBQUksQ0FBQzlFLEtBUlo7QUFTQSxvQkFBVSxFQUFFLFlBVFo7QUFVQSxrQkFBUSxFQUFFLE9BVlY7QUFXQSxxQkFBVyxFQUFFLFFBWGIsQ0FXc0I7QUFYdEI7QUFZQSxrQkFBUSxFQUFFOEUsSUFBSSxDQUFDN0UsUUFaZjtBQWFBLGNBQUksRUFBRTtBQWJOLFdBTUsrRSxLQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FEQSxHQWtCRSxZQXJCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0RILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhEO0FBRU8sTUFBTTlELGlCQUFpQixnQkFBQ21FLDJEQUFhLEVBQXJDOztBQUVQLE1BQU1DLFdBQVcsR0FBQyxDQUFDO0FBQUMvQjtBQUFELENBQUQsS0FBYztBQUM1QixRQUFLO0FBQUEsT0FBQ2dDLE1BQUQ7QUFBQSxPQUFRL0o7QUFBUixNQUFtQm9GLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQUs7QUFBQSxPQUFDbEYsUUFBRDtBQUFBLE9BQVVEO0FBQVYsTUFBdUJtRixzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNDLFNBQUssRUFBRTtBQUNIMkUsWUFBTSxFQUFDQSxNQURKO0FBRUgvSixlQUFTLEVBQUNBLFNBRlA7QUFHSEUsY0FBUSxFQUFDQSxRQUhOO0FBSUhELGlCQUFXLEVBQUNBO0FBSlQsS0FEUjtBQUFBLGNBUUs4SDtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlILENBZkQ7O0FBaUJlK0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTTNCLElBQUksR0FBQyxNQUFJO0FBRVgsc0JBQ0cscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyw0RUFBNUI7QUFBeUcsaUJBQVMsRUFBQyxpR0FBbkg7QUFBcU4sbUJBQVcsRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBTSxZQUFJLEVBQUMseVFBQVg7QUFBcVIsV0FBRyxFQUFDO0FBQXpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0cscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSCxlQU1HLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUFVSCxDQVpEOztBQWNBQSxJQUFJLENBQUM2QixNQUFMLEdBQVlsQyxxRUFBWjtBQUVlSyxtRUFBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG4gICBpZihkYXRhLnN0YXRlID09IFwic3VjY2Vzc1wiKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKGRhdGEud3Jvbmc9XCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZz1cIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9UT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICAvL2thecSxdCBvbG1hbsSxeiBiYcWfYXLEsWzEsVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcn0pPT57XHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6Y29udGVudGRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLGN1cnJlbnRkYXRhLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcn0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfWAse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyhVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGVcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgIC8vLi4uXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmNvbnN0IEV4dGVyaW9yRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbndpZHRoOjIyMHB4O1xyXG56LWluZGV4OjEwMTtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMkUxO1xyXG4vL2JveC1zaGFkb3c6MnB4IDVweCA1cHggZ3JleTtcclxuYFxyXG5jb25zdCBJbm5lckRpdj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmc6NXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG53aWR0aDoxMDAlO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uRGl2PXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3lvcjp5ZWxsb3c7XHJcbm1hcmdpbi10b3A6cHg7XHJcbndpZHRoOjk2JTtcclxuYFxyXG5jb25zdCBMaT1zdHlsZWQubGlgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5tYXJnaW46MTBweCBhdXRvO1xyXG5jb2xvcjpibGFjaztcclxuZm9udC1zaXplOjEzcHg7c1xyXG53aWR0aDo5NiU7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbiY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSWNvbj1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6OXB4O1xyXG50b3A6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuY29sb3I6JHsoe2NvbG9yfSk9PmNvbG9yfVxyXG5gXHJcbmNvbnN0IENsb3Nlb3Blbj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzoxMHB4O1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBMZWZ0dG9vbGJhcj0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JEaXY+XHJcbiAgICAgICAgICAgIDxJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiAgPENsb3Nlb3Blbj5cclxuICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvQ2xvc2VvcGVuPiovfVxyXG4gICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPVwiYmxhY2suanBnXCIgIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCIyMHB4XCIsY29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMTVweFwifX0+RW1yZSDDlnplcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgPE5hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpPjxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvSWNvbj5LYXlkZWRpbGVuIFBvc3RsYXI8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGk+PEljb24gY29sb3I9XCIjRjkyMzIzXCIgY2xhc3NOYW1lPVwiZmFzIGZhLXRodW1icy11cFwiPjwvSWNvbj5CZcSfZW5pbGVuIFBvc3RsYXI8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGk+PEljb24gY29sb3I9XCIjMzM3REYxXCIgY2xhc3NOYW1lPVwiZmFzIGZhLXNoYXJlXCI+PC9JY29uPiBSZXR3ZWV0PC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpPjxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiPjwvSWNvbj5UYXJ0xLHFn21hbGFyxLFtPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpPjxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9JY29uPsSww6dlcmlrIMOccmV0PC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpPjxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rLW9wZW5cIj48L0ljb24+WWF6xLFsYXLEsW08L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGkgIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLHRvcDpcIjI2MHB4XCJ9fSA+PEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNvZyBmYS1sZ1wiPjwvSWNvbj5Qcm9maWwgQXlhcmxhcsSxPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8L05hdmlnYXRpb25EaXY+XHJcbiAgICAgICAgICAgIDwvSW5uZXJEaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvckRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnR0b29sYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxOHB4fVxyXG4zMCUge2ZvbnQtc2l6ZToxOXB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG43MCUge2ZvbnQtc2l6ZToyMnB4fVxyXG4xMDAlIHtmb250LXNpemU6MThweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG53aWR0aDoxMDAlO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuYFxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5cclxucGFkZGluZy1sZWZ0OjVweDtcclxuXHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxuXHJcblxyXG5gXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5cclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtwcm9maWxlfSk9PiBwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IEljb25zPXN0eWxlZC5pYFxyXG5mb250LXNpemU6MTZweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2lzbWFya2VkfSk9PmlzbWFya2VkID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjowLjA4cztcclxuYFxyXG5cclxuY29uc3QgSW5mb2NhcmQ9c3R5bGVkLmRpdmBcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MHB4O1xyXG5yaWdodDowcHg7XHJcbnBhZGRpbmc6MTVweDtcclxud2lkdGg6NDMwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuei1pbmRleDoyMDA7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsb2Z0aGVpbmZvPXN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZToxM3B4O1xyXG53aWR0aDoyMDBweDtcclxucGFkZGluZzo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudGNhcmQoe3Byb2ZpbGVpbWFnZSx0aXRsZWltYWdlLHRpdGxlLHN1YnRpdGxlLHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbn0pe1xyXG4gICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgbGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXR3ZWV0OntcclxuICAgICAgICAgICAgbnVtYmVyOnJldHdlZXQubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3RbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgIC8qXHJcbiAgICAgICBsaWtlLmZvcmVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgIHNldGxpa2UodHJ1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICAqL1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIik7XHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxPdXRzaWRlZGl2IG9uTW91c2VMZWF2ZT17KCk9PnNldGFjdGl2ZShmYWxzZSl9IG9uTW91c2VPdmVyPXsoKT0+c2V0YWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19Pnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiYmxhY2tcIn19PjxzcGFuPntkYXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3cgZG8gSSBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB1c2luZyBKYXZhU2NyaXB0PyBUaGUgc2Nyb2xsYmFyIGluc3RhbnRseS4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMucmV0d2VldC5pc21hcmtlZH0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXR3ZWV0XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPjxzcGFuICAgb25DbGljaz17KCk9PnNob3d3aW5kb3cocmV0d2VldCl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLnJldHdlZXQubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5saWtlLmlzbWFya2VkfSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwibGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz48c3BhbiAgb25DbGljaz17KCk9PnNob3d3aW5kb3cobGlrZSl9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwifX0+e2VsZW1lbnRzLmxpa2UubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5yZWFkbGF0ZXIuaXNtYXJrZWR9IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE5hdmJhcmV4dD1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjY1cHg7XHJcbnBhZGRpbmctbGVmdDoyNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojRTBFMkUxO1xyXG5ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xyXG56LWluZGV4OjEwMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhcmV4dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmVsbCBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLGJvcmRlclJhZGl1czpcIjUwJVwiLGJhY2tncm91bmRDb2xvcjpcInJlZFwiLGNvbG9yOlwid2hpdGVcIixmb250U2l6ZTpcIjEwcHhcIix3aWR0aDpcIjE1cHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixsZWZ0OlwiLTVweFwiLHRvcDpcIjBweFwifX0+Mjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9OYXZiYXJleHQ+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZSxCdXR0b259IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcblxyXG5jb25zdCBFeHRlcmlvcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmBcclxuY29uc3QgSW5uZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuY29uc3QgSW1hZ2V1cmw9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuY29uc3QgTmFtZT1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBGb2xsb3dpbmc9c3R5bGVkLmRpdmBcclxubWFyZ2luLWxlZnQ6YXV0bztcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcmNhcmQoe2ZpcnN0bmFtZSxzdXJuYW1lLGltYWdldXJsfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3I+XHJcbiAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtpbWFnZXVybH0gd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICA8TmFtZT48c3BhbiBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIixmb250V2VpZ2h0OlwiYm9sZFwifX0+e2ZpcnN0bmFtZX0gw5Z6ZXI8L3NwYW4+PC9OYW1lPlxyXG4gICAgICAgICAgICAgICA8Rm9sbG93aW5nID48QnV0dG9uICBjb2xvcj1cImJsYWNrXCIgYmFja2NvbG9yPVwiI0NGRDlCQVwiPjxpIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI4cHhcIn19IGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXBsdXNcIj48L2k+VGFraXAgRXQ8L0J1dHRvbj48L0ZvbGxvd2luZz5cclxuICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQse2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbigoe2NvbG9yLGJhY2tjb2xvcix3aWR0aCxob3ZlcmJhY2t9KT0+XHJcbmBcclxud2lkdGg6JHt3aWR0aH07XHJcbnBhZGRpbmc6MTBweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbmNvbG9yOiR7Y29sb3J9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7YmFja2NvbG9yfTtcclxudHJhbnNpdGlvbjowLjNzO1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtob3ZlcmJhY2t9O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gKntcclxuICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgbWFyZ2luOjBweDtcclxuICAgICBwYWRkaW5nOjBweDtcclxuICAgICBmb250LWZhbWlseTogJ1NoaXBwb3JpIE1pbmNobycsIHNlcmlmO1xyXG4gfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9yZmlsZWltYWdlPXN0eWxlZC5kaXYoKHt3aWR0aCxoZWlnaHQscHJvZmlsZX0pPT5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5oZWlnaHQ6JHtoZWlnaHR9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9maWxlfSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmApXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCbGFjaz1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6JHsoe2FrdGlmfSk9PmFrdGlmID8gXCI0MFwiIDogXCItMzAwXCJ9O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgJHsoe2FrdGlmfSk9PmFrdGlmID8gXCIwLjdcIiA6IFwiMFwifSk7XHJcbmBcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExlZnR0b29sYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL01haW4vTGVmdHRvb2xiYXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5sYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gICAgLy9pc3Rla2xlciBidXJhZGFcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24+PC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8TGVmdHRvb2xiYXI+PC9MZWZ0dG9vbGJhcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXEsQ3JlYXRlcmVsYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCBVc2VyY2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvVXNlcmNhcmRcIjtcclxuaW1wb3J0IHtCbGFja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgTGVmdHRvb2xiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9MZWZ0dG9vbGJhclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2aWdhdGlvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBSdGxpa2V3aW5kb3c9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjUwMHB4O1xyXG5oZWlnaHQ6MzUwcHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNjODMzNDk7XHJcbnotaW5kZXg6MTAwO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5gXHJcbmNvbnN0IElubmVyd2luZG93PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5vdmVyZmxvdzphdXRvO1xyXG5gXHJcbmNvbnN0IEZsZXhkaXY9c3R5bGVkLmRpdmBcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpXHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVsaWtlLHNldGFjdGl2ZWxpa2VdPXVzZVN0YXRlKClcclxuICAgIGNvbnN0W2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Rbd2luZG93YWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIEhvbWVyZXEoe1xyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIG9yZGVyOm9yZGVyLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW29yZGVyXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgpPT57XHJcbiAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6MCxiZWhhdmlvcjpcImF1dG9cIn0pXHJcbiAgICAgICB9KVxyXG4gICAgICAgKi9cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlcmVsYXRpb249KHBvc3RJZCxhdHRyaWJ1dGUpPT57XHJcblxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9uKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjQzdDN0M3XCIscGFkZGluZ1RvcDpcIjEwMHB4XCIscGFkZGluZ0xlZnQ6XCIzMDBweFwifX0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OmAke2xpc3QubGVuZ3RoID4gMCA/IFwiMTAwdmhcIiA6IFwiMTAwJVwifWAsb3ZlcmZsb3c6XCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgeyBsaXN0Lmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXsoKT0+c2V0bGlzdChbXSl9ICBha3RpZj17dHJ1ZX0+PC9CbGFjaz5cclxuICAgICAgICAgICAgICAgIDxSdGxpa2V3aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjQwcHhcIix3aWR0aDpcIjk1JVwiLG1hcmdpbjpcImF1dG9cIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtbGdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7W3tuYW1lOlwiU2FkxLFrXCIsaW1hZ2U6XCJjYXIuanBnXCJ9LHtuYW1lOlwiQWFkxLFrXCIsaW1hZ2U6XCJibGFjay5qcGdcIn0se25hbWU6XCJNdXNhXCIsaW1hZ2U6XCJ5YXByYWsuanBnXCJ9LHtuYW1lOlwiU2VsbWFuXCIsaW1hZ2U6XCJsZWQuanBnXCJ9LHtuYW1lOlwiQWhtZXRcIixpbWFnZTpcInJvY2tldC5qcGdcIn0se25hbWU6XCJEdWhhblwiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifSx7bmFtZTpcIlNhZMSxa1wiLGltYWdlOlwiY2FyLmpwZ1wifV0ubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyY2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2V1cmw9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Vc2VyY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Jbm5lcndpbmRvdz5cclxuICAgICAgICAgICAgICAgIDwvUnRsaWtld2luZG93PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI2NTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb249e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiY2FyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtcIsOWenTDvHJrXCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17XCI4IGRha2lrYSDDtm5jZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGV1c2VyY29udGV4dD1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyY29udGV4dD0oe2NoaWxkcmVufSk9PntcclxuICAgIGNvbnN0W2xvZ2dlZCxzZXRsb2dnZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3VzZXJkYXRhLHNldHVzZXJkYXRhXT11c2VTdGF0ZShudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjcmVhdGV1c2VyY29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICBsb2dnZWQ6bG9nZ2VkLFxyXG4gICAgICAgICAgIHNldGxvZ2dlZDpzZXRsb2dnZWQsXHJcbiAgICAgICAgICAgdXNlcmRhdGE6dXNlcmRhdGEsXHJcbiAgICAgICAgICAgc2V0dXNlcmRhdGE6c2V0dXNlcmRhdGEsXHJcbiAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY3JlYXRldXNlcmNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJjb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZVJlZHVjZXIsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29udGFpbmVycy9wYWdlcy9Ib21lXCI7XHJcbmltcG9ydCBNYWlubGF5b3V0IGZyb20gXCIuLi9jb250YWluZXJzL0xheW91dC9tYWlubGF5b3V0XCI7XHJcblxyXG5cclxuY29uc3QgSG9tZT0oKT0+e1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAmZmFtaWx5PURvbWluZSZkaXNwbGF5PXN3YXAmZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcCZmYW1pbHk9VGlub3M6aXRhbEAxJmRpc3BsYXk9c3dhcCZmYW1pbHk9TGlicmUrQmFza2VydmlsbGUmZGlzcGxheT1zd2FwJmZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA2MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgPE1haW4+PC9NYWluPlxyXG4gICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSG9tZS5sYXlvdXQ9TWFpbmxheW91dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9