import Router from "koa-router";

import {
    loginAction
} from "../../actions/auth";

const router = new Router();
router.post("/login", loginAction );

export default router;
