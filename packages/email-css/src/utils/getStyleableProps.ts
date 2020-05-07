import { CSSProperties } from "react";
import { CssCollection } from "../CssCollection";
import { CssPropertyDefinition } from "../types";
import { CssStyleablePropertiesKind } from "../CssStyleableProperties";

export const getStyleableProps = (
    props: CSSProperties | undefined,
): CssCollection<string, CssPropertyDefinition> => {
    const properties = new CssCollection<string, CssPropertyDefinition>();

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
