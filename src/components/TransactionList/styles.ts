import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden',
        
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        shadowColor: THEME.COLORS.OVERLAY,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.05,
        shadowRadius: 40,
        elevation: 40,
    }
})
