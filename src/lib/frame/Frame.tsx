import React, { FC, ReactChild, ReactNode } from "react";
import ReactDOM from "react-dom";

import { FrameProvider } from "./FrameContext";

export interface FrameMessage {
    name: string;
}

export interface FrameProps {
    body: ReactNode;
    handleReceiveMessage?: (event: MessageEvent) => void;
    onDocumentReady?: (doc: Document) => void;
    sendMessage?: () => void;
}

export interface FrameState {
    loaded: boolean;
    root: HTMLHtmlElement;
}

export default class Frame extends React.PureComponent<FrameProps, FrameState> {
    frameRef: HTMLIFrameElement | null = null;
    loaded: boolean = false;
    origin: string = "http://localhost:3000";

    getDoc = (): Document | null => {
        return this.frameRef ? this.frameRef.contentDocument : null;
    };

    getWindow = (): Window | null => {
        return this.frameRef ? this.frameRef.contentWindow : null;
    };

    handleLoad = () => {
        if (this.frameRef) {
            const doc = this.getDoc();

            if (doc) {
                const html = doc.querySelector("html") as HTMLHtmlElement;
                const header = doc.querySelector("head") as HTMLHeadElement;

                doc.body.remove();

                if (header) {
                    header.remove();
                }

                this.setState({ loaded: true, root: html }, () => {
                    if (this.props.onDocumentReady) {
                        this.props.onDocumentReady(doc);
                    }
                });
            }

            this.loaded = true;
        }
    };

    get document() {
        return this.frameRef ? this.frameRef.contentDocument : null;
    }

    get window() {
        return this.frameRef ? this.frameRef.contentWindow : null;
    }

    onReceiveMessage = (event: MessageEvent) => {
        const { handleReceiveMessage } = this.props;
        if (handleReceiveMessage) {
            handleReceiveMessage(event);
            console.log(event);
        }
    };

    componentWillMount() {
        window.addEventListener("message", (event: MessageEvent) => this.onReceiveMessage(event));
        this.setState({ loaded: false });
    }

    componentDidMount() {
        if (this.frameRef) {
            this.frameRef.addEventListener("load", () => this.handleLoad(), true);
        }
        window.removeEventListener(
            "message",
            (event: MessageEvent) => this.onReceiveMessage(event),
            false
        );
    }

    sendMessage(message: FrameMessage) {
        const win = this.getWindow();
        if (win) {
            win.postMessage(message, this.origin);
        }
    }

    componentWillUnmount() {
        if (this.frameRef) {
            this.frameRef.removeEventListener("load", () => this.handleLoad(), true);
        }

        delete this.frameRef;
    }

    render() {
        const { onDocumentReady, children, ...rest } = this.props;

        return (
            <iframe
                srcDoc={`<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vm"></html>`}
                {...rest}
                ref={(el) => (this.frameRef = el)}
                width="100%"
                frameBorder="0"
                height={2000}
            >
                {this.state.loaded && this.state.root
                    ? ReactDOM.createPortal(
                          <FrameProvider doc={this.document} win={this.window}>
                              {this.props.body}
                          </FrameProvider>,
                          this.state.root
                      )
                    : null}
            </iframe>
        );
    }
}
