import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getAllProducts = protectedProcedure
  .input(
    z.object({
      actionId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    return await ctx.prisma.product.findMany({
      where: { actionId: input.actionId },
    });
  });
