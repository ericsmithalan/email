import { normalizedCss } from "./normalize/normalize";
import { normalizeExtra } from "./normalize/extra";
import { normalizeOutlookCss } from "./normalize/outlook";

export const cssReset = `${normalizedCss}${normalizeExtra}${normalizeOutlookCss}`;
