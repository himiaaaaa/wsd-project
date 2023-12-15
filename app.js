import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello World!"));

export default app;