import { View, Text, TouchableOpacity } from "react-native"
import { Transaction } from "../Transaction"

import { styles } from "./styles"

export function TransactionList() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>
                    Recent Transactions
                </Text>

                <TouchableOpacity>
                    <Text style={styles.link}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction isLast />
            </View>

        </View>
    )
}
