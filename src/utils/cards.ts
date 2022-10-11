import { uniqueId } from "lodash"
import { Card } from "../@types"
import { CARDS_CONFIG } from "../constants/cards-config"

export const cards: Card[] = [
    {
        id: uniqueId(),
        budgetValue: 2004,
        createdAt: new Date(),
        title: "Banco do Brasil",
        secondary: "up by 2% from last month",
        color: CARDS_CONFIG.BB.COLOR,
    },
    {
        id: uniqueId(),
        budgetValue: 450,
        createdAt: new Date('2022-12-01'),
        title: "Nubank",
        secondary: "up by 10% from last month",
        color: CARDS_CONFIG.NUBANK.COLOR,
        flag: CARDS_CONFIG.NUBANK.FLAG
    },
]
