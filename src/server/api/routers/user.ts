import { createTRPCRouter } from "~/server/api/trpc";
import { getAllUsers } from "../controllers/user/all";
import { changeRole } from "../controllers/user/changeRole";
import { getUser } from "../controllers/user/get";

export const userRouter = createTRPCRouter({
  get: getUser,
  getAll: getAllUsers,
  changeRole: changeRole,
});
