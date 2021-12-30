webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./components/pages/Profile/Editwindow.js":
/*!************************************************!*\
  !*** ./components/pages/Profile/Editwindow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editwindow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\Editwindow.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Exterior = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Exterior",
  componentId: "sc-9h7al1-0"
})(["display:", ";position:absolute;transform:translateX(-50%);left:50%;top:", ";;max-width:600px;width:90%;height:", ";background-color:white;border-radius:10px;z-index:1000;overflow:", ";;"], function (_ref) {
  var active = _ref.active;
  return active ? "block" : "none";
}, function (_ref2) {
  var getcropper = _ref2.getcropper;
  return getcropper ? "150px" : "70px";
}, function (_ref3) {
  var getcropper = _ref3.getcropper;
  return getcropper ? "350px" : "580px";
}, function (_ref4) {
  var getcropper = _ref4.getcropper;
  return getcropper ? "visible" : "auto";
});
_c = Exterior;
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Inner",
  componentId: "sc-9h7al1-1"
})(["position:relative;padding:10px;"]);
_c2 = Inner;
var Holderforupicon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Holderforupicon",
  componentId: "sc-9h7al1-2"
})(["position:absolute;transition-duration:0.5s;top:-45px;left:", ";"], function (_ref5) {
  var slipvalue = _ref5.slipvalue;

  if (slipvalue == 1) {
    return "55px";
  } else if (slipvalue == 2) {
    return "250px";
  } else {
    return "440px";
  }
});
_c3 = Holderforupicon;
var Background = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-3"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], function (_ref6) {
  var ImageforBack = _ref6.ImageforBack;
  return ImageforBack;
});
_c4 = Background;
var ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__ProfileImageholder",
  componentId: "sc-9h7al1-4"
})(["position:absolute;top:160px;opacity:0.8;left:30px;transition:0.4s;&:hover{opacity:1;}"]);
_c5 = ProfileImageholder;
var Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Inputholder",
  componentId: "sc-9h7al1-5"
})(["display:", ";margin-top:20px;"], function (_ref7) {
  var displayed = _ref7.displayed;
  return displayed ? "block" : "none";
});
_c6 = Inputholder;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-6"
})(["position:relative;padding-top:", ";background-color:", ";padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], function (_ref8) {
  var isforedit = _ref8.isforedit;
  return isforedit ? "10px" : "80px";
}, function (_ref9) {
  var isforedit = _ref9.isforedit;
  return isforedit ? "#e9ecef" : "white";
});
_c7 = Information;
var Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].label.withConfig({
  displayName: "Editwindow__Labelimage",
  componentId: "sc-9h7al1-7"
})(["position:absolute;width:100%;height:200px;display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;opacity:0;"]); //selection bar for editing

_c8 = Labelimage;
var Selectionbar = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Selectionbar",
  componentId: "sc-9h7al1-8"
})(["display:flex;justify-content:space-around;height:30px;margin-bottom:40px;"]);
_c9 = Selectionbar;
var Childsofselection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Childsofselection",
  componentId: "sc-9h7al1-9"
})(["background-color:", ";display:flex;align-items:center;justify-content:center;border-radius:50%;width:38px;height:38px;cursor:pointer;transition-duration:0.18s;padding:5px;&:hover{background-color:}"], function (_ref10) {
  var innercolor = _ref10.innercolor;
  return innercolor ? "#7de2d1" : "#ff0a54";
}); //email,password,notification

_c10 = Childsofselection;
function Editwindow(_ref11) {
  _s();

  var _this = this;

  var isWindowforsettings = _ref11.isWindowforsettings,
      updatefunc = _ref11.updatefunc,
      active = _ref11.active,
      editdata = _ref11.editdata,
      closefunc = _ref11.closefunc;
  console.log(editdata);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Backimage: "",
    Profileimage: ""
  }),
      file = _useState[0],
      setfile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    aspect: 16 / 16,
    height: 200,
    width: 100,
    x: 50,
    y: 50
  }),
      crop = _useState2[0],
      setcrop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Backimage: "",
    Profileimage: ""
  }),
      src = _useState3[0],
      setsrc = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      imagetype = _useState4[0],
      setimagetype = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      image = _useState5[0],
      setimage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Backimage: {
      src: "",
      cropvalues: {
        width: "",
        height: "",
        x: "",
        y: ""
      }
    },
    Profileimage: {
      src: "",
      cropvalues: {
        width: "",
        height: "",
        x: "",
        y: ""
      }
    }
  }),
      result = _useState6[0],
      setresult = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      iscropperactive = _useState7[0],
      setcropperactive = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    musername: {
      activate: false,
      value: editdata.username,
      label: "Kullanici Adi",
      warning: false,
      multiline: false,
      msg: ""
    },
    firstname: {
      activate: false,
      value: editdata.firstname,
      label: "Ad",
      warning: false,
      multiline: false,
      msg: ""
    },
    surname: {
      activate: false,
      value: editdata.lastname,
      label: "Soyad",
      warning: false,
      multiline: false,
      msg: ""
    },
    personaltext: {
      activate: false,
      value: editdata.Personaltext,
      label: "Kisisel Bilgiler",
      warning: false,
      multiline: true,
      msg: ""
    },
    email: {
      activate: false,
      value: editdata.email,
      label: "E-Posta",
      warning: false,
      multiline: false,
      msg: "E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir."
    },
    Currentpassword: {
      activate: false,
      value: "",
      label: "Eski Sifreniz",
      warning: false,
      multiline: false,
      msg: ""
    },
    Validationpassword: {
      activate: false,
      value: "",
      label: "Eski sifrenizi tekrar girin",
      warning: false,
      multiline: false,
      msg: ""
    },
    Newpassword: {
      activate: false,
      value: "",
      label: "Yeni sifre",
      warning: false,
      multiline: false,
      msg: ""
    },
    Notifications: {
      activate: false,
      value: {
        Whenfollow: {
          value: false,
          msg: "Biri seni takip ettiginde bildirim al"
        },
        Whenlike: {
          value: false,
          msg: "Biri senin icerigini begendiginde bildirim al"
        },
        Whencomment: {
          value: false,
          msg: "Biri icerigine yorum yaptiginda bildirim al"
        }
      },
      label: "",
      warning: false,
      multiline: false,
      msg: ""
    }
  }),
      userinfo = _useState8[0],
      setuserinfo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Email: true,
    Password: false,
    Notification: false
  }),
      selectionchilds = _useState9[0],
      setselectionchilds = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      selected = _useState10[0],
      setselected = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var copy = _objectSpread({}, userinfo);

    for (var key in copy) {
      copy[key].activate = false;
      console.log(copy[key].activate);
    }

    if (isWindowforsettings) {
      if (selected == 1) {
        copy["email"].activate = true;
      } else if (selected == 2) {
        copy["Currentpassword"].activate = true;
        copy["Validationpassword"].activate = true;
        copy["Newpassword"].activate = true;
      } else {
        //selected 3
        copy["Notifications"].activate = true;
      }
    } else {
      if (active) {
        for (var _key in copy) {
          if (_key == "musername" || _key == "personaltext" || _key == "firstname" || _key == "surname") {
            copy[_key].activate = true;
          }
        }
      }
    }

    setuserinfo(copy);
  }, [active, selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setcropperactive(false);
  }, [active]);
  /*
  useEffect(()=>{
       if(src.Backimage !== ""){
         console.log("heyyo")
          const backimg = document.querySelector("#Backimg")
          backimg.addEventListener("load",()=>{
              setimage(backimg)
              console.log(backimg)
          })
     }    
    },[src])
  */

  var ToCanvas = /*#__PURE__*/function () {
    var _ref12 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var canvas, scaleX, scaleY, ctx, base64Image;
      return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              canvas = document.createElement("canvas");
              scaleX = image.naturalWidth / image.width;
              scaleY = image.naturalHeight / image.height;
              canvas.width = crop.width;
              canvas.height = crop.height;
              ctx = canvas.getContext("2d");
              ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
              base64Image = canvas.toDataURL("imge/png");
              setresult(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, imagetype, {
                  src: base64Image,
                  cropvalues: {
                    x: crop.x,
                    y: crop.y,
                    width: crop.width,
                    height: crop.height
                  }
                }));
              });
              setcropperactive(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function ToCanvas() {
      return _ref12.apply(this, arguments);
    };
  }();

  var Inputhandler = function Inputhandler(key, event) {
    var mutated = _objectSpread({}, userinfo);

    mutated[key].value = event.target.value;
    setuserinfo(mutated);
  };

  var Updatefile = function Updatefile(event, type) {
    if (type == "Backimage") {
      setcrop({
        aspect: 16 / 9,
        height: 200,
        width: 300,
        unit: "px",
        x: 0,
        y: 50
      });
    } else {
      setcrop({
        aspect: 16 / 16,
        height: 200,
        width: 200,
        unit: "px",
        x: 50,
        y: 50
      });
    }

    setimagetype(type);
    setcropperactive(true);
    setsrc(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, type, URL.createObjectURL(event.target.files[0])));
    });
    setfile(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, type, event.target.files[0]));
    });
  };

  var updatecrop = function updatecrop(newcrop) {
    //buraya bak
    if (crop.aspect > 1) {
      setcrop(function (res) {
        return _objectSpread(_objectSpread({}, res), {}, {
          y: newcrop.y
        });
      });
    } else {
      setcrop(function (res) {
        return _objectSpread(_objectSpread({}, res), {}, {
          y: newcrop.y,
          x: newcrop.x
        });
      });
    }

    console.log(crop); //value of cropper width height x and y
  };

  var Sendupdates = /*#__PURE__*/function () {
    var _ref13 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var values, key, formData;
      return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = {};

              for (key in userinfo) {
                values[key] = userinfo[key].value;
              }

              values.backcrop = result.Backimage.cropvalues;
              values.profile = result.Profileimage.cropvalues;
              formData = new FormData();

              if (file.Backimage !== "" && file.Profileimage !== "") {
                formData.append("upload", file.Backimage);
                formData.append("upload2", file.Profileimage);
              } else {
                formData.append("upload", file[imagetype]);
              }

              formData.append("Profilevalues", JSON.stringify(values));
              _context2.prev = 7;
              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("user/updateprofile", formData, {
                withCredentials: true
              });

            case 10:
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](7);
              return _context2.abrupt("return", console.log("UPLOAD ERRORRRRRRR"));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 12]]);
    }));

    return function Sendupdates() {
      return _ref13.apply(this, arguments);
    };
  }();

  var Selectionhandler = function Selectionhandler(keyname, index) {
    var copy = _objectSpread({}, selectionchilds);

    for (var key in copy) {
      copy[key] = false;
    }

    copy[keyname] = true;
    setselected(index + 1);
    setselectionchilds(copy);
  };

  var Iconcreater = function Iconcreater(keyname) {
    if (keyname == "Email") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Email"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        visibility: "hidden",
        position: "absolute"
      },
      id: "Backimg",
      src: src["Backimage"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        visibility: "hidden",
        position: "absolute"
      },
      id: "Profileimg",
      src: src["Profileimage"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
          children: Object.keys(selectionchilds).map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Childsofselection, {
              innercolor: selectionchilds[item],
              style: {
                color: selectionchilds[item] ? "white" : "white"
              },
              onClick: function onClick() {
                return Selectionhandler(item, index);
              },
              children: Iconcreater(item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 26
        }, this), iscropperactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_image_crop__WEBPACK_IMPORTED_MODULE_9___default.a, {
            onImageLoaded: function onImageLoaded(img) {
              return setimage(img);
            },
            style: {
              backgroundColor: "red",
              height: "350px",
              width: "300px"
            },
            imageStyle: {
              height: "350px",
              width: "300px",
              objectFit: "cover"
            },
            src: src[imagetype],
            crop: crop,
            onChange: function onChange(newcrop) {
              return updatecrop(newcrop);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              onClick: function onClick() {
                return ToCanvas();
              },
              color: "secondary",
              variant: "contained",
              children: "Upload the file to server"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 504,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 505,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return Updatefile(e, "Backimage");
                },
                name: "upload",
                accept: "image/png, image/gif, image/jpeg",
                id: "file",
                type: "file",
                style: {
                  display: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 503,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Porfileimage"], {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                width: "80px",
                height: "80px",
                profile: src.Profileimage,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                  htmlFor: "file2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return Updatefile(e, "Profileimage");
                  },
                  accept: "image/png, image/gif, image/jpeg",
                  id: "file2",
                  type: "file",
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 512,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 508,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                top: "225px",
                right: "10px",
                zIndex: "300"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                onClick: function onClick() {
                  return Sendupdates();
                },
                style: {
                  textTransform: "capitalize",
                  borderRadius: "25px"
                },
                color: "secondary",
                variant: "contained",
                children: "Kaydet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 53
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 45
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            isforedit: isWindowforsettings,
            children: [isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Holderforupicon, {
              slipvalue: selected,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDropUp"], {
                style: {
                  fontSize: "80px",
                  color: "#e9ecef"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 527,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 41
            }, this), Object.keys(userinfo).map(function (item, index) {
              var subelements = null;

              if (typeof userinfo[item].value !== "string") {
                var subelements = Object.keys(userinfo[item].value).map(function (subitem, subindex) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                    displayed: userinfo[item].activate,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: userinfo[item]["value"][subitem]["msg"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 537,
                      columnNumber: 52
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
                      checkedIcon: false,
                      uncheckedIcon: false
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 538,
                      columnNumber: 52
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 536,
                    columnNumber: 49
                  }, _this);
                });
              } else {
                subelements = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                  displayed: userinfo[item].activate,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                    multiline: userinfo[item].multiline,
                    rows: 4,
                    onChange: function onChange(e) {
                      return Inputhandler(item, e);
                    },
                    style: {
                      width: "100%"
                    },
                    label: userinfo[item].label,
                    variant: "outlined",
                    value: userinfo[item].value,
                    helperText: userinfo[item].msg
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 65
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 64
                }, _this);
              }

              return subelements;
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 470,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "cAGQ9uurGT+GcrlbRMcRD0yTPCo=");

_c11 = Editwindow;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Inner");
$RefreshReg$(_c3, "Holderforupicon");
$RefreshReg$(_c4, "Background");
$RefreshReg$(_c5, "ProfileImageholder");
$RefreshReg$(_c6, "Inputholder");
$RefreshReg$(_c7, "Information");
$RefreshReg$(_c8, "Labelimage");
$RefreshReg$(_c9, "Selectionbar");
$RefreshReg$(_c10, "Childsofselection");
$RefreshReg$(_c11, "Editwindow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJzbGlwdmFsdWUiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcnNldHRpbmdzIiwidXBkYXRlZnVuYyIsImVkaXRkYXRhIiwiY2xvc2VmdW5jIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiQmFja2ltYWdlIiwiUHJvZmlsZWltYWdlIiwiZmlsZSIsInNldGZpbGUiLCJhc3BlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiY3JvcCIsInNldGNyb3AiLCJzcmMiLCJzZXRzcmMiLCJpbWFnZXR5cGUiLCJzZXRpbWFnZXR5cGUiLCJpbWFnZSIsInNldGltYWdlIiwiY3JvcHZhbHVlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsImlzY3JvcHBlcmFjdGl2ZSIsInNldGNyb3BwZXJhY3RpdmUiLCJtdXNlcm5hbWUiLCJhY3RpdmF0ZSIsInZhbHVlIiwidXNlcm5hbWUiLCJ3YXJuaW5nIiwibXVsdGlsaW5lIiwibXNnIiwiZmlyc3RuYW1lIiwic3VybmFtZSIsImxhc3RuYW1lIiwicGVyc29uYWx0ZXh0IiwiUGVyc29uYWx0ZXh0IiwiZW1haWwiLCJDdXJyZW50cGFzc3dvcmQiLCJWYWxpZGF0aW9ucGFzc3dvcmQiLCJOZXdwYXNzd29yZCIsIk5vdGlmaWNhdGlvbnMiLCJXaGVuZm9sbG93IiwiV2hlbmxpa2UiLCJXaGVuY29tbWVudCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJFbWFpbCIsIlBhc3N3b3JkIiwiTm90aWZpY2F0aW9uIiwic2VsZWN0aW9uY2hpbGRzIiwic2V0c2VsZWN0aW9uY2hpbGRzIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInN1YmVsZW1lbnRzIiwic3ViaXRlbSIsInN1YmluZGV4Il0sIm1hcHBpbmdz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O0FBQ0ksNkJBQVMsRUFBRW1CLFFBQVEsQ0FBQzRELElBQUQsQ0FBUixDQUFlM0UsU0FEOUI7QUFFSSx3QkFBSSxFQUFFLENBRlY7QUFHSSw0QkFBUSxFQUFFLGtCQUFDaUYsQ0FBRDtBQUFBLDZCQUFLeEMsWUFBWSxDQUFDa0MsSUFBRCxFQUFNTSxDQUFOLENBQWpCO0FBQUEscUJBSGQ7QUFJSSx5QkFBSyxFQUFFO0FBQUN0RywyQkFBSyxFQUFDO0FBQVAscUJBSlg7QUFLSSx5QkFBSyxFQUFFb0MsUUFBUSxDQUFDNEQsSUFBRCxDQUFSLENBQWVsSCxLQUwxQjtBQU1JLDJCQUFPLEVBQUMsVUFOWjtBQU9JLHlCQUFLLEVBQUVzRCxRQUFRLENBQUM0RCxJQUFELENBQVIsQ0FBZTlFLEtBUDFCO0FBUUksOEJBQVUsRUFBRWtCLFFBQVEsQ0FBQzRELElBQUQsQ0FBUixDQUFlMUU7QUFSL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWY7QUFhSDs7QUFFRCxxQkFBTzBGLFdBQVA7QUFDSCxhQTNCRCxDQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkY7QUFBQSx3QkF4QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUdIOztHQXpidUI5SCxVOztPQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5jMTJlMjZhNzYwOGVhZTk5OGEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQge0Fycm93RHJvcFVwLEVtYWlsLExvY2ssTm90aWZpY2F0aW9uc30gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCJcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5vdmVyZmxvdzokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCJ2aXNpYmxlXCIgOiBcImF1dG9cIn07O1xyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSG9sZGVyZm9ydXBpY29uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxudG9wOi00NXB4O1xyXG5sZWZ0OiR7KHtzbGlwdmFsdWV9KT0+e1xyXG4gICAgaWYoc2xpcHZhbHVlID09IDEpe1xyXG4gICAgICAgIHJldHVybiBcIjU1cHhcIlxyXG4gICAgfWVsc2UgaWYoc2xpcHZhbHVlID09IDIpe1xyXG4gICAgICAgIHJldHVybiBcIjI1MHB4XCJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcIjQ0MHB4XCJcclxuICAgIH1cclxufX07XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtkaXNwbGF5ZWR9KT0+IGRpc3BsYXllZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmctdG9wOiR7KHtpc2ZvcmVkaXR9KT0+aXNmb3JlZGl0ID8gXCIxMHB4XCIgOiBcIjgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIiNlOWVjZWZcIiA6IFwid2hpdGVcIn07XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjIwcHg7IFxyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5ib3JkZXItcmFkaXVzOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsaW1hZ2U9c3R5bGVkLmxhYmVsYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjIwMHB4O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjQ1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5jb2xvcjpibGFjaztcclxub3BhY2l0eTowO1xyXG5gXHJcbi8vc2VsZWN0aW9uIGJhciBmb3IgZWRpdGluZ1xyXG5jb25zdCBTZWxlY3Rpb25iYXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmhlaWdodDozMHB4O1xyXG5tYXJnaW4tYm90dG9tOjQwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENoaWxkc29mc2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aW5uZXJjb2xvcn0pPT5pbm5lcmNvbG9yID8gXCIjN2RlMmQxXCIgOiBcIiNmZjBhNTRcIn07XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxud2lkdGg6MzhweDtcclxuaGVpZ2h0OjM4cHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMThzO1xyXG5wYWRkaW5nOjVweDtcclxuJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6XHJcbn1cclxuYFxyXG5cclxuLy9lbWFpbCxwYXNzd29yZCxub3RpZmljYXRpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7aXNXaW5kb3dmb3JzZXR0aW5ncyx1cGRhdGVmdW5jLGFjdGl2ZSxlZGl0ZGF0YSxjbG9zZWZ1bmN9KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhlZGl0ZGF0YSlcclxuICAgIGNvbnN0IFtmaWxlLHNldGZpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Nyb3Asc2V0Y3JvcF0gPSB1c2VTdGF0ZSh7YXNwZWN0OjE2LzE2LGhlaWdodDoyMDAsd2lkdGg6MTAwLHg6NTAseTo1MH0pXHJcbiAgICBjb25zdCBbc3JjLHNldHNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbXVzZXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkt1bGxhbmljaSBBZGlcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5QZXJzb25hbHRleHQsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS2lzaXNlbCBCaWxnaWxlclwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6dHJ1ZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDdXJyZW50cGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJFc2tpIFNpZnJlbml6XCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LCBcclxuICAgICAgICBWYWxpZGF0aW9ucGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJFc2tpIHNpZnJlbml6aSB0ZWtyYXIgZ2lyaW5cIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIE5ld3Bhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiWWVuaSBzaWZyZVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBOb3RpZmljYXRpb25zOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOntcclxuICAgICAgICAgICAgICAgIFdoZW5mb2xsb3c6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZzpcIkJpcmkgc2VuaSB0YWtpcCBldHRpZ2luZGUgYmlsZGlyaW0gYWxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFdoZW5saWtlOntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIHNlbmluIGljZXJpZ2luaSBiZWdlbmRpZ2luZGUgYmlsZGlyaW0gYWxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFdoZW5jb21tZW50OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIGljZXJpZ2luZSB5b3J1bSB5YXB0aWdpbmRhIGJpbGRpcmltIGFsXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbmNoaWxkcyxzZXRzZWxlY3Rpb25jaGlsZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEVtYWlsOnRydWUsXHJcbiAgICAgICAgUGFzc3dvcmQ6ZmFsc2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uOmZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGVkLHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3B5W2tleV0uYWN0aXZhdGUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICAgICAgaWYoaXNXaW5kb3dmb3JzZXR0aW5ncyl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWQgPT0gMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJlbWFpbFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VsZWN0ZWQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIkN1cnJlbnRwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIlZhbGlkYXRpb25wYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIk5ld3Bhc3N3b3JkXCJdLmFjdGl2YXRlID0gdHJ1ZSBcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXsvL3NlbGVjdGVkIDNcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiTm90aWZpY2F0aW9uc1wiXS5hY3RpdmF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PSBcIm11c2VybmFtZVwiIHx8IGtleSA9PSBcInBlcnNvbmFsdGV4dFwiIHx8IGtleSA9PSBcImZpcnN0bmFtZVwiIHx8IGtleSA9PSBcInN1cm5hbWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcblxyXG4gICAgfSxbYWN0aXZlLHNlbGVjdGVkXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihzcmMuQmFja2ltYWdlICE9PSBcIlwiKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleXlvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JhY2tpbWdcIilcclxuICAgICAgICAgICAgYmFja2ltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZShiYWNraW1nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFja2ltZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH0gICAgXHJcblxyXG4gICAgfSxbc3JjXSlcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgVG9DYW52YXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGhcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHRcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wLndpZHRoLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWdlL3BuZ1wiKVxyXG5cclxuICAgICAgICBzZXRyZXN1bHQoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbaW1hZ2V0eXBlXTp7c3JjOmJhc2U2NEltYWdlLGNyb3B2YWx1ZXM6e3g6Y3JvcC54LHk6Y3JvcC55LHdpZHRoOmNyb3Aud2lkdGgsaGVpZ2h0OmNyb3AuaGVpZ2h0fX19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJbnB1dGhhbmRsZXIgPSAoa2V5LGV2ZW50KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjcm9wKVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5iYWNrY3JvcCA9IHJlc3VsdC5CYWNraW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy9tb3ZlIHRoaXMgdG8gYXBpIGZpbGVcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgdXNlci91cGRhdGVwcm9maWxlYCxmb3JtRGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgXHJcbiAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVBMT0FEIEVSUk9SUlJSUlJSXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kbGVyPShrZXluYW1lLGluZGV4KT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4uc2VsZWN0aW9uY2hpbGRzfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICBjb3B5W2tleV0gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb3B5W2tleW5hbWVdID0gdHJ1ZVxyXG4gICAgICAgIHNldHNlbGVjdGVkKGluZGV4KzEpXHJcbiAgICAgICAgc2V0c2VsZWN0aW9uY2hpbGRzKGNvcHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNyZWF0ZXIgPShrZXluYW1lKT0+e1xyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJFbWFpbFwiKVxyXG4gICAgICAgIHJldHVybiA8RW1haWw+PC9FbWFpbD5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiUGFzc3dvcmRcIilcclxuICAgICAgICByZXR1cm4gPExvY2s+PC9Mb2NrPlxyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJOb3RpZmljYXRpb25cIilcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbnM+PC9Ob3RpZmljYXRpb25zPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiQmFja2ltZ1wiIHNyYz17c3JjW1wiQmFja2ltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIlByb2ZpbGVpbWdcIiBzcmM9e3NyY1tcIlByb2ZpbGVpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxTZWxlY3Rpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9uY2hpbGRzKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENoaWxkc29mc2VsZWN0aW9uIGlubmVyY29sb3I9e3NlbGVjdGlvbmNoaWxkc1tpdGVtXX0gc3R5bGU9e3tjb2xvcjpzZWxlY3Rpb25jaGlsZHNbaXRlbV0gPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9fSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGxlcihpdGVtLGluZGV4KX0+e0ljb25jcmVhdGVyKGl0ZW0pfTwvQ2hpbGRzb2ZzZWxlY3Rpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYmFyPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2Nyb3BwZXJhY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXIgIG9uSW1hZ2VMb2FkZWQ9eyhpbWcpPT5zZXRpbWFnZShpbWcpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLGhlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwifX0gIGltYWdlU3R5bGU9e3toZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIixvYmplY3RGaXQ6XCJjb3ZlclwifX0gIHNyYz17c3JjW2ltYWdldHlwZV19IGNyb3A9e2Nyb3B9IG9uQ2hhbmdlPXsobmV3Y3JvcCk9PnVwZGF0ZWNyb3AobmV3Y3JvcCl9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlRvQ2FudmFzKCl9IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiID5VcGxvYWQgdGhlIGZpbGUgdG8gc2VydmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICFpc1dpbmRvd2ZvcnNldHRpbmdzICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIyMjVweFwiLHJpZ2h0OlwiMTBweFwiLHpJbmRleDpcIjMwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcygpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcnNldHRpbmdzfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb2xkZXJmb3J1cGljb24gc2xpcHZhbHVlPXtzZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEcm9wVXAgc3R5bGU9e3tmb250U2l6ZTpcIjgwcHhcIixjb2xvcjpcIiNlOWVjZWZcIn19PjwvQXJyb3dEcm9wVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+eyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJlbGVtZW50cyA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdXNlcmluZm9baXRlbV0udmFsdWUgIT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZWxlbWVudHMgPSBPYmplY3Qua2V5cyh1c2VyaW5mb1tpdGVtXS52YWx1ZSkubWFwKChzdWJpdGVtLHN1YmluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXJpbmZvW2l0ZW1dW1widmFsdWVcIl1bc3ViaXRlbV1bXCJtc2dcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoICBjaGVja2VkSWNvbj17ZmFsc2V9IHVuY2hlY2tlZEljb249e2ZhbHNlfT48L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmVsZW1lbnRzID0gKDxJbnB1dGhvbGRlciBkaXNwbGF5ZWQ9e3VzZXJpbmZvW2l0ZW1dLmFjdGl2YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PklucHV0aGFuZGxlcihpdGVtLGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyaW5mb1tpdGVtXS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt1c2VyaW5mb1tpdGVtXS5tc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9