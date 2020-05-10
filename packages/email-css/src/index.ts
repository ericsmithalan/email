import { CssSettings } from "./Settings";

export { withCss } from "./hoc/withCss";
export { css } from "./Css";
export { defaultTheme } from "./defaultTheme";
export { Css, CssTheme } from "./types";
export { CssHelpers } from "./helpers/CssHelpers";
export { CssContext } from "./context/CssContext";
export { CssProvider } from "./CssProvider";
export { useCss } from "./hooks/useCss";
export { useRepository } from "./hooks/useRepository";

const settings = new CssSettings();

export { settings };
