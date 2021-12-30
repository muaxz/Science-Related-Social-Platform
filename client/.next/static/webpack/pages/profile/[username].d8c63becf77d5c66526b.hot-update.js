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
      lineNumber: 466,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 475,
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
      lineNumber: 476,
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
      lineNumber: 477,
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
              lineNumber: 485,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 482,
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
            lineNumber: 495,
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
              lineNumber: 497,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 508,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
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
                lineNumber: 510,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 507,
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
                  lineNumber: 514,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 515,
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
                  lineNumber: 516,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 512,
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
                lineNumber: 520,
                columnNumber: 53
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 519,
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
                lineNumber: 531,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
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
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: userinfo[item]["value"][subitem]["msg"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 542,
                        columnNumber: 52
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
                        onChange: function onChange() {
                          return Inputhandler(item, "", subitem);
                        },
                        checkedIcon: true,
                        uncheckedIcon: true,
                        checked: userinfo[item]["value"][subitem]["value"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 543,
                        columnNumber: 52
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 541,
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
                    lineNumber: 549,
                    columnNumber: 65
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 548,
                  columnNumber: 64
                }, _this);
              }

              return subelements;
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 474,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJzbGlwdmFsdWUiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcnNldHRpbmdzIiwidXBkYXRlZnVuYyIsImVkaXRkYXRhIiwiY2xvc2VmdW5jIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiQmFja2ltYWdlIiwiUHJvZmlsZWltYWdlIiwiZmlsZSIsInNldGZpbGUiLCJhc3BlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiY3JvcCIsInNldGNyb3AiLCJzcmMiLCJzZXRzcmMiLCJpbWFnZXR5cGUiLCJzZXRpbWFnZXR5cGUiLCJpbWFnZSIsInNldGltYWdlIiwiY3JvcHZhbHVlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsImlzY3JvcHBlcmFjdGl2ZSIsInNldGNyb3BwZXJhY3RpdmUiLCJtdXNlcm5hbWUiLCJhY3RpdmF0ZSIsInZhbHVlIiwidXNlcm5hbWUiLCJ3YXJuaW5nIiwibXVsdGlsaW5lIiwibXNnIiwiZmlyc3RuYW1lIiwic3VybmFtZSIsImxhc3RuYW1lIiwicGVyc29uYWx0ZXh0IiwiUGVyc29uYWx0ZXh0IiwiZW1haWwiLCJDdXJyZW50cGFzc3dvcmQiLCJWYWxpZGF0aW9ucGFzc3dvcmQiLCJOZXdwYXNzd29yZCIsIk5vdGlmaWNhdGlvbnMiLCJXaGVuZm9sbG93IiwiV2hlbmxpa2UiLCJXaGVuY29tbWVudCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJFbWFpbCIsIlBhc3N3b3JkIiwiTm90aWZpY2F0aW9uIiwic2VsZWN0aW9uY2hpbGRzIiwic2V0c2VsZWN0aW9uY2hpbGRzIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJzdWJrZXkiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInN1YmVsZW1lbnRzIiwic3ViaXRlbSIsInN1YmluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTUFDSjtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURJLEVBS1I7QUFBQSxNQUFFQyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxNQUF2QztBQUFBLENBTFEsRUFRTDtBQUFBLE1BQUVBLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE9BQXZDO0FBQUEsQ0FSSyxFQVlIO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxTQUFILEdBQWUsTUFBekM7QUFBQSxDQVpHLENBQWQ7S0FBTUosUTtBQWNOLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBWDtNQUFNRyxLO0FBS04sSUFBTUMsZUFBZSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUlkLGlCQUFlO0FBQUEsTUFBYkssU0FBYSxTQUFiQSxTQUFhOztBQUNsQixNQUFHQSxTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZCxXQUFPLE1BQVA7QUFDSCxHQUZELE1BRU0sSUFBR0EsU0FBUyxJQUFJLENBQWhCLEVBQWtCO0FBQ3BCLFdBQU8sT0FBUDtBQUNILEdBRkssTUFFRDtBQUNELFdBQU8sT0FBUDtBQUNIO0FBQ0osQ0Fab0IsQ0FBckI7TUFBTUQsZTtBQWVOLElBQU1FLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1VEFVTztBQUFBLE1BQUVPLFlBQUYsU0FBRUEsWUFBRjtBQUFBLFNBQWtCQSxZQUFsQjtBQUFBLENBVlAsQ0FBaEI7TUFBTUQsVTtBQW9CTixJQUFNRSxrQkFBa0IsR0FBQ1QseURBQU0sQ0FBQ0MsR0FBUjtBQUFBO0FBQUE7QUFBQSw2RkFBeEI7TUFBTVEsa0I7QUFVTixJQUFNQyxXQUFXLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0NBQ1A7QUFBQSxNQUFFVSxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFnQkEsU0FBUyxHQUFHLE9BQUgsR0FBYSxNQUF0QztBQUFBLENBRE8sQ0FBakI7TUFBTUQsVztBQUlOLElBQU1FLFdBQVcsR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4SUFFSDtBQUFBLE1BQUVZLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWVBLFNBQVMsR0FBRyxNQUFILEdBQVksTUFBcEM7QUFBQSxDQUZHLEVBR0U7QUFBQSxNQUFFQSxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFlQSxTQUFTLEdBQUcsU0FBSCxHQUFlLE9BQXZDO0FBQUEsQ0FIRixDQUFqQjtNQUFNRCxXO0FBVU4sSUFBTUUsVUFBVSxHQUFDZCx5REFBTSxDQUFDZSxLQUFSO0FBQUE7QUFBQTtBQUFBLDBKQUFoQixDLENBWUE7O01BWk1ELFU7QUFhTixJQUFNRSxZQUFZLEdBQUdoQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlGQUFsQjtNQUFNZSxZO0FBT04sSUFBTUMsaUJBQWlCLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhNQUNKO0FBQUEsTUFBRWlCLFVBQUYsVUFBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsU0FBSCxHQUFlLFNBQXpDO0FBQUEsQ0FESSxDQUF2QixDLENBZ0JBOztPQWhCTUQsaUI7QUFpQlMsU0FBU0UsVUFBVCxTQUErRTtBQUFBOztBQUFBOztBQUFBLE1BQTFEQyxtQkFBMEQsVUFBMURBLG1CQUEwRDtBQUFBLE1BQXRDQyxVQUFzQyxVQUF0Q0EsVUFBc0M7QUFBQSxNQUEzQm5CLE1BQTJCLFVBQTNCQSxNQUEyQjtBQUFBLE1BQXBCb0IsUUFBb0IsVUFBcEJBLFFBQW9CO0FBQUEsTUFBWEMsU0FBVyxVQUFYQSxTQUFXO0FBRTFGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjs7QUFGMEYsa0JBR25FSSxzREFBUSxDQUFDO0FBQzVCQyxhQUFTLEVBQUMsRUFEa0I7QUFFNUJDLGdCQUFZLEVBQUM7QUFGZSxHQUFELENBSDJEO0FBQUEsTUFHbkZDLElBSG1GO0FBQUEsTUFHOUVDLE9BSDhFOztBQUFBLG1CQU9uRUosc0RBQVEsQ0FBQztBQUFDSyxVQUFNLEVBQUMsS0FBRyxFQUFYO0FBQWNDLFVBQU0sRUFBQyxHQUFyQjtBQUF5QkMsU0FBSyxFQUFDLEdBQS9CO0FBQW1DQyxLQUFDLEVBQUMsRUFBckM7QUFBd0NDLEtBQUMsRUFBQztBQUExQyxHQUFELENBUDJEO0FBQUEsTUFPbkZDLElBUG1GO0FBQUEsTUFPOUVDLE9BUDhFOztBQUFBLG1CQVFyRVgsc0RBQVEsQ0FBQztBQUMxQkMsYUFBUyxFQUFDLEVBRGdCO0FBRTFCQyxnQkFBWSxFQUFDO0FBRmEsR0FBRCxDQVI2RDtBQUFBLE1BUW5GVSxHQVJtRjtBQUFBLE1BUS9FQyxNQVIrRTs7QUFBQSxtQkFZekRiLHNEQUFRLENBQUMsRUFBRCxDQVppRDtBQUFBLE1BWW5GYyxTQVptRjtBQUFBLE1BWXpFQyxZQVp5RTs7QUFBQSxtQkFhakVmLHNEQUFRLENBQUMsSUFBRCxDQWJ5RDtBQUFBLE1BYW5GZ0IsS0FibUY7QUFBQSxNQWE3RUMsUUFiNkU7O0FBQUEsbUJBYy9EakIsc0RBQVEsQ0FBQztBQUNoQ0MsYUFBUyxFQUFDO0FBQ05XLFNBQUcsRUFBQyxFQURFO0FBRU5NLGdCQUFVLEVBQUM7QUFDUFgsYUFBSyxFQUFDLEVBREM7QUFFUEQsY0FBTSxFQUFDLEVBRkE7QUFHUEUsU0FBQyxFQUFDLEVBSEs7QUFJUEMsU0FBQyxFQUFDO0FBSks7QUFGTCxLQURzQjtBQVVoQ1AsZ0JBQVksRUFBQztBQUNUVSxTQUFHLEVBQUMsRUFESztBQUVUTSxnQkFBVSxFQUFDO0FBQ1BYLGFBQUssRUFBQyxFQURDO0FBRVBELGNBQU0sRUFBQyxFQUZBO0FBR1BFLFNBQUMsRUFBQyxFQUhLO0FBSVBDLFNBQUMsRUFBQztBQUpLO0FBRkY7QUFWbUIsR0FBRCxDQWR1RDtBQUFBLE1BY25GVSxNQWRtRjtBQUFBLE1BYzVFQyxTQWQ0RTs7QUFBQSxtQkFrQy9DcEIsc0RBQVEsQ0FBQyxLQUFELENBbEN1QztBQUFBLE1Ba0NuRnFCLGVBbENtRjtBQUFBLE1Ba0NuRUMsZ0JBbENtRTs7QUFBQSxtQkFtQzNEdEIsc0RBQVEsQ0FBQztBQUNwQ3VCLGFBQVMsRUFBQztBQUNOQyxjQUFRLEVBQUMsS0FESDtBQUVOQyxXQUFLLEVBQUM3QixRQUFRLENBQUM4QixRQUZUO0FBR05yQyxXQUFLLEVBQUMsZUFIQTtBQUlOc0MsYUFBTyxFQUFDLEtBSkY7QUFLTkMsZUFBUyxFQUFDLEtBTEo7QUFNTkMsU0FBRyxFQUFDO0FBTkUsS0FEMEI7QUFTcENDLGFBQVMsRUFBQztBQUNOTixjQUFRLEVBQUMsS0FESDtBQUVOQyxXQUFLLEVBQUM3QixRQUFRLENBQUNrQyxTQUZUO0FBR056QyxXQUFLLEVBQUMsSUFIQTtBQUlOc0MsYUFBTyxFQUFDLEtBSkY7QUFLTkMsZUFBUyxFQUFDLEtBTEo7QUFNTkMsU0FBRyxFQUFDO0FBTkUsS0FUMEI7QUFpQnBDRSxXQUFPLEVBQUM7QUFDSlAsY0FBUSxFQUFDLEtBREw7QUFFSkMsV0FBSyxFQUFDN0IsUUFBUSxDQUFDb0MsUUFGWDtBQUdKM0MsV0FBSyxFQUFDLE9BSEY7QUFJSnNDLGFBQU8sRUFBQyxLQUpKO0FBS0pDLGVBQVMsRUFBQyxLQUxOO0FBTUpDLFNBQUcsRUFBQztBQU5BLEtBakI0QjtBQXlCcENJLGdCQUFZLEVBQUM7QUFDVFQsY0FBUSxFQUFDLEtBREE7QUFFVEMsV0FBSyxFQUFDN0IsUUFBUSxDQUFDc0MsWUFGTjtBQUdUN0MsV0FBSyxFQUFDLGtCQUhHO0FBSVRzQyxhQUFPLEVBQUMsS0FKQztBQUtUQyxlQUFTLEVBQUMsSUFMRDtBQU1UQyxTQUFHLEVBQUM7QUFOSyxLQXpCdUI7QUFpQ3BDTSxTQUFLLEVBQUM7QUFDRlgsY0FBUSxFQUFDLEtBRFA7QUFFRkMsV0FBSyxFQUFDN0IsUUFBUSxDQUFDdUMsS0FGYjtBQUdGOUMsV0FBSyxFQUFDLFNBSEo7QUFJRnNDLGFBQU8sRUFBQyxLQUpOO0FBS0ZDLGVBQVMsRUFBQyxLQUxSO0FBTUZDLFNBQUcsRUFBQztBQU5GLEtBakM4QjtBQXlDcENPLG1CQUFlLEVBQUM7QUFDWlosY0FBUSxFQUFDLEtBREc7QUFFWkMsV0FBSyxFQUFDLEVBRk07QUFHWnBDLFdBQUssRUFBQyxlQUhNO0FBSVpzQyxhQUFPLEVBQUMsS0FKSTtBQUtaQyxlQUFTLEVBQUMsS0FMRTtBQU1aQyxTQUFHLEVBQUM7QUFOUSxLQXpDb0I7QUFpRHBDUSxzQkFBa0IsRUFBQztBQUNmYixjQUFRLEVBQUMsS0FETTtBQUVmQyxXQUFLLEVBQUMsRUFGUztBQUdmcEMsV0FBSyxFQUFDLDZCQUhTO0FBSWZzQyxhQUFPLEVBQUMsS0FKTztBQUtmQyxlQUFTLEVBQUMsS0FMSztBQU1mQyxTQUFHLEVBQUM7QUFOVyxLQWpEaUI7QUF5RHBDUyxlQUFXLEVBQUM7QUFDUmQsY0FBUSxFQUFDLEtBREQ7QUFFUkMsV0FBSyxFQUFDLEVBRkU7QUFHUnBDLFdBQUssRUFBQyxZQUhFO0FBSVJzQyxhQUFPLEVBQUMsS0FKQTtBQUtSQyxlQUFTLEVBQUMsS0FMRjtBQU1SQyxTQUFHLEVBQUM7QUFOSSxLQXpEd0I7QUFpRXBDVSxpQkFBYSxFQUFDO0FBQ1ZmLGNBQVEsRUFBQyxLQURDO0FBRVZDLFdBQUssRUFBQztBQUNGZSxrQkFBVSxFQUFDO0FBQ1BmLGVBQUssRUFBQyxLQURDO0FBRVBJLGFBQUcsRUFBQztBQUZHLFNBRFQ7QUFLRlksZ0JBQVEsRUFBQztBQUNMaEIsZUFBSyxFQUFDLEtBREQ7QUFFTEksYUFBRyxFQUFDO0FBRkMsU0FMUDtBQVNGYSxtQkFBVyxFQUFDO0FBQ1JqQixlQUFLLEVBQUMsS0FERTtBQUVSSSxhQUFHLEVBQUM7QUFGSTtBQVRWLE9BRkk7QUFnQlZ4QyxXQUFLLEVBQUMsRUFoQkk7QUFpQlZzQyxhQUFPLEVBQUMsS0FqQkU7QUFrQlZDLGVBQVMsRUFBQyxLQWxCQTtBQW1CVkMsU0FBRyxFQUFDO0FBbkJNO0FBakVzQixHQUFELENBbkNtRDtBQUFBLE1BbUNuRmMsUUFuQ21GO0FBQUEsTUFtQzFFQyxXQW5DMEU7O0FBQUEsbUJBMkg3QzVDLHNEQUFRLENBQUM7QUFDbEQ2QyxTQUFLLEVBQUMsSUFENEM7QUFFbERDLFlBQVEsRUFBQyxLQUZ5QztBQUdsREMsZ0JBQVksRUFBQztBQUhxQyxHQUFELENBM0hxQztBQUFBLE1BMkhuRkMsZUEzSG1GO0FBQUEsTUEySG5FQyxrQkEzSG1FOztBQUFBLG9CQWdJM0RqRCxzREFBUSxDQUFDLENBQUQsQ0FoSW1EO0FBQUEsTUFnSW5Ga0QsUUFoSW1GO0FBQUEsTUFnSTFFQyxXQWhJMEU7O0FBa0kxRkMseURBQVMsQ0FBQyxZQUFJO0FBR04sUUFBTUMsSUFBSSxxQkFBT1YsUUFBUCxDQUFWOztBQUNBLFNBQUssSUFBTVcsR0FBWCxJQUFrQkQsSUFBbEIsRUFBdUI7QUFDbkJBLFVBQUksQ0FBQ0MsR0FBRCxDQUFKLENBQVU5QixRQUFWLEdBQXFCLEtBQXJCO0FBQ0ExQixhQUFPLENBQUNDLEdBQVIsQ0FBWXNELElBQUksQ0FBQ0MsR0FBRCxDQUFKLENBQVU5QixRQUF0QjtBQUNIOztBQUdELFFBQUc5QixtQkFBSCxFQUF1QjtBQUVuQixVQUFHd0QsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFFYkcsWUFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjN0IsUUFBZCxHQUF5QixJQUF6QjtBQUVILE9BSkQsTUFJTSxJQUFHMEIsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFFbkJHLFlBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCN0IsUUFBeEIsR0FBbUMsSUFBbkM7QUFDQTZCLFlBQUksQ0FBQyxvQkFBRCxDQUFKLENBQTJCN0IsUUFBM0IsR0FBc0MsSUFBdEM7QUFDQTZCLFlBQUksQ0FBQyxhQUFELENBQUosQ0FBb0I3QixRQUFwQixHQUErQixJQUEvQjtBQUVILE9BTkssTUFNRDtBQUFDO0FBQ0Y2QixZQUFJLENBQUMsZUFBRCxDQUFKLENBQXNCN0IsUUFBdEIsR0FBaUMsSUFBakM7QUFDSDtBQUVKLEtBaEJELE1BZ0JLO0FBQ0QsVUFBR2hELE1BQUgsRUFBVTtBQUNOLGFBQUssSUFBTThFLElBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3BCLGNBQUdDLElBQUcsSUFBSSxXQUFQLElBQXNCQSxJQUFHLElBQUksY0FBN0IsSUFBK0NBLElBQUcsSUFBSSxXQUF0RCxJQUFxRUEsSUFBRyxJQUFJLFNBQS9FLEVBQXlGO0FBQ3JGRCxnQkFBSSxDQUFDQyxJQUFELENBQUosQ0FBVTlCLFFBQVYsR0FBcUIsSUFBckI7QUFFSDtBQUNKO0FBQ0o7QUFDSjs7QUFHRG9CLGVBQVcsQ0FBQ1MsSUFBRCxDQUFYO0FBRVAsR0F4Q1EsRUF3Q1AsQ0FBQzdFLE1BQUQsRUFBUTBFLFFBQVIsQ0F4Q08sQ0FBVDtBQTBDQUUseURBQVMsQ0FBQyxZQUFJO0FBQ1Y5QixvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsR0FGUSxFQUVQLENBQUM5QyxNQUFELENBRk8sQ0FBVDtBQUdBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJSSxNQUFNK0UsUUFBUTtBQUFBLDRTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxvQkFGTyxHQUVFQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FGRjtBQUdQQyxvQkFITyxHQUdFM0MsS0FBSyxDQUFDNEMsWUFBTixHQUFxQjVDLEtBQUssQ0FBQ1QsS0FIN0I7QUFJUHNELG9CQUpPLEdBSUU3QyxLQUFLLENBQUM4QyxhQUFOLEdBQXNCOUMsS0FBSyxDQUFDVixNQUo5QjtBQUtia0Qsb0JBQU0sQ0FBQ2pELEtBQVAsR0FBZUcsSUFBSSxDQUFDSCxLQUFwQjtBQUNBaUQsb0JBQU0sQ0FBQ2xELE1BQVAsR0FBZ0JJLElBQUksQ0FBQ0osTUFBckI7QUFDTXlELGlCQVBPLEdBT0RQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQixJQUFsQixDQVBDO0FBV2JELGlCQUFHLENBQUNFLFNBQUosQ0FDQWpELEtBREEsRUFFQU4sSUFBSSxDQUFDRixDQUFMLEdBQVNtRCxNQUZULEVBR0FqRCxJQUFJLENBQUNELENBQUwsR0FBU29ELE1BSFQsRUFJQW5ELElBQUksQ0FBQ0gsS0FBTCxHQUFhb0QsTUFKYixFQUtBakQsSUFBSSxDQUFDSixNQUFMLEdBQWN1RCxNQUxkLEVBTUEsQ0FOQSxFQU9BLENBUEEsRUFRQW5ELElBQUksQ0FBQ0gsS0FSTCxFQVNBRyxJQUFJLENBQUNKLE1BVEw7QUFZTTRELHlCQXZCTyxHQXVCT1YsTUFBTSxDQUFDVyxTQUFQLENBQWlCLFVBQWpCLENBdkJQO0FBeUJiL0MsdUJBQVMsQ0FBQyxVQUFDZ0QsSUFBRCxFQUFRO0FBQ2QsdURBQVdBLElBQVgsMEpBQWlCdEQsU0FBakIsRUFBNEI7QUFBQ0YscUJBQUcsRUFBQ3NELFdBQUw7QUFBaUJoRCw0QkFBVSxFQUFDO0FBQUNWLHFCQUFDLEVBQUNFLElBQUksQ0FBQ0YsQ0FBUjtBQUFVQyxxQkFBQyxFQUFDQyxJQUFJLENBQUNELENBQWpCO0FBQW1CRix5QkFBSyxFQUFDRyxJQUFJLENBQUNILEtBQTlCO0FBQW9DRCwwQkFBTSxFQUFDSSxJQUFJLENBQUNKO0FBQWhEO0FBQTVCLGlCQUE1QjtBQUNILGVBRlEsQ0FBVDtBQUlBZ0IsOEJBQWdCLENBQUMsS0FBRCxDQUFoQjs7QUE3QmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUmlDLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFpQ0EsTUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2YsR0FBRCxFQUFLZ0IsS0FBTCxFQUFXQyxNQUFYLEVBQW9CO0FBRXJDLFFBQU1DLE9BQU8scUJBQU83QixRQUFQLENBQWI7O0FBQ0EsUUFBR1csR0FBRyxJQUFJLGVBQVYsRUFBMEI7QUFDdEJrQixhQUFPLENBQUNsQixHQUFELENBQVAsQ0FBYSxPQUFiLEVBQXNCaUIsTUFBdEIsRUFBOEIsT0FBOUIsSUFBd0MsQ0FBQ0MsT0FBTyxDQUFDbEIsR0FBRCxDQUFQLENBQWEsT0FBYixFQUFzQmlCLE1BQXRCLEVBQThCLE9BQTlCLENBQXpDO0FBQ0gsS0FGRCxNQUVLO0FBQ0RDLGFBQU8sQ0FBQ2xCLEdBQUQsQ0FBUCxDQUFhN0IsS0FBYixHQUFtQjZDLEtBQUssQ0FBQ0csTUFBTixDQUFhaEQsS0FBaEM7QUFDSDs7QUFDRG1CLGVBQVcsQ0FBQzRCLE9BQUQsQ0FBWDtBQUNILEdBVEQ7O0FBV0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osS0FBRCxFQUFPSyxJQUFQLEVBQWM7QUFFN0IsUUFBR0EsSUFBSSxJQUFJLFdBQVgsRUFBdUI7QUFDbkJoRSxhQUFPLENBQUM7QUFDSk4sY0FBTSxFQUFDLEtBQUcsQ0FETjtBQUVKQyxjQUFNLEVBQUMsR0FGSDtBQUdKQyxhQUFLLEVBQUMsR0FIRjtBQUlKcUUsWUFBSSxFQUFDLElBSkQ7QUFLSnBFLFNBQUMsRUFBQyxDQUxFO0FBTUpDLFNBQUMsRUFBQztBQU5FLE9BQUQsQ0FBUDtBQVFILEtBVEQsTUFVSTtBQUNBRSxhQUFPLENBQUM7QUFDSk4sY0FBTSxFQUFDLEtBQUcsRUFETjtBQUVKQyxjQUFNLEVBQUMsR0FGSDtBQUdKQyxhQUFLLEVBQUMsR0FIRjtBQUlKcUUsWUFBSSxFQUFDLElBSkQ7QUFLSnBFLFNBQUMsRUFBQyxFQUxFO0FBTUpDLFNBQUMsRUFBQztBQU5FLE9BQUQsQ0FBUDtBQVFIOztBQUVETSxnQkFBWSxDQUFDNEQsSUFBRCxDQUFaO0FBQ0FyRCxvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FULFVBQU0sQ0FBQyxVQUFDdUQsSUFBRCxFQUFRO0FBQ1gsNkNBQVdBLElBQVgsMEpBQWlCTyxJQUFqQixFQUF1QkUsR0FBRyxDQUFDQyxlQUFKLENBQW9CUixLQUFLLENBQUNHLE1BQU4sQ0FBYU0sS0FBYixDQUFtQixDQUFuQixDQUFwQixDQUF2QjtBQUNILEtBRkssQ0FBTjtBQUdBM0UsV0FBTyxDQUFDLFVBQUNnRSxJQUFELEVBQVE7QUFDWiw2Q0FBV0EsSUFBWCwwSkFBaUJPLElBQWpCLEVBQXVCTCxLQUFLLENBQUNHLE1BQU4sQ0FBYU0sS0FBYixDQUFtQixDQUFuQixDQUF2QjtBQUNILEtBRk0sQ0FBUDtBQUtILEdBakNEOztBQW1DQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVc7QUFDMUI7QUFDQSxRQUFHdkUsSUFBSSxDQUFDTCxNQUFMLEdBQWMsQ0FBakIsRUFBbUI7QUFDZk0sYUFBTyxDQUFDLFVBQUN1RSxHQUFELEVBQU87QUFDWCwrQ0FBV0EsR0FBWDtBQUFlekUsV0FBQyxFQUFDd0UsT0FBTyxDQUFDeEU7QUFBekI7QUFDSCxPQUZNLENBQVA7QUFHSCxLQUpELE1BS0k7QUFDQUUsYUFBTyxDQUFDLFVBQUN1RSxHQUFELEVBQU87QUFDWCwrQ0FBV0EsR0FBWDtBQUFlekUsV0FBQyxFQUFDd0UsT0FBTyxDQUFDeEUsQ0FBekI7QUFBMkJELFdBQUMsRUFBQ3lFLE9BQU8sQ0FBQ3pFO0FBQXJDO0FBQ0gsT0FGTSxDQUFQO0FBR0g7O0FBQ0RWLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFaLEVBWjBCLENBYzFCO0FBQ0gsR0FmRDs7QUFpQkEsTUFBTXlFLFdBQVc7QUFBQSw0U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVkMsb0JBRlUsR0FFRCxFQUZDOztBQUdoQixtQkFBVzlCLEdBQVgsSUFBa0JYLFFBQWxCLEVBQTJCO0FBQ3ZCeUMsc0JBQU0sQ0FBQzlCLEdBQUQsQ0FBTixHQUFjWCxRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjN0IsS0FBNUI7QUFDSDs7QUFFRDJELG9CQUFNLENBQUNDLFFBQVAsR0FBa0JsRSxNQUFNLENBQUNsQixTQUFQLENBQWlCaUIsVUFBbkM7QUFDQWtFLG9CQUFNLENBQUNFLE9BQVAsR0FBa0JuRSxNQUFNLENBQUNqQixZQUFQLENBQW9CZ0IsVUFBdEM7QUFFTXFFLHNCQVZVLEdBVUQsSUFBSUMsUUFBSixFQVZDOztBQVloQixrQkFBR3JGLElBQUksQ0FBQ0YsU0FBTCxLQUFtQixFQUFuQixJQUF5QkUsSUFBSSxDQUFDRCxZQUFMLEtBQXNCLEVBQWxELEVBQXFEO0FBRWpEcUYsd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5QnRGLElBQUksQ0FBQ0YsU0FBOUI7QUFDQXNGLHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMEJ0RixJQUFJLENBQUNELFlBQS9CO0FBRUgsZUFMRCxNQU1JO0FBRUFxRix3QkFBUSxDQUFDRSxNQUFULENBQWdCLFFBQWhCLEVBQXlCdEYsSUFBSSxDQUFDVyxTQUFELENBQTdCO0FBQ0g7O0FBRUR5RSxzQkFBUSxDQUFDRSxNQUFULENBQWdCLGVBQWhCLEVBQWdDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsTUFBZixDQUFoQztBQXZCZ0I7QUFBQTtBQUFBLHFCQTZCTlEsNkNBQUssQ0FBQ0MsSUFBTix1QkFBZ0NOLFFBQWhDLEVBQXlDO0FBQUNPLCtCQUFlLEVBQUM7QUFBakIsZUFBekMsQ0E3Qk07O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQWlDTGhHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLENBakNLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhvRixXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQXVDQSxNQUFNWSxnQkFBZ0IsR0FBQyxTQUFqQkEsZ0JBQWlCLENBQUNDLE9BQUQsRUFBU0MsS0FBVCxFQUFpQjtBQUVwQyxRQUFNNUMsSUFBSSxxQkFBT0wsZUFBUCxDQUFWOztBQUNBLFNBQUssSUFBTU0sR0FBWCxJQUFrQkQsSUFBbEIsRUFBd0I7QUFDckJBLFVBQUksQ0FBQ0MsR0FBRCxDQUFKLEdBQVksS0FBWjtBQUNGOztBQUVERCxRQUFJLENBQUMyQyxPQUFELENBQUosR0FBZ0IsSUFBaEI7QUFDQTdDLGVBQVcsQ0FBQzhDLEtBQUssR0FBQyxDQUFQLENBQVg7QUFDQWhELHNCQUFrQixDQUFDSSxJQUFELENBQWxCO0FBQ0gsR0FWRDs7QUFZQSxNQUFNNkMsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0YsT0FBRCxFQUFXO0FBQzFCLFFBQUdBLE9BQU8sSUFBSSxPQUFkLEVBQ0Esb0JBQU8scUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsUUFBR0EsT0FBTyxJQUFJLFVBQWQsRUFDQSxvQkFBTyxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDQSxRQUFHQSxPQUFPLElBQUksY0FBZCxFQUNBLG9CQUFPLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBUEQ7O0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw4REFBRDtBQUFPLGFBQU8sRUFBRW5HLFNBQWhCO0FBQTJCLFdBQUssRUFBRXJCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUMySCxrQkFBVSxFQUFDLFFBQVo7QUFBcUJDLGdCQUFRLEVBQUM7QUFBOUIsT0FBWjtBQUF1RCxRQUFFLEVBQUMsU0FBMUQ7QUFBb0UsU0FBRyxFQUFFeEYsR0FBRyxDQUFDLFdBQUQ7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBSyxXQUFLLEVBQUU7QUFBQ3VGLGtCQUFVLEVBQUMsUUFBWjtBQUFxQkMsZ0JBQVEsRUFBQztBQUE5QixPQUFaO0FBQXVELFFBQUUsRUFBQyxZQUExRDtBQUF1RSxTQUFHLEVBQUV4RixHQUFHLENBQUMsY0FBRDtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSSxxRUFBQyxRQUFEO0FBQVUsZ0JBQVUsRUFBRVMsZUFBdEI7QUFBdUMsWUFBTSxFQUFFN0MsTUFBL0M7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQUEsbUJBRVFrQixtQkFBbUIsaUJBQ2xCLHFFQUFDLFlBQUQ7QUFBQSxvQkFFTzJHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEQsZUFBWixFQUE2QnVELEdBQTdCLENBQWlDLFVBQUNDLElBQUQsRUFBTVAsS0FBTixFQUFjO0FBQzNDLGdDQUFRLHFFQUFDLGlCQUFEO0FBQW1CLHdCQUFVLEVBQUVqRCxlQUFlLENBQUN3RCxJQUFELENBQTlDO0FBQXNELG1CQUFLLEVBQUU7QUFBQ0MscUJBQUssRUFBQ3pELGVBQWUsQ0FBQ3dELElBQUQsQ0FBZixHQUF3QixPQUF4QixHQUFrQztBQUF6QyxlQUE3RDtBQUFnSCxxQkFBTyxFQUFFO0FBQUEsdUJBQUlULGdCQUFnQixDQUFDUyxJQUFELEVBQU1QLEtBQU4sQ0FBcEI7QUFBQSxlQUF6SDtBQUFBLHdCQUE0SkMsV0FBVyxDQUFDTSxJQUFEO0FBQXZLO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVI7QUFDSCxXQUZEO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIVCxFQVlRbkYsZUFBZSxnQkFHWDtBQUFLLGVBQUssRUFBRTtBQUFDcUYscUJBQVMsRUFBQztBQUFYLFdBQVo7QUFBQSxrQ0FDSSxxRUFBQyx1REFBRDtBQUFVLHlCQUFhLEVBQUUsdUJBQUNDLEdBQUQ7QUFBQSxxQkFBTzFGLFFBQVEsQ0FBQzBGLEdBQUQsQ0FBZjtBQUFBLGFBQXpCO0FBQStDLGlCQUFLLEVBQUU7QUFBQ0MsNkJBQWUsRUFBQyxLQUFqQjtBQUF1QnRHLG9CQUFNLEVBQUMsT0FBOUI7QUFBc0NDLG1CQUFLLEVBQUM7QUFBNUMsYUFBdEQ7QUFBNkcsc0JBQVUsRUFBRTtBQUFDRCxvQkFBTSxFQUFDLE9BQVI7QUFBZ0JDLG1CQUFLLEVBQUMsT0FBdEI7QUFBOEJzRyx1QkFBUyxFQUFDO0FBQXhDLGFBQXpIO0FBQTRLLGVBQUcsRUFBRWpHLEdBQUcsQ0FBQ0UsU0FBRCxDQUFwTDtBQUFpTSxnQkFBSSxFQUFFSixJQUF2TTtBQUE2TSxvQkFBUSxFQUFFLGtCQUFDdUUsT0FBRDtBQUFBLHFCQUFXRCxVQUFVLENBQUNDLE9BQUQsQ0FBckI7QUFBQTtBQUF2TjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUN5Qix1QkFBUyxFQUFDO0FBQVgsYUFBWjtBQUFBLG1DQUNDLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFJbkQsUUFBUSxFQUFaO0FBQUEsZUFBakI7QUFBaUMsbUJBQUssRUFBQyxXQUF2QztBQUFtRCxxQkFBTyxFQUFDLFdBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFcsZ0JBWVQ7QUFBQSxxQkFDUSxDQUFDN0QsbUJBQUQsaUJBRUc7QUFBQSxvQ0FDRyxxRUFBQyxVQUFEO0FBQVksMEJBQVksRUFBRWtCLEdBQUcsQ0FBQ1gsU0FBOUI7QUFBQSxzQ0FDSSxxRUFBQyxVQUFEO0FBQWEsdUJBQU8sRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBVyxxQkFBSyxFQUFFO0FBQUN3Ryx1QkFBSyxFQUFDO0FBQVA7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQU8sd0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLHlCQUFLcEMsVUFBVSxDQUFDb0MsQ0FBRCxFQUFHLFdBQUgsQ0FBZjtBQUFBLGlCQUFqQjtBQUFpRCxvQkFBSSxFQUFDLFFBQXREO0FBQStELHNCQUFNLEVBQUMsa0NBQXRFO0FBQXlHLGtCQUFFLEVBQUMsTUFBNUc7QUFBbUgsb0JBQUksRUFBQyxNQUF4SDtBQUErSCxxQkFBSyxFQUFFO0FBQUNDLHlCQUFPLEVBQUM7QUFBVDtBQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxlQU1HLHFFQUFDLGtCQUFEO0FBQUEscUNBQ0kscUVBQUMscUVBQUQ7QUFBYyxxQkFBSyxFQUFFO0FBQUNBLHlCQUFPLEVBQUMsTUFBVDtBQUFnQkMsZ0NBQWMsRUFBQyxRQUEvQjtBQUF3Q0MsNEJBQVUsRUFBQztBQUFuRCxpQkFBckI7QUFBbUYscUJBQUssRUFBQyxNQUF6RjtBQUFnRyxzQkFBTSxFQUFDLE1BQXZHO0FBQThHLHVCQUFPLEVBQUVyRyxHQUFHLENBQUNWLFlBQTNIO0FBQUEsd0NBQ0kscUVBQUMsVUFBRDtBQUFZLHlCQUFPLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJLHFFQUFDLDREQUFEO0FBQVcsdUJBQUssRUFBRTtBQUFDdUcseUJBQUssRUFBQztBQUFQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosZUFHSTtBQUFPLDBCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSwyQkFBS3BDLFVBQVUsQ0FBQ29DLENBQUQsRUFBRyxjQUFILENBQWY7QUFBQSxtQkFBakI7QUFBb0Qsd0JBQU0sRUFBQyxrQ0FBM0Q7QUFBOEYsb0JBQUUsRUFBQyxPQUFqRztBQUF5RyxzQkFBSSxFQUFDLE1BQTlHO0FBQXFILHVCQUFLLEVBQUU7QUFBQ0MsMkJBQU8sRUFBQztBQUFUO0FBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSCxlQWFHO0FBQUssbUJBQUssRUFBRTtBQUFDWCx3QkFBUSxFQUFDLFVBQVY7QUFBcUJjLG1CQUFHLEVBQUMsT0FBekI7QUFBaUNDLHFCQUFLLEVBQUMsTUFBdkM7QUFBOENDLHNCQUFNLEVBQUM7QUFBckQsZUFBWjtBQUFBLHFDQUNRLHFFQUFDLHdEQUFEO0FBQVEsdUJBQU8sRUFBRTtBQUFBLHlCQUFJakMsV0FBVyxFQUFmO0FBQUEsaUJBQWpCO0FBQW9DLHFCQUFLLEVBQUU7QUFBQ2tDLCtCQUFhLEVBQUMsWUFBZjtBQUE0QkMsOEJBQVksRUFBQztBQUF6QyxpQkFBM0M7QUFBNkYscUJBQUssRUFBQyxXQUFuRztBQUErRyx1QkFBTyxFQUFDLFdBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiSDtBQUFBLDBCQUhYLGVBdUJFLHFFQUFDLFdBQUQ7QUFBYSxxQkFBUyxFQUFFNUgsbUJBQXhCO0FBQUEsdUJBR1FBLG1CQUFtQixpQkFDbkIscUVBQUMsZUFBRDtBQUFpQix1QkFBUyxFQUFFd0QsUUFBNUI7QUFBQSxxQ0FDRyxxRUFBQyw4REFBRDtBQUFhLHFCQUFLLEVBQUU7QUFBQ3FFLDBCQUFRLEVBQUMsTUFBVjtBQUFpQmQsdUJBQUssRUFBQztBQUF2QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKUixFQVVRSixNQUFNLENBQUNDLElBQVAsQ0FBWTNELFFBQVosRUFBc0I0RCxHQUF0QixDQUEwQixVQUFDQyxJQUFELEVBQU1QLEtBQU4sRUFBYztBQUVwQyxrQkFBSXVCLFdBQVcsR0FBRyxJQUFsQjs7QUFDQSxrQkFBRyxPQUFPN0UsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWUvRSxLQUF0QixLQUFnQyxRQUFuQyxFQUE0QztBQUN4QyxvQkFBSStGLFdBQVcsR0FBR25CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZM0QsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWUvRSxLQUEzQixFQUFrQzhFLEdBQWxDLENBQXNDLFVBQUNrQixPQUFELEVBQVNDLFFBQVQ7QUFBQTtBQUFBO0FBQXFCO0FBQzdFLHlGQUFDLFdBQUQ7QUFBYSwrQkFBUyxFQUFFL0UsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWVoRixRQUF2QztBQUFBLDhDQUNHO0FBQUEsa0NBQUltQixRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZSxPQUFmLEVBQXdCaUIsT0FBeEIsRUFBaUMsS0FBakM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURILGVBRUcscUVBQUMsb0RBQUQ7QUFBUSxnQ0FBUSxFQUFFO0FBQUEsaUNBQUlwRCxZQUFZLENBQUNtQyxJQUFELEVBQU0sRUFBTixFQUFTaUIsT0FBVCxDQUFoQjtBQUFBLHlCQUFsQjtBQUFxRCxtQ0FBVyxFQUFFLElBQWxFO0FBQXdFLHFDQUFhLEVBQUUsSUFBdkY7QUFBNkYsK0JBQU8sRUFBRTlFLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlLE9BQWYsRUFBd0JpQixPQUF4QixFQUFpQyxPQUFqQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR3RDtBQUFBLGlCQUF0QyxDQUFsQjtBQU1ILGVBUEQsTUFPSztBQUVERCwyQkFBVyxnQkFBSSxxRUFBQyxXQUFEO0FBQWEsMkJBQVMsRUFBRTdFLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlaEYsUUFBdkM7QUFBQSx5Q0FDQyxxRUFBQywyREFBRDtBQUNJLDZCQUFTLEVBQUVtQixRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZTVFLFNBRDlCO0FBRUksd0JBQUksRUFBRSxDQUZWO0FBR0ksNEJBQVEsRUFBRSxrQkFBQ2tGLENBQUQ7QUFBQSw2QkFBS3pDLFlBQVksQ0FBQ21DLElBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUFBLHFCQUhkO0FBSUkseUJBQUssRUFBRTtBQUFDdkcsMkJBQUssRUFBQztBQUFQLHFCQUpYO0FBS0kseUJBQUssRUFBRW9DLFFBQVEsQ0FBQzZELElBQUQsQ0FBUixDQUFlbkgsS0FMMUI7QUFNSSwyQkFBTyxFQUFDLFVBTlo7QUFPSSx5QkFBSyxFQUFFc0QsUUFBUSxDQUFDNkQsSUFBRCxDQUFSLENBQWUvRSxLQVAxQjtBQVFJLDhCQUFVLEVBQUVrQixRQUFRLENBQUM2RCxJQUFELENBQVIsQ0FBZTNFO0FBUi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFmO0FBYUg7O0FBRUQscUJBQU8yRixXQUFQO0FBQ0gsYUE1QkQsQ0FWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJGO0FBQUEsd0JBeEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9HSDs7R0E5YnVCL0gsVTs7T0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uZDhjNjNiZWNmNzdkNWM2NjUyNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYUFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcCxFbWFpbCxMb2NrLE5vdGlmaWNhdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ3JvcHBlciBmcm9tICBcInJlYWN0LWltYWdlLWNyb3BcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuXHJcbmNvbnN0IEV4dGVyaW9yID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG5sZWZ0OjUwJTtcclxudG9wOiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjE1MHB4XCIgOiBcIjcwcHhcIn07O1xyXG5tYXgtd2lkdGg6NjAwcHg7XHJcbndpZHRoOjkwJTtcclxuaGVpZ2h0OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjM1MHB4XCIgOiBcIjU4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnotaW5kZXg6MTAwMDtcclxub3ZlcmZsb3c6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwidmlzaWJsZVwiIDogXCJhdXRvXCJ9OztcclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbGRlcmZvcnVwaWNvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnRvcDotNDVweDtcclxubGVmdDokeyh7c2xpcHZhbHVlfSk9PntcclxuICAgIGlmKHNsaXB2YWx1ZSA9PSAxKXtcclxuICAgICAgICByZXR1cm4gXCI1NXB4XCJcclxuICAgIH1lbHNlIGlmKHNsaXB2YWx1ZSA9PSAyKXtcclxuICAgICAgICByZXR1cm4gXCIyNTBweFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCI0NDBweFwiXHJcbiAgICB9XHJcbn19O1xyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IFxyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTYwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5sZWZ0OjMwcHg7XHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7ZGlzcGxheWVkfSk9PiBkaXNwbGF5ZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nLXRvcDokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiMTBweFwiIDogXCI4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2ZvcmVkaXR9KT0+aXNmb3JlZGl0ID8gXCIjZTllY2VmXCIgOiBcIndoaXRlXCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4OyBcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYm9yZGVyLXJhZGl1czoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG4vL3NlbGVjdGlvbiBiYXIgZm9yIGVkaXRpbmdcclxuY29uc3QgU2VsZWN0aW9uYmFyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5oZWlnaHQ6MzBweDtcclxubWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5gXHJcblxyXG5jb25zdCBDaGlsZHNvZnNlbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lubmVyY29sb3J9KT0+aW5uZXJjb2xvciA/IFwiIzdkZTJkMVwiIDogXCIjZmYwYTU0XCJ9O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbndpZHRoOjM4cHg7XHJcbmhlaWdodDozOHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjE4cztcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG59XHJcbmBcclxuXHJcbi8vZW1haWwscGFzc3dvcmQsbm90aWZpY2F0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe2lzV2luZG93Zm9yc2V0dGluZ3MsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG11c2VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiQWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuUGVyc29uYWx0ZXh0LFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWUsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgbGFiZWw6XCJFLVBvc3RhXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiRS1wb3N0YW5pIGRlZ2lzdGlybWVrIGlzdGVyc2VuLCB5ZW5pIGdpcmRpZ2luIGFkcmVzZSBiaXIga29kIGdvbmRlcmlsaWNlayBsdXRmZW4gb251IGdpci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ3VycmVudHBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBTaWZyZW5pelwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgVmFsaWRhdGlvbnBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBzaWZyZW5pemkgdGVrcmFyIGdpcmluXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LCBcclxuICAgICAgICBOZXdwYXNzd29yZDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlllbmkgc2lmcmVcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTm90aWZpY2F0aW9uczp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgICAgICBXaGVuZm9sbG93OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIHNlbmkgdGFraXAgZXR0aWdpbmRlIGJpbGRpcmltIGFsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBXaGVubGlrZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSBzZW5pbiBpY2VyaWdpbmkgYmVnZW5kaWdpbmRlIGJpbGRpcmltIGFsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBXaGVuY29tbWVudDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSBpY2VyaWdpbmUgeW9ydW0geWFwdGlnaW5kYSBiaWxkaXJpbSBhbFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25jaGlsZHMsc2V0c2VsZWN0aW9uY2hpbGRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBFbWFpbDp0cnVlLFxyXG4gICAgICAgIFBhc3N3b3JkOmZhbHNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbjpmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZCxzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29weSA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29weVtrZXldLmFjdGl2YXRlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Zm9yc2V0dGluZ3Mpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09IDEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGVjdGVkID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJDdXJyZW50cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJWYWxpZGF0aW9ucGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7Ly9zZWxlY3RlZCAzXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIk5vdGlmaWNhdGlvbnNcIl0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihrZXkgPT0gXCJtdXNlcm5hbWVcIiB8fCBrZXkgPT0gXCJwZXJzb25hbHRleHRcIiB8fCBrZXkgPT0gXCJmaXJzdG5hbWVcIiB8fCBrZXkgPT0gXCJzdXJuYW1lXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG5cclxuICAgIH0sW2FjdGl2ZSxzZWxlY3RlZF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoc3JjLkJhY2tpbWFnZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXl5b1wiKVxyXG4gICAgICAgICAgICBjb25zdCBiYWNraW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCYWNraW1nXCIpXHJcbiAgICAgICAgICAgIGJhY2tpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0aW1hZ2UoYmFja2ltZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhY2tpbWcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9ICAgIFxyXG5cclxuICAgIH0sW3NyY10pXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IFRvQ2FudmFzID0gYXN5bmMgKCk9PntcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9wbmdcIilcclxuXHJcbiAgICAgICAgc2V0cmVzdWx0KChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW2ltYWdldHlwZV06e3NyYzpiYXNlNjRJbWFnZSxjcm9wdmFsdWVzOnt4OmNyb3AueCx5OmNyb3AueSx3aWR0aDpjcm9wLndpZHRoLGhlaWdodDpjcm9wLmhlaWdodH19fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSW5wdXRoYW5kbGVyID0gKGtleSxldmVudCxzdWJrZXkpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgaWYoa2V5ID09IFwiTm90aWZpY2F0aW9uc1wiKXtcclxuICAgICAgICAgICAgbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdPSAhbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXNlcmluZm8obXV0YXRlZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVmaWxlID0gKGV2ZW50LHR5cGUpPT57XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJCYWNraW1hZ2VcIil7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzE2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDo1MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0aW1hZ2V0eXBlKHR5cGUpXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIHNldHNyYygocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRmaWxlKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOmV2ZW50LnRhcmdldC5maWxlc1swXX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlY3JvcCA9IChuZXdjcm9wKT0+e1xyXG4gICAgICAgIC8vYnVyYXlhIGJha1xyXG4gICAgICAgIGlmKGNyb3AuYXNwZWN0ID4gMSl7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueSx4Om5ld2Nyb3AueH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JvcClcclxuXHJcbiAgICAgICAgLy92YWx1ZSBvZiBjcm9wcGVyIHdpZHRoIGhlaWdodCB4IGFuZCB5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VuZHVwZGF0ZXMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJpbmZvKXtcclxuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1c2VyaW5mb1trZXldLnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZXMuYmFja2Nyb3AgPSByZXN1bHQuQmFja2ltYWdlLmNyb3B2YWx1ZXNcclxuICAgICAgICB2YWx1ZXMucHJvZmlsZSAgPSByZXN1bHQuUHJvZmlsZWltYWdlLmNyb3B2YWx1ZXNcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGE9bmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGUuQmFja2ltYWdlICE9PSBcIlwiICYmIGZpbGUuUHJvZmlsZWltYWdlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuQmFja2ltYWdlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkMlwiLGZpbGUuUHJvZmlsZWltYWdlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGVbaW1hZ2V0eXBlXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlByb2ZpbGV2YWx1ZXNcIixKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKVxyXG4gICAgICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIC8vbW92ZSB0aGlzIHRvIGFwaSBmaWxlXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvdXBkYXRlcHJvZmlsZWAsZm9ybURhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgIFxyXG4gICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGxlcj0oa2V5bmFtZSxpbmRleCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnNlbGVjdGlvbmNoaWxkc31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KSB7XHJcbiAgICAgICAgICAgY29weVtrZXldID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29weVtrZXluYW1lXSA9IHRydWVcclxuICAgICAgICBzZXRzZWxlY3RlZChpbmRleCsxKVxyXG4gICAgICAgIHNldHNlbGVjdGlvbmNoaWxkcyhjb3B5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25jcmVhdGVyID0oa2V5bmFtZSk9PntcclxuICAgICAgICBpZihrZXluYW1lID09IFwiRW1haWxcIilcclxuICAgICAgICByZXR1cm4gPEVtYWlsPjwvRW1haWw+XHJcbiAgICAgICAgaWYoa2V5bmFtZSA9PSBcIlBhc3N3b3JkXCIpXHJcbiAgICAgICAgcmV0dXJuIDxMb2NrPjwvTG9jaz5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiTm90aWZpY2F0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIDxOb3RpZmljYXRpb25zPjwvTm90aWZpY2F0aW9ucz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIkJhY2tpbWdcIiBzcmM9e3NyY1tcIkJhY2tpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJQcm9maWxlaW1nXCIgc3JjPXtzcmNbXCJQcm9maWxlaW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dpbmRvd2ZvcnNldHRpbmdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8U2VsZWN0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmNoaWxkcykubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDaGlsZHNvZnNlbGVjdGlvbiBpbm5lcmNvbG9yPXtzZWxlY3Rpb25jaGlsZHNbaXRlbV19IHN0eWxlPXt7Y29sb3I6c2VsZWN0aW9uY2hpbGRzW2l0ZW1dID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifX0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRsZXIoaXRlbSxpbmRleCl9PntJY29uY3JlYXRlcihpdGVtKX08L0NoaWxkc29mc2VsZWN0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJhcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjcm9wcGVyYWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyICBvbkltYWdlTG9hZGVkPXsoaW1nKT0+c2V0aW1hZ2UoaW1nKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19ICBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNXaW5kb3dmb3JzZXR0aW5ncyAmJiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtzcmMuQmFja2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgcHJvZmlsZT17c3JjLlByb2ZpbGVpbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMjI1cHhcIixyaWdodDpcIjEwcHhcIix6SW5kZXg6XCIzMDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+U2VuZHVwZGF0ZXMoKX0gc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPktheWRldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uIGlzZm9yZWRpdD17aXNXaW5kb3dmb3JzZXR0aW5nc30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1dpbmRvd2ZvcnNldHRpbmdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uIHNsaXB2YWx1ZT17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwIHN0eWxlPXt7Zm9udFNpemU6XCI4MHB4XCIsY29sb3I6XCIjZTllY2VmXCJ9fT48L0Fycm93RHJvcFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ib2xkZXJmb3J1cGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PnsgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmVsZW1lbnRzID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB1c2VyaW5mb1tpdGVtXS52YWx1ZSAhPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJlbGVtZW50cyA9IE9iamVjdC5rZXlzKHVzZXJpbmZvW2l0ZW1dLnZhbHVlKS5tYXAoKHN1Yml0ZW0sc3ViaW5kZXgpPT4oLy9zdWIgdmFsdWVzIG9mIG5vaXRpZmljYXRpb24gcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyaW5mb1tpdGVtXVtcInZhbHVlXCJdW3N1Yml0ZW1dW1wibXNnXCJdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBvbkNoYW5nZT17KCk9PklucHV0aGFuZGxlcihpdGVtLFwiXCIsc3ViaXRlbSl9IGNoZWNrZWRJY29uPXt0cnVlfSB1bmNoZWNrZWRJY29uPXt0cnVlfSBjaGVja2VkPXt1c2VyaW5mb1tpdGVtXVtcInZhbHVlXCJdW3N1Yml0ZW1dW1widmFsdWVcIl19PjwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPikpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViZWxlbWVudHMgPSAoPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3VzZXJpbmZvW2l0ZW1dLm1zZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=