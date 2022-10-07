import { View, ViewProps, FlatList } from "react-native"

import { Transaction as TransactionData } from "../../@types"

import { Transaction } from "../Transaction"
import { styles } from "./styles"

interface TransactionListProps extends ViewProps {
    data: TransactionData[]
}

export function TransactionList({data, ...props}: TransactionListProps) {
    return (
        <View style={styles.container} {...props}>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <Transaction 
                        isLast={(index + 1) === data.length}
                        data={item}
                    />
                )}
            />
        </View>
    )
}
