import { createTRPCRouter } from "~/server/api/trpc";
import { getDashboardActions } from "~/server/api/controllers/dashboard/dashboard";

export const dashboardRouter = createTRPCRouter({
  actions: getDashboardActions,
});
