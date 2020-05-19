import React, { Children, Component, ReactNode } from "react";

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
