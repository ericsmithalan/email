import React, {
    FC,
    ReactNode,
    ComponentProps,
    useLayoutEffect,
    ReactChildren,
    CSSProperties,
} from "react";
import { renderToString } from "react-dom/server";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import { CssProperties } from "src/lib/types";

export interface TextboxProps {
    children?: ReactNode;
    style?: CSSProperties | { [key: string]: string };
}

const Textbox: FC<TextboxProps> = (props: TextboxProps) => {
    Textbox.defaultProps = {
        style: {
            "mso-fit-shape-to-text": "true",
            inset: 0,
        },
    };

    const el = React.createElement("v:textbox", props, props.children);

    return el;
};

export { Textbox };
