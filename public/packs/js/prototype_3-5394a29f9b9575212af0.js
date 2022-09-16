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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/app/javascript/packs/prototype_3.js: Unexpected keyword 'function'. (5:0)\n\n  3 | let\n  4 |\n> 5 | function createOscillator() {\n    | ^\n  6 |   // create web audio api context\n  7 |   audioCtx = new (window.AudioContext || window.webkitAudioContext)();\n  8 |\n    at instantiate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:367:12)\n    at Parser.raise (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3678:19)\n    at Parser.checkReservedWord (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14285:12)\n    at Parser.parseIdentifierName (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14234:12)\n    at Parser.parseIdentifier (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14204:23)\n    at Parser.parseBindingAtom (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12073:17)\n    at Parser.parseVarId (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15553:20)\n    at Parser.parseVar (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15528:12)\n    at Parser.parseVarStatement (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15331:10)\n    at Parser.parseStatementContent (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14857:21)\n    at Parser.parseStatement (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14782:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15441:25)\n    at Parser.parseBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15432:10)\n    at Parser.parseProgram (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14700:10)\n    at Parser.parseTopLevel (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14687:25)\n    at Parser.parse (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16710:10)\n    at parse (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16762:38)\n    at parser (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at transform (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/transform.js:29:41)\n    at transform.next (<anonymous>)\n    at step (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/gensync/index.js:261:32)\n    at /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_3-5394a29f9b9575212af0.js.map