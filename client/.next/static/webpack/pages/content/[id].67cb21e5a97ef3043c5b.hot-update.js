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
      console.log("eyyp");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJsZW5ndGgiLCJDb250ZW50Y2FyZCIsImltYWdlZmlsZW5hbWUiLCJFZGl0Y29tbWVudGhhbmRsZXIiLCJpbWFnZXRva2VuIiwiQ2hpbGRsZW5ndGgiLCJBbnN3ZXJoYW5kbGVyIiwicmVhZGxhdGVyIiwicHJvZmlsZWltYWdlIiwiY29udGVudCIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJjb21tZW50YW5zd2VyIiwic2V0Y29tbWVudGFuc3dlciIsImFuc3dlcnZhbHVlIiwic2V0YW5zd2VydmFsdWUiLCJlZGl0Y29tbWVudCIsInNldGVkaXRjb21tZW50IiwiY29tbWVudGVkaXR2YWx1ZSIsInNldGNvbW1lbnRlZGl0dmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInRleHRmb3JvcGl0b24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50ZWxlbWVudHMiLCJVc2VySWQiLCJmb3JFYWNoIiwidXNlciIsImlkIiwiSW5kZXhvZmN1cnJlbnR1c2VyIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsImZpcnN0bmFtZSIsIlVzZXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vyc3VybmFtZSIsInB1c2giLCJFZGl0Y29tbWVudGFjdGl2ZW5lc3MiLCJkZXRlcm1pbmVyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjb21tZW50SUQiLCJNYWtlYWNvbW1lbnQiLCJ6aW5kZXgiLCJob3ZlcmJhY2siLCJob3ZlcmNvbG9yIiwiYmFja2NvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm1hcmdpblJpZ2h0IiwiY2FsY3VsYXRlZGF0ZSIsInRpbWUiLCJleHByZXNzIiwiZW5kQWRvcm5tZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImJvdHRvbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndvcmRCcmVhayIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwiUmVhY3QiLCJt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WFFDLFc7VUFxQjRCK0IsNEQsRUFNbEJnQixxRDs7O09BM0JWL0MsVztBQWdZTSxtRkFBQStHLDRDQUFLLENBQUNDLElBQU4sQ0FBV2hILFdBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50L1tpZF0uNjdjYjIxZTVhOTdlZjMwNDNjNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LGZlZWQsRmVlZGJhY2ssU2VuZCxEZWxldGUsIEVkaXR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge2NhbGN1bGF0ZWRhdGV9IGZyb20gXCIuLi8uLi91dGlsc2Z1bmNcIlxyXG5pbXBvcnQgdXNlQ2xpY2tvdXRzaWRlIGZyb20gXCIuLi8uLi9ob29rcy9DbGlrY291dGlzZGVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkICwgQnV0dG9uLElucHV0QWRvcm5tZW50fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgTGlrZWFuaW1hdG9uPWtleWZyYW1lc2BcclxuMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG4yNSUge2ZvbnQtc2l6ZToxOHB4fVxyXG41MCUge2ZvbnQtc2l6ZToyMXB4fVxyXG42NSUge2ZvbnQtc2l6ZToxN31cclxuNzAlIHtmb250LXNpemU6MTBweH1cclxuMTAwJSB7Zm9udC1zaXplOjE2cHh9XHJcbmBcclxuY29uc3QgT3V0c2lkZWRpdj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxubWFyZ2luOmF1dG87XHJcbmhlaWdodDokeyh7ZHJhZnR9KT0+IGRyYWZ0ID8gXCIzMDBweFwiIDogXCJcIn07XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNjb21tZW50fSk9PiFpc2NvbW1lbnQgPyBcIiNmYWY5ZjlcIjogXCIjZmFmOWY5XCJ9O1xyXG5ib3JkZXItcmFkaXVzOjdweDtcclxuYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcblxyXG5gXHJcblxyXG4vL1RoaXMgaXMgZm9yIGRyYWZ0IHBhZ2VcclxuY29uc3QgU29mdGNvdmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxMDAlO1xyXG56LWluZGV4OjMwMDtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbm9wYWNpdHk6MC42O1xyXG5gXHJcblxyXG5jb25zdCBJbWFnZWRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXJpZ2h0OjVweDtcclxucGFkZGluZy1sZWZ0OjVweDtcclxuYFxyXG5jb25zdCBJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjE7XHJcbmBcclxuY29uc3QgQ29udGVudGhvbGRlcj1zdHlsZWQuZGl2YFxyXG5mbGV4OjI7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuYFxyXG5jb25zdCBDb250ZW50ZGl2PXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6ICR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCIxNXB4XCI6IFwiMHB4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG5mbGV4OjE7XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZFBhcnQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtmb3J1c2VyfSk9PmZvcnVzZXIgPyBcImJsb2NrXCI6XCJmbGV4XCJ9O1xyXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFRvb2xiYXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJub25lXCIgOiBcImZsZXhcIn07XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuYFxyXG5cclxuY29uc3QgSW1nPXN0eWxlZC5pbWdgXHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoxNTBweDtcclxub2JqZWN0LWZpdDpjb3ZlcjtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNwYW5mb3IgPSBzdHlsZWQuc3BhbmBcclxubWFyZ2luLWxlZnQ6NXB4O1xyXG4mOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOnVuZGVybGluZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IMSwY29uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuJjogaG92ZXIgJHtTcGFuZm9yfXtcclxuICAgIGNvbG9yOiR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9O1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVkaXY9c3R5bGVkLmRpdmBcclxud2lkdGg6MTAwJTtcclxucGFkZGluZy10b3A6MTBweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxudHJhbnNpdGlvbjphbGwgMC4zcztcclxuYFxyXG5cclxuXHJcblxyXG5jb25zdCBJY29ucz1zdHlsZWQuaWBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbndpZHRoOjMwcHg7XHJcbmhlaWdodDozMHB4O1xyXG5wYWRkaW5nOjVweDtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5hbmltYXRpb24tZHVyYXRpb246MC4zcztcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoJHsoe2hvd2VyY29sb3J9KT0+aG93ZXJjb2xvcn0pO1xyXG59O1xyXG5jb2xvcjokeyh7aXNtYXJrZWQsY29sb3J9KT0+aXNtYXJrZWQgPyBjb2xvciA6IFwiZ3JleVwiIH07XHJcbmFuaW1hdGlvbi1uYW1lOiR7KHthbmltYXRpb259KT0+YW5pbWF0aW9uID8gTGlrZWFuaW1hdG9uIDogXCJcIn07XHJcbmBcclxuY29uc3QgT3B0aW9ud2luZG93PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6YmxvY2s7XHJcbndpZHRoOjM1MHB4O1xyXG5wYWRkaW5nOjVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozNXB4O1xyXG5yaWdodDoxMHB4OyBcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggMTZweCA1NnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDI0cHggODBweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuei1pbmRleDo0ODA7XHJcbmBcclxuY29uc3QgT3B0aW9uaG9sZGVyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXItcmFkaXVzOjZweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IERyYWZ0aG9sZGVyID0gc3R5bGVkLnNwYW5gXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NTAlO1xyXG5sZWZ0OjUwJTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG56LWluZGV4OjMwMDtcclxuYFxyXG5cclxuLy9jb21tZW50LWFuc3dlciBzZWN0aW9uXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVpbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5jdXJzb3I6cG9pbnRlcjsgXHJcbnBvc2l0aW9uOiR7KHtpc2NvbW1lbnR9KT0+aXNjb21tZW50ID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwifTtcclxubGVmdDokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiLTYwcHhcIiA6IFwiMHB4XCJ9O1xyXG4mOmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwcHg7XHJcbiAgICBsZWZ0OjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDokeyh7bGVuZ3RofSk9Pmxlbmd0aH07XHJcbiAgICBoZWlnaHQ6JHsoe2xlbmd0aH0pPT5sZW5ndGgqMTUwfXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufTtcclxuJjphZnRlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBsZWZ0Oi00MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGgqNTB9cHg7XHJcbiAgICB6LWluZGV4Oi01O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxufVxyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmZ1bmN0aW9uIENvbnRlbnRjYXJkKHtpbWFnZWZpbGVuYW1lLEVkaXRjb21tZW50aGFuZGxlcixpbWFnZXRva2VuLENoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbY29tbWVudGFuc3dlcixzZXRjb21tZW50YW5zd2VyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5zd2VydmFsdWUsc2V0YW5zd2VydmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2VkaXRjb21tZW50LHNldGVkaXRjb21tZW50XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NvbW1lbnRlZGl0dmFsdWUsc2V0Y29tbWVudGVkaXR2YWx1ZV0gPSB1c2VTdGF0ZShjb250ZW50KVxyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBsaWtlLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXR3ZWV0LmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZWFkbGF0ZXIuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiUmVhZGxhdGVyXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICAvL2xpa2UgLCBzaWduIGFuZCBzYXZlIG9wZXJhdGlvbnNcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2UgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6dXNlcmRhdGEuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6dXNlcmRhdGEuVXNlcnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJDcmVhdGVcIix1c2VyaWQpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT10cnVlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlciA9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBFZGl0Y29tbWVudGFjdGl2ZW5lc3M9KGRldGVybWluZXIpPT57XHJcblxyXG4gICAgICAgIGlmKGRldGVybWluZXIgPT0gXCJjYW5jZWxcIil7XHJcblxyXG4gICAgICAgICAgICBzZXRlZGl0Y29tbWVudChmYWxzZSlcclxuICAgICAgICAgICAgc2V0Y29tbWVudGVkaXR2YWx1ZShjb250ZW50KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKGRldGVybWluZXIgPT0gXCJzYXZlXCIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV5eXBcIilcclxuICAgICAgICAgICAgRWRpdGNvbW1lbnRoYW5kbGVyKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6Y29tbWVudGVkaXR2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRJRDpwb3N0SWRcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRlZGl0Y29tbWVudCh0cnVlKVxyXG4gICAgICAgIHNldHZpc2libGUoZmFsc2UpLy90dXJuaW5nIG9mZiBvcHRpb24gd2luZG93XHJcbiAgICAgICAgc2V0Y29tbWVudGFuc3dlcihmYWxzZSkvL3R1cm5pbmcgb2ZmIG90aGVyIHRoaW5nc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE1ha2VhY29tbWVudD0oKT0+e1xyXG4gICAgICAgIEFuc3dlcmhhbmRsZXIoYW5zd2VydmFsdWUscG9zdElkKVxyXG4gICAgICAgIHNldGFuc3dlcnZhbHVlKFwiXCIpXHJcbiAgICAgICAgc2V0Y29tbWVudGFuc3dlcihmYWxzZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICA8T3V0c2lkZWRpdiAgZHJhZnQ9e2RyYWZ0fSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgLy9kcmFmdCBjb3ZlclxyXG4gICAgICAgICAgICAgICBkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2Z0Y292ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEtbGdcIiBJY29uY29uZmlnPXt7emluZGV4OlwiNDAwXCIsaG92ZXJiYWNrOlwid2hpdGVcIixob3ZlcmNvbG9yOlwiI2Q5MDQyOVwiLGJhY2tjb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI2MHB4XCIsaGVpZ2h0OlwiNjBweFwiLGxpbmVoZWlnaHQ6XCI2MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5DdWx0dXJlIG9mIHRoZSBPdHRvbWFuIEVtcGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vQ29tbWVudCBMZWZ0IEljb25cclxuICAgICAgICAgICAgICBpc2NvbW1lbnQgPyAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNhcmV0LWxlZnQgZmEtbGdcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6XCItNnB4XCIsdG9wOlwiOHB4XCIsY29sb3I6XCIjZmFmOWY5XCJ9fT48L0ljb24+IDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvL09wdGlvbnMgb24gdG9wIHJpZ2h0XHJcbiAgICAgICAgICAgICFpc2NvbW1lbnQgPyAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+ICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOmRyYWZ0ID8gXCJ3aGl0ZVwiIDogXCIjMkEyQTJBXCIsemluZGV4OlwiNTAwXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIHN0eWxlPXt7ZGlzcGxheTp1c2VyZGF0YS5Vc2VySWQgPyBcImZsZXhcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItbWludXNcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5EdWhhbiDDlnp0w7xyayfDvCB0YWtpcHRlbiDDp8SxazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJ1IGt1bGxhbsSxY8SxZGFuIGdlbGVuIGJpbGRpcmltbGVyaSBnw7ZybWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5QYXlsYcWfPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QmHEn2xhbnTEsSBhZHJlc2luaSBrb3B5YWxhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydXNlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlciBvbkNsaWNrPXsoKT0+Y3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGZvcnVzZXJvcHRpb24sXCJEZXN0cm95XCIsaW5kZXhudW0sZm9ydXNlcm9wdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0IGZhLXNtXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5LYWxkxLFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19Pnt0ZXh0Zm9yb3BpdG9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgLy9jb21tZW50IHJlcG9ydFxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy12XCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6XCIjMkEyQTJBXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAoPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWQgPT0gdXNlcmRhdGEuVXNlcklkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgb25DbGljaz17RWRpdGNvbW1lbnRhY3RpdmVuZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQ+PC9FZGl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EdXplbmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlPjwvRGVsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3J1bXUgU2lsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2s+PC9GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJpbGRpcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWRyYWZ0ICYmXHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVpbWFnZWhvbGRlciBsZW5ndGg9e0NoaWxkbGVuZ3RofSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSB3aWR0aD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gaGVpZ2h0PXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBwcm9maWxlPXtgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9teW5leHQtYTA3NGEuYXBwc3BvdC5jb20vby8ke2ltYWdlZmlsZW5hbWV9P2FsdD1tZWRpYSZ0b2tlbj0ke2ltYWdldG9rZW59YH0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZWltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIixmb250U2l6ZTpcIjEzcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjb2xvcjpcIiM3RDdEN0RcIn19PjxzcGFuPntjYWxjdWxhdGVkYXRlKGRhdGUpLnRpbWUgKyBcIiBcIiArIGNhbGN1bGF0ZWRhdGUoZGF0ZSkuZXhwcmVzcyArIFwiIMOWbmNlXCJ9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgPFNlY29uZFBhcnQgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCB8fCBkcmFmdCA/IG51bGwgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyIGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGNvbW1lbnQgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e2VuZEFkb3JubWVudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5FZGl0Y29tbWVudGFjdGl2ZW5lc3MoXCJzYXZlXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNlNjM5NDZcIixjb2xvcjpcIndoaXRlXCIsdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCIsYm90dG9tOlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiNXB4XCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtheWRldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PkVkaXRjb21tZW50YWN0aXZlbmVzcyhcImNhbmNlbFwiKX0gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3R0b206XCIxMHB4XCJ9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50Pn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0Y29tbWVudGVkaXR2YWx1ZShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRlZGl0dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZWFrLXdvcmRcIn19Pntjb21tZW50ZWRpdHZhbHVlfTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsY29sb3I6XCIjQTcwOTA5XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRlbnQvW2lkXVwiIGFzPXtgL2NvbnRlbnQvJHtwb3N0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZWFrLXdvcmRcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5XaGlsZSB0aGUgQ3J5cHRvIFByb2Zlc3NvcnMgbWF5IHNldCBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIHNvbWUuLi4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc2NvbW1lbnQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICg8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIwLCAyNTUsIDAsIDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5yZXNob3cuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMucmVzaG93LmFuaW1hdGlvbn0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXNob3dcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3Igb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXksXCJSZXNob3dcIil9PntlbGVtZW50cy5yZXNob3cubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJyZWRcIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMjU1LCAwLCAwLDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5MaWtlLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLkxpa2UuYW5pbWF0aW9ufSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiTGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXksXCJMaWtlXCIpfSA+e2VsZW1lbnRzLkxpa2UubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENvbW1lbnQgb25DbGljaz17KCk9PnNldGNvbW1lbnRhbnN3ZXIoIWNvbW1lbnRhbnN3ZXIpfSAgc3R5bGU9e3tjb2xvcjpcImdyZXlcIixjdXJzb3I6XCJwb2ludGVyXCJ9fS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zIGNsYXNzTmFtZT1cImZhcyBmYS1jb21tZW50LWFsdCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCI1cHhcIixjb2xvcjpcIlwifX0+e2NvbW1lbnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDo0LGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLGNvbG9yOlwiZ3JleVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGlzbWFya2VkPXtlbGVtZW50cy5SZWFkbGF0ZXIuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuUmVhZGxhdGVyLmFuaW1hdGlvbn0gY29sb3I9e1wiYmxhY2tcIn0gb25DbGljaz17KCk9PkNvdW50cGx1cyhcIlJlYWRsYXRlclwiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rbWFya1wiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50YW5zd2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXJ2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRhbnN3ZXJ2YWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTp7Y3Vyc29yOlwicG9pbnRlclwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgb25DbGljaz17TWFrZWFjb21tZW50fSBzdHlsZT17e2NvbG9yOmFuc3dlcnZhbHVlLmxlbmd0aCA+IDAgPyAgXCIjZTYzOTQ2XCI6IFwiZ3JleVwifX0gcG9zaXRpb249XCJlbmRcIj48U2VuZD48L1NlbmQ+PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvcnVtYSBDZXZhcCBWZXIuLi5cIiBzaXplPVwic21hbGxcIiB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRob2xkZXI+XHJcbiAgICAgICAgICAgPC9TZWNvbmRQYXJ0PlxyXG4gICAgICAgPC9PdXRzaWRlZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDb250ZW50Y2FyZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=