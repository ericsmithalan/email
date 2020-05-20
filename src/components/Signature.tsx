import React, { FC } from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { A, Img, Table, Td, Tr } from "../lib/primitives";
import { Prop } from "../lib/types";
import { Department, Location, SignatureModel } from "../models/Signature";
import { Label } from "./Label";

export type Props = {} & SignatureModel;

const Signature: FC<Props> = (props: Props) => {
    const {
        ctlSignature,
        ctlName,
        ctlJobTitle,
        ctlHeading,
        ctlEmail,
        ctlMargin1,
        ctlAddress,
        ctlPhone
    } = useClassNames(styles);

    const mergedProps = useStyle2<Props>(styles, props, {
        className: ctlSignature
    });

    const {
        name,
        jobTitle,
        email,
        department,
        workPhone,
        cellPhone,
        location,
        ...rest
    } = mergedProps;

    const address = getAddress(props.location);

    return (
        <Table {...rest}>
            <Tr>
                <Td>
                    <Label lineBreak={true} className={ctlName}>
                        {props.name}
                    </Label>
                    <Label className={ctlJobTitle}>{props.jobTitle}</Label>
                </Td>
            </Tr>
            <Tr>
                <Td height={8}></Td>
            </Tr>
            <Tr>
                <Td>
                    <A href={"http://www.ascendum.com"}>
                        <Img width={213} height={45} />
                    </A>
                </Td>
            </Tr>
            <Tr>
                <Td height={8}></Td>
            </Tr>
            <Tr>
                <Td>
                    <Table>
                        <Tr>
                            <Td>
                                <Label className={ctlHeading}>E</Label>
                            </Td>
                            <Td colSpan={3}>
                                <Label className={ctlEmail}>{props.email}</Label>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Label className={ctlHeading}>T</Label>
                            </Td>
                            <Td className={ctlMargin1}>
                                <Label className={ctlPhone}>{props.workPhone}</Label>
                            </Td>
                            <Td>
                                <Label className={ctlHeading}>C</Label>
                            </Td>
                            <Td>
                                <Label className={ctlPhone}>{props.cellPhone}</Label>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Label className={ctlHeading}>W</Label>
                            </Td>
                            <Td colSpan={3}>
                                <A href={"http://www.ascendum.com"}>ascendum.com</A>
                            </Td>
                        </Tr>
                    </Table>
                </Td>
            </Tr>
            <Tr>
                <Td height={15}></Td>
            </Tr>
            <Tr>
                <Td>
                    {address.map((value: string, i: number) => (
                        <Label className={ctlAddress} lineBreak={true} key={i}>
                            {value}
                        </Label>
                    ))}
                </Td>
            </Tr>
        </Table>
    );
};

const styles = style({
    ctlSignature: {
        color: (p: Prop) => p.t.colors.darkFontColor
    },
    ctlLink: {
        color: (p: Prop) => p.t.colors.darkFontColor
    },
    ctlName: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        textTransform: "uppercase",
        fontWeight: 600,
        color: (p: Prop) => p.t.colors.darkFontColor
    },
    ctlJobTitle: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        textTransform: "uppercase",
        fontWeight: 600,
        color: (p: Prop) => p.t.colors.orangeColor
    },
    ctlAddress: {
        color: (p: Prop) => p.t.colors.darkFontColor
    },
    ctlEmail: {
        color: (p: Prop) => p.t.colors.darkFontColor,
        textTransform: "lowercase"
    },
    ctlPhone: {
        color: (p: Prop) => p.t.colors.darkFontColor
    },
    ctlHeading: {
        color: (p: Prop) => p.t.colors.orangeColor,
        fontWeight: 600,
        paddingRight: 5
    },
    ctlMargin1: {
        paddingRight: 10
    }
});

const getLogoUrl = (department: Department): string => {
    const imagePath = "/images/signature/";

    switch (department) {
        case "Ascendum": // ascendum
            return `${imagePath}ASCENDUM_CORE@2x.png`;
        case "Ascendum Digital": // digital
            return `${imagePath}ASCENDUM_DIGITAL@2x.png`;
        case "Ascendum Talent": // talent
            return `${imagePath}ASCENDUM_TALENT@2x.png`;
        case "Ascendum KPS": // kps
            return `${imagePath}ASCENDUM_KPS@2x.png`;
        case "Ascendum Products": // products
            return `${imagePath}ASCENDUM_CORE@2x.png`;
        case "Ascendum Distancing": // DISTANCING
            return `${imagePath}ASCENDUM_DISTANCING@2x.png`;
        default:
            return "";
    }
};

const getPhone = (location: Location): string | undefined => {
    switch (location) {
        case "US HQ": //US HQ
            return "+1 513 792 5100";
        case "India HQ": //INDIA HQ
            return "+91 80 4931 000";
        case "India": //INDIA
            return "91 80675 00800";
        case "Cambridge UK":
            return undefined;
        case "New Jersey US": //New Jersey US
            return undefined;
        case "Ahmedabad India": //Ahmedabad India
            return undefined;
        case "Sydney Australia":
            return "+61 2 8417 3140";
        default:
            return undefined;
    }
};

const getAddress = (location: Location): string[] => {
    switch (location) {
        case "US HQ": //US HQ
            return ["10290 Alliance Road", "Blue Ash Ohio 45242 USA"];
        case "India HQ": //INDIA HQ
            return ["#170-172 Phase 2 EPIP Whitefield", "Bengaluru 560066 India"];
        case "India": //INDIA
            return [
                "2nd Floor A Block Salarpuria Aura Marathahalli-Sarjapu",
                "Outer Ring Road Bengaluru 560103 India"
            ];
        case "Cambridge UK": //Cambridge UK
            return ["50-60 Station Road", "Cambridge CB1 2JH UK"];
        case "New Jersey US": //New Jersey US
            return ["50 Harrison Street Hoboken", "New Jersey 07030 USA"];

        case "Ahmedabad India": //Ahmedabad India
            return ["7th Floor GNFC Info Tower Bodakdev", "Ahmedabad 380054 India"];

        case "Sydney Australia": //Sydney Australia
            return ["Suite 55 Level 2 65-71 Belmore Rd", "Randwick NSW 2031 Australia"];
        default:
            return ["", "", ""];
    }
};

export { Signature };
