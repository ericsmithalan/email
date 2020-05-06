exports.id = "main";
exports.modules = {

/***/ "./src/components/Signature.tsx":
/*!**************************************!*\
  !*** ./src/components/Signature.tsx ***!
  \**************************************/
/*! exports provided: Signature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signature", function() { return Signature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _email_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @email/element */ "../email-element/cjs/index.js");
/* harmony import */ var _email_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_email_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _email_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @email/css/ */ "../email-css/cjs/index.js");
/* harmony import */ var _email_css___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_email_css___WEBPACK_IMPORTED_MODULE_2__);



const styles = Object(_email_css___WEBPACK_IMPORTED_MODULE_2__["css"])({
    myDiv: {
        backgroundColor: "red",
    },
});
const SignatureElement = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Table"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Tr"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Td"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Div"], { className: styles.classNames.myDiv }, "Hello"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Tr"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Td"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Div"], { className: styles.classNames.myDiv }, "Hello")))));
};
const Signature = Object(_email_css___WEBPACK_IMPORTED_MODULE_2__["withCss"])(styles)(SignatureElement);



/***/ })

};
//# sourceMappingURL=main.6ffd3567f3ec24f7ae53.hot-update.js.map