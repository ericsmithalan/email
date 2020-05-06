import React from "react";
import { DepricatedTableAttributes } from "./types";
export interface ITableElement extends React.HTMLProps<HTMLTableElement>, DepricatedTableAttributes {
}
declare const Table: <T extends React.HTMLProps<HTMLTableElement>>(props: T) => JSX.Element;
export { Table };
//# sourceMappingURL=Table.d.ts.map