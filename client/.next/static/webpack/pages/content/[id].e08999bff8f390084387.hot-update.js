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
})(["display:flex;flex-direction:column;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:300;"]);
_c15 = Draftholder;
var Profileimageholder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contentcard__Profileimageholder",
  componentId: "r68yrd-16"
})(["cursor:pointer;position:", ";left:", ";&:before{position:absolute;top:50px;left:20px;border-radius:10px;width:100px;height:150px;border-left:2px solid lightgrey;border-bottom:2px solid lightgrey;content:\"\";}"], function (_ref10) {
  var iscomment = _ref10.iscomment;
  return iscomment ? "absolute" : "relative";
}, function (_ref11) {
  var iscomment = _ref11.iscomment;
  return iscomment ? "-60px" : "0px";
}); //içerik sayısı,takipçi sayısı,

_c16 = Profileimageholder;

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
  }, [userdata]);

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
        lineNumber: 312,
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
          lineNumber: 314,
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
          lineNumber: 315,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 311,
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
      lineNumber: 323,
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
        lineNumber: 332,
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
              lineNumber: 340,
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
                lineNumber: 342,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Bu kullan\u0131c\u0131dan gelen bildirimleri g\xF6rme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
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
              lineNumber: 347,
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
                lineNumber: 349,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                style: {
                  fontSize: "13px"
                },
                children: "Ba\u011Flant\u0131 adresini kopyala"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 338,
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
            lineNumber: 358,
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
              lineNumber: 360,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                fontSize: "13px"
              },
              children: textforopiton
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 25
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 330,
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
        lineNumber: 374,
        columnNumber: 17
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionwindow, {
        active: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Optionholder, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Feedback"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: "8px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Bildir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 373,
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
              lineNumber: 398,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
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
              lineNumber: 402,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
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
              lineNumber: 403,
              columnNumber: 109
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SecondPart, {
      foruser: foruser,
      children: [iscomment || draft ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imageholder, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Imagediv, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
            src: titleimage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 413,
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
            lineNumber: 424,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 423,
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
            lineNumber: 432,
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
              lineNumber: 435,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 430,
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
              lineNumber: 446,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["reshow"].array, "Reshow");
              },
              children: elements.reshow.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
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
              lineNumber: 451,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spanfor, {
              onClick: function onClick() {
                return showwindow(elements["Like"].array, "Like");
              },
              children: elements.Like.number
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 450,
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
              lineNumber: 458,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icons, {
              className: "fas fa-comment-alt fa-sm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                marginLeft: "5px",
                color: ""
              },
              children: comment.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 454,
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
              lineNumber: 467,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "sa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 8
  }, this);
}

_s(Contentcard, "viPgo9GmW95aJw8g//WoQ72dEe0=", false, function () {
  return [_hooks_Clikcoutisde__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c17 = Contentcard;
/* harmony default export */ __webpack_exports__["default"] = (_c18 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Contentcard));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

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
$RefreshReg$(_c16, "Profileimageholder");
$RefreshReg$(_c17, "Contentcard");
$RefreshReg$(_c18, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29udGVudGNhcmQuanMiXSwibmFtZXMiOlsiTGlrZWFuaW1hdG9uIiwia2V5ZnJhbWVzIiwiT3V0c2lkZWRpdiIsInN0eWxlZCIsImRpdiIsImRyYWZ0IiwiaXNjb21tZW50IiwiU29mdGNvdmVyIiwiSW1hZ2VkaXYiLCJJbWFnZWhvbGRlciIsIkNvbnRlbnRob2xkZXIiLCJDb250ZW50ZGl2IiwiU2Vjb25kUGFydCIsImZvcnVzZXIiLCJUb29sYmFyIiwiSW1nIiwiaW1nIiwiU3BhbmZvciIsInNwYW4iLCLEsGNvbmhvbGRlciIsImhvd2VyY29sb3IiLCJQcm9maWxlZGl2IiwiSWNvbnMiLCJpIiwiaXNtYXJrZWQiLCJjb2xvciIsImFuaW1hdGlvbiIsIk9wdGlvbndpbmRvdyIsIk9wdGlvbmhvbGRlciIsIkRyYWZ0aG9sZGVyIiwiUHJvZmlsZWltYWdlaG9sZGVyIiwiQ29udGVudGNhcmQiLCJyZWFkbGF0ZXIiLCJwcm9maWxlaW1hZ2UiLCJjb250ZW50IiwidGl0bGVpbWFnZSIsInRpdGxlIiwidXNlcm5hbWUiLCJ1c2Vyc3VybmFtZSIsImRhdGUiLCJjb21tZW50IiwicmV0d2VldCIsImxpa2UiLCJzaG93d2luZG93IiwiY3JlYXRlcmVsYXRpb25mb3JzbWgiLCJwb3N0SWQiLCJmb3J1c2Vyb3B0aW9uIiwiaW5kZXhudW0iLCJ1c2VyaWQiLCJ1c2VTdGF0ZSIsIkxpa2UiLCJudW1iZXIiLCJsZW5ndGgiLCJhcnJheSIsInJlc2hvdyIsIlJlYWRsYXRlciIsImVsZW1lbnRzIiwic2V0ZWxlbWVudHMiLCJ1c2VDbGlja291dHNpZGUiLCJyZWYiLCJ2aXNpYmxlIiwic2V0dmlzaWJsZSIsImNvbW1lbnRhbnN3ZXIiLCJzZXRjb21tZW50YW5zd2VyIiwidXNlQ29udGV4dCIsImNyZWF0ZXVzZXJjb250ZXh0IiwidXNlcmRhdGEiLCJ0ZXh0Zm9yb3BpdG9uIiwidXNlRWZmZWN0IiwiY3VycmVudGVsZW1lbnRzIiwiZm9yRWFjaCIsInVzZXIiLCJVc2VySWQiLCJpZCIsIkluZGV4b2ZjdXJyZW50dXNlciIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiQ291bnRwbHVzIiwiZWxlbWVudHR5cGUiLCJmaXJzdG5hbWUiLCJVc2VybmFtZSIsImxhc3RuYW1lIiwiVXNlcnN1cm5hbWUiLCJ6aW5kZXgiLCJob3ZlcmJhY2siLCJob3ZlcmNvbG9yIiwiYmFja2NvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5laGVpZ2h0IiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInJpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsIm1hcmdpblJpZ2h0IiwiY2FsY3VsYXRlZGF0ZSIsInRpbWUiLCJleHByZXNzIiwid29yZEJyZWFrIiwibWFyZ2luQm90dG9tIiwiY3Vyc29yIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBQ0MsbUVBQUQsc0hBQWxCO0FBUUEsSUFBTUMsVUFBVSxHQUFDQyx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDJNQUdQO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FBWUEsS0FBSyxHQUFHLE9BQUgsR0FBYSxFQUE5QjtBQUFBLENBSE8sRUFNRztBQUFBLE1BQUVDLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWUsQ0FBQ0EsU0FBRCxHQUFhLFNBQWIsR0FBd0IsU0FBdkM7QUFBQSxDQU5ILENBQWhCLEMsQ0FZQTs7S0FaTUosVTtBQWFOLElBQU1LLFNBQVMsR0FBR0oseURBQU0s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RUFBRStCLFFBQVEsQ0FBQ0QsU0FBVCxDQUFtQi9CLFFBQXJDO0FBQStDLHVCQUFTLEVBQUVnQyxRQUFRLENBQUNELFNBQVQsQ0FBbUI3QixTQUE3RTtBQUF3RixtQkFBSyxFQUFFLE9BQS9GO0FBQXdHLHFCQUFPLEVBQUU7QUFBQSx1QkFBSXFELFNBQVMsQ0FBQyxXQUFELENBQWI7QUFBQSxlQUFqSDtBQUE4SSx1QkFBUyxFQUFDO0FBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJKLGVBbURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUEyS0g7O0dBbFNRaEQsVztVQXFCNEIyQiw0RDs7O09BckI1QjNCLFc7QUFxU00sbUZBQUFtRiw0Q0FBSyxDQUFDQyxJQUFOLENBQVdwRixXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC9baWRdLmUwODk5OWJmZjhmMzkwMDg0Mzg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCx7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGV1c2VyY29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlcmNvbnRleHRcIjtcclxuaW1wb3J0IHtQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBZGRDb21tZW50LCBmZWVkLCBGZWVkYmFja30gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7Y2FsY3VsYXRlZGF0ZX0gZnJvbSBcIi4uLy4uL3V0aWxzZnVuY1wiXHJcbmltcG9ydCB1c2VDbGlja291dHNpZGUgZnJvbSBcIi4uLy4uL2hvb2tzL0NsaWtjb3V0aXNkZVwiO1xyXG5cclxuXHJcbmNvbnN0IExpa2VhbmltYXRvbj1rZXlmcmFtZXNgXHJcbjAlIHtmb250LXNpemU6MTZweH1cclxuMjUlIHtmb250LXNpemU6MThweH1cclxuNTAlIHtmb250LXNpemU6MjFweH1cclxuNjUlIHtmb250LXNpemU6MTd9XHJcbjcwJSB7Zm9udC1zaXplOjEwcHh9XHJcbjEwMCUge2ZvbnQtc2l6ZToxNnB4fVxyXG5gXHJcbmNvbnN0IE91dHNpZGVkaXY9c3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbm1hcmdpbjphdXRvO1xyXG5oZWlnaHQ6JHsoe2RyYWZ0fSk9PiBkcmFmdCA/IFwiMzAwcHhcIiA6IFwiXCJ9O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzY29tbWVudH0pPT4haXNjb21tZW50ID8gXCIjZmFmOWY5XCI6IFwiI2ZhZjlmOVwifTtcclxuYm9yZGVyLXJhZGl1czo3cHg7XHJcbmJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xyXG5cclxuYFxyXG5cclxuLy9UaGlzIGlzIGZvciBkcmFmdCBwYWdlXHJcbmNvbnN0IFNvZnRjb3ZlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTAwJTtcclxuei1pbmRleDozMDA7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5vcGFjaXR5OjAuNjtcclxuYFxyXG5cclxuY29uc3QgSW1hZ2VkaXY9c3R5bGVkLmRpdmBcclxucGFkZGluZy1yaWdodDo1cHg7XHJcbnBhZGRpbmctbGVmdDo1cHg7XHJcbmBcclxuY29uc3QgSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoxO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRob2xkZXI9c3R5bGVkLmRpdmBcclxuZmxleDoyO1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHJcbmBcclxuY29uc3QgQ29udGVudGRpdj1zdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAkeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiMTVweFwiOiBcIjBweFwifTtcclxucGFkZGluZy1sZWZ0OjE1cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxuZmxleDoxO1xyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRQYXJ0ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7Zm9ydXNlcn0pPT5mb3J1c2VyID8gXCJibG9ja1wiOlwiZmxleFwifTtcclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5gXHJcblxyXG5jb25zdCBUb29sYmFyPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2ZvcnVzZXJ9KT0+Zm9ydXNlciA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEltZz1zdHlsZWQuaW1nYFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MTUwcHg7XHJcbm9iamVjdC1maXQ6Y292ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KXtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5gXHJcblxyXG5jb25zdCBTcGFuZm9yID0gc3R5bGVkLnNwYW5gXHJcbm1hcmdpbi1sZWZ0OjVweDtcclxuJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCDEsGNvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6IGhvdmVyICR7U3BhbmZvcn17XHJcbiAgICBjb2xvcjokeyh7aG93ZXJjb2xvcn0pPT5ob3dlcmNvbG9yfTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlZGl2PXN0eWxlZC5kaXZgXHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmctdG9wOjEwcHg7XHJcbnBhZGRpbmctYm90dG9tOjEwcHg7XHJcbnRyYW5zaXRpb246YWxsIDAuM3M7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgSWNvbnM9c3R5bGVkLmlgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5mb250LXNpemU6MTZweDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxucGFkZGluZzo1cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKCR7KHtob3dlcmNvbG9yfSk9Pmhvd2VyY29sb3J9KTtcclxufTtcclxuY29sb3I6JHsoe2lzbWFya2VkLGNvbG9yfSk9PmlzbWFya2VkID8gY29sb3IgOiBcImdyZXlcIiB9O1xyXG5hbmltYXRpb24tbmFtZTokeyh7YW5pbWF0aW9ufSk9PmFuaW1hdGlvbiA/IExpa2VhbmltYXRvbiA6IFwiXCJ9O1xyXG5gXHJcbmNvbnN0IE9wdGlvbndpbmRvdz1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmJsb2NrO1xyXG53aWR0aDozNTBweDtcclxucGFkZGluZzo1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MzVweDtcclxucmlnaHQ6MTBweDsgXHJcbmJvcmRlci1yYWRpdXM6N3B4O1xyXG5ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAyNHB4IDgwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnotaW5kZXg6NDgwO1xyXG5gXHJcbmNvbnN0IE9wdGlvbmhvbGRlcj1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5gXHJcblxyXG5jb25zdCBEcmFmdGhvbGRlciA9IHN0eWxlZC5zcGFuYFxyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjUwJTtcclxubGVmdDo1MCU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuei1pbmRleDozMDA7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQcm9maWxlaW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxuY3Vyc29yOnBvaW50ZXI7IFxyXG5wb3NpdGlvbjokeyh7aXNjb21tZW50fSk9PmlzY29tbWVudCA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIn07XHJcbmxlZnQ6JHsoe2lzY29tbWVudH0pPT5pc2NvbW1lbnQgPyBcIi02MHB4XCIgOiBcIjBweFwifTtcclxuJjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBib3JkZXItbGVmdDoycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgY29udGVudDpcIlwiO1xyXG5cclxufVxyXG5gXHJcblxyXG4vL2nDp2VyaWsgc2F5xLFzxLEsdGFraXDDp2kgc2F5xLFzxLEsXHJcbmZ1bmN0aW9uIENvbnRlbnRjYXJkKHtyZWFkbGF0ZXIsZHJhZnQscHJvZmlsZWltYWdlLGNvbnRlbnQsdGl0bGVpbWFnZSx0aXRsZSxpc2NvbW1lbnQsdXNlcm5hbWUsdXNlcnN1cm5hbWUsZGF0ZSxjb21tZW50LHJldHdlZXQsbGlrZSxzaG93d2luZG93LGNyZWF0ZXJlbGF0aW9uZm9yc21oLHBvc3RJZCxmb3J1c2VyLGZvcnVzZXJvcHRpb24saW5kZXhudW0sdXNlcmlkfSl7XHJcbiAgICBcclxuICAgIGNvbnN0W2VsZW1lbnRzLHNldGVsZW1lbnRzXT11c2VTdGF0ZSh7XHJcbiAgICAgICAgTGlrZTp7XHJcbiAgICAgICAgICAgIG51bWJlcjpsaWtlLmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6bGlrZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2hvdzp7XHJcbiAgICAgICAgICAgIG51bWJlcjpyZXR3ZWV0Lmxlbmd0aCxcclxuICAgICAgICAgICAgYXJyYXk6cmV0d2VldCxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmZhbHNlLFxyXG4gICAgICAgICAgICBpc21hcmtlZDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVhZGxhdGVyOntcclxuICAgICAgICAgICAgaXNtYXJrZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpmYWxzZSxcclxuICAgICAgICAgICAgbnVtYmVyOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7cmVmLHZpc2libGUsc2V0dmlzaWJsZX0gPSB1c2VDbGlja291dHNpZGUoKTtcclxuICAgIGNvbnN0IFtjb21tZW50YW5zd2VyLHNldGNvbW1lbnRhbnN3ZXJdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyZGF0YX0gPSB1c2VDb250ZXh0KGNyZWF0ZXVzZXJjb250ZXh0KTtcclxuXHJcblxyXG4gICAgdmFyIHRleHRmb3JvcGl0b249XCJcIjtcclxuICAgIHN3aXRjaCAoZm9ydXNlcm9wdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJSZWFkbGF0ZXJcIjpcclxuICAgICAgICAgICAgdGV4dGZvcm9waXRvbj1cIktheWRlZGlsZW4gZ8O2bmRlcmlsZXJkZW4ga2FsZMSxclwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiTGlrZVwiOlxyXG4gICAgICAgICAgICB0ZXh0Zm9yb3BpdG9uPVwiQmXEn2VuaWxlbiBHw7ZuZGVyaWxlcmRlbiBrYWxkxLFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRyYWZ0XCI6XHJcbiAgICAgICAgICAgIHRleHRmb3JvcGl0b249XCJUYXNsYWtsYXJkYW4ga2FsZMSxclwiICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuXHJcblxyXG4gICAgICAgY29uc3QgY3VycmVudGVsZW1lbnRzPXsuLi5lbGVtZW50c307XHJcblxyXG4gICAgICAgIGlmKCFmb3J1c2VyKXtcclxuXHJcbiAgICAgICAgICAgIGxpa2UuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wiTGlrZVwiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PSB1c2VyZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXkuc3BsaWNlKEluZGV4b2ZjdXJyZW50dXNlciwxKTtcclxuICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJMaWtlXCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHdlZXQuZm9yRWFjaCgodXNlcik9PntcclxuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLlVzZXJJZCA9PSB1c2VyLmlkKXsvL2XEn2VyIGJ1cmFkYSBoZXJoYW5naSBiaXIgZcWfaXRsaWsgYnVsdW51cnNhIGt1bGxhbsSxY8SxIHBvc3R1IGJlxJ9lbmRpIGRlbWVrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEluZGV4b2ZjdXJyZW50dXNlciA9IGN1cnJlbnRlbGVtZW50c1tcInJlc2hvd1wiXS5hcnJheS5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09IHVzZXJkYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnNwbGljZShJbmRleG9mY3VycmVudHVzZXIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW1wicmVzaG93XCJdLmFycmF5LnVuc2hpZnQodXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlYWRsYXRlci5mb3JFYWNoKCh1c2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuVXNlcklkID09IHVzZXIuaWQpey8vZcSfZXIgYnVyYWRhIGhlcmhhbmdpIGJpciBlxZ9pdGxpayBidWx1bnVyc2Ega3VsbGFuxLFjxLEgcG9zdHUgYmXEn2VuZGkgZGVtZWtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbXCJSZWFkbGF0ZXJcIl0uaXNtYXJrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgc2V0ZWxlbWVudHMoY3VycmVudGVsZW1lbnRzKTtcclxuXHJcbiAgICB9LFt1c2VyZGF0YV0pXHJcbiAgICBcclxuICAgIGNvbnN0IENvdW50cGx1cz0oZWxlbWVudHR5cGUpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRlbGVtZW50cz17Li4uZWxlbWVudHN9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD09ZmFsc2Upe1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5pc21hcmtlZD10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFuaW1hdGlvbj10cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlcj0gY3VycmVudGVsZW1lbnRzW2VsZW1lbnR0eXBlXS5udW1iZXIrMTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudHR5cGUgPT0gXCJyZXNob3dcIiB8fCBlbGVtZW50dHlwZSA9PSBcIkxpa2VcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTp1c2VyZGF0YS5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTp1c2VyZGF0YS5Vc2Vyc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDp1c2VyZGF0YS5Vc2VySWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZXJlbGF0aW9uZm9yc21oKHBvc3RJZCxlbGVtZW50dHlwZSxcIkNyZWF0ZVwiLHVzZXJpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmlzbWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0uYW5pbWF0aW9uPWZhbHNlO1xyXG4gICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLm51bWJlciA9IGN1cnJlbnRlbGVtZW50c1tlbGVtZW50dHlwZV0ubnVtYmVyLTE7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnR0eXBlID09IFwicmVzaG93XCIgfHwgZWxlbWVudHR5cGUgPT0gXCJMaWtlXCIpe1xyXG4gICAgICAgICAgICAgICBjdXJyZW50ZWxlbWVudHNbZWxlbWVudHR5cGVdLmFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZWxlbWVudHR5cGUsXCJEZXN0cm95XCIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGVsZW1lbnRzKGN1cnJlbnRlbGVtZW50cyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxPdXRzaWRlZGl2ICBkcmFmdD17ZHJhZnR9IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAvL2RyYWZ0IGNvdmVyXHJcbiAgICAgICAgICAgICAgIGRyYWZ0ID9cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvZnRjb3Zlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWZ0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdCBmYS1sZ1wiIEljb25jb25maWc9e3t6aW5kZXg6XCI0MDBcIixob3ZlcmJhY2s6XCJ3aGl0ZVwiLGhvdmVyY29sb3I6XCIjZDkwNDI5XCIsYmFja2NvbG9yOlwiI2Q5MDQyOVwiLGNvbG9yOlwid2hpdGVcIix3aWR0aDpcIjYwcHhcIixoZWlnaHQ6XCI2MHB4XCIsbGluZWhlaWdodDpcIjYwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTBweFwiLGNvbG9yOlwid2hpdGVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkN1bHR1cmUgb2YgdGhlIE90dG9tYW4gRW1waXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZnRob2xkZXI+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XHJcbiAgICAgICAgICAgICAgaXNjb21tZW50ID8gIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1sZWZ0IGZhLWxnXCIgSWNvbmNvbmZpZz17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixsZWZ0OlwiLTZweFwiLHRvcDpcIjhweFwiLGNvbG9yOlwiI2ZhZjlmOVwifX0+PC9JY29uPiA6IG51bGxcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy9vcHRpb24gc2VjdGlvblxyXG4gICAgICAgICAgICAhaXNjb21tZW50ID8gIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PiAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpkcmFmdCA/IFwid2hpdGVcIiA6IFwiIzJBMkEyQVwiLHppbmRleDpcIjUwMFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb253aW5kb3cgYWN0aXZlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1taW51c1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkR1aGFuIMOWenTDvHJrJ8O8IHRha2lwdGVuIMOnxLFrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+QnUga3VsbGFuxLFjxLFkYW4gZ2VsZW4gYmlsZGlyaW1sZXJpIGfDtnJtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiIEljb25jb25maWc9e3t3aWR0aDpcIjM1cHhcIixiYWNrY29sb3I6XCIjREVERURFXCIsaGVpZ2h0OlwiMzVweFwiLGxpbmVoZWlnaHQ6XCIzMnB4XCJ9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCI4cHhcIixjb2xvcjpcIiM3NTc1NzVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PlBheWxhxZ88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5CYcSfbGFudMSxIGFkcmVzaW5pIGtvcHlhbGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J1c2VyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uaG9sZGVyIG9uQ2xpY2s9eygpPT5jcmVhdGVyZWxhdGlvbmZvcnNtaChwb3N0SWQsZm9ydXNlcm9wdGlvbixcIkRlc3Ryb3lcIixpbmRleG51bSxmb3J1c2Vyb3B0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHQgZmEtc21cIiBJY29uY29uZmlnPXt7d2lkdGg6XCIzNXB4XCIsYmFja2NvbG9yOlwiI0RFREVERVwiLGhlaWdodDpcIjM1cHhcIixsaW5laGVpZ2h0OlwiMzJweFwifX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjhweFwiLGNvbG9yOlwiIzc1NzU3NVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkthbGTEsXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+e3RleHRmb3JvcGl0b259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAvL2NvbW1lbnQgcmVwb3J0XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBhY3RpdmVmdW5jPXsoKT0+e3NldHZpc2libGUoIXZpc2libGUpfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLXZcIiBJY29uY29uZmlnPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0OlwiMTBweFwiLHRvcDpcIjEwcHhcIixjb2xvcjpcIiMyQTJBMkFcIn19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICg8T3B0aW9ud2luZG93IGFjdGl2ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2s+PC9GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CaWxkaXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb25ob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICA8L09wdGlvbndpbmRvdz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZHJhZnQgJiZcclxuICAgICAgICAgICAgICAgIDxQcm9maWxlZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGFsaWduSXRlbXM6XCJjZW50ZXJcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luTGVmdDpcIjVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVpbWFnZWhvbGRlciBpc2NvbW1lbnQ9e2lzY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOmAvcHJvZmlsZS8ke3VzZXJpZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e25hbWU6XCJQb3N0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHdpZHRoPXtpc2NvbW1lbnQgPyBcIjQwcHhcIiA6IFwiMzVweFwifSBoZWlnaHQ9e2lzY29tbWVudCA/IFwiNDBweFwiIDogXCIzNXB4XCJ9IHByb2ZpbGU9e3Byb2ZpbGVpbWFnZX0+PC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVpbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjE1cHhcIn19PjxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VzZXJuYW1lK1wiIFwiK3VzZXJzdXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCJhdXRvXCIsZm9udFNpemU6XCIxM3B4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCIsY29sb3I6XCIjN0Q3RDdEXCJ9fT48c3Bhbj57Y2FsY3VsYXRlZGF0ZShkYXRlKS50aW1lICsgXCIgXCIgKyBjYWxjdWxhdGVkYXRlKGRhdGUpLmV4cHJlc3MgKyBcIiDDlm5jZVwifTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2ZpbGVkaXY+XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICA8U2Vjb25kUGFydCBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgaXNjb21tZW50IHx8IGRyYWZ0ID8gbnVsbCA6IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZWRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dGl0bGVpbWFnZX0+PC9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRob2xkZXIgaXNjb21tZW50PXtpc2NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRkaXYgaXNjb21tZW50PXtpc2NvbW1lbnR9PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlXCJ9fT57Y29udGVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZHJhZnQgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50ZGl2IGlzY29tbWVudD17aXNjb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixjb2xvcjpcIiNBNzA5MDlcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGVudC9baWRdXCIgYXM9e2AvY29udGVudC8ke3Bvc3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCIsd29yZEJyZWFrOlwiYnJlXCIsY3Vyc29yOlwicG9pbnRlclwifX0+V2hpbGUgdGhlIENyeXB0byBQcm9mZXNzb3JzIG1heSBzZXQgc3BlY2lmaWMgcmVxdWlyZW1lbnRzIGZvciBzb21lLi4uLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhciBmb3J1c2VyPXtmb3J1c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzY29tbWVudCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8xLBjb25ob2xkZXIgaG93ZXJjb2xvcj1cImdyZWVuXCIgc3R5bGU9e3tmbGV4OjF9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgIGhvd2VyY29sb3I9XCIwLCAyNTUsIDAsIDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5yZXNob3cuaXNtYXJrZWR9IGFuaW1hdGlvbj17ZWxlbWVudHMucmVzaG93LmFuaW1hdGlvbn0gY29sb3I9e1wiZ3JlZW5cIn0gIG9uQ2xpY2s9eygpPT5Db3VudHBsdXMoXCJyZXNob3dcIil9ICBjbGFzc05hbWU9XCJmYXMgZmEtcmV0d2VldCBmYS1zbVwiPjwvSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW5mb3Igb25DbGljaz17KCk9PnNob3d3aW5kb3coZWxlbWVudHNbXCJyZXNob3dcIl0uYXJyYXksXCJSZXNob3dcIil9PntlbGVtZW50cy5yZXNob3cubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIGhvd2VyY29sb3I9XCJyZWRcIiBzdHlsZT17e2ZsZXg6MX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25zICBob3dlcmNvbG9yPVwiMjU1LCAwLCAwLDAuMlwiIGlzbWFya2VkPXtlbGVtZW50cy5MaWtlLmlzbWFya2VkfSBhbmltYXRpb249e2VsZW1lbnRzLkxpa2UuYW5pbWF0aW9ufSBjb2xvcj17XCIjQzcyMTIxXCJ9ICBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiTGlrZVwiKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuZm9yICBvbkNsaWNrPXsoKT0+c2hvd3dpbmRvdyhlbGVtZW50c1tcIkxpa2VcIl0uYXJyYXksXCJMaWtlXCIpfSA+e2VsZW1lbnRzLkxpa2UubnVtYmVyfTwvU3BhbmZvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPMSwY29uaG9sZGVyIHN0eWxlPXt7ZmxleDoxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNjb21tZW50ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENvbW1lbnQgb25DbGljaz17KCk9PnNldGNvbW1lbnRhbnN3ZXIodHJ1ZSl9ICBzdHlsZT17e2NvbG9yOlwiZ3JleVwiLGN1cnNvcjpcInBvaW50ZXJcIn19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbW1lbnQtYWx0IGZhLXNtXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjVweFwiLGNvbG9yOlwiXCJ9fT57Y29tbWVudC5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L8SwY29uaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8xLBjb25ob2xkZXIgc3R5bGU9e3tmbGV4OjQsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsY29sb3I6XCJncmV5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyAgaXNtYXJrZWQ9e2VsZW1lbnRzLlJlYWRsYXRlci5pc21hcmtlZH0gYW5pbWF0aW9uPXtlbGVtZW50cy5SZWFkbGF0ZXIuYW5pbWF0aW9ufSBjb2xvcj17XCJibGFja1wifSBvbkNsaWNrPXsoKT0+Q291bnRwbHVzKFwiUmVhZGxhdGVyXCIpfSAgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2ttYXJrXCI+PC9JY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC/EsGNvbmhvbGRlcj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5zYTwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudGhvbGRlcj5cclxuICAgICAgICAgICA8L1NlY29uZFBhcnQ+XHJcbiAgICAgICA8L091dHNpZGVkaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRlbnRjYXJkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==