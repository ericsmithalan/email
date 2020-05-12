import App, { AppProps } from "next/app";
import { DebugJSONView } from "../components/DebugJSONView";
import { useStyle } from "@email/css";

function MyApp({ Component, pageProps }) {
    const styles = useStyle();
    return (
        <>
            <Component {...pageProps} />
            <DebugJSONView json={styles.repository.repository} />
        </>
    );
}

export default MyApp;
