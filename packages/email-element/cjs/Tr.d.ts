import React from "react";
import { DepricatedTdAttributes } from "./types";
export interface ITrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes {
}
declare const Tr: <T extends React.HTMLProps<HTMLTableRowElement>>(props: T) => JSX.Element;
export { Tr };
//# sourceMappingURL=Tr.d.ts.map