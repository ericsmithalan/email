import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { defaultTheme } from "./lib/theme/defaultTheme";
import { EmailCssProvider } from "./lib/EmailCssProvider";
import { StyleManager } from "./lib/css-js/StyleManager";

const styleManager = new StyleManager(defaultTheme);

ReactDOM.render(
    <React.StrictMode>
        <EmailCssProvider styleManager={styleManager}>
            <App />
        </EmailCssProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
