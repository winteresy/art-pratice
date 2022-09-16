/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_3.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_3.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var audioCtx;
var oscillator;
var frame = document.createElement('div');
var text = document.createElement('div');
var dogContainer = document.createElement('div');
var mouth1 = document.createElement('div');
var mouth2 = document.createElement('div');
var waterLilyContainer = document.createElement('div');
var waterLily1 = document.createElement('div');
var waterLily2 = document.createElement('div');
var waterLily3 = document.createElement('div');
var waterLily4 = document.createElement('div'); //const water = document.createElement('div')
//const koi = document.createElement('div')

frame.classList.add('dog');
text.classList.add('text');
dogContainer.classList.add('dog-container');
mouth1.classList.add('mouth1', 'mouth_opacity');
mouth2.classList.add('mouth2');
waterLilyContainer.classList.add('waterlily_container');
waterLily1.classList.add('waterlily', 'waterlily_first');
waterLily2.classList.add('waterlily', 'waterlily_second');
waterLily3.classList.add('waterlily', 'waterlily_third');
waterLily4.classList.add('waterlily', 'waterlily_fourth');

function createOscillator() {
  // create web audio api context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // create Oscillator node

  oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz

  oscillator.connect(audioCtx.destination);
  oscillator.start();
}

function changeOscillatorFrequency() {
  var slider = document.getElementById('slider');
  oscillator.frequency.setValueAtTime(slider.value, audioCtx.currentTime);
}

function createSlider() {
  var container = document.getElementById('prototype_3');
  var slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 0;
  slider.max = 1000;
  slider.value = 440;
  slider.id = 'slider';
  container.appendChild(slider);
  slider.addEventListener('input', function () {
    changeOscillatorFrequency();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('prototype_3');
  container.appendChild(frame);
  container.appendChild(text);
  frame.appendChild(mouth1);
  frame.appendChild(mouth2);
  container.appendChild(waterLilyContainer);
  waterLilyContainer.appendChild(waterLily1);
  waterLilyContainer.appendChild(waterLily2);
  waterLilyContainer.appendChild(waterLily3);
  waterLilyContainer.appendChild(waterLily4);
  createSlider();
  frame.addEventListener('click', function () {
    createOscillator();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_3-11d7c78c22a7e0c0bdd1.js.map