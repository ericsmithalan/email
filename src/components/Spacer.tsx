import React, { FC, ReactNode } from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Table, Td, Tr } from "../lib/primitives";
import { Styleable } from "../lib/types";

const styles = style({
    spacer: {}
});

type Props = { height?: number | string } & Styleable;

export const Spacer: FC<Props> = (props: Props) => {
    const { spacer } = useClassNames(styles);

    Spacer.defaultProps = {
        className: spacer,
        height: 20
    };

    useStyle2(styles, props, Spacer.defaultProps);

    const render = () => {
        return (
            <Table className={spacer}>
                <Tr>
                    <Td>&nbsp;</Td>
                </Tr>
            </Table>
        );
    };

    return render();
};
