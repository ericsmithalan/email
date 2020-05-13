import { Container } from "../lib/components";
import { Helmet } from "react-helmet";
import { Img } from "src/lib";
import { Style, useStyle } from "src/lib/css-js";

const styles = Style({
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

export default function Home() {
    const { cornerImage } = useStyle(styles);

    return (
        <>
            <Helmet title="My Template" />
            <Container
                columnGutter={80}
                rowGutter={100}
                gutterLeftContent={
                    <Img className={cornerImage} src="/images/graphics/corner@2x.png" />
                }
            >
                hello
            </Container>
        </>
    );
}
