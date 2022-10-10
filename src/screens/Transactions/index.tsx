import { useState, useMemo } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { transactions } from "../../utils/transactions"

import { THEME } from "../../theme"
import { styles } from "./styles"

import { BalanceHeading } from "../../components/BalanceHeading"
import { TransactionList } from "../../components/TransactionList"
import { ModalSelect } from "../../components/ModalSelect"

const SORT_OPTIONS = [
    { label: "Price", value: "cost" },
    { label: "Recents", value: "issuedAt" },
]

export function Transactions() {
    const [onlyExpenses, setOnlyExpenses] = useState(true)
    const [showSortBy, setShowSortBy] = useState(false)
    const [sortBy, setSortBy] = useState("issuedAt")

    const visibleTransactions = useMemo(() => {

        let result = transactions.filter(({ cost }) =>
            onlyExpenses ? cost < 0 : cost > 0
        )

        result = result.sort((a, b) => {
            if (sortBy === "cost") 
                return a.cost - b.cost

            else if (sortBy === "issuedAt") 
                return b.issuedAt.getTime() - a.issuedAt.getTime()
            
            else return -1
        })

        return result

    }, [onlyExpenses, sortBy])

    const handleOpen = () => {
        setShowSortBy(true)
    }

    const handleClose = () => {
        setShowSortBy(false)
    }

    const handleChangeSort = (value: string) => {
        setSortBy(value)
        handleClose()
    }

    return (
        <>
            <View style={styles.container}>
                <BalanceHeading />

                <View style={styles.listContainer}>
                    <View style={styles.listHeader}>
                        <View style={styles.listFilter}>
                            <TouchableOpacity
                                onPress={() => setOnlyExpenses(true)}
                            >
                                <Text
                                    style={[
                                        styles.listFilterText,
                                        onlyExpenses &&
                                            styles.listFilterTextActive,
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

                        <TouchableOpacity
                            style={styles.listSorter}
                            onPress={handleOpen}
                        >
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

            <ModalSelect
                visible={showSortBy}
                onRequestClose={handleClose}
                options={SORT_OPTIONS}
                value={sortBy}
                onChangeValue={handleChangeSort}
            />
        </>
    )
}
