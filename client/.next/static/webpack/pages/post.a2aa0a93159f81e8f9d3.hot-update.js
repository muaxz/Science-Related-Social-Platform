webpackHotUpdate_N_E("pages/post",{

/***/ "./containers/pages/Post.js":
/*!**********************************!*\
  !*** ./containers/pages/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyEditor; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _components_UI_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UI/window */ "./components/UI/window.js");





var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Post.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Ckeholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__Ckeholder",
  componentId: "sah6n7-0"
})(["width:82%;padding:10px;margin:auto;"]);
_c = Ckeholder;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__InputHolder",
  componentId: "sah6n7-1"
})(["position:relative;width:90%;margin:20px auto;"]);
_c2 = InputHolder;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({
  displayName: "Post__Input",
  componentId: "sah6n7-2"
})(["width:100%;padding:8px;padding-left:40px;outline:none;border:none;"]);
_c3 = Input;
var Postdiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__Postdiv",
  componentId: "sah6n7-3"
})(["flex:3;background-color:#E4E8CD;"]);
_c4 = Postdiv;
var Iconsecure = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].i.withConfig({
  displayName: "Post__Iconsecure",
  componentId: "sah6n7-4"
})(["position:absolute;background-color:#329297;padding:9px;left:-17px;color:white;top:74%;transform:translate(50%,-50%);"]);
_c5 = Iconsecure;
var Iconquestion = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].i.withConfig({
  displayName: "Post__Iconquestion",
  componentId: "sah6n7-5"
})(["position:absolute;cursor:pointer;color:#630404;top:70%;transform:translate(50%,-50%);right:-15px;&:hover{color:#FE2C2E;}"]);
_c6 = Iconquestion;
var Infowindow = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__Infowindow",
  componentId: "sah6n7-6"
})(["display:", ";position:absolute;right:10px;background-color:black;width:300px;height:200px;padding:10px;color:white;z-index:200;"], function (_ref) {
  var active = _ref.active;
  return active ? "block" : "none";
});
_c7 = Infowindow;
var Labeltitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "Post__Labeltitle",
  componentId: "sah6n7-7"
})(["margin-bottom:7px;"]);
_c8 = Labeltitle;
var Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].label.withConfig({
  displayName: "Post__Labelimage",
  componentId: "sah6n7-8"
})(["display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;"]);
_c9 = Labelimage;
var Exterior = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__Exterior",
  componentId: "sah6n7-9"
})(["display:flex;max-width:1000px;width:100%;margin:50px auto;@media (max-width:900px){display:block;width:80%;}"]);
_c10 = Exterior;
var Leftside = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Post__Leftside",
  componentId: "sah6n7-10"
})(["flex:1;background-color:#8a8888;position:sticky;padding:10px;top:65px;@media (max-width:900px){position:relative;top:0;}"]);
_c11 = Leftside;
function MyEditor() {
  _s();

  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_9__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      editorLoaded = _useState[0],
      setEditorLoaded = _useState[1];

  var _ref2 = editorRef.current || {},
      CKE = _ref2.CKE,
      ClassicEditor = _ref2.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      errormsg = _useState2[0],
      seterror = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      windowactive = _useState3[0],
      setwindowactive = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    title: false,
    subtitle: false
  }),
      question = _useState4[0],
      setquestion = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      file = _useState5[0],
      setfile = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      filename = _useState6[0],
      setfilename = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      uploaded = _useState7[0],
      setuploaded = _useState7[1];

  var textref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])("");

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    content: "",
    title: "",
    subtitle: "",
    catagories: "",
    UserId: ""
  }),
      contentpart = _useState8[0],
      setcontentpart = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var mutated = _objectSpread({}, contentpart);

    mutated["UserId"] = userdata.UserId;
    setcontentpart(mutated);
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var _require = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
        CKEditor = _require.CKEditor;

    editorRef.current = {
      CKE: CKEditor,
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoaded(true);
  }, []);

  var changehandler = function changehandler(event, editör, value) {
    var muteted = _objectSpread({}, contentpart);

    muteted[value] = value == "content" ? editör.getData() : event.target.value;
    setcontentpart(muteted);
    console.log(muteted);
  };

  var filechange = function filechange(event) {
    setfile(event.target.files[0]);
    setfilename(event.target.files[0].name);
    console.log(event.target.files[0]);
  };

  var submitfile = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var formData;
      return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append("upload", file);
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/upload", formData);

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", console.log("UPLOAD ERRORRRRRRR"));

            case 10:
              return _context.abrupt("return", setuploaded(true));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 7]]);
    }));

    return function submitfile() {
      return _ref3.apply(this, arguments);
    };
  }();

  var Submitpost = function Submitpost(typeofsubmit) {
    if (typeofsubmit == "Waiting") {
      textref.current = "Postun Editöre Gönderildi";
    } else {
      textref.current = "Taslak Olarak kaydedildi";
    }

    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["producereq"])({
      contentdata: contentpart,
      seterrmsg: seterror,
      typeofsubmit: typeofsubmit,
      setwindow: setwindowactive
    });
  }; //ana başlık kısa tutulacak.
  //alt başlık daha uzun tutlabilir.


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_window__WEBPACK_IMPORTED_MODULE_11__["default"], {
      closefunction: function closefunction() {
        return setwindowactive(false);
      },
      active: windowactive,
      type: "confirm",
      children: [" ", textref.current, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Leftside, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            marginBottom: "10px",
            color: "white"
          },
          children: "Yaz\u0131 T\xFCr\xFC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          value: contentpart.catagories,
          onChange: function onChange(event) {
            return changehandler(event, "", "catagories");
          },
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
            lineNumber: 208,
            columnNumber: 27
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Felsefe",
            children: "Felsefe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 27
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Uzay",
            children: "Uzay"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 27
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Metafizik",
            children: "Metafizik"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 27
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Biyoloji",
            children: "Biyoloji"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 27
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            marginBottom: "10px",
            color: "white"
          },
          children: "Tahmini Yay\u0131nlanma S\xFCresi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          style: {
            padding: "6px"
          },
          value: "2013-01-08",
          type: "date",
          onChange: function onChange(event) {
            return changehandler(event, "", "title");
          },
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return Submitpost("Waiting");
          },
          style: {
            width: "100%",
            backgroundColor: "#ef233c",
            textTransform: "capitalize"
          },
          color: "secondary",
          variant: "contained",
          children: "G\xF6nder"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return Submitpost("Draft");
          },
          style: {
            width: "100%",
            backgroundColor: "#2ec4b6",
            textTransform: "capitalize"
          },
          color: "secondary",
          variant: "contained",
          children: "Taslak Olarak Sakla"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Postdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
            children: "Ba\u015Fl\u0131k"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-pen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Infowindow, {
            active: question["title"],
            children: "Ba\u015Fl\u0131k k\u0131sm\u0131 i\xE7in kelimelerin ilk harfleri b\xFCy\xFCk olmak zorunda !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconquestion, {
            onMouseLeave: function onMouseLeave() {
              return setquestion(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  title: false
                });
              });
            },
            onMouseOver: function onMouseOver() {
              return setquestion(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  title: true
                });
              });
            },
            className: "fas fa-question-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            id: "title",
            onChange: function onChange(event) {
              return changehandler(event, "", "title");
            },
            placeholder: "Ba\u015Fl\u0131k..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
            children: "Alt Ba\u015Fl\u0131k"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconsecure, {
            className: "fas fa-pen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Infowindow, {
            active: question["subtitle"],
            children: "Alt ba\u015Fl\u0131k k\u0131sm\u0131n\u0131 normal ba\u015Fl\u0131k k\u0131sm\u0131ndan daha uzun tutabilirsiniz ve harf b\xFCy\xFCkl\xFC\u011F\xFCne dikkat etmenize gerek yoktur."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Iconquestion, {
            onMouseLeave: function onMouseLeave() {
              return setquestion(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  subtitle: false
                });
              });
            },
            onMouseOver: function onMouseOver() {
              return setquestion(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  subtitle: true
                });
              });
            },
            className: "fas fa-question-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            onChange: function onChange(event) {
              return changehandler(event, "", "subtitle");
            },
            placeholder: "Alt Ba\u015Fl\u0131k..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
            htmlFor: "file",
            children: "Ba\u015Fl\u0131k Foto\u011Fraf\u0131 Se\xE7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            accept: "image/png, image/gif, image/jpeg",
            onChange: filechange,
            formEncType: "multipart/form-data",
            style: {
              display: "none"
            },
            id: "file",
            type: "file",
            name: "upload"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
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
            lineNumber: 242,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: submitfile,
            backcolor: "blue",
            color: "white",
            children: "Upload"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: uploaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "".concat(filename)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 31
          }, this) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Ckeholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labeltitle, {
          children: "\u0130\xE7erik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 14
        }, this), editorLoaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CKE, {
          config: {
            ckfinder: {
              uploadUrl: "http://localhost:3001/upload"
            },
            placeholder: "Placeholder text..." //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']

          },
          editor: ClassicEditor,
          onInit: function onInit(editor) {//
          },
          onChange: function onChange(event, editör) {
            return changehandler(event, editör, "content");
          },
          data: contentpart["content"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 23
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Editor loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 7
  }, this);
}

_s(MyEditor, "Jouek5kYvEm3I9mbus+gQVSIhIA=");

_c12 = MyEditor;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Ckeholder");
$RefreshReg$(_c2, "InputHolder");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "Postdiv");
$RefreshReg$(_c5, "Iconsecure");
$RefreshReg$(_c6, "Iconquestion");
$RefreshReg$(_c7, "Infowindow");
$RefreshReg$(_c8, "Labeltitle");
$RefreshReg$(_c9, "Labelimage");
$RefreshReg$(_c10, "Exterior");
$RefreshReg$(_c11, "Leftside");
$RefreshReg$(_c12, "MyEditor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJJY29uc2VjdXJlIiwiaSIsIkljb25xdWVzdGlvbiIsIkluZm93aW5kb3ciLCJhY3RpdmUiLCJMYWJlbHRpdGxlIiwicCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkV4dGVyaW9yIiwiTGVmdHNpZGUiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlU3RhdGUiLCJlZGl0b3JMb2FkZWQiLCJzZXRFZGl0b3JMb2FkZWQiLCJjdXJyZW50IiwiQ0tFIiwiQ2xhc3NpY0VkaXRvciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJ3aW5kb3dhY3RpdmUiLCJzZXR3aW5kb3dhY3RpdmUiLCJ0aXRsZSIsInN1YnRpdGxlIiwicXVlc3Rpb24iLCJzZXRxdWVzdGlvbiIsImZpbGUiLCJzZXRmaWxlIiwiZmlsZW5hbWUiLCJzZXRmaWxlbmFtZSIsInVwbG9hZGVkIiwic2V0dXBsb2FkZWQiLCJ0ZXh0cmVmIiwiY29udGVudCIsImNhdGFnb3JpZXMiLCJVc2VySWQiLCJjb250ZW50cGFydCIsInNldGNvbnRlbnRwYXJ0IiwidXNlRWZmZWN0IiwibXV0YXRlZCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImZpbGVjaGFuZ2UiLCJmaWxlcyIsIm5hbWUiLCJzdWJtaXRmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicG9zdCIsIlN1Ym1pdHBvc3QiLCJ0eXBlb2ZzdWJtaXQiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlciIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwicHJldiIsImRpc3BsYXkiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImNrZmluZGVyIiwidXBsb2FkVXJsIiwicGxhY2Vob2xkZXIiLCJlZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJDQUFmO0tBQU1GLFM7QUFPTixJQUFNRyxXQUFXLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscURBQWpCO01BQU1DLFc7QUFLTixJQUFNQyxLQUFLLEdBQUNILHlEQUFNLENBQUNJLEtBQVI7QUFBQTtBQUFBO0FBQUEsMEVBQVg7TUFBTUQsSztBQVNOLElBQU1FLE9BQU8sR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx3Q0FBYjtNQUFNSSxPO0FBS04sSUFBTUMsVUFBVSxHQUFDTix5REFBTSxDQUFDTyxDQUFSO0FBQUE7QUFBQTtBQUFBLDRIQUFoQjtNQUFNRCxVO0FBVU4sSUFBTUUsWUFBWSxHQUFDUix5REFBTSxDQUFDTyxDQUFSO0FBQUE7QUFBQTtBQUFBLGdJQUFsQjtNQUFNQyxZO0FBWU4sSUFBTUMsVUFBVSxHQUFDVCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHdJQUNOO0FBQUEsTUFBRVMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBRE0sQ0FBaEI7TUFBTUQsVTtBQVdOLElBQU1FLFVBQVUsR0FBQ1gseURBQU0sQ0FBQ1ksQ0FBUjtBQUFBO0FBQUE7QUFBQSwwQkFBaEI7TUFBTUQsVTtBQUlOLElBQU1FLFVBQVUsR0FBQ2IseURBQU0sQ0FBQ2MsS0FBUjtBQUFBO0FBQUE7QUFBQSxzR0FBaEI7TUFBTUQsVTtBQVNOLElBQU1FLFFBQVEsR0FBQ2YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxvSEFBZDtPQUFNYyxRO0FBVU4sSUFBTUMsUUFBUSxHQUFDaEIseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnSUFBZDtPQUFNZSxRO0FBWVMsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUUvQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCOztBQUYrQixvQkFHWkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FIRTtBQUFBLE1BR3hCQyxRQUh3QixlQUd4QkEsUUFId0I7O0FBQUEsa0JBSVdDLHNEQUFRLENBQUUsS0FBRixDQUpuQjtBQUFBLE1BSXZCQyxZQUp1QjtBQUFBLE1BSVRDLGVBSlM7O0FBQUEsY0FLQVAsU0FBUyxDQUFDUSxPQUFWLElBQXFCLEVBTHJCO0FBQUEsTUFLdkJDLEdBTHVCLFNBS3ZCQSxHQUx1QjtBQUFBLE1BS2xCQyxhQUxrQixTQUtsQkEsYUFMa0I7O0FBQUEsbUJBTUpMLHNEQUFRLENBQUMsS0FBRCxDQU5KO0FBQUEsTUFNekJNLFFBTnlCO0FBQUEsTUFNaEJDLFFBTmdCOztBQUFBLG1CQU9PUCxzREFBUSxDQUFDLEtBQUQsQ0FQZjtBQUFBLE1BT3pCUSxZQVB5QjtBQUFBLE1BT1pDLGVBUFk7O0FBQUEsbUJBUURULHNEQUFRLENBQUM7QUFDckNVLFNBQUssRUFBQyxLQUQrQjtBQUVyQ0MsWUFBUSxFQUFDO0FBRjRCLEdBQUQsQ0FSUDtBQUFBLE1BUXpCQyxRQVJ5QjtBQUFBLE1BUWhCQyxXQVJnQjs7QUFBQSxtQkFZVGIsc0RBQVEsRUFaQztBQUFBLE1BWXpCYyxJQVp5QjtBQUFBLE1BWXBCQyxPQVpvQjs7QUFBQSxtQkFhRGYsc0RBQVEsQ0FBQyxFQUFELENBYlA7QUFBQSxNQWF6QmdCLFFBYnlCO0FBQUEsTUFhaEJDLFdBYmdCOztBQUFBLG1CQWNEakIsc0RBQVEsQ0FBQyxLQUFELENBZFA7QUFBQSxNQWN6QmtCLFFBZHlCO0FBQUEsTUFjaEJDLFdBZGdCOztBQWUvQixNQUFNQyxPQUFPLEdBQUN4QixvREFBTSxDQUFDLEVBQUQsQ0FBcEI7O0FBZitCLG1CQWdCTUksc0RBQVEsQ0FBQztBQUM1Q3FCLFdBQU8sRUFBQyxFQURvQztBQUU1Q1gsU0FBSyxFQUFDLEVBRnNDO0FBRzVDQyxZQUFRLEVBQUMsRUFIbUM7QUFJNUNXLGNBQVUsRUFBQyxFQUppQztBQUs1Q0MsVUFBTSxFQUFDO0FBTHFDLEdBQUQsQ0FoQmQ7QUFBQSxNQWdCeEJDLFdBaEJ3QjtBQUFBLE1BZ0JaQyxjQWhCWTs7QUF5Qi9CQyx5REFBUyxDQUFDLFlBQUk7QUFFVixRQUFNQyxPQUFPLHFCQUFLSCxXQUFMLENBQWI7O0FBQ0FHLFdBQU8sQ0FBQyxRQUFELENBQVAsR0FBb0I1QixRQUFRLENBQUN3QixNQUE3QjtBQUNBRSxrQkFBYyxDQUFDRSxPQUFELENBQWQ7QUFFSCxHQU5RLEVBTVAsQ0FBQzVCLFFBQUQsQ0FOTyxDQUFUO0FBUUEyQix5REFBUyxDQUFDLFlBQUk7QUFBQSxtQkFDT0UsbUJBQU8sQ0FBRSw0RkFBRixDQURkO0FBQUEsUUFDSEMsUUFERyxZQUNIQSxRQURHOztBQUVWbEMsYUFBUyxDQUFDUSxPQUFWLEdBQW9CO0FBQ2hCQyxTQUFHLEVBQUV5QixRQURXO0FBRWhCeEIsbUJBQWEsRUFBRXVCLG1CQUFPLENBQUUsNkdBQUY7QUFGTixLQUFwQjtBQUlGMUIsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU00QixhQUFhLEdBQUMsU0FBZEEsYUFBYyxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBY0MsS0FBZCxFQUFzQjtBQUN2QyxRQUFNQyxPQUFPLHFCQUFLVixXQUFMLENBQWI7O0FBQ0FVLFdBQU8sQ0FBQ0QsS0FBRCxDQUFQLEdBQWdCQSxLQUFLLElBQUksU0FBVCxHQUFxQkQsTUFBTSxDQUFDRyxPQUFQLEVBQXJCLEdBQXdDSixLQUFLLENBQUNLLE1BQU4sQ0FBYUgsS0FBckU7QUFDQVIsa0JBQWMsQ0FBQ1MsT0FBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0YsR0FMRDs7QUFPQSxNQUFNSyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDUixLQUFELEVBQVM7QUFDdkJoQixXQUFPLENBQUNnQixLQUFLLENBQUNLLE1BQU4sQ0FBYUksS0FBYixDQUFtQixDQUFuQixDQUFELENBQVA7QUFDQXZCLGVBQVcsQ0FBQ2MsS0FBSyxDQUFDSyxNQUFOLENBQWFJLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBQXZCLENBQVg7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQUssQ0FBQ0ssTUFBTixDQUFhSSxLQUFiLENBQW1CLENBQW5CLENBQVo7QUFDRixHQUpEOztBQU1BLE1BQU1FLFVBQVU7QUFBQSwyU0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVEMsc0JBRlMsR0FFQSxJQUFJQyxRQUFKLEVBRkE7QUFJZkQsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5Qi9CLElBQXpCO0FBSmU7QUFBQTtBQUFBLHFCQVFOZ0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFNBQVgsRUFBcUJKLFFBQXJCLENBUk07O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQVlMTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixDQVpLOztBQUFBO0FBQUEsK0NBZVJuQixXQUFXLENBQUMsSUFBRCxDQWZIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUEsb0JBQVZ1QixVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQWtCQSxNQUFNTSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDQyxZQUFELEVBQWdCO0FBRTdCLFFBQUdBLFlBQVksSUFBSSxTQUFuQixFQUE2QjtBQUMzQjdCLGFBQU8sQ0FBQ2pCLE9BQVIsR0FBZ0IsMkJBQWhCO0FBQ0QsS0FGRCxNQUdJO0FBQ0ZpQixhQUFPLENBQUNqQixPQUFSLEdBQWdCLDBCQUFoQjtBQUNEOztBQUVEK0MsK0RBQVUsQ0FBQztBQUNUQyxpQkFBVyxFQUFDM0IsV0FESDtBQUVUNEIsZUFBUyxFQUFDN0MsUUFGRDtBQUdUMEMsa0JBQVksRUFBQ0EsWUFISjtBQUlUSSxlQUFTLEVBQUM1QztBQUpELEtBQUQsQ0FBVjtBQU9ILEdBaEJELENBekUrQixDQTRGL0I7QUFDQTs7O0FBRUEsc0JBQ0UscUVBQUMsUUFBRDtBQUFBLDRCQUNFLHFFQUFDLDhEQUFEO0FBQVEsbUJBQWEsRUFBRTtBQUFBLGVBQUlBLGVBQWUsQ0FBQyxLQUFELENBQW5CO0FBQUEsT0FBdkI7QUFBbUQsWUFBTSxFQUFFRCxZQUEzRDtBQUF5RSxVQUFJLEVBQUMsU0FBOUU7QUFBQSxzQkFBMEZZLE9BQU8sQ0FBQ2pCLE9BQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsUUFBRDtBQUFBLDhCQUNNLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSTtBQUFHLGVBQUssRUFBRTtBQUFDbUQsd0JBQVksRUFBQyxNQUFkO0FBQXFCQyxpQkFBSyxFQUFDO0FBQTNCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGVBQUssRUFBRS9CLFdBQVcsQ0FBQ0YsVUFBM0I7QUFBdUMsa0JBQVEsRUFBRSxrQkFBQ1MsS0FBRDtBQUFBLG1CQUFTRCxhQUFhLENBQUNDLEtBQUQsRUFBTyxFQUFQLEVBQVUsWUFBVixDQUF0QjtBQUFBLFdBQWpEO0FBQWdHLGVBQUssRUFBRTtBQUFDeUIsaUJBQUssRUFBQyxNQUFQO0FBQWNDLG1CQUFPLEVBQUMsS0FBdEI7QUFBNEJDLGtCQUFNLEVBQUMsTUFBbkM7QUFBMENDLG1CQUFPLEVBQUM7QUFBbEQsV0FBdkc7QUFBa0ssWUFBRSxFQUFDLE1BQXJLO0FBQUEsa0NBQ1E7QUFBUSxrQkFBTSxNQUFkO0FBQWUsaUJBQUssRUFBQyxzQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFIsZUFFUTtBQUFRLGlCQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGUixlQUdRO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhSLGVBSVE7QUFBUSxpQkFBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSlIsZUFLUTtBQUFRLGlCQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE4sZUFXTSxxRUFBQyxXQUFEO0FBQUEsZ0NBQ0k7QUFBRyxlQUFLLEVBQUU7QUFBQ0wsd0JBQVksRUFBQyxNQUFkO0FBQXFCQyxpQkFBSyxFQUFDO0FBQTNCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxLQUFEO0FBQU8sZUFBSyxFQUFFO0FBQUNFLG1CQUFPLEVBQUM7QUFBVCxXQUFkO0FBQWdDLGVBQUssRUFBQyxZQUF0QztBQUFtRCxjQUFJLEVBQUMsTUFBeEQ7QUFBZ0Usa0JBQVEsRUFBRSxrQkFBQzFCLEtBQUQ7QUFBQSxtQkFBU0QsYUFBYSxDQUFDQyxLQUFELEVBQU8sRUFBUCxFQUFVLE9BQVYsQ0FBdEI7QUFBQSxXQUExRTtBQUFvSCxxQkFBVyxFQUFDO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWE4sZUFlSSxxRUFBQyxXQUFEO0FBQUEsK0JBQWEscUVBQUMsd0RBQUQ7QUFBWSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlpQixVQUFVLENBQUMsU0FBRCxDQUFkO0FBQUEsV0FBckI7QUFBaUQsZUFBSyxFQUFFO0FBQUNRLGlCQUFLLEVBQUMsTUFBUDtBQUFjSSwyQkFBZSxFQUFDLFNBQTlCO0FBQXdDQyx5QkFBYSxFQUFDO0FBQXRELFdBQXhEO0FBQTZILGVBQUssRUFBQyxXQUFuSTtBQUErSSxpQkFBTyxFQUFDLFdBQXZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKLGVBZ0JJLHFFQUFDLFdBQUQ7QUFBQSwrQkFBYSxxRUFBQyx3REFBRDtBQUFZLGlCQUFPLEVBQUU7QUFBQSxtQkFBSWIsVUFBVSxDQUFDLE9BQUQsQ0FBZDtBQUFBLFdBQXJCO0FBQWdELGVBQUssRUFBRTtBQUFDUSxpQkFBSyxFQUFDLE1BQVA7QUFBY0ksMkJBQWUsRUFBQyxTQUE5QjtBQUF3Q0MseUJBQWEsRUFBQztBQUF0RCxXQUF2RDtBQUE0SCxlQUFLLEVBQUMsV0FBbEk7QUFBOEksaUJBQU8sRUFBQyxXQUF0SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFvQkUscUVBQUMsT0FBRDtBQUFBLDhCQUNJLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsZ0NBQ0UscUVBQUMsV0FBRDtBQUFBLGtDQUNJLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxVQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0kscUVBQUMsVUFBRDtBQUFZLGtCQUFNLEVBQUVqRCxRQUFRLENBQUMsT0FBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJLHFFQUFDLFlBQUQ7QUFBYyx3QkFBWSxFQUFFO0FBQUEscUJBQUlDLFdBQVcsQ0FBQyxVQUFBaUQsSUFBSSxFQUFFO0FBQUMsdURBQVVBLElBQVY7QUFBZXBELHVCQUFLLEVBQUM7QUFBckI7QUFBNEIsZUFBcEMsQ0FBZjtBQUFBLGFBQTVCO0FBQWtGLHVCQUFXLEVBQUU7QUFBQSxxQkFBSUcsV0FBVyxDQUFDLFVBQUFpRCxJQUFJLEVBQUU7QUFBQyx1REFBVUEsSUFBVjtBQUFlcEQsdUJBQUssRUFBQztBQUFyQjtBQUEyQixlQUFuQyxDQUFmO0FBQUEsYUFBL0Y7QUFBb0oscUJBQVMsRUFBQztBQUE5SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0kscUVBQUMsS0FBRDtBQUFPLGNBQUUsRUFBQyxPQUFWO0FBQWtCLG9CQUFRLEVBQUUsa0JBQUNxQixLQUFEO0FBQUEscUJBQVNELGFBQWEsQ0FBQ0MsS0FBRCxFQUFPLEVBQVAsRUFBVSxPQUFWLENBQXRCO0FBQUEsYUFBNUI7QUFBc0UsdUJBQVcsRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFLHFFQUFDLFdBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJLHFFQUFDLFVBQUQ7QUFBYSxrQkFBTSxFQUFFbkIsUUFBUSxDQUFDLFVBQUQsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSSxxRUFBQyxZQUFEO0FBQWMsd0JBQVksRUFBRTtBQUFBLHFCQUFJQyxXQUFXLENBQUMsVUFBQWlELElBQUksRUFBRTtBQUFDLHVEQUFVQSxJQUFWO0FBQWVuRCwwQkFBUSxFQUFDO0FBQXhCO0FBQStCLGVBQXZDLENBQWY7QUFBQSxhQUE1QjtBQUFxRix1QkFBVyxFQUFFO0FBQUEscUJBQUlFLFdBQVcsQ0FBQyxVQUFBaUQsSUFBSSxFQUFFO0FBQUMsdURBQVVBLElBQVY7QUFBZW5ELDBCQUFRLEVBQUM7QUFBeEI7QUFBOEIsZUFBdEMsQ0FBZjtBQUFBLGFBQWxHO0FBQTBKLHFCQUFTLEVBQUM7QUFBcEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJLHFFQUFDLEtBQUQ7QUFBTyxvQkFBUSxFQUFFLGtCQUFDb0IsS0FBRDtBQUFBLHFCQUFTRCxhQUFhLENBQUNDLEtBQUQsRUFBTyxFQUFQLEVBQVUsVUFBVixDQUF0QjtBQUFBLGFBQWpCO0FBQThELHVCQUFXLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFlRSxxRUFBQyxXQUFEO0FBQUEsa0NBQ0kscUVBQUMsVUFBRDtBQUFhLG1CQUFPLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxLQUFEO0FBQU8sa0JBQU0sRUFBQyxrQ0FBZDtBQUFrRCxvQkFBUSxFQUFFUSxVQUE1RDtBQUF3RSx1QkFBVyxFQUFFLHFCQUFyRjtBQUE0RyxpQkFBSyxFQUFFO0FBQUN3QixxQkFBTyxFQUFDO0FBQVQsYUFBbkg7QUFBcUksY0FBRSxFQUFDLE1BQXhJO0FBQStJLGdCQUFJLEVBQUMsTUFBcEo7QUFBMkosZ0JBQUksRUFBQztBQUFoSztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0kscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQ0MsaUJBQUcsRUFBQyxLQUFMO0FBQVdDLGtCQUFJLEVBQUMsT0FBaEI7QUFBd0JDLG9CQUFNLEVBQUMsTUFBL0I7QUFBc0NDLHdCQUFVLEVBQUM7QUFBakQsYUFBbkI7QUFBNkUscUJBQVMsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRixlQW9CRSxxRUFBQyxXQUFEO0FBQUEsaUNBQ0UscUVBQUMsMkVBQUQ7QUFBUSxtQkFBTyxFQUFFekIsVUFBakI7QUFBNkIscUJBQVMsRUFBQyxNQUF2QztBQUE4QyxpQkFBSyxFQUFDLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkYsZUF1QkU7QUFBQSxvQkFFS3hCLFFBQVEsZ0JBQUc7QUFBSyxlQUFHLFlBQUtGLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILEdBQXFDO0FBRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBK0JJLHFFQUFDLFNBQUQ7QUFBQSxnQ0FDQyxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEVBR01mLFlBQVksZ0JBQ1IscUVBQUMsR0FBRDtBQUNFLGdCQUFNLEVBQ0Y7QUFDRW1FLG9CQUFRLEVBQUM7QUFDTkMsdUJBQVMsRUFBQztBQURKLGFBRFg7QUFJRUMsdUJBQVcsRUFBRSxxQkFKZixDQUtFOztBQUxGLFdBRk47QUFVRSxnQkFBTSxFQUFFakUsYUFWVjtBQVdFLGdCQUFNLEVBQUUsZ0JBQUNrRSxNQUFELEVBQVksQ0FDbEI7QUFDRCxXQWJIO0FBY0Usa0JBQVEsRUFBRSxrQkFBQ3hDLEtBQUQsRUFBT0MsTUFBUDtBQUFBLG1CQUFnQkYsYUFBYSxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBYyxTQUFkLENBQTdCO0FBQUEsV0FkWjtBQWVFLGNBQUksRUFBRVIsV0FBVyxDQUFDLFNBQUQ7QUFmbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUSxnQkFvQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvRkg7O0dBbkx1QjlCLFE7O09BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC5hMmFhMGE5MzE1OWY4MWU4ZjlkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3Byb2R1Y2VyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7QnV0dG9uIGFzIENvcmVidXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7QnV0dG9uLEdsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS93aW5kb3dcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ2tlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjgyJTtcclxucGFkZGluZzoxMHB4O1xyXG5tYXJnaW46YXV0bztcclxuYFxyXG5cclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDo5MCU7XHJcbm1hcmdpbjoyMHB4IGF1dG87XHJcbmBcclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjhweDtcclxucGFkZGluZy1sZWZ0OjQwcHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0ZGl2PXN0eWxlZC5kaXZgXHJcbmZsZXg6MztcclxuYmFja2dyb3VuZC1jb2xvcjojRTRFOENEO1xyXG5gXHJcblxyXG5jb25zdCBJY29uc2VjdXJlPXN0eWxlZC5pYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjojMzI5Mjk3O1xyXG5wYWRkaW5nOjlweDtcclxubGVmdDotMTdweDtcclxuY29sb3I6d2hpdGU7XHJcbnRvcDo3NCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG5gXHJcblxyXG5jb25zdCBJY29ucXVlc3Rpb249c3R5bGVkLmlgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6IzYzMDQwNDtcclxudG9wOjcwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbnJpZ2h0Oi0xNXB4O1xyXG4mOmhvdmVye1xyXG4gIGNvbG9yOiNGRTJDMkUgO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IEluZm93aW5kb3c9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnJpZ2h0OjEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbndpZHRoOjMwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbnBhZGRpbmc6MTBweDtcclxuY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6MjAwO1xyXG5gXHJcbmNvbnN0IExhYmVsdGl0bGU9c3R5bGVkLnBgXHJcbm1hcmdpbi1ib3R0b206N3B4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbmBcclxuXHJcbmNvbnN0IEV4dGVyaW9yPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOjUwcHggYXV0bztcclxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpe1xyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDo4MCU7XHJcbn1cclxuYFxyXG5jb25zdCBMZWZ0c2lkZT1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmJhY2tncm91bmQtY29sb3I6IzhhODg4ODtcclxucG9zaXRpb246c3RpY2t5O1xyXG5wYWRkaW5nOjEwcHg7XHJcbnRvcDo2NXB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5MDBweCl7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUVkaXRvciAoKXtcclxuXHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3QgWyBlZGl0b3JMb2FkZWQsIHNldEVkaXRvckxvYWRlZCBdID0gdXNlU3RhdGUoIGZhbHNlIClcclxuICAgIGNvbnN0IHsgQ0tFLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fVxyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbd2luZG93YWN0aXZlLHNldHdpbmRvd2FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtxdWVzdGlvbixzZXRxdWVzdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHRpdGxlOmZhbHNlLFxyXG4gICAgICBzdWJ0aXRsZTpmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3RbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFtmaWxlbmFtZSxzZXRmaWxlbmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W3VwbG9hZGVkLHNldHVwbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRleHRyZWY9dXNlUmVmKFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbnRlbnRwYXJ0LHNldGNvbnRlbnRwYXJ0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgY29udGVudDpcIlwiLFxyXG4gICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICBzdWJ0aXRsZTpcIlwiLFxyXG4gICAgICBjYXRhZ29yaWVzOlwiXCIsXHJcbiAgICAgIFVzZXJJZDpcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbXV0YXRlZD17Li4uY29udGVudHBhcnR9O1xyXG4gICAgICAgIG11dGF0ZWRbXCJVc2VySWRcIl0gPSB1c2VyZGF0YS5Vc2VySWQ7XHJcbiAgICAgICAgc2V0Y29udGVudHBhcnQobXV0YXRlZCk7XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7Q0tFZGl0b3J9PXJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JyApXHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIENLRTogQ0tFZGl0b3IsXHJcbiAgICAgICAgICAgIENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnIClcclxuICAgICAgICB9XHJcbiAgICAgIHNldEVkaXRvckxvYWRlZCh0cnVlKVxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShldmVudCxlZGl0w7ZyLHZhbHVlKT0+e1xyXG4gICAgICAgY29uc3QgbXV0ZXRlZD17Li4uY29udGVudHBhcnR9O1xyXG4gICAgICAgbXV0ZXRlZFt2YWx1ZV09IHZhbHVlID09IFwiY29udGVudFwiID8gZWRpdMO2ci5nZXREYXRhKCkgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICBzZXRjb250ZW50cGFydChtdXRldGVkKTtcclxuICAgICAgIGNvbnNvbGUubG9nKG11dGV0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVjaGFuZ2U9KGV2ZW50KT0+e1xyXG4gICAgICAgc2V0ZmlsZShldmVudC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgICBzZXRmaWxlbmFtZShldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXRmaWxlPWFzeW5jICgpPT57XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUpO1xyXG5cclxuICAgICAgdHJ5e1xyXG5cclxuICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi91cGxvYWRcIixmb3JtRGF0YSk7XHJcblxyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuXHJcbiAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNldHVwbG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBTdWJtaXRwb3N0PSh0eXBlb2ZzdWJtaXQpPT57XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZnN1Ym1pdCA9PSBcIldhaXRpbmdcIil7XHJcbiAgICAgICAgICB0ZXh0cmVmLmN1cnJlbnQ9XCJQb3N0dW4gRWRpdMO2cmUgR8O2bmRlcmlsZGlcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGV4dHJlZi5jdXJyZW50PVwiVGFzbGFrIE9sYXJhayBrYXlkZWRpbGRpXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvZHVjZXJlcSh7XHJcbiAgICAgICAgICBjb250ZW50ZGF0YTpjb250ZW50cGFydCxcclxuICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvciwgXHJcbiAgICAgICAgICB0eXBlb2ZzdWJtaXQ6dHlwZW9mc3VibWl0LFxyXG4gICAgICAgICAgc2V0d2luZG93OnNldHdpbmRvd2FjdGl2ZSwgXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vYW5hIGJhxZ9sxLFrIGvEsXNhIHR1dHVsYWNhay5cclxuICAgIC8vYWx0IGJhxZ9sxLFrIGRhaGEgdXp1biB0dXRsYWJpbGlyLlxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RXh0ZXJpb3I+XHJcbiAgICAgICAgPFdpbmRvdyBjbG9zZWZ1bmN0aW9uPXsoKT0+c2V0d2luZG93YWN0aXZlKGZhbHNlKX0gYWN0aXZlPXt3aW5kb3dhY3RpdmV9IHR5cGU9XCJjb25maXJtXCI+IHt0ZXh0cmVmLmN1cnJlbnR9IDwvV2luZG93PlxyXG4gICAgICAgIDxMZWZ0c2lkZT4gXHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCJ9fT5ZYXrEsSBUw7xyw7w8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvbnRlbnRwYXJ0LmNhdGFnb3JpZXN9IG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJjYXRhZ29yaWVzXCIpfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHBhZGRpbmc6XCI4cHhcIixib3JkZXI6XCJub25lXCIsb3V0bGluZTpcIm5vbmVcIn19IGlkPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiWWF6xLEgVMO8csO8XCI+WWF6xLEgVMO8csO8Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlV6YXlcIj5VemF5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1ldGFmaXppa1wiPk1ldGFmaXppazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCaXlvbG9qaVwiPkJpeW9sb2ppPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCJ9fT5UYWhtaW5pIFlhecSxbmxhbm1hIFPDvHJlc2k8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e3BhZGRpbmc6XCI2cHhcIn19ICB2YWx1ZT1cIjIwMTMtMDEtMDhcIiB0eXBlPVwiZGF0ZVwiICBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgIDxJbnB1dEhvbGRlcj48Q29yZWJ1dHRvbiBvbkNsaWNrPXsoKT0+U3VibWl0cG9zdChcIldhaXRpbmdcIil9ICBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGJhY2tncm91bmRDb2xvcjpcIiNlZjIzM2NcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+R8O2bmRlcjwvQ29yZWJ1dHRvbj48L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRIb2xkZXI+PENvcmVidXR0b24gb25DbGljaz17KCk9PlN1Ym1pdHBvc3QoXCJEcmFmdFwiKX0gICBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGJhY2tncm91bmRDb2xvcjpcIiMyZWM0YjZcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+VGFzbGFrIE9sYXJhayBTYWtsYTwvQ29yZWJ1dHRvbj48L0lucHV0SG9sZGVyPlxyXG4gICAgICAgIDwvTGVmdHNpZGU+XHJcbiAgICAgICAgPFBvc3RkaXY+XHJcbiAgICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWx0aXRsZT5CYcWfbMSxazwvTGFiZWx0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPEljb25zZWN1cmUgY2xhc3NOYW1lPVwiZmFzIGZhLXBlblwiPjwvSWNvbnNlY3VyZT5cclxuICAgICAgICAgICAgICAgICAgPEluZm93aW5kb3cgYWN0aXZlPXtxdWVzdGlvbltcInRpdGxlXCJdfT5CYcWfbMSxayBrxLFzbcSxIGnDp2luIGtlbGltZWxlcmluIGlsayBoYXJmbGVyaSBiw7x5w7xrIG9sbWFrIHpvcnVuZGEgITwvSW5mb3dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgPEljb25xdWVzdGlvbiBvbk1vdXNlTGVhdmU9eygpPT5zZXRxdWVzdGlvbihwcmV2PT57cmV0dXJuey4uLnByZXYsdGl0bGU6ZmFsc2V9fSl9IG9uTW91c2VPdmVyPXsoKT0+c2V0cXVlc3Rpb24ocHJldj0+e3JldHVybnsuLi5wcmV2LHRpdGxlOnRydWV9fSl9IGNsYXNzTmFtZT1cImZhcyBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L0ljb25xdWVzdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidGl0bGVcIiBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWx0aXRsZT5BbHQgQmHFn2zEsWs8L0xhYmVsdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uc2VjdXJlIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5cIj48L0ljb25zZWN1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDxJbmZvd2luZG93ICBhY3RpdmU9e3F1ZXN0aW9uW1wic3VidGl0bGVcIl19PkFsdCBiYcWfbMSxayBrxLFzbcSxbsSxIG5vcm1hbCBiYcWfbMSxayBrxLFzbcSxbmRhbiBkYWhhIHV6dW4gdHV0YWJpbGlyc2luaXogdmUgaGFyZiBiw7x5w7xrbMO8xJ/DvG5lIGRpa2thdCBldG1lbml6ZSBnZXJlayB5b2t0dXIuPC9JbmZvd2luZG93PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnF1ZXN0aW9uIG9uTW91c2VMZWF2ZT17KCk9PnNldHF1ZXN0aW9uKHByZXY9PntyZXR1cm57Li4ucHJldixzdWJ0aXRsZTpmYWxzZX19KX0gb25Nb3VzZU92ZXI9eygpPT5zZXRxdWVzdGlvbihwcmV2PT57cmV0dXJuey4uLnByZXYsc3VidGl0bGU6dHJ1ZX19KX0gY2xhc3NOYW1lPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvSWNvbnF1ZXN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInN1YnRpdGxlXCIpfSBwbGFjZWhvbGRlcj1cIkFsdCBCYcWfbMSxay4uLlwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlICBodG1sRm9yPVwiZmlsZVwiPkJhxZ9sxLFrIEZvdG/En3JhZsSxIFNlw6c8L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiICBvbkNoYW5nZT17ZmlsZWNoYW5nZX0gZm9ybUVuY1R5cGU9e1wibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifSBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSBpZD1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIG5hbWU9XCJ1cGxvYWRcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnNlY3VyZSBzdHlsZT17e3RvcDpcIjUwJVwiLGxlZnQ6XCItMThweFwiLGhlaWdodDpcIjEwMCVcIixsaW5lSGVpZ2h0OlwiMjBweFwifX0gY2xhc3NOYW1lPVwiZmFzIGZhLWltYWdlc1wiPjwvSWNvbnNlY3VyZT4gIFxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXRmaWxlfSBiYWNrY29sb3I9XCJibHVlXCIgY29sb3I9XCJ3aGl0ZVwiPlVwbG9hZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRIb2xkZXI+ICAgIFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB1cGxvYWRlZCA/IDxpbWcgc3JjPXtgJHtmaWxlbmFtZX1gfT48L2ltZz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q2tlaG9sZGVyID5cclxuICAgICAgICAgICAgIDxMYWJlbHRpdGxlPsSww6dlcmlrPC9MYWJlbHRpdGxlPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZWRpdG9yTG9hZGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENLRSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNrZmluZGVyOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkVXJsOlwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBsYWNlaG9sZGVyIHRleHQuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90b29sYmFyOlsnaGVhZGluZycsICd8JywgJ2JvbGQnLCAnaXRhbGljJywgJ2Jsb2NrUXVvdGUnLCAnbGluaycsICdudW1iZXJlZExpc3QnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0PXsoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCxlZGl0w7ZyKT0+Y2hhbmdlaGFuZGxlcihldmVudCxlZGl0w7ZyLFwiY29udGVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICA8L1Bvc3RkaXY+XHJcbiAgICAgIDwvRXh0ZXJpb3I+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=