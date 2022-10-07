import { View, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import bgWaves from "../../../assets/app/bg-waves.png"
import { Card } from "../../components/Card"

import { styles } from "./styles"

export function Cards() {
    return (
        <SafeAreaView style={styles.overlay}>
            <ImageBackground
                source={bgWaves}
                defaultSource={bgWaves}
                style={styles.overlay}
            >
                
                <View style={styles.container}>
                    <View style={styles.cards}>
                        <Card style={styles.card}/>
                        <Card style={styles.card}/>
                        <Card style={styles.card}/>
                    </View>
                </View>
                
            </ImageBackground>
        </SafeAreaView>
    )
}
