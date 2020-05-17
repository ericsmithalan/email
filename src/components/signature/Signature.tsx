import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, A, Img } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useStyle2 } from "src/lib";
import { Label } from "../label/Label";
import { Styleable } from "src/lib/types";

export type Department =
    | "Ascendum"
    | "Ascendum Digital"
    | "Ascendum Talent"
    | "Ascendum KPS"
    | "Ascendum Products"
    | "Ascendum Distancing";

export type Location =
    | "US HQ"
    | "India HQ"
    | "India"
    | "Cambridge UK"
    | "New Jersey US"
    | "Ahmedabad India"
    | "Sydney Australia";

export interface SignatureProps extends Layout<SignatureProps> {
    name: string;
    jobTitle: string;
    email: string;
    department: Department;
    workPhone: string;
    cellPhone: string;
    location: Location;
}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    Signature.defaultProps = {
        className: styles.classNames.signature,
    };

    const { classNames, mergedProps } = useStyle2<SignatureProps>(
        styles,
        props,
        Signature.defaultProps,
    );

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
                    <Label lineBreak={true} className={classNames.name}>
                        {props.name}
                    </Label>
                    <Label className={classNames.jobTitle}>{props.jobTitle}</Label>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <A href={"http://www.ascendum.com"}>
                        <Img width={213} height={45} src={getLogoUrl(props.department)} />
                    </A>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Table>
                        <Tr>
                            <Td>
                                <Label className={classNames.heading}>E</Label>
                            </Td>
                            <Td colSpan={3}>
                                <Label className={classNames.email}>{props.email}</Label>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Label className={classNames.heading}>T</Label>
                            </Td>
                            <Td>
                                <Label className={classNames.phone}>{props.workPhone}</Label>
                            </Td>
                            <Td>
                                <Label className={classNames.heading}>C</Label>
                            </Td>
                            <Td>
                                <Label className={classNames.phone}>{props.cellPhone}</Label>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Label className={classNames.heading}>W</Label>
                            </Td>
                            <Td colSpan={3}>
                                <A href={"http://www.ascendum.com"}>ascendum.com</A>
                            </Td>
                        </Tr>
                    </Table>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    {address.map((value: string, i: number) => (
                        <Label className={classNames.address} lineBreak={true} key={i}>
                            {value}
                        </Label>
                    ))}
                </Td>
            </Tr>
        </Table>
    );
};

const getColor = (): string => {
    switch (this.props.org) {
        case "0":
            return "#ff9900";
        case "1":
            return "#bbb5b1";
        case "2":
            return "#89cff0";
        case "3":
            return "#ca86ff";
        case "4":
            return "#2C2C2C";
        case "5":
            return "#ff9900";
        default:
            return "#2C2C2C";
    }
};

const getOrgName = (department: Department): string => {
    switch (this.props.org) {
        case "0":
            return "Ascendum";
        case "1":
            return "Ascendum Digital";
        case "2":
            return "Ascendum Talent";
        case "3":
            return "Ascendum KPS";
        case "4":
            return "Ascendum Products";
        case "5":
            return "Ascendum Distancing";
        default:
            return "";
    }
};

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

const getPhone = (location: Location): string => {
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
            return ["10290 Alliance Road", "Blue Ash Ohio 45242 USA", "+1 513 792 5100"];
        case "India HQ": //INDIA HQ
            return ["#170-172 Phase 2 EPIP Whitefield", "Bengaluru 560066 India"];
        case "India": //INDIA
            return [
                "2nd Floor A Block Salarpuria Aura Marathahalli-Sarjapu",
                "Outer Ring Road Bengaluru 560103 India",
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
