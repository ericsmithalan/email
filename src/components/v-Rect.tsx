import React, { FC, ReactNode } from "react";

export interface RectProps {
    children?: ReactNode;
    fill?: boolean;
    stroke?: boolean;
    fillColor?: string;
    width?: string | number;
    height?: string | number;
}

const Vrect: FC<RectProps> = (props: RectProps) => {
    Vrect.defaultProps = {
        stroke: false
    };
    return React.createElement("v:rect", props, props.children);
};

export { Vrect };
