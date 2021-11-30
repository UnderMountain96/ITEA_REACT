import {
    AUTHENTICATED, LANG, SESSION, USERNAME
}                  from "../constants";
import {loadState} from "@lessons/lesson_6/helpers/localStorage";
import config      from "@lessons/lesson_9/config";


const initState = {
    isAuthenticated: !!loadState(SESSION),
    session: loadState(SESSION) || "",
    username: loadState(USERNAME) || "",
    lang: loadState(LANG) || config.defaultLang,
    defaultLang: config.defaultLang
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload.auth,
                session: action.payload.session,
                username: action.payload.username,
            };
        case LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
