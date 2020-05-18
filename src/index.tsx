import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { defaultTheme } from "./lib/theme/defaultTheme";
import { EmailCssProvider } from "./lib/EmailCssProvider";
import { StyleManager } from "./lib/css-js/StyleManager";
import Frame from "./frame/Frame";
import Document from "./frame/Document";

const styleManager = new StyleManager(defaultTheme);

const handleEvent = (type: string) => {
    console.log(type);
};

const htmlDoc = renderToString(<Document />);

ReactDOM.render(
    <React.StrictMode>
        <Frame doc={htmlDoc}>
            <EmailCssProvider styleManager={styleManager}>
                <App />
            </EmailCssProvider>
        </Frame>
    </React.StrictMode>,
    document.querySelector("#root"),
);

serviceWorker.unregister();
