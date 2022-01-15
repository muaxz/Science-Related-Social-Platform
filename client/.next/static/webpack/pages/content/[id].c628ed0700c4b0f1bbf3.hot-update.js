webpackHotUpdate_N_E("pages/content/[id]",{

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
    var commentID, message, setloading, _yield$axios$post10, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            commentID = _ref46.commentID, message = _ref46.message, setloading = _ref46.setloading;
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

            if (data.state == "SUCCESS") {
              setTimeout(function () {
                setloading(false);
              }, 3000);
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwibG9nb3V0IiwiZ2V0IiwibG9nZ2VkIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJyZWxhdGlvbnR5cGUiLCJVc2VySWRvZmNvbnRlbnQiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbW1lbnRyZXEiLCJzZXRhY3RpdmVwcm9kdWNlIiwic2V0Y29tbWVudCIsImxhc3QiLCJjb21tZW50bGlzdCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJzZXRhbGxvd2FjdGlvbiIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJSb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIlByZXZlbnQiLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsImlucHV0dmFsdWUiLCJzZXR1c2VycyIsInNldG5vdGhpbmdmb3VuZCIsIkRlbGV0ZVBvc3QiLCJzdWNjZXNzIiwiQ29tbWVudGFuc3dlcnJlcSIsIlVwcGVyY29tbWVudElkIiwiQW5zd2VyIiwiQ29tbWVudElkIiwiVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlIiwiY3VycmVudGFjdGl2ZSIsInN0YXRlIiwiVXBkYXRlUHJvZmlsZSIsInR5cGVvZnVwZGF0ZSIsInNldHVwbG9hZGluZyIsInNldHN1Y2Nlc2Z1bHVwbG9hZCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJjb3B5Iiwid2FybmluZyIsIkVkaXRjb21tZW50IiwiY29tbWVudElEIiwibWVzc2FnZSIsInNldGxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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c3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmM2MjhlZDA3MDBjNGIwZjFiYmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCJcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcbiAgICBcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMoe3NldHNwaW5uZXIsc2V0dXNlcmRhdGEsc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChcIi9sb2dvdXRcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpXHJcbiAgICAgIHNldHVzZXJkYXRhKHt9KVxyXG4gICAgICBzZXRzcGlubmVyKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2dlZClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG5cclxuICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHsuLi5zZWxlY3Rpb25saXN0fTtcclxuICAgICAgICBzZWxlY3Rpb25zW2NhdGVnb3J5XS5zdG9wcmVxdWVzdGluZyA9IHRydWU7XHJcbiAgICAgICAgc2V0c2VsZWN0aW9uKHNlbGVjdGlvbmxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcHBlZCByZXF1ZXN0XCIpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYocGFpZ25hdGlvbil7XHJcblxyXG4gICAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICAgIHNldGNvbnRlbnRkYXRhKE15ZGF0YSlcclxuIFxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgIHJldHVybiBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhNeWRhdGEpXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWQsc2V0YWxsb3dhY3Rpb259KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEuUm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7ICBcclxuICAgICAgc2V0YWxsb3dhY3Rpb24odHJ1ZSk7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRzcGlubmVyLHNldGRhdGEsY2F0ZWdvcnksVXNlcklkLG93bmVycG9zdCxvcmRlcn0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09IGF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZWNvbnRlbnQvJHtVc2VySWR9LyR7b3duZXJwb3N0fS8ke2NhdGVnb3J5fS8ke29yZGVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShbLi4uZGF0YS5kYXRhXSlcclxuICAgICAgIHNldHNwaW5uZXIoZmFsc2UpXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxQcmV2ZW50LEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBcclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3QgPSBhc3luYyh7UG9zdElkLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCJ1c2VyL2RlbGV0ZXBvc3RcIix7XHJcbiAgICAgIFBvc3RJZDpQb3N0SWRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudGFuc3dlcnJlcSA9IGFzeW5jKHtVcHBlcmNvbW1lbnRJZCxBbnN3ZXIsVXNlcklkLHNldGVycm1zZyxzZXR3aW5kb3csQ29udGVudElkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiY29tbWVudC9wcm9kdWNlYW5zd2VyXCIse1xyXG4gICAgICBDb21tZW50SWQ6VXBwZXJjb21tZW50SWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIE1lc3NhZ2U6QW5zd2VyLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUgPSBhc3luYyAoe0ZvbGxvd2VkSWQsUHJldmVudCxGb2xsb3dlcklkLGN1cnJlbnRhY3RpdmUsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL3VwZGF0ZXVzZXJub3QvJHtGb2xsb3dlcklkfS8ke0ZvbGxvd2VkSWR9LyR7Y3VycmVudGFjdGl2ZX1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG5cclxuICAgICAgIFByZXZlbnQuY3VycmVudCA9IHRydWVcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdGUpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59Ly91c2VyIGFsZXJ0IGFjdGl2YXRlZCBvciBub3RcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVQcm9maWxlID0gYXN5bmMgKHt1c2VyZGF0YSx0eXBlb2Z1cGRhdGUsc2V0dXBsb2FkaW5nLHNldHN1Y2Nlc2Z1bHVwbG9hZCx1c2VyaW5mbyxzZXR1c2VyaW5mb30pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvdXNlci91cGRhdGVwcm9maWxlLyR7dHlwZW9mdXBkYXRlfWAsdXNlcmRhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWRhdGEuc3RhdGUpe1xyXG5cclxuICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgICAgICBjb3B5W1wiQ3VycmVudHBhc3N3b3JkXCJdLndhcm5pbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgc2V0c3VjY2VzZnVsdXBsb2FkKFwiU1VDQ0VTU0ZVTFwiKVxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0c3VjY2VzZnVsdXBsb2FkKFwiXCIpXHJcbiAgICAgICAgICAgICAgfSwzMDAwKTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0dXBsb2FkaW5nKGZhbHNlKVxyXG5cclxuICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZChcIkVSUk9SXCIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdGNvbW1lbnQgPSBhc3luYyh7Y29tbWVudElELG1lc3NhZ2Usc2V0bG9hZGluZ30pPT57XHJcblxyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvY29tbWVudC9FZGl0Q29tbWVudGAse2NvbW1lbnRJRDpjb21tZW50SUQsbWVzc2FnZTptZXNzYWdlfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG5cclxuICAgICAgICBpZihkYXRhLnN0YXRlID09IFwiU1VDQ0VTU1wiKXtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRsb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=