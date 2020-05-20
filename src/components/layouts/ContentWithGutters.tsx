import React, { FC, ReactNode } from "react";

import { Styleable } from "../../lib/types";
import { StandardContainer } from "./StandardContainer";

export interface ContentWithGuttersProps extends Styleable {
    children: ReactNode;
}

const ContentWithGutters: FC<ContentWithGuttersProps> = (props: ContentWithGuttersProps) => {
    return <StandardContainer>{props.children}</StandardContainer>;
};

export default ContentWithGutters;
