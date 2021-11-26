import Koa       from "koa";
import koaBody   from "koa-body";
import koaCors   from "@koa/cors";
import koaStatic from "koa-static";

import IndexRoutes from "./routes";

const app = new Koa();

const headers = [
    "authorization",
    "accept",
    "content-type",
    "axios-type"
];

app.use(koaBody());
app.use(koaCors({
    exposeHeaders: headers,
    allowHeaders: headers,
    credentials: true,
}));
app.use(koaStatic("./storage"));
app.use(IndexRoutes.routes());

export default app;
