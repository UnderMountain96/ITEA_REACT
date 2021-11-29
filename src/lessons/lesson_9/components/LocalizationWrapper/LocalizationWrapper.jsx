import React                     from "react";
import {IntlProvider}            from "react-intl";
import {useSelector}             from "react-redux";

import {getDefaultLang, getLang} from "@lessons/lesson_9/selectors";
import locale                    from "@lessons/lesson_9/locale/locale";


export const LocalizationWrapper = ({children}) => {
    const lang = useSelector(getLang);
    const defaultLang = useSelector(getDefaultLang);

    return (
        <IntlProvider messages={locale[lang]} locale={lang} defaultLocale={defaultLang}>
            {children}
        </IntlProvider>
    );
};
