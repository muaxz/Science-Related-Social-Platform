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
    Backimage: "",
    Profileimage: ""
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
                return _objectSpread(_objectSpread({}, prev), {}, Object(C_Users_bexsd_Desktop_nextproject_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, imagetype, base64Image));
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

              formData = new FormData();

              if (file.Backimage !== "" && file.Profileimage !== "") {
                formData.append("upload", file.Backimage);
                formData.append("upload", file.Profileimage);
                formData.append("userinfo", JSON.stringify({
                  name: "sadik"
                }));
              } else {
                formData.append("upload", file[imagetype]);
                formData.append("userinfo", JSON.stringify({
                  name: "sadik"
                }));
              }

              _context2.prev = 4;
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("/upload/\"{\"x1\":ahmet}\"/x/x/x\"", formData);

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](4);
              return _context2.abrupt("return", console.log("UPLOAD ERRORRRRRRR"));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 9]]);
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
      lineNumber: 260,
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
      lineNumber: 261,
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
            lineNumber: 269,
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
              lineNumber: 271,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
            ImageforBack: result.Backimage,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
              htmlFor: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
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
              lineNumber: 281,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
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
              profile: result.Profileimage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Labelimage, {
                htmlFor: "file2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CameraAlt"], {
                style: {
                  color: "white"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
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
                lineNumber: 287,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
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
                  lineNumber: 295,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 53
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              variant: "secondary",
              onClick: Sendupdates,
              children: "TRIAL UPDATE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 38
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 33
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 9
  }, this);
}

_s(Editwindow, "n7dQPjs0Rqk+s2Zv9qSkLmtJsuA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJJbmZvcm1hdGlvbiIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkVkaXR3aW5kb3ciLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsInJlc3VsdCIsInNldHJlc3VsdCIsImlzY3JvcHBlcmFjdGl2ZSIsInNldGNyb3BwZXJhY3RpdmUiLCJ1c2VybmFtZSIsInZhbHVlIiwid2FybmluZyIsIm11bHRpbGluZSIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJsYXN0bmFtZSIsInBlcnNvbmFsdGV4dCIsIlBlcnNvbmFsdGV4dCIsImJhY2tpbWFnZSIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJ1c2VFZmZlY3QiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwia2V5IiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiYXhpb3MiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsImNvbG9yIiwiZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTUFDSjtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQVlBLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFBQSxDQURJLEVBS1I7QUFBQSxNQUFFQyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxNQUF2QztBQUFBLENBTFEsRUFRTDtBQUFBLE1BQUVBLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE9BQXZDO0FBQUEsQ0FSSyxFQVlIO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxTQUFILEdBQWUsTUFBekM7QUFBQSxDQVpHLENBQWQ7S0FBTUosUTtBQWNOLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBWDtNQUFNRyxLO0FBS04sSUFBTUMsVUFB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SyxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUMsV0FBaEI7QUFBNEIscUJBQU8sRUFBRXdDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0REg7O0dBM091Qm5FLFU7O01BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjIxZjc1MTdmZmIyMWRhNGM4ZWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmFBbHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7QmxhY2ssUG9yZmlsZWltYWdlfSBmcm9tIFwiLi4vLi4vc3R5bGVkY29tcG9uZW50cy9idXR0b25cIlxyXG5pbXBvcnQge1RleHRGaWVsZCxCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDcm9wcGVyIGZyb20gIFwicmVhY3QtaW1hZ2UtY3JvcFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIlxyXG5cclxuY29uc3QgRXh0ZXJpb3IgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiR7KHthY3RpdmV9KT0+YWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbmxlZnQ6NTAlO1xyXG50b3A6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMTUwcHhcIiA6IFwiNzBweFwifTs7XHJcbm1heC13aWR0aDo2MDBweDtcclxud2lkdGg6OTAlO1xyXG5oZWlnaHQ6JHsoe2dldGNyb3BwZXJ9KT0+Z2V0Y3JvcHBlciA/IFwiMzUwcHhcIiA6IFwiNTgwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuei1pbmRleDoxMDAwO1xyXG5vdmVyZmxvdzokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCJ2aXNpYmxlXCIgOiBcImF1dG9cIn07O1xyXG5gXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmU7XHJcblxyXG5gXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbmhlaWdodDoyMDBweDtcclxub3BhY2l0eTowLjg7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKCR7KHtJbWFnZWZvckJhY2t9KT0+SW1hZ2Vmb3JCYWNrfSk7XHJcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxudHJhbnNpdGlvbjowLjRzO1xyXG4mOmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZWhvbGRlcj1zdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE2MHB4O1xyXG5vcGFjaXR5OjAuODtcclxubGVmdDozMHB4O1xyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5jb25zdCBJbnB1dGhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6MjBweDtcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjgwcHg7XHJcbnBhZGRpbmctbGVmdDoyMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjIwcHg7IFxyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMYWJlbGltYWdlPXN0eWxlZC5sYWJlbGBcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDoyMDBweDtcclxuZGlzcGxheTpibG9jaztcclxucGFkZGluZzo2cHg7XHJcbnBhZGRpbmctbGVmdDo0NXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6YmxhY2s7XHJcbm9wYWNpdHk6MDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdHdpbmRvdyh7dXBkYXRlZnVuYyxhY3RpdmUsZWRpdGRhdGEsY2xvc2VmdW5jfSl7XHJcblxyXG5cclxuICAgIGNvbnN0IFtmaWxlLHNldGZpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIEJhY2tpbWFnZTpcIlwiLFxyXG4gICAgICAgIFByb2ZpbGVpbWFnZTpcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Nyb3Asc2V0Y3JvcF0gPSB1c2VTdGF0ZSh7YXNwZWN0OjE2LzE2LGhlaWdodDoyMDAsd2lkdGg6MTAwLHg6NTAseTo1MH0pXHJcbiAgICBjb25zdCBbc3JjLHNldHNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaW1hZ2V0eXBlLHNldGltYWdldHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlLHNldGltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdWx0LHNldHJlc3VsdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaXNjcm9wcGVyYWN0aXZlLHNldGNyb3BwZXJhY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcmluZm8sc2V0dXNlcmluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiS3VsbGFuaWNpIEFkaVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcnN0bmFtZTp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJBZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cm5hbWU6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJTb3lhZFwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBlcnNvbmFsdGV4dDp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLlBlcnNvbmFsdGV4dCxcclxuICAgICAgICAgICAgbGFiZWw6XCJLaXNpc2VsIEJpbGdpbGVyXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNraW1hZ2U6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS5iYWNraW1hZ2UsXHJcbiAgICAgICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgIH0sW2FjdGl2ZV0pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBUb0NhbnZhcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgICBjcm9wLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1nZS9qcGVnXCIpXHJcblxyXG4gICAgICAgIHNldHJlc3VsdCgocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFtpbWFnZXR5cGVdOmJhc2U2NEltYWdlfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldGNyb3BwZXJhY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSW5wdXRoYW5kbGVyID0gKGtleSxldmVudCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgbXV0YXRlZCA9IHsuLi51c2VyaW5mb31cclxuICAgICAgICBtdXRhdGVkW2tleV0udmFsdWU9ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0dXNlcmluZm8obXV0YXRlZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVmaWxlID0gKGV2ZW50LHR5cGUpPT57XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJCYWNraW1hZ2VcIil7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICAgICAgICB5OjUwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldGNyb3Aoe1xyXG4gICAgICAgICAgICAgICAgYXNwZWN0OjE2LzE2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMCxcclxuICAgICAgICAgICAgICAgIHVuaXQ6XCJweFwiLFxyXG4gICAgICAgICAgICAgICAgeDo1MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0aW1hZ2V0eXBlKHR5cGUpXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIHNldHNyYygocHJldik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2LFt0eXBlXTpVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRmaWxlKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOmV2ZW50LnRhcmdldC5maWxlc1swXX1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWNyb3AgPSAobmV3Y3JvcCk9PntcclxuICAgICAgICAvL2J1cmF5YSBiYWtcclxuICAgICAgICBpZihjcm9wLmFzcGVjdCA+IDEpe1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5yZXMseTpuZXdjcm9wLnkseDpuZXdjcm9wLnh9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZhbHVlIG9mIGNyb3BwZXIgd2lkdGggaGVpZ2h0IHggYW5kIHlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTZW5kdXBkYXRlcyA9IGFzeW5jICgpPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXNlcmluZm8pe1xyXG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHVzZXJpbmZvW2tleV0udmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBpZihmaWxlLkJhY2tpbWFnZSAhPT0gXCJcIiAmJiBmaWxlLlByb2ZpbGVpbWFnZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlLkJhY2tpbWFnZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuUHJvZmlsZWltYWdlKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyaW5mb1wiLEpTT04uc3RyaW5naWZ5KHtuYW1lOlwic2FkaWtcIn0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIixmaWxlW2ltYWdldHlwZV0pXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJpbmZvXCIsSlNPTi5zdHJpbmdpZnkoe25hbWU6XCJzYWRpa1wifSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYC91cGxvYWQvXCJ7XCJ4MVwiOmFobWV0fVwiL3gveC94XCJgLGZvcm1EYXRhKTtcclxuICAgXHJcbiAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVBMT0FEIEVSUk9SUlJSUlJSXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJsYWNrIG9uQ2xpY2s9e2Nsb3NlZnVuY30gYWt0aWY9e2FjdGl2ZX0vPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7dmlzaWJpbGl0eTpcImhpZGRlblwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19IGlkPVwidHJpYWxcIiBzcmM9e3NyY30+PC9pbWc+XHJcbiAgICAgICAgICAgIDxFeHRlcmlvciBnZXRjcm9wcGVyPXtpc2Nyb3BwZXJhY3RpdmV9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY3JvcHBlcmFjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JvcHBlciAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIixoZWlnaHQ6XCIzNTBweFwiLHdpZHRoOlwiMzAwcHhcIn19IG9uSW1hZ2VMb2FkZWQ9e3NldGltYWdlfSBpbWFnZVN0eWxlPXt7aGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCIsb2JqZWN0Rml0OlwiY292ZXJcIn19ICBzcmM9e3NyY1tpbWFnZXR5cGVdfSBjcm9wPXtjcm9wfSBvbkNoYW5nZT17KG5ld2Nyb3ApPT51cGRhdGVjcm9wKG5ld2Nyb3ApfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5Ub0NhbnZhcygpfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiA+VXBsb2FkIHRoZSBmaWxlIHRvIHNlcnZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCBJbWFnZWZvckJhY2s9e3Jlc3VsdC5CYWNraW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSAgaHRtbEZvcj1cImZpbGVcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PlVwZGF0ZWZpbGUoZSxcIkJhY2tpbWFnZVwiKX0gbmFtZT1cInVwbG9hZFwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9yZmlsZWltYWdlIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiBwcm9maWxlPXtyZXN1bHQuUHJvZmlsZWltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbGltYWdlIGh0bWxGb3I9XCJmaWxlMlwiPjwvTGFiZWxpbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFBbHQgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT48L0NhbWVyYUFsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJQcm9maWxlaW1hZ2VcIil9IGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnXCIgaWQ9XCJmaWxlMlwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3JmaWxlaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9maWxlSW1hZ2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VyaW5mbykubWFwKChpdGVtLGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxJbnB1dGhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lPXt1c2VyaW5mb1tpdGVtXS5tdWx0aWxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5JbnB1dGhhbmRsZXIoaXRlbSxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dXNlcmluZm9baXRlbV0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcmluZm9baXRlbV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0aG9sZGVyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e1NlbmR1cGRhdGVzfT5UUklBTCBVUERBVEU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Jbm5lcj5cclxuICAgICAgICAgICAgPC9FeHRlcmlvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9