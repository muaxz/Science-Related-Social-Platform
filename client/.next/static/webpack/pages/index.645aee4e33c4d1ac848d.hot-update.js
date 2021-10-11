webpackHotUpdate_N_E("pages/index",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentanswerreq", function() { return Commentanswerreq; });
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
    var contentdata, seterrmsg, setwindow, router, typeofsubmit, _yield$axios$post3, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contentdata = _ref6.contentdata, seterrmsg = _ref6.seterrmsg, setwindow = _ref6.setwindow, router = _ref6.router, typeofsubmit = _ref6.typeofsubmit;
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/content/produce", _objectSpread(_objectSpread({}, contentdata), {}, {
              processtype: typeofsubmit
            }));

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
              setTimeout(function () {
                setcontentdata(Mydata);
              }, 1000);
            }

            setTimeout(function () {
              setspinner(false);
            }, 1000);
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
    var Token, setspinner, setcontextdata, seterrmsg, setwindow, setlogged, setallowaction, _yield$axios$get4, data, mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            Token = _ref18.Token, setspinner = _ref18.setspinner, setcontextdata = _ref18.setcontextdata, seterrmsg = _ref18.seterrmsg, setwindow = _ref18.setwindow, setlogged = _ref18.setlogged, setallowaction = _ref18.setallowaction;
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
            console.log(data);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow,
              setcontextdata: setcontextdata,
              setlogged: setlogged,
              setspinner: setspinner
            })) {
              _context9.next = 15;
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
            _context9.next = 16;
            break;

          case 15:
            return _context9.abrupt("return");

          case 16:
            _context9.next = 21;
            break;

          case 18:
            _context9.prev = 18;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 18]]);
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
    var setspinner, setdata, category, UserId, ownerpost, order, _yield$axios$get6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            setspinner = _ref24.setspinner, setdata = _ref24.setdata, category = _ref24.category, UserId = _ref24.UserId, ownerpost = _ref24.ownerpost, order = _ref24.order;
            _context12.prev = 1;
            _context12.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/getuserprofilecontent/".concat(UserId, "/").concat(ownerpost, "/").concat(category, "/").concat(order));

          case 4:
            _yield$axios$get6 = _context12.sent;
            data = _yield$axios$get6.data;
            console.log(data.data);

            if (!Errorhandler({
              data: data
            })) {
              _context12.next = 12;
              break;
            }

            setdata(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data));
            setspinner(false);
            _context12.next = 16;
            break;

          case 12:
            if (!(data == "Unauthroized")) {
              _context12.next = 15;
              break;
            }

            _context12.next = 16;
            break;

          case 15:
            return _context12.abrupt("return");

          case 16:
            _context12.next = 21;
            break;

          case 18:
            _context12.prev = 18;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);

          case 21:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 18]]);
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
var DeletePost = /*#__PURE__*/function () {
  var _ref37 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee18(_ref36) {
    var PostId, seterrmsg, setwindow, _yield$axios$post7, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            PostId = _ref36.PostId, seterrmsg = _ref36.seterrmsg, setwindow = _ref36.setwindow;
            _context18.prev = 1;
            _context18.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("user/deletepost", {
              PostId: PostId
            });

          case 4:
            _yield$axios$post7 = _context18.sent;
            data = _yield$axios$post7.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context18.next = 10;
              break;
            }

            console.log(data.success);
            _context18.next = 11;
            break;

          case 10:
            return _context18.abrupt("return");

          case 11:
            _context18.next = 16;
            break;

          case 13:
            _context18.prev = 13;
            _context18.t0 = _context18["catch"](1);
            console.log("error");

          case 16:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 13]]);
  }));

  return function DeletePost(_x18) {
    return _ref37.apply(this, arguments);
  };
}();
_c16 = DeletePost;
var Commentanswerreq = /*#__PURE__*/function () {
  var _ref39 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee19(_ref38) {
    var UppercommentId, Answer, UserId, seterrmsg, setwindow, _yield$axios$post8, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            UppercommentId = _ref38.UppercommentId, Answer = _ref38.Answer, UserId = _ref38.UserId, seterrmsg = _ref38.seterrmsg, setwindow = _ref38.setwindow;
            _context19.prev = 1;
            _context19.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("comment/produceanswer", {
              CommentId: UppercommentId,
              Message: Answer,
              UserId: UserId
            });

          case 4:
            _yield$axios$post8 = _context19.sent;
            data = _yield$axios$post8.data;

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

  return function Commentanswerreq(_x19) {
    return _ref39.apply(this, arguments);
  };
}();
_c17 = Commentanswerreq;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJnZXQiLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0Iiwic2V0VGltZW91dCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJoZWFkZXJzIiwibXlkYXRhIiwiaWQiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vycm9sZSIsIlJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkdldHVzZXJjb250ZW50IiwicGFyYW1zIiwic2V0ZGF0YSIsInNldHN0b3BzY3JvbGxpbmciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIm93bmVycG9zdCIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJDb21tZW50SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLElBQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQWtFO0FBQUEsTUFBaEVDLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTNEQyxTQUEyRCxRQUEzREEsU0FBMkQ7QUFBQSxNQUFqREMsU0FBaUQsUUFBakRBLFNBQWlEO0FBQUEsTUFBdkNDLGNBQXVDLFFBQXZDQSxjQUF1QztBQUFBLE1BQXhCQyxTQUF3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QUF0QixVQUFzQkEsTUFBdEIsRUFBNkIzRSxNQUE3QixVQUE2QkEsTUFBN0IsRUFBb0NoQyxTQUFwQyxVQUFvQ0EsU0FBcEMsRUFBOENDLFNBQTlDLFVBQThDQSxTQUE5QztBQUFBO0FBQUE7QUFBQSxtQkFJVk4sNENBQUssQ0FBQ21CLElBQU4sQ0FBVyx1QkFBWCxFQUFtQztBQUNuRDhGLHVCQUFTLEVBQUNGLGNBRHlDO0FBRW5EN0UscUJBQU8sRUFBQzhFLE1BRjJDO0FBR25EM0Usb0JBQU0sRUFBQ0E7QUFINEMsYUFBbkMsQ0FKVTs7QUFBQTtBQUFBO0FBSXRCakMsZ0JBSnNCLHNCQUl0QkEsSUFKc0I7O0FBQUEsaUJBVXpCRCxZQUFZLENBQUM7QUFBQ0Msa0JBQUksRUFBSkEsSUFBRDtBQUFNQyx1QkFBUyxFQUFUQSxTQUFOO0FBQWdCQyx1QkFBUyxFQUFUQTtBQUFoQixhQUFELENBVmE7QUFBQTtBQUFBO0FBQUE7O0FBV3pCYyxtQkFBTyxDQUFDQyxHQUFSLENBQVlqQixJQUFJLENBQUN5RyxPQUFqQjtBQVh5QjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1CNUJ6RixtQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUFuQjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCeUYsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCO09BQU1BLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NWFlZTRlMzNjNGQxYWM4NDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEVycm9yaGFuZGxlcj0oe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pPT57XHJcblxyXG4gICBpZihkYXRhICYmIGRhdGEuZXJyb3Ipe1xyXG5cclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YSh7fSk7XHJcbiAgICAgIHNldGxvZ2dlZChmYWxzZSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVE9LRU5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgIFxyXG4gICAgICBcclxuICAgfVxyXG4gIFxyXG4gICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0c3Bpbm5lcixzZXR1c2VyZGF0YSx1c2VyZGF0YSxyb3V0ZXIsc2V0ZXJybXNnLHNldGJhY2tlbmRlcnJvcixzZXRhY3RpdmV9KT0+e1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvbG9naW5cIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyLHR5cGVvZnN1Ym1pdH0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Li4uY29udGVudGRhdGEscHJvY2Vzc3R5cGU6dHlwZW9mc3VibWl0fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLFRha2VySWQsc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICAgIFRha2VySWQ6VGFrZXJJZCxcclxuICAgIH19KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnfSkpeyAgICBcclxuICAgICAgICBzZXRudW1iZXJjb20ocHJldj0+cHJldisxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlbGFuXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVyZXE9YXN5bmMoe2N1cnJlbnRkYXRhLHNldHNwaW5uZXIsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZW50ZGF0YSxvcmRlcixzZXRzdG9wcmVxLGNhdGVnb3J5LHBhaWduYXRpb24sc2VsZWN0aW9ubGlzdCxzZXRzZWxlY3Rpb259KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn0vJHtjYXRlZ29yeX1gKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB7Li4uc2VsZWN0aW9ubGlzdH07XHJcbiAgICAgICAgc2VsZWN0aW9uc1tjYXRlZ29yeV0uc3RvcHJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldHNlbGVjdGlvbihzZWxlY3Rpb25saXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgcmVxdWVzdFwiKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuXHJcbiAgICAgIGlmKHBhaWduYXRpb24pe1xyXG5cclxuICAgICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRjb250ZW50ZGF0YShNeWRhdGEpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvdyxsYXN0LG9yZGVyLGNvbW1lbnRsaXN0fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9LyR7bGFzdH0vJHtvcmRlcn1gKTtcclxuICAgIC8vYnVyYWRhIHRla3JhcmRhbiBiw7x0w7xuIHlvcnVtbGFyIMOnZWtpbGl5b3IgZWtsZW5lbiBlbiBzb24geW9ydW0gw6dla2lsbWVsaVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgQ3VycmVudD1bLi4uY29tbWVudGxpc3RdO1xyXG4gICAgICB2YXIgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG5cclxuICAgICAgaWYobGFzdCl7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoTXlkYXRhLmNvbmNhdChDdXJyZW50KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldGNvbW1lbnQoQ3VycmVudC5jb25jYXQoTXlkYXRhKSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgc2V0YWN0aXZlcHJvZHVjZShmYWxzZSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRkYXRhPWFzeW5jICh7VG9rZW4sc2V0c3Bpbm5lcixzZXRjb250ZXh0ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGxvZ2dlZCxzZXRhbGxvd2FjdGlvbn0pPT57XHJcbiBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC91c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLlJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpOyAgXHJcbiAgICAgIHNldGFsbG93YWN0aW9uKHRydWUpOyAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VyY29udGVudD1hc3luYyh7VXNlcklkLHBhcmFtcyxzZXRkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2csb3JkZXIsc2V0c3RvcHNjcm9sbGluZyxjdXJyZW50ZGF0YX0pPT57XHJcbiAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvdXNlcmNvbnRlbnQvJHtwYXJhbXN9LyR7VXNlcklkfS8ke29yZGVyfWApO1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcbiAgICAgICBcclxuICAgICAgIGlmKCFkYXRhLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZU5vdGlmaWNhdGlvbmNvdW50PWFzeW5jKHtVc2VySWR9KT0+e1xyXG5cclxuICAgdHJ5IHtcclxuICAgIFxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9ub3RpZmljYXRpb24vdXBkYXRlLyR7VXNlcklkfWApO1xyXG5cclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy9cclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlY29udGVudD1hc3luYyh7c2V0c3Bpbm5lcixzZXRkYXRhLGNhdGVnb3J5LFVzZXJJZCxvd25lcnBvc3Qsb3JkZXJ9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PSBhd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGVjb250ZW50LyR7VXNlcklkfS8ke293bmVycG9zdH0vJHtjYXRlZ29yeX0vJHtvcmRlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoWy4uLmRhdGEuZGF0YV0pXHJcbiAgICAgICBzZXRzcGlubmVyKGZhbHNlKVxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJwcm9maWxlPWFzeW5jKHtVc2VySWQsc2V0dXNlcmRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldHVzZXJkYXRhKGRhdGEudXNlcmRhdGEpXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRldXNlcnJlbGF0aW9uPWFzeW5jKHtVc2VySWQsRm9sbG93ZWRJZCxjaGVja2lmZm9sbG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGB1c2VyL2NyZWF0ZXVzZXJyZWxhdGlvbmAse1xyXG4gICAgICBGb2xsb3dlcklkOlVzZXJJZCxcclxuICAgICAgRm9sbG93ZWRJZDpGb2xsb3dlZElkLFxyXG4gICAgICBjaGVja2lmZm9sbG93OmNoZWNraWZmb2xsb3csXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9ucmVxPWFzeW5jKHtVc2VySWQsc2V0bmF2ZGF0YSxvcmRlcixuYXZkYXRhLGxhc3Ryb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH0vJHtvcmRlcn0vJHtsYXN0cm93fWApO1xyXG4gICAgY29uc3QgTXljdXJyZW50ZGF0YT1bLi4ubmF2ZGF0YV07XHJcbiAgICBjb25zdCBOZXdkYXRhPWRhdGEubXlkYXRhO1xyXG4gICAgY29uc29sZS5sb2coTmV3ZGF0YSk7XHJcblxyXG4gICAgaWYobGFzdHJvdyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vbzJcIilcclxuICAgICAgc2V0bmF2ZGF0YShOZXdkYXRhLmNvbmNhdChNeWN1cnJlbnRkYXRhKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vXCIpXHJcbiAgICAgIHNldG5hdmRhdGEoTXljdXJyZW50ZGF0YS5jb25jYXQoTmV3ZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvdW50cmVxPWFzeW5jKHtVc2VySWQsc2V0Y291bnRkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFVzZXJJZCk7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0Y291bnQvJHtVc2VySWR9YCk7XHJcblxyXG5cclxuICAgIHNldGNvdW50ZGF0YShkYXRhLmRhdGEpO1xyXG4gXHJcbiAgICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2Vyc2ZvcnNlYXJjaGJhcj1hc3luYyh7aW5wdXR2YWx1ZSxzZXR1c2VycyxzZXRhY3RpdmUsc2V0bm90aGluZ2ZvdW5kfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcm5hbWUvJHtpbnB1dHZhbHVlfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgIHNldGFjdGl2ZShcIk5vdGhpbmdcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHNldGFjdGl2ZShcIlwiKTtcclxuICAgICAgc2V0dXNlcnMoZGF0YS5kYXRhKTtcclxuICAgIH0gIFxyXG5cclxuIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdCA9IGFzeW5jKHtQb3N0SWQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcInVzZXIvZGVsZXRlcG9zdFwiLHtcclxuICAgICAgUG9zdElkOlBvc3RJZFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc3VjY2Vzcyk7ICAgXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50YW5zd2VycmVxID0gYXN5bmMoe1VwcGVyY29tbWVudElkLEFuc3dlcixVc2VySWQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==