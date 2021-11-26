import validator from "email-validator";

import ResponseService from "../../services/ResponseService";
import AuthService from "../../services/AuthService";

import { authMessages } from "../../messages";

export const registrationAction = async ctx => {
    let { name, email, password } = ctx.request.body;
    if( !email ){
        ResponseService.error( ctx, authMessages.email_required );
        return;
    }
    email = email.trim().toLowerCase();

    if( !validator.validate(email) ){
        ResponseService.error( ctx, authMessages.email_failed );
        return;
    }

    if( !name ){
        ResponseService.error( ctx, authMessages.name_required );
        return;
    }

    if( !password ){
        ResponseService.error( ctx, authMessages.password_required );
        return;
    }

    let user = await AuthService.getByEmail( email );
    if( user ){
        ResponseService.error( ctx, authMessages.email_taken );
        return;
    } 

    let account = null;
    try {
        account = await AuthService.register( email, password, name );
        await AuthService.refreshToken( ctx, account );
        ResponseService.success( ctx, account );
    } catch (error) {
        ResponseService.error( ctx, authMessages.registration_error );
        return;
    }


};