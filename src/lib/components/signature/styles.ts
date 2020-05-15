import { Style } from "../../core/css-js";

export default Style({
    signature: {
        backgroundColor: "red",
        "@tablet": {
            width: "100%",
            clear: "both",
        },
        "@phone": {
            width: "100%",
            clear: "both",
        },
    },
});
