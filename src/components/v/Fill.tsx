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

export interface FillProps {
    src?: string;
    color?: boolean;
    type?: string;
}

const Fill: FC<FillProps> = (props: FillProps) => {
    Fill.defaultProps = {
        type: "frame",
    };

    const el = React.createElement("v:fill", props);

    return el;
};

export { Fill };
