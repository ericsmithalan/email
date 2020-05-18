import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface HeadElement extends React.HTMLProps<HTMLHeadElement>, PrimitveElement {}

const Head: FC<HeadElement> = (props: HeadElement) => {
    return <head {...(props as HeadElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

export { Head };
