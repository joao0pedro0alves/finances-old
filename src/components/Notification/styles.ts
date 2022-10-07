import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        paddingVertical: 18,

        borderBottomColor: THEME.COLORS.DIVIDER,
        borderBottomWidth: 1,

        flexDirection: 'row'
    },
    icon: {
        backgroundColor: THEME.COLORS.PRIMARY_OVERLAY,
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 38,
        borderRadius: 8,

        shadowColor: THEME.COLORS.OVERLAY,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.05,
        shadowRadius: 40,
        elevation: 2,
    },

    center: {
        flex: 1,
        paddingLeft: 14,
    },
    primary: {
        color: THEME.COLORS.CAPTION_900,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD
    },
    secondary: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    highlight: {
        color: THEME.COLORS.SUCCESS,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    },


    noBorder: {
        borderBottomColor: 'transparent'
    }
})
