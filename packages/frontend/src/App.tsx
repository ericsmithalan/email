import { css, useCssClasses, useCssProps } from "@templates/jscss";
import { Primitive, useTemplate } from "@templates/template";
import React, { FC } from "react";

const styles = css({
    componentOne: {
        backgroundColor: "red"
    }
});

type Props = {};

const App: FC<Props> = (props: Props) => {
    const template = useTemplate();

    const classes = useCssClasses(styles);

    App.defaultProps = {
        className: classes.componentOne,
        width: 500,
        height: 300,
        style: {
            borderColor: "blue",
            borderWidth: 1
        }
    };

    const newProps = useCssProps(styles, props, App.defaultProps);

    return (
        <Primitive as="div" {...newProps}>
            Hi
        </Primitive>
    );
};

export default App;
