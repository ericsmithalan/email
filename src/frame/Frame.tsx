import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import { FrameContextProvider } from "./Context";
import { renderToString } from "react-dom/server";
export interface FrameProps extends React.HTMLProps<HTMLIFrameElement> {
    document?: ReactNode;
    contentDidMount?: () => void;
    contentDidUpdate?: () => void;
}

export interface FrameState {}

export default class Frame extends Component<FrameProps> {
    _mountTarget: HTMLBodyElement | null = null;
    _ref = React.createRef<HTMLIFrameElement>();
    _isMounted = false;
    _doc: Document | null = null;
    _frame: HTMLIFrameElement | null = null;

    constructor(props: FrameProps, context: React.Context<FrameProps>) {
        super(props, context);
    }

    componentDidMount() {
        this._isMounted = true;

        if (this._ref && this._ref.current) {
            this._doc = this._ref.current.contentDocument;
        }

        if (this._doc && this._doc.readyState === "complete") {
            this.forceUpdate();
        } else {
            this._frame = this._ref.current;

            if (this._frame) {
                this._frame.addEventListener("load", this.handleLoad);
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        this._frame = this._ref.current;

        if (this._frame) {
            this._frame.removeEventListener("load", this.handleLoad);
        }
    }

    setMountTarget() {
        if (this._doc != null) {
            this._mountTarget = this._doc.body.children[0] as HTMLBodyElement;
            console.log("this._doc.body", this._doc.body);
        }

        return null;
    }

    handleLoad = () => {
        this.forceUpdate();
    };

    renderFrameContents() {
        if (!this._isMounted) {
            return null;
        }

        if (!this._doc) {
            return null;
        }

        if (!this._mountTarget) {
            return null;
        }

        const contentDidMount = this.props.contentDidMount;
        const contentDidUpdate = this.props.contentDidUpdate;

        const win = this._doc.defaultView || window;
        const contents = (
            <Content contentDidMount={contentDidMount} contentDidUpdate={contentDidUpdate}>
                <FrameContextProvider value={{ document: this._doc, window: win }}>
                    {this.props.children}
                </FrameContextProvider>
            </Content>
        );

        if (this._doc.body.children.length < 1) {
            this._doc.open("text/html");
            this._doc.write(renderToString(<>{this.props.document}</>));
            this._doc.close();
        }

        const portals = [];
        this.setMountTarget();

        if (this.props.document) {
            portals.push(ReactDOM.createPortal(this.props.document, this._doc.documentElement));
        }

        if (this._mountTarget) {
            console.log("mountTarget", this._mountTarget);
            portals.push(ReactDOM.createPortal(contents, this._mountTarget));
        }
    }

    render() {
        const props = {
            ...this.props,
            children: undefined, // The iframe isn't ready so we drop children from props here. #12, #17
        };
        delete props.document;
        delete props.contentDidMount;
        delete props.contentDidUpdate;
        return (
            <iframe srcDoc="hello" width="100%" height="100%" {...props} ref={this._ref}>
                {this.renderFrameContents()}
            </iframe>
        );
    }
}
