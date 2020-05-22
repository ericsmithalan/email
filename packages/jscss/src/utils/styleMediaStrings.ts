import { StyleKey } from "src/types";

export const cssOpenString = (styleKey: StyleKey): string => {
    switch (styleKey) {
        case "@default":
            return "";
        case "@phone":
            return `@media only screen and (max-width: ${
                this._theme.breakpoints.phone || 400
            }px) {`;
        case "@tablet":
            return `@media only screen and (max-width: ${
                this._theme.breakpoints.tablet || 800
            }px) {`;
    }
};

export const cssCloseString = (styleKey: StyleKey): string => {
    switch (styleKey) {
        case "@default":
            return "";
        case "@phone":
            return `}`;
        case "@tablet":
            return `}`;
    }
};
