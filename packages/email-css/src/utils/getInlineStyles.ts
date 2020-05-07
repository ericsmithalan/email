import { CssCollection } from "../CssCollection";
import { CssRepository } from "../CssRepository";
import { CssPropertyDefinition } from "../types";

export const getInlineStyles = (
    className: string | undefined,
    repository: CssRepository,
): CssCollection<string, CssPropertyDefinition> => {
    let inlinableStyles = new CssCollection<string, CssPropertyDefinition>();
    if (className) {
        // repository.getInlinableStyles(className);
        // inlinableStyles.add();
    }
    return inlinableStyles;
};
