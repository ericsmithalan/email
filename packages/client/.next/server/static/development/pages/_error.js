module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ericsmith/Development/email/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/next/dist/pages/_error.js":
/*!*********************************************************************************!*\
  !*** /Users/ericsmith/Development/email/node_modules/next/dist/pages/_error.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi next/dist/pages/_error ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_error */"../../node_modules/next/dist/pages/_error.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9lcmljc21pdGgvRGV2ZWxvcG1lbnQvZW1haWwvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8vVXNlcnMvZXJpY3NtaXRoL0RldmVsb3BtZW50L2VtYWlsL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiZGVzYyIsImgyIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdl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RUFBQyxNQUFsQztBQUF5Q0ssY0FBVSxFQUFDLE1BQXBEO0FBQTJETixVQUFNLEVBQUMsTUFBbEU7QUFBeUVPLGlCQUFhLEVBQUM7QUFBdkYsR0FBeFM7QUFBeVloQixJQUFFLEVBQUM7QUFBQ1csV0FBTyxFQUFDLGNBQVQ7QUFBd0JNLGVBQVcsRUFBQyw0QkFBcEM7QUFBaUVDLFVBQU0sRUFBQyxDQUF4RTtBQUEwRUMsZUFBVyxFQUFDLE1BQXRGO0FBQTZGQyxXQUFPLEVBQUMsa0JBQXJHO0FBQXdIQyxZQUFRLEVBQUMsTUFBakk7QUFBd0lDLGNBQVUsRUFBQyxHQUFuSjtBQUF1Sk4saUJBQWEsRUFBQztBQUFySyxHQUE1WTtBQUF3akJkLElBQUUsRUFBQztBQUFDbUIsWUFBUSxFQUFDLE1BQVY7QUFBaUJDLGNBQVUsRUFBQyxRQUE1QjtBQUFxQ1AsY0FBVSxFQUFDLFNBQWhEO0FBQTBERyxVQUFNLEVBQUMsQ0FBakU7QUFBbUVFLFdBQU8sRUFBQztBQUEzRTtBQUEzakIsQ0FBWCxDOzs7Ozs7Ozs7OztBQ0YzNUIsOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgc3RhdHVzQ29kZXM9ezQwMDonQmFkIFJlcXVlc3QnLDQwNDonVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsNDA1OidNZXRob2QgTm90IEFsbG93ZWQnLDUwMDonSW50ZXJuYWwgU2VydmVyIEVycm9yJ307ZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7cmVzLGVycn09X3JlZjt2YXIgc3RhdHVzQ29kZT1yZXMmJnJlcy5zdGF0dXNDb2RlP3Jlcy5zdGF0dXNDb2RlOmVycj9lcnIuc3RhdHVzQ29kZTo0MDQ7cmV0dXJue3N0YXR1c0NvZGV9O30vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL2NsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe3ZhcntzdGF0dXNDb2RlfT10aGlzLnByb3BzO3ZhciB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlLFwiOiBcIix0aXRsZSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6J2JvZHkgeyBtYXJnaW46IDAgfSd9fSksc3RhdHVzQ29kZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIse3N0eWxlOnN0eWxlcy5oMX0sc3RhdHVzQ29kZSk6bnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZGVzY30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLHtzdHlsZTpzdHlsZXMuaDJ9LHRpdGxlLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7dmFyIHN0eWxlcz17ZXJyb3I6e2NvbG9yOicjMDAwJyxiYWNrZ3JvdW5kOicjZmZmJyxmb250RmFtaWx5OictYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLGhlaWdodDonMTAwdmgnLHRleHRBbGlnbjonY2VudGVyJyxkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9LGRlc2M6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsdGV4dEFsaWduOidsZWZ0JyxsaW5lSGVpZ2h0Oic0OXB4JyxoZWlnaHQ6JzQ5cHgnLHZlcnRpY2FsQWxpZ246J21pZGRsZSd9LGgxOntkaXNwbGF5OidpbmxpbmUtYmxvY2snLGJvcmRlclJpZ2h0OicxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsbWFyZ2luOjAsbWFyZ2luUmlnaHQ6JzIwcHgnLHBhZGRpbmc6JzEwcHggMjNweCAxMHB4IDAnLGZvbnRTaXplOicyNHB4Jyxmb250V2VpZ2h0OjUwMCx2ZXJ0aWNhbEFsaWduOid0b3AnfSxoMjp7Zm9udFNpemU6JzE0cHgnLGZvbnRXZWlnaHQ6J25vcm1hbCcsbGluZUhlaWdodDonaW5oZXJpdCcsbWFyZ2luOjAscGFkZGluZzowfX07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=