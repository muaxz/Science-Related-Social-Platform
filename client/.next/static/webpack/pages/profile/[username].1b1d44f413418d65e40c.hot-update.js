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
})(["position:absolute;top:-45px;left:220px;"]);
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
})(["display:flex;justify-content:space-around;background-color:red;height:30px;margin-bottom:30px;"]);
_c9 = Selectionbar;
var Childsofselection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Childsofselection",
  componentId: "sc-9h7al1-9"
})(["background-color:yellow;border-radius:25px;padding:5px;"]); //email,password,notification

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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Email: true,
    Password: false,
    Notification: false
  }),
      selectionchilds = _useState9[0],
      setselectionchilds = _useState9[1];

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

  var Selectionhandler = function Selectionhandler(keyname) {
    var copy = _objectSpread({}, selectionchilds);

    copy[keyname] = true;
    setselectionchilds(copy);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_8__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 365,
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
      lineNumber: 366,
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
      lineNumber: 367,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Selectionbar, {
          children: Object.keys(selectionchilds).map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Childsofselection, {
              onClick: function onClick() {
                return Selectionhandler();
              },
              children: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 40
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
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
            lineNumber: 383,
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
              lineNumber: 385,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 382,
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
                  lineNumber: 397,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 396,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
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
                lineNumber: 401,
                columnNumber: 49
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 395,
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
                  lineNumber: 405,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                  style: {
                    color: "white"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
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
                  lineNumber: 407,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 403,
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
                lineNumber: 416,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
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
                  lineNumber: 422,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 421,
                columnNumber: 53
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 33
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 364,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "4W/jy2wOiwqsBEKdk4JS58nTr7s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJIb2xkZXJmb3J1cGljb24iLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJkaXNwbGF5ZWQiLCJJbmZvcm1hdGlvbiIsImlzZm9yZWRpdCIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIlNlbGVjdGlvbmJhciIsIkNoaWxkc29mc2VsZWN0aW9uIiwiRWRpdHdpbmRvdyIsImlzV2luZG93Zm9yZWRpdCIsInVwZGF0ZWZ1bmMiLCJlZGl0ZGF0YSIsImNsb3NlZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImNyb3B2YWx1ZXMiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJpc2Nyb3BwZXJhY3RpdmUiLCJzZXRjcm9wcGVyYWN0aXZlIiwibXVzZXJuYW1lIiwiYWN0aXZhdGUiLCJ2YWx1ZSIsInVzZXJuYW1lIiwid2FybmluZyIsIm11bHRpbGluZSIsIm1zZyIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJsYXN0bmFtZSIsInBlcnNvbmFsdGV4dCIsIlBlcnNvbmFsdGV4dCIsImVtYWlsIiwidXNlcmluZm8iLCJzZXR1c2VyaW5mbyIsIkVtYWlsIiwiUGFzc3dvcmQiLCJOb3RpZmljYXRpb24iLCJzZWxlY3Rpb25jaGlsZHMiLCJzZXRzZWxlY3Rpb25jaGlsZHMiLCJ1c2VFZmZlY3QiLCJjb3B5Iiwia2V5IiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImV2ZW50IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ0eXBlIiwidW5pdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGVzIiwidXBkYXRlY3JvcCIsIm5ld2Nyb3AiLCJyZXMiLCJTZW5kdXBkYXRlcyIsInZhbHVlcyIsImJhY2tjcm9wIiwicHJvZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiU2VsZWN0aW9uaGFuZGxlciIsImtleW5hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGV4dEFsaWduIiwiaW1nIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUNKO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgs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LHVCQUFSO0FBWUgsYUFkRCxDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkY7QUFBQSx3QkF0QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0VIOztHQTdVdUJwQyxVOztPQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS4xYjFkNDRmNDEzNDE4ZDY1ZTQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgSWNvbmV4dHJhIGZyb20gXCIuLi8uLi9VSS9JY29uXCJcclxuaW1wb3J0IHtBcnJvd0Ryb3BVcH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5vdmVyZmxvdzokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCJ2aXNpYmxlXCIgOiBcImF1dG9cIn07O1xyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmc6MTBweDtcclxuYFxyXG5cclxuY29uc3QgSG9sZGVyZm9ydXBpY29uID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDotNDVweDtcclxubGVmdDoyMjBweDtcclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7SW1hZ2Vmb3JCYWNrfSk9PkltYWdlZm9yQmFja30pO1xyXG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2Rpc3BsYXllZH0pPT4gZGlzcGxheWVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZy10b3A6JHsoe2lzZm9yZWRpdH0pPT5pc2ZvcmVkaXQgPyBcIjEwcHhcIiA6IFwiODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjojZTllY2VmO1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4OyBcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYm9yZGVyLXJhZGl1czoyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG4vL3NlbGVjdGlvbiBiYXIgZm9yIGVkaXRpbmdcclxuY29uc3QgU2VsZWN0aW9uYmFyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuaGVpZ2h0OjMwcHg7XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxuYFxyXG5cclxuY29uc3QgQ2hpbGRzb2ZzZWxlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOnllbGxvdztcclxuYm9yZGVyLXJhZGl1czoyNXB4O1xyXG5wYWRkaW5nOjVweDtcclxuYFxyXG5cclxuLy9lbWFpbCxwYXNzd29yZCxub3RpZmljYXRpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7aXNXaW5kb3dmb3JlZGl0LHVwZGF0ZWZ1bmMsYWN0aXZlLGVkaXRkYXRhLGNsb3NlZnVuY30pe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGVkaXRkYXRhKVxyXG4gICAgY29uc3QgW2ZpbGUsc2V0ZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbY3JvcCxzZXRjcm9wXSA9IHVzZVN0YXRlKHthc3BlY3Q6MTYvMTYsaGVpZ2h0OjIwMCx3aWR0aDoxMDAseDo1MCx5OjUwfSlcclxuICAgIGNvbnN0IFtzcmMsc2V0c3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpbWFnZXR5cGUsc2V0aW1hZ2V0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2Usc2V0aW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtyZXN1bHQsc2V0cmVzdWx0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2lzY3JvcHBlcmFjdGl2ZSxzZXRjcm9wcGVyYWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXJpbmZvLHNldHVzZXJpbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICBhY3RpdmF0ZTppc1dpbmRvd2ZvcmVkaXQgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkt1bGxhbmljaSBBZGlcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiQWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlOmlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiU295YWRcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOmZhbHNlLFxyXG4gICAgICAgICAgICBtc2c6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc29uYWx0ZXh0OntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5QZXJzb25hbHRleHQsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS2lzaXNlbCBCaWxnaWxlclwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6dHJ1ZSxcclxuICAgICAgICAgICAgbXNnOlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgYWN0aXZhdGU6aXNXaW5kb3dmb3JlZGl0ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgbGFiZWw6XCJFLVBvc3RhXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZSxcclxuICAgICAgICAgICAgbXNnOlwiRS1wb3N0YW5pIGRlZ2lzdGlybWVrIGlzdGVyc2VuLCB5ZW5pIGdpcmRpZ2luIGFkcmVzZSBiaXIga29kIGdvbmRlcmlsaWNlayBsdXRmZW4gb251IGdpci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzZWxlY3Rpb25jaGlsZHMsc2V0c2VsZWN0aW9uY2hpbGRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBFbWFpbDp0cnVlLFxyXG4gICAgICAgIFBhc3N3b3JkOmZhbHNlLFxyXG4gICAgICAgIE5vdGlmaWNhdGlvbjpmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgY29weSA9IHsuLi51c2VyaW5mb31cclxuICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29weSl7XHJcbiAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IGlzV2luZG93Zm9yZWRpdCA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICBpZihjb3B5W2tleV0ubGFiZWwgPT0gXCJFLVBvc3RhXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlba2V5XS5hY3RpdmF0ZSA9IGlzV2luZG93Zm9yZWRpdCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXR1c2VyaW5mbyhjb3B5KVxyXG4gICAgICBcclxuICAgIH0sW2lzV2luZG93Zm9yZWRpdF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgaWYoc3JjLkJhY2tpbWFnZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXl5b1wiKVxyXG4gICAgICAgICAgICBjb25zdCBiYWNraW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNCYWNraW1nXCIpXHJcbiAgICAgICAgICAgIGJhY2tpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0aW1hZ2UoYmFja2ltZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhY2tpbWcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICB9ICAgIFxyXG5cclxuICAgIH0sW3NyY10pXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IFRvQ2FudmFzID0gYXN5bmMgKCk9PntcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9wbmdcIilcclxuXHJcbiAgICAgICAgc2V0cmVzdWx0KChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW2ltYWdldHlwZV06e3NyYzpiYXNlNjRJbWFnZSxjcm9wdmFsdWVzOnt4OmNyb3AueCx5OmNyb3AueSx3aWR0aDpjcm9wLndpZHRoLGhlaWdodDpjcm9wLmhlaWdodH19fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSW5wdXRoYW5kbGVyID0gKGtleSxldmVudCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbXV0YXRlZCA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICBtdXRhdGVkW2tleV0udmFsdWU9ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0dXNlcmluZm8obXV0YXRlZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVmaWxlID0gKGV2ZW50LHR5cGUpPT57XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJCYWNraW1hZ2VcIil7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzE2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDo1MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0aW1hZ2V0eXBlKHR5cGUpXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIHNldHNyYygocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRmaWxlKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOmV2ZW50LnRhcmdldC5maWxlc1swXX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlY3JvcCA9IChuZXdjcm9wKT0+e1xyXG4gICAgICAgIC8vYnVyYXlhIGJha1xyXG4gICAgICAgIGlmKGNyb3AuYXNwZWN0ID4gMSl7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueSx4Om5ld2Nyb3AueH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JvcClcclxuXHJcbiAgICAgICAgLy92YWx1ZSBvZiBjcm9wcGVyIHdpZHRoIGhlaWdodCB4IGFuZCB5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VuZHVwZGF0ZXMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJpbmZvKXtcclxuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1c2VyaW5mb1trZXldLnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZXMuYmFja2Nyb3AgPSByZXN1bHQuQmFja2ltYWdlLmNyb3B2YWx1ZXNcclxuICAgICAgICB2YWx1ZXMucHJvZmlsZSAgPSByZXN1bHQuUHJvZmlsZWltYWdlLmNyb3B2YWx1ZXNcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGE9bmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGUuQmFja2ltYWdlICE9PSBcIlwiICYmIGZpbGUuUHJvZmlsZWltYWdlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuQmFja2ltYWdlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkMlwiLGZpbGUuUHJvZmlsZWltYWdlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGVbaW1hZ2V0eXBlXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlByb2ZpbGV2YWx1ZXNcIixKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKVxyXG4gICAgICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICB0cnl7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGB1c2VyL3VwZGF0ZXByb2ZpbGVgLGZvcm1EYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICBcclxuICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVUExPQUQgRVJST1JSUlJSUlJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbGVjdGlvbmhhbmRsZXI9KGtleW5hbWUpPT57XHJcbiAgICAgICAgY29uc3QgY29weSA9IHsuLi5zZWxlY3Rpb25jaGlsZHN9XHJcbiAgICAgICAgY29weVtrZXluYW1lXSA9IHRydWVcclxuICAgICAgICBzZXRzZWxlY3Rpb25jaGlsZHMoY29weSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cIkJhY2tpbWdcIiBzcmM9e3NyY1tcIkJhY2tpbWFnZVwiXX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t2aXNpYmlsaXR5OlwiaGlkZGVuXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0gaWQ9XCJQcm9maWxlaW1nXCIgc3JjPXtzcmNbXCJQcm9maWxlaW1hZ2VcIl19PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZWN0aW9uY2hpbGRzKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDaGlsZHNvZnNlbGVjdGlvbiBvbkNsaWNrPXsoKT0+U2VsZWN0aW9uaGFuZGxlcigpfT57aXRlbX08L0NoaWxkc29mc2VsZWN0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbmJhcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgb25JbWFnZUxvYWRlZD17KGltZyk9PnNldGltYWdlKGltZyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCIsaGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCJ9fSAgaW1hZ2VTdHlsZT17e2hlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwiLG9iamVjdEZpdDpcImNvdmVyXCJ9fSAgc3JjPXtzcmNbaW1hZ2V0eXBlXX0gY3JvcD17Y3JvcH0gb25DaGFuZ2U9eyhuZXdjcm9wKT0+dXBkYXRlY3JvcChuZXdjcm9wKX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+VG9DYW52YXMoKX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgPlVwbG9hZCB0aGUgZmlsZSB0byBzZXJ2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgIWlzV2luZG93Zm9yZWRpdCAmJiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtzcmMuQmFja2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIyMjVweFwiLHJpZ2h0OlwiMTBweFwiLHpJbmRleDpcIjEwMDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+U2VuZHVwZGF0ZXMoKX0gc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPktheWRldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgcHJvZmlsZT17c3JjLlByb2ZpbGVpbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uIGlzZm9yZWRpdD17aXNXaW5kb3dmb3JlZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbGRlcmZvcnVwaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0Ryb3BVcCBzdHlsZT17e2ZvbnRTaXplOlwiODBweFwiLGNvbG9yOlwiI2U5ZWNlZlwifX0+PC9BcnJvd0Ryb3BVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ib2xkZXJmb3J1cGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHVzZXJpbmZvKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPElucHV0aG9sZGVyIGRpc3BsYXllZD17dXNlcmluZm9baXRlbV0uYWN0aXZhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lPXt1c2VyaW5mb1tpdGVtXS5tdWx0aWxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PklucHV0aGFuZGxlcihpdGVtLGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcmluZm9baXRlbV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3VzZXJpbmZvW2l0ZW1dLm1zZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=