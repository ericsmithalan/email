export type Theme = CssTheme;

export type RenderFor = "web" | "email" | "both";

export interface Configuration {
    renderFor?: RenderFor;
    theme?: Theme;
}
