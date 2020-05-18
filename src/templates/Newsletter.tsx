import { Container } from "../components";
import { style } from "src/lib/css-js/style";
import { Hero } from "src/components/hero/Hero";

export interface NewsletterProps {
    text: string;
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

export default function NewsLetter(props: NewsletterProps) {
    return (
        <Container columnGutter={20} rowGutter={100}>
            <Hero height={400} width={640} background="http://placehold.it/640x400"></Hero>
        </Container>
    );
}
