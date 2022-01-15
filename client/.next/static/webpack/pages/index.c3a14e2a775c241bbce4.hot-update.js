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
      loading_commentedit = _useState2[0],
      setloading_commentedit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentanswer = _useState3[0],
      setcommentanswer = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      answervalue = _useState4[0],
      setanswervalue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      editcomment = _useState5[0],
      seteditcomment = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(content),
      commenteditvalue = _useState6[0],
      setcommenteditvalue = _useState6[1];

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
      setloading_commentedit(true);
      Editcommenthandler({
        message: commenteditvalue,
        commentID: postId,
        setloading: setloading_commentedit
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
        lineNumber: 370,
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
          lineNumber: 372,
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
          lineNumber: 373,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
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
      lineNumber: 381,
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
        lineNumber: 390,
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
              lineNumber: 398,
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
                lineNumber: 400,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 397,
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
              lineNumber: 405,
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
                lineNumber: 407,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 396,
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
            lineNumber: 416,
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
              lineNumber: 418,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 388,
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
        lineNumber: 432,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: userid == userdata.UserId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            onClick: Editcommentactiveness,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Edit"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Duzenle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 443,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Delete"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "8px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Yorumu Sil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 33
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 457,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 431,
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
              lineNumber: 477,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 472,
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
              lineNumber: 481,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
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
              lineNumber: 482,
              columnNumber: 113
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 494,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: editcomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
            InputProps: {
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["InputAdornment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  startIcon: loading_commentedit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 509,
                    columnNumber: 86
                  }, this) : null,
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
                  lineNumber: 509,
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
                  lineNumber: 512,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 508,
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
            lineNumber: 506,
            columnNumber: 37
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "break-word"
            },
            children: commenteditvalue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 523,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 502,
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
            lineNumber: 532,
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
              lineNumber: 534,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 531,
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
              lineNumber: 545,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 544,
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
              lineNumber: 550,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 549,
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
              lineNumber: 557,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 553,
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
              lineNumber: 566,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 565,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 541,
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
                  lineNumber: 577,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "7JPebBDdl/yDa6dBlUi/yFQ7OxM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJsZW5ndGgiLCJDb250ZW50Y2FyZCIsImltYWdlZmlsZW5hbWUiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJpbWFnZXRva2VuIiwiQ2hpbGRsZW5ndGgiLCJBbnN3ZXJoYW5kbGVyIiwicmVhZGxhdGVyIiwicHJvZmlsZWltYWdlIiwiY29udGVudCIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJsb2FkaW5nX2NvbW1lbnRlZGl0Iiwic2V0bG9hZGluZ19jb21tZW50ZWRpdCIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwiYW5zd2VydmFsdWUiLCJzZXRhbnN3ZXJ2YWx1ZSIsImVkaXRjb21tZW50Iiwic2V0ZWRpdGNvbW1lbnQiLCJjb21tZW50ZWRpdHZhbHVlIiwic2V0Y29tbWVudGVkaXR2YWx1ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidGV4dGZvcm9waXRvbiIsInVzZUVmZmVjdCIsImN1cnJlbnRlbGVtZW50cyIsIlVzZXJJZCIsImZvckVhY2giLCJ1c2VyIiwiaWQiLCJJbmRleG9mY3VycmVudHVzZXIiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidW5zaGlmdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiZmlyc3RuYW1lIiwiVXNlcm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJzdXJuYW1lIiwicHVzaCIsIkVkaXRjb21tZW50YWN0aXZlbmVzcyIsImRldGVybWluZXIiLCJtZXNzYWdlIiwiY29tbWVudElEIiwic2V0bG9hZGluZyIsIk1ha2VhY29tbWVudCIsInppbmRleCIsImhvdmVyYmFjayIsImhvdmVyY29sb3IiLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJlbmRBZG9ybm1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm90dG9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwid29yZEJyZWFrIiwibWFyZ2luQm90dG9tIiwiY3Vyc29y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Rk4sYUFIaEI7QUFPSSxpQkFBSyxFQUFDLHFCQVBWO0FBT2dDLGdCQUFJLEVBQUMsT0FQckM7QUFPNkMsbUJBQU8sRUFBQztBQVByRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6RVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0hKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZIO0FBa09IOztHQTlYUUMsVztVQXFCNEIrQiw0RCxFQU9sQmtCLHFEOzs7T0E1QlZqRCxXO0FBaVlNLG1GQUFBZ0gsNENBQUssQ0FBQ0MsSUFBTixDQUFXakgsV0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzYTE0ZTJhNzc1YzI0MWJiY2U0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2UsU3Bpbm5lcn0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LGZlZWQsRmVlZGJhY2ssU2VuZCxEZWxldGUsIEVkaXR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gXCIuLi8uLi9ob29rcy9DbGlrY291dGlzZGVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkICwgQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG4yNSUge2ZvbnQtc2l6ZToxOHB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG42NSUge2ZvbnQtc2l6ZToxN31cclxuNzAlIHtmb250LXNpemU6MTBweH1cclxuMTAwJSB7Zm9udC1zaXplOjE2cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbmhlaWdodDokeyh7ZHJhZnR9KT0+IGRyYWZ0ID8gXCIzMDBweFwiIDogXCJcIn07XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PiFpc2NvbW1lbnQgPyBcIiNmYWY5ZjlcIjogXCIjZmFmOWY5XCJ9O1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcblxyXG5gXHJcblxyXG4vL1RoaXMgaXMgZm9yIGRyYWZ0IHBhZ2VcclxuY29uc3QgU29mdGNvdmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OjMwMDtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbm9wYWNpdHk6MC42O1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXJpZ2h0OjVweDtcclxucGFkZGluZy1sZWZ0OjVweDtcclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuYFxyXG5jb25zdCBDb250ZW50ZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6ICR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCIxNXB4XCI6IFwiMHB4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG5mbGV4OjE7XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZFBhcnQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcImJsb2NrXCI6XCJmbGV4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJub25lXCIgOiBcImZsZXhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNwYW5mb3IgPSBzdHlsZWQuc3BhbmBcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG4mOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOnVuZGVybGluZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuJjogaG92ZXIgJHtTcGFuZm9yfXtcclxuICAgIGNvbG9yOiR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy10b3A6MTBweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBJY29ucz1zdHlsZWQuaWBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5hbmltYXRpb24tZHVyYXRpb246MC4zcztcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoJHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn0pO1xyXG59O1xyXG5jb2xvcjokeyh7aXNtYXJrZWQsY29sb3J9KT0+aXNtYXJrZWQgPyBjb2xvciA6IFwiZ3JleVwiIH07XHJcbmFuaW1hdGlvbi1uYW1lOiR7KHthbmltYXRpb259KT0+YW5pbWF0aW9uID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6YmxvY2s7XHJcbndpZHRoOjM1MHB4O1xyXG5wYWRkaW5nOjVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozNXB4O1xyXG5yaWdodDoxMHB4OyBcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDo0ODA7XHJcbmBcclxuY29uc3QgT3B0aW9uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IERyYWZ0aG9sZGVyID0gc3R5bGVkLnNwYW5gXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG56LWluZGV4OjMwMDtcclxuYFxyXG5cclxuLy9jb21tZW50LWFuc3dlciBzZWN0aW9uXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVpbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjsgXHJcbnBvc2l0aW9uOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwifTtcclxubGVmdDokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiLTYwcHhcIiA6IFwiMHB4XCJ9O1xyXG4mOmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwcHg7XHJcbiAgICBsZWZ0OjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDokeyh7bGVuZ3RofSk9Pmxlbmd0aH07XHJcbiAgICBoZWlnaHQ6JHsoe2xlbmd0aH0pPT5sZW5ndGgqMTUwfXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufTtcclxuJjphZnRlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBsZWZ0Oi00MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGgqNTB9cHg7XHJcbiAgICB6LWluZGV4Oi01O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufVxyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmZ1bmN0aW9uIENvbnRlbnRjYXJkKHtpbWFnZWZpbGVuYW1lLEVkaXRjb21tZW50aGFuZGxlcixpbWFnZXRva2VuLENoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZ19jb21tZW50ZWRpdCxzZXRsb2FkaW5nX2NvbW1lbnRlZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NvbW1lbnRhbnN3ZXIsc2V0Y29tbWVudGFuc3dlcl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Fuc3dlcnZhbHVlLHNldGFuc3dlcnZhbHVlXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlZGl0Y29tbWVudCxzZXRlZGl0Y29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjb21tZW50ZWRpdHZhbHVlLHNldGNvbW1lbnRlZGl0dmFsdWVdID0gdXNlU3RhdGUoY29udGVudClcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cclxuICAgIHZhciB0ZXh0Zm9yb3BpdG9uPVwiXCI7XHJcbiAgICBzd2l0Y2ggKGZvcnVzZXJvcHRpb24pIHtcclxuICAgICAgICBjYXNlIFwiUmVhZGxhdGVyXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJLYXlkZWRpbGVuIGfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkxpa2VcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIkJlxJ9lbmlsZW4gR8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJEcmFmdFwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiVGFzbGFrbGFyZGFuIGthbGTEsXJcIiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcblxyXG5cclxuICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG5cclxuICAgICAgICBpZighZm9ydXNlciAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgbGlrZS5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0d2VldC5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSW5kZXhvZmN1cnJlbnR1c2VyID0gY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkudW5zaGlmdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgcmVhZGxhdGVyLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIlJlYWRsYXRlclwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG5cclxuICAgIH0sW3VzZXJkYXRhXSlcclxuICAgIFxyXG4gICAgLy9saWtlICwgc2lnbiBhbmQgc2F2ZSBvcGVyYXRpb25zXHJcbiAgICBjb25zdCBDb3VudHBsdXM9KGVsZW1lbnR0eXBlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuICBcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PWZhbHNlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOnVzZXJkYXRhLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOnVzZXJkYXRhLlVzZXJzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiQ3JlYXRlXCIsdXNlcmlkKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09dHJ1ZSAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG5cclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj1mYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIgPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlci0xO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiRGVzdHJveVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlbGVtZW50cyhjdXJyZW50ZWxlbWVudHMpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRWRpdGNvbW1lbnRhY3RpdmVuZXNzPShkZXRlcm1pbmVyKT0+e1xyXG5cclxuICAgICAgICBpZihkZXRlcm1pbmVyID09IFwiY2FuY2VsXCIpe1xyXG5cclxuICAgICAgICAgICAgc2V0ZWRpdGNvbW1lbnQoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRlZGl0dmFsdWUoY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9ZWxzZSBpZihkZXRlcm1pbmVyID09IFwic2F2ZVwiKXtcclxuICAgICAgICAgICAgc2V0bG9hZGluZ19jb21tZW50ZWRpdCh0cnVlKVxyXG4gICAgICAgICAgICBFZGl0Y29tbWVudGhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpjb21tZW50ZWRpdHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudElEOnBvc3RJZCxcclxuICAgICAgICAgICAgICAgIHNldGxvYWRpbmc6c2V0bG9hZGluZ19jb21tZW50ZWRpdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWRpdGNvbW1lbnQodHJ1ZSlcclxuICAgICAgICBzZXR2aXNpYmxlKGZhbHNlKS8vdHVybmluZyBvZmYgb3B0aW9uIHdpbmRvd1xyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpLy90dXJuaW5nIG9mZiBvdGhlciB0aGluZ3NcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNYWtlYWNvbW1lbnQ9KCk9PntcclxuICAgICAgICBBbnN3ZXJoYW5kbGVyKGFuc3dlcnZhbHVlLHBvc3RJZClcclxuICAgICAgICBzZXRhbnN3ZXJ2YWx1ZShcIlwiKVxyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgPE91dHNpZGVkaXYgIGRyYWZ0PXtkcmFmdH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIC8vZHJhZnQgY292ZXJcclxuICAgICAgICAgICAgICAgZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U29mdGNvdmVyLz5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3ppbmRleDpcIjQwMFwiLGhvdmVyYmFjazpcIndoaXRlXCIsaG92ZXJjb2xvcjpcIiNkOTA0MjlcIixiYWNrY29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLHdpZHRoOlwiNjBweFwiLGhlaWdodDpcIjYwcHhcIixsaW5laGVpZ2h0OlwiNjBweFwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmdUb3A6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+Q3VsdHVyZSBvZiB0aGUgT3R0b21hbiBFbXBpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL0NvbW1lbnQgTGVmdCBJY29uXHJcbiAgICAgICAgICAgICAgaXNjb21tZW50ID8gIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1sZWZ0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixsZWZ0OlwiLTZweFwiLHRvcDpcIjhweFwiLGNvbG9yOlwiI2ZhZjlmOVwifX0+PC9JY29uPiA6IG51bGxcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy9PcHRpb25zIG9uIHRvcCByaWdodFxyXG4gICAgICAgICAgICAhaXNjb21tZW50ID8gIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PiAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpkcmFmdCA/IFwid2hpdGVcIiA6IFwiIzJBMkEyQVwiLHppbmRleDpcIjUwMFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBzdHlsZT17e2Rpc3BsYXk6dXNlcmRhdGEuVXNlcklkID8gXCJmbGV4XCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLW1pbnVzXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+RHVoYW4gw5Z6dMO8cmsnw7wgdGFraXB0ZW4gw6fEsWs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CdSBrdWxsYW7EsWPEsWRhbiBnZWxlbiBiaWxkaXJpbWxlcmkgZ8O2cm1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+UGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJhxJ9sYW50xLEgYWRyZXNpbmkga29weWFsYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgb25DbGljaz17KCk9PmNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxmb3J1c2Vyb3B0aW9uLFwiRGVzdHJveVwiLGluZGV4bnVtLGZvcnVzZXJvcHRpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdCBmYS1zbVwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+S2FsZMSxcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT57dGV4dGZvcm9waXRvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgIC8vY29tbWVudCByZXBvcnRcclxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtdlwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOlwiIzJBMkEyQVwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkID09IHVzZXJkYXRhLlVzZXJJZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9e0VkaXRjb21tZW50YWN0aXZlbmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0PjwvRWRpdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHV6ZW5sZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZT48L0RlbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW9ydW11IFNpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrPjwvRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaWxkaXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFkcmFmdCAmJlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlaW1hZ2Vob2xkZXIgbGVuZ3RoPXtDaGlsZGxlbmd0aH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OntuYW1lOlwiUG9zdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IGhlaWdodD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gcHJvZmlsZT17YGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXluZXh0LWEwNzRhLmFwcHNwb3QuY29tL28vJHtpbWFnZWZpbGVuYW1lfT9hbHQ9bWVkaWEmdG9rZW49JHtpbWFnZXRva2VufWB9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIDxTZWNvbmRQYXJ0IGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgfHwgZHJhZnQgPyBudWxsIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlciBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRjb21tZW50ID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tlbmRBZG9ybm1lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdGFydEljb249e2xvYWRpbmdfY29tbWVudGVkaXQgPyA8U3Bpbm5lcj48L1NwaW5uZXI+IDogbnVsbH0gb25DbGljaz17KCk9PkVkaXRjb21tZW50YWN0aXZlbmVzcyhcInNhdmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2U2Mzk0NlwiLGNvbG9yOlwid2hpdGVcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3R0b206XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCI1cHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5ZGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+RWRpdGNvbW1lbnRhY3RpdmVuZXNzKFwiY2FuY2VsXCIpfSBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGJvdHRvbTpcIjEwcHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXB0YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRjb21tZW50ZWRpdHZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudGVkaXR2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0+e2NvbW1lbnRlZGl0dmFsdWV9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGVudC9baWRdXCIgYXM9e2AvY29udGVudC8ke3Bvc3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzY29tbWVudCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5yZXNob3cuYW5pbWF0aW9ufSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlc2hvd1wiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheSxcIlJlc2hvd1wiKX0+e2VsZW1lbnRzLnJlc2hvdy5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cInJlZFwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIyNTUsIDAsIDAsMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLkxpa2UuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuTGlrZS5hbmltYXRpb259IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJMaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3IgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudCBvbkNsaWNrPXsoKT0+c2V0Y29tbWVudGFuc3dlcighY29tbWVudGFuc3dlcil9ICBzdHlsZT17e2NvbG9yOlwiZ3JleVwiLGN1cnNvcjpcInBvaW50ZXJcIn19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5SZWFkbGF0ZXIuYW5pbWF0aW9ufSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiUmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRhbnN3ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFuc3dlcnZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjdXJzb3I6XCJwb2ludGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBvbkNsaWNrPXtNYWtlYWNvbW1lbnR9IHN0eWxlPXt7Y29sb3I6YW5zd2VydmFsdWUubGVuZ3RoID4gMCA/ICBcIiNlNjM5NDZcIjogXCJncmV5XCJ9fSBwb3NpdGlvbj1cImVuZFwiPjxTZW5kPjwvU2VuZD48L0lucHV0QWRvcm5tZW50PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW9ydW1hIENldmFwIFZlci4uLlwiIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L1NlY29uZFBhcnQ+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRlbnRjYXJkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==