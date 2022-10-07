import { StyleSheet } from "react-native"
import { THEME } from "../theme"

export const styles = StyleSheet.create({
    headerTitleStyle: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    tabBarStyle: {
        borderTopColor: "transparent",
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        shadowColor: "rgba(0, 0, 0, 0.07)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 30,
        shadowOpacity: 0.07,
        elevation: 30,
    },
})
