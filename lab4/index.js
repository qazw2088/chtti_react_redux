const redux = require("redux");
console.log(typeof redux);
const createStore = redux.createStore;

// action type
const BUY_COKE = "BUY_COKE";
const BUY_FANTA = "BUT_FANTA";
// action creator
function buyCoke() {
    return {
        type: BUY_COKE,
        info: "my first redux action",
    };
}
function buyFanta() {
    return {
        type: BUY_FANTA,
        info: "another redux action",
    };
}

// state
const initialState = { numberOfCokes: 10 };
// reducer
const reducer = (state = initialState, action) => {
    //console.log("reducer process:",action.type, ",", action.info)
    switch (action.type) {
        case BUY_COKE:
            return { ...state, numberOfCokes: state.numberOfCokes - 1 };
        default:
            return state;
    }
};
// store
const store = createStore(reducer);
console.log("initial state=", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("store updated as:", store.getState());
});
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buyCoke());
unsubscribe();
