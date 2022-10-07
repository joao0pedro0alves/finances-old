import { View, ViewProps, Text } from "react-native"
import { Notification } from "../Notification"

import { styles } from "./styles"

interface NotificationListProps extends ViewProps {
    title?: string
}

export function NotificationList({title, ...props}: NotificationListProps) {
    return (
        <View style={styles.container} {...props}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>


            <View style={styles.listContainer}>
                <Notification />
                <Notification />
                <Notification />
            </View>
        </View>
    )
}
