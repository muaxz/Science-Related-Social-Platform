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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9wYWdlcy9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkV4dGVyaW9yY29udGVudCIsInN0eWxlZCIsImRpdiIsImlzY29tbWVudCIsIkNvbW1lbnRkaXYiLCJJbWFnZURpdiIsIkNvbnRlbnREaXYiLCJQcm9maWxlRGl2IiwiQXR0cmlidXRlIiwiYWN0aXZlIiwiQXR0cmlidXRlaG9sZGVyIiwiQ29udGVudCIsIkNvbnRlbnRkYXRhIiwiY29tbWVudHMiLCJpZCIsInVzZVJlZiIsImljb24iLCJkZXNjIiwiY3VycmVudCIsInVzZVNjcm9sbCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY29udGVudCIsInNldGNvbnRlbnQiLCJjb21tZW50bGlzdCIsInNldGNvbW1lbnRsaXN0IiwibnVtYmVyb2Zjb21tZW50Iiwic2V0bnVtYmVyY29tIiwic2V0YWN0aXZlIiwiYWN0aXZlcyIsInNldGVycm1zZyIsImFjdGl2ZXByb2R1Y2UiLCJzZXRhY3RpdmVwcm9kdWNlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ1c2VFZmZlY3QiLCJDb21tZW50cmVxIiwiY29udGVudElkIiwic2V0Y29tbWVudCIsImxhc3QiLCJvcmRlciIsImxlbmd0aCIsIlByb2R1Y2UiLCJtZXNzYWdlIiwiUHJvZHVjZWNvbW1lbnRyZXEiLCJDb250ZW50SWQiLCJVc2VySWQiLCJNZXNzYWdlIiwiVGFrZXJJZCIsInBlcnNvbmFsIiwiQW5zd2VyaGFuZGxlciIsIkFuc3dlciIsIlVwcGVySWQiLCJDb21tZW50YW5zd2VycmVxIiwiVXBwZXJjb21tZW50SWQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwiaXRlbSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsIm1hcmdpbkJv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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUksaUJBQUssRUFBRTtBQUFDTSwwQkFBWSxFQUFDO0FBQWQsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBNENJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0osZUE2Q0k7QUFBQSxnQkFBSTlDLFdBQVcsQ0FBQ2tCLE1BQVosR0FBb0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDSixlQThDSSxxRUFBQyxVQUFEO0FBQUEsNkJBQ0kscUVBQUMsNEZBQUQ7QUFBYSxvQkFBWSxFQUFFUyxhQUEzQjtBQUEwQyxlQUFPLEVBQUVwQixhQUFuRDtBQUFrRSxZQUFJLEVBQUVQLFdBQXhFO0FBQXFGLHNCQUFjLEVBQUVtQjtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0FwSXVCaEMsTztVQUdIUSxxRDs7O01BSEdSLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjQ3MTIxYmZhOWNhMmVmYTAzMDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZiwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7UHJvZHVjZWNvbW1lbnRyZXEsQ29tbWVudHJlcSxDb21tZW50YW5zd2VycmVxfSBmcm9tIFwiLi4vLi4vQXBpL0FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQgQ29tbWVudHBhcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9Db250ZW50L0NvbW1lbnRzZWN0aW9uL0NvbW1lbnRwYXJ0JztcclxuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vLi4vaG9va3MvU2Nyb2xsXCJcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEV4dGVyaW9yY29udGVudD1zdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJcIiA6IFwid2hpdGVcIn07XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjUwcHggYXV0bztcclxud2lkdGg6MTAwJVxyXG5gXHJcblxyXG5jb25zdCBDb21tZW50ZGl2PXN0eWxlZC5kaXZgXHJcbm1hcmdpbjo1MHB4IGF1dG87XHJcbm1heC13aWR0aDo3MDBweDtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDo0MDBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudERpdj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbnBhZGRpbmc6MjVweDtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZURpdj1zdHlsZWQuZGl2YFxyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbnBhZGRpbmctbGVmdDoyNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQXR0cmlidXRlPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MzVweDtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgQXR0cmlidXRlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUzRTM7XHJcbiBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcbi8vdG9kbyBtYXAgYXJyYXkgdG8gY3JlYXRlIGF0dHJpYnV0ZSBsaXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHtDb250ZW50ZGF0YSxjb21tZW50cyxpZH0pe1xyXG5cclxuICAgIGNvbnN0IHtjdXJyZW50fT11c2VSZWYoW3tpY29uOlwiZmFzIGZhLWJvb2ttYXJrXCIsZGVzYzpcIkfDtm5kZXJpeWkgS2F5ZGV0XCJ9LHtpY29uOlwiZmFzIGZhLXRodW1icy11cFwiLGRlc2M6XCJHw7ZuZGVyaXlpIEJlxJ9lblwifSx7aWNvbjpcImZhcyBmYS1yZXR3ZWV0XCIsZGVzYzpcIkfDtm5kZXJpeWkgUHJvZmlsIFNheWZhbWRhIEfDtnN0ZXJcIn1dKVxyXG4gICAgY29uc3Qge2JvdHRvbX0gPSB1c2VTY3JvbGwoKTtcclxuICAgIGNvbnN0IFtjb250ZW50LHNldGNvbnRlbnRdPXVzZVN0YXRlKENvbnRlbnRkYXRhKTtcclxuICAgIGNvbnN0IFtjb21tZW50bGlzdCxzZXRjb21tZW50bGlzdF09dXNlU3RhdGUoY29tbWVudHMpO1xyXG4gICAgY29uc3QgW251bWJlcm9mY29tbWVudCxzZXRudW1iZXJjb21dPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmVzLHNldGVycm1zZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZXByb2R1Y2Usc2V0YWN0aXZlcHJvZHVjZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfT11c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIC8vY29uc3Qge2lkfT1yb3V0ZXIucXVlcnk7XHJcbiAgXHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGlmKG51bWJlcm9mY29tbWVudCA+IDApe1xyXG4gICAgICAgICAgICAvL2lsayBzYXlmYSBnZWxkaWdpbmRlIGlzdGXEn2kgw7ZubGVtayBpw6dpblxyXG4gICAgICAgICAgICBzZXRhY3RpdmVwcm9kdWNlKHRydWUpO1xyXG4gICAgICAgICAgICBDb21tZW50cmVxKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgICAgIHNldGNvbW1lbnQ6c2V0Y29tbWVudGxpc3QsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50bGlzdDpjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW251bWJlcm9mY29tbWVudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoYm90dG9tKXtcclxuXHJcbiAgICAgICAgICAgIENvbW1lbnRyZXEoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOmlkLFxyXG4gICAgICAgICAgICAgICAgc2V0Y29tbWVudDpzZXRjb21tZW50bGlzdCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRsaXN0OmNvbW1lbnRsaXN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOmNvbW1lbnRsaXN0Lmxlbmd0aCsxMCxcclxuICAgICAgICAgICAgICAgIHNldGFjdGl2ZXByb2R1Y2U6c2V0YWN0aXZlcHJvZHVjZSxcclxuICAgICAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgIH0sW2JvdHRvbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAvL2NoYW5nZWFibGVcclxuICAgICAgIHNldGNvbnRlbnQoQ29udGVudGRhdGEpO1xyXG4gICAgICAgc2V0Y29tbWVudGxpc3QoY29tbWVudHMpO1xyXG4gICAgfSxbaWRdKVxyXG4gICAgXHJcbiAgICBjb25zdCBQcm9kdWNlPShtZXNzYWdlKT0+e1xyXG5cclxuICAgICAgICBQcm9kdWNlY29tbWVudHJlcSh7XHJcbiAgICAgICAgICAgIENvbnRlbnRJZDppZCxcclxuICAgICAgICAgICAgVXNlcklkOnVzZXJkYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgTWVzc2FnZTptZXNzYWdlLFxyXG4gICAgICAgICAgICBUYWtlcklkOmNvbnRlbnQucGVyc29uYWwuaWQsXHJcbiAgICAgICAgICAgIHNldG51bWJlcmNvbTpzZXRudW1iZXJjb20sXHJcbiAgICAgICAgICAgIHNldGVycm1zZzpzZXRlcnJtc2csXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQW5zd2VyaGFuZGxlcj0oQW5zd2VyLFVwcGVySWQpPT57XHJcblxyXG4gICAgICAgICAgQ29tbWVudGFuc3dlcnJlcSh7XHJcbiAgICAgICAgICAgICAgVXBwZXJjb21tZW50SWQ6VXBwZXJJZCxcclxuICAgICAgICAgICAgICBVc2VySWQ6dXNlcmRhdGEuVXNlcklkLFxyXG4gICAgICAgICAgICAgIEFuc3dlcjpBbnN3ZXJcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOlwiOTUwcHhcIixtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPEV4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2FyLmpwZ1wifSBzdHlsZT17e29iamVjdEZpdDpcImNvdmVyXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0gPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAgYWN0aXZlZnVuYz17KCk9PnNldGFjdGl2ZSghYWN0aXZlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjEwcHhcIixyaWdodDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsd2lkdGg6XCIyNXB4XCIsaGVpZ2h0OlwiMjVweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlIGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcChpdGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXR0cmlidXRlaG9sZGVyIGtleT17aXRlbS5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2l0ZW0uaWNvbn0gSWNvbmNvbmZpZz17e3dpZHRoOlwiMjhweFwiLGhlaWdodDpcIjI4cHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixmb250U2l6ZTpcIjEzcHhcIn19PntpdGVtLmRlc2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHRyaWJ1dGVob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F0dHJpYnV0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHByb2ZpbGU9XCIvYmxhY2suanBnXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHVoYW4gw5Z6dMO8cms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzVjNmI3M1wiLGZvbnRTaXplOlwiMTVweFwifX0+MTIvMDgvMjAyMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI2U2Mzk0NlwifX0+IFRoZSBzdGF0ZSBwbGFucyB0byBwYXkgYXJvdW5kIDIwIHBlcmNlbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5UaGUgc3RydWN0cmUgb2YgdGhlIGN1bHR1cmUgaW4gb3R0b21hbiBlbXBpcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgc3RhdGUgcGxhbnMgdG8gcGF5IGFyb3VuZCAyMCBwZXJjZW50IG9mIHRoZSBwcm9qZWN0IGZyb20gaXRzIGNlbnRyYWwgYnVkZ2V0LiBUaGUgcmVzdCB3aWxsIGNvbWUgZnJvbSBhICQxLjUgYmlsbGlvbiBDaGluZXNlIGJhbmsgbG9hbiB0byBIdW5nYXJ5LiBUaGUgZG9jdW1lbnRzIHNheSB0aGF0IGFsbCB0aGUgd29yayB3aWxsIGJlIGRvbmUgYnkgQ2hpbmVzZSwgbm90IEh1bmdhcmlhbiwgd29ya2VycyBhbmQgYWxsIHRoZSBtYXRlcmlhbCB3aWxsIGJlIENoaW5lc2UuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcVGhlIENoaW5lc2UgYXJlIGRvaW5nIGV2ZXJ5dGhpbmcsIHdoaWxlIHdl4oCZcmUgZG9pbmcgb25seSBvbmUgdGhpbmc6IHBheWluZyzigJ0gS2FyYWNzb255IHNhaWQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSHVuZ2FyeeKAmXMgZ292ZXJubWVudCBmb2xsb3dzIHRoZSBlY29ub21pYyB0aGlua2luZyBrbm93biBhcyDigJxFYXN0ZXJuIE9wZW5pbmcu4oCdIEl0IGZhdm9ycyBpbmNyZWFzZWQgZGlwbG9tYWN5IGFuZCB0cmFkZSB3aXRoIGNvdW50cmllcyBsaWtlIENoaW5hLCBSdXNzaWEsIFR1cmtleSBhbmQgb3RoZXJzIGluIENlbnRyYWwgQXNpYS4gQWx0aG91Z2ggaXQgam9pbmVkIHRoZSBFdXJvcGVhbiBVbmlvbiBpbiAyMDA0LCB0aGUgT3JiYW4gZ292ZXJubWVudCBvZnRlbiBoYXMgZGlzcHV0ZXMgd2l0aCBvdGhlciBFLlUuIG1lbWJlcnMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGV0ZXIgS3Jla28gaXMgdGhlIGRpcmVjdG9yIG9mIHRoZSBCdWRhcGVzdC1iYXNlZCByZXNlYXJjaCBjb21wYW55IFBvbGl0aWNhbCBDYXBpdGFsLiBIZSBiZWxpZXZlcyB0aGUgRnVkYW4gcHJvamVjdCBpcyBwYXJ0IG9mIENoaW5h4oCZcyBlZmZvcnRzIHRvIGluY3JlYXNlIHNvZnQgcG93ZXIuIEFuZCBoZSBzYWlkIHRoZSBwcm9qZWN0IGNvdWxkIGhlbHAgQ2hpbmHigJlzIHNweSBvcGVyYXRpb25zLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh1bmdhcnkgaXMgYSBwb3B1bGFyIHBsYWNlIGZvciBSdXNzaWFuIGFuZCBDaGluZXNlIHNwaWVzIGJlY2F1c2UgdGhlIGdvdmVybm1lbnQgc2hvd3MsIEtyZWtvIHNhaWQsIOKAnHRoZSBsYWNrIG9mIHdpbGxpbmduZXNzIG9mIGludGVsbGlnZW5jZSBmb3JjZXMgdG8gcHVzaCBiYWNrIG1hbGlnbiBmb3JlaWduIGluZmx1ZW5jZS7igJ1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZWl0aGVyIHRoZSBIdW5nYXJpYW4gZ292ZXJubWVudOKAmXMgc3Bva2VzcGVyc29uIG5vciB0aGUgbWluaXN0cnkgbGVhZGluZyB0aGUgcHJvamVjdCBhbnN3ZXJlZCByZXF1ZXN0cyBmb3IgY29tbWVudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudERpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yY29udGVudD5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxwPntjb21tZW50bGlzdC5sZW5ndGgrIFwiIFlvcnVtXCJ9PC9wPlxyXG4gICAgICAgICAgICA8Q29tbWVudGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50cGFydCBoYW5kbGVhbnN3ZXI9e0Fuc3dlcmhhbmRsZXJ9IHNwaW5uZXI9e2FjdGl2ZXByb2R1Y2V9IGxpc3Q9e2NvbW1lbnRsaXN0fSBQcm9kdWNlY29tbWVudD17UHJvZHVjZX0+PC9Db21tZW50cGFydD5cclxuICAgICAgICAgICAgPC9Db21tZW50ZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=