webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _utilsfunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilsfunc */ "./utilsfunc.js");
/* harmony import */ var _hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/Clikcoutisde */ "./hooks/Clikcoutisde.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




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
})(["padding:", ";padding-left:15px;width:100%;padding-right:15px;flex:1;"], function (_ref3) {
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
})(["cursor:pointer;position:", ";left:", ";&:before{position:absolute;top:50px;left:20px;border-radius:10px;width:", ";height:", "px;border-left:2px solid lightgrey;border-bottom:2px solid lightgrey;content:\"\";};&:after{position:absolute;top:20px;left:-40px;border-radius:10px;width:", "px;z-index:-5;border-left:2px solid lightgrey;border-top:2px solid lightgrey;content:\"\";}"], function (_ref10) {
  var iscomment = _ref10.iscomment;
  return iscomment ? "absolute" : "relative";
}, function (_ref11) {
  var iscomment = _ref11.iscomment;
  return iscomment ? "-60px" : "0px";
}, function (_ref12) {
  var length = _ref12.length;
  return length;
}, function (_ref13) {
  var length = _ref13.length;
  return length * 150;
}, function (_ref14) {
  var length = _ref14.length;
  return length * 50;
}); //içerik sayısı,takipçi sayısı,

_c17 = Profileimageholder;

function Contentcard(_ref15) {
  _s();

  var imagefilename = _ref15.imagefilename,
      Editcommenthandler = _ref15.Editcommenthandler,
      imagetoken = _ref15.imagetoken,
      Childlength = _ref15.Childlength,
      Answerhandler = _ref15.Answerhandler,
      readlater = _ref15.readlater,
      draft = _ref15.draft,
      profileimage = _ref15.profileimage,
      content = _ref15.content,
      titleimage = _ref15.titleimage,
      title = _ref15.title,
      iscomment = _ref15.iscomment,
      username = _ref15.username,
      usersurname = _ref15.usersurname,
      date = _ref15.date,
      comment = _ref15.comment,
      retweet = _ref15.retweet,
      like = _ref15.like,
      showwindow = _ref15.showwindow,
      createrelationforsmh = _ref15.createrelationforsmh,
      postId = _ref15.postId,
      foruser = _ref15.foruser,
      foruseroption = _ref15.foruseroption,
      indexnum = _ref15.indexnum,
      userid = _ref15.userid;

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

  var _useClickoutside = Object(_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      ref = _useClickoutside.ref,
      visible = _useClickoutside.visible,
      setvisible = _useClickoutside.setvisible;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentanswer = _useState2[0],
      setcommentanswer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      answervalue = _useState3[0],
      setanswervalue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      editcomment = _useState4[0],
      seteditcomment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(content),
      commenteditvalue = _useState5[0],
      setcommenteditvalue = _useState5[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_Usercontext__WEBPACK_IMPORTED_MODULE_4__["createusercontext"]),
      userdata = _useContext.userdata;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
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

    if (!foruser && userdata.UserId) {
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

    if (currentelements[elementtype].ismarked == false && userdata.UserId) {
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
    } else if (currentelements[elementtype].ismarked == true && userdata.UserId) {
      currentelements[elementtype].ismarked = false;
      currentelements[elementtype].animation = false;
      currentelements[elementtype].number = currentelements[elementtype].number - 1;

      if (elementtype == "reshow" || elementtype == "Like") {
        currentelements[elementtype].array.splice(0, 1);
      }

      createrelationforsmh(postId, elementtype, "Destroy");
    } else {
      router.push("/login");
    }

    setelements(currentelements);
  };

  var Editcommentactiveness = function Editcommentactiveness(determiner) {
    if (determiner == "cancel") {
      seteditcomment(false);
      setcommenteditvalue(content);
      return;
    } else if (determiner == "save") {
      Editcommenthandler({
        message: commenteditvalue,
        commentID: postId
      });
    }

    seteditcomment(true);
    setvisible(false); //turning off option window

    setcommentanswer(false); //turning off other things
  };

  var Makeacomment = function Makeacomment() {
    Answerhandler(answervalue, postId);
    setanswervalue("");
    setcommentanswer(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Outsidediv, {
    draft: draft,
    iscomment: iscomment,
    children: [//draft cover
    draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Softcover, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Draftholder, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
          lineNumber: 371,
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
          lineNumber: 372,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 16
    }, this) : null, //Comment Left Icon
    iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "fas fa-caret-left fa-lg",
      Iconconfig: {
        position: "absolute",
        left: "-6px",
        top: "8px",
        color: "#faf9f9"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 28
    }, this) : null, //Options on top right
    !iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        lineNumber: 389,
        columnNumber: 21
      }, this), visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [!draft ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            style: {
              display: userdata.UserId ? "flex" : "none"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "fas fa-user-minus",
              Iconconfig: {
                width: "35px",
                backcolor: "#DEDEDE",
                height: "35px",
                lineheight: "32px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
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
                lineNumber: 399,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "fas fa-link",
              Iconconfig: {
                width: "35px",
                backcolor: "#DEDEDE",
                height: "35px",
                lineheight: "32px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
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
                lineNumber: 406,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 407,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 35
        }, this) : null, foruser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          onClick: function onClick() {
            return createrelationforsmh(postId, foruseroption, "Destroy", indexnum, foruseroption);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "fas fa-trash-alt fa-sm",
            Iconconfig: {
              width: "35px",
              backcolor: "#DEDEDE",
              height: "35px",
              lineheight: "32px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
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
              lineNumber: 417,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 16
    }, this) :
    /*#__PURE__*/
    //comment report
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        lineNumber: 431,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: userid == userdata.UserId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            onClick: Editcommentactiveness,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Edit"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Duzenle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 442,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Delete"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Yorumu Sil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 33
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 430,
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
          length: Childlength,
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
              profile: "https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/".concat(imagefilename, "?alt=media&token=").concat(imagetoken)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 25
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
              lineNumber: 480,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 74
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "auto",
              fontSize: "13px",
              marginRight: "10px",
              color: "#7D7D7D"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_10__["calculatedate"])(date).time + " " + Object(_utilsfunc__WEBPACK_IMPORTED_MODULE_10__["calculatedate"])(date).express + " Önce"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 113
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: editcomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
            InputProps: {
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["InputAdornment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  onClick: function onClick() {
                    return Editcommentactiveness("save");
                  },
                  style: {
                    backgroundColor: "#e63946",
                    color: "white",
                    textTransform: "capitalize",
                    position: "relative",
                    bottom: "10px",
                    marginRight: "5px"
                  },
                  variant: "contained",
                  size: "small",
                  children: "Kaydet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 508,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  onClick: function onClick() {
                    return Editcommentactiveness("cancel");
                  },
                  color: "primary",
                  style: {
                    textTransform: "capitalize",
                    position: "relative",
                    bottom: "10px"
                  },
                  variant: "contained",
                  size: "small",
                  children: "iptal"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 41
              }, this)
            },
            style: {
              width: "100%"
            },
            onChange: function onChange(e) {
              return setcommenteditvalue(e.target.value);
            },
            value: commenteditvalue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 505,
            columnNumber: 37
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "break-word"
            },
            children: commenteditvalue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 501,
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
            lineNumber: 531,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/content/[id]",
            as: "/content/".concat(postId),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                textAlign: "left",
                wordBreak: "break-word",
                cursor: "pointer"
              },
              children: "While the Crypto Professors may set specific requirements for some...."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 532,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 530,
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
              lineNumber: 544,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 545,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 543,
            columnNumber: 29
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
              lineNumber: 549,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 550,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 548,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["AddComment"], {
              onClick: function onClick() {
                return setcommentanswer(!commentanswer);
              },
              style: {
                color: "grey",
                cursor: "pointer"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 556,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 560,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 552,
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
              lineNumber: 565,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 21
        }, this), commentanswer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
            value: answervalue,
            onChange: function onChange(e) {
              return setanswervalue(e.target.value);
            },
            InputProps: {
              style: {
                cursor: "pointer"
              },
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["InputAdornment"], {
                onClick: Makeacomment,
                style: {
                  color: answervalue.length > 0 ? "#e63946" : "grey"
                },
                position: "end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Send"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 576,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 576,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 571,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "pDlvFlRHuIKjH3/4YRpZOVExotE=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_11__["default"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJsZW5ndGgiLCJDb250ZW50Y2FyZCIsImltYWdlZmlsZW5hbWUiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJpbWFnZXRva2VuIiwiQ2hpbGRsZW5ndGgiLCJBbnN3ZXJoYW5kbGVyIiwicmVhZGxhdGVyIiwicHJvZmlsZWltYWdlIiwiY29udGVudCIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJjb21tZW50YW5zd2VyIiwic2V0Y29tbWVudGFuc3dlciIsImFuc3dlcnZhbHVlIiwic2V0YW5zd2VydmFsdWUiLCJlZGl0Y29tbWVudCIsInNldGVkaXRjb21tZW50IiwiY29tbWVudGVkaXR2YWx1ZSIsInNldGNvbW1lbnRlZGl0dmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInRleHRmb3JvcGl0b24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50ZWxlbWVudHMiLCJVc2VySWQiLCJmb3JFYWNoIiwidXNlciIsImlkIiwiSW5kZXhvZmN1cnJlbnR1c2VyIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsImZpcnN0bmFtZSIsIlVzZXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vyc3VybmFtZSIsInB1c2giLCJFZGl0Y29tbWVudGFjdGl2ZW5lc3MiLCJkZXRlcm1pbmVyIiwibWVzc2FnZSIsImNvbW1lbnRJRCIsIk1ha2VhY29tbWVudCIsInppbmRleCIsImhvdmVyYmFjayIsImhvdmVyY29sb3IiLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJlbmRBZG9ybm1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm90dG9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwid29yZEJyZWFrIiwibWFyZ2luQm90dG9tIiwiY3Vyc29yIiwiZmxleCIsImp1c3RpZnlDb250ZW50Iiwic3R5bGUiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3Mi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RkFBQTZHLDRDQUFLLENBQUNDLElBQU4sQ0FBVzlHLFdBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZTUzODA1NTczZWNhNTczNTc1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQse2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRldXNlcmNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJjb250ZXh0XCI7XHJcbmltcG9ydCB7UG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL1VJL0ljb25cIlxyXG5pbXBvcnQge0FkZENvbW1lbnQsZmVlZCxGZWVkYmFjayxTZW5kLERlbGV0ZSwgRWRpdH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7Y2FsY3VsYXRlZGF0ZX0gZnJvbSBcIi4uLy4uL3V0aWxzZnVuY1wiXHJcbmltcG9ydCB1c2VDbGlja291dHNpZGUgZnJvbSBcIi4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgLCBCdXR0b24sSW5wdXRBZG9ybm1lbnR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCBMaWtlYW5pbWF0b249a2V5ZnJhbWVzYFxyXG4wJSB7Zm9udC1zaXplOjE2cHh9XHJcbjI1JSB7Zm9udC1zaXplOjE4cHh9XHJcbjUwJSB7Zm9udC1zaXplOjIxcHh9XHJcbjY1JSB7Zm9udC1zaXplOjE3fVxyXG43MCUge2ZvbnQtc2l6ZToxMHB4fVxyXG4xMDAlIHtmb250LXNpemU6MTZweH1cclxuYFxyXG5jb25zdCBPdXRzaWRlZGl2PXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5tYXJnaW46YXV0bztcclxuaGVpZ2h0OiR7KHtkcmFmdH0pPT4gZHJhZnQgPyBcIjMwMHB4XCIgOiBcIlwifTtcclxubWFyZ2luLWJvdHRvbTozMHB4O1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2NvbW1lbnR9KT0+IWlzY29tbWVudCA/IFwiI2ZhZjlmOVwiOiBcIiNmYWY5ZjlcIn07XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcclxuXHJcbmBcclxuXHJcbi8vVGhpcyBpcyBmb3IgZHJhZnQgcGFnZVxyXG5jb25zdCBTb2Z0Y292ZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjEwMCU7XHJcbnotaW5kZXg6MzAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxub3BhY2l0eTowLjY7XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmctcmlnaHQ6NXB4O1xyXG5wYWRkaW5nLWxlZnQ6NXB4O1xyXG5gXHJcbmNvbnN0IEltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MTtcclxuYFxyXG5jb25zdCBDb250ZW50aG9sZGVyPXN0eWxlZC5kaXZgXHJcbmZsZXg6MjtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblxyXG5gXHJcbmNvbnN0IENvbnRlbnRkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZzogJHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIjE1cHhcIjogXCIwcHhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbmZsZXg6MTtcclxuYFxyXG5cclxuY29uc3QgU2Vjb25kUGFydCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwiYmxvY2tcIjpcImZsZXhcIn07XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgVG9vbGJhcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBJbWc9c3R5bGVkLmltZ2Bcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjE1MHB4O1xyXG5vYmplY3QtZml0OmNvdmVyO1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgU3BhbmZvciA9IHN0eWxlZC5zcGFuYFxyXG5tYXJnaW4tbGVmdDo1cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6dW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgxLBjb25ob2xkZXI9c3R5bGVkLmRpdmBcclxubWFyZ2luLXJpZ2h0OjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4mOiBob3ZlciAke1NwYW5mb3J9e1xyXG4gICAgY29sb3I6JHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn07XHJcbn1cclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZWRpdj1zdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nLXRvcDoxMHB4O1xyXG5wYWRkaW5nLWJvdHRvbToxMHB4O1xyXG50cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IEljb25zPXN0eWxlZC5pYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuZm9udC1zaXplOjE2cHg7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjowLjNzO1xyXG5hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgkeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfSk7XHJcbn07XHJcbmNvbG9yOiR7KHtpc21hcmtlZCxjb2xvcn0pPT5pc21hcmtlZCA/IGNvbG9yIDogXCJncmV5XCIgfTtcclxuYW5pbWF0aW9uLW5hbWU6JHsoe2FuaW1hdGlvbn0pPT5hbmltYXRpb24gPyBMaWtlYW5pbWF0b24gOiBcIlwifTtcclxuYFxyXG5jb25zdCBPcHRpb253aW5kb3c9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpibG9jaztcclxud2lkdGg6MzUwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjM1cHg7XHJcbnJpZ2h0OjEwcHg7IFxyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCA4cHggMjRweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAxNnB4IDU2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMjRweCA4MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG56LWluZGV4OjQ4MDtcclxuYFxyXG5jb25zdCBPcHRpb25ob2xkZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG4mOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUJFQkVCO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgRHJhZnRob2xkZXIgPSBzdHlsZWQuc3BhbmBcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo1MCU7XHJcbmxlZnQ6NTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbnotaW5kZXg6MzAwO1xyXG5gXHJcblxyXG4vL2NvbW1lbnQtYW5zd2VyIHNlY3Rpb25cclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctYm90dG9tOjE1cHg7XHJcbnBhZGRpbmctdG9wOjE1cHg7XHJcbmBcclxuY29uc3QgUHJvZmlsZWltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyOyBcclxucG9zaXRpb246JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCJ9O1xyXG5sZWZ0OiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCItNjBweFwiIDogXCIwcHhcIn07XHJcbiY6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTBweDtcclxuICAgIGxlZnQ6MjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiR7KHtsZW5ndGh9KT0+bGVuZ3RofTtcclxuICAgIGhlaWdodDokeyh7bGVuZ3RofSk9Pmxlbmd0aCoxNTB9cHg7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG59O1xyXG4mOmFmdGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIGxlZnQ6LTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDokeyh7bGVuZ3RofSk9Pmxlbmd0aCo1MH1weDtcclxuICAgIHotaW5kZXg6LTU7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXRvcDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG59XHJcbmBcclxuXHJcbi8vacOnZXJpayBzYXnEsXPEsSx0YWtpcMOnaSBzYXnEsXPEsSxcclxuZnVuY3Rpb24gQ29udGVudGNhcmQoe2ltYWdlZmlsZW5hbWUsRWRpdGNvbW1lbnRoYW5kbGVyLGltYWdldG9rZW4sQ2hpbGRsZW5ndGgsQW5zd2VyaGFuZGxlcixyZWFkbGF0ZXIsZHJhZnQscHJvZmlsZWltYWdlLGNvbnRlbnQsdGl0bGVpbWFnZSx0aXRsZSxpc2NvbW1lbnQsdXNlcm5hbWUsdXNlcnN1cm5hbWUsZGF0ZSxjb21tZW50LHJldHdlZXQsbGlrZSxzaG93d2luZG93LGNyZWF0ZXJlbGF0aW9uZm9yc21oLHBvc3RJZCxmb3J1c2VyLGZvcnVzZXJvcHRpb24saW5kZXhudW0sdXNlcmlkfSl7XHJcbiAgICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6bGlrZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2hvdzp7XHJcbiAgICAgICAgICAgIG51bWJlcjpyZXR3ZWV0Lmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6cmV0d2VldCxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgbnVtYmVyOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZGUoKTtcclxuICAgIGNvbnN0IFtjb21tZW50YW5zd2VyLHNldGNvbW1lbnRhbnN3ZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbnN3ZXJ2YWx1ZSxzZXRhbnN3ZXJ2YWx1ZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZWRpdGNvbW1lbnQsc2V0ZWRpdGNvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY29tbWVudGVkaXR2YWx1ZSxzZXRjb21tZW50ZWRpdHZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpXHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcbiAgICB2YXIgdGV4dGZvcm9waXRvbj1cIlwiO1xyXG4gICAgc3dpdGNoIChmb3J1c2Vyb3B0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIlJlYWRsYXRlclwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiS2F5ZGVkaWxlbiBnw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJMaWtlXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRHJhZnRcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIlRhc2xha2xhcmRhbiBrYWxkxLFyXCIgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuXHJcbiAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuXHJcbiAgICAgICAgaWYoIWZvcnVzZXIgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGxpa2UuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHdlZXQuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIC8vbGlrZSAsIHNpZ24gYW5kIHNhdmUgb3BlcmF0aW9uc1xyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTp1c2VyZGF0YS5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTp1c2VyZGF0YS5Vc2Vyc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkNyZWF0ZVwiLHVzZXJpZCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PXRydWUgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249ZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyID0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXItMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkRlc3Ryb3lcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEVkaXRjb21tZW50YWN0aXZlbmVzcz0oZGV0ZXJtaW5lcik9PntcclxuXHJcbiAgICAgICAgaWYoZGV0ZXJtaW5lciA9PSBcImNhbmNlbFwiKXtcclxuXHJcbiAgICAgICAgICAgIHNldGVkaXRjb21tZW50KGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRjb21tZW50ZWRpdHZhbHVlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYoZGV0ZXJtaW5lciA9PSBcInNhdmVcIil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFZGl0Y29tbWVudGhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpjb21tZW50ZWRpdHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudElEOnBvc3RJZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVkaXRjb21tZW50KHRydWUpXHJcbiAgICAgICAgc2V0dmlzaWJsZShmYWxzZSkvL3R1cm5pbmcgb2ZmIG9wdGlvbiB3aW5kb3dcclxuICAgICAgICBzZXRjb21tZW50YW5zd2VyKGZhbHNlKS8vdHVybmluZyBvZmYgb3RoZXIgdGhpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgTWFrZWFjb21tZW50PSgpPT57XHJcbiAgICAgICAgQW5zd2VyaGFuZGxlcihhbnN3ZXJ2YWx1ZSxwb3N0SWQpXHJcbiAgICAgICAgc2V0YW5zd2VydmFsdWUoXCJcIilcclxuICAgICAgICBzZXRjb21tZW50YW5zd2VyKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgIDxPdXRzaWRlZGl2ICBkcmFmdD17ZHJhZnR9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAvL2RyYWZ0IGNvdmVyXHJcbiAgICAgICAgICAgICAgIGRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvZnRjb3Zlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdCBmYS1sZ1wiIEljb25jb25maWc9e3t6aW5kZXg6XCI0MDBcIixob3ZlcmJhY2s6XCJ3aGl0ZVwiLGhvdmVyY29sb3I6XCIjZDkwNDI5XCIsYmFja2NvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIix3aWR0aDpcIjYwcHhcIixoZWlnaHQ6XCI2MHB4XCIsbGluZWhlaWdodDpcIjYwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkN1bHR1cmUgb2YgdGhlIE90dG9tYW4gRW1waXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9Db21tZW50IExlZnQgSWNvblxyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vT3B0aW9ucyBvbiB0b3AgcmlnaHRcclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgc3R5bGU9e3tkaXNwbGF5OnVzZXJkYXRhLlVzZXJJZCA/IFwiZmxleFwiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICg8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZCA9PSB1c2VyZGF0YS5Vc2VySWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBvbkNsaWNrPXtFZGl0Y29tbWVudGFjdGl2ZW5lc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdD48L0VkaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1emVubGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGU+PC9EZWxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvcnVtdSBTaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFjaz48L0ZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlsZGlyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZHJhZnQgJiZcclxuICAgICAgICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZWltYWdlaG9sZGVyIGxlbmd0aD17Q2hpbGRsZW5ndGh9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBoZWlnaHQ9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IHByb2ZpbGU9e2BodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215bmV4dC1hMDc0YS5hcHBzcG90LmNvbS9vLyR7aW1hZ2VmaWxlbmFtZX0/YWx0PW1lZGlhJnRva2VuPSR7aW1hZ2V0b2tlbn1gfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlaW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGZvbnRTaXplOlwiMTVweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiIzdEN0Q3RFwifX0+PHNwYW4+e2NhbGN1bGF0ZWRhdGUoZGF0ZSkudGltZSArIFwiIFwiICsgY2FsY3VsYXRlZGF0ZShkYXRlKS5leHByZXNzICsgXCIgw5ZuY2VcIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50IHx8IGRyYWZ0ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0Y29tbWVudCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7ZW5kQWRvcm5tZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkVkaXRjb21tZW50YWN0aXZlbmVzcyhcInNhdmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2U2Mzk0NlwiLGNvbG9yOlwid2hpdGVcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3R0b206XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCI1cHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5ZGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+RWRpdGNvbW1lbnRhY3RpdmVuZXNzKFwiY2FuY2VsXCIpfSBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGJvdHRvbTpcIjEwcHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXB0YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRjb21tZW50ZWRpdHZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudGVkaXR2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0+e2NvbW1lbnRlZGl0dmFsdWV9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGVudC9baWRdXCIgYXM9e2AvY29udGVudC8ke3Bvc3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzY29tbWVudCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5yZXNob3cuYW5pbWF0aW9ufSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlc2hvd1wiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheSxcIlJlc2hvd1wiKX0+e2VsZW1lbnRzLnJlc2hvdy5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cInJlZFwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIyNTUsIDAsIDAsMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLkxpa2UuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuTGlrZS5hbmltYXRpb259IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJMaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3IgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudCBvbkNsaWNrPXsoKT0+c2V0Y29tbWVudGFuc3dlcighY29tbWVudGFuc3dlcil9ICBzdHlsZT17e2NvbG9yOlwiZ3JleVwiLGN1cnNvcjpcInBvaW50ZXJcIn19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5SZWFkbGF0ZXIuYW5pbWF0aW9ufSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiUmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRhbnN3ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFuc3dlcnZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjdXJzb3I6XCJwb2ludGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBvbkNsaWNrPXtNYWtlYWNvbW1lbnR9IHN0eWxlPXt7Y29sb3I6YW5zd2VydmFsdWUubGVuZ3RoID4gMCA/ICBcIiNlNjM5NDZcIjogXCJncmV5XCJ9fSBwb3NpdGlvbj1cImVuZFwiPjxTZW5kPjwvU2VuZD48L0lucHV0QWRvcm5tZW50PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW9ydW1hIENldmFwIFZlci4uLlwiIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L1NlY29uZFBhcnQ+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRlbnRjYXJkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==