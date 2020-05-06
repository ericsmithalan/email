import React from "react";
import { DepricatedTdAttributes } from "./types";
export interface ITdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {
}
declare const Td: <T extends React.HTMLProps<HTMLTableCellElement>>(props: T) => JSX.Element;
export { Td };
//# sourceMappingURL=Td.d.ts.map