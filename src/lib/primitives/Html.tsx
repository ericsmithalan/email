import React, { FC, useLayoutEffect } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface HtmlElement extends React.HTMLProps<HTMLHtmlElement>, PrimitveElement {
    xmlns?: string;
}

const Html: FC<HtmlElement> = (props: HtmlElement) => {
    return (
        <html
            {...{
                xmlns: "http://www.w3.org/1999/xhtml",
                "xmlns:o": "urn:schemas-microsoft-com:office:office",
                "xmlns:v": "urn:schemas-microsoft-com:vm",
            }}
        >
            {props.children}
        </html>
    );
};

export { Html };
