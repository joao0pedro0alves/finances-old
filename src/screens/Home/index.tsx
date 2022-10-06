import { View, Text, Image } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles"
import { THEME } from "../../theme"

import { CardList } from "../../components/CardList"
import { TransactionList } from "../../components/TransactionList"

const AVATAR_URL =
    "https://lh3.googleusercontent.com/a/ALm5wu38aAP6g2PkFVzpxiChguFyURQJgVdj9WL-Zmj04Q=s288-p-rw-no"

export function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.heading}>
                    <View>
                        <Text style={styles.welcomeText}>Bem vindo,</Text>
                        <Text style={styles.usernameText}>João Pedro</Text>
                    </View>

                    <View style={styles.headingTools}>
                        <View style={styles.headingNotification}>
                            <View style={styles.badge} />
                            <FontAwesome
                                name="bell"
                                style={styles.bell}
                                size={THEME.FONT_SIZE.LG}
                                color={THEME.COLORS.CAPTION_300}
                            />
                        </View>

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

            <View>
                <TransactionList />
            </View>

        </View>
    )
}
