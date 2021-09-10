webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





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
  } else {
    return true;
  }
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
var resigterreq = /*#__PURE__*/function () {
  var _ref5 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref4) {
    var setbackenderror, userdata, setactive, seterrmsg, _yield$axios$post2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setbackenderror = _ref4.setbackenderror, userdata = _ref4.userdata, setactive = _ref4.setactive, seterrmsg = _ref4.seterrmsg;
            console.log("");
            _context2.prev = 2;
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/register", {
              userdata: userdata
            });

          case 5:
            _yield$axios$post2 = _context2.sent;
            data = _yield$axios$post2.data;

            if (data.exist) {
              setbackenderror("EXİST");
              setactive(true);
            } else {
              console.log("Başarılı kayıt");
            }

            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            seterrmsg(true);
            console.log("sorun var");

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function resigterreq(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
var producereq = /*#__PURE__*/function () {
  var _ref7 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref6) {
    var contentdata, seterrmsg, setwindow, router, _yield$axios$post3, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contentdata = _ref6.contentdata, seterrmsg = _ref6.seterrmsg, setwindow = _ref6.setwindow, router = _ref6.router;
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/content/produce", {
              contentdata: contentdata
            });

          case 4:
            _yield$axios$post3 = _context3.sent;
            data = _yield$axios$post3.data;

            if (!Errorhandler({
              data: data,
              setwindow: setwindow,
              seterrmsg: seterrmsg
            })) {
              _context3.next = 11;
              break;
            }

            setwindow(true);
            router.push("/profile/content"); //we route işlemi

            _context3.next = 12;
            break;

          case 11:
            return _context3.abrupt("return");

          case 12:
            _context3.next = 18;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            seterrmsg(true);
            console.log("burada");

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 14]]);
  }));

  return function producereq(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var Producecommentreq = /*#__PURE__*/function () {
  var _ref9 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref8) {
    var Message, TakerId, setnumbercom, setwindow, UserId, ContentId, seterrmsg, _yield$axios$post4, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Message = _ref8.Message, TakerId = _ref8.TakerId, setnumbercom = _ref8.setnumbercom, setwindow = _ref8.setwindow, UserId = _ref8.UserId, ContentId = _ref8.ContentId, seterrmsg = _ref8.seterrmsg;
            _context4.prev = 1;
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/comment/produce", {
              contentdata: {
                Message: Message,
                UserId: UserId,
                ContentId: ContentId,
                TakerId: TakerId
              }
            });

          case 4:
            _yield$axios$post4 = _context4.sent;
            data = _yield$axios$post4.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg
            })) {
              _context4.next = 11;
              break;
            }

            setnumbercom(function (prev) {
              return prev + 1;
            });
            return _context4.abrupt("return");

          case 11:
            console.log("falselan");
            return _context4.abrupt("return");

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);
            seterrmsg(true);
            console.log("burada");

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 15]]);
  }));

  return function Producecommentreq(_x4) {
    return _ref9.apply(this, arguments);
  };
}();
_c2 = Producecommentreq;
var Homereq = /*#__PURE__*/function () {
  var _ref11 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(_ref10) {
    var currentdata, setspinner, seterrmsg, setwindow, setcontentdata, order, setstopreq, category, paignation, selectionlist, setselection, _yield$axios$get, data, selections, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            currentdata = _ref10.currentdata, setspinner = _ref10.setspinner, seterrmsg = _ref10.seterrmsg, setwindow = _ref10.setwindow, setcontentdata = _ref10.setcontentdata, order = _ref10.order, setstopreq = _ref10.setstopreq, category = _ref10.category, paignation = _ref10.paignation, selectionlist = _ref10.selectionlist, setselection = _ref10.setselection;
            _context5.prev = 1;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/gethome/".concat(order, "/").concat(category));

          case 4:
            _yield$axios$get = _context5.sent;
            data = _yield$axios$get.data;
            console.log(data);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context5.next = 15;
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

            setspinner(false);
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return");

          case 16:
            _context5.next = 21;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](1);
            seterrmsg(true);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 18]]);
  }));

  return function Homereq(_x5) {
    return _ref11.apply(this, arguments);
  };
}();
_c3 = Homereq;
var Createrelationreq = /*#__PURE__*/function () {
  var _ref13 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(_ref12) {
    var UserId, PostId, attribute, seterrmsg, setwindow, relationtype, UserIdofcontent, _yield$axios$post5, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            UserId = _ref12.UserId, PostId = _ref12.PostId, attribute = _ref12.attribute, seterrmsg = _ref12.seterrmsg, setwindow = _ref12.setwindow, relationtype = _ref12.relationtype, UserIdofcontent = _ref12.UserIdofcontent;
            _context6.prev = 1;
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("content/createrelation", {
              UserId: UserId,
              PostId: PostId,
              attribute: attribute,
              relationtype: relationtype,
              UserIdofcontent: UserIdofcontent
            });

          case 4:
            _yield$axios$post5 = _context6.sent;
            data = _yield$axios$post5.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context6.next = 10;
              break;
            }

            return _context6.abrupt("return");

          case 10:
            return _context6.abrupt("return");

          case 11:
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 13]]);
  }));

  return function Createrelationreq(_x6) {
    return _ref13.apply(this, arguments);
  };
}();
_c4 = Createrelationreq;
var Contentreq = /*#__PURE__*/function () {
  var _ref15 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(_ref14) {
    var contentId, setcontent, seterrmsg, setwindow, _yield$axios$get2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            contentId = _ref14.contentId, setcontent = _ref14.setcontent, seterrmsg = _ref14.seterrmsg, setwindow = _ref14.setwindow;
            _context7.prev = 1;
            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/".concat(contentId));

          case 4:
            _yield$axios$get2 = _context7.sent;
            data = _yield$axios$get2.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context7.next = 11;
              break;
            }

            console.log(data.data);
            setcontent(data.data);
            _context7.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context7.next = 14;
              break;
            }

            _context7.next = 15;
            break;

          case 14:
            return _context7.abrupt("return");

          case 15:
            _context7.next = 20;
            break;

          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](1);
            seterrmsg(true);

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 17]]);
  }));

  return function Contentreq(_x7) {
    return _ref15.apply(this, arguments);
  };
}();
_c5 = Contentreq;
var Commentreq = /*#__PURE__*/function () {
  var _ref17 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(_ref16) {
    var contentId, setactiveproduce, setcomment, seterrmsg, setwindow, last, order, commentlist, _yield$axios$get3, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            contentId = _ref16.contentId, setactiveproduce = _ref16.setactiveproduce, setcomment = _ref16.setcomment, seterrmsg = _ref16.seterrmsg, setwindow = _ref16.setwindow, last = _ref16.last, order = _ref16.order, commentlist = _ref16.commentlist;
            _context8.prev = 1;
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("comment/".concat(contentId, "/").concat(last, "/").concat(order));

          case 4:
            _yield$axios$get3 = _context8.sent;
            data = _yield$axios$get3.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context8.next = 13;
              break;
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentlist);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data);

            if (last) {
              setcomment(Mydata.concat(Current)); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
            } else {
              setcomment(Current.concat(Mydata));
            }

            setactiveproduce(false);
            _context8.next = 17;
            break;

          case 13:
            if (!(data == "Unauthroized")) {
              _context8.next = 16;
              break;
            }

            _context8.next = 17;
            break;

          case 16:
            return _context8.abrupt("return");

          case 17:
            _context8.next = 22;
            break;

          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](1);
            seterrmsg(true);

          case 22:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 19]]);
  }));

  return function Commentreq(_x8) {
    return _ref17.apply(this, arguments);
  };
}();
_c6 = Commentreq;
var Contextdata = /*#__PURE__*/function () {
  var _ref19 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(_ref18) {
    var Token, setspinner, setcontextdata, seterrmsg, setwindow, setlogged, _yield$axios$get4, data, mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            Token = _ref18.Token, setspinner = _ref18.setspinner, setcontextdata = _ref18.setcontextdata, seterrmsg = _ref18.seterrmsg, setwindow = _ref18.setwindow, setlogged = _ref18.setlogged;
            _context9.prev = 1;
            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/user/getuserdata", {
              headers: {
                "authorization": "Bearer ".concat(Token)
              }
            });

          case 4:
            _yield$axios$get4 = _context9.sent;
            data = _yield$axios$get4.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow,
              setcontextdata: setcontextdata,
              setlogged: setlogged,
              setspinner: setspinner
            })) {
              _context9.next = 13;
              break;
            }

            mydata = {
              UserId: data.userdata.id,
              Username: data.userdata.firstname,
              Usersurname: data.userdata.lastname,
              Userrole: data.userdata.role,
              Userimage: data.userdata.imageurl
            };
            setcontextdata(mydata);
            setspinner(true);
            setlogged(true);
            _context9.next = 14;
            break;

          case 13:
            return _context9.abrupt("return");

          case 14:
            _context9.next = 19;
            break;

          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](1);
            console.log("errorburadaduruyor");

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 16]]);
  }));

  return function Contextdata(_x9) {
    return _ref19.apply(this, arguments);
  };
}();
_c7 = Contextdata;
var Getusercontent = /*#__PURE__*/function () {
  var _ref21 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(_ref20) {
    var UserId, params, setdata, setwindow, seterrmsg, order, setstopscrolling, currentdata, _yield$axios$get5, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            UserId = _ref20.UserId, params = _ref20.params, setdata = _ref20.setdata, setwindow = _ref20.setwindow, seterrmsg = _ref20.seterrmsg, order = _ref20.order, setstopscrolling = _ref20.setstopscrolling, currentdata = _ref20.currentdata;
            _context10.prev = 1;
            _context10.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("content/usercontent/".concat(params, "/").concat(UserId, "/").concat(order));

          case 4:
            _yield$axios$get5 = _context10.sent;
            data = _yield$axios$get5.data;
            console.log(data.data);

            if (!Errorhandler({
              data: data
            })) {
              _context10.next = 14;
              break;
            }

            if (!data.data.length) {
              setstopscrolling(true);
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data); //push metodu bir diziyi bi  r dizinin içine pushluyor fakat concat elemanları

            setdata(Current.concat(Mydata));
            _context10.next = 18;
            break;

          case 14:
            if (!(data == "Unauthroized")) {
              _context10.next = 17;
              break;
            }

            _context10.next = 18;
            break;

          case 17:
            return _context10.abrupt("return");

          case 18:
            _context10.next = 23;
            break;

          case 20:
            _context10.prev = 20;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);

          case 23:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 20]]);
  }));

  return function Getusercontent(_x10) {
    return _ref21.apply(this, arguments);
  };
}();
_c8 = Getusercontent;
var UpdateNotificationcount = /*#__PURE__*/function () {
  var _ref23 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(_ref22) {
    var UserId;
    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            UserId = _ref22.UserId;
            _context11.prev = 1;
            _context11.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/notification/update/".concat(UserId));

          case 4:
            _context11.next = 8;
            break;

          case 6:
            _context11.prev = 6;
            _context11.t0 = _context11["catch"](1);

          case 8:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 6]]);
  }));

  return function UpdateNotificationcount(_x11) {
    return _ref23.apply(this, arguments);
  };
}();
_c9 = UpdateNotificationcount;
var Getuserprofilecontent = /*#__PURE__*/function () {
  var _ref25 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(_ref24) {
    var setdata, category, UserId, ownerpost, order, _yield$axios$get6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            setdata = _ref24.setdata, category = _ref24.category, UserId = _ref24.UserId, ownerpost = _ref24.ownerpost, order = _ref24.order;
            _context12.prev = 1;
            _context12.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getuserprofilecontent/".concat(UserId, "/").concat(ownerpost, "/").concat(category, "/").concat(order));

          case 4:
            _yield$axios$get6 = _context12.sent;
            data = _yield$axios$get6.data;

            if (!Errorhandler({
              data: data
            })) {
              _context12.next = 10;
              break;
            }

            setdata(data.data);
            _context12.next = 14;
            break;

          case 10:
            if (!(data == "Unauthroized")) {
              _context12.next = 13;
              break;
            }

            _context12.next = 14;
            break;

          case 13:
            return _context12.abrupt("return");

          case 14:
            _context12.next = 19;
            break;

          case 16:
            _context12.prev = 16;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);

          case 19:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 16]]);
  }));

  return function Getuserprofilecontent(_x12) {
    return _ref25.apply(this, arguments);
  };
}();
_c10 = Getuserprofilecontent;
var Getuserprofile = /*#__PURE__*/function () {
  var _ref27 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13(_ref26) {
    var UserId, setuserdata, _yield$axios$get7, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            UserId = _ref26.UserId, setuserdata = _ref26.setuserdata;
            _context13.prev = 1;
            _context13.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getuserprofile/".concat(UserId));

          case 4:
            _yield$axios$get7 = _context13.sent;
            data = _yield$axios$get7.data;
            console.log(data);

            if (!Errorhandler({
              data: data
            })) {
              _context13.next = 11;
              break;
            }

            setuserdata(data.userdata);
            _context13.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context13.next = 14;
              break;
            }

            _context13.next = 15;
            break;

          case 14:
            return _context13.abrupt("return");

          case 15:
            _context13.next = 20;
            break;

          case 17:
            _context13.prev = 17;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0);

          case 20:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 17]]);
  }));

  return function Getuserprofile(_x13) {
    return _ref27.apply(this, arguments);
  };
}();
_c11 = Getuserprofile;
var Createuserrelation = /*#__PURE__*/function () {
  var _ref29 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee14(_ref28) {
    var UserId, FollowedId, checkiffollow, _yield$axios$post6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            UserId = _ref28.UserId, FollowedId = _ref28.FollowedId, checkiffollow = _ref28.checkiffollow;
            _context14.prev = 1;
            _context14.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("user/createuserrelation", {
              FollowerId: UserId,
              FollowedId: FollowedId,
              checkiffollow: checkiffollow
            });

          case 4:
            _yield$axios$post6 = _context14.sent;
            data = _yield$axios$post6.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context14.next = 10;
              break;
            }

            return _context14.abrupt("return");

          case 10:
            return _context14.abrupt("return");

          case 11:
            _context14.next = 16;
            break;

          case 13:
            _context14.prev = 13;
            _context14.t0 = _context14["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 16:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 13]]);
  }));

  return function Createuserrelation(_x14) {
    return _ref29.apply(this, arguments);
  };
}();
_c12 = Createuserrelation;
var Notificationreq = /*#__PURE__*/function () {
  var _ref31 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee15(_ref30) {
    var UserId, setnavdata, order, navdata, lastrow, _yield$axios$get8, data, Mycurrentdata, Newdata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            UserId = _ref30.UserId, setnavdata = _ref30.setnavdata, order = _ref30.order, navdata = _ref30.navdata, lastrow = _ref30.lastrow;
            _context15.prev = 1;
            console.log(UserId);
            _context15.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("notification/getrows/".concat(UserId, "/").concat(order, "/").concat(lastrow));

          case 5:
            _yield$axios$get8 = _context15.sent;
            data = _yield$axios$get8.data;
            Mycurrentdata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(navdata);
            Newdata = data.mydata;
            console.log(Newdata);

            if (lastrow) {
              console.log("looo2");
              setnavdata(Newdata.concat(Mycurrentdata));
            } else {
              console.log("looo");
              setnavdata(Mycurrentdata.concat(Newdata));
            }

            _context15.next = 16;
            break;

          case 13:
            _context15.prev = 13;
            _context15.t0 = _context15["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 13]]);
  }));

  return function Notificationreq(_x15) {
    return _ref31.apply(this, arguments);
  };
}();
_c13 = Notificationreq;
var NotificationCountreq = /*#__PURE__*/function () {
  var _ref33 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee16(_ref32) {
    var UserId, setcountdata, _yield$axios$get9, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            UserId = _ref32.UserId, setcountdata = _ref32.setcountdata;
            _context16.prev = 1;
            console.log(UserId);
            _context16.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("notification/getcount/".concat(UserId));

          case 5:
            _yield$axios$get9 = _context16.sent;
            data = _yield$axios$get9.data;
            setcountdata(data.data);
            _context16.next = 13;
            break;

          case 10:
            _context16.prev = 10;
            _context16.t0 = _context16["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 13:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 10]]);
  }));

  return function NotificationCountreq(_x16) {
    return _ref33.apply(this, arguments);
  };
}();
_c14 = NotificationCountreq;
var Getusersforsearchbar = /*#__PURE__*/function () {
  var _ref35 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee17(_ref34) {
    var inputvalue, setusers, setactive, setnothingfound, _yield$axios$get10, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            inputvalue = _ref34.inputvalue, setusers = _ref34.setusers, setactive = _ref34.setactive, setnothingfound = _ref34.setnothingfound;
            _context17.prev = 1;
            _context17.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getusername/".concat(inputvalue));

          case 4:
            _yield$axios$get10 = _context17.sent;
            data = _yield$axios$get10.data;
            console.log(data.data);

            if (data.data.length == 0) {
              setactive("Nothing");
            } else {
              setactive("");
              setusers(data.data);
            }

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

  return function Getusersforsearchbar(_x17) {
    return _ref35.apply(this, arguments);
  };
}();
_c15 = Getusersforsearchbar;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsIlByb2R1Y2Vjb21tZW50cmVxIiwiTWVzc2FnZSIsIlRha2VySWQiLCJzZXRudW1iZXJjb20iLCJVc2VySWQiLCJDb250ZW50SWQiLCJwcmV2IiwiSG9tZXJlcSIsImN1cnJlbnRkYXRhIiwic2V0Y29udGVudGRhdGEiLCJvcmRlciIsInNldHN0b3ByZXEiLCJjYXRlZ29yeSIsInBhaWduYXRpb24iLCJzZWxlY3Rpb25saXN0Iiwic2V0c2VsZWN0aW9uIiwiZ2V0IiwibGVuZ3RoIiwic2VsZWN0aW9ucyIsInN0b3ByZXF1ZXN0aW5nIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwiaGVhZGVycyIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiVXBkYXRlTm90aWZpY2F0aW9uY291bnQiLCJHZXR1c2VycHJvZmlsZWNvbnRlbnQiLCJvd25lcnBvc3QiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiRm9sbG93ZXJJZCIsIk5vdGlmaWNhdGlvbnJlcSIsInNldG5hdmRhdGEiLCJuYXZkYXRhIiwibGFzdHJvdyIsIk15Y3VycmVudGRhdGEiLCJOZXdkYXRhIiwiTm90aWZpY2F0aW9uQ291bnRyZXEiLCJzZXRjb3VudGRhdGEiLCJHZXR1c2Vyc2ZvcnNlYXJjaGJhciIsImlucHV0dmFsdWUiLCJzZXR1c2VycyIsInNldG5vdGhpbmdmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLElBQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQWtFO0FBQUEsTUFBaEVDLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTNEQyxTQUEyRCxRQUEzREEsU0FBMkQ7QUFBQSxNQUFqREMsU0FBaUQsUUFBakRBLFNBQWlEO0FBQUEsTUFBdkNDLGNBQXVDLFFBQXZDQSxjQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBRWxGLE1BQUdMLElBQUksSUFBSUEsSUFBSSxDQUFDTSxLQUFoQixFQUFzQjtBQUVuQkwsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBQyxhQUFTLENBQUMsSUFBRCxDQUFU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LG9CQUFvQjtBQUFBLDBTQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0Msc0JBQVAsVUFBT0EsVUFBUCxFQUFrQkMsUUFBbEIsVUFBa0JBLFFBQWxCLEVBQTJCcEYsU0FBM0IsVUFBMkJBLFNBQTNCLEVBQXFDcUYsZUFBckMsVUFBcUNBLGVBQXJDO0FBQUE7QUFBQTtBQUFBLG1CQUladkcsNENBQUssQ0FBQytDLEdBQU4sNEJBQThCc0QsVUFBOUIsRUFKWTs7QUFBQTtBQUFBO0FBSXhCakcsZ0JBSndCLHNCQUl4QkEsSUFKd0I7QUFNOUJnQixtQkFBTyxDQUFDQyxHQUFSLENBQVlqQixJQUFJLENBQUNBLElBQWpCOztBQUVBLGdCQUFHQSxJQUFJLENBQUNBLElBQUwsQ0FBVTRDLE1BQVYsSUFBb0IsQ0FBdkIsRUFBeUI7QUFDdEI5Qix1QkFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNGLGFBRkQsTUFHSTtBQUNGQSx1QkFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBb0Ysc0JBQVEsQ0FBQ2xHLElBQUksQ0FBQ0EsSUFBTixDQUFSO0FBQ0Q7O0FBZDZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUIzQmdCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQW5CMkIsQ0FvQjNCOztBQXBCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBcEIrRSxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUI7T0FBTUEsb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjAwOGQ5NzczODQ5OGExMjM0N2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuXHJcbiAgdHJ5e1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2NvbnRlbnQvcHJvZHVjZVwiLHtjb250ZW50ZGF0YTpjb250ZW50ZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG4gICAgICAgIHNlbGVjdGlvbnNbY2F0ZWdvcnldLnN0b3ByZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRzZWxlY3Rpb24oc2VsZWN0aW9ubGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkIHJlcXVlc3RcIilcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKGxhc3Qpe1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KE15ZGF0YS5jb25jYXQoQ3VycmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG5cclxuICAgICAgICBzZXRjb21tZW50KEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWR9KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse1xyXG4gICAgICBoZWFkZXJzOntcclxuICAgICAgICBcImF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7VG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEucm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JidXJhZGFkdXJ1eW9yXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlY29udGVudC8ke1VzZXJJZH0vJHtvd25lcnBvc3R9LyR7Y2F0ZWdvcnl9LyR7b3JkZXJ9YCk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKGRhdGEuZGF0YSlcclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyh7VXNlcklkLHNldG5hdmRhdGEsb3JkZXIsbmF2ZGF0YSxsYXN0cm93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9LyR7b3JkZXJ9LyR7bGFzdHJvd31gKTtcclxuICAgIGNvbnN0IE15Y3VycmVudGRhdGE9Wy4uLm5hdmRhdGFdO1xyXG4gICAgY29uc3QgTmV3ZGF0YT1kYXRhLm15ZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKE5ld2RhdGEpO1xyXG5cclxuICAgIGlmKGxhc3Ryb3cpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb28yXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTmV3ZGF0YS5jb25jYXQoTXljdXJyZW50ZGF0YSkpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vb1wiKVxyXG4gICAgICBzZXRuYXZkYXRhKE15Y3VycmVudGRhdGEuY29uY2F0KE5ld2RhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db3VudHJlcT1hc3luYyh7VXNlcklkLHNldGNvdW50ZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldGNvdW50LyR7VXNlcklkfWApO1xyXG5cclxuXHJcbiAgICBzZXRjb3VudGRhdGEoZGF0YS5kYXRhKTtcclxuIFxyXG4gICAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnNmb3JzZWFyY2hiYXI9YXN5bmMoe2lucHV0dmFsdWUsc2V0dXNlcnMsc2V0YWN0aXZlLHNldG5vdGhpbmdmb3VuZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJuYW1lLyR7aW5wdXR2YWx1ZX1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICBzZXRhY3RpdmUoXCJOb3RoaW5nXCIpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRhY3RpdmUoXCJcIik7XHJcbiAgICAgIHNldHVzZXJzKGRhdGEuZGF0YSk7XHJcbiAgICB9ICBcclxuXHJcbiBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=