import Router from "koa-router";
import AuthMiddleware from "../middlewares/auth";

import AuthRoutes from "./auth";
import PrivateRoutes from "./private";

const router = new Router();

router.use("/api", AuthMiddleware, PrivateRoutes.routes() );
router.use("/auth", AuthRoutes.routes() );

export default router;