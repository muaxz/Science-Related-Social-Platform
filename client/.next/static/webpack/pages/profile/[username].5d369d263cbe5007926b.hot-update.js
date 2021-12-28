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
})(["position:absolute;top:-45px;left:20px;"]);
_c3 = Holderforupicon;
var Background = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-3"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], function (_ref5) {
  var ImageforBack = _ref5.ImageforBack;
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
})(["display:", ";margin-top:20px;"], function (_ref6) {
  var displayed = _ref6.displayed;
  return displayed ? "block" : "none";
});
_c6 = Inputholder;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-6"
})(["position:relative;padding-top:", ";background-color:#e9ecef;padding-left:20px;padding-right:20px;padding-bottom:20px;border-radius:20px;"], function (_ref7) {
  var isforedit = _ref7.isforedit;
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
})(["display:flex;background-color:red;height:30px;margin-bottom:30px;"]);
_c9 = Selectionbar;
var Childsofselection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Childsofselection",
  componentId: "sc-9h7al1-9"
})([""]); //email,password,notification

_c10 = Childsofselection;
function Editwindow(_ref8) {
  _s();

  var _this = this;

  var isWindowforedit = _ref8.isWindowforedit,
      updatefunc = _ref8.updatefunc,
      active = _ref8.active,
      editdata = _ref8.editdata,
      closefunc = _ref8.closefunc;
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
    var _ref9 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      return _ref9.apply(this, arguments);
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
    var _ref10 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
      return _ref10.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_8__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 351,
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
      lineNumber: 352,
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
      lineNumber: 353,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Childsofselection, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
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
            lineNumber: 364,
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
              lineNumber: 366,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 363,
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
                  lineNumber: 378,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
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
                lineNumber: 382,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 376,
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
                  lineNumber: 386,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
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
                  lineNumber: 388,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 384,
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
                lineNumber: 397,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
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
                  lineNumber: 403,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 53
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 350,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "renaVJFfSI+OTNJuECI+jZsqlVo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiRWRpdHdpbmRvdyIsImlzV2luZG93Zm9yZWRpdCIsInVwZGF0ZWZ1bmMiLCJlZGl0ZGF0YSIsImNsb3NlZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImNyb3B2YWx1ZXMiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJpc2Nyb3BwZXJhY3RpdmUiLCJzZXRjcm9wcGVyYWN0aXZlIiwibXVzZXJuYW1lIiwiYWN0aXZhdGUiLCJ2YWx1ZSIsInVzZXJuYW1lIiwid2FybmluZyIsIm11bHRpbGluZSIsIm1zZyIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJsYXN0bmFtZSIsInBlcnNvbmFsdGV4dCIsIlBlcnNvbmFsdGV4dCIsImVtYWlsIiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJpbWciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3RGaXQiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUNKO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBREksRUFLUjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE1BQXZDO0FBQUEsQ0FMUSxF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RUFBTVIsQ0FBTixDQUFqQjtBQUFBLG1CQUhkO0FBSUksdUJBQUssRUFBRTtBQUFDckYseUJBQUssRUFBQztBQUFQLG1CQUpYO0FBS0ksdUJBQUssRUFBRTZCLFFBQVEsQ0FBQ2dFLElBQUQsQ0FBUixDQUFlOUcsS0FMMUI7QUFNSSx5QkFBTyxFQUFDLFVBTlo7QUFPSSx1QkFBSyxFQUFFOEMsUUFBUSxDQUFDZ0UsSUFBRCxDQUFSLENBQWUzRSxLQVAxQjtBQVFJLDRCQUFVLEVBQUVXLFFBQVEsQ0FBQ2dFLElBQUQsQ0FBUixDQUFldkU7QUFSL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVI7QUFZSCxhQWRELENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCRjtBQUFBLHdCQWpCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwRUg7O0dBN1R1QnBDLFU7O09BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjVkMzY5ZDI2M2NiZTUwMDc5MjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBJY29uZXh0cmEgZnJvbSBcIi4uLy4uL1VJL0ljb25cIlxyXG5pbXBvcnQge0Fycm93RHJvcFVwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtCbGFjayxQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IENyb3BwZXIgZnJvbSAgXCJyZWFjdC1pbWFnZS1jcm9wXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiXHJcblxyXG5jb25zdCBFeHRlcmlvciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxubGVmdDo1MCU7XHJcbnRvcDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIxNTBweFwiIDogXCI3MHB4XCJ9OztcclxubWF4LXdpZHRoOjYwMHB4O1xyXG53aWR0aDo5MCU7XHJcbmhlaWdodDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIzNTBweFwiIDogXCI1ODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG56LWluZGV4OjEwMDA7XHJcbm92ZXJmbG93OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcInZpc2libGVcIiA6IFwiYXV0b1wifTs7XHJcbmBcclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZzoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBIb2xkZXJmb3J1cGljb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOi00NXB4O1xyXG5sZWZ0OjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtkaXNwbGF5ZWR9KT0+IGRpc3BsYXllZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmctdG9wOiR7KHtpc2ZvcmVkaXR9KT0+aXNmb3JlZGl0ID8gXCIxMHB4XCIgOiBcIjgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6I2U5ZWNlZjtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MjAwcHg7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5vcGFjaXR5OjA7XHJcbmBcclxuLy9zZWxlY3Rpb24gYmFyIGZvciBlZGl0aW5nXHJcbmNvbnN0IFNlbGVjdGlvbmJhciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbmhlaWdodDozMHB4O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbmBcclxuXHJcbmNvbnN0IENoaWxkc29mc2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbi8vZW1haWwscGFzc3dvcmQsbm90aWZpY2F0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe2lzV2luZG93Zm9yZWRpdCx1cGRhdGVmdW5jLGFjdGl2ZSxlZGl0ZGF0YSxjbG9zZWZ1bmN9KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhlZGl0ZGF0YSlcclxuICAgIGNvbnN0IFtmaWxlLHNldGZpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Nyb3Asc2V0Y3JvcF0gPSB1c2VTdGF0ZSh7YXNwZWN0OjE2LzE2LGhlaWdodDoyMDAsd2lkdGg6MTAwLHg6NTAseTo1MH0pXHJcbiAgICBjb25zdCBbc3JjLHNldHNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbXVzZXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuUGVyc29uYWx0ZXh0LFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWUsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiRS1Qb3N0YVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIkUtcG9zdGFuaSBkZWdpc3Rpcm1layBpc3RlcnNlbiwgeWVuaSBnaXJkaWdpbiBhZHJlc2UgYmlyIGtvZCBnb25kZXJpbGljZWsgbHV0ZmVuIG9udSBnaXIuXCJcclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7Li4udXNlcmluZm99XHJcbiAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvcHkpe1xyXG4gICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBpc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgaWYoY29weVtrZXldLmxhYmVsID09IFwiRS1Qb3N0YVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W2tleV0uYWN0aXZhdGUgPSBpc1dpbmRvd2ZvcmVkaXQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0dXNlcmluZm8oY29weSlcclxuICAgICAgXHJcbiAgICB9LFtpc1dpbmRvd2ZvcmVkaXRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICB9LFthY3RpdmVdKVxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgIGlmKHNyYy5CYWNraW1hZ2UgIT09IFwiXCIpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGV5eW9cIilcclxuICAgICAgICAgICAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQmFja2ltZ1wiKVxyXG4gICAgICAgICAgICBiYWNraW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIHNldGltYWdlKGJhY2tpbWcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWNraW1nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgfSAgICBcclxuXHJcbiAgICB9LFtzcmNdKVxyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodFxyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgICAgY3JvcC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gY2FudmFzLnRvRGF0YVVSTChcImltZ2UvcG5nXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgbXV0YXRlZFtrZXldLnZhbHVlPWV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldHVzZXJpbmZvKG11dGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlZmlsZSA9IChldmVudCx0eXBlKT0+e1xyXG5cclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWNyb3AgPSAobmV3Y3JvcCk9PntcclxuICAgICAgICAvL2J1cmF5YSBiYWtcclxuICAgICAgICBpZihjcm9wLmFzcGVjdCA+IDEpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnkseDpuZXdjcm9wLnh9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyb3ApXHJcblxyXG4gICAgICAgIC8vdmFsdWUgb2YgY3JvcHBlciB3aWR0aCBoZWlnaHQgeCBhbmQgeVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbmR1cGRhdGVzID0gYXN5bmMgKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyaW5mbyl7XHJcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXNlcmluZm9ba2V5XS52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWVzLmJhY2tjcm9wID0gcmVzdWx0LkJhY2tpbWFnZS5jcm9wdmFsdWVzXHJcbiAgICAgICAgdmFsdWVzLnByb2ZpbGUgID0gcmVzdWx0LlByb2ZpbGVpbWFnZS5jcm9wdmFsdWVzXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBpZihmaWxlLkJhY2tpbWFnZSAhPT0gXCJcIiAmJiBmaWxlLlByb2ZpbGVpbWFnZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlLkJhY2tpbWFnZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZDJcIixmaWxlLlByb2ZpbGVpbWFnZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlW2ltYWdldHlwZV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQcm9maWxldmFsdWVzXCIsSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgdHJ5e1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgdXNlci91cGRhdGVwcm9maWxlYCxmb3JtRGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgXHJcbiAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVBMT0FEIEVSUk9SUlJSUlJSXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIkJhY2tpbWdcIiBzcmM9e3NyY1tcIkJhY2tpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJQcm9maWxlaW1nXCIgc3JjPXtzcmNbXCJQcm9maWxlaW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoaWxkc29mc2VsZWN0aW9uPjwvQ2hpbGRzb2ZzZWxlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2Nyb3BwZXJhY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXIgIG9uSW1hZ2VMb2FkZWQ9eyhpbWcpPT5zZXRpbWFnZShpbWcpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLGhlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwifX0gIGltYWdlU3R5bGU9e3toZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIixvYmplY3RGaXQ6XCJjb3ZlclwifX0gIHNyYz17c3JjW2ltYWdldHlwZV19IGNyb3A9e2Nyb3B9IG9uQ2hhbmdlPXsobmV3Y3JvcCk9PnVwZGF0ZWNyb3AobmV3Y3JvcCl9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlRvQ2FudmFzKCl9IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiID5VcGxvYWQgdGhlIGZpbGUgdG8gc2VydmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICFpc1dpbmRvd2ZvcmVkaXQgJiYgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kIEltYWdlZm9yQmFjaz17c3JjLkJhY2tpbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMjI1cHhcIixyaWdodDpcIjEwcHhcIix6SW5kZXg6XCIxMDAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PlNlbmR1cGRhdGVzKCl9IHN0eWxlPXt7dGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5LYXlkZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlICBodG1sRm9yPVwiZmlsZVwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUFsdCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQ2FtZXJhQWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiQmFja2ltYWdlXCIpfSBuYW1lPVwidXBsb2FkXCIgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWdcIiBpZD1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3JmaWxlaW1hZ2Ugc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0gd2lkdGg9XCI4MHB4XCIgaGVpZ2h0PVwiODBweFwiIHByb2ZpbGU9e3NyYy5Qcm9maWxlaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgaHRtbEZvcj1cImZpbGUyXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUFsdCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQ2FtZXJhQWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIlByb2ZpbGVpbWFnZVwiKX0gYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWdcIiBpZD1cImZpbGUyXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvcm1hdGlvbiBpc2ZvcmVkaXQ9e2lzV2luZG93Zm9yZWRpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb2xkZXJmb3J1cGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEcm9wVXAgc3R5bGU9e3tmb250U2l6ZTpcIjgwcHhcIixjb2xvcjpcIiNlOWVjZWZcIn19PjwvQXJyb3dEcm9wVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxJbnB1dGhvbGRlciBkaXNwbGF5ZWQ9e3VzZXJpbmZvW2l0ZW1dLmFjdGl2YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5JbnB1dGhhbmRsZXIoaXRlbSxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyaW5mb1tpdGVtXS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt1c2VyaW5mb1tpdGVtXS5tc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9