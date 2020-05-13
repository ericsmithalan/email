import { useTheme, CssTheme } from "../../css";

export const useCommon = () => {
    const theme: CssTheme = useTheme();
    const common = {
        empty: {
            fontSize: 0,
            lineHeight: 0,
        },
        baseFont: {
            fontFamily: theme.fonts.fontFamily,
            fontSize: theme.fonts.fontDefaultSize,
            color: theme.colors.darkFontColor,
        },
    };

    const get = (key: string) => {
        if (common[key]) {
            return common[key];
        }
    };

    return get;
};
