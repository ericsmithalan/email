import {
    CssParseArgs,
    CssTarget,
    PropertyCollection,
    CssPseudo,
} from "../types";
import {  CssClassCollection} from "../collections/CssClassCollection";
import {parseCss} from "./parseCss";
import {createClass} from "./createClass";

export const buildCssClass = <T extends CssTarget | CssPseudo | string>(
    args: Partial<CssParseArgs>,
    key: T,
    classList: CssClassCollection,
) => {
    const props: PropertyCollection = parseCss(args, classList);

    if (props.count() > 0) {
        const cls = createClass(key, args, props);
        classList.add(cls.target, cls);
    }
};
