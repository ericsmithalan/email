import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedTableAttributes } from "../types";
export interface ITableElement extends React.HTMLProps<HTMLTableElement>, DepricatedTableAttributes, CssStyleableComponent {
}
declare const Table: FC<ITableElement>;
export { Table };
//# sourceMappingURL=Table.d.ts.map