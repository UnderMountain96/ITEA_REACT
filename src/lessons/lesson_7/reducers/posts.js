import {
    GET_POSTS
} from "../constants";


const initState = {
    data: [],
    limit: 25,
    start: 0
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                start: state.start + action.payload.length,
                data: [...state.data, ...action.payload]
            };
        default:
            return state;
    }
};

export default reducer;
