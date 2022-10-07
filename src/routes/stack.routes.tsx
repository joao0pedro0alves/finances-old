import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { Notifications } from "../screens/Notifications"

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name="home" 
                component={Home}
            />
            <Screen
                name="notifications"
                component={Notifications}
                options={{
                    animation: "slide_from_right",
                }}
            />
        </Navigator>
    )
}
