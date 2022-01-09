webpackHotUpdate_N_E("pages/profile/[username]",{

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
        lineNumber: 344,
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
          lineNumber: 346,
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
          lineNumber: 347,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 16
    }, this) : null, //left arrow
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
      lineNumber: 355,
      columnNumber: 28
    }, this) : null, //option section
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
        lineNumber: 364,
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
              lineNumber: 372,
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
                lineNumber: 374,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
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
              lineNumber: 379,
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
                lineNumber: 381,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
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
            lineNumber: 390,
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
              lineNumber: 392,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 362,
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
        lineNumber: 406,
        columnNumber: 17
      }, this), visible && !userid == userdata.UserId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 22
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Duzenle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Yorumu sil"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 405,
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
              lineNumber: 451,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
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
              lineNumber: 455,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 70
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
              lineNumber: 456,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentholder, {
        iscomment: iscomment,
        children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contentdiv, {
          iscomment: iscomment,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              textAlign: "left",
              wordBreak: "break-word"
            },
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 476,
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
            lineNumber: 485,
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
              lineNumber: 488,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 483,
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
              lineNumber: 499,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
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
              lineNumber: 504,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 503,
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
              lineNumber: 511,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 507,
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
              lineNumber: 520,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 495,
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
                  lineNumber: 531,
                  columnNumber: 165
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 531,
                columnNumber: 51
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 337,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "hTrUOr16fN/sXNjvGXpJEsSQllk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJsZW5ndGgiLCJDb250ZW50Y2FyZCIsImltYWdlZmlsZW5hbWUiLCJpbWFnZXRva2VuIiwiQ2hpbGRsZW5ndGgiLCJBbnN3ZXJoYW5kbGVyIiwicmVhZGxhdGVyIiwicHJvZmlsZWltYWdlIiwiY29udGVudCIsInRpdGxlaW1hZ2UiLCJ0aXRsZSIsInVzZXJuYW1lIiwidXNlcnN1cm5hbWUiLCJkYXRlIiwiY29tbWVudCIsInJldHdlZXQiLCJsaWtlIiwic2hvd3dpbmRvdyIsImNyZWF0ZXJlbGF0aW9uZm9yc21oIiwicG9zdElkIiwiZm9ydXNlcm9wdGlvbiIsImluZGV4bnVtIiwidXNlcmlkIiwidXNlU3RhdGUiLCJMaWtlIiwibnVtYmVyIiwiYXJyYXkiLCJyZXNob3ciLCJSZWFkbGF0ZXIiLCJlbGVtZW50cyIsInNldGVsZW1lbnRzIiwidXNlQ2xpY2tvdXRzaWRlIiwicmVmIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJjb21tZW50YW5zd2VyIiwic2V0Y29tbWVudGFuc3dlciIsImFuc3dlcnZhbHVlIiwic2V0YW5zd2VydmFsdWUiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInRleHRmb3JvcGl0b24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50ZWxlbWVudHMiLCJVc2VySWQiLCJmb3JFYWNoIiwidXNlciIsImlkIiwiSW5kZXhvZmN1cnJlbnR1c2VyIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsImZpcnN0bmFtZSIsIlVzZXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vyc3VybmFtZSIsInB1c2giLCJNYWtlYWNvbW1lbnQiLCJ6aW5kZXgiLCJob3ZlcmJhY2siLCJob3ZlcmNvbG9yIiwiYmFja2NvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm1hcmdpblJpZ2h0IiwiY2FsY3VsYXRlZGF0ZSIsInRpbWUiLCJleHByZXNzIiwid29yZEJyZWFrIiwibWFyZ2luQm90dG9tIiwiY3Vyc29yIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJlbmRBZG9ybm1lbnQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQsc0hBQWxCO0FBUUEsSUFBTUMsVUFBVSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJNQUdQO0FBQUEs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SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUE2TUg7O0dBalZRQyxXO1VBcUI0QjhCLDRELEVBSWxCWSxxRDs7O09BekJWMUMsVztBQW9WTSxtRkFBQWlHLDRDQUFLLENBQUNDLElBQU4sQ0FBV2xHLFdBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uY2MyZmY5NWI3NmZmNWM3ZDFkNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZXVzZXJjb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyY29udGV4dFwiO1xyXG5pbXBvcnQge1BvcmZpbGVpbWFnZX0gZnJvbSBcIi4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LCBmZWVkLCBGZWVkYmFjayxTZW5kfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tIFwiLi4vLi4vaG9va3MvQ2xpa2NvdXRpc2RlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCAsIEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MTZweH1cclxuMjUlIHtmb250LXNpemU6MThweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNjUlIHtmb250LXNpemU6MTd9XHJcbjcwJSB7Zm9udC1zaXplOjEwcHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5oZWlnaHQ6JHsoe2RyYWZ0fSk9PiBkcmFmdCA/IFwiMzAwcHhcIiA6IFwiXCJ9O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5cclxuYFxyXG5cclxuLy9UaGlzIGlzIGZvciBkcmFmdCBwYWdlXHJcbmNvbnN0IFNvZnRjb3ZlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDozMDA7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5vcGFjaXR5OjAuNjtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAkeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiMTVweFwiOiBcIjBweFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxuZmxleDoxO1xyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJibG9ja1wiOlwiZmxleFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5gXHJcblxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7YW5pbWF0aW9ufSk9PmFuaW1hdGlvbiA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDozNTBweDtcclxucGFkZGluZzo1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MTBweDsgXHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6NDgwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBEcmFmdGhvbGRlciA9IHN0eWxlZC5zcGFuYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcbi8vY29tbWVudC1hbnN3ZXIgc2VjdGlvblxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxuYFxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTtcclxuJjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6JHsoe2xlbmd0aH0pPT5sZW5ndGh9O1xyXG4gICAgaGVpZ2h0OiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjE1MH1weDtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn07XHJcbiY6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgbGVmdDotNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiR7KHtsZW5ndGh9KT0+bGVuZ3RoKjUwfXB4O1xyXG4gICAgei1pbmRleDotNTtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbn1cclxuYFxyXG5cclxuLy9pw6dlcmlrIHNhecSxc8SxLHRha2lww6dpIHNhecSxc8SxLFxyXG5mdW5jdGlvbiBDb250ZW50Y2FyZCh7aW1hZ2VmaWxlbmFtZSxpbWFnZXRva2VuLENoaWxkbGVuZ3RoLEFuc3dlcmhhbmRsZXIscmVhZGxhdGVyLGRyYWZ0LHByb2ZpbGVpbWFnZSxjb250ZW50LHRpdGxlaW1hZ2UsdGl0bGUsaXNjb21tZW50LHVzZXJuYW1lLHVzZXJzdXJuYW1lLGRhdGUsY29tbWVudCxyZXR3ZWV0LGxpa2Usc2hvd3dpbmRvdyxjcmVhdGVyZWxhdGlvbmZvcnNtaCxwb3N0SWQsZm9ydXNlcixmb3J1c2Vyb3B0aW9uLGluZGV4bnVtLHVzZXJpZH0pe1xyXG4gICAgXHJcbiAgICBjb25zdFtlbGVtZW50cyxzZXRlbGVtZW50c109dXNlU3RhdGUoe1xyXG4gICAgICAgIExpa2U6e1xyXG4gICAgICAgICAgICBudW1iZXI6bGlrZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5Omxpa2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNob3c6e1xyXG4gICAgICAgICAgICBudW1iZXI6cmV0d2VldC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFycmF5OnJldHdlZXQsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlYWRsYXRlcjp7XHJcbiAgICAgICAgICAgIGlzbWFya2VkOmZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ZmFsc2UsXHJcbiAgICAgICAgICAgIG51bWJlcjowLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qge3JlZix2aXNpYmxlLHNldHZpc2libGV9ID0gdXNlQ2xpY2tvdXRzaWRlKCk7XHJcbiAgICBjb25zdCBbY29tbWVudGFuc3dlcixzZXRjb21tZW50YW5zd2VyXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5zd2VydmFsdWUsc2V0YW5zd2VydmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge3VzZXJkYXRhfSA9IHVzZUNvbnRleHQoY3JlYXRldXNlcmNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBsaWtlLmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT0gdXNlcmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXR3ZWV0LmZvckVhY2goKHVzZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5Vc2VySWQgPT0gdXNlci5pZCl7Ly9lxJ9lciBidXJhZGEgaGVyaGFuZ2kgYmlyIGXFn2l0bGlrIGJ1bHVudXJzYSBrdWxsYW7EsWPEsSBwb3N0dSBiZcSfZW5kaSBkZW1la1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJbmRleG9mY3VycmVudHVzZXIgPSBjdXJyZW50ZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5zcGxpY2UoSW5kZXhvZmN1cnJlbnR1c2VyLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS51bnNoaWZ0KHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZWFkbGF0ZXIuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiUmVhZGxhdGVyXCJdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcblxyXG4gICAgfSxbdXNlcmRhdGFdKVxyXG4gICAgXHJcbiAgICAvL2xpa2UgLCBzaWduIGFuZCBzYXZlIG9wZXJhdGlvbnNcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2UgJiYgdXNlcmRhdGEuVXNlcklkKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249dHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXI9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyKzE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hcnJheS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6dXNlcmRhdGEuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6dXNlcmRhdGEuVXNlcnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6dXNlcmRhdGEuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJDcmVhdGVcIix1c2VyaWQpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT10cnVlICYmIHVzZXJkYXRhLlVzZXJJZCl7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlciA9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNYWtlYWNvbW1lbnQ9KCk9PntcclxuICAgICAgICBBbnN3ZXJoYW5kbGVyKGFuc3dlcnZhbHVlLHBvc3RJZClcclxuICAgICAgICBzZXRhbnN3ZXJ2YWx1ZShcIlwiKVxyXG4gICAgICAgIHNldGNvbW1lbnRhbnN3ZXIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8T3V0c2lkZWRpdiAgZHJhZnQ9e2RyYWZ0fSBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgLy9kcmFmdCBjb3ZlclxyXG4gICAgICAgICAgICAgICBkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2Z0Y292ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEtbGdcIiBJY29uY29uZmlnPXt7emluZGV4OlwiNDAwXCIsaG92ZXJiYWNrOlwid2hpdGVcIixob3ZlcmNvbG9yOlwiI2Q5MDQyOVwiLGJhY2tjb2xvcjpcIiNkOTA0MjlcIixjb2xvcjpcIndoaXRlXCIsd2lkdGg6XCI2MHB4XCIsaGVpZ2h0OlwiNjBweFwiLGxpbmVoZWlnaHQ6XCI2MHB4XCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjEwcHhcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5DdWx0dXJlIG9mIHRoZSBPdHRvbWFuIEVtcGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgIGlzY29tbWVudCA/ICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtbGVmdCBmYS1sZ1wiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIi02cHhcIix0b3A6XCI4cHhcIixjb2xvcjpcIiNmYWY5ZjlcIn19PjwvSWNvbj4gOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vb3B0aW9uIHNlY3Rpb25cclxuICAgICAgICAgICAgIWlzY29tbWVudCA/ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT4gICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYWN0aXZlZnVuYz17KCk9PntzZXR2aXNpYmxlKCF2aXNpYmxlKX19IGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixyaWdodDpcIjEwcHhcIix0b3A6XCIxMHB4XCIsY29sb3I6ZHJhZnQgPyBcIndoaXRlXCIgOiBcIiMyQTJBMkFcIix6aW5kZXg6XCI1MDBcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRyYWZ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgc3R5bGU9e3tkaXNwbGF5OnVzZXJkYXRhLlVzZXJJZCA/IFwiZmxleFwiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAhdXNlcmlkID09IHVzZXJkYXRhLlVzZXJJZCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAoPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRiYWNrPjwvRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmlsZGlyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9PcHRpb253aW5kb3c+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFjaz48L0ZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1emVubGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2s+PC9GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3J1bXUgc2lsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFkcmFmdCAmJlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZWltYWdlaG9sZGVyIGxlbmd0aD17Q2hpbGRsZW5ndGh9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IGhlaWdodD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gcHJvZmlsZT17YGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXluZXh0LWEwNzRhLmFwcHNwb3QuY29tL28vJHtpbWFnZWZpbGVuYW1lfT9hbHQ9bWVkaWEmdG9rZW49JHtpbWFnZXRva2VufWB9PjwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlaW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIxNXB4XCJ9fT48cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt1c2VybmFtZStcIiBcIit1c2Vyc3VybmFtZX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiYXV0b1wiLGZvbnRTaXplOlwiMTNweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwiLGNvbG9yOlwiIzdEN0Q3RFwifX0+PHNwYW4+e2NhbGN1bGF0ZWRhdGUoZGF0ZSkudGltZSArIFwiIFwiICsgY2FsY3VsYXRlZGF0ZShkYXRlKS5leHByZXNzICsgXCIgw5ZuY2VcIn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9maWxlZGl2PlxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgPFNlY29uZFBhcnQgZm9ydXNlcj17Zm9ydXNlcn0+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCB8fCBkcmFmdCA/IG51bGwgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3RpdGxlaW1hZ2V9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxDb250ZW50aG9sZGVyIGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY29tbWVudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwiLHdvcmRCcmVhazpcImJyZWFrLXdvcmRcIn19Pntjb250ZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI0E3MDkwOVwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250ZW50L1tpZF1cIiBhcz17YC9jb250ZW50LyR7cG9zdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIix3b3JkQnJlYWs6XCJicmVcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5XaGlsZSB0aGUgQ3J5cHRvIFByb2Zlc3NvcnMgbWF5IHNldCBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIHNvbWUuLi4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNjb21tZW50ICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5yZXNob3cuYW5pbWF0aW9ufSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlc2hvd1wiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheSxcIlJlc2hvd1wiKX0+e2VsZW1lbnRzLnJlc2hvdy5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cInJlZFwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIyNTUsIDAsIDAsMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLkxpa2UuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuTGlrZS5hbmltYXRpb259IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJMaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3IgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudCBvbkNsaWNrPXsoKT0+c2V0Y29tbWVudGFuc3dlcighY29tbWVudGFuc3dlcil9ICBzdHlsZT17e2NvbG9yOlwiZ3JleVwiLGN1cnNvcjpcInBvaW50ZXJcIn19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5SZWFkbGF0ZXIuYW5pbWF0aW9ufSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiUmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRhbnN3ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFuc3dlcnZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOntjdXJzb3I6XCJwb2ludGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBvbkNsaWNrPXtNYWtlYWNvbW1lbnR9IHN0eWxlPXt7Y29sb3I6YW5zd2VydmFsdWUubGVuZ3RoID4gMCA/ICBcIiNlNjM5NDZcIjogXCJncmV5XCJ9fSBwb3NpdGlvbj1cImVuZFwiPjxTZW5kPjwvU2VuZD48L0lucHV0QWRvcm5tZW50PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW9ydW1hIENldmFwIFZlci4uLlwiIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L1NlY29uZFBhcnQ+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRlbnRjYXJkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==