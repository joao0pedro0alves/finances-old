import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        flex: 1,
        overflow: 'visible'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 18,
        marginLeft: 8
    }
})
