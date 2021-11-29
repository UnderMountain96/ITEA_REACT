import {AUTHENTICATED, LANG} from "../constants";


export const authenticated = (auth) => (
    {
        type: AUTHENTICATED,
        payload: auth
    }
);

export const changeLang = (lang) => (
    {
        type: LANG,
        payload: lang
    }
);
