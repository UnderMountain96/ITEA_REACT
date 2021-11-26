import ResponseService from "../../services/ResponseService";
import AuthService from "../../services/AuthService";
import validator from "email-validator";


import { authMessages } from "../../messages";

export const loginAction = async ctx => {

    let { email, password } = ctx.request.body;

    if( !email ){
        ResponseService.error( ctx, authMessages.email_required );
        return;
    }
    email = email.trim().toLowerCase();

    if( !validator.validate(email) ){
        ResponseService.error( ctx, authMessages.email_failed );
        return;
    }

    if( !password ){
        ResponseService.error( ctx, authMessages.password_required );
        return;
    }

    try {
        let account = await AuthService.login( email, password );

        console.log("acc", account );
        if( account ){
            await AuthService.refreshToken( ctx, account );
            ResponseService.success( ctx, account );
            return;
        } else {
            ResponseService.error( ctx, authMessages.user_not_found );
            return;
        }


    } catch (error) {
        ResponseService.error( ctx, {
            message: authMessages.login_error,
            error
        });
        return;
    }
};
