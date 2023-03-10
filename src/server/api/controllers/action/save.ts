import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const saveAction = protectedProcedure
  .input(
    z.object({
      name: z.string(),
      startDate: z.date().min(new Date()),
      orderDate: z.date().min(new Date()),
      collectDate: z.date().min(new Date()),
      payDate: z.date().min(new Date()),
      description: z.string().min(1),
      image: z.string().nullable(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    try {
      const result = await ctx.prisma.action.create({
        data: {
          name: input.name,
          startDate: input.startDate,
          orderDate: input.orderDate,
          collectDate: input.collectDate,
          payDate: input.payDate,
          description: input.description,
          image: input.image,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
      return result.id;
    } catch (error) {
      console.log(error);
    }
  });
