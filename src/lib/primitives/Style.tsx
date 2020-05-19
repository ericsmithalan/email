import React, { FC } from "react";

import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

export interface StyleElement extends React.HTMLProps<HTMLStyleElement>, PrimitveElement {}

const Style: FC<StyleElement> = (props: StyleElement) => {
    return <style {...(props as StyleElement)} />;
};

export { Style };
