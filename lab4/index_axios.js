const redux = require("redux");
const ReduxLogger = require("redux-logger");
const logger = ReduxLogger.createLogger();
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
// initial state
const initState = {
    loading: false,
    users: [],
    error: "",
};
// action
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
// sync action creator
const fetchUserRequest = () => {
    return { type: FETCH_USER_REQUEST };
};
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
};
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    };
};

// reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
            return { loading: false, users: action.payload, error: "" };
        case FETCH_USER_FAILURE:
            return { loading: false, users: [], error: action.payload };
        default:
            return state;
    }
};

const store = redux.createStore(
    reducer,
    redux.applyMiddleware(thunkMiddleware, logger)
);
console.log("init state=", store.getState());
// // initial a http request
// store.dispatch(fetchUserRequest())
// // communicate with server, and success get users
// store.dispatch(fetchUserSuccess(['Mark','Jean','d']))
// // initial a http request
// store.dispatch(fetchUserRequest())
// // communicate with server, and fail to get users, get some error messages
// store.dispatch(fetchUserFailure("wrong request parameter, id=xxxx not found"))
