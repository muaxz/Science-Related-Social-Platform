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
/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Icon */ "./components/UI/Icon.js");
/* harmony import */ var _styledcomponents_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styledcomponents/button */ "./components/styledcomponents/button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
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
    return "35px";
  } else if (slipvalue == 2) {
    return "200px";
  } else {
    return "400px";
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
})(["position:relative;padding-top:", ";background-color:#e9ecef;padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], function (_ref8) {
  var isforedit = _ref8.isforedit;
  return isforedit ? "10px" : "80px";
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
})(["background-color:", ";display:flex;align-items:center;justify-content:center;border-radius:50%;width:38px;height:38px;cursor:pointer;transition-duration:0.18s;padding:5px;&:hover{width:44px;height:44px;}"], function (_ref9) {
  var innercolor = _ref9.innercolor;
  return innercolor ? "white" : "#ff0a54";
}); //email,password,notification

_c10 = Childsofselection;
function Editwindow(_ref10) {
  _s();

  var _this = this;

  var isWindowforedit = _ref10.isWindowforedit,
      updatefunc = _ref10.updatefunc,
      active = _ref10.active,
      editdata = _ref10.editdata,
      closefunc = _ref10.closefunc;
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
      activate: isWindowforedit ? false : true,
      value: editdata.username,
      label: "Kullanici Adi",
      warning: false,
      multiline: false,
      msg: ""
    },
    firstname: {
      activate: isWindowforedit ? false : true,
      value: editdata.firstname,
      label: "Ad",
      warning: false,
      multiline: false,
      msg: ""
    },
    surname: {
      activate: isWindowforedit ? false : true,
      value: editdata.lastname,
      label: "Soyad",
      warning: false,
      multiline: false,
      msg: ""
    },
    personaltext: {
      activate: isWindowforedit ? false : true,
      value: editdata.Personaltext,
      label: "Kisisel Bilgiler",
      warning: false,
      multiline: true,
      msg: ""
    },
    email: {
      activate: isWindowforedit ? true : false,
      value: editdata.email,
      label: "E-Posta",
      warning: false,
      multiline: false,
      msg: "E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir."
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
      copy[key].activate = isWindowforedit ? false : true;

      if (copy[key].label == "E-Posta") {
        copy[key].activate = isWindowforedit ? true : false;
      }
    }

    setuserinfo(copy);
  }, [isWindowforedit]);
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
    var _ref11 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      return _ref11.apply(this, arguments);
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
    var _ref12 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("user/updateprofile", formData, {
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
      return _ref12.apply(this, arguments);
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
      lineNumber: 389,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_8__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 398,
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
      lineNumber: 399,
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
      lineNumber: 400,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
          children: Object.keys(selectionchilds).map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Childsofselection, {
              innercolor: selectionchilds[item],
              style: {
                color: selectionchilds[item] ? "#ff0a54" : "white"
              },
              onClick: function onClick() {
                return Selectionhandler(item, index);
              },
              children: Iconcreater(item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 40
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
        }, this), iscropperactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_image_crop__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
            lineNumber: 416,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              onClick: function onClick() {
                return ToCanvas();
              },
              color: "secondary",
              variant: "contained",
              children: "Upload the file to server"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [!isWindowforedit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
              ImageforBack: src.Backimage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  position: "absolute",
                  top: "225px",
                  right: "10px",
                  zIndex: "1000"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
                  lineNumber: 430,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 433,
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
                lineNumber: 434,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_8__["Porfileimage"], {
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
                  lineNumber: 438,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 439,
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
                  lineNumber: 440,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 437,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 45
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            isforedit: isWindowforedit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Holderforupicon, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDropUp"], {
                style: {
                  fontSize: "80px",
                  color: "#e9ecef"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 37
            }, this), Object.keys(userinfo).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
                displayed: userinfo[item].activate,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
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
                  lineNumber: 455,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 53
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 397,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "+2Bdkwvp6vpAJS9STl3Xga0vE8M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJzbGlwdmFsdWUiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcmVkaXQiLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJCYWNraW1hZ2UiLCJQcm9maWxlaW1hZ2UiLCJmaWxlIiwic2V0ZmlsZSIsImFzcGVjdCIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjcm9wIiwic2V0Y3JvcCIsInNyYyIsInNldHNyYyIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJjcm9wdmFsdWVzIiwicmVzdWx0Iiwic2V0cmVzdWx0IiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ1c2VybmFtZSIsIndhcm5pbmciLCJtdWx0aWxpbmUiLCJtc2ciLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJQZXJzb25hbHRleHQiLCJlbWFpbCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJFbWFpbCIsIlBhc3N3b3JkIiwiTm90aWZpY2F0aW9uIiwic2VsZWN0aW9uY2hpbGRzIiwic2V0c2VsZWN0aW9uY2hpbGRzIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7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QUFldkUsS0FQMUI7QUFRSSw0QkFBVSxFQUFFVyxRQUFRLENBQUM0RCxJQUFELENBQVIsQ0FBZW5FO0FBUi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFSO0FBWUgsYUFkRCxDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkY7QUFBQSx3QkF0QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0VIOztHQTNWdUJwQyxVOztPQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5mMTc0OTdjMzY0YzhlZDkxNGZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgSWNvbmV4dHJhIGZyb20gXCIuLi8uLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcCxFbWFpbCxMb2NrLE5vdGlmaWNhdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ3JvcHBlciBmcm9tICBcInJlYWN0LWltYWdlLWNyb3BcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuXHJcbmNvbnN0IEV4dGVyaW9yID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG5sZWZ0OjUwJTtcclxudG9wOiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjE1MHB4XCIgOiBcIjcwcHhcIn07O1xyXG5tYXgtd2lkdGg6NjAwcHg7XHJcbndpZHRoOjkwJTtcclxuaGVpZ2h0OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjM1MHB4XCIgOiBcIjU4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnotaW5kZXg6MTAwMDtcclxub3ZlcmZsb3c6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwidmlzaWJsZVwiIDogXCJhdXRvXCJ9OztcclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbGRlcmZvcnVwaWNvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2l0aW9uLWR1cmF0aW9uOjAuNXM7XHJcbnRvcDotNDVweDtcclxubGVmdDokeyh7c2xpcHZhbHVlfSk9PntcclxuICAgIGlmKHNsaXB2YWx1ZSA9PSAxKXtcclxuICAgICAgICByZXR1cm4gXCIzNXB4XCJcclxuICAgIH1lbHNlIGlmKHNsaXB2YWx1ZSA9PSAyKXtcclxuICAgICAgICByZXR1cm4gXCIyMDBweFwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCI0MDBweFwiXHJcbiAgICB9XHJcbn19O1xyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IFxyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTYwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5sZWZ0OjMwcHg7XHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7ZGlzcGxheWVkfSk9PiBkaXNwbGF5ZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nLXRvcDokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiMTBweFwiIDogXCI4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNlOWVjZWY7XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjIwcHg7IFxyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5ib3JkZXItcmFkaXVzOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsaW1hZ2U9c3R5bGVkLmxhYmVsYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjIwMHB4O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjQ1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5jb2xvcjpibGFjaztcclxub3BhY2l0eTowO1xyXG5gXHJcbi8vc2VsZWN0aW9uIGJhciBmb3IgZWRpdGluZ1xyXG5jb25zdCBTZWxlY3Rpb25iYXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmhlaWdodDozMHB4O1xyXG5tYXJnaW4tYm90dG9tOjQwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENoaWxkc29mc2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aW5uZXJjb2xvcn0pPT5pbm5lcmNvbG9yID8gXCJ3aGl0ZVwiIDogXCIjZmYwYTU0XCJ9O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czo1MCU7XHJcbndpZHRoOjM4cHg7XHJcbmhlaWdodDozOHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxudHJhbnNpdGlvbi1kdXJhdGlvbjowLjE4cztcclxucGFkZGluZzo1cHg7XHJcbiY6aG92ZXJ7XHJcbiAgICB3aWR0aDo0NHB4O1xyXG4gICAgaGVpZ2h0OjQ0cHg7XHJcbn1cclxuYFxyXG5cclxuLy9lbWFpbCxwYXNzd29yZCxub3RpZmljYXRpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7aXNXaW5kb3dmb3JlZGl0LHVwZGF0ZWZ1bmMsYWN0aXZlLGVkaXRkYXRhLGNsb3NlZnVuY30pe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGVkaXRkYXRhKVxyXG4gICAgY29uc3QgW2ZpbGUsc2V0ZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbY3JvcCxzZXRjcm9wXSA9IHVzZVN0YXRlKHthc3BlY3Q6MTYvMTYsaGVpZ2h0OjIwMCx3aWR0aDoxMDAseDo1MCx5OjUwfSlcclxuICAgIGNvbnN0IFtzcmMsc2V0c3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpbWFnZXR5cGUsc2V0aW1hZ2V0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2Usc2V0aW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtyZXN1bHQsc2V0cmVzdWx0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2lzY3JvcHBlcmFjdGl2ZSxzZXRjcm9wcGVyYWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXJpbmZvLHNldHVzZXJpbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkt1bGxhbmljaSBBZGlcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiQWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiU295YWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc29uYWx0ZXh0OntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5QZXJzb25hbHRleHQsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS2lzaXNlbCBCaWxnaWxlclwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6dHJ1ZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgbGFiZWw6XCJFLVBvc3RhXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiRS1wb3N0YW5pIGRlZ2lzdGlybWVrIGlzdGVyc2VuLCB5ZW5pIGdpcmRpZ2luIGFkcmVzZSBiaXIga29kIGdvbmRlcmlsaWNlayBsdXRmZW4gb251IGdpci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25jaGlsZHMsc2V0c2VsZWN0aW9uY2hpbGRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBFbWFpbDp0cnVlLFxyXG4gICAgICAgIFBhc3N3b3JkOmZhbHNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbjpmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZCxzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgIGlmKGNvcHlba2V5XS5sYWJlbCA9PSBcIkUtUG9zdGFcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgIFxyXG4gICAgfSxbaXNXaW5kb3dmb3JlZGl0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihzcmMuQmFja2ltYWdlICE9PSBcIlwiKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleXlvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JhY2tpbWdcIilcclxuICAgICAgICAgICAgYmFja2ltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZShiYWNraW1nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFja2ltZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH0gICAgXHJcblxyXG4gICAgfSxbc3JjXSlcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgVG9DYW52YXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGhcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHRcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wLndpZHRoLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWdlL3BuZ1wiKVxyXG5cclxuICAgICAgICBzZXRyZXN1bHQoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbaW1hZ2V0eXBlXTp7c3JjOmJhc2U2NEltYWdlLGNyb3B2YWx1ZXM6e3g6Y3JvcC54LHk6Y3JvcC55LHdpZHRoOmNyb3Aud2lkdGgsaGVpZ2h0OmNyb3AuaGVpZ2h0fX19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJbnB1dGhhbmRsZXIgPSAoa2V5LGV2ZW50KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjcm9wKVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5iYWNrY3JvcCA9IHJlc3VsdC5CYWNraW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvdXBkYXRlcHJvZmlsZWAsZm9ybURhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgIFxyXG4gICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VsZWN0aW9uaGFuZGxlcj0oa2V5bmFtZSxpbmRleCk9PntcclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnNlbGVjdGlvbmNoaWxkc31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KSB7XHJcbiAgICAgICAgICAgY29weVtrZXldID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29weVtrZXluYW1lXSA9IHRydWVcclxuICAgICAgICBzZXRzZWxlY3RlZChpbmRleCsxKVxyXG4gICAgICAgIHNldHNlbGVjdGlvbmNoaWxkcyhjb3B5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEljb25jcmVhdGVyID0oa2V5bmFtZSk9PntcclxuICAgICAgICBpZihrZXluYW1lID09IFwiRW1haWxcIilcclxuICAgICAgICByZXR1cm4gPEVtYWlsPjwvRW1haWw+XHJcbiAgICAgICAgaWYoa2V5bmFtZSA9PSBcIlBhc3N3b3JkXCIpXHJcbiAgICAgICAgcmV0dXJuIDxMb2NrPjwvTG9jaz5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiTm90aWZpY2F0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIDxOb3RpZmljYXRpb25zPjwvTm90aWZpY2F0aW9ucz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIkJhY2tpbWdcIiBzcmM9e3NyY1tcIkJhY2tpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJQcm9maWxlaW1nXCIgc3JjPXtzcmNbXCJQcm9maWxlaW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9uY2hpbGRzKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDaGlsZHNvZnNlbGVjdGlvbiBpbm5lcmNvbG9yPXtzZWxlY3Rpb25jaGlsZHNbaXRlbV19IHN0eWxlPXt7Y29sb3I6c2VsZWN0aW9uY2hpbGRzW2l0ZW1dID8gXCIjZmYwYTU0XCIgOiBcIndoaXRlXCJ9fSBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGxlcihpdGVtLGluZGV4KX0+e0ljb25jcmVhdGVyKGl0ZW0pfTwvQ2hpbGRzb2ZzZWxlY3Rpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjcm9wcGVyYWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyICBvbkltYWdlTG9hZGVkPXsoaW1nKT0+c2V0aW1hZ2UoaW1nKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19ICBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNXaW5kb3dmb3JlZGl0ICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjIyNXB4XCIscmlnaHQ6XCIxMHB4XCIsekluZGV4OlwiMTAwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcygpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcmVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwIHN0eWxlPXt7Zm9udFNpemU6XCI4MHB4XCIsY29sb3I6XCIjZTllY2VmXCJ9fT48L0Fycm93RHJvcFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm9baXRlbV0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dXNlcmluZm9baXRlbV0ubXNnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==