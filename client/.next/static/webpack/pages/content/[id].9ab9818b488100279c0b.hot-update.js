webpackHotUpdate_N_E("pages/content/[id]",{

/***/ "./components/shared/Contentcard.js":
/*!******************************************!*\
  !*** ./components/shared/Contentcard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\shared\\Contentcard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Likeanimaton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{font-size:16px}25%{font-size:18px}50%{font-size:21px}65%{font-size:17}70%{font-size:10px}100%{font-size:16px}"]);
var Outsidediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Outsidediv",
  componentId: "r68yrd-0"
})(["position:relative;margin:auto;height:", ";margin-bottom:30px;width:100%;background-color:", ";border-radius:7px;box-shadow:rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;"], function (_ref) {
  var draft = _ref.draft;
  return draft ? "300px" : "";
}, function (_ref2) {
  var iscomment = _ref2.iscomment;
  return !iscomment ? "#faf9f9" : "#faf9f9";
}); //This is for draft page

_c = Outsidediv;
var Softcover = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Softcover",
  componentId: "r68yrd-1"
})(["position:absolute;width:100%;height:100%;z-index:300;background-color:black;border-radius:7px;opacity:0.6;"]);
_c2 = Softcover;
var Imagediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imagediv",
  componentId: "r68yrd-2"
})(["padding-right:5px;padding-left:5px;"]);
_c3 = Imagediv;
var Imageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Imageholder",
  componentId: "r68yrd-3"
})(["flex:1;"]);
_c4 = Imageholder;
var Contentholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentholder",
  componentId: "r68yrd-4"
})(["flex:2;display:flex;flex-direction:column;"]);
_c5 = Contentholder;
var Contentdiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Contentdiv",
  componentId: "r68yrd-5"
})(["padding:", ";padding-left:15px;padding-right:15px;flex:1;"], function (_ref3) {
  var iscomment = _ref3.iscomment;
  return iscomment ? "15px" : "0px";
});
_c6 = Contentdiv;
var SecondPart = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__SecondPart",
  componentId: "r68yrd-6"
})(["display:", ";@media (max-width:540px){display:block;}"], function (_ref4) {
  var foruser = _ref4.foruser;
  return foruser ? "block" : "flex";
});
_c7 = SecondPart;
var Toolbar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Toolbar",
  componentId: "r68yrd-7"
})(["display:", ";padding-left:15px;border-radius:5px;"], function (_ref5) {
  var foruser = _ref5.foruser;
  return foruser ? "none" : "flex";
});
_c8 = Toolbar;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Contentcard__Img",
  componentId: "r68yrd-8"
})(["width:100%;height:150px;object-fit:cover;@media (max-width:540px){height:200px;}"]);
_c9 = Img;
var Spanfor = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contentcard__Spanfor",
  componentId: "r68yrd-9"
})(["margin-left:5px;&:hover{text-decoration-line:underline;cursor:pointer;}"]);
_c10 = Spanfor;
var İconholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__conholder",
  componentId: "r68yrd-10"
})(["margin-right:10px;display:flex;align-items:center;&:hover ", "{color:", ";}"], Spanfor, function (_ref6) {
  var howercolor = _ref6.howercolor;
  return howercolor;
});
var Profilediv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profilediv",
  componentId: "r68yrd-11"
})(["width:100%;padding-top:10px;padding-bottom:10px;transition:all 0.3s;"]);
_c11 = Profilediv;
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "Contentcard__Icons",
  componentId: "r68yrd-12"
})(["display:flex;justify-content:center;align-items:center;font-size:16px;transition-duration:0.5s;width:30px;height:30px;padding:5px;border-radius:50%;cursor:pointer;animation-duration:0.3s;animation-timing-function:ease-in-out;&:hover{background:rgba(", ");};color:", ";animation-name:", ";"], function (_ref7) {
  var howercolor = _ref7.howercolor;
  return howercolor;
}, function (_ref8) {
  var ismarked = _ref8.ismarked,
      color = _ref8.color;
  return ismarked ? color : "grey";
}, function (_ref9) {
  var animation = _ref9.animation;
  return animation ? Likeanimaton : "";
});
_c12 = Icons;
var Optionwindow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Optionwindow",
  componentId: "r68yrd-13"
})(["display:block;width:350px;padding:5px;position:absolute;top:35px;right:10px;border-radius:7px;box-shadow:rgba(17,17,26,0.1) 0px 8px 24px,rgba(17,17,26,0.1) 0px 16px 56px,rgba(17,17,26,0.1) 0px 24px 80px;background-color:white;z-index:480;"]);
_c13 = Optionwindow;
var Optionholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Optionholder",
  componentId: "r68yrd-14"
})(["display:flex;position:relative;align-items:center;padding:10px;border-radius:6px;&:hover{background-color:#EBEBEB;cursor:pointer;}"]);
_c14 = Optionholder;
var Draftholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contentcard__Draftholder",
  componentId: "r68yrd-15"
})(["display:flex;flex-direction:column;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:300;"]); //comment-answer section

_c15 = Draftholder;
var Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Inputholder",
  componentId: "r68yrd-16"
})(["display:flex;align-items:center;padding-left:15px;padding-bottom:15px;padding-top:15px;"]);
_c16 = Inputholder;
var Profileimageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profileimageholder",
  componentId: "r68yrd-17"
})(["cursor:pointer;position:", ";left:", ";&:before{position:absolute;top:50px;left:20px;border-radius:10px;width:100px;height:150px;border-left:2px solid lightgrey;border-bottom:2px solid lightgrey;content:\"\";}"], function (_ref10) {
  var iscomment = _ref10.iscomment;
  return iscomment ? "absolute" : "relative";
}, function (_ref11) {
  var iscomment = _ref11.iscomment;
  return iscomment ? "-60px" : "0px";
}); //içerik sayısı,takipçi sayısı,

_c17 = Profileimageholder;

function Contentcard(_ref12) {
  _s();

  var Answerhandler = _ref12.Answerhandler,
      readlater = _ref12.readlater,
      draft = _ref12.draft,
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
      animation: false,
      ismarked: false
    },
    reshow: {
      number: retweet.length,
      array: retweet,
      animation: false,
      ismarked: false
    },
    Readlater: {
      ismarked: false,
      animation: false,
      number: 0
    }
  }),
      elements = _useState[0],
      setelements = _useState[1];

  var _useClickoutside = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      ref = _useClickoutside.ref,
      visible = _useClickoutside.visible,
      setvisible = _useClickoutside.setvisible;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentanswer = _useState2[0],
      setcommentanswer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      answervalue = _useState3[0],
      setanswervalue = _useState3[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_4__["createusercontext"]),
      userdata = _useContext.userdata;

  var textforopiton = "";

  switch (foruseroption) {
    case "Readlater":
      textforopiton = "Kaydedilen gönderilerden kaldır";
      break;

    case "Like":
      textforopiton = "Beğenilen Gönderilerden kaldır";
      break;

    case "Draft":
      textforopiton = "Taslaklardan kaldır";
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
  }, [userdata]); //like , sign and save operations

  var Countplus = function Countplus(elementtype) {
    var currentelements = _objectSpread({}, elements);

    if (currentelements[elementtype].ismarked == false) {
      currentelements[elementtype].ismarked = true;
      currentelements[elementtype].animation = true;
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
      currentelements[elementtype].animation = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.splice(0, 1);
      }

      createrelationforsmh(postId, elementtype, "Destroy");
    }

    setelements(currentelements);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    draft: draft,
    iscomment: iscomment,
    children: [//draft cover
    draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Softcover, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Draftholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "far fa-edit fa-lg",
          Iconconfig: {
            zindex: "400",
            hoverback: "white",
            hovercolor: "#d90429",
            backcolor: "#d90429",
            color: "white",
            width: "60px",
            height: "60px",
            lineheight: "60px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            paddingTop: "10px",
            color: "white",
            textAlign: "center"
          },
          children: "Culture of the Ottoman Empire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 16
    }, this) : null, //left arrow
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
      lineNumber: 333,
      columnNumber: 28
    }, this) : null, //option section
    !iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          color: draft ? "white" : "#2A2A2A",
          zindex: "500"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }, this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [!draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
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
              lineNumber: 350,
              columnNumber: 45
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
                lineNumber: 352,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 41
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
              lineNumber: 357,
              columnNumber: 45
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
                lineNumber: 359,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 35
        }, this) : null, foruser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          onClick: function onClick() {
            return createrelationforsmh(postId, foruseroption, "Destroy", indexnum, foruseroption);
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
            lineNumber: 368,
            columnNumber: 37
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
              lineNumber: 370,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 16
    }, this) :
    /*#__PURE__*/
    //comment report
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        lineNumber: 384,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 15
    }, this), !draft && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profilediv, {
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
              lineNumber: 408,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
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
              lineNumber: 412,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 70
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
              lineNumber: 413,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
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
            lineNumber: 434,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 29
        }, this) : !draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            style: {
              marginBottom: "10px",
              color: "#A70909"
            },
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
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
              lineNumber: 445,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 29
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Toolbar, {
          foruser: foruser,
          children: [!iscomment && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "green",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "0, 255, 0, 0.2",
              ismarked: elements.reshow.ismarked,
              animation: elements.reshow.animation,
              color: "green",
              onClick: function onClick() {
                return Countplus("reshow");
              },
              className: "fas fa-retweet fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 457,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            howercolor: "red",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              howercolor: "255, 0, 0,0.2",
              ismarked: elements.Like.ismarked,
              animation: elements.Like.animation,
              color: "#C72121",
              onClick: function onClick() {
                return Countplus("Like");
              },
              className: "fas fa-heart fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AddComment"], {
              onClick: function onClick() {
                return setcommentanswer(!commentanswer);
              },
              style: {
                color: "grey",
                cursor: "pointer"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 474,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 464,
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
              animation: elements.Readlater.animation,
              color: "black",
              onClick: function onClick() {
                return Countplus("Readlater");
              },
              className: "fas fa-bookmark"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 476,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 21
        }, this), commentanswer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            value: answervalue,
            onChange: function onChange(e) {
              return setanswervalue(e.target.value);
            },
            InputProps: {
              style: {
                cursor: "pointer"
              },
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputAdornment"], {
                onClick: function onClick() {
                  return Answerhandler(commentanswer, postId);
                },
                style: {
                  color: answervalue.length > 0 ? "#e63946" : "grey"
                },
                position: "end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Send"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 488,
                  columnNumber: 192
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 315,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "QmyIKJG7vo1KteixZ5Vd3JP+EQw=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c18 = Contentcard;
/* harmony default export */ __webpack_exports__["default"] = (_c19 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Contentcard));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;

$RefreshReg$(_c, "Outsidediv");
$RefreshReg$(_c2, "Softcover");
$RefreshReg$(_c3, "Imagediv");
$RefreshReg$(_c4, "Imageholder");
$RefreshReg$(_c5, "Contentholder");
$RefreshReg$(_c6, "Contentdiv");
$RefreshReg$(_c7, "SecondPart");
$RefreshReg$(_c8, "Toolbar");
$RefreshReg$(_c9, "Img");
$RefreshReg$(_c10, "Spanfor");
$RefreshReg$(_c11, "Profilediv");
$RefreshReg$(_c12, "Icons");
$RefreshReg$(_c13, "Optionwindow");
$RefreshReg$(_c14, "Optionholder");
$RefreshReg$(_c15, "Draftholder");
$RefreshReg$(_c16, "Inputholder");
$RefreshReg$(_c17, "Profileimageholder");
$RefreshReg$(_c18, "Contentcard");
$RefreshReg$(_c19, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJDb250ZW50Y2FyZCIsIkFuc3dlcmhhbmRsZXIiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJjb250ZW50IiwidGl0bGVpbWFnZSIsInRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb25mb3JzbWgiLCJwb3N0SWQiLCJmb3J1c2Vyb3B0aW9uIiwiaW5kZXhudW0iLCJ1c2VyaWQiLCJ1c2VTdGF0ZSIsIkxpa2UiLCJudW1iZXIiLCJsZW5ndGgiLCJhcnJheSIsInJlc2hvdyIsIlJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJ1c2VDbGlja291dHNpZGUiLCJyZWYiLCJ2aXNpYmxlIiwic2V0dmlzaWJsZSIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwiYW5zd2VydmFsdWUiLCJzZXRhbnN3ZXJ2YWx1ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwidGV4dGZvcm9waXRvbiIsInVzZUVmZmVjdCIsImN1cnJlbnRlbGVtZW50cyIsImZvckVhY2giLCJ1c2VyIiwiVXNlcklkIiwiaWQiLCJJbmRleG9mY3VycmVudHVzZXIiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidW5zaGlmdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiZmlyc3RuYW1lIiwiVXNlcm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJzdXJuYW1lIiwiemluZGV4IiwiaG92ZXJiYWNrIiwiaG92ZXJjb2xvciIsImJhY2tjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibGluZWhlaWdodCIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJtYXJnaW5SaWdodCIsImNhbGN1bGF0ZWRhdGUiLCJ0aW1lIiwiZXhwcmVzcyIsIndvcmRCcmVhayIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlIiwiZW5kQWRvcm5tZW50IiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQsc0hBQWxCO0FBUUEsSUFBTUMsVUFBVSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJNQUdQO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FBWUEsS0FBSyxHQUFHLE9BQUgsR0FBYSxFQUE5QjtBQUFBLENBSE8sRUFNRztBQUFBLE1BQUVDLFNBQUYsU0FB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YUFBRCxFQUFlakIsTUFBZixDQUFqQjtBQUFBLGlCQUF6QjtBQUFrRSxxQkFBSyxFQUFFO0FBQUN0Qix1QkFBSyxFQUFDeUMsV0FBVyxDQUFDWixNQUFaLEdBQXFCLENBQXJCLEdBQTBCLFNBQTFCLEdBQXFDO0FBQTVDLGlCQUF6RTtBQUE4SCx3QkFBUSxFQUFDLEtBQXZJO0FBQUEsdUNBQTZJLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZOLGFBSGhCO0FBT0ksaUJBQUssRUFBQyxxQkFQVjtBQU9nQyxnQkFBSSxFQUFDLE9BUHJDO0FBTzZDLG1CQUFPLEVBQUM7QUFQckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXdMSDs7R0FqVFF0QixXO1VBcUI0QjRCLDREOzs7T0FyQjVCNUIsVztBQW9UTSxtRkFBQTJGLDRDQUFLLENBQUNDLElBQU4sQ0FBVzVGLFdBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uOWFiOTgxOGI0ODgxMDAyNzljMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL1VJL0ljb25cIlxyXG5pbXBvcnQge0FkZENvbW1lbnQsIGZlZWQsIEZlZWRiYWNrLFNlbmR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gXCIuLi8uLi9ob29rcy9DbGlrY291dGlzZGVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkICwgQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG4yNSUge2ZvbnQtc2l6ZToxOHB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG42NSUge2ZvbnQtc2l6ZToxN31cclxuNzAlIHtmb250LXNpemU6MTBweH1cclxuMTAwJSB7Zm9udC1zaXplOjE2cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbmhlaWdodDokeyh7ZHJhZnR9KT0+IGRyYWZ0ID8gXCIzMDBweFwiIDogXCJcIn07XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PiFpc2NvbW1lbnQgPyBcIiNmYWY5ZjlcIjogXCIjZmFmOWY5XCJ9O1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcblxyXG5gXHJcblxyXG4vL1RoaXMgaXMgZm9yIGRyYWZ0IHBhZ2VcclxuY29uc3QgU29mdGNvdmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OjMwMDtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbm9wYWNpdHk6MC42O1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXJpZ2h0OjVweDtcclxucGFkZGluZy1sZWZ0OjVweDtcclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuYFxyXG5jb25zdCBDb250ZW50ZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6ICR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCIxNXB4XCI6IFwiMHB4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG5mbGV4OjE7XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZFBhcnQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcImJsb2NrXCI6XCJmbGV4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJub25lXCIgOiBcImZsZXhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNwYW5mb3IgPSBzdHlsZWQuc3BhbmBcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG4mOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOnVuZGVybGluZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuJjogaG92ZXIgJHtTcGFuZm9yfXtcclxuICAgIGNvbG9yOiR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy10b3A6MTBweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBJY29ucz1zdHlsZWQuaWBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5hbmltYXRpb24tZHVyYXRpb246MC4zcztcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoJHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn0pO1xyXG59O1xyXG5jb2xvcjokeyh7aXNtYXJrZWQsY29sb3J9KT0+aXNtYXJrZWQgPyBjb2xvciA6IFwiZ3JleVwiIH07XHJcbmFuaW1hdGlvbi1uYW1lOiR7KHthbmltYXRpb259KT0+YW5pbWF0aW9uID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6YmxvY2s7XHJcbndpZHRoOjM1MHB4O1xyXG5wYWRkaW5nOjVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozNXB4O1xyXG5yaWdodDoxMHB4OyBcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDo0ODA7XHJcbmBcclxuY29uc3QgT3B0aW9uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IERyYWZ0aG9sZGVyID0gc3R5bGVkLnNwYW5gXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG56LWluZGV4OjMwMDtcclxuYFxyXG5cclxuLy9jb21tZW50LWFuc3dlciBzZWN0aW9uXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVpbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjsgXHJcbnBvc2l0aW9uOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwifTtcclxubGVmdDokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiLTYwcHhcIiA6IFwiMHB4XCJ9O1xyXG4mOmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwcHg7XHJcbiAgICBsZWZ0OjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcblxyXG59XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZnVuY3Rpb24gQ29udGVudGNhcmQoe0Fuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbY29tbWVudGFuc3dlcixzZXRjb21tZW50YW5zd2VyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5zd2VydmFsdWUsc2V0YW5zd2VydmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG5cclxuXHJcbiAgICB2YXIgdGV4dGZvcm9waXRvbj1cIlwiO1xyXG4gICAgc3dpdGNoIChmb3J1c2Vyb3B0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIlJlYWRsYXRlclwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiS2F5ZGVkaWxlbiBnw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJMaWtlXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRHJhZnRcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIlRhc2xha2xhcmRhbiBrYWxkxLFyXCIgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuXHJcbiAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuXHJcbiAgICAgICAgaWYoIWZvcnVzZXIpe1xyXG5cclxuICAgICAgICAgICAgbGlrZS5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0d2VldC5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmVhZGxhdGVyLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIlJlYWRsYXRlclwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgLy9saWtlICwgc2lnbiBhbmQgc2F2ZSBvcGVyYXRpb25zXHJcbiAgICBjb25zdCBDb3VudHBsdXM9KGVsZW1lbnR0eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuICBcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PWZhbHNlKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6dXNlcmRhdGEuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6dXNlcmRhdGEuVXNlcnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJDcmVhdGVcIix1c2VyaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIgPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiRGVzdHJveVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiAgZHJhZnQ9e2RyYWZ0fSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgLy9kcmFmdCBjb3ZlclxyXG4gICAgICAgICAgICAgICBkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2Z0Y292ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEtbGdcIiBJY29uY29uZmlnPXt7emluZGV4OlwiNDAwXCIsaG92ZXJiYWNrOlwid2hpdGVcIixob3ZlcmNvbG9yOlwiI2Q5MDQyOVwiLGJhY2tjb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI2MHB4XCIsaGVpZ2h0OlwiNjBweFwiLGxpbmVoZWlnaHQ6XCI2MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5DdWx0dXJlIG9mIHRoZSBPdHRvbWFuIEVtcGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vb3B0aW9uIHNlY3Rpb25cclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItbWludXNcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5EdWhhbiDDlnp0w7xyayfDvCB0YWtpcHRlbiDDp8SxazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJ1IGt1bGxhbsSxY8SxZGFuIGdlbGVuIGJpbGRpcmltbGVyaSBnw7ZybWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5QYXlsYcWfPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QmHEn2xhbnTEsSBhZHJlc2luaSBrb3B5YWxhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBvbkNsaWNrPXsoKT0+Y3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGZvcnVzZXJvcHRpb24sXCJEZXN0cm95XCIsaW5kZXhudW0sZm9ydXNlcm9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0IGZhLXNtXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5LYWxkxLFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19Pnt0ZXh0Zm9yb3BpdG9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgLy9jb21tZW50IHJlcG9ydFxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy12XCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6XCIjMkEyQTJBXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAoPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrPjwvRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlsZGlyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWRyYWZ0ICYmXHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlaW1hZ2Vob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gaGVpZ2h0PXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBwcm9maWxlPXtwcm9maWxlaW1hZ2V9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlaW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiIzdEN0Q3RFwifX0+PHNwYW4+e2NhbGN1bGF0ZWRhdGUoZGF0ZSkudGltZSArIFwiIFwiICsgY2FsY3VsYXRlZGF0ZShkYXRlKS5leHByZXNzICsgXCIgw5ZuY2VcIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgPFNlY29uZFBhcnQgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCB8fCBkcmFmdCA/IG51bGwgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyIGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZVwifX0+e2NvbnRlbnR9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRlbnQvW2lkXVwiIGFzPXtgL2NvbnRlbnQvJHtwb3N0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZVwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc2NvbW1lbnQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJncmVlblwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMCwgMjU1LCAwLCAwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMucmVzaG93LmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLnJlc2hvdy5hbmltYXRpb259IGNvbG9yPXtcImdyZWVuXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwicmVzaG93XCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLXJldHdlZXQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LFwiUmVzaG93XCIpfT57ZWxlbWVudHMucmVzaG93Lm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwicmVkXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjI1NSwgMCwgMCwwLjJcIiBpc21hcmtlZD17ZWxlbWVudHMuTGlrZS5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5MaWtlLmFuaW1hdGlvbn0gY29sb3I9e1wiI0M3MjEyMVwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcIkxpa2VcIil9IGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciAgb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LFwiTGlrZVwiKX0gPntlbGVtZW50cy5MaWtlLm51bWJlcn08L1NwYW5mb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRDb21tZW50IG9uQ2xpY2s9eygpPT5zZXRjb21tZW50YW5zd2VyKCFjb21tZW50YW5zd2VyKX0gIHN0eWxlPXt7Y29sb3I6XCJncmV5XCIsY3Vyc29yOlwicG9pbnRlclwifX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMuUmVhZGxhdGVyLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLlJlYWRsYXRlci5hbmltYXRpb259IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJSZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudGFuc3dlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VydmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0YW5zd2VydmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6e2N1cnNvcjpcInBvaW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IG9uQ2xpY2s9eygpPT5BbnN3ZXJoYW5kbGVyKGNvbW1lbnRhbnN3ZXIscG9zdElkKX0gc3R5bGU9e3tjb2xvcjphbnN3ZXJ2YWx1ZS5sZW5ndGggPiAwID8gIFwiI2U2Mzk0NlwiOiBcImdyZXlcIn19IHBvc2l0aW9uPVwiZW5kXCI+PFNlbmQ+PC9TZW5kPjwvSW5wdXRBZG9ybm1lbnQ+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3J1bWEgQ2V2YXAgVmVyLi4uXCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvU2Vjb25kUGFydD5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudGNhcmQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9