import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from "./styles"
import { THEME } from "../../theme"

import { NotificationList } from "../../components/NotificationList"

export function Notifications() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons
                        name='arrow-back-ios'
                        size={THEME.FONT_SIZE.LG}
                        color={THEME.COLORS.CAPTION_900}
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Notifications
                </Text>
            </View>
            
            <NotificationList title='Today' />
            <NotificationList title='Yesterday' />

        </SafeAreaView>
    )
}
