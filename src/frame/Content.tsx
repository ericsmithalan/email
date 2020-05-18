import React, { Component, Children } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

export type ContentProps = {
    contentDidMount?: () => void;
    contentDidUpdate?: () => void;
};

export default class Content extends Component<ContentProps> {
    static propTypes = {
        children: PropTypes.element.isRequired,
        contentDidMount: PropTypes.func.isRequired,
        contentDidUpdate: PropTypes.func.isRequired,
    };

    componentDidMount() {
        if (this.props.contentDidMount) {
            this.props.contentDidMount();
        }
    }

    componentDidUpdate() {
        if (this.props.contentDidUpdate) {
            this.props.contentDidUpdate();
        }
    }

    render() {
        return Children.only(this.props.children);
    }
}
