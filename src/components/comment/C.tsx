import React, { FC, ReactNode, ComponentProps, useLayoutEffect, ReactChildren } from "react";
import { renderToString } from "react-dom/server";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";

export interface CProps extends Layout<CProps> {
    if?: string;
}

const C: FC<CProps> = (props: CProps) => {
    const ref = React.createRef<HTMLSpanElement>();

    useLayoutEffect(() => {
        let el = null;
        let parent = null;
        let comm = null;
        let openIf = "";
        let closeIf = "";

        if (props.if) {
            openIf = `[if ${props.if}]>`;
            closeIf = `<![endif]`;
        }

        if (ref.current) {
            el = ref.current;
            parent = el.parentNode;

            comm = document.createComment(
                ` ${openIf} ${renderToString(<>{props.children}</>)} ${closeIf} `,
            );
            try {
                if (parent && parent.contains(el)) {
                    parent.replaceChild(comm, el);
                }
            } catch (err) {
                console.error(err);
            }
        }

        return () => {
            if (parent && el && comm) {
                parent.replaceChild(el, comm);
            }
        };
    }, []);

    return <span ref={ref} style={{ display: "none" }} />;
};

export { C };
