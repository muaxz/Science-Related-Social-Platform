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
      Contentdata = _ref2.Contentdata,
      query = _ref2.query;
  console.log(Contentdata);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Contentdata),
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
    setcontentdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Contentdata));
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

_s(Profile, "D4R/W/ehAun9JUoifSo89SRzUIk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsIkNvbnRlbnRkYXRhIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwicHJvZmlsZWRhdGEiLCJzZXRwcm9maWxlZGF0YSIsImNoZWNrdXNlcmlkIiwic2V0Y2hlY2t1c2VyaWQiLCJiZWluZ2ZvbGxvd2VkIiwic2V0YmVpbmdmb2xsb3dlZCIsIlRpbWV0b3JlbmRlciIsInNldHRpbWV0b3JlbmRlciIsIm5vdGlmaWNhdGlvbmFjdGl2ZSIsInNldG5vdGlmaWNhdGlvbmFjdGl2ZSIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwidXNlRWZmZWN0IiwiTGVha2NvbnRyb2xsb2VyIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwiY3VycmVudGRhdGEiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJGb2xsb3dpbmdyZXF1ZXN0IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJIYW5kbGVvcHRpb25zIiwib3B0aW9udHlwZSIsIm9wdGlvbm9iaiIsImtleSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJGb2xsb3dlZGNvdW50IiwiRm9sbG93ZXJjb3VudCIsIkNvbnRlbnRjb3VudCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwYXRobmFtZSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWF4V2lkdGgiLCJpbmRleCIsIkNvbnRlbnQiLCJwZXJzb25hbCIsIlJldHdlZXQiLCJSZWFkbGF0ZXIiLCJhbGxjb21tZW50cyIsInRpdGxlIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG1IQUFqQjtLQUFNRixXO0FBVU4sSUFBTUcsUUFBUSxHQUFDRix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9CQUFkO01BQU1DLFE7QUFJTixJQUFNQyxZQUFZLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseURBQWxCO01BQU1FLFk7QUFNTixJQUFNQyxrQkFBa0IsR0FBQ0oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw4S0FBeEI7TUFBTUcsa0I7QUFnQk4sSUFBTUMsZUFBZSxHQUFDTCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZJQUFyQjtNQUFNSSxlO0FBU04sSUFBTUMsV0FBVyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHlDQUFqQjtNQUFNSyxXO0FBS04sSUFBTUMsV0FBVyxHQUFDUCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJOQUFqQjtNQUFNTSxXO0FBaUJOLElBQU1DLGNBQWMsR0FBQ1IseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxvQ0FBcEI7TUFBTU8sYztBQUlOLElBQU1DLFNBQVMsR0FBQ1QseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxzR0FBZjtNQUFNUSxTO0FBU04sSUFBTUMsT0FBTyxHQUFDVix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHVFQUlMO0FBQUEsTUFBRVUsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FBaUJBLFdBQVcsR0FBRyxTQUFILEdBQWUsT0FBM0M7QUFBQSxDQUpLLENBQWI7T0FBTUQsTztBQU9OLElBQU1FLFlBQVksR0FBQ1oseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxpRkFBbEI7T0FBTVcsWTtBQVFOLElBQU1DLENBQUMsR0FBR2IseURBQU0sQ0FBQ2MsQ0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBUDtPQUFNRCxDO0FBSU4sSUFBTUUsV0FBVyxHQUFDZix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLHFFQUFqQjtPQUFNYyxXO0FBU1MsU0FBU0MsT0FBVCxRQUFtRDtBQUFBOztBQUFBOztBQUFBLE1BQWpDQyxNQUFpQyxTQUFqQ0EsTUFBaUM7QUFBQSxNQUExQkMsTUFBMEIsU0FBMUJBLE1BQTBCO0FBQUEsTUFBbkJDLFdBQW1CLFNBQW5CQSxXQUFtQjtBQUFBLE1BQVBDLEtBQU8sU0FBUEEsS0FBTztBQUU5REMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7O0FBRjhELG9CQUc5Q0ksd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FIb0M7QUFBQSxNQUd4REMsUUFId0QsZUFHeERBLFFBSHdEOztBQUFBLG1CQUk3Q0MsOERBQVMsRUFKb0M7QUFBQSxNQUl2REMsTUFKdUQsY0FJdkRBLE1BSnVEOztBQUFBLGtCQUs1QkMsc0RBQVEsQ0FBQ1QsV0FBRCxDQUxvQjtBQUFBLE1BS3hEVSxXQUx3RDtBQUFBLE1BSzVDQyxjQUw0Qzs7QUFBQSxtQkFNeENGLHNEQUFRLENBQUMsRUFBRCxDQU5nQztBQUFBLE1BTXhERyxLQU53RDtBQUFBLE1BTWxEQyxRQU5rRDs7QUFBQSxtQkFPNUJKLHNEQUFRLENBQUNYLE1BQUQsQ0FQb0I7QUFBQSxNQU94RGdCLFdBUHdEO0FBQUEsTUFPNUNDLGNBUDRDOztBQUFBLG1CQVE1Qk4sc0RBQVEsQ0FBQyxLQUFELENBUm9CO0FBQUEsTUFReERPLFdBUndEO0FBQUEsTUFRNUNDLGNBUjRDOztBQUFBLG1CQVN4QlIsc0RBQVEsQ0FBQyxLQUFELENBVGdCO0FBQUEsTUFTeERTLGFBVHdEO0FBQUEsTUFTMUNDLGdCQVQwQzs7QUFBQSxtQkFVMUJWLHNEQUFRLENBQUMsS0FBRCxDQVZrQjtBQUFBLE1BVXhEVyxZQVZ3RDtBQUFBLE1BVTNDQyxlQVYyQzs7QUFBQSxtQkFXZFosc0RBQVEsQ0FBQyxLQUFELENBWE07QUFBQSxNQVd4RGEsa0JBWHdEO0FBQUEsTUFXckNDLHFCQVhxQzs7QUFBQSxtQkFZcENkLHNEQUFRLENBQUM7QUFDL0JlLFFBQUksRUFBQztBQUNEQyxVQUFJLEVBQUMsWUFESjtBQUVEakIsWUFBTSxFQUFDO0FBRk4sS0FEMEI7QUFLL0JrQixRQUFJLEVBQUM7QUFDREQsVUFBSSxFQUFDLFdBREo7QUFFRGpCLFlBQU0sRUFBQztBQUZOLEtBTDBCO0FBUy9CbUIsVUFBTSxFQUFDO0FBQ0hGLFVBQUksRUFBQyxXQURGO0FBRUhqQixZQUFNLEVBQUM7QUFGSjtBQVR3QixHQUFELENBWjRCO0FBQUEsTUFZeERvQixPQVp3RDtBQUFBLE1BWWhEQyxVQVpnRDs7QUE0Qi9EQyx5REFBUyxDQUFDLFlBQUk7QUFFWCxRQUFJQyxlQUFlLEdBQUcsSUFBdEI7O0FBQ0EsUUFBRzlCLEtBQUssQ0FBQ3dCLElBQU4sSUFBYyxNQUFkLElBQXdCeEIsS0FBSyxDQUFDd0IsSUFBTixJQUFjLFNBQXpDLEVBQW1EO0FBRWpETyw0RUFBcUIsQ0FBQztBQUNsQkMsY0FBTSxFQUFDaEMsS0FBSyxDQUFDaUMsUUFESztBQUVsQkMsZ0JBQVEsRUFBQ2xDLEtBQUssQ0FBQ3dCLElBRkc7QUFHbEJXLGVBQU8sRUFBQ3pCLGNBSFU7QUFJbEIwQixrQkFBVSxFQUFDLEtBSk87QUFLbEJOLHVCQUFlLEVBQUNBLGVBTEU7QUFNbEJuQixhQUFLLEVBQUMsRUFOWTtBQU9sQjBCLG1CQUFXLEVBQUM1QjtBQVBNLE9BQUQsQ0FBckI7QUFVRDs7QUFFRCxXQUFPLFlBQUk7QUFDUnFCLHFCQUFlLEdBQUMsS0FBaEI7QUFDRixLQUZEO0FBSUYsR0FyQlEsRUFxQlAsQ0FBQzlCLEtBQUQsQ0FyQk8sQ0FBVDtBQXVCQTZCLHlEQUFTLENBQUMsWUFBSSxDQUViLENBRlEsRUFFUCxFQUZPLENBQVQ7QUFJQ0EseURBQVMsQ0FBQyxZQUFJO0FBRVYsUUFBR3hCLFFBQVEsQ0FBQzJCLE1BQVosRUFBbUI7QUFFZloscUJBQWUsQ0FBQyxJQUFELENBQWY7O0FBRUEsVUFBR2YsUUFBUSxDQUFDMkIsTUFBVCxJQUFtQmhDLEtBQUssQ0FBQ2lDLFFBQTVCLEVBQXFDO0FBR2pDakIsc0JBQWMsQ0FBQyxJQUFELENBQWQsQ0FIaUMsQ0FJakM7QUFHSCxPQVBELE1BUUk7QUFFR25CLGNBQU0sQ0FBQ3lDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFVBQUFDLElBQUksRUFBRTtBQUV6QixjQUFHQSxJQUFJLENBQUNDLEVBQUwsSUFBV3BDLFFBQVEsQ0FBQzJCLE1BQXZCLEVBQThCO0FBRTFCZCw0QkFBZ0IsQ0FBQyxJQUFELENBQWhCLENBRjBCLENBRzFCO0FBQ0g7QUFFSixTQVJGO0FBU047QUFFSjtBQUVKLEdBN0JRLEVBNkJQLENBQUNiLFFBQUQsRUFBVUwsS0FBVixDQTdCTyxDQUFUO0FBK0JBNkIseURBQVMsQ0FBQyxZQUFJO0FBRVpmLGtCQUFjLG1CQUFLakIsTUFBTCxFQUFkO0FBQ0FhLGtCQUFjLENBQUMsa0pBQUlYLFdBQUwsRUFBZDtBQUVELEdBTFEsRUFLUCxDQUFDQyxLQUFELENBTE8sQ0FBVDs7QUFTQSxNQUFNMEMsZ0JBQWdCLEdBQUMsU0FBakJBLGdCQUFpQixHQUFJO0FBRXZCeEIsb0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUFoQjs7QUFFQSxRQUFHWixRQUFRLENBQUMyQixNQUFaLEVBQW1CO0FBRWZXLHlFQUFrQixDQUFDO0FBQ2ZYLGNBQU0sRUFBQzNCLFFBQVEsQ0FBQzJCLE1BREQ7QUFFZlksa0JBQVUsRUFBQy9DLE1BQU0sQ0FBQzRDLEVBRkg7QUFHZkkscUJBQWEsRUFBQzVCO0FBSEMsT0FBRCxDQUFsQjtBQU1IO0FBR0osR0FmRDs7QUFpQkEsTUFBTTZCLGFBQWEsR0FBQyxTQUFkQSxhQUFjLENBQUNDLFVBQUQsRUFBYztBQUU5QixRQUFNQyxTQUFTLHFCQUFLckIsT0FBTCxDQUFmOztBQUVBLFNBQUssSUFBTXNCLEdBQVgsSUFBa0JELFNBQWxCLEVBQTZCO0FBQ3pCQSxlQUFTLENBQUNDLEdBQUQsQ0FBVCxDQUFlMUMsTUFBZixHQUFzQixLQUF0QjtBQUNIOztBQUVEeUMsYUFBUyxDQUFDRCxVQUFELENBQVQsQ0FBc0J4QyxNQUF0QixHQUE2QixJQUE3QjtBQUNBcUIsY0FBVSxDQUFDb0IsU0FBRCxDQUFWO0FBQ0gsR0FWRDs7QUFZQSxzQkFDSSxxRUFBQyxXQUFEO0FBQUEsMkJBQ0kscUVBQUMsUUFBRDtBQUFBLDhCQUNJLHFFQUFDLFlBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFWTtBQUNBO0FBQ0E7QUFDQSxTQUFDakMsV0FBRCxJQUFnQkksWUFBaEIsaUJBRUMscUVBQUMsWUFBRDtBQUFBLHFCQUVPRixhQUFhLElBRWJJLGtCQUZBLGdCQUlDLHFFQUFDLHVFQUFEO0FBQXFCLGlCQUFLLEVBQUU7QUFBQzZCLG1CQUFLLEVBQUMsT0FBUDtBQUFlQyx5QkFBVyxFQUFDLE1BQTNCO0FBQWtDQyxvQkFBTSxFQUFDO0FBQXpDLGFBQTVCO0FBQWlGLG1CQUFPLEVBQUU7QUFBQSxxQkFBSTlCLHFCQUFxQixDQUFDLEtBQUQsQ0FBekI7QUFBQTtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGdCQVFDLHFFQUFDLGlFQUFEO0FBQWUsaUJBQUssRUFBRTtBQUFDNEIsbUJBQUssRUFBQyxPQUFQO0FBQWVDLHlCQUFXLEVBQUMsTUFBM0I7QUFBa0NDLG9CQUFNLEVBQUM7QUFBekMsYUFBdEI7QUFBMkUsbUJBQU8sRUFBRTtBQUFBLHFCQUFJOUIscUJBQXFCLENBQUMsSUFBRCxDQUF6QjtBQUFBO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVlIsZUFZRCxxRUFBQyx3REFBRDtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBSW9CLGdCQUFnQixDQUFDekIsYUFBRCxDQUFwQjtBQUFBLGFBQWpCO0FBQXNELGlCQUFLLEVBQUU7QUFBQ2lDLG1CQUFLLEVBQUMsT0FBUDtBQUFlRyw2QkFBZSxFQUFDLFNBQS9CO0FBQXlDQywyQkFBYSxFQUFDO0FBQXZELGFBQTdEO0FBQTZILG1CQUFPLEVBQUMsV0FBckk7QUFBQSxzQkFBa0pyQyxhQUFhLEdBQUcsY0FBSCxHQUFvQjtBQUFuTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQXdCSSxxRUFBQyxXQUFEO0FBQUEsZ0NBQ0sscUVBQUMsV0FBRDtBQUFBLGtDQUNJLHFFQUFDLGtCQUFEO0FBQUEsbUNBQ0kscUVBQUMsZ0ZBQUQ7QUFBZSxtQkFBSyxFQUFFO0FBQUNzQyxzQkFBTSxFQUFDO0FBQVIsZUFBdEI7QUFBa0QsbUJBQUssRUFBQyxNQUF4RDtBQUErRCxvQkFBTSxFQUFDLE1BQXRFO0FBQTZFLHFCQUFPLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFBLHNCQUFLMUMsV0FBVyxDQUFDMkMsU0FBWixHQUF3QixHQUF4QixHQUE4QjNDLFdBQVcsQ0FBQzRDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFNLGlCQUFLLEVBQUU7QUFBQ1AsbUJBQUssRUFBQztBQUFQLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFLLGlCQUFLLEVBQUU7QUFBQ1EscUJBQU8sRUFBQyxNQUFUO0FBQWdCQyx1QkFBUyxFQUFDLE1BQTFCO0FBQWlDQywwQkFBWSxFQUFDLE1BQTlDO0FBQXFEQyw0QkFBYyxFQUFDO0FBQXBFLGFBQVo7QUFBQSxvQ0FDRztBQUFBLHNDQUNJLHFFQUFDLENBQUQ7QUFBQSwwQkFBSS9ELE1BQU0sQ0FBQ2dFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBS0c7QUFBQSxzQ0FDSSxxRUFBQyxDQUFEO0FBQUEsMEJBQUloRSxNQUFNLENBQUNpRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyxDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSCxlQVNHO0FBQUEsc0NBQ0kscUVBQUMsQ0FBRDtBQUFBLDBCQUFJakUsTUFBTSxDQUFDa0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBb0JJLHFFQUFDLFdBQUQ7QUFBYSxpQkFBSyxFQUFFO0FBQUNDLG1CQUFLLEVBQUMsS0FBUDtBQUFhQyxvQkFBTSxFQUFDO0FBQXBCLGFBQXBCO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUcsbUJBQUssRUFBRTtBQUFDQyx1QkFBTyxFQUFDO0FBQVQsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREwsZUEyQksscUVBQUMsY0FBRDtBQUFBLGtDQUNPLHFFQUFDLFNBQUQ7QUFBQSxzQkFFR0MsTUFBTSxDQUFDQyxJQUFQLENBQVkxQyxPQUFaLEVBQXFCMkMsR0FBckIsQ0FBeUIsVUFBQzlCLElBQUQ7QUFBQSxrQ0FDckIscUVBQUMsaURBQUQ7QUFBTyxvQkFBSSxFQUFFO0FBQ1QrQiwwQkFBUSxxQkFBYTFFLE1BQU0sQ0FBQzRDLEVBQXBCLENBREM7QUFFVHpDLHVCQUFLLEVBQUM7QUFBQ3dCLHdCQUFJLFlBQUlnQixJQUFKO0FBQUw7QUFGRyxpQkFBYjtBQUFBLHVDQUtHLHFFQUFDLE9BQUQ7QUFBUyw2QkFBVyxFQUFFYixPQUFPLENBQUNhLElBQUQsQ0FBUCxDQUFjakMsTUFBcEM7QUFBNEMseUJBQU8sRUFBRTtBQUFBLDJCQUFJdUMsYUFBYSxDQUFDTixJQUFELENBQWpCO0FBQUEsbUJBQXJEO0FBQUEsNEJBQStFYixPQUFPLENBQUNhLElBQUQsQ0FBUCxDQUFjaEI7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHFCO0FBQUEsYUFBekI7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURQLGVBY007QUFBSyxpQkFBSyxFQUFFO0FBQUNnRCwwQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLHlCQUFXLEVBQUMsTUFBakM7QUFBd0NDLHNCQUFRLEVBQUMsT0FBakQ7QUFBeURSLG9CQUFNLEVBQUM7QUFBaEUsYUFBWjtBQUFBLHNCQUVLekQsV0FBVyxDQUFDNkQsR0FBWixDQUFnQixVQUFDOUIsSUFBRCxFQUFNbUMsS0FBTixFQUFjO0FBQzFCLGtCQUFHbkMsSUFBSSxDQUFDb0MsT0FBUixFQUFnQjtBQUNiM0UsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0MsSUFBSSxDQUFDb0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCckIsU0FBbEM7QUFDRjs7QUFDRCxrQ0FBUyxxRUFBQyxzRUFBRDtBQUVMLG9CQUFJLEVBQUVoQixJQUFJLENBQUNxQyxRQUFMLEdBQWdCckMsSUFBSSxDQUFDZixJQUFyQixHQUE0QmUsSUFBSSxDQUFDb0MsT0FBTCxDQUFhbkQsSUFGMUMsQ0FFK0M7QUFGL0M7QUFHTCx1QkFBTyxFQUFFZSxJQUFJLENBQUNxQyxRQUFMLEdBQWdCckMsSUFBSSxDQUFDc0MsT0FBckIsR0FBK0J0QyxJQUFJLENBQUNvQyxPQUFMLENBQWFFLE9BSGhEO0FBSUwseUJBQVMsRUFBRXRDLElBQUksQ0FBQ3FDLFFBQUwsR0FBZ0JyQyxJQUFJLENBQUN1QyxTQUFyQixHQUFpQ3ZDLElBQUksQ0FBQ29DLE9BQUwsQ0FBYUcsU0FKcEQ7QUFLTCx1QkFBTyxFQUFFdkMsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQnJDLElBQUksQ0FBQ3dDLFdBQXJCLEdBQW1DeEMsSUFBSSxDQUFDb0MsT0FBTCxDQUFhSSxXQUxwRDtBQU1MLDRCQUFZLEVBQUUsd0hBTlQ7QUFPTCxxQkFBSyxFQUFFeEMsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQnJDLElBQUksQ0FBQ3lDLEtBQXJCLEdBQTZCekMsSUFBSSxDQUFDb0MsT0FBTCxDQUFhSyxLQVA1QztBQVFMLDBCQUFVLEVBQUUsYUFSUDtBQVNMLHdCQUFRLEVBQUV6QyxJQUFJLENBQUNxQyxRQUFMLEdBQWdCckMsSUFBSSxDQUFDcUMsUUFBTCxDQUFjckIsU0FBOUIsR0FBMENoQixJQUFJLENBQUNvQyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JyQixTQVRyRTtBQVVMLDJCQUFXLEVBQUVoQixJQUFJLENBQUNxQyxRQUFMLEdBQWdCckMsSUFBSSxDQUFDcUMsUUFBTCxDQUFjcEIsUUFBOUIsR0FBeUNqQixJQUFJLENBQUNvQyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JwQixRQVZ2RSxDQVVnRjtBQVZoRjtBQVlMLG9CQUFJLEVBQUV5QixJQUFJLENBQUNDLEdBQUw7QUFaRCxpQkFDQVIsS0FEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFUO0FBY0gsYUFsQkQ7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStGSDs7R0EzTnVCL0UsTztVQUlIVSxzRDs7O09BSkdWLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmYzOTM4YTVkMjFhZGI3YjMyNjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0NyZWF0ZXVzZXJyZWxhdGlvbixHZXR1c2VycHJvZmlsZWNvbnRlbnR9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxNDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbnBhZGRpbmctbGVmdDo2MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MjUwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEyMHB4O1xyXG5oZWlnaHQ6MTIwcHg7XHJcbnRvcDotMTIwcHg7XHJcbmxlZnQ6MTQwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6OTBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgdG9wOi0xMDBweDtcclxuICAgIGxlZnQ6MTYwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQ29udGVudHNlY3Rpb249c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBPcHRpb25iYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5tYXJnaW46YXV0bztcclxubWF4LXdpZHRoOjUwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE9wdGlvbnM9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb246YWxsIDAuMXM7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuY29sb3I6JHsoe2FwcGx5Ym9yZGVyfSk9PmFwcGx5Ym9yZGVyID8gXCIjZDYyODI4XCIgOiBcImJsYWNrXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b25Ib2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MTBweDtcclxucmlnaHQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5wYFxyXG5mb250LXdlaWdodDo2MDA7XHJcbmBcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOmF1dG87XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoe015ZGF0YSxDb3VudHMsQ29udGVudGRhdGEscXVlcnl9KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhDb250ZW50ZGF0YSlcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoQ29udGVudGRhdGEpO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W3Byb2ZpbGVkYXRhLHNldHByb2ZpbGVkYXRhXT11c2VTdGF0ZShNeWRhdGEpXHJcbiAgICBjb25zdFtjaGVja3VzZXJpZCxzZXRjaGVja3VzZXJpZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYmVpbmdmb2xsb3dlZCxzZXRiZWluZ2ZvbGxvd2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtUaW1ldG9yZW5kZXIsc2V0dGltZXRvcmVuZGVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtub3RpZmljYXRpb25hY3RpdmUsc2V0bm90aWZpY2F0aW9uYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBQb3N0OntcclxuICAgICAgICAgICAgbmFtZTpcIkfDtm5kZXJpbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJCZcSfZW5pbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlc2hvdzp7XHJcbiAgICAgICAgICAgIG5hbWU6XCLEsMWfYXJldGxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgIFxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICB2YXIgTGVha2NvbnRyb2xsb2VyID0gdHJ1ZTtcclxuICAgICAgaWYocXVlcnkubmFtZSA9PSBcIkxpa2VcIiB8fCBxdWVyeS5uYW1lID09IFwiUmV0d2VldFwiKXtcclxuXHJcbiAgICAgICAgR2V0dXNlcnByb2ZpbGVjb250ZW50KHtcclxuICAgICAgICAgICAgVXNlcklkOnF1ZXJ5LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTpxdWVyeS5uYW1lLFxyXG4gICAgICAgICAgICBzZXRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICBwYWlnbmF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBMZWFrY29udHJvbGxvZXI6TGVha2NvbnRyb2xsb2VyLFxyXG4gICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICBMZWFrY29udHJvbGxvZXI9ZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0dGltZXRvcmVuZGVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHF1ZXJ5LnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9idXJhZGEgdGFraXAgZXQgYnV0b251IHZlIGJpbGRpcmltIGJ1dG9udSBrYWxrxLFjYWsgeWVyaW5lIGJlbGtpIGF5YXJsYXIuXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgIE15ZGF0YS5Gb2xsb3dlZC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy96YXRlbiBidXJheWEgZ2lyZW1lbWnFnyBpc2UgZGVmYXVsdCBkZcSfZXIgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdXNlcmRhdGEscXVlcnldKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBcclxuICAgICAgc2V0cHJvZmlsZWRhdGEoey4uLk15ZGF0YX0pXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKFsuLi5Db250ZW50ZGF0YV0pXHJcblxyXG4gICAgfSxbcXVlcnldKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IEZvbGxvd2luZ3JlcXVlc3Q9KCk9PntcclxuXHJcbiAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCghYmVpbmdmb2xsb3dlZCk7XHJcblxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBDcmVhdGV1c2VycmVsYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VkSWQ6TXlkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpiZWluZ2ZvbGxvd2VkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGFuZGxlb3B0aW9ucz0ob3B0aW9udHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ub2JqPXsuLi5vcHRpb25zfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ub2JqKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbm9ialtrZXldLmJvdHRvbT1mYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbm9ialtvcHRpb250eXBlXS5ib3R0b209dHJ1ZTtcclxuICAgICAgICBzZXRvcHRpb25zKG9wdGlvbm9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgICAgLy9idXJhZGEgY29udGV4dCB1c2VySWQgeW9rIGlzZSBidW5hIGl6aW4gdmVybWl5b3J1bSBhbmNhayBzZXRzdGF0ZSBvbGR1Z3VuZGEgZ8O2c3RlcmltIHZhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIHRoaXMgc2hvdWxkIGJlIGZpeGVkIGR1cmluZyBuYXZpZ2FpdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VzZXJkYXRhLnVzZXLEsWQgeW9rc2Ega3VsbGFuxLFjxLEgZ2lyacWfIHlhcG1hbcSxxZ90xLFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2t1c2VyaWQgJiYgVGltZXRvcmVuZGVyICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxCdXR0b25Ib2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZ2ZvbGxvd2VkICYmIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uYWN0aXZlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnNBY3RpdmUgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17KCk9PnNldG5vdGlmaWNhdGlvbmFjdGl2ZShmYWxzZSl9PjwvTm90aWZpY2F0aW9uc0FjdGl2ZT4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17KCk9PnNldG5vdGlmaWNhdGlvbmFjdGl2ZSh0cnVlKX0+PC9Ob3RpZmljYXRpb25zPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Gb2xsb3dpbmdyZXF1ZXN0KGJlaW5nZm9sbG93ZWQpfSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMGVhZDY5XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIj57YmVpbmdmb2xsb3dlZCA/IFwiVGFraXB0ZW4gw4fEsWtcIiA6IFwiVGFraXAgRXRcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ib2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSAgc3R5bGU9e3tib3JkZXI6XCI0cHggc29saWQgd2hpdGVcIn19IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBwcm9maWxlPVwiL2xlZC5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9maWxlZGF0YS5maXJzdG5hbWUgKyBcIiBcIiArIHByb2ZpbGVkYXRhLmxhc3RuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzZjNzU3ZFwifX0+VUkgZGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCIxMHB4XCIsbWFyZ2luQm90dG9tOlwiNDBweFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlZGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcMOnaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VyY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lwIEVkaWxlbjwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkNvbnRlbnRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+R8O2bmRlcmk8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHN0eWxlPXt7d2lkdGg6XCI4MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCIxNXB4XCJ9fT5Zb3UncmUgbm90IGhhdmluZyB0aGF0IHByb2JsZW0gaGVyZS4gVGhlcmUgaXMgbm8gbmVnYXRpdmUgc3BhY2UuIFRoZXJlZm9yZSwgSSBkb24ndCBiZWxpZXZlIGZsZXgtc2hyaW5rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7TXlkYXRhLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOmAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbnMgYXBwbHlib3JkZXI9e29wdGlvbnNbaXRlbV0uYm90dG9tfSBvbkNsaWNrPXsoKT0+SGFuZGxlb3B0aW9ucyhpdGVtKX0+e29wdGlvbnNbaXRlbV0ubmFtZX08L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwiLG1heFdpZHRoOlwiNzAwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uQ29udGVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uQ29udGVudC5wZXJzb25hbC5maXJzdG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLkxpa2UgOiBpdGVtLkNvbnRlbnQuTGlrZX0vL2J1IGJpciBvYmplIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR3ZWV0PXtpdGVtLnBlcnNvbmFsID8gaXRlbS5SZXR3ZWV0IDogaXRlbS5Db250ZW50LlJldHdlZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkbGF0ZXI9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLlJlYWRsYXRlciA6IGl0ZW0uQ29udGVudC5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtpdGVtLnBlcnNvbmFsID8gaXRlbS5hbGxjb21tZW50cyA6IGl0ZW0uQ29udGVudC5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVpbWFnZT17XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81OTQ2MTAvcGV4ZWxzLXBob3RvLTU5NDYxMC5qcGVnP2NzPXNyZ2ImZGw9cGV4ZWxzLW1hcnRpbi1wJUMzJUE5Y2h5LTU5NDYxMC5qcGcmZm09anBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0udGl0bGUgOiBpdGVtLkNvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWltYWdlPXtcIi95YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IGl0ZW0uQ29udGVudC5wZXJzb25hbC5sYXN0bmFtZX0vL2JpciBvYmplIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==