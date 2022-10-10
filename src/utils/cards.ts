import { uniqueId } from "lodash"
import { Card } from "../@types"
import { CARDS_CONFIG } from "../constants/cards-config"

export const cards: Card[] = [
    {
        id: uniqueId(),
        budgetValue: 2004,
        createdAt: new Date(),
        title: "Balance",
        secondary: "up by 2% from last month",
        color: CARDS_CONFIG.PAYPAL.COLOR,
        flag: CARDS_CONFIG.PAYPAL.LOGO
    },
    {
        id: uniqueId(),
        budgetValue: 4.50,
        createdAt: new Date('2022-12-01'),
        title: "Nubank",
        secondary: "up by 10% from last month",
        color: CARDS_CONFIG.NUBANK.COLOR,
        flag: CARDS_CONFIG.NUBANK.LOGO
    },
]
