import App, { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};
export default MyApp;
