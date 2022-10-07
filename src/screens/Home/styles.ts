import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
    },
    heading: {
        paddingHorizontal: 24,
        paddingVertical: 8,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    welcomeText: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
    },
    usernameText: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    headingTools: {
        flexDirection: "row",
        alignItems: "center",
    },
    notificationButton: {
        position: "relative",
        marginRight: 16,
    },
    badge: {
        backgroundColor: THEME.COLORS.ALERT,
        borderColor: THEME.COLORS.TEXT,
        borderWidth: 1,

        position: "absolute",
        right: 0,
        
        height: 12,
        width: 12,
        borderRadius: 6,
        zIndex: 2,
    },
    bell: {
        zIndex: 1,
    },
    avatar: {
        borderRadius: 20,
        overflow: "hidden",
    },
    avatarImage: {
        width: 40,
        height: 40,
    },

    // TRANSACTIONS
    listContainer: {
        padding: 24,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTitle: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_900
    },
    listLink: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.PRIMARY
    },

})
