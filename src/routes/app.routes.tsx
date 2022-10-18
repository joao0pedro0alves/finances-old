import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"

import { TabBarIcon } from "../components/TabBarIcon"

import { StackRoutes } from "./stack.routes"
import { Transactions } from "../screens/Transactions"
import { Cards } from "../screens/Cards"
import { Profile } from "../screens/Profile"

import { styles } from "./styles"

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="homeStack"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                tabBarStyle: styles.tabBarStyle,
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
                component={Cards}
                options={{
                    headerShown: true,
                    title: 'My Cards',
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
                component={Profile}
                options={{
                    headerShown: true,
                    title: 'Profile',
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
