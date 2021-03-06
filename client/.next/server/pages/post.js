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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post.js");
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

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\UI\\window.js";



const External = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__External",
  componentId: "o1iyjf-0"
})(["position:absolute;left:50%;transform:translate(-50%,-50%);width:300px;height:200px;transition:0.5s;top:", ";background-color:white;z-index:25;border-radius:10px;"], ({
  aktif
}) => aktif ? "50%" : "-200px");
const Textbox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "window__Textbox",
  componentId: "o1iyjf-1"
})(["width:80%;margin:50px auto;text-align:center;"]);

const Window = ({
  children,
  active,
  type
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
      lineNumber: 27,
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
      lineNumber: 30,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_3__["Black"], {
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(External, {
      aktif: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textbox, {
        children: [icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: 'center',
            wordWrap: 'break-word',
            lineHeight: "25px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Window);

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

/***/ "./containers/pages/Post.js":
/*!**********************************!*\
  !*** ./containers/pages/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _components_UI_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/window */ "./components/UI/window.js");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-html-parser */ "node-html-parser");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Post.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Ckeholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__Ckeholder",
  componentId: "sah6n7-0"
})(["width:82%;padding:10px;margin:auto;"]);
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__InputHolder",
  componentId: "sah6n7-1"
})(["position:relative;width:80%;margin:20px auto;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Post__Input",
  componentId: "sah6n7-2"
})(["width:100%;padding:8px;padding-left:40px;outline:none;border:none;"]);
const Postdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__Postdiv",
  componentId: "sah6n7-3"
})(["flex:3;background-color:#E4E8CD;"]);
const Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Post__Iconsecure",
  componentId: "sah6n7-4"
})(["position:absolute;background-color:#329297;padding:9px;left:-17px;color:white;top:74%;transform:translate(50%,-50%);"]);
const Iconquestion = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "Post__Iconquestion",
  componentId: "sah6n7-5"
})(["position:absolute;cursor:pointer;color:#630404;top:70%;transform:translate(50%,-50%);right:-15px;&:hover{color:#FE2C2E;}"]);
const Infowindow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__Infowindow",
  componentId: "sah6n7-6"
})(["display:", ";position:absolute;right:10px;background-color:black;width:300px;height:200px;padding:10px;color:white;z-index:200;"], ({
  active
}) => active ? "block" : "none");
const Labeltitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Post__Labeltitle",
  componentId: "sah6n7-7"
})(["margin-bottom:7px;"]);
const Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "Post__Labelimage",
  componentId: "sah6n7-8"
})(["display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;"]);
function MyEditor() {
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: editorLoaded,
    1: setEditorLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    CKE,
    ClassicEditor
  } = editorRef.current || {};
  const {
    0: errormsg,
    1: seterror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: windowactive,
    1: setwindowactive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: question,
    1: setquestion
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: false,
    subtitle: false
  });
  const {
    0: contentpart,
    1: setcontentpart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    content: "",
    title: "",
    subtitle: "",
    catagories: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      CKEditor
    } = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");

    editorRef.current = {
      CKE: CKEditor,
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
    };
    setEditorLoaded(true);
  }, []);

  const changehandler = (event, editör, value) => {
    const muteted = _objectSpread({}, contentpart);

    muteted[value] = value == "content" ? editör.getData() : event.target.value;
    setcontentpart(muteted);
    console.log(muteted);
  };

  const Submitpost = () => {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_3__["producereq"])({
      contentdata: contentpart,
      seterrmsg: seterror,
      setwindow: setwindowactive
    });
  }; //ana başlık kısa tutulacak.
  //alt başlık daha uzun tutlabilir.


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_5__["default"], {
      active: windowactive,
      type: "confirm",
      children: "\u0130\xE7eri\u011Finiz Edit\xF6re G\xF6nderildi."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        flex: 1,
        backgroundColor: "#8a8888",
        height: "400px",
        position: "sticky",
        top: "0px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            marginBottom: "10px",
            color: "white"
          },
          children: "Yaz\u0131 T\xFCr\xFC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          value: contentpart.catagories,
          onChange: event => changehandler(event, "", "catagories"),
          style: {
            width: "100%",
            padding: "8px",
            border: "none",
            outline: "none"
          },
          id: "cars",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            hidden: true,
            value: "Yaz\u0131 T\xFCr\xFC",
            children: "Yaz\u0131 T\xFCr\xFC..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Felsefe",
            children: "Felsefe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Uzay",
            children: "Uzay"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Metafizik",
            children: "Metafizik"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Biyoloji",
            children: "Biyoloji"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            marginBottom: "10px",
            color: "white"
          },
          children: "Tahmini Yay\u0131nlanma S\xFCresi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          style: {
            padding: "6px"
          },
          value: "2013-01-08",
          type: "date",
          onChange: event => changehandler(event, "", "title"),
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: Submitpost,
          width: "100px",
          backcolor: "#DE3131",
          color: "white",
          children: "G\xF6nder"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 24
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Postdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
            children: "Ba\u015Fl\u0131k"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-pen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Infowindow, {
            active: question["title"],
            children: "Ba\u015Fl\u0131k k\u0131sm\u0131 i\xE7in kelimelerin ilk harfleri b\xFCy\xFCk olmak zorunda !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconquestion, {
            onMouseLeave: () => setquestion(prev => {
              return _objectSpread(_objectSpread({}, prev), {}, {
                title: false
              });
            }),
            onMouseOver: () => setquestion(prev => {
              return _objectSpread(_objectSpread({}, prev), {}, {
                title: true
              });
            }),
            className: "fas fa-question-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            id: "title",
            onChange: event => changehandler(event, "", "title"),
            placeholder: "Ba\u015Fl\u0131k..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
            children: "Alt Ba\u015Fl\u0131k"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-pen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Infowindow, {
            active: question["subtitle"],
            children: "Alt ba\u015Fl\u0131k k\u0131sm\u0131n\u0131 normal ba\u015Fl\u0131k k\u0131sm\u0131ndan daha uzun tutabilirsiniz ve harf b\xFCy\xFCkl\xFC\u011F\xFCne dikkat etmenize gerek yoktur."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconquestion, {
            onMouseLeave: () => setquestion(prev => {
              return _objectSpread(_objectSpread({}, prev), {}, {
                subtitle: false
              });
            }),
            onMouseOver: () => setquestion(prev => {
              return _objectSpread(_objectSpread({}, prev), {}, {
                subtitle: true
              });
            }),
            className: "fas fa-question-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            onChange: event => changehandler(event, "", "subtitle"),
            placeholder: "Alt Ba\u015Fl\u0131k..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
            htmlFor: "file",
            children: "Ba\u015Fl\u0131k Foto\u011Fraf\u0131 Se\xE7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            style: {
              display: "none"
            },
            id: "file",
            type: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            style: {
              top: "50%",
              left: "-18px",
              height: "100%",
              lineHeight: "20px"
            },
            className: "fas fa-images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Ckeholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
          children: "\u0130\xE7erik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 14
        }, this), editorLoaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CKE, {
          config: {
            placeholder: "Placeholder text..." //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']

          },
          editor: ClassicEditor,
          onChange: (event, editör) => changehandler(event, editör, "content"),
          data: contentpart["content"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 23
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Editor loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_pages_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/pages/Post */ "./containers/pages/Post.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\pages\\post.js";



function MyEditor() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

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

/***/ "node-html-parser":
/*!***********************************!*\
  !*** external "node-html-parser" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-html-parser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvcGFnZXMvUG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzdGF0ZSIsImxvZ2lucmVxIiwic2V0bG9nZ2VkIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJlcnIiLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsImdldCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJlcnJvciIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiVXNlcklkIiwiUG9zdElkIiwiYXR0cmlidXRlIiwiRXh0ZXJuYWwiLCJzdHlsZWQiLCJkaXYiLCJha3RpZiIsIlRleHRib3giLCJXaW5kb3ciLCJjaGlsZHJlbiIsImFjdGl2ZSIsInR5cGUiLCJpY29uIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJ3b3JkV3JhcCIsImxpbmVIZWlnaHQiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUG9yZmlsZWltYWdlIiwiaGVpZ2h0IiwicHJvZmlsZSIsIkJsYWNrIiwiQ2tlaG9sZGVyIiwiSW5wdXRIb2xkZXIiLCJJbnB1dCIsImlucHV0IiwiUG9zdGRpdiIsIkljb25zZWN1cmUiLCJpIiwiSWNvbnF1ZXN0aW9uIiwiSW5mb3dpbmRvdyIsIkxhYmVsdGl0bGUiLCJwIiwiTGFiZWxpbWFnZSIsImxhYmVsIiwiTXlFZGl0b3IiLCJlZGl0b3JSZWYiLCJ1c2VSZWYiLCJlZGl0b3JMb2FkZWQiLCJzZXRFZGl0b3JMb2FkZWQiLCJ1c2VTdGF0ZSIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJjdXJyZW50IiwiZXJyb3Jtc2ciLCJzZXRlcnJvciIsIndpbmRvd2FjdGl2ZSIsInNldHdpbmRvd2FjdGl2ZSIsInF1ZXN0aW9uIiwic2V0cXVlc3Rpb24iLCJ0aXRsZSIsInN1YnRpdGxlIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsImNvbnRlbnQiLCJjYXRhZ29yaWVzIiwidXNlRWZmZWN0IiwiQ0tFZGl0b3IiLCJyZXF1aXJlIiwiY2hhbmdlaGFuZGxlciIsImV2ZW50IiwiZWRpdMO2ciIsInZhbHVlIiwibXV0ZXRlZCIsImdldERhdGEiLCJ0YXJnZXQiLCJTdWJtaXRwb3N0IiwiZGlzcGxheSIsImZsZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInBhZGRpbmciLCJib3JkZXIiLCJvdXRsaW5lIiwicHJldiIsImxlZnQiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXVCLHVCQUF2Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUMsQ0FBQztBQUFDQyxNQUFEO0FBQU1DLFdBQU47QUFBZ0JDO0FBQWhCLENBQUQsS0FBOEI7QUFDOUMsTUFBR0YsSUFB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dUIsWUFBSSxFQUFDLDRFQUE1QjtBQUF5RyxpQkFBUyxFQUFDLGlHQUFuSDtBQUFxTixtQkFBVyxFQUFDO0FBQWpPO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLHNMQUFYO0FBQWtNLFdBQUcsRUFBQztBQUF0TTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFNQSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVSCxDOzs7Ozs7Ozs7OztBQ2hCRCw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuICAgaWYoZGF0YS5zdGF0ZSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZihkYXRhLndyb25nPVwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3Jvbmc9XCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIFxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgLy9rYXnEsXQgb2xtYW7EsXogYmHFn2FyxLFsxLFcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXJ9KT0+e1xyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxjdXJyZW50ZGF0YSxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXJ9KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn1gLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoVXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUpPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgICAvLy4uLlxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QmxhY2t9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5cclxuY29uc3QgRXh0ZXJuYWw9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbnRyYW5zaXRpb246MC41cztcclxudG9wOiR7KHtha3RpZn0pPT5ha3RpZiA/IFwiNTAlXCIgOiBcIi0yMDBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDoyNTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBUZXh0Ym94PXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjUwcHggYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFdpbmRvdz0oe2NoaWxkcmVuLGFjdGl2ZSx0eXBlfSk9PntcclxuICAgIHZhciBpY29uPSBudWxsO1xyXG4gICAgaWYodHlwZSA9PSBcImVycm9yXCIpe1xyXG4gICAgICAgaWNvbj08aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlIGZhLTJ4XCIgc3R5bGU9e3tjb2xvcjpcInJlZFwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIn19PjwvaT5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PSBcImNvbmZpcm1cIil7XHJcbiAgICAgICBpY29uPTxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGUgZmEtMnhcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIixtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT48L2k+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPEJsYWNrIGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgPEV4dGVybmFsIGFrdGlmPXthY3RpdmV9PlxyXG4gICAgICAgICAgICA8VGV4dGJveD5cclxuICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLHdvcmRXcmFwOidicmVhay13b3JkJyxsaW5lSGVpZ2h0OlwiMjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L1RleHRib3g+XHJcbiAgICAgICAgIDwvRXh0ZXJuYWw+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcclxuIiwiaW1wb3J0IHN0eWxlZCx7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uKCh7Y29sb3IsYmFja2NvbG9yLHdpZHRoLGhvdmVyYmFja30pPT5cclxuYFxyXG53aWR0aDoke3dpZHRofTtcclxucGFkZGluZzoxMHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxuY29sb3I6JHtjb2xvcn07XHJcbmJhY2tncm91bmQtY29sb3I6JHtiYWNrY29sb3J9O1xyXG50cmFuc2l0aW9uOjAuM3M7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke2hvdmVyYmFja307XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWw9Y3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqe1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICBtYXJnaW46MHB4O1xyXG4gICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnU2hpcHBvcmkgTWluY2hvJywgc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3JmaWxlaW1hZ2U9c3R5bGVkLmRpdigoe3dpZHRoLGhlaWdodCxwcm9maWxlfSk9PmBcclxud2lkdGg6JHt3aWR0aH07XHJcbmhlaWdodDoke2hlaWdodH07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgke3Byb2ZpbGV9KTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYClcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJsYWNrPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmZpeGVkO1xyXG50b3A6MDtcclxubGVmdDowO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDokeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjQwXCIgOiBcIi0zMDBcIn07XHJcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAkeyh7YWt0aWZ9KT0+YWt0aWYgPyBcIjAuN1wiIDogXCIwXCJ9KTtcclxuYFxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtwcm9kdWNlcmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge0J1dHRvbixHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvd2luZG93XCI7XHJcbmltcG9ydCBIVE1McGFyc2VyLHtwYXJzZX0gZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIlxyXG5pbXBvcnQgUmVhY3RwYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IENrZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MiU7XHJcbnBhZGRpbmc6MTBweDtcclxubWFyZ2luOmF1dG87XHJcbmBcclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjoyMHB4IGF1dG87XHJcbmBcclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjhweDtcclxucGFkZGluZy1sZWZ0OjQwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcblxyXG5gXHJcblxyXG5cclxuY29uc3QgUG9zdGRpdj1zdHlsZWQuZGl2YFxyXG5mbGV4OjM7XHJcbmJhY2tncm91bmQtY29sb3I6I0U0RThDRDtcclxuYFxyXG5cclxuY29uc3QgSWNvbnNlY3VyZT1zdHlsZWQuaWBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJhY2tncm91bmQtY29sb3I6IzMyOTI5NztcclxucGFkZGluZzo5cHg7XHJcbmxlZnQ6LTE3cHg7XHJcbmNvbG9yOndoaXRlO1xyXG50b3A6NzQlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuYFxyXG5cclxuY29uc3QgSWNvbnF1ZXN0aW9uPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOiM2MzA0MDQ7XHJcbnRvcDo3MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5yaWdodDotMTVweDtcclxuJjpob3ZlcntcclxuICBjb2xvcjojRkUyQzJFIDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbmZvd2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5yaWdodDoxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG56LWluZGV4OjIwMDtcclxuYFxyXG5jb25zdCBMYWJlbHRpdGxlPXN0eWxlZC5wYFxyXG5tYXJnaW4tYm90dG9tOjdweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUVkaXRvciAoKSB7XHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgWyBlZGl0b3JMb2FkZWQsIHNldEVkaXRvckxvYWRlZCBdID0gdXNlU3RhdGUoIGZhbHNlIClcclxuICAgIGNvbnN0IHsgQ0tFLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fVxyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3dpbmRvd2FjdGl2ZSxzZXR3aW5kb3dhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3F1ZXN0aW9uLHNldHF1ZXN0aW9uXT11c2VTdGF0ZSh7XHJcbiAgICAgIHRpdGxlOmZhbHNlLFxyXG4gICAgICBzdWJ0aXRsZTpmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2NvbnRlbnRwYXJ0LHNldGNvbnRlbnRwYXJ0XT11c2VTdGF0ZSh7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIixcclxuICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgc3VidGl0bGU6XCJcIixcclxuICAgICAgY2F0YWdvcmllczpcIlwiLFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7Q0tFZGl0b3J9PXJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JyApXHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIENLRTogQ0tFZGl0b3IsXHJcbiAgICAgICAgICAgIENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnIClcclxuICAgICAgICB9XHJcbiAgICAgIHNldEVkaXRvckxvYWRlZCh0cnVlKVxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShldmVudCxlZGl0w7ZyLHZhbHVlKT0+e1xyXG4gICAgICAgY29uc3QgbXV0ZXRlZD17Li4uY29udGVudHBhcnR9O1xyXG4gICAgICAgbXV0ZXRlZFt2YWx1ZV09dmFsdWUgPT0gXCJjb250ZW50XCIgPyBlZGl0w7ZyLmdldERhdGEoKSA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIHNldGNvbnRlbnRwYXJ0KG11dGV0ZWQpO1xyXG4gICAgICAgY29uc29sZS5sb2cobXV0ZXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0cG9zdD0oKT0+e1xyXG4gICAgICAgcHJvZHVjZXJlcSh7XHJcbiAgICAgICAgIGNvbnRlbnRkYXRhOmNvbnRlbnRwYXJ0LFxyXG4gICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsIFxyXG4gICAgICAgICBzZXR3aW5kb3c6c2V0d2luZG93YWN0aXZlLCBcclxuICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL2FuYSBiYcWfbMSxayBrxLFzYSB0dXR1bGFjYWsuXHJcbiAgICAvL2FsdCBiYcWfbMSxayBkYWhhIHV6dW4gdHV0bGFiaWxpci5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgIDxXaW5kb3cgYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJjb25maXJtXCI+xLDDp2VyacSfaW5peiBFZGl0w7ZyZSBHw7ZuZGVyaWxkaS48L1dpbmRvdz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxLGJhY2tncm91bmRDb2xvcjpcIiM4YTg4ODhcIixoZWlnaHQ6XCI0MDBweFwiLHBvc2l0aW9uOlwic3RpY2t5XCIsdG9wOlwiMHB4XCJ9fT4gXHJcbiAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIn19PllhesSxIFTDvHLDvDwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvbnRlbnRwYXJ0LmNhdGFnb3JpZXN9IG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJjYXRhZ29yaWVzXCIpfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCI4cHhcIixib3JkZXI6XCJub25lXCIsb3V0bGluZTpcIm5vbmVcIn19IGlkPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbiB2YWx1ZT1cIllhesSxIFTDvHLDvFwiPllhesSxIFTDvHLDvC4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVsc2VmZVwiPkZlbHNlZmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlV6YXlcIj5VemF5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZXRhZml6aWtcIj5NZXRhZml6aWs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJpeW9sb2ppXCI+Qml5b2xvamk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCJ9fT5UYWhtaW5pIFlhecSxbmxhbm1hIFPDvHJlc2k8L3A+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3twYWRkaW5nOlwiNnB4XCJ9fSAgdmFsdWU9XCIyMDEzLTAxLTA4XCIgdHlwZT1cImRhdGVcIiAgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInRpdGxlXCIpfSBwbGFjZWhvbGRlcj1cIkJhxZ9sxLFrLi4uXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgIDxJbnB1dEhvbGRlcj48QnV0dG9uIG9uQ2xpY2s9e1N1Ym1pdHBvc3R9IHdpZHRoPVwiMTAwcHhcIiBiYWNrY29sb3I9XCIjREUzMTMxXCIgY29sb3I9XCJ3aGl0ZVwiPkfDtm5kZXI8L0J1dHRvbj48L0lucHV0SG9sZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3N0ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsdGl0bGU+QmHFn2zEsWs8L0xhYmVsdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5cIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDxJbmZvd2luZG93IGFjdGl2ZT17cXVlc3Rpb25bXCJ0aXRsZVwiXX0+QmHFn2zEsWsga8Sxc23EsSBpw6dpbiBrZWxpbWVsZXJpbiBpbGsgaGFyZmxlcmkgYsO8ecO8ayBvbG1hayB6b3J1bmRhICE8L0luZm93aW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucXVlc3Rpb24gb25Nb3VzZUxlYXZlPXsoKT0+c2V0cXVlc3Rpb24ocHJldj0+e3JldHVybnsuLi5wcmV2LHRpdGxlOmZhbHNlfX0pfSBvbk1vdXNlT3Zlcj17KCk9PnNldHF1ZXN0aW9uKHByZXY9PntyZXR1cm57Li4ucHJldix0aXRsZTp0cnVlfX0pfSBjbGFzc05hbWU9XCJmYXMgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9JY29ucXVlc3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInRpdGxlXCIgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInRpdGxlXCIpfSBwbGFjZWhvbGRlcj1cIkJhxZ9sxLFrLi4uXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsdGl0bGU+QWx0IEJhxZ9sxLFrPC9MYWJlbHRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuXCI+PC9JY29uc2VjdXJlPlxyXG4gICAgICAgICAgICAgICAgICA8SW5mb3dpbmRvdyAgYWN0aXZlPXtxdWVzdGlvbltcInN1YnRpdGxlXCJdfT5BbHQgYmHFn2zEsWsga8Sxc23EsW7EsSBub3JtYWwgYmHFn2zEsWsga8Sxc23EsW5kYW4gZGFoYSB1enVuIHR1dGFiaWxpcnNpbml6IHZlIGhhcmYgYsO8ecO8a2zDvMSfw7xuZSBkaWtrYXQgZXRtZW5pemUgZ2VyZWsgeW9rdHVyLjwvSW5mb3dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgPEljb25xdWVzdGlvbiBvbk1vdXNlTGVhdmU9eygpPT5zZXRxdWVzdGlvbihwcmV2PT57cmV0dXJuey4uLnByZXYsc3VidGl0bGU6ZmFsc2V9fSl9IG9uTW91c2VPdmVyPXsoKT0+c2V0cXVlc3Rpb24ocHJldj0+e3JldHVybnsuLi5wcmV2LHN1YnRpdGxlOnRydWV9fSl9IGNsYXNzTmFtZT1cImZhcyBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L0ljb25xdWVzdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJzdWJ0aXRsZVwiKX0gcGxhY2Vob2xkZXI9XCJBbHQgQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj5CYcWfbMSxayBGb3RvxJ9yYWbEsSBTZcOnPC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0gaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBzdHlsZT17e3RvcDpcIjUwJVwiLGxlZnQ6XCItMThweFwiLGhlaWdodDpcIjEwMCVcIixsaW5lSGVpZ2h0OlwiMjBweFwifX0gY2xhc3NOYW1lPVwiZmFzIGZhLWltYWdlc1wiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENrZWhvbGRlciA+XHJcbiAgICAgICAgICAgICA8TGFiZWx0aXRsZT7EsMOnZXJpazwvTGFiZWx0aXRsZT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRvckxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDS0UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQbGFjZWhvbGRlciB0ZXh0Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdG9vbGJhcjpbJ2hlYWRpbmcnLCAnfCcsICdib2xkJywgJ2l0YWxpYycsICdibG9ja1F1b3RlJywgJ2xpbmsnLCAnbnVtYmVyZWRMaXN0J11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3I9eyBDbGFzc2ljRWRpdG9yIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCxlZGl0w7ZyKT0+Y2hhbmdlaGFuZGxlcihldmVudCxlZGl0w7ZyLFwiY29udGVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICA8L1Bvc3RkaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ0tFIGZyb20gXCIuLi9jb250YWluZXJzL3BhZ2VzL1Bvc3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RWRpdG9yKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItSEs1ZmdMQkwreHU2ZG0vSWkzejR4aGxTVXlaZ1RUOXR1Yy9oU3J0dzZ1ekpPdmdScjJhOWp5eHhUMWVseStCK3hGQW1KS1ZTVGJwTS9DdUw3cXhPOHc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCZmYW1pbHk9RG9taW5lJmRpc3BsYXk9c3dhcCZmYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwJmZhbWlseT1UaW5vczppdGFsQDEmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q0tFLz5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9