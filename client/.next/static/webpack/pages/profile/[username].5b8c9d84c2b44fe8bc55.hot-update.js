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
})(["display:flex;cursor:pointer;justify-content:center;align-items:center;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;height:200px;opacity:0.8;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;transition:0.4s;&:hover{opacity:1;}"], function (_ref5) {
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
    },
    backimage: {
      value: editdata.backimage,
      label: "",
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
      lineNumber: 283,
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
      lineNumber: 284,
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
              width: "300px"
            },
            onImageLoaded: setimage,
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
            lineNumber: 292,
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
              lineNumber: 294,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
            ImageforBack: result.Backimage.src,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                top: "10px",
                right: "10px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                children: "Kaydet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
              htmlFor: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
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
              lineNumber: 307,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 301,
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
                lineNumber: 311,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
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
                lineNumber: 313,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Information, {
            children: [Object.keys(userinfo).map(function (item, index) {
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
                  lineNumber: 321,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 53
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              variant: "secondary",
              onClick: Sendupdates,
              children: "TRIAL UPDATE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 38
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 33
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "syP8KLDwTCY6fEDn9iKuo0sDZkY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJJbmZvcm1hdGlvbiIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkVkaXR3aW5kb3ciLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImNyb3B2YWx1ZXMiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJpc2Nyb3BwZXJhY3RpdmUiLCJzZXRjcm9wcGVyYWN0aXZlIiwidXNlcm5hbWUiLCJ2YWx1ZSIsIndhcm5pbmciLCJtdWx0aWxpbmUiLCJmaXJzdG5hbWUiLCJzdXJuYW1lIiwibGFzdG5hbWUiLCJwZXJzb25hbHRleHQiLCJQZXJzb25hbHRleHQiLCJiYWNraW1hZ2UiLCJ1c2VyaW5mbyIsInNldHVzZXJpbmZvIiwidXNlRWZmZWN0IiwiVG9DYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImJhc2U2NEltYWdlIiwidG9EYXRhVVJMIiwicHJldiIsIklucHV0aGFuZGxlciIsImtleSIsImV2ZW50IiwibXV0YXRlZCIsInRhcmdldCIsIlVwZGF0ZWZpbGUiLCJ0eXBlIiwidW5pdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGVzIiwidXBkYXRlY3JvcCIsIm5ld2Nyb3AiLCJyZXMiLCJTZW5kdXBkYXRlcyIsInZhbHVlcyIsImJhY2tjcm9wIiwicHJvZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUNKO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBREksRUFLUjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE1BQXZDO0FBQUEsQ0FMUSxFQVFMO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxPQUFILEdBQWEsT0FBdkM7QUFBQSxDQVJLLEVBWUg7QUFBQSxNQUFFQSxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLFNBQUgsR0FBZSxNQUF6QztBQUFBLENBWkcsQ0FBZDtLQUFNSixRO0FBY04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFYO01BQU1HLEs7QUFLTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdVRBVU87QUFBQSxNQUFFSyxZQUFGLFNBQUVBLFlBQUY7QUFBQSxTQUFrQkEsWUFBbEI7QUFBQSxDQVZQLENBQWhCO01BQU1ELFU7QUFvQk4sSUFBTUUsa0JBQWtCLEdBQUNQLHlEQUFNLENBQUNDLEdBQVI7QUFBQTtBQUFBO0FBQUEsNkZBQXhCO01BQU1NLGtCO0FBVU4sSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFqQjtNQUFNTyxXO0FBR04sSUFBTUMsV0FBVyxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFqQjtNQUFNUSxXO0FBT04sSUFBTUMsVUFBVSxHQUFDVix5REFBTSxDQUFDVyxLQUFSO0FBQUE7QUFBQTtBQUFBLDBKQUFoQjtNQUFNRCxVO0FBYVMsU0FBU0UsVUFBVCxRQUEyRDtBQUFBOztBQUFBOztBQUFBLE1BQXRDQyxVQUFzQyxTQUF0Q0EsVUFBc0M7QUFBQSxNQUEzQlgsTUFBMkIsU0FBM0JBLE1BQTJCO0FBQUEsTUFBcEJZLFFBQW9CLFNBQXBCQSxRQUFvQjtBQUFBLE1BQVhDLFNBQVcsU0FBWEEsU0FBVzs7QUFBQSxrQkFHL0NDLHNEQUFRLENBQUM7QUFDNUJDLGFBQVMsRUFBQyxFQURrQjtBQUU1QkMsZ0JBQVksRUFBQztBQUZlLEdBQUQsQ0FIdUM7QUFBQSxNQUcvREMsSUFIK0Q7QUFBQSxNQUcxREMsT0FIMEQ7O0FBQUEsbUJBTy9DSixzREFBUSxDQUFDO0FBQUNLLFVBQU0sRUFBQyxLQUFHLEVBQVg7QUFBY0MsVUFBTSxFQUFDLEdBQXJCO0FBQXlCQyxTQUFLLEVBQUMsR0FBL0I7QUFBbUNDLEtBQUMsRUFBQyxFQUFyQztBQUF3Q0MsS0FBQyxFQUFDO0FBQTFDLEdBQUQsQ0FQdUM7QUFBQSxNQU8vREMsSUFQK0Q7QUFBQSxNQU8xREMsT0FQMEQ7O0FBQUEsbUJBUWpEWCxzREFBUSxDQUFDO0FBQzFCQyxhQUFTLEVBQUMsRUFEZ0I7QUFFMUJDLGdCQUFZLEVBQUM7QUFGYSxHQUFELENBUnlDO0FBQUEsTUFRL0RVLEdBUitEO0FBQUEsTUFRM0RDLE1BUjJEOztBQUFBLG1CQVlyQ2Isc0RBQVEsQ0FBQyxFQUFELENBWjZCO0FBQUEsTUFZL0RjLFNBWitEO0FBQUEsTUFZckRDLFlBWnFEOztBQUFBLG1CQWE3Q2Ysc0RBQVEsQ0FBQyxJQUFELENBYnFDO0FBQUEsTUFhL0RnQixLQWIrRDtBQUFBLE1BYXpEQyxRQWJ5RDs7QUFBQSxtQkFjM0NqQixzREFBUSxDQUFDO0FBQ2hDQyxhQUFTLEVBQUM7QUFDTlcsU0FBRyxFQUFDLEVBREU7QUFFTk0sZ0JBQVUsRUFBQztBQUNQWCxhQUFLLEVBQUMsRUFEQztBQUVQRCxjQUFNLEVBQUMsRUFGQTtBQUdQRSxTQUFDLEVBQUMsRUFISztBQUlQQyxTQUFDLEVBQUM7QUFKSztBQUZMLEtBRHNCO0FBVWhDUCxnQkFBWSxFQUFDO0FBQ1RVLFNBQUcsRUFBQyxFQURLO0FBRVRNLGdCQUFVLEVBQUM7QUFDUFgsYUFBSyxFQUFDLEVBREM7QUFFUEQsY0FBTSxFQUFDLEVBRkE7QUFHUEUsU0FBQyxFQUFDLEVBSEs7QUFJUEMsU0FBQyxFQUFDO0FBSks7QUFGRjtBQVZtQixHQUFELENBZG1DO0FBQUEsTUFjL0RVLE1BZCtEO0FBQUEsTUFjeERDLFNBZHdEOztBQUFBLG1CQWtDM0JwQixzREFBUSxDQUFDLEtBQUQsQ0FsQ21CO0FBQUEsTUFrQy9EcUIsZUFsQytEO0FBQUEsTUFrQy9DQyxnQkFsQytDOztBQUFBLG1CQW1DdkN0QixzREFBUSxDQUFDO0FBQ3BDdUIsWUFBUSxFQUFDO0FBQ0xDLFdBQUssRUFBQzFCLFFBQVEsQ0FBQ3lCLFFBRFY7QUFFTDVCLFdBQUssRUFBQyxlQUZEO0FBR0w4QixhQUFPLEVBQUMsS0FISDtBQUlMQyxlQUFTLEVBQUM7QUFKTCxLQUQyQjtBQU9wQ0MsYUFBUyxFQUFDO0FBQ05ILFdBQUssRUFBQzFCLFFBQVEsQ0FBQzZCLFNBRFQ7QUFFTmhDLFdBQUssRUFBQyxJQUZBO0FBR044QixhQUFPLEVBQUMsS0FIRjtBQUlOQyxlQUFTLEVBQUM7QUFKSixLQVAwQjtBQWFwQ0UsV0FBTyxFQUFDO0FBQ0pKLFdBQUssRUFBQzFCLFFBQVEsQ0FBQytCLFFBRFg7QUFFSmxDLFdBQUssRUFBQyxPQUZGO0FBR0o4QixhQUFPLEVBQUMsS0FISjtBQUlKQyxlQUFTLEVBQUM7QUFKTixLQWI0QjtBQW1CcENJLGdCQUFZLEVBQUM7QUFDVE4sV0FBSyxFQUFDMUIsUUFBUSxDQUFDaUMsWUFETjtBQUVUcEMsV0FBSyxFQUFDLGtCQUZHO0FBR1Q4QixhQUFPLEVBQUMsS0FIQztBQUlUQyxlQUFTLEVBQUM7QUFKRCxLQW5CdUI7QUF5QnBDTSxhQUFTLEVBQUM7QUFDTlIsV0FBSyxFQUFDMUIsUUFBUSxDQUFDa0MsU0FEVDtBQUVOckMsV0FBSyxFQUFDLEVBRkE7QUFHTjhCLGFBQU8sRUFBQyxLQUhGO0FBSU5DLGVBQVMsRUFBQztBQUpKO0FBekIwQixHQUFELENBbkMrQjtBQUFBLE1BbUMvRE8sUUFuQytEO0FBQUEsTUFtQ3REQyxXQW5Dc0Q7O0FBb0V0RUMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZiLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxHQUZRLEVBRVAsQ0FBQ3BDLE1BQUQsQ0FGTyxDQUFUOztBQUtBLE1BQU1rRCxRQUFRO0FBQUEsMlNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBDLG9CQUZPLEdBRUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUZGO0FBR1BDLG9CQUhPLEdBR0V4QixLQUFLLENBQUN5QixZQUFOLEdBQXFCekIsS0FBSyxDQUFDVCxLQUg3QjtBQUlQbUMsb0JBSk8sR0FJRTFCLEtBQUssQ0FBQzJCLGFBQU4sR0FBc0IzQixLQUFLLENBQUNWLE1BSjlCO0FBS2IrQixvQkFBTSxDQUFDOUIsS0FBUCxHQUFlRyxJQUFJLENBQUNILEtBQXBCO0FBQ0E4QixvQkFBTSxDQUFDL0IsTUFBUCxHQUFnQkksSUFBSSxDQUFDSixNQUFyQjtBQUNNc0MsaUJBUE8sR0FPRFAsTUFBTSxDQUFDUSxVQUFQLENBQWtCLElBQWxCLENBUEM7QUFTYkQsaUJBQUcsQ0FBQ0UsU0FBSixDQUNBOUIsS0FEQSxFQUVBTixJQUFJLENBQUNGLENBQUwsR0FBU2dDLE1BRlQsRUFHQTlCLElBQUksQ0FBQ0QsQ0FBTCxHQUFTaUMsTUFIVCxFQUlBaEMsSUFBSSxDQUFDSCxLQUFMLEdBQWFpQyxNQUpiLEVBS0E5QixJQUFJLENBQUNKLE1BQUwsR0FBY29DLE1BTGQsRUFNQSxDQU5BLEVBT0EsQ0FQQSxFQVFBaEMsSUFBSSxDQUFDSCxLQVJMLEVBU0FHLElBQUksQ0FBQ0osTUFUTDtBQVlNeUMseUJBckJPLEdBcUJPVixNQUFNLENBQUNXLFNBQVAsQ0FBaUIsV0FBakIsQ0FyQlA7QUF1QmI1Qix1QkFBUyxDQUFDLFVBQUM2QixJQUFELEVBQVE7QUFDZCx1REFBV0EsSUFBWCwwSkFBaUJuQyxTQUFqQixFQUE0QjtBQUFDRixxQkFBRyxFQUFDbUMsV0FBTDtBQUFpQjdCLDRCQUFVLEVBQUM7QUFBQ1YscUJBQUMsRUFBQ0UsSUFBSSxDQUFDRixDQUFSO0FBQVVDLHFCQUFDLEVBQUNDLElBQUksQ0FBQ0QsQ0FBakI7QUFBbUJGLHlCQUFLLEVBQUNHLElBQUksQ0FBQ0gsS0FBOUI7QUFBb0NELDBCQUFNLEVBQUNJLElBQUksQ0FBQ0o7QUFBaEQ7QUFBNUIsaUJBQTVCO0FBQ0gsZUFGUSxDQUFUO0FBSUFnQiw4QkFBZ0IsQ0FBQyxLQUFELENBQWhCOztBQTNCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSYyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBK0JBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBS0MsS0FBTCxFQUFhO0FBRTlCLFFBQU1DLE9BQU8scUJBQU9wQixRQUFQLENBQWI7O0FBQ0FvQixXQUFPLENBQUNGLEdBQUQsQ0FBUCxDQUFhM0IsS0FBYixHQUFtQjRCLEtBQUssQ0FBQ0UsTUFBTixDQUFhOUIsS0FBaEM7QUFDQVUsZUFBVyxDQUFDbUIsT0FBRCxDQUFYO0FBQ0gsR0FMRDs7QUFPQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxLQUFELEVBQU9JLElBQVAsRUFBYztBQUU3QixRQUFHQSxJQUFJLElBQUksV0FBWCxFQUF1QjtBQUNuQjdDLGFBQU8sQ0FBQztBQUNKTixjQUFNLEVBQUMsS0FBRyxDQUROO0FBRUpDLGNBQU0sRUFBQyxHQUZIO0FBR0pDLGFBQUssRUFBQyxHQUhGO0FBSUprRCxZQUFJLEVBQUMsSUFKRDtBQUtKakQsU0FBQyxFQUFDLENBTEU7QUFNSkMsU0FBQyxFQUFDO0FBTkUsT0FBRCxDQUFQO0FBUUgsS0FURCxNQVVJO0FBQ0FFLGFBQU8sQ0FBQztBQUNKTixjQUFNLEVBQUMsS0FBRyxFQUROO0FBRUpDLGNBQU0sRUFBQyxHQUZIO0FBR0pDLGFBQUssRUFBQyxHQUhGO0FBSUprRCxZQUFJLEVBQUMsSUFKRDtBQUtKakQsU0FBQyxFQUFDLEVBTEU7QUFNSkMsU0FBQyxFQUFDO0FBTkUsT0FBRCxDQUFQO0FBUUg7O0FBRURNLGdCQUFZLENBQUN5QyxJQUFELENBQVo7QUFDQWxDLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQVQsVUFBTSxDQUFDLFVBQUNvQyxJQUFELEVBQVE7QUFDWCw2Q0FBV0EsSUFBWCwwSkFBaUJPLElBQWpCLEVBQXVCRSxHQUFHLENBQUNDLGVBQUosQ0FBb0JQLEtBQUssQ0FBQ0UsTUFBTixDQUFhTSxLQUFiLENBQW1CLENBQW5CLENBQXBCLENBQXZCO0FBQ0gsS0FGSyxDQUFOO0FBR0F4RCxXQUFPLENBQUMsVUFBQzZDLElBQUQsRUFBUTtBQUNaLDZDQUFXQSxJQUFYLDBKQUFpQk8sSUFBakIsRUFBdUJKLEtBQUssQ0FBQ0UsTUFBTixDQUFhTSxLQUFiLENBQW1CLENBQW5CLENBQXZCO0FBQ0gsS0FGTSxDQUFQO0FBR0gsR0EvQkQ7O0FBaUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVztBQUMxQjtBQUNBLFFBQUdwRCxJQUFJLENBQUNMLE1BQUwsR0FBYyxDQUFqQixFQUFtQjtBQUNmTSxhQUFPLENBQUMsVUFBQ29ELEdBQUQsRUFBTztBQUNYLCtDQUFXQSxHQUFYO0FBQWV0RCxXQUFDLEVBQUNxRCxPQUFPLENBQUNyRDtBQUF6QjtBQUNILE9BRk0sQ0FBUDtBQUdILEtBSkQsTUFLSTtBQUNBRSxhQUFPLENBQUMsVUFBQ29ELEdBQUQsRUFBTztBQUNYLCtDQUFXQSxHQUFYO0FBQWV0RCxXQUFDLEVBQUNxRCxPQUFPLENBQUNyRCxDQUF6QjtBQUEyQkQsV0FBQyxFQUFDc0QsT0FBTyxDQUFDdEQ7QUFBckM7QUFDSCxPQUZNLENBQVA7QUFHSCxLQVh5QixDQWExQjs7QUFDSCxHQWREOztBQWdCQSxNQUFNd0QsV0FBVztBQUFBLDJTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVWQyxvQkFGVSxHQUVELEVBRkM7O0FBR2hCLG1CQUFXZCxHQUFYLElBQWtCbEIsUUFBbEIsRUFBMkI7QUFDdkJnQyxzQkFBTSxDQUFDZCxHQUFELENBQU4sR0FBY2xCLFFBQVEsQ0FBQ2tCLEdBQUQsQ0FBUixDQUFjM0IsS0FBNUI7QUFDSDs7QUFFRHlDLG9CQUFNLENBQUNDLFFBQVAsR0FBa0IvQyxNQUFNLENBQUNsQixTQUFQLENBQWlCaUIsVUFBbkM7QUFDQStDLG9CQUFNLENBQUNFLE9BQVAsR0FBa0JoRCxNQUFNLENBQUNqQixZQUFQLENBQW9CZ0IsVUFBdEM7QUFFTWtELHNCQVZVLEdBVUQsSUFBSUMsUUFBSixFQVZDOztBQVloQixrQkFBR2xFLElBQUksQ0FBQ0YsU0FBTCxLQUFtQixFQUFuQixJQUF5QkUsSUFBSSxDQUFDRCxZQUFMLEtBQXNCLEVBQWxELEVBQXFEO0FBRWpEa0Usd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUF5Qm5FLElBQUksQ0FBQ0YsU0FBOUI7QUFDQW1FLHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBeUJuRSxJQUFJLENBQUNELFlBQTlCO0FBRUgsZUFMRCxNQU1JO0FBRUFrRSx3QkFBUSxDQUFDRSxNQUFULENBQWdCLFFBQWhCLEVBQXlCbkUsSUFBSSxDQUFDVyxTQUFELENBQTdCO0FBQ0g7O0FBRURzRCxzQkFBUSxDQUFDRSxNQUFULENBQWdCLGVBQWhCLEVBQWdDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsTUFBZixDQUFoQztBQXZCZ0I7QUFBQTtBQUFBLHFCQTZCTlEsNkNBQUssQ0FBQ0MsSUFBTixvQkFBNkJOLFFBQTdCLENBN0JNOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFpQ0xPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLENBakNLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhaLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBdUNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTyxhQUFPLEVBQUVqRSxTQUFoQjtBQUEyQixXQUFLLEVBQUViO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUMyRixrQkFBVSxFQUFDLFFBQVo7QUFBcUJDLGdCQUFRLEVBQUM7QUFBOUIsT0FBWjtBQUF1RCxRQUFFLEVBQUMsT0FBMUQ7QUFBa0UsU0FBRyxFQUFFbEU7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsUUFBRDtBQUFVLGdCQUFVLEVBQUVTLGVBQXRCO0FBQXVDLFlBQU0sRUFBRW5DLE1BQS9DO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFBLGtCQUVRbUMsZUFBZSxnQkFHWDtBQUFLLGVBQUssRUFBRTtBQUFDMEQscUJBQVMsRUFBQztBQUFYLFdBQVo7QUFBQSxrQ0FDSSxxRUFBQyx1REFBRDtBQUFVLGlCQUFLLEVBQUU7QUFBQ0MsNkJBQWUsRUFBQyxLQUFqQjtBQUF1QjFFLG9CQUFNLEVBQUMsT0FBOUI7QUFBc0NDLG1CQUFLLEVBQUM7QUFBNUMsYUFBakI7QUFBdUUseUJBQWEsRUFBRVUsUUFBdEY7QUFBZ0csc0JBQVUsRUFBRTtBQUFDWCxvQkFBTSxFQUFDLE9BQVI7QUFBZ0JDLG1CQUFLLEVBQUMsT0FBdEI7QUFBOEIwRSx1QkFBUyxFQUFDO0FBQXhDLGFBQTVHO0FBQStKLGVBQUcsRUFBRXJFLEdBQUcsQ0FBQ0UsU0FBRCxDQUF2SztBQUFvTCxnQkFBSSxFQUFFSixJQUExTDtBQUFnTSxvQkFBUSxFQUFFLGtCQUFDb0QsT0FBRDtBQUFBLHFCQUFXRCxVQUFVLENBQUNDLE9BQUQsQ0FBckI7QUFBQTtBQUExTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNpQix1QkFBUyxFQUFDO0FBQVgsYUFBWjtBQUFBLG1DQUNDLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFJM0MsUUFBUSxFQUFaO0FBQUEsZUFBakI7QUFBaUMsbUJBQUssRUFBQyxXQUF2QztBQUFtRCxxQkFBTyxFQUFDLFdBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFcsZ0JBWVQ7QUFBQSxrQ0FDRSxxRUFBQyxVQUFEO0FBQVksd0JBQVksRUFBRWpCLE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJXLEdBQTNDO0FBQUEsb0NBQ0k7QUFBSyxtQkFBSyxFQUFFO0FBQUNrRSx3QkFBUSxFQUFDLFVBQVY7QUFBcUJJLG1CQUFHLEVBQUMsTUFBekI7QUFBZ0NDLHFCQUFLLEVBQUM7QUFBdEMsZUFBWjtBQUFBLHFDQUNJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUlJLHFFQUFDLFVBQUQ7QUFBYSxxQkFBTyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFLSSxxRUFBQyw0REFBRDtBQUFXLG1CQUFLLEVBQUU7QUFBQ0MscUJBQUssRUFBQztBQUFQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEosZUFNSTtBQUFPLHNCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSx1QkFBSzlCLFVBQVUsQ0FBQzhCLENBQUQsRUFBRyxXQUFILENBQWY7QUFBQSxlQUFqQjtBQUFpRCxrQkFBSSxFQUFDLFFBQXREO0FBQStELG9CQUFNLEVBQUMsa0NBQXRFO0FBQXlHLGdCQUFFLEVBQUMsTUFBNUc7QUFBbUgsa0JBQUksRUFBQyxNQUF4SDtBQUErSCxtQkFBSyxFQUFFO0FBQUNDLHVCQUFPLEVBQUM7QUFBVDtBQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVNFLHFFQUFDLGtCQUFEO0FBQUEsbUNBQ0kscUVBQUMscUVBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUNBLHVCQUFPLEVBQUMsTUFBVDtBQUFnQkMsOEJBQWMsRUFBQyxRQUEvQjtBQUF3Q0MsMEJBQVUsRUFBQztBQUFuRCxlQUFyQjtBQUFtRixtQkFBSyxFQUFDLE1BQXpGO0FBQWdHLG9CQUFNLEVBQUMsTUFBdkc7QUFBOEcscUJBQU8sRUFBRXJFLE1BQU0sQ0FBQ2pCLFlBQVAsQ0FBb0JVLEdBQTNJO0FBQUEsc0NBQ0kscUVBQUMsVUFBRDtBQUFZLHVCQUFPLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQVcscUJBQUssRUFBRTtBQUFDd0UsdUJBQUssRUFBQztBQUFQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFPLHdCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSx5QkFBSzlCLFVBQVUsQ0FBQzhCLENBQUQsRUFBRyxjQUFILENBQWY7QUFBQSxpQkFBakI7QUFBb0Qsc0JBQU0sRUFBQyxrQ0FBM0Q7QUFBOEYsa0JBQUUsRUFBQyxPQUFqRztBQUF5RyxvQkFBSSxFQUFDLE1BQTlHO0FBQXFILHFCQUFLLEVBQUU7QUFBQ0MseUJBQU8sRUFBQztBQUFUO0FBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixlQWdCRSxxRUFBQyxXQUFEO0FBQUEsdUJBRVFHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZekQsUUFBWixFQUFzQjBELEdBQXRCLENBQTBCLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFjO0FBRXBDLGtDQUFRLHFFQUFDLFdBQUQ7QUFBQSx1Q0FDSSxxRUFBQywyREFBRDtBQUNBLDJCQUFTLEVBQUU1RCxRQUFRLENBQUMyRCxJQUFELENBQVIsQ0FBZWxFLFNBRDFCO0FBRUEsc0JBQUksRUFBRSxDQUZOO0FBR0EsMEJBQVEsRUFBRSxrQkFBQzJELENBQUQ7QUFBQSwyQkFBS25DLFlBQVksQ0FBQzBDLElBQUQsRUFBTVAsQ0FBTixDQUFqQjtBQUFBLG1CQUhWO0FBSUEsdUJBQUssRUFBRTtBQUFDOUUseUJBQUssRUFBQztBQUFQLG1CQUpQO0FBS0EsdUJBQUssRUFBRTBCLFFBQVEsQ0FBQzJELElBQUQsQ0FBUixDQUFlakcsS0FMdEI7QUFNQSx5QkFBTyxFQUFDLFVBTlI7QUFPQSx1QkFBSyxFQUFFc0MsUUFBUSxDQUFDMkQsSUFBRCxDQUFSLENBQWVwRTtBQVB0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUjtBQVdILGFBYkQsQ0FGUixlQWlCSyxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUMsV0FBaEI7QUFBNEIscUJBQU8sRUFBRXdDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJGO0FBQUE7QUFkZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOERIOztHQXJRdUJwRSxVOztNQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS41YjhjOWQ4NGMyYjQ0ZmU4YmM1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQge0JsYWNrLFBvcmZpbGVpbWFnZX0gZnJvbSBcIi4uLy4uL3N0eWxlZGNvbXBvbmVudHMvYnV0dG9uXCJcclxuaW1wb3J0IHtUZXh0RmllbGQsQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ3JvcHBlciBmcm9tICBcInJlYWN0LWltYWdlLWNyb3BcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCJcclxuXHJcbmNvbnN0IEV4dGVyaW9yID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTokeyh7YWN0aXZlfSk9PmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG5sZWZ0OjUwJTtcclxudG9wOiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjE1MHB4XCIgOiBcIjcwcHhcIn07O1xyXG5tYXgtd2lkdGg6NjAwcHg7XHJcbndpZHRoOjkwJTtcclxuaGVpZ2h0OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcIjM1MHB4XCIgOiBcIjU4MHB4XCJ9O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnotaW5kZXg6MTAwMDtcclxub3ZlcmZsb3c6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwidmlzaWJsZVwiIDogXCJhdXRvXCJ9OztcclxuYFxyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxuYFxyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxud2lkdGg6MTAwJTtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgkeyh7SW1hZ2Vmb3JCYWNrfSk9PkltYWdlZm9yQmFja30pO1xyXG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2Vob2xkZXI9c3R5bGVkLmRpdmBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxNjBweDtcclxub3BhY2l0eTowLjg7XHJcbmxlZnQ6MzBweDtcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuY29uc3QgSW5wdXRob2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXRvcDo4MHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4OyBcclxucGFkZGluZy1ib3R0b206MjBweDtcclxuYFxyXG5cclxuY29uc3QgTGFiZWxpbWFnZT1zdHlsZWQubGFiZWxgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6MjAwcHg7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBhZGRpbmc6NnB4O1xyXG5wYWRkaW5nLWxlZnQ6NDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbmNvbG9yOmJsYWNrO1xyXG5vcGFjaXR5OjA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXR3aW5kb3coe3VwZGF0ZWZ1bmMsYWN0aXZlLGVkaXRkYXRhLGNsb3NlZnVuY30pe1xyXG5cclxuXHJcbiAgICBjb25zdCBbZmlsZSxzZXRmaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjcm9wLHNldGNyb3BdID0gdXNlU3RhdGUoe2FzcGVjdDoxNi8xNixoZWlnaHQ6MjAwLHdpZHRoOjEwMCx4OjUwLHk6NTB9KVxyXG4gICAgY29uc3QgW3NyYyxzZXRzcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2ltYWdldHlwZSxzZXRpbWFnZXR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZSxzZXRpbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRyZXN1bHRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHNyYzpcIlwiLFxyXG4gICAgICAgICAgICBjcm9wdmFsdWVzOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCJcIixcclxuICAgICAgICAgICAgICAgIHg6XCJcIixcclxuICAgICAgICAgICAgICAgIHk6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQcm9maWxlaW1hZ2U6e1xyXG4gICAgICAgICAgICBzcmM6XCJcIixcclxuICAgICAgICAgICAgY3JvcHZhbHVlczp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OlwiXCIsXHJcbiAgICAgICAgICAgICAgICB5OlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS3VsbGFuaWNpIEFkaVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLlBlcnNvbmFsdGV4dCxcclxuICAgICAgICAgICAgbGFiZWw6XCJLaXNpc2VsIEJpbGdpbGVyXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5iYWNraW1hZ2UsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9qcGVnXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOntzcmM6YmFzZTY0SW1hZ2UsY3JvcHZhbHVlczp7eDpjcm9wLngseTpjcm9wLnksd2lkdGg6Y3JvcC53aWR0aCxoZWlnaHQ6Y3JvcC5oZWlnaHR9fX1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElucHV0aGFuZGxlciA9IChrZXksZXZlbnQpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG11dGF0ZWQgPSB7Li4udXNlcmluZm99XHJcbiAgICAgICAgbXV0YXRlZFtrZXldLnZhbHVlPWV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldHVzZXJpbmZvKG11dGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlZmlsZSA9IChldmVudCx0eXBlKT0+e1xyXG5cclxuICAgICAgICBpZih0eXBlID09IFwiQmFja2ltYWdlXCIpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi85LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKHtcclxuICAgICAgICAgICAgICAgIGFzcGVjdDoxNi8xNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6NTAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldGltYWdldHlwZSh0eXBlKVxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUodHJ1ZSlcclxuICAgICAgICBzZXRzcmMoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0ZmlsZSgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpldmVudC50YXJnZXQuZmlsZXNbMF19XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVjcm9wID0gKG5ld2Nyb3ApPT57XHJcbiAgICAgICAgLy9idXJheWEgYmFrXHJcbiAgICAgICAgaWYoY3JvcC5hc3BlY3QgPiAxKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnl9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55LHg6bmV3Y3JvcC54fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92YWx1ZSBvZiBjcm9wcGVyIHdpZHRoIGhlaWdodCB4IGFuZCB5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VuZHVwZGF0ZXMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJpbmZvKXtcclxuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1c2VyaW5mb1trZXldLnZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZXMuYmFja2Nyb3AgPSByZXN1bHQuQmFja2ltYWdlLmNyb3B2YWx1ZXNcclxuICAgICAgICB2YWx1ZXMucHJvZmlsZSAgPSByZXN1bHQuUHJvZmlsZWltYWdlLmNyb3B2YWx1ZXNcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGE9bmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGUuQmFja2ltYWdlICE9PSBcIlwiICYmIGZpbGUuUHJvZmlsZWltYWdlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuQmFja2ltYWdlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUHJvZmlsZXZhbHVlc1wiLEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYC91cGxvYWQveC94L3gveGAsZm9ybURhdGEpO1xyXG4gICBcclxuICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVUExPQUQgRVJST1JSUlJSUlJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwidHJpYWxcIiBzcmM9e3NyY30+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19IG9uSW1hZ2VMb2FkZWQ9e3NldGltYWdlfSBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3Jlc3VsdC5CYWNraW1hZ2Uuc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIxMHB4XCIscmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+S2F5ZGV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtyZXN1bHQuUHJvZmlsZWltYWdlLnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8SW5wdXRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtTZW5kdXBkYXRlc30+VFJJQUwgVVBEQVRFPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==