import { styleable } from "src/lib/core/css-js/style";

export default styleable({
    signature: {
        backgroundColor: "red",
        ":hover": {
            backgroundColor: "yellow",
        },
    },
});
