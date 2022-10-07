import { ImageBackground, StatusBar, View, TouchableOpacity, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome, Ionicons } from "@expo/vector-icons"

import bgWaves from "../../../assets/app/bg-waves.png"
import { THEME } from "../../theme"

import { styles } from "./styles"

export function BalanceHeading() {
    return (
        <SafeAreaView style={styles.overlay}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <ImageBackground
                source={bgWaves}
                defaultSource={bgWaves}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>In {"&"} Out</Text>
                        <FontAwesome
                            name="search"
                            color={THEME.COLORS.TEXT}
                            size={THEME.FONT_SIZE.LG}
                        />
                    </View>

                    <View style={styles.toolbar}>
                        <View style={styles.toolbarContent}>
                            <View>
                                <Text style={styles.balanceTitle}>
                                    Active Total Balance
                                </Text>
                                <Text style={styles.balanceValue}>
                                    $8,420.00
                                </Text>
                            </View>

                            <TouchableOpacity style={styles.addButton}>
                                <Ionicons
                                    name="add"
                                    color={THEME.COLORS.TEXT}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.line} />
                    </View>

                    <View style={styles.toolbar2}>
                        <View style={styles.addButton}>
                            <Ionicons
                                name="arrow-up"
                                color={THEME.COLORS.TEXT}
                                size={THEME.FONT_SIZE.LG}
                            />
                        </View>

                        <Text style={styles.description}>
                            Up by 4% from last month
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
