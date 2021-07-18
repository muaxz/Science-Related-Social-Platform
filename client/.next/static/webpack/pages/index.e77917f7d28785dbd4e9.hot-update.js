webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pages/Main/Leaderboard */ "./components/pages/Main/Leaderboard.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();













var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
var Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;"]);
_c = Flexdiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-1"
})([""]);
_c2 = ContentDiv;
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:3001");
function Home(_ref) {
  _s();

  var _this = this;

  var mydata = _ref.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      bottom = _useScroll.bottom;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(mydata)),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      errormsg = _useState3[0],
      seterror = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      activelike = _useState4[0],
      setactivelike = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      list = _useState5[0],
      _setlist = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      stoprequesting = _useState6[0],
      setstopreq = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      spinner = _useState7[0],
      setspinner = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        seterrmsg: seterror,
        setstopreq: setstopreq
      });
    }
  }, [order]);

  var sendiorequest = function sendiorequest() {
    socket.emit("message", "");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (bottom) setorder(mydata.length + 10);
  }, [bottom]);

  var createrelation = function createrelation(postId, attribute, typeofrelation) {
    console.log(attribute, postId);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        paddingLeft: "115px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: sendiorequest,
        children: "\u0130O REQUEST"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        },
        children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 35
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function setlist() {
          return _setlist([]);
        },
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            padding: "10px",
            maxWidth: "650px",
            height: "".concat(list.length > 0 ? "100vh" : "100%"),
            overflow: "hidden"
          },
          children: contentdata.length && contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
              postId: item.id,
              content: item.content,
              createrelationforsmh: createrelation,
              showwindow: function showwindow(stateoflist) {
                return _setlist(stateoflist);
              },
              like: item.Like //bu bir obje array
              ,
              retweet: item.Retweet,
              comment: item.allcomments,
              readlater: item.Readlater,
              //key numarası
              profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
              title: item.title,
              titleimage: "yaprak.jpg",
              username: item.personal !== null ? item.personal.firstname : "notyet",
              usersurname: item.personal !== null ? item.personal.lastname : "notyet" //bir obje props
              ,
              userid: item.personal !== null ? item.personal.id : "notyet",
              subtitle: item.subtitle,
              date: item.createdAt
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}
/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/

_s(Home, "GmLp+f3g4bjpM6N1dkp7wdXKSvw=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"]];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "ContentDiv");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiQ29udGVudERpdiIsInNvY2tldCIsImlvIiwiSG9tZSIsIm15ZGF0YSIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlU3RhdGUiLCJjb250ZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRvcmRlciIsImVycm9ybXNnIiwic2V0ZXJyb3IiLCJhY3RpdmVsaWtlIiwic2V0YWN0aXZlbGlrZSIsImxpc3QiLCJzZXRsaXN0Iiwic3RvcHJlcXVlc3RpbmciLCJzZXRzdG9wcmVxIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRlcnJtc2ciLCJzZW5kaW9yZXF1ZXN0IiwiZW1pdCIsImxlbmd0aCIsImNyZWF0ZXJlbGF0aW9uIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJVc2VySWQiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJwYWRkaW5nTGVmdCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXhXaWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJjb250ZW50Iiwic3RhdGVvZmxpc3QiLCJMaWtlIiwiUmV0d2VldCIsImFsbGNvbW1lbnRzIiwiUmVhZGxhdGVyIiwidGl0bGUiLCJwZXJzb25hbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGlu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QUEsVUFESjtBQW1ESDtBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E1SXdCakQsSTtVQUVMRSxzRDs7O01BRktGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc3OTE3ZjdkMjg3ODVkYmQ0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hvbWVyZXEsQ3JlYXRlcmVsYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLElucHV0TGFiZWwsU2VsZWN0LE1lbnVJdGVtLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9MZWFkZXJib2FyZCc7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcblxyXG5jb25zdCBzb2NrZXQ9aW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVsaWtlLHNldGFjdGl2ZWxpa2VdPXVzZVN0YXRlKClcclxuICAgIGNvbnN0W2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgXHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcblxyXG4gICAgICAgIGlmKCFzdG9wcmVxdWVzdGluZyAmJiBib3R0b20pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgSG9tZXJlcSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldGNvbnRlbnRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6b3JkZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzZXRzdG9wcmVxOnNldHN0b3ByZXEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtvcmRlcl0pXHJcbiAgICBcclxuICAgIGNvbnN0IHNlbmRpb3JlcXVlc3Q9KCk9PntcclxuICAgICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIixcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBpZihib3R0b20pXHJcbiAgICAgICAgc2V0b3JkZXIobXlkYXRhLmxlbmd0aCsxMCk7XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVyZWxhdGlvbj0ocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbik9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUscG9zdElkKVxyXG5cclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCIxMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRpb3JlcXVlc3R9PsSwTyBSRVFVRVNUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyID8gPFNwaW5uZXI+PC9TcGlubmVyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgbGlzdC5sZW5ndGggPiAwID9cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTaG93Zm9sbG93ZXIgc2V0bGlzdD17KCk9PnNldGxpc3QoW10pfSBsaXN0PXtsaXN0fT48L1Nob3dmb2xsb3dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZsZXhkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnREaXYgc3R5bGU9e3twYWRkaW5nOlwiMTBweFwiLG1heFdpZHRoOlwiNjUwcHhcIixoZWlnaHQ6YCR7bGlzdC5sZW5ndGggPiAwID8gXCIxMDB2aFwiIDogXCIxMDAlXCJ9YCxvdmVyZmxvdzpcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubGVuZ3RoICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaD17Y3JlYXRlcmVsYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93d2luZG93PXsoc3RhdGVvZmxpc3QpPT5zZXRsaXN0KHN0YXRlb2ZsaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0uTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGxhdGVyPXtpdGVtLlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcInlhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQ9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmlkOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExlYWRlcmJvYXJkPjwvTGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhkaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4vKjxTZWN0aW9ucGFydD5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCIsbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+R8O2bmRlcmkgVMO8csO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXt1c2VzdHlsZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZlbHNlZmVcIj5GZWxzZWZlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVGFyaWhcIj5UYXJpaDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJCaXlvbG9qaVwiPlRhcmloPC9NZW51SXRlbT4gICBcclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cclxuICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgPElucHV0TGFiZWw+U8SxcmFsYW1hIMOWbMOnw7x0w7w8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTGlrZVwiPkJlxJ9lbmkgU2F5xLFzxLE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEYXRlXCI+WcO8a2xlbm1lIFRhcmloaTwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXR3ZWV0XCI+UmV0d2VldCBTYXnEsXPEsTwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCJ9fT5cclxuICAgIDxCdXR0b24gZW5kSWNvbj17PFNlYXJoSWNvbj48L1NlYXJoSWNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPkFyYTwvQnV0dG9uPlxyXG48L2Rpdj5cclxuPC9TZWN0aW9ucGFydD5cclxuKi8iXSwic291cmNlUm9vdCI6IiJ9