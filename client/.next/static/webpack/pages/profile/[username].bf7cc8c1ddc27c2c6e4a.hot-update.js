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
      contents = _ref2.contents,
      query = _ref2.query;
  console.log(Mydata);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contents),
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
    var Leakcontrolloer = true;

    if (query.name == "Like" || query.name == "Retweet") {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Getuserprofilecontent"])({
        UserId: query.username,
        category: query.name,
        setdata: setcontentdata,
        paignation: false,
        Leakcontrolloer: Leakcontrolloer,
        order: 10,
        currentdata: contentdata
      });
    }

    return function () {
      Leakcontrolloer = false;
    };
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);
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
    setcontentdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(contents));
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
          lineNumber: 250,
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
            lineNumber: 262,
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
            lineNumber: 266,
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
            lineNumber: 268,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
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
              lineNumber: 275,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
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
                lineNumber: 281,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
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
                  lineNumber: 308,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
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
                like: item.personal ? item.Like : item.Content.Like //bu bir obje array
                ,
                retweet: item.personal ? item.Retweet : item.Content.Retweet,
                readlater: item.personal ? item.Readlater : item.Content.Readlater,
                comment: item.personal ? item.allcomments : item.Content.allcomments,
                profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
                title: item.personal ? item.title : item.Content.title,
                titleimage: "/yaprak.jpg",
                username: item.personal ? item.personal.firstname : item.Content.personal.firstname,
                usersurname: item.personal ? item.personal.lastname : item.Content.personal.lastname //bir obje props
                ,
                date: Date.now()
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 46
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 9
  }, this);
}

_s(Profile, "KImtY0RGkvxUoO1JeB0XuyAVGyM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsImNvbnRlbnRzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwicHJvZmlsZWRhdGEiLCJzZXRwcm9maWxlZGF0YSIsImNoZWNrdXNlcmlkIiwic2V0Y2hlY2t1c2VyaWQiLCJiZWluZ2ZvbGxvd2VkIiwic2V0YmVpbmdmb2xsb3dlZCIsIlRpbWV0b3JlbmRlciIsInNldHRpbWV0b3JlbmRlciIsIm5vdGlmaWNhdGlvbmFjdGl2ZSIsInNldG5vdGlmaWNhdGlvbmFjdGl2ZSIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwidXNlRWZmZWN0IiwiTGVha2NvbnRyb2xsb2VyIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwiY3VycmVudGRhdGEiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJGb2xsb3dpbmdyZXF1ZXN0IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJIYW5kbGVvcHRpb25zIiwib3B0aW9udHlwZSIsIm9wdGlvbm9iaiIsImtleSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJGb2xsb3dlZGNvdW50IiwiRm9sbG93ZXJjb3VudCIsIkNvbnRlbnRjb3VudCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwYXRobmFtZSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWF4V2lkdGgiLCJpbmRleCIsIkNvbnRlbnQiLCJwZXJzb25hbCIsIlJldHdlZXQiLCJSZWFkbGF0ZXIiLCJhbGxjb21tZW50cyIsInRpdGxlIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1IQUFqQjtLQUFNRixXO0FBVU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9CQUFkO01BQU1DLFE7QUFJTixJQUFNQyxZQUFZLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseURBQWxCO01BQU1FLFk7QUFNTixJQUFNQyxrQkFBa0IsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw4S0FBeEI7TUFBTUcsa0I7QUFnQk4sSUFBTUMsZUFBZSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFB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aEIsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQnJDLElBQUksQ0FBQ3FDLFFBQUwsQ0FBY3BCLFFBQTlCLEdBQXlDakIsSUFBSSxDQUFDb0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCcEIsUUFWdkUsQ0FVZ0Y7QUFWaEY7QUFZTCxvQkFBSSxFQUFFeUIsSUFBSSxDQUFDQyxHQUFMO0FBWkQsaUJBQ0FSLEtBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBVDtBQWNILGFBbEJEO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErRkg7O0dBM051Qi9FLE87VUFJSFUsc0Q7OztPQUpHVixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5iZjdjYzhjMWRkYzI3YzJjNmU0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCJcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtDcmVhdGV1c2VycmVsYXRpb24sR2V0dXNlcnByb2ZpbGVjb250ZW50fSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBDb250ZW50Y2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG50b3A6LTEyMHB4O1xyXG5sZWZ0OjE0MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHRvcDotMTAwcHg7XHJcbiAgICBsZWZ0OjE2MHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2Vyc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDoyNTBweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG5hbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbm1heC13aWR0aDo0MDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgT3B0aW9uYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxubWFyZ2luOmF1dG87XHJcbm1heC13aWR0aDo1MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uOmFsbCAwLjFzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmNvbG9yOiR7KHthcHBseWJvcmRlcn0pPT5hcHBseWJvcmRlciA/IFwiI2Q2MjgyOFwiIDogXCJibGFja1wifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjphdXRvO1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHtNeWRhdGEsQ291bnRzLGNvbnRlbnRzLHF1ZXJ5fSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgY29uc3R7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge2JvdHRvbX0gPSB1c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShjb250ZW50cyk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbcHJvZmlsZWRhdGEsc2V0cHJvZmlsZWRhdGFdPXVzZVN0YXRlKE15ZGF0YSlcclxuICAgIGNvbnN0W2NoZWNrdXNlcmlkLHNldGNoZWNrdXNlcmlkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtiZWluZ2ZvbGxvd2VkLHNldGJlaW5nZm9sbG93ZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W1RpbWV0b3JlbmRlcixzZXR0aW1ldG9yZW5kZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W25vdGlmaWNhdGlvbmFjdGl2ZSxzZXRub3RpZmljYXRpb25hY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIFBvc3Q6e1xyXG4gICAgICAgICAgICBuYW1lOlwiR8O2bmRlcmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOnRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbmFtZTpcIkJlxJ9lbmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVzaG93OntcclxuICAgICAgICAgICAgbmFtZTpcIsSwxZ9hcmV0bGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuICAgXHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIHZhciBMZWFrY29udHJvbGxvZXIgPSB0cnVlO1xyXG4gICAgICBpZihxdWVyeS5uYW1lID09IFwiTGlrZVwiIHx8IHF1ZXJ5Lm5hbWUgPT0gXCJSZXR3ZWV0XCIpe1xyXG5cclxuICAgICAgICBHZXR1c2VycHJvZmlsZWNvbnRlbnQoe1xyXG4gICAgICAgICAgICBVc2VySWQ6cXVlcnkudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OnF1ZXJ5Lm5hbWUsXHJcbiAgICAgICAgICAgIHNldGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIExlYWtjb250cm9sbG9lcjpMZWFrY29udHJvbGxvZXIsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgIExlYWtjb250cm9sbG9lcj1mYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgfSxbcXVlcnldKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW1ldG9yZW5kZXIodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gcXVlcnkudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Y2hlY2t1c2VyaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2J1cmFkYSB0YWtpcCBldCBidXRvbnUgdmUgYmlsZGlyaW0gYnV0b251IGthbGvEsWNhayB5ZXJpbmUgYmVsa2kgYXlhcmxhci5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgTXlkYXRhLkZvbGxvd2VkLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxxdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIFxyXG4gICAgICBzZXRwcm9maWxlZGF0YSh7Li4uTXlkYXRhfSlcclxuICAgICAgc2V0Y29udGVudGRhdGEoWy4uLmNvbnRlbnRzXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxdWVzdD0oKT0+e1xyXG5cclxuICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKCFiZWluZ2ZvbGxvd2VkKTtcclxuXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBjaGVja2lmZm9sbG93OmJlaW5nZm9sbG93ZWQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIYW5kbGVvcHRpb25zPShvcHRpb250eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAvL2J1cmFkYSBjb250ZXh0IHVzZXJJZCB5b2sgaXNlIGJ1bmEgaXppbiB2ZXJtaXlvcnVtIGFuY2FrIHNldHN0YXRlIG9sZHVndW5kYSBnw7ZzdGVyaW0gdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gdGhpcyBzaG91bGQgYmUgZml4ZWQgZHVyaW5nIG5hdmlnYWl0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNlcmRhdGEudXNlcsSxZCB5b2tzYSBrdWxsYW7EsWPEsSBnaXJpxZ8geWFwbWFtxLHFn3TEsXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja3VzZXJpZCAmJiBUaW1ldG9yZW5kZXIgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25hY3RpdmUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKGZhbHNlKX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKHRydWUpfT48L05vdGlmaWNhdGlvbnM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkZvbGxvd2luZ3JlcXVlc3QoYmVpbmdmb2xsb3dlZCl9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmRDb2xvcjpcIiMwZWFkNjlcIix0ZXh0VHJhbnNmb3JtOlwibm9uZVwifX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPntiZWluZ2ZvbGxvd2VkID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlICBzdHlsZT17e2JvcmRlcjpcIjRweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByb2ZpbGU9XCIvbGVkLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGVkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvZmlsZWRhdGEubGFzdG5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjNmM3NTdkXCJ9fT5VSSBkZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjEwcHhcIixtYXJnaW5Cb3R0b206XCI0MHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VkY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lww6dpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZXJjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXAgRWRpbGVuPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuQ29udGVudGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5Hw7ZuZGVyaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Vc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtNeWRhdGEuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ucyBhcHBseWJvcmRlcj17b3B0aW9uc1tpdGVtXS5ib3R0b219IG9uQ2xpY2s9eygpPT5IYW5kbGVvcHRpb25zKGl0ZW0pfT57b3B0aW9uc1tpdGVtXS5uYW1lfTwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIxMHB4XCIscGFkZGluZ0xlZnQ6XCIxMHB4XCIsbWF4V2lkdGg6XCI3MDBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5Db250ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5Db250ZW50LnBlcnNvbmFsLmZpcnN0bmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0uTGlrZSA6IGl0ZW0uQ29udGVudC5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLlJldHdlZXQgOiBpdGVtLkNvbnRlbnQuUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5wZXJzb25hbCA/IGl0ZW0uUmVhZGxhdGVyIDogaXRlbS5Db250ZW50LlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLmFsbGNvbW1lbnRzIDogaXRlbS5Db250ZW50LmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnBlcnNvbmFsID8gaXRlbS50aXRsZSA6IGl0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wiL3lhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBpdGVtLkNvbnRlbnQucGVyc29uYWwuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmxhc3RuYW1lfS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9