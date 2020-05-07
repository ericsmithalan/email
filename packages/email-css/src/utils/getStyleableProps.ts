import { CSSProperties } from "react";
import { GenericCollection } from "../collections/GenericCollection";
import { CssPropertyDefinition } from "../types";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";

export const getStyleableProps = (
    props: CSSProperties | undefined,
): GenericCollection<CssPropertyDefinition> => {
    const properties = new GenericCollection<CssPropertyDefinition>();

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
