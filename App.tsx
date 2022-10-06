import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import {
    useFonts,
    Inter_200ExtraLight,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
} from "@expo-google-fonts/inter"

import { THEME } from "./src/theme"

import { Loading } from "./src/components/Loading"
import { Home } from "./src/screens/Home"

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black,
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            {fontsLoaded ? <Home /> : <Loading />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
})
