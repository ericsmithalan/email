exports.id = "main";
exports.modules = {

/***/ "../email-element/cjs/Div.js":
/*!***********************************!*\
  !*** ../email-element/cjs/Div.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles_1 = __webpack_require__(/*! ./styles */ "../email-element/cjs/styles.js");
const styles = css_1.css({
    ascDiv: {
        ...styles_1.commonFonts,
        fontSize: 13,
    },
});
const DivElement = (props) => {
    return react_1.default.createElement("div", Object.assign({}, props));
};
DivElement.defaultProps = {
    className: styles.classNames.ascDiv,
};
const Div = css_1.withCss(styles)(DivElement);
exports.Div = Div;
//# sourceMappingURL=Div.js.map

/***/ }),

/***/ "../email-element/cjs/Img.js":
/*!***********************************!*\
  !*** ../email-element/cjs/Img.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles = css_1.css({
    ascImg: {},
});
const ImgElement = (props) => {
    // @ts-ignore
    return react_1.default.createElement("img", Object.assign({}, props));
};
ImgElement.defaultProps = {
    className: styles.classNames.ascImg,
};
const Img = css_1.withCss(styles)(ImgElement);
exports.Img = Img;
//# sourceMappingURL=Img.js.map

/***/ }),

/***/ "../email-element/cjs/Link.js":
/*!************************************!*\
  !*** ../email-element/cjs/Link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles_1 = __webpack_require__(/*! ./styles */ "../email-element/cjs/styles.js");
const styles = css_1.css({
    ascA: {
        ...styles_1.commonFonts,
        fontSize: 13,
    },
});
const AElement = (props) => {
    return react_1.default.createElement("a", Object.assign({}, props));
};
AElement.defaultProps = {
    className: styles.classNames.ascA,
};
const Link = css_1.withCss(styles)(AElement);
exports.Link = Link;
//# sourceMappingURL=Link.js.map

/***/ }),

/***/ "../email-element/cjs/Span.js":
/*!************************************!*\
  !*** ../email-element/cjs/Span.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles = css_1.css({
    ascSpan: {},
});
const SpanElement = (props) => {
    return react_1.default.createElement("span", Object.assign({}, props));
};
SpanElement.defaultProps = {
    className: styles.classNames.ascSpan,
};
const Span = css_1.withCss(styles)(SpanElement);
exports.Span = Span;
//# sourceMappingURL=Span.js.map

/***/ }),

/***/ "../email-element/cjs/Table.js":
/*!*************************************!*\
  !*** ../email-element/cjs/Table.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles_1 = __webpack_require__(/*! ./styles */ "../email-element/cjs/styles.js");
const styles = css_1.css({
    ascTable: {
        ...styles_1.commonFonts,
    },
});
const TableElement = (props) => {
    return (react_1.default.createElement("table", Object.assign({}, props),
        react_1.default.createElement("tbody", null, props.children)));
};
TableElement.defaultProps = {
    className: styles.classNames.ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};
const Table = css_1.withCss(styles)(TableElement);
exports.Table = Table;
//# sourceMappingURL=Table.js.map

/***/ }),

/***/ "../email-element/cjs/Td.js":
/*!**********************************!*\
  !*** ../email-element/cjs/Td.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles_1 = __webpack_require__(/*! ./styles */ "../email-element/cjs/styles.js");
const styles = css_1.css({
    ascTd: {
        ...styles_1.commonFonts,
    },
});
const TdElement = (props) => {
    return react_1.default.createElement("td", Object.assign({}, props));
};
TdElement.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};
const Td = css_1.withCss(styles)(TdElement);
exports.Td = Td;
//# sourceMappingURL=Td.js.map

/***/ }),

/***/ "../email-element/cjs/Tr.js":
/*!**********************************!*\
  !*** ../email-element/cjs/Tr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const css_1 = __webpack_require__(/*! @email/css */ "../email-css/cjs/index.js");
const styles = css_1.css({
    ascTr: {},
});
const TrElement = (props) => {
    return react_1.default.createElement("tr", Object.assign({}, props));
};
TrElement.defaultProps = {
    className: styles.classNames.ascTr,
};
const Tr = css_1.withCss(styles)(TrElement);
exports.Tr = Tr;
//# sourceMappingURL=Tr.js.map

/***/ }),

/***/ "../email-element/cjs/index.js":
/*!*************************************!*\
  !*** ../email-element/cjs/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Link */ "../email-element/cjs/Link.js"));
__export(__webpack_require__(/*! ./Div */ "../email-element/cjs/Div.js"));
__export(__webpack_require__(/*! ./Img */ "../email-element/cjs/Img.js"));
__export(__webpack_require__(/*! ./Span */ "../email-element/cjs/Span.js"));
__export(__webpack_require__(/*! ./styles */ "../email-element/cjs/styles.js"));
__export(__webpack_require__(/*! ./Table */ "../email-element/cjs/Table.js"));
__export(__webpack_require__(/*! ./Td */ "../email-element/cjs/Td.js"));
__export(__webpack_require__(/*! ./Tr */ "../email-element/cjs/Tr.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../email-element/cjs/styles.js":
/*!**************************************!*\
  !*** ../email-element/cjs/styles.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.commonFonts = {
    fontFamily: (theme) => theme.fonts.fontFamily,
    fontSize: (theme) => theme.fonts.fontDefaultSize,
    color: (theme) => theme.colors.darkFontColor,
};
//# sourceMappingURL=styles.js.map

/***/ }),

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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_element__WEBPACK_IMPORTED_MODULE_1__["Div"], { className: styles.classNames.myDiv }, "Hello");
};
const Signature = Object(_email_css___WEBPACK_IMPORTED_MODULE_2__["withCss"])(styles)(SignatureElement);



/***/ })

};
//# sourceMappingURL=main.7290ada06f83b4892bae.hot-update.js.map