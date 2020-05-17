import NewsLetter, { NewsletterProps } from "src/templates/Newsletter";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: "100" } }],
        fallback: false,
    };
};

const postProps: NewsletterProps = {
    text: "hello",
};

export const getStaticProps: GetStaticProps = async (props) => {
    return {
        props: {
            post: postProps,
        },
    };
};

export default function NewsLetterPage(props) {
    return <NewsLetter {...props.post} />;
}
