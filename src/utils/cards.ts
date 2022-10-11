import { uniqueId } from "lodash"
import { Card } from "../@types"
import { CARDS_CONFIG } from "../constants/cards-config"

export const cards: Card[] = [
    {
        id: uniqueId(),
        budgetValue: 700,
        createdAt: new Date(),
        title: "Banco do Brasil",
        secondary: "Orçamento outubro",
        color: CARDS_CONFIG.BB.COLOR,
    },
    {
        id: uniqueId(),
        budgetValue: 450,
        createdAt: new Date('2022-12-01'),
        title: "Nubank",
        secondary: "Orçamento outubro",
        color: CARDS_CONFIG.NUBANK.COLOR,
        flag: CARDS_CONFIG.NUBANK.FLAG
    },
]
