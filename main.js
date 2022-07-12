/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial;\n  color: #FFF;\n}\n\nbody,\nhtml {\n  height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 8vh;\n  padding: 0 2rem;\n  background-color: #041C32;\n}\n.header__button {\n  width: 65px;\n  height: 65px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 0;\n  background-color: #ECB365;\n}\n\nmain {\n  display: flex;\n  height: 92vh;\n  background-color: #04293A;\n}\n\n.sidebar {\n  background-color: #064663;\n  font-size: 1.4rem;\n  width: 280px;\n}\n.sidebar__main {\n  padding-top: 1rem;\n  border-bottom: 1px solid #041C32;\n}\n.sidebar__list {\n  list-style-type: none;\n}\n.sidebar__list #projectButton {\n  padding: 1rem;\n}\n.sidebar__list #projectButton:hover {\n  transition: 0.4s;\n  background-color: #041C32;\n  cursor: pointer;\n}\n.sidebar__item {\n  padding: 1rem;\n  word-wrap: break-word;\n}\n.sidebar__item--active {\n  background-color: #ECB365;\n}\n.sidebar__item:hover {\n  transition: 0.4s;\n  background-color: #ECB365;\n  cursor: pointer;\n}\n\n.list {\n  width: 100%;\n  overflow: scroll;\n}\n.list__items {\n  padding: 1rem;\n}\n.list__item {\n  margin-bottom: 0.5rem;\n  background-color: #041C32;\n  font-size: 1.5rem;\n}\n.list__item--active {\n  background-color: #031d36;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n.list__item:hover {\n  transition: 0.4s;\n  background-color: #031d36;\n  cursor: pointer;\n}\n.list__wrapper {\n  width: 100%;\n}\n.list__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n.list__top--high {\n  border-left: 5px solid #A10035;\n}\n.list__top--med {\n  border-left: 5px solid #FFE7BF;\n}\n.list__top--active {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #04293A;\n}\n.list__right {\n  display: flex;\n}\n.list__check {\n  width: 50px;\n  accent-color: #ECB365;\n}\n.list__desc {\n  display: none;\n  padding: 1rem;\n  padding-top: 1rem;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n.list__desc--active {\n  display: block;\n}\n.list__descText {\n  padding-bottom: 1rem;\n}\n.list__descText :first-child {\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n.list__descText :last-child {\n  font-size: 1.3rem;\n}\n.list__delete-wrapper {\n  text-align: right;\n}\n.list__delete {\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: #A10035;\n  text-align: center;\n  border-radius: 5px;\n  padding: 0.5rem;\n  border: 0;\n}\n\n.add {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: all;\n}\n.add__box {\n  background-color: #04293A;\n  border: 2px solid #064663;\n  width: 70vw;\n  border-radius: 5px;\n}\n.add__top {\n  background-color: #064663;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.add__top h1 {\n  font-size: 2rem;\n  cursor: default;\n}\n.add__form {\n  padding: 1rem;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n}\n.add__form input,\n.add__form textarea {\n  margin-bottom: 1rem;\n  background-color: #041C32;\n  border: none;\n}\n.add__form input[type=text],\n.add__form textarea {\n  display: block;\n  width: 100%;\n}\n.add__form input[type=text] {\n  font-size: 1.5rem;\n}\n.add__form textarea {\n  font-size: 1.2rem;\n  resize: none;\n}\n.add__form input[type=date],\n.add__form input[type=time] {\n  font-size: 1.2rem;\n  border-radius: 4px;\n  padding: 0.2rem;\n  border: 1px solid #064663;\n}\n.add__form button[type=button] {\n  padding: 0.2rem 1rem;\n  border: none;\n}\n.add__form #low {\n  background-color: #064663;\n}\n.add__form #med {\n  background-color: #FFE7BF;\n  color: #041C32;\n}\n.add__form #high {\n  background-color: #A10035;\n}\n.add__form button[type=submit] {\n  background-color: #ECB365;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border: none;\n  padding: 1rem 3rem;\n  border-radius: 5px;\n  margin-top: 1rem;\n  align-self: center;\n}\n\n.add-proj {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: all;\n}\n.add-proj__box {\n  background-color: #04293A;\n  border: 2px solid #064663;\n  width: 70vw;\n  border-radius: 5px;\n}\n.add-proj__top {\n  background-color: #064663;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.add-proj__top h1 {\n  font-size: 2rem;\n  cursor: default;\n}\n.add-proj__form {\n  padding: 1rem;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n}\n.add-proj__form input {\n  margin-bottom: 1rem;\n  background-color: #041C32;\n  border: none;\n  display: block;\n  width: 100%;\n  font-size: 1.5rem;\n}\n.add-proj__form button {\n  background-color: #ECB365;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border: none;\n  padding: 1rem 3rem;\n  border-radius: 5px;\n  margin-top: 1rem;\n  align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #041C32;\n$secondary-color: #04293A;\n$accent-color: #064663;\n$important-color: #ECB365;\n$highprio-color: #A10035;\n$medprio-color: #FFE7BF;\n$list-highlight-color: #031d36;\n$text-color: #FFF;\n\n@mixin sidebar-hover($color) {\n    &:hover {\n        transition: 0.4s;\n        background-color: $color;\n        cursor: pointer;\n    }\n}\n\n@mixin form-display() {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    pointer-events: all;\n}\n\n@mixin form-box() {\n    background-color: $secondary-color;\n    border: 2px solid $accent-color;\n    width: 70vw;\n    border-radius: 5px;\n}\n\n@mixin form-top() {\n    background-color: $accent-color;\n    padding: 0.5rem 1rem;\n    display: flex;\n    justify-content: space-between;\n\n    h1 {\n        font-size: 2rem;\n        cursor: default;\n    }\n}\n\n@mixin form-position() {\n    padding: 1rem;\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n@mixin form-submit-button() {\n    background-color: $important-color;\n    font-size: 1.2rem;\n    font-weight: bold;\n    border: none;\n    padding: 1rem 3rem;\n    border-radius: 5px;\n    margin-top: 1rem;\n    align-self: center;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial;\n    color: $text-color;\n}\n\nbody,\nhtml {\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    min-height: 8vh;\n    padding: 0 2rem;\n    background-color: $primary-color;\n\n    &__button {\n        width: 65px;\n        height: 65px;\n        font-size: 3rem;\n        border-radius: 50%;\n        border: 0;\n        background-color: $important-color;\n    }\n}\n\nmain {\n    display: flex;\n    height: 92vh;\n\n    background-color: $secondary-color;\n}\n\n.sidebar {\n    background-color: $accent-color;\n    font-size: 1.4rem;\n    width: 280px;\n\n    &__main {\n        padding-top: 1rem;\n        border-bottom: 1px solid $primary-color;\n    }\n\n    &__list {\n        list-style-type: none;\n\n        #projectButton {\n            padding: 1rem;\n            @include sidebar-hover($primary-color);\n        }\n    }\n\n    &__item {\n        padding: 1rem;\n        word-wrap: break-word;\n\n        &--active {\n            background-color: $important-color;\n        }\n\n        @include sidebar-hover($important-color);\n    }\n}\n\n.list {\n    width: 100%;\n    overflow: scroll; // CHANGE TO HIDE DURING ADDING\n\n    &__items {\n        padding: 1rem;\n    }\n\n    &__item {\n        margin-bottom: 0.5rem;\n        background-color: $primary-color;\n        font-size: 1.5rem;\n\n        &--active {\n            background-color: $list-highlight-color;\n\n            border-bottom-right-radius: 15px;\n            border-bottom-left-radius: 15px;\n        }\n\n        @include sidebar-hover($list-highlight-color);\n    }\n\n    &__wrapper {\n        width: 100%;\n    }\n\n    &__top {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 1rem;\n\n        &--high {\n            border-left: 5px solid $highprio-color;\n        }\n\n        &--med {\n            border-left: 5px solid $medprio-color;\n        }\n\n        &--active {\n            padding-bottom: 1rem;\n            border-bottom: 1px solid $secondary-color;\n        }\n    }\n\n    &__right {\n        display: flex;\n    }\n\n    &__check {\n        width: 50px;\n        accent-color: $important-color;\n    }\n\n    &__desc {\n        display: none;\n\n        padding: 1rem;\n        padding-top: 1rem;\n        border-bottom-right-radius: 15px;\n        border-bottom-left-radius: 15px;\n\n        &--active {\n            display: block;\n        }\n    }\n\n    &__descText {\n        padding-bottom: 1rem;\n\n        :first-child {\n            font-weight: 700;\n            padding-bottom: 0.5rem;\n        }\n\n        :last-child {\n            font-size: 1.3rem;\n        }\n    }\n\n\n    &__delete-wrapper {\n        text-align: right;\n    }\n\n    &__delete {\n        margin-top: 1rem;\n        font-size: 1.5rem;\n        font-weight: 700;\n        background-color: $highprio-color;\n        text-align: center;\n        border-radius: 5px;\n        padding: 0.5rem;\n        border: 0;\n    }\n}\n\n.add {\n    @include form-display();\n\n\n    &__box {\n        @include form-box();\n    }\n\n\n    &__top {\n        @include form-top();\n    }\n\n    &__form {\n        @include form-position();\n\n        input,\n        textarea {\n            margin-bottom: 1rem;\n            background-color: $primary-color;\n            border: none;\n        }\n\n        input[type=\"text\"],\n        textarea {\n            display: block;\n            width: 100%;\n        }\n\n        input[type=\"text\"] {\n            font-size: 1.5rem;\n        }\n\n        textarea {\n            font-size: 1.2rem;\n            resize: none;\n        }\n\n        input[type=\"date\"],\n        input[type=\"time\"] {\n            font-size: 1.2rem;\n            border-radius: 4px;\n            padding: 0.2rem;\n\n            border: 1px solid $accent-color;\n        }\n\n        button[type=\"button\"] {\n            padding: 0.2rem 1rem;\n            border: none;\n        }\n\n        #low {\n            background-color: $accent-color;\n        }\n\n        #med {\n            background-color: $medprio-color;\n            color: $primary-color;\n        }\n\n        #high {\n            background-color: $highprio-color;\n        }\n\n        button[type=\"submit\"] {\n            @include form-submit-button();\n        }\n\n    }\n}\n\n.add-proj {\n    @include form-display();\n\n    &__box {\n        @include form-box();\n    }\n\n\n    &__top {\n        @include form-top();\n    }\n\n    &__form {\n        @include form-position();\n\n        input {\n            margin-bottom: 1rem;\n            background-color: $primary-color;\n            border: none;\n            display: block;\n            width: 100%;\n            font-size: 1.5rem;\n        }\n\n        button {\n            @include form-submit-button();\n        }\n\n    }\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/deleteItem.js":
/*!******************************!*\
  !*** ./src/js/deleteItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finders */ "./src/js/finders.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");




const deleteItemDOM =  card => card.remove();
const deleteItemFromArray = title => { _projects__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_projects__WEBPACK_IMPORTED_MODULE_1__.activeProject] = _projects__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_projects__WEBPACK_IMPORTED_MODULE_1__.activeProject].filter(item => item.title != title) };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {
    const card = (0,_finders__WEBPACK_IMPORTED_MODULE_0__.findCurrentCard)(e);
    const title = (0,_finders__WEBPACK_IMPORTED_MODULE_0__.findTitle)(card);


    deleteItemDOM(card);
    deleteItemFromArray(title);
});

const clearAll = () => {
    while(_elements__WEBPACK_IMPORTED_MODULE_2__.listItems.firstChild) _elements__WEBPACK_IMPORTED_MODULE_2__.listItems.removeChild(_elements__WEBPACK_IMPORTED_MODULE_2__.listItems.firstChild);
}

/***/ }),

/***/ "./src/js/desc.js":
/*!************************!*\
  !*** ./src/js/desc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finders */ "./src/js/finders.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");



const expandCard = (item, children) => {
    item.classList.add("list__item--active");
    children.forEach(child => {
        child.classList.add(`${child.classList[0]}--active`);
    });
}

const shrinkCard = (item, children) => {
    item.classList.remove("list__item--active");
    children.forEach(child => {
        child.classList.remove(`${child.classList[0]}--active`);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {
    const item = (0,_finders__WEBPACK_IMPORTED_MODULE_0__.findCurrentCard)(e);
    const title = (0,_finders__WEBPACK_IMPORTED_MODULE_0__.findTitle)(item);
    const children = item.querySelectorAll("div");
    const currentItem = (0,_finders__WEBPACK_IMPORTED_MODULE_0__.findCurrentItemInArray)(title, _projects__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_projects__WEBPACK_IMPORTED_MODULE_1__.activeProject]);

    console.log(currentItem[0]);

    if (currentItem[0].checkStatus() === 0) expandCard(item, children);
    else shrinkCard(item, children);

    currentItem[0].changeStatus();
});


/***/ }),

/***/ "./src/js/elements.js":
/*!****************************!*\
  !*** ./src/js/elements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItemBox": () => (/* binding */ addItemBox),
/* harmony export */   "addItemButton": () => (/* binding */ addItemButton),
/* harmony export */   "addItemExit": () => (/* binding */ addItemExit),
/* harmony export */   "addProjBox": () => (/* binding */ addProjBox),
/* harmony export */   "allButtons": () => (/* binding */ allButtons),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "buttons": () => (/* binding */ buttons),
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "desc": () => (/* binding */ desc),
/* harmony export */   "exitProject": () => (/* binding */ exitProject),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "listItems": () => (/* binding */ listItems),
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "projectTitle": () => (/* binding */ projectTitle),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "sidebarList": () => (/* binding */ sidebarList),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
const addItemButton = document.getElementById("addButton");
const addItemBox = document.getElementById("addItem");
const addItemExit = document.getElementById("exit");
const body = document.querySelector("body");
const list = document.getElementById("list");
const form = document.getElementById("todoForm");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const time = document.getElementById("time");

const buttons = document.getElementById("prioButtons");
const allButtons = buttons.querySelectorAll("button");

const listItems = document.getElementById("listItems");

const addProjBox = document.getElementById("addProj");
const projectButton = document.getElementById("projectButton");
const exitProject = document.getElementById("exitProject")
const projectForm = document.getElementById("projectForm");
const projectTitle = document.getElementById("projectTitle");

const sidebarList = document.getElementById("sidebarList");
const sidebar = document.getElementById("sidebar");

/***/ }),

/***/ "./src/js/finders.js":
/*!***************************!*\
  !*** ./src/js/finders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findCurrentCard": () => (/* binding */ findCurrentCard),
/* harmony export */   "findCurrentItemInArray": () => (/* binding */ findCurrentItemInArray),
/* harmony export */   "findTitle": () => (/* binding */ findTitle)
/* harmony export */ });
const findCurrentCard = e => {
    let item = e.target;

    while(!item.classList.contains("list__item")) item = item.parentElement;
    
    return item;
};

const findCurrentItemInArray = (title, arr) => arr.filter(listItem => listItem.title === title);

const findTitle = card => {
    const child = card.firstChild;
    const grandChild = child.firstChild;
    const titleElement = grandChild.firstElementChild
    const title = titleElement.textContent;

    return title;
}

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disableScreen": () => (/* binding */ disableScreen),
/* harmony export */   "enableScreen": () => (/* binding */ enableScreen),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./src/js/elements.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/js/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");




const disableScreen = () => {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.body.style.pointerEvents = "none";
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.style.overflow = "hidden";
}

const enableScreen = () => {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.body.style.pointerEvents = "all";
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.style.overflow = "scroll";
}

const openForm = () => {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.addItemBox.style.display = "grid";
    disableScreen();
}

const closeForm = () => {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.addItemBox.style.display = "none";
    enableScreen();
}

const hasDuplicate = title => mainList.find(item => item.title === title);

let priority = "";
_elements_js__WEBPACK_IMPORTED_MODULE_0__.allButtons.forEach(button => {
    button.addEventListener("click", e => {
        priority = button.id;
    });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form => {
    form.addEventListener("submit", e => {
        if(hasDuplicate(_elements_js__WEBPACK_IMPORTED_MODULE_0__.title.value)) {
            alert("Task names must be different!");
    
            e.preventDefault();
            return;
        };
    
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_elements_js__WEBPACK_IMPORTED_MODULE_0__.title.value, _elements_js__WEBPACK_IMPORTED_MODULE_0__.desc.value, _elements_js__WEBPACK_IMPORTED_MODULE_0__.date.value, _elements_js__WEBPACK_IMPORTED_MODULE_0__.time.value, priority, listItems, _projects__WEBPACK_IMPORTED_MODULE_2__.activeProject);
        priority = "";

        closeForm();
    });
});

/***/ }),

/***/ "./src/js/items.js":
/*!*************************!*\
  !*** ./src/js/items.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
/* harmony export */   "printItems": () => (/* binding */ printItems)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/js/todo.js");



class ListItem {
    constructor(title, desc, date, time, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.time = time;
        this.priority = priority;
        this.active = 0;
    }

    changeStatus() {
        if (this.active === 0) this.active = 1;
        else this.active = 0;
    }

    checkStatus() {
        return this.active;
    }
}

const printItems = project => {
    if(project === undefined) return 0;
    project.forEach(item => {
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createItem)(item.title, item.desc, item.date, item.time, item.priority, _elements__WEBPACK_IMPORTED_MODULE_0__.listItems);
    })
}

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/js/projects.js");
/* harmony import */ var _deleteItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteItem */ "./src/js/deleteItem.js");
/* harmony import */ var _desc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desc */ "./src/js/desc.js");
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items.js */ "./src/js/items.js");


 




const addGlobalListener = (type, selector, callback) => {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    addGlobalListener("click", ".list__top", _desc__WEBPACK_IMPORTED_MODULE_4__["default"]);
    addGlobalListener("click", ".list__delete", _deleteItem__WEBPACK_IMPORTED_MODULE_3__["default"]);
    addGlobalListener("click", ".list__check", _deleteItem__WEBPACK_IMPORTED_MODULE_3__["default"]);
    addGlobalListener("click", ".sidebar__item", e => {
        // ORGANIZE
        (0,_deleteItem__WEBPACK_IMPORTED_MODULE_3__.clearAll)();

        const listItems = _elements__WEBPACK_IMPORTED_MODULE_0__.sidebar.querySelectorAll(".sidebar__item");
        listItems.forEach(item => {
            if(item.classList.contains("sidebar__item--active")) {
                item.classList.remove("sidebar__item--active");
            }
        })

        e.target.classList.add("sidebar__item--active");

        (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.changeActive)(e.target.textContent);

        const currentProject = _projects_js__WEBPACK_IMPORTED_MODULE_2__.listOfProjects[_projects_js__WEBPACK_IMPORTED_MODULE_2__.activeProject];

        (0,_items_js__WEBPACK_IMPORTED_MODULE_5__.printItems)(currentProject);
        
        console.log(currentProject);
        
    });

    _elements__WEBPACK_IMPORTED_MODULE_0__.addItemButton.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_1__.openForm);
    _elements__WEBPACK_IMPORTED_MODULE_0__.addItemExit.addEventListener("click", _form__WEBPACK_IMPORTED_MODULE_1__.closeForm);
    _elements__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", _projects_js__WEBPACK_IMPORTED_MODULE_2__.openProject);
    _elements__WEBPACK_IMPORTED_MODULE_0__.exitProject.addEventListener("click", _projects_js__WEBPACK_IMPORTED_MODULE_2__.closeProject);
});

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "changeActive": () => (/* binding */ changeActive),
/* harmony export */   "closeProject": () => (/* binding */ closeProject),
/* harmony export */   "listOfProjects": () => (/* binding */ listOfProjects),
/* harmony export */   "openProject": () => (/* binding */ openProject)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");



let activeProject = "Main Tasks";

let listOfProjects = {
    "Main Tasks": [],
    "Project #1": [],
    "Project #2": [], 
    "Project #3": [],
};

const openProject = () => {
    _elements__WEBPACK_IMPORTED_MODULE_0__.addProjBox.style.display = "grid";
    (0,_form__WEBPACK_IMPORTED_MODULE_1__.disableScreen)();
}

const closeProject = () => {
    _elements__WEBPACK_IMPORTED_MODULE_0__.addProjBox.style.display = "none";
    (0,_form__WEBPACK_IMPORTED_MODULE_1__.enableScreen)();
}

const changeActive = project => activeProject = project;


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem),
/* harmony export */   "createItemObj": () => (/* binding */ createItemObj),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.js */ "./src/js/items.js");



const createItem = (title, desc, date, time, priority, listItems) => {
    const itemElement = document.createElement("div");
    const wrapperElement = document.createElement("div");

    const topElement = document.createElement("div");
    const titleElement = document.createElement("p");
    const rightElement = document.createElement("div");
    const dateElement = document.createElement("p");
    const checkElement = document.createElement("input");

    const descDiv = document.createElement("div");
    const descText = document.createElement("div");
    const descHeader = document.createElement("p");
    const descr = document.createElement("p");

    const deleteWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");

    itemElement.classList.add("list__item");
    wrapperElement.classList.add("list__wrapper");
    topElement.classList.add("list__top");
    titleElement.classList.add("list__name");
    rightElement.classList.add("list__right");
    dateElement.classList.add("list__date");
    checkElement.classList.add("list__check");
    descDiv.classList.add("list__desc");
    descText.classList.add("list__descText");
    deleteWrapper.classList.add("list__delete-wrapper");
    deleteButton.classList.add("list__delete");

    if (priority === "high") topElement.classList.add("list__top--high");
    else if (priority === "med") topElement.classList.add("list__top--med");

    checkElement.setAttribute("type", "checkbox");

    titleElement.textContent = title;
    dateElement.textContent = `${date} - ${time}`;
    descHeader.textContent = "Description";
    descr.textContent = desc;
    deleteButton.textContent = "Delete";

    itemElement.append(wrapperElement);
    wrapperElement.append(topElement);
    topElement.append(titleElement);
    topElement.append(rightElement);
    rightElement.append(dateElement);
    rightElement.append(checkElement);

    wrapperElement.append(descDiv);
    descDiv.append(descText);
    descText.append(descHeader);
    descText.append(descr);
    descDiv.append(deleteWrapper);
    deleteWrapper.append(deleteButton);

    listItems.append(itemElement);
}

const createItemObj = (title, desc, date, time, priority, activeProject) => {
    const item = new _items_js__WEBPACK_IMPORTED_MODULE_1__.ListItem(title, desc, date, time, priority);
    _projects__WEBPACK_IMPORTED_MODULE_0__.listOfProjects[activeProject].push(item);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title, desc, date, time, priority, listItems, activeProject) => {
    createItem(title, desc, date, time, priority, listItems);
    createItemObj(title, desc, date, time, priority, activeProject);
});

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/js/listeners.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items.js */ "./src/js/items.js");








(0,_listeners__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_form__WEBPACK_IMPORTED_MODULE_1__["default"])(_elements__WEBPACK_IMPORTED_MODULE_2__.form);

(0,_todo__WEBPACK_IMPORTED_MODULE_3__.createItemObj)("title", "desc", "date", "time", "high", "Main Tasks");
(0,_todo__WEBPACK_IMPORTED_MODULE_3__.createItemObj)("title1", "desc1", "date1", "time1", "med", "Project #1");
(0,_todo__WEBPACK_IMPORTED_MODULE_3__.createItemObj)("title2", "desc2", "date2", "time2", "", "Project #2");
(0,_todo__WEBPACK_IMPORTED_MODULE_3__.createItemObj)("title3", "desc3", "date3", "time3", "", "Project #3");


(0,_items_js__WEBPACK_IMPORTED_MODULE_6__.printItems)(_projects__WEBPACK_IMPORTED_MODULE_5__.listOfProjects["Main Tasks"]);
// ORGANIZE
_elements__WEBPACK_IMPORTED_MODULE_2__.projectForm.addEventListener("submit", e => {

    const title = _elements__WEBPACK_IMPORTED_MODULE_2__.projectTitle.value;
    
    const listItem = document.createElement("li");
    listItem.textContent = title;
    listItem.classList.add("sidebar__item");

    _elements__WEBPACK_IMPORTED_MODULE_2__.sidebarList.append(listItem);

    _projects__WEBPACK_IMPORTED_MODULE_5__.listOfProjects[title] = [];
    
    console.log(_projects__WEBPACK_IMPORTED_MODULE_5__.listOfProjects);

    // closeProject();
})
})();

/******/ })()
;
//# sourceMappingURL=main.js.map