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
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Api/Api */ "./Api/Api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\bexsd\\Desktop\\nextproject\\client\\components\\pages\\Profile\\Editwindow.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Exterior = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Exterior",
  componentId: "sc-9h7al1-0"
})(["display:", ";position:absolute;transform:translateX(-50%);left:50%;top:", ";;max-width:600px;width:90%;height:", ";background-color:white;border-radius:10px;z-index:1000;"], function (_ref) {
  var active = _ref.active;
  return active ? "block" : "none";
}, function (_ref2) {
  var getcropper = _ref2.getcropper;
  return getcropper ? "150px" : "70px";
}, function (_ref3) {
  var getcropper = _ref3.getcropper;
  return getcropper ? "350px" : "580px";
});
_c = Exterior;
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Inner",
  componentId: "sc-9h7al1-1"
})(["position:relative;padding:10px;overflow:auto;height:580px;"]);
_c2 = Inner;
var Background = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-2"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], function (_ref4) {
  var ImageforBack = _ref4.ImageforBack;
  return ImageforBack;
});
_c3 = Background;
var ProfileImageholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__ProfileImageholder",
  componentId: "sc-9h7al1-3"
})(["position:absolute;top:160px;opacity:0.8;left:30px;z-index:1;transition:0.4s;&:hover{opacity:1;}"]);
_c4 = ProfileImageholder;
var Inputholder = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Inputholder",
  componentId: "sc-9h7al1-4"
})(["display:", ";margin-top:20px;"], function (_ref5) {
  var displayed = _ref5.displayed;
  return displayed ? "block" : "none";
});
_c5 = Inputholder;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-5"
})(["position:relative;padding-top:", ";background-color:", ";padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], function (_ref6) {
  var isforedit = _ref6.isforedit;
  return isforedit ? "10px" : "80px";
}, function (_ref7) {
  var isforedit = _ref7.isforedit;
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
})(["position:relative;top:", ";background-color:", ";display:flex;align-items:center;justify-content:center;border-radius:50%;width:38px;height:38px;cursor:pointer;transition-duration:0.18s;padding:5px;"], function (_ref8) {
  var innercolor = _ref8.innercolor;
  return innercolor ? "10px" : "0";
}, function (_ref9) {
  var innercolor = _ref9.innercolor;
  return innercolor ? "#7de2d1" : "#ff0a54";
});
_c9 = Childsofselection;
var Holderforupicon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Holderforupicon",
  componentId: "sc-9h7al1-9"
})(["position:absolute;transition-duration:0.3s;top:-45px;left:", ";"], function (_ref10) {
  var slipvalue = _ref10.slipvalue;

  if (slipvalue == 1) {
    return "55px";
  } else if (slipvalue == 2) {
    return "250px";
  } else {
    return "440px";
  }
});
_c10 = Holderforupicon;
var ProfileuploadedDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__ProfileuploadedDiv",
  componentId: "sc-9h7al1-10"
})(["position:fixed;transition-duration:0.5s;top:500px;opacity:", ";left:", ";padding:10px;border-radius:10px;z-index:1000;background-color:#403d58;color:white;box-shadow:rgba(14,30,37,0.12) 0px 2px 4px 0px,rgba(14,30,37,0.32) 0px 2px 16px 0px;"], function (_ref11) {
  var successful = _ref11.successful;
  return successful ? "1" : "0";
}, function (_ref12) {
  var successful = _ref12.successful;
  return successful ? "20px" : "5px";
}); //email,password,notification

_c11 = ProfileuploadedDiv;
function Editwindow(_ref13) {
  _s();

  var _this = this;

  var isWindowforsettings = _ref13.isWindowforsettings,
      updatefunc = _ref13.updatefunc,
      active = _ref13.active,
      editdata = _ref13.editdata,
      closefunc = _ref13.closefunc;
  console.log(editdata);
  console.log(editdata.backgroundurl);

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
    Profileimage: {
      token: editdata.imagetoken,
      name: editdata.imageurl
    },
    Backimage: {
      token: editdata.backgroundtoken,
      name: editdata.backgroundurl
    }
  }),
      src = _useState3[0],
      setsrc = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      uploading = _useState4[0],
      setuploading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      succesfulupload = _useState5[0],
      setsuccesfulupload = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      imagetype = _useState6[0],
      setimagetype = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      image = _useState7[0],
      setimage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
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
      result = _useState8[0],
      setresult = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      iscropperactive = _useState9[0],
      setcropperactive = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    musername: {
      activate: false,
      value: "sa",
      label: "Kullanici Adi",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    firstname: {
      activate: false,
      value: editdata.firstname,
      label: "Ad",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    surname: {
      activate: false,
      value: editdata.lastname,
      label: "Soyad",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: ""
    },
    personaltext: {
      activate: false,
      value: "sa",
      label: "Kisisel Bilgiler",
      warning: false,
      multiline: true,
      msg: "",
      errormsg: ""
    },
    email: {
      activate: false,
      value: editdata.email,
      label: "E-Posta",
      warning: false,
      multiline: false,
      msg: "E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir.",
      errormsg: "Gecerli Bir E-posta adresi girin !"
    },
    Currentpassword: {
      activate: false,
      value: "",
      label: "Eski Sifreniz",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Eski sifreni yanlis girdin galiba, tekrar dene !"
    },
    Newpassword: {
      activate: false,
      value: "",
      label: "Yeni sifrenizi girin",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Make sure that your password has at least 6 length and contains one upper, one lower character and one number."
    },
    ValidationNewpassword: {
      activate: false,
      value: "",
      label: "Yeni sifrenizi tekrar girin",
      warning: false,
      multiline: false,
      msg: "",
      errormsg: "Girdiginiz sifreler ayni degil"
    },
    Notifications: {
      activate: false,
      value: {
        Whenfollow: {
          value: editdata.Notification.Whenfollow,
          msg: "Biri takip ettiginde"
        },
        Whenlike: {
          value: editdata.Notification.Whenlike,
          msg: "Biri icerik begendiginde"
        },
        Whencomment: {
          value: editdata.Notification.Whencomment,
          msg: "Biri yorum yaptiginda"
        }
      },
      label: "",
      warning: false,
      multiline: false,
      msg: ""
    }
  }),
      userinfo = _useState10[0],
      setuserinfo = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Email: true,
    Password: false,
    Notification: false
  }),
      selectionchilds = _useState11[0],
      setselectionchilds = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      selected = _useState12[0],
      setselected = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var copy = _objectSpread({}, userinfo);

    for (var key in copy) {
      copy[key].activate = false;
      copy[key].warning = false;
      console.log(copy[key].activate);
    }

    if (isWindowforsettings) {
      if (selected == 1) {
        copy["email"].activate = true;
      } else if (selected == 2) {
        copy["Currentpassword"].activate = true;
        copy["Newpassword"].activate = true;
        copy["ValidationNewpassword"].activate = true;
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

  var Inputerrorhandler = function Inputerrorhandler(type, value) {
    switch (type) {
      case "username":
        break;

      case "firstname":
        break;

      case "email":
        return validator__WEBPACK_IMPORTED_MODULE_14___default.a.isEmail(value);

      case "password":
        console.log(value.New);
        console.log(value.Newvalidation);
        if (value.New !== value.Newvalidation) return {
          state: "Unequal",
          validate: false
        };
        if (!validator__WEBPACK_IMPORTED_MODULE_14___default.a.isStrongPassword(value.New, {
          minSymbols: 0,
          minNumbers: 1,
          minLowercase: 1,
          minUppercase: 1,
          minLength: 6
        })) return {
          state: "Strong",
          validate: false
        };
        return {
          state: "Success",
          validate: true
        };
      //newpassword character checking

      default:
        break;
    }
  };

  var ToCanvas = /*#__PURE__*/function () {
    var _ref14 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      return _ref14.apply(this, arguments);
    };
  }();

  var Inputhandler = function Inputhandler(key, event, subkey) {
    var mutated = _objectSpread({}, userinfo);

    if (key == "Notifications") {
      mutated[key]["value"][subkey]["value"] = !mutated[key]["value"][subkey]["value"];
    } else {
      mutated[key].value = event.target.value;
      mutated[key].warning = false;
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
    var _ref15 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(typeofupdate) {
      var values, copy, updateFor, key, _Inputerrorhandler, state, validate, formData;

      return C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              values = {};
              copy = _objectSpread({}, userinfo);
              updateFor = "";

              if (isWindowforsettings) {
                _context2.next = 18;
                break;
              }

              console.log("IN UPDATE");
              updateFor = "Profile";
              values.backcrop = result.Backimage.cropvalues;
              values.profile = result.Profileimage.cropvalues;
              _context2.t0 = C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.keys(userinfo);

            case 9:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 16;
                break;
              }

              key = _context2.t1.value;

              if (!(key == "email")) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("break", 16);

            case 13:
              values[key] = userinfo[key].value;
              _context2.next = 9;
              break;

            case 16:
              _context2.next = 40;
              break;

            case 18:
              if (!(typeofupdate == 1)) {
                _context2.next = 27;
                break;
              }

              updateFor = "Email";

              if (Inputerrorhandler("email", userinfo["email"].value)) {
                _context2.next = 24;
                break;
              }

              copy["email"].warning = true;
              copy["email"].msg = "Gecerli Bir E-posta adresi girin !";
              return _context2.abrupt("return", setuserinfo(copy));

            case 24:
              values["email"] = userinfo["email"].value;
              _context2.next = 40;
              break;

            case 27:
              if (!(typeofupdate == 2)) {
                _context2.next = 38;
                break;
              }

              updateFor = "Password";
              _Inputerrorhandler = Inputerrorhandler("password", {
                Current: userinfo["Currentpassword"].value,
                New: userinfo["Newpassword"].value,
                Newvalidation: userinfo["ValidationNewpassword"].value
              }), state = _Inputerrorhandler.state, validate = _Inputerrorhandler.validate;

              if (validate) {
                _context2.next = 33;
                break;
              }

              if (state == "Unequal") {
                copy["ValidationNewpassword"].warning = true;
              } else {
                copy["Newpassword"].warning = true;
              }

              return _context2.abrupt("return", setuserinfo(copy));

            case 33:
              values["Currentpassword"] = userinfo["Currentpassword"].value;
              values["Newpassword"] = userinfo["Newpassword"].value;
              values["NewValidation"] = userinfo["ValidationNewpassword"].value;
              _context2.next = 40;
              break;

            case 38:
              updateFor = "Notification";
              values["Notifications"] = userinfo["Notifications"]["value"];

            case 40:
              formData = new FormData();

              if (file.Backimage !== "" && file.Profileimage !== "") {
                formData.append("upload", file.Backimage);
                formData.append("upload2", file.Profileimage);
              } else {
                formData.append("upload", file[imagetype]);
              }

              formData.append("Profilevalues", JSON.stringify(values));
              setuploading(true);
              Object(_Api_Api__WEBPACK_IMPORTED_MODULE_11__["UpdateProfile"])({
                userdata: formData,
                typeofupdate: updateFor,
                setuploading: setuploading,
                setsuccesfulupload: setsuccesfulupload
              });

            case 45:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function Sendupdates(_x) {
      return _ref15.apply(this, arguments);
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
      lineNumber: 577,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 586,
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
      lineNumber: 587,
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
      lineNumber: 588,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileuploadedDiv, {
          successful: succesfulupload == "SUCCESSFUL" ? true : false,
          children: "Profil Basariyla Guncellendi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            top: isWindowforsettings ? "500px" : "250px",
            right: "40px",
            zIndex: "300"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: function onClick() {
              return Sendupdates(selected);
            },
            style: {
              textTransform: "capitalize",
              borderRadius: "25px"
            },
            color: "secondary",
            variant: "contained",
            children: [uploading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
              style: {
                marginRight: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 46
            }, this) : null, "Kaydet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 21
        }, this), isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
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
              lineNumber: 605,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 602,
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
            lineNumber: 615,
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
              lineNumber: 617,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 616,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforsettings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage.token ? "https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/".concat(src.Backimage.name, "?alt=media&token=").concat(src.Backimage.token) : "/yaprak.jpg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 628,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 629,
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
                lineNumber: 630,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
              isHavingprofile: src.Profileimage.token ? "https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/".concat(src.Profileimage.name, "?alt=media&token=").concat(src.Profileimage.token) : "/yaprak.jpg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Porfileimage"], {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                width: "80px",
                height: "80px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                  htmlFor: "file2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 634,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 635,
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
                  lineNumber: 636,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 633,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 632,
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
                lineNumber: 649,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 648,
              columnNumber: 41
            }, this), Object.keys(userinfo).map(function (item, index) {
              var subelements = null;

              if (typeof userinfo[item].value == "object") {
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
                          lineNumber: 662,
                          columnNumber: 61
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
                          lineNumber: 663,
                          columnNumber: 61
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 661,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 660,
                      columnNumber: 53
                    }, _this)
                  );
                });
              } else {
                subelements = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                  displayed: userinfo[item].activate,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                    error: userinfo[item].warning,
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
                    helperText: !userinfo[item].warning ? userinfo[item].msg : userinfo[item].errormsg
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 670,
                    columnNumber: 65
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 669,
                  columnNumber: 64
                }, _this);
              }

              return subelements;
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 644,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 585,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "LxjgY+3JvYiYl0oXaDTNLZtgl6s=");

_c12 = Editwindow;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

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
$RefreshReg$(_c11, "ProfileuploadedDiv");
$RefreshReg$(_c12, "Editwindow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkhvbGRlcmZvcnVwaWNvbiIsInNsaXB2YWx1ZSIsIlByb2ZpbGV1cGxvYWRlZERpdiIsInN1Y2Nlc3NmdWwiLCJFZGl0d2luZG93IiwiaXNXaW5kb3dmb3JzZXR0aW5ncyIsInVwZGF0ZWZ1bmMiLCJlZGl0ZGF0YSIsImNsb3NlZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kdXJsIiwidXNlU3RhdGUiLCJCYWNraW1hZ2UiLCJQcm9maWxlaW1hZ2UiLCJmaWxlIiwic2V0ZmlsZSIsImFzcGVjdCIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjcm9wIiwic2V0Y3JvcCIsInRva2VuIiwiaW1hZ2V0b2tlbiIsIm5hbWUiLCJpbWFnZXVybCIsImJhY2tncm91bmR0b2tlbiIsInNyYyIsInNldHNyYyIsInVwbG9hZGluZyIsInNldHVwbG9hZGluZyIsInN1Y2Nlc2Z1bHVwbG9hZCIsInNldHN1Y2Nlc2Z1bHVwbG9hZCIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJjcm9wdmFsdWVzIiwicmVzdWx0Iiwic2V0cmVzdWx0IiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ3YXJuaW5nIiwibXVsdGlsaW5lIiwibXNnIiwiZXJyb3Jtc2ciLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJlbWFpbCIsIkN1cnJlbnRwYXNzd29yZCIsIk5ld3Bhc3N3b3JkIiwiVmFsaWRhdGlvbk5ld3Bhc3N3b3JkIiwiTm90aWZpY2F0aW9ucyIsIldoZW5mb2xsb3ciLCJOb3RpZmljYXRpb24iLCJXaGVubGlrZSIsIldoZW5jb21tZW50IiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsIkVtYWlsIiwiUGFzc3dvcmQiLCJzZWxlY3Rpb25jaGlsZHMiLCJzZXRzZWxlY3Rpb25jaGlsZHMiLCJzZWxlY3RlZCIsInNldHNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29weSIsImtleSIsIklucHV0ZXJyb3JoYW5kbGVyIiwidHlwZSIsIlZhbGlkYXRlIiwiaXNFbWFpbCIsIk5ldyIsIk5ld3ZhbGlkYXRpb24iLCJzdGF0ZSIsInZhbGlkYXRlIiwiaXNTdHJvbmdQYXNzd29yZCIsIm1pblN5bWJvbHMiLCJtaW5OdW1iZXJzIiwibWluTG93ZXJjYXNlIiwibWluVXBwZXJjYXNlIiwibWluTGVuZ3RoIiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImV2ZW50Iiwic3Via2V5IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidHlwZW9mdXBkYXRlIiwidmFsdWVzIiwidXBkYXRlRm9yIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiQ3VycmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiVXBkYXRlUHJvZmlsZSIsInVzZXJkYXRhIiwiU2VsZWN0aW9uaGFuZGxlciIsImtleW5hbWUiLCJpbmRleCIsIkljb25jcmVhdGVyIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInN1YmVsZW1lbnRzIiwic3ViaXRlbSIsInN1YmluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUxBQ0o7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFZQSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQUEsQ0FESSxFQUtSO0FBQUEsTUFBRUMsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxPQUFILEdBQWEsTUFBdkM7QUFBQSxDQUxRLEVBUUw7QUFBQSxNQUFFQSxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxPQUF2QztBQUFBLENBUkssQ0FBZDtLQUFNSixRO0FBY04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFYO01BQU1HLEs7QUFNTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENB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O0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStHSDs7R0F2aUJ1QnhKLFU7O09BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjAyMGE1ZWUyZWY5MjM2NjE2NDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcCxFbWFpbCxMb2NrLE5vdGlmaWNhdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZSxTcGlubmVyfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtVcGRhdGVQcm9maWxlfSBmcm9tIFwiLi4vLi4vLi4vQXBpL0FwaVwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuaW1wb3J0IFZhbGlkYXRlIGZyb20gXCJ2YWxpZGF0b3JcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5cclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbm92ZXJmbG93OmF1dG87XHJcbmhlaWdodDo1ODBweDtcclxuYFxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IFxyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxuei1pbmRleDoxO1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiI2U5ZWNlZlwiIDogXCJ3aGl0ZVwifTtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG4vL3NlbGVjdGlvbiBiYXIgZm9yIGVkaXRpbmdcclxuY29uc3QgU2VsZWN0aW9uYmFyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5oZWlnaHQ6MzBweDtcclxubWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5gXHJcblxyXG5jb25zdCBDaGlsZHNvZnNlbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG50b3A6JHsoe2lubmVyY29sb3J9KT0+aW5uZXJjb2xvciA/IFwiMTBweFwiIDogXCIwXCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpbm5lcmNvbG9yfSk9PmlubmVyY29sb3IgPyBcIiM3ZGUyZDFcIiA6IFwiI2ZmMGE1NFwifTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG53aWR0aDozOHB4O1xyXG5oZWlnaHQ6MzhweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4xOHM7XHJcbnBhZGRpbmc6NXB4O1xyXG5gXHJcblxyXG5jb25zdCBIb2xkZXJmb3J1cGljb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzO1xyXG50b3A6LTQ1cHg7XHJcbmxlZnQ6JHsoe3NsaXB2YWx1ZX0pPT57XHJcbiAgICBpZihzbGlwdmFsdWUgPT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIFwiNTVweFwiXHJcbiAgICB9ZWxzZSBpZihzbGlwdmFsdWUgPT0gMil7XHJcbiAgICAgICAgcmV0dXJuIFwiMjUwcHhcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiNDQwcHhcIlxyXG4gICAgfVxyXG59fTtcclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZXVwbG9hZGVkRGl2ID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246Zml4ZWQ7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxudG9wOjUwMHB4O1xyXG5vcGFjaXR5OiR7KHtzdWNjZXNzZnVsfSk9PiBzdWNjZXNzZnVsID8gXCIxXCIgOiBcIjBcIn07XHJcbmxlZnQ6JHsoe3N1Y2Nlc3NmdWx9KT0+IHN1Y2Nlc3NmdWwgPyBcIjIwcHhcIiA6IFwiNXB4XCJ9O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM0MDNkNTg7XHJcbmNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xyXG5gXHJcblxyXG5cclxuLy9lbWFpbCxwYXNzd29yZCxub3RpZmljYXRpb25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe2lzV2luZG93Zm9yc2V0dGluZ3MsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhlZGl0ZGF0YS5iYWNrZ3JvdW5kdXJsKVxyXG4gICAgY29uc3QgW2ZpbGUsc2V0ZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbY3JvcCxzZXRjcm9wXSA9IHVzZVN0YXRlKHthc3BlY3Q6MTYvMTYsaGVpZ2h0OjIwMCx3aWR0aDoxMDAseDo1MCx5OjUwfSlcclxuICAgIGNvbnN0IFtzcmMsc2V0c3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICB0b2tlbjplZGl0ZGF0YS5pbWFnZXRva2VuLFxyXG4gICAgICAgICAgICBuYW1lOmVkaXRkYXRhLmltYWdldXJsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICB0b2tlbjplZGl0ZGF0YS5iYWNrZ3JvdW5kdG9rZW4sXHJcbiAgICAgICAgICAgIG5hbWU6ZWRpdGRhdGEuYmFja2dyb3VuZHVybFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbdXBsb2FkaW5nLHNldHVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdWNjZXNmdWx1cGxvYWQsc2V0c3VjY2VzZnVsdXBsb2FkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbXVzZXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwic2FcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiQWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJzYVwiLFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWUsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgbGFiZWw6XCJFLVBvc3RhXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiRS1wb3N0YW5pIGRlZ2lzdGlybWVrIGlzdGVyc2VuLCB5ZW5pIGdpcmRpZ2luIGFkcmVzZSBiaXIga29kIGdvbmRlcmlsaWNlayBsdXRmZW4gb251IGdpci5cIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJHZWNlcmxpIEJpciBFLXBvc3RhIGFkcmVzaSBnaXJpbiAhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIEN1cnJlbnRwYXNzd29yZDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkVza2kgU2lmcmVuaXpcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJFc2tpIHNpZnJlbmkgeWFubGlzIGdpcmRpbiBnYWxpYmEsIHRla3JhciBkZW5lICFcIlxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIE5ld3Bhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiWWVuaSBzaWZyZW5pemkgZ2lyaW5cIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJNYWtlIHN1cmUgdGhhdCB5b3VyIHBhc3N3b3JkIGhhcyBhdCBsZWFzdCA2IGxlbmd0aCBhbmQgY29udGFpbnMgb25lIHVwcGVyLCBvbmUgbG93ZXIgY2hhcmFjdGVyIGFuZCBvbmUgbnVtYmVyLlwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgVmFsaWRhdGlvbk5ld3Bhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiWWVuaSBzaWZyZW5pemkgdGVrcmFyIGdpcmluXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiR2lyZGlnaW5peiBzaWZyZWxlciBheW5pIGRlZ2lsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbnM6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICAgICAgV2hlbmZvbGxvdzp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuTm90aWZpY2F0aW9uLldoZW5mb2xsb3csXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSB0YWtpcCBldHRpZ2luZGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFdoZW5saWtlOntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5Ob3RpZmljYXRpb24uV2hlbmxpa2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSBpY2VyaWsgYmVnZW5kaWdpbmRlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBXaGVuY29tbWVudDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuTm90aWZpY2F0aW9uLldoZW5jb21tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZzpcIkJpcmkgeW9ydW0geWFwdGlnaW5kYVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25jaGlsZHMsc2V0c2VsZWN0aW9uY2hpbGRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBFbWFpbDp0cnVlLFxyXG4gICAgICAgIFBhc3N3b3JkOmZhbHNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbjpmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZCxzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29weSA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY29weVtrZXldLndhcm5pbmcgID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvcHlba2V5XS5hY3RpdmF0ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBpZihpc1dpbmRvd2ZvcnNldHRpbmdzKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZCA9PSAxKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcImVtYWlsXCJdLmFjdGl2YXRlID0gdHJ1ZSBcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxlY3RlZCA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiQ3VycmVudHBhc3N3b3JkXCJdLmFjdGl2YXRlID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiTmV3cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJWYWxpZGF0aW9uTmV3cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNley8vc2VsZWN0ZWQgM1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOb3RpZmljYXRpb25zXCJdLmFjdGl2YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PSBcIm11c2VybmFtZVwiIHx8IGtleSA9PSBcInBlcnNvbmFsdGV4dFwiIHx8IGtleSA9PSBcImZpcnN0bmFtZVwiIHx8IGtleSA9PSBcInN1cm5hbWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9LFthY3RpdmUsc2VsZWN0ZWRdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihzcmMuQmFja2ltYWdlICE9PSBcIlwiKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleXlvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JhY2tpbWdcIilcclxuICAgICAgICAgICAgYmFja2ltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZShiYWNraW1nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFja2ltZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH0gICAgXHJcblxyXG4gICAgfSxbc3JjXSlcclxuICAgICovXHJcbiAgICBjb25zdCBJbnB1dGVycm9yaGFuZGxlciA9ICh0eXBlLHZhbHVlKT0+e1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcm5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmlyc3RuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGUuaXNFbWFpbCh2YWx1ZSlcclxuICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5OZXcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5OZXd2YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUuTmV3ICE9PSB2YWx1ZS5OZXd2YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTpcIlVuZXF1YWxcIix2YWxpZGF0ZTpmYWxzZX1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighVmFsaWRhdGUuaXNTdHJvbmdQYXNzd29yZCh2YWx1ZS5OZXcse21pblN5bWJvbHM6MCxtaW5OdW1iZXJzOjEsbWluTG93ZXJjYXNlOjEsbWluVXBwZXJjYXNlOjEsbWluTGVuZ3RoOjZ9KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdGU6XCJTdHJvbmdcIix2YWxpZGF0ZTpmYWxzZX07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTpcIlN1Y2Nlc3NcIix2YWxpZGF0ZTp0cnVlfVxyXG4gICAgICAgICAgICAgICAgLy9uZXdwYXNzd29yZCBjaGFyYWN0ZXIgY2hlY2tpbmdcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodFxyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gY2FudmFzLnRvRGF0YVVSTChcImltZ2UvcG5nXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQsc3Via2V5KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIGlmKGtleSA9PSBcIk5vdGlmaWNhdGlvbnNcIil7XHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XVtcInZhbHVlXCJdW3N1YmtleV1bXCJ2YWx1ZVwiXT0gIW11dGF0ZWRba2V5XVtcInZhbHVlXCJdW3N1YmtleV1bXCJ2YWx1ZVwiXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtdXRhdGVkW2tleV0udmFsdWU9ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XS53YXJuaW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWNyb3AgPSAobmV3Y3JvcCk9PntcclxuICAgICAgICAvL2J1cmF5YSBiYWtcclxuICAgICAgICBpZihjcm9wLmFzcGVjdCA+IDEpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnkseDpuZXdjcm9wLnh9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyb3ApXHJcblxyXG4gICAgICAgIC8vdmFsdWUgb2YgY3JvcHBlciB3aWR0aCBoZWlnaHQgeCBhbmQgeVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbmR1cGRhdGVzID0gYXN5bmMgKHR5cGVvZnVwZGF0ZSk9PntcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge31cclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIHZhciB1cGRhdGVGb3IgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmKCFpc1dpbmRvd2ZvcnNldHRpbmdzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTiBVUERBVEVcIilcclxuICAgICAgICAgICAgdXBkYXRlRm9yID0gXCJQcm9maWxlXCJcclxuICAgICAgICAgICAgdmFsdWVzLmJhY2tjcm9wID0gcmVzdWx0LkJhY2tpbWFnZS5jcm9wdmFsdWVzXHJcbiAgICAgICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IFwiZW1haWxcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZih0eXBlb2Z1cGRhdGUgPT0gMSl7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVGb3IgPSBcIkVtYWlsXCJcclxuICAgICAgICAgICAgaWYoIUlucHV0ZXJyb3JoYW5kbGVyKFwiZW1haWxcIix1c2VyaW5mb1tcImVtYWlsXCJdLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0ud2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvcHlbXCJlbWFpbFwiXS5tc2cgPSBcIkdlY2VybGkgQmlyIEUtcG9zdGEgYWRyZXNpIGdpcmluICFcIlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsdWVzW1wiZW1haWxcIl0gPSB1c2VyaW5mb1tcImVtYWlsXCJdLnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKHR5cGVvZnVwZGF0ZSA9PSAyKXtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvciA9IFwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjb25zdCB7c3RhdGUsdmFsaWRhdGV9ID0gSW5wdXRlcnJvcmhhbmRsZXIoXCJwYXNzd29yZFwiLHtDdXJyZW50OnVzZXJpbmZvW1wiQ3VycmVudHBhc3N3b3JkXCJdLnZhbHVlLE5ldzp1c2VyaW5mb1tcIk5ld3Bhc3N3b3JkXCJdLnZhbHVlLE5ld3ZhbGlkYXRpb246dXNlcmluZm9bXCJWYWxpZGF0aW9uTmV3cGFzc3dvcmRcIl0udmFsdWV9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdmFsaWRhdGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlID09IFwiVW5lcXVhbFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZSAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiTmV3cGFzc3dvcmRcIl0ud2FybmluZyA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIkN1cnJlbnRwYXNzd29yZFwiXSA9IHVzZXJpbmZvW1wiQ3VycmVudHBhc3N3b3JkXCJdLnZhbHVlXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIk5ld3Bhc3N3b3JkXCJdID0gdXNlcmluZm9bXCJOZXdwYXNzd29yZFwiXS52YWx1ZVxyXG4gICAgICAgICAgICB2YWx1ZXNbXCJOZXdWYWxpZGF0aW9uXCJdID0gdXNlcmluZm9bXCJWYWxpZGF0aW9uTmV3cGFzc3dvcmRcIl0udmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVGb3IgPSBcIk5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIk5vdGlmaWNhdGlvbnNcIl0gPSB1c2VyaW5mb1tcIk5vdGlmaWNhdGlvbnNcIl1bXCJ2YWx1ZVwiXVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgc2V0dXBsb2FkaW5nKHRydWUpXHJcbiAgICAgICAgVXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgIHVzZXJkYXRhOmZvcm1EYXRhLFxyXG4gICAgICAgICAgICB0eXBlb2Z1cGRhdGU6dXBkYXRlRm9yLFxyXG4gICAgICAgICAgICBzZXR1cGxvYWRpbmc6c2V0dXBsb2FkaW5nLFxyXG4gICAgICAgICAgICBzZXRzdWNjZXNmdWx1cGxvYWQ6c2V0c3VjY2VzZnVsdXBsb2FkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbGVjdGlvbmhhbmRsZXI9KGtleW5hbWUsaW5kZXgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29weSA9IHsuLi5zZWxlY3Rpb25jaGlsZHN9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSkge1xyXG4gICAgICAgICAgIGNvcHlba2V5XSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvcHlba2V5bmFtZV0gPSB0cnVlXHJcbiAgICAgICAgc2V0c2VsZWN0ZWQoaW5kZXgrMSlcclxuICAgICAgICBzZXRzZWxlY3Rpb25jaGlsZHMoY29weSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJY29uY3JlYXRlciA9KGtleW5hbWUpPT57XHJcbiAgICAgICAgaWYoa2V5bmFtZSA9PSBcIkVtYWlsXCIpXHJcbiAgICAgICAgcmV0dXJuIDxFbWFpbD48L0VtYWlsPlxyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJQYXNzd29yZFwiKVxyXG4gICAgICAgIHJldHVybiA8TG9jaz48L0xvY2s+XHJcbiAgICAgICAgaWYoa2V5bmFtZSA9PSBcIk5vdGlmaWNhdGlvblwiKVxyXG4gICAgICAgIHJldHVybiA8Tm90aWZpY2F0aW9ucz48L05vdGlmaWNhdGlvbnM+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxhY2sgb25DbGljaz17Y2xvc2VmdW5jfSBha3RpZj17YWN0aXZlfS8+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJCYWNraW1nXCIgc3JjPXtzcmNbXCJCYWNraW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiUHJvZmlsZWltZ1wiIHNyYz17c3JjW1wiUHJvZmlsZWltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPEV4dGVyaW9yIGdldGNyb3BwZXI9e2lzY3JvcHBlcmFjdGl2ZX0gYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgPElubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxldXBsb2FkZWREaXYgc3VjY2Vzc2Z1bD17c3VjY2VzZnVsdXBsb2FkID09IFwiU1VDQ0VTU0ZVTFwiID8gdHJ1ZSA6IGZhbHNlfT5Qcm9maWwgQmFzYXJpeWxhIEd1bmNlbGxlbmRpPC9Qcm9maWxldXBsb2FkZWREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6aXNXaW5kb3dmb3JzZXR0aW5ncyA/IFwiNTAwcHhcIjpcIjI1MHB4XCIscmlnaHQ6XCI0MHB4XCIsekluZGV4OlwiMzAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+U2VuZHVwZGF0ZXMoc2VsZWN0ZWQpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkaW5nID8gKDxTcGlubmVyIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCI1cHhcIn19PjwvU3Bpbm5lcj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS2F5ZGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW5kb3dmb3JzZXR0aW5ncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPFNlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25jaGlsZHMpLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8Q2hpbGRzb2ZzZWxlY3Rpb24gaW5uZXJjb2xvcj17c2VsZWN0aW9uY2hpbGRzW2l0ZW1dfSBzdHlsZT17e2NvbG9yOnNlbGVjdGlvbmNoaWxkc1tpdGVtXSA/IFwid2hpdGVcIiA6IFwid2hpdGVcIn19IG9uQ2xpY2s9eygpPT5TZWxlY3Rpb25oYW5kbGVyKGl0ZW0saW5kZXgpfT57SWNvbmNyZWF0ZXIoaXRlbSl9PC9DaGlsZHNvZnNlbGVjdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25iYXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgb25JbWFnZUxvYWRlZD17KGltZyk9PnNldGltYWdlKGltZyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCIsaGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCJ9fSAgaW1hZ2VTdHlsZT17e2hlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwiLG9iamVjdEZpdDpcImNvdmVyXCJ9fSAgc3JjPXtzcmNbaW1hZ2V0eXBlXX0gY3JvcD17Y3JvcH0gb25DaGFuZ2U9eyhuZXdjcm9wKT0+dXBkYXRlY3JvcChuZXdjcm9wKX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+VG9DYW52YXMoKX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgPlVwbG9hZCB0aGUgZmlsZSB0byBzZXJ2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgIWlzV2luZG93Zm9yc2V0dGluZ3MgJiYgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kIEltYWdlZm9yQmFjaz17c3JjLkJhY2tpbWFnZS50b2tlbiA/IGBodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215bmV4dC1hMDc0YS5hcHBzcG90LmNvbS9vLyR7c3JjLkJhY2tpbWFnZS5uYW1lfT9hbHQ9bWVkaWEmdG9rZW49JHtzcmMuQmFja2ltYWdlLnRva2VufWAgOiBcIi95YXByYWsuanBnXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyIGlzSGF2aW5ncHJvZmlsZT17c3JjLlByb2ZpbGVpbWFnZS50b2tlbiA/IGBodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215bmV4dC1hMDc0YS5hcHBzcG90LmNvbS9vLyR7c3JjLlByb2ZpbGVpbWFnZS5uYW1lfT9hbHQ9bWVkaWEmdG9rZW49JHtzcmMuUHJvZmlsZWltYWdlLnRva2VufWAgOiBcIi95YXByYWsuanBnXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uIGlzZm9yZWRpdD17aXNXaW5kb3dmb3JzZXR0aW5nc30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1dpbmRvd2ZvcnNldHRpbmdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uIHNsaXB2YWx1ZT17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwIHN0eWxlPXt7Zm9udFNpemU6XCI4MHB4XCIsY29sb3I6XCIjZTllY2VmXCJ9fT48L0Fycm93RHJvcFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ib2xkZXJmb3J1cGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PnsgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmVsZW1lbnRzID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB1c2VyaW5mb1tpdGVtXS52YWx1ZSA9PSBcIm9iamVjdFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJlbGVtZW50cyA9IE9iamVjdC5rZXlzKHVzZXJpbmZvW2l0ZW1dLnZhbHVlKS5tYXAoKHN1Yml0ZW0sc3ViaW5kZXgpPT4oLy9zdWIgdmFsdWVzIG9mIG5vaXRpZmljYXRpb24gcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dGhvbGRlciBkaXNwbGF5ZWQ9e3VzZXJpbmZvW2l0ZW1dLmFjdGl2YXRlfT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIn19Pnt1c2VyaW5mb1tpdGVtXVtcInZhbHVlXCJdW3N1Yml0ZW1dW1wibXNnXCJdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBvbkNvbG9yPScjZmYwMDJiJyBhbmRsZURpYW1ldGVyPXsyMH0gb25DaGFuZ2U9eygpPT5JbnB1dGhhbmRsZXIoaXRlbSxcIlwiLHN1Yml0ZW0pfSBjaGVja2VkSWNvbj17dHJ1ZX0gdW5jaGVja2VkSWNvbj17dHJ1ZX0gY2hlY2tlZD17dXNlcmluZm9baXRlbV1bXCJ2YWx1ZVwiXVtzdWJpdGVtXVtcInZhbHVlXCJdfT48L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJlbGVtZW50cyA9ICg8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3VzZXJpbmZvW2l0ZW1dLndhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lPXt1c2VyaW5mb1tpdGVtXS5tdWx0aWxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5JbnB1dGhhbmRsZXIoaXRlbSxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm9baXRlbV0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcmluZm9baXRlbV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17IXVzZXJpbmZvW2l0ZW1dLndhcm5pbmcgPyB1c2VyaW5mb1tpdGVtXS5tc2cgOiB1c2VyaW5mb1tpdGVtXS5lcnJvcm1zZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=