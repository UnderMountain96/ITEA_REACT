import {createStore, applyMiddleware, compose} from "redux";
import thunk                                   from "redux-thunk";
import reducer                                 from "@lessons/lesson_7/reducers";
import {promise}                               from "@lessons/lesson_7/redux/middlewares/promise";


const middlewares = applyMiddleware(
    thunk,
    promise,
);

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


let store = createStore(
    reducer,
    composeEnhancers(middlewares)
);


export default store;
