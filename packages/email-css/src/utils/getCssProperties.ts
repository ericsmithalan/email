import { CssPropertyCollection } from "../CssPropertyCollection";
import { CssValue, CssClassDefinition } from "../types";

const getCssProperties = (cssClass: CssClassDefinition): CssPropertyCollection => {
    const properties = new CssPropertyCollection();

    if (cssClass.psuedo === "none" && this.target === "@global") {
        cssClass.properties.forEach((key: string, value: CssValue) => {
            properties[key] = value;
        });
    }

    return properties;
};

export { getCssProperties };
