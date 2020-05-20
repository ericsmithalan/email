import React, { ReactNode, useLayoutEffect } from "react";
import { renderToString } from "react-dom/server";

type Props = {
    children?: ReactNode;
    test?: string;
};

export const If = (props: Props) => {
    let ref: HTMLSpanElement | null = null;

    useLayoutEffect(() => {
        let comment: Comment | null = null;
        let parent: HTMLElement | null = null;

        if (ref) {
            parent = ref.parentNode as HTMLElement;
            comment = document.createComment(
                `[if ${props.test}] ${renderToString(<>{props.children}</>)} <![endif]`
            );

            if (parent) {
                parent.replaceChild(comment, ref);
            }
        }

        return () => {
            if (parent && ref && comment) {
                parent.replaceChild(ref, comment);
            }
        };
    }, []);

    return <span ref={(el) => (ref = el)} style={{ display: "none" }} />;
};
