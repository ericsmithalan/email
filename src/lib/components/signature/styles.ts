import { Style, Css } from "src/lib/css-js";

export default Style({
    signature: {
        backgroundColor: "red",
        "@tablet": {
            align: "center",
            width: "100%",
            clear: "both",
        },
        "@phone": {
            align: "center",
            width: "100%",
            clear: "both",
        },
    },
});
