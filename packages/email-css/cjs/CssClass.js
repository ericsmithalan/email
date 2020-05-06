"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camelize_1 = require("./utils/camelize");
const CssPseudos_1 = require("./enums/CssPseudos");
const CssClassProperty_1 = require("./CssClassProperty");
const stringHashId_1 = require("./utils/stringHashId");
class CssClass {
    constructor(props) {
        this._css = "";
        this._props = props;
    }
    getCssProperties() {
        const properties = {};
        if (!this.isPseudo && this.target === "@global") {
            this.properties.forEach((prop) => {
                properties[prop.key] = prop.value;
            });
        }
        return properties;
    }
    get key() {
        return this._props.key;
    }
    get className() {
        return this._props.className;
    }
    updateProperties(value) {
        const combinedProperties = Object.assign({}, this.getCssProperties(), value);
        for (const key in combinedProperties) {
            if (combinedProperties.hasOwnProperty(key)) {
                const property = new CssClassProperty_1.CssClassProperty({
                    key: key,
                    className: this.className,
                    name: key,
                    value: combinedProperties[key],
                    css: "",
                });
                this._props.properties.push(property);
            }
            console.log(this._props.properties);
        }
        this._css = renderCss(this._props.className, this._props.key, this.properties);
    }
    get properties() {
        return this._props.properties;
    }
    get css() {
        if (!this._css) {
            this._css = renderCss(this._props.className, this._props.key, this.properties);
        }
        return this._css;
    }
    get id() {
        return stringHashId_1.stringHashId(this._props.target + this._props.key);
    }
    get isPseudo() {
        return this._props.isPseudo;
    }
    get target() {
        return this._props.target;
    }
}
exports.CssClass = CssClass;
const renderCss = (className, key, properties) => {
    const css = [];
    const clsName = classString(key, className);
    properties.forEach((prop) => {
        css.push(prop.css);
    });
    return classStringTemplate(clsName, css.join(""));
};
const classString = (key, className) => {
    let name = key;
    if (key in CssPseudos_1.CssPseudoKind) {
        if (className) {
            name = `${camelize_1.decamelize(className)}${camelize_1.decamelize(key)}`;
        }
    }
    else {
        name = `${camelize_1.decamelize(className)}`;
    }
    return name;
};
const classStringTemplate = (className, properties) => {
    return `.${className}{${properties}}`;
};
//# sourceMappingURL=CssClass.js.map