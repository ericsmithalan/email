import React from "react";

import { Primitive } from "../types";

const Block = (props: Primitive) => {
    if (props.for === "web") {
        return <div></div>;
    }

    return <div></div>;
};

export { Block };
