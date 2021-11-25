import {PROMISE} from "../../constants";

export const promise = ({dispatch}) => next => action => {
    console.log(action.type);
    if (action.type === PROMISE) {
        const [START_ACTION, SUCCESS_ACTION, ERROR_ACTION, GET_DATA] = action.actions;
        dispatch({type: START_ACTION});
        action.promise
            .then(res => res.json())
            .then(res => {
                dispatch({type: SUCCESS_ACTION});
                dispatch({type: GET_DATA, payload: res});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: ERROR_ACTION, payload: err});
            });
    }

    return next(action);
};
