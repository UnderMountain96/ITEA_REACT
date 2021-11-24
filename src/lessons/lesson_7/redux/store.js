import {createStore, applyMiddleware, compose} from "redux";
import thunk                                   from "redux-thunk";
import reducer                                 from "../reducers";


const middlewares = applyMiddleware(
    thunk,
);

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


let store = createStore(
    reducer,
    composeEnhancers(middlewares)
);


export default store;
