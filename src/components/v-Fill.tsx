import React, { FC } from "react";

export interface FillProps {
    src?: string;
    color?: boolean;
    type?: string;
}

const Vfill: FC<FillProps> = (props: FillProps) => {
    Vfill.defaultProps = {
        type: "frame"
    };

    const el = React.createElement("v:fill", props);

    return el;
};

export { Vfill };
