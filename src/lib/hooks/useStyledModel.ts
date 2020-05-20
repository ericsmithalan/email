import React, { CSSProperties } from "react";

import { BaseModel } from "../../models/BaseModel";
import { StyleableModel } from "../../models/types";
import { CssProperties, ParseResults } from "../css-js/types";
import { EmailCssContext } from "../EmailCssProvider";

export const useStyledModel = <T extends BaseModel>(
    parser: ParseResults,
    model: T | undefined,
    className: string | undefined
): T | undefined => {
    const { styleManager } = React.useContext(EmailCssContext);

    if (model) {
        model.className = className;

        parser.parseWithModel(styleManager.theme, model);

        styleManager.addStyle(parser.styles, "@default");

        const modelStyels = styleManager.addPropStyles(model) as CSSProperties;

        const styleable = convertToStyleable(model, modelStyels);

        return styleable as T;
    }

    return undefined;
};

const convertToStyleable = <T extends BaseModel>(model: T, styles: CssProperties) => {
    return Object.assign({}, model, { style: styles }) as StyleableModel<T>;
};
