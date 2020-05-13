import { Style, Parser } from "../../css-js";

export const componentCommon: Parser = Style(
    {
        fullWidth: {
            width: "100%",
        },
        largeFont: {
            fontSize: 70,
        },
    },
    "@common",
);
