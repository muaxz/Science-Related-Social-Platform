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
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11__);






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
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;"], function (_ref6) {
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

  var isWindowforedit = _ref11.isWindowforedit,
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
      lineNumber: 385,
      columnNumber: 16
    }, _this);
    if (keyname == "Password") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Lock"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 16
    }, _this);
    if (keyname == "Notification") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Notifications"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 16
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 395,
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
      lineNumber: 396,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [isWindowforedit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
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
              lineNumber: 404,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
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
            lineNumber: 414,
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
              lineNumber: 416,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 413,
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
                  lineNumber: 428,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 431,
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
                lineNumber: 432,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 426,
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
                  lineNumber: 436,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 437,
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
                  lineNumber: 438,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 435,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 45
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            isforedit: isWindowforedit,
            children: [isWindowforedit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Holderforupicon, {
              slipvalue: selected,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDropUp"], {
                style: {
                  fontSize: "80px",
                  color: "#e9ecef"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 41
            }, this), Object.keys(userinfo).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
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
                  lineNumber: 457,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 53
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 393,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJzbGlwdmFsdWUiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiaW5uZXJjb2xvciIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcmVkaXQiLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJCYWNraW1hZ2UiLCJQcm9maWxlaW1hZ2UiLCJmaWxlIiwic2V0ZmlsZSIsImFzcGVjdCIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjcm9wIiwic2V0Y3JvcCIsInNyYyIsInNldHNyYyIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJjcm9wdmFsdWVzIiwicmVzdWx0Iiwic2V0cmVzdWx0IiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ1c2VybmFtZSIsIndhcm5pbmciLCJtdWx0aWxpbmUiLCJtc2ciLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJQZXJzb25hbHRleHQiLCJlbWFpbCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJFbWFpbCIsIlBhc3N3b3JkIiwiTm90aWZpY2F0aW9uIiwic2VsZWN0aW9uY2hpbGRzIiwic2V0c2VsZWN0aW9uY2hpbGRzIiwic2VsZWN0ZWQiLCJzZXRzZWxlY3RlZCIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJTZWxlY3Rpb25oYW5kbGVyIiwia2V5bmFtZSIsImluZGV4IiwiSWNvbmNyZWF0ZXIiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImNvbG9yIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxr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UCxtQkFKWDtBQUtJLHVCQUFLLEVBQUU2QixRQUFRLENBQUM0RCxJQUFELENBQVIsQ0FBZTNHLEtBTDFCO0FBTUkseUJBQU8sRUFBQyxVQU5aO0FBT0ksdUJBQUssRUFBRStDLFFBQVEsQ0FBQzRELElBQUQsQ0FBUixDQUFldkUsS0FQMUI7QUFRSSw0QkFBVSxFQUFFVyxRQUFRLENBQUM0RCxJQUFELENBQVIsQ0FBZW5FO0FBUi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFSO0FBWUgsYUFkRCxDQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkY7QUFBQSx3QkF4QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUZIOztHQWpXdUJwQyxVOztPQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5kYTNiMjQwNjY3NmFmZDkyNDBiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQge0Fycm93RHJvcFVwLEVtYWlsLExvY2ssTm90aWZpY2F0aW9uc30gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5vdmVyZmxvdzokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCJ2aXNpYmxlXCIgOiBcImF1dG9cIn07O1xyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSG9sZGVyZm9ydXBpY29uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC41cztcclxudG9wOi00NXB4O1xyXG5sZWZ0OiR7KHtzbGlwdmFsdWV9KT0+e1xyXG4gICAgaWYoc2xpcHZhbHVlID09IDEpe1xyXG4gICAgICAgIHJldHVybiBcIjU1cHhcIlxyXG4gICAgfWVsc2UgaWYoc2xpcHZhbHVlID09IDIpe1xyXG4gICAgICAgIHJldHVybiBcIjI1MHB4XCJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcIjQ0MHB4XCJcclxuICAgIH1cclxufX07XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuXHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjokeyh7aXNmb3JlZGl0fSk9PmlzZm9yZWRpdCA/IFwiI2U5ZWNlZlwiIDogXCJ3aGl0ZVwifTtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MjAwcHg7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5vcGFjaXR5OjA7XHJcbmBcclxuLy9zZWxlY3Rpb24gYmFyIGZvciBlZGl0aW5nXHJcbmNvbnN0IFNlbGVjdGlvbmJhciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuaGVpZ2h0OjMwcHg7XHJcbm1hcmdpbi1ib3R0b206NDBweDtcclxuYFxyXG5cclxuY29uc3QgQ2hpbGRzb2ZzZWxlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7KHtpbm5lcmNvbG9yfSk9PmlubmVyY29sb3IgPyBcIiM3ZGUyZDFcIiA6IFwiI2ZmMGE1NFwifTtcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG53aWR0aDozOHB4O1xyXG5oZWlnaHQ6MzhweDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbnRyYW5zaXRpb24tZHVyYXRpb246MC4xOHM7XHJcbnBhZGRpbmc6NXB4O1xyXG4mOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpcclxufVxyXG5gXHJcblxyXG4vL2VtYWlsLHBhc3N3b3JkLG5vdGlmaWNhdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0d2luZG93KHtpc1dpbmRvd2ZvcmVkaXQsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG11c2VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS3VsbGFuaWNpIEFkaVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXJzdG5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLlBlcnNvbmFsdGV4dCxcclxuICAgICAgICAgICAgbGFiZWw6XCJLaXNpc2VsIEJpbGdpbGVyXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbmNoaWxkcyxzZXRzZWxlY3Rpb25jaGlsZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEVtYWlsOnRydWUsXHJcbiAgICAgICAgUGFzc3dvcmQ6ZmFsc2UsXHJcbiAgICAgICAgTm90aWZpY2F0aW9uOmZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlbGVjdGVkLHNldHNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4udXNlcmluZm99XHJcbiAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpe1xyXG4gICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBpc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgaWYoY29weVtrZXldLmxhYmVsID09IFwiRS1Qb3N0YVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBpc1dpbmRvd2ZvcmVkaXQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgXHJcbiAgICB9LFtpc1dpbmRvd2ZvcmVkaXRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICB9LFthY3RpdmVdKVxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGlmKHNyYy5CYWNraW1hZ2UgIT09IFwiXCIpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGV5eW9cIilcclxuICAgICAgICAgICAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQmFja2ltZ1wiKVxyXG4gICAgICAgICAgICBiYWNraW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIHNldGltYWdlKGJhY2tpbWcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWNraW1nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfSAgICBcclxuXHJcbiAgICB9LFtzcmNdKVxyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodFxyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gY2FudmFzLnRvRGF0YVVSTChcImltZ2UvcG5nXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgbXV0YXRlZFtrZXldLnZhbHVlPWV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldHVzZXJpbmZvKG11dGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlZmlsZSA9IChldmVudCx0eXBlKT0+e1xyXG5cclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWNyb3AgPSAobmV3Y3JvcCk9PntcclxuICAgICAgICAvL2J1cmF5YSBiYWtcclxuICAgICAgICBpZihjcm9wLmFzcGVjdCA+IDEpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnkseDpuZXdjcm9wLnh9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyb3ApXHJcblxyXG4gICAgICAgIC8vdmFsdWUgb2YgY3JvcHBlciB3aWR0aCBoZWlnaHQgeCBhbmQgeVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbmR1cGRhdGVzID0gYXN5bmMgKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyaW5mbyl7XHJcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXNlcmluZm9ba2V5XS52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWVzLmJhY2tjcm9wID0gcmVzdWx0LkJhY2tpbWFnZS5jcm9wdmFsdWVzXHJcbiAgICAgICAgdmFsdWVzLnByb2ZpbGUgID0gcmVzdWx0LlByb2ZpbGVpbWFnZS5jcm9wdmFsdWVzXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBpZihmaWxlLkJhY2tpbWFnZSAhPT0gXCJcIiAmJiBmaWxlLlByb2ZpbGVpbWFnZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlLkJhY2tpbWFnZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZDJcIixmaWxlLlByb2ZpbGVpbWFnZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlW2ltYWdldHlwZV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQcm9maWxldmFsdWVzXCIsSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgdHJ5e1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgdXNlci91cGRhdGVwcm9maWxlYCxmb3JtRGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgXHJcbiAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVBMT0FEIEVSUk9SUlJSUlJSXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZWxlY3Rpb25oYW5kbGVyPShrZXluYW1lLGluZGV4KT0+e1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4uc2VsZWN0aW9uY2hpbGRzfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpIHtcclxuICAgICAgICAgICBjb3B5W2tleV0gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb3B5W2tleW5hbWVdID0gdHJ1ZVxyXG4gICAgICAgIHNldHNlbGVjdGVkKGluZGV4KzEpXHJcbiAgICAgICAgc2V0c2VsZWN0aW9uY2hpbGRzKGNvcHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSWNvbmNyZWF0ZXIgPShrZXluYW1lKT0+e1xyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJFbWFpbFwiKVxyXG4gICAgICAgIHJldHVybiA8RW1haWw+PC9FbWFpbD5cclxuICAgICAgICBpZihrZXluYW1lID09IFwiUGFzc3dvcmRcIilcclxuICAgICAgICByZXR1cm4gPExvY2s+PC9Mb2NrPlxyXG4gICAgICAgIGlmKGtleW5hbWUgPT0gXCJOb3RpZmljYXRpb25cIilcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbnM+PC9Ob3RpZmljYXRpb25zPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiQmFja2ltZ1wiIHNyYz17c3JjW1wiQmFja2ltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIlByb2ZpbGVpbWdcIiBzcmM9e3NyY1tcIlByb2ZpbGVpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2luZG93Zm9yZWRpdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPFNlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3Rpb25jaGlsZHMpLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8Q2hpbGRzb2ZzZWxlY3Rpb24gaW5uZXJjb2xvcj17c2VsZWN0aW9uY2hpbGRzW2l0ZW1dfSBzdHlsZT17e2NvbG9yOnNlbGVjdGlvbmNoaWxkc1tpdGVtXSA/IFwid2hpdGVcIiA6IFwid2hpdGVcIn19IG9uQ2xpY2s9eygpPT5TZWxlY3Rpb25oYW5kbGVyKGl0ZW0saW5kZXgpfT57SWNvbmNyZWF0ZXIoaXRlbSl9PC9DaGlsZHNvZnNlbGVjdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25iYXI+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgb25JbWFnZUxvYWRlZD17KGltZyk9PnNldGltYWdlKGltZyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCIsaGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCJ9fSAgaW1hZ2VTdHlsZT17e2hlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwiLG9iamVjdEZpdDpcImNvdmVyXCJ9fSAgc3JjPXtzcmNbaW1hZ2V0eXBlXX0gY3JvcD17Y3JvcH0gb25DaGFuZ2U9eyhuZXdjcm9wKT0+dXBkYXRlY3JvcChuZXdjcm9wKX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+VG9DYW52YXMoKX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgPlVwbG9hZCB0aGUgZmlsZSB0byBzZXJ2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgIWlzV2luZG93Zm9yZWRpdCAmJiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtzcmMuQmFja2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIyMjVweFwiLHJpZ2h0OlwiMTBweFwiLHpJbmRleDpcIjEwMDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+U2VuZHVwZGF0ZXMoKX0gc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPktheWRldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgcHJvZmlsZT17c3JjLlByb2ZpbGVpbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uIGlzZm9yZWRpdD17aXNXaW5kb3dmb3JlZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW5kb3dmb3JlZGl0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uIHNsaXB2YWx1ZT17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwIHN0eWxlPXt7Zm9udFNpemU6XCI4MHB4XCIsY29sb3I6XCIjZTllY2VmXCJ9fT48L0Fycm93RHJvcFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ib2xkZXJmb3J1cGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm9baXRlbV0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dXNlcmluZm9baXRlbV0ubXNnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==