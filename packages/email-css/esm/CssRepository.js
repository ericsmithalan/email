import { Dictionary } from "typescript-collections";
import { camelize } from "./utils/camelize";
export class CssRepository {
    constructor() {
        this.sheets = [];
        this.stylesheets = [];
        this.classes = new Dictionary();
        this.add = (cssClasses) => {
            if (cssClasses) {
                cssClasses.forEach((cssClass) => {
                    this.classes.setValue(cssClass.id, cssClass);
                });
            }
        };
        this.updateStyle = (className, styles) => {
            if (className) {
                const item = this.classes.values().find((item) => item.className === camelize(className));
                if (item) {
                    item.updateProperties(styles);
                }
            }
        };
        this.getInlinableStyles = (className) => {
            let props = {};
            if (className) {
                const item = this.classes.values().find((item) => item.className === camelize(className));
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
//# sourceMappingURL=CssRepository.js.map