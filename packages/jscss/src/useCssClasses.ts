import React from "react";

import { ClassNameSelector, Parser } from "./types";

export const useCssClasses = (parser: Parser): ClassNameSelector => {
    return parser.parseClasses();
};
