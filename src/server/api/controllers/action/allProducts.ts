import { type PrismaClient } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

export const getAllProductsFn = (actionId: string, prisma: PrismaClient) =>
  prisma.product.findMany({
    where: { actionId: actionId },
  });

export const getAllProducts = protectedProcedure
  .input(
    z.object({
      actionId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    return await getAllProductsFn(input.actionId, ctx.prisma);
  });
