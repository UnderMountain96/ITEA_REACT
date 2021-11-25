import {
    SET_LOADING, SET_LOADED, SET_ERROR
} from "../constants";


const initState = {
    loaded: false,
    loading: false,
    errors: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return ({
                ...state,
                loaded: false,
                loading: true
            });
        case SET_LOADED:
            return ({
                ...state,
                loaded: true,
                loading: false
            });
        case SET_ERROR:
            return ({
                ...state,
                loaded: false,
                loading: false,
                errors: [...state.errors, action.payload]
            });
        default:
            return state;
    }
};

export default reducer;
