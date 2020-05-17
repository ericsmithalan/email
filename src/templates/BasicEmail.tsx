import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A } from "src/lib";
import { style } from "src/lib/css-js/style";
import { Label } from "src/components/label/Label";
import { SignatureProps } from "src/components/signature/Signature";

export interface BasicEmailProps {
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
});

export default function BasicEmail(props: BasicEmailProps) {
    const { cornerImage } = useStyle(styles);

    return (
        <Container
            columnGutter={80}
            rowGutter={100}
            gutterLeftContent={<Img className={cornerImage} src="/images/graphics/corner@2x.png" />}
        >
            <Label>{props.to}</Label>

            {props.content.map((items: string, index: number) => (
                <P key={index}>{items}</P>
            ))}

            <Spacer height={30} />
            <Signature {...props.signature} />
        </Container>
    );
}
