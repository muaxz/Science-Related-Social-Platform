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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Ba\u015Fl\u0131k"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        onChange: function onChange(event) {
          return changehandler(event, "", "title");
        },
        placeholder: "Ba\u015Fl\u0131k..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputHolder, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Alt Ba\u015Fl\u0131k"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
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
        lineNumber: 80,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
        lineNumber: 85,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Editor loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
          lineNumber: 101,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }, this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwiY3VycmVudCIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlN1Ym1pdHBvc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJwYWRkaW5nIiwib3V0bGluZSIsImRpc3BsYXkiLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGdDQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxXQUFXLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO01BQU1DLFc7QUFNTixJQUFNQyxLQUFLLEdBQUNILHlEQUFNLENBQUNJLEtBQVI7QUFBQTtBQUFBO0FBQUEsd0RBQVg7TUFBTUQsSztBQVFOLElBQU1FLE9BQU8sR0FBQ0wseURBQU0sQ0FBQ0Ms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QUFDLElBQXZKO0FBQTRKLG1CQUFXLEVBQUM7QUFBeEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBV0kscUVBQUMsU0FBRDtBQUFBLGlCQUVNaEMsWUFBWSxnQkFDUixxRUFBQyxHQUFEO0FBQ0UsY0FBTSxFQUNGO0FBQ0VpQyxxQkFBVyxFQUFFLHFCQURmLENBRUU7O0FBRkYsU0FGTjtBQU9FLGNBQU0sRUFBRzdCLGFBUFg7QUFRRSxnQkFBUSxFQUFFLGtCQUFDYSxLQUFELEVBQU9DLE1BQVA7QUFBQSxpQkFBZ0JGLGFBQWEsQ0FBQ0MsS0FBRCxFQUFPQyxNQUFQLEVBQWMsU0FBZCxDQUE3QjtBQUFBLFNBUlo7QUFTRSxZQUFJLEVBQUVQLFdBQVcsQ0FBQyxTQUFEO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFhUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZWLGVBa0JFO0FBQUssYUFBSyxFQUFFO0FBQUN1QixtQkFBUyxFQUFDO0FBQVgsU0FBWjtBQUFBLCtCQUNFLHFFQUFDLDBFQUFEO0FBQVEsaUJBQU8sRUFBRVQsVUFBakI7QUFBNkIsbUJBQVMsRUFBQyxLQUF2QztBQUE2QyxlQUFLLEVBQUMsT0FBbkQ7QUFBMkQsbUJBQVMsRUFBQyxTQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0g7O0dBeEV1QjdCLFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC5jNWIzNmFiYjg3ODY1MGQyNDhlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtwcm9kdWNlcmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge0J1dHRvbixHbG9iYWx9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBIVE1McGFyc2VyLHtwYXJzZX0gZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIlxyXG5pbXBvcnQgUmVhY3RwYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IENrZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0SG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xyXG5wYWRkaW5nOjIwcHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYFxyXG5jb25zdCBJbnB1dD1zdHlsZWQuaW5wdXRgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6OHB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5gXHJcblxyXG5cclxuY29uc3QgUG9zdGRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTIwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxubWFyZ2luOjIwcHggYXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlFZGl0b3IgKCkge1xyXG4gICAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFsgZWRpdG9yTG9hZGVkLCBzZXRFZGl0b3JMb2FkZWQgXSA9IHVzZVN0YXRlKCBmYWxzZSApXHJcbiAgICBjb25zdCB7IENLRSwgQ2xhc3NpY0VkaXRvciB9ID0gZWRpdG9yUmVmLmN1cnJlbnQgfHwge31cclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29udGVudHBhcnQsc2V0Y29udGVudHBhcnRdPXVzZVN0YXRlKHtcclxuICAgICAgY29udGVudDpcIlwiLFxyXG4gICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICBzdWJ0aXRsZTpcIlwiLFxyXG4gICAgICBjYXRhZ29yaWVzOlwiXCIsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtDS0VkaXRvcn09cmVxdWlyZSggJ0Bja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QnIClcclxuICAgICAgICBlZGl0b3JSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgQ0tFOiBDS0VkaXRvcixcclxuICAgICAgICAgICAgQ2xhc3NpY0VkaXRvcjogcmVxdWlyZSggJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycgKVxyXG4gICAgICAgIH1cclxuICAgICAgc2V0RWRpdG9yTG9hZGVkKHRydWUpXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIGNvbnN0IGNoYW5nZWhhbmRsZXI9KGV2ZW50LGVkaXTDtnIsdmFsdWUpPT57XHJcbiAgICAgICBjb25zdCBtdXRldGVkPXsuLi5jb250ZW50cGFydH07XHJcbiAgICAgICBtdXRldGVkW3ZhbHVlXT12YWx1ZSA9PSBcImNvbnRlbnRcIiA/IGVkaXTDtnIuZ2V0RGF0YSgpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgc2V0Y29udGVudHBhcnQobXV0ZXRlZCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhtdXRldGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJtaXRwb3N0PSgpPT57XHJcbiAgICAgICBwcm9kdWNlcmVxKHtcclxuICAgICAgICAgY29udGVudGRhdGE6Y29udGVudCxcclxuICAgICAgICAgc2V0ZXJybXNnOnNldGVycm9yLCAgXHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9hbmEgYmHFn2zEsWsga8Sxc2EgdHV0dWxhY2FrLlxyXG4gICAgLy9hbHQgYmHFn2zEsWsgZGFoYSB1enVuIHR1dGxhYmlsaXIuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UG9zdGRpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxHbG9iYWw+PC9HbG9iYWw+XHJcbiAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QmHFn2zEsWs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJ0aXRsZVwiKX0gcGxhY2Vob2xkZXI9XCJCYcWfbMSxay4uLlwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFsdCBCYcWfbMSxazwvc3Bhbj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgICBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwic3VidGl0bGVcIil9IHN0eWxlPXt7cGFkZGluZzpcIjEwcHhcIixvdXRsaW5lOlwibm9uZVwiLGRpc3BsYXk6XCJibG9ja1wiLGJvcmRlcjpcIm5vbmVcIn19IHJvd3M9XCI4XCIgY29scz1cIjYwXCIgcGxhY2Vob2xkZXI9XCJBbHQgQmHFn2zEsWsuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgIDxDa2Vob2xkZXIgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JMb2FkZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENLRSBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGxhY2Vob2xkZXIgdGV4dC4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90b29sYmFyOlsnaGVhZGluZycsICd8JywgJ2JvbGQnLCAnaXRhbGljJywgJ2Jsb2NrUXVvdGUnLCAnbGluaycsICdudW1iZXJlZExpc3QnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCxlZGl0w7ZyKT0+Y2hhbmdlaGFuZGxlcihldmVudCxlZGl0w7ZyLFwiY29udGVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbnRwYXJ0W1wiY29udGVudFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RWRpdG9yIGxvYWRpbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1N1Ym1pdHBvc3R9IGJhY2tjb2xvcj1cInJlZFwiIGNvbG9yPVwid2hpdGVcIiBob3ZlcmJhY2s9XCIjQTQxRDMxXCI+U3VibWl0IFBvc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Da2Vob2xkZXI+XHJcbiAgICAgIFxyXG4gICAgICA8L1Bvc3RkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==