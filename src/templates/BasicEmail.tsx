import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A, useStyle2, Table, Tr, Td } from "src/lib";
import { style } from "src/lib/css-js/style";
import { Label } from "src/components/label/Label";
import { SignatureProps } from "src/components/signature/Signature";
import { Styleable, Prop } from "src/lib/types";
import { FC } from "react";

export interface BasicEmailProps extends Styleable {
    to: string;
    signature: SignatureProps;
    content: string[];
}

const styles = style({
    cornerImage: {
        width: 118,
        height: "auto",
        "@tablet": {
            width: "100%",
        },
        "@phone": {
            width: "100%",
        },
    },
    to: {
        fontWeight: (p: Prop) => p.t.fonts.boldWeight,
    },
});

const BasicEmail: FC<BasicEmailProps> = (props: BasicEmailProps) => {
    const { classNames, mergedProps } = useStyle2<BasicEmailProps>(
        styles,
        props,
        BasicEmail.defaultProps,
    );

    return (
        <Container
            columnGutter={80}
            rowGutter={100}
            gutterLeftContent={
                <Img className={classNames.cornerImage} src="/images/graphics/corner@2x.png" />
            }
        >
            <Table>
                <Tr>
                    <Td>
                        <Label className={classNames.to}>{props.to}</Label>

                        {props.content.map((items: string, index: number) => (
                            <P key={index}>{items}</P>
                        ))}
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Spacer height={50} />
                        <Signature {...props.signature} />
                    </Td>
                </Tr>
            </Table>
        </Container>
    );
};

export default BasicEmail;
