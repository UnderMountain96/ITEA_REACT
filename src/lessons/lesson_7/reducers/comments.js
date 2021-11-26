import {
    LOADING_COMMENTS, LOADED_COMMENTS, ERROR_COMMENTS, GET_COMMENTS
} from "../constants";


const initState = {
    data: [],
    state: {
        loaded: false,
        loading: false,
        errors: []
    }
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                data: [...action.payload]
            };
        case LOADING_COMMENTS:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: false,
                    loading: true
                }
            });
        case LOADED_COMMENTS:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: true,
                    loading: false
                }
            });
        case ERROR_COMMENTS:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: false,
                    loading: false,
                    errors: [...state.errors, action.payload]
                }
            });
        default:
            return state;
    }
};

export default reducer;
