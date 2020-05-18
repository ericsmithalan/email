import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { defaultTheme } from "./lib/theme/defaultTheme";
import { EmailCssProvider } from "./lib/EmailCssProvider";
import { StyleManager } from "./lib/css-js/StyleManager";
import Frame from "./frame/Frame";
import Document from "./frame/Document";

const styleManager = new StyleManager(defaultTheme);

ReactDOM.render(
    <React.StrictMode>
        <EmailCssProvider styleManager={styleManager}>
            <Frame document={<Document subject={"cool"} />}>
                <App />
            </Frame>
        </EmailCssProvider>
    </React.StrictMode>,
    document.getElementById("viewer-root"),
);

serviceWorker.unregister();
