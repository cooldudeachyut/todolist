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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'), \n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:160px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\tmargin: 0;\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:160px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 160px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#list {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 100%;\n\twidth: 100%;\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth:100%;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: calc((100vw - 160px)/5);\n\theight: 100%;\n\tmargin: 0;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 160px))/5);\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;CACC,wBAAwB;CACxB;2DACuD;AACxD;;AAEA;CACC,cAAc;CACd,sCAAsC;CACtC,QAAQ;CACR,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,MAAM;CACN,WAAW;CACX,YAAY;CACZ,sCAAsC;AACvC;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kCAAkC;CAClC,eAAe;CACf,wEAAwE;CACxE,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,WAAW;CACX,SAAS;CACT,kBAAkB;CAClB,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,MAAM;CACN,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,WAAW;CACX,mCAAmC;AACpC;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,YAAY;CACZ,oCAAoC;CACpC,6CAA6C;CAC7C,UAAU;CACV,kBAAkB;CAClB,qBAAqB;CACrB,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,4BAA4B;CAC5B,yBAAyB;CACzB,6BAA6B;AAC9B;;AAEA;CACC;EACC,gBAAgB;CACjB;;CAEA;EACC,6CAA6C;CAC9C;AACD;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,qBAAqB;CACrB,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,0BAA0B;CAC1B,0BAA0B;CAC1B,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,mBAAmB;CACnB,YAAY;CACZ,WAAW;CACX,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,sBAAsB;CACtB,mBAAmB;CACnB,8BAA8B;CAC9B,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,WAAW;CACX,eAAe;CACf,MAAM;CACN,OAAO;CACP,aAAa;CACb,YAAY;CACZ,sCAAsC;AACvC;;AAEA;CACC,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,mBAAmB;CACnB,aAAa;CACb,YAAY;CACZ,oCAAoC;CACpC,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,UAAU;CACV,cAAc;AACf;;AAEA;CACC,wEAAwE;CACxE,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;CACjB,sCAAsC;CACtC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,YAAY;CACZ,kCAAkC;CAClC,eAAe;AAChB","sourcesContent":["@font-face {\n\tfont-family: \"fira-sans\";\n\tsrc: url('../assets/FiraSans-Light.ttf') format('truetype'), \n\turl('../assets/FiraSans-Medium.ttf') format('truetype');\n}\n\n#main {\n\tfont-size:25px;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tmargin:0;\n\toverflow:hidden;\n}\n\n#topbar {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: rgba(0, 0, 0, 0.856);\n}\n\n#topbar h1 {\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.7rem;\n}\n\n.add-button {\n\theight: 50px;\n\twidth: 120px;\n\tbackground-color: rgb(59, 192, 32);\n\tfont-size: 20px;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tmargin:15px;\n}\n\n.add-task {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tmin-height: calc(100vh - 80px);\n\twidth: 100%;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 80px;\n}\n\n#sidebar {\n\tposition:absolute;\n\tleft:0;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight:100%;\n\twidth:160px;\n\tborder-right:rgb(0, 0, 0) solid 2px;\n}\n\n#list-options {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.display-option {\n\tfont-size: 1.2rem;\n\tpadding: 15px 0;\n\tborder: none;\n\tbackground-color: rgb(255, 255, 255);\n\tborder-bottom: rgba(0, 0, 0, 0.856) solid 1px;\n\twidth:100%;\n\ttext-align: center;\n\tword-break: break-all;\n\tmargin: 0;\n}\n\n.display-option:hover {\n\tmargin-bottom: 5px;\n\tanimation-name: option-hover;\n\tanimation-duration: 100ms;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes option-hover {\n\t0% {\n\t\tbox-shadow: none;\n\t}\n\t\n\t100% {\n\t\tbox-shadow: -5px 5px 5px rgba(0, 0, 0, 0.637);\n\t}\n}\n\n.project-options {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth:100%;\n\toverflow-y:auto;\n}\n\n.project-info {\n\tmargin-top:20px;\n\toverflow-y:hidden;\n}\n\n.project-options h1 {\n\tfont-size: 1.3rem;\n\tcolor:rgb(11, 0, 114);\n\ttext-decoration: underline;\n}\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\tfont-size: 1rem;\n}\n\n#project-list div {\n\toverflow-y:auto;\n}\n\n.selected {\n\tborder-top: solid 2px;\n\tborder-bottom: solid 3px;\n}\n\n#list-container {\n\tposition: relative;\n\tleft:160px;\n\theight: calc(100vh - 80px);\n\twidth: calc(100vw - 160px);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-size: 1.3rem;\n}\n\n#list {\n\tdisplay:flex;\n\talign-items: center;\n\theight: 100%;\n\twidth: 100%;\n\toverflow: auto;\n}\n\n#data-identifiers {\n\tdisplay: flex;\n\talign-items: center;\n\twidth:100%;\n}\n\n#data-identifiers h1 {\n\tfont-size: 1.6rem;\n}\n\n.list-info {\n\tdisplay:flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: calc((100vw - 160px)/5);\n\theight: 100%;\n\tmargin: 0;\n}\n\n.description-info {\n\twidth: calc((3*(100vw - 160px))/5);\n}\n\n#prompt-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight:100vh;\n\twidth:100vw;\n}\n\n#black-screen {\n\tz-index:998;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: rgba(0, 0, 0, 0.397);\n}\n\n.form-box {\n\tz-index:999;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 20px;\n\twidth: 500px;\n\tbackground-color: rgb(255, 255, 255);\n\tborder: 2px solid rgb(0, 0, 0);\n}\n\n.input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin: 10px 0;\n}\n\n.label-text {\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\tfont-size: 1.2rem;\n}\n\n.input-box {\n\theight: 25px;\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'fira-sans', 'sans-serif';\n\tpadding: 5px;\n}\n\n.description-box {\n\theight: 70px;\n\tresize: none;\n\ttext-align: left;\n}\n\n#submit {\n\tmargin-top: 20px;\n\theight: 30px;\n\twidth: 100px;\n\tbackground-color: rgb(238, 57, 57);\n\tfont-size: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/displaylist.js":
/*!************************************!*\
  !*** ./src/scripts/displaylist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodayList": () => (/* binding */ displayTodayList),
/* harmony export */   "displayThisWeekList": () => (/* binding */ displayThisWeekList),
/* harmony export */   "displayProjectList": () => (/* binding */ displayProjectList),
/* harmony export */   "displayTotalList": () => (/* binding */ displayTotalList)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");


function displayTodayList(listobject)
{
	
}

function displayThisWeekList(listobject)
{
	
}

function displayProjectList(listobject)
{

}

function displayTotalList(listobject)
{

}

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _prompt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompt.js */ "./src/scripts/prompt.js");
/* harmony import */ var _displaylist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaylist.js */ "./src/scripts/displaylist.js");





const main = document.getElementById("main");

class task
{
	#title;
	#description;
	#dueDate;
	#priority;
	#id;
	#status;

	constructor(title, description, dueDate, id, priority) {
		this.#title = title;
		this.#description = description;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#id = id;
		this.#status = false;
	}

	getTitle() {
		return this.#title;
	}

	getDescription() {
		return this.#description;
	}

	getDueDate() {
		return this.#dueDate;
	}

	getPriority() {
		return this.#priority;
	}

	getStatus() {
		return this.#status;
	}

	getID() {
		return this.#id;
	}

	setID(id) {
		this.#id = id;
	}

	changeStatus() {
		if (this.#status)
			this.#status = false;

		else
			this.#status = true;
	}
}

class project
{
	#title;
	#taskList;
	#taskID;

	constructor(title) {
		this.#title = title;
		this.#taskList = [];
		this.#taskID = 0;
	}

	getTitle() {
		return this.#title;
	}

	getTaskList() {
		return this.#taskList;
	}

	addTaskByPriority(taskObject) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList[i].getPriority() >= taskObject.getPriority())
			{
				this.#taskList.splice(i, 0, taskObject);
				this.#taskList.setID(`${this.#title}-${this.#taskID}`);
				this.#taskID++;
				break;
			}
		}
	}

	moveTaskUp(taskID) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList.getID() == taskID)
			{
				if (i == 0)
					return;
				
				let temp = this.#taskList[i];
				this.#taskList[i] = this.#taskList[i-1];
				this.#taskList[i-1] = temp;
			}
		}
	}

	moveTaskDown(taskID) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList.getID() == taskID)
			{
				if (i == this.#taskList.length - 1)
					return;
				
				let temp = this.#taskList[i];
				this.#taskList[i] = this.#taskList[i+1];
				this.#taskList[i+1] = temp;
			}
		}
	}
}

class projectList
{
	#currentProject;
	#projectList;

	constructor() {
		this.#projectList = [];
	}

	addProject(projectObject) {

		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectObject.getTitle())
			{
				alert(`Project of title "${projectObject.getTitle()}" already exists!`);
				return;
			}
		}

		this.#projectList.push(projectObject);

		if (this.#projectList.length == 1)
			this.#currentProject = projectObject;
	}

	removeProject(projectName) {
		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
				this.#projectList.splice(i, 1);
				return;
			}
		}

		console.log(`No project of title "${projectName}" exists!`);
	}

	getProjectList() {
		return this.#projectList;
	}

	getCurrentProject() {
		if (this.#projectList.length == 0)
		{
			console.log("Project list is empty!");
			return;
		}

		return this.#currentProject;
	}

	setCurrentProject(projectName) {

		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
				this.#currentProject = this.#projectList[i];
				break;
			}
		}
	}
}

let projList = new projectList();
let univProject = new project("Universal");
projList.addProject(univProject);

function calculatePriority(dueDate)
{
	return 1;
}

function addTaskObject(title, description, dueDate)
{
	let priority = calculatePriority(dueDate);
	const newTask = new task(title, description, dueDate, -1, priority);
	let currentProjectName = projList.getCurrentProject().getTitle();

	projList.setCurrentProject("Universal");
	projList.getCurrentProject().addTaskByPriority(newTask);

	if (currentProjectName != "Universal")
	{
		projList.setCurrentProject(currentProjectName);
		projList.getCurrentProject().addTaskByPriority(newTask);
	}
}

function addProjectObject(title)
{
	let newProject = new project(title);
	projList.addProject(newProject);
	projList.setCurrentProject(title);
}

function displayTaskPrompt()
{
	let promptWindow = _prompt_js__WEBPACK_IMPORTED_MODULE_1__.createTaskPrompt();
	main.append(promptWindow[0]);
	promptWindow[1].addEventListener('submit', extractFormData);
}

function displayProjectPrompt()
{
	let promptWindow = _prompt_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPrompt();
	main.append(promptWindow[0]);
	promptWindow[1].addEventListener('submit', extractFormData);
}

function extractFormData(event)
{
	let formObj = {};
	let formDetails = new FormData(event.target);

	for (let key of formDetails.keys()) {
		formObj[key] = formDetails.get(key);
	}

	if (Object.keys(formObj).length == 1)
		addProjectObject(formObj['project']);

	else if (Object.keys(formObj).length == 3)
		addTaskObject(formObj['task'], formObj['description'], formObj['date']);
}

document.getElementById('add-task-button').addEventListener('click', displayTaskPrompt);
document.getElementById('add-project-button').addEventListener('click', displayProjectPrompt);

/***/ }),

/***/ "./src/scripts/prompt.js":
/*!*******************************!*\
  !*** ./src/scripts/prompt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskPrompt": () => (/* binding */ createTaskPrompt),
/* harmony export */   "createProjectPrompt": () => (/* binding */ createProjectPrompt)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");



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
/******/ 			"index": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlsaXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9tcHQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDbkcsNENBQTRDLG9JQUErQztBQUMzRiw0Q0FBNEMsc0lBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELCtCQUErQixvSkFBb0osR0FBRyxXQUFXLG1CQUFtQiwyQ0FBMkMsYUFBYSxvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixXQUFXLGdCQUFnQixpQkFBaUIsMkNBQTJDLEdBQUcsZ0JBQWdCLDhCQUE4QixzQkFBc0IsR0FB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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLG9COzs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0ZpcmFTYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9GaXJhU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiZmlyYS1zYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCBcXG5cXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuI21haW4ge1xcblxcdGZvbnQtc2l6ZToyNXB4O1xcblxcdGZvbnQtZmFtaWx5OiAnZmlyYS1zYW5zJywgJ3NhbnMtc2VyaWYnO1xcblxcdG1hcmdpbjowO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI3RvcGJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTYpO1xcbn1cXG5cXG4jdG9wYmFyIGgxIHtcXG5cXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiAxMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE5MiwgMzIpO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luOjE1cHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA4MHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0bGVmdDowO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDoxNjBweDtcXG5cXHRib3JkZXItcmlnaHQ6cmdiKDAsIDAsIDApIHNvbGlkIDJweDtcXG59XFxuXFxuI2xpc3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC44NTYpIHNvbGlkIDFweDtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb246aG92ZXIge1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG5cXHRhbmltYXRpb24tbmFtZTogb3B0aW9uLWhvdmVyO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3B0aW9uLWhvdmVyIHtcXG5cXHQwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogbm9uZTtcXG5cXHR9XFxuXFx0XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC42MzcpO1xcblxcdH1cXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcblxcdG1hcmdpbi10b3A6MjBweDtcXG5cXHRvdmVyZmxvdy15OmhpZGRlbjtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Y29sb3I6cmdiKDExLCAwLCAxMTQpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgZGl2IHtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyLXRvcDogc29saWQgMnB4O1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweDtcXG59XFxuXFxuI2xpc3QtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDoxNjBweDtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDE2MHB4KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RhdGEtaWRlbnRpZmllcnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4jZGF0YS1pZGVudGlmaWVycyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5saXN0LWluZm8ge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTYwcHgpLzUpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbmZvIHtcXG5cXHR3aWR0aDogY2FsYygoMyooMTAwdncgLSAxNjBweCkpLzUpO1xcbn1cXG5cXG4jcHJvbXB0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDoxMDB2aDtcXG5cXHR3aWR0aDoxMDB2dztcXG59XFxuXFxuI2JsYWNrLXNjcmVlbiB7XFxuXFx0ei1pbmRleDo5OTg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbn1cXG5cXG4uZm9ybS1ib3gge1xcblxcdHotaW5kZXg6OTk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubGFiZWwtdGV4dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5wdXQtYm94IHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogJ2ZpcmEtc2FucycsICdzYW5zLXNlcmlmJztcXG5cXHRwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU3LCA1Nyk7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHdCQUF3QjtDQUN4QjsyREFDdUQ7QUFDeEQ7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsc0NBQXNDO0NBQ3RDLFFBQVE7Q0FDUixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixXQUFXO0NBQ1gsWUFBWTtDQUNaLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2Ysd0VBQXdFO0NBQ3hFLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtBQUNUOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsU0FBUztDQUNULGtCQUFrQjtDQUNsQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsTUFBTTtDQUNOLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixZQUFZO0NBQ1osb0NBQW9DO0NBQ3BDLDZDQUE2QztDQUM3QyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6Qiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLDZDQUE2QztDQUM5QztBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDViwwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsTUFBTTtDQUNOLE9BQU87Q0FDUCxhQUFhO0NBQ2IsWUFBWTtDQUNaLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixvQ0FBb0M7Q0FDcEMsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0Msd0VBQXdFO0NBQ3hFLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0QyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxlQUFlO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiZmlyYS1zYW5zXFxcIjtcXG5cXHRzcmM6IHVybCgnLi4vYXNzZXRzL0ZpcmFTYW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgXFxuXFx0dXJsKCcuLi9hc3NldHMvRmlyYVNhbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuI21haW4ge1xcblxcdGZvbnQtc2l6ZToyNXB4O1xcblxcdGZvbnQtZmFtaWx5OiAnZmlyYS1zYW5zJywgJ3NhbnMtc2VyaWYnO1xcblxcdG1hcmdpbjowO1xcblxcdG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI3RvcGJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTYpO1xcbn1cXG5cXG4jdG9wYmFyIGgxIHtcXG5cXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiAxMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE5MiwgMzIpO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luOjE1cHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA4MHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0bGVmdDowO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR3aWR0aDoxNjBweDtcXG5cXHRib3JkZXItcmlnaHQ6cmdiKDAsIDAsIDApIHNvbGlkIDJweDtcXG59XFxuXFxuI2xpc3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci1ib3R0b206IHJnYmEoMCwgMCwgMCwgMC44NTYpIHNvbGlkIDFweDtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb246aG92ZXIge1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG5cXHRhbmltYXRpb24tbmFtZTogb3B0aW9uLWhvdmVyO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgb3B0aW9uLWhvdmVyIHtcXG5cXHQwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogbm9uZTtcXG5cXHR9XFxuXFx0XFxuXFx0MTAwJSB7XFxuXFx0XFx0Ym94LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC42MzcpO1xcblxcdH1cXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcblxcdG1hcmdpbi10b3A6MjBweDtcXG5cXHRvdmVyZmxvdy15OmhpZGRlbjtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Y29sb3I6cmdiKDExLCAwLCAxMTQpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgZGl2IHtcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyLXRvcDogc29saWQgMnB4O1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweDtcXG59XFxuXFxuI2xpc3QtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDoxNjBweDtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogY2FsYygxMDB2dyAtIDE2MHB4KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI2xpc3Qge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2RhdGEtaWRlbnRpZmllcnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4jZGF0YS1pZGVudGlmaWVycyBoMSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5saXN0LWluZm8ge1xcblxcdGRpc3BsYXk6ZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTYwcHgpLzUpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbmZvIHtcXG5cXHR3aWR0aDogY2FsYygoMyooMTAwdncgLSAxNjBweCkpLzUpO1xcbn1cXG5cXG4jcHJvbXB0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDoxMDB2aDtcXG5cXHR3aWR0aDoxMDB2dztcXG59XFxuXFxuI2JsYWNrLXNjcmVlbiB7XFxuXFx0ei1pbmRleDo5OTg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbn1cXG5cXG4uZm9ybS1ib3gge1xcblxcdHotaW5kZXg6OTk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubGFiZWwtdGV4dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5wdXQtYm94IHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LWZhbWlseTogJ2ZpcmEtc2FucycsICdzYW5zLXNlcmlmJztcXG5cXHRwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU3LCA1Nyk7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RheUxpc3QobGlzdG9iamVjdClcbntcblx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGhpc1dlZWtMaXN0KGxpc3RvYmplY3QpXG57XG5cdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0KGxpc3RvYmplY3QpXG57XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb3RhbExpc3QobGlzdG9iamVjdClcbntcblxufSIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlLCBmb3JtYXRSZWxhdGl2ZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCAqIGFzIHByb21wdCBmcm9tICcuL3Byb21wdC5qcyc7XG5pbXBvcnQgKiBhcyBkaXNwbGF5TGlzdCBmcm9tICcuL2Rpc3BsYXlsaXN0LmpzJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuY2xhc3MgdGFza1xue1xuXHQjdGl0bGU7XG5cdCNkZXNjcmlwdGlvbjtcblx0I2R1ZURhdGU7XG5cdCNwcmlvcml0eTtcblx0I2lkO1xuXHQjc3RhdHVzO1xuXG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQsIHByaW9yaXR5KSB7XG5cdFx0dGhpcy4jdGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy4jaWQgPSBpZDtcblx0XHR0aGlzLiNzdGF0dXMgPSBmYWxzZTtcblx0fVxuXG5cdGdldFRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLiN0aXRsZTtcblx0fVxuXG5cdGdldERlc2NyaXB0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcblx0fVxuXG5cdGdldER1ZURhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2R1ZURhdGU7XG5cdH1cblxuXHRnZXRQcmlvcml0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG5cdH1cblxuXHRnZXRTdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3N0YXR1cztcblx0fVxuXG5cdGdldElEKCkge1xuXHRcdHJldHVybiB0aGlzLiNpZDtcblx0fVxuXG5cdHNldElEKGlkKSB7XG5cdFx0dGhpcy4jaWQgPSBpZDtcblx0fVxuXG5cdGNoYW5nZVN0YXR1cygpIHtcblx0XHRpZiAodGhpcy4jc3RhdHVzKVxuXHRcdFx0dGhpcy4jc3RhdHVzID0gZmFsc2U7XG5cblx0XHRlbHNlXG5cdFx0XHR0aGlzLiNzdGF0dXMgPSB0cnVlO1xuXHR9XG59XG5cbmNsYXNzIHByb2plY3Rcbntcblx0I3RpdGxlO1xuXHQjdGFza0xpc3Q7XG5cdCN0YXNrSUQ7XG5cblx0Y29uc3RydWN0b3IodGl0bGUpIHtcblx0XHR0aGlzLiN0aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuI3Rhc2tMaXN0ID0gW107XG5cdFx0dGhpcy4jdGFza0lEID0gMDtcblx0fVxuXG5cdGdldFRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLiN0aXRsZTtcblx0fVxuXG5cdGdldFRhc2tMaXN0KCkge1xuXHRcdHJldHVybiB0aGlzLiN0YXNrTGlzdDtcblx0fVxuXG5cdGFkZFRhc2tCeVByaW9yaXR5KHRhc2tPYmplY3QpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Rhc2tMaXN0Lmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLiN0YXNrTGlzdFtpXS5nZXRQcmlvcml0eSgpID49IHRhc2tPYmplY3QuZ2V0UHJpb3JpdHkoKSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy4jdGFza0xpc3Quc3BsaWNlKGksIDAsIHRhc2tPYmplY3QpO1xuXHRcdFx0XHR0aGlzLiN0YXNrTGlzdC5zZXRJRChgJHt0aGlzLiN0aXRsZX0tJHt0aGlzLiN0YXNrSUR9YCk7XG5cdFx0XHRcdHRoaXMuI3Rhc2tJRCsrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRtb3ZlVGFza1VwKHRhc2tJRCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdGFza0xpc3QubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuI3Rhc2tMaXN0LmdldElEKCkgPT0gdGFza0lEKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaSA9PSAwKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCB0ZW1wID0gdGhpcy4jdGFza0xpc3RbaV07XG5cdFx0XHRcdHRoaXMuI3Rhc2tMaXN0W2ldID0gdGhpcy4jdGFza0xpc3RbaS0xXTtcblx0XHRcdFx0dGhpcy4jdGFza0xpc3RbaS0xXSA9IHRlbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bW92ZVRhc2tEb3duKHRhc2tJRCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdGFza0xpc3QubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuI3Rhc2tMaXN0LmdldElEKCkgPT0gdGFza0lEKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLiN0YXNrTGlzdC5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCB0ZW1wID0gdGhpcy4jdGFza0xpc3RbaV07XG5cdFx0XHRcdHRoaXMuI3Rhc2tMaXN0W2ldID0gdGhpcy4jdGFza0xpc3RbaSsxXTtcblx0XHRcdFx0dGhpcy4jdGFza0xpc3RbaSsxXSA9IHRlbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIHByb2plY3RMaXN0XG57XG5cdCNjdXJyZW50UHJvamVjdDtcblx0I3Byb2plY3RMaXN0O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuI3Byb2plY3RMaXN0ID0gW107XG5cdH1cblxuXHRhZGRQcm9qZWN0KHByb2plY3RPYmplY3QpIHtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcHJvamVjdExpc3QubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuI3Byb2plY3RMaXN0W2ldLmdldFRpdGxlKCkgPT0gcHJvamVjdE9iamVjdC5nZXRUaXRsZSgpKVxuXHRcdFx0e1xuXHRcdFx0XHRhbGVydChgUHJvamVjdCBvZiB0aXRsZSBcIiR7cHJvamVjdE9iamVjdC5nZXRUaXRsZSgpfVwiIGFscmVhZHkgZXhpc3RzIWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy4jcHJvamVjdExpc3QucHVzaChwcm9qZWN0T2JqZWN0KTtcblxuXHRcdGlmICh0aGlzLiNwcm9qZWN0TGlzdC5sZW5ndGggPT0gMSlcblx0XHRcdHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE9iamVjdDtcblx0fVxuXG5cdHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Byb2plY3RMaXN0Lmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLiNwcm9qZWN0TGlzdFtpXS5nZXRUaXRsZSgpID09IHByb2plY3ROYW1lKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLiNwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhgTm8gcHJvamVjdCBvZiB0aXRsZSBcIiR7cHJvamVjdE5hbWV9XCIgZXhpc3RzIWApO1xuXHR9XG5cblx0Z2V0UHJvamVjdExpc3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Byb2plY3RMaXN0O1xuXHR9XG5cblx0Z2V0Q3VycmVudFByb2plY3QoKSB7XG5cdFx0aWYgKHRoaXMuI3Byb2plY3RMaXN0Lmxlbmd0aCA9PSAwKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdCBsaXN0IGlzIGVtcHR5IVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3Q7XG5cdH1cblxuXHRzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSkge1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRpZiAodGhpcy4jcHJvamVjdExpc3RbaV0uZ2V0VGl0bGUoKSA9PSBwcm9qZWN0TmFtZSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy4jY3VycmVudFByb2plY3QgPSB0aGlzLiNwcm9qZWN0TGlzdFtpXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmxldCBwcm9qTGlzdCA9IG5ldyBwcm9qZWN0TGlzdCgpO1xubGV0IHVuaXZQcm9qZWN0ID0gbmV3IHByb2plY3QoXCJVbml2ZXJzYWxcIik7XG5wcm9qTGlzdC5hZGRQcm9qZWN0KHVuaXZQcm9qZWN0KTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlUHJpb3JpdHkoZHVlRGF0ZSlcbntcblx0cmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tPYmplY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKVxue1xuXHRsZXQgcHJpb3JpdHkgPSBjYWxjdWxhdGVQcmlvcml0eShkdWVEYXRlKTtcblx0Y29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgLTEsIHByaW9yaXR5KTtcblx0bGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2pMaXN0LmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGl0bGUoKTtcblxuXHRwcm9qTGlzdC5zZXRDdXJyZW50UHJvamVjdChcIlVuaXZlcnNhbFwiKTtcblx0cHJvakxpc3QuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRUYXNrQnlQcmlvcml0eShuZXdUYXNrKTtcblxuXHRpZiAoY3VycmVudFByb2plY3ROYW1lICE9IFwiVW5pdmVyc2FsXCIpXG5cdHtcblx0XHRwcm9qTGlzdC5zZXRDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdE5hbWUpO1xuXHRcdHByb2pMaXN0LmdldEN1cnJlbnRQcm9qZWN0KCkuYWRkVGFza0J5UHJpb3JpdHkobmV3VGFzayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdE9iamVjdCh0aXRsZSlcbntcblx0bGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh0aXRsZSk7XG5cdHByb2pMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cdHByb2pMaXN0LnNldEN1cnJlbnRQcm9qZWN0KHRpdGxlKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tQcm9tcHQoKVxue1xuXHRsZXQgcHJvbXB0V2luZG93ID0gcHJvbXB0LmNyZWF0ZVRhc2tQcm9tcHQoKTtcblx0bWFpbi5hcHBlbmQocHJvbXB0V2luZG93WzBdKTtcblx0cHJvbXB0V2luZG93WzFdLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV4dHJhY3RGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0UHJvbXB0KClcbntcblx0bGV0IHByb21wdFdpbmRvdyA9IHByb21wdC5jcmVhdGVQcm9qZWN0UHJvbXB0KCk7XG5cdG1haW4uYXBwZW5kKHByb21wdFdpbmRvd1swXSk7XG5cdHByb21wdFdpbmRvd1sxXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBleHRyYWN0Rm9ybURhdGEpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZXZlbnQpXG57XG5cdGxldCBmb3JtT2JqID0ge307XG5cdGxldCBmb3JtRGV0YWlscyA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuXG5cdGZvciAobGV0IGtleSBvZiBmb3JtRGV0YWlscy5rZXlzKCkpIHtcblx0XHRmb3JtT2JqW2tleV0gPSBmb3JtRGV0YWlscy5nZXQoa2V5KTtcblx0fVxuXG5cdGlmIChPYmplY3Qua2V5cyhmb3JtT2JqKS5sZW5ndGggPT0gMSlcblx0XHRhZGRQcm9qZWN0T2JqZWN0KGZvcm1PYmpbJ3Byb2plY3QnXSk7XG5cblx0ZWxzZSBpZiAoT2JqZWN0LmtleXMoZm9ybU9iaikubGVuZ3RoID09IDMpXG5cdFx0YWRkVGFza09iamVjdChmb3JtT2JqWyd0YXNrJ10sIGZvcm1PYmpbJ2Rlc2NyaXB0aW9uJ10sIGZvcm1PYmpbJ2RhdGUnXSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUYXNrUHJvbXB0KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UHJvbXB0KTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTGlzdEl0ZW1PYmplY3QgfSBmcm9tICcuL2luZGV4LmpzJztcblxuZnVuY3Rpb24gYmFzaWNFbGVtZW50RmFjdG9yeSguLi5lbGVtZW50RGV0YWlscykgLy9FbGVtZW50IHRhZyBuYW1lLCBFbGVtZW50IGlkIChzZW5kIHZhbHVlIGFzIHVuZGVmaW5lZCBmb3Igbm8gaWQpLCBFbGVtZW50IGNsYXNzIDEsIGNsYXNzIDIgLi4uLlxue1xuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50RGV0YWlsc1swXSk7XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBlbGVtZW50RGV0YWlscy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGlmIChpID09IDEgJiYgZWxlbWVudERldGFpbHNbaV0gIT0gdW5kZWZpbmVkKVxuXHRcdFx0ZGl2LmlkID0gZWxlbWVudERldGFpbHNbaV07XG5cdFx0XG5cdFx0ZWxzZSBpZiAoaSAhPSAxKVxuXHRcdFx0ZGl2LmNsYXNzTmFtZSArPSBgICR7ZWxlbWVudERldGFpbHNbaV19YDtcblx0fVx0XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCwgbGFiZWxDbGFzcylcbntcblx0bGV0IGxhYmVsID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnbGFiZWwnLCB1bmRlZmluZWQsIGxhYmVsQ2xhc3MpO1xuXHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke2lkfWApO1xuXHRsYWJlbC5pbm5lclRleHQgPSBsYWJlbFRleHQ7XG5cblx0cmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dEJveChpZCwgbmFtZSwgdHlwZSwgaW5wdXRCb3hDbGFzcylcbntcblx0bGV0IGlucHV0Qm94ID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnaW5wdXQnLCBpZCwgaW5wdXRCb3hDbGFzcyk7XG5cdGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3R5cGV9YCk7XG5cdGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke25hbWV9YCk7XG5cdGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXHRpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG5cdHJldHVybiBpbnB1dEJveDtcbn1cblxuZnVuY3Rpb24gYWRkTGFiZWxBbmRJbnB1dChmb3JtRWxlbWVudCwgaWQsIG5hbWUsIHR5cGUsIGxhYmVsVGV4dCwgY29udGFpbmVyQ2xhc3MsIGxhYmVsQ2xhc3MsIGlucHV0Qm94Q2xhc3MpXG57XG5cdGxldCBkaXYgPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdkaXYnLCB1bmRlZmluZWQsIGNvbnRhaW5lckNsYXNzKTtcblx0XG5cdGRpdi5hcHBlbmQoY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCwgbGFiZWxDbGFzcykpO1xuXHRkaXYuYXBwZW5kKGNyZWF0ZUlucHV0Qm94KGlkLCBuYW1lLCB0eXBlLCBpbnB1dEJveENsYXNzKSk7XG5cblx0Zm9ybUVsZW1lbnQuYXBwZW5kKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKGlkLCBuYW1lLCB0ZXh0QXJlYUNsYXNzKVxue1xuXHRsZXQgdGV4dEFyZWEgPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCd0ZXh0YXJlYScsIGlkLCB0ZXh0QXJlYUNsYXNzKTtcblxuXHR0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3dyYXAnLCAnaGFyZCcpO1xuXHR0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxNTAnKTtcblx0dGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG5cblx0cmV0dXJuIHRleHRBcmVhO1xufVxuXG5mdW5jdGlvbiBhZGRMYWJlbEFuZFRleHRBcmVhKGZvcm1FbGVtZW50LCBpZCwgbmFtZSwgbGFiZWxUZXh0LCBjb250YWluZXJDbGFzcywgbGFiZWxDbGFzcywgdGV4dEFyZWFDbGFzcylcbntcblx0bGV0IGRpdiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2RpdicsIHVuZGVmaW5lZCwgY29udGFpbmVyQ2xhc3MpO1xuXHRcblx0ZGl2LmFwcGVuZChjcmVhdGVMYWJlbChpZCwgbGFiZWxUZXh0LCBsYWJlbENsYXNzKSk7XG5cdGRpdi5hcHBlbmQoY3JlYXRlVGV4dEFyZWEoaWQsIG5hbWUsIHRleHRBcmVhQ2xhc3MpKTtcblxuXHRmb3JtRWxlbWVudC5hcHBlbmQoZGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNQcm9tcHRXaW5kb3coKVxue1xuXHRsZXQgY29udGFpbmVyRGl2ID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZGl2JywgJ3Byb21wdC1jb250YWluZXInKTtcblx0bGV0IGJsYWNrU2NyZWVuID0gYmFzaWNFbGVtZW50RmFjdG9yeSgnZGl2JywgJ2JsYWNrLXNjcmVlbicpO1xuXHRsZXQgdGFza1Byb21wdEZvcm0gPSBiYXNpY0VsZW1lbnRGYWN0b3J5KCdmb3JtJywgJ2lucHV0LWZvcm0nLCAnZm9ybS1ib3gnKTtcblxuXHRibGFja1NjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkZWxldGVQcm9tcHRXaW5kb3cpO1xuXHR0YXNrUHJvbXB0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcblxuXHRjb250YWluZXJEaXYuYXBwZW5kKGJsYWNrU2NyZWVuKTtcblx0Y29udGFpbmVyRGl2LmFwcGVuZCh0YXNrUHJvbXB0Rm9ybSk7XG5cblx0cmV0dXJuIFtjb250YWluZXJEaXYsIHRhc2tQcm9tcHRGb3JtXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKClcbntcblx0bGV0IHN1Ym1pdEJ1dHRvbiA9IGJhc2ljRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdzdWJtaXQnKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZm9ybScsICdpbnB1dC1mb3JtJyk7XG5cdHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuXG5cdHJldHVybiBzdWJtaXRCdXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrUHJvbXB0KClcbntcblx0ZGVsZXRlUHJvbXB0V2luZG93KCk7XG5cdGxldCBwcm9tcHRXaW5kb3cgPSBjcmVhdGVCYXNpY1Byb21wdFdpbmRvdygpO1xuXG5cdGFkZExhYmVsQW5kSW5wdXQocHJvbXB0V2luZG93WzFdLCAndGFzay1uYW1lJywgJ3Rhc2snLCAndGV4dCcsICdFbnRlciB0YXNrIG5hbWUnLCAnaW5wdXQtY29udGFpbmVyJywgJ2xhYmVsLXRleHQnLCAnaW5wdXQtYm94Jyk7XG5cdGFkZExhYmVsQW5kVGV4dEFyZWEocHJvbXB0V2luZG93WzFdLCAndGFzay1kZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsICdFbnRlciB0YXNrIGRlc2NyaXB0aW9uJywgJ2lucHV0LWNvbnRhaW5lcicsICdsYWJlbC10ZXh0JywgJ2lucHV0LWJveCBkZXNjcmlwdGlvbi1ib3gnKTtcblx0YWRkTGFiZWxBbmRJbnB1dChwcm9tcHRXaW5kb3dbMV0sICdkdWUtZGF0ZScsICdkYXRlJywgJ2RhdGUnLCAnRW50ZXIgZHVlIGRhdGUnLCAnaW5wdXQtY29udGFpbmVyJywgJ2xhYmVsLXRleHQnLCAnaW5wdXQtYm94Jyk7XG5cdHByb21wdFdpbmRvd1sxXS5hcHBlbmQoY3JlYXRlU3VibWl0QnV0dG9uKCkpO1xuXG5cdHJldHVybiBwcm9tcHRXaW5kb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0UHJvbXB0KClcbntcblx0ZGVsZXRlUHJvbXB0V2luZG93KCk7XG5cdGxldCBwcm9tcHRXaW5kb3cgPSBjcmVhdGVCYXNpY1Byb21wdFdpbmRvdygpO1xuXG5cdGFkZExhYmVsQW5kSW5wdXQocHJvbXB0V2luZG93WzFdLCAncHJvamVjdC1uYW1lJywgJ3Byb2plY3QnLCAndGV4dCcsICdFbnRlciBwcm9qZWN0IG5hbWUnLCAnaW5wdXQtY29udGFpbmVyJywgJ2xhYmVsLXRleHQnLCAnaW5wdXQtYm94Jyk7XG5cdHByb21wdFdpbmRvd1sxXS5hcHBlbmQoY3JlYXRlU3VibWl0QnV0dG9uKCkpO1xuXG5cdHJldHVybiBwcm9tcHRXaW5kb3c7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpXG57XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGRlbGV0ZVByb21wdFdpbmRvdygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9tcHRXaW5kb3coKVxue1xuXHRsZXQgd2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb21wdC1jb250YWluZXInKTtcblxuXHRpZiAod2luZG93KVxuXHRcdHdpbmRvdy5yZW1vdmUoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==