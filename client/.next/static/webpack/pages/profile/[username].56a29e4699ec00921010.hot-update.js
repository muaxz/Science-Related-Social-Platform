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
/* harmony import */ var _components_pages_Profile_Editwindow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/pages/Profile/Editwindow */ "./components/pages/Profile/Editwindow.js");




var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Profile.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Exteriordiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Profile__Exteriordiv",
  componentId: "sc-1uvdthm-0"
})(["max-width:1400px;padding-top:60px;width:100%;height:100vh;overflow:", ";padding-bottom:20px;padding-left:60px;@media (max-width:940px){padding-left:0;}"], function (_ref) {
  var editactive = _ref.editactive;
  return editactive ? "hidden" : "visible";
});
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
})(["width:100%;height:100%;background-image:url(https://evrimagaci.org/public/images/logo/v3.svg?v=1);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
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
})(["cursor:pointer;transition:all 0.1s;font-weight:600;color:", ";"], function (_ref2) {
  var applyborder = _ref2.applyborder;
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
function Profile(_ref3) {
  _s();

  var _this = this;

  var Mydata = _ref3.Mydata,
      Counts = _ref3.Counts,
      Contentdata = _ref3.Contentdata,
      query = _ref3.query;

  //use reducer try on it
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_5__["createusercontext"]),
      userdata = _useContext.userdata;

  var Preventspam = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
  var Preventspam2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);

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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      activeedit = _useState9[0],
      setactiveedit = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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
      options = _useState10[0],
      setoptions = _useState10[1];

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
      setcheckuserid(false);
      console.log(query.username);

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
    if (Preventspam2.current) {
      Preventspam2.current = false;
      setbeingfollowed(!beingfollowed);

      if (userdata.UserId) {
        Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["Createuserrelation"])({
          UserId: userdata.UserId,
          FollowedId: Mydata.id,
          checkiffollow: beingfollowed,
          Prevent: Preventspam2
        });
      }
    }
  };

  var NotificationActivate = function NotificationActivate() {
    if (Preventspam.current) {
      Preventspam.current = false;
      setnotificationactive(!notificationactive);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_7__["UpdateNotificationactive"])({
        FollowerId: userdata.UserId,
        FollowedId: Mydata.id,
        currentactive: notificationactive,
        Prevent: Preventspam
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
    editactive: activeedit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Profile_Editwindow__WEBPACK_IMPORTED_MODULE_14__["default"], {
      closefunc: function closefunc() {
        return setactiveedit(false);
      },
      editdata: profiledata,
      active: activeedit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagesection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 21
        }, this), //burada context userId yok ise buna izin vermiyorum ancak setstate oldugunda gösterim var
        //TODO this should be fixed during navigaiton
        //userdata.userıd yoksa kullanıcı giriş yapmamıştır
        !checkuserid && Timetorender ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
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
              lineNumber: 322,
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
              lineNumber: 326,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
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
            lineNumber: 331,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 30
        }, this) : Timetorender && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: function onClick() {
              return setactiveedit(!activeedit);
            },
            endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["Person"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 91
            }, this),
            variant: "contained",
            style: {
              color: "white",
              backgroundColor: "#e63946",
              textTransform: "none",
              borderRadius: "25px"
            },
            children: "Profili Duzenle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
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
              lineNumber: 344,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
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
                lineNumber: 350,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 342,
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
                  lineNumber: 378,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
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
              lineNumber: 386,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 9
  }, this);
}

_s(Profile, "FtX/PRczt9Ehv5w7TSRP5liSwXk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiZWRpdGFjdGl2ZSIsIklubmVyZGl2IiwiSW1hZ2VzZWN0aW9uIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiQmFja2dyb3VuZEltYWdlIiwiQ29udGVudHBhcnQiLCJVc2Vyc2VjdGlvbiIsIkNvbnRlbnRzZWN0aW9uIiwiT3B0aW9uYmFyIiwiT3B0aW9ucyIsImFwcGx5Ym9yZGVyIiwiQnV0dG9uSG9sZGVyIiwiUCIsInAiLCJEZXNjcmlwdGlvbiIsIlByb2ZpbGUiLCJNeWRhdGEiLCJDb3VudHMiLCJDb250ZW50ZGF0YSIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJQcmV2ZW50c3BhbSIsInVzZVJlZiIsIlByZXZlbnRzcGFtMiIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJhY3RpdmVlZGl0Iiwic2V0YWN0aXZlZWRpdCIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkxlYWtjb250cm9sbG9lciIsIlJlcXVlc3RwZXJtaXNzaW9uIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwib3duZXJwb3N0IiwiY3VycmVudGRhdGEiLCJvcHRpb25vYmoiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJVc2VyVXNlciIsIkFjdGl2ZSIsIlJlbGF0aW9ucmVxdWVzdCIsInVzZUNhbGxiYWNrIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkZvbGxvd2luZ3JlcXVlc3QiLCJjdXJyZW50IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJQcmV2ZW50IiwiTm90aWZpY2F0aW9uQWN0aXZhdGUiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJGb2xsb3dlcklkIiwiY3VycmVudGFjdGl2ZSIsIkhhbmRsZW9wdGlvbnMiLCJvcHRpb250eXBlIiwia2V5IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIkZvbGxvd2VkY291bnQiLCJGb2xsb3dlcmNvdW50IiwiQ29udGVudGNvdW50Iiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhdGhuYW1lIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE7QUFBQTtBQUFBLFVBREo7QUE0Rkg7O0dBNVF1QkgsTztVQU1IVyxzRDs7O09BTkdYLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjU2YTI5ZTQ2OTllYzAwOTIxMDEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJwcm9maWxlY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25hY3RpdmV9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgRWRpdFJvdW5kZWQsIE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUsUGVyc29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgQ29udGVudG1hcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL2NvbnRlbnRtYXBcIjtcclxuaW1wb3J0IEVkaXR3aW5kb3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvUHJvZmlsZS9FZGl0d2luZG93XCJcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG5wYWRkaW5nLXRvcDo2MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbm92ZXJmbG93OiR7KHtlZGl0YWN0aXZlfSk9PmVkaXRhY3RpdmUgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJ9O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG50b3A6LTEyMHB4O1xyXG5sZWZ0OjE0MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbiAgICB0b3A6LTEwMHB4O1xyXG4gICAgbGVmdDoxNjBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9ldnJpbWFnYWNpLm9yZy9wdWJsaWMvaW1hZ2VzL2xvZ28vdjMuc3ZnP3Y9MSk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRwYXJ0PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYFxyXG5cclxuY29uc3QgVXNlcnNlY3Rpb249c3R5bGVkLmRpdmBcclxucG9zaXRpb246c3RpY2t5O1xyXG50b3A6MjUwcHg7XHJcbm1hcmdpbi10b3A6ODBweDtcclxuYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xyXG5tYXgtd2lkdGg6NDAwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQ29udGVudHNlY3Rpb249c3R5bGVkLmRpdmBcclxubWF4LXdpZHRoOjEwMDBweDtcclxud2lkdGg6MTAwJTtcclxuYFxyXG5jb25zdCBPcHRpb25iYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5tYXJnaW46YXV0bztcclxubWF4LXdpZHRoOjUwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IE9wdGlvbnM9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb246YWxsIDAuMXM7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuY29sb3I6JHsoe2FwcGx5Ym9yZGVyfSk9PmFwcGx5Ym9yZGVyID8gXCIjZDYyODI4XCIgOiBcImJsYWNrXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b25Ib2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MTBweDtcclxucmlnaHQ6MTBweDtcclxuYFxyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5wYFxyXG5mb250LXdlaWdodDo2MDA7XHJcbmBcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbndpZHRoOjgwJTtcclxubWFyZ2luOmF1dG87XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHtNeWRhdGEsQ291bnRzLENvbnRlbnRkYXRhLHF1ZXJ5fSl7XHJcblxyXG4gICAgLy91c2UgcmVkdWNlciB0cnkgb24gaXRcclxuICAgIGNvbnN0e3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IFByZXZlbnRzcGFtID0gdXNlUmVmKHRydWUpXHJcbiAgICBjb25zdCBQcmV2ZW50c3BhbTIgPSB1c2VSZWYodHJ1ZSlcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdFtjb250ZW50ZGF0YSxzZXRjb250ZW50ZGF0YV09dXNlU3RhdGUoQ29udGVudGRhdGEpO1xyXG4gICAgY29uc3Rbb3JkZXIsc2V0b3JkZXJdPXVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0W3Byb2ZpbGVkYXRhLHNldHByb2ZpbGVkYXRhXT11c2VTdGF0ZShNeWRhdGEpXHJcbiAgICBjb25zdFtjaGVja3VzZXJpZCxzZXRjaGVja3VzZXJpZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYmVpbmdmb2xsb3dlZCxzZXRiZWluZ2ZvbGxvd2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtUaW1ldG9yZW5kZXIsc2V0dGltZXRvcmVuZGVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtub3RpZmljYXRpb25hY3RpdmUsc2V0bm90aWZpY2F0aW9uYWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2FjdGl2ZWVkaXQsc2V0YWN0aXZlZWRpdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbb3B0aW9ucyxzZXRvcHRpb25zXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgUG9zdDp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJHw7ZuZGVyaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbmFtZTpcIkJlxJ9lbmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVzaG93OntcclxuICAgICAgICAgICAgbmFtZTpcIsSwxZ9hcmV0bGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuICAgXHJcbmNvbnNvbGUubG9nKE15ZGF0YSk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgLy9zYWRlY2UgcGFpZ25hdGlvbiB6YXRlbiBxdWVyeSBkZcSfacWfaW5jZSBpbGsgMTAgdmFsdWUgc2VydmVyc2lkZSB0YXJhZsSxbmRhbiDDp2VraWxpeW9yXHJcbiAgICAgIHZhciBMZWFrY29udHJvbGxvZXIgPSB0cnVlO1xyXG4gICAgICB2YXIgUmVxdWVzdHBlcm1pc3Npb24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKFJlcXVlc3RwZXJtaXNzaW9uKXtcclxuICAgICAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgR2V0dXNlcnByb2ZpbGVjb250ZW50KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJZDpxdWVyeS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OnF1ZXJ5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzZXRkYXRhOnNldGNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0c3Bpbm5lcjpzZXRzcGlubmVyLFxyXG4gICAgICAgICAgICAgICAgcGFpZ25hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG93bmVycG9zdDpxdWVyeS5uYW1lID09IFwiUG9zdFwiID8gXCJ0cnVlXCIgOiBcImZhc2xlXCIsXHJcbiAgICAgICAgICAgICAgICBMZWFrY29udHJvbGxvZXI6TGVha2NvbnRyb2xsb2VyLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6MTAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0YTpjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgIExlYWtjb250cm9sbG9lcj1mYWxzZTtcclxuICAgICAgICAgUmVxdWVzdHBlcm1pc3Npb249dHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgfSxbcXVlcnldKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcbiAgICAgICAgb3B0aW9ub2JqW3F1ZXJ5Lm5hbWVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuXHJcbiAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHRpbWV0b3JlbmRlcih0cnVlKTtcclxuICAgICAgICAgICAgc2V0Y2hlY2t1c2VyaWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeS51c2VybmFtZSlcclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHF1ZXJ5LnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9idXJhZGEgdGFraXAgZXQgYnV0b251IHZlIGJpbGRpcmltIGJ1dG9udSBrYWxrxLFjYWsgeWVyaW5lIGJlbGtpIGF5YXJsYXIuXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgIE15ZGF0YS5Gb2xsb3dlZC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5Vc2VyVXNlci5BY3RpdmUgPT0gdHJ1ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5vdGlmaWNhdGlvbmFjdGl2ZSh0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGJlaW5nZm9sbG93ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vemF0ZW4gYnVyYXlhIGdpcmVtZW1pxZ8gaXNlIGRlZmF1bHQgZGXEn2VyIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sW3VzZXJkYXRhLHF1ZXJ5XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIHNldHByb2ZpbGVkYXRhKHsuLi5NeWRhdGF9KVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShbLi4uQ29udGVudGRhdGFdKVxyXG5cclxuICAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgICBjb25zdCBSZWxhdGlvbnJlcXVlc3Q9dXNlQ2FsbGJhY2soKHBvc3RJZCxhdHRyaWJ1dGUsdHlwZW9mcmVsYXRpb24sdXNlcmlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIENyZWF0ZXJlbGF0aW9ucmVxKHtcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgUG9zdElkOnBvc3RJZCxcclxuICAgICAgICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgcmVsYXRpb250eXBlOnR5cGVvZnJlbGF0aW9uLFxyXG4gICAgICAgICAgICBVc2VySWRvZmNvbnRlbnQ6dXNlcmlkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbdXNlcmRhdGEuVXNlcklkXSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYmVpbmdmb2xsb3dlZClcclxuICAgIGNvbnN0IEZvbGxvd2luZ3JlcXVlc3Q9KCk9PntcclxuXHJcbiAgICAgICAgLy90b2RvIHJlc3BvbnNlIGdlbGVuZSBrYWRhciBiZWtsZSBoYW1sZXllIGl6aW4gdmVybWVcclxuICAgICAgIGlmKFByZXZlbnRzcGFtMi5jdXJyZW50KXtcclxuICAgICAgICAgICAgUHJldmVudHNwYW0yLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKCFiZWluZ2ZvbGxvd2VkKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgQ3JlYXRldXNlcnJlbGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd2VkSWQ6TXlkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNraWZmb2xsb3c6YmVpbmdmb2xsb3dlZCxcclxuICAgICAgICAgICAgICAgICAgICBQcmV2ZW50OlByZXZlbnRzcGFtMlxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBOb3RpZmljYXRpb25BY3RpdmF0ZSA9ICgpPT57XHJcblxyXG4gICAgICAgIGlmKFByZXZlbnRzcGFtLmN1cnJlbnQpe1xyXG5cclxuICAgICAgICAgICAgUHJldmVudHNwYW0uY3VycmVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldG5vdGlmaWNhdGlvbmFjdGl2ZSghbm90aWZpY2F0aW9uYWN0aXZlKVxyXG5cclxuICAgICAgICAgICAgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlKHtcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50YWN0aXZlOm5vdGlmaWNhdGlvbmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgIFByZXZlbnQ6UHJldmVudHNwYW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIYW5kbGVvcHRpb25zPShvcHRpb250eXBlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbm9iaj17Li4ub3B0aW9uc307XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbm9iaikge1xyXG4gICAgICAgICAgICBvcHRpb25vYmpba2V5XS5ib3R0b209ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBvcHRpb25vYmpbb3B0aW9udHlwZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4dGVyaW9yZGl2IGVkaXRhY3RpdmU9e2FjdGl2ZWVkaXR9PlxyXG4gICAgICAgICAgICA8RWRpdHdpbmRvdyBjbG9zZWZ1bmM9eygpPT5zZXRhY3RpdmVlZGl0KGZhbHNlKX0gZWRpdGRhdGE9e3Byb2ZpbGVkYXRhfSBhY3RpdmU9e2FjdGl2ZWVkaXR9IC8+XHJcbiAgICAgICAgICAgIDxJbm5lcmRpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgICAgLy9idXJhZGEgY29udGV4dCB1c2VySWQgeW9rIGlzZSBidW5hIGl6aW4gdmVybWl5b3J1bSBhbmNhayBzZXRzdGF0ZSBvbGR1Z3VuZGEgZ8O2c3RlcmltIHZhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIHRoaXMgc2hvdWxkIGJlIGZpeGVkIGR1cmluZyBuYXZpZ2FpdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VzZXJkYXRhLnVzZXLEsWQgeW9rc2Ega3VsbGFuxLFjxLEgZ2lyacWfIHlhcG1hbcSxxZ90xLFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2t1c2VyaWQgJiYgVGltZXRvcmVuZGVyID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nZm9sbG93ZWQgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uYWN0aXZlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9uc0FjdGl2ZSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXtOb3RpZmljYXRpb25BY3RpdmF0ZX0+PC9Ob3RpZmljYXRpb25zQWN0aXZlPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnMgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17Tm90aWZpY2F0aW9uQWN0aXZhdGV9PjwvTm90aWZpY2F0aW9ucz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Gb2xsb3dpbmdyZXF1ZXN0KGJlaW5nZm9sbG93ZWQpfSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMGVhZDY5XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIj57YmVpbmdmb2xsb3dlZCA/IFwiVGFraXB0ZW4gw4fEsWtcIiA6IFwiVGFraXAgRXRcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ib2xkZXI+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1ldG9yZW5kZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnNldGFjdGl2ZWVkaXQoIWFjdGl2ZWVkaXQpfSBlbmRJY29uPXs8UGVyc29uPjwvUGVyc29uPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmRDb2xvcjpcIiNlNjM5NDZcIix0ZXh0VHJhbnNmb3JtOlwibm9uZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19PlByb2ZpbGkgRHV6ZW5sZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ib2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSAgc3R5bGU9e3tib3JkZXI6XCI0cHggc29saWQgd2hpdGVcIn19IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBwcm9maWxlPVwiL2xlZC5qcGdcIj48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9maWxlZGF0YS5maXJzdG5hbWUgKyBcIiBcIiArIHByb2ZpbGVkYXRhLmxhc3RuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzZjNzU3ZFwifX0+VUkgZGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCIxMHB4XCIsbWFyZ2luQm90dG9tOlwiNDBweFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlZGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcMOnaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VyY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lwIEVkaWxlbjwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkNvbnRlbnRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+R8O2bmRlcmk8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uIHN0eWxlPXt7d2lkdGg6XCI4MCVcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmc6XCIxNXB4XCJ9fT5Zb3UncmUgbm90IGhhdmluZyB0aGF0IHByb2JsZW0gaGVyZS4gVGhlcmUgaXMgbm8gbmVnYXRpdmUgc3BhY2UuIFRoZXJlZm9yZSwgSSBkb24ndCBiZWxpZXZlIGZsZXgtc2hyaW5rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7cXVlcnkudXNlcm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9e2ZhbHNlfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25zIGFwcGx5Ym9yZGVyPXtvcHRpb25zW2l0ZW1dLmJvdHRvbX0gb25DbGljaz17KCk9PkhhbmRsZW9wdGlvbnMoaXRlbSl9PntvcHRpb25zW2l0ZW1dLm5hbWV9PC9PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE8gc2VwYXJhdGUgdGhpcyBtYXAgZnVuY3Rpb24qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjEwcHhcIixwYWRkaW5nTGVmdDpcIjEwcHhcIixtYXhXaWR0aDpcIjcwMHB4XCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudG1hcCAgbm9yZWNvcmQ9e3F1ZXJ5Lm5hbWV9IHJlbGF0aW9uZnVuYz17UmVsYXRpb25yZXF1ZXN0fSBjb250ZW50bGlzdD17Q29udGVudGRhdGF9Lz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudHBhcnQ+XHJcbiAgICAgICAgICAgIDwvSW5uZXJkaXY+XHJcbiAgICAgICAgPC9FeHRlcmlvcmRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9