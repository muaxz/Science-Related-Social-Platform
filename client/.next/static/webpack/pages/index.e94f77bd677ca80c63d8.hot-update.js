webpackHotUpdate_N_E("pages/index",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, logout, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq, UpdateNotificationactive, UpdateProfile, Editcomment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producecommentreq", function() { return Producecommentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contentreq", function() { return Contentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentreq", function() { return Commentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contextdata", function() { return Contextdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getusercontent", function() { return Getusercontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationcount", function() { return UpdateNotificationcount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofilecontent", function() { return Getuserprofilecontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofile", function() { return Getuserprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createuserrelation", function() { return Createuserrelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificationreq", function() { return Notificationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCountreq", function() { return NotificationCountreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getusersforsearchbar", function() { return Getusersforsearchbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentanswerreq", function() { return Commentanswerreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationactive", function() { return UpdateNotificationactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editcomment", function() { return Editcomment; });
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.baseURL = "http://localhost:3001";

var Errorhandler = function Errorhandler(_ref) {
  var data = _ref.data,
      seterrmsg = _ref.seterrmsg,
      setwindow = _ref.setwindow,
      setcontextdata = _ref.setcontextdata,
      setlogged = _ref.setlogged,
      setspinner = _ref.setspinner;

  if (data && data.error) {
    seterrmsg(true);
    setwindow(true);
    return false;
  } else if (data == "Unauthorized") {
    setcontextdata({});
    setlogged(false);
    setspinner(true);
    localStorage.removeItem("TOKEN");
    return false;
  }

  return true;
};

_c = Errorhandler;
var loginreq = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref2) {
    var setlogged, setspinner, setuserdata, userdata, router, seterrmsg, setbackenderror, setactive, _yield$axios$post, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setlogged = _ref2.setlogged, setspinner = _ref2.setspinner, setuserdata = _ref2.setuserdata, userdata = _ref2.userdata, router = _ref2.router, seterrmsg = _ref2.seterrmsg, setbackenderror = _ref2.setbackenderror, setactive = _ref2.setactive;
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/login", {
              userdata: userdata
            }, {
              withCredentials: true
            });

          case 4:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            console.log(data);

            if (data.wrong == "WP") {
              setbackenderror("WP");
              setactive(true);
            } else if (data.wrong == "WE") {
              setbackenderror("WE");
              setactive(true);
            } else {
              setlogged(true);
              setuserdata(data.Userdata);
              setspinner(true);
              localStorage.setItem("TOKEN", data.token); //http cookie only ile store edicez

              router.push("/");
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            seterrmsg(true);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function loginreq(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var logout = /*#__PURE__*/function () {
  var _ref5 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref4) {
    var setspinner, setuserdata, setlogged;
    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setspinner = _ref4.setspinner, setuserdata = _ref4.setuserdata, setlogged = _ref4.setlogged;
            _context2.prev = 1;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/logout", {
              withCredentials: true
            });

          case 4:
            setlogged(false);
            setuserdata({});
            setspinner(true);
            console.log(logged);
            _context2.next = 12;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function logout(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
var resigterreq = /*#__PURE__*/function () {
  var _ref7 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref6) {
    var setbackenderror, userdata, setactive, seterrmsg, _yield$axios$post2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setbackenderror = _ref6.setbackenderror, userdata = _ref6.userdata, setactive = _ref6.setactive, seterrmsg = _ref6.seterrmsg;
            console.log("");
            _context3.prev = 2;
            _context3.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/register", {
              userdata: userdata
            });

          case 5:
            _yield$axios$post2 = _context3.sent;
            data = _yield$axios$post2.data;

            if (data.exist) {
              setbackenderror("EXİST");
              setactive(true);
            } else {
              console.log("Başarılı kayıt");
            }

            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            seterrmsg(true);
            console.log("sorun var");

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function resigterreq(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var producereq = /*#__PURE__*/function () {
  var _ref9 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref8) {
    var contentdata, seterrmsg, setwindow, router, typeofsubmit, _yield$axios$post3, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            contentdata = _ref8.contentdata, seterrmsg = _ref8.seterrmsg, setwindow = _ref8.setwindow, router = _ref8.router, typeofsubmit = _ref8.typeofsubmit;
            _context4.prev = 1;
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/content/produce", _objectSpread(_objectSpread({}, contentdata), {}, {
              processtype: typeofsubmit
            }));

          case 4:
            _yield$axios$post3 = _context4.sent;
            data = _yield$axios$post3.data;

            if (!Errorhandler({
              data: data,
              setwindow: setwindow,
              seterrmsg: seterrmsg
            })) {
              _context4.next = 11;
              break;
            }

            setwindow(true);
            router.push("/profile/content"); //we route işlemi

            _context4.next = 12;
            break;

          case 11:
            return _context4.abrupt("return");

          case 12:
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            seterrmsg(true);
            console.log("burada");

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function producereq(_x4) {
    return _ref9.apply(this, arguments);
  };
}();
var Producecommentreq = /*#__PURE__*/function () {
  var _ref11 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(_ref10) {
    var Message, TakerId, setnumbercom, setwindow, UserId, ContentId, seterrmsg, _yield$axios$post4, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            Message = _ref10.Message, TakerId = _ref10.TakerId, setnumbercom = _ref10.setnumbercom, setwindow = _ref10.setwindow, UserId = _ref10.UserId, ContentId = _ref10.ContentId, seterrmsg = _ref10.seterrmsg;
            _context5.prev = 1;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/comment/produce", {
              contentdata: {
                Message: Message,
                UserId: UserId,
                ContentId: ContentId,
                TakerId: TakerId
              }
            });

          case 4:
            _yield$axios$post4 = _context5.sent;
            data = _yield$axios$post4.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg
            })) {
              _context5.next = 11;
              break;
            }

            setnumbercom(function (prev) {
              return prev + 1;
            });
            return _context5.abrupt("return");

          case 11:
            console.log("falselan");
            return _context5.abrupt("return");

          case 13:
            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](1);
            seterrmsg(true);
            console.log("burada");

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 15]]);
  }));

  return function Producecommentreq(_x5) {
    return _ref11.apply(this, arguments);
  };
}();
_c2 = Producecommentreq;
var Homereq = /*#__PURE__*/function () {
  var _ref13 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(_ref12) {
    var currentdata, setspinner, seterrmsg, setwindow, setcontentdata, order, setstopreq, category, paignation, selectionlist, setselection, _yield$axios$get, data, selections, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            currentdata = _ref12.currentdata, setspinner = _ref12.setspinner, seterrmsg = _ref12.seterrmsg, setwindow = _ref12.setwindow, setcontentdata = _ref12.setcontentdata, order = _ref12.order, setstopreq = _ref12.setstopreq, category = _ref12.category, paignation = _ref12.paignation, selectionlist = _ref12.selectionlist, setselection = _ref12.setselection;
            _context6.prev = 1;
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/gethome/".concat(order, "/").concat(category), {
              withCredentials: true
            });

          case 4:
            _yield$axios$get = _context6.sent;
            data = _yield$axios$get.data;
            console.log(data);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context6.next = 15;
              break;
            }

            if (data.data.length == 0) {
              selections = _objectSpread({}, selectionlist);
              selections[category].stoprequesting = true;
              setselection(selectionlist);
              console.log("stopped request");
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data);

            if (paignation) {
              setcontentdata(Current.concat(Mydata)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
            } else {
              setcontentdata(Mydata);
            }

            return _context6.abrupt("return", setspinner(false));

          case 15:
            return _context6.abrupt("return");

          case 16:
            _context6.next = 21;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](1);
            seterrmsg(true);

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 18]]);
  }));

  return function Homereq(_x6) {
    return _ref13.apply(this, arguments);
  };
}();
_c3 = Homereq;
var Createrelationreq = /*#__PURE__*/function () {
  var _ref15 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(_ref14) {
    var UserId, PostId, attribute, seterrmsg, setwindow, relationtype, UserIdofcontent, _yield$axios$post5, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            UserId = _ref14.UserId, PostId = _ref14.PostId, attribute = _ref14.attribute, seterrmsg = _ref14.seterrmsg, setwindow = _ref14.setwindow, relationtype = _ref14.relationtype, UserIdofcontent = _ref14.UserIdofcontent;
            _context7.prev = 1;
            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("content/createrelation", {
              UserId: UserId,
              PostId: PostId,
              attribute: attribute,
              relationtype: relationtype,
              UserIdofcontent: UserIdofcontent
            });

          case 4:
            _yield$axios$post5 = _context7.sent;
            data = _yield$axios$post5.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return");

          case 10:
            return _context7.abrupt("return");

          case 11:
            _context7.next = 16;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 13]]);
  }));

  return function Createrelationreq(_x7) {
    return _ref15.apply(this, arguments);
  };
}();
_c4 = Createrelationreq;
var Contentreq = /*#__PURE__*/function () {
  var _ref17 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(_ref16) {
    var contentId, setcontent, seterrmsg, setwindow, _yield$axios$get2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            contentId = _ref16.contentId, setcontent = _ref16.setcontent, seterrmsg = _ref16.seterrmsg, setwindow = _ref16.setwindow;
            _context8.prev = 1;
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/".concat(contentId));

          case 4:
            _yield$axios$get2 = _context8.sent;
            data = _yield$axios$get2.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context8.next = 11;
              break;
            }

            console.log(data.data);
            setcontent(data.data);
            _context8.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context8.next = 14;
              break;
            }

            _context8.next = 15;
            break;

          case 14:
            return _context8.abrupt("return");

          case 15:
            _context8.next = 20;
            break;

          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](1);
            seterrmsg(true);

          case 20:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 17]]);
  }));

  return function Contentreq(_x8) {
    return _ref17.apply(this, arguments);
  };
}();
_c5 = Contentreq;
var Commentreq = /*#__PURE__*/function () {
  var _ref19 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(_ref18) {
    var contentId, setactiveproduce, setcomment, seterrmsg, setwindow, last, order, commentlist, _yield$axios$get3, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            contentId = _ref18.contentId, setactiveproduce = _ref18.setactiveproduce, setcomment = _ref18.setcomment, seterrmsg = _ref18.seterrmsg, setwindow = _ref18.setwindow, last = _ref18.last, order = _ref18.order, commentlist = _ref18.commentlist;
            _context9.prev = 1;
            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("comment/".concat(contentId, "/").concat(last, "/").concat(order));

          case 4:
            _yield$axios$get3 = _context9.sent;
            data = _yield$axios$get3.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context9.next = 14;
              break;
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentlist);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data);
            console.log(Mydata);

            if (last) {
              setcomment(Mydata.concat(Current)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
            } else {
              setcomment(Current.concat(Mydata));
            }

            setactiveproduce(false);
            _context9.next = 18;
            break;

          case 14:
            if (!(data == "Unauthroized")) {
              _context9.next = 17;
              break;
            }

            _context9.next = 18;
            break;

          case 17:
            return _context9.abrupt("return");

          case 18:
            _context9.next = 23;
            break;

          case 20:
            _context9.prev = 20;
            _context9.t0 = _context9["catch"](1);
            seterrmsg(true);

          case 23:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 20]]);
  }));

  return function Commentreq(_x9) {
    return _ref19.apply(this, arguments);
  };
}();
_c6 = Commentreq;
var Contextdata = /*#__PURE__*/function () {
  var _ref21 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(_ref20) {
    var Token, setspinner, setcontextdata, seterrmsg, setwindow, setlogged, setallowaction, _yield$axios$get4, data, mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            Token = _ref20.Token, setspinner = _ref20.setspinner, setcontextdata = _ref20.setcontextdata, seterrmsg = _ref20.seterrmsg, setwindow = _ref20.setwindow, setlogged = _ref20.setlogged, setallowaction = _ref20.setallowaction;
            _context10.prev = 1;
            _context10.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/user/getuserdata", {
              withCredentials: true
            });

          case 4:
            _yield$axios$get4 = _context10.sent;
            data = _yield$axios$get4.data;
            console.log(data);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow,
              setcontextdata: setcontextdata,
              setlogged: setlogged,
              setspinner: setspinner
            })) {
              _context10.next = 15;
              break;
            }

            mydata = {
              UserId: data.userdata.id,
              Username: data.userdata.firstname,
              Usersurname: data.userdata.lastname,
              Userrole: data.userdata.Role,
              Userimage: data.userdata.imageurl
            };
            setcontextdata(mydata);
            setspinner(true);
            setlogged(true);
            setallowaction(true);
            _context10.next = 16;
            break;

          case 15:
            return _context10.abrupt("return");

          case 16:
            _context10.next = 21;
            break;

          case 18:
            _context10.prev = 18;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);

          case 21:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 18]]);
  }));

  return function Contextdata(_x10) {
    return _ref21.apply(this, arguments);
  };
}();
_c7 = Contextdata;
var Getusercontent = /*#__PURE__*/function () {
  var _ref23 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(_ref22) {
    var UserId, params, setdata, setwindow, seterrmsg, order, setstopscrolling, currentdata, _yield$axios$get5, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            UserId = _ref22.UserId, params = _ref22.params, setdata = _ref22.setdata, setwindow = _ref22.setwindow, seterrmsg = _ref22.seterrmsg, order = _ref22.order, setstopscrolling = _ref22.setstopscrolling, currentdata = _ref22.currentdata;
            _context11.prev = 1;
            _context11.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/usercontent/".concat(params, "/").concat(UserId, "/").concat(order));

          case 4:
            _yield$axios$get5 = _context11.sent;
            data = _yield$axios$get5.data;
            console.log(data.data);

            if (!Errorhandler({
              data: data
            })) {
              _context11.next = 14;
              break;
            }

            if (!data.data.length) {
              setstopscrolling(true);
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data); //push metodu bir diziyi bi  r dizinin içine pushluyor fakat concat elemanları

            setdata(Current.concat(Mydata));
            _context11.next = 18;
            break;

          case 14:
            if (!(data == "Unauthroized")) {
              _context11.next = 17;
              break;
            }

            _context11.next = 18;
            break;

          case 17:
            return _context11.abrupt("return");

          case 18:
            _context11.next = 23;
            break;

          case 20:
            _context11.prev = 20;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);

          case 23:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 20]]);
  }));

  return function Getusercontent(_x11) {
    return _ref23.apply(this, arguments);
  };
}();
_c8 = Getusercontent;
var UpdateNotificationcount = /*#__PURE__*/function () {
  var _ref25 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(_ref24) {
    var UserId;
    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            UserId = _ref24.UserId;
            _context12.prev = 1;
            _context12.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/notification/update/".concat(UserId));

          case 4:
            _context12.next = 8;
            break;

          case 6:
            _context12.prev = 6;
            _context12.t0 = _context12["catch"](1);

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 6]]);
  }));

  return function UpdateNotificationcount(_x12) {
    return _ref25.apply(this, arguments);
  };
}();
_c9 = UpdateNotificationcount;
var Getuserprofilecontent = /*#__PURE__*/function () {
  var _ref27 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13(_ref26) {
    var setspinner, setdata, category, UserId, ownerpost, order, _yield$axios$get6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            setspinner = _ref26.setspinner, setdata = _ref26.setdata, category = _ref26.category, UserId = _ref26.UserId, ownerpost = _ref26.ownerpost, order = _ref26.order;
            _context13.prev = 1;
            _context13.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getuserprofilecontent/".concat(UserId, "/").concat(ownerpost, "/").concat(category, "/").concat(order));

          case 4:
            _yield$axios$get6 = _context13.sent;
            data = _yield$axios$get6.data;
            console.log(data.data);

            if (!Errorhandler({
              data: data
            })) {
              _context13.next = 12;
              break;
            }

            setdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data));
            setspinner(false);
            _context13.next = 16;
            break;

          case 12:
            if (!(data == "Unauthroized")) {
              _context13.next = 15;
              break;
            }

            _context13.next = 16;
            break;

          case 15:
            return _context13.abrupt("return");

          case 16:
            _context13.next = 21;
            break;

          case 18:
            _context13.prev = 18;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0);

          case 21:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 18]]);
  }));

  return function Getuserprofilecontent(_x13) {
    return _ref27.apply(this, arguments);
  };
}();
_c10 = Getuserprofilecontent;
var Getuserprofile = /*#__PURE__*/function () {
  var _ref29 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee14(_ref28) {
    var UserId, setuserdata, _yield$axios$get7, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            UserId = _ref28.UserId, setuserdata = _ref28.setuserdata;
            _context14.prev = 1;
            _context14.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getuserprofile/".concat(UserId));

          case 4:
            _yield$axios$get7 = _context14.sent;
            data = _yield$axios$get7.data;
            console.log(data);

            if (!Errorhandler({
              data: data
            })) {
              _context14.next = 11;
              break;
            }

            setuserdata(data.userdata);
            _context14.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context14.next = 14;
              break;
            }

            _context14.next = 15;
            break;

          case 14:
            return _context14.abrupt("return");

          case 15:
            _context14.next = 20;
            break;

          case 17:
            _context14.prev = 17;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0);

          case 20:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 17]]);
  }));

  return function Getuserprofile(_x14) {
    return _ref29.apply(this, arguments);
  };
}();
_c11 = Getuserprofile;
var Createuserrelation = /*#__PURE__*/function () {
  var _ref31 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee15(_ref30) {
    var UserId, Prevent, FollowedId, checkiffollow, _yield$axios$post6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            UserId = _ref30.UserId, Prevent = _ref30.Prevent, FollowedId = _ref30.FollowedId, checkiffollow = _ref30.checkiffollow;
            _context15.prev = 1;
            _context15.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("user/createuserrelation", {
              FollowerId: UserId,
              FollowedId: FollowedId,
              checkiffollow: checkiffollow
            });

          case 4:
            _yield$axios$post6 = _context15.sent;
            data = _yield$axios$post6.data;
            setTimeout(function () {
              Prevent.current = true;
            }, 2000);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context15.next = 11;
              break;
            }

            return _context15.abrupt("return");

          case 11:
            return _context15.abrupt("return");

          case 12:
            _context15.next = 17;
            break;

          case 14:
            _context15.prev = 14;
            _context15.t0 = _context15["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 17:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 14]]);
  }));

  return function Createuserrelation(_x15) {
    return _ref31.apply(this, arguments);
  };
}();
_c12 = Createuserrelation;
var Notificationreq = /*#__PURE__*/function () {
  var _ref33 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee16(_ref32) {
    var UserId, setnavdata, order, navdata, lastrow, _yield$axios$get8, data, Mycurrentdata, Newdata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            UserId = _ref32.UserId, setnavdata = _ref32.setnavdata, order = _ref32.order, navdata = _ref32.navdata, lastrow = _ref32.lastrow;
            _context16.prev = 1;
            _context16.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("notification/getrows/".concat(UserId, "/").concat(order, "/").concat(lastrow));

          case 4:
            _yield$axios$get8 = _context16.sent;
            data = _yield$axios$get8.data;
            Mycurrentdata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(navdata);
            Newdata = data.mydata;

            if (lastrow) {
              console.log("looo2");
              setnavdata(Newdata.concat(Mycurrentdata));
            } else {
              console.log("looo");
              setnavdata(Mycurrentdata.concat(Newdata));
            }

            _context16.next = 14;
            break;

          case 11:
            _context16.prev = 11;
            _context16.t0 = _context16["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 14:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 11]]);
  }));

  return function Notificationreq(_x16) {
    return _ref33.apply(this, arguments);
  };
}();
_c13 = Notificationreq;
var NotificationCountreq = /*#__PURE__*/function () {
  var _ref35 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee17(_ref34) {
    var UserId, setcountdata, _yield$axios$get9, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            UserId = _ref34.UserId, setcountdata = _ref34.setcountdata;
            _context17.prev = 1;
            console.log(UserId);
            _context17.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("notification/getcount/".concat(UserId));

          case 5:
            _yield$axios$get9 = _context17.sent;
            data = _yield$axios$get9.data;
            setcountdata(data.data);
            _context17.next = 13;
            break;

          case 10:
            _context17.prev = 10;
            _context17.t0 = _context17["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 13:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 10]]);
  }));

  return function NotificationCountreq(_x17) {
    return _ref35.apply(this, arguments);
  };
}();
_c14 = NotificationCountreq;
var Getusersforsearchbar = /*#__PURE__*/function () {
  var _ref37 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee18(_ref36) {
    var inputvalue, setusers, setactive, setnothingfound, _yield$axios$get10, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            inputvalue = _ref36.inputvalue, setusers = _ref36.setusers, setactive = _ref36.setactive, setnothingfound = _ref36.setnothingfound;
            _context18.prev = 1;
            _context18.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getusername/".concat(inputvalue));

          case 4:
            _yield$axios$get10 = _context18.sent;
            data = _yield$axios$get10.data;
            console.log(data.data);

            if (data.data.length == 0) {
              setactive("Nothing");
            } else {
              setactive("");
              setusers(data.data);
            }

            _context18.next = 13;
            break;

          case 10:
            _context18.prev = 10;
            _context18.t0 = _context18["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 13:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 10]]);
  }));

  return function Getusersforsearchbar(_x18) {
    return _ref37.apply(this, arguments);
  };
}();
_c15 = Getusersforsearchbar;
var DeletePost = /*#__PURE__*/function () {
  var _ref39 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee19(_ref38) {
    var PostId, seterrmsg, setwindow, _yield$axios$post7, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            PostId = _ref38.PostId, seterrmsg = _ref38.seterrmsg, setwindow = _ref38.setwindow;
            _context19.prev = 1;
            _context19.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("user/deletepost", {
              PostId: PostId
            });

          case 4:
            _yield$axios$post7 = _context19.sent;
            data = _yield$axios$post7.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context19.next = 10;
              break;
            }

            console.log(data.success);
            _context19.next = 11;
            break;

          case 10:
            return _context19.abrupt("return");

          case 11:
            _context19.next = 16;
            break;

          case 13:
            _context19.prev = 13;
            _context19.t0 = _context19["catch"](1);
            console.log("error");

          case 16:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[1, 13]]);
  }));

  return function DeletePost(_x19) {
    return _ref39.apply(this, arguments);
  };
}();
_c16 = DeletePost;
var Commentanswerreq = /*#__PURE__*/function () {
  var _ref41 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee20(_ref40) {
    var UppercommentId, Answer, UserId, seterrmsg, setwindow, ContentId, _yield$axios$post8, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            UppercommentId = _ref40.UppercommentId, Answer = _ref40.Answer, UserId = _ref40.UserId, seterrmsg = _ref40.seterrmsg, setwindow = _ref40.setwindow, ContentId = _ref40.ContentId;
            _context20.prev = 1;
            _context20.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("comment/produceanswer", {
              CommentId: UppercommentId,
              ContentId: ContentId,
              Message: Answer,
              UserId: UserId
            });

          case 4:
            _yield$axios$post8 = _context20.sent;
            data = _yield$axios$post8.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context20.next = 10;
              break;
            }

            console.log(data.success);
            _context20.next = 11;
            break;

          case 10:
            return _context20.abrupt("return");

          case 11:
            _context20.next = 16;
            break;

          case 13:
            _context20.prev = 13;
            _context20.t0 = _context20["catch"](1);
            console.log("error");

          case 16:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 13]]);
  }));

  return function Commentanswerreq(_x20) {
    return _ref41.apply(this, arguments);
  };
}();
_c17 = Commentanswerreq;
var UpdateNotificationactive = /*#__PURE__*/function () {
  var _ref43 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee21(_ref42) {
    var FollowedId, Prevent, FollowerId, currentactive, seterrmsg, setwindow, _yield$axios$get11, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            FollowedId = _ref42.FollowedId, Prevent = _ref42.Prevent, FollowerId = _ref42.FollowerId, currentactive = _ref42.currentactive, seterrmsg = _ref42.seterrmsg, setwindow = _ref42.setwindow;
            _context21.prev = 1;
            _context21.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/updateusernot/".concat(FollowerId, "/").concat(FollowedId, "/").concat(currentactive));

          case 4:
            _yield$axios$get11 = _context21.sent;
            data = _yield$axios$get11.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context21.next = 11;
              break;
            }

            Prevent.current = true;
            console.log(data.state);
            _context21.next = 12;
            break;

          case 11:
            return _context21.abrupt("return");

          case 12:
            _context21.next = 17;
            break;

          case 14:
            _context21.prev = 14;
            _context21.t0 = _context21["catch"](1);
            console.log("error");

          case 17:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 14]]);
  }));

  return function UpdateNotificationactive(_x21) {
    return _ref43.apply(this, arguments);
  };
}(); //user alert activated or not

_c18 = UpdateNotificationactive;
var UpdateProfile = /*#__PURE__*/function () {
  var _ref45 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee22(_ref44) {
    var userdata, typeofupdate, setuploading, setsuccesfulupload, userinfo, setuserinfo, _yield$axios$post9, data, copy;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            userdata = _ref44.userdata, typeofupdate = _ref44.typeofupdate, setuploading = _ref44.setuploading, setsuccesfulupload = _ref44.setsuccesfulupload, userinfo = _ref44.userinfo, setuserinfo = _ref44.setuserinfo;
            _context22.prev = 1;
            _context22.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/user/updateprofile/".concat(typeofupdate), userdata, {
              withCredentials: true
            });

          case 4:
            _yield$axios$post9 = _context22.sent;
            data = _yield$axios$post9.data;

            if (!data.state) {
              copy = _objectSpread({}, userinfo);
              copy["Currentpassword"].warning = true;
              setuserinfo(copy);
            } else {
              setsuccesfulupload("SUCCESSFUL");
              setTimeout(function () {
                setsuccesfulupload("");
              }, 3000);
            }

            setuploading(false);
            _context22.next = 14;
            break;

          case 10:
            _context22.prev = 10;
            _context22.t0 = _context22["catch"](1);
            console.log(_context22.t0);
            setsuccesfulupload("ERROR");

          case 14:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[1, 10]]);
  }));

  return function UpdateProfile(_x22) {
    return _ref45.apply(this, arguments);
  };
}();
_c19 = UpdateProfile;
var Editcomment = /*#__PURE__*/function () {
  var _ref47 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee23(_ref46) {
    var commentID, message, _yield$axios$post10, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            commentID = _ref46.commentID, message = _ref46.message;
            _context23.prev = 1;
            _context23.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/comment/EditComment", {
              commentID: commentID,
              message: message
            }, {
              withCredentials: true
            });

          case 4:
            _yield$axios$post10 = _context23.sent;
            data = _yield$axios$post10.data;

            if (data.state == "SUCCESS") {}

            _context23.next = 12;
            break;

          case 9:
            _context23.prev = 9;
            _context23.t0 = _context23["catch"](1);
            console.log(_context23.t0);

          case 12:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 9]]);
  }));

  return function Editcomment(_x23) {
    return _ref47.apply(this, arguments);
  };
}();
_c20 = Editcomment;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;

$RefreshReg$(_c, "Errorhandler");
$RefreshReg$(_c2, "Producecommentreq");
$RefreshReg$(_c3, "Homereq");
$RefreshReg$(_c4, "Createrelationreq");
$RefreshReg$(_c5, "Contentreq");
$RefreshReg$(_c6, "Commentreq");
$RefreshReg$(_c7, "Contextdata");
$RefreshReg$(_c8, "Getusercontent");
$RefreshReg$(_c9, "UpdateNotificationcount");
$RefreshReg$(_c10, "Getuserprofilecontent");
$RefreshReg$(_c11, "Getuserprofile");
$RefreshReg$(_c12, "Createuserrelation");
$RefreshReg$(_c13, "Notificationreq");
$RefreshReg$(_c14, "NotificationCountreq");
$RefreshReg$(_c15, "Getusersforsearchbar");
$RefreshReg$(_c16, "DeletePost");
$RefreshReg$(_c17, "Commentanswerreq");
$RefreshReg$(_c18, "UpdateNotificationactive");
$RefreshReg$(_c19, "UpdateProfile");
$RefreshReg$(_c20, "Editcomment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwibG9nb3V0IiwiZ2V0IiwibG9nZ2VkIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJSb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIlByZXZlbnQiLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsImlucHV0dmFsdWUiLCJzZXR1c2VycyIsInNldG5vdGhpbmdmb3VuZCIsIkRlbGV0ZVBvc3QiLCJzdWNjZXNzIiwiQ29tbWVudGFuc3dlcnJlcSIsIlVwcGVyY29tbWVudElkIiwiQW5zd2VyIiwiQ29tbWVudElkIiwiVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlIiwiY3VycmVudGFjdGl2ZSIsInN0YXRlIiwiVXBkYXRlUHJvZmlsZSIsInR5cGVvZnVwZGF0ZSIsInNldHVwbG9hZGluZyIsInNldHN1Y2Nlc2Z1bHVwbG9hZCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJjb3B5Iiwid2FybmluZyIsIkVkaXRjb21tZW50IiwiY29tbWVudElEIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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WUFBRCxDQUFsQjtBQUNBMUIsd0JBQVUsQ0FBQyxZQUFNO0FBQ2YwQixrQ0FBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0QsZUFGUyxFQUVSLElBRlEsQ0FBVjtBQUlIOztBQUVERCx3QkFBWSxDQUFDLEtBQUQsQ0FBWjtBQXJCbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QnpCdEcsbUJBQU8sQ0FBQ0MsR0FBUjtBQUNBc0csOEJBQWtCLENBQUMsT0FBRCxDQUFsQjs7QUF6QnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJILGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7T0FBTUEsYTtBQTZCTixJQUFNUSxXQUFXO0FBQUEsMFNBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxxQkFBUCxVQUFPQSxTQUFQLEVBQWlCQyxPQUFqQixVQUFpQkEsT0FBakI7QUFBQTtBQUFBO0FBQUEsbUJBSUVuSSw0Q0FBSyxDQUFDbUIsSUFBTix5QkFBa0M7QUFBQytHLHVCQUFTLEVBQUNBLFNBQVg7QUFBcUJDLHFCQUFPLEVBQUNBO0FBQTdCLGFBQWxDLEVBQXdFO0FBQUMvRyw2QkFBZSxFQUFDO0FBQWpCLGFBQXhFLENBSkY7O0FBQUE7QUFBQTtBQUlaaEIsZ0JBSlksdUJBSVpBLElBSlk7O0FBTW5CLGdCQUFHQSxJQUFJLENBQUNvSCxLQUFMLElBQWMsU0FBakIsRUFBMkIsQ0FFMUI7O0FBUmtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV2pCbkcsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFYaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWDJHLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7T0FBTUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOTRmNzdiZDY3N2NhODBjNjNkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG4gICAgXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jKHtzZXRzcGlubmVyLHNldHVzZXJkYXRhLHNldGxvZ2dlZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoXCIvbG9nb3V0XCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKVxyXG4gICAgICBzZXR1c2VyZGF0YSh7fSlcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhsb2dnZWQpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcix0eXBlb2ZzdWJtaXR9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIsey4uLmNvbnRlbnRkYXRhLHByb2Nlc3N0eXBlOnR5cGVvZnN1Ym1pdH0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YCx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiBcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICByZXR1cm4gc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICBcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgICBpZihsYXN0KXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChNeWRhdGEuY29uY2F0KEN1cnJlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChDdXJyZW50LmNvbmNhdChNeWRhdGEpKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkLHNldGFsbG93YWN0aW9ufSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLlJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpOyAgXHJcbiAgICAgIHNldGFsbG93YWN0aW9uKHRydWUpOyAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKCFkYXRhLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKHtVc2VySWR9KT0+e1xyXG5cclxuICAgdHJ5IHtcclxuICAgIFxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9ub3RpZmljYXRpb24vdXBkYXRlLyR7VXNlcklkfWApO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0c3Bpbm5lcixzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PSBhd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGVjb250ZW50LyR7VXNlcklkfS8ke293bmVycG9zdH0vJHtjYXRlZ29yeX0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoWy4uLmRhdGEuZGF0YV0pXHJcbiAgICAgICBzZXRzcGlubmVyKGZhbHNlKVxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsUHJldmVudCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUHJldmVudC5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhLGxhc3Ryb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn0vJHtsYXN0cm93fWApO1xyXG4gICAgY29uc3QgTXljdXJyZW50ZGF0YT1bLi4ubmF2ZGF0YV07XHJcbiAgICBjb25zdCBOZXdkYXRhPWRhdGEubXlkYXRhO1xyXG4gICAgXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxzZXRub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgc2V0YWN0aXZlKFwiTm90aGluZ1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0YWN0aXZlKFwiXCIpO1xyXG4gICAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gICAgfSAgXHJcblxyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQb3N0ID0gYXN5bmMoe1Bvc3RJZCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwidXNlci9kZWxldGVwb3N0XCIse1xyXG4gICAgICBQb3N0SWQ6UG9zdElkXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRhbnN3ZXJyZXEgPSBhc3luYyh7VXBwZXJjb21tZW50SWQsQW5zd2VyLFVzZXJJZCxzZXRlcnJtc2csc2V0d2luZG93LENvbnRlbnRJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufS8vdXNlciBhbGVydCBhY3RpdmF0ZWQgb3Igbm90XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlUHJvZmlsZSA9IGFzeW5jICh7dXNlcmRhdGEsdHlwZW9mdXBkYXRlLHNldHVwbG9hZGluZyxzZXRzdWNjZXNmdWx1cGxvYWQsdXNlcmluZm8sc2V0dXNlcmluZm99KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL3VzZXIvdXBkYXRlcHJvZmlsZS8ke3R5cGVvZnVwZGF0ZX1gLHVzZXJkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCFkYXRhLnN0YXRlKXtcclxuXHJcbiAgICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICAgY29weVtcIkN1cnJlbnRwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlNVQ0NFU1NGVUxcIilcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIlwiKVxyXG4gICAgICAgICAgICAgIH0sMzAwMCk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldHVwbG9hZGluZyhmYWxzZSlcclxuXHJcbiAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZXRzdWNjZXNmdWx1cGxvYWQoXCJFUlJPUlwiKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRjb21tZW50ID0gYXN5bmMoe2NvbW1lbnRJRCxtZXNzYWdlfSk9PntcclxuXHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9jb21tZW50L0VkaXRDb21tZW50YCx7Y29tbWVudElEOmNvbW1lbnRJRCxtZXNzYWdlOm1lc3NhZ2V9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcblxyXG4gICAgICAgIGlmKGRhdGEuc3RhdGUgPT0gXCJTVUNDRVNTXCIpe1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH0gXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9