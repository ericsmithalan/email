import { CssSettings } from "./Settings";

export { withCss } from "./hoc/withCss";
export { css } from "./Css";
export { CssTheme } from "./theme/CssTheme";
export { defaultTheme } from "./theme/defaultTheme";
export { Css } from "./types";
export { CssHelpers } from "./helpers/CssHelpers";
export { CssStyleProvider, defaultStyleContext, CssStyleContext } from "./context/CssContext";
export { useCssContext } from "./hooks/useCssContext";
export { useRepository } from "./hooks/useRepository";
export { useTheme } from "./hooks/useTheme";

const settings = new CssSettings();

export { settings };
