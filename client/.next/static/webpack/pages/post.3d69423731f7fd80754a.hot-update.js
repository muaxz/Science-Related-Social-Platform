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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/esm/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Post.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Ckeholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Ckeholder",
  componentId: "sah6n7-0"
})(["width:100%;padding:10px;"]);
_c = Ckeholder;
var InputHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__InputHolder",
  componentId: "sah6n7-1"
})(["width:100%;border-bottom:1px solid white;padding:20px;margin-bottom:20px;"]);
_c2 = InputHolder;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "Post__Input",
  componentId: "sah6n7-2"
})(["width:100%;padding:8px;outline:none;border:none;"]);
_c3 = Input;
var Postdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Postdiv",
  componentId: "sah6n7-3"
})(["max-width:1200px;background-color:lightgrey;margin:20px auto;"]);
_c4 = Postdiv;
function MyEditor() {
  _s();

  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      editorLoaded = _useState[0],
      setEditorLoaded = _useState[1];

  var _ref = editorRef.current || {},
      CKE = _ref.CKE,
      ClassicEditor = _ref.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      errormsg = _useState2[0],
      seterror = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    content: "",
    title: "",
    subtitle: "",
    catagories: ""
  }),
      contentpart = _useState3[0],
      setcontentpart = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

  var Submitpost = function Submitpost() {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_4__["producereq"])({
      contentdata: content,
      seterrmsg: seterror
    });
  }; //ana başlık kısa tutulacak.
  //alt başlık daha uzun tutlabilir.


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Postdiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Global"], {}, void 0, false, {
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
            padding: "8px",
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
          onChange: function onChange(event) {
            return changehandler(event, "", "title");
          },
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
            padding: "5px"
          },
          value: "2013-01-08",
          type: "date",
          sonChange: function sonChange(event) {
            return changehandler(event, "", "title");
          },
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
        onChange: function onChange(event) {
          return changehandler(event, "", "subtitle");
        },
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
        onChange: function onChange(event, editör) {
          return changehandler(event, editör, "content");
        },
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
    }, this), react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(contentpart["content"])]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, this);
}

_s(MyEditor, "CHmtIQlXAy/xH9yiI+XoeYecZf4=");

_c5 = MyEditor;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Ckeholder");
$RefreshReg$(_c2, "InputHolder");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "Postdiv");
$RefreshReg$(_c5, "MyEditor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwiY3VycmVudCIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlN1Ym1pdHBvc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyIiwib3V0bGluZSIsInBsYWNlaG9sZGVyIiwibWFyZ2luVG9wIiwiUmVhY3RwYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlGQUFqQjtNQUFNQyxXO0FBTU4sSUFBTUMsS0FBSyxHQUFDSCx5REFBTSxDQUFDSSxLQUFSO0FBQUE7QUFBQTtBQUFBLHdEQUFYO01BQU1ELEs7QUFRTixJQUFNRSxPQUFPLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUVBQWI7TUFBTUksTztBQU1TLFNBQVNDLFFBQVQsR0FBcUI7QUFBQTs7QUFDaEMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxFQUF4Qjs7QUFEZ0Msa0JBRVVDLHNEQUFRLENBQUUsS0FBRixDQUZsQjtBQUFBLE1BRXhCQyxZQUZ3QjtBQUFBLE1BRVZDLGVBRlU7O0FBQUEsYUFHREosU0FBUyxDQUFDSyxPQUFWLElBQXFCLEVBSHBCO0FBQUEsTUFHeEJDLEdBSHdCLFFBR3hCQSxHQUh3QjtBQUFBLE1BR25CQyxhQUhtQixRQUduQkEsYUFIbUI7O0FBQUEsbUJBSVBMLHNEQUFRLENBQUMsS0FBRCxDQUpEO0FBQUEsTUFJMUJNLFFBSjBCO0FBQUEsTUFJakJDLFFBSmlCOztBQUFBLG1CQUtHUCxzREFBUSxDQUFDO0FBQzFDUSxXQUFPLEVBQUMsRUFEa0M7QUFFMUNDLFNBQUssRUFBQyxFQUZvQztBQUcxQ0MsWUFBUSxFQUFDLEVBSGlDO0FBSTFDQyxjQUFVLEVBQUM7QUFKK0IsR0FBRCxDQUxYO0FBQUEsTUFLekJDLFdBTHlCO0FBQUEsTUFLYkMsY0FMYTs7QUFXaENDLHlEQUFTLENBQUMsWUFBSTtBQUFBLG1CQUNPQyxtQkFBTyxDQUFFLDRGQUFGLENBRGQ7QUFBQSxRQUNIQyxRQURHLFlBQ0hBLFFBREc7O0FBRVZsQixhQUFTLENBQUNLLE9BQVYsR0FBb0I7QUFDaEJDLFNBQUcsRUFBRVksUUFEVztBQUVoQlgsbUJBQWEsRUFBRVUsbUJBQU8sQ0FBRSw2R0FBRjtBQUZOLEtBQXBCO0FBSUZiLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNZSxhQUFhLEdBQUMsU0FBZEEsYUFBYyxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBY0MsS0FBZCxFQUFzQjtBQUN2QyxRQUFNQyxPQUFPLHFCQUFLVCxXQUFMLENBQWI7O0FBQ0FTLFdBQU8sQ0FBQ0QsS0FBRCxDQUFQLEdBQWVBLEtBQUssSUFBSSxTQUFULEdBQXFCRCxNQUFNLENBQUNHLE9BQVAsRUFBckIsR0FBd0NKLEtBQUssQ0FBQ0ssTUFBTixDQUFhSCxLQUFwRTtBQUNBUCxrQkFBYyxDQUFDUSxPQUFELENBQWQ7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDRixHQUxEOztBQU9BLE1BQU1LLFVBQVUsR0FBQyxTQUFYQSxVQUFXLEdBQUk7QUFDbEJDLCtEQUFVLENBQUM7QUFDVEMsaUJBQVcsRUFBQ3BCLE9BREg7QUFFVHFCLGVBQVMsRUFBQ3RCO0FBRkQsS0FBRCxDQUFWO0FBSUYsR0FMRCxDQTNCZ0MsQ0FpQ2hDO0FBQ0E7OztBQUNBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSw0QkFFSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFLLFdBQUssRUFBRTtBQUFDdUIsZUFBTyxFQUFDO0FBQVQsT0FBWjtBQUFBLDhCQUNFLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBRTtBQUFDQyx3QkFBWSxFQUFDO0FBQWQsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVEsZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUMsTUFBUDtBQUFjQyxtQkFBTyxFQUFDLEtBQXRCO0FBQTRCQyxrQkFBTSxFQUFDLE1BQW5DO0FBQTBDQyxtQkFBTyxFQUFDO0FBQWxELFdBQWY7QUFBMEUsWUFBRSxFQUFDLE1BQTdFO0FBQUEsa0NBQ0U7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUscUVBQUMsV0FBRDtBQUFBLGdDQUNJO0FBQUksZUFBSyxFQUFFO0FBQUNKLHdCQUFZLEVBQUM7QUFBZCxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsS0FBRDtBQUFPLGtCQUFRLEVBQUUsa0JBQUNiLEtBQUQ7QUFBQSxtQkFBU0QsYUFBYSxDQUFDQyxLQUFELEVBQU8sRUFBUCxFQUFVLE9BQVYsQ0FBdEI7QUFBQSxXQUFqQjtBQUEyRCxxQkFBVyxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFjRSxxRUFBQyxXQUFEO0FBQUEsZ0NBQ0E7QUFBSSxlQUFLLEVBQUU7QUFBQ2Esd0JBQVksRUFBQztBQUFkLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFSSxxRUFBQyxLQUFEO0FBQU8sZUFBSyxFQUFFO0FBQUNFLG1CQUFPLEVBQUM7QUFBVCxXQUFkO0FBQWdDLGVBQUssRUFBQyxZQUF0QztBQUFtRCxjQUFJLEVBQUMsTUFBeEQ7QUFBZ0UsbUJBQVMsRUFBRSxtQkFBQ2YsS0FBRDtBQUFBLG1CQUFTRCxhQUFhLENBQUNDLEtBQUQsRUFBTyxFQUFQLEVBQVUsT0FBVixDQUF0QjtBQUFBLFdBQTNFO0FBQXFILHFCQUFXLEVBQUM7QUFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQXNCSSxxRUFBQyxXQUFEO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUU7QUFBQ2Esc0JBQVksRUFBQztBQUFkLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVJO0FBQVksZ0JBQVEsRUFBRSxrQkFBQ2IsS0FBRDtBQUFBLGlCQUFTRCxhQUFhLENBQUNDLEtBQUQsRUFBTyxFQUFQLEVBQVUsVUFBVixDQUF0QjtBQUFBLFNBQXRCO0FBQW1FLGFBQUssRUFBRTtBQUFDZSxpQkFBTyxFQUFDLE1BQVQ7QUFBZ0JFLGlCQUFPLEVBQUMsTUFBeEI7QUFBK0JMLGlCQUFPLEVBQUMsT0FBdkM7QUFBK0NJLGdCQUFNLEVBQUM7QUFBdEQsU0FBMUU7QUFBeUksWUFBSSxFQUFDLEdBQTlJO0FBQWtKLFlBQUksRUFBQyxJQUF2SjtBQUE0SixtQkFBVyxFQUFDO0FBQXhLO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkosZUEwQkkscUVBQUMsU0FBRDtBQUFBLGlCQUVNakMsWUFBWSxnQkFDUixxRUFBQyxHQUFEO0FBQ0UsY0FBTSxFQUNGO0FBQ0VtQyxxQkFBVyxFQUFFLHFCQURmLENBRUU7O0FBRkYsU0FGTjtBQU9FLGNBQU0sRUFBRy9CLGFBUFg7QUFRRSxnQkFBUSxFQUFFLGtCQUFDYSxLQUFELEVBQU9DLE1BQVA7QUFBQSxpQkFBZ0JGLGFBQWEsQ0FBQ0MsS0FBRCxFQUFPQyxNQUFQLEVBQWMsU0FBZCxDQUE3QjtBQUFBLFNBUlo7QUFTRSxZQUFJLEVBQUVQLFdBQVcsQ0FBQyxTQUFEO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFhUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZWLGVBa0JFO0FBQUssYUFBSyxFQUFFO0FBQUN5QixtQkFBUyxFQUFDO0FBQVgsU0FBWjtBQUFBLCtCQUNFLHFFQUFDLDBFQUFEO0FBQVEsaUJBQU8sRUFBRVgsVUFBakI7QUFBNkIsbUJBQVMsRUFBQyxLQUF2QztBQUE2QyxlQUFLLEVBQUMsT0FBbkQ7QUFBMkQsbUJBQVMsRUFBQyxTQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKLEVBZ0RHWSx3REFBVyxDQUFDMUIsV0FBVyxDQUFDLFNBQUQsQ0FBWixDQWhEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ESDs7R0F2RnVCZixROztNQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QuM2Q2OTQyMzczMWY3ZmQ4MDc1NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7cHJvZHVjZXJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtCdXR0b24sR2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSFRNTHBhcnNlcix7cGFyc2V9IGZyb20gXCJub2RlLWh0bWwtcGFyc2VyXCJcclxuaW1wb3J0IFJlYWN0cGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBDa2Vob2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcclxucGFkZGluZzoyMHB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbmBcclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjhweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFBvc3RkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEyMDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbm1hcmdpbjoyMHB4IGF1dG87XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RWRpdG9yICgpIHtcclxuICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbIGVkaXRvckxvYWRlZCwgc2V0RWRpdG9yTG9hZGVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKVxyXG4gICAgY29uc3QgeyBDS0UsIENsYXNzaWNFZGl0b3IgfSA9IGVkaXRvclJlZi5jdXJyZW50IHx8IHt9XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbnRlbnRwYXJ0LHNldGNvbnRlbnRwYXJ0XT11c2VTdGF0ZSh7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIixcclxuICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgc3VidGl0bGU6XCJcIixcclxuICAgICAgY2F0YWdvcmllczpcIlwiLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7Q0tFZGl0b3J9PXJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JyApXHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIENLRTogQ0tFZGl0b3IsXHJcbiAgICAgICAgICAgIENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnIClcclxuICAgICAgICB9XHJcbiAgICAgIHNldEVkaXRvckxvYWRlZCh0cnVlKVxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShldmVudCxlZGl0w7ZyLHZhbHVlKT0+e1xyXG4gICAgICAgY29uc3QgbXV0ZXRlZD17Li4uY29udGVudHBhcnR9O1xyXG4gICAgICAgbXV0ZXRlZFt2YWx1ZV09dmFsdWUgPT0gXCJjb250ZW50XCIgPyBlZGl0w7ZyLmdldERhdGEoKSA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIHNldGNvbnRlbnRwYXJ0KG11dGV0ZWQpO1xyXG4gICAgICAgY29uc29sZS5sb2cobXV0ZXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0cG9zdD0oKT0+e1xyXG4gICAgICAgcHJvZHVjZXJlcSh7XHJcbiAgICAgICAgIGNvbnRlbnRkYXRhOmNvbnRlbnQsXHJcbiAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvciwgIFxyXG4gICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vYW5hIGJhxZ9sxLFrIGvEsXNhIHR1dHVsYWNhay5cclxuICAgIC8vYWx0IGJhxZ9sxLFrIGRhaGEgdXp1biB0dXRsYWJpbGlyLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvc3RkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwifX0+WWF6xLEgVMO8csO8PC9oND5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixwYWRkaW5nOlwiOHB4XCIsYm9yZGVyOlwibm9uZVwiLG91dGxpbmU6XCJub25lXCJ9fSBpZD1cImNhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcGVsXCI+T3BlbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5CYcWfbMSxazwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInRpdGxlXCIpfSBwbGFjZWhvbGRlcj1cIkJhxZ9sxLFrLi4uXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5UYWhtaW5pIFlhecSxbmxhbm1hIFPDvHJlc2k8L2g0PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7cGFkZGluZzpcIjVweFwifX0gIHZhbHVlPVwiMjAxMy0wMS0wOFwiIHR5cGU9XCJkYXRlXCIgIHNvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5BbHQgQmHFn2zEsWs8L2g0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSAgIG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJzdWJ0aXRsZVwiKX0gc3R5bGU9e3twYWRkaW5nOlwiMTBweFwiLG91dGxpbmU6XCJub25lXCIsZGlzcGxheTpcImJsb2NrXCIsYm9yZGVyOlwibm9uZVwifX0gcm93cz1cIjhcIiBjb2xzPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkFsdCBCYcWfbMSxay4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPENrZWhvbGRlciA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVkaXRvckxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Q0tFIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQbGFjZWhvbGRlciB0ZXh0Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rvb2xiYXI6WydoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnLCAnYmxvY2tRdW90ZScsICdsaW5rJywgJ251bWJlcmVkTGlzdCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdG9yPXsgQ2xhc3NpY0VkaXRvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LGVkaXTDtnIpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LGVkaXTDtnIsXCJjb250ZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17U3VibWl0cG9zdH0gYmFja2NvbG9yPVwicmVkXCIgY29sb3I9XCJ3aGl0ZVwiIGhvdmVyYmFjaz1cIiNBNDFEMzFcIj5TdWJtaXQgUG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICB7UmVhY3RwYXJzZXIoY29udGVudHBhcnRbXCJjb250ZW50XCJdKX1cclxuICAgICAgPC9Qb3N0ZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=