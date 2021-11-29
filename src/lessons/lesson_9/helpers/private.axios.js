import axios from "axios";

import config      from "../config";
import {loadState} from "@lessons/lesson_6/helpers/localStorage";
import {SESSION}   from "@lessons/lesson_9/constants";

const instance = axios.create({
    baseURL: config.api_endpoint,
    headers: {
        "Content-Type": "application/json",
        common : {
            "authorization": loadState(SESSION) || ""
        }
    },
});

instance.interceptors.response
    .use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response && error.response.status === 401) {
                console.log("[Intercept]: Req err", error, error.response);
            }

            return Promise.reject(error);
        });

export const configurateToken = (token) => {
    instance.defaults.headers.common["authorization"] = token;
    console.log("[Token setted]", token);
};


export default instance;
