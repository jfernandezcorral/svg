(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("svg_lib", [], factory);
	else if(typeof exports === 'object')
		exports["svg_lib"] = factory();
	else
		root["svg_lib"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/components/prueba.js":
/*!**********************************!*\
  !*** ./src/components/prueba.js ***!
  \**********************************/
/*! exports provided: prueba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prueba", function() { return prueba; });
/* harmony import */ var _prueba_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prueba.scss */ "./src/components/prueba.scss");
/* harmony import */ var _prueba_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prueba_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ "./src/components/tools.js");



const prueba = (padre, w = undefined, h = undefined) => {
  const svg = Object(_tools_js__WEBPACK_IMPORTED_MODULE_1__["construyeSVG"])(_prueba_scss__WEBPACK_IMPORTED_MODULE_0___default.a, w, h);
  svg.add_h("<def/>").add('<circle id="c" r="50"/>');
  svg.add_h("<g fill='white'/>").add({
    tag: 'rect',
    x: "20",
    y: "20",
    width: "100",
    height: "280",
    fill: "blue",
    stroke: "black",
    'stroke-width': "3"
  }).add(`<circle cx="70" cy="80" r="30" stroke="black" stroke-width="2" />`);
  svg.add({
    tag: 'use',
    'xlink:href': '#c',
    x: '120',
    y: '120',
    fill: '#40cc40'
  });
  svg.add(`<use xlink:href='#c' x='220' y='120' fill='#cc4040'/>`);
  svg.add_h(`<use x='320' y='120' fill='#cc4040'/>`).setAtt('xlink:href', '#c');
  /*const g = appendTo(svg,"<g fill='white'/>")
  appendTo(g, {tag: 'rect', x:"20", y:"20", width:"100", height:"280", fill:"blue", stroke:"black", 'stroke-width':"3"})
  appendTo(g , `<circle cx="70" cy="80" r="30" stroke="black" stroke-width="2" />`)*/

  padre.appendChild(svg);
  return svg;
};



/***/ }),

/***/ "./src/components/prueba.scss":
/*!************************************!*\
  !*** ./src/components/prueba.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "rect {\n  fill: red; }\n\ng {\n  fill: blue; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/tools.js":
/*!*********************************!*\
  !*** ./src/components/tools.js ***!
  \*********************************/
/*! exports provided: construyeSVG, appendTo, setAtt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "construyeSVG", function() { return construyeSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAtt", function() { return setAtt; });
const NS = {
  svg: 'http://www.w3.org/2000/svg',
  xlink: 'http://www.w3.org/1999/xlink'
};

const construyeSVG = (styles, w, h, vw = 1024, vh = 1024) => {
  //styles, w, h, 1024, 1024
  const el = document.createElementNS(NS.svg, 'svg');
  w && el.setAttribute("width", w);
  h && el.setAttribute("height", h);
  el.setAttribute("viewBox", `0 0 ${String(vw)} ${String(vh)}`);
  const tmp = document.createElementNS(NS.svg, 'style');
  tmp.setAttribute("type", 'text/css');
  tmp.appendChild(document.createTextNode("/* <![CDATA][ */\n" + styles + "\n/* ]]> */"));
  el.appendChild(tmp);
  el.setAttribute('xmlns', NS.svg);
  el.setAttributeNS(NS.svg, 'xlink', NS.xlink);
  return el;
};

const appendTo = (padre, cfg) => {
  if (typeof cfg === 'string') {
    const el = document.createElementNS(NS.svg, 'g');
    el.innerHTML = cfg;
    const ret = el.childNodes[0];
    padre.appendChild(ret);
    return ret;
  }

  const tmp = document.createElementNS(NS.svg, cfg.tag);
  Object.keys(cfg).forEach(k => {
    k != 'tag' && k.indexOf(':') < 0 && tmp.setAttributeNS(null, k, cfg[k]);

    if (k.indexOf(':') > 0) {
      const [ns, prop] = k.split(':');
      tmp.setAttributeNS(NS[ns], prop, cfg[k]);
    }
  });
  padre.appendChild(tmp);
  return tmp;
};

!SVGElement.prototype.add_h && (SVGElement.prototype.add_h = function (cfg) {
  return appendTo(this, cfg);
});
!SVGElement.prototype.add && (SVGElement.prototype.add = function (cfg) {
  appendTo(this, cfg);
  return this;
});

const setAtt = (el, name, value) => {
  if (name.indexOf(':') > 0) {
    const [ns, prop] = name.split(':');
    el.setAttributeNS(NS[ns], prop, value);
    return el;
  }

  el.setAttributeNS(null, name, value);
  return el;
};

!SVGElement.prototype.setAtt && (SVGElement.prototype.setAtt = function (name, value) {
  setAtt(this, name, value);
  return this;
});


/***/ }),

/***/ "./src/components/xy.js":
/*!******************************!*\
  !*** ./src/components/xy.js ***!
  \******************************/
/*! exports provided: xy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xy", function() { return xy; });
/* harmony import */ var _xy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xy.scss */ "./src/components/xy.scss");
/* harmony import */ var _xy_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xy_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ "./src/components/tools.js");


const cfgDefault = {
  puntos: [{
    e: "Enero",
    v: 25
  }, {
    e: "Febrero",
    v: -5
  }, {
    e: "Marzo",
    v: 10
  }]
};

const calculoRango = (min, max) => {
  //
  if (max - min == 0) {
    return max == 0 ? [0, 1] : [max - 1, max + 1];
  }

  return [2, 5];
};

const h = 1000;
const t = 0.04;
const scale = 0.85;
const pre = 0.13;
const lc = 10;
const htext = 35;

const xy = (padre, cfg = cfgDefault, aspectRatio = 16 / 9) => {
  const paintMarcas = () => {
    const lx = w - 2 * offset;
    const inc = lx / (cfg.puntos.length - 1);
    let x = offset;
    cfg.puntos.forEach(p => {
      axis.add(`<line x1="${x}" y1="${h}" x2="${x}" y2="${h + lc}"/>`);
      axis.add(`<text x="${x}" y="${h + htext}">${p.e}</text>`);
      x += inc;
    });
  };

  const w = h * aspectRatio;
  const offset = t * w;
  const [min, max] = cfg.puntos.reduce((a, it) => {
    if (it.v < a[0]) {
      a[0] = it.v;
    }

    if (it.v > a[1]) {
      a[1] = it.v;
    }

    return a;
  }, [cfg.puntos[0].v, cfg.puntos[0].v]);
  const [pmin, pmax] = calculoRango(min, max);
  console.log(pmin, pmax);
  const svg = Object(_tools_js__WEBPACK_IMPORTED_MODULE_1__["construyeSVG"])(_xy_scss__WEBPACK_IMPORTED_MODULE_0___default.a, undefined, undefined, w, h); //svg.add_h("<def/>").add('<circle id="c" r="50"/>')

  const axis = svg.add_h(`<g class='axis' transform='scale(${scale}) translate(${w * pre}, ${h * (1 - scale - pre)})'/>`);
  axis.add(`<line y1="${h}" x2="${w}" y2="${h}"/>`);
  axis.add(`<line y2="${h}"/>`);
  paintMarcas();
  padre.appendChild(svg);
  return svg;
};



/***/ }),

/***/ "./src/components/xy.scss":
/*!********************************!*\
  !*** ./src/components/xy.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".axis {\n  stroke: #333; }\n  .axis text {\n    text-anchor: middle;\n    fill: #333;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: prueba, xy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_prueba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/prueba */ "./src/components/prueba.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prueba", function() { return _components_prueba__WEBPACK_IMPORTED_MODULE_0__["prueba"]; });

/* harmony import */ var _components_xy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/xy */ "./src/components/xy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xy", function() { return _components_xy__WEBPACK_IMPORTED_MODULE_1__["xy"]; });





/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map