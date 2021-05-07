webpackHotUpdate_N_E("pages/index",{

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/*! exports provided: loginreq, resigterreq, producereq, Homereq, Createrelationreq, Contentreq, Contextdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginreq", function() { return loginreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resigterreq", function() { return resigterreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producereq", function() { return producereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homereq", function() { return Homereq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createrelationreq", function() { return Createrelationreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contentreq", function() { return Contentreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contextdata", function() { return Contextdata; });
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
      setlogged = _ref.setlogged;

  if (data && data.error) {
    seterrmsg(true);
    setwindow(true);
    return false;
  } else if (data == "Unauthorized") {
    setcontextdata({});
    setlogged(false);
    localStorage.removeItem("TOKEN");
    setspinner(true);
  } else {
    return true;
  }
};

_c = Errorhandler;
var loginreq = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {
    var setlogged, setuserdata, userdata, router, seterrmsg, setbackenderror, setactive, _yield$axios$post, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setlogged = _ref2.setlogged, setuserdata = _ref2.setuserdata, userdata = _ref2.userdata, router = _ref2.router, seterrmsg = _ref2.seterrmsg, setbackenderror = _ref2.setbackenderror, setactive = _ref2.setactive;
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
var Homereq = /*#__PURE__*/function () {
  var _ref9 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(_ref8) {
    var currentdata, seterrmsg, setwindow, setcontentdata, order, _yield$axios$get, data, Current, Mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            currentdata = _ref8.currentdata, seterrmsg = _ref8.seterrmsg, setwindow = _ref8.setwindow, setcontentdata = _ref8.setcontentdata, order = _ref8.order;
            _context4.prev = 1;
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/gethome/".concat(order));

          case 4:
            _yield$axios$get = _context4.sent;
            data = _yield$axios$get.data;
            console.log(data.data);

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context4.next = 13;
              break;
            }

            Current = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentdata);
            Mydata = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data); //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

            setcontentdata(Current.concat(Mydata));
            _context4.next = 14;
            break;

          case 13:
            return _context4.abrupt("return");

          case 14:
            _context4.next = 19;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](1);
            seterrmsg(true);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 16]]);
  }));

  return function Homereq(_x4) {
    return _ref9.apply(this, arguments);
  };
}();
_c2 = Homereq;
var Createrelationreq = /*#__PURE__*/function () {
  var _ref10 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(UserId, PostId, attribute, seterrmsg, setwindow) {
    var _yield$axios$post4, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("content/createrelation", {
              UserId: UserId,
              PostId: PostId,
              attribute: attribute
            });

          case 3:
            _yield$axios$post4 = _context5.sent;
            data = _yield$axios$post4.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context5.next = 8;
              break;
            }

            _context5.next = 9;
            break;

          case 8:
            return _context5.abrupt("return");

          case 9:
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            seterrmsg(true);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function Createrelationreq(_x5, _x6, _x7, _x8, _x9) {
    return _ref10.apply(this, arguments);
  };
}();
_c3 = Createrelationreq;
var Contentreq = /*#__PURE__*/function () {
  var _ref12 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(_ref11) {
    var contentId, setcontent, seterrmsg, setwindow, _yield$axios$get2, data;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            contentId = _ref11.contentId, setcontent = _ref11.setcontent, seterrmsg = _ref11.seterrmsg, setwindow = _ref11.setwindow;
            _context6.prev = 1;
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("content/".concat(contentId));

          case 4:
            _yield$axios$get2 = _context6.sent;
            data = _yield$axios$get2.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow
            })) {
              _context6.next = 11;
              break;
            }

            setcontent(data.data);
            console.log("buradaaaaaaaa");
            _context6.next = 15;
            break;

          case 11:
            if (!(data == "Unauthroized")) {
              _context6.next = 14;
              break;
            }

            _context6.next = 15;
            break;

          case 14:
            return _context6.abrupt("return");

          case 15:
            _context6.next = 20;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](1);
            seterrmsg(true);

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 17]]);
  }));

  return function Contentreq(_x10) {
    return _ref12.apply(this, arguments);
  };
}();
_c4 = Contentreq;
var Contextdata = /*#__PURE__*/function () {
  var _ref14 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(_ref13) {
    var Token, setspinner, setcontextdata, seterrmsg, setwindow, setlogged, _yield$axios$get3, data, mydata;

    return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            Token = _ref13.Token, setspinner = _ref13.setspinner, setcontextdata = _ref13.setcontextdata, seterrmsg = _ref13.seterrmsg, setwindow = _ref13.setwindow, setlogged = _ref13.setlogged;
            _context7.prev = 1;
            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("user/getuserdata", {
              headers: {
                "authorization": "Bearer ".concat(Token)
              }
            });

          case 4:
            _yield$axios$get3 = _context7.sent;
            data = _yield$axios$get3.data;

            if (!Errorhandler({
              data: data,
              seterrmsg: seterrmsg,
              setwindow: setwindow,
              setcontextdata: setcontextdata,
              setlogged: setlogged,
              setspinner: setspinner
            })) {
              _context7.next = 13;
              break;
            }

            mydata = {
              Username: data.userdata.firstname,
              Usersurname: data.userdata.usersurname,
              Userrole: data.userdata.role,
              Userimage: data.userdata.imageurl
            };
            setcontextdata(mydata);
            setspinner(true);
            setlogged(true);
            _context7.next = 14;
            break;

          case 13:
            return _context7.abrupt("return");

          case 14:
            _context7.next = 19;
            break;

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 16]]);
  }));

  return function Contextdata(_x11) {
    return _ref14.apply(this, arguments);
  };
}();
_c5 = Contextdata;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Errorhandler");
$RefreshReg$(_c2, "Homereq");
$RefreshReg$(_c3, "Createrelationreq");
$RefreshReg$(_c4, "Contentreq");
$RefreshReg$(_c5, "Contextdata");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQXBpL0FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkVycm9yaGFuZGxlciIsImRhdGEiLCJzZXRlcnJtc2ciLCJzZXR3aW5kb3ciLCJzZXRjb250ZXh0ZGF0YSIsInNldGxvZ2dlZCIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldHNwaW5uZXIiLCJsb2dpbnJlcSIsInNldHVzZXJkYXRhIiwidXNlcmRhdGEiLCJyb3V0ZXIiLCJzZXRiYWNrZW5kZXJyb3IiLCJzZXRhY3RpdmUiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIndyb25nIiwiVXNlcmRhdGEiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwicmVzaWd0ZXJyZXEiLCJleGlzdCIsInByb2R1Y2VyZXEiLCJjb250ZW50ZGF0YSIsIkhvbWVyZXEiLCJjdXJyZW50ZGF0YSIsInNldGNvbnRlbnRkYXRhIiwib3JkZXIiLCJnZXQiLCJDdXJyZW50IiwiTXlkYXRhIiwiY29uY2F0IiwiQ3JlYXRlcmVsYXRpb25yZXEiLCJVc2VySWQiLCJQb3N0SWQiLCJhdHRyaWJ1dGUiLCJDb250ZW50cmVxIiwiY29udGVudElkIiwic2V0Y29udGVudCIsIkNvbnRleHRkYXRhIiwiVG9rZW4iLCJoZWFkZXJzIiwibXlkYXRhIiwiVXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJVc2Vyc3VybmFtZSIsInVzZXJzdXJuYW1lIiwiVXNlcnJvbGUiLCJyb2xlIiwiVXNlcmltYWdlIiwiaW1hZ2V1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBSUEsSUFBTUMsWUFBWSxHQUFDLFNBQWJBLFlBQWEsT0FBdUQ7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBaERDLFNBQWdELFFBQWhEQSxT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QUNwRCxJQUFJLENBQUNXLFFBQUwsQ0FBYzBDO0FBSmIsYUFaTTtBQW1CbkJsRCwwQkFBYyxDQUFDMEMsTUFBRCxDQUFkO0FBQ0FyQyxzQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBSixxQkFBUyxDQUFDLElBQUQsQ0FBVDtBQXJCbUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE4Qm5CWSxtQkFBTyxDQUFDQyxHQUFSOztBQTlCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBWHlCLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7TUFBTUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjA1MGQ3NjEwNGY5N2Q4MmUwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFcnJvcmhhbmRsZXI9KHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0Y29udGV4dGRhdGEsc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgIGlmKGRhdGEgJiYgZGF0YS5lcnJvcil7XHJcbiAgICAgIHNldGVycm1zZyh0cnVlKVxyXG4gICAgICBzZXR3aW5kb3codHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGRhdGEgPT0gXCJVbmF1dGhvcml6ZWRcIil7XHJcbiAgICAgIHNldGNvbnRleHRkYXRhKHt9KTtcclxuICAgICAgc2V0bG9nZ2VkKGZhbHNlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUT0tFTlwiKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2lucmVxPWFzeW5jKHtzZXRsb2dnZWQsc2V0dXNlcmRhdGEsdXNlcmRhdGEscm91dGVyLHNldGVycm1zZyxzZXRiYWNrZW5kZXJyb3Isc2V0YWN0aXZlfSk9PntcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIse3VzZXJkYXRhOnVzZXJkYXRhfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmKGRhdGEud3JvbmcgPT0gXCJXUFwiKXtcclxuXHJcbiAgICAgICAgc2V0YmFja2VuZGVycm9yKFwiV1BcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZGF0YS53cm9uZyA9PSBcIldFXCIpe1xyXG5cclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJXRVwiKVxyXG4gICAgICAgIHNldGFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBzZXRsb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0dXNlcmRhdGEoZGF0YS5Vc2VyZGF0YSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPS0VOXCIsZGF0YS50b2tlbik7Ly9odHRwIGNvb2tpZSBvbmx5IGlsZSBzdG9yZSBlZGljZXpcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2lndGVycmVxPWFzeW5jKHtzZXRiYWNrZW5kZXJyb3IsdXNlcmRhdGEsc2V0YWN0aXZlLHNldGVycm1zZ30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIHRyeXtcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvcmVnaXN0ZXJcIix7dXNlcmRhdGE6dXNlcmRhdGF9KVxyXG4gICAgXHJcbiAgICBpZihkYXRhLmV4aXN0KXtcclxuICAgICAgICBzZXRiYWNrZW5kZXJyb3IoXCJFWMSwU1RcIilcclxuICAgICAgICBzZXRhY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYcWfYXLEsWzEsSBrYXnEsXRcIilcclxuICAgIH1cclxuICB9Y2F0Y2goZXJyKXtcclxuICAgICAgc2V0ZXJybXNnKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydW4gdmFyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y2VyZXE9YXN5bmMoe2NvbnRlbnRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3cscm91dGVyfSk9PntcclxuICB0cnl7XHJcbiAgICBcclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoXCIvY29udGVudC9wcm9kdWNlXCIse2NvbnRlbnRkYXRhOmNvbnRlbnRkYXRhfSlcclxuICAgIFxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldHdpbmRvdyxzZXRlcnJtc2d9KSl7XHJcbiAgICAgICAgc2V0d2luZG93KHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGUvY29udGVudFwiKVxyXG4gICAgICAgIC8vd2Ugcm91dGUgacWfbGVtaVxyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRlcnJtc2codHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcmVxPWFzeW5jKHtjdXJyZW50ZGF0YSxzZXRlcnJtc2csc2V0d2luZG93LHNldGNvbnRlbnRkYXRhLG9yZGVyfSk9PntcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgY29udGVudC9nZXRob21lLyR7b3JkZXJ9YClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgaWYoRXJyb3JoYW5kbGVyKHtkYXRhLHNldGVycm1zZyxzZXR3aW5kb3d9KSl7XHJcblxyXG4gICAgICBjb25zdCBDdXJyZW50PVsuLi5jdXJyZW50ZGF0YV07XHJcbiAgICAgIGNvbnN0IE15ZGF0YT1bLi4uZGF0YS5kYXRhXTtcclxuICAgICAgLy9wdXNoIG1ldG9kdSBiaXIgZGl6aXlpIGJpciBkaXppbmluIGnDp2luZSBwdXNobHV5b3IgZmFrYXQgY29uY2F0IGVsZW1hbmxhcsSxXHJcbiAgICAgIHNldGNvbnRlbnRkYXRhKEN1cnJlbnQuY29uY2F0KE15ZGF0YSkpO1xyXG4gICAgfSAgICBcclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgc2V0ZXJybXNnKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVyZWxhdGlvbnJlcT1hc3luYyhVc2VySWQsUG9zdElkLGF0dHJpYnV0ZSxzZXRlcnJtc2csc2V0d2luZG93KT0+e1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoYGNvbnRlbnQvY3JlYXRlcmVsYXRpb25gLHtcclxuICAgICAgVXNlcklkOlVzZXJJZCxcclxuICAgICAgUG9zdElkOlBvc3RJZCxcclxuICAgICAgYXR0cmlidXRlOmF0dHJpYnV0ZVxyXG4gICAgfSlcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcbiAgICAgICAgLy8uLi5cclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudHJlcT1hc3luYyh7Y29udGVudElkLHNldGNvbnRlbnQsc2V0ZXJybXNnLHNldHdpbmRvd30pPT57XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3R7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGBjb250ZW50LyR7Y29udGVudElkfWApO1xyXG4gICAgXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvd30pKXsgXHJcblxyXG4gICAgICAgc2V0Y29udGVudChkYXRhLmRhdGEpXHJcbiAgICAgICBjb25zb2xlLmxvZyhcImJ1cmFkYWFhYWFhYWFcIik7XHJcblxyXG4gICAgfSAgICBcclxuICAgIGVsc2UgaWYoZGF0YSA9PSBcIlVuYXV0aHJvaXplZFwiKXtcclxuICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHNldGVycm1zZyh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dGRhdGE9YXN5bmMgKHtUb2tlbixzZXRzcGlubmVyLHNldGNvbnRleHRkYXRhLHNldGVycm1zZyxzZXR3aW5kb3csc2V0bG9nZ2VkfSk9PntcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KGB1c2VyL2dldHVzZXJkYXRhYCx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihFcnJvcmhhbmRsZXIoe2RhdGEsc2V0ZXJybXNnLHNldHdpbmRvdyxzZXRjb250ZXh0ZGF0YSxzZXRsb2dnZWQsc2V0c3Bpbm5lcn0pKXsgXHJcbiAgIFxyXG4gICAgICBjb25zdCBteWRhdGE9e1xyXG4gICAgICAgIFVzZXJuYW1lOmRhdGEudXNlcmRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgIFVzZXJzdXJuYW1lOmRhdGEudXNlcmRhdGEudXNlcnN1cm5hbWUsXHJcbiAgICAgICAgVXNlcnJvbGU6ZGF0YS51c2VyZGF0YS5yb2xlLFxyXG4gICAgICAgIFVzZXJpbWFnZTpkYXRhLnVzZXJkYXRhLmltYWdldXJsLFxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0Y29udGV4dGRhdGEobXlkYXRhKTtcclxuICAgICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgICAgc2V0bG9nZ2VkKHRydWUpO1xyXG4gICAgICBcclxuICAgIH0gICBcclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=