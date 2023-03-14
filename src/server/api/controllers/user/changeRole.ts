import { z } from "zod";
import { Role } from "~/enums/Role";
import { protectedProcedure } from "~/server/api/trpc";
import { getAllUsersFn } from "./all";

export const changeRole = protectedProcedure
  .input(
    z.object({
      id: z.string(),
      role: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    try {
      const user = await ctx.prisma.user.findFirst({
        where: { id: input.id },
      });

      if (
        user &&
        ((user.role === Role.unauthorized && input.role === Role.user) ||
          (user.role === Role.user && input.role === Role.admin) ||
          (user.role === Role.user && input.role === Role.unauthorized))
      ) {
        await ctx.prisma.user.update({
          where: { id: input.id },
          data: {
            role: input.role,
          },
        });
      }
      return await getAllUsersFn(ctx.prisma);
    } catch (error) {
      console.log(error);
    }
  });
