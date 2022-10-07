import { View, ViewProps} from "react-native"
import { Transaction } from "../Transaction"

import { styles } from "./styles"

interface TransactionListProps extends ViewProps {
}

export function TransactionList(props: TransactionListProps) {
    return (
        <View style={styles.container} {...props}>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction isLast />
        </View>
    )
}
