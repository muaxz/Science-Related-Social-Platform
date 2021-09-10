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
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Exteriordiv",
  componentId: "sc-1uvdthm-0"
})(["max-width:1400px;width:100%;padding-bottom:20px;padding-left:60px;@media (max-width:940px){padding-left:0;}"]);
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
})(["position:absolute;width:120px;height:120px;top:-120px;left:140px;@media (max-width:940px){position:absolute;width:90px;height:90px;top:-100px;left:160px;color:White;}"]);
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
})(["position:sticky;top:250px;margin-top:80px;align-self:flex-start;max-width:400px;text-align:center;width:100%;@media (max-width:940px){position:absolute;left:50%;transform:translateX(-50%);top:100px;color:White;}"]);
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
})(["width:80%;margin:auto;@media (max-width:940px){display:none;}"]);
_c13 = Description;
function Profile(_ref2) {
  _s();

  var _this = this;

  var Mydata = _ref2.Mydata,
      Counts = _ref2.Counts,
      query = _ref2.query;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Mydata.personal),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Mydata),
      profiledata = _useState3[0],
      setprofiledata = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      checkuserid = _useState4[0],
      setcheckuserid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      beingfollowed = _useState5[0],
      setbeingfollowed = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      Timetorender = _useState6[0],
      settimetorender = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      notificationactive = _useState7[0],
      setnotificationactive = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Post: {
      name: "Gönderiler",
      bottom: true
    },
    Like: {
      name: "Beğeniler",
      bottom: false
    },
    Reshow: {
      name: "İşaretler",
      bottom: false
    }
  }),
      options = _useState8[0],
      setoptions = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (query.name == "Like" || query.name == "Retweet") {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Getusercontent"])({
        params: query.name,
        UserId: query.username,
        setdata: setcontentdata,
        order: 10,
        currentdata: contentdata
      });
    }
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (userdata.UserId) {
      settimetorender(true);

      if (userdata.UserId == query.username) {
        setcheckuserid(true); //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.
      } else {
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
    setcontentdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Mydata.personal));
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
          lineNumber: 238,
          columnNumber: 21
        }, this), //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
        //TODO this should be fixed during navigaiton
        //userdata.userıd yoksa kullanıcı giriş yapmamıştır
        !checkuserid && Timetorender && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: [beingfollowed && notificationactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["NotificationsActive"], {
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
            lineNumber: 250,
            columnNumber: 38
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Notifications"], {
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
            lineNumber: 254,
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
            lineNumber: 256,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentpart, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Usersection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_6__["Porfileimage"], {
              style: {
                border: "4px solid white"
              },
              width: "100%",
              height: "100%",
              profile: "/led.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
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
                lineNumber: 269,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
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
                  lineNumber: 296,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingRight: "10px",
              paddingLeft: "10px",
              maxWidth: "700px",
              margin: "auto"
            },
            children: contentdata.map(function (item, index) {
              if (item.Content) {
                console.log(item.Content.personal.firstname);
              }

              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                like: [] //bu bir obje array
                ,
                retweet: [],
                comment: [],
                readlater: [],
                //key numarası
                profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
                title: item.personal ? item.title : item.Content.title,
                titleimage: "/yaprak.jpg",
                username: item.personal ? item.personal.firstname : item.Content.personal.firstname,
                usersurname: item.personal ? item.personal.lastname : item.Content.personal.firstname //bir obje props
                ,
                date: Date.now()
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 46
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 9
  }, this);
}

_s(Profile, "xij6Bfw4Q+KmKMHfeRiymZJd7bQ=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsInBlcnNvbmFsIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwiUG9zdCIsIm5hbWUiLCJMaWtlIiwiUmVzaG93Iiwib3B0aW9ucyIsInNldG9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsIlVzZXJJZCIsInVzZXJuYW1lIiwic2V0ZGF0YSIsImN1cnJlbnRkYXRhIiwiRm9sbG93ZWQiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwiRm9sbG93aW5ncmVxdWVzdCIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiSGFuZGxlb3B0aW9ucyIsIm9wdGlvbnR5cGUiLCJvcHRpb25vYmoiLCJrZXkiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImJvcmRlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiRm9sbG93ZWRjb3VudCIsIkZvbGxvd2VyY291bnQiLCJDb250ZW50Y291bnQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGF0aG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1heFdpZHRoIiwiaW5kZXgiLCJDb250ZW50IiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1IQUFqQjtLQUFNRixXO0FBVU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9CQUFkO01BQU1DLFE7QUFJTixJQUFNQyxZQUFZLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseURBQWxCO01BQU1FLFk7QUFNTixJQUFNQyxrQkFBa0IsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw4S0FBeEI7TUFBTUcsa0I7QUFnQk4sSUFBTUMsZUFBZSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZJQUFyQjtNQUFNSSxlO0FBU04sSUFBTUMsV0FBVyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlDQUFqQjtNQUFN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LEVBQUUsd0hBTlQ7QUFPTCxxQkFBSyxFQUFFaEIsSUFBSSxDQUFDOUIsUUFBTCxHQUFnQjhCLElBQUksQ0FBQ3VDLEtBQXJCLEdBQTZCdkMsSUFBSSxDQUFDb0MsT0FBTCxDQUFhRyxLQVA1QztBQVFMLDBCQUFVLEVBQUUsYUFSUDtBQVNMLHdCQUFRLEVBQUV2QyxJQUFJLENBQUM5QixRQUFMLEdBQWdCOEIsSUFBSSxDQUFDOUIsUUFBTCxDQUFjOEMsU0FBOUIsR0FBMENoQixJQUFJLENBQUNvQyxPQUFMLENBQWFsRSxRQUFiLENBQXNCOEMsU0FUckU7QUFVTCwyQkFBVyxFQUFFaEIsSUFBSSxDQUFDOUIsUUFBTCxHQUFnQjhCLElBQUksQ0FBQzlCLFFBQUwsQ0FBYytDLFFBQTlCLEdBQXlDakIsSUFBSSxDQUFDb0MsT0FBTCxDQUFhbEUsUUFBYixDQUFzQjhDLFNBVnZFLENBVWlGO0FBVmpGO0FBWUwsb0JBQUksRUFBRXdCLElBQUksQ0FBQ0MsR0FBTDtBQVpELGlCQUtBTixLQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVQ7QUFjSCxhQWxCRDtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0ZIOztHQS9NdUIzRSxPO1VBR0hPLHNEOzs7T0FIR1AsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uOWVlMTUxZmIzZjcxMDkyMGVmZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJjb250ZW50fSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG50b3A6LTEyMHB4O1xyXG5sZWZ0OjE0MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHRvcDotMTAwcHg7XHJcbiAgICBsZWZ0OjE2MHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2Vyc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDoyNTBweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG5hbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbm1heC13aWR0aDo0MDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgT3B0aW9uYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxubWFyZ2luOmF1dG87XHJcbm1heC13aWR0aDo1MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uOmFsbCAwLjFzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmNvbG9yOiR7KHthcHBseWJvcmRlcn0pPT5hcHBseWJvcmRlciA/IFwiI2Q2MjgyOFwiIDogXCJibGFja1wifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjphdXRvO1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHtNeWRhdGEsQ291bnRzLHF1ZXJ5fSl7XHJcbiAgICBcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoTXlkYXRhLnBlcnNvbmFsKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtwcm9maWxlZGF0YSxzZXRwcm9maWxlZGF0YV09dXNlU3RhdGUoTXlkYXRhKVxyXG4gICAgY29uc3RbY2hlY2t1c2VyaWQsc2V0Y2hlY2t1c2VyaWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2JlaW5nZm9sbG93ZWQsc2V0YmVpbmdmb2xsb3dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbVGltZXRvcmVuZGVyLHNldHRpbWV0b3JlbmRlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbbm90aWZpY2F0aW9uYWN0aXZlLHNldG5vdGlmaWNhdGlvbmFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbb3B0aW9ucyxzZXRvcHRpb25zXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgUG9zdDp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJHw7ZuZGVyaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBuYW1lOlwiQmXEn2VuaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZXNob3c6e1xyXG4gICAgICAgICAgICBuYW1lOlwixLDFn2FyZXRsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG4gICBcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgaWYocXVlcnkubmFtZSA9PSBcIkxpa2VcIiB8fCBxdWVyeS5uYW1lID09IFwiUmV0d2VldFwiKXtcclxuXHJcbiAgICAgICAgR2V0dXNlcmNvbnRlbnQoe1xyXG4gICAgICAgICAgICBwYXJhbXM6cXVlcnkubmFtZSxcclxuICAgICAgICAgICAgVXNlcklkOnF1ZXJ5LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBzZXRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0dGltZXRvcmVuZGVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHF1ZXJ5LnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9idXJhZGEgdGFraXAgZXQgYnV0b251IHZlIGJpbGRpcmltIGJ1dG9udSBrYWxrxLFjYWsgeWVyaW5lIGJlbGtpIGF5YXJsYXIuXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgIE15ZGF0YS5Gb2xsb3dlZC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy96YXRlbiBidXJheWEgZ2lyZW1lbWnFnyBpc2UgZGVmYXVsdCBkZcSfZXIgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdXNlcmRhdGEscXVlcnldKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBcclxuICAgICAgc2V0cHJvZmlsZWRhdGEoey4uLk15ZGF0YX0pXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKFsuLi5NeWRhdGEucGVyc29uYWxdKVxyXG5cclxuICAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXF1ZXN0PSgpPT57XHJcblxyXG4gICAgICAgIHNldGJlaW5nZm9sbG93ZWQoIWJlaW5nZm9sbG93ZWQpO1xyXG5cclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgQ3JlYXRldXNlcnJlbGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIGNoZWNraWZmb2xsb3c6YmVpbmdmb2xsb3dlZCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhhbmRsZW9wdGlvbnM9KG9wdGlvbnR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbm9iaikge1xyXG4gICAgICAgICAgICBvcHRpb25vYmpba2V5XS5ib3R0b209ZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25vYmpbb3B0aW9udHlwZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UvPiBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgICAgIC8vYnVyYWRhIGNvbnRleHQgdXNlcklkIHlvayBpc2UgYnVuYSBpemluIHZlcm1peW9ydW0gYW5jYWsgc2V0c3RhdGUgb2xkdWd1bmRhIGfDtnN0ZXJpbSB2YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETyB0aGlzIHNob3VsZCBiZSBmaXhlZCBkdXJpbmcgbmF2aWdhaXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91c2VyZGF0YS51c2VyxLFkIHlva3NhIGt1bGxhbsSxY8SxIGdpcmnFnyB5YXBtYW3EscWfdMSxclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrdXNlcmlkICYmIFRpbWV0b3JlbmRlciAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmdmb2xsb3dlZCAmJiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbmFjdGl2ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zQWN0aXZlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT5zZXRub3RpZmljYXRpb25hY3RpdmUoZmFsc2UpfT48L05vdGlmaWNhdGlvbnNBY3RpdmU+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT5zZXRub3RpZmljYXRpb25hY3RpdmUodHJ1ZSl9PjwvTm90aWZpY2F0aW9ucz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+Rm9sbG93aW5ncmVxdWVzdChiZWluZ2ZvbGxvd2VkKX0gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYmFja2dyb3VuZENvbG9yOlwiIzBlYWQ2OVwiLHRleHRUcmFuc2Zvcm06XCJub25lXCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+e2JlaW5nZm9sbG93ZWQgPyBcIlRha2lwdGVuIMOHxLFrXCIgOiBcIlRha2lwIEV0XCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgIHN0eWxlPXt7Ym9yZGVyOlwiNHB4IHNvbGlkIHdoaXRlXCJ9fSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcHJvZmlsZT1cIi9sZWQuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZWRhdGEuZmlyc3RuYW1lICsgXCIgXCIgKyBwcm9maWxlZGF0YS5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM2Yzc1N2RcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZWRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXDDp2k8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlcmNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcCBFZGlsZW48L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Db250ZW50Y291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPkfDtm5kZXJpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiBzdHlsZT17e3dpZHRoOlwiODAlXCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nOlwiMTVweFwifX0+WW91J3JlIG5vdCBoYXZpbmcgdGhhdCBwcm9ibGVtIGhlcmUuIFRoZXJlIGlzIG5vIG5lZ2F0aXZlIHNwYWNlLiBUaGVyZWZvcmUsIEkgZG9uJ3QgYmVsaWV2ZSBmbGV4LXNocmluay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1VzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke015ZGF0YS5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpgJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25zIGFwcGx5Ym9yZGVyPXtvcHRpb25zW2l0ZW1dLmJvdHRvbX0gb25DbGljaz17KCk9PkhhbmRsZW9wdGlvbnMoaXRlbSl9PntvcHRpb25zW2l0ZW1dLm5hbWV9PC9PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjEwcHhcIixwYWRkaW5nTGVmdDpcIjEwcHhcIixtYXhXaWR0aDpcIjcwMHB4XCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLkNvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLkNvbnRlbnQucGVyc29uYWwuZmlyc3RuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIDxDb250ZW50Y2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e1tdfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0vL2tleSBudW1hcmFzxLFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0udGl0bGUgOiBpdGVtLkNvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IGl0ZW0uQ29udGVudC5wZXJzb25hbC5maXJzdG5hbWV9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e0RhdGUubm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50cGFydD5cclxuICAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=