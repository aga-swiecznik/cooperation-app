import { protectedProcedure } from "~/server/api/trpc";

export const getDashboardActions = protectedProcedure.query(async ({ ctx }) => {
  return {
    userActions: await ctx.prisma.action.findMany(),
    toCollectActions: await ctx.prisma.action.findMany(),
    helpingActions: await ctx.prisma.action.findMany(),
    endingActions: await ctx.prisma.action.findMany(),
  };
});
