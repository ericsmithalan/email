import { Container, Signature, Spacer } from "../../components";
import { useStyle, Img, P, A } from "src/lib";
import { style } from "src/lib/css-js/style";
import { useRouter } from "next/router";
import BasicEmail from "src/templates/BasicEmail";
import path from "path";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: "100" } }],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            post: {
                to: "Some Name",
                signature: {
                    name: "Eric Smith",
                },
                content: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra libero tellus, vel laoreet ex semper a",
                    "Sed rutrum quam in elit posuere condimentum",
                ],
            },
        },
    };
};

const BasicEmailPage = ({ post }) => {
    const router = useRouter();
    const { postId } = router.query;

    console.log("postId", postId);

    return <BasicEmail post={post} />;
};

export default BasicEmailPage;
