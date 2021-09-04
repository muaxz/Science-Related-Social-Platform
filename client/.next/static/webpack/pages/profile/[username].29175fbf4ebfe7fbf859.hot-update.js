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
var Description = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Description",
  componentId: "sc-1uvdthm-12"
})(["width:80%;margin:auto;@media (max-width:540px){display:none;}"]);
_c13 = Description;
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
          lineNumber: 210,
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
            lineNumber: 221,
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
            lineNumber: 225,
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
            lineNumber: 227,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
              lineNumber: 234,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
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
                lineNumber: 240,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
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
                  lineNumber: 267,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
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
                lineNumber: 275,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 9
  }, this);
}

_s(Profile, "eL3EVJ9hcDnfWn+uFJAcPWDgkwA=");

_c14 = Profile;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

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
$RefreshReg$(_c13, "Description");
$RefreshReg$(_c14, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTdGF0ZSIsInBlcnNvbmFsIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwiUG9zdCIsIm5hbWUiLCJib3R0b20iLCJMaWtlIiwiUmV0d2VldCIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlVzZXJJZCIsInVzZXJuYW1lIiwiRm9sbG93ZWQiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwiRm9sbG93aW5ncmVxdWVzdCIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiSGFuZGxlb3B0aW9ucyIsIm9wdGlvbnR5cGUiLCJvcHRpb25vYmoiLCJrZXkiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvcmRlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiRm9sbG93ZWRjb3VudCIsIkZvbGxvd2VyY291bnQiLCJDb250ZW50Y291bnQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGF0aG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1heFdpZHRoIiwiaW5kZXgiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwRUFBakI7S0FBTUYsVztBQU9OLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxvQkFBZDtNQUFNQyxRO0FBSU4sSUFBTUMsWUFBWSxHQUFDSCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlEQUFsQjtNQUFNRSxZO0FBTU4sSUFBTUMsa0JBQWtCLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsUUFBeEI7TUFBTUcsa0I7QUFJTixJQUFNQyxlQUFlLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNklBQXJCO01BQU1JLGU7QUFTTixJQUFNQyxXQUFXLEdBQUNOLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUNBQWpCO01BQU1LLFc7QUFLTixJQUFNQyxXQUFXLEdBQUNQLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsaU1BQWpCO01BQU1NLFc7QUFnQk4sSUFBTUMsY0FBYyxHQUFDUix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9DQUFwQjtNQUFNTyxjO0FBSU4sSUFBTUMsU0FBUyxHQUFDVCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHNHQUFmO01BQU1RLFM7QUFTTixJQUFNQyxPQUFPLEdBQUNWLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUVBSUw7QUFBQSxNQUFFVSxXQUFGLFFBQUVBLFdBQUY7QUFBQSxTQUFpQkEsV0FBVyxHQUFHLFNBQUgsR0FBZSxPQUEzQztBQUFBLENBSkssQ0FBYjtPQUFNRCxPO0FBT04sSUFBTUUsWUFBWSxHQUFDWix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlGQUFsQjtPQUFNVyxZO0FBUU4sSUFBTUMsQ0FBQyxHQUFHYix5REFBTSxDQUFDYyxDQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFQO09BQU1ELEM7QUFJTixJQUFNRSxXQUFXLEdBQUNmLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEscUVBQWpCO09BQU1jLFc7QUFTUyxTQUFTQyxPQUFULFFBQXVDO0FBQUE7O0FBQUE7O0FBQUEsTUFBckJDLE1BQXFCLFNBQXJCQSxNQUFxQjtBQUFBLE1BQWRDLE1BQWMsU0FBZEEsTUFBYztBQUFBLE1BQVBDLEtBQU8sU0FBUEEsS0FBTzs7QUFBQSxvQkFFbENDLHdEQUFVLENBQUNDLHNFQUFELENBRndCO0FBQUEsTUFFNUNDLFFBRjRDLGVBRTVDQSxRQUY0Qzs7QUFBQSxrQkFHaEJDLHNEQUFRLENBQUMsa0pBQUlOLE1BQU0sQ0FBQ08sUUFBWixFQUhRO0FBQUEsTUFHNUNDLFdBSDRDO0FBQUEsTUFHaENDLGNBSGdDOztBQUFBLG1CQUk1Qkgsc0RBQVEsQ0FBQyxFQUFELENBSm9CO0FBQUEsTUFJNUNJLEtBSjRDO0FBQUEsTUFJdENDLFFBSnNDOztBQUFBLG1CQUtoQkwsc0RBQVEsbUJBQUtOLE1BQUwsRUFMUTtBQUFBLE1BSzVDWSxXQUw0QztBQUFBLE1BS2hDQyxjQUxnQzs7QUFBQSxtQkFNaEJQLHNEQUFRLENBQUMsS0FBRCxDQU5RO0FBQUEsTUFNNUNRLFdBTjRDO0FBQUEsTUFNaENDLGNBTmdDOztBQUFBLG1CQU9aVCxzREFBUSxDQUFDLEtBQUQsQ0FQSTtBQUFBLE1BTzVDVSxhQVA0QztBQUFBLE1BTzlCQyxnQkFQOEI7O0FBQUEsbUJBUUZYLHNEQUFRLENBQUMsS0FBRCxDQVJOO0FBQUEsTUFRNUNZLGtCQVI0QztBQUFBLE1BUXpCQyxxQkFSeUI7O0FBQUEsbUJBU3hCYixzREFBUSxDQUFDO0FBQy9CYyxRQUFJLEVBQUM7QUFDREMsVUFBSSxFQUFDLFlBREo7QUFFREMsWUFBTSxFQUFDO0FBRk4sS0FEMEI7QUFLL0JDLFFBQUksRUFBQztBQUNERixVQUFJLEVBQUMsV0FESjtBQUVEQyxZQUFNLEVBQUM7QUFGTixLQUwwQjtBQVMvQkUsV0FBTyxFQUFDO0FBQ0pILFVBQUksRUFBQyxXQUREO0FBRUpDLFlBQU0sRUFBQztBQUZIO0FBVHVCLEdBQUQsQ0FUZ0I7QUFBQSxNQVM1Q0csT0FUNEM7QUFBQSxNQVNwQ0MsVUFUb0M7O0FBdUJuREMsU0FBTyxDQUFDQyxHQUFSLENBQVkzQixNQUFaO0FBRUE0Qix5REFBUyxDQUFDLFlBQUksQ0FFYixDQUZRLEVBRVAsQ0FBQ0osT0FBRCxDQUZPLENBQVQ7QUFJQ0kseURBQVMsQ0FBQyxZQUFJO0FBRVYsUUFBR3hCLFFBQVEsQ0FBQ3lCLE1BQVQsSUFBbUI1QixLQUFLLENBQUM2QixRQUE1QixFQUFxQztBQUdqQ2hCLG9CQUFjLENBQUMsSUFBRCxDQUFkLENBSGlDLENBSWpDO0FBR0gsS0FQRCxNQVFJO0FBRUEsVUFBR1YsUUFBUSxDQUFDeUIsTUFBWixFQUFtQjtBQUVmO0FBQ2hCO0FBQ0E7QUFDQTtBQUVnQjlCLGNBQU0sQ0FBQ2dDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFVBQUFDLElBQUksRUFBRTtBQUUxQixjQUFHQSxJQUFJLENBQUNDLEVBQUwsSUFBVzlCLFFBQVEsQ0FBQ3lCLE1BQXZCLEVBQThCO0FBRTFCYiw0QkFBZ0IsQ0FBQyxJQUFELENBQWhCLENBRjBCLENBRzFCO0FBQ0g7QUFFSixTQVJEO0FBU0g7QUFFSjtBQUVKLEdBaENRLEVBZ0NQLENBQUNaLFFBQUQsRUFBVUgsS0FBVixDQWhDTyxDQUFUO0FBa0NBMkIseURBQVMsQ0FBQyxZQUFJO0FBRVpoQixrQkFBYyxtQkFBS2IsTUFBTCxFQUFkO0FBQ0FTLGtCQUFjLENBQUMsa0pBQUlULE1BQU0sQ0FBQ08sUUFBWixFQUFkO0FBRUQsR0FMUSxFQUtQLENBQUNMLEtBQUQsQ0FMTyxDQUFUOztBQVNBLE1BQU1rQyxnQkFBZ0IsR0FBQyxTQUFqQkEsZ0JBQWlCLEdBQUk7QUFFdkJuQixvQkFBZ0IsQ0FBQyxDQUFDRCxhQUFGLENBQWhCOztBQUVBLFFBQUdYLFFBQVEsQ0FBQ3lCLE1BQVosRUFBbUI7QUFFZk8seUVBQWtCLENBQUM7QUFDZlAsY0FBTSxFQUFDekIsUUFBUSxDQUFDeUIsTUFERDtBQUVmUSxrQkFBVSxFQUFDdEMsTUFBTSxDQUFDbUMsRUFGSDtBQUdmSSxxQkFBYSxFQUFDdkI7QUFIQyxPQUFELENBQWxCO0FBTUg7QUFHSixHQWZEOztBQWlCQSxNQUFNd0IsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsVUFBRCxFQUFjO0FBRTlCLFFBQU1DLFNBQVMscUJBQUtqQixPQUFMLENBQWY7O0FBRUEsU0FBSyxJQUFNa0IsR0FBWCxJQUFrQkQsU0FBbEIsRUFBNkI7QUFDekJBLGVBQVMsQ0FBQ0MsR0FBRCxDQUFULENBQWVyQixNQUFmLEdBQXNCLEtBQXRCO0FBQ0g7O0FBRURvQixhQUFTLENBQUNELFVBQUQsQ0FBVCxDQUFzQm5CLE1BQXRCLEdBQTZCLElBQTdCO0FBQ0FJLGNBQVUsQ0FBQ2dCLFNBQUQsQ0FBVjtBQUNILEdBVkQ7O0FBWUEsc0JBQ0kscUVBQUMsV0FBRDtBQUFBLDJCQUNJLHFFQUFDLFFBQUQ7QUFBQSw4QkFDSSxxRUFBQyxZQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRVk7QUFDQTtBQUNBLFNBQUM1QixXQUFELElBQWdCVCxRQUFRLENBQUN5QixNQUF6QixpQkFFQyxxRUFBQyxZQUFEO0FBQUEscUJBRU9kLGFBQWEsSUFFYkUsa0JBRkEsZ0JBSUMscUVBQUMsdUVBQUQ7QUFBcUIsaUJBQUssRUFBRTtBQUFDMEIsbUJBQUssRUFBQyxPQUFQO0FBQWVDLHlCQUFXLEVBQUMsTUFBM0I7QUFBa0NDLG9CQUFNLEVBQUM7QUFBekMsYUFBNUI7QUFBaUYsbUJBQU8sRUFBRTtBQUFBLHFCQUFJM0IscUJBQXFCLENBQUMsS0FBRCxDQUF6QjtBQUFBO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsZ0JBUUMscUVBQUMsaUVBQUQ7QUFBZSxpQkFBSyxFQUFFO0FBQUN5QixtQkFBSyxFQUFDLE9BQVA7QUFBZUMseUJBQVcsRUFBQyxNQUEzQjtBQUFrQ0Msb0JBQU0sRUFBQztBQUF6QyxhQUF0QjtBQUEyRSxtQkFBTyxFQUFFO0FBQUEscUJBQUkzQixxQkFBcUIsQ0FBQyxJQUFELENBQXpCO0FBQUE7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWUixlQVlELHFFQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFJaUIsZ0JBQWdCLENBQUNwQixhQUFELENBQXBCO0FBQUEsYUFBakI7QUFBc0QsaUJBQUssRUFBRTtBQUFDNEIsbUJBQUssRUFBQyxPQUFQO0FBQWVHLDZCQUFlLEVBQUMsU0FBL0I7QUFBeUNDLDJCQUFhLEVBQUM7QUFBdkQsYUFBN0Q7QUFBNkgsbUJBQU8sRUFBQyxXQUFySTtBQUFBLHNCQUFrSmhDLGFBQWEsR0FBRyxjQUFILEdBQW9CO0FBQW5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBdUJJLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDSyxxRUFBQyxXQUFEO0FBQUEsa0NBQ0kscUVBQUMsa0JBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxnRkFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBQ2lDLHdCQUFRLEVBQUMsVUFBVjtBQUFxQkMsbUJBQUcsRUFBQyxRQUF6QjtBQUFrQ0Msb0JBQUksRUFBQyxPQUF2QztBQUErQ0Msc0JBQU0sRUFBQztBQUF0RCxlQUFyQjtBQUErRixtQkFBSyxFQUFDLE1BQXJHO0FBQTRHLG9CQUFNLEVBQUMsTUFBbkg7QUFBMEgscUJBQU8sRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUEsc0JBQUt4QyxXQUFXLENBQUN5QyxTQUFaLEdBQXdCLEdBQXhCLEdBQThCekMsV0FBVyxDQUFDMEM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQU0saUJBQUssRUFBRTtBQUFDVixtQkFBSyxFQUFDO0FBQVAsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU1JO0FBQUssaUJBQUssRUFBRTtBQUFDVyxxQkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLHVCQUFTLEVBQUMsTUFBMUI7QUFBaUNDLDBCQUFZLEVBQUMsTUFBOUM7QUFBcURDLDRCQUFjLEVBQUM7QUFBcEUsYUFBWjtBQUFBLG9DQUNHO0FBQUEsc0NBQ0kscUVBQUMsQ0FBRDtBQUFBLDBCQUFJekQsTUFBTSxDQUFDMEQ7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFLRztBQUFBLHNDQUNJLHFFQUFDLENBQUQ7QUFBQSwwQkFBSTFELE1BQU0sQ0FBQzJEO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxILGVBU0c7QUFBQSxzQ0FDSSxxRUFBQyxDQUFEO0FBQUEsMEJBQUkzRCxNQUFNLENBQUM0RDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyxDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFvQkkscUVBQUMsV0FBRDtBQUFhLGlCQUFLLEVBQUU7QUFBQ0MsbUJBQUssRUFBQyxLQUFQO0FBQWFDLG9CQUFNLEVBQUM7QUFBcEIsYUFBcEI7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBRyxtQkFBSyxFQUFFO0FBQUNDLHVCQUFPLEVBQUM7QUFBVCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETCxlQTJCSyxxRUFBQyxjQUFEO0FBQUEsa0NBQ08scUVBQUMsU0FBRDtBQUFBLHNCQUVHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXpDLE9BQVosRUFBcUIwQyxHQUFyQixDQUF5QixVQUFDakMsSUFBRDtBQUFBLGtDQUNyQixxRUFBQyxpREFBRDtBQUFPLG9CQUFJLEVBQUU7QUFDVGtDLDBCQUFRLHFCQUFhcEUsTUFBTSxDQUFDbUMsRUFBcEIsQ0FEQztBQUVUakMsdUJBQUssRUFBQztBQUFDbUIsd0JBQUksWUFBSWEsSUFBSjtBQUFMO0FBRkcsaUJBQWI7QUFBQSx1Q0FLRyxxRUFBQyxPQUFEO0FBQVMsNkJBQVcsRUFBRVQsT0FBTyxDQUFDUyxJQUFELENBQVAsQ0FBY1osTUFBcEM7QUFBNEMseUJBQU8sRUFBRTtBQUFBLDJCQUFJa0IsYUFBYSxDQUFDTixJQUFELENBQWpCO0FBQUEsbUJBQXJEO0FBQUEsNEJBQStFVCxPQUFPLENBQUNTLElBQUQsQ0FBUCxDQUFjYjtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEcUI7QUFBQSxhQUF6QjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFAsZUFjTTtBQUFLLGlCQUFLLEVBQUU7QUFBQ2dELDBCQUFZLEVBQUMsTUFBZDtBQUFxQkMseUJBQVcsRUFBQyxNQUFqQztBQUF3Q0Msc0JBQVEsRUFBQyxPQUFqRDtBQUF5RFIsb0JBQU0sRUFBQztBQUFoRSxhQUFaO0FBQUEsc0JBRUt2RCxXQUFXLENBQUMyRCxHQUFaLENBQWdCLFVBQUNqQyxJQUFELEVBQU1zQyxLQUFOO0FBQUEsa0NBQ1oscUVBQUMsc0VBQUQ7QUFDQSxzQkFBTSxFQUFFdEMsSUFBSSxDQUFDQyxFQURiO0FBRUEsdUJBQU8sRUFBRUQsSUFBSSxDQUFDdUMsT0FGZDtBQUdBLG9CQUFJLEVBQUUsRUFITixDQUdTO0FBSFQ7QUFJQSx1QkFBTyxFQUFFLEVBSlQ7QUFLQSx1QkFBTyxFQUFFLEVBTFQ7QUFNQSx5QkFBUyxFQUFFLEVBTlg7QUFPVztBQUNYLDRCQUFZLEVBQUUsd0hBUmQ7QUFTQSxxQkFBSyxFQUFFdkMsSUFBSSxDQUFDd0MsS0FUWjtBQVVBLDBCQUFVLEVBQUUsYUFWWjtBQVdBLHdCQUFRLEVBQUV4QyxJQUFJLENBQUMzQixRQUFMLEtBQWtCLElBQWxCLEdBQXlCMkIsSUFBSSxDQUFDM0IsUUFBTCxDQUFjOEMsU0FBdkMsR0FBbUQsUUFYN0Q7QUFZQSwyQkFBVyxFQUFFbkIsSUFBSSxDQUFDM0IsUUFBTCxLQUFrQixJQUFsQixHQUF5QjJCLElBQUksQ0FBQzNCLFFBQUwsQ0FBYytDLFFBQXZDLEdBQWtELFFBWi9ELENBWXdFO0FBWnhFO0FBYUEsc0JBQU0sRUFBRXBCLElBQUksQ0FBQzNCLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUIyQixJQUFJLENBQUMzQixRQUFMLENBQWM0QixFQUF2QyxHQUEyQyxRQWJuRDtBQWNBLHdCQUFRLEVBQUVELElBQUksQ0FBQ3lDLFFBZGY7QUFlQSxvQkFBSSxFQUFFekMsSUFBSSxDQUFDMEM7QUFmWCxpQkFPS0osS0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURZO0FBQUEsYUFBaEI7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThGSDs7R0FuTXVCekUsTzs7T0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uMjkxNzVmYmY0ZWJmZTdmYmY4NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9ufSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3VzIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjYwcHg7XHJcbiAgICB0b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50c2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTAwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MjBweDtcclxuYFxyXG5cclxuY29uc3QgT3B0aW9ucz1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbjphbGwgMC4xcztcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5jb2xvcjokeyh7YXBwbHlib3JkZXJ9KT0+YXBwbHlib3JkZXIgPyBcIiNkNjI4MjhcIiA6IFwiYmxhY2tcIn07XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxMHB4O1xyXG5yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuYFxyXG5cclxuY29uc3QgRGVzY3JpcHRpb249c3R5bGVkLmRpdmBcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46YXV0bztcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7TXlkYXRhLENvdW50cyxxdWVyeX0pe1xyXG4gICAgXHJcbiAgICBjb25zdHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoWy4uLk15ZGF0YS5wZXJzb25hbF0pO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W3Byb2ZpbGVkYXRhLHNldHByb2ZpbGVkYXRhXT11c2VTdGF0ZSh7Li4uTXlkYXRhfSlcclxuICAgIGNvbnN0W2NoZWNrdXNlcmlkLHNldGNoZWNrdXNlcmlkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtiZWluZ2ZvbGxvd2VkLHNldGJlaW5nZm9sbG93ZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W25vdGlmaWNhdGlvbmFjdGl2ZSxzZXRub3RpZmljYXRpb25hY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIFBvc3Q6e1xyXG4gICAgICAgICAgICBuYW1lOlwiR8O2bmRlcmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOnRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbmFtZTpcIkJlxJ9lbmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmV0d2VldDp7XHJcbiAgICAgICAgICAgIG5hbWU6XCLEsMWfYXJldGxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgIGNvbnNvbGUubG9nKENvdW50cyk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgfSxbb3B0aW9uc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBxdWVyeS51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKHRydWUpO1xyXG4gICAgICAgICAgICAvL2J1cmFkYSB0YWtpcCBldCBidXRvbnUgdmUgYmlsZGlyaW0gYnV0b251IGthbGvEsWNhayB5ZXJpbmUgYmVsa2kgYXlhcmxhci5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLypNeWRhdGEuRm9sbG93ZWQuZmluZChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5pZCA9PSB1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgICAgIE15ZGF0YS5Gb2xsb3dlZC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vemF0ZW4gYnVyYXlhIGdpcmVtZW1pxZ8gaXNlIGRlZmF1bHQgZGXEn2VyIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3VzZXJkYXRhLHF1ZXJ5XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIHNldHByb2ZpbGVkYXRhKHsuLi5NeWRhdGF9KVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShbLi4uTXlkYXRhLnBlcnNvbmFsXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxdWVzdD0oKT0+e1xyXG5cclxuICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKCFiZWluZ2ZvbGxvd2VkKTtcclxuXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBjaGVja2lmZm9sbG93OmJlaW5nZm9sbG93ZWQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIYW5kbGVvcHRpb25zPShvcHRpb250eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAvL2J1cmFkYSBjb250ZXh0IHVzZXJJZCB5b2sgaXNlIGJ1bmEgaXppbiB2ZXJtaXlvcnVtIGFuY2FrIHNldHN0YXRlIG9sZHVndW5kYSBnw7ZzdGVyaW0gdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gdGhpcyBzaG91bGQgYmUgZml4ZWQgZHVyaW5nIG5hdmlnYWl0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja3VzZXJpZCAmJiB1c2VyZGF0YS5Vc2VySWQgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25hY3RpdmUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKGZhbHNlKX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKHRydWUpfT48L05vdGlmaWNhdGlvbnM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkZvbGxvd2luZ3JlcXVlc3QoYmVpbmdmb2xsb3dlZCl9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmRDb2xvcjpcIiMwZWFkNjlcIix0ZXh0VHJhbnNmb3JtOlwibm9uZVwifX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPntiZWluZ2ZvbGxvd2VkID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIi0xMDBweFwiLGxlZnQ6XCIxNjBweFwiLGJvcmRlcjpcIjRweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCI5MHB4XCIgaGVpZ2h0PVwiOTBweFwiIHByb2ZpbGU9XCIvbGVkLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGVkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvZmlsZWRhdGEubGFzdG5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjNmM3NTdkXCJ9fT5VSSBkZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjEwcHhcIixtYXJnaW5Cb3R0b206XCI0MHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VkY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lww6dpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZXJjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXAgRWRpbGVuPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuQ29udGVudGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5Hw7ZuZGVyaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Vc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtNeWRhdGEuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ucyBhcHBseWJvcmRlcj17b3B0aW9uc1tpdGVtXS5ib3R0b219IG9uQ2xpY2s9eygpPT5IYW5kbGVvcHRpb25zKGl0ZW0pfT57b3B0aW9uc1tpdGVtXS5uYW1lfTwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIxMHB4XCIscGFkZGluZ0xlZnQ6XCIxMHB4XCIsbWF4V2lkdGg6XCI3MDBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17W119Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9Ly9rZXkgbnVtYXJhc8SxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBcIm5vdHlldFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc3VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwubGFzdG5hbWUgOiBcIm5vdHlldFwifS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==