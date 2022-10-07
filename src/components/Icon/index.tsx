import { useMemo } from "react"
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from "@expo/vector-icons"

import { IconType } from "../../@types"

interface IconProps {
    type: IconType
    name: string
    size: number
    color: string
}

export function Icon({ name, type, size, color }: IconProps) {
    const displayIcon = useMemo(() => {
        switch (type) {
            case "AntDesign":
                // @ts-ignore
                return <AntDesign name={name} size={size} color={color} />
            case "Entypo":
                // @ts-ignore
                return <Entypo name={name} size={size} color={color} />
            case "EvilIcons":
                // @ts-ignore
                return <EvilIcons name={name} size={size} color={color} />
            case "Feather":
                // @ts-ignore
                return <Feather name={name} size={size} color={color} />
            case "FontAwesome":
                // @ts-ignore
                return <FontAwesome name={name} size={size} color={color} />
            case "FontAwesome5":
                // @ts-ignore
                return <FontAwesome5 name={name} size={size} color={color} />
            case "Fontisto":
                // @ts-ignore
                return <Fontisto name={name} size={size} color={color} />
            case "Foundation":
                // @ts-ignore
                return <Foundation name={name} size={size} color={color} />
            case "Ionicons":
                // @ts-ignore
                return <Ionicons name={name} size={size} color={color} />
            case "MaterialCommunityIcons":
                // @ts-ignore
                return <MaterialCommunityIcons name={name} size={size} color={color} />
            case "MaterialIcons":
                // @ts-ignore
                return <MaterialIcons name={name} size={size} color={color} />
            case "Octicons":
                // @ts-ignore
                return <Octicons name={name} size={size} color={color} />
            case "SimpleLineIcons":
                // @ts-ignore
                return <SimpleLineIcons name={name} size={size} color={color} />
            case "Zocial":
                // @ts-ignore
                return <Zocial name={name} size={size} color={color} />
            default: 
                return null
        }
    }, [name, size, color])

    return <>{displayIcon}</>
}
