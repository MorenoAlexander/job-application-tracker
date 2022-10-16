// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { applicationsRouter } from "./applications";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  applications: applicationsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
