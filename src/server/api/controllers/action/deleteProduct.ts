import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";
import { getAllProductsFn } from "./allProducts";

// TODO protect all product queries with check if ctx.user.id === product.action.user.id
// TODO check if there are some orders of this product
// TODO add limit of order

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

    return await getAllProductsFn(product.actionId, ctx.prisma);
  });
