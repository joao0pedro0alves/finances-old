import { useRef, useEffect } from "react"
import { View, Animated, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"

import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles"
import { THEME } from "../../theme"

import { CardList } from "../../components/CardList"
import { TransactionList } from "../../components/TransactionList"

const AVATAR_URL =
    "https://lh3.googleusercontent.com/a/ALm5wu38aAP6g2PkFVzpxiChguFyURQJgVdj9WL-Zmj04Q=s288-p-rw-no"

const ANIMATION_DURATION = 1000 // 1 second

export function Home() {
    const badgeAnim = useRef(new Animated.Value(0)).current // Initial value for dimensions: 0
    const navigation = useNavigation()

    useEffect(() => {
        return Animated.timing(badgeAnim, {
            toValue: 12,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
        }).start()
    }, [badgeAnim])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome back,</Text>
                        <Text style={styles.usernameText}>João Pedro</Text>
                    </View>

                    <View style={styles.headingTools}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("notifications")}
                            style={styles.notificationButton}
                        >
                            <Animated.View
                                style={[
                                    styles.badge,
                                    { width: badgeAnim, height: badgeAnim },
                                ]}
                            />

                            <FontAwesome
                                name="bell"
                                style={styles.bell}
                                size={THEME.FONT_SIZE.LG}
                                color={THEME.COLORS.CAPTION_300}
                            />
                        </TouchableOpacity>

                        <View style={styles.avatar}>
                            <Image
                                source={{ uri: AVATAR_URL }}
                                style={styles.avatarImage}
                            />
                        </View>
                    </View>
                </View>

                <CardList />
            </View>

            <View style={styles.listContainer}>
                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>Recent Transactions</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("transactions")}
                    >
                        <Text style={styles.listLink}>See all</Text>
                    </TouchableOpacity>
                </View>
                <TransactionList />
            </View>
        </SafeAreaView>
    )
}
