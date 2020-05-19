import React, { FC } from "react";

import { PrimitveElement } from "../types";

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
