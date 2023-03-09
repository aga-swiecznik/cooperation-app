import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

// TODO protect all product queries with check if ctx.user.id === product.action.user.id

export const deleteProduct = protectedProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.prisma.product.delete({
      where: {
        id: input.id,
      },
    });

    return await ctx.prisma.product.findMany({
      where: { actionId: product.actionId },
    });
  });
