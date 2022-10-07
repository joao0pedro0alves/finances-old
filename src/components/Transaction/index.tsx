import { View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import moment from "moment"

import { Transaction as TransactionData } from "../../@types"
import { formatCurrency } from "../../utils/format-currency"

import { styles } from "./styles"
import { THEME } from "../../theme"
import { Icon } from "../Icon"

interface TransactionProps {
    isLast?: boolean
    data: TransactionData
}

export function Transaction({ data, isLast }: TransactionProps) {
    const isExpense = data.cost < 0
    const prefix = isExpense ? '-' : '+'

    const formattedCost = formatCurrency(isExpense ? -data.cost : data.cost)
    const formattedData = moment(data.issuedAt).format('DD MMM YYYY')

    return (
        <View style={[styles.container, isLast && styles.noBorder]}>
            <View style={styles.icon}>
                <Icon 
                    type={data.icon?.type}
                    name={data.icon?.name}
                    color={THEME.COLORS.PRIMARY}
                    size={18}
                />
            </View>

            <View style={styles.center}>
                <Text style={styles.primary}>{data.description}</Text>
                <Text style={styles.secondary}>{data.type}</Text>
            </View>

            <View>
                <Text
                    style={[
                        styles.cost,
                        {
                            color: isExpense
                                ? THEME.COLORS.ALERT
                                : THEME.COLORS.SUCCESS,
                        },
                    ]}
                >
                    {prefix} {formattedCost}
                </Text>
                <Text style={styles.secondary}>{formattedData}</Text>
            </View>
        </View>
    )
}
