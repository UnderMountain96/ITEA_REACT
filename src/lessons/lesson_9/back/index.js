import dotenv from "dotenv";

dotenv.config();

const {APP_PORT} = process.env;

import "@babel/register";
import "babel-polyfill";
import app from "./app.js";

app.listen(APP_PORT);
