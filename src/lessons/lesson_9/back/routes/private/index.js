import Router from "koa-router";
import { exampleFunc } from "../../actions/example";
import { localizedData } from "../../actions/data/localizedData";

const router = new Router();

router.get("/example", exampleFunc );

router.get("/:locale/data", localizedData );

export default router;