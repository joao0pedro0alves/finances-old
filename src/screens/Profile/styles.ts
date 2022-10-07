import { Dimensions, StyleSheet } from "react-native"
import { THEME } from "../../theme"

const AVATAR_SIZE = 140

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: THEME.COLORS.PRIMARY
    },
    container: {
        position: 'relative',

        flex: 1,
        marginHorizontal: 12,
        marginBottom: 12,
        paddingHorizontal: 24,
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        maxHeight: Dimensions.get('screen').height / 2.5,
        borderRadius: 16
    },
    avatar: {
        position: 'absolute',
        alignSelf: 'center',
        top: -50,
        
        height: AVATAR_SIZE,
        width: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        borderWidth: 2,
        borderColor: THEME.COLORS.BACKGROUND_PAPER,
        ...THEME.MIXINS.SHADOW_1
    },
    content: {
        marginTop: (AVATAR_SIZE / 2) + 24
    },
    title: {
        textAlign: 'center',
        color: THEME.COLORS.CAPTION_900,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD
    },
    subtitle: {
        textAlign: 'center',
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    preferences: {
        flexDirection: 'row',
        marginTop: 16,
    },
    preference: {
        backgroundColor: THEME.COLORS.PRIMARY_OVERLAY,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 24,
        borderRadius: 8,
        ...THEME.MIXINS.SHADOW_1,
        shadowColor: THEME.COLORS.PRIMARY_OVERLAY,
        elevation: 10,
    },
    preferenceText: {
        flex: 1,
        textAlign: 'center',
        color: THEME.COLORS.PRIMARY,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 18,
    }
})
