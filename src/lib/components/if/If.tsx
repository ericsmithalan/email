import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { MsoIfKind } from "../../core/enums/MsoIfKind";
import { MsoOperatorKind } from "../../core/enums/MsoOperatorKind";

//https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)?redirectedfrom=MSDN

type MsoIf = keyof typeof MsoIfKind;
type MsoOperator = keyof typeof MsoOperatorKind;
//<! — [if (mso 12) | (mso 15)]>
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;

//<! — [if mso]>Target Outlook 2007 and up
//<! — [if IE]>Target Outlook 2000, 2002, & 2003
//<! — [if (gte mso 9) | (IE)]> Target all Outlook versions
export interface IfProps {
    children: React.ReactNode;
    test: MsoIf | MsoIf[];
    operator: MsoOperator;
}

const Label = ({ children, test, operator }: IfProps): string => {
    return `<!--[if ${operator} ${test}]>${children}<![endif]->`;
};

export { Label };
