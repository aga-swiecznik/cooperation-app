import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const dashboardRouter = createTRPCRouter({
  hello: protectedProcedure.query(async ({ ctx }) => {
    return {
      userActions: await ctx.prisma.action.findMany(),
      toCollectActions: await ctx.prisma.action.findMany(),
      helpingActions: await ctx.prisma.action.findMany(),
      endingActions: await ctx.prisma.action.findMany(),
    };
  }),
});
