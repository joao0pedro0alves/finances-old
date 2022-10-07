import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        padding: 24,
        flex: 2,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listFilterText: {
        color: THEME.COLORS.CAPTION_900,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginRight: 16
    },
    listFilterTextActive: {
        color: THEME.COLORS.PRIMARY,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD,
    },

    listSorter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listSorterText: {
        color: THEME.COLORS.CAPTION_900,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
    }
})
