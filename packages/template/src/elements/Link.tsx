import React, { ReactNode } from "react";

export type LinkElement = {
    children: ReactNode;
};

const Link = (props: LinkElement) => {
    return <a {...props} />;
};

export { Link };
