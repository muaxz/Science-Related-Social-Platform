webpackHotUpdate_N_E("pages/_app",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, UpdateNotificationcount, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq, NotificationCountreq, Getusersforsearchbar, DeletePost, Commentanswerreq, UpdateNotificationactive */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationactive", function() { return UpdateNotificationactive; });
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
              _context8.next = 14;
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
            _context8.next = 18;
            break;

          case 14:
            if (!(data == "Unauthroized")) {
              _context8.next = 17;
              break;
            }

            _context8.next = 18;
            break;

          case 17:
            return _context8.abrupt("return");

          case 18:
            _context8.next = 23;
            break;

          case 20:
            _context8.prev = 20;
            _context8.t0 = _context8["catch"](1);
            seterrmsg(true);

          case 23:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 20]]);
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
    var UppercommentId, Answer, UserId, seterrmsg, setwindow, ContentId, _yield$axios$post8, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            UppercommentId = _ref38.UppercommentId, Answer = _ref38.Answer, UserId = _ref38.UserId, seterrmsg = _ref38.seterrmsg, setwindow = _ref38.setwindow, ContentId = _ref38.ContentId;
            _context19.prev = 1;
            _context19.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("comment/produceanswer", {
              CommentId: UppercommentId,
              ContentId: ContentId,
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
var UpdateNotificationactive = /*#__PURE__*/function () {
  var _ref41 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee20(_ref40) {
    var FollowedId, Prevent, FollowerId, currentactive, seterrmsg, setwindow, _yield$axios$get11, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            FollowedId = _ref40.FollowedId, Prevent = _ref40.Prevent, FollowerId = _ref40.FollowerId, currentactive = _ref40.currentactive, seterrmsg = _ref40.seterrmsg, setwindow = _ref40.setwindow;
            _context20.prev = 1;
            _context20.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("user/updateusernot/".concat(FollowerId, "/").concat(FollowedId, "/").concat(currentactive));

          case 4:
            _yield$axios$get11 = _context20.sent;
            data = _yield$axios$get11.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context20.next = 11;
              break;
            }

            Prevent.current = true;
            console.log(data.state);
            _context20.next = 12;
            break;

          case 11:
            return _context20.abrupt("return");

          case 12:
            _context20.next = 17;
            break;

          case 14:
            _context20.prev = 14;
            _context20.t0 = _context20["catch"](1);
            console.log("error");

          case 17:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 14]]);
  }));

  return function UpdateNotificationactive(_x20) {
    return _ref41.apply(this, arguments);
  };
}();
_c18 = UpdateNotificationactive;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsInR5cGVvZnN1Ym1pdCIsInByb2Nlc3N0eXBlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImNhdGVnb3J5IiwicGFpZ25hdGlvbiIsInNlbGVjdGlvbmxpc3QiLCJzZXRzZWxlY3Rpb24iLCJnZXQiLCJsZW5ndGgiLCJzZWxlY3Rpb25zIiwic3RvcHJlcXVlc3RpbmciLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0Iiwic2V0VGltZW91dCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJsYXN0IiwiY29tbWVudGxpc3QiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwic2V0YWxsb3dhY3Rpb24iLCJoZWFkZXJzIiwibXlkYXRhIiwiaWQiLCJVc2VybmFtZSIsImZpcnN0bmFtZSIsIlVzZXJzdXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vycm9sZSIsIlJvbGUiLCJVc2VyaW1hZ2UiLCJpbWFnZXVybCIsIkdldHVzZXJjb250ZW50IiwicGFyYW1zIiwic2V0ZGF0YSIsInNldHN0b3BzY3JvbGxpbmciLCJVcGRhdGVOb3RpZmljYXRpb25jb3VudCIsIkdldHVzZXJwcm9maWxlY29udGVudCIsIm93bmVycG9zdCIsIkdldHVzZXJwcm9maWxlIiwiQ3JlYXRldXNlcnJlbGF0aW9uIiwiRm9sbG93ZWRJZCIsImNoZWNraWZmb2xsb3ciLCJGb2xsb3dlcklkIiwiTm90aWZpY2F0aW9ucmVxIiwic2V0bmF2ZGF0YSIsIm5hdmRhdGEiLCJsYXN0cm93IiwiTXljdXJyZW50ZGF0YSIsIk5ld2RhdGEiLCJOb3RpZmljYXRpb25Db3VudHJlcSIsInNldGNvdW50ZGF0YSIsIkdldHVzZXJzZm9yc2VhcmNoYmFyIiwiaW5wdXR2YWx1ZSIsInNldHVzZXJzIiwic2V0bm90aGluZ2ZvdW5kIiwiRGVsZXRlUG9zdCIsInN1Y2Nlc3MiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJBbnN3ZXIiLCJDb21tZW50SWQiLCJVcGRhdGVOb3RpZmljYXRpb25hY3RpdmUiLCJQcmV2ZW50IiwiY3VycmVudGFjdGl2ZSIsImN1cnJlbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLElBQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQWtFO0FBQUEsTUFBaEVDLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTNEQyxTQUEyRCxRQUEzREEsU0FBMkQ7QUFBQSxN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LE9BQW5CLEVBQTJCcEIsVUFBM0IsVUFBMkJBLFVBQTNCLEVBQXNDcUIsYUFBdEMsVUFBc0NBLGFBQXRDLEVBQW9EL0csU0FBcEQsVUFBb0RBLFNBQXBELEVBQThEQyxTQUE5RCxVQUE4REEsU0FBOUQ7QUFBQTtBQUFBO0FBQUEsbUJBSWxCTiw0Q0FBSyxDQUFDaUQsR0FBTiw4QkFBZ0M4QyxVQUFoQyxjQUE4Q0YsVUFBOUMsY0FBNER1QixhQUE1RCxFQUprQjs7QUFBQTtBQUFBO0FBSTlCaEgsZ0JBSjhCLHNCQUk5QkEsSUFKOEI7O0FBQUEsaUJBTWpDRCxZQUFZLENBQUM7QUFBQ0Msa0JBQUksRUFBSkEsSUFBRDtBQUFNQyx1QkFBUyxFQUFUQSxTQUFOO0FBQWdCQyx1QkFBUyxFQUFUQTtBQUFoQixhQUFELENBTnFCO0FBQUE7QUFBQTtBQUFBOztBQVFqQzZHLG1CQUFPLENBQUNFLE9BQVIsR0FBa0IsSUFBbEI7QUFDQWpHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWpCLElBQUksQ0FBQ2tILEtBQWpCO0FBVGlDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJwQ2xHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQWpCb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEI2Rix3QkFBd0I7QUFBQTtBQUFBO0FBQUEsR0FBOUI7T0FBTUEsd0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZGJiZTE3OTkwYjU3MTYwNjdjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICBcclxuICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcix0eXBlb2ZzdWJtaXR9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIsey4uLmNvbnRlbnRkYXRhLHByb2Nlc3N0eXBlOnR5cGVvZnN1Ym1pdH0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnfSkpe1xyXG4gICAgICAgIHNldHdpbmRvdyh0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlL2NvbnRlbnRcIilcclxuICAgICAgICAvL3dlIHJvdXRlIGnFn2xlbWlcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVyYWRhXCIpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y2Vjb21tZW50cmVxPWFzeW5jICh7TWVzc2FnZSxUYWtlcklkLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBUYWtlcklkOlRha2VySWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcSxjYXRlZ29yeSxwYWlnbmF0aW9uLHNlbGVjdGlvbmxpc3Qsc2V0c2VsZWN0aW9ufSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9LyR7Y2F0ZWdvcnl9YClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gey4uLnNlbGVjdGlvbmxpc3R9O1xyXG4gICAgICAgIHNlbGVjdGlvbnNbY2F0ZWdvcnldLnN0b3ByZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRzZWxlY3Rpb24oc2VsZWN0aW9ubGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkIHJlcXVlc3RcIilcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIHZhciBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcblxyXG4gICAgICBpZihwYWlnbmF0aW9uKXtcclxuXHJcbiAgICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Y29udGVudGRhdGEoTXlkYXRhKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlcmVsYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxQb3N0SWQsYXR0cmlidXRlLHNldGVycm1zZyxzZXR3aW5kb3cscmVsYXRpb250eXBlLFVzZXJJZG9mY29udGVudH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgY29udGVudC9jcmVhdGVyZWxhdGlvbmAse1xyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBQb3N0SWQ6UG9zdElkLFxyXG4gICAgICBhdHRyaWJ1dGU6YXR0cmlidXRlLFxyXG4gICAgICByZWxhdGlvbnR5cGU6cmVsYXRpb250eXBlLFxyXG4gICAgICBVc2VySWRvZmNvbnRlbnQ6VXNlcklkb2Zjb250ZW50LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRjb250ZW50KGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0YWN0aXZlcHJvZHVjZSxzZXRjb21tZW50LHNldGVycm1zZyxzZXR3aW5kb3csbGFzdCxvcmRlcixjb21tZW50bGlzdH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfS8ke2xhc3R9LyR7b3JkZXJ9YCk7XHJcbiAgICAvL2J1cmFkYSB0ZWtyYXJkYW4gYsO8dMO8biB5b3J1bWxhciDDp2VraWxpeW9yIGVrbGVuZW4gZW4gc29uIHlvcnVtIMOnZWtpbG1lbGlcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpe1xyXG4gICAgICBcclxuICAgICAgdmFyIEN1cnJlbnQ9Wy4uLmNvbW1lbnRsaXN0XTtcclxuICAgICAgdmFyIE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgY29uc29sZS5sb2coTXlkYXRhKVxyXG4gICAgICBpZihsYXN0KXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChNeWRhdGEuY29uY2F0KEN1cnJlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgc2V0Y29tbWVudChDdXJyZW50LmNvbmNhdChNeWRhdGEpKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkLHNldGFsbG93YWN0aW9ufSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHtcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgXCJhdXRob3JpemF0aW9uXCI6YEJlYXJlciAke1Rva2VufWAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEuUm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7ICBcclxuICAgICAgc2V0YWxsb3dhY3Rpb24odHJ1ZSk7ICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoIWRhdGEuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uY291bnQ9YXN5bmMoe1VzZXJJZH0pPT57XHJcblxyXG4gICB0cnkge1xyXG4gICAgXHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgL25vdGlmaWNhdGlvbi91cGRhdGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRzcGlubmVyLHNldGRhdGEsY2F0ZWdvcnksVXNlcklkLG93bmVycG9zdCxvcmRlcn0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09IGF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VycHJvZmlsZWNvbnRlbnQvJHtVc2VySWR9LyR7b3duZXJwb3N0fS8ke2NhdGVnb3J5fS8ke29yZGVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0ZGF0YShbLi4uZGF0YS5kYXRhXSlcclxuICAgICAgIHNldHNwaW5uZXIoZmFsc2UpXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoe1VzZXJJZCxzZXRuYXZkYXRhLG9yZGVyLG5hdmRhdGEsbGFzdHJvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xyXG4gICAgXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRyb3dzLyR7VXNlcklkfS8ke29yZGVyfS8ke2xhc3Ryb3d9YCk7XHJcbiAgICBjb25zdCBNeWN1cnJlbnRkYXRhPVsuLi5uYXZkYXRhXTtcclxuICAgIGNvbnN0IE5ld2RhdGE9ZGF0YS5teWRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhOZXdkYXRhKTtcclxuXHJcbiAgICBpZihsYXN0cm93KXtcclxuICAgICAgY29uc29sZS5sb2coXCJsb29vMlwiKVxyXG4gICAgICBzZXRuYXZkYXRhKE5ld2RhdGEuY29uY2F0KE15Y3VycmVudGRhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvb29cIilcclxuICAgICAgc2V0bmF2ZGF0YShNeWN1cnJlbnRkYXRhLmNvbmNhdChOZXdkYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ291bnRyZXE9YXN5bmMoe1VzZXJJZCxzZXRjb3VudGRhdGF9KT0+e1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coVXNlcklkKTtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYG5vdGlmaWNhdGlvbi9nZXRjb3VudC8ke1VzZXJJZH1gKTtcclxuXHJcblxyXG4gICAgc2V0Y291bnRkYXRhKGRhdGEuZGF0YSk7XHJcbiBcclxuICAgIFxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJzZm9yc2VhcmNoYmFyPWFzeW5jKHtpbnB1dHZhbHVlLHNldHVzZXJzLHNldGFjdGl2ZSxzZXRub3RoaW5nZm91bmR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci9nZXR1c2VybmFtZS8ke2lucHV0dmFsdWV9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgc2V0YWN0aXZlKFwiTm90aGluZ1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0YWN0aXZlKFwiXCIpO1xyXG4gICAgICBzZXR1c2VycyhkYXRhLmRhdGEpO1xyXG4gICAgfSAgXHJcblxyXG4gXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVQb3N0ID0gYXN5bmMoe1Bvc3RJZCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwidXNlci9kZWxldGVwb3N0XCIse1xyXG4gICAgICBQb3N0SWQ6UG9zdElkXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICAgY29uc29sZS5sb2coZGF0YS5zdWNjZXNzKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRhbnN3ZXJyZXEgPSBhc3luYyh7VXBwZXJjb21tZW50SWQsQW5zd2VyLFVzZXJJZCxzZXRlcnJtc2csc2V0d2luZG93LENvbnRlbnRJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcImNvbW1lbnQvcHJvZHVjZWFuc3dlclwiLHtcclxuICAgICAgQ29tbWVudElkOlVwcGVyY29tbWVudElkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgICBNZXNzYWdlOkFuc3dlcixcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN1Y2Nlc3MpOyAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlTm90aWZpY2F0aW9uYWN0aXZlID0gYXN5bmMgKHtGb2xsb3dlZElkLFByZXZlbnQsRm9sbG93ZXJJZCxjdXJyZW50YWN0aXZlLHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgdXNlci91cGRhdGV1c2Vybm90LyR7Rm9sbG93ZXJJZH0vJHtGb2xsb3dlZElkfS8ke2N1cnJlbnRhY3RpdmV9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuXHJcbiAgICAgICBQcmV2ZW50LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXRlKTsgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=