import { styleable } from "src/lib/core/css-js/styleable";

export default styleable({
    signature: {
        backgroundColor: "red",
        ":hover": {
            backgroundColor: "yellow",
        },
    },
});
