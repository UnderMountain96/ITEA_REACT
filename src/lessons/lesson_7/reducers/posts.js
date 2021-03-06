import {
    GET_POSTS,
    LOADING_POSTS,
    LOADED_POSTS,
    ERROR_POSTS,
    CLEAR_POSTS
} from "@lessons/lesson_7/constants";


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
        case GET_POSTS:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };
        case CLEAR_POSTS:
            return {
                ...state,
                data: [],
            };
        case LOADING_POSTS:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: false,
                    loading: true
                }
            });
        case LOADED_POSTS:
            return ({
                ...state,
                state: {
                    ...state.state,
                    loaded: true,
                    loading: false
                }
            });
        case ERROR_POSTS:
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
