import { cloneElement } from "react"
import { THEME } from "../../theme"

interface TabBarIconProps {
    Icon: JSX.Element
    focused: boolean
    color: string
    size: number
}

export function TabBarIcon({ Icon, size, focused }: TabBarIconProps) {
    return cloneElement(Icon, {
        size,
        color: focused ? THEME.COLORS.PRIMARY : THEME.COLORS.DISABLED,
    })
}
