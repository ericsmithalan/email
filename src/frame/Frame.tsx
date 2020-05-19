import React, { FC, ReactChild, ReactNode } from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";

import { FrameProvider } from "./FrameContext";

//children: Array<[{ Head: FC<HeadElement> }, { Body: FC<BodyElement> }]>;
export interface FrameProps {
    head: ReactNode;
    body: ReactNode;
}

export interface FrameState {
    loaded: boolean;
    body: HTMLBodyElement;
    head: HTMLHeadElement;
}

export default class Frame extends React.PureComponent<FrameProps, FrameState> {
    frameRef: HTMLIFrameElement | null = null;
    // handleLoad = this.handleLoad.bind(this);

    // ((!node || !node.contentWindow) && null) || node.contentWindow.document.body;
    getDoc = (): Document | null => {
        return this.frameRef ? this.frameRef.contentDocument : null;
    };

    handleLoad = () => {
        if (this.frameRef) {
            const doc = this.getDoc();

            if (doc) {
                const body = doc.querySelector("body") as HTMLBodyElement;
                const head = doc.querySelector("head") as HTMLHeadElement;

                this.setState({ loaded: true, body: body, head: head });
            }
        }
    };

    get document() {
        return this.frameRef ? this.frameRef.contentDocument : null;
    }
    get window() {
        return this.frameRef ? this.frameRef.contentWindow : null;
    }

    componentWillMount() {
        this.setState({ loaded: false });
    }

    componentDidMount() {
        if (this.frameRef) {
            this.frameRef.addEventListener("load", () => this.handleLoad(), true);
        }
    }
    componentWillUnmount() {
        if (this.frameRef) {
            this.frameRef.removeEventListener("load", () => this.handleLoad(), true);
        }

        delete this.frameRef;
    }

    getHead = () => {
        const head: HTMLHeadElement | null = this.state.head;

        if (head != null) {
            return (head.innerHTML = renderToString(<>{this.props.head}</>));
        }
    };

    render() {
        const { children, ...rest } = this.props;

        return (
            <iframe
                srcDoc={`<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vm"></html>`}
                {...rest}
                ref={(el) => (this.frameRef = el)}
                width="100%"
                height="100%"
            >
                {this.state.loaded ? this.getHead() : null}
                {this.state.loaded && this.state.body
                    ? ReactDOM.createPortal(
                          <FrameProvider doc={this.document} win={this.window}>
                              {this.props.body}
                          </FrameProvider>,
                          this.state.body
                      )
                    : null}
            </iframe>
        );
    }
}
