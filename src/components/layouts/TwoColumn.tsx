import React, { FC, ReactNode } from "react";

import { Styleable } from "../../lib/types";
import { StandardContainer } from "./StandardContainer";

export interface TwoColumnProps extends Styleable {
    children: ReactNode;
}

const TwoColumn: FC<TwoColumnProps> = (props: TwoColumnProps) => {
    return <StandardContainer>{props.children}</StandardContainer>;
};

export default TwoColumn;
