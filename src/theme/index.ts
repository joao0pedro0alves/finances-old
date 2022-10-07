import { StyleSheet } from "react-native"

const DEFAULT_THEME = {
    COLORS: {
        BACKGROUND: "#F9FAFC",
        BACKGROUND_PAPER: "#FFFFFF",
        TEXT: "#FFFFFF",
        BLACK: "#000000",

        CAPTION_900: "#222222",
        CAPTION_300: "#AFAFAF",
        
        SHAPE: "#2A2634",
        DIVIDER: "#EFEFEF",
        DISABLED: "#CBCBDD",

        PRIMARY: "#031A6E",
        SUCCESS: "#34AA44",
        ALERT: "#E6492D",

        FOOTER: ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"],
        OVERLAY: "rgba(0,0,0,0.05)",
        PRIMARY_OVERLAY: "rgba(3, 26, 110, 0.1)",
        WHITE_OVERLAY: "rgba(255, 255, 255, 0.09)"
    },

    FONT_FAMILY: {
        LIGHT: "Inter_200ExtraLight",
        REGULAR: "Inter_400Regular",
        SEMI_BOLD: "Inter_600SemiBold",
        BOLD: "Inter_700Bold",
        BLACK: "Inter_900Black",
    },

    FONT_SIZE: {
        XS: 12,
        SM: 14,
        MD: 16,
        LG: 24,
        XL: 32
    },
}

const MIXINS = StyleSheet.create({
    SHADOW_1: {
        shadowColor: DEFAULT_THEME.COLORS.OVERLAY,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 30,
        elevation: 30,
    },
    OVERLAY: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DEFAULT_THEME.COLORS.OVERLAY,
    },
    MODAL_VIEW: {
        alignItems: "center",
        overflow: "hidden",
        margin: 20,
        padding: 32,

        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        backgroundColor: DEFAULT_THEME.COLORS.BACKGROUND_PAPER,
        shadowColor: DEFAULT_THEME.COLORS.SHAPE,
    },
})

export const THEME = { ...DEFAULT_THEME, MIXINS }
