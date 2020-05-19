import React, { FC } from "react";

import { style } from "./lib/css-js/style";
import { useStyle2 } from "./lib/hooks/useStyle2";
import { Table, Td, Tr } from "./lib/primitives";

const styles = style({
    app: {
        backgroundColor: "red",
        "@tablet": {
            backgroundColor: "blue",
        },
        "@phone": {
            backgroundColor: "green",
        },
        ":hover": {
            backgroundColor: "orange",
        },
    },
});

interface AppProps {}

const App: FC<AppProps> = (props: AppProps) => {
    App.defaultProps = {
        className: styles.classNames.app,
    };

    const { mergedProps } = useStyle2<AppProps>(styles, props, App.defaultProps);

    return (
        <Table {...mergedProps}>
            <Tr>
                <Td>hello again</Td>
            </Tr>
        </Table>
    );
};

export default App;
