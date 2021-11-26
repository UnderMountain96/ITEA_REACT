import {
    LOADING_POST, LOADED_POST, ERROR_POST, GET_POST
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
        case GET_POST:
            return {
                ...state,
                data: action.payload
            };
        case LOADING_POST:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: false,
                    loading: true
                }
            });
        case LOADED_POST:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: true,
                    loading: false
                }
            });
        case ERROR_POST:
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
