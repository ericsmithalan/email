import { CssParseArgs,PropertyCollection } from "../types";
import {createProperty} from "./createProperty";

export const buildCssProperty = (args: Partial<CssParseArgs>, properties: PropertyCollection) => {
    const property = createProperty(args);

    properties.add(property.className, property);
};
