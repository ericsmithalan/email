import React, { Component, ReactNode } from "react";
import * as server from "../ServerProvider";

const isServer = typeof window === "undefined";

type State = {
    hasError: boolean;
};
type Props = {
    fallBack: () => ReactNode;
};

const withBoundary = (contextTypes: object = {}) => {
    const ProvideContext = isServer && server._makeProvider(contextTypes);

    return class ServerBoundary extends Component<Props, State> {
        static defaultProps = {
            fallBack: () => null,
        };
        static contextTypes = contextTypes;
        state = {
            hasError: false,
        };

        componentDidCatch() {
            this.setState({
                hasError: true,
            });
        }

        render() {
            if (server) return server._render(this, ProvideContext);
            return <div>{this.state.hasError ? this.props.fallBack() : this.props.children}</div>;
        }
    };
};

export { withBoundary };
