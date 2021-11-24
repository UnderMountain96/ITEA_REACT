import {
    SET_LOADING,
    SET_LOADED,
    SET_ERROR
} from "../constants";


export const setLoading = () => (
    {
        type: SET_LOADING,
        payload: {
            loading: true,
            error: ""
        }
    }
);

export const setLoaded = () => (
    {
        type: SET_LOADED,
        payload: {
            loading: false,
            error: ""
        }
    }
);

export const setError = (error) => (
    {
        type: SET_ERROR,
        payload: {
            loading: true,
            error: error
        }
    }
);
