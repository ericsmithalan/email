import React, { FC, ReactNode } from "react";

import { Styleable } from "../../lib/types";
import { StandardContainer } from "./StandardContainer";

export interface ContentWithGuttersProps extends Styleable {
    leftGutterContent?: ReactNode;
    children?: ReactNode;
}

const ContentWithGutters: FC<ContentWithGuttersProps> = (props: ContentWithGuttersProps) => {
    return (
        <StandardContainer
            columnGutter={180}
            rowGutter={100}
            gutterLeftContent={props.leftGutterContent}
        >
            {props.children}
        </StandardContainer>
    );
};

export default ContentWithGutters;
