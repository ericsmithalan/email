import * as React from "react";
import { ThemeContext } from "../context/ThemeContext";

export function withTheme<T extends object>(Component: React.ComponentType<T>) {
    return function ThemeComponent(props: T) {
        return (
            <ThemeContext.Consumer>
                {(contexts) => <Component {...props} {...contexts} />}
            </ThemeContext.Consumer>
        );
    };
}
