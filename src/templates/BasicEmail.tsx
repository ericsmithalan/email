import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A } from "src/lib";
import { style } from "src/lib/css-js/style";
import { Label } from "src/components/label/Label";

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

export default function BasicEmail({ post }) {
    const { cornerImage } = useStyle(styles);

    return (
        <Container
            columnGutter={80}
            rowGutter={100}
            gutterLeftContent={<Img className={cornerImage} src="/images/graphics/corner@2x.png" />}
        >
            <Label>{post.to}</Label>

            {post.content.map((items: string, index: number) => (
                <P key={index}>{items}</P>
            ))}

            <Spacer height={30} />
            <Signature name={post.signature.name} />
        </Container>
    );
}
