import React, { FC } from "react";
import { DepricatedTdAttributes } from "../types";
export interface ITdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {
}
declare const Td: FC<ITdElement>;
export { Td };
//# sourceMappingURL=Td.d.ts.map