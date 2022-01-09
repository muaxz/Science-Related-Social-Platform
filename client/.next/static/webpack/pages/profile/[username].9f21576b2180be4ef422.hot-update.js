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
              isHavingprofile: src.Profileimage.token,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Porfileimage"], {
                profile: src.Profileimage.token ? "https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/".concat(src.Profileimage.name, "?alt=media&token=").concat(src.Profileimage.token) : "/yaprak.jpg",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkhvbGRlcmZvcnVwaWNvbiIsInNsaXB2YWx1ZSIsIlByb2ZpbGV1cGxvYWRlZERpdiIsInN1Y2Nlc3NmdWwiLCJFZGl0d2luZG93IiwiaXNXaW5kb3dmb3JzZXR0aW5ncyIsInVwZGF0ZWZ1bmMiLCJlZGl0ZGF0YSIsImNsb3NlZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kdXJsIiwidXNlU3RhdGUiLCJCYWNraW1hZ2UiLCJQcm9maWxlaW1hZ2UiLCJmaWxlIiwic2V0ZmlsZSIsImFzcGVjdCIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjcm9wIiwic2V0Y3JvcCIsInRva2VuIiwiaW1hZ2V0b2tlbiIsIm5hbWUiLCJpbWFnZXVybCIsImJhY2tncm91bmR0b2tlbiIsInNyYyIsInNldHNyYyIsInVwbG9hZGluZyIsInNldHVwbG9hZGluZyIsInN1Y2Nlc2Z1bHVwbG9hZCIsInNldHN1Y2Nlc2Z1bHVwbG9hZCIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJjcm9wdmFsdWVzIiwicmVzdWx0Iiwic2V0cmVzdWx0IiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ3YXJuaW5nIiwibXVsdGlsaW5lIiwibXNnIiwiZXJyb3Jtc2ciLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJlbWFpbCIsIkN1cnJlbnRwYXNzd29yZCIsIk5ld3Bhc3N3b3JkIiwiVmFsaWRhdGlvbk5ld3Bhc3N3b3JkIiwiTm90aWZpY2F0aW9ucyIsIldoZW5mb2xsb3ciLCJOb3RpZmljYXRpb24iLCJXaGVubGlrZSIsIldoZW5jb21tZW50IiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsIkVtYWlsIiwiUGFzc3dvcmQiLCJzZWxlY3Rpb25jaGlsZHMiLCJzZXRzZWxlY3Rpb25jaGlsZHMiLCJzZWxlY3RlZCIsInNldHNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29weSIsImtleSIsIklucHV0ZXJyb3JoYW5kbGVyIiwidHlwZSIsIlZhbGlkYXRlIiwiaXNFbWFpbCIsIk5ldyIsIk5ld3ZhbGlkYXRpb24iLCJzdGF0ZSIsInZhbGlkYXRlIiwiaXNTdHJvbmdQYXNzd29yZCIsIm1pblN5bWJvbHMiLCJtaW5OdW1iZXJzIiwibWluTG93ZXJjYXNlIiwibWluVXBwZXJjYXNlIiwibWluTGVuZ3RoIiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImV2ZW50Iiwic3Via2V5IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidHlwZW9mdXBkYXRlIiwidmFsdWVzIiwidXBkYXRlRm9yIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiQ3VycmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiVXBkYXRlUHJvZmlsZSIsInVzZXJkYXRhIiwiU2VsZWN0aW9uaGFuZGxlciIsImtleW5hbWUiLCJpbmRleCIsIkljb25jcmVhdGVyIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInN1YmVsZW1lbnRzIiwic3ViaXRlbSIsInN1YmluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUxBQ0o7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFZQSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQUEsQ0FESSxFQUtSO0FBQUEsTUFBRUMsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxPQUFILEdBQWEsTUFBdkM7QUFBQSxDQUxRLEVBUUw7QUFBQSxNQUFFQSxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxPQUF2QztBQUFBLENBUkssQ0FBZDtLQUFNSixRO0FBY04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFYO01BQU1HLEs7QUFNTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdVRBVU87QUFBQSxNQUFFSyxZQUFGLFNBQUVBLFlBQUY7QUFBQSxTQUFrQkEsWUFBbEI7QUFBQSxDQVZQLENBQWhCO01BQU1ELFU7QUFtQk4sSUFBTUUsa0JBQWtCLEdBQUNQLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsdUdBQXhCO01BQU1NLGtCO0FBV04sSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNDQUNQO0FBQUEsTUFBRVEsU0FBRixTQUFFQSxTQUFGO0FBQUEsU0FBZ0JBLFNBQVMsR0FBRyxPQUFILEdBQWEsTUFBdEM7QUFBQSxDQURPLENBQWpCO01BQU1ELFc7QUFJTixJQUFNRSxXQUFXLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOElBRUg7QUFBQSxNQUFFVSxTQUFGLFNBQUVBLFNBQUY7QUFBQSxTQUFlQSxTQUFTLEdBQUcsTUFBSCxHQUFZLE1BQXBDO0FBQUEsQ0FGRyxFQUdFO0FBQUEsTUFBRUEsU0FBRixTQUFFQSxTQUFGO0FBQUEsU0FBZUEsU0FBUyxHQUFHLFNBQUgsR0FBZSxPQUF2QztBQUFBLENBSEYsQ0FBakI7TUFBTUQsVztBQVNOLElBQU1FLFVBQVUsR0FBQ1oseURBQU0sQ0FBQ2EsS0FBUjtBQUFBO0FBQUE7QUFBQSwwSkFBaEIsQyxDQVlBOztNQVpNRCxVO0FBYU4sSUFBTUUsWUFBWSxHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlGQUFsQjtNQUFNYSxZO0FBT04sSUFBTUMsaUJBQWlCLEdBQUdmLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK01BRWpCO0FBQUEsTUFBRWUsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxNQUFILEdBQVksR0FBdEM7QUFBQSxDQUZpQixFQUdKO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxTQUFILEdBQWUsU0FBekM7QUFBQSxDQUhJLENBQXZCO01BQU1ELGlCO0FBZU4sSUFBTUUsZUFBZSxHQUFHakIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RUFJZCxrQkFBZTtBQUFBLE1BQWJpQixTQUFhLFVBQWJBLFNBQWE7O0FBQ2xCLE1BQUdBLFNBQVMsSUFBSSxDQUFoQixFQUFrQjtBQUNkLFdBQU8sTUFBUDtBQUNILEdBRkQsTUFFTSxJQUFHQSxTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDcEIsV0FBTyxPQUFQO0FBQ0gsR0FGSyxNQUVEO0FBQ0QsV0FBTyxPQUFQO0FBQ0g7QUFDSixDQVpvQixDQUFyQjtPQUFNRCxlO0FBZU4sSUFBTUUsa0JBQWtCLEdBQUduQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdQQUlkO0FBQUEsTUFBRW1CLFVBQUYsVUFBRUEsVUFBRjtBQUFBLFNBQWlCQSxVQUFVLEdBQUcsR0FBSCxHQUFTLEdBQXBDO0FBQUEsQ0FKYyxFQUtqQjtBQUFBLE1BQUVBLFVBQUYsVUFBRUEsVUFBRjtBQUFBLFNBQWlCQSxVQUFVLEdBQUcsTUFBSCxHQUFZLEtBQXZDO0FBQUEsQ0FMaUIsQ0FBeEIsQyxDQWVBOztPQWZNRCxrQjtBQWlCUyxTQUFTRSxVQUFULFNBQStFO0FBQUE7O0FBQUE7O0FBQUEsTUFBMURDLG1CQUEwRCxVQUExREEsbUJBQTBEO0FBQUEsTUFBdENDLFVBQXNDLFVBQXRDQSxVQUFzQztBQUFBLE1BQTNCckIsTUFBMkIsVUFBM0JBLE1BQTJCO0FBQUEsTUFBcEJzQixRQUFvQixVQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxTQUFXLFVBQVhBLFNBQVc7QUFFMUZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLGFBQXJCOztBQUgwRixrQkFJbkVDLHNEQUFRLENBQUM7QUFDNUJDLGFBQVMsRUFBQyxFQURrQjtBQUU1QkMsZ0JBQVksRUFBQztBQUZlLEdBQUQsQ0FKMkQ7QUFBQSxNQUluRkMsSUFKbUY7QUFBQSxNQUk5RUMsT0FKOEU7O0FBQUEsbUJBUW5FSixzREFBUSxDQUFDO0FBQUNLLFVBQU0sRUFBQyxLQUFHLEVBQVg7QUFBY0MsVUFBTSxFQUFDLEdBQXJCO0FBQXlCQyxTQUFLLEVBQUMsR0FBL0I7QUFBbUNDLEtBQUMsRUFBQyxFQUFyQztBQUF3Q0MsS0FBQyxFQUFDO0FBQTFDLEdBQUQsQ0FSMkQ7QUFBQSxNQVFuRkMsSUFSbUY7QUFBQSxNQVE5RUMsT0FSOEU7O0FBQUEsbUJBU3JFWCxzREFBUSxDQUFDO0FBQzFCRSxnQkFBWSxFQUFDO0FBQ1RVLFdBQUssRUFBQ2pCLFFBQVEsQ0FBQ2tCLFVBRE47QUFFVEMsVUFBSSxFQUFDbkIsUUFBUSxDQUFDb0I7QUFGTCxLQURhO0FBSzFCZCxhQUFTLEVBQUM7QUFDTlcsV0FBSyxFQUFDakIsUUFBUSxDQUFDcUIsZUFEVDtBQUVORixVQUFJLEVBQUNuQixRQUFRLENBQUNJO0FBRlI7QUFMZ0IsR0FBRCxDQVQ2RDtBQUFBLE1BU25Ga0IsR0FUbUY7QUFBQSxNQVMvRUMsTUFUK0U7O0FBQUEsbUJBbUJ6RGxCLHNEQUFRLENBQUMsS0FBRCxDQW5CaUQ7QUFBQSxNQW1CbkZtQixTQW5CbUY7QUFBQSxNQW1CekVDLFlBbkJ5RTs7QUFBQSxtQkFvQjdDcEIsc0RBQVEsQ0FBQyxFQUFELENBcEJxQztBQUFBLE1Bb0JuRnFCLGVBcEJtRjtBQUFBLE1Bb0JuRUMsa0JBcEJtRTs7QUFBQSxtQkFxQnpEdEIsc0RBQVEsQ0FBQyxFQUFELENBckJpRDtBQUFBLE1BcUJuRnVCLFNBckJtRjtBQUFBLE1BcUJ6RUMsWUFyQnlFOztBQUFBLG1CQXNCakV4QixzREFBUSxDQUFDLElBQUQsQ0F0QnlEO0FBQUEsTUFzQm5GeUIsS0F0Qm1GO0FBQUEsTUFzQjdFQyxRQXRCNkU7O0FBQUEsbUJBdUIvRDFCLHNEQUFRLENBQUM7QUFDaENDLGFBQVMsRUFBQztBQUNOZ0IsU0FBRyxFQUFDLEVBREU7QUFFTlUsZ0JBQVUsRUFBQztBQUNQcEIsYUFBSyxFQUFDLEVBREM7QUFFUEQsY0FBTSxFQUFDLEVBRkE7QUFHUEUsU0FBQyxFQUFDLEVBSEs7QUFJUEMsU0FBQyxFQUFDO0FBSks7QUFGTCxLQURzQjtBQVVoQ1AsZ0JBQVksRUFBQztBQUNUZSxTQUFHLEVBQUMsRUFESztBQUVUVSxnQkFBVSxFQUFDO0FBQ1BwQixhQUFLLEVBQUMsRUFEQztBQUVQRCxjQUFNLEVBQUMsRUFGQTtBQUdQRSxTQUFDLEVBQUMsRUFISztBQUlQQyxTQUFDLEVBQUM7QUFKSztBQUZGO0FBVm1CLEdBQUQsQ0F2QnVEO0FBQUEsTUF1Qm5GbUIsTUF2Qm1GO0FBQUEsTUF1QjVFQyxTQXZCNEU7O0FBQUEsbUJBMkMvQzdCLHNEQUFRLENBQUMsS0FBRCxDQTNDdUM7QUFBQSxNQTJDbkY4QixlQTNDbUY7QUFBQSxNQTJDbkVDLGdCQTNDbUU7O0FBQUEsb0JBNEMzRC9CLHNEQUFRLENBQUM7QUFDcENnQyxhQUFTLEVBQUM7QUFDTkMsY0FBUSxFQUFDLEtBREg7QUFFTkMsV0FBSyxFQUFDLElBRkE7QUFHTmxELFdBQUssRUFBQyxlQUhBO0FBSU5tRCxhQUFPLEVBQUMsS0FKRjtBQUtOQyxlQUFTLEVBQUMsS0FMSjtBQU1OQyxTQUFHLEVBQUMsRUFORTtBQU9OQyxjQUFRLEVBQUM7QUFQSCxLQUQwQjtBQVVwQ0MsYUFBUyxFQUFDO0FBQ05OLGNBQVEsRUFBQyxLQURIO0FBRU5DLFdBQUssRUFBQ3ZDLFFBQVEsQ0FBQzRDLFNBRlQ7QUFHTnZELFdBQUssRUFBQyxJQUhBO0FBSU5tRCxhQUFPLEVBQUMsS0FKRjtBQUtOQyxlQUFTLEVBQUMsS0FMSjtBQU1OQyxTQUFHLEVBQUMsRUFORTtBQU9OQyxjQUFRLEVBQUM7QUFQSCxLQVYwQjtBQW1CcENFLFdBQU8sRUFBQztBQUNKUCxjQUFRLEVBQUMsS0FETDtBQUVKQyxXQUFLLEVBQUN2QyxRQUFRLENBQUM4QyxRQUZYO0FBR0p6RCxXQUFLLEVBQUMsT0FIRjtBQUlKbUQsYUFBTyxFQUFDLEtBSko7QUFLSkMsZUFBUyxFQUFDLEtBTE47QUFNSkMsU0FBRyxFQUFDLEVBTkE7QUFPSkMsY0FBUSxFQUFDO0FBUEwsS0FuQjRCO0FBNEJwQ0ksZ0JBQVksRUFBQztBQUNUVCxjQUFRLEVBQUMsS0FEQTtBQUVUQyxXQUFLLEVBQUMsSUFGRztBQUdUbEQsV0FBSyxFQUFDLGtCQUhHO0FBSVRtRCxhQUFPLEVBQUMsS0FKQztBQUtUQyxlQUFTLEVBQUMsSUFMRDtBQU1UQyxTQUFHLEVBQUMsRUFOSztBQU9UQyxjQUFRLEVBQUM7QUFQQSxLQTVCdUI7QUFxQ3BDSyxTQUFLLEVBQUM7QUFDRlYsY0FBUSxFQUFDLEtBRFA7QUFFRkMsV0FBSyxFQUFDdkMsUUFBUSxDQUFDZ0QsS0FGYjtBQUdGM0QsV0FBSyxFQUFDLFNBSEo7QUFJRm1ELGFBQU8sRUFBQyxLQUpOO0FBS0ZDLGVBQVMsRUFBQyxLQUxSO0FBTUZDLFNBQUcsRUFBQywyRkFORjtBQU9GQyxjQUFRLEVBQUM7QUFQUCxLQXJDOEI7QUE4Q3BDTSxtQkFBZSxFQUFDO0FBQ1pYLGNBQVEsRUFBQyxLQURHO0FBRVpDLFdBQUssRUFBQyxFQUZNO0FBR1psRCxXQUFLLEVBQUMsZUFITTtBQUlabUQsYUFBTyxFQUFDLEtBSkk7QUFLWkMsZUFBUyxFQUFDLEtBTEU7QUFNWkMsU0FBRyxFQUFDLEVBTlE7QUFPWkMsY0FBUSxFQUFDO0FBUEcsS0E5Q29CO0FBdURwQ08sZUFBVyxFQUFDO0FBQ1JaLGNBQVEsRUFBQyxLQUREO0FBRVJDLFdBQUssRUFBQyxFQUZFO0FBR1JsRCxXQUFLLEVBQUMsc0JBSEU7QUFJUm1ELGFBQU8sRUFBQyxLQUpBO0FBS1JDLGVBQVMsRUFBQyxLQUxGO0FBTVJDLFNBQUcsRUFBQyxFQU5JO0FBT1JDLGNBQVEsRUFBQztBQVBELEtBdkR3QjtBQWdFcENRLHlCQUFxQixFQUFDO0FBQ2xCYixjQUFRLEVBQUMsS0FEUztBQUVsQkMsV0FBSyxFQUFDLEVBRlk7QUFHbEJsRCxXQUFLLEVBQUMsNkJBSFk7QUFJbEJtRCxhQUFPLEVBQUMsS0FKVTtBQUtsQkMsZUFBUyxFQUFDLEtBTFE7QUFNbEJDLFNBQUcsRUFBQyxFQU5jO0FBT2xCQyxjQUFRLEVBQUM7QUFQUyxLQWhFYztBQXlFcENTLGlCQUFhLEVBQUM7QUFDVmQsY0FBUSxFQUFDLEtBREM7QUFFVkMsV0FBSyxFQUFDO0FBQ0ZjLGtCQUFVLEVBQUM7QUFDUGQsZUFBSyxFQUFDdkMsUUFBUSxDQUFDc0QsWUFBVCxDQUFzQkQsVUFEckI7QUFFUFgsYUFBRyxFQUFDO0FBRkcsU0FEVDtBQUtGYSxnQkFBUSxFQUFDO0FBQ0xoQixlQUFLLEVBQUN2QyxRQUFRLENBQUNzRCxZQUFULENBQXNCQyxRQUR2QjtBQUVMYixhQUFHLEVBQUM7QUFGQyxTQUxQO0FBU0ZjLG1CQUFXLEVBQUM7QUFDUmpCLGVBQUssRUFBQ3ZDLFFBQVEsQ0FBQ3NELFlBQVQsQ0FBc0JFLFdBRHBCO0FBRVJkLGFBQUcsRUFBQztBQUZJO0FBVFYsT0FGSTtBQWdCVnJELFdBQUssRUFBQyxFQWhCSTtBQWlCVm1ELGFBQU8sRUFBQyxLQWpCRTtBQWtCVkMsZUFBUyxFQUFDLEtBbEJBO0FBbUJWQyxTQUFHLEVBQUM7QUFuQk07QUF6RXNCLEdBQUQsQ0E1Q21EO0FBQUEsTUE0Q25GZSxRQTVDbUY7QUFBQSxNQTRDMUVDLFdBNUMwRTs7QUFBQSxvQkE0STdDckQsc0RBQVEsQ0FBQztBQUNsRHNELFNBQUssRUFBQyxJQUQ0QztBQUVsREMsWUFBUSxFQUFDLEtBRnlDO0FBR2xETixnQkFBWSxFQUFDO0FBSHFDLEdBQUQsQ0E1SXFDO0FBQUEsTUE0SW5GTyxlQTVJbUY7QUFBQSxNQTRJbkVDLGtCQTVJbUU7O0FBQUEsb0JBaUozRHpELHNEQUFRLENBQUMsQ0FBRCxDQWpKbUQ7QUFBQSxNQWlKbkYwRCxRQWpKbUY7QUFBQSxNQWlKMUVDLFdBakowRTs7QUFtSjFGQyx5REFBUyxDQUFDLFlBQUk7QUFHTixRQUFNQyxJQUFJLHFCQUFPVCxRQUFQLENBQVY7O0FBQ0EsU0FBSyxJQUFNVSxHQUFYLElBQWtCRCxJQUFsQixFQUF1QjtBQUNuQkEsVUFBSSxDQUFDQyxHQUFELENBQUosQ0FBVTdCLFFBQVYsR0FBcUIsS0FBckI7QUFDQTRCLFVBQUksQ0FBQ0MsR0FBRCxDQUFKLENBQVUzQixPQUFWLEdBQXFCLEtBQXJCO0FBQ0F0QyxhQUFPLENBQUNDLEdBQVIsQ0FBWStELElBQUksQ0FBQ0MsR0FBRCxDQUFKLENBQVU3QixRQUF0QjtBQUNIOztBQUdELFFBQUd4QyxtQkFBSCxFQUF1QjtBQUVuQixVQUFHaUUsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFFYkcsWUFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjNUIsUUFBZCxHQUF5QixJQUF6QjtBQUVILE9BSkQsTUFJTSxJQUFHeUIsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFFbkJHLFlBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCNUIsUUFBeEIsR0FBbUMsSUFBbkM7QUFDQTRCLFlBQUksQ0FBQyxhQUFELENBQUosQ0FBb0I1QixRQUFwQixHQUErQixJQUEvQjtBQUNBNEIsWUFBSSxDQUFDLHVCQUFELENBQUosQ0FBOEI1QixRQUE5QixHQUF5QyxJQUF6QztBQUVILE9BTkssTUFNRDtBQUFDO0FBQ0Y0QixZQUFJLENBQUMsZUFBRCxDQUFKLENBQXNCNUIsUUFBdEIsR0FBaUMsSUFBakM7QUFDSDtBQUVKLEtBaEJELE1BZ0JLO0FBRUQsVUFBRzVELE1BQUgsRUFBVTtBQUNOLGFBQUssSUFBTXlGLElBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3BCLGNBQUdDLElBQUcsSUFBSSxXQUFQLElBQXNCQSxJQUFHLElBQUksY0FBN0IsSUFBK0NBLElBQUcsSUFBSSxXQUF0RCxJQUFxRUEsSUFBRyxJQUFJLFNBQS9FLEVBQXlGO0FBQ3JGRCxnQkFBSSxDQUFDQyxJQUFELENBQUosQ0FBVTdCLFFBQVYsR0FBcUIsSUFBckI7QUFFSDtBQUNKO0FBQ0o7QUFFSjs7QUFHRG9CLGVBQVcsQ0FBQ1EsSUFBRCxDQUFYO0FBR1AsR0E1Q1EsRUE0Q1AsQ0FBQ3hGLE1BQUQsRUFBUXFGLFFBQVIsQ0E1Q08sQ0FBVDtBQThDQUUseURBQVMsQ0FBQyxZQUFJO0FBQ1Y3QixvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsR0FGUSxFQUVQLENBQUMxRCxNQUFELENBRk8sQ0FBVDtBQUdBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHSSxNQUFNMEYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQU05QixLQUFOLEVBQWM7QUFDcEMsWUFBUThCLElBQVI7QUFDSSxXQUFLLFVBQUw7QUFDSTs7QUFDSixXQUFLLFdBQUw7QUFDSTs7QUFDSixXQUFLLE9BQUw7QUFDSSxlQUFPQyxpREFBUSxDQUFDQyxPQUFULENBQWlCaEMsS0FBakIsQ0FBUDs7QUFDSixXQUFLLFVBQUw7QUFDSXJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsS0FBSyxDQUFDaUMsR0FBbEI7QUFDQXRFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsS0FBSyxDQUFDa0MsYUFBbEI7QUFDQSxZQUFHbEMsS0FBSyxDQUFDaUMsR0FBTixLQUFjakMsS0FBSyxDQUFDa0MsYUFBdkIsRUFDQSxPQUFPO0FBQUNDLGVBQUssRUFBQyxTQUFQO0FBQWlCQyxrQkFBUSxFQUFDO0FBQTFCLFNBQVA7QUFFQSxZQUFHLENBQUNMLGlEQUFRLENBQUNNLGdCQUFULENBQTBCckMsS0FBSyxDQUFDaUMsR0FBaEMsRUFBb0M7QUFBQ0ssb0JBQVUsRUFBQyxDQUFaO0FBQWNDLG9CQUFVLEVBQUMsQ0FBekI7QUFBMkJDLHNCQUFZLEVBQUMsQ0FBeEM7QUFBMENDLHNCQUFZLEVBQUMsQ0FBdkQ7QUFBeURDLG1CQUFTLEVBQUM7QUFBbkUsU0FBcEMsQ0FBSixFQUNBLE9BQU87QUFBQ1AsZUFBSyxFQUFDLFFBQVA7QUFBZ0JDLGtCQUFRLEVBQUM7QUFBekIsU0FBUDtBQUVBLGVBQU87QUFBQ0QsZUFBSyxFQUFDLFNBQVA7QUFBaUJDLGtCQUFRLEVBQUM7QUFBMUIsU0FBUDtBQUNBOztBQUNKO0FBQ0k7QUFuQlI7QUFxQkgsR0F0QkQ7O0FBd0JBLE1BQU1PLFFBQVE7QUFBQSw0U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsb0JBRk8sR0FFRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBRkY7QUFHUEMsb0JBSE8sR0FHRXhELEtBQUssQ0FBQ3lELFlBQU4sR0FBcUJ6RCxLQUFLLENBQUNsQixLQUg3QjtBQUlQNEUsb0JBSk8sR0FJRTFELEtBQUssQ0FBQzJELGFBQU4sR0FBc0IzRCxLQUFLLENBQUNuQixNQUo5QjtBQUtid0Usb0JBQU0sQ0FBQ3ZFLEtBQVAsR0FBZUcsSUFBSSxDQUFDSCxLQUFwQjtBQUNBdUUsb0JBQU0sQ0FBQ3hFLE1BQVAsR0FBZ0JJLElBQUksQ0FBQ0osTUFBckI7QUFDTStFLGlCQVBPLEdBT0RQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQixJQUFsQixDQVBDO0FBV2JELGlCQUFHLENBQUNFLFNBQUosQ0FDQTlELEtBREEsRUFFQWYsSUFBSSxDQUFDRixDQUFMLEdBQVN5RSxNQUZULEVBR0F2RSxJQUFJLENBQUNELENBQUwsR0FBUzBFLE1BSFQsRUFJQXpFLElBQUksQ0FBQ0gsS0FBTCxHQUFhMEUsTUFKYixFQUtBdkUsSUFBSSxDQUFDSixNQUFMLEdBQWM2RSxNQUxkLEVBTUEsQ0FOQSxFQU9BLENBUEEsRUFRQXpFLElBQUksQ0FBQ0gsS0FSTCxFQVNBRyxJQUFJLENBQUNKLE1BVEw7QUFZTWtGLHlCQXZCTyxHQXVCT1YsTUFBTSxDQUFDVyxTQUFQLENBQWlCLFVBQWpCLENBdkJQO0FBeUJiNUQsdUJBQVMsQ0FBQyxVQUFDNkQsSUFBRCxFQUFRO0FBQ2QsdURBQVdBLElBQVgsMEpBQWlCbkUsU0FBakIsRUFBNEI7QUFBQ04scUJBQUcsRUFBQ3VFLFdBQUw7QUFBaUI3RCw0QkFBVSxFQUFDO0FBQUNuQixxQkFBQyxFQUFDRSxJQUFJLENBQUNGLENBQVI7QUFBVUMscUJBQUMsRUFBQ0MsSUFBSSxDQUFDRCxDQUFqQjtBQUFtQkYseUJBQUssRUFBQ0csSUFBSSxDQUFDSCxLQUE5QjtBQUFvQ0QsMEJBQU0sRUFBQ0ksSUFBSSxDQUFDSjtBQUFoRDtBQUE1QixpQkFBNUI7QUFDSCxlQUZRLENBQVQ7QUFJQXlCLDhCQUFnQixDQUFDLEtBQUQsQ0FBaEI7O0FBN0JhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVI4QyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBaUNBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUM3QixHQUFELEVBQUs4QixLQUFMLEVBQVdDLE1BQVgsRUFBb0I7QUFFckMsUUFBTUMsT0FBTyxxQkFBTzFDLFFBQVAsQ0FBYjs7QUFDQSxRQUFHVSxHQUFHLElBQUksZUFBVixFQUEwQjtBQUN0QmdDLGFBQU8sQ0FBQ2hDLEdBQUQsQ0FBUCxDQUFhLE9BQWIsRUFBc0IrQixNQUF0QixFQUE4QixPQUE5QixJQUF3QyxDQUFDQyxPQUFPLENBQUNoQyxHQUFELENBQVAsQ0FBYSxPQUFiLEVBQXNCK0IsTUFBdEIsRUFBOEIsT0FBOUIsQ0FBekM7QUFDSCxLQUZELE1BRUs7QUFDREMsYUFBTyxDQUFDaEMsR0FBRCxDQUFQLENBQWE1QixLQUFiLEdBQW1CMEQsS0FBSyxDQUFDRyxNQUFOLENBQWE3RCxLQUFoQztBQUNBNEQsYUFBTyxDQUFDaEMsR0FBRCxDQUFQLENBQWEzQixPQUFiLEdBQXVCLEtBQXZCO0FBQ0g7O0FBRURrQixlQUFXLENBQUN5QyxPQUFELENBQVg7QUFDSCxHQVhEOztBQWFBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNKLEtBQUQsRUFBTzVCLElBQVAsRUFBYztBQUM3QixRQUFHQSxJQUFJLElBQUksV0FBWCxFQUF1QjtBQUNuQnJELGFBQU8sQ0FBQztBQUNKTixjQUFNLEVBQUMsS0FBRyxDQUROO0FBRUpDLGNBQU0sRUFBQyxHQUZIO0FBR0pDLGFBQUssRUFBQyxHQUhGO0FBSUowRixZQUFJLEVBQUMsSUFKRDtBQUtKekYsU0FBQyxFQUFDLENBTEU7QUFNSkMsU0FBQyxFQUFDO0FBTkUsT0FBRCxDQUFQO0FBUUgsS0FURCxNQVVJO0FBQ0FFLGFBQU8sQ0FBQztBQUNKTixjQUFNLEVBQUMsS0FBRyxFQUROO0FBRUpDLGNBQU0sRUFBQyxHQUZIO0FBR0pDLGFBQUssRUFBQyxHQUhGO0FBSUowRixZQUFJLEVBQUMsSUFKRDtBQUtKekYsU0FBQyxFQUFDLEVBTEU7QUFNSkMsU0FBQyxFQUFDO0FBTkUsT0FBRCxDQUFQO0FBUUg7O0FBRURlLGdCQUFZLENBQUN3QyxJQUFELENBQVo7QUFDQWpDLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQWIsVUFBTSxDQUFDLFVBQUN3RSxJQUFELEVBQVE7QUFDWCw2Q0FBV0EsSUFBWCwwSkFBaUIxQixJQUFqQixFQUF1QmtDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlAsS0FBSyxDQUFDRyxNQUFOLENBQWFLLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBcEIsQ0FBdkI7QUFDSCxLQUZLLENBQU47QUFHQWhHLFdBQU8sQ0FBQyxVQUFDc0YsSUFBRCxFQUFRO0FBQ1osNkNBQVdBLElBQVgsMEpBQWlCMUIsSUFBakIsRUFBdUI0QixLQUFLLENBQUNHLE1BQU4sQ0FBYUssS0FBYixDQUFtQixDQUFuQixDQUF2QjtBQUNILEtBRk0sQ0FBUDtBQUtILEdBaENEOztBQWtDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVc7QUFDMUI7QUFDQSxRQUFHNUYsSUFBSSxDQUFDTCxNQUFMLEdBQWMsQ0FBakIsRUFBbUI7QUFDZk0sYUFBTyxDQUFDLFVBQUM0RixHQUFELEVBQU87QUFDWCwrQ0FBV0EsR0FBWDtBQUFlOUYsV0FBQyxFQUFDNkYsT0FBTyxDQUFDN0Y7QUFBekI7QUFDSCxPQUZNLENBQVA7QUFHSCxLQUpELE1BS0k7QUFDQUUsYUFBTyxDQUFDLFVBQUM0RixHQUFELEVBQU87QUFDWCwrQ0FBV0EsR0FBWDtBQUFlOUYsV0FBQyxFQUFDNkYsT0FBTyxDQUFDN0YsQ0FBekI7QUFBMkJELFdBQUMsRUFBQzhGLE9BQU8sQ0FBQzlGO0FBQXJDO0FBQ0gsT0FGTSxDQUFQO0FBR0g7O0FBQ0RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFaLEVBWjBCLENBYzFCO0FBQ0gsR0FmRDs7QUFpQkEsTUFBTThGLFdBQVc7QUFBQSw0U0FBRyxrQkFBT0MsWUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLG9CQUZVLEdBRUQsRUFGQztBQUdWN0Msa0JBSFUscUJBR0NULFFBSEQ7QUFJWnVELHVCQUpZLEdBSUEsRUFKQTs7QUFBQSxrQkFNWmxILG1CQU5ZO0FBQUE7QUFBQTtBQUFBOztBQU9aSSxxQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBNkcsdUJBQVMsR0FBRyxTQUFaO0FBQ0FELG9CQUFNLENBQUNFLFFBQVAsR0FBa0JoRixNQUFNLENBQUMzQixTQUFQLENBQWlCMEIsVUFBbkM7QUFDQStFLG9CQUFNLENBQUNHLE9BQVAsR0FBa0JqRixNQUFNLENBQUMxQixZQUFQLENBQW9CeUIsVUFBdEM7QUFWWSx5SkFZTXlCLFFBWk47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZRFUsaUJBWkM7O0FBQUEsb0JBYUxBLEdBQUcsSUFBSSxPQWJGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBZVI0QyxvQkFBTSxDQUFDNUMsR0FBRCxDQUFOLEdBQWNWLFFBQVEsQ0FBQ1UsR0FBRCxDQUFSLENBQWM1QixLQUE1QjtBQWZRO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsb0JBa0JQdUUsWUFBWSxJQUFJLENBbEJUO0FBQUE7QUFBQTtBQUFBOztBQW9CWkUsdUJBQVMsR0FBRyxPQUFaOztBQXBCWSxrQkFxQlI1QyxpQkFBaUIsQ0FBQyxPQUFELEVBQVNYLFFBQVEsQ0FBQyxPQUFELENBQVIsQ0FBa0JsQixLQUEzQixDQXJCVDtBQUFBO0FBQUE7QUFBQTs7QUFzQlIyQixrQkFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjMUIsT0FBZCxHQUF3QixJQUF4QjtBQUNBMEIsa0JBQUksQ0FBQyxPQUFELENBQUosQ0FBY3hCLEdBQWQsR0FBb0Isb0NBQXBCO0FBdkJRLGdEQXdCRGdCLFdBQVcsQ0FBQ1EsSUFBRCxDQXhCVjs7QUFBQTtBQTJCWjZDLG9CQUFNLENBQUMsT0FBRCxDQUFOLEdBQWtCdEQsUUFBUSxDQUFDLE9BQUQsQ0FBUixDQUFrQmxCLEtBQXBDO0FBM0JZO0FBQUE7O0FBQUE7QUFBQSxvQkE2QlB1RSxZQUFZLElBQUksQ0E3QlQ7QUFBQTtBQUFBO0FBQUE7O0FBK0JaRSx1QkFBUyxHQUFHLFVBQVo7QUEvQlksbUNBZ0NhNUMsaUJBQWlCLENBQUMsVUFBRCxFQUFZO0FBQUMrQyx1QkFBTyxFQUFDMUQsUUFBUSxDQUFDLGlCQUFELENBQVIsQ0FBNEJsQixLQUFyQztBQUEyQ2lDLG1CQUFHLEVBQUNmLFFBQVEsQ0FBQyxhQUFELENBQVIsQ0FBd0JsQixLQUF2RTtBQUE2RWtDLDZCQUFhLEVBQUNoQixRQUFRLENBQUMsdUJBQUQsQ0FBUixDQUFrQ2xCO0FBQTdILGVBQVosQ0FoQzlCLEVBZ0NMbUMsS0FoQ0ssc0JBZ0NMQSxLQWhDSyxFQWdDQ0MsUUFoQ0Qsc0JBZ0NDQSxRQWhDRDs7QUFBQSxrQkFtQ1JBLFFBbkNRO0FBQUE7QUFBQTtBQUFBOztBQXFDUixrQkFBR0QsS0FBSyxJQUFJLFNBQVosRUFBc0I7QUFFbEJSLG9CQUFJLENBQUMsdUJBQUQsQ0FBSixDQUE4QjFCLE9BQTlCLEdBQXdDLElBQXhDO0FBRUgsZUFKRCxNQUlLO0FBRUQwQixvQkFBSSxDQUFDLGFBQUQsQ0FBSixDQUFvQjFCLE9BQXBCLEdBQThCLElBQTlCO0FBRUg7O0FBN0NPLGdEQStDRGtCLFdBQVcsQ0FBQ1EsSUFBRCxDQS9DVjs7QUFBQTtBQWtEWjZDLG9CQUFNLENBQUMsaUJBQUQsQ0FBTixHQUE0QnRELFFBQVEsQ0FBQyxpQkFBRCxDQUFSLENBQTRCbEIsS0FBeEQ7QUFDQXdFLG9CQUFNLENBQUMsYUFBRCxDQUFOLEdBQXdCdEQsUUFBUSxDQUFDLGFBQUQsQ0FBUixDQUF3QmxCLEtBQWhEO0FBQ0F3RSxvQkFBTSxDQUFDLGVBQUQsQ0FBTixHQUEwQnRELFFBQVEsQ0FBQyx1QkFBRCxDQUFSLENBQWtDbEIsS0FBNUQ7QUFwRFk7QUFBQTs7QUFBQTtBQXdEWnlFLHVCQUFTLEdBQUcsY0FBWjtBQUNBRCxvQkFBTSxDQUFDLGVBQUQsQ0FBTixHQUEwQnRELFFBQVEsQ0FBQyxlQUFELENBQVIsQ0FBMEIsT0FBMUIsQ0FBMUI7O0FBekRZO0FBOERWMkQsc0JBOURVLEdBOERELElBQUlDLFFBQUosRUE5REM7O0FBZ0VoQixrQkFBRzdHLElBQUksQ0FBQ0YsU0FBTCxLQUFtQixFQUFuQixJQUF5QkUsSUFBSSxDQUFDRCxZQUFMLEtBQXNCLEVBQWxELEVBQXFEO0FBRWpENkcsd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5QjlHLElBQUksQ0FBQ0YsU0FBOUI7QUFDQThHLHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMEI5RyxJQUFJLENBQUNELFlBQS9CO0FBRUgsZUFMRCxNQU1JO0FBRUE2Ryx3QkFBUSxDQUFDRSxNQUFULENBQWdCLFFBQWhCLEVBQXlCOUcsSUFBSSxDQUFDb0IsU0FBRCxDQUE3QjtBQUNIOztBQUVEd0Ysc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixlQUFoQixFQUFnQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULE1BQWYsQ0FBaEM7QUFHQXRGLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FnRyw2RUFBYSxDQUFDO0FBQ1ZDLHdCQUFRLEVBQUNOLFFBREM7QUFFVk4sNEJBQVksRUFBQ0UsU0FGSDtBQUdWdkYsNEJBQVksRUFBQ0EsWUFISDtBQUlWRSxrQ0FBa0IsRUFBQ0E7QUFKVCxlQUFELENBQWI7O0FBL0VnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYa0YsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF3RkEsTUFBTWMsZ0JBQWdCLEdBQUMsU0FBakJBLGdCQUFpQixDQUFDQyxPQUFELEVBQVNDLEtBQVQsRUFBaUI7QUFFcEMsUUFBTTNELElBQUkscUJBQU9MLGVBQVAsQ0FBVjs7QUFDQSxTQUFLLElBQU1NLEdBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3JCQSxVQUFJLENBQUNDLEdBQUQsQ0FBSixHQUFZLEtBQVo7QUFDRjs7QUFFREQsUUFBSSxDQUFDMEQsT0FBRCxDQUFKLEdBQWdCLElBQWhCO0FBQ0E1RCxlQUFXLENBQUM2RCxLQUFLLEdBQUMsQ0FBUCxDQUFYO0FBQ0EvRCxzQkFBa0IsQ0FBQ0ksSUFBRCxDQUFsQjtBQUNILEdBVkQ7O0FBWUEsTUFBTTRELFdBQVcsR0FBRSxTQUFiQSxXQUFhLENBQUNGLE9BQUQsRUFBVztBQUMxQixRQUFHQSxPQUFPLElBQUksT0FBZCxFQUNBLG9CQUFPLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLFFBQUdBLE9BQU8sSUFBSSxVQUFkLEVBQ0Esb0JBQU8scUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsUUFBR0EsT0FBTyxJQUFJLGNBQWQsRUFDQSxvQkFBTyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQVBEOztBQVNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTyxhQUFPLEVBQUUzSCxTQUFoQjtBQUEyQixXQUFLLEVBQUV2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFDcUosa0JBQVUsRUFBQyxRQUFaO0FBQXFCQyxnQkFBUSxFQUFDO0FBQTlCLE9BQVo7QUFBdUQsUUFBRSxFQUFDLFNBQTFEO0FBQW9FLFNBQUcsRUFBRTFHLEdBQUcsQ0FBQyxXQUFEO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUssV0FBSyxFQUFFO0FBQUN5RyxrQkFBVSxFQUFDLFFBQVo7QUFBcUJDLGdCQUFRLEVBQUM7QUFBOUIsT0FBWjtBQUF1RCxRQUFFLEVBQUMsWUFBMUQ7QUFBdUUsU0FBRyxFQUFFMUcsR0FBRyxDQUFDLGNBQUQ7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUkscUVBQUMsUUFBRDtBQUFVLGdCQUFVLEVBQUVhLGVBQXRCO0FBQXVDLFlBQU0sRUFBRXpELE1BQS9DO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFBLGdDQUNJLHFFQUFDLGtCQUFEO0FBQW9CLG9CQUFVLEVBQUVnRCxlQUFlLElBQUksWUFBbkIsR0FBa0MsSUFBbEMsR0FBeUMsS0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLGVBQUssRUFBRTtBQUFDc0csb0JBQVEsRUFBQyxVQUFWO0FBQXFCQyxlQUFHLEVBQUNuSSxtQkFBbUIsR0FBRyxPQUFILEdBQVcsT0FBdkQ7QUFBK0RvSSxpQkFBSyxFQUFDLE1BQXJFO0FBQTRFQyxrQkFBTSxFQUFDO0FBQW5GLFdBQVo7QUFBQSxpQ0FDSSxxRUFBQyx3REFBRDtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBSXRCLFdBQVcsQ0FBQzlDLFFBQUQsQ0FBZjtBQUFBLGFBQWpCO0FBQTRDLGlCQUFLLEVBQUU7QUFBQ3FFLDJCQUFhLEVBQUMsWUFBZjtBQUE0QkMsMEJBQVksRUFBQztBQUF6QyxhQUFuRDtBQUFxRyxpQkFBSyxFQUFDLFdBQTNHO0FBQXVILG1CQUFPLEVBQUMsV0FBL0g7QUFBQSx1QkFFUTdHLFNBQVMsZ0JBQUkscUVBQUMsZ0VBQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUM4RywyQkFBVyxFQUFDO0FBQWI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSixHQUF1RCxJQUZ4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBV1F4SSxtQkFBbUIsaUJBQ2xCLHFFQUFDLFlBQUQ7QUFBQSxvQkFFT3lJLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZM0UsZUFBWixFQUE2QjRFLEdBQTdCLENBQWlDLFVBQUNDLElBQUQsRUFBTWIsS0FBTixFQUFjO0FBQzNDLGdDQUFRLHFFQUFDLGlCQUFEO0FBQW1CLHdCQUFVLEVBQUVoRSxlQUFlLENBQUM2RSxJQUFELENBQTlDO0FBQXNELG1CQUFLLEVBQUU7QUFBQ0MscUJBQUssRUFBQzlFLGVBQWUsQ0FBQzZFLElBQUQsQ0FBZixHQUF3QixPQUF4QixHQUFrQztBQUF6QyxlQUE3RDtBQUFnSCxxQkFBTyxFQUFFO0FBQUEsdUJBQUlmLGdCQUFnQixDQUFDZSxJQUFELEVBQU1iLEtBQU4sQ0FBcEI7QUFBQSxlQUF6SDtBQUFBLHdCQUE0SkMsV0FBVyxDQUFDWSxJQUFEO0FBQXZLO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVI7QUFDSCxXQUZEO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaVCxFQXFCUXZHLGVBQWUsZ0JBR1g7QUFBSyxlQUFLLEVBQUU7QUFBQ3lHLHFCQUFTLEVBQUM7QUFBWCxXQUFaO0FBQUEsa0NBQ0kscUVBQUMsdURBQUQ7QUFBVSx5QkFBYSxFQUFFLHVCQUFDQyxHQUFEO0FBQUEscUJBQU85RyxRQUFRLENBQUM4RyxHQUFELENBQWY7QUFBQSxhQUF6QjtBQUErQyxpQkFBSyxFQUFFO0FBQUNDLDZCQUFlLEVBQUMsS0FBakI7QUFBdUJuSSxvQkFBTSxFQUFDLE9BQTlCO0FBQXNDQyxtQkFBSyxFQUFDO0FBQTVDLGFBQXREO0FBQTZHLHNCQUFVLEVBQUU7QUFBQ0Qsb0JBQU0sRUFBQyxPQUFSO0FBQWdCQyxtQkFBSyxFQUFDLE9BQXRCO0FBQThCbUksdUJBQVMsRUFBQztBQUF4QyxhQUF6SDtBQUE0SyxlQUFHLEVBQUV6SCxHQUFHLENBQUNNLFNBQUQsQ0FBcEw7QUFBaU0sZ0JBQUksRUFBRWIsSUFBdk07QUFBNk0sb0JBQVEsRUFBRSxrQkFBQzRGLE9BQUQ7QUFBQSxxQkFBV0QsVUFBVSxDQUFDQyxPQUFELENBQXJCO0FBQUE7QUFBdk47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssaUJBQUssRUFBRTtBQUFDaUMsdUJBQVMsRUFBQztBQUFYLGFBQVo7QUFBQSxtQ0FDQyxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBSTFELFFBQVEsRUFBWjtBQUFBLGVBQWpCO0FBQWlDLG1CQUFLLEVBQUMsV0FBdkM7QUFBbUQscUJBQU8sRUFBQyxXQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhXLGdCQVlUO0FBQUEscUJBQ1EsQ0FBQ3BGLG1CQUFELGlCQUVHO0FBQUEsb0NBQ0cscUVBQUMsVUFBRDtBQUFZLDBCQUFZLEVBQUV3QixHQUFHLENBQUNoQixTQUFKLENBQWNXLEtBQWQsb0ZBQWdHSyxHQUFHLENBQUNoQixTQUFKLENBQWNhLElBQTlHLDhCQUFzSUcsR0FBRyxDQUFDaEIsU0FBSixDQUFjVyxLQUFwSixJQUE4SixhQUF4TDtBQUFBLHNDQUNJLHFFQUFDLFVBQUQ7QUFBYSx1QkFBTyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyw0REFBRDtBQUFXLHFCQUFLLEVBQUU7QUFBQzBILHVCQUFLLEVBQUM7QUFBUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBTyx3QkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEseUJBQUszQyxVQUFVLENBQUMyQyxDQUFELEVBQUcsV0FBSCxDQUFmO0FBQUEsaUJBQWpCO0FBQWlELG9CQUFJLEVBQUMsUUFBdEQ7QUFBK0Qsc0JBQU0sRUFBQyxrQ0FBdEU7QUFBeUcsa0JBQUUsRUFBQyxNQUE1RztBQUFtSCxvQkFBSSxFQUFDLE1BQXhIO0FBQStILHFCQUFLLEVBQUU7QUFBQ0MseUJBQU8sRUFBQztBQUFUO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBTUcscUVBQUMsa0JBQUQ7QUFBb0IsNkJBQWUsRUFBRTNILEdBQUcsQ0FBQ2YsWUFBSixDQUFpQlUsS0FBdEQ7QUFBQSxxQ0FDSSxxRUFBQyxxRUFBRDtBQUFjLHVCQUFPLEVBQUVLLEdBQUcsQ0FBQ2YsWUFBSixDQUFpQlUsS0FBakIsb0ZBQW1HSyxHQUFHLENBQUNmLFlBQUosQ0FBaUJZLElBQXBILDhCQUE0SUcsR0FBRyxDQUFDZixZQUFKLENBQWlCVSxLQUE3SixJQUF1SyxhQUE5TDtBQUE2TSxxQkFBSyxFQUFFO0FBQUNnSSx5QkFBTyxFQUFDLE1BQVQ7QUFBZ0JDLGdDQUFjLEVBQUMsUUFBL0I7QUFBd0NDLDRCQUFVLEVBQUM7QUFBbkQsaUJBQXBOO0FBQWtSLHFCQUFLLEVBQUMsTUFBeFI7QUFBK1Isc0JBQU0sRUFBQyxNQUF0UztBQUFBLHdDQUNJLHFFQUFDLFVBQUQ7QUFBWSx5QkFBTyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSxxRUFBQyw0REFBRDtBQUFXLHVCQUFLLEVBQUU7QUFBQ1IseUJBQUssRUFBQztBQUFQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosZUFHSTtBQUFPLDBCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSwyQkFBSzNDLFVBQVUsQ0FBQzJDLENBQUQsRUFBRyxjQUFILENBQWY7QUFBQSxtQkFBakI7QUFBb0Qsd0JBQU0sRUFBQyxrQ0FBM0Q7QUFBOEYsb0JBQUUsRUFBQyxPQUFqRztBQUF5RyxzQkFBSSxFQUFDLE1BQTlHO0FBQXFILHVCQUFLLEVBQUU7QUFBQ0MsMkJBQU8sRUFBQztBQUFUO0FBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSDtBQUFBLDBCQUhYLGVBcUJFLHFFQUFDLFdBQUQ7QUFBYSxxQkFBUyxFQUFFbkosbUJBQXhCO0FBQUEsdUJBR1FBLG1CQUFtQixpQkFDbkIscUVBQUMsZUFBRDtBQUFpQix1QkFBUyxFQUFFaUUsUUFBNUI7QUFBQSxxQ0FDRyxxRUFBQyw4REFBRDtBQUFhLHFCQUFLLEVBQUU7QUFBQ3FGLDBCQUFRLEVBQUMsTUFBVjtBQUFpQlQsdUJBQUssRUFBQztBQUF2QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKUixFQVVRSixNQUFNLENBQUNDLElBQVAsQ0FBWS9FLFFBQVosRUFBc0JnRixHQUF0QixDQUEwQixVQUFDQyxJQUFELEVBQU1iLEtBQU4sRUFBYztBQUVwQyxrQkFBSXdCLFdBQVcsR0FBRyxJQUFsQjs7QUFDQSxrQkFBRyxPQUFPNUYsUUFBUSxDQUFDaUYsSUFBRCxDQUFSLENBQWVuRyxLQUF0QixJQUErQixRQUFsQyxFQUEyQztBQUV2QyxvQkFBSThHLFdBQVcsR0FBR2QsTUFBTSxDQUFDQyxJQUFQLENBQVkvRSxRQUFRLENBQUNpRixJQUFELENBQVIsQ0FBZW5HLEtBQTNCLEVBQWtDa0csR0FBbEMsQ0FBc0MsVUFBQ2EsT0FBRCxFQUFTQyxRQUFUO0FBQUE7QUFBQTtBQUFxQjtBQUN6RSx5RkFBQyxXQUFEO0FBQWEsK0JBQVMsRUFBRTlGLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlcEcsUUFBdkM7QUFBQSw2Q0FDSTtBQUFLLDZCQUFLLEVBQUU7QUFBQzJHLGlDQUFPLEVBQUMsTUFBVDtBQUFnQkMsd0NBQWMsRUFBQztBQUEvQix5QkFBWjtBQUFBLGdEQUNJO0FBQUcsK0JBQUssRUFBRTtBQUFDZCx5Q0FBYSxFQUFDO0FBQWYsMkJBQVY7QUFBQSxvQ0FBeUMzRSxRQUFRLENBQUNpRixJQUFELENBQVIsQ0FBZSxPQUFmLEVBQXdCWSxPQUF4QixFQUFpQyxLQUFqQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBRUkscUVBQUMsb0RBQUQ7QUFBUSxpQ0FBTyxFQUFDLFNBQWhCO0FBQTBCLHVDQUFhLEVBQUUsRUFBekM7QUFBNkMsa0NBQVEsRUFBRTtBQUFBLG1DQUFJdEQsWUFBWSxDQUFDMEMsSUFBRCxFQUFNLEVBQU4sRUFBU1ksT0FBVCxDQUFoQjtBQUFBLDJCQUF2RDtBQUEwRixxQ0FBVyxFQUFFLElBQXZHO0FBQTZHLHVDQUFhLEVBQUUsSUFBNUg7QUFBa0ksaUNBQU8sRUFBRTdGLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlLE9BQWYsRUFBd0JZLE9BQXhCLEVBQWlDLE9BQWpDO0FBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURvRDtBQUFBLGlCQUF0QyxDQUFsQjtBQVFILGVBVkQsTUFVSztBQUVERCwyQkFBVyxnQkFBSSxxRUFBQyxXQUFEO0FBQWEsMkJBQVMsRUFBRTVGLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlcEcsUUFBdkM7QUFBQSx5Q0FDQyxxRUFBQywyREFBRDtBQUNJLHlCQUFLLEVBQUVtQixRQUFRLENBQUNpRixJQUFELENBQVIsQ0FBZWxHLE9BRDFCO0FBRUksNkJBQVMsRUFBRWlCLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlakcsU0FGOUI7QUFHSSx3QkFBSSxFQUFFLENBSFY7QUFJSSw0QkFBUSxFQUFFLGtCQUFDdUcsQ0FBRDtBQUFBLDZCQUFLaEQsWUFBWSxDQUFDMEMsSUFBRCxFQUFNTSxDQUFOLENBQWpCO0FBQUEscUJBSmQ7QUFLSSx5QkFBSyxFQUFFO0FBQUNwSSwyQkFBSyxFQUFDO0FBQVAscUJBTFg7QUFNSSx5QkFBSyxFQUFFNkMsUUFBUSxDQUFDaUYsSUFBRCxDQUFSLENBQWVySixLQU4xQjtBQU9JLDJCQUFPLEVBQUMsVUFQWjtBQVFJLHlCQUFLLEVBQUVvRSxRQUFRLENBQUNpRixJQUFELENBQVIsQ0FBZW5HLEtBUjFCO0FBU0ksOEJBQVUsRUFBRSxDQUFDa0IsUUFBUSxDQUFDaUYsSUFBRCxDQUFSLENBQWVsRyxPQUFoQixHQUEwQmlCLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlaEcsR0FBekMsR0FBK0NlLFFBQVEsQ0FBQ2lGLElBQUQsQ0FBUixDQUFlL0Y7QUFUOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWY7QUFjSDs7QUFFRCxxQkFBTzBHLFdBQVA7QUFDSCxhQWhDRCxDQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQSx3QkFqQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0dIOztHQXZpQnVCeEosVTs7T0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uOWYyMTU3NmIyMTgwYmU0ZWY0MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYUFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQge0Fycm93RHJvcFVwLEVtYWlsLExvY2ssTm90aWZpY2F0aW9uc30gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlLFNwaW5uZXJ9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IENyb3BwZXIgZnJvbSAgXCJyZWFjdC1pbWFnZS1jcm9wXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1VwZGF0ZVByb2ZpbGV9IGZyb20gXCIuLi8uLi8uLi9BcGkvQXBpXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCJcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5pbXBvcnQgVmFsaWRhdGUgZnJvbSBcInZhbGlkYXRvclwiXHJcblxyXG5jb25zdCBFeHRlcmlvciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxubGVmdDo1MCU7XHJcbnRvcDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIxNTBweFwiIDogXCI3MHB4XCJ9OztcclxubWF4LXdpZHRoOjYwMHB4O1xyXG53aWR0aDo5MCU7XHJcbmhlaWdodDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIzNTBweFwiIDogXCI1ODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG56LWluZGV4OjEwMDA7XHJcblxyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmc6MTBweDtcclxub3ZlcmZsb3c6YXV0bztcclxuaGVpZ2h0OjU4MHB4O1xyXG5gXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG56LWluZGV4OjE7XHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7ZGlzcGxheWVkfSk9PiBkaXNwbGF5ZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nLXRvcDokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiMTBweFwiIDogXCI4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpc2ZvcmVkaXR9KT0+aXNmb3JlZGl0ID8gXCIjZTllY2VmXCIgOiBcIndoaXRlXCJ9O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4OyBcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYm9yZGVyLXJhZGl1czoyMHB4O1xyXG5gXHJcbmNvbnN0IExhYmVsaW1hZ2U9c3R5bGVkLmxhYmVsYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjIwMHB4O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjQ1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5jb2xvcjpibGFjaztcclxub3BhY2l0eTowO1xyXG5gXHJcbi8vc2VsZWN0aW9uIGJhciBmb3IgZWRpdGluZ1xyXG5jb25zdCBTZWxlY3Rpb25iYXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmhlaWdodDozMHB4O1xyXG5tYXJnaW4tYm90dG9tOjQwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENoaWxkc29mc2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnRvcDokeyh7aW5uZXJjb2xvcn0pPT5pbm5lcmNvbG9yID8gXCIxMHB4XCIgOiBcIjBcIn07XHJcbmJhY2tncm91bmQtY29sb3I6JHsoe2lubmVyY29sb3J9KT0+aW5uZXJjb2xvciA/IFwiIzdkZTJkMVwiIDogXCIjZmYwYTU0XCJ9O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbndpZHRoOjM4cHg7XHJcbmhlaWdodDozOHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjE4cztcclxucGFkZGluZzo1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbGRlcmZvcnVwaWNvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbnRvcDotNDVweDtcclxubGVmdDokeyh7c2xpcHZhbHVlfSk9PntcclxuICAgIGlmKHNsaXB2YWx1ZSA9PSAxKXtcclxuICAgICAgICByZXR1cm4gXCI1NXB4XCJcclxuICAgIH1lbHNlIGlmKHNsaXB2YWx1ZSA9PSAyKXtcclxuICAgICAgICByZXR1cm4gXCIyNTBweFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCI0NDBweFwiXHJcbiAgICB9XHJcbn19O1xyXG5gXHJcblxyXG5jb25zdCBQcm9maWxldXBsb2FkZWREaXYgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpmaXhlZDtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzO1xyXG50b3A6NTAwcHg7XHJcbm9wYWNpdHk6JHsoe3N1Y2Nlc3NmdWx9KT0+IHN1Y2Nlc3NmdWwgPyBcIjFcIiA6IFwiMFwifTtcclxubGVmdDokeyh7c3VjY2Vzc2Z1bH0pPT4gc3VjY2Vzc2Z1bCA/IFwiMjBweFwiIDogXCI1cHhcIn07XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG56LWluZGV4OjEwMDA7XHJcbmJhY2tncm91bmQtY29sb3I6IzQwM2Q1ODtcclxuY29sb3I6d2hpdGU7XHJcbmJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XHJcbmBcclxuXHJcblxyXG4vL2VtYWlsLHBhc3N3b3JkLG5vdGlmaWNhdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7aXNXaW5kb3dmb3JzZXR0aW5ncyx1cGRhdGVmdW5jLGFjdGl2ZSxlZGl0ZGF0YSxjbG9zZWZ1bmN9KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhlZGl0ZGF0YSlcclxuICAgIGNvbnNvbGUubG9nKGVkaXRkYXRhLmJhY2tncm91bmR1cmwpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHRva2VuOmVkaXRkYXRhLmltYWdldG9rZW4sXHJcbiAgICAgICAgICAgIG5hbWU6ZWRpdGRhdGEuaW1hZ2V1cmxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHRva2VuOmVkaXRkYXRhLmJhY2tncm91bmR0b2tlbixcclxuICAgICAgICAgICAgbmFtZTplZGl0ZGF0YS5iYWNrZ3JvdW5kdXJsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFt1cGxvYWRpbmcsc2V0dXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N1Y2Nlc2Z1bHVwbG9hZCxzZXRzdWNjZXNmdWx1cGxvYWRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZXR5cGUsc2V0aW1hZ2V0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2Usc2V0aW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtyZXN1bHQsc2V0cmVzdWx0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2lzY3JvcHBlcmFjdGl2ZSxzZXRjcm9wcGVyYWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXJpbmZvLHNldHVzZXJpbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJzYVwiLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkt1bGxhbmljaSBBZGlcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTpcInNhXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS2lzaXNlbCBCaWxnaWxlclwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6dHJ1ZSxcclxuICAgICAgICAgICAgbXNnOlwiXCIsXHJcbiAgICAgICAgICAgIGVycm9ybXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIkdlY2VybGkgQmlyIEUtcG9zdGEgYWRyZXNpIGdpcmluICFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ3VycmVudHBhc3N3b3JkOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRXNraSBTaWZyZW5pelwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIkVza2kgc2lmcmVuaSB5YW5saXMgZ2lyZGluIGdhbGliYSwgdGVrcmFyIGRlbmUgIVwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgTmV3cGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJZZW5pIHNpZnJlbml6aSBnaXJpblwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcm1zZzpcIk1ha2Ugc3VyZSB0aGF0IHlvdXIgcGFzc3dvcmQgaGFzIGF0IGxlYXN0IDYgbGVuZ3RoIGFuZCBjb250YWlucyBvbmUgdXBwZXIsIG9uZSBsb3dlciBjaGFyYWN0ZXIgYW5kIG9uZSBudW1iZXIuXCJcclxuICAgICAgICB9LCBcclxuICAgICAgICBWYWxpZGF0aW9uTmV3cGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6XCJcIixcclxuICAgICAgICAgICAgbGFiZWw6XCJZZW5pIHNpZnJlbml6aSB0ZWtyYXIgZ2lyaW5cIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIixcclxuICAgICAgICAgICAgZXJyb3Jtc2c6XCJHaXJkaWdpbml6IHNpZnJlbGVyIGF5bmkgZGVnaWxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTm90aWZpY2F0aW9uczp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgICAgICBXaGVuZm9sbG93OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5Ob3RpZmljYXRpb24uV2hlbmZvbGxvdyxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIHRha2lwIGV0dGlnaW5kZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgV2hlbmxpa2U6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLk5vdGlmaWNhdGlvbi5XaGVubGlrZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6XCJCaXJpIGljZXJpayBiZWdlbmRpZ2luZGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFdoZW5jb21tZW50OntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5Ob3RpZmljYXRpb24uV2hlbmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOlwiQmlyaSB5b3J1bSB5YXB0aWdpbmRhXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbmNoaWxkcyxzZXRzZWxlY3Rpb25jaGlsZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEVtYWlsOnRydWUsXHJcbiAgICAgICAgUGFzc3dvcmQ6ZmFsc2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uOmZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGVkLHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0ud2FybmluZyAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29weVtrZXldLmFjdGl2YXRlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Zm9yc2V0dGluZ3Mpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09IDEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiZW1haWxcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGVjdGVkID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJDdXJyZW50cGFzc3dvcmRcIl0uYWN0aXZhdGUgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS5hY3RpdmF0ZSA9IHRydWUgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7Ly9zZWxlY3RlZCAzXHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtcIk5vdGlmaWNhdGlvbnNcIl0uYWN0aXZhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoa2V5ID09IFwibXVzZXJuYW1lXCIgfHwga2V5ID09IFwicGVyc29uYWx0ZXh0XCIgfHwga2V5ID09IFwiZmlyc3RuYW1lXCIgfHwga2V5ID09IFwic3VybmFtZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH0sW2FjdGl2ZSxzZWxlY3RlZF0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICB9LFthY3RpdmVdKVxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGlmKHNyYy5CYWNraW1hZ2UgIT09IFwiXCIpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGV5eW9cIilcclxuICAgICAgICAgICAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQmFja2ltZ1wiKVxyXG4gICAgICAgICAgICBiYWNraW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIHNldGltYWdlKGJhY2tpbWcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWNraW1nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfSAgICBcclxuXHJcbiAgICB9LFtzcmNdKVxyXG4gICAgKi9cclxuICAgIGNvbnN0IElucHV0ZXJyb3JoYW5kbGVyID0gKHR5cGUsdmFsdWUpPT57XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VybmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaXJzdG5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0ZS5pc0VtYWlsKHZhbHVlKVxyXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLk5ldylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLk5ld3ZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZS5OZXcgIT09IHZhbHVlLk5ld3ZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXRlOlwiVW5lcXVhbFwiLHZhbGlkYXRlOmZhbHNlfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFWYWxpZGF0ZS5pc1N0cm9uZ1Bhc3N3b3JkKHZhbHVlLk5ldyx7bWluU3ltYm9sczowLG1pbk51bWJlcnM6MSxtaW5Mb3dlcmNhc2U6MSxtaW5VcHBlcmNhc2U6MSxtaW5MZW5ndGg6Nn0pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTpcIlN0cm9uZ1wiLHZhbGlkYXRlOmZhbHNlfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXRlOlwiU3VjY2Vzc1wiLHZhbGlkYXRlOnRydWV9XHJcbiAgICAgICAgICAgICAgICAvL25ld3Bhc3N3b3JkIGNoYXJhY3RlciBjaGVja2luZ1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFRvQ2FudmFzID0gYXN5bmMgKCk9PntcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9wbmdcIilcclxuXHJcbiAgICAgICAgc2V0cmVzdWx0KChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW2ltYWdldHlwZV06e3NyYzpiYXNlNjRJbWFnZSxjcm9wdmFsdWVzOnt4OmNyb3AueCx5OmNyb3AueSx3aWR0aDpjcm9wLndpZHRoLGhlaWdodDpjcm9wLmhlaWdodH19fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSW5wdXRoYW5kbGVyID0gKGtleSxldmVudCxzdWJrZXkpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgaWYoa2V5ID09IFwiTm90aWZpY2F0aW9uc1wiKXtcclxuICAgICAgICAgICAgbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdPSAhbXV0YXRlZFtrZXldW1widmFsdWVcIl1bc3Via2V5XVtcInZhbHVlXCJdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgbXV0YXRlZFtrZXldLndhcm5pbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHNldHVzZXJpbmZvKG11dGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlZmlsZSA9IChldmVudCx0eXBlKT0+e1xyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJCYWNraW1hZ2VcIil7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzE2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDo1MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0aW1hZ2V0eXBlKHR5cGUpXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIHNldHNyYygocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRmaWxlKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOmV2ZW50LnRhcmdldC5maWxlc1swXX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlY3JvcCA9IChuZXdjcm9wKT0+e1xyXG4gICAgICAgIC8vYnVyYXlhIGJha1xyXG4gICAgICAgIGlmKGNyb3AuYXNwZWN0ID4gMSl7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueSx4Om5ld2Nyb3AueH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JvcClcclxuXHJcbiAgICAgICAgLy92YWx1ZSBvZiBjcm9wcGVyIHdpZHRoIGhlaWdodCB4IGFuZCB5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VuZHVwZGF0ZXMgPSBhc3luYyAodHlwZW9mdXBkYXRlKT0+e1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fVxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgdmFyIHVwZGF0ZUZvciA9IFwiXCJcclxuXHJcbiAgICAgICAgaWYoIWlzV2luZG93Zm9yc2V0dGluZ3Mpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOIFVQREFURVwiKVxyXG4gICAgICAgICAgICB1cGRhdGVGb3IgPSBcIlByb2ZpbGVcIlxyXG4gICAgICAgICAgICB2YWx1ZXMuYmFja2Nyb3AgPSByZXN1bHQuQmFja2ltYWdlLmNyb3B2YWx1ZXNcclxuICAgICAgICAgICAgdmFsdWVzLnByb2ZpbGUgID0gcmVzdWx0LlByb2ZpbGVpbWFnZS5jcm9wdmFsdWVzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyaW5mbyl7XHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0gXCJlbWFpbFwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXNlcmluZm9ba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHR5cGVvZnVwZGF0ZSA9PSAxKXtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvciA9IFwiRW1haWxcIlxyXG4gICAgICAgICAgICBpZighSW5wdXRlcnJvcmhhbmRsZXIoXCJlbWFpbFwiLHVzZXJpbmZvW1wiZW1haWxcIl0udmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIGNvcHlbXCJlbWFpbFwiXS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29weVtcImVtYWlsXCJdLm1zZyA9IFwiR2VjZXJsaSBCaXIgRS1wb3N0YSBhZHJlc2kgZ2lyaW4gIVwiXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWx1ZXNbXCJlbWFpbFwiXSA9IHVzZXJpbmZvW1wiZW1haWxcIl0udmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYodHlwZW9mdXBkYXRlID09IDIpe1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlRm9yID0gXCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNvbnN0IHtzdGF0ZSx2YWxpZGF0ZX0gPSBJbnB1dGVycm9yaGFuZGxlcihcInBhc3N3b3JkXCIse0N1cnJlbnQ6dXNlcmluZm9bXCJDdXJyZW50cGFzc3dvcmRcIl0udmFsdWUsTmV3OnVzZXJpbmZvW1wiTmV3cGFzc3dvcmRcIl0udmFsdWUsTmV3dmFsaWRhdGlvbjp1c2VyaW5mb1tcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS52YWx1ZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3RhdGUgPT0gXCJVbmVxdWFsXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3B5W1wiVmFsaWRhdGlvbk5ld3Bhc3N3b3JkXCJdLndhcm5pbmcgPSB0cnVlICAgXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlbXCJOZXdwYXNzd29yZFwiXS53YXJuaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFsdWVzW1wiQ3VycmVudHBhc3N3b3JkXCJdID0gdXNlcmluZm9bXCJDdXJyZW50cGFzc3dvcmRcIl0udmFsdWVcclxuICAgICAgICAgICAgdmFsdWVzW1wiTmV3cGFzc3dvcmRcIl0gPSB1c2VyaW5mb1tcIk5ld3Bhc3N3b3JkXCJdLnZhbHVlXHJcbiAgICAgICAgICAgIHZhbHVlc1tcIk5ld1ZhbGlkYXRpb25cIl0gPSB1c2VyaW5mb1tcIlZhbGlkYXRpb25OZXdwYXNzd29yZFwiXS52YWx1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvciA9IFwiTm90aWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWVzW1wiTm90aWZpY2F0aW9uc1wiXSA9IHVzZXJpbmZvW1wiTm90aWZpY2F0aW9uc1wiXVtcInZhbHVlXCJdXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBpZihmaWxlLkJhY2tpbWFnZSAhPT0gXCJcIiAmJiBmaWxlLlByb2ZpbGVpbWFnZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlLkJhY2tpbWFnZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZDJcIixmaWxlLlByb2ZpbGVpbWFnZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlW2ltYWdldHlwZV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQcm9maWxldmFsdWVzXCIsSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgICAgICBcclxuICAgICBcclxuICAgICAgICBzZXR1cGxvYWRpbmcodHJ1ZSlcclxuICAgICAgICBVcGRhdGVQcm9maWxlKHtcclxuICAgICAgICAgICAgdXNlcmRhdGE6Zm9ybURhdGEsXHJcbiAgICAgICAgICAgIHR5cGVvZnVwZGF0ZTp1cGRhdGVGb3IsXHJcbiAgICAgICAgICAgIHNldHVwbG9hZGluZzpzZXR1cGxvYWRpbmcsXHJcbiAgICAgICAgICAgIHNldHN1Y2Nlc2Z1bHVwbG9hZDpzZXRzdWNjZXNmdWx1cGxvYWQsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGxlcj0oa2V5bmFtZSxpbmRleCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnNlbGVjdGlvbmNoaWxkc31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KSB7XHJcbiAgICAgICAgICAgY29weVtrZXldID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29weVtrZXluYW1lXSA9IHRydWVcclxuICAgICAgICBzZXRzZWxlY3RlZChpbmRleCsxKVxyXG4gICAgICAgIHNldHNlbGVjdGlvbmNoaWxkcyhjb3B5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25jcmVhdGVyID0oa2V5bmFtZSk9PntcclxuICAgICAgICBpZihrZXluYW1lID09IFwiRW1haWxcIilcclxuICAgICAgICByZXR1cm4gPEVtYWlsPjwvRW1haWw+XHJcbiAgICAgICAgaWYoa2V5bmFtZSA9PSBcIlBhc3N3b3JkXCIpXHJcbiAgICAgICAgcmV0dXJuIDxMb2NrPjwvTG9jaz5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiTm90aWZpY2F0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIDxOb3RpZmljYXRpb25zPjwvTm90aWZpY2F0aW9ucz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIkJhY2tpbWdcIiBzcmM9e3NyY1tcIkJhY2tpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJQcm9maWxlaW1nXCIgc3JjPXtzcmNbXCJQcm9maWxlaW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGV1cGxvYWRlZERpdiBzdWNjZXNzZnVsPXtzdWNjZXNmdWx1cGxvYWQgPT0gXCJTVUNDRVNTRlVMXCIgPyB0cnVlIDogZmFsc2V9PlByb2ZpbCBCYXNhcml5bGEgR3VuY2VsbGVuZGk8L1Byb2ZpbGV1cGxvYWRlZERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDppc1dpbmRvd2ZvcnNldHRpbmdzID8gXCI1MDBweFwiOlwiMjUwcHhcIixyaWdodDpcIjQwcHhcIix6SW5kZXg6XCIzMDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcyhzZWxlY3RlZCl9IHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRpbmcgPyAoPFNwaW5uZXIgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjVweFwifX0+PC9TcGlubmVyPikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLYXlkZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dpbmRvd2ZvcnNldHRpbmdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8U2VsZWN0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGVjdGlvbmNoaWxkcykubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDaGlsZHNvZnNlbGVjdGlvbiBpbm5lcmNvbG9yPXtzZWxlY3Rpb25jaGlsZHNbaXRlbV19IHN0eWxlPXt7Y29sb3I6c2VsZWN0aW9uY2hpbGRzW2l0ZW1dID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifX0gb25DbGljaz17KCk9PlNlbGVjdGlvbmhhbmRsZXIoaXRlbSxpbmRleCl9PntJY29uY3JlYXRlcihpdGVtKX08L0NoaWxkc29mc2VsZWN0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJhcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjcm9wcGVyYWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyICBvbkltYWdlTG9hZGVkPXsoaW1nKT0+c2V0aW1hZ2UoaW1nKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19ICBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNXaW5kb3dmb3JzZXR0aW5ncyAmJiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtzcmMuQmFja2ltYWdlLnRva2VuID8gYGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXluZXh0LWEwNzRhLmFwcHNwb3QuY29tL28vJHtzcmMuQmFja2ltYWdlLm5hbWV9P2FsdD1tZWRpYSZ0b2tlbj0ke3NyYy5CYWNraW1hZ2UudG9rZW59YCA6IFwiL3lhcHJhay5qcGdcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlICBodG1sRm9yPVwiZmlsZVwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUFsdCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQ2FtZXJhQWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiQmFja2ltYWdlXCIpfSBuYW1lPVwidXBsb2FkXCIgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWdcIiBpZD1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Vob2xkZXIgaXNIYXZpbmdwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlLnRva2VufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlLnRva2VuID8gYGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXluZXh0LWEwNzRhLmFwcHNwb3QuY29tL28vJHtzcmMuUHJvZmlsZWltYWdlLm5hbWV9P2FsdD1tZWRpYSZ0b2tlbj0ke3NyYy5Qcm9maWxlaW1hZ2UudG9rZW59YCA6IFwiL3lhcHJhay5qcGdcIn0gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0gd2lkdGg9XCI4MHB4XCIgaGVpZ2h0PVwiODBweFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcnNldHRpbmdzfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yc2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb2xkZXJmb3J1cGljb24gc2xpcHZhbHVlPXtzZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEcm9wVXAgc3R5bGU9e3tmb250U2l6ZTpcIjgwcHhcIixjb2xvcjpcIiNlOWVjZWZcIn19PjwvQXJyb3dEcm9wVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+eyAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZWxlbWVudHMgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHVzZXJpbmZvW2l0ZW1dLnZhbHVlID09IFwib2JqZWN0XCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmVsZW1lbnRzID0gT2JqZWN0LmtleXModXNlcmluZm9baXRlbV0udmFsdWUpLm1hcCgoc3ViaXRlbSxzdWJpbmRleCk9PigvL3N1YiB2YWx1ZXMgb2Ygbm9pdGlmaWNhdGlvbiBwaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwifX0+e3VzZXJpbmZvW2l0ZW1dW1widmFsdWVcIl1bc3ViaXRlbV1bXCJtc2dcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIG9uQ29sb3I9JyNmZjAwMmInIGFuZGxlRGlhbWV0ZXI9ezIwfSBvbkNoYW5nZT17KCk9PklucHV0aGFuZGxlcihpdGVtLFwiXCIsc3ViaXRlbSl9IGNoZWNrZWRJY29uPXt0cnVlfSB1bmNoZWNrZWRJY29uPXt0cnVlfSBjaGVja2VkPXt1c2VyaW5mb1tpdGVtXVtcInZhbHVlXCJdW3N1Yml0ZW1dW1widmFsdWVcIl19PjwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmVsZW1lbnRzID0gKDxJbnB1dGhvbGRlciBkaXNwbGF5ZWQ9e3VzZXJpbmZvW2l0ZW1dLmFjdGl2YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dXNlcmluZm9baXRlbV0ud2FybmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PklucHV0aGFuZGxlcihpdGVtLGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyaW5mb1tpdGVtXS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXshdXNlcmluZm9baXRlbV0ud2FybmluZyA/IHVzZXJpbmZvW2l0ZW1dLm1zZyA6IHVzZXJpbmZvW2l0ZW1dLmVycm9ybXNnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YmVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==