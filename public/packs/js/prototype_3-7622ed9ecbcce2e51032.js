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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/app/javascript/packs/prototype_3.js: Unexpected token, expected \",\" (68:30)\n\n  66 | text.classList.add('text')\n  67 | dogContainer.classList.add('dog-container')\n> 68 | mouth1.classList.add('mouth1' 'mouth_opacity')\n     |                               ^\n  69 | mouth2.classList.add('mouth2')\n  70 | waterLilyContainer.classList.add('waterlily_container')\n  71 | waterLily1.classList.add('waterlily waterlily_first')\n    at instantiate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:367:12)\n    at Parser.raise (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3678:19)\n    at Parser.unexpected (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3716:16)\n    at Parser.expect (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:4129:28)\n    at Parser.parseCallExpressionArguments (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12998:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12913:29)\n    at Parser.parseSubscript (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12838:19)\n    at Parser.parseSubscripts (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12807:19)\n    at Parser.parseExprSubscripts (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12796:17)\n    at Parser.parseUpdate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12769:21)\n    at Parser.parseMaybeUnary (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12739:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12530:61)\n    at Parser.parseExprOps (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12537:23)\n    at Parser.parseMaybeConditional (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12507:23)\n    at Parser.parseMaybeAssign (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12459:21)\n    at Parser.parseExpressionBase (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12395:23)\n    at /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12389:39\n    at Parser.allowInAnd (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14485:16)\n    at Parser.parseExpression (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12389:17)\n    at Parser.parseStatementContent (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14925:23)\n    at Parser.parseStatement (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14782:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15441:25)\n    at Parser.parseBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15432:10)\n    at Parser.parseProgram (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14700:10)\n    at Parser.parseTopLevel (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14687:25)\n    at Parser.parse (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16710:10)\n    at parse (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16762:38)\n    at parser (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_3-7622ed9ecbcce2e51032.js.map