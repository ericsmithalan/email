import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import { useStyle2 } from "../../lib";
import { style } from "../../lib/css-js/style";
import { renderToString } from "react-dom/server";
import { Label } from "../label/Label";
import { If, IfProps } from "../if/If";

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

const outlookBackground = (
    width: number | string,
    height: number | string,
    background: string,
): IfProps => {
    const open = ` <!--[if gte mso 9]>
    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:${width}px">
    <v:fill type="frame" src="${background}" color="#ffffff" />
    <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
    <div style="font-size:1px;line-height:1px">
    <table width="${width}" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
    <tr>
    <td height="${height}" align="center">
    <![endif]-->`;

    const close = `<!--[if gte mso 9]>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </v:textbox>
    </v:rect>
    <![endif]-->
    `;

    return {
        openHtml: open,
        closeHtml: close,
    };
};

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
                    <If {...outlookBackground(props.width, props.height, props.background)}>
                        <Label>Cool Text</Label>
                    </If>
                </Td>
            </Tr>
        </Table>
    );
};

export { Hero };

{
    /* <If condition="gte mso 9">
    <Rect width={props.width}>
        <Fill src="http://placehold.it/${props.width}x${props.height}" />
        <Textbox>
            <Div>
                <Table width={props.width}>
                    <Tr>
                        <Td height="${props.height}" align="center">
                            <Then>I'm here!</Then>
                        </Td>
                    </Tr>
                </Table>
            </Div>
        </Textbox>
    </Rect>
</If>; */
}
