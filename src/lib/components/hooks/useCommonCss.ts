import { useTheme } from "../../css-js";
import { Theme } from "src/lib/theme";

export const useCommon = () => {
    const theme: Theme = useTheme();
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
