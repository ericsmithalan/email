exports.id = "main";
exports.modules = {

/***/ "./src/renderer.tsx":
/*!**************************!*\
  !*** ./src/renderer.tsx ***!
  \**************************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _email_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @email/css/ */ "../email-css/esm/index.js");






var renderer = function renderer(req, assets) {
  var context = {};
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    context: context,
    location: req.url
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_css___WEBPACK_IMPORTED_MODULE_4__["CssStyleProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
  return "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n            <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n                <head>\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n                    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n                    <meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0;\">\n                    <base target=\"_blank\">\n\n                    <meta name=\"x-apple-disable-message-reformatting\"> \n                    <meta name=\"format-detection\" content=\"telephone=no,address=no,email=no,date=no,url=no\">\n                    <meta name=\"color-scheme\" content=\"light\">\n                    <meta name=\"supported-color-schemes\" content=\"light\">\n  \n                    \n                    <title>Ascendum Email</title>\n\n                    <meta sh-template-name=\"asc-email\">\n                   \n\n                    ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : "", "\n                        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n                  \n                </head>\n                <body style=\"margin:0;padding:0;\">\n                    <div id=\"root\">").concat(markup, "</div>\n                </body>\n            </html>");
};



/***/ })

};
//# sourceMappingURL=main.7798968dca8c1a7d9fb1.hot-update.js.map