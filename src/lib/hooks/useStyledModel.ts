import React, { CSSProperties } from "react";

import { BaseModel } from "../../models/BaseModel";
import { StyleableModel } from "../../models/types";
import { ParseResults, Styleable } from "../css-js/types";
import { EmailCssContext } from "../EmailCssProvider";

export const useStyledModel = <T extends BaseModel>(
    parser: ParseResults,
    model: T | undefined,
    className: string | undefined
): StyleableModel<any> | undefined => {
    const { styleManager } = React.useContext(EmailCssContext);

    if (model) {
        parser.parseModel(styleManager.theme, model);

        styleManager.addStyle(parser.styles, "@default");

        const modelStyels = styleManager.addPropStyles(
            Object.assign({}, model, { className: className })
        ) as CSSProperties;

        return model as T & Styleable;
    }

    return undefined;
};
