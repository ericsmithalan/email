import { CssGenericCollection } from "../CssGenericCollection";
import { CssRepository } from "../CssRepository";
import { CssPropertyDefinition } from "../types";

export const getInlineStyles = (
    className: string | undefined,
    repository: CssRepository,
): CssGenericCollection<string, CssPropertyDefinition> => {
    let inlinableStyles = new CssGenericCollection<string, CssPropertyDefinition>();
    if (className) {
        // repository.getInlinableStyles(className);
        // inlinableStyles.add();
    }
    return inlinableStyles;
};
