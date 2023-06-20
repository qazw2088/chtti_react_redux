import { BUY_FANTA } from "./FantaTypes"

const initialState = { numberOfFantas: 10 }
const fantaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_FANTA:
            return { ...state, numberOfFantas: state.numberOfFantas - 1 }
        default:
            return state
    }
}
export default fantaReducer