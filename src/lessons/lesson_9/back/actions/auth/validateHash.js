import ResponseService from "../../services/ResponseService";
import { authMessages } from "../../messages";
// import HashModel from '../../models/RecoverHashes';

export const validateHash = async ctx => {
    try {
    // const hash = ctx.request.body.hash;
    // const dbhash = await HashModel.findOne({ hash: hash });
    // if( dbhash == null ){
    //     ResponseService.error( ctx, {
    //         message: authMessages.hash_is_not_correct
    //     });
    //     return;
    // }

    // const isExpired = dbhash.isExpired();
    // if( isExpired ){
    //     ResponseService.error( ctx, {
    //         message: authMessages.hash_is_expired,
    //         valid: false
    //     });
    //     return;
    // }

    ResponseService.success( ctx, {
        valid: true
    });

    } catch (error) {
        ResponseService.error( ctx, {
            message: authMessages.login_error,
            error
        });
        return;
    }

};