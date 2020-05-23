import { Link } from "@templates/elements";
import { css, useCssClasses, useCssProps } from "@templates/jscss";
import { useTemplate } from "@templates/main";
import React, { FC } from "react";

const styles = css({
    componentOne: {
        backgroundColor: "red"
    }
});

type Props = {};

const App: FC<Props> = (props: Props) => {
    const template = useTemplate();

    template.setRenderFor("email");

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

    return <Link {...newProps}>Hi</Link>;
};

export default App;
