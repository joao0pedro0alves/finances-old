import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

import { BalanceHeading } from "../../components/BalanceHeading"
import { TransactionList } from "../../components/TransactionList"

import { THEME } from "../../theme"
import { styles } from "./styles"

export function Transactions() {
    return (
        <View style={styles.container}>

            <BalanceHeading />

            <View style={styles.listContainer}>

                <View style={styles.listHeader}>

                    <View style={styles.listFilter}>
                        <Text style={[styles.listFilterText, styles.listFilterTextActive]}>
                            Expenses
                        </Text>
                        <Text style={styles.listFilterText}>
                            Earnings
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.listSorter}>
                        <Text style={styles.listSorterText}>
                            Sort by
                        </Text>

                        <MaterialIcons 
                            name='arrow-drop-down'
                            size={THEME.FONT_SIZE.LG}
                            color={THEME.COLORS.CAPTION_900}
                        />
                    </TouchableOpacity>
                </View>

                <TransactionList />
            </View>
            
        </View>
    )
}
