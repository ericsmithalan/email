import { CSSProperties } from "react";
import { CssGenericCollection } from "../collections/CssGenericCollection";
import { CssPropertyDefinition } from "../types";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";

export const getStyleableProps = (
    props: CSSProperties | undefined,
): CssGenericCollection<string, CssPropertyDefinition> => {
    const properties = new CssGenericCollection<string, CssPropertyDefinition>();

    if (props) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (key in CssStyleablePropertiesKind) {
                    properties[key] = props[key];
                }
            }
        }
    }

    return properties;
};
