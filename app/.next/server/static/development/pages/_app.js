module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\_app.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../API_HOST.json":
/*!************************!*\
  !*** ../API_HOST.json ***!
  \************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = {};

/***/ }),

/***/ "../mock/labels/index.js":
/*!*******************************!*\
  !*** ../mock/labels/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accountSummary = {
  name: 'Investment Name',
  price: 'Latest Price',
  qty: 'Quantity',
  value: 'Value',
};

const labels = {
  accountSummary,
};

/* harmony default export */ __webpack_exports__["default"] = (labels);


/***/ }),

/***/ "../server/utils/proxyAgent.js":
/*!*************************************!*\
  !*** ../server/utils/proxyAgent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Agent = __webpack_require__(/*! agentkeepalive */ "agentkeepalive");

const keepAliveSettings = {
  maxSockets: +"100",
  keepAlive: true,
  maxFreeSockets: +"10",
  keepAliveMsecs: +"1000",
  timeout: +"15000",
  keepAliveTimeout: +"10000",
};

module.exports = {
  http: new Agent(keepAliveSettings),
  https: new Agent.HttpsAgent(keepAliveSettings),
};


/***/ }),

/***/ "./components/organisms/SignIn/SignIn.actions.js":
/*!*******************************************************!*\
  !*** ./components/organisms/SignIn/SignIn.actions.js ***!
  \*******************************************************/
/*! exports provided: checkUserValidAction, setUserValidAction, requestSignInAction, loadingIndicatorAction, setErrorsAction, updateLoginAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserValidAction", function() { return checkUserValidAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserValidAction", function() { return setUserValidAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSignInAction", function() { return requestSignInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingIndicatorAction", function() { return loadingIndicatorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorsAction", function() { return setErrorsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoginAction", function() { return updateLoginAction; });
/* harmony import */ var _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.constants */ "./components/organisms/SignIn/SignIn.constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./components/organisms/SignIn/types/index.js");


var checkUserValidAction = function checkUserValidAction(userID) {
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["VALIDATE_USER_NAME"],
    userID: userID
  };
};
var setUserValidAction = function setUserValidAction(response) {
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["VALIDATE_USER_NAME_SUCCESS"],
    response: response
  };
};
var requestSignInAction = function requestSignInAction(requestData) {
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_REQUEST"],
    requestData: requestData
  };
};
var loadingIndicatorAction = function loadingIndicatorAction(status) {
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["LOADING_INDICATOR_STATUS"],
    status: status
  };
};
var setErrorsAction = function setErrorsAction(error) {
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_ERRORS"],
    error: error
  };
};
var updateLoginAction = function updateLoginAction(identifier, value) {
  console.log(identifier, value);
  return {
    type: _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOGIN_FORM"],
    identifier: identifier,
    value: value
  };
};

/***/ }),

/***/ "./components/organisms/SignIn/SignIn.constants.js":
/*!*********************************************************!*\
  !*** ./components/organisms/SignIn/SignIn.constants.js ***!
  \*********************************************************/
/*! exports provided: SIGNIN_REQUEST, SIGNIN_ERRORS, VALIDATE_USER_NAME, VALIDATE_USER_NAME_SUCCESS, LOADING_INDICATOR_STATUS, UPDATE_LOGIN_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_REQUEST", function() { return SIGNIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_ERRORS", function() { return SIGNIN_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATE_USER_NAME", function() { return VALIDATE_USER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATE_USER_NAME_SUCCESS", function() { return VALIDATE_USER_NAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_INDICATOR_STATUS", function() { return LOADING_INDICATOR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOGIN_FORM", function() { return UPDATE_LOGIN_FORM; });
var SIGNIN_REQUEST = 'FIL/SIGNIN/SIGNIN_REQUEST';
var SIGNIN_ERRORS = 'FIL/SIGNIN/SIGNIN_ERRORS';
var VALIDATE_USER_NAME = 'FIL/SIGNIN/VALIDATE_USER_NAME';
var VALIDATE_USER_NAME_SUCCESS = 'FIL/SIGNIN/VALIDATE_USER_NAME_SUCCESS';
var LOADING_INDICATOR_STATUS = 'FIL/SIGNIN/LOADING_INDICATOR_STATUS';
var UPDATE_LOGIN_FORM = 'FIL/SIGNIN/UPDATE_LOGIN_FORM';

/***/ }),

/***/ "./components/organisms/SignIn/SignIn.reducer.js":
/*!*******************************************************!*\
  !*** ./components/organisms/SignIn/SignIn.reducer.js ***!
  \*******************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.constants */ "./components/organisms/SignIn/SignIn.constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  loginForm: {
    userName: '',
    password: ''
  }
};
/**
 * Method to capture error in case of action failure
 * @param state - State
 * @param action - Failure action
 * @return state - error along with current State
 */

var setErrors = function setErrors(state, _ref) {
  var error = _ref.error;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["updateState"])(state, {
    errorMessage: error
  });
};

var loadingIndicator = function loadingIndicator(state, _ref2) {
  var status = _ref2.status;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["updateState"])(state, {
    isLoaderActive: status
  });
};

var setUserValid = function setUserValid(state, _ref3) {
  var response = _ref3.response;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["updateState"])(state, {
    isUserValid: response
  });
};

var updateLogin = function updateLogin(state, action) {
  var newState = _objectSpread({}, state);

  newState.loginForm[action.identifier] = action.value;
  return newState;
};

var signIn = function signIn() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_ERRORS"]:
      return setErrors(state, action);

    case _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["LOADING_INDICATOR_STATUS"]:
      return loadingIndicator(state, action);

    case _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["VALIDATE_USER_NAME_SUCCESS"]:
      return setUserValid(state, action);

    case _SignIn_constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOGIN_FORM"]:
      return updateLogin(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (signIn);

/***/ }),

/***/ "./components/organisms/SignIn/SignIn.saga.js":
/*!****************************************************!*\
  !*** ./components/organisms/SignIn/SignIn.saga.js ***!
  \****************************************************/
/*! exports provided: validateUserSaga, userSignInSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUserSaga", function() { return validateUserSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignInSaga", function() { return userSignInSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignIn_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignIn.constants */ "./components/organisms/SignIn/SignIn.constants.js");
/* harmony import */ var _SignIn_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn.actions */ "./components/organisms/SignIn/SignIn.actions.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _constants_api_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/api/url */ "./constants/api/url.js");
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/actions */ "./global/actions/index.js");
/* harmony import */ var _app_locales_en_US__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/locales/en-US */ "./locales/en-US.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(validateUserSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSignInSaga);









function validateUserSaga(action) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function validateUserSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(true));

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setUserValidAction"])(false));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])({}));

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].fetch, _constants_api_url__WEBPACK_IMPORTED_MODULE_6__["default"].validateUsername);

        case 9:
          data = _context.sent;

          if (!(data.status.toLocaleUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_5__["STATUS_ERROR"])) {
            _context.next = 17;
            break;
          }

          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])(data.message));

        case 13:
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 15:
          _context.next = 22;
          break;

        case 17:
          if (!(data.status.toLocaleUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_5__["STATUS_SUCCESS"])) {
            _context.next = 22;
            break;
          }

          _context.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setUserValidAction"])(data.data[0].isUserExists));

        case 20:
          _context.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 22:
          _context.next = 30;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          _context.next = 28;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 28:
          _context.next = 30;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])(_app_locales_en_US__WEBPACK_IMPORTED_MODULE_8__["loginResponseError"]));

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 24]]);
}
function userSignInSaga(action) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSignInSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])({}));

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(true));

        case 5:
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].fetch, _constants_api_url__WEBPACK_IMPORTED_MODULE_6__["default"].login);

        case 7:
          data = _context2.sent;

          if (!(data.status.toUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_5__["STATUS_ERROR"])) {
            _context2.next = 17;
            break;
          }

          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_global_actions__WEBPACK_IMPORTED_MODULE_7__["setAuthenticationAction"])(false, {}));

        case 11:
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])(data.message));

        case 13:
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 15:
          _context2.next = 24;
          break;

        case 17:
          if (!(data.status.toUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_5__["STATUS_SUCCESS"])) {
            _context2.next = 24;
            break;
          }

          _context2.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_global_actions__WEBPACK_IMPORTED_MODULE_7__["setAuthenticationAction"])(true, data.data));

        case 20:
          _context2.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_global_actions__WEBPACK_IMPORTED_MODULE_7__["setUserStateAction"])(data.data));

        case 22:
          _context2.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 24:
          _context2.next = 32;
          break;

        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 30;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["loadingIndicatorAction"])(false));

        case 30:
          _context2.next = 32;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_SignIn_actions__WEBPACK_IMPORTED_MODULE_3__["setErrorsAction"])(_app_locales_en_US__WEBPACK_IMPORTED_MODULE_8__["loginResponseError"]));

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 26]]);
}

var signInSaga = function signInSaga() {
  return [Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_SignIn_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATE_USER_NAME"], validateUserSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_SignIn_constants__WEBPACK_IMPORTED_MODULE_2__["SIGNIN_REQUEST"], userSignInSaga)];
};

/* harmony default export */ __webpack_exports__["default"] = (signInSaga);

/***/ }),

/***/ "./components/organisms/SignIn/types/index.js":
/*!****************************************************!*\
  !*** ./components/organisms/SignIn/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignIn_SignIn_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SignIn/SignIn.constants */ "./components/organisms/SignIn/SignIn.constants.js");


/***/ }),

/***/ "./components/templates/LoginPage/LoginPage.action.js":
/*!************************************************************!*\
  !*** ./components/templates/LoginPage/LoginPage.action.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/templates/LoginPage/LoginPage.reducer.js":
/*!*************************************************************!*\
  !*** ./components/templates/LoginPage/LoginPage.reducer.js ***!
  \*************************************************************/
/*! exports provided: loginPageData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPageData", function() { return loginPageData; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

var loginPageData = function loginPageData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loginPageData: loginPageData
}));

/***/ }),

/***/ "./components/templates/LoginPage/LoginPage.saga.js":
/*!**********************************************************!*\
  !*** ./components/templates/LoginPage/LoginPage.saga.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInTemplateSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(SignInTemplateSaga);

/**
 * Sign In template Saga Watcher
 */
function SignInTemplateSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function SignInTemplateSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "./constants/api/services.js":
/*!***********************************!*\
  !*** ./constants/api/services.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  accountSummary: '/myaccount',
  userStatus: '/user/status',
  validateUsername: '/user/validate',
  login: '/user/login',
  labels: '/labels',
  home: '/home'
});

/***/ }),

/***/ "./constants/api/url.js":
/*!******************************!*\
  !*** ./constants/api/url.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./constants/api/services.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var genericUrls = {};

var API_URLS = _objectSpread({}, genericUrls, _services__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (API_URLS);

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: DESKTOP, PHONE, TABLET, MOBILE, STATIC_IMAGE, IMAGE_PLACEHOLDER, API_PROXY_PATH, API_URLS, ENV_DEVELOPMENT, ENV_PRODUCTION, KEY_ESCAPE, KEY_ENTER, KEY_TAB, KEY_SPACE, KEY_UP_CODE, KEY_LEFT_CODE, KEY_RIGHT_CODE, KEY_DOWN_CODE, API_ERROR_HANDLER_PAGE, STATUS_ERROR, STATUS_SUCCESS, RESPONSE_OK, RESPONSE_SERVER_ERROR, PRIMARY_THEME, BRAND_THEME, ROUTE_MAPPING_FOR_PAGE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESKTOP", function() { return DESKTOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE", function() { return PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLET", function() { return TABLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE", function() { return MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_IMAGE", function() { return STATIC_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PLACEHOLDER", function() { return IMAGE_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PROXY_PATH", function() { return API_PROXY_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URLS", function() { return API_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_DEVELOPMENT", function() { return ENV_DEVELOPMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_PRODUCTION", function() { return ENV_PRODUCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return KEY_ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return KEY_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return KEY_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_SPACE", function() { return KEY_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP_CODE", function() { return KEY_UP_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT_CODE", function() { return KEY_LEFT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT_CODE", function() { return KEY_RIGHT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN_CODE", function() { return KEY_DOWN_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ERROR_HANDLER_PAGE", function() { return API_ERROR_HANDLER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ERROR", function() { return STATUS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_SUCCESS", function() { return STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_OK", function() { return RESPONSE_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_SERVER_ERROR", function() { return RESPONSE_SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_THEME", function() { return PRIMARY_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_THEME", function() { return BRAND_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_MAPPING_FOR_PAGE_CONFIG", function() { return ROUTE_MAPPING_FOR_PAGE_CONFIG; });
// Devices
var DESKTOP = 'desktop';
var PHONE = 'phone';
var TABLET = 'tablet';
var MOBILE = 'mobile'; // Paths

var STATIC_IMAGE = '/static/images';
var IMAGE_PLACEHOLDER = '/static/images/image-placeholder.png';
var API_PROXY_PATH = '/api';
var API_URLS = '/api'; // Environments

var ENV_DEVELOPMENT = 'development';
var ENV_PRODUCTION = 'production'; // Key Codes

var KEY_ESCAPE = 27;
var KEY_ENTER = 13;
var KEY_TAB = 9;
var KEY_SPACE = 32;
var KEY_UP_CODE = 38;
var KEY_LEFT_CODE = 37;
var KEY_RIGHT_CODE = 39;
var KEY_DOWN_CODE = 40;
var API_ERROR_HANDLER_PAGE = '/error'; // HTTP Status

var STATUS_ERROR = 'ERROR';
var STATUS_SUCCESS = 'SUCCESS';
var RESPONSE_OK = 200;
var RESPONSE_SERVER_ERROR = 500; // Themes

var PRIMARY_THEME = 'PRIMARY_THEME';
var BRAND_THEME = 'BRAND_THEME'; // Mapping routes with page config

var ROUTE_MAPPING_FOR_PAGE_CONFIG = {
  login: '../components/templates/LoginPage/LoginPage.config.js'
};

/***/ }),

/***/ "./global/actions/index.js":
/*!*********************************!*\
  !*** ./global/actions/index.js ***!
  \*********************************/
/*! exports provided: globalDataFailureAction, checkAuthenticationAction, setAuthenticationAction, setUserStateAction, setLabelsAction, setLabelsErrorAction, pageActions, pageClientSideActions, default, serverActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDataFailureAction", function() { return globalDataFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticationAction", function() { return checkAuthenticationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticationAction", function() { return setAuthenticationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserStateAction", function() { return setUserStateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLabelsAction", function() { return setLabelsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLabelsErrorAction", function() { return setLabelsErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageActions", function() { return pageActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageClientSideActions", function() { return pageClientSideActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverActions", function() { return serverActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");

var globalDataFailureAction = function globalDataFailureAction(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_DATA_FAILURE"],
    error: error
  };
};
var checkAuthenticationAction = function checkAuthenticationAction() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHECK_AUTH"]
  };
};
var setAuthenticationAction = function setAuthenticationAction(isUserLoggedIn, sessionData) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHECK_AUTH_SUCCESS"],
    sessionInfo: {
      isUserLoggedIn: isUserLoggedIn,
      sessionData: sessionData
    }
  };
};
var setUserStateAction = function setUserStateAction(userState) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER_STATE"],
    userState: userState
  };
};
var setLabelsAction = function setLabelsAction(labels) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_SUCCESS"],
    labels: labels
  };
};
var setLabelsErrorAction = function setLabelsErrorAction(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_FAILURE"],
    error: error
  };
}; // Page-level actions go here

var pageActions = []; // Export client side global page-level actions.

var pageClientSideActions = [checkAuthenticationAction]; // All default actions go here

/* harmony default export */ __webpack_exports__["default"] = ([]);
var serverActions = {
  addDeviceType: function addDeviceType(deviceType) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["DEVICE_TYPE"],
      deviceType: deviceType
    };
  },
  addIsTablet: function addIsTablet(isTablet) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["IS_TABLET"],
      isTablet: isTablet
    };
  },
  setCurrentRoute: function setCurrentRoute(pathname) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["CURRENT_ROUTE"],
      pathname: pathname
    };
  },
  setPageUrl: function setPageUrl(pageUrl) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_URL"],
      pageUrl: pageUrl
    };
  },
  setPageQuery: function setPageQuery(pageQuery) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_QUERY"],
      pageQuery: pageQuery
    };
  },
  setPageOrigin: function setPageOrigin(origin) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_ORIGIN"],
      origin: origin
    };
  },
  getLables: function getLables() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS"]
    };
  }
};

/***/ }),

/***/ "./global/constants/index.js":
/*!***********************************!*\
  !*** ./global/constants/index.js ***!
  \***********************************/
/*! exports provided: DEVICE_TYPE, IS_TABLET, REGION_TYPE, CONFIG_KEYS, CURRENT_ROUTE, PAGE_URL, PAGE_QUERY, GLOBAL_DATA_FAILURE, CHECK_AUTH, CHECK_AUTH_SUCCESS, SET_USER_STATE, PAGE_ORIGIN, LABELS_STATE_KEY, USER_STATE_LOGGED_IN, USER_STATE_RECOGNIZED, USER_STATE_ANONYMOUS, GET_LABELS, GET_LABELS_SUCCESS, GET_LABELS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_TYPE", function() { return DEVICE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_TABLET", function() { return IS_TABLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_TYPE", function() { return REGION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_KEYS", function() { return CONFIG_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_ROUTE", function() { return CURRENT_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_URL", function() { return PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_QUERY", function() { return PAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_DATA_FAILURE", function() { return GLOBAL_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH", function() { return CHECK_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH_SUCCESS", function() { return CHECK_AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_STATE", function() { return SET_USER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ORIGIN", function() { return PAGE_ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABELS_STATE_KEY", function() { return LABELS_STATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_LOGGED_IN", function() { return USER_STATE_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_RECOGNIZED", function() { return USER_STATE_RECOGNIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_ANONYMOUS", function() { return USER_STATE_ANONYMOUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS", function() { return GET_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_SUCCESS", function() { return GET_LABELS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_FAILURE", function() { return GET_LABELS_FAILURE; });
/* TODO: Remove lint exception */

/* eslint-disable import/prefer-default-export */
var DEVICE_TYPE = 'DEVICE_TYPE';
var IS_TABLET = 'IS_TABLET';
var REGION_TYPE = 'REGION_TYPE';
var CONFIG_KEYS = 'CONFIG_KEYS';
var CURRENT_ROUTE = 'CURRENT_ROUTE';
var PAGE_URL = 'PAGE_URL';
var PAGE_QUERY = 'PAGE_QUERY';
var GLOBAL_DATA_FAILURE = 'FIL/GLOBAL/GLOBAL_DATA_FAILURE';
var CHECK_AUTH = 'FIL/GLOBAL/CHECK_AUTH';
var CHECK_AUTH_SUCCESS = 'FIL/GLOBAL/CHECK_AUTH_SUCCESS';
var SET_USER_STATE = 'FIL/GLOBAL/SET_USER_STATE';
var PAGE_ORIGIN = 'PAGE_ORIGIN';
var LABELS_STATE_KEY = 'labels';
var USER_STATE_LOGGED_IN = 'FIL/GLOBAL/SUCCESS';
var USER_STATE_RECOGNIZED = 'FIL/GLOBAL/RECOGNIZED';
var USER_STATE_ANONYMOUS = 'FIL/GLOBAL/ANONYMOUS';
var GET_LABELS = 'FIL/GLOBAL/GET_LABELS';
var GET_LABELS_SUCCESS = 'FIL/GLOBAL/GET_LABELS_SUCCESS';
var GET_LABELS_FAILURE = 'FIL/GLOBAL/GET_LABELS_FAILURE';

/***/ }),

/***/ "./global/reducer/globalData.js":
/*!**************************************!*\
  !*** ./global/reducer/globalData.js ***!
  \**************************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");



var initState = {
  deviceType: '',
  activeRegion: ''
};

var setDevice = function setDevice(state, _ref) {
  var deviceType = _ref.deviceType;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    deviceType: deviceType
  });
};

var setIsTablet = function setIsTablet(state, _ref2) {
  var isTablet = _ref2.isTablet;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    isTablet: isTablet
  });
};

var setConfigKeys = function setConfigKeys(state, _ref3) {
  var configKeys = _ref3.configKeys;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    configKeys: configKeys
  });
};

var setRegion = function setRegion(state, _ref4) {
  var activeRegion = _ref4.activeRegion;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    activeRegion: activeRegion
  });
};

var setPageUrl = function setPageUrl(state, _ref5) {
  var pageUrl = _ref5.pageUrl;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    pageUrl: pageUrl
  });
};

var setRoute = function setRoute(state, _ref6) {
  var pathname = _ref6.pathname;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    route: pathname
  });
};

var setPageQuery = function setPageQuery(state, _ref7) {
  var pageQuery = _ref7.pageQuery;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    pageQuery: pageQuery
  });
};

var setAuthentication = function setAuthentication(state, _ref8) {
  var sessionInfo = _ref8.sessionInfo;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    sessionInfo: sessionInfo
  });
};

var setUserState = function setUserState(state, _ref9) {
  var userState = _ref9.userState;
  if (userState === _constants__WEBPACK_IMPORTED_MODULE_1__["USER_STATE_LOGGED_IN"]) Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["setCookie"])('lastLogin', new Date());
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    userState: userState
  });
};

var setPageOrigin = function setPageOrigin(state, _ref10) {
  var origin = _ref10.origin;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateState"])(state, {
    pageOrigin: origin
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["DEVICE_TYPE"]:
      return setDevice(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["IS_TABLET"]:
      return setIsTablet(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["REGION_TYPE"]:
      return setRegion(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["CONFIG_KEYS"]:
      return setConfigKeys(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["CURRENT_ROUTE"]:
      return setRoute(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_URL"]:
      return setPageUrl(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_QUERY"]:
      return setPageQuery(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["CHECK_AUTH_SUCCESS"]:
      return setAuthentication(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_USER_STATE"]:
      return setUserState(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_ORIGIN"]:
      return setPageOrigin(state, action);

    default:
      return state;
  }
});

/***/ }),

/***/ "./global/reducer/index.js":
/*!*********************************!*\
  !*** ./global/reducer/index.js ***!
  \*********************************/
/*! exports provided: default, globalDataStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDataStructure", function() { return globalDataStructure; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalData */ "./global/reducer/globalData.js");
/* harmony import */ var _components_organisms_SignIn_SignIn_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/organisms/SignIn/SignIn.reducer */ "./components/organisms/SignIn/SignIn.reducer.js");
/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labels */ "./global/reducer/labels.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  globalData: _globalData__WEBPACK_IMPORTED_MODULE_1__["default"],
  signIn: _components_organisms_SignIn_SignIn_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  labels: _labels__WEBPACK_IMPORTED_MODULE_3__["default"]
}));
var globalDataStructure = [['global', 'globalData', 'deviceType']];

/***/ }),

/***/ "./global/reducer/labels.js":
/*!**********************************!*\
  !*** ./global/reducer/labels.js ***!
  \**********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");


var initState = {
  accountSummary: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_SUCCESS"]:
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["updateState"])(state, action.labels);

    default:
      return state;
  }
});

/***/ }),

/***/ "./global/saga/index.js":
/*!******************************!*\
  !*** ./global/saga/index.js ***!
  \******************************/
/*! exports provided: authenticationSaga, fetchLabels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationSaga", function() { return authenticationSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLabels", function() { return fetchLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return globalSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _constants_api_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api/url */ "./constants/api/url.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./global/actions/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _components_organisms_SignIn_SignIn_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/organisms/SignIn/SignIn.saga */ "./components/organisms/SignIn/SignIn.saga.js");
/* harmony import */ var _mock_labels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mock/labels */ "../mock/labels/index.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authenticationSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchLabels),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(globalSaga);









function authenticationSaga() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authenticationSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["default"].fetch, _constants_api_url__WEBPACK_IMPORTED_MODULE_3__["default"].userStatus);

        case 3:
          data = _context.sent;

          if (!(data.status.toUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_6__["STATUS_ERROR"])) {
            _context.next = 11;
            break;
          }

          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setAuthenticationAction"])(false, {}));

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["globalDataFailureAction"])(data));

        case 9:
          _context.next = 16;
          break;

        case 11:
          if (!(data.status.toUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_6__["STATUS_SUCCESS"])) {
            _context.next = 16;
            break;
          }

          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setAuthenticationAction"])(true, data.data));

        case 14:
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUserStateAction"])(data.data));

        case 16:
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          _context.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["globalDataFailureAction"])(_context.t0));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 18]]);
}
function fetchLabels(action) {
  var labels;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchLabels$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["default"].fetch, _constants_api_url__WEBPACK_IMPORTED_MODULE_3__["default"].labels, action);

        case 3:
          labels = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setLabelsAction"])(labels || _mock_labels__WEBPACK_IMPORTED_MODULE_8__["default"]));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setLabelsAction"])(_mock_labels__WEBPACK_IMPORTED_MODULE_8__["default"]));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}
function globalSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function globalSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_5__["CHECK_AUTH"], authenticationSaga), _toConsumableArray(Object(_components_organisms_SignIn_SignIn_saga__WEBPACK_IMPORTED_MODULE_7__["default"])()), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_5__["GET_LABELS"], fetchLabels)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),

/***/ "./lib/dynamicStore/checkStore.js":
/*!****************************************!*\
  !*** ./lib/dynamicStore/checkStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkStore; });
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/conformsTo */ "lodash/conformsTo");
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Validate the shape of redux store
 *  @param {Object} store The store to verify
 */

function checkStore(store) {
  var shape = {
    dispatch: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    subscribe: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    getState: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    replaceReducer: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    runSaga: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    injectedReducers: lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default.a,
    injectedSagas: lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default.a
  };
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0___default()(store, shape), "checkStore: Expected a valid redux store");
}

/***/ }),

/***/ "./lib/dynamicStore/configureStore.js":
/*!********************************************!*\
  !*** ./lib/dynamicStore/configureStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./lib/dynamicStore/reducers.js");
/* harmony import */ var _global_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/saga */ "./global/saga/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
var middlewares = [sagaMiddleware];
var enhancers = [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)]; // Choose compose method depending upon environment and platform

var composeEnhancers = "development" !== "production" && (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"] : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
/**
 * Create redux store with the middlewares and enhancers
 *
 * @param {Object} options
 * @param {Object} options.key - Unique key to recognize the page component
 * @param {Object} options.reducer - Reducers associated with the page commponent
 * @param {Object} options.saga - Sagas associated with the page commponent
 */

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  return function (BaseComponent) {
    var hasKey = !!options.key;
    console.log(options);
    if (!hasKey) throw new Error("".concat(BaseComponent.displayName, " needs to be passed with a key"));
    var hasReducer = !!options.reducer;
    var hasSaga = !!options.saga;
    var reducer = hasKey && hasReducer ? _defineProperty({}, options.key, options.reducer) : {};

    var configureStore = function configureStore() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('inside store');
      var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(reducer), initialState, composeEnhancers.apply(void 0, enhancers)); // Keep access to 'run' method of saga task in store so thats its available globally with store

      store.runSaga = sagaMiddleware.run; // Keep record of reducer injected in store associated with unique key

      store.injectedReducers = reducer;

      if (_global_saga__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        // Run global saga and keep the task returned by running saga to access later while cancelling
        store.globalSaga = {
          globalSaga: _global_saga__WEBPACK_IMPORTED_MODULE_5__["default"],
          task: store.runSaga(_global_saga__WEBPACK_IMPORTED_MODULE_5__["default"])
        };
      } // Keep record of saga injected in store associated with unique key


      store.injectedSagas = {};

      if (hasSaga) {
        // Run saga and keep the task returned by running saga to access later while cancelling
        store.injectedSagas[options.key] = _objectSpread({}, options.saga, {
          task: store.runSaga(options.saga)
        });
      }

      return store;
    };

    return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(BaseComponent);
  };
});

/***/ }),

/***/ "./lib/dynamicStore/constants.js":
/*!***************************************!*\
  !*** ./lib/dynamicStore/constants.js ***!
  \***************************************/
/*! exports provided: RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTART_ON_REMOUNT", function() { return RESTART_ON_REMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAEMON", function() { return DAEMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONCE_TILL_UNMOUNT", function() { return ONCE_TILL_UNMOUNT; });
var RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
var DAEMON = '@@saga-injector/daemon';
var ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

/***/ }),

/***/ "./lib/dynamicStore/enhance.js":
/*!*************************************!*\
  !*** ./lib/dynamicStore/enhance.js ***!
  \*************************************/
/*! exports provided: getWrapperComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWrapperComponent", function() { return getWrapperComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configureStore */ "./lib/dynamicStore/configureStore.js");
/* harmony import */ var _monitorSagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monitorSagas */ "./lib/dynamicStore/monitorSagas.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_logger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../global/actions */ "./global/actions/index.js");
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global/reducer */ "./global/reducer/index.js");
/* harmony import */ var _injectSagaAndReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./injectSagaAndReducer */ "./lib/dynamicStore/injectSagaAndReducer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Enhance is a one of the crucial utility methods that this framework provides.
 * All page level component need to be wrapped within this method.
 *
 * - "enhance" function is used here which creates a High Order Component over the provided
 * page level component and connects itself to a Redux store.
 * - It internally has the definition of the "getInitialProps" function which will synchronously
 * be called by Next.js which has access to store and request objects from server.
 * - The High Order Component which injects the global reducer and saga (if any) that are
 * associated with that page level component in its "getInitialProps" lifecycle hook.
 * - It also then waits for the page level sagas to yield. We have a "monitorSagas"
 * function which will wait till the done property of all running sagas are resolved/rejected.
 * - "enhance" function basically creates a High Order Component and connects it to the redux store
 * taking in "mapStateToProps" and "mapDispatchToProps".
 *
 * Details: [docs/PageLevelComponents_Enhance.md]
 */















var logger = _utils_logger__WEBPACK_IMPORTED_MODULE_9___default.a.getLogger(); // List of headers to be extracted before forwarding to the respective
// endpoints from the application

var headerExclusionList = ["host", "accept", "content-length", "content-type", "connection", "cookie"];
/**
 * Method to remove the headers present in the "headerExclusionList"
 *
 * @param {Object} requestHeaders Headers object received from the request
 */

var cleanupRequestHeaders = function cleanupRequestHeaders(requestHeaders) {
  if (!requestHeaders) {
    return null;
  }

  var requestHeadersCopy = Object.assign({}, requestHeaders);
  headerExclusionList.forEach(function (header) {
    delete requestHeadersCopy[header];
  }); // Alternative header for user agent

  requestHeadersCopy["x-ua-browser"] = requestHeaders["user-agent"];
  return requestHeadersCopy;
};

var getWrapperComponent = function getWrapperComponent(WrappedComponent, _ref) {
  var key = _ref.key,
      reducer = _ref.reducer,
      saga = _ref.saga,
      initialActions = _ref.initialActions,
      useQuery = _ref.useQuery,
      criticalState = _ref.criticalState,
      preExecuteGetInitialProps = _ref.preExecuteGetInitialProps;
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(WrapperComponent, _Component);

      function WrapperComponent() {
        _classCallCheck(this, WrapperComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(WrapperComponent).apply(this, arguments));
      }

      _createClass(WrapperComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var dispatch = this.props.store.dispatch;
          _global_actions__WEBPACK_IMPORTED_MODULE_11__["pageClientSideActions"].length && _global_actions__WEBPACK_IMPORTED_MODULE_11__["pageClientSideActions"].map(function (action) {
            dispatch(action());
          });
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, this.props);
        }
      }], [{
        key: "addRequestDetails",

        /**
         * Method to add the request details to the action object
         *
         * @param {Object} action Action object
         * @param {Object} requestDetails Request object of incoming request
         */
        value: function addRequestDetails(action, requestDetails) {
          return _objectSpread({}, action, {
            requestDetails: requestDetails
          });
        }
        /**
         * Method to validate if critical data required for the page is present based on which
         * page is rendered or user redirected to an error page
         *
         * @param {Object} storeStruct Structure of the critical data required for page
         * @param {Object} res Response object from incoming request for necessary redirects etc.
         * @param {Object} store Redux store of the application
         * @param {boolean} isServer Flag to indicate server/client
         */

      }, {
        key: "validatePageData",
        value: function validatePageData(storeStruct, res, store, isServer) {
          if (storeStruct && storeStruct.length > 0) {
            var currentState = store.getState();
            var missingDataList = [];

            _toConsumableArray(storeStruct).concat(_toConsumableArray(_global_reducer__WEBPACK_IMPORTED_MODULE_12__["globalDataStructure"])).forEach(function (requiredDataPath) {
              try {
                if (!lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(currentState, requiredDataPath)) {
                  missingDataList.push(requiredDataPath);
                }
              } catch (e) {
                missingDataList.push(requiredDataPath);
              }
            });

            if (missingDataList.length > 0) {
              logger.error("".concat(WrapperComponent.displayName, " - Component failed to receive critical data"), JSON.stringify(missingDataList));

              if (isServer) {
                res.redirect(_constants__WEBPACK_IMPORTED_MODULE_10__["API_ERROR_HANDLER_PAGE"]);
              } else {
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(_constants__WEBPACK_IMPORTED_MODULE_10__["API_ERROR_HANDLER_PAGE"]);
              }
            }
          }
        }
        /**
         * Method to dispatch all page level actions provided to the "enhance" method
         *
         * @param {Array} param.actions Array of action objects at page level
         * @param {Object} param.store Redux store object
         * @param {boolean} param.needQuery Flag to indicate if the actions need the query params
         * @param {Object} param.query Query params of the incoming request
         * @param {Object} param.requestDetails Object containing details of incoming request
         */

      }, {
        key: "dispatchActions",
        value: function dispatchActions(_ref2) {
          var actions = _ref2.actions,
              store = _ref2.store,
              needQuery = _ref2.needQuery,
              query = _ref2.query,
              requestDetails = _ref2.requestDetails;
          actions.map(function (action) {
            return store.dispatch(typeof action === "function" ? WrapperComponent.addRequestDetails(action(needQuery ? query : undefined), requestDetails) : WrapperComponent.addRequestDetails({
              type: action,
              query: needQuery ? query : undefined
            }, requestDetails));
          });
        }
      }, {
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var initialParams,
                store,
                isServer,
                req,
                query,
                res,
                pathname,
                asPath,
                requestDetails,
                clientParams,
                deviceType,
                isTablet,
                combinedPageActions,
                _args = arguments;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    initialParams = _args.length <= 0 ? undefined : _args[0];
                    console.log('Inside GIP of enhance');
                    store = initialParams.store, isServer = initialParams.isServer, req = initialParams.req, query = initialParams.query, res = initialParams.res, pathname = initialParams.pathname, asPath = initialParams.asPath;
                    Object(_injectSagaAndReducer__WEBPACK_IMPORTED_MODULE_13__["default"])(key, store, saga, reducer);
                    store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].setCurrentRoute(pathname));
                    clientParams = {};

                    if (isServer) {
                      deviceType = req.device.type === _constants__WEBPACK_IMPORTED_MODULE_10__["PHONE"] ? _constants__WEBPACK_IMPORTED_MODULE_10__["MOBILE"] : _constants__WEBPACK_IMPORTED_MODULE_10__["DESKTOP"];
                      isTablet = req.device.type === _constants__WEBPACK_IMPORTED_MODULE_10__["TABLET"];
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].addIsTablet(isTablet));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].addDeviceType(deviceType));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].setPageUrl(req.url));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].setPageQuery(_objectSpread({}, req.query, query)));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].setPageOrigin("".concat(req.protocol, "://").concat(req.headers.host)));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].getLables());
                      requestDetails = {
                        deviceType: deviceType,
                        cookies: req.cookies.cookieList,
                        logger: req.perfLogger,
                        whitelistedHeaders: cleanupRequestHeaders(req.headers)
                      };
                    } else {
                      clientParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["parseQueryParams"])(asPath);
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_11__["serverActions"].setPageQuery(clientParams));
                      requestDetails = {
                        deviceType: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(store.getState(), ["global", "globalData", "deviceType"])
                      };
                    }

                    if (!(preExecuteGetInitialProps && WrappedComponent.getInitialProps)) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 10;
                    return WrappedComponent.getInitialProps.apply(WrappedComponent, _args);

                  case 10:
                    if (isServer && _global_actions__WEBPACK_IMPORTED_MODULE_11__["default"] instanceof Array) {
                      WrapperComponent.dispatchActions({
                        actions: _global_actions__WEBPACK_IMPORTED_MODULE_11__["default"],
                        store: store,
                        needQuery: useQuery,
                        query: query,
                        requestDetails: requestDetails
                      });
                    }

                    combinedPageActions = initialActions instanceof Array ? _toConsumableArray(_global_actions__WEBPACK_IMPORTED_MODULE_11__["pageActions"]).concat(_toConsumableArray(initialActions)) : _toConsumableArray(_global_actions__WEBPACK_IMPORTED_MODULE_11__["pageActions"]);
                    WrapperComponent.dispatchActions({
                      actions: combinedPageActions,
                      store: store,
                      needQuery: useQuery,
                      query: _objectSpread({}, query, clientParams),
                      requestDetails: requestDetails
                    }); // Wait till all sagas are done

                    _context.next = 15;
                    return Object(_monitorSagas__WEBPACK_IMPORTED_MODULE_8__["default"])(store, isServer);

                  case 15:
                    WrapperComponent.validatePageData(criticalState, res, store, isServer);

                    if (!(!preExecuteGetInitialProps && WrappedComponent.getInitialProps)) {
                      _context.next = 19;
                      break;
                    }

                    _context.next = 19;
                    return WrappedComponent.getInitialProps.apply(WrappedComponent, _args);

                  case 19:
                    return _context.abrupt("return", {
                      isServer: isServer
                    });

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps() {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return WrapperComponent;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
  );
};
/**
 * Create a high order component to initialize store with reducers and sagas
 * for the page level component
 *
 * @param {Object} WrappedComponent Page level component to be wrapped with HOC
 * @param {Object} config Configuration
 * @param {function} config.mapStateToProps Map properties from state to props
 * @param {function} config.mapDispatchToProps Map dispatch method for the component
 * @param {string} config.key Unique key identifying the page level component and
 * hence its saga and reducer
 * @param {Objext} config.reducer Root reducer for the given page level component
 * @param {Objext} config.saga Root saga for the given page level component
 */

/* harmony default export */ __webpack_exports__["default"] = (function (WrappedComponent, _ref3) {
  var mapStateToProps = _ref3.mapStateToProps,
      mapDispatchToProps = _ref3.mapDispatchToProps,
      key = _ref3.key,
      reducer = _ref3.reducer,
      saga = _ref3.saga,
      initialActions = _ref3.initialActions,
      useQuery = _ref3.useQuery,
      criticalState = _ref3.criticalState;
  var WrapperComponent = getWrapperComponent(WrappedComponent, {
    key: key,
    reducer: reducer,
    saga: saga,
    initialActions: initialActions,
    useQuery: useQuery,
    criticalState: criticalState
  }); // Move all non react specific static properties from WrappedComponent to WrapperComponent

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(WrapperComponent, WrappedComponent, {
    getInitialProps: true
  }); // Give a unique identifier to the new high horder component

  WrapperComponent.displayName = "enhanced(".concat(WrappedComponent.displayName || WrappedComponent.name || "Component", ")");
  var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps);
  var withRedux = Object(_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"])({
    key: key,
    reducer: reducer,
    saga: saga
  });
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(withRedux, withConnect)(WrapperComponent);
});

/***/ }),

/***/ "./lib/dynamicStore/injectSagaAndReducer.js":
/*!**************************************************!*\
  !*** ./lib/dynamicStore/injectSagaAndReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "lodash/each");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sagaInjectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagaInjectors */ "./lib/dynamicStore/sagaInjectors.js");
/* harmony import */ var _reducerInjectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducerInjectors */ "./lib/dynamicStore/reducerInjectors.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






/* harmony default export */ __webpack_exports__["default"] = (function (key, store, saga, reducer) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_1___default()(key), "injectSagaAndReducer.js: Expected \"key\" to be a string, found it to be ".concat(_typeof(key)));

  var _getReducerInjectors = Object(_reducerInjectors__WEBPACK_IMPORTED_MODULE_4__["default"])(store),
      injectReducer = _getReducerInjectors.injectReducer;

  var _getSagaInjectors = Object(_sagaInjectors__WEBPACK_IMPORTED_MODULE_3__["default"])(store),
      injectSaga = _getSagaInjectors.injectSaga,
      ejectSaga = _getSagaInjectors.ejectSaga;

  lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(store.injectedSagas, function (sagas, sagaName) {
    ejectSaga(sagaName); // eslint-disable-next-line no-param-reassign

    delete store.injectedSagas[sagaName];
  });
  if (reducer) injectReducer(key, reducer);
  if (saga) injectSaga(key, {
    saga: saga
  });
});

/***/ }),

/***/ "./lib/dynamicStore/monitorSagas.js":
/*!******************************************!*\
  !*** ./lib/dynamicStore/monitorSagas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return monitorSagas; });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "lodash/each");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagaInjectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagaInjectors */ "./lib/dynamicStore/sagaInjectors.js");



/**
 * @function monitorSagas - Wait till all sagas have been done
 * @param {Object} store
 * @returns {Promise}
 */

function monitorSagas(store, isServer) {
  var shouldDispatchEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var allTasks = [store.globalSaga.task];
  if (shouldDispatchEnd) store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(store.injectedSagas, function (saga) {
    allTasks.push(saga.task);
  });
  return Promise.all(allTasks.map(function (t) {
    return t.done;
  })).then(function () {
    if (!isServer && shouldDispatchEnd) {
      var _getSagaInjectors = Object(_sagaInjectors__WEBPACK_IMPORTED_MODULE_2__["default"])(store),
          injectSaga = _getSagaInjectors.injectSaga;

      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(store.injectedSagas, function (descriptor, key) {
        var saga = descriptor.saga;
        injectSaga(key, {
          saga: saga
        });
      });
      store.runSaga(store.globalSaga.globalSaga);
    }
  });
}

/***/ }),

/***/ "./lib/dynamicStore/reducerInjectors.js":
/*!**********************************************!*\
  !*** ./lib/dynamicStore/reducerInjectors.js ***!
  \**********************************************/
/*! exports provided: injectReducerFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReducerFactory", function() { return injectReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInjectors; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkStore */ "./lib/dynamicStore/checkStore.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./lib/dynamicStore/reducers.js");






/**
 * @function injectReducerFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */

function injectReducerFactory(store, isValid) {
  /**
   * @function injectReducer
   * @param {string} key - Unique key saga
   * @param {Object} reducer
   */
  function injectReducer(key, reducer) {
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_4__["default"])(store);
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(key) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(key) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(reducer), 'reducerInjector.js: Expected `reducer` to be a reducer function'); // Check `store.injectedReducers[key] === reducer` for hot
    // reloading when a key is the same but a reducer is different

    if (Object.prototype.hasOwnProperty.call(store.injectedReducers, key) && store.injectedReducers[key] === reducer) {
      return;
    }

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign

    store.replaceReducer(Object(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"])(store.injectedReducers));
  }

  return injectReducer;
}
/**
 * @typedef {Object} ReducerInjectors
 * @property {function} injectReducer
 * @property {function} ejectSaga
 */

/**
 * @function getInjectors
 * @param {Object} store
 * @returns {ReducerInjectors}
 */

function getInjectors(store) {
  Object(_checkStore__WEBPACK_IMPORTED_MODULE_4__["default"])(store);
  return {
    injectReducer: injectReducerFactory(store, true)
  };
}

/***/ }),

/***/ "./lib/dynamicStore/reducers.js":
/*!**************************************!*\
  !*** ./lib/dynamicStore/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/reducer */ "./global/reducer/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @function createReducer - Combine reducer for given page level component with global ones
 * @param {Object} injectedReducers
 * @returns {function}
 */

function createReducer(injectedReducers) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({
    global: _global_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, injectedReducers));
}

/***/ }),

/***/ "./lib/dynamicStore/sagaInjectors.js":
/*!*******************************************!*\
  !*** ./lib/dynamicStore/sagaInjectors.js ***!
  \*******************************************/
/*! exports provided: injectSagaFactory, ejectSagaFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectSagaFactory", function() { return injectSagaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ejectSagaFactory", function() { return ejectSagaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInjectors; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/conformsTo */ "lodash/conformsTo");
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkStore */ "./lib/dynamicStore/checkStore.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./lib/dynamicStore/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var allowedModes = [_constants__WEBPACK_IMPORTED_MODULE_6__["RESTART_ON_REMOUNT"], _constants__WEBPACK_IMPORTED_MODULE_6__["DAEMON"], _constants__WEBPACK_IMPORTED_MODULE_6__["ONCE_TILL_UNMOUNT"]];
/**
 * Check if key is empty
 * @param {string} key
 */

var checkKey = function checkKey(key) {
  return invariant__WEBPACK_IMPORTED_MODULE_3___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(key) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(key), 'sagaInjector.js : Expected `key` to be a non empty string');
};
/**
 * Check if the saga is a function and the mode for that saga is the ones from allowedModes
 * @param {Object} descriptor
 * @param {function} descriptor.saga - The saga to be verified
 * @param {string} descriptor.mode - The mode passed for the given saga
 */


var checkDescriptor = function checkDescriptor(descriptor) {
  var shape = {
    saga: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    mode: function mode(_mode) {
      return lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(_mode) && allowedModes.indexOf(_mode) > -1;
    }
  };
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_4___default()(descriptor, shape), 'sagaInjector.js : Expected a valid saga descriptor');
};
/**
 * @function injectSagaFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */


function injectSagaFactory(store, isValid) {
  /**
   * @function injectSaga
   * @param {string} key - Unique key saga
   * @param {Object} descriptor
   * @param {Object} descriptor.saga
   * @param {string} descriptor.mode
   * @param {Object} args
   */
  function injectSaga(key) {
    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var args = arguments.length > 2 ? arguments[2] : undefined;
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_5__["default"])(store); // if mode is not present then default is RESTART_ON_REMOUNT

    var newDescriptor = _objectSpread({}, descriptor, {
      mode: descriptor.mode || _constants__WEBPACK_IMPORTED_MODULE_6__["RESTART_ON_REMOUNT"]
    });

    var saga = newDescriptor.saga,
        mode = newDescriptor.mode;
    checkKey(key);
    checkDescriptor(newDescriptor);
    var hasSaga = Object.prototype.hasOwnProperty.call(store.injectedSagas, key); // When the environment is development then we need to cancel daemon and once-till-unmount sagas

    if (true) {
      var oldDescriptor = store.injectedSagas[key]; // enable hot reloading of daemon and once-till-unmount sagas

      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga || hasSaga && mode !== _constants__WEBPACK_IMPORTED_MODULE_6__["DAEMON"] && mode !== _constants__WEBPACK_IMPORTED_MODULE_6__["ONCE_TILL_UNMOUNT"]) {
      // eslint-disable-next-line no-param-reassign
      store.injectedSagas[key] = _objectSpread({}, newDescriptor, {
        task: store.runSaga(saga, args)
      });
    }
  }

  return injectSaga;
}
/**
 * @function ejectSagaFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */

function ejectSagaFactory(store, isValid) {
  /**
   * @function ejectSaga
   * @param {string} key - Unique key saga
   */
  function ejectSaga(key) {
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_5__["default"])(store);
    checkKey(key);

    if (Object.prototype.hasOwnProperty.call(store.injectedSagas, key)) {
      var descriptor = store.injectedSagas[key]; // We do not cancel Daemon tasks

      if (descriptor.mode !== _constants__WEBPACK_IMPORTED_MODULE_6__["DAEMON"]) {
        descriptor.task.cancel(); // Clean up in production; in development we need `descriptor.saga` for hot reloading

        if (false) {}
      }
    }
  }

  return ejectSaga;
}
/**
 * @typedef {Object} SagaInjectors
 * @property {function} injectSaga
 * @property {function} ejectSaga
 */

/**
 * @function getInjectors
 * @param {Object} store
 * @returns {SagaInjectors}
 */

function getInjectors(store) {
  Object(_checkStore__WEBPACK_IMPORTED_MODULE_5__["default"])(store);
  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true)
  };
}

/***/ }),

/***/ "./locales/en-US.js":
/*!**************************!*\
  !*** ./locales/en-US.js ***!
  \**************************/
/*! exports provided: fidelity, signIn, signOut, myAccount, skipNavigation, PersonalInvesting, PersonalInvestingContactNo, loginPageLabels, myAccountPageLables, loginResponseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fidelity", function() { return fidelity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAccount", function() { return myAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipNavigation", function() { return skipNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInvesting", function() { return PersonalInvesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInvestingContactNo", function() { return PersonalInvestingContactNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPageLabels", function() { return loginPageLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAccountPageLables", function() { return myAccountPageLables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginResponseError", function() { return loginResponseError; });
var fidelity = "Finnair";
var signIn = "Sign in";
var signOut = "SIGN OUT";
var myAccount = "My Account";
var skipNavigation = "Skip Navigation";
var PersonalInvesting = "CUSTOMER CARE";
var PersonalInvestingContactNo = "+358 9 818 0800"; // Login Page Labels

var loginPageLabels = {
  loginPageTitleText: "Log in | Fidelity International",
  mandatoryFieldError: "This is a mandatory field.",
  userNameInvalidError: "",
  signInHeading: "Log in to your Finnair Plus account",
  signInButtonTxt: "Log in",
  signInHelpText: "Having trouble logging in?",
  viewSupportPage: "View our Help & support page.",
  userNameLabel: "Username",
  passwordLabel: "Password",
  forgotUserName: "Forgot your username?",
  userNameCrnInfoMessage: "If you have previously chosen a username then please use that, as your CRN will no longer work.",
  rememberMeText: "Remember my username on this computer",
  next: "Next",
  registrationInfoMessage: "Have a Finnair account, but don't have online access to it?",
  registerForOnlineAccess: "Not yet a member? Join the Finnair Corporate Programme",
  importantInformation: "Important information: ",
  importantInformationDetails: "You can also find us on Twitter. If you have any questions or comments please tweet us about it and we’ll do our best to help. Here you’ll also find the latest news and information concerning flights. Tweet you soon!",
  clientTerms: "Client terms",
  securityAndPrivacy: "Security & Privacy",
  accessibility: "Accessibility",
  cookiePolicy: "Cookie Policy",
  importantLegalInformation: "Important Legal Information",
  copyRight: "© FIL Limited 2018"
};
var myAccountPageLables = {};
var loginResponseError = "";

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_dynamicStore_enhance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/dynamicStore/enhance */ "./lib/dynamicStore/enhance.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_templates_LoginPage_LoginPage_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/templates/LoginPage/LoginPage.reducer */ "./components/templates/LoginPage/LoginPage.reducer.js");
/* harmony import */ var _components_templates_LoginPage_LoginPage_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/templates/LoginPage/LoginPage.saga */ "./components/templates/LoginPage/LoginPage.saga.js");
/* harmony import */ var _components_templates_LoginPage_LoginPage_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/templates/LoginPage/LoginPage.action */ "./components/templates/LoginPage/LoginPage.action.js");
/* harmony import */ var _components_templates_LoginPage_LoginPage_action__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_templates_LoginPage_LoginPage_action__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _global_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global/saga */ "./global/saga/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _lib_dynamicStore_configureStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/dynamicStore/configureStore */ "./lib/dynamicStore/configureStore.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }














 // my imports




var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_7___default()();

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: get(state, ["global"]),
    deviceType: get(state, ["global", "globalData", "deviceType"]),
    activeBrand: get(state, ["global", "globalData", "activeBrand"]),
    isUserLoggedIn: get(state, ["global", "globalData", "sessionInfo", "isUserLoggedIn"])
  };
};
/* istanbul ignore next */


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, _toConsumableArray(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, _toConsumableArray(middleware));
}; // function configureStore(initialState = {}) {
//   const store = createStore(rootReducer);
//   // store.runSagaTask = () => {
//   //   store.sagaTask = sagaMiddleware.run(rootSaga);
//   // };
//   // store.runSagaTask();
//   return store;
// }


var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store,
          pageConfig = _this$props.pageConfig,
          NewCompp = _this$props.NewCompp;
      console.log('NewCompp is : ---------------------------------------- ', pageProps);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NewCompp, this.props)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, routes, ctx, pageProps, _ctx, pathname, pageConfig, pathValue, withRedux, withConnect, NewCompp, store;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, routes = _ref.routes, ctx = _ref.ctx;
                pageProps = {};
                _ctx = ctx, pathname = _ctx.pathname;
                pathname = pathname.split('/')[1];
                pathValue = _constants__WEBPACK_IMPORTED_MODULE_14__["ROUTE_MAPPING_FOR_PAGE_CONFIG"][pathname];
                _context.next = 7;
                return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/templates/LoginPage/LoginPage.config.js */ "./components/templates/LoginPage/LoginPage.config.js"));

              case 7:
                pageConfig = _context.sent;
                withRedux = Object(_lib_dynamicStore_configureStore__WEBPACK_IMPORTED_MODULE_15__["default"])({
                  key: pageConfig.default.key,
                  reducer: pageConfig.default.reducer,
                  saga: pageConfig.default.saga
                });
                withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(pageConfig.mapStateToProps, pageConfig.mapDispatchToProps);
                console.log('getIniti" ' + Component.displayName);
                NewCompp = Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(withRedux, withConnect)(Component);
                store = this.configureStore({}, pageConfig);
                ctx = _objectSpread({}, ctx, {
                  store: store,
                  NewCompp: NewCompp
                });

                if (!Component.getInitialProps) {
                  _context.next = 18;
                  break;
                }

                _context.next = 17;
                return Component.getInitialProps(ctx);

              case 17:
                pageProps = _context.sent;

              case 18:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  pageConfig: pageConfig
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }, {
    key: "configureStore",
    value: function configureStore() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var pageConfig = arguments.length > 1 ? arguments[1] : undefined;

      if (pageConfig) {
        var reducer = pageConfig.reducer || _components_templates_LoginPage_LoginPage_reducer__WEBPACK_IMPORTED_MODULE_10__["default"];
        var saga = pageConfig.saga || _components_templates_LoginPage_LoginPage_saga__WEBPACK_IMPORTED_MODULE_11__["default"];
        var key = pageConfig.key || 'login';
      }

      var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_components_templates_LoginPage_LoginPage_reducer__WEBPACK_IMPORTED_MODULE_10__["default"], initialState, bindMiddleware([sagaMiddleware]));
      store.runSaga = sagaMiddleware.run;
      store.injectedReducers = _components_templates_LoginPage_LoginPage_reducer__WEBPACK_IMPORTED_MODULE_10__["default"];

      store.runSagaTask = function () {
        store.sagaTask = sagaMiddleware.run(_components_templates_LoginPage_LoginPage_saga__WEBPACK_IMPORTED_MODULE_11__["default"]);
      };

      store.injectedSagas = {};

      if (_global_saga__WEBPACK_IMPORTED_MODULE_13__["default"]) {
        store.globalSaga = {
          globalSaga: _global_saga__WEBPACK_IMPORTED_MODULE_13__["default"],
          task: store.runSaga(_global_saga__WEBPACK_IMPORTED_MODULE_13__["default"])
        };
      }

      store.injectedSagas[key] = _objectSpread({}, saga, {
        task: store.runSaga(_components_templates_LoginPage_LoginPage_saga__WEBPACK_IMPORTED_MODULE_11__["default"])
      });
      store.runSagaTask();
      return store;
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(MyApp.configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp)));

/***/ }),

/***/ "./utils/cacheableServices.js":
/*!************************************!*\
  !*** ./utils/cacheableServices.js ***!
  \************************************/
/*! exports provided: CACHEABLE_SERVICES_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHEABLE_SERVICES_LIST", function() { return CACHEABLE_SERVICES_LIST; });
/* harmony import */ var _servicesCache_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicesCache.config */ "./utils/servicesCache.config.js");
 // Array for quick loop if the service is cacheable

/* eslint-disable-next-line import/prefer-default-export */

var CACHEABLE_SERVICES_LIST = _servicesCache_config__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (service) {
  return service.url;
});

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/utils/proxyAgent */ "../server/utils/proxyAgent.js");
/* harmony import */ var _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_logger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _cacheableServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cacheableServices */ "./utils/cacheableServices.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_HOSTS = __webpack_require__(/*! ../../API_HOST */ "../API_HOST.json").environment;

var logger = _utils_logger__WEBPACK_IMPORTED_MODULE_5___default.a.getLogger();
es6_promise__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();

var ServiceUtils =
/*#__PURE__*/
function () {
  function ServiceUtils() {
    var _this = this;

    _classCallCheck(this, ServiceUtils);

    _defineProperty(this, "fetch",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, actionObject, additionalFetchOptions) {
        var headers, fetchUrl, start, perfLogger, response, responseData, isCacheableService, apiTimeout, isClient, cachedResponse, reqOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = {};
                start = Date.now();
                response = {};
                isCacheableService = _cacheableServices__WEBPACK_IMPORTED_MODULE_7__["CACHEABLE_SERVICES_LIST"].indexOf(url.split('?')[0]) !== -1 && publicRuntimeConfig.isCachingEnabled;
                apiTimeout = +"15000";
                isClient = typeof window !== 'undefined';

                if (!isClient) {
                  _context.next = 10;
                  break;
                }

                // Client-side call
                fetchUrl = ServiceUtils.appendParams("".concat(_this.clientPathPrefix).concat(url));
                _context.next = 28;
                break;

              case 10:
                if (actionObject && actionObject.type) {
                  _context.next = 14;
                  break;
                }

                throw new Error("Oh oh, maybe you forgot adding your action object to your fetch in your saga with url ".concat(url, "?"));

              case 14:
                // Server-side call with proper action object from initial actions
                headers = {
                  // Cookie: actionObject.requestDetails.cookies || '',
                  'secret-key': '$2a$10$f43a7fmsIv/2DNbFTzfiyeGv1mORmjYNbTqqCM.BJ/JuaIxFHZ.Ou' // ...actionObject.requestDetails.whitelistedHeaders,

                };
                perfLogger = actionObject.requestDetails.logger;
                fetchUrl = "".concat(_this.serverPathPrefix).concat(url);
                _context.prev = 17;

                if (!isCacheableService) {
                  _context.next = 23;
                  break;
                }

                cachedResponse = global.servicesCache.get("".concat(fetchUrl));

                if (!(cachedResponse !== null)) {
                  _context.next = 23;
                  break;
                }

                perfLogger.log('error', "[PERFLOG] [CACHE: HIT] URL: ".concat(fetchUrl, " Elapsed Time: ").concat(Date.now() - start, "ms"));
                return _context.abrupt("return", cachedResponse);

              case 23:
                _context.next = 28;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](17);
                logger.error("[CACHE] Failed to fetch from cache: ".concat(fetchUrl), _context.t0);

              case 28:
                // Request options in axios format
                reqOptions = _objectSpread({
                  url: fetchUrl,
                  headers: headers,
                  timeout: apiTimeout,
                  withCredentials: true
                }, additionalFetchOptions); // Add https agent for requests that start with https protocol in url

                if (fetchUrl.startsWith('https')) {
                  reqOptions.agent = _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_4___default.a.https;
                }

                _context.prev = 30;
                _context.next = 33;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()(reqOptions);

              case 33:
                response = _context.sent;
                responseData = response.data;
                _context.next = 40;
                break;

              case 37:
                _context.prev = 37;
                _context.t1 = _context["catch"](30);
                responseData = {
                  status: _constants__WEBPACK_IMPORTED_MODULE_6__["RESPONSE_SERVER_ERROR"],
                  error: _context.t1.message
                };

              case 40:
                try {
                  if (!isClient && response.status === _constants__WEBPACK_IMPORTED_MODULE_6__["RESPONSE_OK"] && isCacheableService) {
                    global.servicesCache.put( // Cache in the form "service_cache:<url>"
                    "".concat(fetchUrl), // Cacheable response data
                    responseData);
                  }
                } catch (err) {
                  logger.error("[CACHE] Failed to cache: ".concat(fetchUrl), err);
                }

                if (perfLogger) {
                  perfLogger.log('error', "[PERFLOG] [SERVICE] ".concat(isCacheableService ? '[CACHE: MISS]' : '', " Status: ").concat(response.status, " Method: ").concat(reqOptions.method || 'GET', " URL: ").concat(fetchUrl, " Elapsed Time: ").concat(Date.now() - start, "ms"));
                }

                return _context.abrupt("return", responseData);

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 25], [30, 37]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    this.envApiKey = process.env.ENV_API_KEY || '';
    this.environment = "development" || _constants__WEBPACK_IMPORTED_MODULE_6__["ENV_DEVELOPMENT"];
    this.clientPathPrefix = "/api" || '';
    this.serverPathPrefix = "http://127.0.0.1:9876" || '';
    this.currentDevice = _constants__WEBPACK_IMPORTED_MODULE_6__["DESKTOP"];
    /**
     * Condition checks:
     * 1. API hosts map is available on the root
     * 2. environment variable defined for <host_datacenter>
     * 3. <host_datacenter> entry available in hosts file
     */

    if (typeof API_HOSTS !== 'undefined' && this.envApiKey && typeof API_HOSTS[this.envApiKey] !== 'undefined') {
      this.serverPathPrefix = API_HOSTS[this.envApiKey];
    }
  }

  _createClass(ServiceUtils, [{
    key: "setDeviceType",
    value: function setDeviceType(device) {
      this.currentDevice = device;
    }
  }, {
    key: "getServerPathPrefix",
    value: function getServerPathPrefix() {
      return this.serverPathPrefix;
    }
  }], [{
    key: "appendParams",
    value: function appendParams(url, requestData) {
      var appendedURL = url;

      if (requestData) {
        if (url.indexOf('?') < 0) appendedURL = url.concat('?');
        appendedURL = appendedURL.concat("device=".concat(requestData.deviceType));
      }

      return appendedURL;
    }
  }]);

  return ServiceUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ServiceUtils());

/***/ }),

/***/ "./utils/logger.js":
/*!*************************!*\
  !*** ./utils/logger.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LoggerClass = __webpack_require__(/*! ./loggerFactory */ "./utils/loggerFactory.js");

module.exports = new LoggerClass();

/***/ }),

/***/ "./utils/loggerFactory.js":
/*!********************************!*\
  !*** ./utils/loggerFactory.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/no-mutable-exports, class-methods-use-this */
var LoggerClass;

if (false) {} else {
  /* eslint-disable global-require */
  var os = __webpack_require__(/*! os */ "os");

  var Winston = __webpack_require__(/*! winston */ "winston");

  var _require = __webpack_require__(/*! winston-logrotate */ "winston-logrotate"),
      Rotate = _require.Rotate;
  /* eslint-enable global-require */

  /**
   * Logger class to fetch instances for logging with custom formatting enabled
   */


  LoggerClass =
  /*#__PURE__*/
  function () {
    function Logger() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$fileName = _ref.fileName,
          fileName = _ref$fileName === void 0 ? "logs/error.log" : _ref$fileName;

      _classCallCheck(this, Logger);

      this.fileName = fileName;
      this.logPrefix = this.getLogPrefix();
    }
    /**
     * Get the prefix for the log statement containing the log
     * prefix from environment (if available) and the hostname
     *
     * @returns {String} Prefix for the logging statement
     */


    _createClass(Logger, [{
      key: "getLogPrefix",
      value: function getLogPrefix() {
        var hostName = os.hostname().toUpperCase();
        var logPrefix = process.env.LOG_PREFIX || "DEFAULT_PREFIX";
        return "".concat(logPrefix, "|").concat(hostName);
      }
      /**
       * Get the request identifier string for the log statement
       * consisting of the session id and the request id
       *
       * @param {Object} requestIdentifiers Request identifiers as received in the constructor
       * @returns {String} String consisting of session id and request id as available
       */

    }, {
      key: "getRequestIdentifierString",
      value: function getRequestIdentifierString() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sessionId = _ref2.sessionId;

        return sessionId ? " [SESSION ID: ".concat(sessionId, "]") : "";
      }
      /**
       * Achieve the following format for timestamp:
       * 2017-05-23 11:35:43.673
       *
       * @returns {String} Formatted Date string
       */

    }, {
      key: "getTimeStampFormat",
      value: function getTimeStampFormat() {
        var date = new Date();
        return "".concat(date.toLocaleString(), ".").concat(date.getMilliseconds());
      }
      /**
       * Achieve the following format for the log statement:
       * 2017-05-23 12:25:54.292 [<LOG_PREFIX>] [SESSION ID: <SESSION_ID>]
       * [REQUEST ID: <REQUEST_ID>] [<LOG_LEVEL>] [<LOGGER_NAME>] - <MESSAGE>
       *
       * @param {Object} options Winston options for custom formatting
       * @returns {String} Custom logging format
       */

    }, {
      key: "getFormatterString",
      value: function getFormatterString(options) {
        // TODO: add request identifier string post discussion on format (removed as
        // currently undefined)
        var sessionId = this.sessionId;
        var logLine = "|LOG_LINE| ".concat(this.timestampFormat(), " [").concat(options.level.toUpperCase(), "] [").concat(this.logPrefix, "] ").concat(this.getRequestIdentifierString({
          sessionId: sessionId
        }), " [").concat(this.loggerName, "] - ").concat(options.message ? options.message : "");
        return logLine;
      }
      /**
       * Get the logger instance with request identifiers as part of formatter
       *
       * @param {String} loggerName Name to identify the log initiator
       */

    }, {
      key: "getLogger",
      value: function getLogger() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sessionId = _ref3.sessionId,
            _ref3$loggerName = _ref3.loggerName,
            loggerName = _ref3$loggerName === void 0 ? "default" : _ref3$loggerName;

        var self = this;
        var loggerInstance = new Winston.Logger({
          transports: [new Rotate({
            file: self.fileName,
            colorize: false,
            timestamp: true,
            size: "500m",
            keep: 5,
            json: false,
            compress: false,
            tailable: true,
            formatter: self.getFormatterString.bind(Object.assign(self, {
              loggerName: loggerName,
              timestampFormat: self.getTimeStampFormat.bind(self),
              level: "info" || "error",
              sessionId: sessionId
            }))
          })]
        });
        return loggerInstance;
      }
    }]);

    return Logger;
  }();
}

module.exports = LoggerClass;

/***/ }),

/***/ "./utils/servicesCache.config.js":
/*!***************************************!*\
  !*** ./utils/servicesCache.config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Cachable Services List
 * (note: to remain in the object-in-array format for adding further config options)
 *
 * Example configuration:
 * {
 *    url: '/test/example',
 *    ...future configs (like individual timeout etc.)
 * }
 */
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: convertObjectToArray, pushQueryToHistory, parseQueryParams, cleanObject, setCookie, getCookie, createUrlSearchParams, buildUrl, removeChar, elementOffset, redirectInactiveUser, stopTrackingInactiveUser, isIOS, escapeHtml, addDecimal, removeDecimal, debounce, throttle, getIsProd, updateState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertObjectToArray", function() { return convertObjectToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushQueryToHistory", function() { return pushQueryToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryParams", function() { return parseQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanObject", function() { return cleanObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrlSearchParams", function() { return createUrlSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChar", function() { return removeChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOffset", function() { return elementOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectInactiveUser", function() { return redirectInactiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTrackingInactiveUser", function() { return stopTrackingInactiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDecimal", function() { return addDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDecimal", function() { return removeDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsProd", function() { return getIsProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return updateState; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var convertObjectToArray = function convertObjectToArray(obj, takeKeys) {
  return Array.prototype.concat.apply([], takeKeys ? Object.keys(obj) : Object.values(obj));
};
var pushQueryToHistory = function pushQueryToHistory(_ref) {
  var route = _ref.route,
      asUrl = _ref.asUrl,
      routeQuery = _ref.routeQuery,
      pageQuery = _ref.pageQuery,
      newQuery = _ref.newQuery,
      shallow = _ref.shallow,
      replace = _ref.replace;
  var query = pageQuery ? _objectSpread({}, pageQuery.toJS(), newQuery) : _objectSpread({}, newQuery);
  var pathname = window.location.href.split('?')[0];
  var queryString = Object.keys(query).reduce(function (accumulator, currentValue) {
    return query[currentValue] ? "".concat(accumulator).concat(currentValue, "=").concat(query[currentValue] !== decodeURIComponent(query[currentValue]) ? query[currentValue] : encodeURIComponent(query[currentValue]), "&") : accumulator;
  }, '?');
  var search = queryString.substr(0, queryString.length - 1);
  search = search !== '?' ? search : undefined;
  var url = asUrl || pathname + search;
  var promise = replace ? next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace({
    pathname: route,
    query: routeQuery
  }, url, {
    shallow: !!shallow
  }) : next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
    pathname: route,
    query: routeQuery
  }, url, {
    shallow: !!shallow
  });
  return {
    newPageUrl: url,
    newPageQuery: query,
    promise: promise
  };
};
var parseQueryParams = function parseQueryParams(pathname) {
  var search = pathname.split('?')[1];

  if (search) {
    var queryList = search.split('&');
    return queryList.reduce(function (accu, curr) {
      var _curr$split = curr.split('='),
          _curr$split2 = _slicedToArray(_curr$split, 2),
          key = _curr$split2[0],
          value = _curr$split2[1];

      return _objectSpread({}, accu, _defineProperty({}, key, value.split('#')[0]));
    }, {});
  }

  return {};
};
var cleanObject = function cleanObject(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key]) newObj[key] = obj[key];
  });
  return newObj;
};
var setCookie = function setCookie(cookieName, cookieValue, expiryDays) {
  if (typeof window === 'undefined') return;
  var expires = '';

  if (expiryDays) {
    var d = new Date();
    d.setTime((d.getTime() + expiryDays) * (24 * 60 * 60 * 1000));
    expires = "expires=".concat(d.toUTCString(), ";");
  }

  document.cookie = "".concat(cookieName, "=").concat(cookieValue, ";").concat(expires, "path=/");
};
var getCookie = function getCookie(key) {
  if (typeof window === 'undefined') return '';
  return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat(key, "\\s*\\=\\s*([^;]*).*$)|^.*$")), '$1');
};
var createUrlSearchParams = function createUrlSearchParams() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var queryParams = [];
  var keys = Object.keys(query);

  for (var i = 0, l = keys.length; i < l; i += 1) {
    queryParams.push("".concat(keys[i], "=").concat(query[keys[i]]));
  }

  return queryParams.join('&');
};
var buildUrl = function buildUrl(options) {
  if (_typeof(options) === 'object') {
    var pathname = options.pathname,
        query = options.query;
    var url = pathname;

    if (_typeof(query) === 'object') {
      url += "?".concat(createUrlSearchParams(query));
    }

    return url;
  }

  return options;
};
var removeChar = function removeChar(str, ch) {
  if (!str || !ch) return str;
  var reg = new RegExp("\\".concat(ch, "{1,}"), 'gi');
  return str.replace(reg, function (x) {
    return x === ch ? ' ' : " ".concat(ch, " ");
  });
};
var elementOffset = function elementOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
var redirectInactiveUser = function redirectInactiveUser(_ref2) {
  var pathname = _ref2.pathname,
      shallow = _ref2.shallow,
      isUserLoggedIn = _ref2.isUserLoggedIn,
      signOutUser = _ref2.signOutUser;

  if (typeof window !== 'undefined') {
    var IDLE_TIMEOUT = "30";
    var idleSecondsCounter = 0;
    var checkIdleTimeMiliseconds = 10000;
    var idealTime;
    var eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

    var resetTimer = function resetTimer() {
      idleSecondsCounter = 0;
    };

    var checkIdleTime = function checkIdleTime() {
      idleSecondsCounter += checkIdleTimeMiliseconds / 1000;

      if (idleSecondsCounter >= IDLE_TIMEOUT * 60) {
        if (isUserLoggedIn) {
          signOutUser({
            pathname: pathname
          }, true);
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
            pathname: pathname
          }, pathname, {
            shallow: shallow
          }).then(function () {
            return window.scrollTo(0, 0);
          });
        }

        clearInterval(idealTime);
      }
    };

    idealTime = window.setInterval(checkIdleTime, checkIdleTimeMiliseconds);
    eventTypes.forEach(function (event) {
      window.addEventListener(event, resetTimer);
    });
  }
};
var stopTrackingInactiveUser = function stopTrackingInactiveUser() {
  if (typeof window !== 'undefined') {
    var eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    clearInterval(window.idealTime);
    eventTypes.forEach(function (event) {
      window.removeEventListener(event, null, true);
    });
  }
};
var isIOS = function isIOS() {
  if (typeof window !== 'undefined') {
    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  }

  return false;
};
var escapeHtml = function escapeHtml() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/&#039;/g, "'").replace(/%2C;/g, ',');
};
var addDecimal = function addDecimal(value) {
  var price = value;

  if (typeof price === 'string') {
    price = parseFloat(value);
  }

  return price.toFixed(2);
};
var removeDecimal = function removeDecimal(value) {
  return +value % 1 === 0 ? parseInt(value, 10) : value;
};
var debounce = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var debounceTimer;

  window.onscroll = function () {
    if (debounceTimer) {
      window.clearTimeout(debounceTimer);
    }

    debounceTimer = window.setTimeout(function () {
      fn();
    }, wait);
  };
};
/* eslint-disable no-mixed-operators */

var throttle = function throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};
/* eslint-enable no-mixed-operators */

var getIsProd = function getIsProd() {
  var nextConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()();

  if (nextConfig) {
    var publicRuntimeConfig = nextConfig.publicRuntimeConfig;
    return publicRuntimeConfig.metricsKey || 'dev';
  }

  return 'dev';
};
var updateState = function updateState(state) {
  console.log(state);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}, state].concat(args));
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "agentkeepalive":
/*!*********************************!*\
  !*** external "agentkeepalive" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("agentkeepalive");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "lodash/conformsTo":
/*!************************************!*\
  !*** external "lodash/conformsTo" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/conformsTo");

/***/ }),

/***/ "lodash/each":
/*!******************************!*\
  !*** external "lodash/each" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/each");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "winston-logrotate":
/*!************************************!*\
  !*** external "winston-logrotate" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston-logrotate");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map