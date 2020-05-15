import { Container, style, Img, P, Signature, Spacer } from "../lib";
import { useStyle } from "src/lib/core";

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

export default function BasicEmail() {
    const { cornerImage } = useStyle(styles);

    return (
        <>
            <Container columnGutter={80} rowGutter={100}>
                Basic Template
            </Container>
        </>
    );
}
