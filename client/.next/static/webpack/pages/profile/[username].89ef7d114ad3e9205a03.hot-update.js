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
var Background = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-2"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], function (_ref5) {
  var ImageforBack = _ref5.ImageforBack;
  return ImageforBack;
});
_c3 = Background;
var ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__ProfileImageholder",
  componentId: "sc-9h7al1-3"
})(["position:absolute;top:160px;opacity:0.8;left:30px;transition:0.4s;&:hover{opacity:1;}"]);
_c4 = ProfileImageholder;
var Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Inputholder",
  componentId: "sc-9h7al1-4"
})(["display:", ";margin-top:20px;"], function (_ref6) {
  var displayed = _ref6.displayed;
  return displayed ? "block" : "none";
});
_c5 = Inputholder;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-5"
})(["position:relative;padding-top:", ";background-color:", ";padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], function (_ref7) {
  var isforedit = _ref7.isforedit;
  return isforedit ? "10px" : "80px";
}, function (_ref8) {
  var isforedit = _ref8.isforedit;
  return isforedit ? "#e9ecef" : "white";
});
_c6 = Information;
var Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].label.withConfig({
  displayName: "Editwindow__Labelimage",
  componentId: "sc-9h7al1-6"
})(["position:absolute;width:100%;height:200px;display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;opacity:0;"]); //selection bar for editing

_c7 = Labelimage;
var Selectionbar = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Selectionbar",
  componentId: "sc-9h7al1-7"
})(["display:flex;justify-content:space-around;height:30px;margin-bottom:40px;"]);
_c8 = Selectionbar;
var Childsofselection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Childsofselection",
  componentId: "sc-9h7al1-8"
})(["position:relative;top:", ";background-color:", ";display:flex;align-items:center;justify-content:center;border-radius:50%;width:38px;height:38px;cursor:pointer;transition-duration:0.18s;padding:5px;"], function (_ref9) {
  var innercolor = _ref9.innercolor;
  return innercolor ? "10px" : "0";
}, function (_ref10) {
  var innercolor = _ref10.innercolor;
  return innercolor ? "#7de2d1" : "#ff0a54";
});
_c9 = Childsofselection;
var Holderforupicon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Holderforupicon",
  componentId: "sc-9h7al1-9"
})(["position:absolute;transition-duration:0.3s;top:-45px;left:", ";"], function (_ref11) {
  var slipvalue = _ref11.slipvalue;

  if (slipvalue == 1) {
    return "55px";
  } else if (slipvalue == 2) {
    return "250px";
  } else {
    return "440px";
  }
}); //email,password,notification

_c10 = Holderforupicon;
function Editwindow(_ref12) {
  _s();

  var _this = this;

  var isWindowforsettings = _ref12.isWindowforsettings,
      updatefunc = _ref12.updatefunc,
      active = _ref12.active,
      editdata = _ref12.editdata,
      closefunc = _ref12.closefunc;
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
    var _ref13 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      return _ref13.apply(this, arguments);
    };
  }();

  var Inputhandler = function Inputhandler(key, event, subkey) {
    var mutated = _objectSpread({}, userinfo);

    if (key == "Notifications") {
      mutated[key]["value"][subkey]["value"] = !mutated[key]["value"][subkey]["value"];
    } else {
      mutated[key].value = event.target.value;
    }

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
    var _ref14 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
      return _ref14.apply(this, arguments);
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
      lineNumber: 468,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 477,
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
      lineNumber: 478,
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
      lineNumber: 479,
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
              lineNumber: 487,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 484,
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
            lineNumber: 497,
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
              lineNumber: 499,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 511,
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
                lineNumber: 512,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 509,
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
                  lineNumber: 516,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 517,
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
                  lineNumber: 518,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 515,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 514,
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
                lineNumber: 522,
                columnNumber: 53
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 521,
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
                lineNumber: 533,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 532,
              columnNumber: 41
            }, this), Object.keys(userinfo).map(function (item, index) {
              var subelements = null;

              if (typeof userinfo[item].value !== "string") {
                var subelements = Object.keys(userinfo[item].value).map(function (subitem, subindex) {
                  return (
                    /*#__PURE__*/
                    //sub values of noitification phase
                    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                      displayed: userinfo[item].activate,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between"
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          style: {
                            textTransform: "capitalize"
                          },
                          children: userinfo[item]["value"][subitem]["msg"]
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 545,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
                          onColor: "#ff002b",
                          andleDiameter: 20,
                          onChange: function onChange() {
                            return Inputhandler(item, "", subitem);
                          },
                          checkedIcon: true,
                          uncheckedIcon: true,
                          checked: userinfo[item]["value"][subitem]["value"]
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 546,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 544,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 49
                    }, _this)
                  );
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
                    lineNumber: 553,
                    columnNumber: 65
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 552,
                  columnNumber: 64
                }, _this);
              }

              return subelements;
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 528,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 476,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "cAGQ9uurGT+GcrlbRMcRD0yTPCo=");

_c11 = Editwindow;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Inner");
$RefreshReg$(_c3, "Background");
$RefreshReg$(_c4, "ProfileImageholder");
$RefreshReg$(_c5, "Inputholder");
$RefreshReg$(_c6, "Information");
$RefreshReg$(_c7, "Labelimage");
$RefreshReg$(_c8, "Selectionbar");
$RefreshReg$(_c9, "Childsofselection");
$RefreshReg$(_c10, "Holderforupicon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkhvbGRlcmZvcnVwaWNvbiIsInNsaXB2YWx1ZSIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcnNldHRpbmdzIiwidXBkYXRlZnVuYyIsImVkaXRkYXRhIiwiY2xvc2VmdW5jIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiQmFja2ltYWdlIiwiUHJvZmlsZWltYWdlIiwiZmlsZSIsInNldGZpbGUiLCJhc3BlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiY3JvcCIsInNldGNyb3AiLCJzcmMiLCJzZXRzcmMiLCJpbWFnZXR5cGUiLCJzZXRpbWFnZXR5cGUiLCJpbWFnZSIsInNldGltYWdlIiwiY3JvcHZhbHVlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsImlzY3JvcHBlcmFjdGl2ZSIsInNldGNyb3BwZXJhY3RpdmUiLCJtdXNlcm5hbWUiLCJhY3RpdmF0ZSIsInZhbHVlIiwidXNlcm5hbWUiLCJ3YXJuaW5nIiwibXVsdGlsaW5lIiwibXNnIiwiZmlyc3RuYW1lIiwic3VybmFtZSIsImxhc3RuYW1lIiwicGVyc29uYWx0ZXh0IiwiUGVyc29uYWx0ZXh0IiwiZW1haWwiLCJDdXJyZW50cGFzc3dvcmQiLCJWYWxpZGF0aW9ucGFzc3dvcmQiLCJOZXdwYXNzd29yZCIsIk5vdGlmaWNhdGlvbnMiLCJXaGVuZm9sbG93IiwiV2hlbmxpa2UiLCJXaGVuY29tbWVudCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJFbWFpbCIsIlBhc3N3b3JkIiwiTm90aWZpY2F0aW9uIiwic2VsZWN0aW9uY2hpbGRzIiwic2V0c2VsZWN0aW9uY2hpbGRzIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJzdWJrZXkiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInN1YmVsZW1lbnRzIiwic3ViaXRlbSIsInN1YmluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTUFDSjtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURJLEVBS1I7QUFBQSxNQUFFQyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxNQUF2QztBQUFBLENBTFEsRUFRTDtBQUFBLE1BQUVBLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE9BQXZDO0FBQUEsQ0FSSyxFQVlIO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxTQUFILEdBQWUsTUFBekM7QUFBQSxDQVpHLENBQWQ7S0FBTUosUTtBQWNOLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBWDtNQUFNRyxLO0FBT04sSUFBTUMsVUFBVSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVUQVVPO0FBQUEsTUFBRUssWUFBRixTQUFFQSxZQUFGO0FBQUEsU0FBa0JBLFlBQWxCO0FBQUEsQ0FWUCxDQUFoQjtNQUFNRCxVO0FBb0JOLElBQU1FLGtCQUFrQixHQUFDUCx5REFBTSxDQUFDQyxHQUFSO0FBQUE7QUFBQTtBQUFBLDZGQUF4QjtNQUFNTSxrQjtBQVVOLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzQ0FDUDtBQUFBLE1BQUVRLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWdCQSxTQUFTLEdBQUcsT0FBSCxHQUFhLE1BQXRDO0FBQUEsQ0FETyxDQUFqQjtNQUFNRCxXO0FBSU4sSUFBTUUsV0FBVyxHQUFHVix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUVIO0FBQUEsTUFBRVUsU0FBRixTQUFFQSxTQUFGO0FBQUEsU0FBZUEsU0FBUyxHQUFHLE1BQUgsR0FBWSxNQUFwQztBQUFBLENBRkcsRUFHRTtBQUFBLE1BQUVBLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxTQUFILEdBQWUsT0FBdkM7QUFBQSxDQUhGLENBQWpCO01BQU1ELFc7QUFVTixJQUFNRSxVQUFVLEdBQUNaLHlEQUFNLENBQUNhLEtBQVI7QUFBQTtBQUFBO0FBQUEsMEpBQWhCLEMsQ0FZQTs7TUFaTUQsVTtBQWFOLElBQU1FLFlBQVksR0FBR2QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBbEI7TUFBTWEsWTtBQU9OLElBQU1DLGlCQUFpQixHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtNQUVqQjtBQUFBLE1BQUVlLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsTUFBSCxHQUFZLEdBQXRDO0FBQUEsQ0FGaUIsRUFHSjtBQUFBLE1BQUVBLFVBQUYsVUFBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsU0FBSCxHQUFlLFNBQXpDO0FBQUEsQ0FISSxDQUF2QjtNQUFNRCxpQjtBQWVOLElBQU1FLGVBQWUsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBSWQsa0JBQWU7QUFBQSxNQUFiaUIsU0FBYSxVQUFiQSxTQUFhOztBQUNsQixNQUFHQSxTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZCxXQUFPLE1BQVA7QUFDSCxHQUZELE1BRU0sSUFBR0EsU0FBUyxJQUFJLENBQWhCLEVBQWtCO0FBQ3BCLFdBQU8sT0FBUDtBQUNILEdBRkssTUFFRDtBQUNELFdBQU8sT0FBUDtBQUNIO0FBQ0osQ0Fab0IsQ0FBckIsQyxDQWVBOztPQWZNRCxlO0FBZ0JTLFNBQVNFLFVBQVQsU0FBK0U7QUFBQTs7QUFBQTs7QUFBQSxNQUExREMsbUJBQTBELFVBQTFEQSxtQkFBMEQ7QUFBQSxNQUF0Q0MsVUFBc0MsVUFBdENBLFVBQXNDO0FBQUEsTUFBM0JuQixNQUEyQixVQUEzQkEsTUFBMkI7QUFBQSxNQUFwQm9CLFFBQW9CLFVBQXBCQSxRQUFvQjtBQUFBLE1BQVhDLFNBQVcsVUFBWEEsU0FBVztBQUUxRkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7O0FBRjBGLGtCQUduRUksc0RBQVEsQ0FBQztBQUM1QkMsYUFBUyxFQUFDLEVBRGtCO0FBRTVCQyxnQkFBWSxFQUFDO0FBRmUsR0FBRCxDQUgyRDtBQUFBLE1BR25GQyxJQUhtRjtBQUFBLE1BRzlFQyxPQUg4RTs7QUFBQSxtQkFPbkVKLHNEQUFRLENBQUM7QUFBQ0ssVUFBTSxFQUFDLEtBQUcsRUFBWDtBQUFjQyxVQUFNLEVBQUMsR0FBckI7QUFBeUJDLFNBQUssRUFBQyxHQUEvQjtBQUFtQ0MsS0FBQyxFQUFDLEVBQXJDO0FBQXdDQyxLQUFDLEVBQUM7QUFBMUMsR0FBRCxDQVAyRDtBQUFBLE1BT25GQyxJQVBtRjtBQUFBLE1BTzlFQyxPQVA4RTs7QUFBQSxtQkFRckVYLHNEQUFRLENBQUM7QUFDMUJDLGFBQVMsRUFBQyxFQURnQjtBQUUxQkMsZ0JBQVksRUFBQztBQUZhLEdBQUQsQ0FSNkQ7QUFBQSxNQVFuRlUsR0FSbUY7QUFBQSxNQVEvRUMsTUFSK0U7O0FBQUEsbUJBWXpEYixzREFBUSxDQUFDLEVBQUQsQ0FaaUQ7QUFBQSxNQVluRmMsU0FabUY7QUFBQSxNQVl6RUMsWUFaeUU7O0FBQUEsbUJBYWpFZixzREFBUSxDQUFDLElBQUQsQ0FieUQ7QUFBQSxNQWFuRmdCLEtBYm1GO0FBQUEsTUFhN0VDLFFBYjZFOztBQUFBLG1CQWMvRGpCLHNEQUFRLENBQUM7QUFDaENDLGFBQVMsRUFBQztBQUNOVyxTQUFHLEVBQUMsRUFERTtBQUVOTSxnQkFBVSxFQUFDO0FBQ1BYLGFBQUssRUFBQyxFQURDO0FBRVBELGNBQU0sRUFBQyxFQUZBO0FBR1BFLFNBQUMsRUFBQyxFQUhLO0FBSVBDLFNBQUMsRUFBQztBQUpLO0FBRkwsS0FEc0I7QUFVaENQLGdCQUFZLEVBQUM7QUFDVFUsU0FBRyxFQUFDLEVBREs7QUFFVE0sZ0JBQVUsRUFBQztBQUNQWCxhQUFLLEVBQUMsRUFEQztBQUVQRCxjQUFNLEVBQUMsRUFGQTtBQUdQRSxTQUFDLEVBQUMsRUFISztBQUlQQyxTQUFDLEVBQUM7QUFKSztBQUZGO0FBVm1CLEdBQUQsQ0FkdUQ7QUFBQSxNQWNuRlUsTUFkbUY7QUFBQSxNQWM1RUMsU0FkNEU7O0FBQUEsbUJBa0MvQ3BCLHNEQUFRLENBQUMsS0FBRCxDQWxDdUM7QUFBQSxNQWtDbkZxQixlQWxDbUY7QUFBQSxNQWtDbkVDLGdCQWxDbUU7O0FBQUEsbUJBbUMzRHRCLHNEQUFRLENBQUM7QUFDcEN1QixhQUFTLEVBQUM7QUFDTkMsY0FBUSxFQUFDLEtBREg7QUFFTkMsV0FBSyxFQUFDN0IsUUFBUSxDQUFDOEIsUUFGVDtBQUdOdkMsV0FBSyxFQUFDLGVBSEE7QUFJTndDLGFBQU8sRUFBQyxLQUpGO0FBS05DLGVBQVMsRUFBQyxLQUxKO0FBTU5DLFNBQUcsRUFBQztBQU5FLEtBRDBCO0FBU3BDQyxhQUFTLEVBQUM7QUFDTk4sY0FBUSxFQUFDLEtBREg7QUFFTkMsV0FBSyxFQUFDN0IsUUFBUSxDQUFDa0MsU0FGVDtBQUdOM0MsV0FBSyxFQUFDLElBSEE7QUFJTndDLGFBQU8sRUFBQyxLQUpGO0FBS05DLGVBQVMsRUFBQyxLQUxKO0FBTU5DLFNBQUcsRUFBQztBQU5FLEtBVDBCO0FBaUJwQ0UsV0FBTyxFQUFDO0FBQ0pQLGNBQVEsRUFBQyxLQURMO0FBRUpDLFdBQUssRUFBQzdCLFFBQVEsQ0FBQ29DLFFBRlg7QUFHSjdDLFdBQUssRUFBQyxPQUhGO0FBSUp3QyxhQUFPLEVBQUMsS0FKSjtBQUtKQyxlQUFTLEVBQUMsS0FMTjtBQU1KQyxTQUFHLEVBQUM7QUFOQSxLQWpCNEI7QUF5QnBDSSxnQkFBWSxFQUFDO0FBQ1RULGNBQVEsRUFBQyxLQURBO0FBRVRDLFdBQUssRUFBQzdCLFFBQVEsQ0FBQ3NDLFlBRk47QUFHVC9DLFdBQUssRUFBQyxrQkFIRztBQUlUd0MsYUFBTyxFQUFDLEtBSkM7QUFLVEMsZUFBUyxFQUFDLElBTEQ7QUFNVEMsU0FBRyxFQUFDO0FBTkssS0F6QnVCO0FBaUNwQ00sU0FBSyxFQUFDO0FBQ0ZYLGNBQVEsRUFBQyxLQURQO0FBRUZDLFdBQUssRUFBQzdCLFFBQVEsQ0FBQ3VDLEtBRmI7QUFHRmhELFdBQUssRUFBQyxTQUhKO0FBSUZ3QyxhQUFPLEVBQUMsS0FKTjtBQUtGQyxlQUFTLEVBQUMsS0FMUjtBQU1GQyxTQUFHLEVBQUM7QUFORixLQWpDOEI7QUF5Q3BDTyxtQkFBZSxFQUFDO0FBQ1paLGNBQVEsRUFBQyxLQURHO0FBRVpDLFdBQUssRUFBQyxFQUZNO0FBR1p0QyxXQUFLLEVBQUMsZUFITTtBQUlad0MsYUFBTyxFQUFDLEtBSkk7QUFLWkMsZUFBUyxFQUFDLEtBTEU7QUFNWkMsU0FBRyxFQUFDO0FBTlEsS0F6Q29CO0FBaURwQ1Esc0JBQWtCLEVBQUM7QUFDZmIsY0FBUSxFQUFDLEtBRE07QUFFZkMsV0FBSyxFQUFDLEVBRlM7QUFHZnRDLFdBQUssRUFBQyw2QkFIUztBQUlmd0MsYUFBTyxFQUFDLEtBSk87QUFLZkMsZUFBUyxFQUFDLEtBTEs7QUFNZkMsU0FBRyxFQUFDO0FBTlcsS0FqRGlCO0FBeURwQ1MsZUFBVyxFQUFDO0FBQ1JkLGNBQVEsRUFBQyxLQUREO0FBRVJDLFdBQUssRUFBQyxFQUZFO0FBR1J0QyxXQUFLLEVBQUMsWUFIRTtBQUlSd0MsYUFBTyxFQUFDLEtBSkE7QUFLUkMsZUFBUyxFQUFDLEtBTEY7QUFNUkMsU0FBRyxFQUFDO0FBTkksS0F6RHdCO0FBaUVwQ1UsaUJBQWEsRUFBQztBQUNWZixjQUFRLEVBQUMsS0FEQztBQUVWQyxXQUFLLEVBQUM7QUFDRmUsa0JBQVUsRUFBQztBQUNQZixlQUFLLEVBQUMsS0FEQztBQUVQSSxhQUFHLEVBQUM7QUFGRyxTQURUO0FBS0ZZLGdCQUFRLEVBQUM7QUFDTGhCLGVBQUssRUFBQyxLQUREO0FBRUxJLGFBQUcsRUFBQztBQUZDLFNBTFA7QUFTRmEsbUJBQVcsRUFBQztBQUNSakIsZUFBSyxFQUFDLEtBREU7QUFFUkksYUFBRyxFQUFDO0FBRkk7QUFUVixPQUZJO0FBZ0JWMUMsV0FBSyxFQUFDLEVBaEJJO0FBaUJWd0MsYUFBTyxFQUFDLEtBakJFO0FBa0JWQyxlQUFTLEVBQUMsS0FsQkE7QUFtQlZDLFNBQUcsRUFBQztBQW5CTTtBQWpFc0IsR0FBRCxDQW5DbUQ7QUFBQSxNQW1DbkZjLFFBbkNtRjtBQUFBLE1BbUMxRUMsV0FuQzBFOztBQUFBLG1CQTJIN0M1QyxzREFBUSxDQUFDO0FBQ2xENkMsU0FBSyxFQUFDLElBRDRDO0FBRWxEQyxZQUFRLEVBQUMsS0FGeUM7QUFHbERDLGdCQUFZLEVBQUM7QUFIcUMsR0FBRCxDQTNIcUM7QUFBQSxNQTJIbkZDLGVBM0htRjtBQUFBLE1BMkhuRUMsa0JBM0htRTs7QUFBQSxvQkFnSTNEakQsc0RBQVEsQ0FBQyxDQUFELENBaEltRDtBQUFBLE1BZ0luRmtELFFBaEltRjtBQUFBLE1BZ0kxRUMsV0FoSTBFOztBQWtJMUZDLHlEQUFTLENBQUMsWUFBSTtBQUdOLFFBQU1DLElBQUkscUJBQU9WLFFBQVAsQ0FBVjs7QUFDQSxTQUFLLElBQU1XLEdBQVgsSUFBa0JELElBQWxCLEVBQXVCO0FBQ25CQSxVQUFJLENBQUNDLEdBQUQsQ0FBSixDQUFVOUIsUUFBVixHQUFxQixLQUFyQjtBQUNBMUIsYUFBTyxDQUFDQyxHQUFSLENBQVlzRCxJQUFJLENBQUNDLEdBQUQsQ0FBSixDQUFVOUIsUUFBdEI7QUFDSDs7QUFHRCxRQUFHOUIsbUJBQUgsRUFBdUI7QUFFbkIsVUFBR3dELFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBRWJHLFlBQUksQ0FBQyxPQUFELENBQUosQ0FBYzdCLFFBQWQsR0FBeUIsSUFBekI7QUFFSCxPQUpELE1BSU0sSUFBRzBCLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBRW5CRyxZQUFJLENBQUMsaUJBQUQsQ0FBSixDQUF3QjdCLFFBQXhCLEdBQW1DLElBQW5DO0FBQ0E2QixZQUFJLENBQUMsb0JBQUQsQ0FBSixDQUEyQjdCLFFBQTNCLEdBQXNDLElBQXRDO0FBQ0E2QixZQUFJLENBQUMsYUFBRCxDQUFKLENBQW9CN0IsUUFBcEIsR0FBK0IsSUFBL0I7QUFFSCxPQU5LLE1BTUQ7QUFBQztBQUNGNkIsWUFBSSxDQUFDLGVBQUQsQ0FBSixDQUFzQjdCLFFBQXRCLEdBQWlDLElBQWpDO0FBQ0g7QUFFSixLQWhCRCxNQWdCSztBQUNELFVBQUdoRCxNQUFILEVBQVU7QUFDTixhQUFLLElBQU04RSxJQUFYLElBQWtCRCxJQUFsQixFQUF3QjtBQUNwQixjQUFHQyxJQUFHLElBQUksV0FBUCxJQUFzQkEsSUFBRyxJQUFJLGNBQTdCLElBQStDQSxJQUFHLElBQUksV0FBdEQsSUFBcUVBLElBQUcsSUFBSSxTQUEvRSxFQUF5RjtBQUNyRkQsZ0JBQUksQ0FBQ0MsSUFBRCxDQUFKLENBQVU5QixRQUFWLEdBQXFCLElBQXJCO0FBRUg7QUFDSjtBQUNKO0FBQ0o7O0FBR0RvQixlQUFXLENBQUNTLElBQUQsQ0FBWDtBQUVQLEdBeENRLEVBd0NQLENBQUM3RSxNQUFELEVBQVEwRSxRQUFSLENBeENPLENBQVQ7QUEwQ0FFLHlEQUFTLENBQUMsWUFBSTtBQUNWOUIsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEdBRlEsRUFFUCxDQUFDOUMsTUFBRCxDQUZPLENBQVQ7QUFHQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUksTUFBTStFLFFBQVE7QUFBQSw0U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsb0JBRk8sR0FFRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBRkY7QUFHUEMsb0JBSE8sR0FHRTNDLEtBQUssQ0FBQzRDLFlBQU4sR0FBcUI1QyxLQUFLLENBQUNULEtBSDdCO0FBSVBzRCxvQkFKTyxHQUlFN0MsS0FBSyxDQUFDOEMsYUFBTixHQUFzQjlDLEtBQUssQ0FBQ1YsTUFKOUI7QUFLYmtELG9CQUFNLENBQUNqRCxLQUFQLEdBQWVHLElBQUksQ0FBQ0gsS0FBcEI7QUFDQWlELG9CQUFNLENBQUNsRCxNQUFQLEdBQWdCSSxJQUFJLENBQUNKLE1BQXJCO0FBQ015RCxpQkFQTyxHQU9EUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsSUFBbEIsQ0FQQztBQVdiRCxpQkFBRyxDQUFDRSxTQUFKLENBQ0FqRCxLQURBLEVBRUFOLElBQUksQ0FBQ0YsQ0FBTCxHQUFTbUQsTUFGVCxFQUdBakQsSUFBSSxDQUFDRCxDQUFMLEdBQVNvRCxNQUhULEVBSUFuRCxJQUFJLENBQUNILEtBQUwsR0FBYW9ELE1BSmIsRUFLQWpELElBQUksQ0FBQ0osTUFBTCxHQUFjdUQsTUFMZCxFQU1BLENBTkEsRUFPQSxDQVBBLEVBUUFuRCxJQUFJLENBQUNILEtBUkwsRUFTQUcsSUFBSSxDQUFDSixNQVRMO0FBWU00RCx5QkF2Qk8sR0F1Qk9WLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQixVQUFqQixDQXZCUDtBQXlCYi9DLHVCQUFTLENBQUMsVUFBQ2dELElBQUQsRUFBUTtBQUNkLHVEQUFXQSxJQUFYLDBKQUFpQnRELFNBQWpCLEVBQTRCO0FBQUNGLHFCQUFHLEVBQUNzRCxXQUFMO0FBQWlCaEQsNEJBQVUsRUFBQztBQUFDVixxQkFBQyxFQUFDRSxJQUFJLENBQUNGLENBQVI7QUFBVUMscUJBQUMsRUFBQ0MsSUFBSSxDQUFDRCxDQUFqQjtBQUFtQkYseUJBQUssRUFBQ0csSUFBSSxDQUFDSCxLQUE5QjtBQUFvQ0QsMEJBQU0sRUFBQ0ksSUFBSSxDQUFDSjtBQUFoRDtBQUE1QixpQkFBNUI7QUFDSCxlQUZRLENBQVQ7QUFJQWdCLDhCQUFnQixDQUFDLEtBQUQsQ0FBaEI7O0FBN0JhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJpQyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBaUNBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNmLEdBQUQsRUFBS2dCLEtBQUwsRUFBV0MsTUFBWCxFQUFvQjtBQUVyQyxRQUFNQyxPQUFPLHFCQUFPN0IsUUFBUCxDQUFiOztBQUNBLFFBQUdXLEdBQUcsSUFBSSxlQUFWLEVBQTBCO0FBQ3RCa0IsYUFBTyxDQUFDbEIsR0FBRCxDQUFQLENBQWEsT0FBYixFQUFzQmlCLE1BQXRCLEVBQThCLE9BQTlCLElBQXdDLENBQUNDLE9BQU8sQ0FBQ2xCLEdBQUQsQ0FBUCxDQUFhLE9BQWIsRUFBc0JpQixNQUF0QixFQUE4QixPQUE5QixDQUF6QztBQUNILEtBRkQsTUFFSztBQUNEQyxhQUFPLENBQUNsQixHQUFELENBQVAsQ0FBYTdCLEtBQWIsR0FBbUI2QyxLQUFLLENBQUNHLE1BQU4sQ0FBYWhELEtBQWhDO0FBQ0g7O0FBRURtQixlQUFXLENBQUM0QixPQUFELENBQVg7QUFDSCxHQVZEOztBQVlBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNKLEtBQUQsRUFBT0ssSUFBUCxFQUFjO0FBRTdCLFFBQUdBLElBQUksSUFBSSxXQUFYLEVBQXVCO0FBQ25CaEUsYUFBTyxDQUFDO0FBQ0pOLGNBQU0sRUFBQyxLQUFHLENBRE47QUFFSkMsY0FBTSxFQUFDLEdBRkg7QUFHSkMsYUFBSyxFQUFDLEdBSEY7QUFJSnFFLFlBQUksRUFBQyxJQUpEO0FBS0pwRSxTQUFDLEVBQUMsQ0FMRTtBQU1KQyxTQUFDLEVBQUM7QUFORSxPQUFELENBQVA7QUFRSCxLQVRELE1BVUk7QUFDQUUsYUFBTyxDQUFDO0FBQ0pOLGNBQU0sRUFBQyxLQUFHLEVBRE47QUFFSkMsY0FBTSxFQUFDLEdBRkg7QUFHSkMsYUFBSyxFQUFDLEdBSEY7QUFJSnFFLFlBQUksRUFBQyxJQUpEO0FBS0pwRSxTQUFDLEVBQUMsRUFMRTtBQU1KQyxTQUFDLEVBQUM7QUFORSxPQUFELENBQVA7QUFRSDs7QUFFRE0sZ0JBQVksQ0FBQzRELElBQUQsQ0FBWjtBQUNBckQsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBVCxVQUFNLENBQUMsVUFBQ3VELElBQUQsRUFBUTtBQUNYLDZDQUFXQSxJQUFYLDBKQUFpQk8sSUFBakIsRUFBdUJFLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlIsS0FBSyxDQUFDRyxNQUFOLENBQWFNLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBcEIsQ0FBdkI7QUFDSCxLQUZLLENBQU47QUFHQTNFLFdBQU8sQ0FBQyxVQUFDZ0UsSUFBRCxFQUFRO0FBQ1osNkNBQVdBLElBQVgsMEpBQWlCTyxJQUFqQixFQUF1QkwsS0FBSyxDQUFDRyxNQUFOLENBQWFNLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdkI7QUFDSCxLQUZNLENBQVA7QUFLSCxHQWpDRDs7QUFtQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFXO0FBQzFCO0FBQ0EsUUFBR3ZFLElBQUksQ0FBQ0wsTUFBTCxHQUFjLENBQWpCLEVBQW1CO0FBQ2ZNLGFBQU8sQ0FBQyxVQUFDdUUsR0FBRCxFQUFPO0FBQ1gsK0NBQVdBLEdBQVg7QUFBZXpFLFdBQUMsRUFBQ3dFLE9BQU8sQ0FBQ3hFO0FBQXpCO0FBQ0gsT0FGTSxDQUFQO0FBR0gsS0FKRCxNQUtJO0FBQ0FFLGFBQU8sQ0FBQyxVQUFDdUUsR0FBRCxFQUFPO0FBQ1gsK0NBQVdBLEdBQVg7QUFBZXpFLFdBQUMsRUFBQ3dFLE9BQU8sQ0FBQ3hFLENBQXpCO0FBQTJCRCxXQUFDLEVBQUN5RSxPQUFPLENBQUN6RTtBQUFyQztBQUNILE9BRk0sQ0FBUDtBQUdIOztBQUNEVixXQUFPLENBQUNDLEdBQVIsQ0FBWVcsSUFBWixFQVowQixDQWMxQjtBQUNILEdBZkQ7O0FBaUJBLE1BQU15RSxXQUFXO0FBQUEsNFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLG9CQUZVLEdBRUQsRUFGQzs7QUFHaEIsbUJBQVc5QixHQUFYLElBQWtCWCxRQUFsQixFQUEyQjtBQUN2QnlDLHNCQUFNLENBQUM5QixHQUFELENBQU4sR0FBY1gsUUFBUSxDQUFDVyxHQUFELENBQVIsQ0FBYzdCLEtBQTVCO0FBQ0g7O0FBRUQyRCxvQkFBTSxDQUFDQyxRQUFQLEdBQWtCbEUsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQmlCLFVBQW5DO0FBQ0FrRSxvQkFBTSxDQUFDRSxPQUFQLEdBQWtCbkUsTUFBTSxDQUFDakIsWUFBUCxDQUFvQmdCLFVBQXRDO0FBRU1xRSxzQkFWVSxHQVVELElBQUlDLFFBQUosRUFWQzs7QUFZaEIsa0JBQUdyRixJQUFJLENBQUNGLFNBQUwsS0FBbUIsRUFBbkIsSUFBeUJFLElBQUksQ0FBQ0QsWUFBTCxLQUFzQixFQUFsRCxFQUFxRDtBQUVqRHFGLHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBeUJ0RixJQUFJLENBQUNGLFNBQTlCO0FBQ0FzRix3QkFBUSxDQUFDRSxNQUFULENBQWdCLFNBQWhCLEVBQTBCdEYsSUFBSSxDQUFDRCxZQUEvQjtBQUVILGVBTEQsTUFNSTtBQUVBcUYsd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5QnRGLElBQUksQ0FBQ1csU0FBRCxDQUE3QjtBQUNIOztBQUVEeUUsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixlQUFoQixFQUFnQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWYsQ0FBaEM7QUF2QmdCO0FBQUE7QUFBQSxxQkE2Qk5RLDZDQUFLLENBQUNDLElBQU4sdUJBQWdDTixRQUFoQyxFQUF5QztBQUFDTywrQkFBZSxFQUFDO0FBQWpCLGVBQXpDLENBN0JNOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFpQ0xoRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixDQWpDSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYb0YsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF1Q0EsTUFBTVksZ0JBQWdCLEdBQUMsU0FBakJBLGdCQUFpQixDQUFDQyxPQUFELEVBQVNDLEtBQVQsRUFBaUI7QUFFcEMsUUFBTTVDLElBQUkscUJBQU9MLGVBQVAsQ0FBVjs7QUFDQSxTQUFLLElBQU1NLEdBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3JCQSxVQUFJLENBQUNDLEdBQUQsQ0FBSixHQUFZLEtBQVo7QUFDRjs7QUFFREQsUUFBSSxDQUFDMkMsT0FBRCxDQUFKLEdBQWdCLElBQWhCO0FBQ0E3QyxlQUFXLENBQUM4QyxLQUFLLEdBQUMsQ0FBUCxDQUFYO0FBQ0FoRCxzQkFBa0IsQ0FBQ0ksSUFBRCxDQUFsQjtBQUNILEdBVkQ7O0FBWUEsTUFBTTZDLFdBQVcsR0FBRSxTQUFiQSxXQUFhLENBQUNGLE9BQUQsRUFBVztBQUMxQixRQUFHQSxPQUFPLElBQUksT0FBZCxFQUNBLG9CQUFPLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLFFBQUdBLE9BQU8sSUFBSSxVQUFkLEVBQ0Esb0JBQU8scUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsUUFBR0EsT0FBTyxJQUFJLGNBQWQsRUFDQSxvQkFBTyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQVBEOztBQVNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTyxhQUFPLEVBQUVuRyxTQUFoQjtBQUEyQixXQUFLLEVBQUVyQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFDMkgsa0JBQVUsRUFBQyxRQUFaO0FBQXFCQyxnQkFBUSxFQUFDO0FBQTlCLE9BQVo7QUFBdUQsUUFBRSxFQUFDLFNBQTFEO0FBQW9FLFNBQUcsRUFBRXhGLEdBQUcsQ0FBQyxXQUFEO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUssV0FBSyxFQUFFO0FBQUN1RixrQkFBVSxFQUFDLFFBQVo7QUFBcUJDLGdCQUFRLEVBQUM7QUFBOUIsT0FBWjtBQUF1RCxRQUFFLEVBQUMsWUFBMUQ7QUFBdUUsU0FBRyxFQUFFeEYsR0FBRyxDQUFDLGNBQUQ7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUkscUVBQUMsUUFBRDtBQUFVLGdCQUFVLEVBQUVTLGVBQXRCO0FBQXVDLFlBQU0sRUFBRTdDLE1BQS9DO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFBLG1CQUVRa0IsbUJBQW1CLGlCQUNsQixxRUFBQyxZQUFEO0FBQUEsb0JBRU8yRyxNQUFNLENBQUNDLElBQVAsQ0FBWXRELGVBQVosRUFBNkJ1RCxHQUE3QixDQUFpQyxVQUFDQyxJQUFELEVBQU1QLEtBQU4sRUFBYztBQUMzQyxnQ0FBUSxxRUFBQyxpQkFBRDtBQUFtQix3QkFBVSxFQUFFakQsZUFBZSxDQUFDd0QsSUFBRCxDQUE5QztBQUFzRCxtQkFBSyxFQUFFO0FBQUNDLHFCQUFLLEVBQUN6RCxlQUFlLENBQUN3RCxJQUFELENBQWYsR0FBd0IsT0FBeEIsR0FBa0M7QUFBekMsZUFBN0Q7QUFBZ0gscUJBQU8sRUFBRTtBQUFBLHVCQUFJVCxnQkFBZ0IsQ0FBQ1MsSUFBRCxFQUFNUCxLQUFOLENBQXBCO0FBQUEsZUFBekg7QUFBQSx3QkFBNEpDLFdBQVcsQ0FBQ00sSUFBRDtBQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFSO0FBQ0gsV0FGRDtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFQsRUFZUW5GLGVBQWUsZ0JBR1g7QUFBSyxlQUFLLEVBQUU7QUFBQ3FGLHFCQUFTLEVBQUM7QUFBWCxXQUFaO0FBQUEsa0NBQ0kscUVBQUMsdURBQUQ7QUFBVSx5QkFBYSxFQUFFLHVCQUFDQyxHQUFEO0FBQUEscUJBQU8xRixRQUFRLENBQUMwRixHQUFELENBQWY7QUFBQSxhQUF6QjtBQUErQyxpQkFBSyxFQUFFO0FBQUNDLDZCQUFlLEVBQUMsS0FBakI7QUFBdUJ0RyxvQkFBTSxFQUFDLE9BQTlCO0FBQXNDQyxtQkFBSyxFQUFDO0FBQTVDLGFBQXREO0FBQTZHLHNCQUFVLEVBQUU7QUFBQ0Qsb0JBQU0sRUFBQyxPQUFSO0FBQWdCQyxtQkFBSyxFQUFDLE9BQXRCO0FBQThCc0csdUJBQVMsRUFBQztBQUF4QyxhQUF6SDtBQUE0SyxlQUFHLEVBQUVqRyxHQUFHLENBQUNFLFNBQUQsQ0FBcEw7QUFBaU0sZ0JBQUksRUFBRUosSUFBdk07QUFBNk0sb0JBQVEsRUFBRSxrQkFBQ3VFLE9BQUQ7QUFBQSxxQkFBV0QsVUFBVSxDQUFDQyxPQUFELENBQXJCO0FBQUE7QUFBdk47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssaUJBQUssRUFBRTtBQUFDeUIsdUJBQVMsRUFBQztBQUFYLGFBQVo7QUFBQSxtQ0FDQyxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBSW5ELFFBQVEsRUFBWjtBQUFBLGVBQWpCO0FBQWlDLG1CQUFLLEVBQUMsV0FBdkM7QUFBbUQscUJBQU8sRUFBQyxXQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhXLGdCQVlUO0FBQUEscUJBQ1EsQ0FBQzdELG1CQUFELGlCQUVHO0FBQUEsb0NBQ0cscUVBQUMsVUFBRDtBQUFZLDBCQUFZLEVBQUVrQixHQUFHLENBQUNYLFNBQTlCO0FBQUEsc0NBQ0kscUVBQUMsVUFBRDtBQUFhLHVCQUFPLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQVcscUJBQUssRUFBRTtBQUFDd0csdUJBQUssRUFBQztBQUFQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFPLHdCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSx5QkFBS3BDLFVBQVUsQ0FBQ29DLENBQUQsRUFBRyxXQUFILENBQWY7QUFBQSxpQkFBakI7QUFBaUQsb0JBQUksRUFBQyxRQUF0RDtBQUErRCxzQkFBTSxFQUFDLGtDQUF0RTtBQUF5RyxrQkFBRSxFQUFDLE1BQTVHO0FBQW1ILG9CQUFJLEVBQUMsTUFBeEg7QUFBK0gscUJBQUssRUFBRTtBQUFDQyx5QkFBTyxFQUFDO0FBQVQ7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFNRyxxRUFBQyxrQkFBRDtBQUFBLHFDQUNJLHFFQUFDLHFFQUFEO0FBQWMscUJBQUssRUFBRTtBQUFDQSx5QkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLGdDQUFjLEVBQUMsUUFBL0I7QUFBd0NDLDRCQUFVLEVBQUM7QUFBbkQsaUJBQXJCO0FBQW1GLHFCQUFLLEVBQUMsTUFBekY7QUFBZ0csc0JBQU0sRUFBQyxNQUF2RztBQUE4Ryx1QkFBTyxFQUFFckcsR0FBRyxDQUFDVixZQUEzSDtBQUFBLHdDQUNJLHFFQUFDLFVBQUQ7QUFBWSx5QkFBTyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSxxRUFBQyw0REFBRDtBQUFXLHVCQUFLLEVBQUU7QUFBQ3VHLHlCQUFLLEVBQUM7QUFBUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLGVBR0k7QUFBTywwQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsMkJBQUtwQyxVQUFVLENBQUNvQyxDQUFELEVBQUcsY0FBSCxDQUFmO0FBQUEsbUJBQWpCO0FBQW9ELHdCQUFNLEVBQUMsa0NBQTNEO0FBQThGLG9CQUFFLEVBQUMsT0FBakc7QUFBeUcsc0JBQUksRUFBQyxNQUE5RztBQUFxSCx1QkFBSyxFQUFFO0FBQUNDLDJCQUFPLEVBQUM7QUFBVDtBQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkgsZUFhRztBQUFLLG1CQUFLLEVBQUU7QUFBQ1gsd0JBQVEsRUFBQyxVQUFWO0FBQXFCYyxtQkFBRyxFQUFDLE9BQXpCO0FBQWlDQyxxQkFBSyxFQUFDLE1BQXZDO0FBQThDQyxzQkFBTSxFQUFDO0FBQXJELGVBQVo7QUFBQSxxQ0FDUSxxRUFBQyx3REFBRDtBQUFRLHVCQUFPLEVBQUU7QUFBQSx5QkFBSWpDLFdBQVcsRUFBZjtBQUFBLGlCQUFqQjtBQUFvQyxxQkFBSyxFQUFFO0FBQUNrQywrQkFBYSxFQUFDLFlBQWY7QUFBNEJDLDhCQUFZLEVBQUM7QUFBekMsaUJBQTNDO0FBQTZGLHFCQUFLLEVBQUMsV0FBbkc7QUFBK0csdUJBQU8sRUFBQyxXQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkg7QUFBQSwwQkFIWCxlQXVCRSxxRUFBQyxXQUFEO0FBQWEscUJBQVMsRUFBRTVILG1CQUF4QjtBQUFBLHVCQUdRQSxtQkFBbUIsaUJBQ25CLHFFQUFDLGVBQUQ7QUFBaUIsdUJBQVMsRUFBRXdELFFBQTVCO0FBQUEscUNBQ0cscUVBQUMsOERBQUQ7QUFBYSxxQkFBSyxFQUFFO0FBQUNxRSwwQkFBUSxFQUFDLE1BQVY7QUFBaUJkLHVCQUFLLEVBQUM7QUFBdkI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSlIsRUFVUUosTUFBTSxDQUFDQyxJQUFQLENBQVkzRCxRQUFaLEVBQXNCNEQsR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFNUCxLQUFOLEVBQWM7QUFFcEMsa0JBQUl1QixXQUFXLEdBQUcsSUFBbEI7O0FBQ0Esa0JBQUcsT0FBTzdFLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlL0UsS0FBdEIsS0FBZ0MsUUFBbkMsRUFBNEM7QUFDeEMsb0JBQUkrRixXQUFXLEdBQUduQixNQUFNLENBQUNDLElBQVAsQ0FBWTNELFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlL0UsS0FBM0IsRUFBa0M4RSxHQUFsQyxDQUFzQyxVQUFDa0IsT0FBRCxFQUFTQyxRQUFUO0FBQUE7QUFBQTtBQUFxQjtBQUM3RSx5RkFBQyxXQUFEO0FBQWEsK0JBQVMsRUFBRS9FLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlaEYsUUFBdkM7QUFBQSw2Q0FDQTtBQUFLLDZCQUFLLEVBQUU7QUFBQ3VGLGlDQUFPLEVBQUMsTUFBVDtBQUFnQkMsd0NBQWMsRUFBQztBQUEvQix5QkFBWjtBQUFBLGdEQUNJO0FBQUcsK0JBQUssRUFBRTtBQUFDSyx5Q0FBYSxFQUFDO0FBQWYsMkJBQVY7QUFBQSxvQ0FBeUMxRSxRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZSxPQUFmLEVBQXdCaUIsT0FBeEIsRUFBaUMsS0FBakM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQUVJLHFFQUFDLG9EQUFEO0FBQVEsaUNBQU8sRUFBQyxTQUFoQjtBQUEwQix1Q0FBYSxFQUFFLEVBQXpDO0FBQTZDLGtDQUFRLEVBQUU7QUFBQSxtQ0FBSXBELFlBQVksQ0FBQ21DLElBQUQsRUFBTSxFQUFOLEVBQVNpQixPQUFULENBQWhCO0FBQUEsMkJBQXZEO0FBQTBGLHFDQUFXLEVBQUUsSUFBdkc7QUFBNkcsdUNBQWEsRUFBRSxJQUE1SDtBQUFrSSxpQ0FBTyxFQUFFOUUsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWUsT0FBZixFQUF3QmlCLE9BQXhCLEVBQWlDLE9BQWpDO0FBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR3RDtBQUFBLGlCQUF0QyxDQUFsQjtBQVFILGVBVEQsTUFTSztBQUVERCwyQkFBVyxnQkFBSSxxRUFBQyxXQUFEO0FBQWEsMkJBQVMsRUFBRTdFLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlaEYsUUFBdkM7QUFBQSx5Q0FDQyxxRUFBQywyREFBRDtBQUNJLDZCQUFTLEVBQUVtQixRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZTVFLFNBRDlCO0FBRUksd0JBQUksRUFBRSxDQUZWO0FBR0ksNEJBQVEsRUFBRSxrQkFBQ2tGLENBQUQ7QUFBQSw2QkFBS3pDLFlBQVksQ0FBQ21DLElBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUFBLHFCQUhkO0FBSUkseUJBQUssRUFBRTtBQUFDdkcsMkJBQUssRUFBQztBQUFQLHFCQUpYO0FBS0kseUJBQUssRUFBRW9DLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlckgsS0FMMUI7QUFNSSwyQkFBTyxFQUFDLFVBTlo7QUFPSSx5QkFBSyxFQUFFd0QsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWUvRSxLQVAxQjtBQVFJLDhCQUFVLEVBQUVrQixRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZTNFO0FBUi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFmO0FBYUg7O0FBRUQscUJBQU8yRixXQUFQO0FBQ0gsYUE5QkQsQ0FWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJGO0FBQUEsd0JBeEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNHSDs7R0FqY3VCL0gsVTs7T0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uODllZjdkMTE0YWQzZTkyMDVhMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYUFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcCxFbWFpbCxMb2NrLE5vdGlmaWNhdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ3JvcHBlciBmcm9tICBcInJlYWN0LWltYWdlLWNyb3BcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuXHJcbmNvbnN0IEV4dGVyaW9yID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG5sZWZ0OjUwJTtcclxudG9wOiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjE1MHB4XCIgOiBcIjcwcHhcIn07O1xyXG5tYXgtd2lkdGg6NjAwcHg7XHJcbndpZHRoOjkwJTtcclxuaGVpZ2h0OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjM1MHB4XCIgOiBcIjU4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnotaW5kZXg6MTAwMDtcclxub3ZlcmZsb3c6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwidmlzaWJsZVwiIDogXCJhdXRvXCJ9OztcclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7SW1hZ2Vmb3JCYWNrfSk9PkltYWdlZm9yQmFja30pO1xyXG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiI2U5ZWNlZlwiIDogXCJ3aGl0ZVwifTtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MjAwcHg7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5vcGFjaXR5OjA7XHJcbmBcclxuLy9zZWxlY3Rpb24gYmFyIGZvciBlZGl0aW5nXHJcbmNvbnN0IFNlbGVjdGlvbmJhciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuaGVpZ2h0OjMwcHg7XHJcbm1hcmdpbi1ib3R0b206NDBweDtcclxuYFxyXG5cclxuY29uc3QgQ2hpbGRzb2ZzZWxlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxudG9wOiR7KHtpbm5lcmNvbG9yfSk9PmlubmVyY29sb3IgPyBcIjEwcHhcIiA6IFwiMFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aW5uZXJjb2xvcn0pPT5pbm5lcmNvbG9yID8gXCIjN2RlMmQxXCIgOiBcIiNmZjBhNTRcIn07XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxud2lkdGg6MzhweDtcclxuaGVpZ2h0OjM4cHg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuMThzO1xyXG5wYWRkaW5nOjVweDtcclxuYFxyXG5cclxuY29uc3QgSG9sZGVyZm9ydXBpY29uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4zcztcclxudG9wOi00NXB4O1xyXG5sZWZ0OiR7KHtzbGlwdmFsdWV9KT0+e1xyXG4gICAgaWYoc2xpcHZhbHVlID09IDEpe1xyXG4gICAgICAgIHJldHVybiBcIjU1cHhcIlxyXG4gICAgfWVsc2UgaWYoc2xpcHZhbHVlID09IDIpe1xyXG4gICAgICAgIHJldHVybiBcIjI1MHB4XCJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcIjQ0MHB4XCJcclxuICAgIH1cclxufX07XHJcbmBcclxuXHJcbi8vZW1haWwscGFzc3dvcmQsbm90aWZpY2F0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe2lzV2luZG93Zm9yc2V0dGluZ3MsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG11c2VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiQWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuUGVyc29uYWx0ZXh0LFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWUsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgbGFiZWw6XCJFLVBvc3RhXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiRS1wb3N0YW5pIGRlZ2lzdGlybWVrIGlzdGVyc2VuLCB5ZW5pIGdpcmRpZ2luIGFkcmVzZSBiaXIga29kIGdvbmRlcmlsaWNlayBsdXRmZW4gb251IGdpci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ3VycmVudHBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBTaWZyZW5pelwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgVmFsaWRhdGlvbnBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBzaWZyZW5pemkgdGVrcmFyIGdpcmluXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LCBcclxuICAgICAgICBOZXdwYXNzd29yZDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlllbmkgc2lmcmVcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTm90aWZpY2F0aW9uczp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgICAgICBXaGVuZm9sbG93OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIHNlbmkgdGFraXAgZXR0aWdpbmRlIGJpbGRpcmltIGFsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBXaGVubGlrZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSBzZW5pbiBpY2VyaWdpbmkgYmVnZW5kaWdpbmRlIGJpbGRpcmltIGFsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBXaGVuY29tbWVudDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSBpY2VyaWdpbmUgeW9ydW0geWFwdGlnaW5kYSBiaWxkaXJpbSBhbFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25jaGlsZHMsc2V0c2VsZWN0aW9uY2hpbGRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBFbWFpbDp0cnVlLFxyXG4gICAgICAgIFBhc3N3b3JkOmZhbHNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbjpmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZCxzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29weSA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29weVtrZXldLmFjdGl2YXRlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Zm9yc2V0dGluZ3Mpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09IDEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGVjdGVkID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJDdXJyZW50cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJWYWxpZGF0aW9ucGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7Ly9zZWxlY3RlZCAzXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIk5vdGlmaWNhdGlvbnNcIl0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihrZXkgPT0gXCJtdXNlcm5hbWVcIiB8fCBrZXkgPT0gXCJwZXJzb25hbHRleHRcIiB8fCBrZXkgPT0gXCJmaXJzdG5hbWVcIiB8fCBrZXkgPT0gXCJzdXJuYW1lXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG5cclxuICAgIH0sW2FjdGl2ZSxzZWxlY3RlZF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoc3JjLkJhY2tpbWFnZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXl5b1wiKVxyXG4gICAgICAgICAgICBjb25zdCBiYWNraW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCYWNraW1nXCIpXHJcbiAgICAgICAgICAgIGJhY2tpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0aW1hZ2UoYmFja2ltZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhY2tpbWcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9ICAgIFxyXG5cclxuICAgIH0sW3NyY10pXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IFRvQ2FudmFzID0gYXN5bmMgKCk9PntcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9wbmdcIilcclxuXHJcbiAgICAgICAgc2V0cmVzdWx0KChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW2ltYWdldHlwZV06e3NyYzpiYXNlNjRJbWFnZSxjcm9wdmFsdWVzOnt4OmNyb3AueCx5OmNyb3AueSx3aWR0aDpjcm9wLndpZHRoLGhlaWdodDpjcm9wLmhlaWdodH19fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSW5wdXRoYW5kbGVyID0gKGtleSxldmVudCxzdWJrZXkpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgaWYoa2V5ID09IFwiTm90aWZpY2F0aW9uc1wiKXtcclxuICAgICAgICAgICAgbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdPSAhbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjcm9wKVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5iYWNrY3JvcCA9IHJlc3VsdC5CYWNraW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy9tb3ZlIHRoaXMgdG8gYXBpIGZpbGVcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgdXNlci91cGRhdGVwcm9maWxlYCxmb3JtRGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgXHJcbiAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVBMT0FEIEVSUk9SUlJSUlJSXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kbGVyPShrZXluYW1lLGluZGV4KT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4uc2VsZWN0aW9uY2hpbGRzfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICBjb3B5W2tleV0gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb3B5W2tleW5hbWVdID0gdHJ1ZVxyXG4gICAgICAgIHNldHNlbGVjdGVkKGluZGV4KzEpXHJcbiAgICAgICAgc2V0c2VsZWN0aW9uY2hpbGRzKGNvcHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNyZWF0ZXIgPShrZXluYW1lKT0+e1xyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJFbWFpbFwiKVxyXG4gICAgICAgIHJldHVybiA8RW1haWw+PC9FbWFpbD5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiUGFzc3dvcmRcIilcclxuICAgICAgICByZXR1cm4gPExvY2s+PC9Mb2NrPlxyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJOb3RpZmljYXRpb25cIilcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbnM+PC9Ob3RpZmljYXRpb25zPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiQmFja2ltZ1wiIHNyYz17c3JjW1wiQmFja2ltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIlByb2ZpbGVpbWdcIiBzcmM9e3NyY1tcIlByb2ZpbGVpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxTZWxlY3Rpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9uY2hpbGRzKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENoaWxkc29mc2VsZWN0aW9uIGlubmVyY29sb3I9e3NlbGVjdGlvbmNoaWxkc1tpdGVtXX0gc3R5bGU9e3tjb2xvcjpzZWxlY3Rpb25jaGlsZHNbaXRlbV0gPyBcIndoaXRlXCIgOiBcIndoaXRlXCJ9fSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGxlcihpdGVtLGluZGV4KX0+e0ljb25jcmVhdGVyKGl0ZW0pfTwvQ2hpbGRzb2ZzZWxlY3Rpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYmFyPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2Nyb3BwZXJhY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXIgIG9uSW1hZ2VMb2FkZWQ9eyhpbWcpPT5zZXRpbWFnZShpbWcpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLGhlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwifX0gIGltYWdlU3R5bGU9e3toZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIixvYmplY3RGaXQ6XCJjb3ZlclwifX0gIHNyYz17c3JjW2ltYWdldHlwZV19IGNyb3A9e2Nyb3B9IG9uQ2hhbmdlPXsobmV3Y3JvcCk9PnVwZGF0ZWNyb3AobmV3Y3JvcCl9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlRvQ2FudmFzKCl9IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiID5VcGxvYWQgdGhlIGZpbGUgdG8gc2VydmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICFpc1dpbmRvd2ZvcnNldHRpbmdzICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIyMjVweFwiLHJpZ2h0OlwiMTBweFwiLHpJbmRleDpcIjMwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcygpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcnNldHRpbmdzfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb2xkZXJmb3J1cGljb24gc2xpcHZhbHVlPXtzZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEcm9wVXAgc3R5bGU9e3tmb250U2l6ZTpcIjgwcHhcIixjb2xvcjpcIiNlOWVjZWZcIn19PjwvQXJyb3dEcm9wVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+eyAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZWxlbWVudHMgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHVzZXJpbmZvW2l0ZW1dLnZhbHVlICE9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmVsZW1lbnRzID0gT2JqZWN0LmtleXModXNlcmluZm9baXRlbV0udmFsdWUpLm1hcCgoc3ViaXRlbSxzdWJpbmRleCk9PigvL3N1YiB2YWx1ZXMgb2Ygbm9pdGlmaWNhdGlvbiBwaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19Pnt1c2VyaW5mb1tpdGVtXVtcInZhbHVlXCJdW3N1Yml0ZW1dW1wibXNnXCJdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggb25Db2xvcj0nI2ZmMDAyYicgYW5kbGVEaWFtZXRlcj17MjB9IG9uQ2hhbmdlPXsoKT0+SW5wdXRoYW5kbGVyKGl0ZW0sXCJcIixzdWJpdGVtKX0gY2hlY2tlZEljb249e3RydWV9IHVuY2hlY2tlZEljb249e3RydWV9IGNoZWNrZWQ9e3VzZXJpbmZvW2l0ZW1dW1widmFsdWVcIl1bc3ViaXRlbV1bXCJ2YWx1ZVwiXX0+PC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPikpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViZWxlbWVudHMgPSAoPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3VzZXJpbmZvW2l0ZW1dLm1zZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=