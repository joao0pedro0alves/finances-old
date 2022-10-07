export type IconType =
    | "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "FontAwesome"
    | "FontAwesome5"
    | "Fontisto"
    | "Foundation"
    | "Ionicons"
    | "MaterialCommunityIcons"
    | "MaterialIcons"
    | "Octicons"
    | "SimpleLineIcons"
    | "Zocial"

export interface Transaction {
    id: string
    description: string
    cost: number
    issuedAt: Date
    type: string
    icon: {
        name: string
        type: IconType
    }
}
