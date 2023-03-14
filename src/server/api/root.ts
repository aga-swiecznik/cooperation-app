import { createTRPCRouter } from "~/server/api/trpc";
import { dashboardRouter } from "~/server/api/routers/dashboard";
import { actionRouter } from "~/server/api/routers/action";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dashboard: dashboardRouter,
  action: actionRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
