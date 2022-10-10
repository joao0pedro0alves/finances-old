import { View, ViewProps, Text, Image } from "react-native"
import { Feather } from "@expo/vector-icons"
import moment from "moment"

import ellipse from "../../../assets/app/ellipse.png"
import cardVector from "../../../assets/app/card-vector.png"
import { Card as CardType } from "../../@types"

import { styles } from "./styles"
import { THEME } from "../../theme"
import { formatCurrency } from "../../utils/format-currency"

interface CardProps extends ViewProps {
    data: CardType
}

export function Card({ data, style, ...props }: CardProps) {
    const formattedCreatedAt = moment(data?.createdAt).format(
        "dddd, D MMM YYYY"
    )

    return (
        <View
            style={[
                styles.container,
                style,
                data.color ? { backgroundColor: data.color } : {},
            ]}
            {...props}
        >
            <View style={styles.cardHeader}>
                <View>
                    <Text style={styles.title}>{data?.title}</Text>
                    <Text style={styles.subtitle}>{formattedCreatedAt}</Text>
                </View>

                <View>
                    <Feather
                        name="more-horizontal"
                        color={THEME.COLORS.TEXT}
                        size={THEME.FONT_SIZE.LG}
                    />
                </View>
            </View>

            <View style={styles.cardBody}>
                <View>
                    <Text style={styles.balance}>
                        {formatCurrency(data?.budgetValue)}
                    </Text>
                    <Text style={styles.subtitle}>{data?.secondary}</Text>
                </View>

                {data.flag && <Image style={styles.logo} source={data.flag} />}
                <Image style={styles.ellipse} source={ellipse} />
                <Image style={styles.cardVector} source={cardVector} />
            </View>
        </View>
    )
}
