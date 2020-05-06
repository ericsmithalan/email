"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_collections_1 = require("typescript-collections");
const camelize_1 = require("./utils/camelize");
class CssRepository {
    constructor() {
        this.sheets = [];
        this.stylesheets = [];
        this.classes = new typescript_collections_1.Dictionary();
        this.add = (cssClasses) => {
            if (cssClasses) {
                cssClasses.forEach((cssClass) => {
                    this.classes.setValue(cssClass.id, cssClass);
                });
            }
        };
        this.updateStyle = (className, styles) => {
            if (className) {
                const item = this.classes.values().find((item) => item.className === camelize_1.camelize(className));
                if (item) {
                    item.updateProperties(styles);
                }
            }
        };
        this.getInlinableStyles = (className) => {
            let props = {};
            if (className) {
                const item = this.classes.values().find((item) => item.className === camelize_1.camelize(className));
                if (item) {
                    props = item.getCssProperties();
                }
            }
            return props;
        };
        this.stylesheet = (type) => {
            const css = [];
            this.classes.forEach((key, cssClass) => {
                if (cssClass.target === type) {
                    css.push(cssClass.css);
                }
            });
            return css.join("");
        };
    }
}
exports.CssRepository = CssRepository;
//# sourceMappingURL=CssRepository.js.map