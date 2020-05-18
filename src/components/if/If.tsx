import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import { Layout } from "../types";

export interface IfProps extends Layout<IfProps> {
    openHtml: string;
    closeHtml: string;
}

const If: FC<IfProps> = (props: IfProps) => {
    const children = renderToString(<>{props.children}</>);
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `${props.openHtml}${children}${props.closeHtml}`,
            }}
        ></div>
    );
};

export { If };
