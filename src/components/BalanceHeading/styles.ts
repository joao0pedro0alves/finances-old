import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: THEME.COLORS.PRIMARY,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 22,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: THEME.COLORS.TEXT,
        fontSize: 18,
        fontFamily: THEME.FONT_FAMILY.BOLD,
    },

    toolbar: {
        flex: 1,
        justifyContent: 'center',
    },
    toolbarContent: {
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        borderBottomColor: THEME.COLORS.BACKGROUND_PAPER,
        borderBottomWidth: 1,
        opacity: 0.25
    },
    balanceTitle: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    balanceValue: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.XL,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    },
    addButton: {
        width: 42,
        height: 42,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.WHITE_OVERLAY
    },

    toolbar2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginLeft: 12
    }
})
