export { commonCss } from "./commonCss";
export { defaultTheme } from "./defaultTheme";

import { normalizeExtra } from "./normalize/extra";
import { normalizedCss } from "./normalize/normalize";
import { normalizeOutlookCss } from "./normalize/outlook";

export const cssReset: string = `${normalizedCss} ${normalizeOutlookCss} ${normalizeExtra}`;
