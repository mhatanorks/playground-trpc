import express from "express";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

const app = express();
const PORT = 5050;

// app.get("/", (req, res) => res.send("hello"));

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

interface Todo {
  id: string;
  content: string;
}
const todoList: Todo[] = [
  {
    id: "1",
    content: "散歩",
  },
  {
    id: "2",
    content: "プログラミング",
  },
];

const appRouter = router({
  test: publicProcedure.query(async () => {
    return "test trpc";
  }),
  getTodos: publicProcedure.query(() => {
    return todoList;
  }),
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(PORT);
