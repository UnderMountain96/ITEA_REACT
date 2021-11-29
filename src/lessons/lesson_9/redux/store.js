import {createStore, applyMiddleware, compose} from "redux";
import thunk                                   from "redux-thunk";
import reducer                                 from "@lessons/lesson_9/reducers";
import {promise}                               from "@lessons/lesson_9/redux/middlewares/promise";
import {saveState}      from "@lessons/lesson_6/helpers/localStorage";
import {LANG, SESSION} from "@lessons/lesson_9/constants";


const middlewares = applyMiddleware(
    thunk,
    promise,
);

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


let store = createStore(
    reducer,
    composeEnhancers(middlewares)
);

store.subscribe(() => {
    const state = store.getState();
    saveState(SESSION, state.common.session);
    saveState(LANG, state.common.lang);
});

export default store;
