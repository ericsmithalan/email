import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A } from "src/lib";
import { styleable } from "src/lib/css-js/styleable";
import { BasicEmailModel } from "src/models/BasicEmailModel";
import { Label } from "src/components/label/Label";

export default function BasicEmail({ post }) {
    console.log("posts", post);
    return (
        <Container columnGutter={80} rowGutter={100}>
            <Label>{post.to}</Label>

            {post.content.map((items) => (
                <P>{items}</P>
            ))}

            <Spacer height={30} />
            <Signature name={post.signature.name} />
        </Container>
    );
}
