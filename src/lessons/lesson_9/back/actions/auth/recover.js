import validator from "email-validator";

import ResponseService from "../../services/ResponseService";
import AuthService from "../../services/AuthService";

import moment from "moment";
import {authMessages} from "../../messages";

// import UserModel from '../../models/User';
// import HashModel from '../../models/RecoverHashes';

export const recoverAction = async (ctx) => {
    let {email} = ctx.request.body;

    if (!email) {
        ResponseService.error(ctx, authMessages.email_required);
        return;
    }
    email = email.trim().toLowerCase();

    if (!validator.validate(email)) {
        ResponseService.error(ctx, authMessages.email_failed);
        return;
    }

    try {
        const hash = await AuthService.reset(email);

        ResponseService.success(ctx, hash);
    } catch (error) {
        ResponseService.error(ctx, {
            message: authMessages.login_error,
            error,
        });
        return;
    }
};

export const recoverPassword = async (ctx) => {
    try {
        const hash = ctx.request.body.hash;
        const password = ctx.request.body.password;

        const dbhash = await HashModel.findOne({hash: hash});
        if (!dbhash) {
            ResponseService.success(ctx, {
                message: "Этот код уже истек",
                valid: false,
            });
            return;
        }

        const isExpired = moment(dbhash.created_at).add(10, "minutes") < moment(new Date());
        if (isExpired) {
            ResponseService.success(ctx, {
                message: "Этот код уже истек",
                valid: false,
            });
            return;
        }

        const user = await UserModel.findOne(dbhash.user);

        if (user) {
            user.hash = AuthService.generateHash(password);
            await AuthService.refreshToken(ctx, user);
            await user.save();
        }

        await HashModel.deleteOne({_id: dbhash._id});

        ResponseService.success(ctx, user);
    } catch (error) {
        ResponseService.error(ctx, {
            error,
        });
        return;
    }
};
