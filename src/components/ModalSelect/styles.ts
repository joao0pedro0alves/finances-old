import { Dimensions, StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    overlay: { ...THEME.MIXINS.OVERLAY, backgroundColor: 'rgba(0,0,0,0.5)' },
    container: {
        ...THEME.MIXINS.MODAL_VIEW,
        width: Dimensions.get('screen').width - 48 - 32,
        paddingHorizontal: 0
    },
    first: {
        borderTopWidth: 1,
        borderTopColor: "rgba(3, 26, 110, 0.05)",
    },
    option: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(3, 26, 110, 0.05)",
        paddingHorizontal: 32
    },
    circle: {
        marginRight: 12,
        height: 24,
        width: 24,
        borderColor: THEME.COLORS.PRIMARY,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
    },
    optionText: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM
    }
})
