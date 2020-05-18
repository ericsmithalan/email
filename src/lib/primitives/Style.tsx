import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface StyleElement extends React.HTMLProps<HTMLStyleElement>, PrimitveElement {}

const Style: FC<StyleElement> = (props: StyleElement) => {
    return <style {...(props as StyleElement)} />;
};

export { Style };
