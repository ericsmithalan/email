import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import { useStyle2 } from "../../lib";
import { style } from "../../lib/css-js/style";
import { C } from "../comment/C";
import { Label } from "../label/Label";
import { Rect } from "../v/Rect";

export interface HeroProps extends Layout<HeroProps> {
    background?: string;
    width?: string | number;
    height?: string | number;
}

const styles = style({
    label: {
        "@tablet": {
            width: "100%",
            clear: "both",
        },
        "@phone": {
            width: "100%",
            clear: "both",
        },
    },
});

const Hero: FC<HeroProps> = (props: HeroProps) => {
    Hero.defaultProps = {
        className: styles.classNames.label,
    };

    const { mergedProps, classNames } = useStyle2<HeroProps>(styles, props, Hero.defaultProps);

    const { background, ...rest } = mergedProps;
    //1128 × 642
    return (
        <Table width={props.width} height={props.height} background={props.background}>
            <Tr>
                <Td>
                    <Label>text</Label>

                    <Rect width={props.width}>
                        <C if="gte mso 9">
                            <Div>
                                <Table>
                                    <Tr>
                                        <Td></Td>
                                    </Tr>
                                </Table>
                            </Div>
                        </C>
                    </Rect>
                    {/* <C if="gte mso 9">
                        {`
                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:${props.width}px">
                            <v:fill type="frame" src="http://placehold.it/${props.width}x${props.height}" color="#ffffff" />
                            <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                            <div style="font-size:1px;line-height:1px">
                            <table width="${props.width}px" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                            <tr>
                            <td height="${props.height}px" align="center">
                    `}
                    </C>

                    <C if="gte mso 9">
                        {`
                            </td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            </v:textbox>
                            </v:rect>
                    `}
                    </C> */}
                </Td>
            </Tr>
        </Table>
    );
};

export { Hero };
