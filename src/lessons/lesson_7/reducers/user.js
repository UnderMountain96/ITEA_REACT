import {
    GET_USER
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
        case GET_USER:
            return {
                ...state,
                data: {...action.payload}
            };
        default:
            return state;
    }
};

export default reducer;
