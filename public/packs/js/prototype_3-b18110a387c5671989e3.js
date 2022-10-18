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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/app/javascript/packs/prototype_3.js: Unexpected token (109:0)\n\n  107 |     }\n  108 |   })\n> 109 |\n      | ^\n    at instantiate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:367:12)\n    at JSXParserMixin.raise (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3678:19)\n    at JSXParserMixin.unexpected (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3716:16)\n    at JSXParserMixin.parseExprAtom (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13265:22)\n    at JSXParserMixin.parseExprAtom (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:8175:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12790:23)\n    at JSXParserMixin.parseUpdate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12769:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12739:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12530:61)\n    at JSXParserMixin.parseExprOps (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12537:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12507:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12459:21)\n    at JSXParserMixin.parseExpressionBase (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12395:23)\n    at /Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12389:39\n    at JSXParserMixin.allowInAnd (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14485:16)\n    at JSXParserMixin.parseExpression (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12389:17)\n    at JSXParserMixin.parseStatementContent (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14925:23)\n    at JSXParserMixin.parseStatement (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14782:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15441:25)\n    at JSXParserMixin.parseBlockBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15432:10)\n    at JSXParserMixin.parseBlock (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15416:10)\n    at JSXParserMixin.parseFunctionBody (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14090:24)\n    at JSXParserMixin.parseArrowExpression (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14061:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13560:12)\n    at JSXParserMixin.parseExprAtom (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13118:23)\n    at JSXParserMixin.parseExprAtom (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:8175:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12790:23)\n    at JSXParserMixin.parseUpdate (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12769:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/alicegurova/art-pactice/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12739:23)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_3-b18110a387c5671989e3.js.map