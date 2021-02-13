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
})(["width:100%;padding:8px;outline:none;border:none;border:1px solid black;"]);
_c3 = Input;
var Postdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Postdiv",
  componentId: "sah6n7-3"
})(["max-width:800px;background-color:lightgrey;border:1px solid black;margin:20px auto;"]);
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
      lineNumber: 75,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Ba\u015Fl\u0131k"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        onChange: function onChange(event) {
          return changehandler(event, "", "title");
        },
        placeholder: "Ba\u015Fl\u0131k..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Alt Ba\u015Fl\u0131k"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        onChange: function onChange(event) {
          return changehandler(event, "", "subtitle");
        },
        style: {
          padding: "10px",
          outline: "none"
        },
        rows: "8",
        cols: "60",
        placeholder: "Alt Ba\u015Fl\u0131k..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
        lineNumber: 87,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Editor loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
          lineNumber: 103,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }, this), react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(contentpart["content"]), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwiY3VycmVudCIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlN1Ym1pdHBvc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJwYWRkaW5nIiwib3V0bGluZSIsInBsYWNlaG9sZGVyIiwibWFyZ2luVG9wIiwiUmVhY3RwYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxnQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsV0FBVyxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlGQUFqQjtNQUFNQyxXO0FBTU4sSUFBTUMsS0FBSyxHQUFDSCx5REFBTSxDQUFDSSxLQUFSO0FBQUE7QUFBQTtBQUFBLCtFQUFYO01BQU1ELEs7QUFTTixJQUFNRSxPQUFPLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7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Y0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVdJLHFFQUFDLFNBQUQ7QUFBQSxpQkFFTTlCLFlBQVksZ0JBQ1IscUVBQUMsR0FBRDtBQUNFLGNBQU0sRUFDRjtBQUNFK0IscUJBQVcsRUFBRSxxQkFEZixDQUVFOztBQUZGLFNBRk47QUFPRSxjQUFNLEVBQUczQixhQVBYO0FBUUUsZ0JBQVEsRUFBRSxrQkFBQ2EsS0FBRCxFQUFPQyxNQUFQO0FBQUEsaUJBQWdCRixhQUFhLENBQUNDLEtBQUQsRUFBT0MsTUFBUCxFQUFjLFNBQWQsQ0FBN0I7QUFBQSxTQVJaO0FBU0UsWUFBSSxFQUFFUCxXQUFXLENBQUMsU0FBRDtBQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFEsZ0JBYVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmVixlQWtCRTtBQUFLLGFBQUssRUFBRTtBQUFDcUIsbUJBQVMsRUFBQztBQUFYLFNBQVo7QUFBQSwrQkFDRSxxRUFBQywwRUFBRDtBQUFRLGlCQUFPLEVBQUVQLFVBQWpCO0FBQTZCLG1CQUFTLEVBQUMsS0FBdkM7QUFBNkMsZUFBSyxFQUFDLE9BQW5EO0FBQTJELG1CQUFTLEVBQUMsU0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLEVBaUNHUSx3REFBVyxDQUFDdEIsV0FBVyxDQUFDLFNBQUQsQ0FBWixDQWpDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDSDs7R0F4RXVCZixROztNQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QuNGFkNjQxNmFlNzBhMTEyZTBlZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7cHJvZHVjZXJlcX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtCdXR0b24sR2xvYmFsfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgSFRNTHBhcnNlcix7cGFyc2V9IGZyb20gXCJub2RlLWh0bWwtcGFyc2VyXCJcclxuaW1wb3J0IFJlYWN0cGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBDa2Vob2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dEhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcclxucGFkZGluZzoyMHB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbmBcclxuY29uc3QgSW5wdXQ9c3R5bGVkLmlucHV0YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjhweDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuYFxyXG5cclxuXHJcbmNvbnN0IFBvc3RkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjgwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxuYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxubWFyZ2luOjIwcHggYXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlFZGl0b3IgKCkge1xyXG4gICAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFsgZWRpdG9yTG9hZGVkLCBzZXRFZGl0b3JMb2FkZWQgXSA9IHVzZVN0YXRlKCBmYWxzZSApXHJcbiAgICBjb25zdCB7IENLRSwgQ2xhc3NpY0VkaXRvciB9ID0gZWRpdG9yUmVmLmN1cnJlbnQgfHwge31cclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29udGVudHBhcnQsc2V0Y29udGVudHBhcnRdPXVzZVN0YXRlKHtcclxuICAgICAgY29udGVudDpcIlwiLFxyXG4gICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICBzdWJ0aXRsZTpcIlwiLFxyXG4gICAgICBjYXRhZ29yaWVzOlwiXCIsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtDS0VkaXRvcn09cmVxdWlyZSggJ0Bja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QnIClcclxuICAgICAgICBlZGl0b3JSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgQ0tFOiBDS0VkaXRvcixcclxuICAgICAgICAgICAgQ2xhc3NpY0VkaXRvcjogcmVxdWlyZSggJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycgKVxyXG4gICAgICAgIH1cclxuICAgICAgc2V0RWRpdG9yTG9hZGVkKHRydWUpXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGV2ZW50LGVkaXTDtnIsdmFsdWUpPT57XHJcbiAgICAgICBjb25zdCBtdXRldGVkPXsuLi5jb250ZW50cGFydH07XHJcbiAgICAgICBtdXRldGVkW3ZhbHVlXT12YWx1ZSA9PSBcImNvbnRlbnRcIiA/IGVkaXTDtnIuZ2V0RGF0YSgpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgc2V0Y29udGVudHBhcnQobXV0ZXRlZCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhtdXRldGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJtaXRwb3N0PSgpPT57XHJcbiAgICAgICBwcm9kdWNlcmVxKHtcclxuICAgICAgICAgY29udGVudGRhdGE6Y29udGVudCxcclxuICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLCAgXHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9hbmEgYmHFn2zEsWsga8Sxc2EgdHV0dWxhY2FrLlxyXG4gICAgLy9hbHQgYmHFn2zEsWsgZGFoYSB1enVuIHR1dGxhYmlsaXIuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UG9zdGRpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QmHFn2zEsWs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJ0aXRsZVwiKX0gcGxhY2Vob2xkZXI9XCJCYcWfbMSxay4uLlwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFsdCBCYcWfbMSxazwvc3Bhbj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgICBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwic3VidGl0bGVcIil9IHN0eWxlPXt7cGFkZGluZzpcIjEwcHhcIixvdXRsaW5lOlwibm9uZVwifX0gcm93cz1cIjhcIiBjb2xzPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkFsdCBCYcWfbMSxay4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPENrZWhvbGRlciA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVkaXRvckxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Q0tFIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQbGFjZWhvbGRlciB0ZXh0Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rvb2xiYXI6WydoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnLCAnYmxvY2tRdW90ZScsICdsaW5rJywgJ251bWJlcmVkTGlzdCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdG9yPXsgQ2xhc3NpY0VkaXRvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LGVkaXTDtnIpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LGVkaXTDtnIsXCJjb250ZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17U3VibWl0cG9zdH0gYmFja2NvbG9yPVwicmVkXCIgY29sb3I9XCJ3aGl0ZVwiIGhvdmVyYmFjaz1cIiNBNDFEMzFcIj5TdWJtaXQgUG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICB7UmVhY3RwYXJzZXIoY29udGVudHBhcnRbXCJjb250ZW50XCJdKX07XHJcbiAgICAgIDwvUG9zdGRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9