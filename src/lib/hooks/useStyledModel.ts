import React, { CSSProperties } from "react";

import { BaseModel } from "../../models/BaseModel";
import { EmailCssContext } from "../EmailCssProvider";
import { KeyValue, ParseResults } from "../types";

export const useStyledModel = <T extends BaseModel>(
    parser: ParseResults,
    model: T | undefined
): {
    classNames: KeyValue | undefined;
    styles: CSSProperties | undefined;
    props: T | undefined;
} => {
    const { styleManager } = React.useContext(EmailCssContext);

    if (model) {
        parser.parseModel(styleManager.theme, model);

        styleManager.addStyle(parser.styles, "@default");

        const modelStyels = styleManager.addPropStyles(model) as CSSProperties;

        return {
            classNames: parser.classNames,
            styles: modelStyels,
            props: model as T
        };
    }

    return {
        classNames: undefined,
        styles: undefined,
        props: undefined
    };
};
