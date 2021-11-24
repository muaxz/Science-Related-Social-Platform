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
})(["width:100%;height:100%;background-image:url(/way.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yZGl2Iiwic3R5bGVkIiwiZGl2IiwiZWRpdGFjdGl2ZSIsIklubmVyZGl2IiwiSW1hZ2VzZWN0aW9uIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiQmFja2dyb3VuZEltYWdlIiwiQ29udGVudHBhcnQiLCJVc2Vyc2VjdGlvbiIsIkNvbnRlbnRzZWN0aW9uIiwiT3B0aW9uYmFyIiwiT3B0aW9ucyIsImFwcGx5Ym9yZGVyIiwiQnV0dG9uSG9sZGVyIiwiUCIsInAiLCJEZXNjcmlwdGlvbiIsIlByb2ZpbGUiLCJNeWRhdGEiLCJDb3VudHMiLCJDb250ZW50ZGF0YSIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJQcmV2ZW50c3BhbSIsInVzZVJlZiIsIlByZXZlbnRzcGFtMiIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJhY3RpdmVlZGl0Iiwic2V0YWN0aXZlZWRpdCIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkxlYWtjb250cm9sbG9lciIsIlJlcXVlc3RwZXJtaXNzaW9uIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwib3duZXJwb3N0IiwiY3VycmVudGRhdGEiLCJvcHRpb25vYmoiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJVc2VyVXNlciIsIkFjdGl2ZSIsIlJlbGF0aW9ucmVxdWVzdCIsInVzZUNhbGxiYWNrIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkZvbGxvd2luZ3JlcXVlc3QiLCJjdXJyZW50IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJQcmV2ZW50IiwiTm90aWZpY2F0aW9uQWN0aXZhdGUiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJGb2xsb3dlcklkIiwiY3VycmVudGFjdGl2ZSIsIkhhbmRsZW9wdGlvbnMiLCJvcHRpb250eXBlIiwia2V5IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIkZvbGxvd2VkY291bnQiLCJGb2xsb3dlcmNvdW50IiwiQ29udGVudGNvdW50Iiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhdGhuYW1lIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE7QUFBQTtBQUFBLFVBREo7QUE0Rkg7O0dBNVF1QkgsTztVQU1IVyxzRDs7O09BTkdYLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjkyZmQxNTI0NzYyNGQ2N2UwNzBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJwcm9maWxlY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25hY3RpdmV9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgRWRpdFJvdW5kZWQsIE5vdGlmaWNhdGlvbnMsIE5vdGlmaWNhdGlvbnNBY3RpdmUsUGVyc29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgQ29udGVudG1hcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL2NvbnRlbnRtYXBcIjtcclxuaW1wb3J0IEVkaXR3aW5kb3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZXMvUHJvZmlsZS9FZGl0d2luZG93XCJcclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmRpdj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTQwMHB4O1xyXG5wYWRkaW5nLXRvcDo2MHB4O1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbm92ZXJmbG93OiR7KHtlZGl0YWN0aXZlfSk9PmVkaXRhY3RpdmUgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJ9O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6NjBweDtcclxuQG1lZGlhIChtYXgtd2lkdGg6OTQwcHgpe1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgSW5uZXJkaXY9c3R5bGVkLmRpdmBcclxuaGVpZ2h0OjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjI1MHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG50b3A6LTEyMHB4O1xyXG5sZWZ0OjE0MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbiAgICB0b3A6LTEwMHB4O1xyXG4gICAgbGVmdDoxNjBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZT1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL3dheS5qcGcpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50cGFydD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnN0aWNreTtcclxudG9wOjI1MHB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbmFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxubWF4LXdpZHRoOjQwMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGNvbG9yOldoaXRlO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxMDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuY29uc3QgT3B0aW9uYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxubWFyZ2luOmF1dG87XHJcbm1heC13aWR0aDo1MDBweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBPcHRpb25zPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uOmFsbCAwLjFzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmNvbG9yOiR7KHthcHBseWJvcmRlcn0pPT5hcHBseWJvcmRlciA/IFwiI2Q2MjgyOFwiIDogXCJibGFja1wifTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uSG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjEwcHg7XHJcbnJpZ2h0OjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQucGBcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjphdXRvO1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7TXlkYXRhLENvdW50cyxDb250ZW50ZGF0YSxxdWVyeX0pe1xyXG5cclxuICAgIC8vdXNlIHJlZHVjZXIgdHJ5IG9uIGl0XHJcbiAgICBjb25zdHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCBQcmV2ZW50c3BhbSA9IHVzZVJlZih0cnVlKVxyXG4gICAgY29uc3QgUHJldmVudHNwYW0yID0gdXNlUmVmKHRydWUpXHJcbiAgICBjb25zdCB7Ym90dG9tfSA9IHVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKENvbnRlbnRkYXRhKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdFtwcm9maWxlZGF0YSxzZXRwcm9maWxlZGF0YV09dXNlU3RhdGUoTXlkYXRhKVxyXG4gICAgY29uc3RbY2hlY2t1c2VyaWQsc2V0Y2hlY2t1c2VyaWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2JlaW5nZm9sbG93ZWQsc2V0YmVpbmdmb2xsb3dlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbVGltZXRvcmVuZGVyLHNldHRpbWV0b3JlbmRlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbbm90aWZpY2F0aW9uYWN0aXZlLHNldG5vdGlmaWNhdGlvbmFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Rbc3Bpbm5lcixzZXRzcGlubmVyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVlZGl0LHNldGFjdGl2ZWVkaXRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W29wdGlvbnMsc2V0b3B0aW9uc109dXNlU3RhdGUoe1xyXG4gICAgICAgIFBvc3Q6e1xyXG4gICAgICAgICAgICBuYW1lOlwiR8O2bmRlcmlsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJCZcSfZW5pbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlc2hvdzp7XHJcbiAgICAgICAgICAgIG5hbWU6XCLEsMWfYXJldGxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgIFxyXG5jb25zb2xlLmxvZyhNeWRhdGEpO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIC8vc2FkZWNlIHBhaWduYXRpb24gemF0ZW4gcXVlcnkgZGXEn2nFn2luY2UgaWxrIDEwIHZhbHVlIHNlcnZlcnNpZGUgdGFyYWbEsW5kYW4gw6dla2lsaXlvclxyXG4gICAgICB2YXIgTGVha2NvbnRyb2xsb2VyID0gdHJ1ZTtcclxuICAgICAgdmFyIFJlcXVlc3RwZXJtaXNzaW9uID0gZmFsc2U7XHJcblxyXG4gICAgICBpZihSZXF1ZXN0cGVybWlzc2lvbil7XHJcbiAgICAgICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIEdldHVzZXJwcm9maWxlY29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySWQ6cXVlcnkudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTpxdWVyeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2V0ZGF0YTpzZXRjb250ZW50ZGF0YSxcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHBhaWduYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvd25lcnBvc3Q6cXVlcnkubmFtZSA9PSBcIlBvc3RcIiA/IFwidHJ1ZVwiIDogXCJmYXNsZVwiLFxyXG4gICAgICAgICAgICAgICAgTGVha2NvbnRyb2xsb2VyOkxlYWtjb250cm9sbG9lcixcclxuICAgICAgICAgICAgICAgIG9yZGVyOjEwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGRhdGE6Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICBMZWFrY29udHJvbGxvZXI9ZmFsc2U7XHJcbiAgICAgICAgIFJlcXVlc3RwZXJtaXNzaW9uPXRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgIH0sW3F1ZXJ5XSlcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG4gICAgICAgIG9wdGlvbm9ialtxdWVyeS5uYW1lXS5ib3R0b209dHJ1ZTtcclxuICAgICAgICBzZXRvcHRpb25zKG9wdGlvbm9iaik7XHJcblxyXG4gICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICBcclxuICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW1ldG9yZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldGNoZWNrdXNlcmlkKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnkudXNlcm5hbWUpXHJcbiAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSBxdWVyeS51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRjaGVja3VzZXJpZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vYnVyYWRhIHRha2lwIGV0IGJ1dG9udSB2ZSBiaWxkaXJpbSBidXRvbnUga2Fsa8SxY2FrIHllcmluZSBiZWxraSBheWFybGFyLlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICBNeWRhdGEuRm9sbG93ZWQuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uVXNlclVzZXIuQWN0aXZlID09IHRydWUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRub3RpZmljYXRpb25hY3RpdmUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRiZWluZ2ZvbGxvd2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3phdGVuIGJ1cmF5YSBnaXJlbWVtacWfIGlzZSBkZWZhdWx0IGRlxJ9lciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFt1c2VyZGF0YSxxdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICBzZXRwcm9maWxlZGF0YSh7Li4uTXlkYXRhfSlcclxuICAgICAgc2V0Y29udGVudGRhdGEoWy4uLkNvbnRlbnRkYXRhXSlcclxuXHJcbiAgICB9LFtxdWVyeV0pXHJcblxyXG4gICAgY29uc3QgUmVsYXRpb25yZXF1ZXN0PXVzZUNhbGxiYWNrKChwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW3VzZXJkYXRhLlVzZXJJZF0pXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGJlaW5nZm9sbG93ZWQpXHJcbiAgICBjb25zdCBGb2xsb3dpbmdyZXF1ZXN0PSgpPT57XHJcblxyXG4gICAgICAgIC8vdG9kbyByZXNwb25zZSBnZWxlbmUga2FkYXIgYmVrbGUgaGFtbGV5ZSBpemluIHZlcm1lXHJcbiAgICAgICBpZihQcmV2ZW50c3BhbTIuY3VycmVudCl7XHJcbiAgICAgICAgICAgIFByZXZlbnRzcGFtMi5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCghYmVpbmdmb2xsb3dlZCk7XHJcblxyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIENyZWF0ZXVzZXJyZWxhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2lmZm9sbG93OmJlaW5nZm9sbG93ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmVudDpQcmV2ZW50c3BhbTJcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgTm90aWZpY2F0aW9uQWN0aXZhdGUgPSAoKT0+e1xyXG5cclxuICAgICAgICBpZihQcmV2ZW50c3BhbS5jdXJyZW50KXtcclxuXHJcbiAgICAgICAgICAgIFByZXZlbnRzcGFtLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRub3RpZmljYXRpb25hY3RpdmUoIW5vdGlmaWNhdGlvbmFjdGl2ZSlcclxuXHJcbiAgICAgICAgICAgIFVwZGF0ZU5vdGlmaWNhdGlvbmFjdGl2ZSh7XHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VkSWQ6TXlkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGFjdGl2ZTpub3RpZmljYXRpb25hY3RpdmUsXHJcbiAgICAgICAgICAgICAgICBQcmV2ZW50OlByZXZlbnRzcGFtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGFuZGxlb3B0aW9ucz0ob3B0aW9udHlwZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25vYmo9ey4uLm9wdGlvbnN9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25vYmopIHtcclxuICAgICAgICAgICAgb3B0aW9ub2JqW2tleV0uYm90dG9tPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgb3B0aW9ub2JqW29wdGlvbnR5cGVdLmJvdHRvbT10cnVlO1xyXG4gICAgICAgIHNldG9wdGlvbnMob3B0aW9ub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvcmRpdiBlZGl0YWN0aXZlPXthY3RpdmVlZGl0fT5cclxuICAgICAgICAgICAgPEVkaXR3aW5kb3cgY2xvc2VmdW5jPXsoKT0+c2V0YWN0aXZlZWRpdChmYWxzZSl9IGVkaXRkYXRhPXtwcm9maWxlZGF0YX0gYWN0aXZlPXthY3RpdmVlZGl0fSAvPlxyXG4gICAgICAgICAgICA8SW5uZXJkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UvPiBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgICAgIC8vYnVyYWRhIGNvbnRleHQgdXNlcklkIHlvayBpc2UgYnVuYSBpemluIHZlcm1peW9ydW0gYW5jYWsgc2V0c3RhdGUgb2xkdWd1bmRhIGfDtnN0ZXJpbSB2YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETyB0aGlzIHNob3VsZCBiZSBmaXhlZCBkdXJpbmcgbmF2aWdhaXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91c2VyZGF0YS51c2VyxLFkIHlva3NhIGt1bGxhbsSxY8SxIGdpcmnFnyB5YXBtYW3EscWfdMSxclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrdXNlcmlkICYmIFRpbWV0b3JlbmRlciA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxCdXR0b25Ib2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZ2ZvbGxvd2VkICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbmFjdGl2ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE5vdGlmaWNhdGlvbnNBY3RpdmUgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17Tm90aWZpY2F0aW9uQWN0aXZhdGV9PjwvTm90aWZpY2F0aW9uc0FjdGl2ZT4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e05vdGlmaWNhdGlvbkFjdGl2YXRlfT48L05vdGlmaWNhdGlvbnM+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+Rm9sbG93aW5ncmVxdWVzdChiZWluZ2ZvbGxvd2VkKX0gc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIsYmFja2dyb3VuZENvbG9yOlwiIzBlYWQ2OVwiLHRleHRUcmFuc2Zvcm06XCJub25lXCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+e2JlaW5nZm9sbG93ZWQgPyBcIlRha2lwdGVuIMOHxLFrXCIgOiBcIlRha2lwIEV0XCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGltZXRvcmVuZGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEJ1dHRvbkhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRhY3RpdmVlZGl0KCFhY3RpdmVlZGl0KX0gZW5kSWNvbj17PFBlcnNvbj48L1BlcnNvbj59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZTYzOTQ2XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fT5Qcm9maWxpIER1emVubGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uSG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8VXNlcnNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgIHN0eWxlPXt7Ym9yZGVyOlwiNHB4IHNvbGlkIHdoaXRlXCJ9fSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcHJvZmlsZT1cIi9sZWQuanBnXCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZWRhdGEuZmlyc3RuYW1lICsgXCIgXCIgKyBwcm9maWxlZGF0YS5sYXN0bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiM2Yzc1N2RcIn19PlVJIGRlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsbWFyZ2luVG9wOlwiMTBweFwiLG1hcmdpbkJvdHRvbTpcIjQwcHhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZWRjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXDDp2k8L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Gb2xsb3dlcmNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5UYWtpcCBFZGlsZW48L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e0NvdW50cy5Db250ZW50Y291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPkfDtm5kZXJpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiBzdHlsZT17e3dpZHRoOlwiODAlXCIsbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nOlwiMTVweFwifX0+WW91J3JlIG5vdCBoYXZpbmcgdGhhdCBwcm9ibGVtIGhlcmUuIFRoZXJlIGlzIG5vIG5lZ2F0aXZlIHNwYWNlLiBUaGVyZWZvcmUsIEkgZG9uJ3QgYmVsaWV2ZSBmbGV4LXNocmluay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1VzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3F1ZXJ5LnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOmAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXtmYWxzZX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ucyBhcHBseWJvcmRlcj17b3B0aW9uc1tpdGVtXS5ib3R0b219IG9uQ2xpY2s9eygpPT5IYW5kbGVvcHRpb25zKGl0ZW0pfT57b3B0aW9uc1tpdGVtXS5uYW1lfTwvT3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUT0RPIHNlcGFyYXRlIHRoaXMgbWFwIGZ1bmN0aW9uKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIxMHB4XCIscGFkZGluZ0xlZnQ6XCIxMHB4XCIsbWF4V2lkdGg6XCI3MDBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRtYXAgIG5vcmVjb3JkPXtxdWVyeS5uYW1lfSByZWxhdGlvbmZ1bmM9e1JlbGF0aW9ucmVxdWVzdH0gY29udGVudGxpc3Q9e0NvbnRlbnRkYXRhfS8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0lubmVyZGl2PlxyXG4gICAgICAgIDwvRXh0ZXJpb3JkaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==