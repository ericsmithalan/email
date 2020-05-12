import React, { FC } from "react";
import { DepricatedTableAttributes } from "../types";
export interface ITableElement extends React.HTMLProps<HTMLTableElement>, DepricatedTableAttributes {
}
declare const Table: FC<ITableElement>;
export { Table };
//# sourceMappingURL=Table.d.ts.map