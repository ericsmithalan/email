import React from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { P, Table, Td, Tr } from "../lib/primitives";
import { Prop } from "../lib/types";
import { BlurbModel } from "../models/Blurb";
import { Hero } from "./Hero";
import { Label } from "./Label";

const styles = style({
    headerTitle: {
        fontSize: (p: Prop) => p.t.fonts.fontHeaderSize,
        fontWeight: 600,
        "@tablet": {
            fontSize: (p: Prop) => p.t.fonts.fontTitleSize
        },
        ":hover": {
            backgroundColor: "yellow"
        }
    },
    subTitle: {
        fontSize: (p: Prop) => p.t.fonts.fontSubHeaderSize,
        fontWeight: 400,
        marginBottom: 15,
        "@tablet": {
            fontSize: (p: Prop) => p.t.fonts.fontTitleSize
        }
    },
    intro: {
        fontSize: (p: Prop) => p.t.fonts.fontTitleSize,
        fontWeight: 600,
        "@tablet": {
            fontSize: (p: Prop) => p.t.fonts.fontTitleSize
        }
    }
});

type Props = BlurbModel;

export const Blurb = (props: Props) => {
    const { headerTitle, subTitle, intro } = useClassNames(styles);

    useStyle2(styles, props, {});

    return (
        <Table>
            {props.hero && (
                <Tr>
                    <Td>
                        <Hero {...props.hero} />
                    </Td>
                </Tr>
            )}
            <Tr>
                <Td>
                    <Label lineBreak={true} className={headerTitle}>
                        {props.title}
                    </Label>
                    <Label lineBreak={true} className={subTitle}>
                        {props.subTitle}
                    </Label>
                    <Label lineBreak={true} className={intro}>
                        {props.intro}
                    </Label>

                    {props.paragraphs.map((item: string, i: number) => (
                        <P key={i}>{item}</P>
                    ))}
                </Td>
            </Tr>
        </Table>
    );
};
