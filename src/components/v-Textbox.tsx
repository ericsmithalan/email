import React, { FC, ReactNode } from "react";

import { CssProperties } from "../lib/types";

export interface TextboxProps {
    children?: ReactNode;
    style?: CssProperties | { [key: string]: string };
}

const VtextBox: FC<TextboxProps> = (props: TextboxProps) => {
    VtextBox.defaultProps = {
        style: {
            "mso-fit-shape-to-text": "true",
            inset: 0
        }
    };

    const el = React.createElement("v:textbox", props, props.children);

    return el;
};

export { VtextBox };
