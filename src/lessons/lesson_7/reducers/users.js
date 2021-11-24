import {
    GET_USERS
} from "../constants";


const initState = {
    data: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;
