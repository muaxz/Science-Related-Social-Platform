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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












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
var ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__ProfileImageholder",
  componentId: "sc-1uvdthm-3"
})([""]);
_c4 = ProfileImageholder;
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__BackgroundImage",
  componentId: "sc-1uvdthm-4"
})(["width:100%;height:100%;background-image:url(/black.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
_c5 = BackgroundImage;
var Contentpart = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Contentpart",
  componentId: "sc-1uvdthm-5"
})(["display:flex;padding-bottom:20px;"]);
_c6 = Contentpart;
var Usersection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Usersection",
  componentId: "sc-1uvdthm-6"
})(["position:sticky;top:250px;margin-top:80px;align-self:flex-start;max-width:400px;text-align:center;width:100%;@media (max-width:540px){position:absolute;left:60px;top:100px;color:White;}"]);
_c7 = Usersection;
var Contentsection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Contentsection",
  componentId: "sc-1uvdthm-7"
})(["max-width:1000px;width:100%;"]);
_c8 = Contentsection;
var Optionbar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Optionbar",
  componentId: "sc-1uvdthm-8"
})(["display:flex;justify-content:space-around;margin:auto;max-width:500px;width:100%;padding:20px;"]);
_c9 = Optionbar;
var Options = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Options",
  componentId: "sc-1uvdthm-9"
})(["cursor:pointer;transition:all 0.1s;font-weight:600;color:", ";"], function (_ref) {
  var applyborder = _ref.applyborder;
  return applyborder ? "#d62828" : "black";
});
_c10 = Options;
var ButtonHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__ButtonHolder",
  componentId: "sc-1uvdthm-10"
})(["display:flex;align-items:center;position:absolute;bottom:10px;right:10px;"]);
_c11 = ButtonHolder;
var P = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Profile__P",
  componentId: "sc-1uvdthm-11"
})(["font-weight:600;"]);
_c12 = P;
function Profile(_ref2) {
  _s();

  var _this = this;

  var Mydata = _ref2.Mydata,
      Counts = _ref2.Counts,
      query = _ref2.query;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Mydata.personal)),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_objectSpread({}, Mydata)),
      profiledata = _useState3[0],
      setprofiledata = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      checkuserid = _useState4[0],
      setcheckuserid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      beingfollowed = _useState5[0],
      setbeingfollowed = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      notificationactive = _useState6[0],
      setnotificationactive = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Post: {
      name: "Gönderiler",
      bottom: true
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
      options = _useState7[0],
      setoptions = _useState7[1];

  console.log(Counts);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, [options]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (userdata.UserId == query.username) {
      setcheckuserid(true); //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.
    } else {
      if (userdata.UserId) {
        /*Mydata.Followed.find(element => {
            return element.id == userdata.UserId
        })
        */
        Mydata.Followed.forEach(function (item) {
          if (item.id == userdata.UserId) {
            setbeingfollowed(true); //zaten buraya girememiş ise default değer false
          }
        });
      }
    }
  }, [userdata, query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setprofiledata(_objectSpread({}, Mydata));
    setcontentdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Mydata.personal));
  }, [query]);

  var Followingrequest = function Followingrequest() {
    setbeingfollowed(!beingfollowed);

    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Createuserrelation"])({
        UserId: userdata.UserId,
        FollowedId: Mydata.id,
        checkiffollow: beingfollowed
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
          lineNumber: 202,
          columnNumber: 21
        }, this), //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
        //TODO this should be fixed during navigaiton
        !checkuserid && userdata.UserId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
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
            lineNumber: 213,
            columnNumber: 38
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
            lineNumber: 217,
            columnNumber: 38
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: function onClick() {
              return Followingrequest(beingfollowed);
            },
            style: {
              color: "white",
              backgroundColor: "#0ead69",
              textTransform: "none"
            },
            variant: "contained",
            children: beingfollowed ? "Takipten Çık" : "Takip Et"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Usersection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__["Porfileimage"], {
              style: {
                position: "absolute",
                top: "-100px",
                left: "160px",
                border: "4px solid white"
              },
              width: "90px",
              height: "90px",
              profile: "/led.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "flex",
              marginTop: "10px",
              marginBottom: "40px",
              justifyContent: "space-around"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followedcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
                  lineNumber: 259,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingRight: "10px",
              paddingLeft: "10px",
              maxWidth: "700px",
              margin: "auto"
            },
            children: contentdata.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                postId: item.id,
                content: item.content,
                like: [] //bu bir obje array
                ,
                retweet: [],
                comment: [],
                readlater: [],
                //key numarası
                profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
                title: item.title,
                titleimage: "/yaprak.jpg",
                username: item.personal !== null ? item.personal.firstname : "notyet",
                usersurname: item.personal !== null ? item.personal.lastname : "notyet" //bir obje props
                ,
                userid: item.personal !== null ? item.personal.id : "notyet",
                subtitle: item.subtitle,
                date: item.createdAt
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 9
  }, this);
}

_s(Profile, "eL3EVJ9hcDnfWn+uFJAcPWDgkwA=");

_c13 = Profile;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "Exteriordiv");
$RefreshReg$(_c2, "Innerdiv");
$RefreshReg$(_c3, "Imagesection");
$RefreshReg$(_c4, "ProfileImageholder");
$RefreshReg$(_c5, "BackgroundImage");
$RefreshReg$(_c6, "Contentpart");
$RefreshReg$(_c7, "Usersection");
$RefreshReg$(_c8, "Contentsection");
$RefreshReg$(_c9, "Optionbar");
$RefreshReg$(_c10, "Options");
$RefreshReg$(_c11, "ButtonHolder");
$RefreshReg$(_c12, "P");
$RefreshReg$(_c13, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIlByb2ZpbGUiLCJNeWRhdGEiLCJDb3VudHMiLCJxdWVyeSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlU3RhdGUiLCJwZXJzb25hbCIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwicHJvZmlsZWRhdGEiLCJzZXRwcm9maWxlZGF0YSIsImNoZWNrdXNlcmlkIiwic2V0Y2hlY2t1c2VyaWQiLCJiZWluZ2ZvbGxvd2VkIiwic2V0YmVpbmdmb2xsb3dlZCIsIm5vdGlmaWNhdGlvbmFjdGl2ZSIsInNldG5vdGlmaWNhdGlvbmFjdGl2ZSIsIlBvc3QiLCJuYW1lIiwiYm90dG9tIiwiTGlrZSIsIlJldHdlZXQiLCJvcHRpb25zIiwic2V0b3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJ1c2VybmFtZSIsIkZvbGxvd2VkIiwiZm9yRWFjaCIsIml0ZW0iLCJpZCIsIkZvbGxvd2luZ3JlcXVlc3QiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkhhbmRsZW9wdGlvbnMiLCJvcHRpb250eXBlIiwib3B0aW9ub2JqIiwia2V5IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3JkZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIkZvbGxvd2VkY291bnQiLCJGb2xsb3dlcmNvdW50IiwiQ29udGVudGNvdW50Iiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhdGhuYW1lIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXhXaWR0aCIsImluZGV4IiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsMEVBQWpCO0tBQU1GLFc7QUFPTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7TUFBTUMsUTtBQUlOLElBQU1DLFlBQVksR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5REFBbEI7TUFBTUUsWTtBQU1OLElBQU1DLGtCQUFrQixHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLFFBQXhCO01BQU1HLGtCO0FBSU4sSUFBTUMsZUFBZSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZJQUFyQjtNQUFNSSxlO0FBU04sSUFBTUMsV0FBVyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlDQUFqQjtNQUFNSyxXO0FBS04sSUFBTUMsV0FBVyxHQUFDUCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlNQUFqQjtNQUFNTSxXO0FB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QWhCO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Rkg7O0dBbk11QnpFLE87O09BQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmMwY2ViMTMwYWU2MDY1ZmI2NDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0NyZWF0ZXVzZXJyZWxhdGlvbn0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW91cyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjE0MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxucGFkZGluZy1sZWZ0OjYwcHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoyNTBweDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2Vyc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDoyNTBweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG5hbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbm1heC13aWR0aDo0MDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo2MHB4O1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQ29udGVudHNlY3Rpb249c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBPcHRpb25iYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5tYXJnaW46YXV0bztcclxubWF4LXdpZHRoOjUwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE9wdGlvbnM9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb246YWxsIDAuMXM7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuY29sb3I6JHsoe2FwcGx5Ym9yZGVyfSk9PmFwcGx5Ym9yZGVyID8gXCIjZDYyODI4XCIgOiBcImJsYWNrXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b25Ib2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MTBweDtcclxucmlnaHQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5wYFxyXG5mb250LXdlaWdodDo2MDA7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHtNeWRhdGEsQ291bnRzLHF1ZXJ5fSl7XHJcbiAgICBcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShbLi4uTXlkYXRhLnBlcnNvbmFsXSk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbcHJvZmlsZWRhdGEsc2V0cHJvZmlsZWRhdGFdPXVzZVN0YXRlKHsuLi5NeWRhdGF9KVxyXG4gICAgY29uc3RbY2hlY2t1c2VyaWQsc2V0Y2hlY2t1c2VyaWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2JlaW5nZm9sbG93ZWQsc2V0YmVpbmdmb2xsb3dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbbm90aWZpY2F0aW9uYWN0aXZlLHNldG5vdGlmaWNhdGlvbmFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbb3B0aW9ucyxzZXRvcHRpb25zXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgUG9zdDp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJHw7ZuZGVyaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBuYW1lOlwiQmXEn2VuaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZXR3ZWV0OntcclxuICAgICAgICAgICAgbmFtZTpcIsSwxZ9hcmV0bGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuICAgY29uc29sZS5sb2coQ291bnRzKTtcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICB9LFtvcHRpb25zXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHF1ZXJ5LnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0Y2hlY2t1c2VyaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vYnVyYWRhIHRha2lwIGV0IGJ1dG9udSB2ZSBiaWxkaXJpbSBidXRvbnUga2Fsa8SxY2FrIHllcmluZSBiZWxraSBheWFybGFyLlxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKk15ZGF0YS5Gb2xsb3dlZC5maW5kKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmlkID09IHVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgTXlkYXRhLkZvbGxvd2VkLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldGJlaW5nZm9sbG93ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy96YXRlbiBidXJheWEgZ2lyZW1lbWnFnyBpc2UgZGVmYXVsdCBkZcSfZXIgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdXNlcmRhdGEscXVlcnldKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgc2V0cHJvZmlsZWRhdGEoey4uLk15ZGF0YX0pXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKFsuLi5NeWRhdGEucGVyc29uYWxdKVxyXG5cclxuICAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXF1ZXN0PSgpPT57XHJcblxyXG4gICAgICAgIHNldGJlaW5nZm9sbG93ZWQoIWJlaW5nZm9sbG93ZWQpO1xyXG5cclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgQ3JlYXRldXNlcnJlbGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIGNoZWNraWZmb2xsb3c6YmVpbmdmb2xsb3dlZCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhhbmRsZW9wdGlvbnM9KG9wdGlvbnR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbm9iaikge1xyXG4gICAgICAgICAgICBvcHRpb25vYmpba2V5XS5ib3R0b209ZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25vYmpbb3B0aW9udHlwZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UvPiBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgICAgIC8vYnVyYWRhIGNvbnRleHQgdXNlcklkIHlvayBpc2UgYnVuYSBpemluIHZlcm1peW9ydW0gYW5jYWsgc2V0c3RhdGUgb2xkdWd1bmRhIGfDtnN0ZXJpbSB2YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETyB0aGlzIHNob3VsZCBiZSBmaXhlZCBkdXJpbmcgbmF2aWdhaXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrdXNlcmlkICYmIHVzZXJkYXRhLlVzZXJJZCAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmdmb2xsb3dlZCAmJiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbmFjdGl2ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zQWN0aXZlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT5zZXRub3RpZmljYXRpb25hY3RpdmUoZmFsc2UpfT48L05vdGlmaWNhdGlvbnNBY3RpdmU+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT5zZXRub3RpZmljYXRpb25hY3RpdmUodHJ1ZSl9PjwvTm90aWZpY2F0aW9ucz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+Rm9sbG93aW5ncmVxdWVzdChiZWluZ2ZvbGxvd2VkKX0gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYmFja2dyb3VuZENvbG9yOlwiIzBlYWQ2OVwiLHRleHRUcmFuc2Zvcm06XCJub25lXCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+e2JlaW5nZm9sbG93ZWQgPyBcIlRha2lwdGVuIMOHxLFrXCIgOiBcIlRha2lwIEV0XCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiLTEwMHB4XCIsbGVmdDpcIjE2MHB4XCIsYm9yZGVyOlwiNHB4IHNvbGlkIHdoaXRlXCJ9fSB3aWR0aD1cIjkwcHhcIiBoZWlnaHQ9XCI5MHB4XCIgcHJvZmlsZT1cIi9sZWQuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZWRhdGEuZmlyc3RuYW1lICsgXCIgXCIgKyBwcm9maWxlZGF0YS5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM2Yzc1N2RcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZWRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXDDp2k8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlcmNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcCBFZGlsZW48L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Db250ZW50Y291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPkfDtm5kZXJpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7TXlkYXRhLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOmAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbnMgYXBwbHlib3JkZXI9e29wdGlvbnNbaXRlbV0uYm90dG9tfSBvbkNsaWNrPXsoKT0+SGFuZGxlb3B0aW9ucyhpdGVtKX0+e29wdGlvbnNbaXRlbV0ubmFtZX08L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwiLG1heFdpZHRoOlwiNzAwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlaW1hZ2U9e1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTk0NjEwL3BleGVscy1waG90by01OTQ2MTAuanBlZz9jcz1zcmdiJmRsPXBleGVscy1tYXJ0aW4tcCVDMyVBOWNoeS01OTQ2MTAuanBnJmZtPWpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCIveWFwcmFrLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgIT09IG51bGwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogXCJub3R5ZXRcIn0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZD17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuaWQ6IFwibm90eWV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50cGFydD5cclxuICAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=