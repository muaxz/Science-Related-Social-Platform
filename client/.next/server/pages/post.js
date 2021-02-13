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
/*! exports provided: loginreq, resigterreq, producereq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://localhost:3001";
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
  router
}) => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post/produce", {
      contentdata: contentdata
    });

    if (data.state == "success") {
      setbackenderror("EXİST");
      setactive(true);
    } else {
      seterrmsg(true);
    }
  } catch (err) {
    seterrmsg(true);
  }
};

/***/ }),

/***/ "./components/styledcomponents/button.js":
/*!***********************************************!*\
  !*** ./components/styledcomponents/button.js ***!
  \***********************************************/
/*! exports provided: Button, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
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
     font-family: 'Slabo 27px', serif;
 }
`;

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
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-html-parser */ "node-html-parser");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Post.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Ckeholder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__Ckeholder",
  componentId: "sah6n7-0"
})(["width:100%;padding:10px;"]);
const InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__InputHolder",
  componentId: "sah6n7-1"
})(["width:100%;border-bottom:1px solid white;padding:20px;margin-bottom:20px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "Post__Input",
  componentId: "sah6n7-2"
})(["width:100%;padding:8px;outline:none;border:none;"]);
const Postdiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Post__Postdiv",
  componentId: "sah6n7-3"
})(["max-width:1200px;background-color:lightgrey;margin:20px auto;"]);
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
      contentdata: content,
      seterrmsg: seterror
    });
  }; //ana başlık kısa tutulacak.
  //alt başlık daha uzun tutlabilir.


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Postdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          style: {
            marginBottom: "10px"
          },
          children: "Yaz\u0131 T\xFCr\xFC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          style: {
            width: "100%",
            padding: "8x",
            border: "none",
            outline: "none"
          },
          id: "cars",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "volvo",
            children: "Volvo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "saab",
            children: "Saab"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "opel",
            children: "Opel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "audi",
            children: "Audi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          style: {
            marginBottom: "10px"
          },
          children: "Ba\u015Fl\u0131k"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          onChange: event => changehandler(event, "", "title"),
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          style: {
            marginBottom: "10px"
          },
          children: "Tahmini Yay\u0131nlanma S\xFCresi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          style: {
            padding: "6px"
          },
          value: "2013-01-08",
          type: "date",
          sonChange: event => changehandler(event, "", "title"),
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        style: {
          marginBottom: "10px"
        },
        children: "Alt Ba\u015Fl\u0131k"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        onChange: event => changehandler(event, "", "subtitle"),
        style: {
          padding: "10px",
          outline: "none",
          display: "block",
          border: "none"
        },
        rows: "8",
        cols: "60",
        placeholder: "Alt Ba\u015Fl\u0131k..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Ckeholder, {
      children: [editorLoaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CKE, {
        config: {
          placeholder: "Placeholder text..." //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']

        },
        editor: ClassicEditor,
        onChange: (event, editör) => changehandler(event, editör, "content"),
        data: contentpart["content"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Editor loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          marginTop: "10px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: Submitpost,
          backcolor: "red",
          color: "white",
          hoverback: "#A41D31",
          children: "Submit Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }, this), react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(contentpart["content"])]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
        href: "https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_pages_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvcGFnZXMvUG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImxvZ2lucmVxIiwic2V0bG9nZ2VkIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGVycm1zZyIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInN0YXRlIiwiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiY29sb3IiLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhvdmVyYmFjayIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ2tlaG9sZGVyIiwiZGl2IiwiSW5wdXRIb2xkZXIiLCJJbnB1dCIsImlucHV0IiwiUG9zdGRpdiIsIk15RWRpdG9yIiwiZWRpdG9yUmVmIiwidXNlUmVmIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwidXNlU3RhdGUiLCJDS0UiLCJDbGFzc2ljRWRpdG9yIiwiY3VycmVudCIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJjb250ZW50cGFydCIsInNldGNvbnRlbnRwYXJ0IiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwidXNlRWZmZWN0IiwiQ0tFZGl0b3IiLCJyZXF1aXJlIiwiY2hhbmdlaGFuZGxlciIsImV2ZW50IiwiZWRpdMO2ciIsInZhbHVlIiwibXV0ZXRlZCIsImdldERhdGEiLCJ0YXJnZXQiLCJTdWJtaXRwb3N0IiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJvdXRsaW5lIiwicGxhY2Vob2xkZXIiLCJtYXJnaW5Ub3AiLCJSZWFjdHBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUEsWUFEQyxlQUtELHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNILEM7Ozs7Ozs7Ozs7O0FDZkQsOEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdC5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZihkYXRhLndyb25nPVwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3Jvbmc9XCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIFxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgLy9rYXnEsXQgb2xtYW7EsXogYmHFn2FyxLFsxLFcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHJvdXRlcn0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcG9zdC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5zdGF0ZSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b24oKHtjb2xvcixiYWNrY29sb3Isd2lkdGgsaG92ZXJiYWNrfSk9PlxyXG5gXHJcbndpZHRoOiR7d2lkdGh9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1yYWRpdXM6OHB4O1xyXG5jb2xvcjoke2NvbG9yfTtcclxuYmFja2dyb3VuZC1jb2xvcjoke2JhY2tjb2xvcn07XHJcbnRyYW5zaXRpb246MC4zcztcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7aG92ZXJiYWNrfTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmApXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbD1jcmVhdGVHbG9iYWxTdHlsZWBcclxuICp7XHJcbiAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgIG1hcmdpbjowcHg7XHJcbiAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdTbGFibyAyN3B4Jywgc2VyaWY7XHJcbiB9XHJcbmBcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3Byb2R1Y2VyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7QnV0dG9uLEdsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IEhUTUxwYXJzZXIse3BhcnNlfSBmcm9tIFwibm9kZS1odG1sLXBhcnNlclwiXHJcbmltcG9ydCBSZWFjdHBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ2tlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6MjBweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzo4cHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0ZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xyXG5tYXJnaW46MjBweCBhdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUVkaXRvciAoKSB7XHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgWyBlZGl0b3JMb2FkZWQsIHNldEVkaXRvckxvYWRlZCBdID0gdXNlU3RhdGUoIGZhbHNlIClcclxuICAgIGNvbnN0IHsgQ0tFLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fVxyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb250ZW50cGFydCxzZXRjb250ZW50cGFydF09dXNlU3RhdGUoe1xyXG4gICAgICBjb250ZW50OlwiXCIsXHJcbiAgICAgIHRpdGxlOlwiXCIsXHJcbiAgICAgIHN1YnRpdGxlOlwiXCIsXHJcbiAgICAgIGNhdGFnb3JpZXM6XCJcIixcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qge0NLRWRpdG9yfT1yZXF1aXJlKCAnQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdCcgKVxyXG4gICAgICAgIGVkaXRvclJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBDS0U6IENLRWRpdG9yLFxyXG4gICAgICAgICAgICBDbGFzc2ljRWRpdG9yOiByZXF1aXJlKCAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJyApXHJcbiAgICAgICAgfVxyXG4gICAgICBzZXRFZGl0b3JMb2FkZWQodHJ1ZSlcclxuICAgIH0sIFtdKVxyXG4gIFxyXG4gICAgY29uc3QgY2hhbmdlaGFuZGxlcj0oZXZlbnQsZWRpdMO2cix2YWx1ZSk9PntcclxuICAgICAgIGNvbnN0IG11dGV0ZWQ9ey4uLmNvbnRlbnRwYXJ0fTtcclxuICAgICAgIG11dGV0ZWRbdmFsdWVdPXZhbHVlID09IFwiY29udGVudFwiID8gZWRpdMO2ci5nZXREYXRhKCkgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICBzZXRjb250ZW50cGFydChtdXRldGVkKTtcclxuICAgICAgIGNvbnNvbGUubG9nKG11dGV0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdHBvc3Q9KCk9PntcclxuICAgICAgIHByb2R1Y2VyZXEoe1xyXG4gICAgICAgICBjb250ZW50ZGF0YTpjb250ZW50LFxyXG4gICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsICBcclxuICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL2FuYSBiYcWfbMSxayBrxLFzYSB0dXR1bGFjYWsuXHJcbiAgICAvL2FsdCBiYcWfbMSxayBkYWhhIHV6dW4gdHV0bGFiaWxpci5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3N0ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19PllhesSxIFTDvHLDvDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjh4XCIsYm9yZGVyOlwibm9uZVwiLG91dGxpbmU6XCJub25lXCJ9fSBpZD1cImNhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcGVsXCI+T3BlbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5CYcWfbMSxazwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInRpdGxlXCIpfSBwbGFjZWhvbGRlcj1cIkJhxZ9sxLFrLi4uXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5UYWhtaW5pIFlhecSxbmxhbm1hIFPDvHJlc2k8L2g0PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7cGFkZGluZzpcIjZweFwifX0gIHZhbHVlPVwiMjAxMy0wMS0wOFwiIHR5cGU9XCJkYXRlXCIgIHNvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5BbHQgQmHFn2zEsWs8L2g0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSAgIG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJzdWJ0aXRsZVwiKX0gc3R5bGU9e3twYWRkaW5nOlwiMTBweFwiLG91dGxpbmU6XCJub25lXCIsZGlzcGxheTpcImJsb2NrXCIsYm9yZGVyOlwibm9uZVwifX0gcm93cz1cIjhcIiBjb2xzPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkFsdCBCYcWfbMSxay4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPENrZWhvbGRlciA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVkaXRvckxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Q0tFIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQbGFjZWhvbGRlciB0ZXh0Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rvb2xiYXI6WydoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnLCAnYmxvY2tRdW90ZScsICdsaW5rJywgJ251bWJlcmVkTGlzdCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdG9yPXsgQ2xhc3NpY0VkaXRvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LGVkaXTDtnIpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LGVkaXTDtnIsXCJjb250ZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17U3VibWl0cG9zdH0gYmFja2NvbG9yPVwicmVkXCIgY29sb3I9XCJ3aGl0ZVwiIGhvdmVyYmFjaz1cIiNBNDFEMzFcIj5TdWJtaXQgUG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICB7UmVhY3RwYXJzZXIoY29udGVudHBhcnRbXCJjb250ZW50XCJdKX1cclxuICAgICAgPC9Qb3N0ZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDS0UgZnJvbSBcIi4uL2NvbnRhaW5lcnMvcGFnZXMvUG9zdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlFZGl0b3IoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjIvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLUhLNWZnTEJMK3h1NmRtL0lpM3o0eGhsU1V5WmdUVDl0dWMvaFNydHc2dXpKT3ZnUnIyYTlqeXh4VDFlbHkrQit4RkFtSktWU1RicE0vQ3VMN3F4Tzh3PT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPENLRS8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1odG1sLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==