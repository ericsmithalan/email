import React, { Component, Children } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

export type ContentProps = {
    contentDidMount: Function;
    contentDidUpdate: Function;
};

export default class Content extends Component<ContentProps> {
    static propTypes = {
        children: PropTypes.element.isRequired,
        contentDidMount: PropTypes.func.isRequired,
        contentDidUpdate: PropTypes.func.isRequired,
    };

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
