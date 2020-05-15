import { styleable } from "src/lib/css-js/styleable";

export default styleable({
    signature: {
        backgroundColor: "red",
        ":hover": {
            backgroundColor: "yellow",
        },
    },
});
