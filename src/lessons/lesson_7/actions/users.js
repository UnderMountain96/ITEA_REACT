import {GET_USERS} from "../constants";


export const getUsers = (data) => (
    {
        type: GET_USERS,
        payload: data
    }
);
