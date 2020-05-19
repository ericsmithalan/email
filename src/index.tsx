import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";

import App from "./App";
import Document from "./Document";
import Frame from "./frame/Frame";
import { StyleManager } from "./lib/css-js/StyleManager";
import { EmailCssProvider } from "./lib/EmailCssProvider";
import { defaultTheme } from "./lib/theme/defaultTheme";
import * as serviceWorker from "./serviceWorker";

const styleManager = new StyleManager(defaultTheme);

const htmlDoc = renderToString(<Document />);

ReactDOM.render(
    <React.StrictMode>
        <Frame doc={htmlDoc}>
            <EmailCssProvider styleManager={styleManager}>
                <App />
            </EmailCssProvider>
        </Frame>
    </React.StrictMode>,
    document.querySelector("#root")
);

serviceWorker.unregister();
