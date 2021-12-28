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
})(["position:relative;padding:10px;padding-top:60px;"]);
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
})(["display:flex;background-color:red;height:10px;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiRWRpdHdpbmRvdyIsImlzV2luZG93Zm9yZWRpdCIsInVwZGF0ZWZ1bmMiLCJlZGl0ZGF0YSIsImNsb3NlZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImNyb3B2YWx1ZXMiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJpc2Nyb3BwZXJhY3RpdmUiLCJzZXRjcm9wcGVyYWN0aXZlIiwibXVzZXJuYW1lIiwiYWN0aXZhdGUiLCJ2YWx1ZSIsInVzZXJuYW1lIiwid2FybmluZyIsIm11bHRpbGluZSIsIm1zZyIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJsYXN0bmFtZSIsInBlcnNvbmFsdGV4dCIsIlBlcnNvbmFsdGV4dCIsImVtYWlsIiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsInVzZUVmZmVjdCIsImNvcHkiLCJrZXkiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiYmFja2Nyb3AiLCJwcm9maWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJpbWciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3RGaXQiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUNKO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBREksRUFLUjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE1BQXZDO0FBQUEsQ0FMUSxF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RUFBTVIsQ0FBTixDQUFqQjtBQUFBLG1CQUhkO0FBSUksdUJBQUssRUFBRTtBQUFDckYseUJBQUssRUFBQztBQUFQLG1CQUpYO0FBS0ksdUJBQUssRUFBRTZCLFFBQVEsQ0FBQ2dFLElBQUQsQ0FBUixDQUFlOUcsS0FMMUI7QUFNSSx5QkFBTyxFQUFDLFVBTlo7QUFPSSx1QkFBSyxFQUFFOEMsUUFBUSxDQUFDZ0UsSUFBRCxDQUFSLENBQWUzRSxLQVAxQjtBQVFJLDRCQUFVLEVBQUVXLFFBQVEsQ0FBQ2dFLElBQUQsQ0FBUixDQUFldkU7QUFSL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVI7QUFZSCxhQWRELENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCRjtBQUFBLHdCQWpCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwRUg7O0dBN1R1QnBDLFU7O09BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmEwM2FiYTM4MTgwYjU0ZTI3NTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBJY29uZXh0cmEgZnJvbSBcIi4uLy4uL1VJL0ljb25cIlxyXG5pbXBvcnQge0Fycm93RHJvcFVwfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCJcclxuaW1wb3J0IHtCbGFjayxQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IENyb3BwZXIgZnJvbSAgXCJyZWFjdC1pbWFnZS1jcm9wXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiXHJcblxyXG5jb25zdCBFeHRlcmlvciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxubGVmdDo1MCU7XHJcbnRvcDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIxNTBweFwiIDogXCI3MHB4XCJ9OztcclxubWF4LXdpZHRoOjYwMHB4O1xyXG53aWR0aDo5MCU7XHJcbmhlaWdodDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIzNTBweFwiIDogXCI1ODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG56LWluZGV4OjEwMDA7XHJcbm92ZXJmbG93OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcInZpc2libGVcIiA6IFwiYXV0b1wifTs7XHJcbmBcclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLXRvcDo2MHB4O1xyXG5gXHJcblxyXG5jb25zdCBIb2xkZXJmb3J1cGljb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOi00NXB4O1xyXG5sZWZ0OjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHtkaXNwbGF5ZWR9KT0+IGRpc3BsYXllZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmctdG9wOiR7KHtpc2ZvcmVkaXR9KT0+aXNmb3JlZGl0ID8gXCIxMHB4XCIgOiBcIjgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6I2U5ZWNlZjtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MjAwcHg7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5vcGFjaXR5OjA7XHJcbmBcclxuLy9zZWxlY3Rpb24gYmFyIGZvciBlZGl0aW5nXHJcbmNvbnN0IFNlbGVjdGlvbmJhciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbmhlaWdodDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBDaGlsZHNvZnNlbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG4vL2VtYWlsLHBhc3N3b3JkLG5vdGlmaWNhdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0d2luZG93KHtpc1dpbmRvd2ZvcmVkaXQsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG11c2VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS3VsbGFuaWNpIEFkaVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXJzdG5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLlBlcnNvbmFsdGV4dCxcclxuICAgICAgICAgICAgbGFiZWw6XCJLaXNpc2VsIEJpbGdpbGVyXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgIGlmKGNvcHlba2V5XS5sYWJlbCA9PSBcIkUtUG9zdGFcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgIFxyXG4gICAgfSxbaXNXaW5kb3dmb3JlZGl0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihzcmMuQmFja2ltYWdlICE9PSBcIlwiKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleXlvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JhY2tpbWdcIilcclxuICAgICAgICAgICAgYmFja2ltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZShiYWNraW1nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFja2ltZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH0gICAgXHJcblxyXG4gICAgfSxbc3JjXSlcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgVG9DYW52YXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGhcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHRcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wLndpZHRoLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWdlL3BuZ1wiKVxyXG5cclxuICAgICAgICBzZXRyZXN1bHQoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbaW1hZ2V0eXBlXTp7c3JjOmJhc2U2NEltYWdlLGNyb3B2YWx1ZXM6e3g6Y3JvcC54LHk6Y3JvcC55LHdpZHRoOmNyb3Aud2lkdGgsaGVpZ2h0OmNyb3AuaGVpZ2h0fX19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJbnB1dGhhbmRsZXIgPSAoa2V5LGV2ZW50KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjcm9wKVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5iYWNrY3JvcCA9IHJlc3VsdC5CYWNraW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvdXBkYXRlcHJvZmlsZWAsZm9ybURhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgIFxyXG4gICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxhY2sgb25DbGljaz17Y2xvc2VmdW5jfSBha3RpZj17YWN0aXZlfS8+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJCYWNraW1nXCIgc3JjPXtzcmNbXCJCYWNraW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiUHJvZmlsZWltZ1wiIHNyYz17c3JjW1wiUHJvZmlsZWltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPEV4dGVyaW9yIGdldGNyb3BwZXI9e2lzY3JvcHBlcmFjdGl2ZX0gYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgPElubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlsZHNvZnNlbGVjdGlvbj48L0NoaWxkc29mc2VsZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjcm9wcGVyYWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyICBvbkltYWdlTG9hZGVkPXsoaW1nKT0+c2V0aW1hZ2UoaW1nKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19ICBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNXaW5kb3dmb3JlZGl0ICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjIyNXB4XCIscmlnaHQ6XCIxMHB4XCIsekluZGV4OlwiMTAwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcygpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcmVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwIHN0eWxlPXt7Zm9udFNpemU6XCI4MHB4XCIsY29sb3I6XCIjZTllY2VmXCJ9fT48L0Fycm93RHJvcFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8SW5wdXRob2xkZXIgZGlzcGxheWVkPXt1c2VyaW5mb1tpdGVtXS5hY3RpdmF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm9baXRlbV0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dXNlcmluZm9baXRlbV0ubXNnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==