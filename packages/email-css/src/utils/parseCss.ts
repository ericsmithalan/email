export const parseCss = (css: string): string => {
    return css.replace(/\\n/g, "<br />");
};
