import { Container, Signature, Spacer } from "../../components";
import { useStyle, Img, P, A } from "src/lib";
import { style } from "src/lib/css-js/style";
import { useRouter } from "next/router";
import BasicEmail, { BasicEmailProps } from "src/templates/BasicEmail";
import path from "path";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import { SignatureProps } from "src/components/signature/Signature";

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: "100" } }],
        fallback: false,
    };
};

// name: string;
// jobTitle?: string;
// email?: string;
// department?: Department;
// workPhone?: string;
// cellPhone?: string;
// location?: Location;

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
    console.log("props", props);

    return <BasicEmail {...props.post} />;
};

export default BasicEmailPage;
