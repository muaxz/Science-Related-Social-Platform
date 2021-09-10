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
        ownerpost: query.name == "Post" ? "true" : "fasle",
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
          lineNumber: 251,
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
            lineNumber: 263,
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
            lineNumber: 267,
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
            lineNumber: 269,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
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
              lineNumber: 276,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
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
                lineNumber: 282,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
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
                  lineNumber: 309,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
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
                date: item.personal ? item.createdAt : item.Content.createdAt
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 46
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 248,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsIkNvbnRlbnRkYXRhIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsImNvbnRlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldG9yZGVyIiwicHJvZmlsZWRhdGEiLCJzZXRwcm9maWxlZGF0YSIsImNoZWNrdXNlcmlkIiwic2V0Y2hlY2t1c2VyaWQiLCJiZWluZ2ZvbGxvd2VkIiwic2V0YmVpbmdmb2xsb3dlZCIsIlRpbWV0b3JlbmRlciIsInNldHRpbWV0b3JlbmRlciIsIm5vdGlmaWNhdGlvbmFjdGl2ZSIsInNldG5vdGlmaWNhdGlvbmFjdGl2ZSIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwidXNlRWZmZWN0IiwiTGVha2NvbnRyb2xsb2VyIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwib3duZXJwb3N0IiwiY3VycmVudGRhdGEiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJGb2xsb3dpbmdyZXF1ZXN0IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJIYW5kbGVvcHRpb25zIiwib3B0aW9udHlwZSIsIm9wdGlvbm9iaiIsImtleSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJGb2xsb3dlZGNvdW50IiwiRm9sbG93ZXJjb3VudCIsIkNvbnRlbnRjb3VudCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwYXRobmFtZSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWF4V2lkdGgiLCJpbmRleCIsIkNvbnRlbnQiLCJwZXJzb25hbCIsIlJldHdlZXQiLCJSZWFkbGF0ZXIiLCJhbGxjb21tZW50cyIsInRpdGxlIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUNDLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsbUhBQWpCO0tBQU1GLFc7QUFVTixJQUFNRyxRQUFRLEdBQUNGLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7TUFBTUMsUTtBQUlOLElBQU1DLFlBQVksR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx5REFBbEI7TUFBTUUsWTtBQU1OLElBQU1DLGtCQUFrQixHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDhLQUF4QjtNQUFNRyxrQjtBQWdCTixJQUFNQyxlQUFlLEdBQUNMLHlEQUFNLENBQUND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Q0FBQ3FDLFFBQUwsQ0FBY3JCLFNBQTlCLEdBQTBDaEIsSUFBSSxDQUFDb0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCckIsU0FUckU7QUFVTCwyQkFBVyxFQUFFaEIsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQnJDLElBQUksQ0FBQ3FDLFFBQUwsQ0FBY3BCLFFBQTlCLEdBQXlDakIsSUFBSSxDQUFDb0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCcEIsUUFWdkUsQ0FVZ0Y7QUFWaEY7QUFZTCxvQkFBSSxFQUFFakIsSUFBSSxDQUFDcUMsUUFBTCxHQUFnQnJDLElBQUksQ0FBQzBDLFNBQXJCLEdBQWlDMUMsSUFBSSxDQUFDb0MsT0FBTCxDQUFhTTtBQVovQyxpQkFDQVAsS0FEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFUO0FBY0gsYUFsQkQ7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStGSDs7R0E1TnVCaEYsTztVQUlIVSxzRDs7O09BSkdWLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjcxMjZmZmViYzIyMzU1NzA4ZDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIlxyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge0NyZWF0ZXVzZXJyZWxhdGlvbixHZXR1c2VycHJvZmlsZWNvbnRlbnR9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxNDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbnBhZGRpbmctbGVmdDo2MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MjUwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEyMHB4O1xyXG5oZWlnaHQ6MTIwcHg7XHJcbnRvcDotMTIwcHg7XHJcbmxlZnQ6MTQwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6OTBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgdG9wOi0xMDBweDtcclxuICAgIGxlZnQ6MTYwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQ29udGVudHNlY3Rpb249c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBPcHRpb25iYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5tYXJnaW46YXV0bztcclxubWF4LXdpZHRoOjUwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE9wdGlvbnM9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb246YWxsIDAuMXM7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuY29sb3I6JHsoe2FwcGx5Ym9yZGVyfSk9PmFwcGx5Ym9yZGVyID8gXCIjZDYyODI4XCIgOiBcImJsYWNrXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b25Ib2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MTBweDtcclxucmlnaHQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5wYFxyXG5mb250LXdlaWdodDo2MDA7XHJcbmBcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOmF1dG87XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoe015ZGF0YSxDb3VudHMsQ29udGVudGRhdGEscXVlcnl9KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhDb250ZW50ZGF0YSlcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoQ29udGVudGRhdGEpO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W3Byb2ZpbGVkYXRhLHNldHByb2ZpbGVkYXRhXT11c2VTdGF0ZShNeWRhdGEpXHJcbiAgICBjb25zdFtjaGVja3VzZXJpZCxzZXRjaGVja3VzZXJpZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYmVpbmdmb2xsb3dlZCxzZXRiZWluZ2ZvbGxvd2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtUaW1ldG9yZW5kZXIsc2V0dGltZXRvcmVuZGVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtub3RpZmljYXRpb25hY3RpdmUsc2V0bm90aWZpY2F0aW9uYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBQb3N0OntcclxuICAgICAgICAgICAgbmFtZTpcIkfDtm5kZXJpbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJCZcSfZW5pbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlc2hvdzp7XHJcbiAgICAgICAgICAgIG5hbWU6XCLEsMWfYXJldGxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgIFxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICB2YXIgTGVha2NvbnRyb2xsb2VyID0gdHJ1ZTtcclxuICAgICAgaWYocXVlcnkubmFtZSA9PSBcIkxpa2VcIiB8fCBxdWVyeS5uYW1lID09IFwiUmV0d2VldFwiKXtcclxuICAgICAgICBcclxuICAgICAgICBHZXR1c2VycHJvZmlsZWNvbnRlbnQoe1xyXG4gICAgICAgICAgICBVc2VySWQ6cXVlcnkudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OnF1ZXJ5Lm5hbWUsXHJcbiAgICAgICAgICAgIHNldGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG93bmVycG9zdDpxdWVyeS5uYW1lID09IFwiUG9zdFwiID8gXCJ0cnVlXCIgOiBcImZhc2xlXCIsXHJcbiAgICAgICAgICAgIExlYWtjb250cm9sbG9lcjpMZWFrY29udHJvbGxvZXIsXHJcbiAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgIExlYWtjb250cm9sbG9lcj1mYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgfSxbcXVlcnldKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW1ldG9yZW5kZXIodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gcXVlcnkudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Y2hlY2t1c2VyaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2J1cmFkYSB0YWtpcCBldCBidXRvbnUgdmUgYmlsZGlyaW0gYnV0b251IGthbGvEsWNhayB5ZXJpbmUgYmVsa2kgYXlhcmxhci5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgTXlkYXRhLkZvbGxvd2VkLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxxdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIFxyXG4gICAgICBzZXRwcm9maWxlZGF0YSh7Li4uTXlkYXRhfSlcclxuICAgICAgc2V0Y29udGVudGRhdGEoWy4uLkNvbnRlbnRkYXRhXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxdWVzdD0oKT0+e1xyXG5cclxuICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKCFiZWluZ2ZvbGxvd2VkKTtcclxuXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBjaGVja2lmZm9sbG93OmJlaW5nZm9sbG93ZWQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIYW5kbGVvcHRpb25zPShvcHRpb250eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAvL2J1cmFkYSBjb250ZXh0IHVzZXJJZCB5b2sgaXNlIGJ1bmEgaXppbiB2ZXJtaXlvcnVtIGFuY2FrIHNldHN0YXRlIG9sZHVndW5kYSBnw7ZzdGVyaW0gdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gdGhpcyBzaG91bGQgYmUgZml4ZWQgZHVyaW5nIG5hdmlnYWl0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNlcmRhdGEudXNlcsSxZCB5b2tzYSBrdWxsYW7EsWPEsSBnaXJpxZ8geWFwbWFtxLHFn3TEsXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja3VzZXJpZCAmJiBUaW1ldG9yZW5kZXIgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25hY3RpdmUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKGZhbHNlKX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+c2V0bm90aWZpY2F0aW9uYWN0aXZlKHRydWUpfT48L05vdGlmaWNhdGlvbnM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkZvbGxvd2luZ3JlcXVlc3QoYmVpbmdmb2xsb3dlZCl9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmRDb2xvcjpcIiMwZWFkNjlcIix0ZXh0VHJhbnNmb3JtOlwibm9uZVwifX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPntiZWluZ2ZvbGxvd2VkID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlICBzdHlsZT17e2JvcmRlcjpcIjRweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByb2ZpbGU9XCIvbGVkLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGVkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvZmlsZWRhdGEubGFzdG5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjNmM3NTdkXCJ9fT5VSSBkZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjEwcHhcIixtYXJnaW5Cb3R0b206XCI0MHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VkY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lww6dpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZXJjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXAgRWRpbGVuPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuQ29udGVudGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5Hw7ZuZGVyaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Vc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtNeWRhdGEuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ucyBhcHBseWJvcmRlcj17b3B0aW9uc1tpdGVtXS5ib3R0b219IG9uQ2xpY2s9eygpPT5IYW5kbGVvcHRpb25zKGl0ZW0pfT57b3B0aW9uc1tpdGVtXS5uYW1lfTwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIxMHB4XCIscGFkZGluZ0xlZnQ6XCIxMHB4XCIsbWF4V2lkdGg6XCI3MDBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5Db250ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5Db250ZW50LnBlcnNvbmFsLmZpcnN0bmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCA8Q29udGVudGNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZT17aXRlbS5wZXJzb25hbCA/IGl0ZW0uTGlrZSA6IGl0ZW0uQ29udGVudC5MaWtlfS8vYnUgYmlyIG9iamUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHdlZXQ9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLlJldHdlZXQgOiBpdGVtLkNvbnRlbnQuUmV0d2VldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5wZXJzb25hbCA/IGl0ZW0uUmVhZGxhdGVyIDogaXRlbS5Db250ZW50LlJlYWRsYXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLmFsbGNvbW1lbnRzIDogaXRlbS5Db250ZW50LmFsbGNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnBlcnNvbmFsID8gaXRlbS50aXRsZSA6IGl0ZW0uQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlaW1hZ2U9e1wiL3lhcHJhay5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5wZXJzb25hbC5maXJzdG5hbWUgOiBpdGVtLkNvbnRlbnQucGVyc29uYWwuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnN1cm5hbWU9e2l0ZW0ucGVyc29uYWwgPyBpdGVtLnBlcnNvbmFsLmxhc3RuYW1lIDogaXRlbS5Db250ZW50LnBlcnNvbmFsLmxhc3RuYW1lfS8vYmlyIG9iamUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLnBlcnNvbmFsID8gaXRlbS5jcmVhdGVkQXQgOiBpdGVtLkNvbnRlbnQuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9