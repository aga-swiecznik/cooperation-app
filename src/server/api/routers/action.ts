import { createTRPCRouter } from "~/server/api/trpc";
import { saveAction } from "~/server/api/controllers/action/save";
import { getAllActions } from "~/server/api/controllers/action/all";
import { getAction } from "~/server/api/controllers/action/get";

export const actionRouter = createTRPCRouter({
  save: saveAction,
  get: getAction,
  getAll: getAllActions,
});
