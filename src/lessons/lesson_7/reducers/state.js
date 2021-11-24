import {
    SET_LOADING, SET_LOADED, SET_ERROR
} from "../constants";


const initState = {
    loading: false,
    error: ""
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...action.payload
            };
        case SET_LOADED:
            return {
                ...action.payload
            };
        case SET_ERROR:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default reducer;
