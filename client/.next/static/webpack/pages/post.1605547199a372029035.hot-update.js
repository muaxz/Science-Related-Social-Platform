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
})(["max-width:800px;background-color:lightgrey;margin:20px auto;"]);
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
          display: "block"
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
    }, this), react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(contentpart["content"]), ";"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwiY3VycmVudCIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlN1Ym1pdHBvc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJwYWRkaW5nIiwib3V0bGluZSIsImRpc3BsYXkiLCJwbGFjZWhvbGRlciIsIm1hcmdpblRvcCIsIlJlYWN0cGFyc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0NBQWY7S0FBTUYsUztBQUtOLElBQU1HLFdBQVcsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpRkFBakI7TUFBTUMsVztBQU1OLElBQU1DLEtBQUssR0FBQ0gseURBQU0sQ0FBQ0ksS0FBUjtBQUFBO0FBQUE7QUFBQSx3REFBWDtNQUFNRCxLO0FBUU4sSUFBTUUsT0FBTyxHQUFDTCx5REFBTSxD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QVcsRUFBQztBQUExSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFXSSxxRUFBQyxTQUFEO0FBQUEsaUJBRU0vQixZQUFZLGdCQUNSLHFFQUFDLEdBQUQ7QUFDRSxjQUFNLEVBQ0Y7QUFDRWdDLHFCQUFXLEVBQUUscUJBRGYsQ0FFRTs7QUFGRixTQUZOO0FBT0UsY0FBTSxFQUFHNUIsYUFQWDtBQVFFLGdCQUFRLEVBQUUsa0JBQUNhLEtBQUQsRUFBT0MsTUFBUDtBQUFBLGlCQUFnQkYsYUFBYSxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBYyxTQUFkLENBQTdCO0FBQUEsU0FSWjtBQVNFLFlBQUksRUFBRVAsV0FBVyxDQUFDLFNBQUQ7QUFUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURRLGdCQWFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZlYsZUFrQkU7QUFBSyxhQUFLLEVBQUU7QUFBQ3NCLG1CQUFTLEVBQUM7QUFBWCxTQUFaO0FBQUEsK0JBQ0UscUVBQUMsMEVBQUQ7QUFBUSxpQkFBTyxFQUFFUixVQUFqQjtBQUE2QixtQkFBUyxFQUFDLEtBQXZDO0FBQTZDLGVBQUssRUFBQyxPQUFuRDtBQUEyRCxtQkFBUyxFQUFDLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixFQWlDR1Msd0RBQVcsQ0FBQ3ZCLFdBQVcsQ0FBQyxTQUFELENBQVosQ0FqQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0g7O0dBeEV1QmYsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0LjE2MDU1NDcxOTlhMzcyMDI5MDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3Byb2R1Y2VyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7QnV0dG9uLEdsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IEhUTUxwYXJzZXIse3BhcnNlfSBmcm9tIFwibm9kZS1odG1sLXBhcnNlclwiXHJcbmltcG9ydCBSZWFjdHBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ2tlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6MjBweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzo4cHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0ZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDo4MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbm1hcmdpbjoyMHB4IGF1dG87XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RWRpdG9yICgpIHtcclxuICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbIGVkaXRvckxvYWRlZCwgc2V0RWRpdG9yTG9hZGVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKVxyXG4gICAgY29uc3QgeyBDS0UsIENsYXNzaWNFZGl0b3IgfSA9IGVkaXRvclJlZi5jdXJyZW50IHx8IHt9XHJcbiAgICBjb25zdFtlcnJvcm1zZyxzZXRlcnJvcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbnRlbnRwYXJ0LHNldGNvbnRlbnRwYXJ0XT11c2VTdGF0ZSh7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIixcclxuICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgc3VidGl0bGU6XCJcIixcclxuICAgICAgY2F0YWdvcmllczpcIlwiLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7Q0tFZGl0b3J9PXJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JyApXHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIENLRTogQ0tFZGl0b3IsXHJcbiAgICAgICAgICAgIENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnIClcclxuICAgICAgICB9XHJcbiAgICAgIHNldEVkaXRvckxvYWRlZCh0cnVlKVxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICBjb25zdCBjaGFuZ2VoYW5kbGVyPShldmVudCxlZGl0w7ZyLHZhbHVlKT0+e1xyXG4gICAgICAgY29uc3QgbXV0ZXRlZD17Li4uY29udGVudHBhcnR9O1xyXG4gICAgICAgbXV0ZXRlZFt2YWx1ZV09dmFsdWUgPT0gXCJjb250ZW50XCIgPyBlZGl0w7ZyLmdldERhdGEoKSA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIHNldGNvbnRlbnRwYXJ0KG11dGV0ZWQpO1xyXG4gICAgICAgY29uc29sZS5sb2cobXV0ZXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3VibWl0cG9zdD0oKT0+e1xyXG4gICAgICAgcHJvZHVjZXJlcSh7XHJcbiAgICAgICAgIGNvbnRlbnRkYXRhOmNvbnRlbnQsXHJcbiAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvciwgIFxyXG4gICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vYW5hIGJhxZ9sxLFrIGvEsXNhIHR1dHVsYWNhay5cclxuICAgIC8vYWx0IGJhxZ9sxLFrIGRhaGEgdXp1biB0dXRsYWJpbGlyLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvc3RkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8R2xvYmFsPjwvR2xvYmFsPlxyXG4gICAgICAgICAgPElucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkJhxZ9sxLFrPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbHQgQmHFn2zEsWs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhICAgb25DaGFuZ2U9eyhldmVudCk9PmNoYW5nZWhhbmRsZXIoZXZlbnQsXCJcIixcInN1YnRpdGxlXCIpfSBzdHlsZT17e3BhZGRpbmc6XCIxMHB4XCIsb3V0bGluZTpcIm5vbmVcIixkaXNwbGF5OlwiYmxvY2tcIn19IHJvd3M9XCI4XCIgY29scz1cIjYwXCIgcGxhY2Vob2xkZXI9XCJBbHQgQmHFn2zEsWsuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9JbnB1dEhvbGRlcj5cclxuICAgICAgICAgIDxDa2Vob2xkZXIgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JMb2FkZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENLRSBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGxhY2Vob2xkZXIgdGV4dC4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90b29sYmFyOlsnaGVhZGluZycsICd8JywgJ2JvbGQnLCAnaXRhbGljJywgJ2Jsb2NrUXVvdGUnLCAnbGluaycsICdudW1iZXJlZExpc3QnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCxlZGl0w7ZyKT0+Y2hhbmdlaGFuZGxlcihldmVudCxlZGl0w7ZyLFwiY29udGVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbnRlbnRwYXJ0W1wiY29udGVudFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RWRpdG9yIGxvYWRpbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1N1Ym1pdHBvc3R9IGJhY2tjb2xvcj1cInJlZFwiIGNvbG9yPVwid2hpdGVcIiBob3ZlcmJhY2s9XCIjQTQxRDMxXCI+U3VibWl0IFBvc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Da2Vob2xkZXI+XHJcbiAgICAgICAge1JlYWN0cGFyc2VyKGNvbnRlbnRwYXJ0W1wiY29udGVudFwiXSl9O1xyXG4gICAgICA8L1Bvc3RkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==