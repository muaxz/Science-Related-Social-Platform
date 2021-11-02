webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./components/pages/Profile/Editwindow.js":
/*!************************************************!*\
  !*** ./components/pages/Profile/Editwindow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editwindow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\Editwindow.js";


var Exterior = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Editwindow__Exterior",
  componentId: "sc-9h7al1-0"
})(["display:", ";position:absolute;width:500px;height:700px:background-color:red;"], function (_ref) {
  var active = _ref.active;
  return active ? "block" : "none";
});
_c = Exterior;
function Editwindow(_ref2) {
  var active = _ref2.active;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
    active: active,
    children: "sa"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
_c2 = Editwindow;

var _c, _c2;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Editwindow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Profile_Editwindow__WEBPACK_IMPORTED_MODULE_14__["default"], {
      active: activeedit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Innerdiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagesection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
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
              lineNumber: 319,
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
              lineNumber: 323,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
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
            lineNumber: 328,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 30
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonHolder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            variant: "contained",
            style: {
              color: "white",
              backgroundColor: "#0ead69",
              textTransform: "none"
            },
            children: "Profili Duzenle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 303,
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
              lineNumber: 341,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: profiledata.firstname + " " + profiledata.lastname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#6c757d"
            },
            children: "UI designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
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
                lineNumber: 347,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip\xE7i"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Followercount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "Takip Edilen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: Counts.Contentcount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(P, {
                children: "G\xF6nderi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            style: {
              width: "80%",
              margin: "auto"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                padding: "15px"
              },
              children: "You're not having that problem here. There is no negative space. Therefore, I don't believe flex-shrink."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 30
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 339,
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
                  lineNumber: 375,
                  columnNumber: 39
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
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
              lineNumber: 383,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 28
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 300,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvcGFnZXMvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJFeHRlcmlvciIsInN0eWxlZCIsImRpdiIsImFjdGl2ZSIsIkVkaXR3aW5kb3ciLCJFeHRlcmlvcmRpdiIsIklubmVyZGl2IiwiSW1hZ2VzZWN0aW9uIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiQmFja2dyb3VuZEltYWdlIiwiQ29udGVudHBhcnQiLCJVc2Vyc2VjdGlvbiIsIkNvbnRlbnRzZWN0aW9uIiwiT3B0aW9uYmFyIiwiT3B0aW9ucyIsImFwcGx5Ym9yZGVyIiwiQnV0dG9uSG9sZGVyIiwiUCIsInAiLCJEZXNjcmlwdGlvbiIsIlByb2ZpbGUiLCJNeWRhdGEiLCJDb3VudHMiLCJDb250ZW50ZGF0YSIsInF1ZXJ5IiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJQcmV2ZW50c3BhbSIsInVzZVJlZiIsIlByZXZlbnRzcGFtMiIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0b3JkZXIiLCJwcm9maWxlZGF0YSIsInNldHByb2ZpbGVkYXRhIiwiY2hlY2t1c2VyaWQiLCJzZXRjaGVja3VzZXJpZCIsImJlaW5nZm9sbG93ZWQiLCJzZXRiZWluZ2ZvbGxvd2VkIiwiVGltZXRvcmVuZGVyIiwic2V0dGltZXRvcmVuZGVyIiwibm90aWZpY2F0aW9uYWN0aXZlIiwic2V0bm90aWZpY2F0aW9uYWN0aXZlIiwic3Bpbm5lciIsInNldHNwaW5uZXIiLCJhY3RpdmVlZGl0Iiwic2V0YWN0aXZlZWRpdCIsIlBvc3QiLCJuYW1lIiwiTGlrZSIsIlJlc2hvdyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkxlYWtjb250cm9sbG9lciIsIlJlcXVlc3RwZXJtaXNzaW9uIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiVXNlcklkIiwidXNlcm5hbWUiLCJjYXRlZ29yeSIsInNldGRhdGEiLCJwYWlnbmF0aW9uIiwib3duZXJwb3N0IiwiY3VycmVudGRhdGEiLCJvcHRpb25vYmoiLCJGb2xsb3dlZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJVc2VyVXNlciIsIkFjdGl2ZSIsIlJlbGF0aW9ucmVxdWVzdCIsInVzZUNhbGxiYWNrIiwicG9zdElkIiwiYXR0cmlidXRlIiwidHlwZW9mcmVsYXRpb24iLCJ1c2VyaWQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkZvbGxvd2luZ3JlcXVlc3QiLCJjdXJyZW50IiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJQcmV2ZW50IiwiTm90aWZpY2F0aW9uQWN0aXZhdGUiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJGb2xsb3dlcklkIiwiY3VycmVudGFjdGl2ZSIsIkhhbmRsZW9wdGlvbnMiLCJvcHRpb250eXBlIiwia2V5IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsIkZvbGxvd2VkY291bnQiLCJGb2xsb3dlcmNvdW50IiwiQ29udGVudGNvdW50Iiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhdGhuYW1lIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFF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TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRGSDs7R0E1UXVCSCxPO1VBTUhXLHNEOzs7T0FOR1gsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uNDI1MmZiMDIwNmU5MGI0M2MxMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6NTAwcHg7XHJcbmhlaWdodDo3MDBweDpcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7YWN0aXZlfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeHRlcmlvciBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgIHNhXHJcbiAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZSx1c2VDb250ZXh0LHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiXHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7Q3JlYXRldXNlcnJlbGF0aW9uLEdldHVzZXJwcm9maWxlY29udGVudCxDcmVhdGVyZWxhdGlvbnJlcSxVcGRhdGVOb3RpZmljYXRpb25hY3RpdmV9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IENvbnRlbnRjYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Db250ZW50Y2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCIuLi8uLi9ob29rcy9TY3JvbGxcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgTm90aWZpY2F0aW9uc0FjdGl2ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCBDb250ZW50bWFwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL1Byb2ZpbGUvY29udGVudG1hcFwiO1xyXG5pbXBvcnQgRWRpdHdpbmRvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3dcIlxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yZGl2PXN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDoxNDAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbnBhZGRpbmctbGVmdDo2MHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDo5NDBweCl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBJbm5lcmRpdj1zdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzZWN0aW9uPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6MjUwcHg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEyMHB4O1xyXG5oZWlnaHQ6MTIwcHg7XHJcbnRvcDotMTIwcHg7XHJcbmxlZnQ6MTQwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHRvcDotMTAwcHg7XHJcbiAgICBsZWZ0OjE2MHB4O1xyXG4gICAgY29sb3I6V2hpdGU7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlPXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYmxhY2suanBnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgQ29udGVudHBhcnQ9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2Vyc2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpzdGlja3k7XHJcbnRvcDoyNTBweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG5hbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbm1heC13aWR0aDo0MDBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpXaGl0ZTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBDb250ZW50c2VjdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6MTAwMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXgtd2lkdGg6NTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MjBweDtcclxuYFxyXG5cclxuY29uc3QgT3B0aW9ucz1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbjphbGwgMC4xcztcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5jb2xvcjokeyh7YXBwbHlib3JkZXJ9KT0+YXBwbHlib3JkZXIgPyBcIiNkNjI4MjhcIiA6IFwiYmxhY2tcIn07XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxMHB4O1xyXG5yaWdodDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxuYFxyXG5cclxuY29uc3QgRGVzY3JpcHRpb249c3R5bGVkLmRpdmBcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46YXV0bztcclxuQG1lZGlhIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoe015ZGF0YSxDb3VudHMsQ29udGVudGRhdGEscXVlcnl9KXtcclxuXHJcbiAgICAvL3VzZSByZWR1Y2VyIHRyeSBvbiBpdFxyXG4gICAgY29uc3R7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3QgUHJldmVudHNwYW0gPSB1c2VSZWYodHJ1ZSlcclxuICAgIGNvbnN0IFByZXZlbnRzcGFtMiA9IHVzZVJlZih0cnVlKVxyXG4gICAgY29uc3Qge2JvdHRvbX0gPSB1c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0W2NvbnRlbnRkYXRhLHNldGNvbnRlbnRkYXRhXT11c2VTdGF0ZShDb250ZW50ZGF0YSk7XHJcbiAgICBjb25zdFtvcmRlcixzZXRvcmRlcl09dXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3RbcHJvZmlsZWRhdGEsc2V0cHJvZmlsZWRhdGFdPXVzZVN0YXRlKE15ZGF0YSlcclxuICAgIGNvbnN0W2NoZWNrdXNlcmlkLHNldGNoZWNrdXNlcmlkXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtiZWluZ2ZvbGxvd2VkLHNldGJlaW5nZm9sbG93ZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W1RpbWV0b3JlbmRlcixzZXR0aW1ldG9yZW5kZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W25vdGlmaWNhdGlvbmFjdGl2ZSxzZXRub3RpZmljYXRpb25hY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3NwaW5uZXIsc2V0c3Bpbm5lcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbYWN0aXZlZWRpdCxzZXRhY3RpdmVlZGl0XT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtvcHRpb25zLHNldG9wdGlvbnNdPXVzZVN0YXRlKHtcclxuICAgICAgICBQb3N0OntcclxuICAgICAgICAgICAgbmFtZTpcIkfDtm5kZXJpbGVyXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBuYW1lOlwiQmXEn2VuaWxlclwiLFxyXG4gICAgICAgICAgICBib3R0b206ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZXNob3c6e1xyXG4gICAgICAgICAgICBuYW1lOlwixLDFn2FyZXRsZXJcIixcclxuICAgICAgICAgICAgYm90dG9tOmZhbHNlLFxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG4gICBcclxuY29uc29sZS5sb2coTXlkYXRhKTtcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvL3NhZGVjZSBwYWlnbmF0aW9uIHphdGVuIHF1ZXJ5IGRlxJ9pxZ9pbmNlIGlsayAxMCB2YWx1ZSBzZXJ2ZXJzaWRlIHRhcmFmxLFuZGFuIMOnZWtpbGl5b3JcclxuICAgICAgdmFyIExlYWtjb250cm9sbG9lciA9IHRydWU7XHJcbiAgICAgIHZhciBSZXF1ZXN0cGVybWlzc2lvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYoUmVxdWVzdHBlcm1pc3Npb24pe1xyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBHZXR1c2VycHJvZmlsZWNvbnRlbnQoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklkOnF1ZXJ5LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6cXVlcnkubmFtZSxcclxuICAgICAgICAgICAgICAgIHNldGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZXRzcGlubmVyOnNldHNwaW5uZXIsXHJcbiAgICAgICAgICAgICAgICBwYWlnbmF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3duZXJwb3N0OnF1ZXJ5Lm5hbWUgPT0gXCJQb3N0XCIgPyBcInRydWVcIiA6IFwiZmFzbGVcIixcclxuICAgICAgICAgICAgICAgIExlYWtjb250cm9sbG9lcjpMZWFrY29udHJvbGxvZXIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjoxMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgTGVha2NvbnRyb2xsb2VyPWZhbHNlO1xyXG4gICAgICAgICBSZXF1ZXN0cGVybWlzc2lvbj10cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICB9LFtxdWVyeV0pXHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ub2JqPXsuLi5vcHRpb25zfTtcclxuICAgICAgICBvcHRpb25vYmpbcXVlcnkubmFtZV0uYm90dG9tPXRydWU7XHJcbiAgICAgICAgc2V0b3B0aW9ucyhvcHRpb25vYmopO1xyXG5cclxuICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0dGltZXRvcmVuZGVyKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRjaGVja3VzZXJpZChmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5LnVzZXJuYW1lKVxyXG4gICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gcXVlcnkudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Y2hlY2t1c2VyaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2J1cmFkYSB0YWtpcCBldCBidXRvbnUgdmUgYmlsZGlyaW0gYnV0b251IGthbGvEsWNhayB5ZXJpbmUgYmVsa2kgYXlhcmxhci5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgTXlkYXRhLkZvbGxvd2VkLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLlVzZXJVc2VyLkFjdGl2ZSA9PSB0cnVlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9uYWN0aXZlKHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YmVpbmdmb2xsb3dlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy96YXRlbiBidXJheWEgZ2lyZW1lbWnFnyBpc2UgZGVmYXVsdCBkZcSfZXIgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxbdXNlcmRhdGEscXVlcnldKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgc2V0cHJvZmlsZWRhdGEoey4uLk15ZGF0YX0pXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKFsuLi5Db250ZW50ZGF0YV0pXHJcblxyXG4gICAgfSxbcXVlcnldKVxyXG5cclxuICAgIGNvbnN0IFJlbGF0aW9ucmVxdWVzdD11c2VDYWxsYmFjaygocG9zdElkLGF0dHJpYnV0ZSx0eXBlb2ZyZWxhdGlvbix1c2VyaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ3JlYXRlcmVsYXRpb25yZXEoe1xyXG4gICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICBQb3N0SWQ6cG9zdElkLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICAgICAgICByZWxhdGlvbnR5cGU6dHlwZW9mcmVsYXRpb24sXHJcbiAgICAgICAgICAgIFVzZXJJZG9mY29udGVudDp1c2VyaWQsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFt1c2VyZGF0YS5Vc2VySWRdKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhiZWluZ2ZvbGxvd2VkKVxyXG4gICAgY29uc3QgRm9sbG93aW5ncmVxdWVzdD0oKT0+e1xyXG5cclxuICAgICAgICAvL3RvZG8gcmVzcG9uc2UgZ2VsZW5lIGthZGFyIGJla2xlIGhhbWxleWUgaXppbiB2ZXJtZVxyXG4gICAgICAgaWYoUHJldmVudHNwYW0yLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICBQcmV2ZW50c3BhbTIuY3VycmVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldGJlaW5nZm9sbG93ZWQoIWJlaW5nZm9sbG93ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBDcmVhdGV1c2VycmVsYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93ZWRJZDpNeWRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpZmZvbGxvdzpiZWluZ2ZvbGxvd2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZlbnQ6UHJldmVudHNwYW0yXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE5vdGlmaWNhdGlvbkFjdGl2YXRlID0gKCk9PntcclxuXHJcbiAgICAgICAgaWYoUHJldmVudHNwYW0uY3VycmVudCl7XHJcblxyXG4gICAgICAgICAgICBQcmV2ZW50c3BhbS5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9uYWN0aXZlKCFub3RpZmljYXRpb25hY3RpdmUpXHJcblxyXG4gICAgICAgICAgICBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUoe1xyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlZElkOk15ZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRhY3RpdmU6bm90aWZpY2F0aW9uYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgUHJldmVudDpQcmV2ZW50c3BhbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhhbmRsZW9wdGlvbnM9KG9wdGlvbnR5cGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ub2JqPXsuLi5vcHRpb25zfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ub2JqKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbm9ialtrZXldLmJvdHRvbT1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIG9wdGlvbm9ialtvcHRpb250eXBlXS5ib3R0b209dHJ1ZTtcclxuICAgICAgICBzZXRvcHRpb25zKG9wdGlvbm9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXh0ZXJpb3JkaXY+XHJcbiAgICAgICAgICAgIDxFZGl0d2luZG93IGFjdGl2ZT17YWN0aXZlZWRpdH0gLz5cclxuICAgICAgICAgICAgPElubmVyZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAvL2J1cmFkYSBjb250ZXh0IHVzZXJJZCB5b2sgaXNlIGJ1bmEgaXppbiB2ZXJtaXlvcnVtIGFuY2FrIHNldHN0YXRlIG9sZHVndW5kYSBnw7ZzdGVyaW0gdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gdGhpcyBzaG91bGQgYmUgZml4ZWQgZHVyaW5nIG5hdmlnYWl0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNlcmRhdGEudXNlcsSxZCB5b2tzYSBrdWxsYW7EsWPEsSBnaXJpxZ8geWFwbWFtxLHFn3TEsXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja3VzZXJpZCAmJiBUaW1ldG9yZW5kZXIgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QnV0dG9uSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmdmb2xsb3dlZCAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25hY3RpdmUgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxOb3RpZmljYXRpb25zQWN0aXZlIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGN1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e05vdGlmaWNhdGlvbkFjdGl2YXRlfT48L05vdGlmaWNhdGlvbnNBY3RpdmU+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXtOb3RpZmljYXRpb25BY3RpdmF0ZX0+PC9Ob3RpZmljYXRpb25zPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkZvbGxvd2luZ3JlcXVlc3QoYmVpbmdmb2xsb3dlZCl9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmRDb2xvcjpcIiMwZWFkNjlcIix0ZXh0VHJhbnNmb3JtOlwibm9uZVwifX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPntiZWluZ2ZvbGxvd2VkID8gXCJUYWtpcHRlbiDDh8Sxa1wiIDogXCJUYWtpcCBFdFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxCdXR0b25Ib2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMGVhZDY5XCIsdGV4dFRyYW5zZm9ybTpcIm5vbmVcIn19PlByb2ZpbGkgRHV6ZW5sZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50cGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPFVzZXJzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlICBzdHlsZT17e2JvcmRlcjpcIjRweCBzb2xpZCB3aGl0ZVwifX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHByb2ZpbGU9XCIvbGVkLmpwZ1wiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGVkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvZmlsZWRhdGEubGFzdG5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjNmM3NTdkXCJ9fT5VSSBkZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjEwcHhcIixtYXJnaW5Cb3R0b206XCI0MHB4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57Q291bnRzLkZvbGxvd2VkY291bnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPlRha2lww6dpPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuRm9sbG93ZXJjb3VudH08L1A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+VGFraXAgRWRpbGVuPC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQPntDb3VudHMuQ29udGVudGNvdW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD5Hw7ZuZGVyaTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gc3R5bGU9e3t3aWR0aDpcIjgwJVwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZzpcIjE1cHhcIn19PllvdSdyZSBub3QgaGF2aW5nIHRoYXQgcHJvYmxlbSBoZXJlLiBUaGVyZSBpcyBubyBuZWdhdGl2ZSBzcGFjZS4gVGhlcmVmb3JlLCBJIGRvbid0IGJlbGlldmUgZmxleC1zaHJpbmsuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Vc2Vyc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHtxdWVyeS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpgJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17ZmFsc2V9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbnMgYXBwbHlib3JkZXI9e29wdGlvbnNbaXRlbV0uYm90dG9tfSBvbkNsaWNrPXsoKT0+SGFuZGxlb3B0aW9ucyhpdGVtKX0+e29wdGlvbnNbaXRlbV0ubmFtZX08L09wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETyBzZXBhcmF0ZSB0aGlzIG1hcCBmdW5jdGlvbiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwiLG1heFdpZHRoOlwiNzAwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50bWFwICBub3JlY29yZD17cXVlcnkubmFtZX0gcmVsYXRpb25mdW5jPXtSZWxhdGlvbnJlcXVlc3R9IGNvbnRlbnRsaXN0PXtDb250ZW50ZGF0YX0vPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50cGFydD5cclxuICAgICAgICAgICAgPC9Jbm5lcmRpdj5cclxuICAgICAgICA8L0V4dGVyaW9yZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=