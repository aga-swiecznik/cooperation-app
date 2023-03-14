import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getUser = protectedProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(
    async ({ ctx, input }) =>
      await ctx.prisma.user.findFirst({
        where: { id: input.id },
      })
  );
