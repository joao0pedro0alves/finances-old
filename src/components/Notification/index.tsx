import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { styles } from "./styles"
import { THEME } from "../../theme"

interface NotificationProps {
    isLast?: boolean
}

export function Notification({isLast}: NotificationProps) {
    return (
        <View style={[styles.container, isLast && styles.noBorder]}>
            <View style={styles.icon}>
                <Ionicons
                    name="ios-wallet"
                    size={THEME.FONT_SIZE.MD}
                    color={THEME.COLORS.PRIMARY}
                />
            </View>

            <View style={styles.center}>
                <Text style={styles.primary}>
                    Received money <Text style={styles.highlight}>$20</Text> from Dito
                </Text>

                <Text style={styles.secondary}>08:40PM</Text>
            </View>
        </View>
    )
}
