import { BUY_FANTA } from "./FantaTypes"

export const buyFanta = (number = 1) => {
    return {
        type: BUY_FANTA,
        payload: number
    }
}