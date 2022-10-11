import { View, StatusBar, StyleSheet } from "react-native"
import {
    useFonts,
    Inter_200ExtraLight,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
} from "@expo-google-fonts/inter"

import 'moment/locale/pt-br'

import { THEME } from "./src/theme"

import { Loading } from "./src/components/Loading"
import { Routes } from "./src/routes"

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black,
    })

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            
            {fontsLoaded ? <Routes /> : <Loading />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
})
