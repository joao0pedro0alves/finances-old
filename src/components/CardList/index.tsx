import { useState } from "react"
import { View, FlatList, Pressable, TouchableHighlight } from "react-native"

import { cards } from "../../utils/cards"
import { Card as CardType } from "../../@types"

import { Card } from "../Card"
import { styles } from "./styles"

export function CardList() {
    const [activeCard, setActiveCard] = useState<CardType>(cards[0])

    const setCard = (card: CardType) => {
        setActiveCard(card)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item, separators }) => (
                    <TouchableHighlight
                        onHideUnderlay={() => {
                            setCard(item)
                            separators.unhighlight()
                        }}
                        style={styles.card}
                        onPress={() => {}}
                    >
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
                    </TouchableHighlight>
                )}
                ItemSeparatorComponent={({ highlighted }) => (
                    <View
                        style={[
                            styles.separator,
                            highlighted && { marginLeft: 0, marginRight: 0 },
                        ]}
                    />
                )}
            />

            <View style={styles.controls}>
                {cards.map((card, index) => (
                    <Pressable
                        key={card.id}
                        style={[
                            styles.control,
                            index === cards.indexOf(activeCard)
                                ? styles.controlActive
                                : {},
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}
