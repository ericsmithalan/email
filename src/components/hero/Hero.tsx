import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span, P, A } from "../../lib/primitives";
import { Layout } from "../types";
import { useStyle2 } from "../../lib";
import { style } from "../../lib/css-js/style";
import { renderToString } from "react-dom/server";
import { Label } from "../label/Label";
import { If, IfProps } from "../if/If";
import { Prop } from "src/lib/types";

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
    header: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        fontSize: 40,
        fontWeight: 600,
        marginTop: 30,
    },
    subHeader: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 15,
    },
    title: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        fontSize: 20,
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
    const { mergedProps, classNames } = useStyle2<HeroProps>(styles, props, Hero.defaultProps);

    const { background, ...rest } = mergedProps;
    //1128 × 642
    return (
        <Table width={props.width} height={props.height}>
            <Tr>
                <Td background={props.background} height={props.height}>
                    <If {...outlookBackground(props.width, props.height, props.background)}>
                        <Label>Cool Text</Label>
                    </If>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Label lineBreak={true} className={classNames.header}>
                        FOOT LOCKER
                    </Label>
                    <Label lineBreak={true} className={classNames.subHeader}>
                        WEBBY HONOREE
                    </Label>

                    <Label lineBreak={true} className={classNames.title}>
                        FOOT LOCKER PROJECT GREENHOUSE RECEIVES WEBBY HONOR
                    </Label>

                    <P>
                        Foot Locker’s <A href="#">Project Greenhouse</A> mobile and web application
                        developed by the Ascendum Digital team is an honoree in the 2020 Webby
                        Awards. The international Webby Awards is hailed as the "Internet's highest
                        honor" by The New York Times. There were more than 13k submissions this
                        year.
                    </P>

                    <P>
                        By earning the “Honoree” status, Project Greenhouse was named a top five
                        submission in the Mobile App Beauty and Lifestyle category, along with
                        notable names including Macy’s and Gucci. The Webby Awards is the leading
                        international awards organization honoring excellence on the Internet,
                        including websites, video, advertising, media & PR, apps, mobile, voice,
                        social, podcasts, and games.
                    </P>

                    <P>
                        The official Webby Award (selected by the Academy) and People’s Voice Award
                        (selected by the voting public) winners will be announced during a live
                        streaming broadcast on Tuesday May 19 at 3pm ET, 12pm PT, and 8pm GMT at
                        www.webbyawards.com. The event is virtually hosted by stand-up comedian,
                        actor and writer Patton Oswalt.
                    </P>

                    <P>
                        From April 27 through May 7, more than 600k people cast nearly 2.2 million
                        votes in the People’s Choice Award. Huge thanks to all Vora employees who
                        took the time to vote for and promote the Greenhouse nomination through your
                        social media channels and elsewhere. We greatly appreciate your support.{" "}
                    </P>

                    <P>
                        This is the second prestigious award the app has won, after receiving a Gold
                        Award in the Hermes Creative Awards last month. A fantastic accomplishment
                        all – well done!
                    </P>

                    <P>
                        Project Greenhouse Ascendum Team: Android Devs - Ben Beverly and Matt Laser;
                        iOS Devs - Marcus Adams and Mark Fisher; Website Devs - Jimmy Kausha and
                        Tyler Knipfer; Azure Devs - Sraddhan Shah and Nitin Rangarajan; QA - Ani
                        Talukder and Marc Betts; Designer - Kristin Rohrkasse; Product Director -
                        Robbie Sykes
                    </P>
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
