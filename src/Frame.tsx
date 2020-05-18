import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import { FrameContextProvider } from "./Context";

export interface FrameProps extends React.HTMLProps<HTMLIFrameElement> {
    head: ReactNode;
    initialContent: string;
    mountTarget: string;
    contentDidMount: Function;
    contentDidUpdate: Function;
}

export interface FrameState {}

export default class Frame extends Component<FrameProps> {
    _ref = React.createRef<HTMLIFrameElement>();
    _isMounted = false;

    static defaultProps = {
        style: {},
        head: null,
        children: undefined,
        mountTarget: undefined,
        contentDidMount: () => {},
        contentDidUpdate: () => {},
        initialContent:
            '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
    };

    constructor(props: FrameProps, context: React.Context<FrameProps>) {
        super(props, context);
    }

    componentDidMount() {
        this._isMounted = true;

        const doc: Document | null = this.getDoc();
        if (doc && doc.readyState === "complete") {
            this.forceUpdate();
        } else {
            const iframe = this._ref.current;

            if (iframe) {
                iframe.addEventListener("load", this.handleLoad);
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        const iframe = this._ref.current;

        if (iframe) {
            iframe.removeEventListener("load", this.handleLoad);
        }
    }

    getDoc(): Document | null {
        if (this._ref && this._ref.current) {
            return this._ref.current.contentDocument;
        }
        return null;
    }

    getMountTarget() {
        const doc: Document | null = this.getDoc();

        if (doc) {
            if (this.props.mountTarget) {
                return doc.querySelector(this.props.mountTarget);
            }
            return doc.body.children[0];
        }
    }

    handleLoad = () => {
        this.forceUpdate();
    };

    renderFrameContents() {
        if (!this._isMounted) {
            return null;
        }

        const doc = this.getDoc();

        if (!doc) {
            return null;
        }

        const contentDidMount = this.props.contentDidMount;
        const contentDidUpdate = this.props.contentDidUpdate;

        const win = doc.defaultView || window;
        const contents = (
            <Content contentDidMount={contentDidMount} contentDidUpdate={contentDidUpdate}>
                <FrameContextProvider value={{ document: doc, window: win }}>
                    <div className="frame-content">{this.props.children}</div>
                </FrameContextProvider>
            </Content>
        );

        if (doc.body.children.length < 1) {
            doc.open("text/html", "replace");
            doc.write(this.props.initialContent);
            doc.close();
        }

        const mountTarget = this.getMountTarget();

        if (doc && mountTarget) {
            return [
                ReactDOM.createPortal(this.props.head, doc.head),
                ReactDOM.createPortal(contents, mountTarget),
            ];
        }
    }

    render() {
        const props = {
            ...this.props,
            children: undefined, // The iframe isn't ready so we drop children from props here. #12, #17
        };
        delete props.head;
        delete props.initialContent;
        delete props.mountTarget;
        delete props.contentDidMount;
        delete props.contentDidUpdate;
        return (
            <iframe {...props} ref={this._ref}>
                {this.renderFrameContents()}
            </iframe>
        );
    }
}
