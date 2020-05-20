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
        fontSize: (p: Prop) => p.t.fonts.fontHeaderSize
    }
});

type Props = HeaderModel;

export const Header = (props: Props) => {
    const { headerImage, headerTitle } = useClassNames(styles);

    //let img = useStyledModel(styles, image, headerImage) as Styleable;

    let merged = useStyle2(styles, props, {});

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
