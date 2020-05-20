import React from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyledModel } from "../lib/hooks/useStyledModel";
import { Img, Table, Td, Tr } from "../lib/primitives";
import { HeaderModel } from "../models/Header";
import { StyleableModel } from "../models/types";

const styles = style({
    headerImage: {
        width: 150,
        height: "auto"
    }
});

export const Header = ({ title, image, date }: HeaderModel) => {
    const { headerImage } = useClassNames(styles);

    console.log(headerImage);
    let img = useStyledModel(styles, image, headerImage) as StyleableModel<HTMLImageElement>;

    return (
        <Table>
            {img && (
                <Tr>
                    <Td>
                        <Img {...img} />
                    </Td>
                </Tr>
            )}

            <Tr>
                <Td>{title}</Td>
            </Tr>
            <Tr>
                <Td>{date?.toString()}</Td>
            </Tr>
        </Table>
    );
};
