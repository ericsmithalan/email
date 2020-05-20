import React from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyledModel } from "../lib/hooks/useStyledModel";
import { Img, Table, Td, Tr } from "../lib/primitives";
import { HeaderModel } from "../models/Header";
import { StyleableModel } from "../models/types";
import { Label } from "./Label";

const styles = style({
    headerImage: {
        "@tablet": {
            width: "100%",
            height: "auto"
        }
    }
});

export const Header = ({ title, image, date }: HeaderModel) => {
    const { headerImage } = useClassNames(styles);

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
                <Td>
                    <Label>{title}</Label>
                </Td>
            </Tr>
            {date && (
                <Tr>
                    <Td>
                        <Label>{date.toDateString()}</Label>
                    </Td>
                </Tr>
            )}
        </Table>
    );
};
