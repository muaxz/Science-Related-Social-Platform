webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contentcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_Usercontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/Usercontext */ "./context/Usercontext.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _utilsfunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilsfunc */ "./utilsfunc.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{font-size:16px}25%{font-size:18px}50%{font-size:21px}65%{font-size:17}70%{font-size:10px}100%{font-size:16px}"]);
var Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;margin-bottom:30px;width:100%;background-color:", ";border-radius:7px;box-shadow:rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;"], function (_ref) {
  var iscomment = _ref.iscomment;
  return !iscomment ? "#faf9f9" : "#faf9f9";
});
_c = Outsidediv;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-1"
})(["padding-right:5px;padding-left:5px;"]);
_c2 = Imagediv;
var Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-2"
})(["flex:1;"]);
_c3 = Imageholder;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-3"
})(["flex:2;display:flex;flex-direction:column;"]);
_c4 = Contentholder;
var Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-4"
})(["padding:", ";padding-left:15px;padding-right:15px;flex:1;"], function (_ref2) {
  var iscomment = _ref2.iscomment;
  return iscomment ? "15px" : "0px";
});
_c5 = Contentdiv;
var SecondPart = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__SecondPart",
  componentId: "r68yrd-5"
})(["display:", ";@media (max-width:550px){display:block;}"], function (_ref3) {
  var foruser = _ref3.foruser;
  return foruser ? "block" : "flex";
});
_c6 = SecondPart;
var Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-6"
})(["display:", ";padding-left:15px;border-radius:5px;"], function (_ref4) {
  var foruser = _ref4.foruser;
  return foruser ? "none" : "flex";
});
_c7 = Toolbar;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-7"
})(["width:100%;height:150px;object-fit:cover;"]);
_c8 = Img;
var Spanfor = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contentcard__Spanfor",
  componentId: "r68yrd-8"
})(["margin-left:5px;&:hover{text-decoration-line:underline;cursor:pointer;}"]);
_c9 = Spanfor;
var İconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-9"
})(["margin-right:10px;display:flex;align-items:center;&:hover ", "{color:", ";}"], Spanfor, function (_ref5) {
  var howercolor = _ref5.howercolor;
  return howercolor;
});
var Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-10"
})(["width:100%;padding-top:10px;padding-bottom:10px;transition:all 0.3s;"]);
_c10 = Profilediv;
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-11"
})(["display:flex;justify-content:center;align-items:center;font-size:16px;transition-duration:0.5s;width:30px;height:30px;padding:5px;border-radius:50%;cursor:pointer;animation-duration:0.3s;animation-timing-function:ease-in-out;&:hover{background:rgba(", ");};color:", ";animation-name:", ";"], function (_ref6) {
  var howercolor = _ref6.howercolor;
  return howercolor;
}, function (_ref7) {
  var ismarked = _ref7.ismarked,
      color = _ref7.color;
  return ismarked ? color : "grey";
}, function (_ref8) {
  var ismarked = _ref8.ismarked;
  return ismarked ? Likeanimaton : "";
});
_c11 = Icons;
var Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Optionwindow",
  componentId: "r68yrd-12"
})(["display:", ";width:350px;padding:5px;position:absolute;top:35px;right:10px;border-radius:7px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;background-color:white;z-index:1000;"], function (_ref9) {
  var active = _ref9.active;
  return active ? "block" : "none";
});
_c12 = Optionwindow;
var Optionholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Optionholder",
  componentId: "r68yrd-13"
})(["display:flex;position:relative;align-items:center;padding:10px;border-radius:6px;&:hover{background-color:#EBEBEB;cursor:pointer;}"]);
_c13 = Optionholder;
var Span = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contentcard__Span",
  componentId: "r68yrd-14"
})([""]);
var Profileimageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profileimageholder",
  componentId: "r68yrd-15"
})(["cursor:pointer;position:", ";left:", ";;"], function (_ref10) {
  var iscomment = _ref10.iscomment;
  return iscomment ? "absolute" : "relative";
}, function (_ref11) {
  var iscomment = _ref11.iscomment;
  return iscomment ? "-60px" : "0px";
}); //içerik sayısı,takipçi sayısı,

_c14 = Profileimageholder;
function Contentcard(_ref12) {
  _s();

  var Selectedkey = _ref12.Selectedkey,
      readlater = _ref12.readlater,
      profileimage = _ref12.profileimage,
      content = _ref12.content,
      titleimage = _ref12.titleimage,
      title = _ref12.title,
      iscomment = _ref12.iscomment,
      username = _ref12.username,
      usersurname = _ref12.usersurname,
      date = _ref12.date,
      comment = _ref12.comment,
      retweet = _ref12.retweet,
      like = _ref12.like,
      showwindow = _ref12.showwindow,
      createrelationforsmh = _ref12.createrelationforsmh,
      postId = _ref12.postId,
      foruser = _ref12.foruser,
      foruseroption = _ref12.foruseroption,
      indexnum = _ref12.indexnum,
      userid = _ref12.userid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Like: {
      number: like.length,
      array: like,
      ismarked: false
    },
    reshow: {
      number: retweet.length,
      array: retweet,
      ismarked: false
    },
    Readlater: {
      ismarked: false,
      number: 0
    }
  }),
      elements = _useState[0],
      setelements = _useState[1];

  var _useClickoutside = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      ref = _useClickoutside.ref,
      visible = _useClickoutside.visible,
      setvisible = _useClickoutside.setvisible;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_4__["createusercontext"]),
      userdata = _useContext.userdata;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkfollow = _useState2[0],
      setcheckfollow = _useState2[1];

  var textforopiton = "";

  switch (foruseroption) {
    case "Readlater":
      textforopiton = "Kaydedilen gönderilerden kaldır";
      break;

    case "Like":
      textforopiton = "Beğenilen Gönderilerden kaldır";
      break;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var currentelements = _objectSpread({}, elements);

    if (!foruser) {
      like.forEach(function (user) {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["Like"].ismarked = true;
          var Indexofcurrentuser = currentelements["Like"].array.findIndex(function (item) {
            return item.id == userdata.UserId;
          });
          currentelements["Like"].array.splice(Indexofcurrentuser, 1);
          currentelements["Like"].array.unshift(user);
        }
      });
      retweet.forEach(function (user) {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["reshow"].ismarked = true;
          var Indexofcurrentuser = currentelements["reshow"].array.findIndex(function (item) {
            return item.id == userdata.UserId;
          });
          currentelements["reshow"].array.splice(Indexofcurrentuser, 1);
          currentelements["reshow"].array.unshift(user);
        }
      });
      readlater.forEach(function (user) {
        if (userdata.UserId == user.id) {
          //eğer burada herhangi bir eşitlik bulunursa kullanıcı postu beğendi demek
          currentelements["Readlater"].ismarked = true;
        }
      });
    }

    setelements(currentelements);
  }, [userdata]);

  var Countplus = function Countplus(elementtype) {
    var currentelements = _objectSpread({}, elements);

    if (currentelements[elementtype].ismarked == false) {
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].number = currentelements[elementtype].number + 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.unshift({
          firstname: userdata.Username,
          lastname: userdata.Usersurname,
          id: userdata.UserId
        });
      }

      createrelationforsmh(postId, elementtype, "Create", userid);
    } else {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.splice(0, 1);
      }

      createrelationforsmh(postId, elementtype, "Destroy");
    }

    setelements(currentelements);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    iscomment: iscomment,
    children: [//left arrow
    iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "fas fa-caret-left fa-lg",
      Iconconfig: {
        position: "absolute",
        left: "-6px",
        top: "8px",
        color: "#faf9f9"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 28
    }, this) : null, !iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: "red"
      },
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activefunc: function activefunc() {
          setvisible(!visible);
        },
        className: "fas fa-ellipsis-h",
        Iconconfig: {
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "#2A2A2A"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }, this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "fas fa-user-minus",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Duhan \xD6zt\xFCrk'\xFC takipten \xE7\u0131k"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "fas fa-link",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Payla\u015F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: "Ba\u011Flant\u0131 adresini kopyala"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }, this), foruser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          onClick: function onClick() {
            return createrelationforsmh(postId, foruseroption, "Destroy", indexnum);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "fas fa-trash-alt fa-sm",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px",
              color: "#757575"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "black"
              },
              children: "Kald\u0131r"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activefunc: function activefunc() {
          setvisible(!visible);
        },
        className: "fas fa-ellipsis-v",
        Iconconfig: {
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "#2A2A2A"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: "center",
          height: "100%",
          marginLeft: "5px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profileimageholder, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: {
              pathname: "/profile/".concat(userid),
              query: {
                name: "Post"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Porfileimage"], {
              width: iscomment ? "40px" : "35px",
              height: iscomment ? "40px" : "35px",
              profile: profileimage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginLeft: "10px",
            fontSize: "15px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "black"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: username + " " + usersurname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 68
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "auto",
              fontSize: "13px",
              marginRight: "10px",
              color: "#7D7D7D"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_9__["calculatedate"])(date).time + " " + Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_9__["calculatedate"])(date).express + " Önce"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 107
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "bre"
            },
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/content/[id]",
            as: "/content/".concat(postId),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                textAlign: "left",
                wordBreak: "bre",
                cursor: "pointer"
              },
              children: "While the Crypto Professors may set specific requirements for some...."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 29
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          foruser: foruser,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "green",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "0, 255, 0, 0.2",
              ismarked: elements.reshow.ismarked,
              color: "green",
              onClick: function onClick() {
                return Countplus("reshow");
              },
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "red",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "255, 0, 0,0.2",
              ismarked: elements.Like.ismarked,
              color: "#C72121",
              onClick: function onClick() {
                return Countplus("Like");
              },
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 81
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 4,
              display: "flex",
              justifyContent: "flex-end",
              color: "grey"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              ismarked: elements.Readlater.ismarked,
              color: "black",
              onClick: function onClick() {
                return Countplus("Readlater");
              },
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "TI/0GMPNy1dmsz5nkvoIvCUuQmo=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c15 = Contentcard;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;

$RefreshReg$(_c, "Outsidediv");
$RefreshReg$(_c2, "Imagediv");
$RefreshReg$(_c3, "Imageholder");
$RefreshReg$(_c4, "Contentholder");
$RefreshReg$(_c5, "Contentdiv");
$RefreshReg$(_c6, "SecondPart");
$RefreshReg$(_c7, "Toolbar");
$RefreshReg$(_c8, "Img");
$RefreshReg$(_c9, "Spanfor");
$RefreshReg$(_c10, "Profilediv");
$RefreshReg$(_c11, "Icons");
$RefreshReg$(_c12, "Optionwindow");
$RefreshReg$(_c13, "Optionholder");
$RefreshReg$(_c14, "Profileimageholder");
$RefreshReg$(_c15, "Contentcard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImlzY29tbWVudCIsIkltYWdlZGl2IiwiSW1hZ2Vob2xkZXIiLCJDb250ZW50aG9sZGVyIiwiQ29udGVudGRpdiIsIlNlY29uZFBhcnQiLCJmb3J1c2VyIiwiVG9vbGJhciIsIkltZyIsImltZyIsIlNwYW5mb3IiLCJzcGFuIiwixLBjb25ob2xkZXIiLCJob3dlcmNvbG9yIiwiUHJvZmlsZWRpdiIsIkljb25zIiwiaSIsImlzbWFya2VkIiwiY29sb3IiLCJPcHRpb253aW5kb3ciLCJhY3RpdmUiLCJPcHRpb25ob2xkZXIiLCJTcGFuIiwiUHJvZmlsZWltYWdlaG9sZGVyIiwiQ29udGVudGNhcmQiLCJTZWxlY3RlZGtleSIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsImNvbnRlbnQiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwiZGF0ZSIsImNvbW1lbnQiLCJyZXR3ZWV0IiwibGlrZSIsInNob3d3aW5kb3ciLCJjcmVhdGVyZWxhdGlvbmZvcnNtaCIsInBvc3RJZCIsImZvcnVzZXJvcHRpb24iLCJpbmRleG51bSIsInVzZXJpZCIsInVzZVN0YXRlIiwiTGlrZSIsIm51bWJlciIsImxlbmd0aCIsImFycmF5IiwicmVzaG93IiwiUmVhZGxhdGVyIiwiZWxlbWVudHMiLCJzZXRlbGVtZW50cyIsInVzZUNsaWNrb3V0c2lkZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJjaGVja2ZvbGxvdyIsInNldGNoZWNrZm9sbG93IiwidGV4dGZvcm9waXRvbiIsInVzZUVmZmVjdCIsImN1cnJlbnRlbGVtZW50cyIsImZvckVhY2giLCJ1c2VyIiwiVXNlcklkIiwiaWQiLCJJbmRleG9mY3VycmVudHVzZXIiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidW5zaGlmdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiZmlyc3RuYW1lIiwiVXNlcm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJzdXJuYW1lIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwicmlnaHQiLCJ3aWR0aCIsImJhY2tjb2xvciIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJ0ZXh0QWxpZ24iLCJ3b3JkQnJlYWsiLCJtYXJnaW5Cb3R0b20iLCJjdXJzb3IiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQsc0hBQWxCO0FBUUEsSUFBTUMsVUFBVSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLCtMQUtHO0FBQUEsTUFBRUMsU0FBRixRQUFFQSxTQUFGO0FBQUEsU0FBZSxDQUFDQSxTQUFELEdBQWEsU0FBYixHQUF3QixTQUF2QztBQUFBLENBTEgsQ0FBaEI7S0FBTUgsVTtBQVNOLElBQU1JLFFBQVEsR0FBQ0gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwyQ0FBZDtNQUFNRSxRO0FBS04sSUFBTUMsV0FBVyxHQUFDSix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGVBQWpCO01BQU1HLFc7QUFHTixJQUFNQyxhQUFhLEdBQUNMLHlEQUFNLENBQUNDLEdBQVI7QUFB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QUFBQSxvQkFESixlQUN3RDtBQUFNLG1CQUFLLEVBQUU7QUFBQ2YsMEJBQVUsRUFBQyxLQUFaO0FBQWtCdEUscUJBQUssRUFBQztBQUF4QixlQUFiO0FBQUEsd0JBQTJDZ0IsT0FBTyxDQUFDWTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEosZUFZSSxxRUFBQyxVQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDeUQsa0JBQUksRUFBQyxDQUFOO0FBQVFiLHFCQUFPLEVBQUMsTUFBaEI7QUFBdUJjLDRCQUFjLEVBQUMsVUFBdEM7QUFBaUR0RixtQkFBSyxFQUFDO0FBQXZELGFBQW5CO0FBQUEsbUNBQ0kscUVBQUMsS0FBRDtBQUFRLHNCQUFRLEVBQUVnQyxRQUFRLENBQUNELFNBQVQsQ0FBbUJoQyxRQUFyQztBQUErQyxtQkFBSyxFQUFFLE9BQXREO0FBQStELHFCQUFPLEVBQUU7QUFBQSx1QkFBSXdELFNBQVMsQ0FBQyxXQUFELENBQWI7QUFBQSxlQUF4RTtBQUFxRyx1QkFBUyxFQUFDO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBOEhIOztHQTNPdUJqRCxXO1VBa0JhNEIsNEQ7OztPQWxCYjVCLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZhMDk1OGFmNjZjMThlOTAzMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL1VJL0ljb25cIlxyXG5pbXBvcnQge2ZlZWQsIEZlZWRiYWNrfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tIFwiLi4vLi4vaG9va3MvQ2xpa2NvdXRpc2RlXCI7XHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG4yNSUge2ZvbnQtc2l6ZToxOHB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG42NSUge2ZvbnQtc2l6ZToxN31cclxuNzAlIHtmb250LXNpemU6MTBweH1cclxuMTAwJSB7Zm9udC1zaXplOjE2cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PiFpc2NvbW1lbnQgPyBcIiNmYWY5ZjlcIjogXCIjZmFmOWY5XCJ9O1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcbmBcclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcblxyXG5gXHJcbmNvbnN0IEltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MTtcclxuYFxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MjtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblxyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzogJHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIjE1cHhcIjogXCIwcHhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbmZsZXg6MTtcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kUGFydCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwiYmxvY2tcIjpcImZsZXhcIn07XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU1MHB4KXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7aXNtYXJrZWR9KT0+aXNtYXJrZWQgPyBMaWtlYW5pbWF0b24gOiBcIlwifTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxud2lkdGg6MzUwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjEwcHg7IFxyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjEwMDA7XHJcbmBcclxuY29uc3QgT3B0aW9uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuXHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVpbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjsgXHJcbnBvc2l0aW9uOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwifTtcclxubGVmdDokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiLTYwcHhcIiA6IFwiMHB4XCJ9OztcclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Y2FyZCh7U2VsZWN0ZWRrZXkscmVhZGxhdGVyLHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzaG93OntcclxuICAgICAgICAgICAgbnVtYmVyOnJldHdlZXQubGVuZ3RoLFxyXG4gICAgICAgICAgICBhcnJheTpyZXR3ZWV0LFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCBbY2hlY2tmb2xsb3csc2V0Y2hlY2tmb2xsb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHZhciB0ZXh0Zm9yb3BpdG9uPVwiXCI7XHJcbiAgICBzd2l0Y2ggKGZvcnVzZXJvcHRpb24pIHtcclxuICAgICAgICBjYXNlIFwiUmVhZGxhdGVyXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJLYXlkZWRpbGVuIGfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkxpa2VcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIkJlxJ9lbmlsZW4gR8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiXHJcbiAgICAgICAgICAgIGJyZWFrOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyKXtcclxuXHJcbiAgICAgICAgICAgIGxpa2UuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHdlZXQuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2Upe1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTp1c2VyZGF0YS5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTp1c2VyZGF0YS5Vc2Vyc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiQ3JlYXRlXCIsdXNlcmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIgPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxPdXRzaWRlZGl2IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XHJcbiAgICAgICAgICAgICAgaXNjb21tZW50ID8gIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1sZWZ0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixsZWZ0OlwiLTZweFwiLHRvcDpcIjhweFwiLGNvbG9yOlwiI2ZhZjlmOVwifX0+PC9JY29uPiA6IG51bGxcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICFpc2NvbW1lbnQgPyAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwifX0gcmVmPXtyZWZ9PiAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOlwiIzJBMkEyQVwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItbWludXNcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJ1IGt1bGxhbsSxY8SxZGFuIGdlbGVuIGJpbGRpcmltbGVyaSBnw7ZybWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QmHEn2xhbnTEsSBhZHJlc2luaSBrb3B5YWxhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5LYWxkxLFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IFxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtdlwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOlwiIzJBMkEyQVwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgKDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFjaz48L0ZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJpbGRpcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8UHJvZmlsZWltYWdlaG9sZGVyIGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IGhlaWdodD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlaW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGZvbnRTaXplOlwiMTVweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiIzdEN0Q3RFwifX0+PHNwYW4+e2NhbGN1bGF0ZWRhdGUoZGF0ZSkudGltZSArIFwiIFwiICsgY2FsY3VsYXRlZGF0ZShkYXRlKS5leHByZXNzICsgXCIgw5ZuY2VcIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlXCJ9fT57Y29udGVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGVudC9baWRdXCIgYXM9e2AvY29udGVudC8ke3Bvc3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlXCIsY3Vyc29yOlwicG9pbnRlclwifX0+V2hpbGUgdGhlIENyeXB0byBQcm9mZXNzb3JzIG1heSBzZXQgc3BlY2lmaWMgcmVxdWlyZW1lbnRzIGZvciBzb21lLi4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhciBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJncmVlblwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIwLCAyNTUsIDAsIDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5yZXNob3cuaXNtYXJrZWR9IGNvbG9yPXtcImdyZWVuXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmVzaG93XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3Igb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXksXCJSZXNob3dcIil9PntlbGVtZW50cy5yZXNob3cubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJyZWRcIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMjU1LCAwLCAwLDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5MaWtlLmlzbWFya2VkfSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiTGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXksXCJMaWtlXCIpfSA+e2VsZW1lbnRzLkxpa2UubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz48c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5SZWFkbGF0ZXIuaXNtYXJrZWR9IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJSZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvU2Vjb25kUGFydD5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9