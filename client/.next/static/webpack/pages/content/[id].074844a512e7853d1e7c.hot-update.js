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

  var readlater = _ref12.readlater,
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
        lineNumber: 321,
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
          lineNumber: 323,
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
          lineNumber: 324,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 320,
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
      lineNumber: 332,
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
        lineNumber: 341,
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
              lineNumber: 349,
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
                lineNumber: 351,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
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
              lineNumber: 356,
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
                lineNumber: 358,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 347,
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
            lineNumber: 367,
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
              lineNumber: 369,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 339,
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
        lineNumber: 383,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 382,
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
              lineNumber: 407,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
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
              lineNumber: 411,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
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
              lineNumber: 412,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 422,
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
            lineNumber: 433,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 432,
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
            lineNumber: 441,
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
              lineNumber: 444,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 439,
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
              lineNumber: 455,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 454,
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
              lineNumber: 460,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(İconholder, {
            style: {
              flex: 1
            },
            children: [iscomment ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AddComment"], {
              onClick: function onClick() {
                return setcommentanswer(true);
              },
              style: {
                color: "grey",
                cursor: "pointer"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 463,
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
              lineNumber: 476,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            InputProps: {
              style: {
                color: "#e63946",
                cursor: "pointer"
              },
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputAdornment"], {
                position: "end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Send"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 483,
                  columnNumber: 78
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 483,
                columnNumber: 47
              }, this)
            },
            label: "Yoruma Cevap Ver...",
            size: "small",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 314,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "viPgo9GmW95aJw8g//WoQ72dEe0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiSW5wdXRob2xkZXIiLCJQcm9maWxlaW1hZ2Vob2xkZXIiLCJDb250ZW50Y2FyZCIsInJlYWRsYXRlciIsInByb2ZpbGVpbWFnZSIsImNvbnRlbnQiLCJ0aXRsZWltYWdlIiwidGl0bGUiLCJ1c2VybmFtZSIsInVzZXJzdXJuYW1lIiwiZGF0ZSIsImNvbW1lbnQiLCJyZXR3ZWV0IiwibGlrZSIsInNob3d3aW5kb3ciLCJjcmVhdGVyZWxhdGlvbmZvcnNtaCIsInBvc3RJZCIsImZvcnVzZXJvcHRpb24iLCJpbmRleG51bSIsInVzZXJpZCIsInVzZVN0YXRlIiwiTGlrZSIsIm51bWJlciIsImxlbmd0aCIsImFycmF5IiwicmVzaG93IiwiUmVhZGxhdGVyIiwiZWxlbWVudHMiLCJzZXRlbGVtZW50cyIsInVzZUNsaWNrb3V0c2lkZSIsInJlZiIsInZpc2libGUiLCJzZXR2aXNpYmxlIiwiY29tbWVudGFuc3dlciIsInNldGNvbW1lbnRhbnN3ZXIiLCJ1c2VDb250ZXh0IiwiY3JlYXRldXNlcmNvbnRleHQiLCJ1c2VyZGF0YSIsInRleHRmb3JvcGl0b24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50ZWxlbWVudHMiLCJmb3JFYWNoIiwidXNlciIsIlVzZXJJZCIsImlkIiwiSW5kZXhvZmN1cnJlbnR1c2VyIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInVuc2hpZnQiLCJDb3VudHBsdXMiLCJlbGVtZW50dHlwZSIsImZpcnN0bmFtZSIsIlVzZXJuYW1lIiwibGFzdG5hbWUiLCJVc2Vyc3VybmFtZSIsInppbmRleCIsImhvdmVyYmFjayIsImhvdmVyY29sb3IiLCJiYWNrY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVoZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkYXRlIiwidGltZSIsImV4cHJlc3MiLCJ3b3JkQnJlYWsiLCJtYXJnaW5Cb3R0b20iLCJjdXJzb3IiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsImVuZEFkb3JubWVudCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUNDLG1FQUFELHNIQUFsQjtBQVFBLElBQU1DLFVBQVUsR0FBQ0MseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwyTUFHUDtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFNBQVlBLEtBQUssR0FBRyxPQUFILEdBQWEsRUFBOUI7QUFBQSxDQUhPLEVBTUc7QUFBQSxNQUFFQyxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFlLENBQUNBLFNBQUQsR0FBYSxTQUFiLEdBQXdCLFNBQXZDO0FBQUEsQ0FOSCxDQUFoQixDLENBWUE7O0tBWk1KLFU7QUFhTixJQUFNSyxTQUFTLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWY7TUFBTUcsUztBQVVOLElBQU1DLFFBQVEsR0FBQ0wseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwyQ0FBZDtNQUFNSSxRO0FBSU4sSUFBTUMsV0FBVyxHQUFDTix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLGVBQWpCO01BQU1LLFc7QUFHTixJQUFNQyxhQUFhLEdBQUNQLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0RBQW5CO01BQU1NLGE7QUFNTixJQUFNQyxVQUFVLEdBQUNSLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsa0VBQ0w7QUFBQSxNQUFFRSxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFlQSxTQUFTLEdBQUcsTUFBSCxHQUFXLEtBQW5DO0FBQUEsQ0FESyxDQUFoQjtNQUFNSyxVO0FBT04sSUFBTUMsVUFBVSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUNOO0FBQUEsTUFBRVMsT0FBRixTQUFFQSxPQUFGO0FBQUEsU0FBYUEsT0FBTyxHQUFHLE9BQUgsR0FBVyxNQUEvQjtBQUFBLENBRE0sQ0FBaEI7TUFBTUQsVTtBQU9OLElBQU1FLE9BQU8sR0FBQ1gseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwREFDSDtBQUFBLE1BQUVTLE9BQUYsU0FBRUEsT0FBRjtBQUFBLFNBQWFBLE9BQU8sR0FBRyxNQUFILEdBQVksTUFBaEM7QUFBQSxDQURHLENBQWI7TUFBTUMsTztBQU1OLElBQU1DLEdBQUcsR0FBQ1oseURBQU0sQ0FBQ2EsR0FBUjtBQUFBO0FBQUE7QUFBQSx3RkFBVDtNQUFNRCxHO0FBU04sSUFBTUUsT0FBTyxHQUFHZCx5REFBTSxDQUFDZSxJQUFWO0FBQUE7QUFBQTtBQUFBLCtFQUFiO09BQU1ELE87QUFRTixJQUFNRSxVQUFVLEdBQUNoQix5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLG9GQUlMYSxPQUpLLEVBS0o7QUFBQSxNQUFFRyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBaEI7QUFBQSxDQUxJLENBQWhCO0FBU0EsSUFBTUMsVUFBVSxHQUFDbEIseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw0RUFBaEI7T0FBTWlCLFU7QUFTTixJQUFNQyxLQUFLLEdBQUNuQix5REFBTSxDQUFDb0IsQ0FBUjtBQUFBO0FBQUE7QUFBQSx5U0FjVztBQUFBLE1BQUVILFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFoQjtBQUFBLENBZFgsRUFnQkg7QUFBQSxNQUFFSSxRQUFGLFNBQUVBLFFBQUY7QUFBQSxNQUFXQyxLQUFYLFNBQVdBLEtBQVg7QUFBQSxTQUFvQkQsUUFBUSxHQUFHQyxLQUFILEdBQVcsTUFBdkM7QUFBQSxDQWhCRyxFQWlCTTtBQUFBLE1BQUVDLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRzFCLFlBQUgsR0FBa0IsRUFBMUM7QUFBQSxDQWpCTixDQUFYO09BQU1zQixLO0FBbUJOLElBQU1LLFlBQVksR0FBQ3hCLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsc1BBQWxCO09BQU11QixZO0FBWU4sSUFBTUMsWUFBWSxHQUFDekIseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwSUFBbEI7T0FBTXdCLFk7QUFZTixJQUFNQyxXQUFXLEdBQUcxQix5REFBTSxDQUFDZSxJQUFWO0FBQUE7QUFBQTtBQUFBLDRJQUFqQixDLENBV0E7O09BWE1XLFc7QUFZTixJQUFNQyxXQUFXLEdBQUczQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtGQUFqQjtPQUFNMEIsVztBQU9OLElBQU1DLGtCQUFrQixHQUFDNUIseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSwwTkFFYjtBQUFBLE1BQUVFLFNBQUYsVUFBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxVQUFILEdBQWdCLFVBQXhDO0FBQUEsQ0FGYSxFQUdqQjtBQUFBLE1BQUVBLFNBQUYsVUFBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxPQUFILEdBQWEsS0FBckM7QUFBQSxDQUhpQixDQUF4QixDLENBa0JBOztPQWxCTXlCLGtCOztBQW1CTixTQUFTQyxXQUFULFNBQW1OO0FBQUE7O0FBQUEsTUFBN0xDLFNBQTZMLFVBQTdMQSxTQUE2TDtBQUFBLE1BQW5MNUIsS0FBbUwsVUFBbkxBLEtBQW1MO0FBQUEsTUFBN0s2QixZQUE2SyxVQUE3S0EsWUFBNks7QUFBQSxNQUFoS0MsT0FBZ0ssVUFBaEtBLE9BQWdLO0FBQUEsTUFBeEpDLFVBQXdKLFVBQXhKQSxVQUF3SjtBQUFBLE1BQTdJQyxLQUE2SSxVQUE3SUEsS0FBNkk7QUFBQSxNQUF2SS9CLFNBQXVJLFVBQXZJQSxTQUF1STtBQUFBLE1BQTdIZ0MsUUFBNkgsVUFBN0hBLFFBQTZIO0FBQUEsTUFBcEhDLFdBQW9ILFVBQXBIQSxXQUFvSDtBQUFBLE1BQXhHQyxJQUF3RyxVQUF4R0EsSUFBd0c7QUFBQSxNQUFuR0MsT0FBbUcsVUFBbkdBLE9BQW1HO0FBQUEsTUFBM0ZDLE9BQTJGLFVBQTNGQSxPQUEyRjtBQUFBLE1BQW5GQyxJQUFtRixVQUFuRkEsSUFBbUY7QUFBQSxNQUE5RUMsVUFBOEUsVUFBOUVBLFVBQThFO0FBQUEsTUFBbkVDLG9CQUFtRSxVQUFuRUEsb0JBQW1FO0FBQUEsTUFBOUNDLE1BQThDLFVBQTlDQSxNQUE4QztBQUFBLE1BQXZDakMsT0FBdUMsVUFBdkNBLE9BQXVDO0FBQUEsTUFBL0JrQyxhQUErQixVQUEvQkEsYUFBK0I7QUFBQSxNQUFqQkMsUUFBaUIsVUFBakJBLFFBQWlCO0FBQUEsTUFBUkMsTUFBUSxVQUFSQSxNQUFROztBQUFBLGtCQUVuTEMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFDO0FBQ0RDLFlBQU0sRUFBQ1QsSUFBSSxDQUFDVSxNQURYO0FBRURDLFdBQUssRUFBQ1gsSUFGTDtBQUdEakIsZUFBUyxFQUFDLEtBSFQ7QUFJREYsY0FBUSxFQUFDO0FBSlIsS0FENEI7QUFPakMrQixVQUFNLEVBQUM7QUFDSEgsWUFBTSxFQUFDVixPQUFPLENBQUNXLE1BRFo7QUFFSEMsV0FBSyxFQUFDWixPQUZIO0FBR0hoQixlQUFTLEVBQUMsS0FIUDtBQUlIRixjQUFRLEVBQUM7QUFKTixLQVAwQjtBQWFqQ2dDLGFBQVMsRUFBQztBQUNOaEMsY0FBUSxFQUFDLEtBREg7QUFFTkUsZUFBUyxFQUFDLEtBRko7QUFHTjBCLFlBQU0sRUFBQztBQUhEO0FBYnVCLEdBQUQsQ0FGMks7QUFBQSxNQUV6TUssUUFGeU07QUFBQSxNQUVoTUMsV0FGZ007O0FBQUEseUJBcUI5S0Msb0VBQWUsRUFyQitKO0FBQUEsTUFxQnhNQyxHQXJCd00sb0JBcUJ4TUEsR0FyQndNO0FBQUEsTUFxQnBNQyxPQXJCb00sb0JBcUJwTUEsT0FyQm9NO0FBQUEsTUFxQjVMQyxVQXJCNEwsb0JBcUI1TEEsVUFyQjRMOztBQUFBLG1CQXNCeEtaLHNEQUFRLENBQUMsS0FBRCxDQXRCZ0s7QUFBQSxNQXNCeE1hLGFBdEJ3TTtBQUFBLE1Bc0IxTEMsZ0JBdEIwTDs7QUFBQSxvQkF1QjVMQyx3REFBVSxDQUFDQyxzRUFBRCxDQXZCa0w7QUFBQSxNQXVCeE1DLFFBdkJ3TSxlQXVCeE1BLFFBdkJ3TTs7QUEwQi9NLE1BQUlDLGFBQWEsR0FBQyxFQUFsQjs7QUFDQSxVQUFRckIsYUFBUjtBQUNJLFNBQUssV0FBTDtBQUNJcUIsbUJBQWEsR0FBQyxpQ0FBZDtBQUNBOztBQUNKLFNBQUssTUFBTDtBQUNJQSxtQkFBYSxHQUFDLGdDQUFkO0FBQ0E7O0FBQ0osU0FBSyxPQUFMO0FBQ0lBLG1CQUFhLEdBQUMscUJBQWQ7QUFSUjs7QUFZQUMseURBQVMsQ0FBQyxZQUFLO0FBR1osUUFBTUMsZUFBZSxxQkFBS2IsUUFBTCxDQUFyQjs7QUFFQyxRQUFHLENBQUM1QyxPQUFKLEVBQVk7QUFFUjhCLFVBQUksQ0FBQzRCLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVE7QUFDakIsWUFBR0wsUUFBUSxDQUFDTSxNQUFULElBQW1CRCxJQUFJLENBQUNFLEVBQTNCLEVBQThCO0FBQUM7QUFFOUJKLHlCQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCOUMsUUFBeEIsR0FBaUMsSUFBakM7QUFDQSxjQUFNbUQsa0JBQWtCLEdBQUdMLGVBQWUsQ0FBQyxNQUFELENBQWYsQ0FBd0JoQixLQUF4QixDQUE4QnNCLFNBQTlCLENBQXdDLFVBQUNDLElBQUQ7QUFBQSxtQkFBUUEsSUFBSSxDQUFDSCxFQUFMLElBQVdQLFFBQVEsQ0FBQ00sTUFBNUI7QUFBQSxXQUF4QyxDQUEzQjtBQUNBSCx5QkFBZSxDQUFDLE1BQUQsQ0FBZixDQUF3QmhCLEtBQXhCLENBQThCd0IsTUFBOUIsQ0FBcUNILGtCQUFyQyxFQUF3RCxDQUF4RDtBQUNBTCx5QkFBZSxDQUFDLE1BQUQsQ0FBZixDQUF3QmhCLEtBQXhCLENBQThCeUIsT0FBOUIsQ0FBc0NQLElBQXRDO0FBRUE7QUFDSixPQVREO0FBV0E5QixhQUFPLENBQUM2QixPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBUTtBQUNwQixZQUFHTCxRQUFRLENBQUNNLE1BQVQsSUFBbUJELElBQUksQ0FBQ0UsRUFBM0IsRUFBOEI7QUFBQztBQUUzQkoseUJBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEI5QyxRQUExQixHQUFtQyxJQUFuQztBQUNBLGNBQU1tRCxrQkFBa0IsR0FBR0wsZUFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmhCLEtBQTFCLENBQWdDc0IsU0FBaEMsQ0FBMEMsVUFBQ0MsSUFBRDtBQUFBLG1CQUFRQSxJQUFJLENBQUNILEVBQUwsSUFBV1AsUUFBUSxDQUFDTSxNQUE1QjtBQUFBLFdBQTFDLENBQTNCO0FBQ0FILHlCQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCaEIsS0FBMUIsQ0FBZ0N3QixNQUFoQyxDQUF1Q0gsa0JBQXZDLEVBQTBELENBQTFEO0FBQ0FMLHlCQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCaEIsS0FBMUIsQ0FBZ0N5QixPQUFoQyxDQUF3Q1AsSUFBeEM7QUFFSDtBQUNKLE9BVEQ7QUFXQXZDLGVBQVMsQ0FBQ3NDLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFRO0FBQ3RCLFlBQUdMLFFBQVEsQ0FBQ00sTUFBVCxJQUFtQkQsSUFBSSxDQUFDRSxFQUEzQixFQUE4QjtBQUFDO0FBQzNCSix5QkFBZSxDQUFDLFdBQUQsQ0FBZixDQUE2QjlDLFFBQTdCLEdBQXNDLElBQXRDO0FBQ0g7QUFDSixPQUpEO0FBTUo7O0FBR0RrQyxlQUFXLENBQUNZLGVBQUQsQ0FBWDtBQUVGLEdBeENRLEVBd0NQLENBQUNILFFBQUQsQ0F4Q08sQ0FBVCxDQXZDK00sQ0FpRi9NOztBQUNBLE1BQU1hLFNBQVMsR0FBQyxTQUFWQSxTQUFVLENBQUNDLFdBQUQsRUFBZTtBQUUzQixRQUFNWCxlQUFlLHFCQUFLYixRQUFMLENBQXJCOztBQUdBLFFBQUdhLGVBQWUsQ0FBQ1csV0FBRCxDQUFmLENBQTZCekQsUUFBN0IsSUFBdUMsS0FBMUMsRUFBZ0Q7QUFFNUM4QyxxQkFBZSxDQUFDVyxXQUFELENBQWYsQ0FBNkJ6RCxRQUE3QixHQUFzQyxJQUF0QztBQUNBOEMscUJBQWUsQ0FBQ1csV0FBRCxDQUFmLENBQTZCdkQsU0FBN0IsR0FBdUMsSUFBdkM7QUFDQTRDLHFCQUFlLENBQUNXLFdBQUQsQ0FBZixDQUE2QjdCLE1BQTdCLEdBQXFDa0IsZUFBZSxDQUFDVyxXQUFELENBQWYsQ0FBNkI3QixNQUE3QixHQUFvQyxDQUF6RTs7QUFDQSxVQUFHNkIsV0FBVyxJQUFJLFFBQWYsSUFBMkJBLFdBQVcsSUFBSSxNQUE3QyxFQUFvRDtBQUNoRFgsdUJBQWUsQ0FBQ1csV0FBRCxDQUFmLENBQTZCM0IsS0FBN0IsQ0FBbUN5QixPQUFuQyxDQUEyQztBQUN2Q0csbUJBQVMsRUFBQ2YsUUFBUSxDQUFDZ0IsUUFEb0I7QUFFdkNDLGtCQUFRLEVBQUNqQixRQUFRLENBQUNrQixXQUZxQjtBQUd2Q1gsWUFBRSxFQUFDUCxRQUFRLENBQUNNO0FBSDJCLFNBQTNDO0FBS0g7O0FBRUQ1QiwwQkFBb0IsQ0FBQ0MsTUFBRCxFQUFRbUMsV0FBUixFQUFvQixRQUFwQixFQUE2QmhDLE1BQTdCLENBQXBCO0FBQ0gsS0FkRCxNQWVJO0FBRUFxQixxQkFBZSxDQUFDVyxXQUFELENBQWYsQ0FBNkJ6RCxRQUE3QixHQUF3QyxLQUF4QztBQUNBOEMscUJBQWUsQ0FBQ1csV0FBRCxDQUFmLENBQTZCdkQsU0FBN0IsR0FBdUMsS0FBdkM7QUFDQTRDLHFCQUFlLENBQUNXLFdBQUQsQ0FBZixDQUE2QjdCLE1BQTdCLEdBQXNDa0IsZUFBZSxDQUFDVyxXQUFELENBQWYsQ0FBNkI3QixNQUE3QixHQUFvQyxDQUExRTs7QUFDQSxVQUFHNkIsV0FBVyxJQUFJLFFBQWYsSUFBMkJBLFdBQVcsSUFBSSxNQUE3QyxFQUFvRDtBQUNqRFgsdUJBQWUsQ0FBQ1csV0FBRCxDQUFmLENBQTZCM0IsS0FBN0IsQ0FBbUN3QixNQUFuQyxDQUEwQyxDQUExQyxFQUE0QyxDQUE1QztBQUNGOztBQUVEakMsMEJBQW9CLENBQUNDLE1BQUQsRUFBUW1DLFdBQVIsRUFBb0IsU0FBcEIsQ0FBcEI7QUFFSDs7QUFFRHZCLGVBQVcsQ0FBQ1ksZUFBRCxDQUFYO0FBRUgsR0FuQ0Q7O0FBc0NBLHNCQUNHLHFFQUFDLFVBQUQ7QUFBYSxTQUFLLEVBQUVqRSxLQUFwQjtBQUEyQixhQUFTLEVBQUVDLFNBQXRDO0FBQUEsZUFHUTtBQUNBRCxTQUFLLGdCQUVMO0FBQUEsOEJBQ0sscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFFSyxxRUFBQyxXQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxtQkFBUyxFQUFDLG1CQUFoQjtBQUFvQyxvQkFBVSxFQUFFO0FBQUNpRixrQkFBTSxFQUFDLEtBQVI7QUFBY0MscUJBQVMsRUFBQyxPQUF4QjtBQUFnQ0Msc0JBQVUsRUFBQyxTQUEzQztBQUFxREMscUJBQVMsRUFBQyxTQUEvRDtBQUF5RWhFLGlCQUFLLEVBQUMsT0FBL0U7QUFBdUZpRSxpQkFBSyxFQUFDLE1BQTdGO0FBQW9HQyxrQkFBTSxFQUFDLE1BQTNHO0FBQWtIQyxzQkFBVSxFQUFDO0FBQTdIO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLGVBQUssRUFBRTtBQUFDQyxzQkFBVSxFQUFDLE1BQVo7QUFBbUJwRSxpQkFBSyxFQUFDLE9BQXpCO0FBQWlDcUUscUJBQVMsRUFBQztBQUEzQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLEdBU0gsSUFiVixFQWlCTztBQUNBeEYsYUFBUyxnQkFBSSxxRUFBQyxnREFBRDtBQUFNLGVBQVMsRUFBQyx5QkFBaEI7QUFBMEMsZ0JBQVUsRUFBRTtBQUFDeUYsZ0JBQVEsRUFBQyxVQUFWO0FBQXFCQyxZQUFJLEVBQUMsTUFBMUI7QUFBaUNDLFdBQUcsRUFBQyxLQUFyQztBQUEyQ3hFLGFBQUssRUFBQztBQUFqRDtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUosR0FBaUksSUFsQmpKLEVBc0JLO0FBQ0EsS0FBQ25CLFNBQUQsZ0JBRUc7QUFBSyxTQUFHLEVBQUVzRCxHQUFWO0FBQUEsOEJBRUsscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBVSxFQUFFLHNCQUFJO0FBQUNFLG9CQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXFCLFNBQTVDO0FBQThDLGlCQUFTLEVBQUMsbUJBQXhEO0FBQTRFLGtCQUFVLEVBQUU7QUFBQ2tDLGtCQUFRLEVBQUMsVUFBVjtBQUFxQkcsZUFBSyxFQUFDLE1BQTNCO0FBQWtDRCxhQUFHLEVBQUMsTUFBdEM7QUFBNkN4RSxlQUFLLEVBQUNwQixLQUFLLEdBQUcsT0FBSCxHQUFhLFNBQXJFO0FBQStFaUYsZ0JBQU0sRUFBQztBQUF0RjtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkwsRUFJU3pCLE9BQU8sZ0JBQ1AscUVBQUMsWUFBRDtBQUFjLGNBQU0sRUFBRSxJQUF0QjtBQUFBLG1CQUVRLENBQUN4RCxLQUFELGdCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGtDQUNNLHFFQUFDLFlBQUQ7QUFBQSxvQ0FDSSxxRUFBQyxnREFBRDtBQUFNLHVCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLHdCQUFVLEVBQUU7QUFBQ3FGLHFCQUFLLEVBQUMsTUFBUDtBQUFjRCx5QkFBUyxFQUFDLFNBQXhCO0FBQWtDRSxzQkFBTSxFQUFDLE1BQXpDO0FBQWdEQywwQkFBVSxFQUFDO0FBQTNEO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLG1CQUFLLEVBQUU7QUFBQ08sMEJBQVUsRUFBQyxLQUFaO0FBQWtCMUUscUJBQUssRUFBQztBQUF4QixlQUFaO0FBQUEsc0NBQ0k7QUFBRyxxQkFBSyxFQUFFO0FBQUNBLHVCQUFLLEVBQUM7QUFBUCxpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUcscUJBQUssRUFBRTtBQUFDMkUsMEJBQVEsRUFBQztBQUFWLGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE4sZUFRTSxxRUFBQyxZQUFEO0FBQUEsb0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSx1QkFBUyxFQUFDLGFBQWhCO0FBQThCLHdCQUFVLEVBQUU7QUFBQ1YscUJBQUssRUFBQyxNQUFQO0FBQWNELHlCQUFTLEVBQUMsU0FBeEI7QUFBa0NFLHNCQUFNLEVBQUMsTUFBekM7QUFBZ0RDLDBCQUFVLEVBQUM7QUFBM0Q7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUssbUJBQUssRUFBRTtBQUFDTywwQkFBVSxFQUFDLEtBQVo7QUFBa0IxRSxxQkFBSyxFQUFDO0FBQXhCLGVBQVo7QUFBQSxzQ0FDSTtBQUFHLHFCQUFLLEVBQUU7QUFBQ0EsdUJBQUssRUFBQztBQUFQLGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBRyxxQkFBSyxFQUFFO0FBQUMyRSwwQkFBUSxFQUFDO0FBQVYsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsR0FnQnNCLElBbEI5QixFQXFCUXZGLE9BQU8sZ0JBQ1AscUVBQUMsWUFBRDtBQUFjLGlCQUFPLEVBQUU7QUFBQSxtQkFBSWdDLG9CQUFvQixDQUFDQyxNQUFELEVBQVFDLGFBQVIsRUFBc0IsU0FBdEIsRUFBZ0NDLFFBQWhDLEVBQXlDRCxhQUF6QyxDQUF4QjtBQUFBLFdBQXZCO0FBQUEsa0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxxQkFBUyxFQUFDLHdCQUFoQjtBQUF5QyxzQkFBVSxFQUFFO0FBQUMyQyxtQkFBSyxFQUFDLE1BQVA7QUFBY0QsdUJBQVMsRUFBQyxTQUF4QjtBQUFrQ0Usb0JBQU0sRUFBQyxNQUF6QztBQUFnREMsd0JBQVUsRUFBQztBQUEzRDtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNPLHdCQUFVLEVBQUMsS0FBWjtBQUFrQjFFLG1CQUFLLEVBQUM7QUFBeEIsYUFBWjtBQUFBLG9DQUNJO0FBQUcsbUJBQUssRUFBRTtBQUFDQSxxQkFBSyxFQUFDO0FBQVAsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUcsbUJBQUssRUFBRTtBQUFDMkUsd0JBQVEsRUFBQztBQUFWLGVBQVY7QUFBQSx3QkFBOEJoQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE8sR0FRTCxJQTdCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxHQWlDTCxJQXJDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSDtBQUFBO0FBNENFO0FBQ0E7QUFBSyxTQUFHLEVBQUVSLEdBQVY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFVLEVBQUUsc0JBQUk7QUFBQ0Usb0JBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBcUIsU0FBNUM7QUFBOEMsaUJBQVMsRUFBQyxtQkFBeEQ7QUFBNEUsa0JBQVUsRUFBRTtBQUFDa0Msa0JBQVEsRUFBQyxVQUFWO0FBQXFCRyxlQUFLLEVBQUMsTUFBM0I7QUFBa0NELGFBQUcsRUFBQyxNQUF0QztBQUE2Q3hFLGVBQUssRUFBQztBQUFuRDtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHTW9DLE9BQU8saUJBQ04scUVBQUMsWUFBRDtBQUFjLGNBQU0sRUFBRSxJQUF0QjtBQUFBLCtCQUNHLHFFQUFDLFlBQUQ7QUFBQSxrQ0FDSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNzQyx3QkFBVSxFQUFDO0FBQVosYUFBWjtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEVQLEVBcUZTLENBQUM5RixLQUFELGlCQUNBLHFFQUFDLFVBQUQ7QUFBQSw2QkFDQTtBQUFLLGFBQUssRUFBRTtBQUFDZ0csaUJBQU8sRUFBQyxNQUFUO0FBQWdCQyxvQkFBVSxFQUFDLFFBQTNCO0FBQW9DWCxnQkFBTSxFQUFDLE1BQTNDO0FBQWtEUSxvQkFBVSxFQUFDO0FBQTdELFNBQVo7QUFBQSxnQ0FDSSxxRUFBQyxrQkFBRDtBQUFvQixtQkFBUyxFQUFFN0YsU0FBL0I7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUU7QUFDUmlHLHNCQUFRLHFCQUFhdEQsTUFBYixDQURBO0FBRVJ1RCxtQkFBSyxFQUFDO0FBQUNDLG9CQUFJLEVBQUM7QUFBTjtBQUZFLGFBQVo7QUFBQSxtQ0FJQSxxRUFBQyxxRUFBRDtBQUFjLG1CQUFLLEVBQUVuRyxTQUFTLEdBQUcsTUFBSCxHQUFZLE1BQTFDO0FBQWtELG9CQUFNLEVBQUVBLFNBQVMsR0FBRyxNQUFILEdBQVksTUFBL0U7QUFBdUYscUJBQU8sRUFBRTRCO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJO0FBQUssZUFBSyxFQUFFO0FBQUNpRSxzQkFBVSxFQUFDLE1BQVo7QUFBbUJDLG9CQUFRLEVBQUM7QUFBNUIsV0FBWjtBQUFBLGtDQUFpRDtBQUFHLGlCQUFLLEVBQUU7QUFBQzNFLG1CQUFLLEVBQUM7QUFBUCxhQUFWO0FBQUEsbUNBQzdDO0FBQUEsd0JBQVNhLFFBQVEsR0FBQyxHQUFULEdBQWFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFENkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBakQsZUFFSTtBQUFLLGlCQUFLLEVBQUU7QUFBQzRELHdCQUFVLEVBQUMsTUFBWjtBQUFtQkMsc0JBQVEsRUFBQyxNQUE1QjtBQUFtQ00seUJBQVcsRUFBQyxNQUEvQztBQUFzRGpGLG1CQUFLLEVBQUM7QUFBNUQsYUFBWjtBQUFBLG1DQUFvRjtBQUFBLHdCQUFPa0YsZ0VBQWEsQ0FBQ25FLElBQUQsQ0FBYixDQUFvQm9FLElBQXBCLEdBQTJCLEdBQTNCLEdBQWlDRCxnRUFBYSxDQUFDbkUsSUFBRCxDQUFiLENBQW9CcUUsT0FBckQsR0FBK0Q7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZULGVBd0dJLHFFQUFDLFVBQUQ7QUFBWSxhQUFPLEVBQUVoRyxPQUFyQjtBQUFBLGlCQUVRUCxTQUFTLElBQUlELEtBQWIsR0FBcUIsSUFBckIsZ0JBRUMscUVBQUMsV0FBRDtBQUFBLCtCQUNJLHFFQUFDLFFBQUQ7QUFBQSxpQ0FDUSxxRUFBQyxHQUFEO0FBQUssZUFBRyxFQUFFK0I7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKVCxlQVVLLHFFQUFDLGFBQUQ7QUFBZSxpQkFBUyxFQUFFOUIsU0FBMUI7QUFBQSxtQkFFUUEsU0FBUyxnQkFFTCxxRUFBQyxVQUFEO0FBQVksbUJBQVMsRUFBRUEsU0FBdkI7QUFBQSxpQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQ3dGLHVCQUFTLEVBQUMsTUFBWDtBQUFrQmdCLHVCQUFTLEVBQUM7QUFBNUIsYUFBVjtBQUFBLHNCQUErQzNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZLLEdBT0wsQ0FBQzlCLEtBQUQsZ0JBRUEscUVBQUMsVUFBRDtBQUFZLG1CQUFTLEVBQUVDLFNBQXZCO0FBQUEsa0NBRUk7QUFBSSxpQkFBSyxFQUFFO0FBQUN5RywwQkFBWSxFQUFDLE1BQWQ7QUFBcUJ0RixtQkFBSyxFQUFDO0FBQTNCLGFBQVg7QUFBQSxzQkFBbURZO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFJSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsZUFBWDtBQUEyQixjQUFFLHFCQUFjUyxNQUFkLENBQTdCO0FBQUEsbUNBQ0k7QUFBRyxtQkFBSyxFQUFFO0FBQUNnRCx5QkFBUyxFQUFDLE1BQVg7QUFBa0JnQix5QkFBUyxFQUFDLEtBQTVCO0FBQWtDRSxzQkFBTSxFQUFDO0FBQXpDLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxHQVdFLElBcEJkLGVBdUJJLHFFQUFDLE9BQUQ7QUFBUyxpQkFBTyxFQUFFbkcsT0FBbEI7QUFBQSxxQkFFUSxDQUFDUCxTQUFELGlCQUNDLHFFQUFDLFVBQUQ7QUFBWSxzQkFBVSxFQUFDLE9BQXZCO0FBQStCLGlCQUFLLEVBQUU7QUFBQzJHLGtCQUFJLEVBQUM7QUFBTixhQUF0QztBQUFBLG9DQUNHLHFFQUFDLEtBQUQ7QUFBUSx3QkFBVSxFQUFDLGdCQUFuQjtBQUFvQyxzQkFBUSxFQUFFeEQsUUFBUSxDQUFDRixNQUFULENBQWdCL0IsUUFBOUQ7QUFBd0UsdUJBQVMsRUFBRWlDLFFBQVEsQ0FBQ0YsTUFBVCxDQUFnQjdCLFNBQW5HO0FBQThHLG1CQUFLLEVBQUUsT0FBckg7QUFBK0gscUJBQU8sRUFBRTtBQUFBLHVCQUFJc0QsU0FBUyxDQUFDLFFBQUQsQ0FBYjtBQUFBLGVBQXhJO0FBQWtLLHVCQUFTLEVBQUM7QUFBNUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxlQUVHLHFFQUFDLE9BQUQ7QUFBUyxxQkFBTyxFQUFFO0FBQUEsdUJBQUlwQyxVQUFVLENBQUNhLFFBQVEsQ0FBQyxRQUFELENBQVIsQ0FBbUJILEtBQXBCLEVBQTBCLFFBQTFCLENBQWQ7QUFBQSxlQUFsQjtBQUFBLHdCQUFzRUcsUUFBUSxDQUFDRixNQUFULENBQWdCSDtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIVCxlQVFJLHFFQUFDLFVBQUQ7QUFBWSxzQkFBVSxFQUFDLEtBQXZCO0FBQTZCLGlCQUFLLEVBQUU7QUFBQzZELGtCQUFJLEVBQUM7QUFBTixhQUFwQztBQUFBLG9DQUNJLHFFQUFDLEtBQUQ7QUFBUSx3QkFBVSxFQUFDLGVBQW5CO0FBQW1DLHNCQUFRLEVBQUV4RCxRQUFRLENBQUNOLElBQVQsQ0FBYzNCLFFBQTNEO0FBQXFFLHVCQUFTLEVBQUVpQyxRQUFRLENBQUNOLElBQVQsQ0FBY3pCLFNBQTlGO0FBQXlHLG1CQUFLLEVBQUUsU0FBaEg7QUFBNEgscUJBQU8sRUFBRTtBQUFBLHVCQUFJc0QsU0FBUyxDQUFDLE1BQUQsQ0FBYjtBQUFBLGVBQXJJO0FBQTRKLHVCQUFTLEVBQUM7QUFBdEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLHFFQUFDLE9BQUQ7QUFBVSxxQkFBTyxFQUFFO0FBQUEsdUJBQUlwQyxVQUFVLENBQUNhLFFBQVEsQ0FBQyxNQUFELENBQVIsQ0FBaUJILEtBQWxCLEVBQXdCLE1BQXhCLENBQWQ7QUFBQSxlQUFuQjtBQUFBLHdCQUFvRUcsUUFBUSxDQUFDTixJQUFULENBQWNDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLGVBWUkscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQzZELGtCQUFJLEVBQUM7QUFBTixhQUFuQjtBQUFBLHVCQUVRM0csU0FBUyxnQkFFVCxxRUFBQyw2REFBRDtBQUFZLHFCQUFPLEVBQUU7QUFBQSx1QkFBSTBELGdCQUFnQixDQUFDLElBQUQsQ0FBcEI7QUFBQSxlQUFyQjtBQUFrRCxtQkFBSyxFQUFFO0FBQUN2QyxxQkFBSyxFQUFDLE1BQVA7QUFBY3VGLHNCQUFNLEVBQUM7QUFBckI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGUyxnQkFNVCxxRUFBQyxLQUFEO0FBQU8sdUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJSLGVBVUk7QUFBTSxtQkFBSyxFQUFFO0FBQUNiLDBCQUFVLEVBQUMsS0FBWjtBQUFrQjFFLHFCQUFLLEVBQUM7QUFBeEIsZUFBYjtBQUFBLHdCQUEyQ2dCLE9BQU8sQ0FBQ1k7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkosZUF3QkkscUVBQUMsVUFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQzRELGtCQUFJLEVBQUMsQ0FBTjtBQUFRWixxQkFBTyxFQUFDLE1BQWhCO0FBQXVCYSw0QkFBYyxFQUFDLFVBQXRDO0FBQWlEekYsbUJBQUssRUFBQztBQUF2RCxhQUFuQjtBQUFBLG1DQUNJLHFFQUFDLEtBQUQ7QUFBUSxzQkFBUSxFQUFFZ0MsUUFBUSxDQUFDRCxTQUFULENBQW1CaEMsUUFBckM7QUFBK0MsdUJBQVMsRUFBRWlDLFFBQVEsQ0FBQ0QsU0FBVCxDQUFtQjlCLFNBQTdFO0FBQXdGLG1CQUFLLEVBQUUsT0FBL0Y7QUFBd0cscUJBQU8sRUFBRTtBQUFBLHVCQUFJc0QsU0FBUyxDQUFDLFdBQUQsQ0FBYjtBQUFBLGVBQWpIO0FBQThJLHVCQUFTLEVBQUM7QUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkosZUFtREkscUVBQUMsV0FBRDtBQUFBLGlDQUNHLHFFQUFDLDREQUFEO0FBQ0ksc0JBQVUsRUFBRTtBQUNQbUMsbUJBQUssRUFBQztBQUFDMUYscUJBQUssRUFBQyxTQUFQO0FBQWlCdUYsc0JBQU0sRUFBQztBQUF4QixlQURDO0FBRVBJLDBCQUFZLGVBQUUscUVBQUMsaUVBQUQ7QUFBZ0Isd0JBQVEsRUFBQyxLQUF6QjtBQUFBLHVDQUErQixxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUCxhQURoQjtBQUtLLGlCQUFLLEVBQUMscUJBTFg7QUFLaUMsZ0JBQUksRUFBQyxPQUx0QztBQUs4QyxtQkFBTyxFQUFDO0FBTHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFvTEg7O0dBNVNRcEYsVztVQXFCNEIyQiw0RDs7O09BckI1QjNCLFc7QUErU00sbUZBQUFxRiw0Q0FBSyxDQUFDQyxJQUFOLENBQVd0RixXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLjA3NDg0NGE1MTJlNzg1M2QxZTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LCBmZWVkLCBGZWVkYmFjayxTZW5kfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtjYWxjdWxhdGVkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHNmdW5jXCJcclxuaW1wb3J0IHVzZUNsaWNrb3V0c2lkZSBmcm9tIFwiLi4vLi4vaG9va3MvQ2xpa2NvdXRpc2RlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCAsIEJ1dHRvbixJbnB1dEFkb3JubWVudH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MTZweH1cclxuMjUlIHtmb250LXNpemU6MThweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNjUlIHtmb250LXNpemU6MTd9XHJcbjcwJSB7Zm9udC1zaXplOjEwcHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5oZWlnaHQ6JHsoe2RyYWZ0fSk9PiBkcmFmdCA/IFwiMzAwcHhcIiA6IFwiXCJ9O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5cclxuYFxyXG5cclxuLy9UaGlzIGlzIGZvciBkcmFmdCBwYWdlXHJcbmNvbnN0IFNvZnRjb3ZlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDozMDA7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5vcGFjaXR5OjAuNjtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAkeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiMTVweFwiOiBcIjBweFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxuZmxleDoxO1xyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJibG9ja1wiOlwiZmxleFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5gXHJcblxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7YW5pbWF0aW9ufSk9PmFuaW1hdGlvbiA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDozNTBweDtcclxucGFkZGluZzo1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MTBweDsgXHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6NDgwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBEcmFmdGhvbGRlciA9IHN0eWxlZC5zcGFuYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcbi8vY29tbWVudC1hbnN3ZXIgc2VjdGlvblxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTVweDtcclxucGFkZGluZy10b3A6MTVweDtcclxuYFxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTtcclxuJjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG5cclxufVxyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmZ1bmN0aW9uIENvbnRlbnRjYXJkKHtyZWFkbGF0ZXIsZHJhZnQscHJvZmlsZWltYWdlLGNvbnRlbnQsdGl0bGVpbWFnZSx0aXRsZSxpc2NvbW1lbnQsdXNlcm5hbWUsdXNlcnN1cm5hbWUsZGF0ZSxjb21tZW50LHJldHdlZXQsbGlrZSxzaG93d2luZG93LGNyZWF0ZXJlbGF0aW9uZm9yc21oLHBvc3RJZCxmb3J1c2VyLGZvcnVzZXJvcHRpb24saW5kZXhudW0sdXNlcmlkfSl7XHJcbiAgICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6bGlrZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2hvdzp7XHJcbiAgICAgICAgICAgIG51bWJlcjpyZXR3ZWV0Lmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6cmV0d2VldCxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgbnVtYmVyOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZGUoKTtcclxuICAgIGNvbnN0IFtjb21tZW50YW5zd2VyLHNldGNvbW1lbnRhbnN3ZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyKXtcclxuXHJcbiAgICAgICAgICAgIGxpa2UuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHdlZXQuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIC8vbGlrZSAsIHNpZ24gYW5kIHNhdmUgb3BlcmF0aW9uc1xyXG4gICAgY29uc3QgQ291bnRwbHVzPShlbGVtZW50dHlwZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgICBpZihjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPT1mYWxzZSl7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPXRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyPSBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcisxO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50dHlwZSA9PSBcInJlc2hvd1wiIHx8IGVsZW1lbnR0eXBlID09IFwiTGlrZVwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOnVzZXJkYXRhLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOnVzZXJkYXRhLlVzZXJzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOnVzZXJkYXRhLlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlcmVsYXRpb25mb3JzbWgocG9zdElkLGVsZW1lbnR0eXBlLFwiQ3JlYXRlXCIsdXNlcmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uaXNtYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5hbmltYXRpb249ZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyID0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXItMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYXJyYXkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkRlc3Ryb3lcIik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE91dHNpZGVkaXYgIGRyYWZ0PXtkcmFmdH0gaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIC8vZHJhZnQgY292ZXJcclxuICAgICAgICAgICAgICAgZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U29mdGNvdmVyLz5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3ppbmRleDpcIjQwMFwiLGhvdmVyYmFjazpcIndoaXRlXCIsaG92ZXJjb2xvcjpcIiNkOTA0MjlcIixiYWNrY29sb3I6XCIjZDkwNDI5XCIsY29sb3I6XCJ3aGl0ZVwiLHdpZHRoOlwiNjBweFwiLGhlaWdodDpcIjYwcHhcIixsaW5laGVpZ2h0OlwiNjBweFwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmdUb3A6XCIxMHB4XCIsY29sb3I6XCJ3aGl0ZVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+Q3VsdHVyZSBvZiB0aGUgT3R0b21hbiBFbXBpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFmdGhvbGRlcj5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcclxuICAgICAgICAgICAgICBpc2NvbW1lbnQgPyAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNhcmV0LWxlZnQgZmEtbGdcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6XCItNnB4XCIsdG9wOlwiOHB4XCIsY29sb3I6XCIjZmFmOWY5XCJ9fT48L0ljb24+IDogbnVsbFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvL29wdGlvbiBzZWN0aW9uXHJcbiAgICAgICAgICAgICFpc2NvbW1lbnQgPyAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+ICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOmRyYWZ0ID8gXCJ3aGl0ZVwiIDogXCIjMkEyQTJBXCIsemluZGV4OlwiNTAwXCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbndpbmRvdyBhY3RpdmU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLW1pbnVzXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+RHVoYW4gw5Z6dMO8cmsnw7wgdGFraXB0ZW4gw6fEsWs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CdSBrdWxsYW7EsWPEsWRhbiBnZWxlbiBiaWxkaXJpbWxlcmkgZ8O2cm1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCIgSWNvbmNvbmZpZz17e3dpZHRoOlwiMzVweFwiLGJhY2tjb2xvcjpcIiNERURFREVcIixoZWlnaHQ6XCIzNXB4XCIsbGluZWhlaWdodDpcIjMycHhcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+UGF5bGHFnzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkJhxJ9sYW50xLEgYWRyZXNpbmkga29weWFsYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXIgb25DbGljaz17KCk9PmNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxmb3J1c2Vyb3B0aW9uLFwiRGVzdHJveVwiLGluZGV4bnVtLGZvcnVzZXJvcHRpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdCBmYS1zbVwiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCIsY29sb3I6XCIjNzU3NTc1XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+S2FsZMSxcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT57dGV4dGZvcm9waXRvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgIC8vY29tbWVudCByZXBvcnRcclxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIDxJY29uIGFjdGl2ZWZ1bmM9eygpPT57c2V0dmlzaWJsZSghdmlzaWJsZSl9fSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtdlwiIEljb25jb25maWc9e3twb3NpdGlvbjpcImFic29sdXRlXCIscmlnaHQ6XCIxMHB4XCIsdG9wOlwiMTBweFwiLGNvbG9yOlwiIzJBMkEyQVwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgKDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkYmFjaz48L0ZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJpbGRpcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgIDwvT3B0aW9ud2luZG93PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFkcmFmdCAmJlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMCVcIixtYXJnaW5MZWZ0OlwiNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZWltYWdlaG9sZGVyIGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6YC9wcm9maWxlLyR7dXNlcmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTp7bmFtZTpcIlBvc3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugd2lkdGg9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IGhlaWdodD17aXNjb21tZW50ID8gXCI0MHB4XCIgOiBcIjM1cHhcIn0gcHJvZmlsZT17cHJvZmlsZWltYWdlfT48L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZWltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLGZvbnRTaXplOlwiMTVweFwifX0+PHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dXNlcm5hbWUrXCIgXCIrdXNlcnN1cm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcImF1dG9cIixmb250U2l6ZTpcIjEzcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIixjb2xvcjpcIiM3RDdEN0RcIn19PjxzcGFuPntjYWxjdWxhdGVkYXRlKGRhdGUpLnRpbWUgKyBcIiBcIiArIGNhbGN1bGF0ZWRhdGUoZGF0ZSkuZXhwcmVzcyArIFwiIMOWbmNlXCJ9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZWRpdj5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIDxTZWNvbmRQYXJ0IGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgfHwgZHJhZnQgPyBudWxsIDogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt0aXRsZWltYWdlfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudGhvbGRlciBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudGRpdiBpc2NvbW1lbnQ9e2lzY29tbWVudH0+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIix3b3JkQnJlYWs6XCJicmVcIn19Pntjb250ZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkcmFmdCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTBweFwiLGNvbG9yOlwiI0E3MDkwOVwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250ZW50L1tpZF1cIiBhcz17YC9jb250ZW50LyR7cG9zdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImxlZnRcIix3b3JkQnJlYWs6XCJicmVcIixjdXJzb3I6XCJwb2ludGVyXCJ9fT5XaGlsZSB0aGUgQ3J5cHRvIFByb2Zlc3NvcnMgbWF5IHNldCBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIHNvbWUuLi4uPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyIGZvcnVzZXI9e2ZvcnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNjb21tZW50ICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDzEsGNvbmhvbGRlciBob3dlcmNvbG9yPVwiZ3JlZW5cIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaG93ZXJjb2xvcj1cIjAsIDI1NSwgMCwgMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLnJlc2hvdy5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5yZXNob3cuYW5pbWF0aW9ufSBjb2xvcj17XCJncmVlblwifSAgb25DbGljaz17KCk9PkNvdW50cGx1cyhcInJlc2hvd1wiKX0gIGNsYXNzTmFtZT1cImZhcyBmYS1yZXR3ZWV0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbmZvciBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheSxcIlJlc2hvd1wiKX0+e2VsZW1lbnRzLnJlc2hvdy5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cInJlZFwiIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIyNTUsIDAsIDAsMC4yXCIgaXNtYXJrZWQ9e2VsZW1lbnRzLkxpa2UuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMuTGlrZS5hbmltYXRpb259IGNvbG9yPXtcIiNDNzIxMjFcIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJMaWtlXCIpfSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhcnQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3IgIG9uQ2xpY2s9eygpPT5zaG93d2luZG93KGVsZW1lbnRzW1wiTGlrZVwiXS5hcnJheSxcIkxpa2VcIil9ID57ZWxlbWVudHMuTGlrZS5udW1iZXJ9PC9TcGFuZm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudCBvbkNsaWNrPXsoKT0+c2V0Y29tbWVudGFuc3dlcih0cnVlKX0gIHN0eWxlPXt7Y29sb3I6XCJncmV5XCIsY3Vyc29yOlwicG9pbnRlclwifX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBjbGFzc05hbWU9XCJmYXMgZmEtY29tbWVudC1hbHQgZmEtc21cIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsY29sb3I6XCJcIn19Pntjb21tZW50Lmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvxLBjb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDzEsGNvbmhvbGRlciBzdHlsZT17e2ZsZXg6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIixjb2xvcjpcImdyZXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBpc21hcmtlZD17ZWxlbWVudHMuUmVhZGxhdGVyLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLlJlYWRsYXRlci5hbmltYXRpb259IGNvbG9yPXtcImJsYWNrXCJ9IG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJSZWFkbGF0ZXJcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtYm9va21hcmtcIj48L0ljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6e2NvbG9yOlwiI2U2Mzk0NlwiLGN1cnNvcjpcInBvaW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj48U2VuZD48L1NlbmQ+PC9JbnB1dEFkb3JubWVudD4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3J1bWEgQ2V2YXAgVmVyLi4uXCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50aG9sZGVyPlxyXG4gICAgICAgICAgIDwvU2Vjb25kUGFydD5cclxuICAgICAgIDwvT3V0c2lkZWRpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGVudGNhcmQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9