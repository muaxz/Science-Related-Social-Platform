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
})(["position:absolute;top:-10px;left:20px;"]);
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
})(["position:absolute;width:100%;height:200px;display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;opacity:0;"]); //email,password,notification

_c8 = Labelimage;
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
      lineNumber: 340,
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
      lineNumber: 341,
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
      lineNumber: 342,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: iscropperactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 350,
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
              lineNumber: 352,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 349,
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
                  lineNumber: 364,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
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
                lineNumber: 368,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 362,
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
                  lineNumber: 372,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
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
                  lineNumber: 374,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 45
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            isforedit: isWindowforedit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Holderforupicon, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDropUp"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
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
                  lineNumber: 389,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 53
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 33
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 339,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "renaVJFfSI+OTNJuECI+jZsqlVo=");

_c9 = Editwindow;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Inner");
$RefreshReg$(_c3, "Holderforupicon");
$RefreshReg$(_c4, "Background");
$RefreshReg$(_c5, "ProfileImageholder");
$RefreshReg$(_c6, "Inputholder");
$RefreshReg$(_c7, "Information");
$RefreshReg$(_c8, "Labelimage");
$RefreshReg$(_c9, "Editwindow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkVkaXR3aW5kb3ciLCJpc1dpbmRvd2ZvcmVkaXQiLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJCYWNraW1hZ2UiLCJQcm9maWxlaW1hZ2UiLCJmaWxlIiwic2V0ZmlsZSIsImFzcGVjdCIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjcm9wIiwic2V0Y3JvcCIsInNyYyIsInNldHNyYyIsImltYWdldHlwZSIsInNldGltYWdldHlwZSIsImltYWdlIiwic2V0aW1hZ2UiLCJjcm9wdmFsdWVzIiwicmVzdWx0Iiwic2V0cmVzdWx0IiwiaXNjcm9wcGVyYWN0aXZlIiwic2V0Y3JvcHBlcmFjdGl2ZSIsIm11c2VybmFtZSIsImFjdGl2YXRlIiwidmFsdWUiLCJ1c2VybmFtZSIsIndhcm5pbmciLCJtdWx0aWxpbmUiLCJtc2ciLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJQZXJzb25hbHRleHQiLCJlbWFpbCIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJ1c2VFZmZlY3QiLCJjb3B5Iiwia2V5IiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImV2ZW50IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ0eXBlIiwidW5pdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGVzIiwidXBkYXRlY3JvcCIsIm5ld2Nyb3AiLCJyZXMiLCJTZW5kdXBkYXRlcyIsInZhbHVlcyIsImJhY2tjcm9wIiwicHJvZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa01BQ0o7QUFBQSxNQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxTQUFZQSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQUEsQ0FESSxFQUtSO0FBQUEsTUFBRUMsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxPQUFILEdBQWEsTUFBdkM7QUFBQSxDQUxRLEVBUUw7QUFBQSxNQUFFQSxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFB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O0FBZGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVFSDs7R0ExVHVCcEMsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uZjUwNmMxOTgxZTZlMWVhMjVhM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYUFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEljb25leHRyYSBmcm9tIFwiLi4vLi4vVUkvSWNvblwiXHJcbmltcG9ydCB7QXJyb3dEcm9wVXB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ3JvcHBlciBmcm9tICBcInJlYWN0LWltYWdlLWNyb3BcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuXHJcbmNvbnN0IEV4dGVyaW9yID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG5sZWZ0OjUwJTtcclxudG9wOiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjE1MHB4XCIgOiBcIjcwcHhcIn07O1xyXG5tYXgtd2lkdGg6NjAwcHg7XHJcbndpZHRoOjkwJTtcclxuaGVpZ2h0OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjM1MHB4XCIgOiBcIjU4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnotaW5kZXg6MTAwMDtcclxub3ZlcmZsb3c6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwidmlzaWJsZVwiIDogXCJhdXRvXCJ9OztcclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjEwcHg7XHJcbnBhZGRpbmctdG9wOjYwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbGRlcmZvcnVwaWNvbiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6LTEwcHg7XHJcbmxlZnQ6MjBweDtcclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7SW1hZ2Vmb3JCYWNrfSk9PkltYWdlZm9yQmFja30pO1xyXG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjojZTllY2VmO1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4OyBcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYm9yZGVyLXJhZGl1czoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG4vL2VtYWlsLHBhc3N3b3JkLG5vdGlmaWNhdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0d2luZG93KHtpc1dpbmRvd2ZvcmVkaXQsdXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coZWRpdGRhdGEpXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG11c2VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS3VsbGFuaWNpIEFkaVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXJzdG5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1zZzpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwZXJzb25hbHRleHQ6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLlBlcnNvbmFsdGV4dCxcclxuICAgICAgICAgICAgbGFiZWw6XCJLaXNpc2VsIEJpbGdpbGVyXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkUtUG9zdGFcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJFLXBvc3RhbmkgZGVnaXN0aXJtZWsgaXN0ZXJzZW4sIHllbmkgZ2lyZGlnaW4gYWRyZXNlIGJpciBrb2QgZ29uZGVyaWxpY2VrIGx1dGZlbiBvbnUgZ2lyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3B5KXtcclxuICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgIGlmKGNvcHlba2V5XS5sYWJlbCA9PSBcIkUtUG9zdGFcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVtrZXldLmFjdGl2YXRlID0gaXNXaW5kb3dmb3JlZGl0ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldHVzZXJpbmZvKGNvcHkpXHJcbiAgICAgIFxyXG4gICAgfSxbaXNXaW5kb3dmb3JlZGl0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBpZihzcmMuQmFja2ltYWdlICE9PSBcIlwiKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleXlvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0JhY2tpbWdcIilcclxuICAgICAgICAgICAgYmFja2ltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZShiYWNraW1nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFja2ltZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgIH0gICAgXHJcblxyXG4gICAgfSxbc3JjXSlcclxuICAgICovXHJcblxyXG4gICAgY29uc3QgVG9DYW52YXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGhcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHRcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wLndpZHRoLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWdlL3BuZ1wiKVxyXG5cclxuICAgICAgICBzZXRyZXN1bHQoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbaW1hZ2V0eXBlXTp7c3JjOmJhc2U2NEltYWdlLGNyb3B2YWx1ZXM6e3g6Y3JvcC54LHk6Y3JvcC55LHdpZHRoOmNyb3Aud2lkdGgsaGVpZ2h0OmNyb3AuaGVpZ2h0fX19XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJbnB1dGhhbmRsZXIgPSAoa2V5LGV2ZW50KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjcm9wKVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlcy5iYWNrY3JvcCA9IHJlc3VsdC5CYWNraW1hZ2UuY3JvcHZhbHVlc1xyXG4gICAgICAgIHZhbHVlcy5wcm9maWxlICA9IHJlc3VsdC5Qcm9maWxlaW1hZ2UuY3JvcHZhbHVlc1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YT1uZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsZS5CYWNraW1hZ2UgIT09IFwiXCIgJiYgZmlsZS5Qcm9maWxlaW1hZ2UgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5CYWNraW1hZ2UpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWQyXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYHVzZXIvdXBkYXRlcHJvZmlsZWAsZm9ybURhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgIFxyXG4gICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxhY2sgb25DbGljaz17Y2xvc2VmdW5jfSBha3RpZj17YWN0aXZlfS8+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJCYWNraW1nXCIgc3JjPXtzcmNbXCJCYWNraW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwiUHJvZmlsZWltZ1wiIHNyYz17c3JjW1wiUHJvZmlsZWltYWdlXCJdfT48L2ltZz5cclxuICAgICAgICAgICAgPEV4dGVyaW9yIGdldGNyb3BwZXI9e2lzY3JvcHBlcmFjdGl2ZX0gYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgPElubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNjcm9wcGVyYWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyICBvbkltYWdlTG9hZGVkPXsoaW1nKT0+c2V0aW1hZ2UoaW1nKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19ICBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNXaW5kb3dmb3JlZGl0ICYmICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3NyYy5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjIyNXB4XCIscmlnaHQ6XCIxMHB4XCIsekluZGV4OlwiMTAwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5TZW5kdXBkYXRlcygpfSBzdHlsZT17e3RleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtzcmMuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24gaXNmb3JlZGl0PXtpc1dpbmRvd2ZvcmVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RHJvcFVwPjwvQXJyb3dEcm9wVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSG9sZGVyZm9ydXBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxJbnB1dGhvbGRlciBkaXNwbGF5ZWQ9e3VzZXJpbmZvW2l0ZW1dLmFjdGl2YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5JbnB1dGhhbmRsZXIoaXRlbSxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyaW5mb1tpdGVtXS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt1c2VyaW5mb1tpdGVtXS5tc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9