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
          children: [beingfollowed && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
            children: notificationactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["NotificationsActive"], {
              style: {
                color: "white",
                marginRight: "10px",
                cursor: "pointer"
              },
              onClick: NotificationActivate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 46
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Notifications"], {
              style: {
                color: "white",
                marginRight: "10px",
                cursor: "pointer"
              },
              onClick: NotificationActivate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 37
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
            lineNumber: 312,
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
              lineNumber: 319,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
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
                lineNumber: 325,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 317,
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
                  lineNumber: 353,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
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
              lineNumber: 361,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiSW5uZXJkaXYiLCJJbWFnZXNlY3Rpb24iLCJQcm9maWxlSW1hZ2Vob2xkZXIiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJDb250ZW50cGFydCIsIlVzZXJzZWN0aW9uIiwiQ29udGVudHNlY3Rpb24iLCJPcHRpb25iYXIiLCJPcHRpb25zIiwiYXBwbHlib3JkZXIiLCJCdXR0b25Ib2xkZXIiLCJQIiwicCIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZSIsIk15ZGF0YSIsIkNvdW50cyIsIkNvbnRlbnRkYXRhIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJQb3N0IiwibmFtZSIsIkxpa2UiLCJSZXNob3ciLCJvcHRpb25zIiwic2V0b3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJMZWFrY29udHJvbGxvZXIiLCJSZXF1ZXN0cGVybWlzc2lvbiIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIlVzZXJJZCIsInVzZXJuYW1lIiwiY2F0ZWdvcnkiLCJzZXRkYXRhIiwicGFpZ25hdGlvbiIsIm93bmVycG9zdCIsImN1cnJlbnRkYXRhIiwib3B0aW9ub2JqIiwiRm9sbG93ZWQiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwiVXNlclVzZXIiLCJBY3RpdmUiLCJSZWxhdGlvbnJlcXVlc3QiLCJ1c2VDYWxsYmFjayIsInBvc3RJZCIsImF0dHJpYnV0ZSIsInR5cGVvZnJlbGF0aW9uIiwidXNlcmlkIiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJGb2xsb3dpbmdyZXF1ZXN0IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJOb3RpZmljYXRpb25BY3RpdmF0ZSIsIlVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSIsIkZvbGxvd2VySWQiLCJjdXJyZW50YWN0aXZlIiwiSGFuZGxlb3B0aW9ucyIsIm9wdGlvbnR5cGUiLCJrZXkiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImJvcmRlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiRm9sbG93ZWRjb3VudCIsIkZvbGxvd2VyY291bnQiLCJDb250ZW50Y291bnQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGF0aG5hbWUiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxtSEFBakI7S0FBTUYsVztBQVVOLElBQU1HLFFBQVEsR0FBQ0YseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FB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QTRDLHlCQUFPLEVBQUU7QUFBQSwyQkFBSThELGFBQWEsQ0FBQ3RCLElBQUQsQ0FBakI7QUFBQSxtQkFBckQ7QUFBQSw0QkFBK0VsQixPQUFPLENBQUNrQixJQUFELENBQVAsQ0FBY3JCO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURxQjtBQUFBLGFBQXpCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUCxlQWdCTTtBQUFLLGlCQUFLLEVBQUU7QUFBQ29FLDBCQUFZLEVBQUMsTUFBZDtBQUFxQkMseUJBQVcsRUFBQyxNQUFqQztBQUF3Q0Msc0JBQVEsRUFBQyxPQUFqRDtBQUF5RFIsb0JBQU0sRUFBQztBQUFoRSxhQUFaO0FBQUEsbUNBRUcscUVBQUMsNkVBQUQ7QUFBYSxzQkFBUSxFQUFFdEYsS0FBSyxDQUFDd0IsSUFBN0I7QUFBbUMsMEJBQVksRUFBRXlCLGVBQWpEO0FBQWtFLHlCQUFXLEVBQUVsRDtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUZIOztHQXZQdUJILE87VUFJSFEsc0Q7OztPQUpHUixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5mZTExNzU5ODMzM2IzMjVhOGM1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGUsdXNlQ29udGV4dCx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCJcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtDcmVhdGV1c2VycmVsYXRpb24sR2V0dXNlcnByb2ZpbGVjb250ZW50LENyZWF0ZXJlbGF0aW9ucmVxLFVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZX0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIlxyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zLCBOb3RpZmljYXRpb25zQWN0aXZlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IENvbnRlbnRtYXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvUHJvZmlsZS9jb250ZW50bWFwXCI7XHJcblxyXG5cclxuY29uc3QgRXh0ZXJpb3JkaXY9c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjE0MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxucGFkZGluZy1sZWZ0OjYwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk0MHB4KXtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IElubmVyZGl2PXN0eWxlZC5kaXZgXHJcbmhlaWdodDoxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDoyNTBweDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTIwcHg7XHJcbmhlaWdodDoxMjBweDtcclxudG9wOi0xMjBweDtcclxubGVmdDoxNDBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6OTBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgdG9wOi0xMDBweDtcclxuICAgIGxlZnQ6MTYwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2U9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9ibGFjay5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgT3B0aW9uYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxubWFyZ2luOmF1dG87XHJcbm1heC13aWR0aDo1MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uOmFsbCAwLjFzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmNvbG9yOiR7KHthcHBseWJvcmRlcn0pPT5hcHBseWJvcmRlciA/IFwiI2Q2MjgyOFwiIDogXCJibGFja1wifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjphdXRvO1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7TXlkYXRhLENvdW50cyxDb250ZW50ZGF0YSxxdWVyeX0pe1xyXG5cclxuICAgIC8vdXNlIHJlZHVjZXIgdHJ5IG9uIGl0XHJcbiAgICBjb25zdHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCB7Ym90dG9tfSA9IHVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKENvbnRlbnRkYXRhKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtwcm9maWxlZGF0YSxzZXRwcm9maWxlZGF0YV09dXNlU3RhdGUoTXlkYXRhKVxyXG4gICAgY29uc3RbY2hlY2t1c2VyaWQsc2V0Y2hlY2t1c2VyaWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2JlaW5nZm9sbG93ZWQsc2V0YmVpbmdmb2xsb3dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbVGltZXRvcmVuZGVyLHNldHRpbWV0b3JlbmRlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbbm90aWZpY2F0aW9uYWN0aXZlLHNldG5vdGlmaWNhdGlvbmFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBQb3N0OntcclxuICAgICAgICAgICAgbmFtZTpcIkfDtm5kZXJpbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBuYW1lOlwiQmXEn2VuaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZXNob3c6e1xyXG4gICAgICAgICAgICBuYW1lOlwixLDFn2FyZXRsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG4gICBcclxuY29uc29sZS5sb2coTXlkYXRhKTtcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL3NhZGVjZSBwYWlnbmF0aW9uIHphdGVuIHF1ZXJ5IGRlxJ9pxZ9pbmNlIGlsayAxMCB2YWx1ZSBzZXJ2ZXJzaWRlIHRhcmFmxLFuZGFuIMOnZWtpbGl5b3JcclxuICAgICAgdmFyIExlYWtjb250cm9sbG9lciA9IHRydWU7XHJcbiAgICAgIHZhciBSZXF1ZXN0cGVybWlzc2lvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYoUmVxdWVzdHBlcm1pc3Npb24pe1xyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBHZXR1c2VycHJvZmlsZWNvbnRlbnQoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklkOnF1ZXJ5LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6cXVlcnkubmFtZSxcclxuICAgICAgICAgICAgICAgIHNldGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBwYWlnbmF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3duZXJwb3N0OnF1ZXJ5Lm5hbWUgPT0gXCJQb3N0XCIgPyBcInRydWVcIiA6IFwiZmFzbGVcIixcclxuICAgICAgICAgICAgICAgIExlYWtjb250cm9sbG9lcjpMZWFrY29udHJvbGxvZXIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgTGVha2NvbnRyb2xsb2VyPWZhbHNlO1xyXG4gICAgICAgICBSZXF1ZXN0cGVybWlzc2lvbj10cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICB9LFtxdWVyeV0pXHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ub2JqPXsuLi5vcHRpb25zfTtcclxuICAgICAgICBvcHRpb25vYmpbcXVlcnkubmFtZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG5cclxuICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0dGltZXRvcmVuZGVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHF1ZXJ5LnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9idXJhZGEgdGFraXAgZXQgYnV0b251IHZlIGJpbGRpcmltIGJ1dG9udSBrYWxrxLFjYWsgeWVyaW5lIGJlbGtpIGF5YXJsYXIuXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgIE15ZGF0YS5Gb2xsb3dlZC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5Vc2VyVXNlci5BY3RpdmUgPT0gdHJ1ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5vdGlmaWNhdGlvbmFjdGl2ZSh0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGJlaW5nZm9sbG93ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vemF0ZW4gYnVyYXlhIGdpcmVtZW1pxZ8gaXNlIGRlZmF1bHQgZGXEn2VyIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3VzZXJkYXRhLHF1ZXJ5XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIHNldHByb2ZpbGVkYXRhKHsuLi5NeWRhdGF9KVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShbLi4uQ29udGVudGRhdGFdKVxyXG5cclxuICAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICBjb25zdCBSZWxhdGlvbnJlcXVlc3Q9dXNlQ2FsbGJhY2soKHBvc3RJZCxhdHRyaWJ1dGUsdHlwZW9mcmVsYXRpb24sdXNlcmlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uLFxyXG4gICAgICAgICAgICBVc2VySWRvZmNvbnRlbnQ6dXNlcmlkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbdXNlcmRhdGEuVXNlcklkXSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYmVpbmdmb2xsb3dlZClcclxuICAgIGNvbnN0IEZvbGxvd2luZ3JlcXVlc3Q9KCk9PntcclxuXHJcbiAgICAgICAgLy90b2RvIHJlc3BvbnNlIGdlbGVuZSBrYWRhciBiZWtsZSBoYW1sZXllIGl6aW4gdmVybWVcclxuICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKCFiZWluZ2ZvbGxvd2VkKTtcclxuXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBjaGVja2lmZm9sbG93OmJlaW5nZm9sbG93ZWQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBOb3RpZmljYXRpb25BY3RpdmF0ZSA9ICgpPT57XHJcblxyXG4gICAgICAgIHNldG5vdGlmaWNhdGlvbmFjdGl2ZSghbm90aWZpY2F0aW9uYWN0aXZlKVxyXG5cclxuICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUoe1xyXG4gICAgICAgICAgICBGb2xsb3dlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRhY3RpdmU6bm90aWZpY2F0aW9uYWN0aXZlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIYW5kbGVvcHRpb25zPShvcHRpb250eXBlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbm9iaikge1xyXG4gICAgICAgICAgICBvcHRpb25vYmpba2V5XS5ib3R0b209ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBvcHRpb25vYmpbb3B0aW9udHlwZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2PlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UvPiBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgICAgIC8vYnVyYWRhIGNvbnRleHQgdXNlcklkIHlvayBpc2UgYnVuYSBpemluIHZlcm1peW9ydW0gYW5jYWsgc2V0c3RhdGUgb2xkdWd1bmRhIGfDtnN0ZXJpbSB2YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETyB0aGlzIHNob3VsZCBiZSBmaXhlZCBkdXJpbmcgbmF2aWdhaXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91c2VyZGF0YS51c2VyxLFkIHlva3NhIGt1bGxhbsSxY8SxIGdpcmnFnyB5YXBtYW3EscWfdMSxclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrdXNlcmlkICYmIFRpbWV0b3JlbmRlciAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmdmb2xsb3dlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uYWN0aXZlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXtOb3RpZmljYXRpb25BY3RpdmF0ZX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17Tm90aWZpY2F0aW9uQWN0aXZhdGV9PjwvTm90aWZpY2F0aW9ucz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Gb2xsb3dpbmdyZXF1ZXN0KGJlaW5nZm9sbG93ZWQpfSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMGVhZDY5XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIj57YmVpbmdmb2xsb3dlZCA/IFwiVGFraXB0ZW4gw4fEsWtcIiA6IFwiVGFraXAgRXRcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ib2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSAgc3R5bGU9e3tib3JkZXI6XCI0cHggc29saWQgd2hpdGVcIn19IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBwcm9maWxlPVwiL2xlZC5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9maWxlZGF0YS5maXJzdG5hbWUgKyBcIiBcIiArIHByb2ZpbGVkYXRhLmxhc3RuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzZjNzU3ZFwifX0+VUkgZGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCIxMHB4XCIsbWFyZ2luQm90dG9tOlwiNDBweFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlZGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcMOnaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VyY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lwIEVkaWxlbjwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkNvbnRlbnRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+R8O2bmRlcmk8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHN0eWxlPXt7d2lkdGg6XCI4MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCIxNXB4XCJ9fT5Zb3UncmUgbm90IGhhdmluZyB0aGF0IHByb2JsZW0gaGVyZS4gVGhlcmUgaXMgbm8gbmVnYXRpdmUgc3BhY2UuIFRoZXJlZm9yZSwgSSBkb24ndCBiZWxpZXZlIGZsZXgtc2hyaW5rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7cXVlcnkudXNlcm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9e2ZhbHNlfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25zIGFwcGx5Ym9yZGVyPXtvcHRpb25zW2l0ZW1dLmJvdHRvbX0gb25DbGljaz17KCk9PkhhbmRsZW9wdGlvbnMoaXRlbSl9PntvcHRpb25zW2l0ZW1dLm5hbWV9PC9PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE8gc2VwYXJhdGUgdGhpcyBtYXAgZnVuY3Rpb24qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjEwcHhcIixwYWRkaW5nTGVmdDpcIjEwcHhcIixtYXhXaWR0aDpcIjcwMHB4XCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudG1hcCAgbm9yZWNvcmQ9e3F1ZXJ5Lm5hbWV9IHJlbGF0aW9uZnVuYz17UmVsYXRpb25yZXF1ZXN0fSBjb250ZW50bGlzdD17Q29udGVudGRhdGF9Lz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9