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
          children: "Ba\u015Fl\u0131k"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          onChange: function onChange(event) {
            return changehandler(event, "", "title");
          },
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
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
          children: "Tahmini Yay\u0131nlanma S\xFCresi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          value: "12-08-2000",
          type: "date",
          onChange: function onChange(event) {
            return changehandler(event, "", "title");
          },
          placeholder: "Ba\u015Fl\u0131k..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
        lineNumber: 85,
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
        lineNumber: 86,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
        lineNumber: 91,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Editor loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
          lineNumber: 107,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNrZWhvbGRlciIsInN0eWxlZCIsImRpdiIsIklucHV0SG9sZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlBvc3RkaXYiLCJNeUVkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZWRpdG9yTG9hZGVkIiwic2V0RWRpdG9yTG9hZGVkIiwiY3VycmVudCIsIkNLRSIsIkNsYXNzaWNFZGl0b3IiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjYXRhZ29yaWVzIiwiY29udGVudHBhcnQiLCJzZXRjb250ZW50cGFydCIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDS0VkaXRvciIsImNoYW5nZWhhbmRsZXIiLCJldmVudCIsImVkaXTDtnIiLCJ2YWx1ZSIsIm11dGV0ZWQiLCJnZXREYXRhIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlN1Ym1pdHBvc3QiLCJwcm9kdWNlcmVxIiwiY29udGVudGRhdGEiLCJzZXRlcnJtc2ciLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsIm91dGxpbmUiLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsIm1hcmdpblRvcCIsIlJlYWN0cGFyc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsZ0NBQWY7S0FBTUYsUztBQUtOLElBQU1HLFdBQVcsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpRkFBakI7TUFBTUMsVztBQU1OLElBQU1DLEtBQUssR0FBQ0gseURBQU0sQ0FBQ0ksS0FBUjtBQUFBO0FBQUE7QUFBQSx3REFBWDtNQUFNRCxLO0FBUU4s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QUE7QUFBQTtBQUFBLGNBRFEsZ0JBYVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmVixlQWtCRTtBQUFLLGFBQUssRUFBRTtBQUFDd0IsbUJBQVMsRUFBQztBQUFYLFNBQVo7QUFBQSwrQkFDRSxxRUFBQywwRUFBRDtBQUFRLGlCQUFPLEVBQUVWLFVBQWpCO0FBQTZCLG1CQUFTLEVBQUMsS0FBdkM7QUFBNkMsZUFBSyxFQUFDLE9BQW5EO0FBQTJELG1CQUFTLEVBQUMsU0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixFQXVDR1csd0RBQVcsQ0FBQ3pCLFdBQVcsQ0FBQyxTQUFELENBQVosQ0F2Q2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0g7O0dBOUV1QmYsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0LjJlYjc0Y2MzMWZiMThiZGYyYzIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3Byb2R1Y2VyZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7QnV0dG9uLEdsb2JhbH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IEhUTUxwYXJzZXIse3BhcnNlfSBmcm9tIFwibm9kZS1odG1sLXBhcnNlclwiXHJcbmltcG9ydCBSZWFjdHBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ2tlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSW5wdXRIb2xkZXI9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmc6MjBweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5gXHJcbmNvbnN0IElucHV0PXN0eWxlZC5pbnB1dGBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzo4cHg7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0ZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMjAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xyXG5tYXJnaW46MjBweCBhdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUVkaXRvciAoKSB7XHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgWyBlZGl0b3JMb2FkZWQsIHNldEVkaXRvckxvYWRlZCBdID0gdXNlU3RhdGUoIGZhbHNlIClcclxuICAgIGNvbnN0IHsgQ0tFLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fVxyXG4gICAgY29uc3RbZXJyb3Jtc2csc2V0ZXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb250ZW50cGFydCxzZXRjb250ZW50cGFydF09dXNlU3RhdGUoe1xyXG4gICAgICBjb250ZW50OlwiXCIsXHJcbiAgICAgIHRpdGxlOlwiXCIsXHJcbiAgICAgIHN1YnRpdGxlOlwiXCIsXHJcbiAgICAgIGNhdGFnb3JpZXM6XCJcIixcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qge0NLRWRpdG9yfT1yZXF1aXJlKCAnQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdCcgKVxyXG4gICAgICAgIGVkaXRvclJlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBDS0U6IENLRWRpdG9yLFxyXG4gICAgICAgICAgICBDbGFzc2ljRWRpdG9yOiByZXF1aXJlKCAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJyApXHJcbiAgICAgICAgfVxyXG4gICAgICBzZXRFZGl0b3JMb2FkZWQodHJ1ZSlcclxuICAgIH0sIFtdKVxyXG4gIFxyXG4gICAgY29uc3QgY2hhbmdlaGFuZGxlcj0oZXZlbnQsZWRpdMO2cix2YWx1ZSk9PntcclxuICAgICAgIGNvbnN0IG11dGV0ZWQ9ey4uLmNvbnRlbnRwYXJ0fTtcclxuICAgICAgIG11dGV0ZWRbdmFsdWVdPXZhbHVlID09IFwiY29udGVudFwiID8gZWRpdMO2ci5nZXREYXRhKCkgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICBzZXRjb250ZW50cGFydChtdXRldGVkKTtcclxuICAgICAgIGNvbnNvbGUubG9nKG11dGV0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFN1Ym1pdHBvc3Q9KCk9PntcclxuICAgICAgIHByb2R1Y2VyZXEoe1xyXG4gICAgICAgICBjb250ZW50ZGF0YTpjb250ZW50LFxyXG4gICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsICBcclxuICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL2FuYSBiYcWfbMSxayBrxLFzYSB0dXR1bGFjYWsuXHJcbiAgICAvL2FsdCBiYcWfbMSxayBkYWhhIHV6dW4gdHV0bGFiaWxpci5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3N0ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdsb2JhbD48L0dsb2JhbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XHJcbiAgICAgICAgICAgIDxJbnB1dEhvbGRlcj5cclxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19PkJhxZ9sxLFrPC9oND5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19PlRhaG1pbmkgWWF5xLFubGFubWEgU8O8cmVzaTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9XCIxMi0wOC0yMDAwXCIgdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17KGV2ZW50KT0+Y2hhbmdlaGFuZGxlcihldmVudCxcIlwiLFwidGl0bGVcIil9IHBsYWNlaG9sZGVyPVwiQmHFn2zEsWsuLi5cIj48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRIb2xkZXI+XHJcbiAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5BbHQgQmHFn2zEsWs8L2g0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSAgIG9uQ2hhbmdlPXsoZXZlbnQpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LFwiXCIsXCJzdWJ0aXRsZVwiKX0gc3R5bGU9e3twYWRkaW5nOlwiMTBweFwiLG91dGxpbmU6XCJub25lXCIsZGlzcGxheTpcImJsb2NrXCIsYm9yZGVyOlwibm9uZVwifX0gcm93cz1cIjhcIiBjb2xzPVwiNjBcIiBwbGFjZWhvbGRlcj1cIkFsdCBCYcWfbMSxay4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L0lucHV0SG9sZGVyPlxyXG4gICAgICAgICAgPENrZWhvbGRlciA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVkaXRvckxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Q0tFIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQbGFjZWhvbGRlciB0ZXh0Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rvb2xiYXI6WydoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnLCAnYmxvY2tRdW90ZScsICdsaW5rJywgJ251bWJlcmVkTGlzdCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdG9yPXsgQ2xhc3NpY0VkaXRvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LGVkaXTDtnIpPT5jaGFuZ2VoYW5kbGVyKGV2ZW50LGVkaXTDtnIsXCJjb250ZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29udGVudHBhcnRbXCJjb250ZW50XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17U3VibWl0cG9zdH0gYmFja2NvbG9yPVwicmVkXCIgY29sb3I9XCJ3aGl0ZVwiIGhvdmVyYmFjaz1cIiNBNDFEMzFcIj5TdWJtaXQgUG9zdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NrZWhvbGRlcj5cclxuICAgICAgICB7UmVhY3RwYXJzZXIoY29udGVudHBhcnRbXCJjb250ZW50XCJdKX1cclxuICAgICAgPC9Qb3N0ZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=