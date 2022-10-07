import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
    container: {
        flex: 1,
        padding: 24,
    },
    cards: {
        flex: 1,
        justifyContent: 'center'
    },
    card: {
        marginBottom: 16,
        shadowColor: "rgba(0,0,0,0.5)",
    }
})
