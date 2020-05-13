import { Container } from "../lib/components";
import { Helmet } from "react-helmet";
import { Img } from "src/lib";

export default function Home() {
    return (
        <>
            <Helmet title="My Template" />
            <Container gutterLeftContent={<Img src="/public/images/logos/ASCENDUM_CORE@2x.png" />}>
                hello
            </Container>
        </>
    );
}
