import {
    ADD_NOTIFICATION, REMOVE_NOTIFICATION
} from "../constants";

const initState = {
    data: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                data: state.data.filter(popup => popup.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
