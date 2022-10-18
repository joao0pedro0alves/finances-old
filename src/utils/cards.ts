import { uniqueId } from "lodash"
import { Card } from "../@types"
import { CARDS_CONFIG } from "../constants/cards-config"

export const cards: Card[] = [
    {
        id: uniqueId(),
        budgetValue: 2500,
        createdAt: new Date(),
        title: "PayPal",
        secondary: "Orçamento outubro",
        color: CARDS_CONFIG.PAYPAL.COLOR,
        flag: CARDS_CONFIG.PAYPAL.FLAG
    },
    {
        id: uniqueId(),
        budgetValue: 195.50,
        createdAt: new Date('2022-12-01'),
        title: "Nubank",
        secondary: "Orçamento outubro",
        color: CARDS_CONFIG.NUBANK.COLOR,
        flag: CARDS_CONFIG.NUBANK.FLAG
    },
]
