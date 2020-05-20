import React from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Img, Table, Td, Tr } from "../lib/primitives";
import { Prop } from "../lib/types";
import { HeaderModel } from "../models/Header";
import { Label } from "./Label";

const styles = style({
    headerImage: {
        "@tablet": {
            width: "100%",
            height: "auto"
        }
    },
    headerTitle: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        fontWeight: (p: Prop) => 600
    }
});

type Props = HeaderModel;

export const Header = (props: Props) => {
    const { headerImage, headerTitle } = useClassNames(styles);

    useStyle2(styles, props, {});

    return (
        <Table>
            {props.image && (
                <Tr>
                    <Td>
                        <Img {...props.image} className={headerImage} />
                    </Td>
                </Tr>
            )}
            <Tr>
                <Td>
                    <Label className={headerTitle}>{props.title}</Label>
                </Td>
            </Tr>
            {props.date && (
                <Tr>
                    <Td>
                        <Label>{props.date.toDateString()}</Label>
                    </Td>
                </Tr>
            )}
        </Table>
    );
};
