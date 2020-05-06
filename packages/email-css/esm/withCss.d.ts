import React from "react";
import { CssFragment } from "./CssFragment";
declare const withCss: (cssFragment: CssFragment) => <P extends object>(WrappedComponent: React.ComponentType<React.HTMLProps<P>>) => <T extends React.HTMLProps<P>>(props: T) => JSX.Element;
export { withCss };
//# sourceMappingURL=withCss.d.ts.map