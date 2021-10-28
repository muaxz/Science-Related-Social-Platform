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
/* harmony import */ var _components_pages_Profile_contentmap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/pages/Profile/contentmap */ "./components/pages/Profile/contentmap.js");




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
})(["position:absolute;width:120px;height:120px;top:-120px;left:140px;@media (max-width:1050px){position:absolute;width:90px;height:90px;top:-100px;left:160px;color:White;}"]);
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
})(["position:sticky;top:250px;margin-top:80px;align-self:flex-start;max-width:400px;text-align:center;width:100%;@media (max-width:1050px){position:absolute;left:50%;transform:translateX(-50%);top:100px;color:White;}"]);
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
})(["width:80%;margin:auto;@media (max-width:1050px){display:none;}"]);
_c13 = Description;
function Profile(_ref2) {
  _s();

  var _this = this;

  var Mydata = _ref2.Mydata,
      Counts = _ref2.Counts,
      Contentdata = _ref2.Contentdata,
      query = _ref2.query;

  //use reducer try on it
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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinner = _useState8[0],
      setspinner = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Post: {
      name: "Gönderiler",
      bottom: false
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
      options = _useState9[0],
      setoptions = _useState9[1];

  console.log(Mydata);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //sadece paignation zaten query değişince ilk 10 value serverside tarafından çekiliyor
    var Leakcontrolloer = true;
    var Requestpermission = false;

    if (Requestpermission) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Getuserprofilecontent"])({
        UserId: query.username,
        category: query.name,
        setdata: setcontentdata,
        setspinner: setspinner,
        paignation: false,
        ownerpost: query.name == "Post" ? "true" : "fasle",
        Leakcontrolloer: Leakcontrolloer,
        order: 10,
        currentdata: contentdata
      });
    }

    return function () {
      Leakcontrolloer = false;
      Requestpermission = true;
    };
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var optionobj = _objectSpread({}, options);

    optionobj[query.name].bottom = true;
    setoptions(optionobj);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (userdata.UserId) {
      settimetorender(true);

      if (userdata.UserId == query.username) {
        setcheckuserid(true); //burada takip et butonu ve bildirim butonu kalkıcak yerine belki ayarlar.
      } else {
        Mydata.Followed.forEach(function (item) {
          if (item.id == userdata.UserId) {
            if (item.UserUser.Active == true) {
              setnotificationactive(true);
            }

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
  var Relationrequest = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (postId, attribute, typeofrelation, userid) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  }, [userdata.UserId]);
  console.log(beingfollowed);

  var Followingrequest = function Followingrequest() {
    //todo response gelene kadar bekle hamleye izin verme
    setbeingfollowed(!beingfollowed);

    if (userdata.UserId) {
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Createuserrelation"])({
        UserId: userdata.UserId,
        FollowedId: Mydata.id,
        checkiffollow: beingfollowed
      });
    }
  };

  var NotificationActivate = function NotificationActivate() {
    setnotificationactive(!notificationactive);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["UpdateNotificationactive"])({
      FollowerId: userdata.UserId,
      FollowedId: Mydata.id,
      currentactive: notificationactive
    });
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
          lineNumber: 288,
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
            onClick: NotificationActivate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 38
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "sa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
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
            lineNumber: 306,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
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
              lineNumber: 313,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
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
                lineNumber: 319,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 22
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentsection, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionbar, {
            children: Object.keys(options).map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                href: {
                  pathname: "/profile/".concat(query.username),
                  query: {
                    name: "".concat(item)
                  }
                },
                scroll: false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
                  applyborder: options[item].bottom,
                  onClick: function onClick() {
                    return Handleoptions(item);
                  },
                  children: options[item].name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingRight: "10px",
              paddingLeft: "10px",
              maxWidth: "700px",
              margin: "auto"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Profile_contentmap__WEBPACK_IMPORTED_MODULE_13__["default"], {
              norecord: query.name,
              relationfunc: Relationrequest,
              contentlist: Contentdata
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 9
  }, this);
}

_s(Profile, "dyuJ6U8SPn7b4vwB/lPPCc3vUVI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsIkNvbnRlbnRkYXRhIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJQb3N0IiwibmFtZSIsIkxpa2UiLCJSZXNob3ciLCJvcHRpb25zIiwic2V0b3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJMZWFrY29udHJvbGxvZXIiLCJSZXF1ZXN0cGVybWlzc2lvbiIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIlVzZXJJZCIsInVzZXJuYW1lIiwiY2F0ZWdvcnkiLCJzZXRkYXRhIiwicGFpZ25hdGlvbiIsIm93bmVycG9zdCIsImN1cnJlbnRkYXRhIiwib3B0aW9ub2JqIiwiRm9sbG93ZWQiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwiVXNlclVzZXIiLCJBY3RpdmUiLCJSZWxhdGlvbnJlcXVlc3QiLCJ1c2VDYWxsYmFjayIsInBvc3RJZCIsImF0dHJpYnV0ZSIsInR5cGVvZnJlbGF0aW9uIiwidXNlcmlkIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJGb2xsb3dpbmdyZXF1ZXN0IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJOb3RpZmljYXRpb25BY3RpdmF0ZSIsIlVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSIsIkZvbGxvd2VySWQiLCJjdXJyZW50YWN0aXZlIiwiSGFuZGxlb3B0aW9ucyIsIm9wdGlvbnR5cGUiLCJrZXkiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImJvcmRlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiRm9sbG93ZWRjb3VudCIsIkZvbGxvd2VyY291bnQiLCJDb250ZW50Y291bnQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGF0aG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtSEFBakI7S0FBTUYsVztBQVVOLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FB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QUE7QUFBQTtBQUFBO0FBQUEsa0JBRFAsZUFnQk07QUFBSyxpQkFBSyxFQUFFO0FBQUNvRSwwQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLHlCQUFXLEVBQUMsTUFBakM7QUFBd0NDLHNCQUFRLEVBQUMsT0FBakQ7QUFBeURSLG9CQUFNLEVBQUM7QUFBaEUsYUFBWjtBQUFBLG1DQUVHLHFFQUFDLDZFQUFEO0FBQWEsc0JBQVEsRUFBRXRGLEtBQUssQ0FBQ3dCLElBQTdCO0FBQW1DLDBCQUFZLEVBQUV5QixlQUFqRDtBQUFrRSx5QkFBVyxFQUFFbEQ7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStFSDs7R0FqUHVCSCxPO1VBSUhRLHNEOzs7T0FKR1IsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uMTM0NGNhZWU4NWY0MzkzNTJiNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHQsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJwcm9maWxlY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25hY3RpdmV9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCBDb250ZW50bWFwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL1Byb2ZpbGUvY29udGVudG1hcFwiO1xyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxNDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbnBhZGRpbmctbGVmdDo2MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MjUwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEyMHB4O1xyXG5oZWlnaHQ6MTIwcHg7XHJcbnRvcDotMTIwcHg7XHJcbmxlZnQ6MTQwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHRvcDotMTAwcHg7XHJcbiAgICBsZWZ0OjE2MHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2Vyc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDoyNTBweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG5hbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbm1heC13aWR0aDo0MDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50c2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTAwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MjBweDtcclxuYFxyXG5cclxuY29uc3QgT3B0aW9ucz1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbjphbGwgMC4xcztcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5jb2xvcjokeyh7YXBwbHlib3JkZXJ9KT0+YXBwbHlib3JkZXIgPyBcIiNkNjI4MjhcIiA6IFwiYmxhY2tcIn07XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxMHB4O1xyXG5yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuYFxyXG5cclxuY29uc3QgRGVzY3JpcHRpb249c3R5bGVkLmRpdmBcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46YXV0bztcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoe015ZGF0YSxDb3VudHMsQ29udGVudGRhdGEscXVlcnl9KXtcclxuXHJcbiAgICAvL3VzZSByZWR1Y2VyIHRyeSBvbiBpdFxyXG4gICAgY29uc3R7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qge2JvdHRvbX0gPSB1c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShDb250ZW50ZGF0YSk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbcHJvZmlsZWRhdGEsc2V0cHJvZmlsZWRhdGFdPXVzZVN0YXRlKE15ZGF0YSlcclxuICAgIGNvbnN0W2NoZWNrdXNlcmlkLHNldGNoZWNrdXNlcmlkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtiZWluZ2ZvbGxvd2VkLHNldGJlaW5nZm9sbG93ZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W1RpbWV0b3JlbmRlcixzZXR0aW1ldG9yZW5kZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W25vdGlmaWNhdGlvbmFjdGl2ZSxzZXRub3RpZmljYXRpb25hY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbb3B0aW9ucyxzZXRvcHRpb25zXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgUG9zdDp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJHw7ZuZGVyaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbmFtZTpcIkJlxJ9lbmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVzaG93OntcclxuICAgICAgICAgICAgbmFtZTpcIsSwxZ9hcmV0bGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuICAgXHJcbmNvbnNvbGUubG9nKE15ZGF0YSk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgLy9zYWRlY2UgcGFpZ25hdGlvbiB6YXRlbiBxdWVyeSBkZcSfacWfaW5jZSBpbGsgMTAgdmFsdWUgc2VydmVyc2lkZSB0YXJhZsSxbmRhbiDDp2VraWxpeW9yXHJcbiAgICAgIHZhciBMZWFrY29udHJvbGxvZXIgPSB0cnVlO1xyXG4gICAgICB2YXIgUmVxdWVzdHBlcm1pc3Npb24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKFJlcXVlc3RwZXJtaXNzaW9uKXtcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgR2V0dXNlcnByb2ZpbGVjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJZDpxdWVyeS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OnF1ZXJ5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzZXRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG93bmVycG9zdDpxdWVyeS5uYW1lID09IFwiUG9zdFwiID8gXCJ0cnVlXCIgOiBcImZhc2xlXCIsXHJcbiAgICAgICAgICAgICAgICBMZWFrY29udHJvbGxvZXI6TGVha2NvbnRyb2xsb2VyLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgIExlYWtjb250cm9sbG9lcj1mYWxzZTtcclxuICAgICAgICAgUmVxdWVzdHBlcm1pc3Npb249dHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgfSxbcXVlcnldKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcbiAgICAgICAgb3B0aW9ub2JqW3F1ZXJ5Lm5hbWVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuXHJcbiAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHRpbWV0b3JlbmRlcih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBxdWVyeS51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRjaGVja3VzZXJpZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vYnVyYWRhIHRha2lwIGV0IGJ1dG9udSB2ZSBiaWxkaXJpbSBidXRvbnUga2Fsa8SxY2FrIHllcmluZSBiZWxraSBheWFybGFyLlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICBNeWRhdGEuRm9sbG93ZWQuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uVXNlclVzZXIuQWN0aXZlID09IHRydWUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRub3RpZmljYXRpb25hY3RpdmUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxxdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICBzZXRwcm9maWxlZGF0YSh7Li4uTXlkYXRhfSlcclxuICAgICAgc2V0Y29udGVudGRhdGEoWy4uLkNvbnRlbnRkYXRhXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcblxyXG4gICAgY29uc3QgUmVsYXRpb25yZXF1ZXN0PXVzZUNhbGxiYWNrKChwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW3VzZXJkYXRhLlVzZXJJZF0pXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGJlaW5nZm9sbG93ZWQpXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXF1ZXN0PSgpPT57XHJcblxyXG4gICAgICAgIC8vdG9kbyByZXNwb25zZSBnZWxlbmUga2FkYXIgYmVrbGUgaGFtbGV5ZSBpemluIHZlcm1lXHJcbiAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCghYmVpbmdmb2xsb3dlZCk7XHJcblxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBDcmVhdGV1c2VycmVsYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VkSWQ6TXlkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpiZWluZ2ZvbGxvd2VkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgTm90aWZpY2F0aW9uQWN0aXZhdGUgPSAoKT0+e1xyXG5cclxuICAgICAgICBzZXRub3RpZmljYXRpb25hY3RpdmUoIW5vdGlmaWNhdGlvbmFjdGl2ZSlcclxuXHJcbiAgICAgICAgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlKHtcclxuICAgICAgICAgICAgRm9sbG93ZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIEZvbGxvd2VkSWQ6TXlkYXRhLmlkLFxyXG4gICAgICAgICAgICBjdXJyZW50YWN0aXZlOm5vdGlmaWNhdGlvbmFjdGl2ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGFuZGxlb3B0aW9ucz0ob3B0aW9udHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdj5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAvL2J1cmFkYSBjb250ZXh0IHVzZXJJZCB5b2sgaXNlIGJ1bmEgaXppbiB2ZXJtaXlvcnVtIGFuY2FrIHNldHN0YXRlIG9sZHVndW5kYSBnw7ZzdGVyaW0gdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gdGhpcyBzaG91bGQgYmUgZml4ZWQgZHVyaW5nIG5hdmlnYWl0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNlcmRhdGEudXNlcsSxZCB5b2tzYSBrdWxsYW7EsWPEsSBnaXJpxZ8geWFwbWFtxLHFn3TEsXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja3VzZXJpZCAmJiBUaW1ldG9yZW5kZXIgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25hY3RpdmUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXtOb3RpZmljYXRpb25BY3RpdmF0ZX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8cD5zYTwvcD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+Rm9sbG93aW5ncmVxdWVzdChiZWluZ2ZvbGxvd2VkKX0gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYmFja2dyb3VuZENvbG9yOlwiIzBlYWQ2OVwiLHRleHRUcmFuc2Zvcm06XCJub25lXCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+e2JlaW5nZm9sbG93ZWQgPyBcIlRha2lwdGVuIMOHxLFrXCIgOiBcIlRha2lwIEV0XCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgIHN0eWxlPXt7Ym9yZGVyOlwiNHB4IHNvbGlkIHdoaXRlXCJ9fSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcHJvZmlsZT1cIi9sZWQuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZWRhdGEuZmlyc3RuYW1lICsgXCIgXCIgKyBwcm9maWxlZGF0YS5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM2Yzc1N2RcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZWRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXDDp2k8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlcmNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcCBFZGlsZW48L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Db250ZW50Y291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPkfDtm5kZXJpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiBzdHlsZT17e3dpZHRoOlwiODAlXCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nOlwiMTVweFwifX0+WW91J3JlIG5vdCBoYXZpbmcgdGhhdCBwcm9ibGVtIGhlcmUuIFRoZXJlIGlzIG5vIG5lZ2F0aXZlIHNwYWNlLiBUaGVyZWZvcmUsIEkgZG9uJ3QgYmVsaWV2ZSBmbGV4LXNocmluay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1VzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3F1ZXJ5LnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOmAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXtmYWxzZX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ucyBhcHBseWJvcmRlcj17b3B0aW9uc1tpdGVtXS5ib3R0b219IG9uQ2xpY2s9eygpPT5IYW5kbGVvcHRpb25zKGl0ZW0pfT57b3B0aW9uc1tpdGVtXS5uYW1lfTwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUT0RPIHNlcGFyYXRlIHRoaXMgbWFwIGZ1bmN0aW9uKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIxMHB4XCIscGFkZGluZ0xlZnQ6XCIxMHB4XCIsbWF4V2lkdGg6XCI3MDBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRtYXAgIG5vcmVjb3JkPXtxdWVyeS5uYW1lfSByZWxhdGlvbmZ1bmM9e1JlbGF0aW9ucmVxdWVzdH0gY29udGVudGxpc3Q9e0NvbnRlbnRkYXRhfS8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==