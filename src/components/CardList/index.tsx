import { View, FlatList, Pressable } from "react-native"

import { cards } from "../../utils/cards"

import { Card } from "../Card"
import { styles } from "./styles"

export function CardList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                horizontal
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
                                flag: item.flag
                            }}
                        />
                    </View>
                )}
            />

            <View style={styles.controls}>
                {cards.map((card, index) => 
                    <Pressable key={card.id} style={[styles.control, index === 0 ? styles.controlActive : {}]} />
                )}
            </View>
        </View>
    )
}
