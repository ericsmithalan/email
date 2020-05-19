import React, { FC } from "react";

import { PrimitveElement } from "../types";

export interface HeadElement extends React.HTMLProps<HTMLHeadElement>, PrimitveElement {}

const Head: FC<HeadElement> = (props: HeadElement) => {
    return <head {...(props as HeadElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

export { Head };
