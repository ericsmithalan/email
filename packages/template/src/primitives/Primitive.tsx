import * as React from "react";
import { PrimitiveOwnProps, PrimitiveProps } from "src/types";

const defaultElement = "div";

export const Primitive = React.forwardRef(
    ({ as, ...restProps }: PrimitiveOwnProps, ref: React.Ref<Element>) => {
        const Element = as || defaultElement;
        return <Element ref={ref} {...restProps} />;
    }
) as <E extends React.ElementType = typeof defaultElement>(props: PrimitiveProps<E>) => JSX.Element;
