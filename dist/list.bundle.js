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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'), \n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:200px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\toverflow:hidden;\n\tmargin: 0;\n}\n\n.remove-btn {\n\tposition: relative;\n\tright:5px;\n\tbottom:5px;\n\tfont-size:10px;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n\tborder-radius: 50%;\n}\n\n.remove-btn:hover{\n\tanimation-name: remove;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes remove {\n\t0% {}\n\t100% {background-color: rgba(248, 21, 21, 0.685); }\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:200px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 200px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#task-list {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100%;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft: 20px;\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft:20px;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n\tmargin: 20px 0;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: calc((100vw - 220px)/5);\n\theight: 100%;\n\tmargin: 0;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 220px))/5);\n}\n\n.task {\n\twidth:100%;\n\tdisplay:flex;\n\talign-items: center;\n}\n\n.hidden-task-info {\n\tdisplay:none;\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url('../assets/FiraSans-Light.ttf') format('truetype'), \n\turl('../assets/FiraSans-Medium.ttf') format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:200px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\toverflow:hidden;\n\tmargin: 0;\n}\n\n.remove-btn {\n\tposition: relative;\n\tright:5px;\n\tbottom:5px;\n\tfont-size:10px;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n\tborder-radius: 50%;\n}\n\n.remove-btn:hover{\n\tanimation-name: remove;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes remove {\n\t0% {}\n\t100% {background-color: rgba(248, 21, 21, 0.685); }\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:200px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 200px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#task-list {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100%;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft: 20px;\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: calc(100vw - 200px);\n\tposition: relative;\n\tleft:20px;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n\tmargin: 20px 0;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: calc((100vw - 220px)/5);\n\theight: 100%;\n\tmargin: 0;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 220px))/5);\n}\n\n.task {\n\twidth:100%;\n\tdisplay:flex;\n\talign-items: center;\n}\n\n.hidden-task-info {\n\tdisplay:none;\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/scripts/prompt.js":
/*!*******************************!*\
  !*** ./src/scripts/prompt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			"list": 0
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
/*!*****************************!*\
  !*** ./src/scripts/list.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectList": () => (/* binding */ displayProjectList),
/* harmony export */   "displayTodayList": () => (/* binding */ displayTodayList),
/* harmony export */   "displayThisWeekList": () => (/* binding */ displayThisWeekList),
/* harmony export */   "displayTotalList": () => (/* binding */ displayTotalList)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _prompt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompt.js */ "./src/scripts/prompt.js");



function displayProjectList(projListObject, projListContainer)
{
	deleteList(projListContainer);
	let projList = projListObject.getProjectList();

	for (let i = 0; i < projList.length; i++)
	{
		let div = (0,_prompt_js__WEBPACK_IMPORTED_MODULE_1__.basicElementFactory)('button', undefined, 'display-option');

		let removeBtn = (0,_prompt_js__WEBPACK_IMPORTED_MODULE_1__.basicElementFactory)('button', undefined, 'remove-btn');
		removeBtn.innerText = "X";
		removeBtn.addEventListener('click', function(event) { deleteProject(event, projListObject);} );

		if (i != 0)
			div.append(removeBtn);
		
		div.append(`${projList[i].getTitle()}`);

		if (projListObject.getCurrentProject().getTitle() == projList[i].getTitle())
			div.classList.add('selected');

		div.addEventListener('click', function(event) { selectProject(event, projListObject, projListContainer);} );

		projListContainer.append(div);
	}
}

function displayList(taskList, taskListContainer)
{
	deleteList(taskListContainer);

	taskList.forEach(element => {
		let taskContainer = (0,_prompt_js__WEBPACK_IMPORTED_MODULE_1__.basicElementFactory)('div', undefined, 'task');
		let hiddenInfo = (0,_prompt_js__WEBPACK_IMPORTED_MODULE_1__.basicElementFactory)('div', undefined, 'hidden-task-id');
		hiddenInfo.innerText = element.getID();
	
		let classString, textString;

		for (let i = 0; i < 3; i++)
		{
			if (i == 0)
			{
				classString = 'list-info';
				textString = element.getTitle();
			}

			else if (i == 1)
			{
				classString = 'list-info description-info';
				textString = element.getDescription();
			}
				
			else
			{
				classString = 'list-info';
				textString = element.getDueDate();
			}

			let div = (0,_prompt_js__WEBPACK_IMPORTED_MODULE_1__.basicElementFactory)('p', undefined, classString);
			div.innerText = textString;
			taskContainer.append(div);
		}

		taskListContainer.append(taskContainer);
	});
}

function displayTodayList(projObject, taskListContainer)
{
	let taskList = projObject.getTaskList();

	displayList(taskList, taskListContainer);
}

function displayThisWeekList(projObject, taskListContainer)
{
	let taskList = projObject.getTaskList();

	displayList(taskList, taskListContainer);
}

function displayTotalList(projObject, taskListContainer)
{
	displayList(projObject.getTaskList(), taskListContainer);
}

function deleteProject(event, projListObject)
{
	let parent = event.target.parentNode;
	let correctedText = parent.innerText.substr(1, parent.innerText.length - 1);
	projListObject.deleteProject(correctedText);
	parent.remove();
}

function selectProject(event, projListObject, projListContainer)
{
	if (event.target.innerText == "X")
		return;

	let nodeArray = [...(projListContainer.childNodes)];
	let target = event.target;
	let correctedText = target.innerText;

	if (target.firstChild.tagName == "BUTTON")
		correctedText = target.innerText.substr(1, target.innerText.length - 1);

	projListObject.setCurrentProject(correctedText);

	if (!target.classList.contains('selected'))
		target.classList.add('selected');

	nodeArray.forEach(element => {
		if (element.classList.contains('selected') && element.innerText != target.innerText)
			element.classList.remove('selected');
	});
}

function deleteList(listContainer)
{
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3Byb21wdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUNuRyw0Q0FBNEMsb0lBQStDO0FBQzNGLDRDQUE0QyxzSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsK0JBQStCLG9KQUFvSixHQUFHLFdBQVcsbUJBQW1CLDJDQUEyQyxhQUFhLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLFdBQVcsZ0JBQWdCLGlCQUFpQiwyQ0FBMkMsR0FBRyxnQkFBZ0IsOEJBQThCLHNCQUFzQixHQUFHLGlCQUFpQixpQkFBaUIsaUJBQWlCLHVDQUF1QyxvQkFBb0IsNkVBQTZFLGdCQUFnQixHQUFHLGVBQWUsdUJBQXVCLFdBQVcsYUFBYSxHQUFHLGNBQWMs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Q0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsK0RBQW1CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGlzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0ZpcmFTYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9GaXJhU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiZmlyYS1zYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCBcXG5cXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuI21haW4ge1xcblxcdGZvbnQtc2l6ZToyNXB4O1xcblxcdGZvbnQtZmFtaWx5OiAnZmlyYS1zYW5zJywgJ3NhbnMtc2VyaWYnO1xcblxcdG1hcmdpbjowO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI3RvcGJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTYpO1xcbn1cXG5cXG4jdG9wYmFyIGgxIHtcXG5cXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiAxMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE5MiwgMzIpO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luOjE1cHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA4MHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0bGVmdDowO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDoyMDBweDtcXG5cXHRib3JkZXItcmlnaHQ6cmdiKDAsIDAsIDApIHNvbGlkIDJweDtcXG59XFxuXFxuI2xpc3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC44NTYpIHNvbGlkIDFweDtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnJlbW92ZS1idG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRyaWdodDo1cHg7XFxuXFx0Ym90dG9tOjVweDtcXG5cXHRmb250LXNpemU6MTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yZW1vdmUtYnRuOmhvdmVye1xcblxcdGFuaW1hdGlvbi1uYW1lOiByZW1vdmU7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByZW1vdmUge1xcblxcdDAlIHt9XFxuXFx0MTAwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIxLCAyMSwgMC42ODUpOyB9XFxufVxcblxcbi5kaXNwbGF5LW9wdGlvbjpob3ZlciB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcblxcdGFuaW1hdGlvbi1uYW1lOiBvcHRpb24taG92ZXI7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBvcHRpb24taG92ZXIge1xcblxcdDAlIHtcXG5cXHRcXHRib3gtc2hhZG93OiBub25lO1xcblxcdH1cXG5cXHRcXG5cXHQxMDAlIHtcXG5cXHRcXHRib3gtc2hhZG93OiAtNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYzNyk7XFxuXFx0fVxcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJvcmRlci10b3A6IHNvbGlkIDJweDtcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAzcHg7XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG5cXHRtYXJnaW4tdG9wOjIwcHg7XFxuXFx0b3ZlcmZsb3cteTpoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMgaDEge1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGNvbG9yOnJnYigxMSwgMCwgMTE0KTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IGRpdiB7XFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4jbGlzdC1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OjIwMHB4O1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMjBweDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RhdGEtaWRlbnRpZmllcnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDoyMHB4O1xcbn1cXG5cXG4jZGF0YS1pZGVudGlmaWVycyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0bWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5saXN0LWluZm8ge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoKDEwMHZ3IC0gMjIwcHgpLzUpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbmZvIHtcXG5cXHR3aWR0aDogY2FsYygoMyooMTAwdncgLSAyMjBweCkpLzUpO1xcbn1cXG5cXG4udGFzayB7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbi10YXNrLWluZm8ge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuI3Byb21wdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6MTAwdmg7XFxuXFx0d2lkdGg6MTAwdnc7XFxufVxcblxcbiNibGFjay1zY3JlZW4ge1xcblxcdHotaW5kZXg6OTk4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG59XFxuXFxuLmZvcm0tYm94IHtcXG5cXHR6LWluZGV4Ojk5OTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmxhYmVsLXRleHQge1xcblxcdGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmlucHV0LWJveCB7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdmaXJhLXNhbnMnLCAnc2Fucy1zZXJpZic7XFxuXFx0cGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tYm94IHtcXG5cXHRoZWlnaHQ6IDcwcHg7XFxuXFx0cmVzaXplOiBub25lO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNzdWJtaXQge1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA1NywgNTcpO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEI7MkRBQ3VEO0FBQ3hEOztBQUVBO0NBQ0MsY0FBYztDQUNkLHNDQUFzQztDQUN0QyxRQUFRO0NBQ1IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7Q0FDWixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsZUFBZTtDQUNmLHdFQUF3RTtDQUN4RSxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsWUFBWTtDQUNaLG9DQUFvQztDQUNwQyw2Q0FBNkM7Q0FDN0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtDQUNWLGNBQWM7Q0FDZCxzQ0FBc0M7Q0FDdEMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6Qiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxJQUFJO0NBQ0osTUFBTSwwQ0FBMEMsRUFBRTtBQUNuRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIseUJBQXlCO0NBQ3pCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsNkNBQTZDO0NBQzlDO0FBQ0Q7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLGFBQWE7Q0FDYixZQUFZO0NBQ1osc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtDQUNaLG9DQUFvQztDQUNwQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3RUFBd0U7Q0FDeEUsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJmaXJhLXNhbnNcXFwiO1xcblxcdHNyYzogdXJsKCcuLi9hc3NldHMvRmlyYVNhbnMtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCBcXG5cXHR1cmwoJy4uL2Fzc2V0cy9GaXJhU2Fucy1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4jbWFpbiB7XFxuXFx0Zm9udC1zaXplOjI1cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdmaXJhLXNhbnMnLCAnc2Fucy1zZXJpZic7XFxuXFx0bWFyZ2luOjA7XFxuXFx0b3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG5cXG4jdG9wYmFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDgwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1Nik7XFxufVxcblxcbiN0b3BiYXIgaDEge1xcblxcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Zm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0d2lkdGg6IDEyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTkyLCAzMik7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW46MTVweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDgwcHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXG5cXHRsZWZ0OjA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdHdpZHRoOjIwMHB4O1xcblxcdGJvcmRlci1yaWdodDpyZ2IoMCwgMCwgMCkgc29saWQgMnB4O1xcbn1cXG5cXG4jbGlzdC1vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaXNwbGF5LW9wdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cGFkZGluZzogMTVweCAwO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogcmdiYSgwLCAwLCAwLCAwLjg1Nikgc29saWQgMXB4O1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRvdmVyZmxvdzpoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHJpZ2h0OjVweDtcXG5cXHRib3R0b206NXB4O1xcblxcdGZvbnQtc2l6ZToxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJlbW92ZS1idG46aG92ZXJ7XFxuXFx0YW5pbWF0aW9uLW5hbWU6IHJlbW92ZTtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDEwMG1zO1xcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlbW92ZSB7XFxuXFx0MCUge31cXG5cXHQxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjEsIDIxLCAwLjY4NSk7IH1cXG59XFxuXFxuLmRpc3BsYXktb3B0aW9uOmhvdmVyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFx0YW5pbWF0aW9uLW5hbWU6IG9wdGlvbi1ob3ZlcjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDEwMG1zO1xcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wdGlvbi1ob3ZlciB7XFxuXFx0MCUge1xcblxcdFxcdGJveC1zaGFkb3c6IG5vbmU7XFxuXFx0fVxcblxcdFxcblxcdDEwMCUge1xcblxcdFxcdGJveC1zaGFkb3c6IC01cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNjM3KTtcXG5cXHR9XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyLXRvcDogc29saWQgMnB4O1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweDtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcblxcdG1hcmdpbi10b3A6MjBweDtcXG5cXHRvdmVyZmxvdy15OmhpZGRlbjtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Y29sb3I6cmdiKDExLCAwLCAxMTQpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgZGl2IHtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbiNsaXN0LWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6MjAwcHg7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuXFx0d2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiN0YXNrLWxpc3Qge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAyMHB4O1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGF0YS1pZGVudGlmaWVycyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OjIwcHg7XFxufVxcblxcbiNkYXRhLWlkZW50aWZpZXJzIGgxIHtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmxpc3QtaW5mbyB7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogY2FsYygoMTAwdncgLSAyMjBweCkvNSk7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWluZm8ge1xcblxcdHdpZHRoOiBjYWxjKCgzKigxMDB2dyAtIDIyMHB4KSkvNSk7XFxufVxcblxcbi50YXNrIHtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuLXRhc2staW5mbyB7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4jcHJvbXB0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDoxMDB2aDtcXG5cXHR3aWR0aDoxMDB2dztcXG59XFxuXFxuI2JsYWNrLXNjcmVlbiB7XFxuXFx0ei1pbmRleDo5OTg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbn1cXG5cXG4uZm9ybS1ib3gge1xcblxcdHotaW5kZXg6OTk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubGFiZWwtdGV4dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5wdXQtYm94IHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogJ2ZpcmEtc2FucycsICdzYW5zLXNlcmlmJztcXG5cXHRwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU3LCA1Nyk7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2ljRWxlbWVudEZhY3RvcnkoLi4uZWxlbWVudERldGFpbHMpIC8vRWxlbWVudCB0YWcgbmFtZSwgRWxlbWVudCBpZCAoc2VuZCB2YWx1ZSBhcyB1bmRlZmluZWQgZm9yIG5vIGlkKSwgRWxlbWVudCBjbGFzcyAxLCBjbGFzcyAyIC4uLi5cbntcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudERldGFpbHNbMF0pO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgZWxlbWVudERldGFpbHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRpZiAoaSA9PSAxICYmIGVsZW1lbnREZXRhaWxzW2ldICE9IHVuZGVmaW5lZClcblx0XHRcdGRpdi5pZCA9IGVsZW1lbnREZXRhaWxzW2ldO1xuXHRcdFxuXHRcdGVsc2UgaWYgKGkgIT0gMSlcblx0XHRcdGRpdi5jbGFzc05hbWUgKz0gYCAke2VsZW1lbnREZXRhaWxzW2ldfWA7XG5cdH1cdFxuXG5cdHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQsIGxhYmVsQ2xhc3MpXG57XG5cdGxldCBsYWJlbCA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2xhYmVsJywgdW5kZWZpbmVkLCBsYWJlbENsYXNzKTtcblx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpZH1gKTtcblx0bGFiZWwuaW5uZXJUZXh0ID0gbGFiZWxUZXh0O1xuXG5cdHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRCb3goaWQsIG5hbWUsIHR5cGUsIGlucHV0Qm94Q2xhc3MpXG57XG5cdGxldCBpbnB1dEJveCA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2lucHV0JywgaWQsIGlucHV0Qm94Q2xhc3MpO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0eXBlfWApO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtuYW1lfWApO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblx0aW5wdXRCb3guc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuXHRpZiAodHlwZSA9PSBcInRleHRcIilcblx0XHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyNVwiKTtcblxuXHRyZXR1cm4gaW5wdXRCb3g7XG59XG5cbmZ1bmN0aW9uIGFkZExhYmVsQW5kSW5wdXQoZm9ybUVsZW1lbnQsIGlkLCBuYW1lLCB0eXBlLCBsYWJlbFRleHQsIGNvbnRhaW5lckNsYXNzLCBsYWJlbENsYXNzLCBpbnB1dEJveENsYXNzKVxue1xuXHRsZXQgZGl2ID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZGl2JywgdW5kZWZpbmVkLCBjb250YWluZXJDbGFzcyk7XG5cdFxuXHRkaXYuYXBwZW5kKGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQsIGxhYmVsQ2xhc3MpKTtcblx0ZGl2LmFwcGVuZChjcmVhdGVJbnB1dEJveChpZCwgbmFtZSwgdHlwZSwgaW5wdXRCb3hDbGFzcykpO1xuXG5cdGZvcm1FbGVtZW50LmFwcGVuZChkaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShpZCwgbmFtZSwgdGV4dEFyZWFDbGFzcylcbntcblx0bGV0IHRleHRBcmVhID0gYmFzaWNFbGVtZW50RmFjdG9yeSgndGV4dGFyZWEnLCBpZCwgdGV4dEFyZWFDbGFzcyk7XG5cblx0dGV4dEFyZWEuc2V0QXR0cmlidXRlKCd3cmFwJywgJ2hhcmQnKTtcblx0dGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTUwJyk7XG5cdHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuXG5cdHJldHVybiB0ZXh0QXJlYTtcbn1cblxuZnVuY3Rpb24gYWRkTGFiZWxBbmRUZXh0QXJlYShmb3JtRWxlbWVudCwgaWQsIG5hbWUsIGxhYmVsVGV4dCwgY29udGFpbmVyQ2xhc3MsIGxhYmVsQ2xhc3MsIHRleHRBcmVhQ2xhc3MpXG57XG5cdGxldCBkaXYgPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdkaXYnLCB1bmRlZmluZWQsIGNvbnRhaW5lckNsYXNzKTtcblx0XG5cdGRpdi5hcHBlbmQoY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCwgbGFiZWxDbGFzcykpO1xuXHRkaXYuYXBwZW5kKGNyZWF0ZVRleHRBcmVhKGlkLCBuYW1lLCB0ZXh0QXJlYUNsYXNzKSk7XG5cblx0Zm9ybUVsZW1lbnQuYXBwZW5kKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljUHJvbXB0V2luZG93KClcbntcblx0bGV0IGNvbnRhaW5lckRpdiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2RpdicsICdwcm9tcHQtY29udGFpbmVyJyk7XG5cdGxldCBibGFja1NjcmVlbiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2RpdicsICdibGFjay1zY3JlZW4nKTtcblx0bGV0IHRhc2tQcm9tcHRGb3JtID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZm9ybScsICdpbnB1dC1mb3JtJywgJ2Zvcm0tYm94Jyk7XG5cblx0YmxhY2tTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZGVsZXRlUHJvbXB0V2luZG93KTtcblx0dGFza1Byb21wdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG5cblx0Y29udGFpbmVyRGl2LmFwcGVuZChibGFja1NjcmVlbik7XG5cdGNvbnRhaW5lckRpdi5hcHBlbmQodGFza1Byb21wdEZvcm0pO1xuXG5cdHJldHVybiBbY29udGFpbmVyRGl2LCB0YXNrUHJvbXB0Rm9ybV07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbigpXG57XG5cdGxldCBzdWJtaXRCdXR0b24gPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Zvcm0nLCAnaW5wdXQtZm9ybScpO1xuXHRzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuXHRyZXR1cm4gc3VibWl0QnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1Byb21wdCgpXG57XG5cdGRlbGV0ZVByb21wdFdpbmRvdygpO1xuXHRsZXQgcHJvbXB0V2luZG93ID0gY3JlYXRlQmFzaWNQcm9tcHRXaW5kb3coKTtcblxuXHRhZGRMYWJlbEFuZElucHV0KHByb21wdFdpbmRvd1sxXSwgJ3Rhc2stbmFtZScsICd0YXNrJywgJ3RleHQnLCAnRW50ZXIgdGFzayBuYW1lJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRhZGRMYWJlbEFuZFRleHRBcmVhKHByb21wdFdpbmRvd1sxXSwgJ3Rhc2stZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCAnRW50ZXIgdGFzayBkZXNjcmlwdGlvbicsICdpbnB1dC1jb250YWluZXInLCAnbGFiZWwtdGV4dCcsICdpbnB1dC1ib3ggZGVzY3JpcHRpb24tYm94Jyk7XG5cdGFkZExhYmVsQW5kSW5wdXQocHJvbXB0V2luZG93WzFdLCAnZHVlLWRhdGUnLCAnZGF0ZScsICdkYXRlJywgJ0VudGVyIGR1ZSBkYXRlJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRwcm9tcHRXaW5kb3dbMV0uYXBwZW5kKGNyZWF0ZVN1Ym1pdEJ1dHRvbigpKTtcblxuXHRyZXR1cm4gcHJvbXB0V2luZG93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb21wdCgpXG57XG5cdGRlbGV0ZVByb21wdFdpbmRvdygpO1xuXHRsZXQgcHJvbXB0V2luZG93ID0gY3JlYXRlQmFzaWNQcm9tcHRXaW5kb3coKTtcblxuXHRhZGRMYWJlbEFuZElucHV0KHByb21wdFdpbmRvd1sxXSwgJ3Byb2plY3QtbmFtZScsICdwcm9qZWN0JywgJ3RleHQnLCAnRW50ZXIgcHJvamVjdCBuYW1lJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCcpO1xuXHRwcm9tcHRXaW5kb3dbMV0uYXBwZW5kKGNyZWF0ZVN1Ym1pdEJ1dHRvbigpKTtcblxuXHRyZXR1cm4gcHJvbXB0V2luZG93O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KVxue1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRkZWxldGVQcm9tcHRXaW5kb3coKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvbXB0V2luZG93KClcbntcblx0bGV0IHdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9tcHQtY29udGFpbmVyJyk7XG5cblx0aWYgKHdpbmRvdylcblx0XHR3aW5kb3cucmVtb3ZlKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsaXN0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYmFzaWNFbGVtZW50RmFjdG9yeSB9IGZyb20gJy4vcHJvbXB0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TGlzdChwcm9qTGlzdE9iamVjdCwgcHJvakxpc3RDb250YWluZXIpXG57XG5cdGRlbGV0ZUxpc3QocHJvakxpc3RDb250YWluZXIpO1xuXHRsZXQgcHJvakxpc3QgPSBwcm9qTGlzdE9iamVjdC5nZXRQcm9qZWN0TGlzdCgpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvakxpc3QubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRsZXQgZGl2ID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgdW5kZWZpbmVkLCAnZGlzcGxheS1vcHRpb24nKTtcblxuXHRcdGxldCByZW1vdmVCdG4gPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB1bmRlZmluZWQsICdyZW1vdmUtYnRuJyk7XG5cdFx0cmVtb3ZlQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuXHRcdHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7IGRlbGV0ZVByb2plY3QoZXZlbnQsIHByb2pMaXN0T2JqZWN0KTt9ICk7XG5cblx0XHRpZiAoaSAhPSAwKVxuXHRcdFx0ZGl2LmFwcGVuZChyZW1vdmVCdG4pO1xuXHRcdFxuXHRcdGRpdi5hcHBlbmQoYCR7cHJvakxpc3RbaV0uZ2V0VGl0bGUoKX1gKTtcblxuXHRcdGlmIChwcm9qTGlzdE9iamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLmdldFRpdGxlKCkgPT0gcHJvakxpc3RbaV0uZ2V0VGl0bGUoKSlcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG5cdFx0ZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHsgc2VsZWN0UHJvamVjdChldmVudCwgcHJvakxpc3RPYmplY3QsIHByb2pMaXN0Q29udGFpbmVyKTt9ICk7XG5cblx0XHRwcm9qTGlzdENvbnRhaW5lci5hcHBlbmQoZGl2KTtcblx0fVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdCh0YXNrTGlzdCwgdGFza0xpc3RDb250YWluZXIpXG57XG5cdGRlbGV0ZUxpc3QodGFza0xpc3RDb250YWluZXIpO1xuXG5cdHRhc2tMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0bGV0IHRhc2tDb250YWluZXIgPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdkaXYnLCB1bmRlZmluZWQsICd0YXNrJyk7XG5cdFx0bGV0IGhpZGRlbkluZm8gPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdkaXYnLCB1bmRlZmluZWQsICdoaWRkZW4tdGFzay1pZCcpO1xuXHRcdGhpZGRlbkluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5nZXRJRCgpO1xuXHRcblx0XHRsZXQgY2xhc3NTdHJpbmcsIHRleHRTdHJpbmc7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcblx0XHR7XG5cdFx0XHRpZiAoaSA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc1N0cmluZyA9ICdsaXN0LWluZm8nO1xuXHRcdFx0XHR0ZXh0U3RyaW5nID0gZWxlbWVudC5nZXRUaXRsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIGlmIChpID09IDEpXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzU3RyaW5nID0gJ2xpc3QtaW5mbyBkZXNjcmlwdGlvbi1pbmZvJztcblx0XHRcdFx0dGV4dFN0cmluZyA9IGVsZW1lbnQuZ2V0RGVzY3JpcHRpb24oKTtcblx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzU3RyaW5nID0gJ2xpc3QtaW5mbyc7XG5cdFx0XHRcdHRleHRTdHJpbmcgPSBlbGVtZW50LmdldER1ZURhdGUoKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGRpdiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ3AnLCB1bmRlZmluZWQsIGNsYXNzU3RyaW5nKTtcblx0XHRcdGRpdi5pbm5lclRleHQgPSB0ZXh0U3RyaW5nO1xuXHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmQoZGl2KTtcblx0XHR9XG5cblx0XHR0YXNrTGlzdENvbnRhaW5lci5hcHBlbmQodGFza0NvbnRhaW5lcik7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5TGlzdChwcm9qT2JqZWN0LCB0YXNrTGlzdENvbnRhaW5lcilcbntcblx0bGV0IHRhc2tMaXN0ID0gcHJvak9iamVjdC5nZXRUYXNrTGlzdCgpO1xuXG5cdGRpc3BsYXlMaXN0KHRhc2tMaXN0LCB0YXNrTGlzdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGhpc1dlZWtMaXN0KHByb2pPYmplY3QsIHRhc2tMaXN0Q29udGFpbmVyKVxue1xuXHRsZXQgdGFza0xpc3QgPSBwcm9qT2JqZWN0LmdldFRhc2tMaXN0KCk7XG5cblx0ZGlzcGxheUxpc3QodGFza0xpc3QsIHRhc2tMaXN0Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb3RhbExpc3QocHJvak9iamVjdCwgdGFza0xpc3RDb250YWluZXIpXG57XG5cdGRpc3BsYXlMaXN0KHByb2pPYmplY3QuZ2V0VGFza0xpc3QoKSwgdGFza0xpc3RDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50LCBwcm9qTGlzdE9iamVjdClcbntcblx0bGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXHRsZXQgY29ycmVjdGVkVGV4dCA9IHBhcmVudC5pbm5lclRleHQuc3Vic3RyKDEsIHBhcmVudC5pbm5lclRleHQubGVuZ3RoIC0gMSk7XG5cdHByb2pMaXN0T2JqZWN0LmRlbGV0ZVByb2plY3QoY29ycmVjdGVkVGV4dCk7XG5cdHBhcmVudC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChldmVudCwgcHJvakxpc3RPYmplY3QsIHByb2pMaXN0Q29udGFpbmVyKVxue1xuXHRpZiAoZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9PSBcIlhcIilcblx0XHRyZXR1cm47XG5cblx0bGV0IG5vZGVBcnJheSA9IFsuLi4ocHJvakxpc3RDb250YWluZXIuY2hpbGROb2RlcyldO1xuXHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRsZXQgY29ycmVjdGVkVGV4dCA9IHRhcmdldC5pbm5lclRleHQ7XG5cblx0aWYgKHRhcmdldC5maXJzdENoaWxkLnRhZ05hbWUgPT0gXCJCVVRUT05cIilcblx0XHRjb3JyZWN0ZWRUZXh0ID0gdGFyZ2V0LmlubmVyVGV4dC5zdWJzdHIoMSwgdGFyZ2V0LmlubmVyVGV4dC5sZW5ndGggLSAxKTtcblxuXHRwcm9qTGlzdE9iamVjdC5zZXRDdXJyZW50UHJvamVjdChjb3JyZWN0ZWRUZXh0KTtcblxuXHRpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpXG5cdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0bm9kZUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpICYmIGVsZW1lbnQuaW5uZXJUZXh0ICE9IHRhcmdldC5pbm5lclRleHQpXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KGxpc3RDb250YWluZXIpXG57XG5cdHdoaWxlIChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG5cdCAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9