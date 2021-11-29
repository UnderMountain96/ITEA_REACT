import React     from "react";
import {useIntl} from "react-intl";


export const Home = () => {
    const intl = useIntl();
    return (
        <>
            <h1>{intl.formatMessage({id: "home"})}</h1>
            <p>
                {intl.formatMessage({id: "home.lorem"})}
            </p>
        </>
    );
};
