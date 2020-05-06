import { decamelize } from "./utils/camelize";
import { CssPseudoKind } from "./enums/CssPseudos";
import { CssClassProperty } from "./CssClassProperty";
import { stringHashId } from "./utils/stringHashId";
export class CssClass {
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
                const property = new CssClassProperty({
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
        return stringHashId(this._props.target + this._props.key);
    }
    get isPseudo() {
        return this._props.isPseudo;
    }
    get target() {
        return this._props.target;
    }
}
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
    if (key in CssPseudoKind) {
        if (className) {
            name = `${decamelize(className)}${decamelize(key)}`;
        }
    }
    else {
        name = `${decamelize(className)}`;
    }
    return name;
};
const classStringTemplate = (className, properties) => {
    return `.${className}{${properties}}`;
};
//# sourceMappingURL=CssClass.js.map