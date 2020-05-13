import { Container } from "../lib/components";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet title="My Template" />
            <Container>hello</Container>
        </>
    );
}
