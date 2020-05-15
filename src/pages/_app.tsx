import { Helmet } from "react-helmet";

function EmailApp({ Component, pageProps }) {
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: "en",
                    xmlns: "http://www.w3.org/1999/xhtml",
                    "xmlns:v": "urn:schemas-microsoft-com:vml",
                    "xmlns:o": "urn:schemas-microsoft-com:office:office",
                }}
                titleTemplate="Ascendum.com - %s"
                defaultTitle="Email"
                meta={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0,",
                    },
                    {
                        httpEquiv: "Content-Type",
                        content: "text/html, charset=UTF-8",
                    },
                ]}
                base={<base target="_blank" />}
            />
            <Component {...pageProps} />
        </>
    );
}

export default EmailApp;
