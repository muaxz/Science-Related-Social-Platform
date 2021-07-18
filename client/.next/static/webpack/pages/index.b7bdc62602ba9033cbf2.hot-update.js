webpackHotUpdate_N_E("pages/index",{

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
            console.log("NOT DATA  " + data.mydata);
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

/***/ }),

/***/ "./containers/pages/Home.js":
/*!**********************************!*\
  !*** ./containers/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Contentcard */ "./components/shared/Contentcard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/pages/Main/Showfoller */ "./components/pages/Main/Showfoller.js");
/* harmony import */ var _components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pages/Main/Leaderboard */ "./components/pages/Main/Leaderboard.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Home.js",
    _s = $RefreshSig$();













var CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    '& .MuiSelect-root': {
      color: "black"
    }
  }
});
var Flexdiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__Flexdiv",
  componentId: "sc-14bmh8h-0"
})(["display:flex;justify-content:space-between;max-width:1250px;width:100%;"]);
_c = Flexdiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Home__ContentDiv",
  componentId: "sc-14bmh8h-1"
})([""]);
_c2 = ContentDiv;
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:3001");
function Home(_ref) {
  _s();

  var _this = this;

  var mydata = _ref.mydata;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      bottom = _useScroll.bottom;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(mydata)),
      contentdata = _useState[0],
      setcontentdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      order = _useState2[0],
      setorder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      errormsg = _useState3[0],
      seterror = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      activelike = _useState4[0],
      setactivelike = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      list = _useState5[0],
      _setlist = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      stoprequesting = _useState6[0],
      setstopreq = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      spinner = _useState7[0],
      setspinner = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    socket.on("Notify", function (data) {});
    if (userdata.UserId) ;
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Notificationreq"])(userdata.UserId);

    if (!stoprequesting && bottom) {
      setspinner(true);
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Homereq"])({
        currentdata: contentdata,
        setcontentdata: setcontentdata,
        order: order,
        setspinner: setspinner,
        seterrmsg: seterror,
        setstopreq: setstopreq
      });
    }
  }, [order]);

  var sendiorequest = function sendiorequest() {
    socket.emit("message", "");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (bottom) setorder(mydata.length + 10);
  }, [bottom]);

  var createrelation = function createrelation(postId, attribute, typeofrelation, userid) {
    console.log(attribute, postId);
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Createrelationreq"])({
      UserId: userdata.UserId,
      PostId: postId,
      attribute: attribute,
      relationtype: typeofrelation,
      UserIdofcontent: userid
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        paddingLeft: "115px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: sendiorequest,
        children: "\u0130O REQUEST"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        },
        children: spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 35
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this), list.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Showfoller__WEBPACK_IMPORTED_MODULE_10__["default"], {
        setlist: function setlist() {
          return _setlist([]);
        },
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flexdiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          style: {
            padding: "10px",
            maxWidth: "650px",
            height: "".concat(list.length > 0 ? "100vh" : "100%"),
            overflow: "hidden"
          },
          children: contentdata.length && contentdata.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Contentcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
              postId: item.id,
              content: item.content,
              createrelationforsmh: createrelation,
              showwindow: function showwindow(stateoflist) {
                return _setlist(stateoflist);
              },
              like: item.Like //bu bir obje array
              ,
              retweet: item.Retweet,
              comment: item.allcomments,
              readlater: item.Readlater,
              //key numarası
              profileimage: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg",
              title: item.title,
              titleimage: "yaprak.jpg",
              username: item.personal !== null ? item.personal.firstname : "notyet",
              usersurname: item.personal !== null ? item.personal.lastname : "notyet" //bir obje props
              ,
              userid: item.personal !== null ? item.personal.id : "notyet",
              subtitle: item.subtitle,
              date: item.createdAt
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Main_Leaderboard__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }, this);
}
/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/

_s(Home, "GmLp+f3g4bjpM6N1dkp7wdXKSvw=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_12__["default"]];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Flexdiv");
$RefreshReg$(_c2, "ContentDiv");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Ib21lLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiRXJyb3JoYW5kbGVyIiwiZGF0YSIsInNldGVycm1zZyIsInNldHdpbmRvdyIsInNldGNvbnRleHRkYXRhIiwic2V0bG9nZ2VkIiwic2V0c3Bpbm5lciIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImxvZ2lucmVxIiwic2V0dXNlcmRhdGEiLCJ1c2VyZGF0YSIsInJvdXRlciIsInNldGJhY2tlbmRlcnJvciIsInNldGFjdGl2ZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwid3JvbmciLCJVc2VyZGF0YSIsInNldEl0ZW0iLCJ0b2tlbiIsInB1c2giLCJyZXNpZ3RlcnJlcSIsImV4aXN0IiwicHJvZHVjZXJlcSIsImNvbnRlbnRkYXRhIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJNZXNzYWdlIiwic2V0bnVtYmVyY29tIiwiVXNlcklkIiwiQ29udGVudElkIiwicHJldiIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJzZXRzdG9wcmVxIiwiZ2V0IiwibGVuZ3RoIiwiQ3VycmVudCIsIk15ZGF0YSIsImNvbmNhdCIsIkNyZWF0ZXJlbGF0aW9ucmVxIiwiUG9zdElkIiwiYXR0cmlidXRlIiwicmVsYXRpb250eXBlIiwiVXNlcklkb2Zjb250ZW50IiwiQ29udGVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbnRlbnQiLCJDb21tZW50cmVxIiwic2V0YWN0aXZlcHJvZHVjZSIsInNldGNvbW1lbnQiLCJDb250ZXh0ZGF0YSIsIlRva2VuIiwiaGVhZGVycyIsIm15ZGF0YSIsImlkIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiLCJHZXR1c2VyY29udGVudCIsInBhcmFtcyIsInNldGRhdGEiLCJzZXRzdG9wc2Nyb2xsaW5nIiwiR2V0dXNlcnByb2ZpbGVjb250ZW50IiwiY2F0b2dlcnkiLCJHZXR1c2VycHJvZmlsZSIsIkNyZWF0ZXVzZXJyZWxhdGlvbiIsIkZvbGxvd2VkSWQiLCJjaGVja2lmZm9sbG93IiwiRm9sbG93ZXJJZCIsIk5vdGlmaWNhdGlvbnJlcSIsIkNzc1RleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJGbGV4ZGl2Iiwic3R5bGVkIiwiZGl2IiwiQ29udGVudERpdiIsInNvY2tldCIsImlvIiwiSG9tZSIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZVN0YXRlIiwic2V0b3JkZXIiLCJlcnJvcm1zZyIsInNldGVycm9yIiwiYWN0aXZlbGlrZSIsInNldGFjdGl2ZWxpa2UiLCJsaXN0Iiwic2V0bGlzdCIsInN0b3ByZXF1ZXN0aW5nIiwic3Bpbm5lciIsInVzZUVmZmVjdCIsIm9uIiwic2VuZGlvcmVxdWVzdCIsImVtaXQiLCJjcmVhdGVyZWxhdGlvbiIsInBvc3RJZCIsInR5cGVvZnJlbGF0aW9uIiwidXNlcmlkIiwicGFkZGluZ0xlZnQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbnRlbnQiLCJzdGF0ZW9mbGlzdCIsIkxpa2UiLCJSZXR3ZWV0IiwiYWxsY29tbWVudHMiLCJSZWFkbGF0ZXIiLCJ0aXRsZSIsInBlcnNvbmFsIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztB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RCxJQUFJLENBQUNTLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUJULElBQUksQ0FBQ1MsUUFBTCxDQUFjcEUsUUFBdkMsR0FBa0QsUUFkL0QsQ0Fjd0U7QUFkeEU7QUFlQSxvQkFBTSxFQUFFMkQsSUFBSSxDQUFDUyxRQUFMLEtBQWtCLElBQWxCLEdBQXlCVCxJQUFJLENBQUNTLFFBQUwsQ0FBY3hFLEVBQXZDLEdBQTJDLFFBZm5EO0FBZ0JBLHNCQUFRLEVBQUUrRCxJQUFJLENBQUNVLFFBaEJmO0FBaUJBLGtCQUFJLEVBQUVWLElBQUksQ0FBQ1c7QUFqQlgsZUFTS1YsS0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBaEI7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBNkJJLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1ESDtBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FwSndCakMsSTtVQUVMQyxzRDs7O01BRktELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdiZGM2MjYwMmJhOTAzM2NiZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JoYW5kbGVyPSh7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRleHRkYXRhLHNldGxvZ2dlZCxzZXRzcGlubmVyfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcblxyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICB9XHJcbiAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aG9yaXplZFwiKXtcclxuICAgICAgXHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgXHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5yZXE9YXN5bmMoe3NldGxvZ2dlZCxzZXRzcGlubmVyLHNldHVzZXJkYXRhLHVzZXJkYXRhLHJvdXRlcixzZXRlcnJtc2csc2V0YmFja2VuZGVycm9yLHNldGFjdGl2ZX0pPT57XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9sb2dpblwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS53cm9uZyA9PSBcIldQXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXUFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihkYXRhLndyb25nID09IFwiV0VcIil7XHJcblxyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIldFXCIpXHJcbiAgICAgICAgc2V0YWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNldGxvZ2dlZCh0cnVlKTtcclxuICAgICAgICBzZXR1c2VyZGF0YShkYXRhLlVzZXJkYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9LRU5cIixkYXRhLnRva2VuKTsvL2h0dHAgY29va2llIG9ubHkgaWxlIHN0b3JlIGVkaWNlelxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzaWd0ZXJyZXE9YXN5bmMoe3NldGJhY2tlbmRlcnJvcix1c2VyZGF0YSxzZXRhY3RpdmUsc2V0ZXJybXNnfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgdHJ5e1xyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MucG9zdChcIi9yZWdpc3RlclwiLHt1c2VyZGF0YTp1c2VyZGF0YX0pXHJcbiAgICBcclxuICAgIGlmKGRhdGEuZXhpc3Qpe1xyXG4gICAgICAgIHNldGJhY2tlbmRlcnJvcihcIkVYxLBTVFwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhxZ9hcsSxbMSxIGthecSxdFwiKVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJzb3J1biB2YXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjZXJlcT1hc3luYyh7Y29udGVudGRhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxyb3V0ZXJ9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjZWNvbW1lbnRyZXE9YXN5bmMgKHtNZXNzYWdlLHNldG51bWJlcmNvbSxzZXR3aW5kb3csVXNlcklkLENvbnRlbnRJZCxzZXRlcnJtc2d9KT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29tbWVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOntcclxuICAgICAgTWVzc2FnZTpNZXNzYWdlLFxyXG4gICAgICBVc2VySWQ6VXNlcklkLFxyXG4gICAgICBDb250ZW50SWQ6Q29udGVudElkLFxyXG4gICAgfX0pXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2d9KSl7ICAgIFxyXG4gICAgICAgIHNldG51bWJlcmNvbShwcmV2PT5wcmV2KzEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VsYW5cIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZXJlcT1hc3luYyh7Y3VycmVudGRhdGEsc2V0c3Bpbm5lcixzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyLHNldHN0b3ByZXF9KT0+e1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50L2dldGhvbWUvJHtvcmRlcn1gKVxyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBpZihkYXRhLmRhdGEubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHNldHN0b3ByZXEoZmFsc2UpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IEN1cnJlbnQ9Wy4uLmN1cnJlbnRkYXRhXTtcclxuICAgICAgY29uc3QgTXlkYXRhPVsuLi5kYXRhLmRhdGFdO1xyXG4gICAgICAvL3B1c2ggbWV0b2R1IGJpciBkaXppeWkgYmlyIGRpemluaW4gacOnaW5lIHB1c2hsdXlvciBmYWthdCBjb25jYXQgZWxlbWFubGFyxLFcclxuICAgICAgc2V0Y29udGVudGRhdGEoQ3VycmVudC5jb25jYXQoTXlkYXRhKSk7XHJcbiAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyh7VXNlcklkLFBvc3RJZCxhdHRyaWJ1dGUsc2V0ZXJybXNnLHNldHdpbmRvdyxyZWxhdGlvbnR5cGUsVXNlcklkb2Zjb250ZW50fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KGBjb250ZW50L2NyZWF0ZXJlbGF0aW9uYCx7XHJcbiAgICAgIFVzZXJJZDpVc2VySWQsXHJcbiAgICAgIFBvc3RJZDpQb3N0SWQsXHJcbiAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgIHJlbGF0aW9udHlwZTpyZWxhdGlvbnR5cGUsXHJcbiAgICAgIFVzZXJJZG9mY29udGVudDpVc2VySWRvZmNvbnRlbnQsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpXHJcbiAgICByZXR1cm47XHJcbiAgICBlbHNlXHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZWxhdGlvbiBlcnJvclwiKVxyXG4gICAgICAgLy9zZXRlcnJtc2codHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50cmVxPWFzeW5jKHtjb250ZW50SWQsc2V0Y29udGVudCxzZXRlcnJtc2csc2V0d2luZG93fSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvJHtjb250ZW50SWR9YCk7XHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93fSkpeyBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgIHNldGNvbnRlbnQoZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gICAgICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRyZXE9YXN5bmMoe2NvbnRlbnRJZCxzZXRhY3RpdmVwcm9kdWNlLHNldGNvbW1lbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb21tZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcbiAgICAgICBzZXRjb21tZW50KGRhdGEuZGF0YSk7XHJcbiAgICAgICBzZXRhY3RpdmVwcm9kdWNlKGZhbHNlKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBzZXRlcnJtc2codHJ1ZSk7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkfSk9PntcclxuIFxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL3VzZXIvZ2V0dXNlcmRhdGFgLHtcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgXCJhdXRob3JpemF0aW9uXCI6YEJlYXJlciAke1Rva2VufWAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkLHNldHNwaW5uZXJ9KSl7IFxyXG5cclxuICAgICAgY29uc3QgbXlkYXRhPXsgXHJcbiAgICAgICAgVXNlcklkOmRhdGEudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgVXNlcm5hbWU6ZGF0YS51c2VyZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgVXNlcnN1cm5hbWU6ZGF0YS51c2VyZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICBVc2Vycm9sZTpkYXRhLnVzZXJkYXRhLnJvbGUsXHJcbiAgICAgICAgVXNlcmltYWdlOmRhdGEudXNlcmRhdGEuaW1hZ2V1cmwsXHJcbiAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRjb250ZXh0ZGF0YShteWRhdGEpO1xyXG4gICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgfSAgIFxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JidXJhZGFkdXJ1eW9yXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdldHVzZXJjb250ZW50PWFzeW5jKHtVc2VySWQscGFyYW1zLHNldGRhdGEsc2V0d2luZG93LHNldGVycm1zZyxvcmRlcixzZXRzdG9wc2Nyb2xsaW5nLGN1cnJlbnRkYXRhfSk9PntcclxuICBcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC91c2VyY29udGVudC8ke3BhcmFtc30vJHtVc2VySWR9LyR7b3JkZXJ9YCk7XHJcbiAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuICAgICAgIFxyXG4gICAgICAgaWYoZGF0YS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgIHNldHN0b3BzY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgICBjb25zdCBNeWRhdGE9Wy4uLmRhdGEuZGF0YV07XHJcbiAgICAgIC8vcHVzaCBtZXRvZHUgYmlyIGRpeml5aSBiaSAgciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgICBzZXRkYXRhKE15ZGF0YSk7XHJcbiAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhyb2l6ZWRcIil7XHJcbiAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGVjb250ZW50PWFzeW5jKHtzZXRkYXRhLGNhdG9nZXJ5LFVzZXJJZH0pPT57XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYGNvbnRlbnQvcHJvZmlsZWNvbnRlbnQvJHtjYXRvZ2VyeX0vJHtVc2VySWR9YCk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhfSkpeyBcclxuXHJcbiAgICAgICBzZXRkYXRhKGRhdGEuZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcil7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0dXNlcnByb2ZpbGU9YXN5bmMoe1VzZXJJZCxzZXR1c2VyZGF0YX0pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJwcm9maWxlLyR7VXNlcklkfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGlmKEVycm9yaGFuZGxlcih7ZGF0YX0pKXsgXHJcblxyXG4gICAgICAgc2V0dXNlcmRhdGEoZGF0YS51c2VyZGF0YSlcclxuXHJcbiAgICB9ICAgIFxyXG4gICAgZWxzZSBpZihkYXRhID09IFwiVW5hdXRocm9pemVkXCIpe1xyXG4gICAgICAgLy9cclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycm9yKXtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGV1c2VycmVsYXRpb249YXN5bmMoe1VzZXJJZCxGb2xsb3dlZElkLGNoZWNraWZmb2xsb3d9KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvY3JlYXRldXNlcnJlbGF0aW9uYCx7XHJcbiAgICAgIEZvbGxvd2VySWQ6VXNlcklkLFxyXG4gICAgICBGb2xsb3dlZElkOkZvbGxvd2VkSWQsXHJcbiAgICAgIGNoZWNraWZmb2xsb3c6Y2hlY2tpZmZvbGxvdyxcclxuICAgIH0pXHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSlcclxuICAgIHJldHVybjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybjtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVsYXRpb24gZXJyb3JcIilcclxuICAgICAgIC8vc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25yZXE9YXN5bmMoVXNlcklkKT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgbm90aWZpY2F0aW9uL2dldHJvd3MvJHtVc2VySWR9YCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiTk9UIERBVEEgIFwiK2RhdGEubXlkYXRhKTtcclxuXHJcbiAgXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbGF0aW9uIGVycm9yXCIpXHJcbiAgICAgICAvL3NldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudGNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0NvbnRlbnRjYXJkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZXJlcSxDcmVhdGVyZWxhdGlvbnJlcSxOb3RpZmljYXRpb25yZXF9IGZyb20gXCIuLi8uLi9BcGkvQXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLElucHV0TGFiZWwsU2VsZWN0LE1lbnVJdGVtLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IFNob3dmb2xsb3dlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9NYWluL1Nob3dmb2xsZXJcIjtcclxuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvTWFpbi9MZWFkZXJib2FyZCc7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiO1xyXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuXHJcblxyXG5cclxuY29uc3QgQ3NzVGV4dEZpZWxkID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICcmIC5NdWlTZWxlY3Qtcm9vdCc6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBGbGV4ZGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbm1heC13aWR0aDoxMjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcblxyXG5jb25zdCBzb2NrZXQ9aW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtteWRhdGF9KXtcclxuICAgXHJcbiAgICBjb25zdCB7Ym90dG9tfT11c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KVxyXG4gICAgY29uc3RbY29udGVudGRhdGEsc2V0Y29udGVudGRhdGFdPXVzZVN0YXRlKFsuLi5teWRhdGFdKTtcclxuICAgIGNvbnN0W29yZGVyLHNldG9yZGVyXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0W2Vycm9ybXNnLHNldGVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFthY3RpdmVsaWtlLHNldGFjdGl2ZWxpa2VdPXVzZVN0YXRlKClcclxuICAgIGNvbnN0W2xpc3Qsc2V0bGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N0b3ByZXF1ZXN0aW5nLHNldHN0b3ByZXFdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzcGlubmVyLHNldHNwaW5uZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgXHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTm90aWZ5XCIsKGRhdGEpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICBOb3RpZmljYXRpb25yZXEodXNlcmRhdGEuVXNlcklkKVxyXG5cclxuXHJcbiAgICAgICAgaWYoIXN0b3ByZXF1ZXN0aW5nICYmIGJvdHRvbSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgICAgICAgICBIb21lcmVxKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRkYXRhOmNvbnRlbnRkYXRhLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29udGVudGRhdGE6c2V0Y29udGVudGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjpvcmRlcixcclxuICAgICAgICAgICAgICAgIHNldHNwaW5uZXI6c2V0c3Bpbm5lcixcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJvcixcclxuICAgICAgICAgICAgICAgIHNldHN0b3ByZXE6c2V0c3RvcHJlcSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW29yZGVyXSlcclxuICAgIFxyXG4gICAgY29uc3Qgc2VuZGlvcmVxdWVzdD0oKT0+e1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJvdHRvbSlcclxuICAgICAgICBzZXRvcmRlcihteWRhdGEubGVuZ3RoKzEwKTtcclxuXHJcbiAgICB9LFtib3R0b21dKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZXJlbGF0aW9uPShwb3N0SWQsYXR0cmlidXRlLHR5cGVvZnJlbGF0aW9uLHVzZXJpZCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUscG9zdElkKVxyXG5cclxuICAgICAgICBDcmVhdGVyZWxhdGlvbnJlcSh7XHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIFBvc3RJZDpwb3N0SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTphdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHJlbGF0aW9udHlwZTp0eXBlb2ZyZWxhdGlvbixcclxuICAgICAgICAgICAgVXNlcklkb2Zjb250ZW50OnVzZXJpZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiMTE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kaW9yZXF1ZXN0fT7EsE8gUkVRVUVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lciA/IDxTcGlubmVyPjwvU3Bpbm5lcj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IGxpc3QubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U2hvd2ZvbGxvd2VyIHNldGxpc3Q9eygpPT5zZXRsaXN0KFtdKX0gbGlzdD17bGlzdH0+PC9TaG93Zm9sbG93ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGbGV4ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2IHN0eWxlPXt7cGFkZGluZzpcIjEwcHhcIixtYXhXaWR0aDpcIjY1MHB4XCIsaGVpZ2h0OmAke2xpc3QubGVuZ3RoID4gMCA/IFwiMTAwdmhcIiA6IFwiMTAwJVwifWAsb3ZlcmZsb3c6XCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRkYXRhLmxlbmd0aCAmJlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGRhdGEubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRjYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWg9e2NyZWF0ZXJlbGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3dpbmRvdz17KHN0YXRlb2ZsaXN0KT0+c2V0bGlzdChzdGF0ZW9mbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlPXtpdGVtLkxpa2V9Ly9idSBiaXIgb2JqZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0d2VldD17aXRlbS5SZXR3ZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17aXRlbS5hbGxjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRsYXRlcj17aXRlbS5SZWFkbGF0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fS8va2V5IG51bWFyYXPEsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZWltYWdlPXtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU5NDYxMC9wZXhlbHMtcGhvdG8tNTk0NjEwLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtbWFydGluLXAlQzMlQTljaHktNTk0NjEwLmpwZyZmbT1qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVpbWFnZT17XCJ5YXByYWsuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZT17aXRlbS5wZXJzb25hbCAhPT0gbnVsbCA/IGl0ZW0ucGVyc29uYWwuZmlyc3RuYW1lIDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzdXJuYW1lPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5sYXN0bmFtZSA6IFwibm90eWV0XCJ9Ly9iaXIgb2JqZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkPXtpdGVtLnBlcnNvbmFsICE9PSBudWxsID8gaXRlbS5wZXJzb25hbC5pZDogXCJub3R5ZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFkZXJib2FyZD48L0xlYWRlcmJvYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4ZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyo8U2VjdGlvbnBhcnQ+XHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwiLG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPkfDtm5kZXJpIFTDvHLDvDwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17dXNlc3R5bGVzLnJvb3R9PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGZWxzZWZlXCI+RmVsc2VmZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRhcmloXCI+VGFyaWg8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQml5b2xvamlcIj5UYXJpaDwvTWVudUl0ZW0+ICAgXHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgc3R5bGU9e3t3aWR0aDpcIjQwJVwifX0+XHJcbiAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgIDxJbnB1dExhYmVsPlPEsXJhbGFtYSDDlmzDp8O8dMO8PC9JbnB1dExhYmVsPlxyXG4gICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkxpa2VcIj5CZcSfZW5pIFNhecSxc8SxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRGF0ZVwiPlnDvGtsZW5tZSBUYXJpaGk8L01lbnVJdGVtPiBcclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0d2VldFwiPlJldHdlZXQgU2F5xLFzxLE8L01lbnVJdGVtPiAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9kaXY+XHJcbjxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wifX0+XHJcbiAgICA8QnV0dG9uIGVuZEljb249ezxTZWFyaEljb24+PC9TZWFyaEljb24+fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5BcmE8L0J1dHRvbj5cclxuPC9kaXY+XHJcbjwvU2VjdGlvbnBhcnQ+XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==