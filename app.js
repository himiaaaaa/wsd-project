import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as countController from "./controller/countController.js"
import * as courseController from "./controller/courseController.js"

const app = new Hono();

app.get("/", countController.listRating)
app.post("/courses", courseController.addCourse)
app.get("/courses", courseController.listCourses)

app.get("/courses/:courseId", courseController.listCourse)
app.post("/courses/:courseId/delete", courseController.deleteCourse)

app.get("/feedbacks/1", (c) => countController.getCount(c,1));
app.post("/feedbacks/1", (c) => countController.increaseCount(c,1));

app.get("/feedbacks/2", (c) => countController.getCount(c,2));
app.post("/feedbacks/2", (c) => countController.increaseCount(c,2));

app.get("/feedbacks/3", (c) => countController.getCount(c,3));
app.post("/feedbacks/3", (c) => countController.increaseCount(c,3));

app.post("/feedbacks/4", (c) => countController.increaseCount(c,4));

app.post("/feedbacks/5", (c) => countController.increaseCount(c,5));

export default app;