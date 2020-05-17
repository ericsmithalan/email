import BasicEmail, { BasicEmailProps } from "src/templates/BasicEmail";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: "100" } }],
        fallback: false,
    };
};

const postProps: BasicEmailProps = {
    to: "Some Name",
    signature: {
        name: "Eric Smith",
        jobTitle: "UX Designer",
        email: "eric.smith@ascendum.com",
        workPhone: "253 229 1679",
        cellPhone: "253 229 1679",
        department: "Ascendum Digital",
        location: "US HQ",
    },
    content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra libero tellus, vel laoreet ex semper a",
        "Sed rutrum quam in elit posuere condimentum",
    ],
};

export const getStaticProps: GetStaticProps = async (props) => {
    return {
        props: {
            post: postProps,
        },
    };
};

const BasicEmailPage = (props) => {
    return <BasicEmail {...props.post} />;
};

export default BasicEmailPage;
