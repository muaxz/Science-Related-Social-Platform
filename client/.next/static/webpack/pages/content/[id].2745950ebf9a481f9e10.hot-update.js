webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./containers/pages/Content.js":
/*!*************************************!*\
  !*** ./containers/pages/Content.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/Globalstyles */ "./components/styledcomponents/Globalstyles.js");
/* harmony import */ var _Api_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/requests */ "./Api/requests.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pages/Content/Commentsection/Commentpart */ "./components/pages/Content/Commentsection/Commentpart.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\containers\\pages\\Content.js",
    _s = $RefreshSig$();










var Exteriorcontent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__Exteriorcontent",
  componentId: "t38n1c-0"
})(["background-color:", ";max-width:950px;margin:50px auto;width:100%"], function (_ref) {
  var iscomment = _ref.iscomment;
  return iscomment ? "" : "white";
});
_c = Exteriorcontent;
var Commentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__Commentdiv",
  componentId: "t38n1c-1"
})(["margin:50px auto;max-width:700px;"]);
_c2 = Commentdiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__ImageDiv",
  componentId: "t38n1c-2"
})(["position:relative;width:100%;height:400px;"]);
_c3 = ImageDiv;
var ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__ContentDiv",
  componentId: "t38n1c-3"
})(["margin-top:20px;padding:25px;"]);
_c4 = ContentDiv;
var ProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__ProfileDiv",
  componentId: "t38n1c-4"
})(["box-sizing:border-box;padding-left:25px;padding-top:15px;padding-bottom:15px;display:flex;align-items:center;"]);
_c5 = ProfileDiv;
var Attribute = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__Attribute",
  componentId: "t38n1c-5"
})(["display:", ";position:absolute;top:35px;right:35px;border-radius:7px;background-color:white;"], function (_ref2) {
  var active = _ref2.active;
  return active ? "block" : "none";
});
_c6 = Attribute;
var Attributeholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Content__Attributeholder",
  componentId: "t38n1c-6"
})(["display:flex;align-items:center;border-radius:7px;padding:5px;&:hover{background-color:#E2E3E3;cursor:pointer;}"]); //todo map array to create attribute list

_c7 = Attributeholder;
function Content(_ref3) {
  _s();

  var _this = this;

  var Contentdata = _ref3.Contentdata,
      comments = _ref3.comments,
      id = _ref3.id;
  console.log(Contentdata);

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([{
    icon: "fas fa-bookmark",
    desc: "Gönderiyi Kaydet"
  }, {
    icon: "fas fa-thumbs-up",
    desc: "Gönderiyi Beğen"
  }, {
    icon: "fas fa-retweet",
    desc: "Gönderiyi Profil Sayfamda Göster"
  }]),
      current = _useRef.current;

  var _useScroll = Object(_hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      bottom = _useScroll.bottom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Contentdata),
      content = _useState[0],
      setcontent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(comments),
      commentlist = _useState2[0],
      setcommentlist = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      numberofcomment = _useState3[0],
      setnumbercom = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState4[0],
      setactive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      actives = _useState5[0],
      seterrmsg = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      activeproduce = _useState6[0],
      setactiveproduce = _useState6[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_6__["createusercontext"]),
      userdata = _useContext.userdata; //const {id}=router.query;


  console.log(commentlist);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (numberofcomment > 0) {
      //ilk sayfa geldiginde isteği önlemk için
      setactiveproduce(true);
      Object(_Api_requests__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
        contentId: id,
        setcomment: setcommentlist,
        commentlist: commentlist,
        last: true,
        order: commentlist.length + 10,
        setactiveproduce: setactiveproduce,
        seterrmsg: seterrmsg
      });
    }
  }, [numberofcomment]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (bottom) {
      Object(_Api_requests__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
        contentId: id,
        setcomment: setcommentlist,
        commentlist: commentlist,
        last: false,
        order: commentlist.length + 10,
        setactiveproduce: setactiveproduce,
        seterrmsg: seterrmsg
      });
    }
  }, [bottom]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //changeable
    setcontent(Contentdata);
    setcommentlist(comments);
  }, [id]);
  var Produce = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (message) {
    console.log(content.personal.id);
    Object(_Api_requests__WEBPACK_IMPORTED_MODULE_5__["Producecommentreq"])({
      ContentId: id,
      UserId: userdata.UserId,
      Message: message,
      TakerId: content.personal.id,
      setnumbercom: setnumbercom,
      seterrmsg: seterrmsg
    });
  }, [userdata.UserId]);

  var Answerhandler = function Answerhandler(Answer, UpperId, MainparentID) {
    console.log("BURADAAA");
    Object(_Api_requests__WEBPACK_IMPORTED_MODULE_5__["Commentanswerreq"])({
      UppercommentId: UpperId,
      UserId: userdata.UserId,
      Answer: Answer,
      ContentId: id,
      //post
      MainparentID: MainparentID,
      setcommentlist: setcommentlist,
      commentlist: commentlist
    });
  };

  var EditCommentFunc = function EditCommentFunc(_ref4) {
    var commentID = _ref4.commentID,
        message = _ref4.message,
        setloading = _ref4.setloading,
        seteditcomment = _ref4.seteditcomment;
    console.log("burada");
    Object(_Api_requests__WEBPACK_IMPORTED_MODULE_5__["Editcomment"])({
      commentID: commentID,
      message: message,
      setloading: setloading,
      seteditcomment: seteditcomment
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      maxWidth: "950px",
      margin: "auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exteriorcontent, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/car.jpg",
            style: {
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            activefunc: function activefunc() {
              return setactive(!active);
            },
            className: "fas fa-ellipsis-h",
            Iconconfig: {
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              borderRadius: "50%",
              width: "25px",
              height: "25px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attribute, {
            active: active,
            children: current.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Attributeholder, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  className: item.icon,
                  Iconconfig: {
                    width: "28px",
                    height: "28px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginLeft: "5px",
                    fontSize: "13px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 33
                }, _this)]
              }, item.icon, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_Globalstyles__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            profile: "/black.jpg",
            width: "40px",
            height: "40px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Duhan \xD6zt\xFCrk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "#5c6b73",
                fontSize: "15px"
              },
              children: "12/08/2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            style: {
              marginBottom: "10px",
              color: "#e63946"
            },
            children: " The state plans to pay around 20 percent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px"
            },
            children: "The structre of the culture in ottoman empire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              wordBreak: "break-word"
            },
            id: "editor",
            className: "ck-content",
            children: react_html_parser__WEBPACK_IMPORTED_MODULE_9___default()(Contentdata.content)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      style: {
        clear: "right"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        clear: "right"
      },
      children: commentlist.length + " Yorum"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Commentdiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        Editcommenthandler: EditCommentFunc,
        handleanswer: Answerhandler,
        spinner: activeproduce,
        list: commentlist,
        Producecomment: Produce
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 9
  }, this);
}

_s(Content, "zxfcipFpwxRUcUr2SBxW0ofv9TM=", false, function () {
  return [_hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c8 = Content;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Exteriorcontent");
$RefreshReg$(_c2, "Commentdiv");
$RefreshReg$(_c3, "ImageDiv");
$RefreshReg$(_c4, "ContentDiv");
$RefreshReg$(_c5, "ProfileDiv");
$RefreshReg$(_c6, "Attribute");
$RefreshReg$(_c7, "Attributeholder");
$RefreshReg$(_c8, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsImlzY29tbWVudCIsIkNvbW1lbnRkaXYiLCJJbWFnZURpdiIsIkNvbnRlbnREaXYiLCJQcm9maWxlRGl2IiwiQXR0cmlidXRlIiwiYWN0aXZlIiwiQXR0cmlidXRlaG9sZGVyIiwiQ29udGVudCIsIkNvbnRlbnRkYXRhIiwiY29tbWVudHMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VSZWYiLCJpY29uIiwiZGVzYyIsImN1cnJlbnQiLCJ1c2VTY3JvbGwiLCJib3R0b20iLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRjb250ZW50IiwiY29tbWVudGxpc3QiLCJzZXRjb21tZW50bGlzdCIsIm51bWJlcm9mY29tbWVudCIsInNldG51bWJlcmNvbSIsInNldGFjdGl2ZSIsImFjdGl2ZXMiLCJzZXRlcnJtc2ciLCJhY3RpdmVwcm9kdWNlIiwic2V0YWN0aXZlcHJvZHVjZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidXNlRWZmZWN0IiwiQ29tbWVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbW1lbnQiLCJsYXN0Iiwib3JkZXIiLCJsZW5ndGgiLCJQcm9kdWNlIiwidXNlQ2FsbGJhY2siLCJtZXNzYWdlIiwicGVyc29uYWwiLCJQcm9kdWNlY29tbWVudHJlcSIsIkNvbnRlbnRJZCIsIlVzZXJJZCIsIk1lc3NhZ2UiLCJUYWtlcklkIiwiQW5zd2VyaGFuZGxlciIsIkFuc3dlciIsIlVwcGVySWQiLCJNYWlucGFyZW50SUQiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJFZGl0Q29tbWVudEZ1bmMiLCJjb21tZW50SUQiLCJzZXRsb2FkaW5nIiwic2V0ZWRpdGNvbW1lbnQiLCJFZGl0Y29tbWVudCIsIm1heFdpZHRoIiwibWFyZ2luIiwib2JqZWN0Rml0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwid29yZEJyZWFrIiwiUGFyc2VyIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLGVBQWUsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwRUFDRjtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxFQUFILEdBQVEsT0FBaEM7QUFBQSxDQURFLENBQXJCO0tBQU1ILGU7QUFPTixJQUFNSSxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUNBQWhCO01BQU1FLFU7QUFLTixJQUFNQyxRQUFRLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0RBQWQ7TUFBTUcsUTtBQU1OLElBQU1DLFVBQVUsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7TUFBTUksVTtBQUtOLElBQU1DLFVBQVUsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxSEFBaEI7TUFBTUssVTtBQVNOLElBQU1DLFNBQVMsR0FBQ1AseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxR0FDTDtBQUFBLE1BQUVPLE1BQUYsU0FBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURLLENBQWY7TUFBTUQsUztBQVdOLElBQU1FLGVBQWUsR0FBQ1QseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx1SEFBckIsQyxDQVVBOztNQVZNUSxlO0FBWVMsU0FBU0Ms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O0FBQUEsa0JBRkosZUFHSTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0MsdUJBQVMsRUFBQztBQUFYLGFBQVo7QUFBc0MsY0FBRSxFQUFDLFFBQXpDO0FBQWtELHFCQUFTLEVBQUMsWUFBNUQ7QUFBQSxzQkFFS0Msd0RBQU0sQ0FBQ3JFLFdBQVcsQ0FBQ1ksT0FBYjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFrQ0k7QUFBSSxXQUFLLEVBQUU7QUFBQzBELGFBQUssRUFBQztBQUFQO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDSixlQW1DSTtBQUFHLFdBQUssRUFBRTtBQUFDQSxhQUFLLEVBQUM7QUFBUCxPQUFWO0FBQUEsZ0JBQTRCeEQsV0FBVyxDQUFDa0IsTUFBWixHQUFvQjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNKLGVBb0NJLHFFQUFDLFVBQUQ7QUFBQSw2QkFDSSxxRUFBQyw0RkFBRDtBQUFjLDBCQUFrQixFQUFFZ0IsZUFBbEM7QUFBbUQsb0JBQVksRUFBRU4sYUFBakU7QUFBZ0YsZUFBTyxFQUFFckIsYUFBekY7QUFBd0csWUFBSSxFQUFFUCxXQUE5RztBQUEySCxzQkFBYyxFQUFFbUI7QUFBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQ0g7O0dBekl1QmxDLE87VUFHSFUscUQ7OztNQUhHVixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS4yNzQ1OTUwZWJmOWE0ODFmOWUxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWYsIHVzZUNvbnRleHQsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL0dsb2JhbHN0eWxlc1wiO1xyXG5pbXBvcnQge1Byb2R1Y2Vjb21tZW50cmVxLENvbW1lbnRyZXEsQ29tbWVudGFuc3dlcnJlcSxFZGl0Y29tbWVudH0gZnJvbSBcIi4uLy4uL0FwaS9yZXF1ZXN0c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgQ29tbWVudHBhcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL0NvbW1lbnRwYXJ0JztcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCJcclxuaW1wb3J0IFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmNvbnRlbnQ9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiXCIgOiBcIndoaXRlXCJ9O1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjo1MHB4IGF1dG87XHJcbndpZHRoOjEwMCVcclxuYFxyXG5cclxuY29uc3QgQ29tbWVudGRpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW46NTBweCBhdXRvO1xyXG5tYXgtd2lkdGg6NzAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5wYWRkaW5nOjI1cHg7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVEaXY9c3R5bGVkLmRpdmBcclxuYm94LXNpemluZzpib3JkZXItYm94O1xyXG5wYWRkaW5nLWxlZnQ6MjVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojRTJFM0UzO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vL3RvZG8gbWFwIGFycmF5IHRvIGNyZWF0ZSBhdHRyaWJ1dGUgbGlzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7Q29udGVudGRhdGEsY29tbWVudHMsaWR9KXtcclxuICAgIGNvbnNvbGUubG9nKENvbnRlbnRkYXRhKVxyXG4gICAgY29uc3Qge2N1cnJlbnR9PXVzZVJlZihbe2ljb246XCJmYXMgZmEtYm9va21hcmtcIixkZXNjOlwiR8O2bmRlcml5aSBLYXlkZXRcIn0se2ljb246XCJmYXMgZmEtdGh1bWJzLXVwXCIsZGVzYzpcIkfDtm5kZXJpeWkgQmXEn2VuXCJ9LHtpY29uOlwiZmFzIGZhLXJldHdlZXRcIixkZXNjOlwiR8O2bmRlcml5aSBQcm9maWwgU2F5ZmFtZGEgR8O2c3RlclwifV0pXHJcbiAgICBjb25zdCB7Ym90dG9tfSA9IHVzZVNjcm9sbCgpO1xyXG4gICAgY29uc3QgW2NvbnRlbnQsc2V0Y29udGVudF09dXNlU3RhdGUoQ29udGVudGRhdGEpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRsaXN0LHNldGNvbW1lbnRsaXN0XT11c2VTdGF0ZShjb21tZW50cyk7XHJcbiAgICBjb25zdCBbbnVtYmVyb2Zjb21tZW50LHNldG51bWJlcmNvbV09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZXMsc2V0ZXJybXNnXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWN0aXZlcHJvZHVjZSxzZXRhY3RpdmVwcm9kdWNlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9PXVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgLy9jb25zdCB7aWR9PXJvdXRlci5xdWVyeTtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRsaXN0KVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGlmKG51bWJlcm9mY29tbWVudCA+IDApe1xyXG4gICAgICAgICAgICAvL2lsayBzYXlmYSBnZWxkaWdpbmRlIGlzdGXEn2kgw7ZubGVtayBpw6dpblxyXG4gICAgICAgICAgICBzZXRhY3RpdmVwcm9kdWNlKHRydWUpO1xyXG4gICAgICAgICAgICBDb21tZW50cmVxKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgICAgIHNldGNvbW1lbnQ6c2V0Y29tbWVudGxpc3QsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50bGlzdDpjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW251bWJlcm9mY29tbWVudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoYm90dG9tKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOmlkLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29tbWVudDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRsaXN0OmNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAvL2NoYW5nZWFibGVcclxuICAgICAgIHNldGNvbnRlbnQoQ29udGVudGRhdGEpO1xyXG4gICAgICAgc2V0Y29tbWVudGxpc3QoY29tbWVudHMpO1xyXG4gICAgfSxbaWRdKVxyXG4gICAgXHJcbiAgICBjb25zdCBQcm9kdWNlPXVzZUNhbGxiYWNrKChtZXNzYWdlKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQucGVyc29uYWwuaWQpXHJcbiAgICAgICAgUHJvZHVjZWNvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICBDb250ZW50SWQ6aWQsXHJcbiAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6bWVzc2FnZSxcclxuICAgICAgICAgICAgVGFrZXJJZDpjb250ZW50LnBlcnNvbmFsLmlkLFxyXG4gICAgICAgICAgICBzZXRudW1iZXJjb206c2V0bnVtYmVyY29tLFxyXG4gICAgICAgICAgICBzZXRlcnJtc2c6c2V0ZXJybXNnLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbdXNlcmRhdGEuVXNlcklkXSlcclxuXHJcbiAgICBjb25zdCBBbnN3ZXJoYW5kbGVyPShBbnN3ZXIsVXBwZXJJZCxNYWlucGFyZW50SUQpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJVUkFEQUFBXCIpXHJcbiAgICAgICAgICBDb21tZW50YW5zd2VycmVxKHtcclxuICAgICAgICAgICAgICBVcHBlcmNvbW1lbnRJZDpVcHBlcklkLFxyXG4gICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgQW5zd2VyOkFuc3dlcixcclxuICAgICAgICAgICAgICBDb250ZW50SWQ6aWQsLy9wb3N0XHJcbiAgICAgICAgICAgICAgTWFpbnBhcmVudElEOk1haW5wYXJlbnRJRCxcclxuICAgICAgICAgICAgICBzZXRjb21tZW50bGlzdDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICBjb21tZW50bGlzdDpjb21tZW50bGlzdFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRWRpdENvbW1lbnRGdW5jPSh7Y29tbWVudElELG1lc3NhZ2Usc2V0bG9hZGluZyxzZXRlZGl0Y29tbWVudH0pPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICAgICAgICBFZGl0Y29tbWVudCh7XHJcbiAgICAgICAgICAgIGNvbW1lbnRJRDpjb21tZW50SUQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6bWVzc2FnZSxcclxuICAgICAgICAgICAgc2V0bG9hZGluZzpzZXRsb2FkaW5nLFxyXG4gICAgICAgICAgICBzZXRlZGl0Y29tbWVudDpzZXRlZGl0Y29tbWVudFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOlwiOTUwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPEV4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2FyLmpwZ1wifSBzdHlsZT17e29iamVjdEZpdDpcImNvdmVyXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0gPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAgYWN0aXZlZnVuYz17KCk9PnNldGFjdGl2ZSghYWN0aXZlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjEwcHhcIixyaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIyNXB4XCIsaGVpZ2h0OlwiMjVweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlaG9sZGVyIGtleT17aXRlbS5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMjhweFwiLGhlaWdodDpcIjI4cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixmb250U2l6ZTpcIjEzcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGVob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHVoYW4gw5Z6dMO8cms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzVjNmI3M1wiLGZvbnRTaXplOlwiMTVweFwifX0+MTIvMDgvMjAyMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI2U2Mzk0NlwifX0+IFRoZSBzdGF0ZSBwbGFucyB0byBwYXkgYXJvdW5kIDIwIHBlcmNlbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5UaGUgc3RydWN0cmUgb2YgdGhlIGN1bHR1cmUgaW4gb3R0b21hbiBlbXBpcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0gaWQ9XCJlZGl0b3JcIiBjbGFzc05hbWU9XCJjay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtQYXJzZXIoQ29udGVudGRhdGEuY29udGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgICAgICAgICA8aHIgc3R5bGU9e3tjbGVhcjpcInJpZ2h0XCJ9fT48L2hyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NsZWFyOlwicmlnaHRcIn19Pntjb21tZW50bGlzdC5sZW5ndGgrIFwiIFlvcnVtXCJ9PC9wPlxyXG4gICAgICAgICAgICA8Q29tbWVudGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50cGFydCAgRWRpdGNvbW1lbnRoYW5kbGVyPXtFZGl0Q29tbWVudEZ1bmN9IGhhbmRsZWFuc3dlcj17QW5zd2VyaGFuZGxlcn0gc3Bpbm5lcj17YWN0aXZlcHJvZHVjZX0gbGlzdD17Y29tbWVudGxpc3R9IFByb2R1Y2Vjb21tZW50PXtQcm9kdWNlfT48L0NvbW1lbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0NvbW1lbnRkaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==