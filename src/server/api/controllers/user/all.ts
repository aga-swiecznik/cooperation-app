import { type PrismaClient } from "@prisma/client";
import { protectedProcedure } from "~/server/api/trpc";

export const getAllUsersFn = (prisma: PrismaClient) => prisma.user.findMany();

export const getAllUsers = protectedProcedure.query(async ({ ctx }) => {
  return await getAllUsersFn(ctx.prisma);
});
