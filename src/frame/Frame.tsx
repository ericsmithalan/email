import React from "react";
import ReactDOM from "react-dom";

export interface FrameProps extends React.HTMLProps<HTMLIFrameElement> {
    doc: string;
}

export default class MyFramePortal extends React.PureComponent<FrameProps> {
    containerEl: HTMLDivElement;
    iframe: HTMLIFrameElement | null = null;

    constructor(props: FrameProps) {
        super(props);
        this.containerEl = document.createElement("div");
    }

    render() {
        return (
            <iframe title="iframe" ref={(el) => (this.iframe = el)}>
                {ReactDOM.createPortal(this.props.children, this.containerEl)}
            </iframe>
        );
    }

    componentDidMount() {
        if (this.iframe && this.iframe.contentDocument) {
            this.iframe.contentDocument.clear();
            this.iframe.contentDocument.documentElement.innerHTML = this.props.doc || "";

            this.iframe.contentDocument.body.appendChild(this.containerEl);
        }
    }
}
