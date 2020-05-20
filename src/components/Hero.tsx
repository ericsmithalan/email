import React from "react";

import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Img, Table, Td, Tr } from "../lib/primitives";
import { style } from "../lib/style";
import { HeroModel } from "../models/Hero";

const styles = style({
    heroImage: {
        "@tablet": {
            width: "100%",
            height: "auto"
        }
    }
});

type Props = HeroModel;

export const Hero = (props: Props) => {
    const { heroImage } = useClassNames(styles);
    useStyle2(styles, props, {});

    return (
        <Table>
            <Tr>
                <Td>
                    <Img {...props.image} className={heroImage} />
                </Td>
            </Tr>
        </Table>
    );
};
