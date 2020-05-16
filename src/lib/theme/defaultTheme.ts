import { Theme } from "../types";

export const defaultTheme: Theme = {
    name: "Default",
    colors: {
        backgroundColor: "#f1f1f1",
        contentBackgroundColor: "#ffffff",
        darkFontColor: "#2C2C2C",
        lightFontColor: "#BBB581",
        orangeColor: "#ff9900",
        blueColor: "#89cff0",
        purpleColor: "#ca86ff",
        linkColor: "#ff9900",
        hoverColor: "#ff9900",
        white: "#fff",
    },
    fonts: {
        googleFonts:
            "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,200;0,600;1,400&family=Barlow:wght@300;400;600&display=swap",
        headerFontFamily: "'Barlow Semi Condensed', sans-serif",
        fontFamily: "'Barlow', sans-serif",
        fontHeaderSize: 26,
        fontSubHeaderSize: 24,
        fontTitleSize: 20,
        fontSubTitleSize: 17,
        fontDefaultSize: 15,
        fontSmallSize: 12,
    },
    spacing: {
        xsm: 4,
        sm: 8,
        m: 15,
        lg: 20,
        xlg: 30,
    },
    breakpoints: {
        phone: 400,
        tablet: 700,
    },
};
