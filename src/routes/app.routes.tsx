import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"

import { THEME } from "../theme"

import { TabBarIcon } from "../components/TabBarIcon"

import { Transactions } from "../screens/Transactions"
import { Notifications } from "../screens/Notifications"
import { StackRoutes } from "./stack.routes"

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="homeStack"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopColor: "transparent",
                    backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
                    shadowColor: "rgba(0, 0, 0, 0.07)",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowRadius: 30,
                    shadowOpacity: 0.07,
                    elevation: 30,
                },
            }}
        >
            <Screen
                name="homeStack"
                component={StackRoutes}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<MaterialIcons name="home-filled" />}
                        />
                    ),
                }}
            />
            <Screen
                name="transactions"
                component={Transactions}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Ionicons name="ios-stats-chart" />}
                        />
                    ),
                }}
            />
            <Screen
                name="cards"
                component={Notifications}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Ionicons name="ios-card" />}
                        />
                    ),
                }}
            />
            <Screen
                name="profile"
                component={Notifications}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Ionicons name="ios-person" />}
                        />
                    ),
                }}
            />
        </Navigator>
    )
}
