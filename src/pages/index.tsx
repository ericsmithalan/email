import { Container, style, Img, P, Signature, Spacer } from "../lib";
import { Helmet } from "react-helmet";
import { useStyle } from "src/lib/core";

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
                <P>
                    I am reaching out from Ascendum Solutions based in Cincinati. We are hoping to
                    get on your radar should Company Name have the need for rapid digital
                    transformation solutions. Ascendum accelerates digital innovations from our
                    clients to get them to market fast. Please keep us in mind if you have any
                    upcoming projects or RFP’s.
                </P>
                <P>
                    Proctor &amp; Gable, Foot Locker, Sony, JTV, 5/3, Loan Depot and other notable
                    companies utilize our agile digital development services, including cutting edge
                    data engineering, advanced chatbots, UX/UI design, incredible mobile apps,
                    omnichannel customer experiences, and more.
                </P>
                <P>
                    Here is a copy of our latest white paper 7 Ways to Set Up Your Chatbot for
                    Success. We are also offering your team free access to our advanced chatbot
                    development platform Botsai - It is easy, intuative and requires no code.
                </P>
                <P>Best reguards,</P>

                <Spacer height={30} />
                <Signature />
            </Container>
        </>
    );
}
