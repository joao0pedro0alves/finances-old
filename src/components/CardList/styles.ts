import { Dimensions, StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 30,
        marginBottom: 24,
        marginLeft: 24,
        marginRight: 24
    },
    card: {
        shadowColor: "rgba(0,0,0,0.5)",
        minWidth: Dimensions.get('screen').width - 48,
        paddingHorizontal: 1
    },
    contentList: {},
    emptyListText: {},

    controls: {
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    control: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: THEME.COLORS.PRIMARY_OVERLAY,
        marginHorizontal: 5
    },
    controlActive: {
        backgroundColor: THEME.COLORS.PRIMARY,
        width: 22
    }
})
