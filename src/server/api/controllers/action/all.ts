import { protectedProcedure } from "~/server/api/trpc";

export const getAllActions = protectedProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.action.findMany();
});
