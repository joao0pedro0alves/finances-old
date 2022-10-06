import { View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import { styles } from "./styles"
import { THEME } from "../../theme"

interface TransactionProps {
    isLast?: boolean
}

export function Transaction({isLast}: TransactionProps) {
    return (
        <View style={[styles.container, isLast && styles.noBorder]}>
            <View style={styles.icon}>
                <AntDesign
                    name="youtube"
                    size={THEME.FONT_SIZE.MD}
                    color={THEME.COLORS.PRIMARY}
                />
            </View>

            <View style={styles.center}>
                <Text style={styles.primary}>Youtube Ads.</Text>
                <Text style={styles.secondary}>Income</Text>
            </View>

            <View>
                <Text style={styles.cost}>+ $32.00</Text>
                <Text style={styles.secondary}>10 Sept 2019</Text>
            </View>
        </View>
    )
}
