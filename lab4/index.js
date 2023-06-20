const redux = require("redux");
const reduxLogger = require("redux-logger");
console.log(typeof redux);
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
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

// multiple state
const initalCokeState = { numberOfCokes: 10 };
const initalFantaState = { numberOfFantas: 20 };
// sperate reducer
const cokeReducer = (state = initalCokeState, action) => {
    //console.log("reducer process:",action.type, ",", action.info)
    switch (action.type) {
        case BUY_COKE:
            return { ...state, numberOfCokes: state.numberOfCokes - 1 };
        default:
            return state;
    }
};

const fantaReducer = (state = initalFantaState, action) => {
    //console.log("reducer process:",action.type, ",", action.info)
    switch (action.type) {
        case BUY_FANTA:
            return { ...state, numberOfFantas: state.numberOfFantas - 1 };
        default:
            return state;
    }
};
const rootReducer = combineReducers({ coke: cokeReducer, fanta: fantaReducer });
// store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state=", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("store updated as:", store.getState());
});
console.log("buy 4 cokes");
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buyCoke());
console.log("buy 3 fantas");
store.dispatch(buyFanta());
store.dispatch(buyFanta());
store.dispatch(buyFanta());
unsubscribe();
