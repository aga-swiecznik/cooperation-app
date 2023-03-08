import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const saveProduct = protectedProcedure
  .input(
    z.object({
      name: z.string().min(1),
      unit: z.string().min(1),
      price: z.number().positive(),
      description: z.string(),
      actionId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const result = await ctx.prisma.product.create({
      data: {
        name: input.name,
        unit: input.unit,
        price: input.price,
        description: input.description,
        action: { connect: { id: input.actionId } },
      },
    });
    return result.id;
  });
