import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getAction = protectedProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(
    async ({ ctx, input }) =>
      await ctx.prisma.action.findFirst({
        where: { id: input.id },
        include: {
          products: true,
          user: true,
        },
      })
  );
