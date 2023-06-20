import { BUY_COKE } from "./CokeTypes";

const initialState = { numberOfCokes: 10 };

const cokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COKE:
            return { ...state, numberOfCokes: state.numberOfCokes - 1 };
        default:
            return state;
    }
};

export default cokeReducer;
