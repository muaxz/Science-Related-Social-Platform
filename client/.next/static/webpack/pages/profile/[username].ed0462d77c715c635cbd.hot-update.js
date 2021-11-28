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
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









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
})(["position:relative;"]);
_c2 = Inner;
var Background = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Background",
  componentId: "sc-9h7al1-2"
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center center;transition:0.4s;&:hover{opacity:1;}"], function (_ref5) {
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
})(["margin-top:20px;"]);
_c5 = Inputholder;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Editwindow__Information",
  componentId: "sc-9h7al1-5"
})(["padding-top:80px;padding-left:20px;padding-right:20px;padding-bottom:20px;"]);
_c6 = Information;
var Labelimage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].label.withConfig({
  displayName: "Editwindow__Labelimage",
  componentId: "sc-9h7al1-6"
})(["position:absolute;width:100%;height:200px;display:block;padding:6px;padding-left:45px;background-color:white;cursor:pointer;color:black;opacity:0;"]);
_c7 = Labelimage;
function Editwindow(_ref6) {
  _s();

  var _this = this;

  var updatefunc = _ref6.updatefunc,
      active = _ref6.active,
      editdata = _ref6.editdata,
      closefunc = _ref6.closefunc;

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
    username: {
      value: editdata.username,
      label: "Kullanici Adi",
      warning: false,
      multiline: false
    },
    firstname: {
      value: editdata.firstname,
      label: "Ad",
      warning: false,
      multiline: false
    },
    surname: {
      value: editdata.lastname,
      label: "Soyad",
      warning: false,
      multiline: false
    },
    personaltext: {
      value: editdata.Personaltext,
      label: "Kisisel Bilgiler",
      warning: false,
      multiline: true
    }
  }),
      userinfo = _useState8[0],
      setuserinfo = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setcropperactive(false);
  }, [active]);

  var ToCanvas = /*#__PURE__*/function () {
    var _ref7 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
              base64Image = canvas.toDataURL("imge/jpeg");
              setresult(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, imagetype, {
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
      return _ref7.apply(this, arguments);
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
        height: 100,
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
      return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, type, URL.createObjectURL(event.target.files[0])));
    });
    setfile(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, type, event.target.files[0]));
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
    } //value of cropper width height x and y

  };

  var Sendupdates = /*#__PURE__*/function () {
    var _ref8 = Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
                formData.append("upload", file.Profileimage);
              } else {
                formData.append("upload", file[imagetype]);
              }

              formData.append("Profilevalues", JSON.stringify(values));
              _context2.prev = 7;
              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("/upload/x/x/x/x", formData);

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
      return _ref8.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Black"], {
      onClick: closefunc,
      aktif: active
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        visibility: "hidden",
        position: "absolute"
      },
      id: "trial",
      src: src
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exterior, {
      getcropper: iscropperactive,
      active: active,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
        children: iscropperactive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_image_crop__WEBPACK_IMPORTED_MODULE_9___default.a, {
            style: {
              backgroundColor: "red",
              height: "350px",
              width: "100%"
            },
            onImageLoaded: setimage,
            imageStyle: {
              height: "100%",
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
            lineNumber: 286,
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
              lineNumber: 288,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
            ImageforBack: result.Backimage.src,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                top: "225px",
                right: "10px",
                zIndex: "1000"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                style: {
                  textTransform: "capitalize",
                  borderRadius: "25px"
                },
                color: "secondary",
                variant: "contained",
                children: "Kaydet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
              htmlFor: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 37
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
              lineNumber: 301,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImageholder, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledcomponents_button__WEBPACK_IMPORTED_MODULE_7__["Porfileimage"], {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              width: "80px",
              height: "80px",
              profile: result.Profileimage.src,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 41
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
                lineNumber: 307,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            children: Object.keys(userinfo).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inputholder, {
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
                  value: userinfo[item].value
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 53
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 33
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "4asAEk24Z4olvYswsav65bXPIGI=");

_c8 = Editwindow;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Exterior");
$RefreshReg$(_c2, "Inner");
$RefreshReg$(_c3, "Background");
$RefreshReg$(_c4, "ProfileImageholder");
$RefreshReg$(_c5, "Inputholder");
$RefreshReg$(_c6, "Information");
$RefreshReg$(_c7, "Labelimage");
$RefreshReg$(_c8, "Editwindow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJJbmZvcm1hdGlvbiIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkVkaXR3aW5kb3ciLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImNyb3B2YWx1ZXMiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJpc2Nyb3BwZXJhY3RpdmUiLCJzZXRjcm9wcGVyYWN0aXZlIiwidXNlcm5hbWUiLCJ2YWx1ZSIsIndhcm5pbmciLCJtdWx0aWxpbmUiLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJQZXJzb25hbHRleHQiLCJ1c2VyaW5mbyIsInNldHVzZXJpbmZvIiwidXNlRWZmZWN0IiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImtleSIsImV2ZW50IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ0eXBlIiwidW5pdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGVzIiwidXBkYXRlY3JvcCIsIm5ld2Nyb3AiLCJyZXMiLCJTZW5kdXBkYXRlcyIsInZhbHVlcyIsImJhY2tjcm9wIiwicHJvZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTUFDSjtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURJLEVBS1I7QUFBQSxNQUFFQyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxNQUF2QztBQUFBLENBTFEsRUFRTDtBQUFBLE1BQUVBLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE9BQXZDO0FBQUEsQ0FSSyxFQVlIO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxTQUFILEdBQWUsTUFBekM7QUFBQSxDQVpHLENBQWQ7S0FBTUosUTtBQWNOLElBQU1LLEtB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cGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmVkMDQ2MmQ3N2M3MTVjNjM1Y2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5vdmVyZmxvdzokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCJ2aXNpYmxlXCIgOiBcImF1dG9cIn07O1xyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcblxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyOyBcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjgwcHg7XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjIwcHg7IFxyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7dXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG5cclxuICAgIGNvbnN0IFtmaWxlLHNldGZpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Nyb3Asc2V0Y3JvcF0gPSB1c2VTdGF0ZSh7YXNwZWN0OjE2LzE2LGhlaWdodDoyMDAsd2lkdGg6MTAwLHg6NTAseTo1MH0pXHJcbiAgICBjb25zdCBbc3JjLHNldHNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOntcclxuICAgICAgICAgICAgc3JjOlwiXCIsXHJcbiAgICAgICAgICAgIGNyb3B2YWx1ZXM6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCJcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgeTpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc29uYWx0ZXh0OntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuUGVyc29uYWx0ZXh0LFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWVcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9qcGVnXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgbXV0YXRlZFtrZXldLnZhbHVlPWV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldHVzZXJpbmZvKG11dGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlZmlsZSA9IChldmVudCx0eXBlKT0+e1xyXG5cclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92YWx1ZSBvZiBjcm9wcGVyIHdpZHRoIGhlaWdodCB4IGFuZCB5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VuZHVwZGF0ZXMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJpbmZvKXtcclxuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1c2VyaW5mb1trZXldLnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZXMuYmFja2Nyb3AgPSByZXN1bHQuQmFja2ltYWdlLmNyb3B2YWx1ZXNcclxuICAgICAgICB2YWx1ZXMucHJvZmlsZSAgPSByZXN1bHQuUHJvZmlsZWltYWdlLmNyb3B2YWx1ZXNcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGE9bmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGUuQmFja2ltYWdlICE9PSBcIlwiICYmIGZpbGUuUHJvZmlsZWltYWdlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuQmFja2ltYWdlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYC91cGxvYWQveC94L3gveGAsZm9ybURhdGEpO1xyXG4gICBcclxuICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVUExPQUQgRVJST1JSUlJSUlJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwidHJpYWxcIiBzcmM9e3NyY30+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMTAwJVwifX0gb25JbWFnZUxvYWRlZD17c2V0aW1hZ2V9IGltYWdlU3R5bGU9e3toZWlnaHQ6XCIxMDAlXCIsd2lkdGg6XCIzMDBweFwiLG9iamVjdEZpdDpcImNvdmVyXCJ9fSAgc3JjPXtzcmNbaW1hZ2V0eXBlXX0gY3JvcD17Y3JvcH0gb25DaGFuZ2U9eyhuZXdjcm9wKT0+dXBkYXRlY3JvcChuZXdjcm9wKX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+VG9DYW52YXMoKX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgPlVwbG9hZCB0aGUgZmlsZSB0byBzZXJ2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtyZXN1bHQuQmFja2ltYWdlLnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMjI1cHhcIixyaWdodDpcIjEwcHhcIix6SW5kZXg6XCIxMDAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPktheWRldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgcHJvZmlsZT17cmVzdWx0LlByb2ZpbGVpbWFnZS5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgaHRtbEZvcj1cImZpbGUyXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUFsdCBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PjwvQ2FtZXJhQWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIlByb2ZpbGVpbWFnZVwiKX0gYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWdcIiBpZD1cImZpbGUyXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcmZpbGVpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHVzZXJpbmZvKS5tYXAoKGl0ZW0saW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPElucHV0aG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3VzZXJpbmZvW2l0ZW1dLm11bHRpbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PklucHV0aGFuZGxlcihpdGVtLGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt1c2VyaW5mb1tpdGVtXS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyaW5mb1tpdGVtXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRob2xkZXI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0lubmVyPlxyXG4gICAgICAgICAgICA8L0V4dGVyaW9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=