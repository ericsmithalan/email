import React from "react";

import { style } from "../lib/css-js/style";
import { useStyledModel } from "../lib/hooks/useStyledModel";
import { Img, Table, Td, Tr } from "../lib/primitives";
import { HeaderModel } from "../models/Header";

const styles = style({
    headerImage: {
        width: 150,
        height: "auto"
    }
});

export const Header = ({ title, image, date }: HeaderModel) => {
    let img = useStyledModel(styles, image);

    return (
        <Table>
            <Tr>
                <Td>
                    <Img {...image} />
                </Td>
            </Tr>
            <Tr>
                <Td>{title}</Td>
            </Tr>
            <Tr>
                <Td>{date?.toString()}</Td>
            </Tr>
        </Table>
    );
};
