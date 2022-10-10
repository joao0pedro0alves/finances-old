import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: 8,
        overflow: 'hidden',

        ...THEME.MIXINS.SHADOW_1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD
    },
    subtitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.LIGHT,
        fontSize: THEME.FONT_SIZE.SM
    },
    cardBody: {
        position: 'relative',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 32
    },
    balance: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.LG
    },
    logo: {
        width: 60,
        height: 30
    },
    ellipse: {
        position: 'absolute',
        bottom: 120,
        left: -20,
        width: 60,
        height: 60
    },
    cardVector: {
        position: 'absolute',
        bottom: -15,
        right: -30
    }
})
