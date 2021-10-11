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

  var Produce = function Produce(message) {
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Producecommentreq"])({
      ContentId: id,
      UserId: userdata.UserId,
      Message: message,
      TakerId: content.personal.id,
      setnumbercom: setnumbercom,
      seterrmsg: seterrmsg
    });
  };

  var Answerhandler = function Answerhandler(Answer, UpperId) {
    console.log("BURADAAA");
    Object(_Api_Api__WEBPACK_IMPORTED_MODULE_5__["Commentanswerreq"])({
      UppercommentId: UpperId,
      UserId: userdata.UserId,
      Answer: Answer
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
            lineNumber: 152,
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
            lineNumber: 153,
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
                  lineNumber: 157,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginLeft: "5px",
                    fontSize: "13px"
                  },
                  children: item.desc
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 33
                }, _this)]
              }, item.icon, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileDiv, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_styledcomponents_button__WEBPACK_IMPORTED_MODULE_4__["Porfileimage"], {
            profile: "/black.jpg",
            width: "40px",
            height: "40px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Duhan \xD6zt\xFCrk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "#5c6b73",
                fontSize: "15px"
              },
              children: "12/08/2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
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
            lineNumber: 172,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px"
            },
            children: "The structre of the culture in ottoman empire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "The state plans to pay around 20 percent of the project from its central budget. The rest will come from a $1.5 billion Chinese bank loan to Hungary. The documents say that all the work will be done by Chinese, not Hungarian, workers and all the material will be Chinese. \u201CThe Chinese are doing everything, while we\u2019re doing only one thing: paying,\u201D Karacsony said. Hungary\u2019s government follows the economic thinking known as \u201CEastern Opening.\u201D It favors increased diplomacy and trade with countries like China, Russia, Turkey and others in Central Asia. Although it joined the European Union in 2004, the Orban government often has disputes with other E.U. members. Peter Kreko is the director of the Budapest-based research company Political Capital. He believes the Fudan project is part of China\u2019s efforts to increase soft power. And he said the project could help China\u2019s spy operations. Hungary is a popular place for Russian and Chinese spies because the government shows, Kreko said, \u201Cthe lack of willingness of intelligence forces to push back malign foreign influence.\u201D Neither the Hungarian government\u2019s spokesperson nor the ministry leading the project answered requests for comments."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: commentlist.length + " Yorum"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Commentdiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pages_Content_Commentsection_Commentpart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handleanswer: Answerhandler,
        spinner: activeproduce,
        list: commentlist,
        Producecomment: Produce
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 9
  }, this);
}

_s(Content, "rLTo8aUoQpijoj/8ztbvzmbo960=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsImlzY29tbWVudCIsIkNvbW1lbnRkaXYiLCJJbWFnZURpdiIsIkNvbnRlbnREaXYiLCJQcm9maWxlRGl2IiwiQXR0cmlidXRlIiwiYWN0aXZlIiwiQXR0cmlidXRlaG9sZGVyIiwiQ29udGVudCIsIkNvbnRlbnRkYXRhIiwiY29tbWVudHMiLCJpZCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwiY3VycmVudCIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudCIsInNldGNvbnRlbnQiLCJjb21tZW50bGlzdCIsInNldGNvbW1lbnRsaXN0IiwibnVtYmVyb2Zjb21tZW50Iiwic2V0bnVtYmVyY29tIiwic2V0YWN0aXZlIiwiYWN0aXZlcyIsInNldGVycm1zZyIsImFjdGl2ZXByb2R1Y2UiLCJzZXRhY3RpdmVwcm9kdWNlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VFZmZlY3QiLCJDb21tZW50cmVxIiwiY29udGVudElkIiwic2V0Y29tbWVudCIsImxhc3QiLCJvcmRlciIsImxlbmd0aCIsIlByb2R1Y2UiLCJtZXNzYWdlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJDb250ZW50SWQiLCJVc2VySWQiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInBlcnNvbmFsIiwiQW5zd2VyaGFuZGxlciIsIkFuc3dlciIsIlVwcGVySWQiLCJjb25zb2xlIiwibG9nIiwiQ29tbWVudGFuc3dlcnJlcSIsIlVwcGVyY29tbWVudElkIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJtYXJnaW5MZWZ0IiwiZm9u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WSxFQUFDLE1BQWQ7QUFBcUJOLG1CQUFLLEVBQUM7QUFBM0IsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUksaUJBQUssRUFBRTtBQUFDTSwwQkFBWSxFQUFDO0FBQWQsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBNENJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0osZUE2Q0k7QUFBQSxnQkFBSWhELFdBQVcsQ0FBQ2tCLE1BQVosR0FBb0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDSixlQThDSSxxRUFBQyxVQUFEO0FBQUEsNkJBQ0kscUVBQUMsNEZBQUQ7QUFBYSxvQkFBWSxFQUFFUyxhQUEzQjtBQUEwQyxlQUFPLEVBQUVwQixhQUFuRDtBQUFrRSxZQUFJLEVBQUVQLFdBQXhFO0FBQXFGLHNCQUFjLEVBQUVtQjtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0FwSXVCaEMsTztVQUdIUSxxRDs7O01BSEdSLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjE2OWQyNTk3OTQ1NzA5ZGQ1NDVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZiwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7UHJvZHVjZWNvbW1lbnRyZXEsQ29tbWVudHJlcSxDb21tZW50YW5zd2VycmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgQ29tbWVudHBhcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL0NvbW1lbnRwYXJ0JztcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCJcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yY29udGVudD1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJcIiA6IFwid2hpdGVcIn07XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjUwcHggYXV0bztcclxud2lkdGg6MTAwJVxyXG5gXHJcblxyXG5jb25zdCBDb21tZW50ZGl2PXN0eWxlZC5kaXZgXHJcbm1hcmdpbjo1MHB4IGF1dG87XHJcbm1heC13aWR0aDo3MDBweDtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MDBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbnBhZGRpbmc6MjVweDtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZURpdj1zdHlsZWQuZGl2YFxyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbnBhZGRpbmctbGVmdDoyNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQXR0cmlidXRlPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MzVweDtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgQXR0cmlidXRlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUzRTM7XHJcbiBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbi8vdG9kbyBtYXAgYXJyYXkgdG8gY3JlYXRlIGF0dHJpYnV0ZSBsaXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHtDb250ZW50ZGF0YSxjb21tZW50cyxpZH0pe1xyXG5cclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIkfDtm5kZXJpeWkgS2F5ZGV0XCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJHw7ZuZGVyaXlpIEJlxJ9lblwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIkfDtm5kZXJpeWkgUHJvZmlsIFNheWZhbWRhIEfDtnN0ZXJcIn1dKVxyXG4gICAgY29uc3Qge2JvdHRvbX0gPSB1c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtjb250ZW50LHNldGNvbnRlbnRdPXVzZVN0YXRlKENvbnRlbnRkYXRhKTtcclxuICAgIGNvbnN0IFtjb21tZW50bGlzdCxzZXRjb21tZW50bGlzdF09dXNlU3RhdGUoY29tbWVudHMpO1xyXG4gICAgY29uc3QgW251bWJlcm9mY29tbWVudCxzZXRudW1iZXJjb21dPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmVzLHNldGVycm1zZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZXByb2R1Y2Usc2V0YWN0aXZlcHJvZHVjZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIC8vY29uc3Qge2lkfT1yb3V0ZXIucXVlcnk7XHJcbiAgXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGlmKG51bWJlcm9mY29tbWVudCA+IDApe1xyXG4gICAgICAgICAgICAvL2lsayBzYXlmYSBnZWxkaWdpbmRlIGlzdGXEn2kgw7ZubGVtayBpw6dpblxyXG4gICAgICAgICAgICBzZXRhY3RpdmVwcm9kdWNlKHRydWUpO1xyXG4gICAgICAgICAgICBDb21tZW50cmVxKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgICAgIHNldGNvbW1lbnQ6c2V0Y29tbWVudGxpc3QsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50bGlzdDpjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW251bWJlcm9mY29tbWVudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoYm90dG9tKXtcclxuXHJcbiAgICAgICAgICAgIENvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOmlkLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29tbWVudDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRsaXN0OmNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAvL2NoYW5nZWFibGVcclxuICAgICAgIHNldGNvbnRlbnQoQ29udGVudGRhdGEpO1xyXG4gICAgICAgc2V0Y29tbWVudGxpc3QoY29tbWVudHMpO1xyXG4gICAgfSxbaWRdKVxyXG4gICAgXHJcbiAgICBjb25zdCBQcm9kdWNlPShtZXNzYWdlKT0+e1xyXG5cclxuICAgICAgICBQcm9kdWNlY29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgIENvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgTWVzc2FnZTptZXNzYWdlLFxyXG4gICAgICAgICAgICBUYWtlcklkOmNvbnRlbnQucGVyc29uYWwuaWQsXHJcbiAgICAgICAgICAgIHNldG51bWJlcmNvbTpzZXRudW1iZXJjb20sXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQW5zd2VyaGFuZGxlcj0oQW5zd2VyLFVwcGVySWQpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJVUkFEQUFBXCIpXHJcbiAgICAgICAgICBDb21tZW50YW5zd2VycmVxKHtcclxuICAgICAgICAgICAgICBVcHBlcmNvbW1lbnRJZDpVcHBlcklkLFxyXG4gICAgICAgICAgICAgIFVzZXJJZDp1c2VyZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgQW5zd2VyOkFuc3dlclxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6XCI5NTBweFwiLG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jYXIuanBnXCJ9IHN0eWxlPXt7b2JqZWN0Rml0OlwiY292ZXJcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9fSA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uICBhY3RpdmVmdW5jPXsoKT0+c2V0YWN0aXZlKCFhY3RpdmUpfSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMTBweFwiLHJpZ2h0OlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIixib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDpcIjI1cHhcIixoZWlnaHQ6XCIyNXB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRyaWJ1dGUgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKGl0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRyaWJ1dGVob2xkZXIga2V5PXtpdGVtLmljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17aXRlbS5pY29ufSBJY29uY29uZmlnPXt7d2lkdGg6XCIyOHB4XCIsaGVpZ2h0OlwiMjhweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGZvbnRTaXplOlwiMTNweFwifX0+e2l0ZW0uZGVzY308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZWhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXR0cmlidXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2UgcHJvZmlsZT1cIi9ibGFjay5qcGdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EdWhhbiDDlnp0w7xyazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjNWM2YjczXCIsZm9udFNpemU6XCIxNXB4XCJ9fT4xMi8wOC8yMDIwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjZTYzOTQ2XCJ9fT4gVGhlIHN0YXRlIHBsYW5zIHRvIHBheSBhcm91bmQgMjAgcGVyY2VudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIn19PlRoZSBzdHJ1Y3RyZSBvZiB0aGUgY3VsdHVyZSBpbiBvdHRvbWFuIGVtcGlyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBzdGF0ZSBwbGFucyB0byBwYXkgYXJvdW5kIDIwIHBlcmNlbnQgb2YgdGhlIHByb2plY3QgZnJvbSBpdHMgY2VudHJhbCBidWRnZXQuIFRoZSByZXN0IHdpbGwgY29tZSBmcm9tIGEgJDEuNSBiaWxsaW9uIENoaW5lc2UgYmFuayBsb2FuIHRvIEh1bmdhcnkuIFRoZSBkb2N1bWVudHMgc2F5IHRoYXQgYWxsIHRoZSB3b3JrIHdpbGwgYmUgZG9uZSBieSBDaGluZXNlLCBub3QgSHVuZ2FyaWFuLCB3b3JrZXJzIGFuZCBhbGwgdGhlIG1hdGVyaWFsIHdpbGwgYmUgQ2hpbmVzZS5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJxUaGUgQ2hpbmVzZSBhcmUgZG9pbmcgZXZlcnl0aGluZywgd2hpbGUgd2XigJlyZSBkb2luZyBvbmx5IG9uZSB0aGluZzogcGF5aW5nLOKAnSBLYXJhY3Nvbnkgc2FpZC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdW5nYXJ54oCZcyBnb3Zlcm5tZW50IGZvbGxvd3MgdGhlIGVjb25vbWljIHRoaW5raW5nIGtub3duIGFzIOKAnEVhc3Rlcm4gT3BlbmluZy7igJ0gSXQgZmF2b3JzIGluY3JlYXNlZCBkaXBsb21hY3kgYW5kIHRyYWRlIHdpdGggY291bnRyaWVzIGxpa2UgQ2hpbmEsIFJ1c3NpYSwgVHVya2V5IGFuZCBvdGhlcnMgaW4gQ2VudHJhbCBBc2lhLiBBbHRob3VnaCBpdCBqb2luZWQgdGhlIEV1cm9wZWFuIFVuaW9uIGluIDIwMDQsIHRoZSBPcmJhbiBnb3Zlcm5tZW50IG9mdGVuIGhhcyBkaXNwdXRlcyB3aXRoIG90aGVyIEUuVS4gbWVtYmVycy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXRlciBLcmVrbyBpcyB0aGUgZGlyZWN0b3Igb2YgdGhlIEJ1ZGFwZXN0LWJhc2VkIHJlc2VhcmNoIGNvbXBhbnkgUG9saXRpY2FsIENhcGl0YWwuIEhlIGJlbGlldmVzIHRoZSBGdWRhbiBwcm9qZWN0IGlzIHBhcnQgb2YgQ2hpbmHigJlzIGVmZm9ydHMgdG8gaW5jcmVhc2Ugc29mdCBwb3dlci4gQW5kIGhlIHNhaWQgdGhlIHByb2plY3QgY291bGQgaGVscCBDaGluYeKAmXMgc3B5IG9wZXJhdGlvbnMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSHVuZ2FyeSBpcyBhIHBvcHVsYXIgcGxhY2UgZm9yIFJ1c3NpYW4gYW5kIENoaW5lc2Ugc3BpZXMgYmVjYXVzZSB0aGUgZ292ZXJubWVudCBzaG93cywgS3Jla28gc2FpZCwg4oCcdGhlIGxhY2sgb2Ygd2lsbGluZ25lc3Mgb2YgaW50ZWxsaWdlbmNlIGZvcmNlcyB0byBwdXNoIGJhY2sgbWFsaWduIGZvcmVpZ24gaW5mbHVlbmNlLuKAnVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5laXRoZXIgdGhlIEh1bmdhcmlhbiBnb3Zlcm5tZW504oCZcyBzcG9rZXNwZXJzb24gbm9yIHRoZSBtaW5pc3RyeSBsZWFkaW5nIHRoZSBwcm9qZWN0IGFuc3dlcmVkIHJlcXVlc3RzIGZvciBjb21tZW50cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3Jjb250ZW50PlxyXG4gICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPHA+e2NvbW1lbnRsaXN0Lmxlbmd0aCsgXCIgWW9ydW1cIn08L3A+XHJcbiAgICAgICAgICAgIDxDb21tZW50ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRwYXJ0IGhhbmRsZWFuc3dlcj17QW5zd2VyaGFuZGxlcn0gc3Bpbm5lcj17YWN0aXZlcHJvZHVjZX0gbGlzdD17Y29tbWVudGxpc3R9IFByb2R1Y2Vjb21tZW50PXtQcm9kdWNlfT48L0NvbW1lbnRwYXJ0PlxyXG4gICAgICAgICAgICA8L0NvbW1lbnRkaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==