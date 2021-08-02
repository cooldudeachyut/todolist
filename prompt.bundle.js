/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/FiraSans-Light.ttf */ "./src/assets/FiraSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/FiraSans-Medium.ttf */ "./src/assets/FiraSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'), \n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:200px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\toverflow:hidden;\n\tmargin: 0;\n}\n\n.remove-btn {\n\tposition: relative;\n\tleft:5px;\n\tfont-size:10px;\n\theight: 20px;\n\twidth:20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n\tborder-radius: 50%;\n\tmargin:0;\n}\n\n.remove-btn:hover{\n\tanimation-name: remove;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes remove {\n\t0% {}\n\t100% {background-color: rgba(248, 21, 21, 0.685); }\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:200px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 200px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#task-list {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100%;\n\twidth: calc(100vw - 200px);\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft:20px;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n\tmargin: 20px 0;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: calc((100vw - 220px)/5);\n\theight: 100%;\n\tmargin: 0;\n\tword-break: break-all;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 220px))/5);\n}\n\n.task {\n\twidth:100%;\n\tdisplay:flex;\n\talign-items: center;\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url('../assets/FiraSans-Light.ttf') format('truetype'), \n\turl('../assets/FiraSans-Medium.ttf') format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:200px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\toverflow:hidden;\n\tmargin: 0;\n}\n\n.remove-btn {\n\tposition: relative;\n\tleft:5px;\n\tfont-size:10px;\n\theight: 20px;\n\twidth:20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n\tborder-radius: 50%;\n\tmargin:0;\n}\n\n.remove-btn:hover{\n\tanimation-name: remove;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes remove {\n\t0% {}\n\t100% {background-color: rgba(248, 21, 21, 0.685); }\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:200px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 200px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#task-list {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100%;\n\twidth: calc(100vw - 200px);\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft:20px;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n\tmargin: 20px 0;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: calc((100vw - 220px)/5);\n\theight: 100%;\n\tmargin: 0;\n\tword-break: break-all;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 220px))/5);\n}\n\n.task {\n\twidth:100%;\n\tdisplay:flex;\n\talign-items: center;\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/FiraSans-Light.ttf":
/*!***************************************!*\
  !*** ./src/assets/FiraSans-Light.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "850f6774fcb288117634.ttf";

/***/ }),

/***/ "./src/assets/FiraSans-Medium.ttf":
/*!****************************************!*\
  !*** ./src/assets/FiraSans-Medium.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e604b4c5b46337e1a28.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"prompt": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/scripts/prompt.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basicElementFactory": () => (/* binding */ basicElementFactory),
/* harmony export */   "createTaskPrompt": () => (/* binding */ createTaskPrompt),
/* harmony export */   "createProjectPrompt": () => (/* binding */ createProjectPrompt)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");


function basicElementFactory(...elementDetails) //Element tag name, Element id (send value as undefined for no id), Element class 1, class 2 ....
{
	let div = document.createElement(elementDetails[0]);

	for (let i = 1; i < elementDetails.length; i++)
	{
		if (i == 1 && elementDetails[i] != undefined)
			div.id = elementDetails[i];
		
		else if (i != 1)
			div.className += ` ${elementDetails[i]}`;
	}	

	return div;
}

function createLabel(id, labelText, labelClass)
{
	let label = basicElementFactory('label', undefined, labelClass);
	label.setAttribute('for', `${id}`);
	label.innerText = labelText;

	return label;
}

function createInputBox(id, name, type, inputBoxClass)
{
	let inputBox = basicElementFactory('input', id, inputBoxClass);
	inputBox.setAttribute('type', `${type}`);
	inputBox.setAttribute('name', `${name}`);
	inputBox.setAttribute('autocomplete', 'off');
	inputBox.setAttribute('required', '');

	if (type == "text")
		inputBox.setAttribute("maxlength", "25");

	return inputBox;
}

function addLabelAndInput(formElement, id, name, type, labelText, containerClass, labelClass, inputBoxClass)
{
	let div = basicElementFactory('div', undefined, containerClass);
	
	div.append(createLabel(id, labelText, labelClass));
	div.append(createInputBox(id, name, type, inputBoxClass));

	formElement.append(div);
}

function createTextArea(id, name, textAreaClass)
{
	let textArea = basicElementFactory('textarea', id, textAreaClass);

	textArea.setAttribute('wrap', 'hard');
	textArea.setAttribute('maxlength', '150');
	textArea.setAttribute('name', name);

	return textArea;
}

function addLabelAndTextArea(formElement, id, name, labelText, containerClass, labelClass, textAreaClass)
{
	let div = basicElementFactory('div', undefined, containerClass);
	
	div.append(createLabel(id, labelText, labelClass));
	div.append(createTextArea(id, name, textAreaClass));

	formElement.append(div);
}

function createBasicPromptWindow()
{
	let containerDiv = basicElementFactory('div', 'prompt-container');
	let blackScreen = basicElementFactory('div', 'black-screen');
	let taskPromptForm = basicElementFactory('form', 'input-form', 'form-box');

	blackScreen.addEventListener('mousedown', deletePromptWindow);
	taskPromptForm.addEventListener('submit', handleForm);

	containerDiv.append(blackScreen);
	containerDiv.append(taskPromptForm);

	return [containerDiv, taskPromptForm];
}

function createSubmitButton()
{
	let submitButton = basicElementFactory('button', 'submit');
	submitButton.setAttribute('type', 'submit');
	submitButton.setAttribute('form', 'input-form');
	submitButton.innerText = "Submit";

	return submitButton;
}

function createTaskPrompt()
{
	deletePromptWindow();
	let promptWindow = createBasicPromptWindow();

	addLabelAndInput(promptWindow[1], 'task-name', 'task', 'text', 'Enter task name', 'input-container', 'label-text', 'input-box');
	addLabelAndTextArea(promptWindow[1], 'task-description', 'description', 'Enter task description', 'input-container', 'label-text', 'input-box description-box');
	addLabelAndInput(promptWindow[1], 'due-date', 'date', 'date', 'Enter due date', 'input-container', 'label-text', 'input-box');
	promptWindow[1].append(createSubmitButton());

	return promptWindow;
}

function createProjectPrompt()
{
	deletePromptWindow();
	let promptWindow = createBasicPromptWindow();

	addLabelAndInput(promptWindow[1], 'project-name', 'project', 'text', 'Enter project name', 'input-container', 'label-text', 'input-box');
	promptWindow[1].append(createSubmitButton());

	return promptWindow;
}

function handleForm(event)
{
	event.preventDefault();
	deletePromptWindow();
}

function deletePromptWindow()
{
	let window = document.getElementById('prompt-container');

	if (window)
		window.remove();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9tcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQ25HLDRDQUE0QyxvSUFBK0M7QUFDM0YsNENBQTRDLHNJQUFnRDtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwrQkFBK0Isb0pBQW9KLEdBQUcsV0FBVyxtQkFBbUIsMkNBQTJDLGFBQWEsb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsV0FBVyxnQkFBZ0IsaUJBQWlCLDJDQUEyQyxHQUFHLGdCQUFnQiw4QkFBOEIsc0JBQXNCLEdBQUcsaUJBQWlCLGlCQUFpQixpQkFBaUIsdUNBQXVDLG9CQUFvQiw2RUFBNkUsZ0JBQWdCLEdBQUcsZUFBZSx1QkFBdUIsV0FBVyxhQUFhLEdBQUcsY0FBYyxrQkFBa0IsbUNBQW1DLGdCQUFnQixjQUFjLHVCQUF1QixjQUFjLEdBQUcs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QTtBQUNBLDhCQUE4QixHQUFHO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEtBQUs7QUFDdkMsa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InByb21wdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0ZpcmFTYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9GaXJhU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiZmlyYS1zYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCBcXG5cXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuI21haW4ge1xcblxcdGZvbnQtc2l6ZToyNXB4O1xcblxcdGZvbnQtZmFtaWx5OiAnZmlyYS1zYW5zJywgJ3NhbnMtc2VyaWYnO1xcblxcdG1hcmdpbjowO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI3RvcGJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTYpO1xcbn1cXG5cXG4jdG9wYmFyIGgxIHtcXG5cXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiAxMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE5MiwgMzIpO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luOjE1cHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA4MHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0bGVmdDowO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDoyMDBweDtcXG5cXHRib3JkZXItcmlnaHQ6cmdiKDAsIDAsIDApIHNvbGlkIDJweDtcXG59XFxuXFxuI2xpc3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC44NTYpIHNvbGlkIDFweDtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnJlbW92ZS1idG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OjVweDtcXG5cXHRmb250LXNpemU6MTBweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0d2lkdGg6MjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdG1hcmdpbjowO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0bjpob3ZlcntcXG5cXHRhbmltYXRpb24tbmFtZTogcmVtb3ZlO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcmVtb3ZlIHtcXG5cXHQwJSB7fVxcblxcdDEwMCUge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMSwgMjEsIDAuNjg1KTsgfVxcbn1cXG5cXG4uZGlzcGxheS1vcHRpb246aG92ZXIge1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG5cXHRhbmltYXRpb24tbmFtZTogb3B0aW9uLWhvdmVyO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3B0aW9uLWhvdmVyIHtcXG5cXHQwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogbm9uZTtcXG5cXHR9XFxuXFx0XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC42MzcpO1xcblxcdH1cXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRib3JkZXItdG9wOiBzb2xpZCAycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogc29saWQgM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdG92ZXJmbG93LXk6YXV0bztcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuXFx0bWFyZ2luLXRvcDoyMHB4O1xcblxcdG92ZXJmbG93LXk6aGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIGgxIHtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHRjb2xvcjpyZ2IoMTEsIDAsIDExNCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBkaXYge1xcblxcdG92ZXJmbG93LXk6YXV0bztcXG59XFxuXFxuI2xpc3QtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDoyMDBweDtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNkYXRhLWlkZW50aWZpZXJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6MjBweDtcXG59XFxuXFxuI2RhdGEtaWRlbnRpZmllcnMgaDEge1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ubGlzdC1pbmZvIHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiBjYWxjKCgxMDB2dyAtIDIyMHB4KS81KTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWluZm8ge1xcblxcdHdpZHRoOiBjYWxjKCgzKigxMDB2dyAtIDIyMHB4KSkvNSk7XFxufVxcblxcbi50YXNrIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvbXB0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDoxMDB2aDtcXG5cXHR3aWR0aDoxMDB2dztcXG59XFxuXFxuI2JsYWNrLXNjcmVlbiB7XFxuXFx0ei1pbmRleDo5OTg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbn1cXG5cXG4uZm9ybS1ib3gge1xcblxcdHotaW5kZXg6OTk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubGFiZWwtdGV4dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5wdXQtYm94IHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogJ2ZpcmEtc2FucycsICdzYW5zLXNlcmlmJztcXG5cXHRwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU3LCA1Nyk7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHdCQUF3QjtDQUN4QjsyREFDdUQ7QUFDeEQ7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsc0NBQXNDO0NBQ3RDLFFBQVE7Q0FDUixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixXQUFXO0NBQ1gsWUFBWTtDQUNaLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2Ysd0VBQXdFO0NBQ3hFLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtBQUNUOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsU0FB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QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJmaXJhLXNhbnNcXFwiO1xcblxcdHNyYzogdXJsKCcuLi9hc3NldHMvRmlyYVNhbnMtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCBcXG5cXHR1cmwoJy4uL2Fzc2V0cy9GaXJhU2Fucy1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4jbWFpbiB7XFxuXFx0Zm9udC1zaXplOjI1cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdmaXJhLXNhbnMnLCAnc2Fucy1zZXJpZic7XFxuXFx0bWFyZ2luOjA7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG5cXG4jdG9wYmFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDgwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1Nik7XFxufVxcblxcbiN0b3BiYXIgaDEge1xcblxcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Zm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0d2lkdGg6IDEyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTkyLCAzMik7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW46MTVweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDgwcHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXHRsZWZ0OjA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdHdpZHRoOjIwMHB4O1xcblxcdGJvcmRlci1yaWdodDpyZ2IoMCwgMCwgMCkgc29saWQgMnB4O1xcbn1cXG5cXG4jbGlzdC1vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaXNwbGF5LW9wdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cGFkZGluZzogMTVweCAwO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogcmdiYSgwLCAwLCAwLCAwLjg1Nikgc29saWQgMXB4O1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRvdmVyZmxvdzpoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6NXB4O1xcblxcdGZvbnQtc2l6ZToxMHB4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHR3aWR0aDoyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0bWFyZ2luOjA7XFxufVxcblxcbi5yZW1vdmUtYnRuOmhvdmVye1xcblxcdGFuaW1hdGlvbi1uYW1lOiByZW1vdmU7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByZW1vdmUge1xcblxcdDAlIHt9XFxuXFx0MTAwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIxLCAyMSwgMC42ODUpOyB9XFxufVxcblxcbi5kaXNwbGF5LW9wdGlvbjpob3ZlciB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcblxcdGFuaW1hdGlvbi1uYW1lOiBvcHRpb24taG92ZXI7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBvcHRpb24taG92ZXIge1xcblxcdDAlIHtcXG5cXHRcXHRib3gtc2hhZG93OiBub25lO1xcblxcdH1cXG5cXHRcXG5cXHQxMDAlIHtcXG5cXHRcXHRib3gtc2hhZG93OiAtNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYzNyk7XFxuXFx0fVxcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJvcmRlci10b3A6IHNvbGlkIDJweDtcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAzcHg7XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG5cXHRtYXJnaW4tdG9wOjIwcHg7XFxuXFx0b3ZlcmZsb3cteTpoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMgaDEge1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGNvbG9yOnJnYigxMSwgMCwgMTE0KTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IGRpdiB7XFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4jbGlzdC1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OjIwMHB4O1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RhdGEtaWRlbnRpZmllcnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDoyMHB4O1xcbn1cXG5cXG4jZGF0YS1pZGVudGlmaWVycyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0bWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5saXN0LWluZm8ge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoKDEwMHZ3IC0gMjIwcHgpLzUpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5mbyB7XFxuXFx0d2lkdGg6IGNhbGMoKDMqKDEwMHZ3IC0gMjIwcHgpKS81KTtcXG59XFxuXFxuLnRhc2sge1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9tcHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OjEwMHZoO1xcblxcdHdpZHRoOjEwMHZ3O1xcbn1cXG5cXG4jYmxhY2stc2NyZWVuIHtcXG5cXHR6LWluZGV4Ojk5ODtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxufVxcblxcbi5mb3JtLWJveCB7XFxuXFx0ei1pbmRleDo5OTk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5sYWJlbC10ZXh0IHtcXG5cXHRmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pbnB1dC1ib3gge1xcblxcdGhlaWdodDogMjVweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnZmlyYS1zYW5zJywgJ3NhbnMtc2VyaWYnO1xcblxcdHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWJveCB7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdHJlc2l6ZTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jc3VibWl0IHtcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTcsIDU3KTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInByb21wdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2ljRWxlbWVudEZhY3RvcnkoLi4uZWxlbWVudERldGFpbHMpIC8vRWxlbWVudCB0YWcgbmFtZSwgRWxlbWVudCBpZCAoc2VuZCB2YWx1ZSBhcyB1bmRlZmluZWQgZm9yIG5vIGlkKSwgRWxlbWVudCBjbGFzcyAxLCBjbGFzcyAyIC4uLi5cbntcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudERldGFpbHNbMF0pO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgZWxlbWVudERldGFpbHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRpZiAoaSA9PSAxICYmIGVsZW1lbnREZXRhaWxzW2ldICE9IHVuZGVmaW5lZClcblx0XHRcdGRpdi5pZCA9IGVsZW1lbnREZXRhaWxzW2ldO1xuXHRcdFxuXHRcdGVsc2UgaWYgKGkgIT0gMSlcblx0XHRcdGRpdi5jbGFzc05hbWUgKz0gYCAke2VsZW1lbnREZXRhaWxzW2ldfWA7XG5cdH1cdFxuXG5cdHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQsIGxhYmVsQ2xhc3MpXG57XG5cdGxldCBsYWJlbCA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2xhYmVsJywgdW5kZWZpbmVkLCBsYWJlbENsYXNzKTtcblx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpZH1gKTtcblx0bGFiZWwuaW5uZXJUZXh0ID0gbGFiZWxUZXh0O1xuXG5cdHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRCb3goaWQsIG5hbWUsIHR5cGUsIGlucHV0Qm94Q2xhc3MpXG57XG5cdGxldCBpbnB1dEJveCA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2lucHV0JywgaWQsIGlucHV0Qm94Q2xhc3MpO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0eXBlfWApO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtuYW1lfWApO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblx0aW5wdXRCb3guc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuXHRpZiAodHlwZSA9PSBcInRleHRcIilcblx0XHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyNVwiKTtcblxuXHRyZXR1cm4gaW5wdXRCb3g7XG59XG5cbmZ1bmN0aW9uIGFkZExhYmVsQW5kSW5wdXQoZm9ybUVsZW1lbnQsIGlkLCBuYW1lLCB0eXBlLCBsYWJlbFRleHQsIGNvbnRhaW5lckNsYXNzLCBsYWJlbENsYXNzLCBpbnB1dEJveENsYXNzKVxue1xuXHRsZXQgZGl2ID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZGl2JywgdW5kZWZpbmVkLCBjb250YWluZXJDbGFzcyk7XG5cdFxuXHRkaXYuYXBwZW5kKGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQsIGxhYmVsQ2xhc3MpKTtcblx0ZGl2LmFwcGVuZChjcmVhdGVJbnB1dEJveChpZCwgbmFtZSwgdHlwZSwgaW5wdXRCb3hDbGFzcykpO1xuXG5cdGZvcm1FbGVtZW50LmFwcGVuZChkaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShpZCwgbmFtZSwgdGV4dEFyZWFDbGFzcylcbntcblx0bGV0IHRleHRBcmVhID0gYmFzaWNFbGVtZW50RmFjdG9yeSgndGV4dGFyZWEnLCBpZCwgdGV4dEFyZWFDbGFzcyk7XG5cblx0dGV4dEFyZWEuc2V0QXR0cmlidXRlKCd3cmFwJywgJ2hhcmQnKTtcblx0dGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTUwJyk7XG5cdHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuXG5cdHJldHVybiB0ZXh0QXJlYTtcbn1cblxuZnVuY3Rpb24gYWRkTGFiZWxBbmRUZXh0QXJlYShmb3JtRWxlbWVudCwgaWQsIG5hbWUsIGxhYmVsVGV4dCwgY29udGFpbmVyQ2xhc3MsIGxhYmVsQ2xhc3MsIHRleHRBcmVhQ2xhc3MpXG57XG5cdGxldCBkaXYgPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdkaXYnLCB1bmRlZmluZWQsIGNvbnRhaW5lckNsYXNzKTtcblx0XG5cdGRpdi5hcHBlbmQoY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCwgbGFiZWxDbGFzcykpO1xuXHRkaXYuYXBwZW5kKGNyZWF0ZVRleHRBcmVhKGlkLCBuYW1lLCB0ZXh0QXJlYUNsYXNzKSk7XG5cblx0Zm9ybUVsZW1lbnQuYXBwZW5kKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljUHJvbXB0V2luZG93KClcbntcblx0bGV0IGNvbnRhaW5lckRpdiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2RpdicsICdwcm9tcHQtY29udGFpbmVyJyk7XG5cdGxldCBibGFja1NjcmVlbiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2RpdicsICdibGFjay1zY3JlZW4nKTtcblx0bGV0IHRhc2tQcm9tcHRGb3JtID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZm9ybScsICdpbnB1dC1mb3JtJywgJ2Zvcm0tYm94Jyk7XG5cblx0YmxhY2tTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZGVsZXRlUHJvbXB0V2luZG93KTtcblx0dGFza1Byb21wdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG5cblx0Y29udGFpbmVyRGl2LmFwcGVuZChibGFja1NjcmVlbik7XG5cdGNvbnRhaW5lckRpdi5hcHBlbmQodGFza1Byb21wdEZvcm0pO1xuXG5cdHJldHVybiBbY29udGFpbmVyRGl2LCB0YXNrUHJvbXB0Rm9ybV07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbigpXG57XG5cdGxldCBzdWJtaXRCdXR0b24gPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Zvcm0nLCAnaW5wdXQtZm9ybScpO1xuXHRzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuXHRyZXR1cm4gc3VibWl0QnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1Byb21wdCgpXG57XG5cdGRlbGV0ZVByb21wdFdpbmRvdygpO1xuXHRsZXQgcHJvbXB0V2luZG93ID0gY3JlYXRlQmFzaWNQcm9tcHRXaW5kb3coKTtcblxuXHRhZGRMYWJlbEFuZElucHV0KHByb21wdFdpbmRvd1sxXSwgJ3Rhc2stbmFtZScsICd0YXNrJywgJ3RleHQnLCAnRW50ZXIgdGFzayBuYW1lJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRhZGRMYWJlbEFuZFRleHRBcmVhKHByb21wdFdpbmRvd1sxXSwgJ3Rhc2stZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCAnRW50ZXIgdGFzayBkZXNjcmlwdGlvbicsICdpbnB1dC1jb250YWluZXInLCAnbGFiZWwtdGV4dCcsICdpbnB1dC1ib3ggZGVzY3JpcHRpb24tYm94Jyk7XG5cdGFkZExhYmVsQW5kSW5wdXQocHJvbXB0V2luZG93WzFdLCAnZHVlLWRhdGUnLCAnZGF0ZScsICdkYXRlJywgJ0VudGVyIGR1ZSBkYXRlJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRwcm9tcHRXaW5kb3dbMV0uYXBwZW5kKGNyZWF0ZVN1Ym1pdEJ1dHRvbigpKTtcblxuXHRyZXR1cm4gcHJvbXB0V2luZG93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb21wdCgpXG57XG5cdGRlbGV0ZVByb21wdFdpbmRvdygpO1xuXHRsZXQgcHJvbXB0V2luZG93ID0gY3JlYXRlQmFzaWNQcm9tcHRXaW5kb3coKTtcblxuXHRhZGRMYWJlbEFuZElucHV0KHByb21wdFdpbmRvd1sxXSwgJ3Byb2plY3QtbmFtZScsICdwcm9qZWN0JywgJ3RleHQnLCAnRW50ZXIgcHJvamVjdCBuYW1lJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRwcm9tcHRXaW5kb3dbMV0uYXBwZW5kKGNyZWF0ZVN1Ym1pdEJ1dHRvbigpKTtcblxuXHRyZXR1cm4gcHJvbXB0V2luZG93O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KVxue1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRkZWxldGVQcm9tcHRXaW5kb3coKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvbXB0V2luZG93KClcbntcblx0bGV0IHdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9tcHQtY29udGFpbmVyJyk7XG5cblx0aWYgKHdpbmRvdylcblx0XHR3aW5kb3cucmVtb3ZlKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==