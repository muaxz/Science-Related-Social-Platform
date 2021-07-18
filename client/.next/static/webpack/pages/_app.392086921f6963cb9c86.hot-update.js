webpackHotUpdate_N_E("pages/_app",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Producecommentreq, Homereq, Createrelationreq, Contentreq, Commentreq, Contextdata, Getusercontent, Getuserprofilecontent, Getuserprofile, Createuserrelation, Notificationreq */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofilecontent", function() { return Getuserprofilecontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserprofile", function() { return Getuserprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createuserrelation", function() { return Createuserrelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificationreq", function() { return Notificationreq; });
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://localhost:3001";

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
  var _ref3 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {
    var setlogged, setspinner, setuserdata, userdata, router, seterrmsg, setbackenderror, setactive, _yield$axios$post, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setlogged = _ref2.setlogged, setspinner = _ref2.setspinner, setuserdata = _ref2.setuserdata, userdata = _ref2.userdata, router = _ref2.router, seterrmsg = _ref2.seterrmsg, setbackenderror = _ref2.setbackenderror, setactive = _ref2.setactive;
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/login", {
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
  var _ref5 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref4) {
    var setbackenderror, userdata, setactive, seterrmsg, _yield$axios$post2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setbackenderror = _ref4.setbackenderror, userdata = _ref4.userdata, setactive = _ref4.setactive, seterrmsg = _ref4.seterrmsg;
            console.log("");
            _context2.prev = 2;
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/register", {
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
  var _ref7 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref6) {
    var contentdata, seterrmsg, setwindow, router, _yield$axios$post3, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contentdata = _ref6.contentdata, seterrmsg = _ref6.seterrmsg, setwindow = _ref6.setwindow, router = _ref6.router;
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/content/produce", {
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
  var _ref9 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(_ref8) {
    var Message, setnumbercom, setwindow, UserId, ContentId, seterrmsg, _yield$axios$post4, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Message = _ref8.Message, setnumbercom = _ref8.setnumbercom, setwindow = _ref8.setwindow, UserId = _ref8.UserId, ContentId = _ref8.ContentId, seterrmsg = _ref8.seterrmsg;
            _context4.prev = 1;
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/comment/produce", {
              contentdata: {
                Message: Message,
                UserId: UserId,
                ContentId: ContentId
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
  var _ref11 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(_ref10) {
    var currentdata, setspinner, seterrmsg, setwindow, setcontentdata, order, setstopreq, _yield$axios$get, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            currentdata = _ref10.currentdata, setspinner = _ref10.setspinner, seterrmsg = _ref10.seterrmsg, setwindow = _ref10.setwindow, setcontentdata = _ref10.setcontentdata, order = _ref10.order, setstopreq = _ref10.setstopreq;
            _context5.prev = 1;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/gethome/".concat(order));

          case 4:
            _yield$axios$get = _context5.sent;
            data = _yield$axios$get.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context5.next = 14;
              break;
            }

            if (data.data.length == 0) {
              setstopreq(false);
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

            setcontentdata(Current.concat(Mydata));
            setspinner(false);
            _context5.next = 15;
            break;

          case 14:
            return _context5.abrupt("return");

          case 15:
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](1);
            seterrmsg(true);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 17]]);
  }));

  return function Homereq(_x5) {
    return _ref11.apply(this, arguments);
  };
}();
_c3 = Homereq;
var Createrelationreq = /*#__PURE__*/function () {
  var _ref13 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(_ref12) {
    var UserId, PostId, attribute, seterrmsg, setwindow, relationtype, UserIdofcontent, _yield$axios$post5, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            UserId = _ref12.UserId, PostId = _ref12.PostId, attribute = _ref12.attribute, seterrmsg = _ref12.seterrmsg, setwindow = _ref12.setwindow, relationtype = _ref12.relationtype, UserIdofcontent = _ref12.UserIdofcontent;
            _context6.prev = 1;
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("content/createrelation", {
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
  var _ref15 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(_ref14) {
    var contentId, setcontent, seterrmsg, setwindow, _yield$axios$get2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            contentId = _ref14.contentId, setcontent = _ref14.setcontent, seterrmsg = _ref14.seterrmsg, setwindow = _ref14.setwindow;
            _context7.prev = 1;
            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/".concat(contentId));

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
  var _ref17 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(_ref16) {
    var contentId, setactiveproduce, setcomment, seterrmsg, setwindow, _yield$axios$get3, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            contentId = _ref16.contentId, setactiveproduce = _ref16.setactiveproduce, setcomment = _ref16.setcomment, seterrmsg = _ref16.seterrmsg, setwindow = _ref16.setwindow;
            _context8.prev = 1;
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("comment/".concat(contentId));

          case 4:
            _yield$axios$get3 = _context8.sent;
            data = _yield$axios$get3.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context8.next = 12;
              break;
            }

            console.log(data.data);
            setcomment(data.data);
            setactiveproduce(false);
            _context8.next = 16;
            break;

          case 12:
            if (!(data == "Unauthroized")) {
              _context8.next = 15;
              break;
            }

            _context8.next = 16;
            break;

          case 15:
            return _context8.abrupt("return");

          case 16:
            _context8.next = 21;
            break;

          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](1);
            seterrmsg(true);

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 18]]);
  }));

  return function Commentreq(_x8) {
    return _ref17.apply(this, arguments);
  };
}();
_c6 = Commentreq;
var Contextdata = /*#__PURE__*/function () {
  var _ref19 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(_ref18) {
    var Token, setspinner, setcontextdata, seterrmsg, setwindow, setlogged, _yield$axios$get4, data, mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            Token = _ref18.Token, setspinner = _ref18.setspinner, setcontextdata = _ref18.setcontextdata, seterrmsg = _ref18.seterrmsg, setwindow = _ref18.setwindow, setlogged = _ref18.setlogged;
            _context9.prev = 1;
            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/user/getuserdata", {
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
  var _ref21 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(_ref20) {
    var UserId, params, setdata, setwindow, seterrmsg, order, setstopscrolling, currentdata, _yield$axios$get5, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            UserId = _ref20.UserId, params = _ref20.params, setdata = _ref20.setdata, setwindow = _ref20.setwindow, seterrmsg = _ref20.seterrmsg, order = _ref20.order, setstopscrolling = _ref20.setstopscrolling, currentdata = _ref20.currentdata;
            _context10.prev = 1;
            _context10.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/usercontent/".concat(params, "/").concat(UserId, "/").concat(order));

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

            if (data.data.length == 0) {
              setstopscrolling(true);
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data); //push metodu bir diziyi bi  r dizinin içine pushluyor fakat concat elemanları

            setdata(Mydata);
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
var Getuserprofilecontent = /*#__PURE__*/function () {
  var _ref23 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(_ref22) {
    var setdata, catogery, UserId, _yield$axios$get6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            setdata = _ref22.setdata, catogery = _ref22.catogery, UserId = _ref22.UserId;
            _context11.prev = 1;
            _context11.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/profilecontent/".concat(catogery, "/").concat(UserId));

          case 4:
            _yield$axios$get6 = _context11.sent;
            data = _yield$axios$get6.data;

            if (!Errorhandler({
              data: data
            })) {
              _context11.next = 10;
              break;
            }

            setdata(data.data);
            _context11.next = 14;
            break;

          case 10:
            if (!(data == "Unauthroized")) {
              _context11.next = 13;
              break;
            }

            _context11.next = 14;
            break;

          case 13:
            return _context11.abrupt("return");

          case 14:
            _context11.next = 19;
            break;

          case 16:
            _context11.prev = 16;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);

          case 19:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 16]]);
  }));

  return function Getuserprofilecontent(_x11) {
    return _ref23.apply(this, arguments);
  };
}();
_c9 = Getuserprofilecontent;
var Getuserprofile = /*#__PURE__*/function () {
  var _ref25 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(_ref24) {
    var UserId, setuserdata, _yield$axios$get7, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            UserId = _ref24.UserId, setuserdata = _ref24.setuserdata;
            _context12.prev = 1;
            _context12.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("user/getuserprofile/".concat(UserId));

          case 4:
            _yield$axios$get7 = _context12.sent;
            data = _yield$axios$get7.data;
            console.log(data);

            if (!Errorhandler({
              data: data
            })) {
              _context12.next = 11;
              break;
            }

            setuserdata(data.userdata);
            _context12.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context12.next = 14;
              break;
            }

            _context12.next = 15;
            break;

          case 14:
            return _context12.abrupt("return");

          case 15:
            _context12.next = 20;
            break;

          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);

          case 20:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 17]]);
  }));

  return function Getuserprofile(_x12) {
    return _ref25.apply(this, arguments);
  };
}();
_c10 = Getuserprofile;
var Createuserrelation = /*#__PURE__*/function () {
  var _ref27 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13(_ref26) {
    var UserId, FollowedId, checkiffollow, _yield$axios$post6, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            UserId = _ref26.UserId, FollowedId = _ref26.FollowedId, checkiffollow = _ref26.checkiffollow;
            _context13.prev = 1;
            _context13.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("user/createuserrelation", {
              FollowerId: UserId,
              FollowedId: FollowedId,
              checkiffollow: checkiffollow
            });

          case 4:
            _yield$axios$post6 = _context13.sent;
            data = _yield$axios$post6.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context13.next = 10;
              break;
            }

            return _context13.abrupt("return");

          case 10:
            return _context13.abrupt("return");

          case 11:
            _context13.next = 16;
            break;

          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](1);
            console.log("relation error"); //seterrmsg(true);

          case 16:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 13]]);
  }));

  return function Createuserrelation(_x13) {
    return _ref27.apply(this, arguments);
  };
}();
_c11 = Createuserrelation;
var Notificationreq = /*#__PURE__*/function () {
  var _ref28 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14(UserId) {
    var _yield$axios$get8, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("notification/getrows/".concat(UserId));

          case 3:
            _yield$axios$get8 = _context14.sent;
            data = _yield$axios$get8.data;
            console.log(data.mydata);
            _context14.next = 11;
            break;

          case 8:
            _context14.prev = 8;
            _context14.t0 = _context14["catch"](0);
            console.log("relation error"); //seterrmsg(true);

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 8]]);
  }));

  return function Notificationreq(_x14) {
    return _ref28.apply(this, arguments);
  };
}();
_c12 = Notificationreq;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Errorhandler");
$RefreshReg$(_c2, "Producecommentreq");
$RefreshReg$(_c3, "Homereq");
$RefreshReg$(_c4, "Createrelationreq");
$RefreshReg$(_c5, "Contentreq");
$RefreshReg$(_c6, "Commentreq");
$RefreshReg$(_c7, "Contextdata");
$RefreshReg$(_c8, "Getusercontent");
$RefreshReg$(_c9, "Getuserprofilecontent");
$RefreshReg$(_c10, "Getuserprofile");
$RefreshReg$(_c11, "Createuserrelation");
$RefreshReg$(_c12, "Notificationreq");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsInNldHNwaW5uZXIiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsIlByb2R1Y2Vjb21tZW50cmVxIiwiTWVzc2FnZSIsInNldG51bWJlcmNvbSIsIlVzZXJJZCIsIkNvbnRlbnRJZCIsInByZXYiLCJIb21lcmVxIiwiY3VycmVudGRhdGEiLCJzZXRjb250ZW50ZGF0YSIsIm9yZGVyIiwic2V0c3RvcHJlcSIsImdldCIsImxlbmd0aCIsIkN1cnJlbnQiLCJNeWRhdGEiLCJjb25jYXQiLCJDcmVhdGVyZWxhdGlvbnJlcSIsIlBvc3RJZCIsImF0dHJpYnV0ZSIsInJlbGF0aW9udHlwZSIsIlVzZXJJZG9mY29udGVudCIsIkNvbnRlbnRyZXEiLCJjb250ZW50SWQiLCJzZXRjb250ZW50IiwiQ29tbWVudHJlcSIsInNldGFjdGl2ZXByb2R1Y2UiLCJzZXRjb21tZW50IiwiQ29udGV4dGRhdGEiLCJUb2tlbiIsImhlYWRlcnMiLCJteWRhdGEiLCJpZCIsIlVzZXJuYW1lIiwiZmlyc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJyb2xlIiwicm9sZSIsIlVzZXJpbWFnZSIsImltYWdldXJsIiwiR2V0dXNlcmNvbnRlbnQiLCJwYXJhbXMiLCJzZXRkYXRhIiwic2V0c3RvcHNjcm9sbGluZyIsIkdldHVzZXJwcm9maWxlY29udGVudCIsImNhdG9nZXJ5IiwiR2V0dXNlcnByb2ZpbGUiLCJDcmVhdGV1c2VycmVsYXRpb24iLCJGb2xsb3dlZElkIiwiY2hlY2tpZmZvbGxvdyIsIkZvbGxvd2VySWQiLCJOb3RpZmljYXRpb25yZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUlBLElBQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQWtFO0FBQUEsTUFBaEVDLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTNEQyxTQUEyRCxRQUEzREEsU0FBMkQ7QUFBQSxNQUFqREMsU0FBaUQsUUFBakRBLFNBQWlEO0FBQUEsTUFBdkNDLGNBQXVDLFFBQXZDQSxjQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBRWxGLE1BQUdMLElBQUksSUFBSUEsSUFBSSxDQUFDTSxLQUFoQixFQUFzQjtBQUVuQkwsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBQyxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsV0FBTyxLQUFQO0FBRUYsR0FORCxNQU9LLElBQUdGLElBQUksSUFBSSxjQUFYLEVBQTBCO0FBRTVCRyxrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBQyxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FDLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUUsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixPQUF4QjtBQUNBLFdBQU8sS0FBUDtBQUVGLEdBUkksTUFTRDtBQUNELFdBQU8sSUFBUDtBQUNGO0FBRUgsQ0F0QkQ7O0tBQU1ULFk7QUF3QkMsSUFBTVUsUUFBUTtBQUFBLHlTQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0wscUJBQVAsU0FBT0Es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QUFBLGtCQUFsQnlELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4QjtPQUFNQSxrQjtBQXNCTixJQUFNSSxlQUFlO0FBQUEsMFNBQUMsbUJBQU1oRCxNQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSVBsQyw0Q0FBSyxDQUFDMEMsR0FBTixnQ0FBa0NSLE1BQWxDLEVBSk87O0FBQUE7QUFBQTtBQUluQjlCLGdCQUptQixxQkFJbkJBLElBSm1CO0FBTXpCZ0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZakIsSUFBSSxDQUFDeUQsTUFBakI7QUFOeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXdEJ6QyxtQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFYc0IsQ0FZdEI7O0FBWnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUEsa0JBQWY2RCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO09BQU1BLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zOTIwODY5MjFmNjk2M2NiOWM4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KT0+e1xyXG5cclxuICAgaWYoZGF0YSAmJiBkYXRhLmVycm9yKXtcclxuXHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgIH1cclxuICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRob3JpemVkXCIpe1xyXG4gICAgICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEoe30pO1xyXG4gICAgICBzZXRsb2dnZWQoZmFsc2UpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRPS0VOXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICBcclxuICAgICAgXHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbnJlcT1hc3luYyh7c2V0bG9nZ2VkLHNldHNwaW5uZXIsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZihkYXRhLndyb25nID09IFwiV1BcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldQXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGRhdGEud3JvbmcgPT0gXCJXRVwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV0VcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICAgIHNldHVzZXJkYXRhKGRhdGEuVXNlcmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0tFTlwiLGRhdGEudG9rZW4pOy8vaHR0cCBjb29raWUgb25seSBpbGUgc3RvcmUgZWRpY2V6XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNpZ3RlcnJlcT1hc3luYyh7c2V0YmFja2VuZGVycm9yLHVzZXJkYXRhLHNldGFjdGl2ZSxzZXRlcnJtc2d9KT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICB0cnl7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoZGF0YS5leGlzdCl7XHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiRVjEsFNUXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmHFn2FyxLFsxLEga2F5xLF0XCIpXHJcbiAgICB9XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNvcnVuIHZhclwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWNlcmVxPWFzeW5jKHtjb250ZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHJvdXRlcn0pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb250ZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6Y29udGVudGRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0d2luZG93LHNldGVycm1zZ30pKXtcclxuICAgICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9jb250ZW50XCIpXHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWNlY29tbWVudHJlcT1hc3luYyAoe01lc3NhZ2Usc2V0bnVtYmVyY29tLHNldHdpbmRvdyxVc2VySWQsQ29udGVudElkLHNldGVycm1zZ30pPT57XHJcblxyXG4gIHRyeXtcclxuICAgIFxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9jb21tZW50L3Byb2R1Y2VcIix7Y29udGVudGRhdGE6e1xyXG4gICAgICBNZXNzYWdlOk1lc3NhZ2UsXHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIENvbnRlbnRJZDpDb250ZW50SWQsXHJcbiAgICB9fSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZ30pKXsgICAgXHJcbiAgICAgICAgc2V0bnVtYmVyY29tKHByZXY9PnByZXYrMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy93ZSByb3V0ZSBpxZ9sZW1pXHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZWxhblwiKTtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYVwiKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRzcGlubmVyLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGVudGRhdGEsb3JkZXIsc2V0c3RvcHJlcX0pPT57XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvZ2V0aG9tZS8ke29yZGVyfWApXHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXtcclxuXHJcbiAgICAgIGlmKGRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2V0c3RvcHJlcShmYWxzZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgQ3VycmVudD1bLi4uY3VycmVudGRhdGFdO1xyXG4gICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaXIgZGl6aW5pbiBpw6dpbmUgcHVzaGx1eW9yIGZha2F0IGNvbmNhdCBlbGVtYW5sYXLEsVxyXG4gICAgICBzZXRjb250ZW50ZGF0YShDdXJyZW50LmNvbmNhdChNeWRhdGEpKTtcclxuICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXJlbGF0aW9ucmVxPWFzeW5jKHtVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93LHJlbGF0aW9udHlwZSxVc2VySWRvZmNvbnRlbnR9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZSxcclxuICAgICAgcmVsYXRpb250eXBlOnJlbGF0aW9udHlwZSxcclxuICAgICAgVXNlcklkb2Zjb250ZW50OlVzZXJJZG9mY29udGVudCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuICAgIFxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRjb250ZW50LHNldGVycm1zZyxzZXR3aW5kb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC8ke2NvbnRlbnRJZH1gKTtcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7IFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGFjdGl2ZXByb2R1Y2Usc2V0Y29tbWVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbW1lbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSlcclxuICAgICAgIHNldGNvbW1lbnQoZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGFjdGl2ZXByb2R1Y2UoZmFsc2UpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ZGF0YT1hc3luYyAoe1Rva2VuLHNldHNwaW5uZXIsc2V0Y29udGV4dGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRsb2dnZWR9KT0+e1xyXG4gXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGAvdXNlci9nZXR1c2VyZGF0YWAse1xyXG4gICAgICBoZWFkZXJzOntcclxuICAgICAgICBcImF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7VG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcblxyXG4gICAgICBjb25zdCBteWRhdGE9eyBcclxuICAgICAgICBVc2VySWQ6ZGF0YS51c2VyZGF0YS5pZCxcclxuICAgICAgICBVc2VybmFtZTpkYXRhLnVzZXJkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICBVc2Vyc3VybmFtZTpkYXRhLnVzZXJkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgIFVzZXJyb2xlOmRhdGEudXNlcmRhdGEucm9sZSxcclxuICAgICAgICBVc2VyaW1hZ2U6ZGF0YS51c2VyZGF0YS5pbWFnZXVybCxcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKG15ZGF0YSk7XHJcbiAgICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuIFxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvcmJ1cmFkYWR1cnV5b3JcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcmNvbnRlbnQ9YXN5bmMoe1VzZXJJZCxwYXJhbXMsc2V0ZGF0YSxzZXR3aW5kb3csc2V0ZXJybXNnLG9yZGVyLHNldHN0b3BzY3JvbGxpbmcsY3VycmVudGRhdGF9KT0+e1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L3VzZXJjb250ZW50LyR7cGFyYW1zfS8ke1VzZXJJZH0vJHtvcmRlcn1gKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG4gICAgICAgXHJcbiAgICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgc2V0c3RvcHNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpICByIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgIHNldGRhdGEoTXlkYXRhKTtcclxuICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZWNvbnRlbnQ9YXN5bmMoe3NldGRhdGEsY2F0b2dlcnksVXNlcklkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9wcm9maWxlY29udGVudC8ke2NhdG9nZXJ5fS8ke1VzZXJJZH1gKTtcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGF9KSl7IFxyXG5cclxuICAgICAgIHNldGRhdGEoZGF0YS5kYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXR1c2VycHJvZmlsZT1hc3luYyh7VXNlcklkLHNldHVzZXJkYXRhfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYHVzZXIvZ2V0dXNlcnByb2ZpbGUvJHtVc2VySWR9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXR1c2VyZGF0YShkYXRhLnVzZXJkYXRhKVxyXG5cclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3Ipe1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXJyZWxhdGlvbj1hc3luYyh7VXNlcklkLEZvbGxvd2VkSWQsY2hlY2tpZmZvbGxvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChgdXNlci9jcmVhdGV1c2VycmVsYXRpb25gLHtcclxuICAgICAgRm9sbG93ZXJJZDpVc2VySWQsXHJcbiAgICAgIEZvbGxvd2VkSWQ6Rm9sbG93ZWRJZCxcclxuICAgICAgY2hlY2tpZmZvbGxvdzpjaGVja2lmZm9sbG93LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKVxyXG4gICAgcmV0dXJuO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnJlcT1hc3luYyhVc2VySWQpPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBub3RpZmljYXRpb24vZ2V0cm93cy8ke1VzZXJJZH1gKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coZGF0YS5teWRhdGEpO1xyXG5cclxuICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9