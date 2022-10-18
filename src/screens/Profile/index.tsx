import { View, Text, ImageBackground, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { AVATAR_URL } from "../../utils/profile"
import bgWaves from "../../../assets/app/bg-waves.png"

import { styles } from "./styles"
import { THEME } from "../../theme"

export function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={bgWaves}
                defaultSource={bgWaves}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: AVATAR_URL,
                        }}
                    />

                    <View style={styles.content}>
                        <Text style={styles.title}>João Pedro Alves</Text>
                        <Text style={styles.subtitle}>
                            Full Stack Web Developer
                        </Text>
                        
                        <View style={styles.preferences}>
                            <View style={[styles.preference, {marginRight: 8}]}>
                                <View>
                                    <Ionicons
                                        name="ios-card"
                                        size={THEME.FONT_SIZE.LG}
                                        color={THEME.COLORS.PRIMARY}
                                    />
                                </View>
                                <Text style={styles.preferenceText}>2</Text>
                            </View>

                            <View style={[styles.preference, {marginLeft: 8}]}>
                                <View>
                                    <Ionicons
                                        name="notifications"
                                        size={THEME.FONT_SIZE.LG}
                                        color={THEME.COLORS.PRIMARY}
                                    />
                                </View>
                                <Text style={styles.preferenceText}>10+</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
