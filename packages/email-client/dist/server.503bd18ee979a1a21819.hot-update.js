exports.id = "server";
exports.modules = {

/***/ "./src/server/renderToHTML.tsx":
/*!*************************************!*\
  !*** ./src/server/renderToHTML.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderToHTML; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"../../node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"../../node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.link */ \"../../node_modules/core-js/modules/es.string.link.js\");\n/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/server */ \"../../node_modules/@loadable/server/lib/index.js\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ \"../../node_modules/@hot-loader/react-dom/server.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ \"../../node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _email_theme_src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @email/theme/src */ \"../email-theme/src/index.ts\");\n/* harmony import */ var _email_css_src__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @email/css/src */ \"../email-css/src/index.ts\");\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nvar DEV = \"development\" !== \"production\";\nvar publicPath = DEV ? \"http://localhost:3001/static/\" : \"/static/\";\nvar debug = debug__WEBPACK_IMPORTED_MODULE_6___default()(\"server:renderHTML\");\nvar staticPath = path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(\"dist\", \"static\");\nvar statsFile = path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(staticPath, \"loadable-stats.json\");\nvar attrs = DEV ? {\n  crossorigin: \"\"\n} : {};\nfunction renderToHTML(_ref) {\n  var entrypoints = _ref.entrypoints,\n      Component = _ref.Component,\n      props = _ref.props;\n  var status = 200;\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_5__[\"ChunkExtractor\"]({\n    statsFile: statsFile,\n    entrypoints: entrypoints,\n    publicPath: publicPath\n  });\n  debug(\"start renderToString\");\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_9__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_email_theme_src__WEBPACK_IMPORTED_MODULE_11__[\"ThemeProvider\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_email_css_src__WEBPACK_IMPORTED_MODULE_12__[\"CssProvider\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, props))));\n  debug(\"end renderToString\");\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_10__[\"Helmet\"].renderStatic();\n  var html = \"\\n  <!DOCTYPE html>\\n  <html \".concat(helmet.htmlAttributes.toString(), \">\\n  <head>\\n    \").concat(helmet.title.toString(), \"\\n    \").concat(helmet.meta.toString(), \"\\n    \").concat(helmet.link.toString(), \"\\n    \").concat(extractor.getLinkTags(attrs), \"\\n    \").concat(extractor.getStyleTags(attrs), \"\\n  </head>\\n  <body \").concat(helmet.bodyAttributes.toString(), \">\\n    <div id=\\\"app\\\">\").concat(markup, \"</div>\\n    \").concat(extractor.getScriptTags(attrs), \"\\n  </body>\\n  </html>\\n  \");\n  return {\n    status: status,\n    html: html\n  };\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DEV, \"DEV\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(publicPath, \"publicPath\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(debug, \"debug\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(staticPath, \"staticPath\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(statsFile, \"statsFile\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(attrs, \"attrs\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n  reactHotLoader.register(renderToHTML, \"renderToHTML\", \"/Users/ericsmith/Development/email/packages/email-client/src/server/renderToHTML.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlclRvSFRNTC50c3g/NTAyYiJdLCJuYW1lcyI6WyJERVYiLCJwcm9jZXNzIiwicHVibGljUGF0aCIsImRlYnVnIiwiZGVidWdGYWN0b3J5Iiwic3RhdGljUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwic3RhdHNGaWxlIiwiYXR0cnMiLCJjcm9zc29yaWdpbiIsInJlbmRlclRvSFRNTCIsImVudHJ5cG9pbnRzIiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0dXMiLCJleHRyYWN0b3IiLCJDaHVua0V4dHJhY3RvciIsIm1hcmt1cCIsInJlbmRlclRvU3RyaW5nIiwiaGVsbWV0IiwiSGVsbWV0IiwicmVuZGVyU3RhdGljIiwiaHRtbCIsImh0bWxBdHRyaWJ1dGVzIiwidG9TdHJpbmciLCJ0aXRsZSIsIm1ldGEiLCJsaW5rIiwiZ2V0TGlua1RhZ3MiLCJnZXRTdHlsZVRhZ3MiLCJib2R5QXR0cmlidXRlcyIsImdldFNjcmlwdFRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxhQUFBLEtBQXlCLFlBQXJDO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixHQUFHLEdBQUcsK0JBQUgsR0FBcUMsVUFBM0Q7QUFDQSxJQUFNRyxLQUFLLEdBQUdDLDRDQUFZLENBQUMsbUJBQUQsQ0FBMUI7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLDJDQUFJLENBQUNDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLFFBQXJCLENBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRiwyQ0FBSSxDQUFDQyxPQUFMLENBQWFGLFVBQWIsRUFBeUIscUJBQXpCLENBQWxCO0FBQ0EsSUFBTUksS0FBSyxHQUFHVCxHQUFHLEdBQ1g7QUFDSVUsYUFBVyxFQUFFO0FBRGpCLENBRFcsR0FJWCxFQUpOO0FBb0JlLFNBQVNDLFlBQVQsT0FJb0I7QUFBQSxNQUgvQkMsV0FHK0IsUUFIL0JBLFdBRytCO0FBQUEsTUFGL0JDLFNBRStCLFFBRi9CQSxTQUUrQjtBQUFBLE1BRC9CQyxLQUMrQixRQUQvQkEsS0FDK0I7QUFDL0IsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsK0RBQUosQ0FBbUI7QUFDakNULGFBQVMsRUFBVEEsU0FEaUM7QUFFakNJLGVBQVcsRUFBWEEsV0FGaUM7QUFHakNWLGNBQVUsRUFBVkE7QUFIaUMsR0FBbkIsQ0FBbEI7QUFNQUMsT0FBSyxDQUFDLHNCQUFELENBQUw7QUFDQSxNQUFNZSxNQUFNLEdBQUdDLHVFQUFjLGVBQ3pCLDJEQUFDLCtEQUFELHFCQUNJLDJEQUFDLDJEQUFELHFCQUNJLDJEQUFDLFNBQUQsRUFBZUwsS0FBZixDQURKLENBREosQ0FEeUIsQ0FBN0I7QUFPQVgsT0FBSyxDQUFDLG9CQUFELENBQUw7QUFDQSxNQUFNaUIsTUFBTSxHQUFHQyxvREFBTSxDQUFDQyxZQUFQLEVBQWY7QUFFQSxNQUFNQyxJQUFJLDBDQUVKSCxNQUFNLENBQUNJLGNBQVAsQ0FBc0JDLFFBQXRCLEVBRkksOEJBSVJMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhRCxRQUFiLEVBSlEsbUJBS1JMLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRixRQUFaLEVBTFEsbUJBTVJMLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSCxRQUFaLEVBTlEsbUJBT1JULFNBQVMsQ0FBQ2EsV0FBVixDQUFzQnBCLEtBQXRCLENBUFEsbUJBUVJPLFNBQVMsQ0FBQ2MsWUFBVixDQUF1QnJCLEtBQXZCLENBUlEsa0NBVUpXLE1BQU0sQ0FBQ1csY0FBUCxDQUFzQk4sUUFBdEIsRUFWSSxvQ0FXTVAsTUFYTix5QkFZUkYsU0FBUyxDQUFDZ0IsYUFBVixDQUF3QnZCLEtBQXhCLENBWlEsK0JBQVY7QUFpQkEsU0FBTztBQUFFTSxVQUFNLEVBQU5BLE1BQUY7QUFBVVEsUUFBSSxFQUFKQTtBQUFWLEdBQVA7QUFDSDs7Ozs7Ozs7OzswQkFsRUt2QixHOzBCQUNBRSxVOzBCQUNBQyxLOzBCQUNBRSxVOzBCQUNBRyxTOzBCQUNBQyxLOzBCQW9Ca0JFLFkiLCJmaWxlIjoiLi9zcmMvc2VydmVyL3JlbmRlclRvSFRNTC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaHVua0V4dHJhY3RvciwgQ2h1bmtFeHRyYWN0b3JNYW5hZ2VyIH0gZnJvbSBcIkBsb2FkYWJsZS9zZXJ2ZXJcIjtcbmltcG9ydCBkZWJ1Z0ZhY3RvcnkgZnJvbSBcImRlYnVnXCI7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBlbWFpbC90aGVtZS9zcmNcIjtcbmltcG9ydCB7IENzc1Byb3ZpZGVyIH0gZnJvbSBcIkBlbWFpbC9jc3Mvc3JjXCI7XG5cbmNvbnN0IERFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIjtcbmNvbnN0IHB1YmxpY1BhdGggPSBERVYgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGF0aWMvXCIgOiBcIi9zdGF0aWMvXCI7XG5jb25zdCBkZWJ1ZyA9IGRlYnVnRmFjdG9yeShcInNlcnZlcjpyZW5kZXJIVE1MXCIpO1xuY29uc3Qgc3RhdGljUGF0aCA9IHBhdGgucmVzb2x2ZShcImRpc3RcIiwgXCJzdGF0aWNcIik7XG5jb25zdCBzdGF0c0ZpbGUgPSBwYXRoLnJlc29sdmUoc3RhdGljUGF0aCwgXCJsb2FkYWJsZS1zdGF0cy5qc29uXCIpO1xuY29uc3QgYXR0cnMgPSBERVZcbiAgICA/IHtcbiAgICAgICAgICBjcm9zc29yaWdpbjogXCJcIixcbiAgICAgIH1cbiAgICA6IHt9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck9wdGlvbnM8UD4ge1xuICAgIGVudHJ5cG9pbnRzOiBzdHJpbmdbXTtcbiAgICBDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD47XG4gICAgcHJvcHM6IFA7XG4gICAgcmVxOiBSZXF1ZXN0O1xuICAgIHJlczogUmVzcG9uc2U7XG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclJlc3VsdCB7XG4gICAgaHRtbDogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb0hUTUw8UD4oe1xuICAgIGVudHJ5cG9pbnRzLFxuICAgIENvbXBvbmVudCxcbiAgICBwcm9wcyxcbn06IFJlbmRlck9wdGlvbnM8UD4pOiBSZW5kZXJSZXN1bHQge1xuICAgIGNvbnN0IHN0YXR1cyA9IDIwMDtcbiAgICBjb25zdCBleHRyYWN0b3IgPSBuZXcgQ2h1bmtFeHRyYWN0b3Ioe1xuICAgICAgICBzdGF0c0ZpbGUsXG4gICAgICAgIGVudHJ5cG9pbnRzLFxuICAgICAgICBwdWJsaWNQYXRoLFxuICAgIH0pO1xuXG4gICAgZGVidWcoXCJzdGFydCByZW5kZXJUb1N0cmluZ1wiKTtcbiAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q3NzUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Nzc1Byb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+LFxuICAgICk7XG4gICAgZGVidWcoXCJlbmQgcmVuZGVyVG9TdHJpbmdcIik7XG4gICAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgPCFET0NUWVBFIGh0bWw+XG4gIDxodG1sICR7aGVsbWV0Lmh0bWxBdHRyaWJ1dGVzLnRvU3RyaW5nKCl9PlxuICA8aGVhZD5cbiAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cbiAgICAke2hlbG1ldC5saW5rLnRvU3RyaW5nKCl9XG4gICAgJHtleHRyYWN0b3IuZ2V0TGlua1RhZ3MoYXR0cnMpfVxuICAgICR7ZXh0cmFjdG9yLmdldFN0eWxlVGFncyhhdHRycyl9XG4gIDwvaGVhZD5cbiAgPGJvZHkgJHtoZWxtZXQuYm9keUF0dHJpYnV0ZXMudG9TdHJpbmcoKX0+XG4gICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICR7ZXh0cmFjdG9yLmdldFNjcmlwdFRhZ3MoYXR0cnMpfVxuICA8L2JvZHk+XG4gIDwvaHRtbD5cbiAgYDtcblxuICAgIHJldHVybiB7IHN0YXR1cywgaHRtbCB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/renderToHTML.tsx\n");

/***/ })

};