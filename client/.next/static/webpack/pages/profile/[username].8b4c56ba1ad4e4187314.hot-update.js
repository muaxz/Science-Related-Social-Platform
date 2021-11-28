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
                formData.append("userinfo", {
                  name: "sa"
                });
              } else {
                formData.append("upload", file[imagetype]);
                formData.append("userinfo", "aldin beni");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL0VkaXR3aW5kb3cuanMiXSwibmFtZXMiOlsiRXh0ZXJpb3IiLCJzdHlsZWQiLCJkaXYiLCJhY3RpdmUiLCJnZXRjcm9wcGVyIiwiSW5uZXIiLCJCYWNrZ3JvdW5kIiwiSW1hZ2Vmb3JCYWNrIiwiUHJvZmlsZUltYWdlaG9sZGVyIiwiSW5wdXRob2xkZXIiLCJJbmZvcm1hdGlvbiIsIkxhYmVsaW1hZ2UiLCJsYWJlbCIsIkVkaXR3aW5kb3ciLCJ1cGRhdGVmdW5jIiwiZWRpdGRhdGEiLCJjbG9zZWZ1bmMiLCJ1c2VTdGF0ZSIsIkJhY2tpbWFnZSIsIlByb2ZpbGVpbWFnZSIsImZpbGUiLCJzZXRmaWxlIiwiYXNwZWN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNyb3AiLCJzZXRjcm9wIiwic3JjIiwic2V0c3JjIiwiaW1hZ2V0eXBlIiwic2V0aW1hZ2V0eXBlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsInJlc3VsdCIsInNldHJlc3VsdCIsImlzY3JvcHBlcmFjdGl2ZSIsInNldGNyb3BwZXJhY3RpdmUiLCJ1c2VybmFtZSIsInZhbHVlIiwid2FybmluZyIsIm11bHRpbGluZSIsImZpcnN0bmFtZSIsInN1cm5hbWUiLCJsYXN0bmFtZSIsInBlcnNvbmFsdGV4dCIsIlBlcnNvbmFsdGV4dCIsImJhY2tpbWFnZSIsInVzZXJpbmZvIiwic2V0dXNlcmluZm8iLCJ1c2VFZmZlY3QiLCJUb0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiYmFzZTY0SW1hZ2UiLCJ0b0RhdGFVUkwiLCJwcmV2IiwiSW5wdXRoYW5kbGVyIiwia2V5IiwiZXZlbnQiLCJtdXRhdGVkIiwidGFyZ2V0IiwiVXBkYXRlZmlsZSIsInR5cGUiLCJ1bml0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJ1cGRhdGVjcm9wIiwibmV3Y3JvcCIsInJlcyIsIlNlbmR1cGRhdGVzIiwidmFsdWVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm5hbWUiLCJheGlvcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Rml0IiwiY29sb3IiLCJlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUNKO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBWUEsTUFBTSxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUFBLENBREksRUFLUjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFNBQWdCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLE1BQXZDO0FBQUEsQ0FMUSxFQVFMO0FBQUEsTUFBRUEsVUFBRixTQUFFQSxVQUFGO0FBQUEsU0FBZ0JBLFVBQVUsR0FBRyxPQUFILEdBQWEsT0FBdkM7QUFBQSxDQVJLLEVBWUg7QUFBQSxNQUFFQSxVQUFGLFNBQUVBLFVBQUY7QUFBQSxTQUFnQkEsVUFBVSxHQUFHLFNBQUgsR0FBZSxNQUF6QztBQUFBLENBWkcsQ0FBZDtLQUFNSixRO0FBY04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFYO01BQU1HLEs7QUFLTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUND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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBZGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRESDs7R0EzT3VCbkUsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uOGI0YzU2YmExYWQ0ZTQxODczMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYUFsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtCbGFjayxQb3JmaWxlaW1hZ2V9IGZyb20gXCIuLi8uLi9zdHlsZWRjb21wb25lbnRzL2J1dHRvblwiXHJcbmltcG9ydCB7VGV4dEZpZWxkLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IENyb3BwZXIgZnJvbSAgXCJyZWFjdC1pbWFnZS1jcm9wXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiXHJcblxyXG5jb25zdCBFeHRlcmlvciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6JHsoe2FjdGl2ZX0pPT5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxubGVmdDo1MCU7XHJcbnRvcDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIxNTBweFwiIDogXCI3MHB4XCJ9OztcclxubWF4LXdpZHRoOjYwMHB4O1xyXG53aWR0aDo5MCU7XHJcbmhlaWdodDokeyh7Z2V0Y3JvcHBlcn0pPT5nZXRjcm9wcGVyID8gXCIzNTBweFwiIDogXCI1ODBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG56LWluZGV4OjEwMDA7XHJcbm92ZXJmbG93OiR7KHtnZXRjcm9wcGVyfSk9PmdldGNyb3BwZXIgPyBcInZpc2libGVcIiA6IFwiYXV0b1wifTs7XHJcbmBcclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbmBcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5vcGFjaXR5OjAuODtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoJHsoe0ltYWdlZm9yQmFja30pPT5JbWFnZWZvckJhY2t9KTtcclxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG50cmFuc2l0aW9uOjAuNHM7XHJcbiY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuYFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlaG9sZGVyPXN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTYwcHg7XHJcbm9wYWNpdHk6MC44O1xyXG5sZWZ0OjMwcHg7XHJcbnRyYW5zaXRpb246MC40cztcclxuJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5gXHJcbmNvbnN0IElucHV0aG9sZGVyID0gc3R5bGVkLmRpdmBcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxucGFkZGluZy10b3A6ODBweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7XHJcbnBhZGRpbmctcmlnaHQ6MjBweDsgXHJcbnBhZGRpbmctYm90dG9tOjIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsaW1hZ2U9c3R5bGVkLmxhYmVsYFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OjIwMHB4O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5wYWRkaW5nOjZweDtcclxucGFkZGluZy1sZWZ0OjQ1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5jb2xvcjpibGFjaztcclxub3BhY2l0eTowO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0d2luZG93KHt1cGRhdGVmdW5jLGFjdGl2ZSxlZGl0ZGF0YSxjbG9zZWZ1bmN9KXtcclxuXHJcblxyXG4gICAgY29uc3QgW2ZpbGUsc2V0ZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgQmFja2ltYWdlOlwiXCIsXHJcbiAgICAgICAgUHJvZmlsZWltYWdlOlwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBbY3JvcCxzZXRjcm9wXSA9IHVzZVN0YXRlKHthc3BlY3Q6MTYvMTYsaGVpZ2h0OjIwMCx3aWR0aDoxMDAseDo1MCx5OjUwfSlcclxuICAgIGNvbnN0IFtzcmMsc2V0c3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpbWFnZXR5cGUsc2V0aW1hZ2V0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2Usc2V0aW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtyZXN1bHQsc2V0cmVzdWx0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBCYWNraW1hZ2U6XCJcIixcclxuICAgICAgICBQcm9maWxlaW1hZ2U6XCJcIlxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpc2Nyb3BwZXJhY3RpdmUsc2V0Y3JvcHBlcmFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyaW5mbyxzZXR1c2VyaW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICB2YWx1ZTplZGl0ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJLdWxsYW5pY2kgQWRpXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlyc3RuYW1lOntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIkFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VybmFtZTp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDpcIlNveWFkXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGVyc29uYWx0ZXh0OntcclxuICAgICAgICAgICAgdmFsdWU6ZWRpdGRhdGEuUGVyc29uYWx0ZXh0LFxyXG4gICAgICAgICAgICBsYWJlbDpcIktpc2lzZWwgQmlsZ2lsZXJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tpbWFnZTp7XHJcbiAgICAgICAgICAgIHZhbHVlOmVkaXRkYXRhLmJhY2tpbWFnZSxcclxuICAgICAgICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcclxuICAgICAgICAgICAgbXVsdGlsaW5lOnRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKGZhbHNlKVxyXG4gICAgfSxbYWN0aXZlXSlcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFRvQ2FudmFzID0gYXN5bmMgKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIFxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wLndpZHRoLFxyXG4gICAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWdlL2pwZWdcIilcclxuXHJcbiAgICAgICAgc2V0cmVzdWx0KChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW2ltYWdldHlwZV06YmFzZTY0SW1hZ2V9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Y3JvcHBlcmFjdGl2ZShmYWxzZSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJbnB1dGhhbmRsZXIgPSAoa2V5LGV2ZW50KT0+e1xyXG5cclxuICAgICAgICBjb25zdCBtdXRhdGVkID0gey4uLnVzZXJpbmZvfVxyXG4gICAgICAgIG11dGF0ZWRba2V5XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXR1c2VyaW5mbyhtdXRhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZWZpbGUgPSAoZXZlbnQsdHlwZSk9PntcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PSBcIkJhY2tpbWFnZVwiKXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvOSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgICAgICAgICB1bml0OlwicHhcIixcclxuICAgICAgICAgICAgICAgIHg6MCxcclxuICAgICAgICAgICAgICAgIHk6NTBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Y3JvcCh7XHJcbiAgICAgICAgICAgICAgICBhc3BlY3Q6MTYvMTYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwLFxyXG4gICAgICAgICAgICAgICAgdW5pdDpcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB4OjUwLFxyXG4gICAgICAgICAgICAgICAgeTo1MFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRpbWFnZXR5cGUodHlwZSlcclxuICAgICAgICBzZXRjcm9wcGVyYWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0c3JjKChwcmV2KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByZXYsW3R5cGVdOlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldGZpbGUoKHByZXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldixbdHlwZV06ZXZlbnQudGFyZ2V0LmZpbGVzWzBdfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlY3JvcCA9IChuZXdjcm9wKT0+e1xyXG4gICAgICAgIC8vYnVyYXlhIGJha1xyXG4gICAgICAgIGlmKGNyb3AuYXNwZWN0ID4gMSl7XHJcbiAgICAgICAgICAgIHNldGNyb3AoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucmVzLHk6bmV3Y3JvcC55fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRjcm9wKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnJlcyx5Om5ld2Nyb3AueSx4Om5ld2Nyb3AueH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFsdWUgb2YgY3JvcHBlciB3aWR0aCBoZWlnaHQgeCBhbmQgeVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlbmR1cGRhdGVzID0gYXN5bmMgKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge31cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyaW5mbyl7XHJcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXNlcmluZm9ba2V5XS52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGE9bmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGUuQmFja2ltYWdlICE9PSBcIlwiICYmIGZpbGUuUHJvZmlsZWltYWdlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZFwiLGZpbGUuQmFja2ltYWdlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZS5Qcm9maWxlaW1hZ2UpXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJpbmZvXCIse25hbWU6XCJzYVwifSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkXCIsZmlsZVtpbWFnZXR5cGVdKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyaW5mb1wiLFwiYWxkaW4gYmVuaVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0cnl7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAvdXBsb2FkL1wie1wieDFcIjphaG1ldH1cIi94L3gveFwiYCxmb3JtRGF0YSk7XHJcbiAgIFxyXG4gICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVQTE9BRCBFUlJPUlJSUlJSUlwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCbGFjayBvbkNsaWNrPXtjbG9zZWZ1bmN9IGFrdGlmPXthY3RpdmV9Lz5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3Zpc2liaWxpdHk6XCJoaWRkZW5cIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSBpZD1cInRyaWFsXCIgc3JjPXtzcmN9PjwvaW1nPlxyXG4gICAgICAgICAgICA8RXh0ZXJpb3IgZ2V0Y3JvcHBlcj17aXNjcm9wcGVyYWN0aXZlfSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8SW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2Nyb3BwZXJhY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3BwZXIgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCIsaGVpZ2h0OlwiMzUwcHhcIix3aWR0aDpcIjMwMHB4XCJ9fSBvbkltYWdlTG9hZGVkPXtzZXRpbWFnZX0gaW1hZ2VTdHlsZT17e2hlaWdodDpcIjM1MHB4XCIsd2lkdGg6XCIzMDBweFwiLG9iamVjdEZpdDpcImNvdmVyXCJ9fSAgc3JjPXtzcmNbaW1hZ2V0eXBlXX0gY3JvcD17Y3JvcH0gb25DaGFuZ2U9eyhuZXdjcm9wKT0+dXBkYXRlY3JvcChuZXdjcm9wKX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+VG9DYW52YXMoKX0gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgPlVwbG9hZCB0aGUgZmlsZSB0byBzZXJ2ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgSW1hZ2Vmb3JCYWNrPXtyZXN1bHQuQmFja2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsaW1hZ2UgIGh0bWxGb3I9XCJmaWxlXCI+PC9MYWJlbGltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5VcGRhdGVmaWxlKGUsXCJCYWNraW1hZ2VcIil9IG5hbWU9XCJ1cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZWhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcmZpbGVpbWFnZSBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgcHJvZmlsZT17cmVzdWx0LlByb2ZpbGVpbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxpbWFnZSBodG1sRm9yPVwiZmlsZTJcIj48L0xhYmVsaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhQWx0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+PC9DYW1lcmFBbHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+VXBkYXRlZmlsZShlLFwiUHJvZmlsZWltYWdlXCIpfSBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2dpZiwgaW1hZ2UvanBlZ1wiIGlkPVwiZmlsZTJcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9yZmlsZWltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZmlsZUltYWdlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModXNlcmluZm8pLm1hcCgoaXRlbSxpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8SW5wdXRob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dXNlcmluZm9baXRlbV0ubXVsdGlsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+SW5wdXRoYW5kbGVyKGl0ZW0sZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3VzZXJpbmZvW2l0ZW1dLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJpbmZvW2l0ZW1dLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dGhvbGRlcj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtTZW5kdXBkYXRlc30+VFJJQUwgVVBEQVRFPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvSW5uZXI+XHJcbiAgICAgICAgICAgIDwvRXh0ZXJpb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==