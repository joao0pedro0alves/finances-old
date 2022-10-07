import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { transactions } from "../../utils/transactions"

import { THEME } from "../../theme"
import { styles } from "./styles"

import { BalanceHeading } from "../../components/BalanceHeading"
import { TransactionList } from "../../components/TransactionList"

export function Transactions() {
    const [onlyExpenses, setOnlyExpenses] = useState(true)

    const visibleTransactions = transactions.filter(({cost}) => 
        onlyExpenses ? cost < 0 : cost > 0
    )

    return (
        <View style={styles.container}>
            <BalanceHeading />

            <View style={styles.listContainer}>
                <View style={styles.listHeader}>
                    <View style={styles.listFilter}>
                        <TouchableOpacity onPress={() => setOnlyExpenses(true)}>
                            <Text
                                style={[
                                    styles.listFilterText,
                                    onlyExpenses && styles.listFilterTextActive,
                                ]}
                            >
                                Expenses
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setOnlyExpenses(false)}
                        >
                            <Text
                                style={[
                                    styles.listFilterText,
                                    !onlyExpenses &&
                                        styles.listFilterTextActive,
                                ]}
                            >
                                Earnings
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.listSorter}>
                        <Text style={styles.listSorterText}>Sort by</Text>

                        <MaterialIcons
                            name="arrow-drop-down"
                            size={THEME.FONT_SIZE.LG}
                            color={THEME.COLORS.CAPTION_900}
                        />
                    </TouchableOpacity>
                </View>

                <TransactionList data={visibleTransactions} />
            </View>
        </View>
    )
}
