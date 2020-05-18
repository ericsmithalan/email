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

    useLayoutEffect(() => {
        let el = null;
        let parent = null;
        let comm = null;
        let openIf = "";
        let closeIf = "";

        if (ref.current) {
            el = ref.current;

            //namespaceURI.ad.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
            // xmlns:v="urn:schemas-microsoft-com:vml"
            parent = el.parentNode;

            comm = document.createElement("v:rect");
            comm.setAttribute("xmlns:v", "urn:schemas-microsoft-com:vml");
            comm.style.width = `${props.width}px`;
            comm.style.height = `${props.height}px`;

            // comm.appendChild(props.children);

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

export { Rect };

//xmlns:v="urn:schemas-microsoft-com:vml"
// <>{`<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:${props.width}px">`}</>
