import React, { Component, Children, ReactNode } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

export interface ContentProps {
    children: ReactNode;
    contentDidMount: () => void;
    contentDidUpdate: () => void;
}

export default class Content extends Component<ContentProps> {
    componentDidMount() {
        this.props.contentDidMount();
    }

    componentDidUpdate() {
        this.props.contentDidUpdate();
    }

    render() {
        return Children.only(this.props.children);
    }
}
