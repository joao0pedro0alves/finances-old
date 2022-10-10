import { View, ImageBackground, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import bgWaves from "../../../assets/app/bg-waves.png"
import { Card } from "../../components/Card"

import { styles } from "./styles"
import { cards } from "../../utils/cards"

export function Cards() {
    return (
        <SafeAreaView style={styles.overlay}>
            <ImageBackground
                source={bgWaves}
                defaultSource={bgWaves}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={styles.cards}
                        data={cards}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Card
                                    data={{
                                        id: item.id,
                                        title: item.title,
                                        secondary: item.secondary,
                                        budgetValue: item.budgetValue,
                                        createdAt: item.createdAt,
                                        color: item.color,
                                        flag: item.flag,
                                    }}
                                />
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
