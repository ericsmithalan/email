import { CSSProperties } from "react";
import { CssGenericCollection } from "../CssGenericCollection";
import { CssPropertyDefinition } from "../types";
import { CssStyleablePropertiesKind } from "../CssStyleableProperties";

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
