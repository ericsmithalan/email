import { normalizeExtra } from "./normalize/extra";
import { normalizedCss } from "./normalize/normalize";
import { normalizeOutlookCss } from "./normalize/outlook";

export const defaultReset = `${normalizedCss}${normalizeExtra}${normalizeOutlookCss}`;
