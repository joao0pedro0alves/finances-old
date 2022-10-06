import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_900
    },
    link: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.PRIMARY
    },

    listContainer: {
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden',
        
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        shadowColor: THEME.COLORS.OVERLAY,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.05,
        shadowRadius: 40,
        elevation: 40,
    }
})
