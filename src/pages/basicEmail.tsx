import { useStyle } from "src/lib/core";
import { Container } from "next/app";
import { styleable } from "src/lib/core/css-js/styleable";

const styles = styleable({
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
