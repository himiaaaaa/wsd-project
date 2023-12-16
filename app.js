import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as countController from "./countController.js"

const app = new Hono();

app.get("/feedbacks/1", countController.getCount_1);
app.post("/feedbacks/1", countController.increaseCount_1);
app.get("/feedbacks/2", countController.getCount_2);
app.post("/feedbacks/2", countController.increaseCount_2);
app.get("/feedbacks/3", countController.getCount_3);
app.post("/feedbacks/3", countController.increaseCount_3);

export default app;