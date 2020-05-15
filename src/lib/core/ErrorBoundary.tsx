import React, { Component, ErrorInfo } from "react";
import PropTypes from "prop-types";

type Props = {};
type State = {
    error: Error;
    errorInfo: ErrorInfo;
    hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false,
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({ hasError: true, error: error, errorInfo: info });
        console.group("componentDidCatch");
        console.error(error);
        console.info(info);
        console.groupEnd();
    }

    render() {
        if (this.state.hasError) {
            return <h1>An Error Occurred 😢</h1>;
        }
        return this.props.children;
    }
}
