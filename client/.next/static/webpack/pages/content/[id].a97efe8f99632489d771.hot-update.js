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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJsZW5ndGgiLCJDb250ZW50Y2FyZCIsImltYWdlZmlsZW5hbWUiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJpbWFnZXRva2VuIiwiQ2hpbGRsZW5ndGgiLCJBbnN3ZXJoYW5kbGVyIiwicmVhZGxhdGVyIiwicHJvZmlsZWltYWdlIiwiY29udGVudCIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJsb2FkaW5nX2NvbW1lbnRlZGl0Iiwic2V0bG9hZGluZ19jb21tZW50ZWRpdCIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwiYW5zd2VydmFsdWUiLCJzZXRhbnN3ZXJ2YWx1ZSIsImVkaXRjb21tZW50Iiwic2V0ZWRpdGNvbW1lbnQiLCJjb21tZW50ZWRpdHZhbHVlIiwic2V0Y29tbWVudGVkaXR2YWx1ZSIsInVzZUNvbnRleHQiLCJjcmVhdGV1c2VyY29udGV4dCIsInVzZXJkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwidGV4dGZvcm9waXRvbiIsInVzZUVmZmVjdCIsImN1cnJlbnRlbGVtZW50cyIsIlVzZXJJZCIsImZvckVhY2giLCJ1c2VyIiwiaWQiLCJJbmRleG9mY3VycmVudHVzZXIiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidW5zaGlmdCIsIkNvdW50cGx1cyIsImVsZW1lbnR0eXBlIiwiZmlyc3RuYW1lIiwiVXNlcm5hbWUiLCJsYXN0bmFtZSIsIlVzZXJzdXJuYW1lIiwicHVzaCIsIkVkaXRjb21tZW50YWN0aXZlbmVzcyIsImRldGVybWluZXIiLCJtZXNzYWdlIiwiY29tbWVudElEIiwic2V0bG9hZGluZyIsIk1ha2VhY29tbWVudCIsInppbmRleCIsImhvdmVyYmFjayIsImhvdmVyY29sb3IiLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJlbmRBZG9ybm1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm90dG9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwid29yZEJyZWFrIiwibWFyZ2luQm90dG9tIiwiY3Vyc29y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QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpFVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkg7QUFrT0g7O0dBOVhRQyxXO1VBcUI0QitCLDRELEVBT2xCa0IscUQ7OztPQTVCVmpELFc7QUFpWU0sbUZBQUFnSCw0Q0FBSyxDQUFDQyxJQUFOLENBQVdqSCxXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmE5N2VmZThmOTk2MzI0ODlkNzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vVUkvSWNvblwiXHJcbmltcG9ydCB7QWRkQ29tbWVudCxmZWVkLEZlZWRiYWNrLFNlbmQsRGVsZXRlLCBFZGl0fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tIFwiLi4vLi4vaG9va3MvQ2xpa2NvdXRpc2RlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCAsIEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MTZweH1cclxuMjUlIHtmb250LXNpemU6MThweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNjUlIHtmb250LXNpemU6MTd9XHJcbjcwJSB7Zm9udC1zaXplOjEwcHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5oZWlnaHQ6JHsoe2RyYWZ0fSk9PiBkcmFmdCA/IFwiMzAwcHhcIiA6IFwiXCJ9O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5cclxuYFxyXG5cclxuLy9UaGlzIGlzIGZvciBkcmFmdCBwYWdlXHJcbmNvbnN0IFNvZnRjb3ZlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDozMDA7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5vcGFjaXR5OjAuNjtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAkeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiMTVweFwiOiBcIjBweFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxuZmxleDoxO1xyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJibG9ja1wiOlwiZmxleFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5gXHJcblxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7YW5pbWF0aW9ufSk9PmFuaW1hdGlvbiA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDozNTBweDtcclxucGFkZGluZzo1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MTBweDsgXHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6NDgwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBEcmFmdGhvbGRlciA9IHN0eWxlZC5zcGFuYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcbi8vY29tbWVudC1hbnN3ZXIgc2VjdGlvblxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxuYFxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTtcclxuJjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGh9O1xyXG4gICAgaGVpZ2h0OiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjE1MH1weDtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn07XHJcbiY6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgbGVmdDotNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjUwfXB4O1xyXG4gICAgei1pbmRleDotNTtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn1cclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5mdW5jdGlvbiBDb250ZW50Y2FyZCh7aW1hZ2VmaWxlbmFtZSxFZGl0Y29tbWVudGhhbmRsZXIsaW1hZ2V0b2tlbixDaGlsZGxlbmd0aCxBbnN3ZXJoYW5kbGVyLHJlYWRsYXRlcixkcmFmdCxwcm9maWxlaW1hZ2UsY29udGVudCx0aXRsZWltYWdlLHRpdGxlLGlzY29tbWVudCx1c2VybmFtZSx1c2Vyc3VybmFtZSxkYXRlLGNvbW1lbnQscmV0d2VldCxsaWtlLHNob3d3aW5kb3csY3JlYXRlcmVsYXRpb25mb3JzbWgscG9zdElkLGZvcnVzZXIsZm9ydXNlcm9wdGlvbixpbmRleG51bSx1c2VyaWR9KXtcclxuICAgIFxyXG4gICAgY29uc3RbZWxlbWVudHMsc2V0ZWxlbWVudHNdPXVzZVN0YXRlKHtcclxuICAgICAgICBMaWtlOntcclxuICAgICAgICAgICAgbnVtYmVyOmxpa2UubGVuZ3RoLFxyXG4gICAgICAgICAgICBhcnJheTpsaWtlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzaG93OntcclxuICAgICAgICAgICAgbnVtYmVyOnJldHdlZXQubGVuZ3RoLFxyXG4gICAgICAgICAgICBhcnJheTpyZXR3ZWV0LFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWFkbGF0ZXI6e1xyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBudW1iZXI6MCxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHtyZWYsdmlzaWJsZSxzZXR2aXNpYmxlfSA9IHVzZUNsaWNrb3V0c2lkZSgpO1xyXG4gICAgY29uc3QgW2xvYWRpbmdfY29tbWVudGVkaXQsc2V0bG9hZGluZ19jb21tZW50ZWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjb21tZW50YW5zd2VyLHNldGNvbW1lbnRhbnN3ZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbnN3ZXJ2YWx1ZSxzZXRhbnN3ZXJ2YWx1ZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZWRpdGNvbW1lbnQsc2V0ZWRpdGNvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY29tbWVudGVkaXR2YWx1ZSxzZXRjb21tZW50ZWRpdHZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpXHJcbiAgICBjb25zdCB7dXNlcmRhdGF9ID0gdXNlQ29udGV4dChjcmVhdGV1c2VyY29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcbiAgICB2YXIgdGV4dGZvcm9waXRvbj1cIlwiO1xyXG4gICAgc3dpdGNoIChmb3J1c2Vyb3B0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIlJlYWRsYXRlclwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiS2F5ZGVkaWxlbiBnw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJMaWtlXCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJCZcSfZW5pbGVuIEfDtm5kZXJpbGVyZGVuIGthbGTEsXJcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRHJhZnRcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIlRhc2xha2xhcmRhbiBrYWxkxLFyXCIgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuXHJcbiAgICAgICBjb25zdCBjdXJyZW50ZWxlbWVudHM9ey4uLmVsZW1lbnRzfTtcclxuXHJcbiAgICAgICAgaWYoIWZvcnVzZXIgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGxpa2UuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHdlZXQuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIC8vbGlrZSAsIHNpZ24gYW5kIHNhdmUgb3BlcmF0aW9uc1xyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSAmJiB1c2VyZGF0YS5Vc2VySWQpe1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTp1c2VyZGF0YS5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTp1c2VyZGF0YS5Vc2Vyc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkNyZWF0ZVwiLHVzZXJpZCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9PXRydWUgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249ZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyID0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXItMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkRlc3Ryb3lcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEVkaXRjb21tZW50YWN0aXZlbmVzcz0oZGV0ZXJtaW5lcik9PntcclxuXHJcbiAgICAgICAgaWYoZGV0ZXJtaW5lciA9PSBcImNhbmNlbFwiKXtcclxuXHJcbiAgICAgICAgICAgIHNldGVkaXRjb21tZW50KGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRjb21tZW50ZWRpdHZhbHVlKGNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYoZGV0ZXJtaW5lciA9PSBcInNhdmVcIil7XHJcbiAgICAgICAgICAgIHNldGxvYWRpbmdfY29tbWVudGVkaXQodHJ1ZSlcclxuICAgICAgICAgICAgRWRpdGNvbW1lbnRoYW5kbGVyKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6Y29tbWVudGVkaXR2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRJRDpwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICBzZXRsb2FkaW5nOnNldGxvYWRpbmdfY29tbWVudGVkaXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVkaXRjb21tZW50KHRydWUpXHJcbiAgICAgICAgc2V0dmlzaWJsZShmYWxzZSkvL3R1cm5pbmcgb2ZmIG9wdGlvbiB3aW5kb3dcclxuICAgICAgICBzZXRjb21tZW50YW5zd2VyKGZhbHNlKS8vdHVybmluZyBvZmYgb3RoZXIgdGhpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgTWFrZWFjb21tZW50PSgpPT57XHJcbiAgICAgICAgQW5zd2VyaGFuZGxlcihhbnN3ZXJ2YWx1ZSxwb3N0SWQpXHJcbiAgICAgICAgc2V0YW5zd2VydmFsdWUoXCJcIilcclxuICAgICAgICBzZXRjb21tZW50YW5zd2VyKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgIDxPdXRzaWRlZGl2ICBkcmFmdD17ZHJhZnR9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAvL2RyYWZ0IGNvdmVyXHJcbiAgICAgICAgICAgICAgIGRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvZnRjb3Zlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdCBmYS1sZ1wiIEljb25jb25maWc9e3t6aW5kZXg6XCI0MDBcIixob3ZlcmJhY2s6XCJ3aGl0ZVwiLGhvdmVyY29sb3I6XCIjZDkwNDI5XCIsYmFja2NvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIix3aWR0aDpcIjYwcHhcIixoZWlnaHQ6XCI2MHB4XCIsbGluZWhlaWdodDpcIjYwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkN1bHR1cmUgb2YgdGhlIE90dG9tYW4gRW1waXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9Db21tZW50IExlZnQgSWNvblxyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vT3B0aW9ucyBvbiB0b3AgcmlnaHRcclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgc3R5bGU9e3tkaXNwbGF5OnVzZXJkYXRhLlVzZXJJZCA/IFwiZmxleFwiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICg8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZCA9PSB1c2VyZGF0YS5Vc2VySWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBvbkNsaWNrPXtFZGl0Y29tbWVudGFjdGl2ZW5lc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdD48L0VkaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1emVubGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGU+PC9EZWxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvcnVtdSBTaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFjaz48L0ZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlsZGlyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZHJhZnQgJiZcclxuICAgICAgICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbkxlZnQ6XCI1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZWltYWdlaG9sZGVyIGxlbmd0aD17Q2hpbGRsZW5ndGh9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpgL3Byb2ZpbGUvJHt1c2VyaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBoZWlnaHQ9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IHByb2ZpbGU9e2BodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215bmV4dC1hMDc0YS5hcHBzcG90LmNvbS9vLyR7aW1hZ2VmaWxlbmFtZX0/YWx0PW1lZGlhJnRva2VuPSR7aW1hZ2V0b2tlbn1gfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlaW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGZvbnRTaXplOlwiMTVweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiIzdEN0Q3RFwifX0+PHNwYW4+e2NhbGN1bGF0ZWRhdGUoZGF0ZSkudGltZSArIFwiIFwiICsgY2FsY3VsYXRlZGF0ZShkYXRlKS5leHByZXNzICsgXCIgw5ZuY2VcIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50IHx8IGRyYWZ0ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0Y29tbWVudCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7ZW5kQWRvcm5tZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkVkaXRjb21tZW50YWN0aXZlbmVzcyhcInNhdmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2U2Mzk0NlwiLGNvbG9yOlwid2hpdGVcIix0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3R0b206XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCI1cHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5ZGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+RWRpdGNvbW1lbnRhY3RpdmVuZXNzKFwiY2FuY2VsXCIpfSBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGJvdHRvbTpcIjEwcHhcIn19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXB0YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRjb21tZW50ZWRpdHZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudGVkaXR2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwifX0+e2NvbW1lbnRlZGl0dmFsdWV9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGVudC9baWRdXCIgYXM9e2AvY29udGVudC8ke3Bvc3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlYWstd29yZFwiLGN1cnNvcjpcInBvaW50ZXJcIn19PldoaWxlIHRoZSBDcnlwdG8gUHJvZmVzc29ycyBtYXkgc2V0IHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3Igc29tZS4uLi48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzY29tbWVudCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5yZXNob3cuYW5pbWF0aW9ufSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlc2hvd1wiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheSxcIlJlc2hvd1wiKX0+e2VsZW1lbnRzLnJlc2hvdy5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cInJlZFwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIyNTUsIDAsIDAsMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLkxpa2UuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuTGlrZS5hbmltYXRpb259IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJMaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3IgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudCBvbkNsaWNrPXsoKT0+c2V0Y29tbWVudGFuc3dlcighY29tbWVudGFuc3dlcil9ICBzdHlsZT17e2NvbG9yOlwiZ3JleVwiLGN1cnNvcjpcInBvaW50ZXJcIn19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5SZWFkbGF0ZXIuYW5pbWF0aW9ufSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiUmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRhbnN3ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFuc3dlcnZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjdXJzb3I6XCJwb2ludGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBvbkNsaWNrPXtNYWtlYWNvbW1lbnR9IHN0eWxlPXt7Y29sb3I6YW5zd2VydmFsdWUubGVuZ3RoID4gMCA/ICBcIiNlNjM5NDZcIjogXCJncmV5XCJ9fSBwb3NpdGlvbj1cImVuZFwiPjxTZW5kPjwvU2VuZD48L0lucHV0QWRvcm5tZW50PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW9ydW1hIENldmFwIFZlci4uLlwiIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L1NlY29uZFBhcnQ+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRlbnRjYXJkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==