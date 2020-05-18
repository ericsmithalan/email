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

export interface RectProps {
    children?: ReactNode;
    fill?: boolean;
    stroke?: boolean;
    fillColor?: string;
    width?: string | number;
    height?: string | number;
}

const Rect: FC<RectProps> = (props: RectProps) => {
    const ref = React.createRef<HTMLSpanElement>();
    const el = React.createElement("v:rect", props, props.children);

    return el;
};

export { Rect };
