import AuthService from "../services/AuthService";
import ResponseService from "../services/ResponseService";

import { authMessages } from "../messages";

const AuthMiddleware = async ( ctx, next ) => {

    const token = ctx.request.headers[ AuthService.HEADER ];

    if( !token ){
        ResponseService.error( ctx, authMessages.token_required, 401 );
        return;
    }

    let payload = await AuthService.verifyToken( token );
    if( !payload ){
        ResponseService.error( ctx, authMessages.auth_required, 401 );
        return;
    }

    let account = await AuthService.getAccount( token );
    if( !account ){
        ResponseService.error( ctx, authMessages.user_not_found, 401 );
        return;
    }

    await AuthService.refreshToken( ctx, account );

    return next();
};

export default AuthMiddleware;