import { uniqueId } from "lodash"

import { Transaction } from "../@types"

export const transactions: Transaction[] = [
    {
        id: uniqueId(),
        description: "Dropbox Plan",
        type: "Subscription",
        cost: -144.0,
        issuedAt: new Date("2019-09-18"),
        icon: {
            type: "AntDesign",
            name: "dropbox",
        },
    },
    {
        id: uniqueId(),
        description: "Spotify Subscr.",
        type: "Subscription",
        cost: -24.0,
        issuedAt: new Date("2019-09-12"),
        icon: {
            type: "Ionicons",
            name: "musical-notes-sharp",
        },
    },
    {
        id: uniqueId(),
        description: "Youtube Ads.",
        type: "Income",
        cost: 32.0,
        issuedAt: new Date("2019-09-10"),
        icon: {
            type: "FontAwesome5",
            name: "youtube",
        },
    },
    {
        id: uniqueId(),
        description: "Freelance Work",
        type: "Income",
        cost: 421.0,
        issuedAt: new Date("2019-09-06"),
        icon: {
            type: "MaterialIcons",
            name: "work",
        },
    },
    {
        id: uniqueId(),
        description: "ATM Withdrawal",
        type: "Cash Withdraw",
        cost: -32.0,
        issuedAt: new Date("2019-09-10"),
        icon: {
            type: "Ionicons",
            name: "wallet",
        },
    },
    {
        id: uniqueId(),
        description: "KFC Restaurant",
        type: "Food & Drink",
        cost: -14.0,
        issuedAt: new Date("2019-06-10"),
        icon: {
            type: "MaterialIcons",
            name: "fastfood",
        },
    },
    {
        id: uniqueId(),
        description: "Tax on Interest",
        type: "Tax & Bill",
        cost: -1.0,
        issuedAt: new Date("2019-04-10"),
        icon: {
            type: "Ionicons",
            name: "leaf",
        },
    },
]
