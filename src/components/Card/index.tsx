import { View, ViewProps, Text, Image } from "react-native"
import { Feather } from "@expo/vector-icons"

import paypal from "../../../assets/app/paypal-logo.png"
import ellipse from "../../../assets/app/ellipse.png"
import cardVector from "../../../assets/app/card-vector.png"

import { styles } from "./styles"
import { THEME } from "../../theme"

interface Card extends ViewProps {

}

export function Card({style, ...props}: ViewProps) {
    return (
        <View style={[styles.container, style]} {...props}>
            <View style={styles.cardHeader}>
                <View>
                    <Text style={styles.title}>Balance</Text>
                    <Text style={styles.subtitle}>Today, 08 Sept 2019</Text>
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
                    <Text style={styles.balance}>$ 6,240.00</Text>
                    <Text style={styles.subtitle}>
                        up by 2% from last month
                    </Text>
                </View>

                <Image style={styles.paypal} source={paypal} />
                <Image style={styles.ellipse} source={ellipse} />
                <Image style={styles.cardVector} source={cardVector} />
            </View>
        </View>
    )
}
