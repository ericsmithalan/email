import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "common/App";

const preloadedState = (window as any)["__PRELOADED_STATE__"];
delete (window as any)["__PRELOADED_STATE__"];

ReactDOM.hydrate(
    <Router>
        <App />
    </Router>,
    document.getElementById("root"),
);
