webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./containers/pages/Profile.js":
/*!*************************************!*\
  !*** ./containers/pages/Profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Exteriordiv",
  componentId: "sc-1uvdthm-0"
})(["max-width:1400px;width:100%;padding-bottom:20px;padding-left:60px;"]);
_c = Exteriordiv;
var Innerdiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Innerdiv",
  componentId: "sc-1uvdthm-1"
})(["height:100%;"]);
_c2 = Innerdiv;
var Imagesection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Imagesection",
  componentId: "sc-1uvdthm-2"
})(["position:relative;height:250px;position:relative;"]);
_c3 = Imagesection;
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__BackgroundImage",
  componentId: "sc-1uvdthm-3"
})(["width:100%;height:100%;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c4 = BackgroundImage;
var Contentpart = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Contentpart",
  componentId: "sc-1uvdthm-4"
})(["display:flex;padding-bottom:20px;"]);
_c5 = Contentpart;
var Usersection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Usersection",
  componentId: "sc-1uvdthm-5"
})(["position:sticky;top:250px;margin-top:80px;align-self:flex-start;max-width:400px;text-align:center;width:100%;"]);
_c6 = Usersection;
var Contentsection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Contentsection",
  componentId: "sc-1uvdthm-6"
})(["max-width:1000px;width:100%;"]);
_c7 = Contentsection;
var Optionbar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Optionbar",
  componentId: "sc-1uvdthm-7"
})(["display:flex;justify-content:space-around;margin:auto;max-width:500px;width:100%;padding:20px;"]);
_c8 = Optionbar;
var Options = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Options",
  componentId: "sc-1uvdthm-8"
})(["cursor:pointer;transition:all 0.1s;border-bottom:", ";"], function (_ref) {
  var applyborder = _ref.applyborder;
  return applyborder ? "2px solid #d62828" : "2px solid transparent";
});
_c9 = Options;
var ButtonHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__ButtonHolder",
  componentId: "sc-1uvdthm-9"
})(["display:flex;align-items:center;position:absolute;bottom:10px;right:10px;"]);
_c10 = ButtonHolder;
var Controller = true;
var number = 0;
function Profile(_ref2) {
  _s();

  var _this = this;

  var Mydata = _ref2.Mydata,
      query = _ref2.query;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Mydata.personal),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_objectSpread({}, Mydata)),
      profiledata = _useState3[0],
      setprofiledata = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      stoprequesting = _useState4[0],
      setstopreq = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinner = _useState5[0],
      setspinner = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      trial = _useState6[0],
      setrial = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      beingfollowed = _useState7[0],
      setbeingfollowed = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      notificationactive = _useState8[0],
      setnotificationactive = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Post: {
      name: "Gönderiler",
      bottom: false
    },
    Like: {
      name: "Beğeniler",
      bottom: false
    },
    Retweet: {
      name: "İşaretler",
      bottom: false
    }
  }),
      options = _useState9[0],
      setoptions = _useState9[1];

  console.log(number++);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (userdata.UserId == profiledata.id) {
      setrial(true);
    } else {
      if (userdata.UserId) {
        Mydata.Followed.forEach(function (item) {
          if (item.id == userdata.UserId) {
            setbeingfollowed(true); //zaten buraya girememiş ise default değer false
          }
        });
      }
    }
  }, [userdata]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setprofiledata(_objectSpread({}, Mydata));
    setcontentdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Mydata.personal));
  }, [query]);
  console.log(profiledata);

  var Followingrequest = function Followingrequest(checkfollowed) {
    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Createuserrelation"])({
        UserId: userdata.UserId,
        FollowedId: Mydata.id
      });
    }
  };

  var Handleoptions = function Handleoptions(optiontype) {
    var optionobj = _objectSpread({}, options);

    for (var key in optionobj) {
      optionobj[key].bottom = false;
    }

    optionobj[optiontype].bottom = true;
    setoptions(optionobj);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriordiv, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagesection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: [beingfollowed && notificationactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["NotificationsActive"], {
            style: {
              color: "white",
              marginRight: "10px",
              cursor: "pointer"
            },
            onClick: function onClick() {
              return setnotificationactive(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 30
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Notifications"], {
            style: {
              color: "white",
              marginRight: "10px",
              cursor: "pointer"
            },
            onClick: function onClick() {
              return setnotificationactive(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: function onClick() {
              return Followingrequest(beingfollowed);
            },
            style: {
              color: "white",
              textTransform: "none"
            },
            variant: "contained",
            color: "secondary",
            children: beingfollowed ? "Takipten Çık" : "Takip Et"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Usersection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__["Porfileimage"], {
            style: {
              position: "absolute",
              top: "-150px",
              left: "140px",
              border: "2px solid white"
            },
            width: "120px",
            height: "120px",
            profile: "/led.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#8B8B8B"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              marginTop: "10px",
              marginBottom: "40px",
              justifyContent: "space-around"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: trial ? "heyyo" : "null"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 22
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentsection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionbar, {
            children: Object.keys(options).map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                href: {
                  pathname: "/profile/".concat(Mydata.id),
                  query: {
                    name: "".concat(item)
                  }
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
                  applyborder: options[item].bottom,
                  onClick: function onClick() {
                    return Handleoptions(item);
                  },
                  children: options[item].name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingRight: "10px",
              paddingLeft: "10px",
              maxWidth: "700px",
              margin: "auto"
            },
            children: contentdata.map(function (item, index) {
              var _jsxDEV2;

              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_8__["default"], (_jsxDEV2 = {
                postId: item.id,
                content: item.content,
                showwindow: function showwindow(stateoflist) {
                  return setlist(stateoflist);
                },
                like: item.Like //bu bir obje array
                ,
                retweet: item.Retweet,
                comment: item.allcomments,
                readlater: item.Readlater,
                //key numarası
                profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
                title: item.title,
                titleimage: "/yaprak.jpg",
                username: "Duhan"
              }, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "like", []), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "retweet", []), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "comment", []), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "readlater", []), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "usersurname", "Öztürk"), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "subtitle", item.subtitle), Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "date", item.createdAt), _jsxDEV2), index, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 9
  }, this);
}

_s(Profile, "cXikQxtdjsCTGtBmDpfa3FUwkvU=");

_c11 = Profile;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Imagesection");
$RefreshReg$(_c4, "BackgroundImage");
$RefreshReg$(_c5, "Contentpart");
$RefreshReg$(_c6, "Usersection");
$RefreshReg$(_c7, "Contentsection");
$RefreshReg$(_c8, "Optionbar");
$RefreshReg$(_c9, "Options");
$RefreshReg$(_c10, "ButtonHolder");
$RefreshReg$(_c11, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJDb250cm9sbGVyIiwibnVtYmVyIiwiUHJvZmlsZSIsIk15ZGF0YSIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTdGF0ZSIsInBlcnNvbmFsIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwic3RvcHJlcXVlc3RpbmciLCJzZXRzdG9wcmVxIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJ0cmlhbCIsInNldHJpYWwiLCJiZWluZ2ZvbGxvd2VkIiwic2V0YmVpbmdmb2xsb3dlZCIsIm5vdGlmaWNhdGlvbmFjdGl2ZSIsInNldG5vdGlmaWNhdGlvbmFjdGl2ZSIsIlBvc3QiLCJuYW1lIiwiYm90dG9tIiwiTGlrZSIsIlJldHdlZXQiLCJvcHRpb25zIiwic2V0b3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJpZCIsIkZvbGxvd2VkIiwiZm9yRWFjaCIsIml0ZW0iLCJGb2xsb3dpbmdyZXF1ZXN0IiwiY2hlY2tmb2xsb3dlZCIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJIYW5kbGVvcHRpb25zIiwib3B0aW9udHlwZSIsIm9wdGlvbm9iaiIsImtleSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJ0ZXh0VHJhbnNmb3JtIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm9yZGVyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGF0aG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1heFdpZHRoIiwiaW5kZXgiLCJjb250ZW50Iiwic3RhdGVvZmxpc3QiLCJzZXRsaXN0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMEVBQWpCO0tBQU1GLFc7QUFPTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7TUFBTUMsUTtBQUlOLElBQU1DLFlBQVksR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5REFBbEI7TUFBTUUsWTtBQU1OLElBQU1DLGVBQWUsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2SUFBckI7TUFBTUcsZTtBQVNOLElBQU1DLFdBQVcsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5Q0FBakI7TUFBTUksVztBQUtOLElBQU1DLFdBQVcsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxSEFBakI7TUFBTUssVztBQVVOLElBQU1DLGNBQWMsR0FBQ1AseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxvQ0FBcEI7TUFBTU0sYztBQUlOLElBQU1DLFNB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QUFDa0MsT0FGZDtBQUdBLDBCQUFVLEVBQUUsb0JBQUNDLFdBQUQ7QUFBQSx5QkFBZUMsT0FBTyxDQUFDRCxXQUFELENBQXRCO0FBQUEsaUJBSFo7QUFJQSxvQkFBSSxFQUFFbkMsSUFBSSxDQUFDWCxJQUpYLENBSWdCO0FBSmhCO0FBS0EsdUJBQU8sRUFBRVcsSUFBSSxDQUFDVixPQUxkO0FBTUEsdUJBQU8sRUFBRVUsSUFBSSxDQUFDcUMsV0FOZDtBQU9BLHlCQUFTLEVBQUVyQyxJQUFJLENBQUNzQyxTQVBoQjtBQVFXO0FBQ1gsNEJBQVksRUFBRSx3SEFUZDtBQVVBLHFCQUFLLEVBQUV0QyxJQUFJLENBQUN1QyxLQVZaO0FBV0EsMEJBQVUsRUFBRSxhQVhaO0FBWUEsd0JBQVEsRUFBRTtBQVpWLGtMQWFNLEVBYk4sdUtBY1MsRUFkVCx1S0FlUyxFQWZULHlLQWdCVyxFQWhCWCwyS0FpQmEsUUFqQmIsd0tBa0JVdkMsSUFBSSxDQUFDd0MsUUFsQmYsb0tBbUJNeEMsSUFBSSxDQUFDeUMsU0FuQlgsY0FRS1IsS0FSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURZO0FBQUEsYUFBaEI7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJGSDs7R0FyTHVCdkUsTzs7T0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uYWI2ZDQ1MzJmMGRlNTMzOTlhYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9ufSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjE0MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxucGFkZGluZy1sZWZ0OjYwcHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoyNTBweDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2JsYWNrLmpwZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRwYXJ0PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYFxyXG5cclxuY29uc3QgVXNlcnNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6MjUwcHg7XHJcbm1hcmdpbi10b3A6ODBweDtcclxuYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xyXG5tYXgtd2lkdGg6NDAwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50c2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTAwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MjBweDtcclxuYFxyXG5cclxuY29uc3QgT3B0aW9ucz1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbjphbGwgMC4xcztcclxuYm9yZGVyLWJvdHRvbTokeyh7YXBwbHlib3JkZXJ9KT0+YXBwbHlib3JkZXIgPyBcIjJweCBzb2xpZCAjZDYyODI4XCIgOiBcIjJweCBzb2xpZCB0cmFuc3BhcmVudFwifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbnZhciBDb250cm9sbGVyPXRydWU7XHJcbnZhciBudW1iZXI9MDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7TXlkYXRhLHF1ZXJ5fSl7XHJcbiAgICBcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShNeWRhdGEucGVyc29uYWwpO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W3Byb2ZpbGVkYXRhLHNldHByb2ZpbGVkYXRhXT11c2VTdGF0ZSh7Li4uTXlkYXRhfSlcclxuICAgIGNvbnN0W3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdHJpYWwsc2V0cmlhbF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYmVpbmdmb2xsb3dlZCxzZXRiZWluZ2ZvbGxvd2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtub3RpZmljYXRpb25hY3RpdmUsc2V0bm90aWZpY2F0aW9uYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBQb3N0OntcclxuICAgICAgICAgICAgbmFtZTpcIkfDtm5kZXJpbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBuYW1lOlwiQmXEn2VuaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZXR3ZWV0OntcclxuICAgICAgICAgICAgbmFtZTpcIsSwxZ9hcmV0bGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2cobnVtYmVyKyspO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHByb2ZpbGVkYXRhLmlkKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0cmlhbCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBNeWRhdGEuRm9sbG93ZWQuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIHNldHByb2ZpbGVkYXRhKHsuLi5NeWRhdGF9KVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShbLi4uTXlkYXRhLnBlcnNvbmFsXSlcclxuICAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlZGF0YSlcclxuXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXF1ZXN0PShjaGVja2ZvbGxvd2VkKT0+e1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgQ3JlYXRldXNlcnJlbGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhhbmRsZW9wdGlvbnM9KG9wdGlvbnR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbm9iaikge1xyXG4gICAgICAgICAgICBvcHRpb25vYmpba2V5XS5ib3R0b209ZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25vYmpbb3B0aW9udHlwZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UvPiBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZ2ZvbGxvd2VkICYmIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbmFjdGl2ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnNBY3RpdmUgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17KCk9PnNldG5vdGlmaWNhdGlvbmFjdGl2ZShmYWxzZSl9PjwvTm90aWZpY2F0aW9uc0FjdGl2ZT4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKHRydWUpfT48L05vdGlmaWNhdGlvbnM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+Rm9sbG93aW5ncmVxdWVzdChiZWluZ2ZvbGxvd2VkKX0gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPntiZWluZ2ZvbGxvd2VkID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiLTE1MHB4XCIsbGVmdDpcIjE0MHB4XCIsYm9yZGVyOlwiMnB4IHNvbGlkIHdoaXRlXCJ9fSB3aWR0aD1cIjEyMHB4XCIgaGVpZ2h0PVwiMTIwcHhcIiBwcm9maWxlPVwiL2xlZC5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZWRhdGEuZmlyc3RuYW1lICsgXCIgXCIgKyBwcm9maWxlZGF0YS5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM4QjhCOEJcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmlhbCA/IFwiaGV5eW9cIiA6IFwibnVsbFwifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWtpcMOnaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xMjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWtpcCBFZGlsZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hw7ZuZGVyaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI4MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCIxNXB4XCJ9fT5Zb3UncmUgbm90IGhhdmluZyB0aGF0IHByb2JsZW0gaGVyZS4gVGhlcmUgaXMgbm8gbmVnYXRpdmUgc3BhY2UuIFRoZXJlZm9yZSwgSSBkb24ndCBiZWxpZXZlIGZsZXgtc2hyaW5rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1VzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7TXlkYXRhLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOmAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbnMgYXBwbHlib3JkZXI9e29wdGlvbnNbaXRlbV0uYm90dG9tfSBvbkNsaWNrPXsoKT0+SGFuZGxlb3B0aW9ucyhpdGVtKX0+e29wdGlvbnNbaXRlbV0ubmFtZX08L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwiLG1heFdpZHRoOlwiNzAwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d3aW5kb3c9eyhzdGF0ZW9mbGlzdCk9PnNldGxpc3Qoc3RhdGVvZmxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0uYWxsY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtcIkR1aGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17XCLDlnp0w7xya1wifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==