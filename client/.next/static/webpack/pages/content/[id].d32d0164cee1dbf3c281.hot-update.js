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
/* harmony import */ var _components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api/Api */ "./Api/Api.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pages/Content/Commentsection/Commentpart */ "./components/pages/Content/Commentsection/Commentpart.js");
/* harmony import */ var _hooks_Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/Scroll */ "./hooks/Scroll.js");


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
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
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
      Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentreq"])({
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
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Producecommentreq"])({
      ContentId: id,
      UserId: userdata.UserId,
      Message: message,
      TakerId: content.personal.id,
      setnumbercom: setnumbercom,
      seterrmsg: seterrmsg
    });
  }, [userdata.UserId]);

  var Answerhandler = function Answerhandler(Answer, UpperId) {
    console.log("BURADAAA");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentanswerreq"])({
      UppercommentId: UpperId,
      UserId: userdata.UserId,
      Answer: Answer,
      ContentId: id
    });
  };

  var EditCommentFunc = function EditCommentFunc(_ref4) {
    var commentID = _ref4.commentID,
        message = _ref4.message;
    console.log("burada");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Editcomment"])({
      commentID: commentID,
      message: message
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
            lineNumber: 162,
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
            lineNumber: 163,
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
                  lineNumber: 167,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginLeft: "5px",
                    fontSize: "13px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 33
                }, _this)]
              }, item.icon, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            profile: "/black.jpg",
            width: "40px",
            height: "40px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Duhan \xD6zt\xFCrk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "#5c6b73",
                fontSize: "15px"
              },
              children: "12/08/2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
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
            lineNumber: 182,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px"
            },
            children: "The structre of the culture in ottoman empire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "The state plans to pay around 20 percent of the project from its central budget. The rest will come from a $1.5 billion Chinese bank loan to Hungary. The documents say that all the work will be done by Chinese, not Hungarian, workers and all the material will be Chinese. \u201CThe Chinese are doing everything, while we\u2019re doing only one thing: paying,\u201D Karacsony said. Hungary\u2019s government follows the economic thinking known as \u201CEastern Opening.\u201D It favors increased diplomacy and trade with countries like China, Russia, Turkey and others in Central Asia. Although it joined the European Union in 2004, the Orban government often has disputes with other E.U. members. Peter Kreko is the director of the Budapest-based research company Political Capital. He believes the Fudan project is part of China\u2019s efforts to increase soft power. And he said the project could help China\u2019s spy operations. Hungary is a popular place for Russian and Chinese spies because the government shows, Kreko said, \u201Cthe lack of willingness of intelligence forces to push back malign foreign influence.\u201D Neither the Hungarian government\u2019s spokesperson nor the ministry leading the project answered requests for comments."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: commentlist.length + " Yorum"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
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
        lineNumber: 205,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsImlzY29tbWVudCIsIkNvbW1lbnRkaXYiLCJJbWFnZURpdiIsIkNvbnRlbnREaXYiLCJQcm9maWxlRGl2IiwiQXR0cmlidXRlIiwiYWN0aXZlIiwiQXR0cmlidXRlaG9sZGVyIiwiQ29udGVudCIsIkNvbnRlbnRkYXRhIiwiY29tbWVudHMiLCJpZCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwiY3VycmVudCIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudCIsInNldGNvbnRlbnQiLCJjb21tZW50bGlzdCIsInNldGNvbW1lbnRsaXN0IiwibnVtYmVyb2Zjb21tZW50Iiwic2V0bnVtYmVyY29tIiwic2V0YWN0aXZlIiwiYWN0aXZlcyIsInNldGVycm1zZyIsImFjdGl2ZXByb2R1Y2UiLCJzZXRhY3RpdmVwcm9kdWNlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiQ29tbWVudHJlcSIsImNvbnRlbnRJZCIsInNldGNvbW1lbnQiLCJsYXN0Iiwib3JkZXIiLCJsZW5ndGgiLCJQcm9kdWNlIiwidXNlQ2FsbGJhY2siLCJtZXNzYWdlIiwicGVyc29uYWwiLCJQcm9kdWNlY29tbWVudHJlcSIsIkNvbnRlbnRJZCIsIlVzZXJJZCIsIk1lc3NhZ2UiLCJUYWtlcklkIiwiQW5zd2VyaGFuZGxlciIsIkFuc3dlciIsIlVwcGVySWQiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJFZGl0Q29tbWVudEZ1bmMiLCJjb21tZW50SUQiLCJFZGl0Y29tbWVudCIsIm1heFdpZHRoIiwibWFyZ2luIiwib2JqZWN0Rml0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLGVBQWUsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwRUFDRjtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxFQUFILEdBQVEsT0FBaEM7QUFBQSxDQURFLENBQXJCO0tBQU1ILGU7QUFPTixJQUFNSSxVQUFVLEdBQUNILHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEseUNBQWhCO01BQU1FLFU7QUFLTixJQUFNQyxRQUFRLEdBQUNKLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0RBQWQ7TUFBTUcsUTtBQU1OLElBQU1DLFVBQVUsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxQ0FBaEI7TUFBTUksVTtBQUtOLElBQU1DLFVBQVUsR0FBQ04seURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxSEFBaEI7TUFBTUssVTtBQVNOLElBQU1DLFNBQVMsR0FBQ1AseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSxxR0FDTDtBQUFBLE1BQUVPLE1BQUYsU0FBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURLLENBQWY7TUFBTUQsUztBQVdOLElBQU1FLGVBQWUsR0FBQ1QseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSx1SEFBckIsQyxDQVVBOztNQVZNUSxlO0FBWVMsU0FBU0MsT0FBVCxRQUEyQztBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixTQUF6QkEsV0FBeUI7QUFBQSxNQUFiQyxRQUFhLFNBQWJBLFFBQWE7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QUMsNEZBQUQ7QUFBYywwQkFBa0IsRUFBRWUsZUFBbEM7QUFBbUQsb0JBQVksRUFBRUwsYUFBakU7QUFBZ0YsZUFBTyxFQUFFdkIsYUFBekY7QUFBd0csWUFBSSxFQUFFUCxXQUE5RztBQUEySCxzQkFBYyxFQUFFcUI7QUFBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxREg7O0dBOUl1QmxDLE87VUFHSFEscUQ7OztNQUhHUixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQvW2lkXS5kMzJkMDE2NGNlZTFkYmYzYzI4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWYsIHVzZUNvbnRleHQsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9JY29uXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQge1Byb2R1Y2Vjb21tZW50cmVxLENvbW1lbnRyZXEsQ29tbWVudGFuc3dlcnJlcSxFZGl0Y29tbWVudH0gZnJvbSBcIi4uLy4uL0FwaS9BcGlcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IENvbW1lbnRwYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvQ29udGVudC9Db21tZW50c2VjdGlvbi9Db21tZW50cGFydCc7XHJcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uLy4uL2hvb2tzL1Njcm9sbFwiXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBFeHRlcmlvcmNvbnRlbnQ9c3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiXCIgOiBcIndoaXRlXCJ9O1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjo1MHB4IGF1dG87XHJcbndpZHRoOjEwMCVcclxuYFxyXG5cclxuY29uc3QgQ29tbWVudGRpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW46NTBweCBhdXRvO1xyXG5tYXgtd2lkdGg6NzAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NDAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnREaXY9c3R5bGVkLmRpdmBcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5wYWRkaW5nOjI1cHg7XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVEaXY9c3R5bGVkLmRpdmBcclxuYm94LXNpemluZzpib3JkZXItYm94O1xyXG5wYWRkaW5nLWxlZnQ6MjVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEF0dHJpYnV0ZT1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjM1cHg7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IEF0dHJpYnV0ZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojRTJFM0UzO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG4vL3RvZG8gbWFwIGFycmF5IHRvIGNyZWF0ZSBhdHRyaWJ1dGUgbGlzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7Q29udGVudGRhdGEsY29tbWVudHMsaWR9KXtcclxuXHJcbiAgICBjb25zdCB7Y3VycmVudH09dXNlUmVmKFt7aWNvbjpcImZhcyBmYS1ib29rbWFya1wiLGRlc2M6XCJHw7ZuZGVyaXlpIEtheWRldFwifSx7aWNvbjpcImZhcyBmYS10aHVtYnMtdXBcIixkZXNjOlwiR8O2bmRlcml5aSBCZcSfZW5cIn0se2ljb246XCJmYXMgZmEtcmV0d2VldFwiLGRlc2M6XCJHw7ZuZGVyaXlpIFByb2ZpbCBTYXlmYW1kYSBHw7ZzdGVyXCJ9XSlcclxuICAgIGNvbnN0IHtib3R0b219ID0gdXNlU2Nyb2xsKCk7XHJcbiAgICBjb25zdCBbY29udGVudCxzZXRjb250ZW50XT11c2VTdGF0ZShDb250ZW50ZGF0YSk7XHJcbiAgICBjb25zdCBbY29tbWVudGxpc3Qsc2V0Y29tbWVudGxpc3RdPXVzZVN0YXRlKGNvbW1lbnRzKTtcclxuICAgIGNvbnN0IFtudW1iZXJvZmNvbW1lbnQsc2V0bnVtYmVyY29tXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWN0aXZlcyxzZXRlcnJtc2ddPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmVwcm9kdWNlLHNldGFjdGl2ZXByb2R1Y2VdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX09dXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICAvL2NvbnN0IHtpZH09cm91dGVyLnF1ZXJ5O1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coY29tbWVudGxpc3QpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgaWYobnVtYmVyb2Zjb21tZW50ID4gMCl7XHJcbiAgICAgICAgICAgIC8vaWxrIHNheWZhIGdlbGRpZ2luZGUgaXN0ZcSfaSDDtm5sZW1rIGnDp2luXHJcbiAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIENvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOmlkLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29tbWVudDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRsaXN0OmNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y29tbWVudGxpc3QubGVuZ3RoKzEwLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlcHJvZHVjZTpzZXRhY3RpdmVwcm9kdWNlLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbbnVtYmVyb2Zjb21tZW50XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihib3R0b20pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SWQ6aWQsXHJcbiAgICAgICAgICAgICAgICBzZXRjb21tZW50OnNldGNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGxpc3Q6Y29tbWVudGxpc3QsXHJcbiAgICAgICAgICAgICAgICBsYXN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6Y29tbWVudGxpc3QubGVuZ3RoKzEwLFxyXG4gICAgICAgICAgICAgICAgc2V0YWN0aXZlcHJvZHVjZTpzZXRhY3RpdmVwcm9kdWNlLFxyXG4gICAgICAgICAgICAgICAgc2V0ZXJybXNnOnNldGVycm1zZyxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbYm90dG9tXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIC8vY2hhbmdlYWJsZVxyXG4gICAgICAgc2V0Y29udGVudChDb250ZW50ZGF0YSk7XHJcbiAgICAgICBzZXRjb21tZW50bGlzdChjb21tZW50cyk7XHJcbiAgICB9LFtpZF0pXHJcbiAgICBcclxuICAgIGNvbnN0IFByb2R1Y2U9dXNlQ2FsbGJhY2soKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudC5wZXJzb25hbC5pZClcclxuICAgICAgICBQcm9kdWNlY29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgIENvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgTWVzc2FnZTptZXNzYWdlLFxyXG4gICAgICAgICAgICBUYWtlcklkOmNvbnRlbnQucGVyc29uYWwuaWQsXHJcbiAgICAgICAgICAgIHNldG51bWJlcmNvbTpzZXRudW1iZXJjb20sXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFt1c2VyZGF0YS5Vc2VySWRdKVxyXG5cclxuICAgIGNvbnN0IEFuc3dlcmhhbmRsZXI9KEFuc3dlcixVcHBlcklkKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJCVVJBREFBQVwiKVxyXG4gICAgICAgICAgQ29tbWVudGFuc3dlcnJlcSh7XHJcbiAgICAgICAgICAgICAgVXBwZXJjb21tZW50SWQ6VXBwZXJJZCxcclxuICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgIEFuc3dlcjpBbnN3ZXIsXHJcbiAgICAgICAgICAgICAgQ29udGVudElkOmlkXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBFZGl0Q29tbWVudEZ1bmM9KHtjb21tZW50SUQsbWVzc2FnZX0pPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidXJhZGFcIilcclxuICAgICAgICBFZGl0Y29tbWVudCh7XHJcbiAgICAgICAgICAgIGNvbW1lbnRJRDpjb21tZW50SUQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6bWVzc2FnZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOlwiOTUwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPEV4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2FyLmpwZ1wifSBzdHlsZT17e29iamVjdEZpdDpcImNvdmVyXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0gPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAgYWN0aXZlZnVuYz17KCk9PnNldGFjdGl2ZSghYWN0aXZlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjEwcHhcIixyaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIyNXB4XCIsaGVpZ2h0OlwiMjVweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlaG9sZGVyIGtleT17aXRlbS5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMjhweFwiLGhlaWdodDpcIjI4cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixmb250U2l6ZTpcIjEzcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGVob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHVoYW4gw5Z6dMO8cms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzVjNmI3M1wiLGZvbnRTaXplOlwiMTVweFwifX0+MTIvMDgvMjAyMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI2U2Mzk0NlwifX0+IFRoZSBzdGF0ZSBwbGFucyB0byBwYXkgYXJvdW5kIDIwIHBlcmNlbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5UaGUgc3RydWN0cmUgb2YgdGhlIGN1bHR1cmUgaW4gb3R0b21hbiBlbXBpcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgc3RhdGUgcGxhbnMgdG8gcGF5IGFyb3VuZCAyMCBwZXJjZW50IG9mIHRoZSBwcm9qZWN0IGZyb20gaXRzIGNlbnRyYWwgYnVkZ2V0LiBUaGUgcmVzdCB3aWxsIGNvbWUgZnJvbSBhICQxLjUgYmlsbGlvbiBDaGluZXNlIGJhbmsgbG9hbiB0byBIdW5nYXJ5LiBUaGUgZG9jdW1lbnRzIHNheSB0aGF0IGFsbCB0aGUgd29yayB3aWxsIGJlIGRvbmUgYnkgQ2hpbmVzZSwgbm90IEh1bmdhcmlhbiwgd29ya2VycyBhbmQgYWxsIHRoZSBtYXRlcmlhbCB3aWxsIGJlIENoaW5lc2UuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcVGhlIENoaW5lc2UgYXJlIGRvaW5nIGV2ZXJ5dGhpbmcsIHdoaWxlIHdl4oCZcmUgZG9pbmcgb25seSBvbmUgdGhpbmc6IHBheWluZyzigJ0gS2FyYWNzb255IHNhaWQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSHVuZ2FyeeKAmXMgZ292ZXJubWVudCBmb2xsb3dzIHRoZSBlY29ub21pYyB0aGlua2luZyBrbm93biBhcyDigJxFYXN0ZXJuIE9wZW5pbmcu4oCdIEl0IGZhdm9ycyBpbmNyZWFzZWQgZGlwbG9tYWN5IGFuZCB0cmFkZSB3aXRoIGNvdW50cmllcyBsaWtlIENoaW5hLCBSdXNzaWEsIFR1cmtleSBhbmQgb3RoZXJzIGluIENlbnRyYWwgQXNpYS4gQWx0aG91Z2ggaXQgam9pbmVkIHRoZSBFdXJvcGVhbiBVbmlvbiBpbiAyMDA0LCB0aGUgT3JiYW4gZ292ZXJubWVudCBvZnRlbiBoYXMgZGlzcHV0ZXMgd2l0aCBvdGhlciBFLlUuIG1lbWJlcnMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGV0ZXIgS3Jla28gaXMgdGhlIGRpcmVjdG9yIG9mIHRoZSBCdWRhcGVzdC1iYXNlZCByZXNlYXJjaCBjb21wYW55IFBvbGl0aWNhbCBDYXBpdGFsLiBIZSBiZWxpZXZlcyB0aGUgRnVkYW4gcHJvamVjdCBpcyBwYXJ0IG9mIENoaW5h4oCZcyBlZmZvcnRzIHRvIGluY3JlYXNlIHNvZnQgcG93ZXIuIEFuZCBoZSBzYWlkIHRoZSBwcm9qZWN0IGNvdWxkIGhlbHAgQ2hpbmHigJlzIHNweSBvcGVyYXRpb25zLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bmdhcnkgaXMgYSBwb3B1bGFyIHBsYWNlIGZvciBSdXNzaWFuIGFuZCBDaGluZXNlIHNwaWVzIGJlY2F1c2UgdGhlIGdvdmVybm1lbnQgc2hvd3MsIEtyZWtvIHNhaWQsIOKAnHRoZSBsYWNrIG9mIHdpbGxpbmduZXNzIG9mIGludGVsbGlnZW5jZSBmb3JjZXMgdG8gcHVzaCBiYWNrIG1hbGlnbiBmb3JlaWduIGluZmx1ZW5jZS7igJ1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZWl0aGVyIHRoZSBIdW5nYXJpYW4gZ292ZXJubWVudOKAmXMgc3Bva2VzcGVyc29uIG5vciB0aGUgbWluaXN0cnkgbGVhZGluZyB0aGUgcHJvamVjdCBhbnN3ZXJlZCByZXF1ZXN0cyBmb3IgY29tbWVudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxwPntjb21tZW50bGlzdC5sZW5ndGgrIFwiIFlvcnVtXCJ9PC9wPlxyXG4gICAgICAgICAgICA8Q29tbWVudGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50cGFydCAgRWRpdGNvbW1lbnRoYW5kbGVyPXtFZGl0Q29tbWVudEZ1bmN9IGhhbmRsZWFuc3dlcj17QW5zd2VyaGFuZGxlcn0gc3Bpbm5lcj17YWN0aXZlcHJvZHVjZX0gbGlzdD17Y29tbWVudGxpc3R9IFByb2R1Y2Vjb21tZW50PXtQcm9kdWNlfT48L0NvbW1lbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0NvbW1lbnRkaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==