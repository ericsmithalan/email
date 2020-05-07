import { GenericCollection } from "../collections/GenericCollection";
import { CssRepository } from "../CssRepository";
import { CssPropertyDefinition } from "../types";

export const getInlineStyles = (
    className: string | undefined,
    repository: CssRepository,
): GenericCollection<CssPropertyDefinition> => {
    let inlinableStyles = new GenericCollection<CssPropertyDefinition>();
    if (className) {
        // repository.getInlinableStyles(className);
        // inlinableStyles.add();
    }
    return inlinableStyles;
};
