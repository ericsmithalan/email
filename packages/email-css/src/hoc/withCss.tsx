import React, { CSSProperties } from "react";
import { CssStyle } from "../CssStyle";
import { useRepository } from "../hooks/useRepository";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";
import { CssHelpers } from "../helpers/CssHelpers";

export interface WithCssProps {
    classId: string;
}

const withCss = (cssStyle: CssStyle) => <P extends object>(
    WrappedComponent: React.ComponentType<React.HTMLProps<P>>,
) => <T extends React.HTMLProps<P>>(props: T) => {
    const repository = useRepository();
    const defaultProps = WrappedComponent?.defaultProps;

    const styles = repository.register(cssStyle.classes, cssStyle.properties, defaultProps, props);

    return (
        <WrappedComponent
            {...props}
            className={CssHelpers.combineClassNames(defaultProps, props)}
            style={styles}
        />
    );
};

export { withCss };
